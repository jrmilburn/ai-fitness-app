
import TemplateList from "@/components/programTemplate/TemplateList"

import { getTemplates } from "@/server/programTemplate/getTemplates";

import type { ProgramTemplate } from "@/generated/prisma/client";
import { getOrCreateCurrentUser } from "@/server/user/getOrCreateCurrentUser";

export default async function Programs() {

    const programs: ProgramTemplate[] = await getTemplates();

    return (
        <div className="max-w-2xl w-full mx-auto py-4">
            <TemplateList 
                programs={programs}
            />
        </div>
    )

}