"use client";

import { useEffect, useState } from "react";
import { MoreVertical, Trash2Icon } from "lucide-react";
import { Input } from "@/shared/ui/input";
import { Checkbox } from "@/shared/ui/checkbox";
import { Button } from "@/shared/ui/button";
import { updateSet } from "@/server/workouts/updateSet";
import type { Set as SetModel } from "@/generated/prisma/client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/shared/ui/dialog";
import { createSet } from "@/server/workouts/createSet";
import { useRouter } from "next/navigation";
import { deleteSet } from "@/server/workouts/deleteSet";

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

  // 👉 time is stored as seconds in DB, but for CARDIO_STEADY we *display/edit* minutes
  const [time, setTime] = useState(() => {
    if (set?.actualDurationSec == null) return "";

    if (type === "CARDIO_STEADY") {
      // convert seconds -> minutes for display
      const minutes = set.actualDurationSec / 60;
      // keep it simple: no crazy decimals
      return Number.isInteger(minutes)
        ? minutes.toString()
        : minutes.toFixed(1);
    }

    // for intervals etc: keep as seconds
    return set.actualDurationSec.toString();
  });

  const [completed, setCompleted] = useState(set?.completed ?? false);
  const [setModalShown, setSetModalShown] = useState(false);
  const [validationModalOpen, setValidationModalOpen] = useState(false);
  const [warmupInfoOpen, setWarmupInfoOpen] = useState(false);

  const router = useRouter();
  const isWarmup = set?.type === "WARMUP";

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

    let numericTime: number | null = null;
    if (
      (type === "CARDIO_INTERVAL" || type === "CARDIO_STEADY") &&
      time.trim() !== ""
    ) {
      const raw = Number(time);
      if (!Number.isNaN(raw)) {
        numericTime =
          type === "CARDIO_STEADY"
            ? raw * 60 // minutes -> seconds
            : raw; // already in seconds for intervals
      }
    }

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
    <div
      className={`relative flex w-full items-center gap-2 border-t border-[var(--border-strong)] bg-[var(--surface-tertiary)]! px-1 py-2 text-xs text-[var(--text-strong)]! ${
        isWarmup
          ? "before:absolute before:left-0 before:top-0 before:h-full before:w-[3px] before:rounded-l before:bg-[#A64DFF]"
          : "before:absolute before:left-0 before:top-0 before:h-full before:w-[3px] before:rounded-l before:bg-[#1c1c1e]"
      }`}
    >
      {/* Left: menu button + warm-up label */}
      <div className="flex min-w-[16px] flex-col items-start gap-1">
        <Button
          type="button"
          variant="ghost"
          onClick={() => setSetModalShown(true)}
          className="h-8 w-8 rounded-full p-0 text-[var(--text-muted)]! hover:bg-[var(--surface-secondary)]! hover:text-[var(--text-strong)]!"
        >
          <MoreVertical className="h-4 w-4" />
        </Button>

        {isWarmup && (
          <button
            type="button"
            onClick={() => setWarmupInfoOpen(true)}
            className="absolute top-0 -translate-y-[60%] cursor-pointer rounded-full bg-[#A64DFF1a] px-2 py-0.5 text-[9px] uppercase tracking-wide text-[#A64DFF] hover:bg-[#A64DFF26] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#A64DFF]"
          >
            warm-up
          </button>
        )}
      </div>

      {/* Middle: weight + reps */}
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
              ? `${set.targetDurationSec.toString()} sec`
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

  const renderCardioRow = () => {
    // CARDIO_STEADY: show minutes in UI
    const placeholderMinutes =
      set?.targetDurationSec != null
        ? (set.targetDurationSec / 60).toString()
        : "Time (min)";

    return (
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
            placeholder={`${placeholderMinutes} min`}
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
  };

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

      {/* Warm-up info modal */}
      <Dialog open={warmupInfoOpen} onOpenChange={setWarmupInfoOpen}>
        <DialogContent className="max-w-sm border border-[var(--border-strong)] bg-[var(--surface-tertiary)] text-[var(--text-strong)]">
          <DialogHeader>
            <DialogTitle className="text-sm font-medium">
              How to use warm-up sets
            </DialogTitle>
          </DialogHeader>
          <div className="mt-2 space-y-2 text-xs text-[var(--text-muted)]">
            <p>
              Warm-up sets let you gradually work up to your top working weight
              without creating extra volume to track.
            </p>
            <ul className="space-y-1 list-disc pl-4">
              <li>Start light and increase the weight each warm-up set.</li>
              <li>Keep 4–6 reps and stay well away from failure.</li>
              <li>
                Use them to groove the movement, then log your working sets as
                normal.
              </li>
            </ul>
          </div>
          <div className="mt-4 flex justify-end">
            <Button
              type="button"
              size="sm"
              onClick={() => setWarmupInfoOpen(false)}
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
