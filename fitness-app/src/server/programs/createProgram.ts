"use server";

import {
  ProgramTemplateWithStructure,
  ProgramTemplateStructure,
} from "@/features/programs/model/builderTypes";
import { prisma } from "@/lib/prisma";
import { getOrCreateCurrentUser } from "@/server/users/getOrCreateCurrentUser";
import { redirect } from "next/navigation";
import { getUserSubscription } from "../subscription/getUserSubscription";

export async function createProgram(
  programTemplate: ProgramTemplateWithStructure,
  existingTemplate: boolean
) {
  const { clerkId } = await getOrCreateCurrentUser();
  const subscription = await getUserSubscription();

  if (!subscription.subscriptionActive) {
    redirect("/pricing");
  }

  const user = await prisma.user.findUnique({ where: { clerkId } });

  const structureJson: ProgramTemplateStructure | undefined =
    (programTemplate?.structureJson as ProgramTemplateStructure | null) ??
    undefined;

  let template;

  if (!existingTemplate){
    template = await prisma.programTemplate.create({
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

  // Create overarching program
  const newProgram = await prisma.program.create({
    data: {
      userId: user?.id ?? undefined,
      name: programTemplate.name,
      goal: programTemplate.goal,
      length: programTemplate.weeks,
      days: programTemplate.days,
      templateId: template?.id || programTemplate.id
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

                  muscleGroup: ex.muscleGroup,

                  sets: {
                    create: ex.sets.map((s, sIndex) => ({
                      setNumber: s.setNumber ?? sIndex + 1,
                      type: s.type,
                      targetReps: s.targetReps ?? null,
                      targetWeightKg: s.targetWeightKg ?? null,
                      targetDurationSec: s.targetDurationSec ?? null
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
