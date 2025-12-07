"use server";

import { prisma } from "@/lib/prisma";
import { getOrCreateCurrentUser } from "@/server/user/getOrCreateCurrentUser";

export async function deleteExerciseTemplate(id: string) {
  const user = await getOrCreateCurrentUser();

  const existing = await prisma.exerciseTemplate.findUnique({
    where: { id },
  });

  if (!existing) {
    throw new Error("Exercise template not found.");
  }

  if (existing.sptemplate) {
    throw new Error("SP exercise templates cannot be deleted.");
  }

  if (existing.userId !== user.id) {
    throw new Error("You do not have permission to delete this template.");
  }

  await prisma.exerciseTemplate.delete({
    where: { id },
  });
}
