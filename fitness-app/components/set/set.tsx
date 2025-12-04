"use client";

import { useState } from "react";
import { MoreVertical } from "lucide-react";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import { updateSet } from "@/server/set/updateSet";
import type { Set as SetModel } from "@/generated/prisma/client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Trash2Icon } from "lucide-react";
import { createSet } from "@/server/set/createSet";
import { useRouter } from "next/navigation";
import { deleteSet } from "@/server/set/deleteSet";

type Props = {
  set?: SetModel;
  type?: string;
};

export default function Set({ set, type }: Props) {
  const [reps, setReps] = useState(set?.actualReps?.toString() ?? "");
  const [weight, setWeight] = useState(set?.actualWeightKg?.toString() ?? "");
  const [time, setTime] = useState(set?.actualDurationSec?.toString() ?? "");
  const [completed, setCompleted] = useState(set?.completed);
  const [setModalShown, setSetModalShown] = useState(false);

  const router = useRouter();

  const handleToggleCompleted = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const next = e.target.checked;
    setCompleted(next);

    const numericWeight = weight === "" ? null : Number(weight);
    const numericReps = reps === "" ? null : Number(reps);
    const numericTime = time === "" ? null : Number(time);

    if(set?.id)

    await updateSet(set?.id, next, {
      weight: numericWeight,
      reps: numericReps,
      time: numericTime
    });

    router.refresh();
  };

  const handleAddSet = async () => {
    if(set?.exerciseId) {
      await createSet(set?.exerciseId);
    }
    router.refresh();
  };

  const handleDeleteSet = async () => {
    if(set?.id)
      await deleteSet(set?.id);
    router.refresh();
  };

  return (
    <>
    {type === "STRENGTH" ? (
      <div className="flex w-full items-center gap-2 border-t border-[#2E2E32] bg-[#121214]! px-1 py-2 text-xs text-zinc-100!">
        {/* Left: menu button */}
        <div className="flex min-w-[16px] flex-col items-start">
          <Button
            type="button"
            variant="ghost"
            onClick={() => setSetModalShown(true)}
            className="h-8 w-8 rounded-full p-0 text-zinc-400! hover:bg-[#18181B]! hover:text-zinc-100!"
          >
            <MoreVertical className="h-4 w-4" />
          </Button>
        </div>

        {/* Middle: main inputs */}
        <div className="grid flex-1 w-full grid-cols-2 items-center gap-2">
          <Input
            type="number"
            value={reps}
            onChange={(e) => setReps(e.target.value)}
            placeholder={
              set?.targetReps != null ? set?.targetReps.toString() : "Reps"
            }
            className="h-9 text-xs bg-[#18181b]! border-black!"
          />
          <Input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder={
              set?.targetWeightKg != null
                ? `${set?.targetWeightKg} kg`
                : "Weight (kg)"
            }
            className="h-9 text-xs bg-[#18181b]! border-black!"
          />
        </div>

        {/* Right: completed checkbox */}
        <div className="flex items-center gap-2">
          <Checkbox
            checked={completed}
            onChange={handleToggleCompleted}
            aria-label="Mark set completed"
            className="bg-[#18181b]!"
          />
        </div>
      </div>
    ) : type === "CARDIO_INTERVAL" ? (
      <div className="flex w-full items-center gap-2 border-t border-[#2E2E32] bg-[#121214]! px-1 py-2 text-xs text-zinc-100!">
        {/* Left: menu button */}
        <div className="flex min-w-[16px] flex-col items-start">
          <Button
            type="button"
            variant="ghost"
            onClick={() => setSetModalShown(true)}
            className="h-8 w-8 rounded-full p-0 text-zinc-400! hover:bg-[#18181B]! hover:text-zinc-100!"
          >
            <MoreVertical className="h-4 w-4" />
          </Button>
        </div>

        
        <div className="grid flex-1 w-full grid-cols-1 items-center gap-2">
          <Input
            type="number"
            value={reps}
            onChange={(e) => setTime(e.target.value)}
            placeholder={
              set?.targetDurationSec != null ? set?.targetDurationSec.toString() : "Time (s)"
            }
            className="h-9 text-xs bg-[#18181b]! border-black!"
          />
        </div>

        {/* Right: completed checkbox */}
        <div className="flex items-center gap-2">
          <Checkbox
            checked={completed}
            onChange={handleToggleCompleted}
            aria-label="Mark set completed"
            className="bg-[#18181b]!"
          />
        </div>
      </div>
    ) : (
            <div className="flex w-full items-center gap-2 border-t border-[#2E2E32] bg-[#121214]! px-1 py-2 text-xs text-zinc-100!">
        {/* Left: menu button */}
        <div className="flex min-w-[16px] flex-col items-start">
          <Button
            type="button"
            variant="ghost"
            onClick={() => setSetModalShown(true)}
            className="h-8 w-8 rounded-full p-0 text-zinc-400! hover:bg-[#18181B]! hover:text-zinc-100!"
          >
            <MoreVertical className="h-4 w-4" />
          </Button>
        </div>

        
        <div className="grid flex-1 w-full grid-cols-1 items-center gap-2">
          <Input
            type="number"
            value={reps}
            onChange={(e) => setTime(e.target.value)}
            placeholder={
              set?.targetDurationSec != null ? set?.targetDurationSec.toString() : "Time (s)"
            }
            className="h-9 text-xs bg-[#18181b]! border-black!"
          />
        </div>

        {/* Right: completed checkbox */}
        <div className="flex items-center gap-2">
          <Checkbox
            checked={completed}
            onChange={handleToggleCompleted}
            aria-label="Mark set completed"
            className="bg-[#18181b]!"
          />
        </div>
      </div>
    )}

      <Dialog open={setModalShown} onOpenChange={setSetModalShown}>
        <DialogContent className="border border-[#2E2E32]! bg-[#1C1C1E] text-zinc-50">
          <DialogHeader>
            <DialogTitle className="text-sm font-medium">
              Set actions
            </DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-2">
            <Button
              variant="outline"
              onClick={() => {
                handleAddSet();
                setSetModalShown(false);
              }}
              className="border-[#2E2E32] bg-[#18181B] text-xs text-zinc-100 hover:border-[#A64DFF] hover:bg-[#2A173F]"
            >
              Add set
            </Button>
            <Button
              variant="destructive"
              onClick={() => {
                handleDeleteSet();
                setSetModalShown(false);
              }}
              className="text-xs"
            >
              Remove set
              <Trash2Icon className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
