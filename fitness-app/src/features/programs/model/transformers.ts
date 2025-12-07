import type {
  ProgramBuilderState,
  ProgramTemplateStructure,
  ProgramTemplateWithStructure,
  BuilderExercise,
  BuilderWorkout,
} from "./builderTypes";
import { createId } from "./builderTypes";

export type TemplateToBuilderState = (
  template: ProgramTemplateWithStructure | null
) => ProgramBuilderState;

export type BuilderStateToStructureJson = (
  state: ProgramBuilderState
) => ProgramTemplateStructure;

const DEFAULT_WORKOUT_IDS = ["workout-1", "workout-2"] as const;

export const templateToBuilderState: TemplateToBuilderState = (template) => {
  const days = template?.days ?? template?.structureJson?.days ?? 7;
  const weeks = template?.weeks ?? template?.structureJson?.weeks ?? 6;

  if (!template?.structureJson) {
    const [w1Id, w2Id] = DEFAULT_WORKOUT_IDS;

    return {
      days,
      weeks,
      workouts: {
        [w1Id]: createDefaultWorkout(w1Id, 1),
        [w2Id]: createDefaultWorkout(w2Id, 2),
      },
      exercises: {},
      workoutOrder: [w1Id, w2Id],
    };
  }

  const struct = template.structureJson;

  const workouts: Record<string, BuilderWorkout> = {};
  const exercises: Record<string, BuilderExercise> = {};
  const workoutOrder: string[] = [];

  for (const w of struct.workouts) {
    const workoutId = w.id || createId("workout");
    workoutOrder.push(workoutId);

    const exerciseIds: string[] = [];

    for (const ex of w.exercises) {
      const exerciseId = ex.id || createId("exercise");
      exerciseIds.push(exerciseId);

      exercises[exerciseId] = {
        id: exerciseId,
        exerciseTemplateId: ex.exerciseTemplateId,
        exerciseType: ex.exerciseType,
        sets:
          ex.sets?.map((s, i) => ({
            id: s.id || createId("set"),
            setNumber: s.setNumber ?? i + 1,
            type: s.type,
            targetReps: s.targetReps ?? null,
            targetWeightKg: s.targetWeightKg ?? null,
            targetDurationSec: s.targetDurationSec ?? null,
          })) ?? [],
      };
    }

    workouts[workoutId] = {
      id: workoutId,
      name: w.name,
      mode: w.mode,
      dayNumber: w.dayNumber,
      focusMuscleGroups: w.focusMuscleGroups ?? [],
      notes: w.notes ?? null,
      exerciseIds,
    };
  }

  return {
    workouts,
    exercises,
    workoutOrder,
    days: struct.days ?? days,
    weeks: struct.weeks,
  };
};

export const builderStateToStructureJson: BuilderStateToStructureJson = (
  state
) => {
  const workouts = state.workoutOrder.map((workoutId, index) => {
    const w = state.workouts[workoutId];

    return {
      id: w.id,
      name: w.name,
      mode: w.mode,
      dayNumber: index + 1,
      focusMuscleGroups: w.focusMuscleGroups,
      notes: w.notes ?? null,
      exercises: w.exerciseIds.map((exerciseId) => {
        const ex = state.exercises[exerciseId];

        return {
          id: ex.id,
          exerciseTemplateId: ex.exerciseTemplateId,
          exerciseType: ex.exerciseType,
          sets: ex.sets.map((s, i) => ({
            id: s.id,
            setNumber: i + 1,
            type: s.type,
            targetReps: s.targetReps ?? null,
            targetWeightKg: s.targetWeightKg ?? null,
            targetDurationSec: s.targetDurationSec ?? null,
          })),
        };
      }),
    };
  });

  return {
    days: state.days,
    weeks: state.weeks,
    workouts,
  };
};

function createDefaultWorkout(id: string, dayNumber: number): BuilderWorkout {
  return {
    id,
    name: `Workout ${dayNumber}`,
    mode: "STRENGTH",
    dayNumber,
    focusMuscleGroups: [],
    notes: null,
    exerciseIds: [],
  };
}
