"use server";

import { prisma } from "@/lib/prisma";

export async function deleteTemplate(templateId: string) {
  const template = await prisma.programTemplate.findUnique({
    where: { id: templateId },
    select: { sptemplate: true },
  });

  if (!template) {
    throw new Error("Template not found.");
  }

  if (template.sptemplate === true) {
    throw new Error("SP templates cannot be deleted.");
  }

  await prisma.programTemplate.delete({
    where: { id: templateId },
  });

  return { success: true };
}
