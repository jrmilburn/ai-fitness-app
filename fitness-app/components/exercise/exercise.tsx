"use client";

import type { Prisma } from "@/generated/prisma/client";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Set from "../set/set";
import { MoreHorizontal, Trash2Icon } from "lucide-react";
import { createSet } from "@/server/set/createSet";
import { deleteExercise } from "@/server/exercise/deleteExercise";
import ExerciseSelector from "./exerciseSelector";

export type ExerciseWithSets = Prisma.ExerciseGetPayload<{
  include: { sets: true, template: true, muscleGroup: true };
}>;

export default function Exercise({ exercise }: { exercise: ExerciseWithSets }) {
  const setsCompleted = exercise.sets.every((set) => set.completed === true);

  const router = useRouter();
  const [actionModalOpen, setActionModalOpen] = useState(false);
  const [newExerciseSelector, setNewExerciseSelector] = useState(false);

  const handleAddSet = async () => {
    await createSet(exercise.id);
    router.refresh();
  };

  const handleAddExercise = async () => {
    setNewExerciseSelector(true);
  };

  const handleDeleteExercise = async () => {
    await deleteExercise(exercise.id);
    router.refresh();
  };

  return (
    <>
      <div className="relative w-full rounded-lg border border-[#2E2E32] bg-[#18181B] shadow-sm">
        {setsCompleted && (
          <p className="absolute right-3 top-2 text-[0.7rem] font-medium text-emerald-300">
            Exercise complete
          </p>
        )}

        {/* Header */}
        <div className="flex w-full items-center justify-between px-4 py-3">
          <div className="flex flex-col gap-1">
            {exercise?.template?.name && (
              <h3 className="text-sm font-medium text-zinc-100">
                {exercise.template.name}
              </h3>
            )}
            {exercise?.muscleGroup?.name && (
              <h4 className="text-[0.7rem] uppercase tracking-wide text-zinc-500">
                {exercise.muscleGroup.name}
              </h4>
            )}
          </div>
          <Button
            variant="ghost"
            className="flex h-8 w-8 items-center justify-center rounded-full text-zinc-400 hover:bg-[#121214] hover:text-zinc-100"
            onClick={() => setActionModalOpen(true)}
          >
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>

        {/* If exercise is strenght or interval based*/}
        <div className="flex w-full flex-col">
          {(exercise?.exerciseType === "STRENGTH" || exercise?.exerciseType === "CARDIO_INTERVAL" || exercise?.exerciseType === "CARDIO_STEADY") && exercise?.sets.map((set) => (
            <Set key={set.id} set={set} type={exercise?.exerciseType} />
          ))}
        </div>
      </div>

      <Dialog open={actionModalOpen} onOpenChange={setActionModalOpen}>
        <DialogContent className="border border-[#2E2E32] bg-[#1C1C1E] text-zinc-50">
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
              className="border-[#2E2E32] bg-[#18181B] text-xs text-zinc-100 hover:border-[#A64DFF] hover:bg-[#2A173F]"
            >
              Add set
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                setActionModalOpen(false);
                setNewExerciseSelector(true);
              }}
              className="border-[#2E2E32] bg-[#18181B] text-xs text-zinc-100 hover:border-[#A64DFF] hover:bg-[#2A173F]"
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
