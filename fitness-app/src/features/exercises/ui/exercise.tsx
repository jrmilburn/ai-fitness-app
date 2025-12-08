"use client";

import type { Prisma } from "@prisma/client";
import { Button } from "@/shared/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/shared/ui/dialog";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Set from "@/features/workouts/ui/set";
import { MoreHorizontal, Trash2Icon } from "lucide-react";
import { createSet } from "@/server/workouts/createSet";
import { deleteExercise } from "@/server/exercises/deleteExercise";
import ExerciseSelector from "./exerciseSelector";

export type ExerciseWithSets = Prisma.ExerciseGetPayload<{
  include: { sets: true; template: true; muscleGroup: true };
}>;

export default function Exercise({ exercise }: { exercise: ExerciseWithSets }) {
  const setsCompleted = exercise.sets.every((set) => set.completed === true);

  const router = useRouter();
  const [actionModalOpen, setActionModalOpen] = useState(false);
  const [newExerciseSelector, setNewExerciseSelector] = useState(false);

  // 🔁 map of setId -> cascaded weight (as string)
  const [cascadedWeights, setCascadedWeights] = useState<Record<string, string>>(
    {}
  );

  const handleAddSet = async () => {
    await createSet(exercise.id);
    router.refresh();
  };

  /*const handleAddExercise = async () => {
    setNewExerciseSelector(true);
  };*/

  const handleDeleteExercise = async () => {
    await deleteExercise(exercise.id);
    router.refresh();
  };

  /**
   * Called by a Set when user types a weight.
   * We:
   *  - find that set in the exercise.sets order
   *  - cascade the weight to all *following* sets that don't have a saved weight yet
   */
  const handleCascadeWeightChange = (setId: string, weight: string) => {
    const idx = exercise.sets.findIndex((s) => s.id === setId);
    if (idx === -1) return;

    setCascadedWeights((prev) => {
      const next: Record<string, string> = { ...prev };

      for (let i = idx + 1; i < exercise.sets.length; i++) {
        const s = exercise.sets[i];

        // Only apply to sets that don't already have a saved weight
        if (s.actualWeightKg == null) {
          next[s.id] = weight;
        }
      }

      return next;
    });
  };

  return (
    <>
      <div className="relative w-full rounded-lg border border-[var(--border-strong)] bg-[var(--surface-secondary)] shadow-sm">
        {setsCompleted && (
          <p className="absolute right-3 top-2 text-[0.7rem] font-medium text-emerald-300">
            Exercise complete
          </p>
        )}

        {/* Header */}
        <div className="flex w-full items-center justify-between px-4 py-3">
          <div className="flex flex-col gap-1">
            {exercise?.template?.name && (
              <h3 className="text-sm font-medium text-[var(--text-strong)]">
                {exercise.template.name}
              </h3>
            )}
            {exercise?.template?.muscleGroup && (
              <h4 className="text-[0.7rem] uppercase tracking-wide text-[var(--text-muted)]">
                {exercise.template?.muscleGroup}
              </h4>
            )}
          </div>
          <Button
            variant="ghost"
            className="flex h-8 w-8 items-center justify-center rounded-full text-[var(--text-muted)] hover:bg-[var(--surface-tertiary)] hover:text-[var(--text-strong)]"
            onClick={() => setActionModalOpen(true)}
          >
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>

        {/* Sets */}
        <div className="flex w-full flex-col">
          {(exercise?.exerciseType === "STRENGTH" ||
            exercise?.exerciseType === "CARDIO_INTERVAL" ||
            exercise?.exerciseType === "CARDIO_STEADY") &&
            exercise.sets.map((set) => (
              <Set
                key={set.id}
                set={set}
                type={exercise.exerciseType}
                // 🔁 new props for cascading weight
                onCascadeWeightChange={handleCascadeWeightChange}
                cascadedWeight={cascadedWeights[set.id]}
              />
            ))}
        </div>
      </div>

      <Dialog open={actionModalOpen} onOpenChange={setActionModalOpen}>
        <DialogContent className="border border-[var(--border-strong)] bg-[var(--surface-tertiary)] text-[var(--text-strong)]">
          <DialogHeader>
            <DialogTitle className="text-sm font-medium">
              Exercise actions
            </DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-2">
            <Button
              variant="outline"
              onClick={() => {
                handleAddSet();
                setActionModalOpen(false);
              }}
              className="border-[var(--border-strong)] bg-[var(--surface-secondary)] text-xs text-[var(--text-strong)] hover:border-[#A64DFF] hover:bg-[var(--surface-accent)]"
            >
              Add set
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                setActionModalOpen(false);
                setNewExerciseSelector(true);
              }}
              className="border-[var(--border-strong)] bg-[var(--surface-secondary)] text-xs text-[var(--text-strong)] hover:border-[#A64DFF] hover:bg-[var(--surface-accent)]"
            >
              Add exercise
            </Button>
            <Button
              variant="destructive"
              onClick={() => {
                handleDeleteExercise();
                setActionModalOpen(false);
              }}
              className="text-xs"
            >
              Delete exercise
              <Trash2Icon className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <ExerciseSelector
        newExerciseSelector={newExerciseSelector}
        setNewExerciseSelector={setNewExerciseSelector}
        workoutId={exercise.workoutId}
      />
    </>
  );
}
