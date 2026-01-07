"use client";

import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";

type InsightsPayload = {
  summary: string[];
  recommendations: string[];
};

type InsightsSnapshot = {
  programCount: number;
  dateRange: { start: string; end: string };
  totalWorkoutsLogged: number;
};

type InsightsResponse =
  | {
      eligible: true;
      snapshot: InsightsSnapshot;
      insights: InsightsPayload;
      lastGenerated: string;
    }
  | {
      eligible: false;
      reason: string | null;
      missing: string[];
      stats: {
        totalWorkouts: number;
        totalSets: number;
        weeksLogged: number;
        programCount: number;
      };
    };

export default function InsightsPage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<InsightsResponse | null>(null);

  useEffect(() => {
    let isMounted = true;

    const load = async () => {
      try {
        const res = await fetch("/api/insights");
        const payload = (await res.json()) as InsightsResponse;

        if (!res.ok) {
          throw new Error("Unable to load insights.");
        }

        if (isMounted) {
          setData(payload);
        }
      } catch (err) {
        console.error(err);
        if (isMounted) {
          setError("We couldn't load AI Insights right now.");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    load();

    return () => {
      isMounted = false;
    };
  }, []);

  const formattedRange = useMemo(() => {
    if (!data || !data.eligible) return null;
    const start = new Date(data.snapshot.dateRange.start).toLocaleDateString();
    const end = new Date(data.snapshot.dateRange.end).toLocaleDateString();
    return `${start} - ${end}`;
  }, [data]);

  const lastGenerated = useMemo(() => {
    if (!data || !data.eligible) return null;
    return new Date(data.lastGenerated).toLocaleString();
  }, [data]);

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-6 py-6 text-[var(--text-strong)]">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold">SP Insights</h1>
      </header>

      {loading && (
        <div className="space-y-4">
          <div className="h-24 animate-pulse rounded-lg border border-[var(--border-strong)] bg-[var(--surface-secondary)]" />
          <div className="h-40 animate-pulse rounded-lg border border-[var(--border-strong)] bg-[var(--surface-secondary)]" />
          <div className="h-40 animate-pulse rounded-lg border border-[var(--border-strong)] bg-[var(--surface-secondary)]" />
        </div>
      )}

      {!loading && error && (
        <div className="rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
          {error}
        </div>
      )}

      {!loading && !error && data && !data.eligible && (
        <div className="space-y-4 rounded-lg border border-[var(--border-strong)] bg-[var(--surface-secondary)] px-5 py-4">
          <div className="space-y-1">
            <h2 className="text-lg font-semibold">Insights locked</h2>
            <p className="text-sm text-[var(--text-muted)]">
              {data.reason ?? "Log more workouts to unlock AI insights."}
            </p>
          </div>
          <ul className="list-disc space-y-1 pl-4 text-sm text-[var(--text-muted)]">
            {data.missing.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="rounded-md bg-[var(--surface-primary)] px-4 py-3 text-xs text-[var(--text-muted)]">
            Logged workouts: {data.stats.totalWorkouts} • Completed sets: {data.stats.totalSets} • Weeks logged: {data.stats.weeksLogged}
          </div>
        </div>
      )}

      {!loading && !error && data && data.eligible && (
        <div className="space-y-5">
          <div className="rounded-lg border border-[var(--border-strong)] bg-[var(--surface-secondary)] px-5 py-4">
            <div className="flex flex-wrap items-center justify-between gap-2 text-sm text-[var(--text-muted)]">
              <span>Date range: {formattedRange}</span>
              <span>Last generated: {lastGenerated}</span>
            </div>
            <p className="mt-2 text-xs text-[var(--text-muted)]">
              {data.snapshot.totalWorkoutsLogged} logged workouts across {data.snapshot.programCount} program{data.snapshot.programCount === 1 ? "" : "s"}.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <InsightCard title="Summary" items={data.insights.summary} />
            <InsightCard
              title="Training recommendations"
              items={data.insights.recommendations}
            />
          </div>
        </div>
      )}
    </div>
  );
}

function InsightCard({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div
      className={cn(
        "rounded-lg border border-[var(--border-strong)] bg-[var(--surface-secondary)] px-5 py-4",
        "space-y-3"
      )}
    >
      <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--text-muted)]">
        {title}
      </h3>
      <ul className="space-y-2 text-sm">
        {items.map((item, index) => (
          <li key={`${title}-${index}`} className="flex gap-2">
            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#A64DFF]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
