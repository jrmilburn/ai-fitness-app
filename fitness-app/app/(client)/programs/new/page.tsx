import { prisma } from "@/lib/prisma";

import { ProgramBuilder } from "@/components/program/ProgramBuilder";

import { SAMPLE_TEMPLATE } from "@/lib/initialBuilderData";
import { getExerciseTemplates } from "@/server/exerciseTemplate/getExerciseTemplates";

type NewProgramPageProps = {
  searchParams: {
    templateId : string
  }
}

export default async function NewProgram({ searchParams }: NewProgramPageProps) {

  const templateId = searchParams?.templateId;

  const template = templateId
    ? await prisma.programTemplate.findUnique({
        where: { id: templateId },
      })
    : null;

  const exerciseTemplates = await getExerciseTemplates();

      const onSubmit = async (template) => {
        "use server"
        console.log(template.structureJson.workouts[0].exercises)
      }

    return (
        <div>
            <ProgramBuilder
              initialTemplate={SAMPLE_TEMPLATE}
              exerciseTemplates={exerciseTemplates}
              onSubmit={onSubmit}
            />
        </div>
    )

}