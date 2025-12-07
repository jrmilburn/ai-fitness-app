"use client";

import * as React from "react";
import {
  DragDropContext,
  Droppable,
  type DropResult,
} from "@hello-pangea/dnd";

import type { ExerciseTemplate } from "@prisma/client";
import type {
  ProgramTemplateWithStructure,
  ProgramBuilderState,
} from "@/features/programs/model/builderTypes";
import {
  templateToBuilderState,
  builderStateToStructureJson,
  createId,
} from "@/features/programs/model/builderTypes";

import { MoreVerticalIcon, Pencil } from "lucide-react";

import { WorkoutColumn } from "./WorkoutColumn";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/shared/ui/dialog";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/shared/ui/dropdown-menu";


import { useRouter } from "next/navigation";

type ProgramBuilderProps = {
  initialTemplate?: ProgramTemplateWithStructure;
  exerciseTemplates: ExerciseTemplate[];
  onSubmit: (
    payload: ProgramTemplateWithStructure,
    existingTemplate: boolean
  ) => Promise<void> | void;
};

export function ProgramBuilder({
  initialTemplate,
  exerciseTemplates,
  onSubmit,
}: ProgramBuilderProps) {
  const [state, setState] = React.useState<ProgramBuilderState>(() =>
    templateToBuilderState(initialTemplate ?? null)
  );
  const [submitting, setSubmitting] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [existingTemplate, setExistingTemplate] = React.useState(false); // use to determine if program changes and needs a new template

  // --- program name state ---
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

  const router = useRouter();

  React.useEffect(() => {
    if (initialTemplate) {
      setExistingTemplate(true);
      setProgramName(initialTemplate.name);
      setPendingName(initialTemplate.name);
    }
  }, [initialTemplate]);

  // keep mobile active workout in sync
  React.useEffect(() => {
    if (!activeWorkoutId && state.workoutOrder.length > 0) {
      setActiveWorkoutId(state.workoutOrder[0]);
    } else if (
      activeWorkoutId &&
      !state.workoutOrder.includes(activeWorkoutId)
    ) {
      // if a workout was removed, fall back to first
      setActiveWorkoutId(
        state.workoutOrder.length ? state.workoutOrder[0] : null
      );
    }
  }, [activeWorkoutId, state.workoutOrder]);

  // ---- DnD handlers ----
  const handleDragEnd = (result: DropResult) => {
    const { destination, source, draggableId, type } = result;

    setExistingTemplate(false);

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (type === "workout") {
      const newOrder = Array.from(state.workoutOrder);
      newOrder.splice(source.index, 1);
      newOrder.splice(destination.index, 0, draggableId);

      setState((prev) => ({
        ...prev,
        workoutOrder: newOrder,
      }));
      return;
    }

    // type === "exercise"
    const startWorkout = state.workouts[source.droppableId];
    const finishWorkout = state.workouts[destination.droppableId];

    if (!startWorkout || !finishWorkout) return;

    if (startWorkout === finishWorkout) {
      const newExerciseIds = Array.from(startWorkout.exerciseIds);
      newExerciseIds.splice(source.index, 1);
      newExerciseIds.splice(destination.index, 0, draggableId);

      const newWorkout = {
        ...startWorkout,
        exerciseIds: newExerciseIds,
      };

      setState((prev) => ({
        ...prev,
        workouts: {
          ...prev.workouts,
          [newWorkout.id]: newWorkout,
        },
      }));
      return;
    }

    const startExerciseIds = Array.from(startWorkout.exerciseIds);
    startExerciseIds.splice(source.index, 1);
    const newStart = {
      ...startWorkout,
      exerciseIds: startExerciseIds,
    };

    const finishExerciseIds = Array.from(finishWorkout.exerciseIds);
    finishExerciseIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finishWorkout,
      exerciseIds: finishExerciseIds,
    };

    setState((prev) => ({
      ...prev,
      workouts: {
        ...prev.workouts,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    }));
  };

  // ---- helpers ----
  const handleAddWorkout = () => {
    const id = createId("workout");

    setExistingTemplate(false);

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
  };

  const handleAddExerciseToWorkout = (
    workoutId: string,
    templateId: string
  ) => {
    const workout = state.workouts[workoutId];
    if (!workout) return;

    setExistingTemplate(false);

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
              targetDurationSec: null
            },
            {
              id: createId("set"),
              setNumber: 2,
              type: "NORMAL",
              targetReps: 8,
              targetWeightKg: null,
              targetDurationSec: null
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
  };

  const handleAddSetToExercise = (exerciseId: string) => {
    setExistingTemplate(false);

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
        targetDurationSec: null
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
  };

  // ---- program name modal handlers ----
  const handleOpenNameDialog = () => {
    setPendingName(programName);
    setIsNameDialogOpen(true);
  };

  const handleSaveProgramName = () => {
    const trimmed = pendingName.trim();
    if (!trimmed) return;
    setProgramName(trimmed);
    setExistingTemplate(false);
    setIsNameDialogOpen(false);
  };

  // ---- submit ----
  const handleSubmit = async () => {
    setSubmitting(true);
    setError(null);

    try {
      const structureJson = builderStateToStructureJson(state);

      const payload: ProgramTemplateWithStructure = {
        ...(initialTemplate ?? {
          id: "",
          userId: null,
          user: null,
          name: "",
          goal: null,
          weeks: state.weeks,
          days: state.days,
          aiPlanJson: null,
          createdAt: new Date(),
          updatedAt: new Date(),
          structureJson: null,
        }),
        name: programName,
        structureJson,
      };

      const maybePromise = onSubmit(payload, existingTemplate);
      if (maybePromise && typeof (maybePromise as any).then === "function") {
        await maybePromise;
      }

      router.push("/workout");
    } catch (err: any) {
      setError(err.message ?? "Failed to create program.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleRenameWorkout = (workoutId: string, name: string) => {
    setExistingTemplate(false);
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
  };  

  const handleReplaceExercise = (
    workoutId: string,
    exerciseId: string,
    templateId: string
  ) => {
    setExistingTemplate(false);
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
  };  

  const handleDeleteExercise = (workoutId: string, exerciseId: string) => {
    setExistingTemplate(false);
    setState((prev) => {
      const workout = prev.workouts[workoutId];
      if (!workout) return prev;  

      const { [exerciseId]: _removed, ...restExercises } = prev.exercises;  

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
  };

  const handleDeleteWorkout = (workoutId: string) => {
    setExistingTemplate(false);

    setState((prev) => {
      const workout = prev.workouts[workoutId];
      if (!workout) return prev;

      // 1. Remove workout from order
      const newOrder = prev.workoutOrder.filter((id) => id !== workoutId);

      // 2. Remove all exercises that belong to this workout
      const newExercises = { ...prev.exercises };
      workout.exerciseIds.forEach((exId) => {
        delete newExercises[exId];
      });

      // 3. Remove the workout itself
      const { [workoutId]: _removedWorkout, ...restWorkouts } = prev.workouts;

      // 4. Renumber dayNumber based on new order
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

      // 5. Update activeWorkoutId (outer state), if needed
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
  };

  const handleRemoveSetFromExercise = (exerciseId: string, setId: string) => {
  setExistingTemplate(false);

  setState((prev) => {
    const exercise = prev.exercises[exerciseId];
    if (!exercise) return prev;

    const filteredSets = exercise.sets.filter((s) => s.id !== setId);

    // Enforce minimum of 1 set
    if (filteredSets.length === 0) return prev;

    // Renumber setNumber
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
};





  // convenience for mobile
  const activeIndex = activeWorkoutId
    ? state.workoutOrder.indexOf(activeWorkoutId)
    : -1;
  const activeWorkout =
    activeIndex >= 0 ? state.workouts[activeWorkoutId!] : null;
  const activeExercises =
    activeWorkout?.exerciseIds.map((id) => state.exercises[id]) ?? [];

  return (
    <div className="flex h-full flex-col md:pt-4">
      <div className="flex h-full flex-col rounded-xl border border-[var(--border-strong)] bg-[var(--surface-tertiary)] shadow-sm">
        {/* header / controls */}
        <div className="flex items-start justify-between gap-4 rounded-t-xl border-b border-[var(--border-strong)] bg-[var(--surface-secondary)] px-6 py-4">
          {/* Left: program name */}
          <div className="space-y-1">
            <h2 className="text-lg font-semibold text-[var(--text-strong)]">
              {programName}
            </h2>
            {/* optional helper text later if you want */}
          </div>

          {/* Right: menu + primary action */}
          <div className="flex items-center gap-2">

            <Button
              type="button"
              onClick={handleSubmit}
              variant="default"
              disabled={submitting}
              className="rounded-md border-0 bg-[#A64DFF] px-4 py-2 text-xs font-medium text-white shadow-sm transition-colors hover:bg-[#B56BFF] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting ? "Creating…" : "Create program"}
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  type="button"
                  variant="ghost"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full text-[var(--text-strong)] hover:bg-[var(--surface-tertiary)] hover:text-[var(--text-strong)]"
                >
                  <MoreVerticalIcon className="h-4 w-4" aria-hidden="true" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="border-[var(--border-strong)] bg-[var(--surface-secondary)] text-xs text-[var(--text-strong)]"
              >
                <DropdownMenuItem
                  onClick={handleOpenNameDialog}
                  className="cursor-pointer text-xs hover:bg-[var(--surface-accent)]"
                >
                  Rename program
                </DropdownMenuItem>
                {/* future options can go here */}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>


        {/* name dialog */}
        <Dialog open={isNameDialogOpen} onOpenChange={setIsNameDialogOpen}>
          <DialogContent className="bg-[var(--surface-secondary)] border-[var(--border-strong)]">
            <DialogHeader>
              <DialogTitle className="text-[var(--text-strong)]">
                Rename program
              </DialogTitle>
            </DialogHeader>
            <div className="mt-3 space-y-2">
              <label className="text-xs font-medium text-[var(--text-muted)]">
                Program name
              </label>
              <Input
                value={pendingName}
                autoFocus
                onChange={(e) => setPendingName(e.target.value)}
                placeholder="e.g. Push/Pull/Legs – 4 Day Strength"
                className="bg-[var(--surface-tertiary)]! border-[var(--border-strong)]! text-sm text-[var(--text-strong)] placeholder:text-[var(--text-strong)]"
              />
            </div>
            <DialogFooter className="mt-4 flex gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsNameDialogOpen(false)}
                className="border-[var(--border-strong)]! bg-[var(--surface-tertiary)]! text-xs text-[var(--text-muted)] hover:bg-[#202024]! hover:text-white!"
              >
                Cancel
              </Button>
              <Button
                type="button"
                onClick={handleSaveProgramName}
                disabled={!pendingName.trim()}
                className="bg-[#A64DFF]! text-xs text-white hover:bg-[#B56BFF]! disabled:opacity-60"
              >
                Save name
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* loading + error */}
        {(submitting || error) && (
          <div className="space-y-2 border-b border-[var(--border-strong)] bg-[var(--surface-secondary)] px-6 py-3">
            {submitting && (
              <div className="flex flex-col gap-1 rounded-lg border border-[var(--border-strong)] bg-[var(--surface-tertiary)] px-4 py-3 text-xs text-[var(--text-muted)]">
                <p className="font-medium text-[var(--text-strong)]">
                  Saving your program…
                </p>
                <p className="text-[0.7rem] text-[var(--text-muted)]">
                  We’re creating your program so it’s ready to use on the
                  workout page.
                </p>
              </div>
            )}

            {error && (
              <div className="flex flex-col gap-1 rounded-lg border border-red-500/70 bg-red-500/10 px-4 py-3 text-xs">
                <p className="font-medium text-red-300">
                  Something went wrong.
                </p>
                <p className="text-[0.7rem] text-red-200">{error}</p>
              </div>
            )}
          </div>
        )}

        <DragDropContext onDragEnd={handleDragEnd}>
          {/* Desktop: multi-column builder */}
          <Droppable
            droppableId="all-workouts"
            direction="horizontal"
            type="workout"
          >
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="hidden flex-1 items-start gap-4 overflow-x-auto px-6 py-4 md:flex"
              >
                {state.workoutOrder.map((workoutId, index) => {
                  const workout = state.workouts[workoutId];
                  const exercises = workout.exerciseIds.map(
                    (id) => state.exercises[id]
                  );

                  return (
                  <WorkoutColumn
                    key={workout.id}
                    workout={workout}
                    exercises={exercises}
                    index={index}
                    exerciseTemplates={exerciseTemplates}
                    onAddExercise={handleAddExerciseToWorkout}
                    onAddSetToExercise={handleAddSetToExercise}
                    onRenameWorkout={handleRenameWorkout}
                    onReplaceExercise={handleReplaceExercise}
                    onDeleteExercise={handleDeleteExercise}
                    onDeleteWorkout={handleDeleteWorkout}
                    onRemoveSetFromExercise={handleRemoveSetFromExercise}
                  />

                  );
                })}

                {provided.placeholder}

                <Button
                  type="button"
                  onClick={handleAddWorkout}
                  variant="outline"
                  disabled={submitting}
                  className="mt-2 flex w-[210px] flex-col items-center justify-center self-start rounded-lg border border-dashed border-[var(--border-subtle)] bg-transparent px-3 py-3 text-xs font-medium text-[var(--text-muted)] transition-colors hover:border-[#A64DFF] hover:bg-[var(--surface-accent)] hover:text-white"
                >
                  + Add workout
                </Button>
              </div>
            )}
          </Droppable>

          {/* Mobile: tabbed days + single column */}
          <div className="flex flex-1 flex-col border-t border-[var(--border-strong)] md:px-4 py-3 md:hidden">
            {state.workoutOrder.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-3 text-center">
                <p className="text-sm font-medium text-[var(--text-muted)]">
                  This week has no workouts yet.
                </p>
                <Button
                  type="button"
                  onClick={handleAddWorkout}
                  className="rounded-full bg-[#A64DFF] px-5 py-2 text-xs font-medium text-white hover:bg-[#B56BFF]"
                >
                  + Add first workout
                </Button>
              </div>
            ) : (
              <>
                {/* Tabs */}
                <div className="mb-3 flex flex-wrap items-center justify-center gap-2 pb-1">
                  {state.workoutOrder.map((id, idx) => {
                    const isActive = id === activeWorkoutId;

                    return (
                      <button
                        key={id}
                        type="button"
                        onClick={() => setActiveWorkoutId(id)}
                        className={[
                          "flex min-w-[96px] flex-col items-center justify-center rounded-xl px-3 py-2 text-xs font-medium transition-colors",
                          isActive
                            ? "bg-[var(--surface-tertiary)] text-[var(--text-strong)] shadow-sm border border-[#A64DFF]"
                            : "bg-[var(--surface-secondary)] text-[var(--text-muted)] border border-[var(--border-strong)]",
                        ].join(" ")}
                      >
                        <span className="text-[0.7rem] uppercase tracking-wide">
                          Day {idx + 1}
                        </span>
                      </button>
                    );
                  })}

                  <Button
                    type="button"
                    onClick={handleAddWorkout}
                    variant="outline"
                    disabled={submitting}
                    className="flex h-9 w-9 items-center justify-center rounded-full border-[var(--border-subtle)] bg-[var(--surface-secondary)] text-[var(--text-muted)] hover:border-[#A64DFF] hover:bg-[var(--surface-accent)]"
                  >
                    +
                  </Button>
                </div>

                {/* Active workout */}
                {activeWorkout && (
                  <div className="pb-2">
                    <WorkoutColumn
                      workout={activeWorkout}
                      exercises={activeExercises}
                      index={activeIndex}
                      exerciseTemplates={exerciseTemplates}
                      onAddExercise={handleAddExerciseToWorkout}
                      onAddSetToExercise={handleAddSetToExercise}
                      onDeleteWorkout={handleDeleteWorkout}
                      onDeleteExercise={handleDeleteExercise}
                      onReplaceExercise={handleReplaceExercise}
                      onRenameWorkout={handleRenameWorkout}
                      onRemoveSetFromExercise={handleRemoveSetFromExercise}
                      draggable={false}
                    />
                  </div>
                )}
              </>
            )}
          </div>
        </DragDropContext>
      </div>
    </div>
  );
}
