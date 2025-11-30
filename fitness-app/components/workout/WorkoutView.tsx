// components/workout/WorkoutView.tsx
"use client";

import type { Prisma } from "@/generated/prisma/client";
import Exercise from "@/components/exercise/exercise";
import { WeekWithAllRelations } from "@/lib/types";

import { Button } from "../ui/button";

import { finishWorkout } from "@/server/workout/finishWorkout";

import { useRouter } from "next/navigation";

export type WorkoutWithExercisesAndSets = Prisma.WorkoutGetPayload<{
  include: {
    exercises: {
      include: { sets: true, template: true, muscleGroup: true };
    };
  };
}>;

type WorkoutViewProps = {
  week: WeekWithAllRelations;
  workout: WorkoutWithExercisesAndSets;
  onNextWorkout: () => void;          // 👈 new prop
  goToFirstUnfinished: () => void;
};

export function WorkoutView({ week, workout, onNextWorkout, goToFirstUnfinished }: WorkoutViewProps) {
  const isWorkoutComplete = workout.exercises.every((exercise) =>
    exercise.sets.every((set) => set.completed)
  );

  const router = useRouter();

  const handleFinishClick = async () => {
    await finishWorkout(workout.id);   
    router.refresh();
    onNextWorkout();                
  };

  const handleCurrentWorkout = () => {
    goToFirstUnfinished();
  }

  return (
    <>
      <div className="my-4 w-full">
        {/* Workout header */}
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold">{workout.name}</h1>

          <p className="text-sm text-muted-foreground">
            Week {week.weekNumber} • Day {workout.dayNumber} •{" "}
            {workout.mode.toLowerCase()}
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

      {isWorkoutComplete && !workout.completed && (
        <Button variant="default" onClick={handleFinishClick}>
          Finish workout
        </Button>
      )}
      {isWorkoutComplete && workout.completed && (
        <Button variant="default" onClick={handleCurrentWorkout}>
          Current workout
        </Button>
      )}
    </>
  );
}
