"use server"

import { prisma } from "@/lib/prisma"

export async function deleteProgram(programId : string) {

    await prisma.program.delete({
        where: {
            id: programId
        }
    })

}