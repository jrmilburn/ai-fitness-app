"use server"

import { getOrCreateCurrentUser } from "@/server/users/getOrCreateCurrentUser";
import { getUserSubscription } from "../subscription/getUserSubscription";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export async function getPrograms() {

    const user = await getOrCreateCurrentUser();
    const subscription = await getUserSubscription();

    if (!subscription.subscriptionActive) {
      redirect("/pricing");
    }

    const programs = await prisma.program.findMany({
        where: {
            userId: user.id
        },
        include: {
            template: true
        },
        orderBy: {
            createdAt: "desc"
        }
    })


    return programs;

}