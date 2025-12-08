"use server"

import { prisma } from "@/lib/prisma"
import { getOrCreateCurrentUser } from "../users/getOrCreateCurrentUser"
import { getUserSubscription } from "../subscription/getUserSubscription";
import { redirect } from "next/navigation";

export async function deleteProgram(programId : string) {

    const user = await getOrCreateCurrentUser();
    const subscription = await getUserSubscription();

    if (!subscription.subscriptionActive) {
      redirect("/pricing");
    }

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