import { auth, clerkClient } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

export type UserSubscription = {
  subscriptionActive: boolean;
  subscriptionStatus: "active" | "past_due" | "canceled" | "inactive";
};

export async function getUserSubscription(
  clerkUserId?: string
): Promise<UserSubscription> {
  const user = await auth();
  const resolvedClerkId = clerkUserId ?? user.userId;


  if (!resolvedClerkId) {
    throw new Error("Not authenticated");
  }

  const client = await clerkClient();

  const billing = await client.billing.getUserBillingSubscription(resolvedClerkId);

  const itemStatuses = billing.subscriptionItems.map((item) => item.status) ?? [];

  const hasActiveItem = itemStatuses.some(
    (status) => status === "active" || status === "upcoming"
  );
  const isPastDue =
    itemStatuses.includes("past_due");
  const isEnded =
    itemStatuses.length > 0
      ? itemStatuses.every((status) => status === "ended")
      : false;

  let mappedStatus: UserSubscription["subscriptionStatus"] = "inactive";
  if (billing) {
    if (isEnded) {
      mappedStatus = "canceled";
    } else if (isPastDue) {
      mappedStatus = "past_due";
    } else if (hasActiveItem || billing.status === "active") {
      mappedStatus = "active";
    }
  }

  const subscriptionActive = mappedStatus === "active";

  await prisma.user.upsert({
    where: { clerkId: resolvedClerkId },
    update: {
      subscriptionActive,
      subscriptionStatus: mappedStatus,
    },
    create: {
      clerkId: resolvedClerkId,
      subscriptionActive,
      subscriptionStatus: mappedStatus,
    },
  });

  return { subscriptionActive, subscriptionStatus: mappedStatus };
}
