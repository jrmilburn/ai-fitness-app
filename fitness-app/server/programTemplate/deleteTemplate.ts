"use server"

import { prisma } from "@/lib/prisma"

export async function deleteTemplate(templateId : string) {

    await prisma.programTemplate.delete({
        where: {
            id: templateId
        }
    })

}