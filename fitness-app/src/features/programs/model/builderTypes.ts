import type { 
    ProgramTemplate,
    WorkoutMode,
    ExerciseType,
    SetType
} from "@prisma/client";

// ---------- structureJson shape stored in ProgramTemplate.structureJson ----------

export type ProgramTemplateStructure = {
  days: number;
  weeks: number;
  sptemplate: boolean;
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
  sptemplate: boolean;
};

// ---------- small ID helper ----------

export function createId(prefix: string) {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return `${prefix}-${crypto.randomUUID()}`;
  }
  return `${prefix}-${Math.random().toString(36).slice(2, 10)}`;
}

