import { getPrograms } from "@/server/program/getPrograms";

import ProgramList from "@/components/program/ProgramList";
import { getOrCreateCurrentUser } from "@/server/user/getOrCreateCurrentUser";
import { redirect } from "next/navigation";

export default async function ProgramsPage() {

    const user = await getOrCreateCurrentUser()

    if(!user.currentProgramId){
      redirect("/templates/plan");
    }

    const programs = await getPrograms();

    return (
        <div className="max-w-2xl w-full mx-auto py-4">
            <ProgramList 
                programs={programs}
                user={user}
            />
        </div>
    )
}