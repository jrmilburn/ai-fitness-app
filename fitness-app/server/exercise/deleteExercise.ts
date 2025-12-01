"use server"

import { prisma } from "@/lib/prisma";

export async function deleteExercise(exerciseId : string) {

    const deletedSets = await prisma.set.deleteMany({
        where: {
            exerciseId: exerciseId
        }
    })

    const deletedExercise = await prisma.exercise.delete({
        where: {
            id: exerciseId
        }
    })

}