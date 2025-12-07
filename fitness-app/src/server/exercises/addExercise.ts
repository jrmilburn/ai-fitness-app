"use server"

import { prisma } from "@/lib/prisma";
import type { ExerciseTemplate } from "@/generated/prisma";

export async function addExercise(workoutId : string, exerciseTemplate : ExerciseTemplate) {

    console.log("ADD EXERCISE", workoutId, exerciseTemplate);

    const existingCount = await prisma.exercise.count({
      where: { workoutId },
    });

    const newExercise = await prisma.$transaction(async (tx) => {
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
}