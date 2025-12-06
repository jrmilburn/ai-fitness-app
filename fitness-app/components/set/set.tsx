"use client";

import { useEffect, useState } from "react";
import { MoreVertical, Trash2Icon } from "lucide-react";
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
import { createSet } from "@/server/set/createSet";
import { useRouter } from "next/navigation";
import { deleteSet } from "@/server/set/deleteSet";

type Props = {
  set?: SetModel;
  type?: string; // "STRENGTH" | "CARDIO_INTERVAL" | "CARDIO_STEADY"
  onCascadeWeightChange?: (setId: string, weight: string) => void;
  cascadedWeight?: string;
};

export default function Set({
  set,
  type,
  onCascadeWeightChange,
  cascadedWeight,
}: Props) {
  const [reps, setReps] = useState(set?.actualReps?.toString() ?? "");
  const [weight, setWeight] = useState(set?.actualWeightKg?.toString() ?? "");
  const [time, setTime] = useState(set?.actualDurationSec?.toString() ?? "");
  const [completed, setCompleted] = useState(set?.completed ?? false);
  const [setModalShown, setSetModalShown] = useState(false);
  const [validationModalOpen, setValidationModalOpen] = useState(false);

  const router = useRouter();

  // Autofill weight from cascadedWeight ONLY if this set doesn't already have a value
  useEffect(() => {
    if (
      type === "STRENGTH" &&
      typeof cascadedWeight === "string" &&
      cascadedWeight !== "" &&
      weight === "" &&
      set?.actualWeightKg == null
    ) {
      setWeight(cascadedWeight);
    }
  }, [cascadedWeight, type, weight, set?.actualWeightKg]);

  // ---- basic input handlers ----
  const handleRepsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReps(e.target.value);
  };

  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWeight(e.target.value);
  };

  const handleWeightBlur = () => {
    if (!set?.id || !onCascadeWeightChange) return;
    const trimmed = weight.trim();
    if (trimmed === "") return;

    // cascade to following sets via parent
    onCascadeWeightChange(set.id, trimmed);
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTime(e.target.value);
  };

  // ---- complete toggle with validation ----
  const handleToggleCompleted = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const next = e.target.checked;

    // If strength set: require reps + weight before submitting
    if (type === "STRENGTH") {
      if (reps.trim() === "" || weight.trim() === "") {
        // leave checkbox visually unchanged and show modal
        e.preventDefault();
        setValidationModalOpen(true);
        return;
      }
    }

    setCompleted(next);

    const numericWeight =
      type === "STRENGTH" && weight.trim() !== "" ? Number(weight) : null;
    const numericReps =
      type === "STRENGTH" && reps.trim() !== "" ? Number(reps) : null;
    const numericTime =
      (type === "CARDIO_INTERVAL" || type === "CARDIO_STEADY") &&
      time.trim() !== ""
        ? Number(time)
        : null;

    if (set?.id) {
      await updateSet(set.id, next, {
        weight: numericWeight,
        reps: numericReps,
        time: numericTime,
      });
      router.refresh();
    }
  };

  const handleAddSet = async () => {
    if (!set?.exerciseId) return;
    await createSet(set.exerciseId);
    router.refresh();
  };

  const handleDeleteSet = async () => {
    if (!set?.id) return;
    await deleteSet(set.id);
    router.refresh();
  };

  // ---- render variants ----
  const renderStrengthRow = () => (
    <div className="flex w-full items-center gap-2 border-t border-[var(--border-strong)] bg-[var(--surface-tertiary)]! px-1 py-2 text-xs text-[var(--text-strong)]!">
      {/* Left: menu button */}
      <div className="flex min-w-[16px] flex-col items-start">
        <Button
          type="button"
          variant="ghost"
          onClick={() => setSetModalShown(true)}
          className="h-8 w-8 rounded-full p-0 text-[var(--text-muted)]! hover:bg-[var(--surface-secondary)]! hover:text-[var(--text-strong)]!"
        >
          <MoreVertical className="h-4 w-4" />
        </Button>
      </div>

      {/* Middle: reps + weight */}
      <div className="grid w-full flex-1 grid-cols-2 items-center gap-2">
        <Input
          type="number"
          value={weight}
          onChange={handleWeightChange}
          onBlur={handleWeightBlur}
          placeholder={
            set?.targetWeightKg != null
              ? `${set.targetWeightKg} kg`
              : "Weight (kg)"
          }
          className="h-9 border-[var(--border-subtle)]! bg-[var(--surface-secondary)]! text-xs"
        />
        <Input
          type="number"
          value={reps}
          onChange={handleRepsChange}
          placeholder={
            set?.targetReps != null ? set.targetReps.toString() : "Reps"
          }
          className="h-9 border-[var(--border-subtle)]! bg-[var(--surface-secondary)]! text-xs"
        />
      </div>

      {/* Right: completed checkbox */}
      <div className="flex items-center gap-2">
        <Checkbox
          checked={completed}
          onChange={handleToggleCompleted}
          aria-label="Mark set completed"
          className="bg-[var(--surface-secondary)]!"
        />
      </div>
    </div>
  );

  const renderIntervalRow = () => (
    <div className="flex w-full items-center gap-2 border-t border-[var(--border-strong)] bg-[var(--surface-tertiary)]! px-1 py-2 text-xs text-[var(--text-strong)]!">
      <div className="flex min-w-[16px] flex-col items-start">
        <Button
          type="button"
          variant="ghost"
          onClick={() => setSetModalShown(true)}
          className="h-8 w-8 rounded-full p-0 text-[var(--text-muted)]! hover:bg-[var(--surface-secondary)]! hover:text-[var(--text-strong)]!"
        >
          <MoreVertical className="h-4 w-4" />
        </Button>
      </div>

      <div className="grid w-full flex-1 grid-cols-1 items-center gap-2">
        <Input
          type="number"
          value={time}
          onChange={handleTimeChange}
          placeholder={
            set?.targetDurationSec != null
              ? set.targetDurationSec.toString()
              : "Time (s)"
          }
          className="h-9 border-[var(--border-subtle)]! bg-[var(--surface-secondary)]! text-xs"
        />
      </div>

      <div className="flex items-center gap-2">
        <Checkbox
          checked={completed}
          onChange={handleToggleCompleted}
          aria-label="Mark set completed"
          className="bg-[var(--surface-secondary)]!"
        />
      </div>
    </div>
  );

  const renderCardioRow = () => (
    <div className="flex w-full items-center gap-2 border-t border-[var(--border-strong)] bg-[var(--surface-tertiary)]! px-1 py-2 text-xs text-[var(--text-strong)]!">
      <div className="flex min-w-[16px] flex-col items-start">
        <Button
          type="button"
          variant="ghost"
          onClick={() => setSetModalShown(true)}
          className="h-8 w-8 rounded-full p-0 text-[var(--text-muted)]! hover:bg-[var(--surface-secondary)]! hover:text-[var(--text-strong)]!"
        >
          <MoreVertical className="h-4 w-4" />
        </Button>
      </div>

      <div className="grid w-full flex-1 grid-cols-1 items-center gap-2">
        <Input
          type="number"
          value={time}
          onChange={handleTimeChange}
          placeholder={
            set?.targetDurationSec != null
              ? set.targetDurationSec.toString()
              : "Time (s)"
          }
          className="h-9 border-[var(--border-subtle)]! bg-[var(--surface-secondary)]! text-xs"
        />
      </div>

      <div className="flex items-center gap-2">
        <Checkbox
          checked={completed}
          onChange={handleToggleCompleted}
          aria-label="Mark set completed"
          className="bg-[var(--surface-secondary)]!"
        />
      </div>
    </div>
  );

  return (
    <>
      {type === "STRENGTH"
        ? renderStrengthRow()
        : type === "CARDIO_INTERVAL"
        ? renderIntervalRow()
        : renderCardioRow()}

      {/* Set actions modal */}
      <Dialog open={setModalShown} onOpenChange={setSetModalShown}>
        <DialogContent className="border border-[var(--border-strong)]! bg-[var(--surface-tertiary)] text-[var(--text-strong)]">
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
              className="border-[var(--border-strong)] bg-[var(--surface-secondary)] text-xs text-[var(--text-strong)] hover:border-[#A64DFF] hover:bg-[var(--surface-accent)]"
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

      {/* Validation modal for missing reps/weight */}
      <Dialog
        open={validationModalOpen}
        onOpenChange={setValidationModalOpen}
      >
        <DialogContent className="max-w-sm border border-[var(--border-strong)] bg-[var(--surface-tertiary)] text-[var(--text-strong)]">
          <DialogHeader>
            <DialogTitle className="text-sm font-medium">
              Set not ready yet
            </DialogTitle>
          </DialogHeader>
          <p className="mt-2 text-xs text-[var(--text-muted)]">
            Please enter both <span className="font-semibold">reps</span> and{" "}
            <span className="font-semibold">weight</span> before marking this
            set as completed.
          </p>
          <div className="mt-4 flex justify-end">
            <Button
              type="button"
              size="sm"
              onClick={() => setValidationModalOpen(false)}
              className="h-8 rounded-full border-[var(--border-subtle)] bg-[var(--surface-secondary)] text-[11px] text-[var(--text-strong)] hover:border-[#A64DFF] hover:bg-[var(--surface-accent)]"
            >
              Got it
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
