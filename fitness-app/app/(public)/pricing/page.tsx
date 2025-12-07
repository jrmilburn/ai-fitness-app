import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { CheckCircle2, Shield, Sparkles, Zap } from "lucide-react";
import { CheckoutButtonClient } from "./CheckoutButtonClient";
import { getUserSubscription } from "@/server/subscription/getUserSubscription";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";

const AI_PLAN_ID =
  process.env.NEXT_PUBLIC_CLERK_AI_PLAN_ID?.trim() || "jfit_ai";

const SUCCESS_REDIRECT = "/programs";

const featureList = [
  "5 AI-generated programs each month",
  "Keep all logging + workouts free",
  "Cancel anytime from billing",
];

export default async function PricingPage() {
  const { userId } = await auth();
  const subscription =
    userId ? await getUserSubscription(userId) : { subscriptionActive: false };
  const alreadySubscribed = subscription.subscriptionActive;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-16">
        <header className="space-y-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-purple-50 px-4 py-2 text-sm font-semibold text-purple-800 shadow-sm">
            <Sparkles className="h-4 w-4" />
            AI Plan
          </div>
          <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">
            Smarter training with AI.
          </h1>
          <p className="text-lg text-slate-600 md:text-xl">
            Generate personalized programs and keep every other feature free.
          </p>
        </header>

        <div className="flex justify-center">
          <div className="flex h-full w-full max-w-2xl flex-col justify-between rounded-2xl border border-slate-200 bg-white p-8 shadow-lg shadow-purple-100/40">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-3 py-1 text-sm font-semibold text-purple-800">
                <Zap className="h-4 w-4" />
                AI Access
              </div>
              <div className="flex items-end gap-2">
                <span className="text-5xl font-bold text-slate-900">$</span>
                <span className="text-5xl font-bold text-slate-900">12</span>
                <span className="pb-2 text-slate-500">/ month</span>
              </div>
              <p className="text-slate-600">
                One simple plan. Get AI-generated programs (5 per month) with
                smart defaults for strength, cardio, and hybrid training.
              </p>
              <div className="space-y-3">
                {featureList.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-700">
                <Shield className="h-4 w-4 text-slate-500" />
                Secured with Clerk billing. Cancel anytime.
              </div>
            </div>

            <div className="mt-8 space-y-3">
              <SignedIn>
                {alreadySubscribed ? (
                  <Link href="/programs">
                    <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-purple-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-200 transition hover:bg-purple-700">
                      Go to app
                    </button>
                  </Link>
                ) : (
                  <CheckoutButtonClient
                    planId={AI_PLAN_ID}
                    planPeriod="month"
                    newSubscriptionRedirectUrl={SUCCESS_REDIRECT}
                  >
                    <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-purple-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-200 transition hover:bg-purple-700">
                      Start AI Plan
                    </button>
                  </CheckoutButtonClient>
                )}
              </SignedIn>
              <SignedOut>
                <SignInButton forceRedirectUrl="/pricing">
                  <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:border-slate-300 hover:bg-slate-50">
                    Sign in to subscribe
                  </button>
                </SignInButton>
              </SignedOut>
              <p className="text-center text-xs text-slate-500">
                You’ll be redirected to Clerk checkout. Success returns you to{" "}
                {SUCCESS_REDIRECT}.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
