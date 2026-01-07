import { prisma } from "@/lib/prisma";
import type { MuscleGroup } from "@prisma/client";

export type LoggedWorkoutSet = {
  actualReps: number | null;
  actualWeightKg: number | null;
  actualDurationSec: number | null;
  actualDistanceM: number | null;
};

export type LoggedWorkoutExercise = {
  muscleGroup: MuscleGroup | null;
  templateName: string | null;
  templateMuscleGroup: MuscleGroup | null;
  sets: LoggedWorkoutSet[];
};

export type LoggedWorkout = {
  id: string;
  updatedAt: Date;
  exercises: LoggedWorkoutExercise[];
};

export type InsightsSourceData = {
  programIds: string[];
  workouts: LoggedWorkout[];
  earliestDate: Date | null;
  latestDate: Date | null;
  totalWorkouts: number;
  totalSets: number;
};

export async function getInsightsSourceData(
  userId: string
): Promise<InsightsSourceData> {
  const loggedWorkouts = await prisma.workout.findMany({
    where: {
      completed: true,
      week: {
        program: {
          userId,
        },
      },
    },
    select: {
      updatedAt: true,
      week: {
        select: {
          programId: true,
        },
      },
    },
  });

  if (!loggedWorkouts.length) {
    return {
      programIds: [],
      workouts: [],
      earliestDate: null,
      latestDate: null,
      totalWorkouts: 0,
      totalSets: 0,
    };
  }

  const latestByProgram = new Map<string, Date>();

  for (const workout of loggedWorkouts) {
    const programId = workout.week?.programId;
    if (!programId) continue;

    const previous = latestByProgram.get(programId);
    if (!previous || workout.updatedAt > previous) {
      latestByProgram.set(programId, workout.updatedAt);
    }
  }

  const sortedProgramIds = [...latestByProgram.entries()]
    .sort((a, b) => b[1].getTime() - a[1].getTime())
    .slice(0, 2)
    .map(([programId]) => programId);

  if (!sortedProgramIds.length) {
    return {
      programIds: [],
      workouts: [],
      earliestDate: null,
      latestDate: null,
      totalWorkouts: 0,
      totalSets: 0,
    };
  }

  const workouts = await prisma.workout.findMany({
    where: {
      completed: true,
      week: {
        programId: {
          in: sortedProgramIds,
        },
      },
    },
    select: {
      id: true,
      updatedAt: true,
      exercises: {
        select: {
          muscleGroup: true,
          template: {
            select: {
              name: true,
              muscleGroup: true,
            },
          },
          sets: {
            where: {
              completed: true,
            },
            select: {
              actualReps: true,
              actualWeightKg: true,
              actualDurationSec: true,
              actualDistanceM: true,
            },
          },
        },
      },
    },
    orderBy: {
      updatedAt: "asc",
    },
  });

  let earliestDate: Date | null = null;
  let latestDate: Date | null = null;
  let totalSets = 0;

  const normalizedWorkouts: LoggedWorkout[] = workouts.map((workout) => {
    const exercises = workout.exercises.map((exercise) => {
      const sets = exercise.sets.map((set) => ({
        actualReps: set.actualReps ?? null,
        actualWeightKg: set.actualWeightKg ?? null,
        actualDurationSec: set.actualDurationSec ?? null,
        actualDistanceM: set.actualDistanceM ?? null,
      }));

      totalSets += sets.length;

      return {
        muscleGroup: exercise.muscleGroup,
        templateName: exercise.template?.name ?? null,
        templateMuscleGroup: exercise.template?.muscleGroup ?? null,
        sets,
      };
    });

    if (!earliestDate || workout.updatedAt < earliestDate) {
      earliestDate = workout.updatedAt;
    }
    if (!latestDate || workout.updatedAt > latestDate) {
      latestDate = workout.updatedAt;
    }

    return {
      id: workout.id,
      updatedAt: workout.updatedAt,
      exercises,
    };
  });

  return {
    programIds: sortedProgramIds,
    workouts: normalizedWorkouts,
    earliestDate,
    latestDate,
    totalWorkouts: normalizedWorkouts.length,
    totalSets,
  };
}
