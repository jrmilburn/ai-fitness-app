import { describe, expect, it, vi, afterEach } from "vitest";

import type { ProgramBuilderState, ProgramTemplateWithStructure } from "../builderTypes";
import {
  builderStateToStructureJson,
  templateToBuilderState,
} from "../transformers";

afterEach(() => {
  vi.restoreAllMocks();
});

describe("templateToBuilderState", () => {
  it("returns default workouts when no template or structure is provided", () => {
    const state = templateToBuilderState(null);

    expect(state.days).toBe(7);
    expect(state.weeks).toBe(6);
    expect(state.workoutOrder).toEqual(["workout-1", "workout-2"]);
    expect(state.workouts["workout-1"].name).toBe("Workout 1");
    expect(state.workouts["workout-2"].name).toBe("Workout 2");
    expect(state.exercises).toEqual({});
  });

  it("hydrates builder state from structure JSON and generates missing ids", () => {
    vi.spyOn(Math, "random").mockReturnValue(0.1);

    const template = {
      id: "template-1",
      name: "Leg Focus",
      goal: "STRENGTH",
      days: 5,
      weeks: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: "user-1",
      user: null,
      aiPlanJson: null,
      structureJson: {
        days: 5,
        weeks: 3,
        workouts: [
          {
            id: "",
            name: "Leg Day",
            dayNumber: 2,
            mode: "STRENGTH",
            focusMuscleGroups: ["Legs"],
            notes: "Keep tempo",
            exercises: [
              {
                id: "",
                exerciseTemplateId: "squat-template",
                exerciseType: "STRENGTH",
                sets: [
                  {
                    id: "",
                    setNumber: undefined as unknown as number,
                    type: "NORMAL",
                    targetReps: 8,
                    targetWeightKg: 100,
                    targetDurationSec: null,
                  },
                ],
              },
            ],
          },
        ],
      },
    } as ProgramTemplateWithStructure;

    const state = templateToBuilderState(template);

    expect(state.days).toBe(5);
    expect(state.weeks).toBe(3);
    expect(state.workoutOrder).toHaveLength(1);
    const workoutId = state.workoutOrder[0];
    expect(workoutId.startsWith("workout-")).toBe(true);
    expect(state.workouts[workoutId]).toMatchObject({
      name: "Leg Day",
      focusMuscleGroups: ["Legs"],
      notes: "Keep tempo",
    });
    const exerciseId = state.workouts[workoutId].exerciseIds[0];
    expect(exerciseId.startsWith("exercise-")).toBe(true);
    const exercise = state.exercises[exerciseId];
    expect(exercise.sets[0]).toMatchObject({
      setNumber: 1,
      type: "NORMAL",
      targetReps: 8,
      targetWeightKg: 100,
      targetDurationSec: null,
    });
    expect(exercise.sets[0].id.startsWith("set-")).toBe(true);
  });
});

describe("builderStateToStructureJson", () => {
  it("serializes builder state and recalculates ordering data", () => {
    const state: ProgramBuilderState = {
      days: 5,
      weeks: 4,
      workoutOrder: ["b", "a"],
      workouts: {
        a: {
          id: "a",
          name: "Alpha",
          mode: "STRENGTH",
          dayNumber: 5,
          focusMuscleGroups: ["Chest"],
          notes: null,
          exerciseIds: ["ex-1"],
        },
        b: {
          id: "b",
          name: "Beta",
          mode: "CARDIO",
          dayNumber: 2,
          focusMuscleGroups: [],
          notes: "Low intensity",
          exerciseIds: [],
        },
      },
      exercises: {
        "ex-1": {
          id: "ex-1",
          exerciseTemplateId: "template-1",
          exerciseType: "STRENGTH",
          sets: [
            {
              id: "set-1",
              setNumber: 10,
              type: "NORMAL",
              targetReps: null,
              targetWeightKg: null,
              targetDurationSec: 60,
            },
          ],
        },
      },
    };

    const structure = builderStateToStructureJson(state);

    expect(structure.days).toBe(5);
    expect(structure.weeks).toBe(4);
    expect(structure.workouts[0]).toMatchObject({
      id: "b",
      name: "Beta",
      dayNumber: 1,
      mode: "CARDIO",
      focusMuscleGroups: [],
      notes: "Low intensity",
    });
    expect(structure.workouts[1]).toMatchObject({
      id: "a",
      name: "Alpha",
      dayNumber: 2,
      focusMuscleGroups: ["Chest"],
    });
    expect(structure.workouts[1].exercises[0].sets[0]).toMatchObject({
      setNumber: 1,
      type: "NORMAL",
      targetDurationSec: 60,
    });
  });
});
