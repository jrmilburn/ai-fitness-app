import { prisma } from "@/lib/prisma";

import { getOrCreateCurrentUser } from "../user/getOrCreateCurrentUser";

export async function getPrograms() {

    const user = await getOrCreateCurrentUser();

    const programs = await prisma.programTemplate.findMany({
        where:{
            userId: user.id
        }
    })

    return programs

}