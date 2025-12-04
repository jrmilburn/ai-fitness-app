"use server";

import {
  ProgramTemplateWithStructure,
  ProgramTemplateStructure,
} from "@/lib/builderTypes";
import { prisma } from "@/lib/prisma";
import { getOrCreateCurrentUser } from "../user/getOrCreateCurrentUser";

export async function createProgram(
  programTemplate: ProgramTemplateWithStructure,
  existingTemplate: boolean
) {
  const { clerkId } = await getOrCreateCurrentUser();

  const user = await prisma.user.findUnique({ where: { clerkId } });

  const structureJson: ProgramTemplateStructure | undefined =
    (programTemplate?.structureJson as ProgramTemplateStructure | null) ??
    undefined;

  // Create overarching program
  const newProgram = await prisma.program.create({
    data: {
      userId: user?.id ?? undefined,
      name: programTemplate.name,
      goal: programTemplate.goal,
      length: programTemplate.weeks,
      days: programTemplate.days,
    },
  });

  await prisma.user.update({
    where: {
        clerkId
    },
    data: {
        currentProgramId: newProgram.id
    }
  })

  // Save program template
  if (!existingTemplate){
    await prisma.programTemplate.create({
      data: {
        userId: user?.id ?? undefined,
        name: programTemplate.name,
        goal: programTemplate.goal,
        weeks: programTemplate.weeks,
        days: programTemplate.days,
        ...(structureJson !== undefined ? { structureJson } : {}),
      },
    });
  }

  if (!programTemplate.structureJson) {
    // you can also early-return or create empty weeks here
    throw new Error("Program template has no structureJson");
  }

  const struct = programTemplate
    .structureJson as ProgramTemplateStructure;

  // For each week in the program length, create a week + nested workouts/exercises/sets
  await Promise.all(
    Array.from({ length: programTemplate.weeks }, (_, weekIndex) =>
      prisma.week.create({
        data: {
          programId: newProgram.id,
          weekNumber: weekIndex + 1,

          workouts: {
            create: struct.workouts.map((w, wIndex) => ({
              name: w.name,
              mode: w.mode,
              dayNumber: w.dayNumber ?? wIndex + 1,
              focusMuscleGroups: w.focusMuscleGroups ?? [],
              notes: w.notes ?? null,

              exercises: {
                create: w.exercises.map((ex, exIndex) => ({
                  order: exIndex + 1, // required by Exercise model

                  exerciseTemplateId: ex.exerciseTemplateId,
                  exerciseType: ex.exerciseType,

                  sets: {
                    create: ex.sets.map((s, sIndex) => ({
                      setNumber: s.setNumber ?? sIndex + 1,
                      type: s.type,
                      targetReps: s.targetReps ?? null,
                      targetWeightKg: s.targetWeightKg ?? null,
                    })),
                  },
                })),
              },
            })),
          },
        },
      })
    )
  );
}
