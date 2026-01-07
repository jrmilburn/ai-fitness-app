import {
  getInsightsSourceData,
  type InsightsSourceData,
} from "@/server/insights/getInsightsSourceData";

const MIN_LOGGED_WEEKS = 2;
const MIN_LOGGED_WORKOUTS = 6;
const MIN_LOGGED_SETS = 30;

export type InsightsEligibility = {
  eligible: boolean;
  reason: string | null;
  missing: string[];
  totalWorkouts: number;
  totalSets: number;
  weeksLogged: number;
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
      weeksLogged: data.weeksLogged,
      programCount: data.programIds.length,
    };
  }

  const hasEnoughWeeks = data.weeksLogged >= MIN_LOGGED_WEEKS;
  const hasEnoughVolume =
    data.totalWorkouts >= MIN_LOGGED_WORKOUTS ||
    data.totalSets >= MIN_LOGGED_SETS;

  const missing: string[] = [];
  if (!hasEnoughWeeks) {
    missing.push("At least 2 weeks with logged workouts");
  }
  if (!hasEnoughVolume) {
    missing.push("At least 6 logged workouts or 30 completed sets");
  }

  const eligible = hasEnoughWeeks && hasEnoughVolume;

  return {
    eligible,
    reason: eligible
      ? null
      : "Add more logged training data to unlock AI insights.",
    missing,
    totalWorkouts: data.totalWorkouts,
    totalSets: data.totalSets,
    weeksLogged: data.weeksLogged,
    programCount: data.programIds.length,
  };
}

export async function getInsightsEligibility(
  userId: string
): Promise<InsightsEligibility> {
  const data = await getInsightsSourceData(userId);
  return evaluateInsightsEligibility(data);
}
