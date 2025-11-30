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
  // indices or ids – up to you. I’ll keep it simple with indices.
  const [weekIndex, setWeekIndex] = React.useState(0);
  const [workoutIndex, setWorkoutIndex] = React.useState(0);

  const weeks = program.weeks;
  const currentWeek = weeks[weekIndex];
  const currentWorkout = currentWeek?.workouts[workoutIndex];

  // guard for weird cases
  if (!currentWeek || !currentWorkout) {
    return <div>No workouts found in this program.</div>;
  }

  return (
    <div className="grid gap-4 md:grid-cols-[260px,1fr]">
      {/* Left: selector (weeks + workouts) */}
      <WorkoutSelector
        program={program}
        weekIndex={weekIndex}
        workoutIndex={workoutIndex}
        onSelectWeek={setWeekIndex}
        onSelectWorkout={setWorkoutIndex}
      />

      {/* Right: current workout detail */}
      <WorkoutView
        week={currentWeek}
        workout={currentWorkout}
      />
    </div>
  );
}
