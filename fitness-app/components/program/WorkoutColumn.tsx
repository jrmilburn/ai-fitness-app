"use client";

import * as React from "react";
import { Droppable, Draggable } from "@hello-pangea/dnd";
import type { ExerciseTemplate } from "@/generated/prisma";

import type {
  BuilderWorkout,
  BuilderExercise,
} from "@/lib/builderTypes";

import { ExerciseCard } from "./Exercise";

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
  const handleAddExercise = (templateId: string) => {
    onAddExercise(workout.id, templateId);
  };

  return (
    <Draggable draggableId={workout.id} index={index}>
      {(provided) => (
        <div
          className="m-2 border border-black/5 rounded w-[260px] flex flex-col bg-white"
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <div
            className="p-2 flex items-center justify-between border-b"
            {...provided.dragHandleProps}
          >
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

          {/* simple exercise add control – you can replace with a nicer UI */}
          <div className="border-t p-2">
            <label className="block text-xs mb-1 text-muted-foreground">
              Add exercise
            </label>
            <select
              className="w-full border rounded px-2 py-1 text-xs"
              defaultValue=""
              onChange={(e) => {
                const value = e.target.value;
                if (!value) return;
                handleAddExercise(value);
                e.target.value = "";
              }}
            >
              <option value="">Select template...</option>
              {exerciseTemplates.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </Draggable>
  );
}
