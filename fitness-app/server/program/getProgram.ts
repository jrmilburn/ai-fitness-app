import { prisma } from "@/lib/prisma";

export async function getProgram(programId: string) {

    console.log("PROGRAMID", programId);

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
                  template: { include: { muscleGroup: true } },
                  muscleGroup: true,
                },
              },
            },
          },
        },
      },
    },
  });

  console.log(program);

  return program;
}
