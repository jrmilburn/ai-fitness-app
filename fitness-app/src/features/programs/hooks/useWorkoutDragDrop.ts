import * as React from "react";
import type { DropResult } from "@hello-pangea/dnd";

import type { ProgramBuilderActions, UseProgramBuilderStateResult } from "./useProgramBuilderState";

export function useWorkoutDragDrop(
  state: UseProgramBuilderStateResult["state"],
  actions: Pick<
    ProgramBuilderActions,
    "reorderWorkouts" | "reorderExercises" | "moveExerciseToWorkout"
  >
) {
  const handleDragEnd = React.useCallback(
    (result: DropResult) => {
      const { destination, source, draggableId, type } = result;

      if (!destination) return;

      if (
        destination.droppableId === source.droppableId &&
        destination.index === source.index
      ) {
        return;
      }

      if (type === "workout") {
        actions.reorderWorkouts(source.index, destination.index);
        return;
      }

      const startWorkout = state.workouts[source.droppableId];
      const finishWorkout = state.workouts[destination.droppableId];

      if (!startWorkout || !finishWorkout) return;

      if (startWorkout === finishWorkout) {
        actions.reorderExercises(startWorkout.id, source.index, destination.index);
        return;
      }

      actions.moveExerciseToWorkout(
        startWorkout.id,
        finishWorkout.id,
        source.index,
        destination.index,
        draggableId
      );
    },
    [actions, state.workouts]
  );

  return { handleDragEnd };
}
