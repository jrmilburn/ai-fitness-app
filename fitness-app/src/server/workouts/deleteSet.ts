"use server"

import { prisma } from "@/lib/prisma";

export async function deleteSet(setId : string) {

    const deleteSet = await prisma.set.delete({
        where: {
            id: setId
        }
    })

    console.log(deleteSet);

}