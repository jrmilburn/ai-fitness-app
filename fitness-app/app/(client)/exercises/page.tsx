
import ExerciseTemplateList from "@/components/exerciseTemplate/ExerciseTemplateList";

import { getExerciseTemplates } from "@/server/exerciseTemplate/getExerciseTemplates";

export default async function Exercises() {

    const exerciseTemplates = await getExerciseTemplates();

    return (
        <div className="max-w-2xl w-full mx-auto py-4">
            <ExerciseTemplateList 
                templates={exerciseTemplates}
            />
        </div>
    )

}