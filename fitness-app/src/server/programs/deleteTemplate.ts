"use server";

import { prisma } from "@/lib/prisma";
import { getOrCreateCurrentUser } from "../users/getOrCreateCurrentUser";


export async function deleteTemplate(templateId: string) {

  const user = await getOrCreateCurrentUser();

  const template = await prisma.programTemplate.findUnique({
    where: { id: templateId },
    select: { sptemplate: true, userId: true },
  });

  if (!template) {
    throw new Error("Template not found.");
  }

  if (template.sptemplate === true) {
    throw new Error("SP templates cannot be deleted.");
  }

  if(template.userId !== user.id){
    throw new Error("User does not own this program");
  }

  await prisma.programTemplate.delete({
    where: { id: templateId },
  });

  return { success: true };
}
