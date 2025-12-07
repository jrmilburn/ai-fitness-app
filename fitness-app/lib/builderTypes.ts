import type { 
    ProgramTemplate,
    ExerciseTemplate,
    WorkoutMode,
    ExerciseType,
    SetType
} from "@prisma/client";

// ---------- structureJson shape stored in ProgramTemplate.structureJson ----------

export type ProgramTemplateStructure = {
  days: number;
  weeks: number;
  workouts: Array<{
    id: string;
    name: string;
    dayNumber: number;
    mode: WorkoutMode;
    focusMuscleGroups: string[];
    notes?: string | null;
    exercises: Array<{
      id: string;
      exerciseTemplateId: string;
      exerciseType: ExerciseType;
      sets: Array<{
        id: string;
        setNumber: number;
        type: SetType;
        targetReps?: number | null;
        targetWeightKg?: number | null;
        targetDurationSec?: number | null;
      }>;
    }>;
  }>;
};

// Prisma type with a typed structureJson
export type ProgramTemplateWithStructure = ProgramTemplate & {
  structureJson: ProgramTemplateStructure | null;
};

// ---------- internal builder state (Kanban-like) ----------

export type BuilderSet = {
  id: string;
  setNumber: number;
  type: SetType;
  targetReps?: number | null;
  targetWeightKg?: number | null;
  targetDurationSec: number | null;
};

export type BuilderExercise = {
  id: string;
  exerciseTemplateId: string;
  exerciseType: ExerciseType;
  sets: BuilderSet[];
};

export type BuilderWorkout = {
  id: string;
  name: string;
  mode: WorkoutMode;
  dayNumber: number;
  focusMuscleGroups: string[];
  notes?: string | null;
  exerciseIds: string[];
};

export type ProgramBuilderState = {
  workouts: Record<string, BuilderWorkout>;
  exercises: Record<string, BuilderExercise>;
  workoutOrder: string[]; // ordered workout IDs (like columnOrder)
  days: number;
  weeks: number;
};

// ---------- small ID helper ----------

export function createId(prefix: string) {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return `${prefix}-${crypto.randomUUID()}`;
  }
  return `${prefix}-${Math.random().toString(36).slice(2, 10)}`;
}

// ---------- converters between template <-> builder ----------

export function templateToBuilderState(
  template: ProgramTemplateWithStructure | null
): ProgramBuilderState {
  const days = template?.days ?? template?.structureJson?.days ?? 7;
  const weeks = template?.weeks ?? template?.structureJson?.weeks ?? 6;

  // ⚡ NO TEMPLATE PROVIDED OR NO STRUCTURE JSON:
  // -> return 2 default empty workouts with STABLE IDs
  if (!template?.structureJson) {
    const w1Id = "workout-1";
    const w2Id = "workout-2";

    return {
      days,
      weeks,
      workouts: {
        [w1Id]: {
          id: w1Id,
          name: "Workout 1",
          mode: "STRENGTH",
          dayNumber: 1,
          focusMuscleGroups: [],
          notes: null,
          exerciseIds: [],
        },
        [w2Id]: {
          id: w2Id,
          name: "Workout 2",
          mode: "STRENGTH",
          dayNumber: 2,
          focusMuscleGroups: [],
          notes: null,
          exerciseIds: [],
        },
      },
      exercises: {},
      workoutOrder: [w1Id, w2Id],
    };
  }

  // ✅ TEMPLATE WITH STRUCTURE JSON PROVIDED:
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
            targetDurationSec: s.targetDurationSec ?? null
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
    weeks: struct.weeks
  };
}



export function builderStateToStructureJson(
  state: ProgramBuilderState
): ProgramTemplateStructure {
  const workouts = state.workoutOrder.map((workoutId, index) => {
    const w = state.workouts[workoutId];

    return {
      id: w.id,
      name: w.name,
      mode: w.mode,
      dayNumber: index + 1, // recompute from order
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
            targetDurationSec: s.targetDurationSec ?? null
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
}
