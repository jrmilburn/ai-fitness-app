import { prisma } from "@/lib/prisma";

import { ProgramBuilder } from "@/components/program/ProgramBuilder";

import { getExerciseTemplates } from "@/server/exerciseTemplate/getExerciseTemplates";

import { createProgram } from "@/server/program/createProgram";

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
