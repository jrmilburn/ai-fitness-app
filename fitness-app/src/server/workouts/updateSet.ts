"use server";

import { prisma } from "@/lib/prisma";
import { getOrCreateCurrentUser } from "../users/getOrCreateCurrentUser";
import { getUserSubscription } from "../subscription/getUserSubscription";
import { redirect } from "next/navigation";

type UpdatePayload = {
  weight: number | null;
  reps: number | null;
  time: number | null;
};

export async function updateSet(
  setId: string,
  completed: boolean,
  { weight, reps, time }: UpdatePayload
) {
  
  await getOrCreateCurrentUser();
  const subscription = await getUserSubscription();

  if (!subscription.subscriptionActive) {
    redirect("/pricing");
  }

  await prisma.set.update({
    where: {
      id: setId,
    },
    data: {
      completed,
      actualReps: reps,
      actualWeightKg: weight,
      actualDurationSec: time
    },
  });

  return { success: true };
}
