"use client";

import * as React from "react";
import { Droppable, Draggable } from "@hello-pangea/dnd";
import type { ExerciseTemplate } from "@/generated/prisma";

import type { BuilderWorkout, BuilderExercise } from "@/lib/builderTypes";

import { ExerciseCard } from "./Exercise";

// shadcn UI
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type WorkoutColumnProps = {
  workout: BuilderWorkout;
  exercises: BuilderExercise[];
  index: number;
  exerciseTemplates: ExerciseTemplate[];
  onAddExercise: (workoutId: string, templateId: string) => void;
};

export function WorkoutColumn({
  workout,
  exercises,
  index,
  exerciseTemplates,
  onAddExercise,
}: WorkoutColumnProps) {
  const [pickerOpen, setPickerOpen] = React.useState(false);

  const handleAddExercise = (templateId: string) => {
    onAddExercise(workout.id, templateId);
  };

  const handleSelectTemplate = (templateId: string) => {
    handleAddExercise(templateId);
    setPickerOpen(false);
  };

  return (
    <>
      <Draggable draggableId={workout.id} index={index}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className="m-2 flex min-w-[260px] flex-col rounded-lg border border-[#2E2E32] bg-[#1C1C1E] shadow-sm"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#2E2E32] bg-[#18181B] px-3 py-2 rounded-t-lg">
              <div className="flex flex-col gap-0.5">
                <span className="text-[0.65rem] uppercase tracking-wide text-zinc-500">
                  Day {index + 1}
                </span>
                <span className="text-sm font-medium text-zinc-50">
                  {workout.name}
                </span>
              </div>

              <div className="inline-flex items-center gap-1 rounded-full border border-[#2E2E32] px-2 py-[2px] text-[0.65rem] text-zinc-400">
                <span className="h-1.5 w-1.5 rounded-full bg-[#A64DFF]" />
                Workout
              </div>
            </div>

            {/* Exercise list */}
            <Droppable droppableId={workout.id} type="exercise">
              {(dropProvided, snapshot) => (
                <div
                  ref={dropProvided.innerRef}
                  {...dropProvided.droppableProps}
                  className={`grow min-h-[110px] p-3 rounded-b-lg border-b border-[#2E2E32] transition-colors ${
                    snapshot.isDraggingOver
                      ? "bg-[#232327]"
                      : "bg-[#18181B]"
                  }`}
                >
                  {exercises.map((exercise, exIndex) => (
                    <ExerciseCard
                      key={exercise.id}
                      exercise={exercise}
                      index={exIndex}
                      exerciseTemplates={exerciseTemplates}
                    />
                  ))}
                  {dropProvided.placeholder}
                </div>
              )}
            </Droppable>

            {/* Add exercise button */}
            <div className="border-t border-[#2E2E32] bg-[#18181B] px-3 py-2 rounded-b-lg">
              <Button
                type="button"
                size="sm"
                variant="outline"
                onClick={() => setPickerOpen(true)}
                className="w-full justify-center rounded-md border border-dashed border-[#3A3A40] bg-transparent text-xs font-medium text-zinc-300 hover:border-[#A64DFF] hover:bg-[#2A173F] hover:text-white transition-colors"
              >
                + Add exercise
              </Button>
            </div>
          </div>
        )}
      </Draggable>

      {/* Exercise template picker modal */}
      <Dialog open={pickerOpen} onOpenChange={setPickerOpen}>
        <DialogContent className="max-w-lg border border-[#2E2E32] bg-[#1C1C1E] text-zinc-50">
          <DialogHeader>
            <DialogTitle className="text-sm font-medium text-zinc-50">
              Select exercise for{" "}
              <span className="text-[#A64DFF]">{workout.name}</span>
            </DialogTitle>
          </DialogHeader>

          <div className="mt-4 max-h-[400px] space-y-2 overflow-y-auto">
            {exerciseTemplates.length === 0 ? (
              <p className="text-sm text-zinc-400">
                No exercise templates available yet.
              </p>
            ) : (
              <div className="grid grid-cols-1 gap-2">
                {exerciseTemplates.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => handleSelectTemplate(t.id)}
                    className="w-full rounded-md border border-[#2E2E32] bg-[#18181B] px-3 py-2 text-left text-sm text-zinc-100 transition-colors hover:border-[#A64DFF] hover:bg-[#2A173F]"
                  >
                    <div className="font-medium">{t.name}</div>
                    {t.description ? (
                      <div className="mt-1 text-xs text-zinc-400 line-clamp-2">
                        {t.description}
                      </div>
                    ) : null}
                  </button>
                ))}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
