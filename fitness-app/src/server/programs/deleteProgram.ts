"use server"

import { prisma } from "@/lib/prisma"
import { getOrCreateCurrentUser } from "../users/getOrCreateCurrentUser"

export async function deleteProgram(programId : string) {

    const user = await getOrCreateCurrentUser();

    const program = await prisma.program.findUnique({
        where:{
            id: programId
        }
    })

    if(program?.userId === user.id){
        await prisma.program.delete({
        where: {
            id: programId
        }
    })
    }

    return { success: true }

}