import { prisma } from "@/lib/prisma";

import { ProgramBuilder } from "@/features/programs/ui/ProgramBuilder";

import { getExerciseTemplates } from "@/server/exercises/getExerciseTemplates";

import { createProgram } from "@/server/programs/createProgram";

type NewProgramPageProps = {
  searchParams: {
    templateId : string
  }
}

export default async function NewProgram(props: NewProgramPageProps) {
  const { templateId } = await props.searchParams;

  const template = templateId
    ? await prisma.programTemplate.findUnique({
        where: { id: templateId },
      })
    : null;

  const exerciseTemplates = await getExerciseTemplates();

  return (
      <ProgramBuilder
        initialTemplate={template}
        exerciseTemplates={exerciseTemplates}
        onSubmit={createProgram}
      />
  );
}
