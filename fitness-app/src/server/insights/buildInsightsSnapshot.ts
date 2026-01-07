import type { LoggedWorkout } from "@/server/insights/getInsightsSourceData";

export type InsightsSnapshot = {
  programCount: number;
  dateRange: { start: string; end: string };
  totalWorkoutsLogged: number;
  workoutsPerWeek: number[];
  volumeByMuscleGroup: { muscleGroup: string; sets: number }[];
  topExercises: {
    name: string;
    sessionsCount: number;
    bestSet: string | null;
    trend: "improving" | "flat" | "declining";
  }[];
  notableFlags: string[];
};

const MAX_MUSCLES = 8;
const MAX_EXERCISES = 6;

export function buildInsightsSnapshot({
  programCount,
  workouts,
  earliestDate,
  latestDate,
}: {
  programCount: number;
  workouts: LoggedWorkout[];
  earliestDate: Date;
  latestDate: Date;
}): InsightsSnapshot {
  const totalWorkoutsLogged = workouts.length;
  const workoutsPerWeek = buildWorkoutsPerWeek(workouts, earliestDate);
  const volumeByMuscleGroup = buildVolumeByMuscleGroup(workouts);
  const topExercises = buildTopExercises(workouts);
  const notableFlags = buildNotableFlags({
    workoutsPerWeek,
    totalWorkoutsLogged,
    topExercises,
  });

  return {
    programCount,
    dateRange: {
      start: earliestDate.toISOString(),
      end: latestDate.toISOString(),
    },
    totalWorkoutsLogged,
    workoutsPerWeek,
    volumeByMuscleGroup,
    topExercises,
    notableFlags,
  };
}

function buildWorkoutsPerWeek(
  workouts: LoggedWorkout[],
  startDate: Date
): number[] {
  const msPerWeek = 1000 * 60 * 60 * 24 * 7;
  const weekBuckets: number[] = [];

  for (const workout of workouts) {
    const index = Math.floor(
      (workout.updatedAt.getTime() - startDate.getTime()) / msPerWeek
    );
    if (index < 0) continue;
    while (weekBuckets.length <= index) {
      weekBuckets.push(0);
    }
    weekBuckets[index] += 1;
  }

  return weekBuckets.length ? weekBuckets : [totalCount(workouts)];
}

function buildVolumeByMuscleGroup(
  workouts: LoggedWorkout[]
): { muscleGroup: string; sets: number }[] {
  const counts = new Map<string, number>();

  for (const workout of workouts) {
    for (const exercise of workout.exercises) {
      const muscle =
        exercise.muscleGroup ?? exercise.templateMuscleGroup ?? null;
      if (!muscle) continue;
      const prev = counts.get(muscle) ?? 0;
      counts.set(muscle, prev + exercise.sets.length);
    }
  }

  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, MAX_MUSCLES)
    .map(([muscleGroup, sets]) => ({ muscleGroup, sets }));
}

function buildTopExercises(workouts: LoggedWorkout[]) {
  const exerciseMap = new Map<
    string,
    {
      name: string;
      workoutIds: Set<string>;
      performanceByWorkout: { date: number; value: number }[];
      bestSet: { label: string; value: number } | null;
    }
  >();

  for (const workout of workouts) {
    for (const exercise of workout.exercises) {
      const name = exercise.templateName ?? "Unknown";
      const key = name.toLowerCase();
      const entry = exerciseMap.get(key) ?? {
        name,
        workoutIds: new Set<string>(),
        performanceByWorkout: [],
        bestSet: null,
      };

      entry.workoutIds.add(workout.id);

      const performanceValues: number[] = [];

      for (const set of exercise.sets) {
        const score = getPerformanceScore(set);
        if (score !== null) {
          performanceValues.push(score);
          if (!entry.bestSet || score > entry.bestSet.value) {
            entry.bestSet = { label: formatSet(set), value: score };
          }
        }
      }

      if (performanceValues.length) {
        const bestForWorkout = Math.max(...performanceValues);
        entry.performanceByWorkout.push({
          date: workout.updatedAt.getTime(),
          value: bestForWorkout,
        });
      }

      exerciseMap.set(key, entry);
    }
  }

  const sorted = [...exerciseMap.values()]
    .sort(
      (a, b) =>
        b.workoutIds.size - a.workoutIds.size ||
        a.name.localeCompare(b.name)
    )
    .slice(0, MAX_EXERCISES)
    .map((entry) => {
      const trend = calculateTrend(entry.performanceByWorkout);
      return {
        name: entry.name,
        sessionsCount: entry.workoutIds.size,
        bestSet: entry.bestSet?.label ?? null,
        trend,
      };
    });

  return sorted;
}

function buildNotableFlags({
  workoutsPerWeek,
  totalWorkoutsLogged,
  topExercises,
}: {
  workoutsPerWeek: number[];
  totalWorkoutsLogged: number;
  topExercises: {
    trend: "improving" | "flat" | "declining";
  }[];
}): string[] {
  const flags: string[] = [];
  const averagePerWeek =
    workoutsPerWeek.reduce((sum, value) => sum + value, 0) /
    Math.max(workoutsPerWeek.length, 1);

  if (averagePerWeek < 2) {
    flags.push("low frequency");
  }

  if (totalWorkoutsLogged < 8) {
    flags.push("low volume");
  }

  if (workoutsPerWeek.some((count) => count >= averagePerWeek * 2) &&
      averagePerWeek >= 1) {
    flags.push("volume spike");
  }

  if (topExercises.some((exercise) => exercise.trend === "declining")) {
    flags.push("stall signal");
  }

  return flags.slice(0, 4);
}

function calculateTrend(
  performance: { date: number; value: number }[]
): "improving" | "flat" | "declining" {
  if (performance.length < 2) {
    return "flat";
  }

  const sorted = [...performance].sort((a, b) => a.date - b.date);
  const third = Math.max(1, Math.floor(sorted.length / 3));
  const firstSlice = sorted.slice(0, third);
  const lastSlice = sorted.slice(-third);

  const firstAvg = average(firstSlice.map((item) => item.value));
  const lastAvg = average(lastSlice.map((item) => item.value));

  if (lastAvg >= firstAvg * 1.05) return "improving";
  if (lastAvg <= firstAvg * 0.95) return "declining";
  return "flat";
}

function getPerformanceScore(set: {
  actualReps: number | null;
  actualWeightKg: number | null;
  actualDurationSec: number | null;
  actualDistanceM: number | null;
}): number | null {
  if (set.actualWeightKg && set.actualReps) {
    return set.actualWeightKg * set.actualReps;
  }
  if (set.actualReps) return set.actualReps;
  if (set.actualDistanceM) return set.actualDistanceM;
  if (set.actualDurationSec) return set.actualDurationSec;
  return null;
}

function formatSet(set: {
  actualReps: number | null;
  actualWeightKg: number | null;
  actualDurationSec: number | null;
  actualDistanceM: number | null;
}): string {
  if (set.actualWeightKg && set.actualReps) {
    return `${set.actualWeightKg}kg x ${set.actualReps}`;
  }
  if (set.actualReps) return `${set.actualReps} reps`;
  if (set.actualDistanceM) return `${set.actualDistanceM}m`;
  if (set.actualDurationSec) return `${set.actualDurationSec}s`;
  return "";
}

function totalCount(workouts: LoggedWorkout[]) {
  return workouts.length;
}

function average(values: number[]): number {
  if (!values.length) return 0;
  const sum = values.reduce((acc, val) => acc + val, 0);
  return sum / values.length;
}
