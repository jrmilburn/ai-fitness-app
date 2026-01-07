import { auth, currentUser } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

export async function getOrCreateCurrentUser() {
  const { userId: clerkId } = await auth();

  if (!clerkId) throw new Error("Not authenticated");

  // Fetch details like email/phone from Clerk
  const clerkUser = await currentUser();
  if (!clerkUser) throw new Error("Clerk user not found");


  // Upsert pattern ensures the User row always exists
  const user = await prisma.user.upsert({
    where: { clerkId },
    update: {
    },
    create: {
      clerkId,  // <-- Clerk user ID
    },
  });

  return user; // user.id is your internal ID
}
