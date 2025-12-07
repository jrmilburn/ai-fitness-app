"use server"

import { prisma } from "@/lib/prisma";
import { getOrCreateCurrentUser } from "../users/getOrCreateCurrentUser";

export async function finishWorkout(workoutId : string) {

    await getOrCreateCurrentUser();

    await prisma.workout.update({
        where: {
            id: workoutId
        },
        data: {
            completed: true
        }
    })

    return { success: true }

}