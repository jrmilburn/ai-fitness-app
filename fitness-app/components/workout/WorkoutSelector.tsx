// components/workout/WorkoutSelector.tsx
import type { ProgramWithRelations } from "@/lib/types/program";

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
  return (
    <div className="space-y-2">
      {program.weeks.map((week, wIdx) => (
        <div key={week.id} className="border rounded">
          <button
            type="button"
            className="w-full text-left px-3 py-2 text-sm font-medium"
            onClick={() => {
              onSelectWeek(wIdx);
              onSelectWorkout(0);
            }}
          >
            Week {week.weekNumber}
          </button>
          {wIdx === weekIndex && (
            <div className="border-t">
              {week.workouts.map((workout, woIdx) => (
                <button
                  key={workout.id}
                  type="button"
                  onClick={() => onSelectWorkout(woIdx)}
                  className={`block w-full text-left px-3 py-1 text-sm ${
                    woIdx === workoutIndex
                      ? "bg-muted font-medium"
                      : "hover:bg-muted/50"
                  }`}
                >
                  Day {workout.dayNumber}: {workout.name}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
