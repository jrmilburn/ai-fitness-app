import type { ProgramTemplateStructure } from "@/lib/builderTypes";

export const SAMPLE_STRUCTURE: ProgramTemplateStructure = {
  days: 4,
  workouts: [
    {
      id: "workout-1",
      name: "Push Day",
      dayNumber: 1,
      mode: "STRENGTH",
      focusMuscleGroups: ["Chest", "Shoulders", "Triceps"],
      notes: "Focus on controlled eccentrics.",
      exercises: [
        {
          id: "exercise-1",
          exerciseTemplateId: "benchpress-template",
          exerciseType: "STRENGTH",
          sets: [
            {
              id: "set-1-1",
              setNumber: 1,
              type: "NORMAL",
              targetReps: 8,
              targetWeightKg: null,
            },
            {
              id: "set-1-2",
              setNumber: 2,
              type: "NORMAL",
              targetReps: 8,
              targetWeightKg: null,
            },
          ],
        },
        {
          id: "exercise-2",
          exerciseTemplateId: "incline-db-template",
          exerciseType: "STRENGTH",
          sets: [
            {
              id: "set-2-1",
              setNumber: 1,
              type: "NORMAL",
              targetReps: 10,
            },
            {
              id: "set-2-2",
              setNumber: 2,
              type: "NORMAL",
              targetReps: 10,
            },
          ],
        },
        {
          id: "exercise-3",
          exerciseTemplateId: "lat-raise-template",
          exerciseType: "STRENGTH",
          sets: [
            {
              id: "set-3-1",
              setNumber: 1,
              type: "NORMAL",
              targetReps: 12,
            },
            {
              id: "set-3-2",
              setNumber: 2,
              type: "NORMAL",
              targetReps: 12,
            },
            {
              id: "set-3-3",
              setNumber: 3,
              type: "NORMAL",
              targetReps: 12,
            },
          ],
        },
      ],
    },

    {
      id: "workout-2",
      name: "Pull Day",
      dayNumber: 2,
      mode: "STRENGTH",
      focusMuscleGroups: ["Back", "Biceps"],
      notes: "Squeeze at the top; minimize momentum.",
      exercises: [
        {
          id: "exercise-4",
          exerciseTemplateId: "pulldown-template",
          exerciseType: "STRENGTH",
          sets: [
            {
              id: "set-4-1",
              setNumber: 1,
              type: "NORMAL",
              targetReps: 10,
            },
            {
              id: "set-4-2",
              setNumber: 2,
              type: "NORMAL",
              targetReps: 10,
            },
          ],
        },
        {
          id: "exercise-5",
          exerciseTemplateId: "seated-row-template",
          exerciseType: "STRENGTH",
          sets: [
            {
              id: "set-5-1",
              setNumber: 1,
              type: "NORMAL",
              targetReps: 8,
            },
            {
              id: "set-5-2",
              setNumber: 2,
              type: "NORMAL",
              targetReps: 8,
            },
          ],
        },
      ],
    },

    {
      id: "workout-3",
      name: "Legs Day",
      dayNumber: 3,
      mode: "STRENGTH",
      focusMuscleGroups: ["Quads", "Hamstrings", "Glutes"],
      notes: null,
      exercises: [
        {
          id: "exercise-6",
          exerciseTemplateId: "squat-template",
          exerciseType: "STRENGTH",
          sets: [
            {
              id: "set-6-1",
              setNumber: 1,
              type: "NORMAL",
              targetReps: 6,
            },
            {
              id: "set-6-2",
              setNumber: 2,
              type: "NORMAL",
              targetReps: 6,
            },
            {
              id: "set-6-3",
              setNumber: 3,
              type: "NORMAL",
              targetReps: 6,
            },
          ],
        },
        {
          id: "exercise-7",
          exerciseTemplateId: "legpress-template",
          exerciseType: "STRENGTH",
          sets: [
            {
              id: "set-7-1",
              setNumber: 1,
              type: "NORMAL",
              targetReps: 12,
            },
            {
              id: "set-7-2",
              setNumber: 2,
              type: "NORMAL",
              targetReps: 12,
            },
          ],
        },
      ],
    },

    {
      id: "workout-4",
      name: "Upper Accessories",
      dayNumber: 4,
      mode: "MIXED",
      focusMuscleGroups: ["Arms", "Shoulders", "Upper Back"],
      notes: "Light day — focus on pump work.",
      exercises: [
        {
          id: "exercise-8",
          exerciseTemplateId: "bicep-curl-template",
          exerciseType: "STRENGTH",
          sets: [
            {
              id: "set-8-1",
              setNumber: 1,
              type: "NORMAL",
              targetReps: 15,
            },
            {
              id: "set-8-2",
              setNumber: 2,
              type: "NORMAL",
              targetReps: 15,
            },
          ],
        },
        {
          id: "exercise-9",
          exerciseTemplateId: "tricep-rope-template",
          exerciseType: "STRENGTH",
          sets: [
            {
              id: "set-9-1",
              setNumber: 1,
              type: "NORMAL",
              targetReps: 12,
            },
            {
              id: "set-9-2",
              setNumber: 2,
              type: "NORMAL",
              targetReps: 12,
            },
          ],
        },
      ],
    },
  ],
};


export const SAMPLE_TEMPLATE = {
  id: "sample-template-1",
  userId: null,
  user: null,
  name: "Sample 4-Day Program",
  goal: "HYPERTROPHY",
  length: 6,
  days: 4,
  aiPlanJson: null,
  createdAt: new Date(),
  updatedAt: new Date(),
  structureJson: SAMPLE_STRUCTURE,
};
