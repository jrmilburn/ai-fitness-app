
import ExerciseTemplateList from "@/components/exerciseTemplate/ExerciseTemplateList";

import { getExerciseTemplates } from "@/server/exerciseTemplate/getExerciseTemplates";
import { getOrCreateCurrentUser } from "@/server/user/getOrCreateCurrentUser";
import { redirect } from "next/navigation";


export default async function Exercises() {

    const user = await getOrCreateCurrentUser();

    if(!user.currentProgramId){
      redirect("/templates/plan");
    }

    const exerciseTemplates = await getExerciseTemplates();

    return (
        <div className="max-w-2xl w-full mx-auto py-4">
            <ExerciseTemplateList 
                templates={exerciseTemplates}
            />
        </div>
    )

}