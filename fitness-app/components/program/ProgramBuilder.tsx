"use client";

import * as React from "react";
import {
  DragDropContext,
  Droppable,
  type DropResult,
} from "@hello-pangea/dnd";

import type { ExerciseTemplate } from "@/generated/prisma";
import type {
  ProgramTemplateWithStructure,
  ProgramBuilderState,
} from "@/lib/builderTypes";
import {
  templateToBuilderState,
  builderStateToStructureJson,
  createId,
} from "@/lib/builderTypes";

import { WorkoutColumn } from "./WorkoutColumn";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

type ProgramBuilderProps = {
  initialTemplate?: ProgramTemplateWithStructure;
  exerciseTemplates: ExerciseTemplate[];
  onSubmit: (payload: ProgramTemplateWithStructure) => Promise<void> | void, existingTemplate : boolean;
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

  const [activeWorkoutId, setActiveWorkoutId] = React.useState<string | null>(
    null
  );

  const router = useRouter();

  React.useEffect(() => {

  if (initialTemplate) setExistingTemplate(true);

  }, [initialTemplate])

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
            },
            {
              id: createId("set"),
              setNumber: 2,
              type: "NORMAL",
              targetReps: 8,
              targetWeightKg: null,
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
        }),
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

  // convenience for mobile
  const activeIndex = activeWorkoutId
    ? state.workoutOrder.indexOf(activeWorkoutId)
    : -1;
  const activeWorkout =
    activeIndex >= 0 ? state.workouts[activeWorkoutId!] : null;
  const activeExercises =
    activeWorkout?.exerciseIds.map((id) => state.exercises[id]) ?? [];

  return (
    <div className="flex h-full flex-col">
      <div className="flex h-full flex-col rounded-xl border border-[#2E2E32] bg-[#121214] shadow-sm">
        {/* header / controls */}
        <div className="flex items-start justify-between gap-4 rounded-t-xl border-b border-[#2E2E32] bg-[#18181B] px-6 py-4">
          <div className="space-y-1">
            <h2 className="text-lg font-semibold text-zinc-50">
              Builder
            </h2>
          </div>

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
          </div>
        </div>

        {/* loading + error */}
        {(submitting || error) && (
          <div className="space-y-2 border-b border-[#2E2E32] bg-[#18181B] px-6 py-3">
            {submitting && (
              <div className="flex flex-col gap-1 rounded-lg border border-[#2E2E32] bg-[#121214] px-4 py-3 text-xs text-zinc-300">
                <p className="font-medium text-zinc-100">
                  Saving your program…
                </p>
                <p className="text-[0.7rem] text-zinc-400">
                  We’re creating your program so it’s ready to use on the workout
                  page.
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
                    />
                  );
                })}

                {provided.placeholder}

                <Button
                  type="button"
                  onClick={handleAddWorkout}
                  variant="outline"
                  disabled={submitting}
                  className="mt-2 flex w-[210px] flex-col items-center justify-center self-start rounded-lg border border-dashed border-[#3A3A40] bg-transparent px-3 py-3 text-xs font-medium text-zinc-300 transition-colors hover:border-[#A64DFF] hover:bg-[#2A173F] hover:text-white"
                >
                  + Add workout
                </Button>
              </div>
            )}
          </Droppable>

          {/* Mobile: tabbed days + single column */}
          <div className="flex flex-1 flex-col border-t border-[#2E2E32] px-4 py-3 md:hidden">
            {state.workoutOrder.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-3 text-center">
                <p className="text-sm font-medium text-zinc-200">
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
                <div className="mb-3 flex items-center gap-2 flex-wrap justify-center pb-1">
                  {state.workoutOrder.map((id, idx) => {
                    const workout = state.workouts[id];
                    const isActive = id === activeWorkoutId;

                    return (
                      <button
                        key={id}
                        type="button"
                        onClick={() => setActiveWorkoutId(id)}
                        className={[
                          "flex min-w-[96px] flex-col items-center justify-center rounded-xl px-3 py-2 text-xs font-medium transition-colors",
                          isActive
                            ? "bg-[#1C1C1E] text-zinc-50 shadow-sm border border-[#A64DFF]"
                            : "bg-[#18181B] text-zinc-400 border border-[#2E2E32]",
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
                    className="flex h-9 w-9 items-center justify-center rounded-full border-[#3A3A40] bg-[#18181B] text-zinc-200 hover:border-[#A64DFF] hover:bg-[#2A173F]"
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
                      draggable={false} // 👈 no column dragging on mobile
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
