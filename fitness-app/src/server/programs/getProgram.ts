import { prisma } from "@/lib/prisma";
import { getOrCreateCurrentUser } from "../users/getOrCreateCurrentUser";
import { getUserSubscription } from "../subscription/getUserSubscription";
import { redirect } from "next/navigation";

export async function getProgram(programId: string) {

  const user = await getOrCreateCurrentUser();
  const subscription = await getUserSubscription();

  if (!subscription.subscriptionActive) {
    redirect("/pricing");
  }

  const program =  await prisma.program.findUnique({
    where: { id: programId },
    include: {
      user: true,
      weeks: {
        orderBy: { weekNumber: "asc" },
        include: {
          workouts: {
            orderBy: { dayNumber: "asc" },
            include: {
              exercises: {
                orderBy: { order: "asc" },
                include: {
                  sets: { orderBy: { setNumber: "asc" } },
                  template: true,
                },
              },
            },
          },
        },
      },
    },
  });

  if(program?.userId !== user.id) {
    throw new Error("User does not own this program");
  }

  return program;
}
