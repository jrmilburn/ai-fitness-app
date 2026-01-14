/**
 * scripts/createTestProgramForInsights.ts
 *
 * Creates an 8-week, 3-days/week 5x5 program and marks the first 4 weeks as completed
 * (with actual reps/weight filled) so you can test AI Insights eligibility.
 *
 * Scope:
 * - Program length: 8 weeks
 * - 3 workouts per week (Day 1 / Day 2 / Day 3)
 * - Standard 5x5 strength template
 * - Weeks 1–4: completed (workouts + exercises + sets + actuals)
 * - Weeks 5–8: not completed (targets only)
 * - Dates: spreads completed logs across 4 weeks (Mon/Wed/Fri cadence)
 *
 * Usage:
 * 1) Put this file in /scripts
 * 2) Run:
 *    - ts-node:  npx ts-node scripts/createTestProgramForInsights.ts --clerkId YOUR_CLERK_ID
 *    - or node (tsx): npx tsx scripts/createTestProgramForInsights.ts --clerkId YOUR_CLERK_ID
 *
 * Notes:
 * - This script assumes the User already exists (by clerkId).
 * - It does NOT require ExerciseTemplates.
 */

import { PrismaClient, MuscleGroup, Equipment, ProgramGoal, WorkoutMode, WorkoutType, ExerciseType, SetType } from "@prisma/client";

const prisma = new PrismaClient();

function parseArg(name: string) {
  const idx = process.argv.findIndex((a) => a === `--${name}`);
  if (idx === -1) return null;
  return process.argv[idx + 1] ?? null;
}

function addDays(d: Date, days: number) {
  const copy = new Date(d);
  copy.setDate(copy.getDate() + days);
  return copy;
}

function startOfDay(d: Date) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate(), 9, 0, 0, 0);
}

type ExercisePlan = {
  name: string;
  muscleGroup: MuscleGroup;
  equipment: Equipment;
  // base weight for week 1 (kg)
  baseWeight: number;
  // increment per week (kg)
  increment: number;
};

type WorkoutPlan = {
  dayNumber: number;
  name: string;
  focusMuscleGroups: string[];
  exercises: ExercisePlan[];
};

const DAY_PLANS: WorkoutPlan[] = [
  {
    dayNumber: 1,
    name: "Day 1 — Squat / Bench / Row (5x5)",
    focusMuscleGroups: ["Quads", "Chest", "Back"],
    exercises: [
      { name: "Back Squat", muscleGroup: MuscleGroup.Quads, equipment: Equipment.Barbell, baseWeight: 80, increment: 2.5 },
      { name: "Bench Press", muscleGroup: MuscleGroup.Chest, equipment: Equipment.Barbell, baseWeight: 60, increment: 2.5 },
      { name: "Barbell Row", muscleGroup: MuscleGroup.Back, equipment: Equipment.Barbell, baseWeight: 55, increment: 2.5 },
    ],
  },
  {
    dayNumber: 2,
    name: "Day 2 — Deadlift / OHP / Pull (5x5)",
    focusMuscleGroups: ["Back", "Shoulders", "Biceps"],
    exercises: [
      { name: "Deadlift", muscleGroup: MuscleGroup.Back, equipment: Equipment.Barbell, baseWeight: 100, increment: 5 },
      { name: "Overhead Press", muscleGroup: MuscleGroup.Shoulders, equipment: Equipment.Barbell, baseWeight: 40, increment: 2.5 },
      { name: "Pull-up", muscleGroup: MuscleGroup.Back, equipment: Equipment.Bodyweight, baseWeight: 0, increment: 0 },
    ],
  },
  {
    dayNumber: 3,
    name: "Day 3 — Squat / Bench / Row (5x5)",
    focusMuscleGroups: ["Quads", "Chest", "Back"],
    exercises: [
      // “Light-ish” squat day: use ~90% of main squat
      { name: "Back Squat", muscleGroup: MuscleGroup.Quads, equipment: Equipment.Barbell, baseWeight: 72.5, increment: 2.5 },
      // “Volume-ish” bench day: use ~95% of main bench
      { name: "Bench Press", muscleGroup: MuscleGroup.Chest, equipment: Equipment.Barbell, baseWeight: 57.5, increment: 2.5 },
      { name: "Barbell Row", muscleGroup: MuscleGroup.Back, equipment: Equipment.Barbell, baseWeight: 55, increment: 2.5 },
    ],
  },
];

function weekWeight(plan: ExercisePlan, weekNumber: number) {
  // weekNumber starts at 1
  const w = plan.baseWeight + plan.increment * (weekNumber - 1);
  // keep 0 for bodyweight
  return plan.baseWeight === 0 ? 0 : Math.round(w * 2) / 2; // round to nearest 0.5
}

async function main() {
  const clerkId = parseArg("clerkId") ?? process.env.CLERK_ID;
  if (!clerkId) {
    throw new Error("Missing --clerkId (or env CLERK_ID). Example: --clerkId user_123");
  }

  const user = await prisma.user.findUnique({ where: { clerkId } });
  if (!user) {
    throw new Error(`No User found for clerkId=${clerkId}`);
  }

  // Create a start date 28 days ago so we have >= 2 weeks of logs.
  // Completed weeks = 4 -> spreads across ~4 weeks.
  const today = startOfDay(new Date());
  const programStart = addDays(today, -28);

  const program = await prisma.program.create({
    data: {
      userId: user.id,
      name: "Test 8-Week 5x5 (3 Days/Week)",
      goal: ProgramGoal.STRENGTH,
      length: 8,
      days: 3,
      completed: false,
    },
  });

  // Build 8 weeks + 3 workouts each
  const weekIds: string[] = [];
  let week5Id: string | null = null;

  for (let weekNumber = 1; weekNumber <= 8; weekNumber++) {
    const week = await prisma.week.create({
      data: {
        programId: program.id,
        weekNumber,
      },
    });

    weekIds.push(week.id);
    if (weekNumber === 5) week5Id = week.id;

    // For the completed half: set 3 workouts per week on Mon/Wed/Fri cadence.
    // Week 1 starts at programStart. Each week increments by 7 days.
    const weekStartDate = addDays(programStart, (weekNumber - 1) * 7);
    const workoutDates = [
      startOfDay(addDays(weekStartDate, 0)), // Mon-ish
      startOfDay(addDays(weekStartDate, 2)), // Wed-ish
      startOfDay(addDays(weekStartDate, 4)), // Fri-ish
    ];

    const weekIsCompleted = weekNumber <= 4;

    for (let i = 0; i < DAY_PLANS.length; i++) {
      const plan = DAY_PLANS[i];
      const workoutDate = workoutDates[i];

      const workout = await prisma.workout.create({
        data: {
          weekId: week.id,
          dayNumber: plan.dayNumber,
          name: plan.name,
          type: WorkoutType.PROGRAMMED,
          mode: WorkoutMode.STRENGTH,
          focusMuscleGroups: plan.focusMuscleGroups,
          completed: weekIsCompleted,
          // create realistic createdAt/updatedAt for “logged” workouts
          createdAt: workoutDate,
          updatedAt: workoutDate,
        },
      });

      // Exercises
      for (let exOrder = 0; exOrder < plan.exercises.length; exOrder++) {
        const exPlan = plan.exercises[exOrder];

        const targetWeight = weekWeight(exPlan, weekNumber);
        const completed = weekIsCompleted;

        const exercise = await prisma.exercise.create({
          data: {
            workoutId: workout.id,
            order: exOrder + 1,
            exerciseType: ExerciseType.STRENGTH,
            muscleGroup: exPlan.muscleGroup,
            equipment: exPlan.equipment,
            details: "5x5 working sets",
            completed,
            createdAt: workoutDate,
            updatedAt: workoutDate,
          },
        });

        // Sets (5x5)
        // For bodyweight Pull-ups: store targetWeightKg null (or 0). We'll keep null to avoid confusion.
        const isBodyweight = exPlan.baseWeight === 0;

        for (let setNumber = 1; setNumber <= 5; setNumber++) {
          const targetReps = 5;

          await prisma.set.create({
            data: {
              exerciseId: exercise.id,
              setNumber,
              type: SetType.NORMAL,

              targetReps,
              targetWeightKg: isBodyweight ? null : targetWeight,
              minWeightKg: isBodyweight ? null : Math.max(0, targetWeight - 2.5),
              maxWeightKg: isBodyweight ? null : targetWeight + 2.5,

              // Fake actual tracking for completed weeks
              actualReps: completed ? targetReps : null,
              actualWeightKg: completed ? (isBodyweight ? null : targetWeight) : null,

              completed,
              createdAt: workoutDate,
              updatedAt: workoutDate,
            },
          });
        }

        // Mark the current set pointer (optional; safe if you rely on it)
        // Set current to 1st set for incomplete exercises, or last set for completed exercises.
        const sets = await prisma.set.findMany({
          where: { exerciseId: exercise.id },
          orderBy: { setNumber: "asc" },
          select: { id: true, setNumber: true },
        });

        const currentSetId =
          sets.length === 0
            ? null
            : completed
              ? sets[sets.length - 1]!.id
              : sets[0]!.id;

        await prisma.exercise.update({
          where: { id: exercise.id },
          data: {
            currentSetId,
          },
        });
      }

      // Mark current exercise pointer (optional)
      const exs = await prisma.exercise.findMany({
        where: { workoutId: workout.id },
        orderBy: { order: "asc" },
        select: { id: true, order: true },
      });

      const currentExerciseId =
        exs.length === 0
          ? null
          : weekIsCompleted
            ? exs[exs.length - 1]!.id
            : exs[0]!.id;

      await prisma.workout.update({
        where: { id: workout.id },
        data: { currentExerciseId },
      });
    }
  }

  // Set Program.currentWeek to week 5
  if (!week5Id) throw new Error("Failed to create week 5 id");

  await prisma.program.update({
    where: { id: program.id },
    data: {
      currentWeekId: week5Id,
      completed: false,
    },
  });

  // Set user's currentProgramId
  await prisma.user.update({
    where: { id: user.id },
    data: { currentProgramId: program.id },
  });

  console.log("✅ Created test program for insights:");
  console.log({
    programId: program.id,
    userId: user.id,
    weeks: 8,
    completedWeeks: 4,
    daysPerWeek: 3,
  });
}

main()
  .catch((err) => {
    console.error("❌ Failed to create test program:", err);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
