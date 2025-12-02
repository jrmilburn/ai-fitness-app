"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function AiBuildPage() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/programs/ai-build", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      const templateId = data.template?.id as string | undefined;
      if (!templateId) throw new Error("No template returned from server.");

      router.push(`/programs/new?templateId=${templateId}`);
    } catch (err: any) {
      setError(err.message || "Failed to generate program.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center bg-[#050509] px-4 py-12 text-zinc-50">
      <div className="w-full max-w-3xl space-y-8">
        {/* Heading */}
        <div className="space-y-3 text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-50">
            Describe your program
          </h1>
          <p className="text-sm text-zinc-400">
            Tell us about your goals, training days, equipment, and experience.
            We’ll turn it into a complete program you can edit.
          </p>
        </div>

        {/* Prompt input */}
        <form onSubmit={handleSubmit} className="space-y-2">
          <div className="flex w-full flex-col gap-3 sm:flex-row">
            <Input
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g. 5-day push/pull/legs for gaining muscle with one conditioning day"
              className="h-12 flex-1 rounded-full border border-[#2E2E32]! bg-[#18181B]! px-5 text-sm text-zinc-100 shadow-sm placeholder:text-zinc-500 focus-visible:border-[#A64DFF] focus-visible:ring-1 focus-visible:ring-[#A64DFF] focus-visible:ring-offset-0"
            />
            <Button
              type="submit"
              disabled={loading || !prompt.trim()}
              className="h-12 rounded-full border-0 bg-[#A64DFF] px-6 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#B56BFF] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Generating…" : "Generate"}
            </Button>
          </div>
          <p className="text-xs text-zinc-500">
            The more specific you are (days, goals, equipment, experience), the
            better the plan.
          </p>
        </form>

        {/* Try a prompt */}
        <section className="space-y-3">
          <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
            Try a prompt
          </p>
          <div className="grid gap-2">
            <ExampleChip
              text="4-day upper/lower hypertrophy program for an intermediate lifter with access to a commercial gym."
              onClick={setPrompt}
            />
            <ExampleChip
              text="3-day full-body strength program for a beginner focusing on squat, bench, and deadlift."
              onClick={setPrompt}
            />
          </div>
        </section>

        {/* Feedback */}
        {(loading || error) && (
          <section className="space-y-3">
            {loading && (
              <div className="rounded-lg border border-[#2E2E32] bg-[#121214] px-4 py-4 text-sm animate-pulse">
                <p className="mb-1 font-medium text-zinc-100">
                  Cooking up your program… 🔥
                </p>
                <p className="text-xs text-zinc-400">
                  This usually only takes a few seconds. We’re matching your
                  goals to your exercise library and building a training week.
                </p>
              </div>
            )}

            {error && (
              <div className="rounded-lg border border-red-500/70 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                {error}
              </div>
            )}
          </section>
        )}
      </div>
    </div>
  );
}

function ExampleChip({
  text,
  onClick,
}: {
  text: string;
  onClick: (value: string) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onClick(text)}
      className="w-full rounded-full border border-[#2E2E32] bg-[#18181B] px-4 py-2 text-left text-xs text-zinc-200 transition-colors hover:border-[#A64DFF]/70 hover:bg-[#2A173F]/40"
    >
      {text}
    </button>
  );
}
