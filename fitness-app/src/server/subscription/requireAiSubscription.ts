import { NextResponse } from "next/server";
import { getUserSubscription } from "./getUserSubscription";

export async function requireAiSubscription() {
  const subscription = await getUserSubscription();

  if (!subscription.subscriptionActive) {
    return NextResponse.json(
      { error: "AI access requires an active subscription." },
      { status: 403 }
    );
  }

  return subscription;
}
