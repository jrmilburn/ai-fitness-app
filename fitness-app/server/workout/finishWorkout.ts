"use server"

import { prisma } from "@/lib/prisma";

export async function finishWorkout(workoutId : string) {

    const finishedWorkout = await prisma.workout.update({
        where: {
            id: workoutId
        },
        data: {
            completed: true
        }
    })

}