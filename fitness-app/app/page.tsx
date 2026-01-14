import type { Metadata } from "next";
import { auth } from "@clerk/nextjs/server";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BarChart3,
  Check,
  CheckCircle2,
  Dumbbell,
  Flame,
  Shield,
  Sparkles,
  Zap,
} from "lucide-react";
import { CheckoutButtonClient } from "./(public)/pricing/CheckoutButtonClient";
import LenisProvider from "./LenisProvider";

export const metadata: Metadata = {
  title: "SP Fitness – AI-Powered Fitness App",
  description:
    "Smarter training with AI. Generate personalized programs, track workouts, and unlock AI insights with the SP Fitness AI Plan.",
};

const AI_PLAN_ID = process.env.NEXT_PUBLIC_CLERK_AI_PLAN_ID?.trim() || "jfit_ai";
const SUCCESS_REDIRECT = "/programs";

const aiPlanBullets = [
  "5 AI-generated programs each month",
  "Keep all logging + workouts free",
  "Cancel anytime from billing",
];

const featureCards = [
  {
    title: "AI-Generated Programs",
    desc: "Generate personalized programs tuned to your goals and schedule in seconds.",
    icon: Zap,
  },
  {
    title: "Workout Tracking",
    desc: "Log sets, reps, and workouts fast — stay consistent and see progress over time.",
    icon: Dumbbell,
  },
  {
    title: "AI Training Insights",
    desc: "Get lightweight insights based on your training history to keep improving.",
    icon: Sparkles,
  },
  {
    title: "Progress Trends",
    desc: "Keep an eye on momentum with simple progress signals that reward consistency.",
    icon: BarChart3,
  },
];

const testimonials = [
  {
    quote:
      "The AI programs actually feel like they understand my week. I’m training harder, with way less planning stress.",
    name: "Alex M.",
    title: "Gym Enthusiast",
  },
  {
    quote:
      "Logging is so quick that I actually do it. The insights are a nice nudge when I’m drifting off track.",
    name: "Jordan P.",
    title: "Busy Professional",
  },
  {
    quote:
      "Clean UI, zero fluff. The AI plan is worth it just for the programs — it keeps me consistent.",
    name: "Taylor R.",
    title: "Aspiring Athlete",
  },
];

const faqs = [
  {
    q: "What do I get with the AI Plan?",
    a: "The AI Plan unlocks AI-powered program generation and AI insights. Core app features like workout logging remain available without a subscription.",
  },
  {
    q: "Do I need a subscription to use SP Fitness?",
    a: "No. You can use SP Fitness for free. Upgrade only if you want AI-generated programs and AI insights.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. You can cancel from your billing settings at any time. You’ll keep access until the end of the billing period.",
  },
  {
    q: "Is my billing secure?",
    a: "Billing is handled securely via Clerk. You can manage your subscription in your account.",
  },
];

function GradientBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-purple-500/25 via-fuchsia-500/20 to-indigo-500/20 blur-3xl" />
      <div className="absolute -bottom-40 left-0 h-[420px] w-[420px] rounded-full bg-gradient-to-tr from-slate-900/10 via-purple-500/15 to-pink-500/10 blur-3xl" />
      <div className="absolute -bottom-52 right-0 h-[520px] w-[520px] rounded-full bg-gradient-to-tr from-indigo-500/15 via-purple-500/15 to-sky-500/10 blur-3xl" />
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <header className="mx-auto max-w-2xl text-center">
      {eyebrow ? (
        <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur">
          <Sparkles className="h-3.5 w-3.5 text-purple-600" />
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </header>
  );
}

function MockUI() {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-purple-500/25 to-pink-500/20 blur-2xl"
      />
      <div className="relative rounded-3xl border border-slate-200 bg-white/70 p-4 shadow-2xl shadow-purple-100/60 backdrop-blur">
        <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-purple-600 to-pink-500" />
            <div className="space-y-1">
              <div className="h-3.5 w-32 rounded bg-slate-200" />
              <div className="h-2.5 w-24 rounded bg-slate-100" />
            </div>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
            <Flame className="h-4 w-4 text-purple-600" />
            Week 4 • Day 2
          </div>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-900">Today’s Focus</p>
              <span className="text-xs font-semibold text-purple-700">Upper</span>
            </div>
            <div className="mt-3 space-y-2">
              <div className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-purple-100" />
                  <div>
                    <p className="text-xs font-semibold text-slate-900">Bench Press</p>
                    <p className="text-xs text-slate-500">4 × 6–8</p>
                  </div>
                </div>
                <div className="text-xs font-semibold text-slate-700">+1 rep</div>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-pink-100" />
                  <div>
                    <p className="text-xs font-semibold text-slate-900">Rows</p>
                    <p className="text-xs text-slate-500">4 × 8–10</p>
                  </div>
                </div>
                <div className="text-xs font-semibold text-slate-700">steady</div>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-indigo-100" />
                  <div>
                    <p className="text-xs font-semibold text-slate-900">Accessory</p>
                    <p className="text-xs text-slate-500">3 × 12–15</p>
                  </div>
                </div>
                <div className="text-xs font-semibold text-slate-700">tempo</div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-900">AI Insight</p>
              <span className="inline-flex items-center gap-1 rounded-full bg-purple-50 px-2 py-1 text-xs font-semibold text-purple-700">
                <Sparkles className="h-3.5 w-3.5" />
                AI
              </span>
            </div>
            <div className="mt-3 rounded-2xl bg-gradient-to-br from-slate-50 to-white p-4">
              <p className="text-sm font-semibold text-slate-900">
                You’re most consistent on Mon–Wed.
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Keep your hardest lifts early in the week. Save accessories for later sessions to stay fresh.
              </p>
              <div className="mt-4 flex items-center justify-between rounded-xl bg-white px-3 py-2">
                <p className="text-xs font-semibold text-slate-700">Next small win</p>
                <span className="text-xs font-semibold text-purple-700">+2.5kg</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-green-600" />
            <p className="text-sm font-semibold text-slate-900">Track workouts free</p>
            <span className="text-sm text-slate-500">•</span>
            <p className="text-sm text-slate-600">Upgrade for AI programs</p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700">
            <Shield className="h-4 w-4 text-slate-500" />
            Secure billing
          </div>
        </div>
      </div>
    </div>
  );
}

export default async function HomePage() {
  // Keep the landing page accessible to everyone.
  // We only use auth() to conditionally render the header actions (user button / sign in).
  const { userId } = await auth();

  const signedIn = Boolean(userId);

  return (
    <div className="relative flex min-h-screen flex-col bg-white text-slate-900">
      <GradientBackdrop />

      {/* Top Nav */}
      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center gap-2" aria-label="SP Fitness home">
          <Image
            src="/logo.png"
            alt="SP Fitness logo"
            width={256}
            height={256}
            className="h-9 w-9 rounded-xl"
            priority
          />
          <span className="text-base font-bold tracking-tight">SP Fitness</span>
        </Link>

        <nav className="flex items-center gap-3">

          {/* Signed-out: show sign in + start */}
          <SignedOut>
            <Link
              href="/sign-in"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white/70 px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm backdrop-blur transition hover:bg-white"
            >
              Sign In
            </Link>

            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-purple-200/60 transition hover:bg-purple-700 hover:shadow-purple-200/80"
            >
              Start
              <ArrowRight className="h-4 w-4" />
            </Link>
          </SignedOut>

          {/* Signed-in: show go-to-app + Clerk user button */}
          <SignedIn>
            <Link
              href="/programs"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:bg-slate-800"
            >
              Go to app
              <ArrowRight className="h-4 w-4" />
            </Link>
            <div className="ml-1 grid place-items-center">
              <UserButton afterSignOutUrl="/" />
            </div>
          </SignedIn>
        </nav>
      </header>

      {/* Hero */}
    <LenisProvider>
      <main className="relative z-10">
        <section className="mx-auto max-w-6xl px-6 pb-10 pt-10 sm:pt-16">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur">
                <Zap className="h-3.5 w-3.5 text-purple-600" />
                AI programs + free tracking
              </div>

              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                Smarter training{" "}
                <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                  with AI
                </span>
                .
              </h1>

              <p className="max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                Generate personalized programs, track your workouts, and unlock AI insights that keep you moving forward —
                without overcomplicating your training.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                {signedIn ? (
                  <Link href="/programs" className="w-full sm:w-auto">
                    <button className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.01] hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-300 sm:w-auto">
                      Go to app
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                    </button>
                  </Link>
                ) : (
                  <Link href="/pricing" className="w-full sm:w-auto">
                    <button className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-200/60 transition hover:scale-[1.01] hover:bg-purple-700 hover:shadow-purple-200/80 focus:outline-none focus:ring-2 focus:ring-purple-300 sm:w-auto">
                      Get started
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                    </button>
                  </Link>
                )}

                {!signedIn ? (
                  <SignInButton forceRedirectUrl="/pricing">
                    <button className="inline-flex w-full items-center justify-center rounded-xl border border-slate-200 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm backdrop-blur transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-slate-200 sm:w-auto">
                      Sign in
                    </button>
                  </SignInButton>
                ) : null}
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm text-slate-600">
                <div className="inline-flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  Free workout logging
                </div>
                <div className="inline-flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  AI programs on-demand
                </div>
                <div className="inline-flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  Cancel anytime
                </div>
              </div>

              <div className="pt-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Built for consistency
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-3">
                  {["Strength", "Hypertrophy", "Cardio", "Hybrid"].map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:pl-4">
              <MockUI />
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="mx-auto max-w-6xl px-6 py-16">
          <SectionHeading
            eyebrow="Everything you need to train"
            title="Simple, powerful, and designed to keep you consistent."
            subtitle="Use SP Fitness free for tracking and logging. Upgrade to the AI Plan when you want programs and insights."
          />

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featureCards.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="group rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-100/50"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-purple-700 transition group-hover:rotate-2">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-base font-semibold text-slate-900">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-10 rounded-3xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur sm:p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-2">
                <p className="text-sm font-semibold text-slate-900">
                  Keep the basics free. Upgrade only when you want AI.
                </p>
                <p className="text-sm text-slate-600">
                  Track workouts and stay consistent — then subscribe to unlock program generation.
                </p>
              </div>
              <Link href="/pricing" className="w-full sm:w-auto">
                <button className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.01] hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-300 sm:w-auto">
                  View pricing
                  <ArrowRight className="h-4 w-4" />
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="bg-slate-50/60 py-16">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading
              eyebrow="How it works"
              title="Three steps. Zero friction."
              subtitle="Get a plan, train consistently, and let the app do the thinking."
            />

            <ol className="mt-12 grid list-none grid-cols-1 gap-6 md:grid-cols-3">
              {[
                {
                  n: "01",
                  title: "Set your goal",
                  desc: "Tell SP Fitness what you’re training for and how often you can train.",
                  icon: Flame,
                },
                {
                  n: "02",
                  title: "Follow the plan",
                  desc: "Run your sessions and log fast. Stay focused on progress, not planning.",
                  icon: Dumbbell,
                },
                {
                  n: "03",
                  title: "Use AI insights",
                  desc: "Unlock AI feedback and small nudges that keep you moving forward.",
                  icon: Sparkles,
                },
              ].map((s) => {
                const Icon = s.icon;
                return (
                  <li
                    key={s.n}
                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="flex items-center justify-between">
                      <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                        Step {s.n}
                      </div>
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 text-purple-700">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-slate-900">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.desc}</p>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        {/* Pricing */}
        <section
          id="pricing"
          className="relative overflow-hidden bg-gradient-to-br from-purple-700 via-purple-600 to-indigo-700 py-20 text-white"
        >
          <div aria-hidden className="absolute inset-0 opacity-40">
            <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/15 blur-3xl" />
            <div className="absolute -bottom-40 right-0 h-[520px] w-[520px] rounded-full bg-white/10 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-2xl text-center">
              <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/90">
                <Shield className="h-4 w-4" />
                Secure billing via Clerk
              </p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Upgrade when you want AI.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/80 sm:text-lg">
                Use SP Fitness free for tracking. Subscribe to the AI Plan to unlock program generation and insights.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-stretch">
              {/* Free */}
              <div className="rounded-3xl border border-white/15 bg-white/10 p-8 backdrop-blur">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/90">
                  Free
                </div>
                <h3 className="mt-4 text-2xl font-bold">Track & log</h3>
                <p className="mt-2 text-white/80">
                  Keep your training organized with fast logging and a clean workflow.
                </p>

                <div className="mt-6 space-y-3 text-sm text-white/90">
                  {["Workout logging", "Simple, clean app flow", "Keep training data in one place"].map((t) => (
                    <div key={t} className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-300" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <Link href="/pricing" className="w-full">
                    <button className="inline-flex w-full items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-purple-700 shadow-lg transition hover:scale-[1.01] hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-white/40">
                      Get started free
                    </button>
                  </Link>
                </div>
              </div>

              {/* AI Plan */}
              <div className="relative rounded-3xl border border-white/20 bg-white p-8 text-slate-900 shadow-2xl shadow-purple-900/30">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-slate-900 px-4 py-1 text-xs font-semibold text-white shadow-lg">
                  Most popular
                </div>

                <div className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">
                  <Zap className="h-4 w-4" />
                  AI Plan
                </div>

                <div className="mt-4 flex items-end gap-2">
                  <span className="text-5xl font-extrabold tracking-tight">$12</span>
                  <span className="pb-2 text-sm font-semibold text-slate-500">/ month</span>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Unlock AI-generated programs and insights. Keep everything else free.
                </p>

                <div className="mt-6 space-y-3">
                  {aiPlanBullets.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-2 rounded-2xl bg-slate-50 px-4 py-3 text-xs font-semibold text-slate-700">
                  <Shield className="h-4 w-4 text-slate-500" />
                  Cancel anytime • Manage from billing
                </div>

                <div className="mt-8 space-y-3">
                  <SignedIn>
                    <CheckoutButtonClient
                      planId={AI_PLAN_ID}
                      planPeriod="month"
                      newSubscriptionRedirectUrl={SUCCESS_REDIRECT}
                    >
                      <button className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-200/60 transition hover:scale-[1.01] hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-300">
                        Start AI Plan
                        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                      </button>
                    </CheckoutButtonClient>

                    <p className="text-center text-xs text-slate-500">
                      Already subscribed?{" "}
                      <Link href="/programs" className="font-semibold text-slate-900 hover:underline">
                        Go to app
                      </Link>
                    </p>
                  </SignedIn>

                  <SignedOut>
                    <SignInButton forceRedirectUrl="/pricing">
                      <button className="inline-flex w-full items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-200">
                        Sign in to subscribe
                      </button>
                    </SignInButton>
                  </SignedOut>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mx-auto max-w-6xl px-6 py-16">
          <SectionHeading
            eyebrow="Social proof"
            title="Built for lifters who want momentum."
            subtitle="Real people, real consistency. (Placeholders for now — swap in later.)"
          />

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100 text-purple-700">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div aria-hidden className="flex gap-1 text-slate-200">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className="h-2 w-2 rounded-full bg-purple-200" />
                    ))}
                  </div>
                </div>

                <blockquote className="mt-4 text-sm leading-relaxed text-slate-700">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-5">
                  <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.title}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-slate-50/60 py-16">
          <div className="mx-auto max-w-6xl px-6">
            <SectionHeading
              eyebrow="FAQ"
              title="Questions, answered."
              subtitle="Everything you need to know before you start."
            />

            <div className="mx-auto mt-10 max-w-2xl divide-y divide-slate-200 rounded-3xl border border-slate-200 bg-white/70 shadow-sm backdrop-blur">
              {faqs.map((f) => (
                <details key={f.q} className="group p-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-slate-900">
                    <span>{f.q}</span>
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{f.a}</p>
                </details>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link href="/pricing">
                <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.01] hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-300">
                  Start now
                  <ArrowRight className="h-4 w-4" />
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 shadow-sm sm:p-12">
            <div aria-hidden className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
            <div aria-hidden className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-pink-500/10 blur-3xl" />

            <div className="relative mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Ready to train with momentum?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                Start free for tracking. Upgrade anytime to unlock AI programs and insights.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                {signedIn ? (
                  <Link href="/programs" className="w-full sm:w-auto">
                    <button className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.01] hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-300 sm:w-auto">
                      Go to app
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                    </button>
                  </Link>
                ) : (
                  <Link href="/pricing" className="w-full sm:w-auto">
                    <button className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-200/60 transition hover:scale-[1.01] hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-300 sm:w-auto">
                      Get started
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                    </button>
                  </Link>
                )}

                {!signedIn ? (
                  <Link href="/sign-in" className="w-full sm:w-auto">
                    <button className="inline-flex w-full items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-200 sm:w-auto">
                      Sign in
                    </button>
                  </Link>
                ) : null}
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-600">
                <span className="inline-flex items-center gap-2">
                  <Shield className="h-4 w-4 text-slate-500" />
                  Secure billing
                </span>
                <span className="inline-flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  Cancel anytime
                </span>
                <span className="inline-flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  Free logging
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </LenisProvider>


      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-200 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="SP Fitness logo"
              width={256}
              height={256}
              className="h-8 w-8 rounded-xl"
            />
            <div>
              <p className="text-sm font-bold tracking-tight text-slate-900">SP Fitness</p>
              <p className="text-xs text-slate-500">AI programs + free tracking</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-slate-600">
            {signedIn ? (
              <Link href="/programs" className="transition hover:text-slate-900">
                Go to app
              </Link>
            ) : (
              <Link href="/sign-in" className="transition hover:text-slate-900">
                Sign in
              </Link>
            )}
          </div>

          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} SP Fitness. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
