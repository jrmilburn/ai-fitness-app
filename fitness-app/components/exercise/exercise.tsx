import type { Prisma } from "@/generated/prisma/client";

import { Button } from "../ui/button";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";

import { useRouter } from "next/navigation";
import { useState } from "react";

export type ExerciseWithSets = Prisma.ExerciseGetPayload<{
  include: { sets: true, template: true, muscleGroup: true };
}>;

import Set from "../set/set";
import { MoreHorizontal, Trash2Icon } from "lucide-react";

import { createSet } from "@/server/set/createSet";
import { deleteExercise } from "@/server/exercise/deleteExercise";

import ExerciseSelector from "./exerciseSelector";

export default function Exercise({ exercise } : { exercise : ExerciseWithSets }) {

    const setsCompleted = exercise.sets.every((set) => set.completed === true)

    const router = useRouter();
    const [actionModalOpen, setActionModalOpen] = useState(false);
    const [newExerciseSelector, setNewExerciseSelector] = useState(false);

    const handleAddSet = async () => {

      await createSet(exercise.id);

      router.refresh();

    }

    const handleAddExercise = async () => {

        setNewExerciseSelector(true);

    }

    const handleDeleteExercise = async () => {

        await deleteExercise(exercise.id);

        router.refresh();

    }

    return (
        <>
        <div className={`max-w-2xl w-full flex flex-col border-t border-l border-r rounded border-black/5 relative bg-white shadow-sm`}>
            {setsCompleted ? <p className="absolute top-0 right-0 translate-y-[-100%] text-sm text-[green]">Exercise complete</p> : ""}
            <div className="flex justify-between items-center w-full p-4">
            <div className="flex flex-col gap-1">
            {exercise?.template?.name && (
            <h3 className="">{exercise.template.name}</h3>
            )}
            {exercise?.muscleGroup?.name && (
                <h4 className="opacity-60 uppercase text-sm">{exercise?.muscleGroup.name}</h4>
            )}
            </div>
            <Button
              variant="ghost"
              className="flex items-center justify-center"
              onClick={() => setActionModalOpen(true)}
            >
            <MoreHorizontal 
                width={20}
                className=""
            />
            </Button>
            </div>
            <div className="w-full flex flex-col">
                {exercise?.sets.map((set) => (
                    <Set 
                        key={set.id}
                        set={set}
                    />
                ))}
            </div>
        </div>

        <Dialog open={actionModalOpen} onOpenChange={setActionModalOpen}>
          <DialogContent>
          <DialogHeader>
            <DialogTitle>Set Actions</DialogTitle>
          </DialogHeader>
          <Button variant="outline" onClick={() => {
            handleAddSet();
            setActionModalOpen(false);
          }}>Add set</Button>
        <Button variant="outline" onClick={() => {
            setActionModalOpen(false);
            setNewExerciseSelector(true);
          }}>Add exercise</Button>
          <Button variant="destructive" onClick={() => {
            handleDeleteExercise();
            setActionModalOpen(false);
          }}>Delete exercise <Trash2Icon color="red/80"/></Button>
          </DialogContent>
        </Dialog>

          <ExerciseSelector 
            newExerciseSelector={newExerciseSelector}
            setNewExerciseSelector={setNewExerciseSelector}
            workoutId={exercise.workoutId}
          />

        </>
    )

}