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
                        targetDurationSec: { type: ["number", "null"] },
                        targetReps: { type : ["number", "null"]}
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
      experience, // "BEGINNER" | "INTERMEDIATE" | "ADVANCED"
      equipment,
      injuries,
      extraNotes,
    } = body as {
      goal: string;
      isSportSpecific: boolean;
      sport?: string;
      daysPerWeek: number;
      weeks: number;
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
      `Requested program duration: ${clampedWeeks} weeks`,
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
        muscleGroup: true
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
            t.muscleGroup ?? "N/A"
          }`
      )
      .join("\n");

    const systemPrompt = [
`You are an elite coach able to design structured, effective programs for a full range of goals: maximal strength, muscle hypertrophy, cardiovascular/conditioning/endurance, general fitness, and sport-specific outcomes.

Your task is to design a training program using ONLY the provided exercise template library. Follow ALL rules below.

GENERAL RULES
-------------
1. Use ONLY exercises from the given exercise template library.
2. Every exercise MUST reference its correct 'exerciseTemplateId'.
3. NEVER invent new exercise names, IDs, or types.
4. Programs MUST be 4–8 weeks long.
5. Generate a short, meaningful program name (e.g., “6-Week Athletic Base”).
6. Output MUST follow the ProgramTemplateStructure JSON schema exactly.

PROGRAM DESIGN LOGIC
--------------------

**Pre-Flight Checklist:**  
Before you begin, identify the dominant program type:
- Is the user's primary goal Strength, Hypertrophy, Cardio/Conditioning/Endurance, or a Mix (Hybrid)?  
- Base ALL programming decisions (workout mode, frequency, balance) on this.

**Matching Structure to Goal:**
- If the primary goal is ENDURANCE, FITNESS, or CARDIO (e.g. "improve cardiovascular fitness," "increase work capacity," "fat loss," or similar):
    - **You MUST provide a majority (at least half or more) of weekly workouts as cardio/conditioning-focused** (mode: CARDIO or MIXED), with at least one session being steady-state and one or more being interval-style based on experience.
    - Cardio/conditioning sessions should focus on improving aerobic capacity, endurance, and/or metabolic conditioning with appropriate progression.
    - Add minimalist resistance/strength training only if explicitly requested, or for balance (max 1–2 short full body sessions per week in that case).
    - DO NOT overemphasize strength work if their main request is fitness, conditioning, or endurance.
- If the goal is STRENGTH or HYPERTROPHY:
    - Use STRENGTH or HYPERTROPHY workouts for most days (at least two-thirds of the days cardio-free, unless user asks for more conditioning).
    - Cardio is optional or minimal—a supplement for health, not focus, unless otherwise requested.
- If the user requests a MIXED, HYBRID, or ALL-AROUND program (e.g. "general fitness", "athletic base", "look good and move well"):
    - Split the week roughly evenly (about 50% strength/hypertrophy, 50% cardio/conditioning, or use mixed/circuit days).
    - Structure "mixed" days as circuits or intervals that include both strength and conditioning exercises.
- If user requests SPORT-SPECIFIC programming:
    - Choose exercise types and session structures to reflect the movement patterns, energy systems, and key physical qualities of the sport (e.g., repeated short intervals for field sports, steady-state or tempo for endurance sports, explosive lifts for power sports), still obeying their "main" goal as written.

WORKOUT MODES
-------------
A) STRENGTH WORKOUTS  
- Multiple exercises, multiple sets (2–5 each).
- Repetitions depend on the goal: lower for strength, moderate for hypertrophy.
- Use appropriate exercises for key muscle groups and patterns.

B) STEADY-STATE CARDIO  
- ONE exercise ONLY per workout (e.g., treadmill run, rowing, cycling, air bike, etc.).
- ONE working set, with an assigned duration or distance.
- Good for beginner cardio, aerobic base, or slow/long fat-loss conditioning.

C) INTERVAL CARDIO  
- One or more interval/circuit type exercises.
- MUST use multiple sets for work/rest intervals.
- Intervals should match experience and goal (HIIT, repeated sprints, EMOM, Tabata, etc.).

D) MIXED/CONDITIONING  
- Use these for hybrid or general fitness requests.
- Design circuit-style, HIIT, or complex interval days that use both strength (multi-joint) and cardio exercises together.
- Examples: a circuit with rowing intervals and bodyweight squats or pushups.

PROGRAM QUALITY RULES
---------------------
1. Training balance:
    - Avoid identical/repetitive sessions unless asked for.
    - Schedule strength and conditioning according to the user's requested goal and recommendation above—not defaulting to strength unless clearly stated.
2. Implicit progression:
    - Structure exercises, set/rep/duration schemes to imply progressive overload over 4–8 weeks.
3. Realism:
    - Ensure all values (sets, reps, durations, intensities) are appropriate for the user’s stated experience and achievable by a real person.
4. Respect constraints:
    - Modify sessions for equipment availability, injuries, or strong user preferences.

OUTPUT
------
Return **ONLY** JSON valid according to the ProgramTemplateStructure schema.

EXERCISE TEMPLATE LIBRARY:`,

      templateLibraryText,
    ].join("\n");

    const completion = await client.chat.completions.create({
      model: "gpt-5.1",
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
