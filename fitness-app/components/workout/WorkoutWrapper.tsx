// components/workout/WorkoutWrapper.tsx
"use client";

import * as React from "react";
import type { ProgramWithRelations } from "@/lib/program";
import { WorkoutSelector } from "./WorkoutSelector";
import { WorkoutView } from "./WorkoutView";

type WorkoutWrapperProps = {
  program: ProgramWithRelations;
};

export default function WorkoutWrapper({ program }: WorkoutWrapperProps) {
  const [weekIndex, setWeekIndex] = React.useState(0);
  const [workoutIndex, setWorkoutIndex] = React.useState(0);

  const weeks = program.weeks;
  const currentWeek = weeks[weekIndex];
  const currentWorkout = currentWeek?.workouts[workoutIndex];

  // 🆕 new: jump to the first *unfinished* workout in the whole program
  const goToFirstUnfinishedWorkout = React.useCallback(() => {
    for (let w = 0; w < program.weeks.length; w++) {
      const week = program.weeks[w];

      for (let wi = 0; wi < week.workouts.length; wi++) {
        const workout = week.workouts[wi];

        // relies on your Prisma `Workout.completed` flag
        if (!workout.completed) {
          setWeekIndex(w);
          setWorkoutIndex(wi);
          return;
        }
      }
    }

    // Optional: if EVERYTHING is complete, you can choose where to land.
    // Example: go to the very last workout.
    const lastWeekIndex = program.weeks.length - 1;
    if (lastWeekIndex >= 0) {
      const lastWeek = program.weeks[lastWeekIndex];
      const lastWorkoutIndex = lastWeek.workouts.length - 1;

      if (lastWorkoutIndex >= 0) {
        setWeekIndex(lastWeekIndex);
        setWorkoutIndex(lastWorkoutIndex);
      }
    }
  }, [program.weeks, setWeekIndex, setWorkoutIndex]);


  React.useEffect(() => {
    goToFirstUnfinishedWorkout();
  }, [goToFirstUnfinishedWorkout]);

  if (!currentWeek || !currentWorkout) {
    return <div>No workouts found in this program.</div>;
  }

  // ✅ existing: move to the next workout in sequence
  const goToNextWorkout = () => {
    const week = program.weeks[weekIndex];

    let nextWeekIndex = weekIndex;
    let nextWorkoutIndex = workoutIndex;

    if (workoutIndex < week.workouts.length - 1) {
      // next workout in same week
      nextWorkoutIndex = workoutIndex + 1;
    } else if (weekIndex < program.weeks.length - 1) {
      // first workout of next week
      nextWeekIndex = weekIndex + 1;
      nextWorkoutIndex = 0;
    } else {
      // already at last workout of last week – do nothing (or wrap, your choice)
      return;
    }

    setWeekIndex(nextWeekIndex);
    setWorkoutIndex(nextWorkoutIndex);
  };



  return (
    <div className="grid gap-4 md:grid-cols-[260px,1fr]">
      <WorkoutSelector
        program={program}
        weekIndex={weekIndex}
        workoutIndex={workoutIndex}
        onSelectWeek={setWeekIndex}
        onSelectWorkout={setWorkoutIndex}
      />

      <WorkoutView
        week={currentWeek}
        workout={currentWorkout}
        onNextWorkout={goToNextWorkout}         // still used by Finish button
        goToFirstUnfinished={goToFirstUnfinishedWorkout}
/>
    </div>
  );
}
