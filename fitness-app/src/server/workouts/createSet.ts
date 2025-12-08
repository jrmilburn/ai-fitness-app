"use server"

import { prisma } from "@/lib/prisma";
import { getOrCreateCurrentUser } from "../users/getOrCreateCurrentUser";
import { getUserSubscription } from "../subscription/getUserSubscription";
import { redirect } from "next/navigation";

export async function createSet(exerciseId : string) {

    await getOrCreateCurrentUser();
    const subscription = await getUserSubscription();

    if (!subscription.subscriptionActive) {
      redirect("/pricing");
    }

    const exerciseSets = await prisma.exercise.findUnique({
        where: {
            id: exerciseId
        },
        select: {
            sets: true,
            exerciseType: true
        }
    })

    const setIndex = exerciseSets?.sets.length || 0;

    await prisma.set.create({
        data: {
            exerciseId: exerciseId,
            setNumber: setIndex + 1,
        }
    })

    return { success: true }

}
