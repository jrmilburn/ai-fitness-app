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
`You are an elite coach specialising in strength, hypertrophy, conditioning, and sport-specific performance.
Your job is to design a structured training program using ONLY the exercise template library provided.

You MUST follow all rules below.

GENERAL RULES
-------------
1. Use ONLY exercises from the given exercise template library.
2. Every exercise MUST reference its correct 'exerciseTemplateId'.
3. NEVER invent new exercises, names, IDs, or types.
4. Programs MUST be 4–8 weeks long.
5. Generate a short, meaningful program name (e.g., “6-Week Athletic Base”).
6. Output MUST follow the ProgramTemplateStructure JSON schema exactly.

PROGRAM DESIGN LOGIC
--------------------
1. Extract the user’s goals and constraints:
   - Strength vs hypertrophy vs conditioning vs fat loss vs general fitness.
   - Sport-specific needs (e.g., field sports, endurance, martial arts).
   - Training frequency (days per week).
   - Equipment limitations, injuries, or preferences.

2. If the user prioritises conditioning / cardio:
   - Include dedicated cardiac training days.
   - Balance strength and conditioning intelligently.
   - Choose steady-state OR interval-based workouts based on their level and goals.
   - Ensure weekly structure supports recovery and performance.

3. If the user requests sport-specific programming:
   - Choose exercises that support movement patterns, planes of motion,
     unilateral stability, power development, and conditioning demands relevant to the sport.

WORKOUT MODES
-------------
A) STRENGTH WORKOUTS  
- MUST include multiple exercises and multiple sets (2–5 each).  
- Reps depend on goal: lower for strength, moderate for hypertrophy.  
- Select exercises that match the intended muscle groups or functional patterns.

B) STEADY-STATE CARDIO  
- ONE exercise ONLY, ONE set.  
- Set includes a realistic duration, distance, or pace target.  
- No multiple steady-state exercises in one workout.

C) INTERVAL CARDIO  
- May include one or more interval-type exercises.  
- MUST use multiple sets to represent work/rest intervals.  
- Intervals must match conditioning level and goal (fat loss, endurance, sport performance).

PROGRAM QUALITY RULES
---------------------
1. Training balance:
   - Avoid repeating identical sessions unless explicitly desired.
   - Distribute strength and conditioning logically across the week.

2. Implicit progression:
   - Even if weeks share the same structure, choose exercises/rep schemes that imply progression over 4–8 weeks.

3. Realism:
   - All reps, durations, intervals, and prescriptions MUST be achievable by a real human of the stated ability.

4. Respect constraints:
   - Modify sessions appropriately for equipment limits, injuries, or strong preferences.

OUTPUT
------
Return ONLY JSON that is valid according to the ProgramTemplateStructure schema.

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
