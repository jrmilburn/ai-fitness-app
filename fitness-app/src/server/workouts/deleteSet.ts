"use server"

import { prisma } from "@/lib/prisma";
import { getOrCreateCurrentUser } from "../users/getOrCreateCurrentUser";
import { getUserSubscription } from "../subscription/getUserSubscription";
import { redirect } from "next/navigation";

export async function deleteSet(setId : string) {

    await getOrCreateCurrentUser();
    const subscription = await getUserSubscription();

    if (!subscription.subscriptionActive) {
      redirect("/pricing");
    }

    await prisma.set.delete({
        where: {
            id: setId
        }
    })

    return { success: true }

}