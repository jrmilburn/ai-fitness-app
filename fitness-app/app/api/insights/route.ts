import { NextResponse } from "next/server";
import OpenAI from "openai";
import { z } from "zod";
import { createHash } from "crypto";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import { getOrCreateCurrentUser } from "@/server/users/getOrCreateCurrentUser";
import { evaluateInsightsEligibility } from "@/server/insights/getInsightsEligibility";
import { getInsightsSourceData } from "@/server/insights/getInsightsSourceData";
import { buildInsightsSnapshot } from "@/server/insights/buildInsightsSnapshot";
import { stableStringify } from "@/server/insights/stableStringify";

export const dynamic = "force-dynamic";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

const insightsSchema = z.object({
  summary: z.array(z.string().min(1).max(180)).min(3).max(5),
  recommendations: z.array(z.string().min(1).max(180)).min(3).max(5),
});

const insightsJsonSchema = {
  name: "AiInsights",
  schema: {
    type: "object",
    properties: {
      summary: {
        type: "array",
        minItems: 3,
        maxItems: 5,
        items: { type: "string", maxLength: 180 },
      },
      recommendations: {
        type: "array",
        minItems: 3,
        maxItems: 5,
        items: { type: "string", maxLength: 180 },
      },
    },
    required: ["summary", "recommendations"],
    additionalProperties: false,
  },
};

export async function GET() {
  try {
    const { userId: clerkId } = await auth();

    if (!clerkId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = await getOrCreateCurrentUser();
    const sourceData = await getInsightsSourceData(user.id);
    const eligibility = evaluateInsightsEligibility(sourceData);

    if (!eligibility.eligible) {
      return NextResponse.json({
        eligible: false,
        reason: eligibility.reason,
        missing: eligibility.missing,
        stats: {
          totalWorkouts: eligibility.totalWorkouts,
          totalSets: eligibility.totalSets,
          weeksLogged: eligibility.weeksLogged,
          programCount: eligibility.programCount,
        },
      });
    }

    if (!sourceData.earliestDate || !sourceData.latestDate) {
      return NextResponse.json(
        { error: "Unable to resolve logged data." },
        { status: 500 }
      );
    }

    const snapshot = buildInsightsSnapshot({
      programCount: sourceData.programIds.length,
      workouts: sourceData.workouts,
      earliestDate: sourceData.earliestDate,
      latestDate: sourceData.latestDate,
    });

    const snapshotPayload = stableStringify(snapshot);
    const snapshotHash = createHash("sha256")
      .update(snapshotPayload)
      .digest("hex");

    const cached = await prisma.aiInsightsCache.findUnique({
      where: {
        userId_snapshotHash: {
          userId: user.id,
          snapshotHash,
        },
      },
    });

    if (cached) {
      return NextResponse.json({
        eligible: true,
        snapshot,
        insights: cached.insightsJson,
        lastGenerated: cached.updatedAt,
      });
    }

    const systemPrompt = `You are a strength coach summarizing a user's recent training snapshot.

Return concise, actionable insights only. Keep each bullet brief and grounded in the snapshot data.
Output MUST match the JSON schema exactly.`;

    const userPrompt = `Snapshot (JSON):\n${snapshotPayload}\n\nReturn ONLY JSON with summary and recommendations arrays.`;

    const insights = await generateInsights({
      systemPrompt,
      userPrompt,
    });

    const created = await prisma.aiInsightsCache.create({
      data: {
        userId: user.id,
        snapshotHash,
        snapshotJson: snapshot as unknown as object,
        insightsJson: insights as unknown as object,
      },
    });

    return NextResponse.json({
      eligible: true,
      snapshot,
      insights,
      lastGenerated: created.updatedAt,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to generate insights." },
      { status: 500 }
    );
  }
}

async function generateInsights({
  systemPrompt,
  userPrompt,
}: {
  systemPrompt: string;
  userPrompt: string;
}) {
  for (let attempt = 0; attempt < 2; attempt += 1) {
    const completion = await client.chat.completions.create({
      model: "gpt-5.1",
      response_format: {
        type: "json_schema",
        json_schema: insightsJsonSchema,
      },
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
    });

    const content = completion.choices[0]?.message?.content;
    if (!content) {
      continue;
    }

    try {
      const parsed = JSON.parse(content);
      const validated = insightsSchema.safeParse(parsed);

      if (validated.success) {
        return validated.data;
      }
    } catch (error) {
      console.error(error);
    }
  }

  throw new Error("Unable to validate AI insights output.");
}
