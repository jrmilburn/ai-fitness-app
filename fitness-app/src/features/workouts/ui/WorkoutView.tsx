// WorkoutView.tsx
"use client";

import type { Prisma } from "@prisma/client";
import Exercise from "@/features/exercises/ui/exercise";
import { Button } from "@/shared/ui/button";
import { finishWorkout } from "@/server/workouts/finishWorkout";
import { useRouter } from "next/navigation";

export type WorkoutWithExercisesAndSets = Prisma.WorkoutGetPayload<{
  include: {
    exercises: {
      include: { sets: true, template: true, muscleGroup: true };
    };
  };
}>;

type WorkoutViewProps = {
  workout: WorkoutWithExercisesAndSets;
  onNextWorkout: () => void;
  goToFirstUnfinished: () => void;
};

export function WorkoutView({
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
        <div>
          {workout.exercises.map((exercise, index) => {
            const prev = workout.exercises[index - 1];
            const next = workout.exercises[index + 1];

            // Use template.muscleGroup as the grouping key
            const thisGroup =
              exercise.template?.muscleGroup ??
              null;
            const prevGroup =
              prev?.template?.muscleGroup ??
              null;
            const nextGroup =
              next?.template?.muscleGroup ??
              null;

            const sameAsPrev =
              prevGroup !== null && prevGroup === thisGroup;
            const sameAsNext =
              nextGroup !== null && nextGroup === thisGroup;

            let groupPosition: "single" | "start" | "middle" | "end" = "single";
            if (!sameAsPrev && sameAsNext) groupPosition = "start";
            else if (sameAsPrev && sameAsNext) groupPosition = "middle";
            else if (sameAsPrev && !sameAsNext) groupPosition = "end";

            // Spacing:
            // - between *different* groups: mt-3
            // - between same group neighbours: -mt-px to overlap borders
            let stackClassName = "";
            if (sameAsPrev) {
              stackClassName = "-mt-px";
            } else if (index > 0) {
              stackClassName = "mt-3";
            }

            return (
              <Exercise
                key={exercise.id}
                exercise={exercise}
                groupPosition={groupPosition}
                stackClassName={stackClassName}
              />
            );
          })}
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
