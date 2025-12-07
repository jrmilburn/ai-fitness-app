
import TemplateList from "@/features/programs/ui/TemplateList"

import { getTemplates } from "@/server/programs/getTemplates";

import { redirect } from "next/navigation";

export default async function Programs() {

    const programs = await getTemplates();

    return (
        <div className="max-w-2xl w-full mx-auto py-4">
            <TemplateList 
                programs={programs}
            />
        </div>
    )

}