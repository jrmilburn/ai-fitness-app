"use server"

import { prisma } from "@/lib/prisma";
import { getOrCreateCurrentUser } from "@/server/users/getOrCreateCurrentUser";

export async function setCurrentProgram( programId : string ) {

    const user = await getOrCreateCurrentUser()

    const updateUserCurrentProgram = await prisma.user.update({
        where: {
            id: user.id
        },
        data: {
            currentProgramId: programId
        }
    })

    return updateUserCurrentProgram;

}