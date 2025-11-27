"use client";

import * as React from "react";
import { Draggable } from "@hello-pangea/dnd";
import type { ExerciseTemplate } from "@/generated/prisma";

import type { BuilderExercise } from "@/lib/builderTypes";

type ExerciseCardProps = {
  exercise: BuilderExercise;
  index: number;
  exerciseTemplates: ExerciseTemplate[];
};

export function ExerciseCard({
  exercise,
  index,
  exerciseTemplates,
}: ExerciseCardProps) {
  const template = exerciseTemplates.find(
    (t) => t.id === exercise.exerciseTemplateId
  );

  return (
    <Draggable draggableId={exercise.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="border border-black/5 p-2 mb-2 rounded bg-white text-xs"
          style={{
            background: snapshot.isDragging ? "#e5dbff" : "white",
            ...provided.draggableProps.style,
          }}
        >
          <div className="flex justify-between items-center">
            <div className="font-medium text-sm">
              {template?.name ?? "Unnamed exercise"}
            </div>
            <span className="text-[10px] text-muted-foreground">
              {exercise.exerciseType}
            </span>
          </div>
          <div className="text-[11px] text-muted-foreground mt-1">
            {exercise.sets.length} sets
          </div>
        </div>
      )}
    </Draggable>
  );
}
