"use client";

import type { Prisma } from "@/generated/prisma/client";
import Exercise from "@/components/exercise/exercise";

export type WorkoutWithExercisesAndSets = Prisma.WorkoutGetPayload<{
  include: {
    exercises: {
      include: { sets: true };
    };
  };
}>;

export default function Workout({ workout }: { workout: WorkoutWithExercisesAndSets }) {
  return (
    <div className="space-y-6 w-full">
      {/* Workout header */}
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold">{workout.name}</h1>

        <p className="text-sm text-muted-foreground">
          Day {workout.dayNumber} • {workout.mode.toLowerCase()}
        </p>

        {workout.focusMuscleGroups.length > 0 && (
          <p className="text-sm text-muted-foreground">
            Focus: {workout.focusMuscleGroups.join(", ")}
          </p>
        )}
      </div>

      {/* Workout Notes */}
      {workout.notes && (
        <p className="text-sm text-muted-foreground">{workout.notes}</p>
      )}

      {/* Exercises */}
      <div className="space-y-8">
        {workout.exercises.map((exercise) => (
          <Exercise key={exercise.id} exercise={exercise} />
        ))}
      </div>
    </div>
  );
}
