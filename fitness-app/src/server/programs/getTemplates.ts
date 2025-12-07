import { prisma } from "@/lib/prisma";

import { getOrCreateCurrentUser } from "@/server/users/getOrCreateCurrentUser";

export async function getTemplates() {

    const user = await getOrCreateCurrentUser();

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