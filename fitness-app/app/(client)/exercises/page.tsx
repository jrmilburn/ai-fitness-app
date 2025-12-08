
import ExerciseTemplateList from "@/features/exercises/ui/ExerciseTemplateList";

import { getExerciseTemplates } from "@/server/exercises/getExerciseTemplates";
import { getOrCreateCurrentUser } from "@/server/users/getOrCreateCurrentUser";
import { redirect } from "next/navigation";


export default async function Exercises() {

    await getOrCreateCurrentUser();

    const exerciseTemplates = await getExerciseTemplates();

    return (
        <div className="max-w-2xl w-full mx-auto py-4">
            <ExerciseTemplateList 
                templates={exerciseTemplates}
            />
        </div>
    )

}