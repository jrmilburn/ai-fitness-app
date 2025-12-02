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

export function ExerciseCard({ exercise, index, exerciseTemplates }: ExerciseCardProps) {
  const template = exerciseTemplates.find(
    (t) => t.id === exercise.exerciseTemplateId
  );

  return (
    <Draggable draggableId={exercise.id} index={index}>
      {(provided, snapshot) => {
        const isDragging = snapshot.isDragging;

        return (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className={`
              mb-2 rounded-md border px-3 py-2 text-xs transition-all
              ${isDragging
                ? "border-[#A64DFF] bg-[#2A173F]/50 shadow-md"
                : "border-[#2E2E32] bg-[#18181B]"
              }
            `}
            style={{
              ...provided.draggableProps.style,
            }}
          >
            {/* Top row: name + type */}
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium text-zinc-100">
                {template?.name ?? "Unnamed exercise"}
              </div>

              <span className="rounded-full border border-[#2E2E32] bg-[#121214] px-2 py-[1px] text-[10px] uppercase tracking-wide text-zinc-400">
                {exercise.exerciseType}
              </span>
            </div>

            {/* Sets */}
            <div className="mt-1 text-[11px] text-zinc-500">
              {exercise.sets.length} sets
            </div>
          </div>
        );
      }}
    </Draggable>
  );
}
