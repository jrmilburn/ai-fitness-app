"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

type Goal = "STRENGTH" | "MUSCLE" | "FITNESS";
type Experience = "BEGINNER" | "INTERMEDIATE" | "ADVANCED";

// Matches backend ProgramGoal enum
type ProgramGoalApi =
  | "STRENGTH"
  | "HYPERTROPHY"
  | "ENDURANCE"
  | "GENERAL_FITNESS";

export default function AiBuildPage() {
  const [goal, setGoal] = useState<Goal>("MUSCLE");
  const [isSportSpecific, setIsSportSpecific] = useState<"YES" | "NO">("NO");
  const [sport, setSport] = useState("");
  const [daysPerWeek, setDaysPerWeek] = useState(4);
  const [weeks, setWeeks] = useState(6);
  const [sessionLength, setSessionLength] = useState(60);
  const [experience, setExperience] = useState<Experience>("INTERMEDIATE");
  const [equipment, setEquipment] = useState("");
  const [injuries, setInjuries] = useState("");
  const [extraNotes, setExtraNotes] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!daysPerWeek || !weeks) return;

    setLoading(true);
    setError(null);

    // Map UI goal to backend ProgramGoal enum
    const mappedGoal: ProgramGoalApi =
      goal === "STRENGTH"
        ? "STRENGTH"
        : goal === "MUSCLE"
        ? "HYPERTROPHY"
        : "GENERAL_FITNESS"; // FITNESS -> GENERAL_FITNESS

    const body = {
      goal: mappedGoal,
      isSportSpecific: isSportSpecific === "YES",
      sport,
      daysPerWeek,
      weeks,
      sessionLength,
      experience, // already matches backend union
      equipment,
      injuries,
      extraNotes,
    };

    try {
      const res = await fetch("/api/programs/ai-build", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
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

  const isSport = isSportSpecific === "YES";

  return (
    <div className="flex min-h-screen flex-col items-center bg-[#050509]! px-4 py-12 text-zinc-50">
      <div className="w-full max-w-3xl space-y-8">
        {/* Heading */}
        <div className="space-y-3 text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-50">
            Tell us about your training
          </h1>
          <p className="text-sm text-zinc-400">
            We&apos;ll turn your goals, schedule, and equipment into a complete program
            you can edit in the builder.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Goals */}
          <section className="space-y-2">
            <Label className="text-xs font-medium uppercase tracking-wide text-zinc-400">
              Primary goal
            </Label>
            <div className="grid gap-2 sm:grid-cols-3">
              <GoalCard
                label="Strength"
                description="Get stronger on key lifts."
                active={goal === "STRENGTH"}
                onClick={() => setGoal("STRENGTH")}
              />
              <GoalCard
                label="Muscle building"
                description="Hypertrophy-focused training."
                active={goal === "MUSCLE"}
                onClick={() => setGoal("MUSCLE")}
              />
              <GoalCard
                label="Fitness / conditioning"
                description="Work capacity & cardio."
                active={goal === "FITNESS"}
                onClick={() => setGoal("FITNESS")}
              />
            </div>
          </section>

          {/* Sport-specific */}
          <section className="space-y-2">
            <Label className="text-xs font-medium uppercase tracking-wide text-zinc-400">
              Sport specific?
            </Label>
            <div className="flex gap-2">
              <TogglePill
                label="No"
                active={isSportSpecific === "NO"}
                onClick={() => setIsSportSpecific("NO")}
              />
              <TogglePill
                label="Yes"
                active={isSportSpecific === "YES"}
                onClick={() => setIsSportSpecific("YES")}
              />
            </div>
            {isSport && (
              <div className="mt-2">
                <Input
                  value={sport}
                  onChange={(e) => setSport(e.target.value)}
                  placeholder="e.g. soccer, AFL, BJJ, marathon running"
                  className="h-9 rounded-full border border-[#2E2E32]! bg-[#18181B]! px-4 text-xs text-zinc-100 placeholder:text-zinc-500 focus-visible:border-[#A64DFF]! focus-visible:ring-1 focus-visible:ring-[#A64DFF] focus-visible:ring-offset-0"
                />
              </div>
            )}
          </section>

          {/* Schedule */}
          <section className="grid gap-4 sm:grid-cols-3">
            <div className="space-y-1">
              <Label className="text-xs font-medium uppercase tracking-wide text-zinc-400">
                Days per week
              </Label>
              <Input
                type="number"
                min={1}
                max={7}
                value={daysPerWeek}
                onChange={(e) => setDaysPerWeek(Number(e.target.value) || 1)}
                className="h-9 rounded-full border border-[#2E2E32]! bg-[#18181B]! px-4 text-xs text-zinc-100 focus-visible:border-[#A64DFF]! focus-visible:ring-1 focus-visible:ring-[#A64DFF] focus-visible:ring-offset-0"
              />
            </div>
            <div className="space-y-1">
              <Label className="text-xs font-medium uppercase tracking-wide text-zinc-400">
                Program length (weeks)
              </Label>
              <Input
                type="number"
                min={4}
                max={8}
                value={weeks}
                onChange={(e) => setWeeks(Number(e.target.value) || 4)}
                className="h-9 rounded-full border border-[#2E2E32]! bg-[#18181B]! px-4 text-xs text-zinc-100 focus-visible:border-[#A64DFF]! focus-visible:ring-1 focus-visible:ring-[#A64DFF] focus-visible:ring-offset-0"
              />
            </div>
            <div className="space-y-1">
              <Label className="text-xs font-medium uppercase tracking-wide text-zinc-400">
                Session length (minutes)
              </Label>
              <Input
                type="number"
                min={20}
                max={180}
                value={sessionLength}
                onChange={(e) => setSessionLength(Number(e.target.value) || 60)}
                className="h-9 rounded-full border border-[#2E2E32]! bg-[#18181B]! px-4 text-xs text-zinc-100 focus-visible:border-[#A64DFF]! focus-visible:ring-1 focus-visible:ring-[#A64DFF] focus-visible:ring-offset-0"
              />
            </div>
          </section>

          {/* Experience */}
          <section className="space-y-2">
            <Label className="text-xs font-medium uppercase tracking-wide text-zinc-400">
              Experience level
            </Label>
            <div className="flex flex-wrap gap-2">
              <TogglePill
                label="Beginner"
                active={experience === "BEGINNER"}
                onClick={() => setExperience("BEGINNER")}
              />
              <TogglePill
                label="Intermediate"
                active={experience === "INTERMEDIATE"}
                onClick={() => setExperience("INTERMEDIATE")}
              />
              <TogglePill
                label="Advanced"
                active={experience === "ADVANCED"}
                onClick={() => setExperience("ADVANCED")}
              />
            </div>
          </section>

          {/* Equipment */}
          <section className="space-y-1">
            <Label className="text-xs font-medium uppercase tracking-wide text-zinc-400">
              Available equipment
            </Label>
            <Input
              value={equipment}
              onChange={(e) => setEquipment(e.target.value)}
              placeholder="e.g. full gym, home dumbbells up to 25kg, bands only"
              className="h-9 rounded-full border border-[#2E2E32]! bg-[#18181B]! px-4 text-xs text-zinc-100 placeholder:text-zinc-500 focus-visible:border-[#A64DFF]! focus-visible:ring-1 focus-visible:ring-[#A64DFF] focus-visible:ring-offset-0"
            />
          </section>

          {/* Injuries */}
          <section className="space-y-1">
            <Label className="text-xs font-medium uppercase tracking-wide text-zinc-400">
              Injuries or limitations
            </Label>
            <Input
              value={injuries}
              onChange={(e) => setInjuries(e.target.value)}
              placeholder="e.g. low back sensitivity, avoid overhead pressing"
              className="h-9 rounded-full border border-[#2E2E32]! bg-[#18181B]! px-4 text-xs text-zinc-100 placeholder:text-zinc-500 focus-visible:border-[#A64DFF]! focus-visible:ring-1 focus-visible:ring-[#A64DFF] focus-visible:ring-offset-0"
            />
          </section>

          {/* Extra notes */}
          <section className="space-y-1">
            <Label className="text-xs font-medium uppercase tracking-wide text-zinc-400">
              Anything else we should know?
            </Label>
            <Textarea
              value={extraNotes}
              onChange={(e) => setExtraNotes(e.target.value)}
              placeholder="e.g. I like push/pull/legs, prefer machines over barbells, want one hard interval day per week."
              className="min-h-[90px] rounded-2xl border border-[#2E2E32]! bg-[#18181B]! px-4 py-3 text-xs text-zinc-100 placeholder:text-zinc-500 focus-visible:border-[#A64DFF]! focus-visible:ring-1 focus-visible:ring-[#A64DFF] focus-visible:ring-offset-0"
            />
          </section>

          {/* Submit */}
          <div className="flex justify-end">
            <Button
              type="submit"
              disabled={loading}
              className="h-11 rounded-full border-0 bg-[#A64DFF]! px-6 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#B56BFF]! disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Generating…" : "Generate program"}
            </Button>
          </div>
        </form>

        {/* Feedback */}
        {(loading || error) && (
          <section className="space-y-3">
            {loading && (
              <div className="flex items-center gap-3 rounded-2xl border border-[#2E2E32]! bg-[#18181B]! px-4 py-3">
                <div className="h-6 w-6 animate-spin rounded-full border-2 border-[#A64DFF]! border-t-transparent!" />
                <div className="space-y-1">
                  <p className="text-sm font-medium text-zinc-100">
                    Generating your program…
                  </p>
                  <p className="text-[0.7rem] text-zinc-400">
                    We’re building a training week based on your inputs and exercise
                    library.
                  </p>
                </div>
              </div>
            )}

            {error && (
              <div className="rounded-lg border border-red-500/70! bg-red-500/10! px-4 py-3 text-sm text-red-200">
                {error}
              </div>
            )}
          </section>
        )}
      </div>
    </div>
  );
}

function GoalCard({
  label,
  description,
  active,
  onClick,
}: {
  label: string;
  description: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-2xl border px-4 py-3 text-left text-xs transition-colors ${
        active
          ? "border-[#A64DFF]! bg-[#2A173F]/60!"
          : "border-[#2E2E32]! bg-[#18181B]! hover:border-[#A64DFF]/60!"
      }`}
    >
      <p className="font-medium text-zinc-50">{label}</p>
      <p className="mt-1 text-[0.7rem] text-zinc-400">{description}</p>
    </button>
  );
}

function TogglePill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-3 py-1 text-xs transition-colors ${
        active
          ? "bg-[#A64DFF]! text-white"
          : "bg-[#18181B]! text-zinc-300 border border-[#2E2E32]! hover:border-[#A64DFF]/60!"
      }`}
    >
      {label}
    </button>
  );
}
