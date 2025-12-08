import { redirect } from "next/navigation";
import { getUserSubscription } from "./getUserSubscription";

/**
 * Ensures the authenticated user has an active subscription.
 * If not, redirects them to the pricing page to start checkout.
 */
export async function requireActiveSubscription(
  redirectPath: string = "/pricing"
) {
  const subscription = await getUserSubscription();

  console.log("SUBSCRIPTION", subscription)

  if (!subscription.subscriptionActive) {
    redirect(redirectPath);
  }

  return subscription;
}
