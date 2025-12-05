"use server"

import { getOrCreateCurrentUser } from "../user/getOrCreateCurrentUser";
import { prisma } from "@/lib/prisma";

export async function getPrograms() {

    const user = await getOrCreateCurrentUser();

    const programs = await prisma.program.findMany({
        where: {
            userId: user.id
        }
    })

    console.log(programs);

    return programs;

}