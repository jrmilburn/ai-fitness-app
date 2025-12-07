
import TemplateList from "@/components/programTemplate/TemplateList"

import { getTemplates } from "@/server/programTemplate/getTemplates";

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