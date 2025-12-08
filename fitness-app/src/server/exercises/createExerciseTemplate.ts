"use server";

import { prisma } from "@/lib/prisma";
import type {
  ExerciseType,
  Equipment,
  MuscleGroup,
} from "@prisma/client";
import { getOrCreateCurrentUser } from "@/server/users/getOrCreateCurrentUser";
import { getUserSubscription } from "../subscription/getUserSubscription";
import { redirect } from "next/navigation";

type CreateExerciseTemplateInput = {
  name: string;
  description: string | null;
  exerciseType: ExerciseType;
  equipment: Equipment | null;
  muscleGroup: MuscleGroup | null;
  defaultSets: number | null;
  defaultRepsLower: number | null;
  defaultRepsUpper: number | null;
  defaultRir: number | null;
  timeSeconds: number | null;
};

export async function createExerciseTemplate(
  input: CreateExerciseTemplateInput
) {
  const user = await getOrCreateCurrentUser();
  const subscription = await getUserSubscription();
  if (!subscription.subscriptionActive) {
    redirect("/pricing");
  }

  await prisma.exerciseTemplate.create({
    data: {
      name: input.name,
      description: input.description,
      exerciseType: input.exerciseType,
      equipment: input.equipment,
      muscleGroup: input.muscleGroup,
      defaultSets: input.defaultSets,
      defaultRepsLower: input.defaultRepsLower,
      defaultRepsUpper: input.defaultRepsUpper,
      defaultRir: input.defaultRir,
      timeSeconds: input.timeSeconds,
      userId: user.id,
      sptemplate: false, // user-created templates are never SP
    },
  });

  return { success: true }
}
