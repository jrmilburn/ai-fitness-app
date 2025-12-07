import { act, renderHook } from "@testing-library/react";
import { ExerciseType, SetType, WorkoutMode } from "@prisma/client";
import { describe, expect, it, vi } from "vitest";

import type { ProgramTemplateWithStructure } from "@/features/programs/model/builderTypes";
import { useProgramBuilderState } from "../useProgramBuilderState";

const createTemplate = (name: string): ProgramTemplateWithStructure => ({
  id: `${name}-id`,
  name,
  goal: "Strength" as any,
  days: 3,
  weeks: 2,
  createdAt: new Date(),
  updatedAt: new Date(),
  userId: "user-1",
  user: null,
  aiPlanJson: null,
  structureJson: {
    days: 3,
    weeks: 2,
    workouts: [
      {
        id: "w-existing",
        name: `${name} Workout`,
        dayNumber: 1,
        mode: WorkoutMode.STRENGTH,
        focusMuscleGroups: [],
        notes: null,
        exercises: [
          {
            id: "ex-existing",
            exerciseTemplateId: "template-a",
            exerciseType: ExerciseType.STRENGTH,
            sets: [
              {
                id: "set-existing",
                setNumber: 1,
                type: SetType.NORMAL,
                targetReps: 12,
                targetWeightKg: null,
                targetDurationSec: null,
              },
            ],
          },
        ],
      },
    ],
  },
});

describe("useProgramBuilderState", () => {
  it("adds, reorders, and moves workouts/exercises", () => {
    const { result } = renderHook(() => useProgramBuilderState(null, vi.fn()));

    act(() => result.current.actions.addWorkout());
    expect(result.current.state.workoutOrder).toHaveLength(3);

    const newWorkoutId = result.current.state.workoutOrder[2];

    act(() => result.current.actions.addExerciseToWorkout(newWorkoutId, "template-99"));
    const addedExerciseId =
      result.current.state.workouts[newWorkoutId].exerciseIds[0];
    expect(result.current.state.exercises[addedExerciseId].sets).toHaveLength(2);

    const firstWorkoutId = result.current.state.workoutOrder[0];
    act(() => result.current.actions.addExerciseToWorkout(firstWorkoutId, "template-1"));
    act(() => result.current.actions.addExerciseToWorkout(firstWorkoutId, "template-2"));

    const initialExerciseOrder = [
      ...result.current.state.workouts[firstWorkoutId].exerciseIds,
    ];
    act(() => result.current.actions.reorderExercises(firstWorkoutId, 0, 1));
    expect(result.current.state.workouts[firstWorkoutId].exerciseIds).toEqual([
      initialExerciseOrder[1],
      initialExerciseOrder[0],
    ]);

    const previousWorkoutOrder = [...result.current.state.workoutOrder];
    act(() =>
      result.current.actions.reorderWorkouts(
        0,
        result.current.state.workoutOrder.length - 1
      )
    );
    expect(result.current.state.workoutOrder.at(-1)).toBe(previousWorkoutOrder[0]);
    expect(
      result.current.state.workouts[previousWorkoutOrder[0]].dayNumber
    ).toBe(previousWorkoutOrder.length);

    act(() =>
      result.current.actions.moveExerciseToWorkout(
        firstWorkoutId,
        newWorkoutId,
        0,
        0,
        result.current.state.workouts[firstWorkoutId].exerciseIds[0]
      )
    );
    expect(result.current.state.workouts[newWorkoutId].exerciseIds[0]).toBe(
      addedExerciseId
    );
  });

  it("removes sets, exercises, and workouts while maintaining state", () => {
    const { result } = renderHook(() => useProgramBuilderState(null, vi.fn()));

    const initialWorkoutId = result.current.state.workoutOrder[0];
    act(() =>
      result.current.actions.addExerciseToWorkout(initialWorkoutId, "template-1")
    );

    const exerciseId = result.current.state.workouts[initialWorkoutId].exerciseIds[0];
    const firstSetId = result.current.state.exercises[exerciseId].sets[0].id;

    act(() => result.current.actions.removeSetFromExercise(exerciseId, firstSetId));
    expect(result.current.state.exercises[exerciseId].sets[0].setNumber).toBe(1);

    act(() => result.current.actions.deleteExercise(initialWorkoutId, exerciseId));
    expect(
      result.current.state.workouts[initialWorkoutId].exerciseIds.includes(exerciseId)
    ).toBe(false);

    const secondWorkoutId = result.current.state.workoutOrder[1];
    act(() => result.current.actions.deleteWorkout(secondWorkoutId));

    expect(result.current.state.workoutOrder).toHaveLength(1);
    expect(result.current.activeWorkoutId).toBe(
      result.current.state.workoutOrder[0]
    );
  });

  it("syncs with backend template updates and dialog state", async () => {
    const template = createTemplate("Backend Program");
    const { result, rerender } = renderHook(
      ({ template }) => useProgramBuilderState(template, vi.fn()),
      { initialProps: { template: null as ProgramTemplateWithStructure | null } }
    );

    expect(result.current.existingTemplate).toBe(false);

    await act(async () => {
      rerender({ template });
    });

    expect(result.current.existingTemplate).toBe(true);
    expect(result.current.programName).toBe("Backend Program");
    expect(result.current.pendingName).toBe("Backend Program");

    act(() => {
      result.current.openNameDialog();
      result.current.setPendingName("   Edited Name   ");
      result.current.saveProgramName();
    });

    expect(result.current.programName).toBe("Edited Name");
    expect(result.current.isNameDialogOpen).toBe(false);

    act(() => result.current.actions.addWorkout());
    expect(result.current.existingTemplate).toBe(false);
  });
});
