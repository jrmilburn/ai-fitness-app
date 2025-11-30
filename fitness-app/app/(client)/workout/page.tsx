
import WorkoutWrapper from "@/components/workout/WorkoutWrapper";

import { getProgram } from "@/server/program/getProgram";
import { getOrCreateCurrentUser } from "@/server/user/getOrCreateCurrentUser";

import { redirect } from "next/navigation";

export default async function WorkoutPage() {

    const user = await getOrCreateCurrentUser();

    let program;

    if(user.currentProgramId) {
        program = await getProgram(user?.currentProgramId);
    } else {
        return redirect("/programs")
    }




    return (
        <div className="max-w-2xl w-full mx-auto">
            <WorkoutWrapper 
                program={program}
            />
        </div>
    )

}