import { prisma } from "@/lib/prisma";

import { getOrCreateCurrentUser } from "@/server/users/getOrCreateCurrentUser";
import { getUserSubscription } from "../subscription/getUserSubscription";
import { redirect } from "next/navigation";

export async function getTemplates() {

    const user = await getOrCreateCurrentUser();
    const subscription = await getUserSubscription();
  
    if (!subscription.subscriptionActive) {
      redirect("/pricing");
    }

    const programs = await prisma.programTemplate.findMany({
      where: {
        OR: [
          { userId: user.id },
          { sptemplate: true }
        ]
      }
    });

    return programs

}