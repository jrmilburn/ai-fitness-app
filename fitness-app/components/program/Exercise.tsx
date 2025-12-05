"use client";

import * as React from "react";
import { Draggable } from "@hello-pangea/dnd";
import type { ExerciseTemplate } from "@/generated/prisma";
import type { BuilderExercise } from "@/lib/builderTypes";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type ExerciseCardProps = {
  exercise: BuilderExercise;
  index: number;
  exerciseTemplates: ExerciseTemplate[];
  onAddSet: (exerciseId: string) => void;
};

export function ExerciseCard({
  exercise,
  index,
  exerciseTemplates,
  onAddSet,
}: ExerciseCardProps) {
  const template = exerciseTemplates.find(
    (t) => t.id === exercise.exerciseTemplateId
  );

  const [open, setOpen] = React.useState(false);

  const handleCardClick = () => {
    setOpen(true);
  };

  const handleAddSetClick = () => {
    onAddSet(exercise.id);
  };

  return (
    <>
      <Draggable draggableId={exercise.id} index={index}>
        {(provided, snapshot) => {
          const isDragging = snapshot.isDragging;

          return (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              onClick={handleCardClick}
              className={`
                mb-2 rounded-md border px-3 py-2 text-xs transition-all cursor-pointer
                ${
                  isDragging
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

              {/* Sets summary */}
              <div className="mt-1 text-[11px] text-zinc-500">
                {exercise.sets.length} set{exercise.sets.length !== 1 && "s"}
              </div>
            </div>
          );
        }}
      </Draggable>

      {/* Sets modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md border border-[#2E2E32] bg-[#1C1C1E] text-zinc-50">
          <DialogHeader>
            <DialogTitle className="text-sm font-medium text-zinc-50">
              Sets for{" "}
              <span className="text-[#A64DFF]">
                {template?.name ?? "Unnamed exercise"}
              </span>
            </DialogTitle>
          </DialogHeader>

          <div className="mt-3 space-y-2 text-xs">
            {exercise.sets.length === 0 ? (
              <p className="text-zinc-400">No sets yet. Add your first set.</p>
            ) : (
              <div className="space-y-1 rounded-md border border-[#2E2E32] bg-[#18181B] p-2">
                {exercise.sets.map((set) => (
                  <div
                    key={set.id}
                    className="flex items-center justify-between rounded px-2 py-1 text-[11px]"
                  >
                    <span className="text-zinc-300">
                      Set {set.setNumber}
                    </span>
                    <span className="text-zinc-400">
                      {set.targetReps != null && (
                        <>
                          {set.targetReps} reps
                          {set.targetWeightKg != null && " @ "}
                        </>
                      )}
                      {set.targetWeightKg != null && `${set.targetWeightKg} kg`}
                      {set.targetReps == null &&
                        set.targetWeightKg == null &&
                        "No targets set"}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="mt-4 flex justify-between gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              className="h-8 rounded-full border-[#2E2E32] bg-[#18181B] px-4 text-[11px] text-zinc-200 hover:border-[#A64DFF] hover:bg-[#2A173F]"
            >
              Close
            </Button>
            <Button
              type="button"
              onClick={handleAddSetClick}
              className="h-8 rounded-full bg-[#A64DFF] px-4 text-[11px] font-medium text-white hover:bg-[#B56BFF]"
            >
              + Add set
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
