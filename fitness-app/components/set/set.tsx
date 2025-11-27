"use client";

import { useState } from "react";
import { MoreVertical } from "lucide-react";

import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";

import type { Set as SetModel, SetType } from "@/generated/prisma/client";

type Props = {
  set: SetModel;
};

export default function Set({ set }: Props) {
  const [reps, setReps] = useState(set.actualReps?.toString() ?? "");
  const [weight, setWeight] = useState(set.actualWeightKg?.toString() ?? "");
  const [completed, setCompleted] = useState(set.completed);

  const handleToggleCompleted = (e: React.ChangeEvent<HTMLInputElement>) => {
    const next = e.target.checked;
    setCompleted(next);

    // TODO: call server action to persist:
    // await updateSetCompleted(set.id, next, { reps, weight })
  };

  return (
    <div className="w-full flex items-center gap-3 bg-white/70 px-3 py-2 border-b border-black/5">
      <div className="flex flex-col items-start min-w-[64px]">
        <button
          type="button"
          className="p-1 rounded-md hover:bg-black/[0.04] text-muted-foreground"
        >
          <MoreVertical className="h-4 w-4" />
        </button>
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
  );
}
