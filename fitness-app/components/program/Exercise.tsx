"use client";

import * as React from "react";
import { Draggable } from "@hello-pangea/dnd";
import type { ExerciseTemplate } from "@prisma/client";
import type { BuilderExercise } from "@/lib/builderTypes";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

type ExerciseCardProps = {
  exercise: BuilderExercise;
  index: number;
  exerciseTemplates: ExerciseTemplate[];
  onAddSet: (exerciseId: string) => void;
  onReplace: () => void;
  onDelete: () => void;
  onRemoveSet: (exerciseId: string, setId: string) => void;
};

export function ExerciseCard({
  exercise,
  index,
  exerciseTemplates,
  onAddSet,
  onReplace,
  onDelete,
  onRemoveSet,
}: ExerciseCardProps) {
  const template = exerciseTemplates.find(
    (t) => t.id === exercise.exerciseTemplateId
  );

  const [open, setOpen] = React.useState(false);

  const handleAddSetClick = () => {
    onAddSet(exercise.id);
  };

  const handleRemoveSetClick = (setId: string) => {
    // Enforce minimum of 1 set
    if (exercise.sets.length <= 1) return;
    onRemoveSet(exercise.id, setId);
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
              className={`
                mb-2 rounded-md border px-3 py-2 text-xs transition-all
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
              {/* Top row: name + menu */}
              <div className="mb-1 flex items-center justify-between gap-2">
                <div className="text-sm font-medium text-zinc-100">
                  {template?.name ?? "Unnamed exercise"}
                </div>

                <div className="flex items-center gap-1">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button
                        type="button"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex h-6 w-6 items-center justify-center rounded-full text-zinc-500 hover:bg-[#232327] hover:text-zinc-100"
                      >
                        <MoreHorizontal className="h-4 w-4" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="end"
                      className="border-[#2E2E32] bg-[#18181B] text-xs text-zinc-100"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <DropdownMenuItem
                        onClick={() => setOpen(true)}
                        className="cursor-pointer text-xs hover:bg-[#2A173F]"
                      >
                        Edit sets
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={onReplace}
                        className="cursor-pointer text-xs hover:bg-[#2A173F]"
                      >
                        Replace exercise
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={onDelete}
                        className="cursor-pointer text-xs text-red-300 hover:bg-red-500/10"
                      >
                        Delete exercise
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>

              {/* Sets summary */}
              <div className="text-[11px] text-zinc-500">
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
                {exercise.sets.map((set) => {
                  const canRemove = exercise.sets.length > 1;

                  return (
                    <div
                      key={set.id}
                      className="flex items-center justify-between rounded px-2 py-1 text-[11px]"
                    >
                      <span className="text-zinc-300">
                        Set {set.setNumber}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-zinc-400">
                          {set.targetReps != null && (
                            <>
                              {set.targetReps} reps
                              {set.targetWeightKg != null && " @ "}
                            </>
                          )}
                          {set.targetWeightKg != null &&
                            `${set.targetWeightKg} kg`}
                          {set.targetReps == null &&
                            set.targetWeightKg == null &&
                            "No targets set"}
                        </span>
                        <Button
                          type="button"
                          variant="outline"
                          disabled={!canRemove}
                          onClick={() => handleRemoveSetClick(set.id)}
                          className="h-6 rounded-full border-[#2E2E32] bg-transparent px-2 text-[10px] text-zinc-300 hover:bg-red-500/10 hover:text-red-200 disabled:cursor-not-allowed disabled:opacity-40"
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <div className="mt-4 flex justify-between gap-2">
            <Button
              variant="outline"
              onClick={() => setOpen(false)}
              className="h-8 rounded-full border-[#2E2E32] bg-[#18181B] px-4 text-[11px] text-zinc-200 hover:border-[#A64DFF] hover:bg-[#2A173F]"
            >
              Close
            </Button>
            <Button
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
