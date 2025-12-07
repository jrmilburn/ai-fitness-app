import * as React from "react";
import { useRouter } from "next/navigation";

import type { ProgramTemplateWithStructure } from "@/features/programs/model/builderTypes";
import { createId, type ProgramBuilderState } from "@/features/programs/model/builderTypes";
import {
  builderStateToStructureJson,
  templateToBuilderState,
} from "@/features/programs/model/transformers";

export type ProgramBuilderActions = {
  addWorkout: () => void;
  addExerciseToWorkout: (workoutId: string, templateId: string) => void;
  addSetToExercise: (exerciseId: string) => void;
  removeSetFromExercise: (exerciseId: string, setId: string) => void;
  renameWorkout: (workoutId: string, name: string) => void;
  replaceExercise: (
    workoutId: string,
    exerciseId: string,
    templateId: string
  ) => void;
  deleteExercise: (workoutId: string, exerciseId: string) => void;
  deleteWorkout: (workoutId: string) => void;
  reorderWorkouts: (sourceIndex: number, destinationIndex: number) => void;
  reorderExercises: (
    workoutId: string,
    sourceIndex: number,
    destinationIndex: number
  ) => void;
  moveExerciseToWorkout: (
    sourceWorkoutId: string,
    destinationWorkoutId: string,
    sourceIndex: number,
    destinationIndex: number,
    exerciseId: string
  ) => void;
};

export type UseProgramBuilderStateResult = {
  state: ProgramBuilderState;
  programName: string;
  isNameDialogOpen: boolean;
  pendingName: string;
  submitting: boolean;
  error: string | null;
  existingTemplate: boolean;
  activeWorkoutId: string | null;
  activeWorkoutIndex: number;
  activeWorkoutExercises: ProgramBuilderState["exercises"][string][];
  activeWorkout: ProgramBuilderState["workouts"][string] | null;
  actions: ProgramBuilderActions;
  setPendingName: React.Dispatch<React.SetStateAction<string>>;
  setIsNameDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveWorkoutId: React.Dispatch<React.SetStateAction<string | null>>;
  openNameDialog: () => void;
  saveProgramName: () => void;
  submit: () => Promise<void>;
};

export function useProgramBuilderState(
  initialTemplate: ProgramTemplateWithStructure | null,
  onSubmit: (
    payload: ProgramTemplateWithStructure,
    existingTemplate: boolean
  ) => Promise<void> | void
): UseProgramBuilderStateResult {
  const router = useRouter();
  const [state, setState] = React.useState<ProgramBuilderState>(() =>
    templateToBuilderState(initialTemplate)
  );
  const [submitting, setSubmitting] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [existingTemplate, setExistingTemplate] = React.useState(false);

  const [programName, setProgramName] = React.useState<string>(
    initialTemplate?.name ?? "New program"
  );
  const [isNameDialogOpen, setIsNameDialogOpen] = React.useState(false);
  const [pendingName, setPendingName] = React.useState<string>(
    initialTemplate?.name ?? "New program"
  );

  const [activeWorkoutId, setActiveWorkoutId] = React.useState<string | null>(
    null
  );

  const markDirty = React.useCallback(() => {
    setExistingTemplate(false);
  }, []);

  React.useEffect(() => {
    if (initialTemplate) {
      setExistingTemplate(true);
      setProgramName(initialTemplate.name);
      setPendingName(initialTemplate.name);
    }
  }, [initialTemplate]);

  React.useEffect(() => {
    if (!activeWorkoutId && state.workoutOrder.length > 0) {
      setActiveWorkoutId(state.workoutOrder[0]);
    } else if (
      activeWorkoutId &&
      !state.workoutOrder.includes(activeWorkoutId)
    ) {
      setActiveWorkoutId(state.workoutOrder.length ? state.workoutOrder[0] : null);
    }
  }, [activeWorkoutId, state.workoutOrder]);

  const addWorkout = React.useCallback(() => {
    const id = createId("workout");
    markDirty();

    setState((prev) => ({
      ...prev,
      workouts: {
        ...prev.workouts,
        [id]: {
          id,
          name: `Workout ${prev.workoutOrder.length + 1}`,
          mode: "STRENGTH",
          dayNumber: prev.workoutOrder.length + 1,
          focusMuscleGroups: [],
          notes: null,
          exerciseIds: [],
        },
      },
      workoutOrder: [...prev.workoutOrder, id],
    }));
    setActiveWorkoutId((prevActive) => prevActive ?? id);
  }, [markDirty]);

  const addExerciseToWorkout = React.useCallback(
    (workoutId: string, templateId: string) => {
      const workout = state.workouts[workoutId];
      if (!workout) return;

      markDirty();
      const exerciseId = createId("exercise");

      setState((prev) => ({
        ...prev,
        exercises: {
          ...prev.exercises,
          [exerciseId]: {
            id: exerciseId,
            exerciseTemplateId: templateId,
            exerciseType: "STRENGTH",
            sets: [
              {
                id: createId("set"),
                setNumber: 1,
                type: "NORMAL",
                targetReps: 8,
                targetWeightKg: null,
                targetDurationSec: null,
              },
              {
                id: createId("set"),
                setNumber: 2,
                type: "NORMAL",
                targetReps: 8,
                targetWeightKg: null,
                targetDurationSec: null,
              },
            ],
          },
        },
        workouts: {
          ...prev.workouts,
          [workoutId]: {
            ...workout,
            exerciseIds: [...workout.exerciseIds, exerciseId],
          },
        },
      }));
    },
    [markDirty, state.workouts]
  );

  const addSetToExercise = React.useCallback(
    (exerciseId: string) => {
      markDirty();

      setState((prev) => {
        const exercise = prev.exercises[exerciseId];
        if (!exercise) return prev;

        const nextSetNumber = exercise.sets.length + 1;

        const newSet = {
          id: createId("set"),
          setNumber: nextSetNumber,
          type: "NORMAL" as const,
          targetReps: 8,
          targetWeightKg: null,
          targetDurationSec: null,
        };

        return {
          ...prev,
          exercises: {
            ...prev.exercises,
            [exerciseId]: {
              ...exercise,
              sets: [...exercise.sets, newSet],
            },
          },
        };
      });
    },
    [markDirty]
  );

  const removeSetFromExercise = React.useCallback(
    (exerciseId: string, setId: string) => {
      markDirty();

      setState((prev) => {
        const exercise = prev.exercises[exerciseId];
        if (!exercise) return prev;

        const filteredSets = exercise.sets.filter((s) => s.id !== setId);

        if (filteredSets.length === 0) return prev;

        const renumbered = filteredSets.map((s, idx) => ({
          ...s,
          setNumber: idx + 1,
        }));

        return {
          ...prev,
          exercises: {
            ...prev.exercises,
            [exerciseId]: {
              ...exercise,
              sets: renumbered,
            },
          },
        };
      });
    },
    [markDirty]
  );

  const renameWorkout = React.useCallback(
    (workoutId: string, name: string) => {
      markDirty();
      setState((prev) => {
        const workout = prev.workouts[workoutId];
        if (!workout) return prev;

        return {
          ...prev,
          workouts: {
            ...prev.workouts,
            [workoutId]: {
              ...workout,
              name,
            },
          },
        };
      });
    },
    [markDirty]
  );

  const replaceExercise = React.useCallback(
    (workoutId: string, exerciseId: string, templateId: string) => {
      markDirty();
      setState((prev) => {
        const exercise = prev.exercises[exerciseId];
        if (!exercise) return prev;

        return {
          ...prev,
          exercises: {
            ...prev.exercises,
            [exerciseId]: {
              ...exercise,
              exerciseTemplateId: templateId,
            },
          },
        };
      });
    },
    [markDirty]
  );

  const deleteExercise = React.useCallback(
    (workoutId: string, exerciseId: string) => {
      markDirty();
      setState((prev) => {
        const workout = prev.workouts[workoutId];
        if (!workout) return prev;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { [exerciseId]: _, ...restExercises } = prev.exercises;

        return {
          ...prev,
          exercises: restExercises,
          workouts: {
            ...prev.workouts,
            [workoutId]: {
              ...workout,
              exerciseIds: workout.exerciseIds.filter((id) => id !== exerciseId),
            },
          },
        };
      });
    },
    [markDirty]
  );

  const deleteWorkout = React.useCallback(
    (workoutId: string) => {
      markDirty();

      setState((prev) => {
        const workout = prev.workouts[workoutId];
        if (!workout) return prev;

        const newOrder = prev.workoutOrder.filter((id) => id !== workoutId);

        const newExercises = { ...prev.exercises };
        workout.exerciseIds.forEach((exId) => {
          delete newExercises[exId];
        });
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { [workoutId]: _, ...restWorkouts } = prev.workouts;

        const updatedWorkouts: typeof restWorkouts = { ...restWorkouts };
        newOrder.forEach((id, idx) => {
          const w = updatedWorkouts[id];
          if (w) {
            updatedWorkouts[id] = {
              ...w,
              dayNumber: idx + 1,
            };
          }
        });

        if (activeWorkoutId === workoutId) {
          setActiveWorkoutId(newOrder.length ? newOrder[0] : null);
        }

        return {
          ...prev,
          workoutOrder: newOrder,
          workouts: updatedWorkouts,
          exercises: newExercises,
        };
      });
    },
    [activeWorkoutId, markDirty]
  );

  const reorderWorkouts = React.useCallback(
    (sourceIndex: number, destinationIndex: number) => {
      markDirty();

      setState((prev) => {
        const newOrder = Array.from(prev.workoutOrder);
        const [removed] = newOrder.splice(sourceIndex, 1);
        newOrder.splice(destinationIndex, 0, removed);

        const updatedWorkouts = { ...prev.workouts };
        newOrder.forEach((id, idx) => {
          const workout = updatedWorkouts[id];
          if (workout) {
            updatedWorkouts[id] = {
              ...workout,
              dayNumber: idx + 1,
            };
          }
        });

        return { ...prev, workoutOrder: newOrder, workouts: updatedWorkouts };
      });
    },
    [markDirty]
  );

  const reorderExercises = React.useCallback(
    (workoutId: string, sourceIndex: number, destinationIndex: number) => {
      markDirty();

      setState((prev) => {
        const workout = prev.workouts[workoutId];
        if (!workout) return prev;

        const newExerciseIds = Array.from(workout.exerciseIds);
        const [removed] = newExerciseIds.splice(sourceIndex, 1);
        newExerciseIds.splice(destinationIndex, 0, removed);

        return {
          ...prev,
          workouts: {
            ...prev.workouts,
            [workoutId]: {
              ...workout,
              exerciseIds: newExerciseIds,
            },
          },
        };
      });
    },
    [markDirty]
  );

  const moveExerciseToWorkout = React.useCallback(
    (
      sourceWorkoutId: string,
      destinationWorkoutId: string,
      sourceIndex: number,
      destinationIndex: number,
      exerciseId: string
    ) => {
      markDirty();

      setState((prev) => {
        const startWorkout = prev.workouts[sourceWorkoutId];
        const finishWorkout = prev.workouts[destinationWorkoutId];
        if (!startWorkout || !finishWorkout) return prev;

        const startExerciseIds = Array.from(startWorkout.exerciseIds);
        startExerciseIds.splice(sourceIndex, 1);
        const newStart = {
          ...startWorkout,
          exerciseIds: startExerciseIds,
        };

        const finishExerciseIds = Array.from(finishWorkout.exerciseIds);
        finishExerciseIds.splice(destinationIndex, 0, exerciseId);
        const newFinish = {
          ...finishWorkout,
          exerciseIds: finishExerciseIds,
        };

        return {
          ...prev,
          workouts: {
            ...prev.workouts,
            [newStart.id]: newStart,
            [newFinish.id]: newFinish,
          },
        };
      });
    },
    [markDirty]
  );

  const openNameDialog = React.useCallback(() => {
    setPendingName(programName);
    setIsNameDialogOpen(true);
  }, [programName]);

  const saveProgramName = React.useCallback(() => {
    const trimmed = pendingName.trim();
    if (!trimmed) return;
    setProgramName(trimmed);
    markDirty();
    setIsNameDialogOpen(false);
  }, [markDirty, pendingName]);

  const submit = React.useCallback(async () => {
    setSubmitting(true);
    setError(null);

    try {
      const structureJson = builderStateToStructureJson(state);

      let payload: ProgramTemplateWithStructure;

      if (initialTemplate && existingTemplate) {
        // Updating an existing template
        payload = {
          ...initialTemplate,
          name: programName,
          weeks: state.weeks,
          days: state.days,
          structureJson,           // if your type expects JsonValue, cast here
          updatedAt: new Date(),
        };
      } else {
        // Creating a new template
        payload = {
          id: createId("template"),
          name: programName,
          userId: null,
          goal: null,
          weeks: state.weeks,
          days: state.days,
          structureJson,           // or: structureJson: structureJson as JsonValue
          sptemplate: false,       // 🔥 this was missing in your fallback
          createdAt: new Date(),
          updatedAt: new Date(),
          // Optional fields (only if your type has them):
          // aiPlanJson: null,
          // user: null,
        };
      }

      const maybePromise = onSubmit(payload, existingTemplate);
      if (maybePromise && typeof maybePromise.then === "function") {
        await maybePromise;
      }

      router.push("/workout");
    } catch (err: unknown) {
      console.error(err);

      const message =
        err instanceof Error
          ? err.message
          : typeof err === "string"
          ? err
          : "Something went wrong creating this program.";

      setError(message);
    } finally {
      setSubmitting(false);
    }
  }, [existingTemplate, initialTemplate, onSubmit, programName, router, state]);


  const activeWorkoutIndex = activeWorkoutId
    ? state.workoutOrder.indexOf(activeWorkoutId)
    : -1;
  const activeWorkout =
    activeWorkoutId != null ? state.workouts[activeWorkoutId] : null;

  const activeWorkoutExercises =
    (activeWorkout?.exerciseIds
      .map((id : string) => state.exercises[id])
      .filter(Boolean) as ProgramBuilderState["exercises"][string][]) ?? [];

  return {
    state,
    programName,
    isNameDialogOpen,
    pendingName,
    submitting,
    error,
    existingTemplate,
    activeWorkoutId,
    activeWorkoutIndex,
    activeWorkoutExercises,
    activeWorkout,
    actions: {
      addWorkout,
      addExerciseToWorkout,
      addSetToExercise,
      removeSetFromExercise,
      renameWorkout,
      replaceExercise,
      deleteExercise,
      deleteWorkout,
      reorderWorkouts,
      reorderExercises,
      moveExerciseToWorkout,
    },
    setPendingName,
    setIsNameDialogOpen,
    setActiveWorkoutId,
    openNameDialog,
    saveProgramName,
    submit,
  };
}
