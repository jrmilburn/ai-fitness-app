"use server"

import { prisma } from "@/lib/prisma";
import { getOrCreateCurrentUser } from "../users/getOrCreateCurrentUser";

export async function deleteExercise(exerciseId : string) {

    await getOrCreateCurrentUser();

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