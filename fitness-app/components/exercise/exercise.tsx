import type { Prisma } from "@/generated/prisma/client";

export type ExerciseWithSets = Prisma.ExerciseGetPayload<{
  include: { sets: true };
}>;

import Set from "../set/set";
import { MoreHorizontal } from "lucide-react";

export default function Exercise({ exercise } : { exercise : ExerciseWithSets }) {

    return (
        <div className="max-w-2xl w-full flex flex-col border-t border-l border-r rounded border-black/5">
            <div className="flex justify-between items-center w-full p-4">
            <div className="flex flex-col gap-1">
            <h3 className="">{exercise.name}</h3>
            {exercise.muscle && (
                <h4 className="opacity-60 uppercase text-sm">{exercise?.muscle}</h4>
            )}
            </div>
            <button
              type="button"
              className="p-1 rounded-md hover:bg-black/[0.04] text-muted-foreground"
            >
            <MoreHorizontal 
                width={20}
                className="self-start"
            />
            </button>
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
    )

}