import { renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import type { UseProgramBuilderStateResult } from "../useProgramBuilderState";
import { useWorkoutDragDrop } from "../useWorkoutDragDrop";

const baseState: UseProgramBuilderStateResult["state"] = {
  workouts: {
    w1: {
      id: "w1",
      name: "Workout 1",
      mode: "STRENGTH",
      dayNumber: 1,
      focusMuscleGroups: [],
      notes: null,
      exerciseIds: ["ex1", "ex2"],
    },
    w2: {
      id: "w2",
      name: "Workout 2",
      mode: "STRENGTH",
      dayNumber: 2,
      focusMuscleGroups: [],
      notes: null,
      exerciseIds: [],
    },
  },
  exercises: {
    ex1: {
      id: "ex1",
      exerciseTemplateId: "template-1",
      exerciseType: "STRENGTH",
      sets: [],
    },
    ex2: {
      id: "ex2",
      exerciseTemplateId: "template-2",
      exerciseType: "STRENGTH",
      sets: [],
    },
  },
  workoutOrder: ["w1", "w2"],
  days: 7,
  weeks: 6,
};

describe("useWorkoutDragDrop", () => {
  it("ignores drops without a destination", () => {
    const actions = {
      reorderWorkouts: vi.fn(),
      reorderExercises: vi.fn(),
      moveExerciseToWorkout: vi.fn(),
    };

    const { result } = renderHook(() => useWorkoutDragDrop(baseState, actions));

    result.current.handleDragEnd({
      draggableId: "ex1",
      mode: "FLUID",
      reason: "DROP",
      source: { droppableId: "w1", index: 0 },
      destination: null,
      type: "exercise",
      combine: null,
    });

    expect(actions.reorderWorkouts).not.toHaveBeenCalled();
    expect(actions.reorderExercises).not.toHaveBeenCalled();
    expect(actions.moveExerciseToWorkout).not.toHaveBeenCalled();
  });

  it("reorders workouts and exercises within the same workout", () => {
    const actions = {
      reorderWorkouts: vi.fn(),
      reorderExercises: vi.fn(),
      moveExerciseToWorkout: vi.fn(),
    };

    const { result } = renderHook(() => useWorkoutDragDrop(baseState, actions));

    result.current.handleDragEnd({
      draggableId: "w1",
      mode: "FLUID",
      reason: "DROP",
      source: { droppableId: "program", index: 0 },
      destination: { droppableId: "program", index: 1 },
      type: "workout",
      combine: null,
    });

    expect(actions.reorderWorkouts).toHaveBeenCalledWith(0, 1);

    result.current.handleDragEnd({
      draggableId: "ex1",
      mode: "FLUID",
      reason: "DROP",
      source: { droppableId: "w1", index: 0 },
      destination: { droppableId: "w1", index: 1 },
      type: "exercise",
      combine: null,
    });

    expect(actions.reorderExercises).toHaveBeenCalledWith("w1", 0, 1);
    expect(actions.moveExerciseToWorkout).not.toHaveBeenCalled();
  });

  it("moves exercises between workouts", () => {
    const actions = {
      reorderWorkouts: vi.fn(),
      reorderExercises: vi.fn(),
      moveExerciseToWorkout: vi.fn(),
    };

    const { result } = renderHook(() => useWorkoutDragDrop(baseState, actions));

    result.current.handleDragEnd({
      draggableId: "ex2",
      mode: "FLUID",
      reason: "DROP",
      source: { droppableId: "w1", index: 1 },
      destination: { droppableId: "w2", index: 0 },
      type: "exercise",
      combine: null,
    });

    expect(actions.moveExerciseToWorkout).toHaveBeenCalledWith(
      "w1",
      "w2",
      1,
      0,
      "ex2"
    );
  });
});
