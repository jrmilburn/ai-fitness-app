"use server"

import { prisma } from "@/lib/prisma"

export async function getExerciseTemplates() {

    return await prisma.exerciseTemplate.findMany({

    })

}