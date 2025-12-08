"use server"

import { prisma } from "@/lib/prisma";
import type { ExerciseTemplate } from "@prisma/client";
import { getOrCreateCurrentUser } from "../users/getOrCreateCurrentUser";
import { getUserSubscription } from "../subscription/getUserSubscription";
import { redirect } from "next/navigation";

export async function addExercise(workoutId : string, exerciseTemplate : ExerciseTemplate) {

    await getOrCreateCurrentUser();
    const subscription = await getUserSubscription();

    if (!subscription.subscriptionActive) {
      redirect("/pricing");
    }

    const existingCount = await prisma.exercise.count({
      where: { workoutId },
    });

    await prisma.$transaction(async (tx) => {
    // 1. Create the exercise
    const newExercise = await tx.exercise.create({
      data: {
        workoutId,
        order: existingCount + 1,
        exerciseTemplateId: exerciseTemplate.id,
      },
    });

    // 2. Create two sets linked to the new exercise
    await tx.set.createMany({
      data: [
        {
          exerciseId: newExercise.id,
          setNumber: 1,
          completed: false,
          // add your default fields if needed
        },
        {
          exerciseId: newExercise.id,
          setNumber: 2,
          completed: false,
        },
      ],
    });
    })

    return { success: true }
}