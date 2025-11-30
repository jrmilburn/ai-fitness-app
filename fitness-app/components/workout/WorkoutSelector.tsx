// components/workout/WorkoutSelector.tsx
import type { ProgramWithRelations } from "@/lib/program";

import { Button } from "../ui/button";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";

import { useState } from "react";

import { CalendarDaysIcon } from "lucide-react";

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

  return (
    <>
    <Button variant="ghost" className="" onClick={() => setPickerOpen(true)}><CalendarDaysIcon /></Button>
          <Dialog open={pickerOpen} onOpenChange={setPickerOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle></DialogTitle>
          </DialogHeader>

          <div className="flex flex-col gap-1">
            {program.weeks.map((week, weekInd) => (
              <div key={week.id} className="flex gap-1">
                {week.workouts.map((workout, workInd) => (
                  <Button key={workout.id} onClick={() => {
                    onSelectWeek(weekInd);
                    onSelectWorkout(workInd);
                    setPickerOpen(false);
                  }} variant={weekIndex === weekInd && workoutIndex === workInd ? "secondary" : "outline"} className={workout.completed ? "bg-[red]/40" : ""}>{workout.dayNumber}</Button>
                ))}
              </div>
            ))}
          </div>

        </DialogContent>
      </Dialog>
    </>
  );
}
