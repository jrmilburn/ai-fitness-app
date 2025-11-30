"use client";

import { useState } from "react";
import { MoreVertical } from "lucide-react";

import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";

import { updateSet } from "@/server/set/updateSet";

import type { Set as SetModel } from "@/generated/prisma/client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";

import { Trash2Icon } from "lucide-react";
import { createSet } from "@/server/set/createSet";

import { useRouter } from "next/navigation";
import { deleteSet } from "@/server/set/deleteSet";

type Props = {
  set: SetModel;
};

export default function Set({ set }: Props) {
  const [reps, setReps] = useState(set.actualReps?.toString() ?? "");
  const [weight, setWeight] = useState(set.actualWeightKg?.toString() ?? "");
  const [completed, setCompleted] = useState(set.completed);
  const [setModalShown, setSetModalShown] = useState(false);

  const router = useRouter();

  const handleToggleCompleted = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const next = e.target.checked;
    setCompleted(next);

    const numericWeight = weight === "" ? null : Number(weight);
    const numericReps   = reps === "" ? null : Number(reps);

    await updateSet(set.id, next, {
      weight: numericWeight,
      reps: numericReps,
    });

    router.refresh();
  };

  const handleAddSet = async () => {

    const newSet = await createSet(set.exerciseId);

    router.refresh();

  }

  const handleDeleteSet = async () => {

    const deletedSet = await deleteSet(set.id);

    router.refresh();

  }

  return (
    <>
    <div className="w-full flex items-center gap-3 bg-white/70 px-3 py-2 border-b border-black/5">
      <div className="flex flex-col items-start min-w-[64px]">
        <Button
          type="button"
          variant="ghost"
          onClick={() => setSetModalShown(true)}

        >
          <MoreVertical className="h-4 w-4" />
        </Button>
      </div>

      {/* Middle: main inputs */}
      <div className="flex-1 grid grid-cols-2 gap-2 items-center">
        <Input
          type="number"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
          placeholder={
            set.targetReps != null ? set.targetReps.toString() : "Reps"
          }
        />
        <Input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder={
            set.targetWeightKg != null ? `${set.targetWeightKg} kg` : "Weight (kg)"
          }
        />
      </div>

      <div className="flex items-center gap-2">
        <Checkbox
          checked={completed}
          onChange={handleToggleCompleted}
          aria-label="Mark set completed"
        />
      </div>
    </div>

    <Dialog open={setModalShown} onOpenChange={setSetModalShown}>
      <DialogContent>
      <DialogHeader>
        <DialogTitle>Set Actions</DialogTitle>
      </DialogHeader>
      <Button variant="outline" onClick={() => {
        handleAddSet();
        setSetModalShown(false);
      }}>Add set</Button>
      <Button variant="destructive" onClick={() => {
        handleDeleteSet();
        setSetModalShown(false);
      }}>Remove set <Trash2Icon color="red/80"/></Button>
      </DialogContent>
    </Dialog>
    </>
  );
}
