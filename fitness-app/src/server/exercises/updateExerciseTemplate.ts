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

type UpdateExerciseTemplateInput = {
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

export async function updateExerciseTemplate(
  id: string,
  input: UpdateExerciseTemplateInput
) {
  const user = await getOrCreateCurrentUser();
  const subscription = await getUserSubscription();
  if (!subscription.subscriptionActive) {
    redirect("/pricing");
  }

  const existing = await prisma.exerciseTemplate.findUnique({
    where: { id },
  });

  if (!existing) {
    throw new Error("Exercise template not found.");
  }

  if (existing.sptemplate) {
    throw new Error("SP exercise templates cannot be edited.");
  }

  if (existing.userId !== user.id) {
    throw new Error("You do not have permission to edit this template.");
  }

  await prisma.exerciseTemplate.update({
    where: { id },
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
    },
  });

  return { success: true }
}
