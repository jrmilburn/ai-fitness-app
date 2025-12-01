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

      if (!templateId) {
        throw new Error("No template returned from server.");
      }

      // ✅ redirect to builder with the new template
      router.push(`/programs/new?templateId=${templateId}`);
    } catch (err: any) {
      setError(err.message || "Failed to generate program.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-[calc(100vh-0px)] flex-col bg-white">
      {/* Center hero like ChatGPT base */}
      <main className="flex-1 flex flex-col items-center">
        <div className="w-full max-w-2xl px-4 pt-16 text-center space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight">
            Describe your program
          </h1>
          <p className="text-sm text-muted-foreground">
            Tell us about your goals, training days, equipment, and experience.
            We’ll turn it into a complete program.
          </p>
        </div>

        {/* Output / helper area */}
        <div className="w-full max-w-2xl flex-1 px-4 py-6 overflow-y-auto">
          {error && (
            <div className="mb-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700 text-left">
              {error}
            </div>
          )}

          {loading && (
            <div className="rounded-2xl border bg-slate-50 px-4 py-4 text-left text-sm animate-pulse">
              <p className="font-medium mb-1">
                Cooking up your program… 🔥
              </p>
              <p className="text-xs text-muted-foreground">
                This usually only takes a few seconds. We’re matching your goals
                to your exercise library.
              </p>
            </div>
          )}

          {!loading && !error && (
            <div className="mt-4 grid gap-3 text-left text-sm text-muted-foreground">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                Try a prompt
              </p>
              <div className="grid gap-2">
                <ExampleChip
                  text="4-day upper/lower hypertrophy program, intermediate lifter, access to commercial gym."
                  onClick={setPrompt}
                />
                <ExampleChip
                  text="3-day full-body strength program for a beginner, focusing on squat, bench, and deadlift."
                  onClick={setPrompt}
                />
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Bottom prompt bar like ChatGPT */}
      <form
        onSubmit={handleSubmit}
        className="border-t bg-white px-4 py-3 flex justify-center"
      >
        <div className="flex w-full max-w-2xl items-center gap-2">
          <Input
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="e.g. 5-day push/pull/legs for gaining muscle with one conditioning day"
            className="px-4 py-4 text-sm rounded-full"
          />
          <Button
            type="submit"
            variant="ghost"
            disabled={loading || !prompt.trim()}
            className="rounded-full px-5 h-full"
          >
            {loading ? "Generating…" : "Generate"}
          </Button>
        </div>
      </form>
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
      className="rounded-2xl border border-slate-200 bg-white px-3 py-2 text-left hover:bg-slate-100 transition"
    >
      {text}
    </button>
  );
}
