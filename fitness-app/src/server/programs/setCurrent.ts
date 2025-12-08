"use server"

import { prisma } from "@/lib/prisma";
import { getOrCreateCurrentUser } from "@/server/users/getOrCreateCurrentUser";
import { getUserSubscription } from "../subscription/getUserSubscription";
import { redirect } from "next/navigation";

export async function setCurrentProgram( programId : string ) {

    const user = await getOrCreateCurrentUser()
    const subscription = await getUserSubscription();

    if (!subscription.subscriptionActive) {
      redirect("/pricing");
    }

    await prisma.user.update({
        where: {
            id: user.id
        },
        data: {
            currentProgramId: programId
        }
    })

    return { success: true }

}