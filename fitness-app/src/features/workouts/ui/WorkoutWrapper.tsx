"use client";

import * as React from "react";
import type { ProgramWithRelations } from "@/lib/program";
import { WorkoutSelector } from "./WorkoutSelector";
import { WorkoutView } from "./WorkoutView";

type WorkoutWrapperProps = {
  program: ProgramWithRelations;
  workoutId?: string;
};

export default function WorkoutWrapper({
  program,
  workoutId,
}: WorkoutWrapperProps) {
  const [weekIndex, setWeekIndex] = React.useState(0);
  const [workoutIndex, setWorkoutIndex] = React.useState(0);

  const weeks = program.weeks;
  const currentWeek = weeks[weekIndex];
  const currentWorkout = currentWeek?.workouts[workoutIndex];

  // 🔍 helper: go to first unfinished workout in the program
  const goToFirstUnfinishedWorkout = React.useCallback(() => {
    for (let w = 0; w < program.weeks.length; w++) {
      const week = program.weeks[w];

      for (let wi = 0; wi < week.workouts.length; wi++) {
        const workout = week.workouts[wi];
        if (!workout.completed) {
          setWeekIndex(w);
          setWorkoutIndex(wi);
          return;
        }
      }
    }

    // If everything is complete, default to last workout in last week
    const lastWeekIndex = program.weeks.length - 1;
    if (lastWeekIndex >= 0) {
      const lastWeek = program.weeks[lastWeekIndex];
      const lastWorkoutIndex = lastWeek.workouts.length - 1;

      if (lastWorkoutIndex >= 0) {
        setWeekIndex(lastWeekIndex);
        setWorkoutIndex(lastWorkoutIndex);
      }
    }
  }, [program.weeks]);

  // ✅ Initial positioning: prefer `workoutId` if provided, otherwise first unfinished
  React.useEffect(() => {
    if (!program.weeks.length) return;

    if (workoutId) {
      for (let w = 0; w < program.weeks.length; w++) {
        const week = program.weeks[w];

        const wi = week.workouts.findIndex((wk) => wk.id === workoutId);
        if (wi !== -1) {
          setWeekIndex(w);
          setWorkoutIndex(wi);
          return;
        }
      }
    }

    // Fallback if no workoutId or not found
    goToFirstUnfinishedWorkout();
  }, [program.weeks, workoutId, goToFirstUnfinishedWorkout]);

  if (!currentWeek || !currentWorkout) {
    return (
      <div className="rounded-lg border border-[var(--border-strong)] bg-[var(--surface-tertiary)] p-4 text-sm text-[var(--text-muted)]">
        No workouts found in this program.
      </div>
    );
  }

  const goToNextWorkout = () => {
    const week = program.weeks[weekIndex];

    let nextWeekIndex = weekIndex;
    let nextWorkoutIndex = workoutIndex;

    if (workoutIndex < week.workouts.length - 1) {
      nextWorkoutIndex = workoutIndex + 1;
    } else if (weekIndex < program.weeks.length - 1) {
      nextWeekIndex = weekIndex + 1;
      nextWorkoutIndex = 0;
    } else {
      return;
    }

    setWeekIndex(nextWeekIndex);
    setWorkoutIndex(nextWorkoutIndex);
  };

  return (
    <div className="rounded-xl border border-[var(--border-strong)] bg-[var(--surface-tertiary)] p-4 shadow-sm md:p-6">
      <div className="grid gap-6 md:grid-cols-[260px,1fr]">
        <WorkoutSelector
          program={program}
          weekIndex={weekIndex}
          workoutIndex={workoutIndex}
          onSelectWeek={setWeekIndex}
          onSelectWorkout={setWorkoutIndex}
        />

        <WorkoutView
          workout={currentWorkout}
          onNextWorkout={goToNextWorkout}
          goToFirstUnfinished={goToFirstUnfinishedWorkout}
        />
      </div>
    </div>
  );
}
