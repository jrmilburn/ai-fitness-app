import {
  getInsightsSourceData,
  type InsightsSourceData,
} from "@/server/insights/getInsightsSourceData";

const MIN_LOGGED_DAYS = 14;
const MIN_LOGGED_WORKOUTS = 6;
const MIN_LOGGED_SETS = 30;

export type InsightsEligibility = {
  eligible: boolean;
  reason: string | null;
  missing: string[];
  totalWorkouts: number;
  totalSets: number;
  daysCovered: number;
  programCount: number;
};

export function evaluateInsightsEligibility(
  data: InsightsSourceData
): InsightsEligibility {
  if (!data.earliestDate || !data.latestDate || data.programIds.length === 0) {
    return {
      eligible: false,
      reason: "Log workouts across at least two weeks to unlock insights.",
      missing: ["No logged workouts found"],
      totalWorkouts: data.totalWorkouts,
      totalSets: data.totalSets,
      daysCovered: 0,
      programCount: data.programIds.length,
    };
  }

  const daysCovered = Math.floor(
    (data.latestDate.getTime() - data.earliestDate.getTime()) /
      (1000 * 60 * 60 * 24)
  );

  const hasEnoughDays = daysCovered >= MIN_LOGGED_DAYS;
  const hasEnoughVolume =
    data.totalWorkouts >= MIN_LOGGED_WORKOUTS ||
    data.totalSets >= MIN_LOGGED_SETS;

  const missing: string[] = [];
  if (!hasEnoughDays) {
    missing.push("At least 14 days between your first and most recent logs");
  }
  if (!hasEnoughVolume) {
    missing.push("At least 6 logged workouts or 30 completed sets");
  }

  const eligible = hasEnoughDays && hasEnoughVolume;

  return {
    eligible,
    reason: eligible
      ? null
      : "Add more logged training data to unlock AI insights.",
    missing,
    totalWorkouts: data.totalWorkouts,
    totalSets: data.totalSets,
    daysCovered,
    programCount: data.programIds.length,
  };
}

export async function getInsightsEligibility(
  userId: string
): Promise<InsightsEligibility> {
  const data = await getInsightsSourceData(userId);
  return evaluateInsightsEligibility(data);
}
