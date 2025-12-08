"use server"

import { prisma } from "@/lib/prisma";
import { getOrCreateCurrentUser } from "../users/getOrCreateCurrentUser";
import { getUserSubscription } from "../subscription/getUserSubscription";
import { redirect } from "next/navigation";

export async function deleteExercise(exerciseId : string) {

    await getOrCreateCurrentUser();
    const subscription = await getUserSubscription();

    if (!subscription.subscriptionActive) {
      redirect("/pricing");
    }

    await prisma.set.deleteMany({
        where: {
            exerciseId: exerciseId
        }
    })

    await prisma.exercise.delete({
        where: {
            id: exerciseId
        }
    })

    return { success: true }

}