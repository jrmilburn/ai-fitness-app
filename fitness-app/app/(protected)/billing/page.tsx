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
  periodReset: Date;
  user: User;
};

async function ensureUsageWindow(user: User): Promise<UsageSnapshot> {
  const now = new Date();
  let periodStart = user.aiProgramsPeriodStart ?? now;
  let used = user.aiProgramsUsedThisPeriod;

  let periodReset = new Date(periodStart);
  periodReset.setMonth(periodReset.getMonth() + 1);

  // If we've never set a period or we've passed the reset date, reset usage
  if (!user.aiProgramsPeriodStart || now >= periodReset) {
    periodStart = now;
    used = 0;

    user = await prisma.user.update({
      where: { id: user.id },
      data: {
        aiProgramsPeriodStart: periodStart,
        aiProgramsUsedThisPeriod: used,
      },
    });

    periodReset = new Date(periodStart);
    periodReset.setMonth(periodReset.getMonth() + 1);
  }

  const remaining = Math.max(MONTHLY_AI_LIMIT - used, 0);

  return { used, remaining, periodStart, periodReset, user };
}

function StatusBadge({ status }: { status: string }) {
  const tone =
    status === "active"
      ? "bg-green-50 text-green-800 border-green-200"
      : status === "past_due"
        ? "bg-amber-50 text-amber-800 border-amber-200"
        : status === "canceled"
          ? "bg-slate-100 text-slate-700 border-slate-200"
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

  const isInactive =
    !subscription.subscriptionActive ||
    subscription.subscriptionStatus === "canceled" ||
    subscription.subscriptionStatus === "inactive";

  const isPastDue = subscription.subscriptionStatus === "past_due";

  const usagePercent =
    MONTHLY_AI_LIMIT > 0
      ? Math.min((usage.used / MONTHLY_AI_LIMIT) * 100, 100)
      : 0;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100">
      {/* Header */}
      <header className="sticky top-0 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link
            href="/programs"
            className="text-lg font-semibold text-slate-900"
          >
            SP
          </Link>
          <Link href="/programs">
            <button className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
              ← Back to app
            </button>
          </Link>
        </div>
      </header>

      {/* Main */}
      <div className="mx-auto max-w-4xl px-6 py-12 md:py-16">
        {/* Page heading */}
        <div className="mb-8 space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-purple-700">
            Billing
          </p>
          <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Manage your subscription
          </h1>
          <p className="text-sm text-slate-600 md:text-base">
            View your plan, update payment details, and track your AI usage.
          </p>
        </div>

        {/* Current plan summary */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-wide text-slate-500">
              Current plan
            </p>
            <p className="mt-1 text-sm font-semibold text-slate-900">
              AI Plan
              {!subscription.subscriptionActive ||
              subscription.subscriptionStatus === "inactive"
                ? " (not subscribed)"
                : ""}
            </p>
            <p className="mt-1 text-xs text-slate-500">
              Includes up to {MONTHLY_AI_LIMIT} AI-generated programs per month.
            </p>
          </div>
          <div className="flex items-center gap-3 text-sm text-slate-600">
            <StatusBadge status={subscription.subscriptionStatus} />
          </div>
        </div>

        {/* Alerts */}
        {isInactive && (
          <div className="mb-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
            <p className="font-medium">You don’t have an active AI subscription.</p>
            <p className="mt-1">
              AI program generation will be locked until you start a
              subscription. Use{" "}
              <span className="font-semibold">Manage subscription</span> to
              subscribe or update your plan.
            </p>
          </div>
        )}

        {isPastDue && !isInactive && (
          <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900">
            <p className="font-medium">There’s a payment issue with your subscription.</p>
            <p className="mt-1">
              Please update your payment method via{" "}
              <span className="font-semibold">Manage subscription</span> so your
              AI access isn’t interrupted.
            </p>
          </div>
        )}

        {/* Cards */}
        <div className="relative grid gap-6 md:grid-cols-2">
          {/* Subscription card */}
          <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col items-start justify-start gap-4 h-full">
                <p className="text-[11px] font-medium uppercase tracking-wide text-slate-500">
                  Subscription
                </p>
                <div>
                <p className="mt-1 text-lg font-semibold text-slate-900">
                  AI Plan
                </p>
                <p className="mt-1 inline-flex items-center gap-2 text-sm text-slate-600">
                  Status:
                  <StatusBadge status={subscription.subscriptionStatus} />
                </p>
                </div>
                <div className="flex flex-col items-start">
                <SubscriptionDetailsButtonClient />
                <p className="mt-2 text-xs text-slate-500">
                  Billing is securely handled by Clerk. You can change or cancel
                  your plan at any time.
                </p>
                </div>
            </div>
          </div>

          {/* AI usage card */}
          <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-slate-900">
                AI usage this month
              </h2>
              <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
                Limit: {MONTHLY_AI_LIMIT} programs
              </span>
            </div>

            <div className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-3">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-slate-900">
                  {usage.used}
                </span>
                <span className="text-sm text-slate-500">
                  used · {usage.remaining} remaining
                </span>
              </div>

              {/* Progress bar */}
              <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-slate-200">
                <div
                  className="h-full rounded-full bg-purple-600 transition-all"
                  style={{ width: `${usagePercent}%` }}
                />
              </div>

              <div className="mt-2 flex items-center justify-between text-xs text-slate-500">
                <span>
                  Period started: {usage.periodStart.toLocaleDateString()}
                </span>
                <span>
                  Resets: {usage.periodReset.toLocaleDateString()}
                </span>
              </div>
            </div>

            <div className="text-sm text-slate-600">
              AI program generation is available with an active subscription.
              Once you hit {MONTHLY_AI_LIMIT} programs, generation locks until
              your next reset date.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
