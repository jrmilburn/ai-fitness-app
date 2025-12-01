"use client";

import * as React from "react";
import { Droppable, Draggable } from "@hello-pangea/dnd";
import type { ExerciseTemplate } from "@/generated/prisma";

import type {
  BuilderWorkout,
  BuilderExercise,
} from "@/lib/builderTypes";

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
            className="m-2 border border-black/5 rounded min-w-[260px] flex flex-col bg-white"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <div className="p-2 flex items-center justify-between border-b bg-[orange]">
              <div className="flex flex-col">
                <span className="text-xs text-muted-foreground">
                  Day {index + 1}
                </span>
                <span className="font-medium text-sm">{workout.name}</span>
              </div>
            </div>

            {/* exercise list */}
            <Droppable droppableId={workout.id} type="exercise">
              {(dropProvided, snapshot) => (
                <div
                  ref={dropProvided.innerRef}
                  {...dropProvided.droppableProps}
                  className="p-2 grow min-h-[100px]"
                  style={{
                    background: snapshot.isDraggingOver ? "#e7f5ff" : "white",
                    transition: "background-color 0.2s ease",
                  }}
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
            <div className="border-t p-2 flex">
              <Button
                type="button"
                size="sm"
                variant="secondary"
                className="w-full"
                onClick={() => setPickerOpen(true)}
              >
                Add exercise
              </Button>
            </div>
          </div>
        )}
      </Draggable>

      {/* Exercise template picker modal */}
      <Dialog open={pickerOpen} onOpenChange={setPickerOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Select exercise for {workout.name}</DialogTitle>
          </DialogHeader>

          <div className="mt-4 max-h-[400px] overflow-y-auto space-y-2">
            {exerciseTemplates.length === 0 ? (
              <p className="text-sm text-muted-foreground">
                No exercise templates available yet.
              </p>
            ) : (
              <div className="grid grid-cols-1 gap-2">
                {exerciseTemplates.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => handleSelectTemplate(t.id)}
                    className="w-full text-left border rounded px-3 py-2 text-sm hover:bg-muted transition"
                  >
                    <div className="font-medium">{t.name}</div>
                    {t.description ? (
                      <div className="text-xs text-muted-foreground line-clamp-2">
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
