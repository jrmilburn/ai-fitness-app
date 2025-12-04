// app/api/programs/ai-build/route.ts
import { NextResponse } from "next/server";
import OpenAI from "openai";
import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

const programStructureSchema = {
  name: "ProgramTemplateStructure",
  schema: {
    type: "object",
    properties: {
      name: { type: "string" },
      days: { type: "integer", minimum: 1 },
      weeks: { type: "integer" },
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
            notes: { type: "string" },
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
                        targetDurationSec: { type: ["number", "null"] },
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

    const body = await req.json();

    const {
      goal, // "STRENGTH" | "HYPERTROPHY" | "ENDURANCE" | "GENERAL_FITNESS"
      isSportSpecific,
      sport,
      daysPerWeek,
      weeks,
      sessionLength,
      experience, // "BEGINNER" | "INTERMEDIATE" | "ADVANCED"
      equipment,
      injuries,
      extraNotes,
    } = body as {
      goal:
        | "STRENGTH"
        | "HYPERTROPHY"
        | "ENDURANCE"
        | "GENERAL_FITNESS";
      isSportSpecific: boolean;
      sport?: string;
      daysPerWeek: number;
      weeks: number;
      sessionLength: number;
      experience: "BEGINNER" | "INTERMEDIATE" | "ADVANCED";
      equipment?: string;
      injuries?: string;
      extraNotes?: string;
    };

    // Basic validation
    if (
      !goal ||
      !daysPerWeek ||
      !weeks ||
      !sessionLength ||
      !experience
    ) {
      return NextResponse.json(
        { error: "Missing required program details." },
        { status: 400 }
      );
    }

    // Clamp weeks to 4–8 as per system rules
    const clampedWeeks = Math.min(Math.max(Number(weeks) || 4, 4), 8);

    const goalTextMap: Record<string, string> = {
      STRENGTH: "build maximal strength",
      HYPERTROPHY: "build muscle and hypertrophy",
      ENDURANCE: "improve endurance and work capacity",
      GENERAL_FITNESS: "improve general health, strength and fitness",
    };

    const experienceTextMap: Record<string, string> = {
      BEGINNER: "a beginner lifter",
      INTERMEDIATE: "an intermediate lifter",
      ADVANCED: "an advanced lifter",
    };

    const lines: string[] = [
      `Primary goal: ${goalTextMap[goal] ?? goal}.`,
      `Experience level: ${experienceTextMap[experience] ?? experience}.`,
      `Training frequency: ${daysPerWeek} days per week.`,
      `Requested program duration: ${clampedWeeks} weeks (must stay within the 4–8 week rule).`,
      `Typical session length: about ${sessionLength} minutes.`,
      isSportSpecific
        ? `Sport-specific: Yes. Sport: ${sport || "not specified"}.`
        : "Sport-specific: No (general training).",
    ];

    if (equipment && equipment.trim()) {
      lines.push(`Available equipment: ${equipment.trim()}.`);
    }

    if (injuries && injuries.trim()) {
      lines.push(
        `Injuries / limitations to consider: ${injuries.trim()}.`
      );
    }

    if (extraNotes && extraNotes.trim()) {
      lines.push(
        `Additional preferences / notes from the user: ${extraNotes.trim()}.`
      );
    }

    const prompt = lines.join("\n");

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

    const systemPrompt = [
      "You are an elite strength, hypertrophy, conditioning, and sport-specific performance coach.",
      "Your job is to design a structured, goal-appropriate training program based solely on the user’s description",
      "and the exercise template library provided.",
      "You MUST obey ALL rules below when generating a program:",
      "GENERAL RULES",
      "------------",
      "1. Use ONLY exercises from the exercise template library below.",
      "2. Every exercise MUST reference its correct `exerciseTemplateId`.",
      "3. NEVER invent new exercise names, new IDs, or new exercise types.",
      "4. Programs MUST be between 4 and 8 weeks long (inclusive).",
      "5. Generate a concise, meaningful program name (e.g., “6-Week Athletic Strength Base”).",
      "6. Follow the ProgramTemplateStructure JSON schema EXACTLY (days, weeks, workouts, exercises, sets).",
      "PROGRAM DESIGN LOGIC",
      "---------------------",
      "1. Identify the user's real goals, constraints, and experience level:",
      "   - Strength vs hypertrophy vs conditioning vs fat loss vs general fitness.",
      "   - Sport-specific objectives (e.g., running, rugby, soccer, basketball, martial arts).",
      "   - Schedule preference (days per week, session types).",
      "   - Equipment limitations or required muscle group focus.",
      "2. If the user requests sport-specific programming:",
      "   - Select exercises that build sport-relevant movement patterns.",
      "   - Consider planes of motion, unilateral demands, power development, conditioning style,",
      "     and how strength exercises transfer functionally to the sport.",
      "   - Conditioning should mimic the demands of the sport (e.g., intervals for field sports,",
      "     steady cardio for endurance sports, power-based prep for explosive sports).",
      "WORKOUT MODES",
      "-------------",
      "Workouts follow one of three styles, determined by the exercises within them:",
      "A) STRENGTH WORKOUTS:",
      "   - MUST contain multiple exercises.",
      "   - Each exercise MUST have multiple sets (typically 2–5 sets).",
      "   - Use appropriate rep schemes based on the user's goals (e.g., lower reps for strength,",
      "     moderate for hypertrophy).",
      "   - Select exercises that target the intended muscle groups or functional movement patterns.",
      "B) STEADY CARDIO WORKOUTS:",
      "   - Typically contain ONE exercise.",
      "   - Contain ONE set.",
      "   - The set should include a steady-state target such as duration, distance, or pace",
      "     appropriate to the user’s conditioning level and goals.",
      "   - Do NOT create multiple “steady cardio” exercises in the same workout.",
      "C) INTERVAL CARDIO WORKOUTS:",
      "   - Can contain one or more interval-based exercises.",
      "   - MUST include multiple sets to represent work/rest intervals.",
      "   - Each interval set should include realistic target times or distances (e.g., 60s on / 60s off).",
      "   - Interval prescriptions MUST match the user's conditioning level and goals",
      "     (beginner vs advanced, fat loss vs performance, etc.).",
      "PROGRAM QUALITY RULES",
      "----------------------",
      "1. Ensure training balance:",
      "   - Avoid repeating the exact same exercises every day unless the user requests it.",
      "   - Spread muscle groups and conditioning demands logically across the week.",
      "2. Ensure progressive intent:",
      "   - Even if the program is templated weekly, choose exercises and set schemes",
      "     that imply progression across 4–8 weeks.",
      "3. Maintain realism:",
      "   - All targets must be something a real human user could perform.",
      "   - All interval durations, rest periods, reps, and weights (if included)",
      "     must be reasonable based on the user's stated ability.",
      "4. Respect user’s constraints:",
      "   - If they have time limits, equipment limits, injuries, or strong preferences,",
      "     design around them.",
      "OUTPUT FORMAT",
      "--------------",
      "Return ONLY JSON that is valid according to the ProgramTemplateStructure schema.",
      "EXERCISE TEMPLATE LIBRARY:",
      templateLibraryText,
    ].join("\n");

    const completion = await client.chat.completions.create({
      model: "gpt-4.1-mini",
      response_format: {
        type: "json_schema",
        json_schema: programStructureSchema,
      },
      messages: [
        { role: "system", content: systemPrompt },
        {
          role: "user",
          content:
            "User description (structured from form inputs):\n" +
            prompt +
            "\n\nReturn ONLY JSON valid under the ProgramTemplateStructure schema.",
        },
      ],
    });

    const content = completion.choices[0]?.message?.content;
    if (!content) {
      return NextResponse.json(
        { error: "No response from model." },
        { status: 500 }
      );
    }

    const structure = JSON.parse(content) as {
      name: string;
      days: number;
      weeks: number;
      workouts: any[];
    };

    // Validate exerciseTemplateIds against DB
    const validIds = new Set(templates.map((t) => t.id));
    for (const workout of structure.workouts) {
      workout.exercises = workout.exercises.filter((ex: any) =>
        validIds.has(ex.exerciseTemplateId)
      );
    }

    const templateName = "AI – " + structure.name;

    const createdTemplate = await prisma.programTemplate.create({
      data: {
        userId: user.id,
        name: templateName,
        // You could store goal here if you want:
        // goal: goal as any,
        goal: null,
        weeks: structure.weeks || clampedWeeks,
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
