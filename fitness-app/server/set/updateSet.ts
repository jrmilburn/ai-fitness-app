"use server";

import { prisma } from "@/lib/prisma";

type UpdatePayload = {
  weight: number | null;
  reps: number | null;
};

export async function updateSet(
  setId: string,
  completed: boolean,
  { weight, reps }: UpdatePayload
) {
  const updatedSet = await prisma.set.update({
    where: {
      id: setId,
    },
    data: {
      completed,
      actualReps: reps,
      actualWeightKg: weight,
    },
  });

  console.log(updatedSet);

  return updatedSet;
}
