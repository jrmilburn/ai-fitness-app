import type { Metadata } from "next";
import { auth } from "@clerk/nextjs/server";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { getUserSubscription } from "@/server/subscription/getUserSubscription";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Shield, Sparkles, Zap, Dumbbell, Search } from "lucide-react";
import { CheckoutButtonClient } from "./(public)/pricing/CheckoutButtonClient";

export const metadata: Metadata = {
  title: "SP Fitness – AI-Powered Fitness App",
  description: "Smarter training with AI. Achieve your fitness goals with personalized workout programs, workout tracking, and AI insights.",
};

const AI_PLAN_ID =
  process.env.NEXT_PUBLIC_CLERK_AI_PLAN_ID?.trim() || "jfit_ai";
const SUCCESS_REDIRECT = "/programs";

const featureList = [
  "5 AI-generated programs each month",
  "Keep all logging + workouts free",
  "Cancel anytime from billing",
];

export default async function HomePage() {
  const { userId } = await auth();
  if (userId) {
    const subscription = await getUserSubscription(userId);
    if (subscription.subscriptionActive) {
      return (
        // Redirect authenticated subscribers directly to the app
        void (await import("next/navigation")).redirect("/programs")
      );
    } else {
      return (
        // Redirect authenticated non-subscribers to pricing page to upgrade
        void (await import("next/navigation")).redirect("/pricing")
      );
    }
  }

  const subscription = { subscriptionActive: false, subscriptionStatus: "inactive" };
  const alreadySubscribed = subscription.subscriptionActive;

  return (
    <div className="flex min-h-screen flex-col">
      {/* Top Navigation */}
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="SP Fitness logo" width={256} height={256} className="h-8 w-8" />
          <span className="text-xl font-bold text-slate-900">SP Fitness</span>
        </div>
        <Link href="/sign-in" className="text-sm font-semibold text-slate-600 transition hover:text-slate-900">
          Sign In
        </Link>
      </header>

      {/* Hero Section */}
      <section className="flex flex-1 flex-col items-center justify-center px-6 text-center">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">
            Smarter training with AI.
          </h1>
          <p className="text-lg text-slate-600 md:text-xl">
            Generate personalized programs and keep all other features free.
          </p>
          <Link href="/pricing">
            <button className="rounded-xl bg-purple-600 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-purple-200 transition hover:bg-purple-700">
              Get Started for Free
            </button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <header className="mx-auto mb-12 max-w-xl text-center">
            <h2 className="text-3xl font-bold text-slate-900">Features</h2>
            <p className="mt-4 text-lg text-slate-600">
              SP Fitness combines powerful AI with a comprehensive workout platform to help you train smarter.
            </p>
          </header>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Feature 1 */}
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-700">
                <Zap className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">AI-Generated Programs</h3>
                <p className="mt-2 text-slate-600">
                  Generate personalized workout programs tailored to your goals in seconds.
                </p>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-700">
                <Dumbbell className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Workout Tracking</h3>
                <p className="mt-2 text-slate-600">
                  Log your workouts, sets, and reps effortlessly to keep track of your progress over time.
                </p>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-700">
                <Sparkles className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">AI Training Insights</h3>
                <p className="mt-2 text-slate-600">
                  Get automatic insights and recommendations from your training data to improve faster.
                </p>
              </div>
            </div>
            {/* Feature 4 */}
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-purple-100 text-purple-700">
                <Search className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Exercise Library</h3>
                <p className="mt-2 text-slate-600">
                  Explore a comprehensive library of exercises to build and diversify your workouts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <header className="mx-auto mb-12 max-w-xl text-center">
            <h2 className="text-3xl font-bold text-slate-900">How It Works</h2>
            <p className="mt-4 text-lg text-slate-600">
              Achieve your goals in three simple steps.
            </p>
          </header>
          <ol className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 list-none">
            <li>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-purple-600 text-white font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Tell us your goals</h3>
              <p className="mt-2 text-slate-600">
                Enter your fitness goals, schedule, and equipment. Our AI will create a custom workout program just for you.
              </p>
            </li>
            <li>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-purple-600 text-white font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Start training</h3>
              <p className="mt-2 text-slate-600">
                Follow your personalized training plan in the app and log each workout. Every set and rep is tracked with ease.
              </p>
            </li>
            <li>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-purple-600 text-white font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Get insights</h3>
              <p className="mt-2 text-slate-600">
                As you log workouts, our AI analyzes your performance. Receive actionable insights and recommendations to keep improving.
              </p>
            </li>
          </ol>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-purple-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <header className="mx-auto mb-12 max-w-xl text-center">
            <h2 className="text-3xl font-bold text-slate-900">Pricing</h2>
            <p className="mt-4 text-lg text-slate-600">
              SP Fitness is free to use for core features. Upgrade to the AI Plan – just $12/month – to unlock AI-powered programs and insights.
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
                  One simple plan. Get AI-generated programs (5 per month) with smart defaults for strength, cardio, and hybrid training.
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
                  Secured billing. Cancel anytime.
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <header className="mx-auto mb-12 max-w-xl text-center">
            <h2 className="text-3xl font-bold text-slate-900">Testimonials</h2>
            <p className="mt-4 text-lg text-slate-600">
              Hear from some of our happy users who are achieving their goals.
            </p>
          </header>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow">
              <p className="text-slate-900">
                &ldquo;This app has completely changed how I plan my workouts. The AI is like having a personal trainer in my pocket!&rdquo;
              </p>
              <p className="mt-4 text-sm font-semibold text-slate-900">Alex M.</p>
              <p className="text-sm text-slate-500">Gym Enthusiast</p>
            </div>
            {/* Testimonial 2 */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow">
              <p className="text-slate-900">
                &ldquo;I&apos;ve seen amazing results in just a few weeks. The AI programs keep me motivated and the workouts are actually fun!&rdquo;
              </p>
              <p className="mt-4 text-sm font-semibold text-slate-900">Jordan P.</p>
              <p className="text-sm text-slate-500">Busy Professional</p>
            </div>
            {/* Testimonial 3 */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow">
              <p className="text-slate-900">
                &ldquo;The workout logging and insights are game-changers. Everything is so easy to use and keeps me accountable.&rdquo;
              </p>
              <p className="mt-4 text-sm font-semibold text-slate-900">Taylor R.</p>
              <p className="text-sm text-slate-500">Aspiring Athlete</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <header className="mx-auto mb-12 max-w-xl text-center">
            <h2 className="text-3xl font-bold text-slate-900">FAQ</h2>
            <p className="mt-4 text-lg text-slate-600">
              Your questions, answered.
            </p>
          </header>
          <div className="mx-auto max-w-2xl">
            <details className="group border-b border-slate-200 py-4">
              <summary className="cursor-pointer text-base font-semibold text-slate-900">
                What is the AI Plan?
              </summary>
              <div className="mt-2 text-slate-600">
                The AI Plan is a monthly subscription (US$12 per month) that unlocks AI-powered features like workout program generation and training insights.
              </div>
            </details>
            <details className="group border-b border-slate-200 py-4">
              <summary className="cursor-pointer text-base font-semibold text-slate-900">
                Do I need a subscription to use SP Fitness?
              </summary>
              <div className="mt-2 text-slate-600">
                No. You can use SP Fitness for free. Creating programs manually, logging workouts, and exploring the exercise library are all available without a subscription. The AI Plan is only needed if you want AI-generated programs and AI insights.
              </div>
            </details>
            <details className="group border-b border-slate-200 py-4">
              <summary className="cursor-pointer text-base font-semibold text-slate-900">
                Can I cancel my subscription?
              </summary>
              <div className="mt-2 text-slate-600">
                Yes, you can cancel your AI Plan at any time. There are no long-term commitments – simply cancel from your account’s billing page, and you’ll continue to have access until the end of your billing period.
              </div>
            </details>
            <details className="group border-b border-slate-200 py-4">
              <summary className="cursor-pointer text-base font-semibold text-slate-900">
                How do AI insights work?
              </summary>
              <div className="mt-2 text-slate-600">
                Our AI analyzes the workouts you log to find patterns and give feedback. It provides a brief summary of your recent training and personalized recommendations on how to improve based on your performance.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-purple-600 py-16 text-center text-white">
        <div className="mx-auto max-w-xl px-6">
          <h2 className="text-3xl font-bold">
            Ready to start your AI-powered fitness journey?
          </h2>
          <p className="mt-4 text-lg">
            Join SP Fitness today and reach your goals faster.
          </p>
          <Link href="/pricing">
            <button className="mt-8 rounded-xl bg-white px-6 py-4 text-base font-semibold text-purple-600 shadow-lg shadow-purple-200 transition hover:bg-purple-100">
              Get Started Now
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 py-8 text-center text-sm text-slate-500">
        © 2026 SP Fitness. All rights reserved.
      </footer>
    </div>
  );
}
