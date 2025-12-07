import { auth, currentUser } from "@clerk/nextjs/server";
import { User } from "@prisma/client";
import { redirect } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { getUserSubscription } from "@/server/subscription/getUserSubscription";
import { SubscriptionDetailsButtonClient } from "./SubscriptionDetailsButtonClient";

const MONTHLY_AI_LIMIT = 5;

type UsageSnapshot = {
  used: number;
  remaining: number;
  periodStart: Date;
  user: User;
};

async function ensureUsageWindow(user: User): Promise<UsageSnapshot> {
  const now = new Date();
  let periodStart = user.aiProgramsPeriodStart ?? now;
  let used = user.aiProgramsUsedThisPeriod;

  const nextReset = new Date(periodStart);
  nextReset.setMonth(nextReset.getMonth() + 1);

  if (!user.aiProgramsPeriodStart || now >= nextReset) {
    periodStart = now;
    used = 0;
    user = await prisma.user.update({
      where: { id: user.id },
      data: {
        aiProgramsPeriodStart: periodStart,
        aiProgramsUsedThisPeriod: used,
      },
    });
  }

  const remaining = Math.max(MONTHLY_AI_LIMIT - used, 0);
  return { used, remaining, periodStart, user };
}

function StatusBadge({ status }: { status: string }) {
  const tone =
    status === "active"
      ? "bg-green-50 text-green-800 border-green-200"
      : status === "past_due"
        ? "bg-amber-50 text-amber-800 border-amber-200"
        : "bg-slate-100 text-slate-700 border-slate-200";

  const label =
    status === "active"
      ? "Active"
      : status === "past_due"
        ? "Past due"
        : status === "canceled"
          ? "Canceled"
          : "Inactive";

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold ${tone}`}
    >
      <span className="h-2 w-2 rounded-full bg-current opacity-70" />
      {label}
    </span>
  );
}

export default async function BillingPage() {
  const { userId } = await auth();
  if (!userId) {
    redirect("/sign-in?redirect_url=/billing");
  }

  const clerkProfile = await currentUser();
  const email = clerkProfile?.primaryEmailAddress?.emailAddress ?? null;

  let user = await prisma.user.upsert({
    where: { clerkId: userId! },
    update: { email: email ?? undefined },
    create: { clerkId: userId!, email: email ?? undefined },
  });

  const subscription = await getUserSubscription(user.clerkId);
  user = await prisma.user.update({
    where: { id: user.id },
    data: {
      subscriptionActive: subscription.subscriptionActive,
      subscriptionStatus: subscription.subscriptionStatus,
    },
  });

  const usage = await ensureUsageWindow(user);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100">
      <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link href="/programs" className="text-lg font-semibold text-slate-900">
            Studio Parallel
          </Link>
          <Link href="/programs">
            <button className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
              ← Back to app
            </button>
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="mb-8 space-y-2">
          <p className="text-sm font-semibold uppercase tracking-wide text-purple-700">
            Billing
          </p>
          <h1 className="text-4xl font-bold text-slate-900">
            Manage your subscription
          </h1>
          <p className="text-slate-600">
            Update payment details, view invoices, and track AI usage.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-600">
                  Subscription status
                </p>
                <div className="mt-2">
                  <StatusBadge status={subscription.subscriptionStatus} />
                </div>
              </div>
              <SubscriptionDetailsButtonClient />
            </div>
            <div className="rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-700">
              Your billing is handled by Clerk. Use the button above to view
              statements, manage payment methods, or cancel.
            </div>
          </div>

          <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-slate-900">
                AI usage this month
              </h2>
              <span className="text-sm text-slate-500">
                Resets monthly from period start
              </span>
            </div>
            <div className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-3">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-slate-900">
                  {usage.used}
                </span>
                <span className="text-slate-500">
                  of {MONTHLY_AI_LIMIT} used
                </span>
              </div>
              <div className="mt-1 text-sm text-slate-600">
                Remaining: {usage.remaining} programs
              </div>
              <div className="mt-2 text-xs text-slate-500">
                Period started: {usage.periodStart.toLocaleDateString()}
              </div>
            </div>
            <div className="text-sm text-slate-600">
              AI generation is available with an active subscription. Once you
              hit the limit, generation locks until the next billing period.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
