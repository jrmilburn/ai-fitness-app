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
  onNextWorkout: () => void;
  goToFirstUnfinished: () => void;
};

export function WorkoutView({
  week,
  workout,
  onNextWorkout,
  goToFirstUnfinished,
}: WorkoutViewProps) {
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
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="w-full">

        {/* Exercises */}
        <div className="space-y-3">
          {workout.exercises.map((exercise) => (
            <Exercise key={exercise.id} exercise={exercise} />
          ))}
        </div>
      </div>

      {/* Footer actions */}
      <div className="mt-2 flex gap-2">
        {isWorkoutComplete && !workout.completed && (
          <Button
            variant="default"
            onClick={handleFinishClick}
            className="rounded-md border-0 bg-[#A64DFF] px-4 py-2 text-xs font-medium text-white shadow-sm transition-colors hover:bg-[#B56BFF]"
          >
            Finish workout
          </Button>
        )}
        {isWorkoutComplete && workout.completed && (
          <Button
            variant="outline"
            onClick={handleCurrentWorkout}
            className="rounded-md border border-[var(--border-strong)] bg-[var(--surface-secondary)] px-4 py-2 text-xs font-medium text-[var(--text-strong)] hover:border-[#A64DFF] hover:bg-[var(--surface-accent)]"
          >
            Go to current workout
          </Button>
        )}
      </div>
    </div>
  );
}
