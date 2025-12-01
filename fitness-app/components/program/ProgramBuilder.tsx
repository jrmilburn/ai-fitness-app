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
  onSubmit: (payload: ProgramTemplateWithStructure) => Promise<void> | void;
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

  const router = useRouter();

  // ---- DnD handlers ----

  const handleDragEnd = (result: DropResult) => {
    const { destination, source, draggableId, type } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (type === "workout") {
      // reorder workouts
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
      // reorder within same workout
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

    // move exercise across workouts
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

  // ---- simple helpers to add workout/exercise in UI ----

  const handleAddWorkout = () => {
    const id = createId("workout");

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
  };

  const handleAddExerciseToWorkout = (workoutId: string, templateId: string) => {
    const workout = state.workouts[workoutId];
    if (!workout) return;

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

  // ---- submit -> return a ProgramTemplate-like payload ----

  const handleSubmit = async () => {
    setSubmitting(true);
    setError(null);

    try {
      const structureJson = builderStateToStructureJson(state);

      const payload: ProgramTemplateWithStructure = {
        ...(initialTemplate ?? {
          // these will normally be set on the server
          id: "",
          userId: null,
          user: null,
          name: "",
          goal: null,
          length: state.days,
          days: state.days,
          aiPlanJson: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        }),
        structureJson,
      };

      // support async or sync onSubmit
      const maybePromise = onSubmit(payload);
      if (maybePromise && typeof (maybePromise as any).then === "function") {
        await maybePromise;
      }

      // ✅ once created, head to workout page
      router.push("/workout");
    } catch (err: any) {
      setError(err.message ?? "Failed to create program.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="space-y-4 flex flex-col h-full">
      {/* header / controls */}
      <div className="flex items-center justify-between p-8">
        <div>
          <h2 className="text-xl font-semibold">Program Builder</h2>
          <p className="text-sm text-muted-foreground">
            Drag workouts and exercises to reorder. This defines a single week
            that will be duplicated when the program is created.
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            type="button"
            onClick={handleSubmit}
            variant="default"
            disabled={submitting}
          >
            {submitting ? "Creating…" : "Create program"}
          </Button>
        </div>
      </div>

      {/* friendly loading + error state */}
      <div className="px-8 space-y-3">
        {submitting && (
          <div className="rounded-2xl border bg-slate-50 px-4 py-3 text-sm animate-pulse">
            <p className="font-medium mb-1">Saving your program… 💾</p>
            <p className="text-xs text-muted-foreground">
              We’re creating your program so you can start tracking your
              workouts. This should only take a moment.
            </p>
          </div>
        )}

        {error && (
          <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm">
            <p className="font-medium text-red-700 mb-1">
              Something went wrong.
            </p>
            <p className="text-xs text-red-600">{error}</p>
          </div>
        )}
      </div>

      {/* DnD area */}
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable
          droppableId="all-workouts"
          direction="horizontal"
          type="workout"
        >
          {(provided) => (
            <div
              className="flex gap-4 overflow-x-auto pb-4 flex-1 justify-self-start items-start px-8"
              ref={provided.innerRef}
              {...provided.droppableProps}
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
              <Button
                type="button"
                className="px-3 py-1 rounded border text-sm self-start mt-2 w-[200px]"
                onClick={handleAddWorkout}
                variant="secondary"
                disabled={submitting}
              >
                Add workout
              </Button>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
