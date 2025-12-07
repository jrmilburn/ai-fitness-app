// app/(client)/programs/new/page.tsx
import { prisma } from "@/lib/prisma";
import { ProgramBuilder } from "@/features/programs/ui/ProgramBuilder";
import { getExerciseTemplates } from "@/server/exercises/getExerciseTemplates";
import { createProgram } from "@/server/programs/createProgram";
import type {
  ProgramTemplateWithStructure,
  ProgramTemplateStructure,
} from "@/features/programs/model/builderTypes";

type NewProgramPageProps = {
  searchParams: {
    templateId?: string;
  };
};

export default async function NewProgram({ searchParams }: NewProgramPageProps) {
  const { templateId } = await searchParams;

  console.log(templateId);

  const rawTemplate = templateId
    ? await prisma.programTemplate.findUnique({
        where: { id: templateId },
      })
    : null;

  // Adapt Prisma type -> ProgramTemplateWithStructure
  const template: ProgramTemplateWithStructure | null = rawTemplate
    ? {
        ...rawTemplate,
        structureJson:
          (rawTemplate.structureJson as ProgramTemplateStructure | null) ?? null,
      }
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
