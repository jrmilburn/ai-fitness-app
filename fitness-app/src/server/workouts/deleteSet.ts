"use server"

import { prisma } from "@/lib/prisma";
import { getOrCreateCurrentUser } from "../users/getOrCreateCurrentUser";

export async function deleteSet(setId : string) {

    await getOrCreateCurrentUser();

    await prisma.set.delete({
        where: {
            id: setId
        }
    })

    return { success: true }

}