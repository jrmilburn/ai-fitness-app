
import ProgramList from "@/components/program/ProgramList"

import { getPrograms } from "@/server/program/getPrograms";

import type { Program } from "@/generated/prisma/client";

export default async function Programs() {

    const programs: Program[] = await getPrograms();

    return (
        <div className="max-w-2xl w-full mx-auto py-4">
        <ProgramList 
            programs={programs}
        />
        </div>
    )

}