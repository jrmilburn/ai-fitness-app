"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import { Textarea } from "@/shared/ui/textarea";
import { Label } from "@/shared/ui/label";

type Goal = "STRENGTH" | "MUSCLE" | "FITNESS";
type Experience = "BEGINNER" | "INTERMEDIATE" | "ADVANCED";

// Matches backend ProgramGoal enum
type ProgramGoalApi =
  | "STRENGTH"
  | "HYPERTROPHY"
  | "ENDURANCE"
  | "GENERAL_FITNESS";

const EQUIPMENT_OPTIONS = [
  "Full commercial gym",
  "Barbell + rack",
  "Dumbbells",
  "Machines / cables",
  "Kettlebells",
  "Bands",
  "Bodyweight",
];


const TOTAL_STEPS = 7;

export default function AiBuildPage() {
  // now multi-select
  const [goals, setGoals] = useState<Goal[]>(["MUSCLE"]);

  const [isSportSpecific, setIsSportSpecific] = useState<"YES" | "NO">("NO");
  const [sport, setSport] = useState("");
  const [daysPerWeek, setDaysPerWeek] = useState(4);
  const [weeks, setWeeks] = useState(6);
  const [experience, setExperience] = useState<Experience>("INTERMEDIATE");
  const [equipment, setEquipment] = useState<string[]>([]);
  const [injuries, setInjuries] = useState("");
  const [extraNotes, setExtraNotes] = useState("");

  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  const toggleEquipment = (item: string) => {
  setEquipment((prev) =>
    prev.includes(item) ? prev.filter((e) => e !== item) : [...prev, item]
  );
  };

  const isSport = isSportSpecific === "YES";
  const isLastStep = step === TOTAL_STEPS - 1;

  const goNext = () => {
    if (step < TOTAL_STEPS - 1) {
      setDirection("forward");
      setStep((prev) => prev + 1);
    }
  };

  const goBack = () => {
    if (step > 0) {
      setDirection("backward");
      setStep((prev) => prev - 1);
    }
  };

  const toggleGoal = (goal: Goal) => {
    setGoals((prev) => {
      if (prev.includes(goal)) {
        const next = prev.filter((g) => g !== goal);
        // never allow 0 goals – keep at least one selected
        return next.length ? next : [goal];
      }
      return [...prev, goal];
    });
  };

  // derive a single ProgramGoalApi for the backend
  const deriveProgramGoal = (selected: Goal[]): ProgramGoalApi => {
    if (selected.includes("STRENGTH")) return "STRENGTH";
    if (selected.includes("MUSCLE")) return "HYPERTROPHY";
    return "GENERAL_FITNESS"; // FITNESS or fallback
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // On non-final steps, treat submit/Enter as "Next"
    if (!isLastStep) {
      goNext();
      return;
    }

    if (!daysPerWeek || !weeks) return;

    setLoading(true);
    setError(null);

    const mappedGoal: ProgramGoalApi = deriveProgramGoal(goals);

    const body = {
      goal: mappedGoal,
      isSportSpecific: isSportSpecific === "YES",
      sport,
      daysPerWeek,
      weeks,
      experience,
      equipment: equipment.join(", "),
      injuries,
      extraNotes,
      // optional: send raw goals array too if you want to use it later
      // goals,
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

      router.push(`/templates/new?templateId=${templateId}`);
    } catch (err: unknown) {
      console.error(err);
    
      let message = "Something went wrong submitting this build";
    
      if (err instanceof Error) {
        // Standard Error object
        message = err.message;
      } else if (typeof err === "string") {
        // Some libraries throw strings
        message = err;
      } else {
        // Anything else (number, object, null, undefined)
        message = JSON.stringify(err);
      }
    
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-[var(--surface-primary)] px-4 py-12 text-[var(--text-strong)]">
      <div className="w-full max-w-3xl space-y-8">
        {/* Heading */}
        <div className="space-y-3 text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-[var(--text-strong)]">
            Tell us about your training
          </h1>
          <p className="text-sm text-[var(--text-muted)]">
            We&apos;ll turn your goals, schedule, and equipment into a complete program
            you can edit in the builder.
          </p>
          <p className="text-[0.7rem] text-[var(--text-muted)]">
            Step {step + 1} of {TOTAL_STEPS}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6 overflow-hidden">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={step}
              initial={{
                x: direction === "forward" ? 40 : -40,
                opacity: 0,
              }}
              animate={{ x: 0, opacity: 1 }}
              exit={{
                x: direction === "forward" ? -40 : 40,
                opacity: 0,
              }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="space-y-6"
            >
              {/* STEP 0 – Goals (multi-select) */}
              {step === 0 && (
                <section className="space-y-2">
                  <Label className="text-xs font-medium uppercase tracking-wide text-[var(--text-muted)]">
                    What are you trying to get out of this program?
                  </Label>
                  <p className="text-[0.7rem] text-[var(--text-muted)]">
                    You can pick more than one. We&apos;ll prioritise strength, then
                    muscle, then general fitness when building your plan.
                  </p>
                  <div className="grid gap-2 sm:grid-cols-3">
                    <GoalCard
                      label="Strength"
                      description="Get stronger on key lifts."
                      active={goals.includes("STRENGTH")}
                      onClick={() => toggleGoal("STRENGTH")}
                    />
                    <GoalCard
                      label="Muscle building"
                      description="Hypertrophy-focused training."
                      active={goals.includes("MUSCLE")}
                      onClick={() => toggleGoal("MUSCLE")}
                    />
                    <GoalCard
                      label="Fitness / conditioning"
                      description="Work capacity & cardio."
                      active={goals.includes("FITNESS")}
                      onClick={() => toggleGoal("FITNESS")}
                    />
                  </div>
                </section>
              )}

              {/* STEP 1 – Sport specific */}
              {step === 1 && (
                <section className="space-y-3">
                  <Label className="text-xs font-medium uppercase tracking-wide text-[var(--text-muted)]">
                    Is this program for a specific sport?
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
                        className="h-9 rounded-full border border-[var(--border-strong)]! bg-[var(--surface-tertiary)]! px-4 text-xs text-[var(--text-strong)] placeholder:text-[var(--text-muted)] focus-visible:border-[#A64DFF]! focus-visible:ring-1 focus-visible:ring-[#A64DFF] focus-visible:ring-offset-0"
                      />
                    </div>
                  )}
                </section>
              )}

              {/* STEP 2 – Days per week (pills 1–7) */}
              {step === 2 && (
                <section className="space-y-3">
                  <Label className="text-xs font-medium uppercase tracking-wide text-[var(--text-muted)]">
                    How many days per week can you train?
                  </Label>
                  <div className="flex flex-wrap gap-2">
                    {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                      <TogglePill
                        key={day}
                        label={`${day}`}
                        active={daysPerWeek === day}
                        onClick={() => setDaysPerWeek(day)}
                      />
                    ))}
                  </div>
                  <p className="text-[0.7rem] text-[var(--text-muted)]">
                    We&apos;ll spread your training stress across these days.
                  </p>
                </section>
              )}

            {step === 3 && (
              <section className="space-y-3">
                <Label className="text-xs font-medium uppercase tracking-wide text-[var(--text-muted)]">
                  Program length (weeks)
                </Label>
            
                <div className="flex flex-wrap gap-2">
                  {[4, 6, 8].map((wk) => (
                    <TogglePill
                      key={wk}
                      label={`${wk}`}
                      active={weeks === wk}
                      onClick={() => setWeeks(wk)}
                    />
                  ))}
                </div>
                
                <p className="text-[0.7rem] text-[var(--text-muted)]">
                  Choose how long you want your program block to run.
                </p>
              </section>
            )}


              {/* STEP 4 – Session length + experience */}
              {step === 4 && (
                <section className="space-y-4">

                  <div className="space-y-2">
                    <Label className="text-xs font-medium uppercase tracking-wide text-[var(--text-muted)]">
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
                  </div>
                </section>
              )}

              {/* STEP 5 – Equipment & injuries */}
            {step === 5 && (
              <section className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-xs font-medium uppercase tracking-wide text-[var(--text-muted)]">
                    Available equipment
                  </Label>            

                  <div className="flex flex-wrap gap-2">
                    {EQUIPMENT_OPTIONS.map((item) => (
                      <TogglePill
                        key={item}
                        label={item}
                        active={equipment.includes(item)}
                        onClick={() => toggleEquipment(item)}
                      />
                    ))}
                  </div>            

                  <p className="text-[0.7rem] text-[var(--text-muted)]">
                    Pick everything you have regular access to. We&apos;ll build the plan around it.
                  </p>
                </div>            

                {/* Injuries section stays the same */}
                <div className="space-y-1">
                  <Label className="text-xs font-medium uppercase tracking-wide text-[var(--text-muted)]">
                    Injuries or limitations
                  </Label>
                  <Input
                    value={injuries}
                    onChange={(e) => setInjuries(e.target.value)}
                    placeholder="e.g. low back sensitivity, avoid overhead pressing"
                    className="h-9 rounded-full border border-[var(--border-strong)]! bg-[var(--surface-tertiary)]! px-4 text-xs text-[var(--text-strong)] placeholder:text-[var(--text-muted)] focus-visible:border-[#A64DFF]! focus-visible:ring-1 focus-visible:ring-[#A64DFF] focus-visible:ring-offset-0"
                  />
                </div>
              </section>
            )}

              {/* STEP 6 – Extra notes + confirm */}
              {step === 6 && (
                <section className="space-y-3">
                  <Label className="text-xs font-medium uppercase tracking-wide text-[var(--text-muted)]">
                    Anything else we should know?
                  </Label>
                  <Textarea
                    value={extraNotes}
                    onChange={(e) => setExtraNotes(e.target.value)}
                    placeholder="e.g. I like push/pull/legs, prefer machines over barbells, want one hard interval day per week."
                    className="min-h-[90px] rounded-2xl border border-[var(--border-strong)]! bg-[var(--surface-tertiary)]! px-4 py-3 text-xs text-[var(--text-strong)] placeholder:text-[var(--text-muted)] focus-visible:border-[#A64DFF]! focus-visible:ring-1 focus-visible:ring-[#A64DFF] focus-visible:ring-offset-0"
                  />
                  <p className="text-[0.7rem] text-[var(--text-muted)]">
                    We&apos;ll use all of this to build your first training week and
                    program structure. You can tweak everything in the builder.
                  </p>
                </section>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <div className="mt-4 flex items-center justify-between">
            <Button
              type="button"
              variant="outline"
              onClick={goBack}
              disabled={step === 0 || loading}
              className="h-9 rounded-full border border-[var(--border-strong)]! bg-[var(--surface-primary)] text-xs text-[var(--text-strong)] hover:border-[#A64DFF]/60! hover:bg-[var(--surface-tertiary)]! disabled:cursor-not-allowed disabled:opacity-50"
            >
              Back
            </Button>

            <Button
              type="submit"
              disabled={loading}
              className="h-11 rounded-full border-0 bg-[#A64DFF]! px-6 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#B56BFF]! disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading
                ? "Generating…"
                : isLastStep
                ? "Generate program"
                : "Next"}
            </Button>
          </div>
        </form>

        {/* Feedback */}
        {(loading || error) && (
          <section className="space-y-3">
            {loading && (
              <div className="flex items-center gap-3 rounded-2xl border border-[var(--border-strong)]! bg-[var(--surface-tertiary)]! px-4 py-3">
                <div className="h-6 w-6 animate-spin rounded-full border-2 border-[#A64DFF]! border-t-transparent!" />
                <div className="space-y-1">
                  <p className="text-sm font-medium text-[var(--text-strong)]">
                    Generating your program…
                  </p>
                  <p className="text-[0.7rem] text-[var(--text-muted)]">
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
          ? "border-[#A64DFF]! bg-[var(--surface-accent)]!"
          : "border-[var(--border-strong)]! bg-[var(--surface-secondary)]! hover:border-[#A64DFF]/60!"
      }`}
    >
      <p className="font-medium text-[var(--text-strong)]">{label}</p>
      <p className="mt-1 text-[0.7rem] text-[var(--text-muted)]">{description}</p>
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
      className={`rounded px-4 py-2 text-lg transition-colors ${
        active
          ? "bg-[#A64DFF]! text-white"
          : "border border-[var(--border-strong)]! bg-[var(--surface-secondary)]! text-[var(--text-strong)] hover:border-[#A64DFF]/60!"
      }`}
    >
      {label}
    </button>
  );
}
