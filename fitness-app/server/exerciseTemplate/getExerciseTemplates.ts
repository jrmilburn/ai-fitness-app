"use server"

import { prisma } from "@/lib/prisma";

import { getOrCreateCurrentUser } from "../user/getOrCreateCurrentUser";

export async function getExerciseTemplates() {

    const user = await getOrCreateCurrentUser();

    const exercises = await prisma.exerciseTemplate.findMany({
      where: {
        OR: [
          { userId: user.id },
          { sptemplate: true }
        ]
      }
    });

    return exercises

}