"use client";

import type { ProgramWithRelations } from "@/lib/program";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { useState } from "react";
import { CalendarDaysIcon } from "lucide-react";
import { useRouter } from "next/navigation";

type WorkoutSelectorProps = {
  program: ProgramWithRelations;
  weekIndex: number;
  workoutIndex: number;
  onSelectWeek: (i: number) => void;
  onSelectWorkout: (i: number) => void;
};

export function WorkoutSelector({
  program,
  weekIndex,
  workoutIndex,
  onSelectWeek,
  onSelectWorkout,
}: WorkoutSelectorProps) {
  const [pickerOpen, setPickerOpen] = useState(false);
  const router = useRouter();

  const currentWeek = program.weeks[weekIndex];
  const currentWorkout = currentWeek?.workouts[workoutIndex];

  const handleJumpToWorkout = (weekInd: number, workInd: number, workoutId: string) => {
    // local state update for instant feedback
    onSelectWeek(weekInd);
    onSelectWorkout(workInd);
    setPickerOpen(false);

    // update URL so this workout is "pinned"
    router.push(`/programs/${program.id}?workoutId=${workoutId}`);
  };

  return (
    <>
      <div className="flex h-full flex-col rounded-lg border border-[var(--border-strong)] bg-[var(--surface-secondary)] p-3">
        <div className="mb-3 flex items-center justify-between gap-2">
          <div className="space-y-1">
            <p className="text-[0.7rem] uppercase tracking-wide text-[var(--text-strong)]">
              Current workout
            </p>
            {currentWorkout && (
              <p className="text-sm font-medium text-[var(--text-strong)]">
                Week {currentWeek.weekNumber} • Day {currentWorkout.dayNumber}
              </p>
            )}
          </div>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 rounded-full border-[var(--border-strong)]! bg-[var(--surface-tertiary)]! text-[var(--text-muted)]! hover:border-[#A64DFF]! hover:bg-[var(--surface-accent)]!"
            onClick={() => setPickerOpen(true)}
          >
            <CalendarDaysIcon className="h-4 w-4" />
          </Button>
        </div>

        {currentWorkout && (
          <p className="text-xs text-[var(--text-strong)]">
            {currentWorkout.name}
          </p>
        )}
      </div>

      <Dialog open={pickerOpen} onOpenChange={setPickerOpen}>
        <DialogContent className="max-w-md border border-[var(--border-strong)] bg-[var(--surface-tertiary)] text-[var(--text-strong)]">
          <DialogHeader>
            <DialogTitle className="text-sm text-center font-medium text-[var(--text-strong)]">
              Jump to workout
            </DialogTitle>
          </DialogHeader>

          <div className="mt-2 flex flex-col items-center gap-2 text-xs">
            {program.weeks.map((week, weekInd) => (
              <div key={week.id} className="flex items-center gap-2">
                <span className="w-16 text-[0.7rem] uppercase tracking-wide text-[var(--text-strong)]">
                  Week {week.weekNumber}
                </span>
                <div className="flex flex-wrap gap-1">
                  {week.workouts.map((workout, workInd) => {
                    const isActive =
                      weekIndex === weekInd && workoutIndex === workInd;

                    return (
                      <Button
                        key={workout.id}
                        onClick={() => {
                          console.log(workout.id)
                          handleJumpToWorkout(weekInd, workInd, workout.id)
                        }
                        }
                        variant={isActive ? "secondary" : "outline"}
                        className={`h-8 min-w-[2.25rem] rounded-full px-2 text-xs text-white hover:text-black ${
                          workout.completed
                            ? "border-emerald-500/60! bg-emerald-500/10! text-emerald-200!"
                            : "bg-[#A64DFF]"
                        }`}
                      >
                        {workout.dayNumber}
                      </Button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
