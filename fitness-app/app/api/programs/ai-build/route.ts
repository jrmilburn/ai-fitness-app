// app/api/programs/ai-build/route.ts
import { NextResponse } from "next/server";
import OpenAI from "openai";
import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server"; // adjust if you use a different auth

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

const programStructureSchema = {
  name: "ProgramTemplateStructure",
  schema: {
    type: "object",
    properties: {
      days: { type: "integer", minimum: 1 },
      workouts: {
        type: "array",
        items: {
          type: "object",
          properties: {
            id: { type: "string" },
            name: { type: "string" },
            dayNumber: { type: "integer", minimum: 1 },
            mode: {
              type: "string",
              enum: ["STRENGTH", "CARDIO", "MIXED"],
            },
            focusMuscleGroups: {
              type: "array",
              items: { type: "string" },
            },
            notes: { type: ["string", "null"] },
            exercises: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  id: { type: "string" },
                  exerciseTemplateId: { type: "string" },
                  exerciseType: {
                    type: "string",
                    enum: ["STRENGTH", "CARDIO_STEADY", "CARDIO_INTERVAL"],
                  },
                  sets: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        id: { type: "string" },
                        setNumber: { type: "integer", minimum: 1 },
                        type: {
                          type: "string",
                          enum: ["NORMAL", "WARMUP", "BACKOFF", "INTERVAL"],
                        },
                        targetReps: { type: ["integer", "null"] },
                        targetWeightKg: { type: ["number", "null"] },
                      },
                      required: ["id", "setNumber", "type"],
                      additionalProperties: false,
                    },
                  },
                },
                required: ["id", "exerciseTemplateId", "exerciseType", "sets"],
                additionalProperties: false,
              },
            },
          },
          required: [
            "id",
            "name",
            "dayNumber",
            "mode",
            "focusMuscleGroups",
            "exercises",
          ],
          additionalProperties: false,
        },
      },
    },
    required: ["days", "workouts"],
    additionalProperties: false,
  },
};


export async function POST(req: Request) {
  try {
    const { userId: clerkId } = await auth();

    if (!clerkId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { prompt } = await req.json();

    if (!prompt || typeof prompt !== "string") {
      return NextResponse.json(
        { error: "Prompt is required." },
        { status: 400 }
      );
    }

    // 1) Resolve / ensure app User from Clerk id
    let user = await prisma.user.findUnique({ where: { clerkId } });
    if (!user) {
      user = await prisma.user.create({
        data: { clerkId },
      });
    }

    // 2) Load exercise templates (global + user’s own)
    const templates = await prisma.exerciseTemplate.findMany({
      where: {
        OR: [{ userId: null }, { userId: user.id }],
      },
      select: {
        id: true,
        name: true,
        muscleGroup: { select: { name: true } },
      },
    });

    if (!templates.length) {
      return NextResponse.json(
        { error: "No exercise templates defined." },
        { status: 400 }
      );
    }

    const templateLibraryText = templates
      .map(
        (t) =>
          `- id: ${t.id}, name: ${t.name}, muscleGroup: ${
            t.muscleGroup?.name ?? "N/A"
          }`
      )
      .join("\n");

    const systemPrompt =
      [
        "You are an expert strength and hypertrophy coach.",
        "You design weekly training programs using ONLY the provided exercise templates.",
        "",
        "You MUST obey all of the following rules:",
        "1. You may ONLY use exercises from the exercise template library below.",
        "2. When you choose an exercise, you MUST reference it by its `exerciseTemplateId` (the id from the list).",
        "3. NEVER invent a new exercise name or id.",
        "4. Build a weekly program structure that fits the user's description.",
        "5. Return JSON that matches the ProgramTemplateStructure schema (days, workouts, exercises, sets).",
        "",
        "EXERCISE TEMPLATE LIBRARY:",
        templateLibraryText,
      ].join("\n");

    const userPrompt =
      "User description:\n" +
      prompt +
      "\n\nReturn ONLY JSON valid under the ProgramTemplateStructure schema.";

    // 3) Call OpenAI with JSON schema response format
    const completion = await client.chat.completions.create({
      model: "gpt-4.1-mini",
      response_format: {
        type: "json_schema",
        json_schema: programStructureSchema,
      },
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
    });

    const content = completion.choices[0]?.message?.content;
    if (!content) {
      return NextResponse.json(
        { error: "No response from model." },
        { status: 500 }
      );
    }

    // 4) Parse JSON as ProgramTemplateStructure
    const structure = JSON.parse(content) as {
      days: number;
      workouts: any[];
    };

    // 5) Optional: validate that all exerciseTemplateIds actually exist
    const validIds = new Set(templates.map((t) => t.id));
    for (const workout of structure.workouts) {
      workout.exercises = workout.exercises.filter((ex: any) =>
        validIds.has(ex.exerciseTemplateId)
      );
    }

    // 6) Create ProgramTemplate in your DB (Supabase-hosted Postgres via Prisma)
    // For now we’ll:
    // - set length to a default (e.g. 6 weeks)
    // - days = structure.days
    // - name derived from the prompt
    const templateName =
      "AI Program – " +
      (prompt.length > 40 ? prompt.slice(0, 37) + "..." : prompt);

    const createdTemplate = await prisma.programTemplate.create({
      data: {
        userId: user.id,
        name: templateName,
        goal: null, // optionally: have the model also return a ProgramGoal
        length: 6, // default 6-week meso; you can also ask AI for this
        days: structure.days,
        structureJson: structure,
      },
    });

    return NextResponse.json({ template: createdTemplate });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to generate program." },
      { status: 500 }
    );
  }
}
