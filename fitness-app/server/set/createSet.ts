"use server"

import type { Prisma } from "@/generated/prisma/client"

import { prisma } from "@/lib/prisma";

export async function createSet(exerciseId : string) {

    const exerciseSets = await prisma.exercise.findUnique({
        where: {
            id: exerciseId
        },
        select: {
            sets: true
        }
    })

    const setIndex = exerciseSets?.sets.length || 0;

    const newSet = await prisma.set.create({
        data: {
            exerciseId: exerciseId,
            setNumber: setIndex + 1
        }
    })

    return newSet

}
