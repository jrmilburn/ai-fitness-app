// prisma/seedExerciseTemplates.ts
// Seed global ExerciseTemplate rows into your Supabase (Postgres) DB via Prisma

import { PrismaClient } from "@prisma/client";

import type { ExerciseType } from "@prisma/client";

const prisma = new PrismaClient();

type MinimalExerciseTemplate = {
  name: string;
  exerciseType?: ExerciseType;
};

// Global templates: userId = null
const exerciseTemplates: MinimalExerciseTemplate[] = [
  // =========================
  // Barbell
  // =========================
  { name: "Barbell Back Squat" },
  { name: "Barbell Front Squat" },
  { name: "Barbell Bench Press" },
  { name: "Barbell Incline Bench Press" },
  { name: "Barbell Overhead Press" },
  { name: "Barbell Bent-Over Row" },
  { name: "Barbell Romanian Deadlift" },
  { name: "Barbell Deadlift" },
  { name: "Barbell Hip Thrust" },
  { name: "Barbell Biceps Curl" },
  { name: "Barbell Close-Grip Bench Press" },
  { name: "Barbell Pendlay Row" },
  { name: "Barbell Split Squat" },
  { name: "Barbell Glute Bridge" },

  // =========================
  // Dumbbell
  // =========================
  { name: "Dumbbell Bench Press" },
  { name: "Dumbbell Incline Bench Press" },
  { name: "Dumbbell Shoulder Press" },
  { name: "Dumbbell Lateral Raise" },
  { name: "Dumbbell Front Raise" },
  { name: "Dumbbell Rear Delt Fly" },
  { name: "Dumbbell Romanian Deadlift" },
  { name: "Dumbbell Goblet Squat" },
  { name: "Dumbbell Lunge" },
  { name: "Dumbbell Step-Up" },
  { name: "Dumbbell Biceps Curl" },
  { name: "Dumbbell Hammer Curl" },
  { name: "Dumbbell Concentration Curl" },
  { name: "Dumbbell Triceps Overhead Extension" },
  { name: "Dumbbell Skull Crusher" },
  { name: "Dumbbell Single-Arm Row" },
  { name: "Dumbbell Chest Fly" },

  // =========================
  // Bodyweight
  // =========================
  { name: "Push-Up" },
  { name: "Wide-Grip Push-Up" },
  { name: "Diamond Push-Up" },
  { name: "Decline Push-Up" },
  { name: "Bodyweight Squat" },
  { name: "Pistol Squat" },
  { name: "Reverse Lunge" },
  { name: "Bulgarian Split Squat" },
  { name: "Glute Bridge" },
  { name: "Hip Thrust (Bodyweight)" },
  { name: "Plank" },
  { name: "Side Plank" },
  { name: "Hollow Body Hold" },
  { name: "Mountain Climbers" },
  { name: "Burpees" },
  { name: "Inverted Row" },

  // =========================
  // Calisthenics
  // =========================
  { name: "Pull-Up" },
  { name: "Chin-Up" },
  { name: "Wide-Grip Pull-Up" },
  { name: "Neutral-Grip Pull-Up" },
  { name: "Muscle-Up" },
  { name: "Dips" },
  { name: "Ring Dips" },
  { name: "Ring Rows" },
  { name: "Toes to Bar" },
  { name: "Hanging Leg Raise" },
  { name: "L-Sit" },
  { name: "Handstand Hold" },
  { name: "Handstand Push-Up" },
  { name: "Back Lever Progression" },
  { name: "Front Lever Progression" },

  // =========================
  // Cable Machine
  // =========================
  { name: "Cable Chest Fly" },
  { name: "Cable Crossover" },
  { name: "Seated Cable Row" },
  { name: "Lat Pulldown (Cable)" },
  { name: "Straight-Arm Cable Pulldown" },
  { name: "Cable Face Pull" },
  { name: "Cable Lateral Raise" },
  { name: "Cable Biceps Curl" },
  { name: "Cable Hammer Curl" },
  { name: "Cable Triceps Pushdown" },
  { name: "Cable Overhead Triceps Extension" },
  { name: "Cable Rope Crunch" },

  // =========================
  // Smith Machine
  // =========================
  { name: "Smith Machine Squat" },
  { name: "Smith Machine Front Squat" },
  { name: "Smith Machine Bench Press" },
  { name: "Smith Machine Incline Bench Press" },
  { name: "Smith Machine Shoulder Press" },
  { name: "Smith Machine Romanian Deadlift" },
  { name: "Smith Machine Hip Thrust" },
  { name: "Smith Machine Lunge" },
  { name: "Smith Machine Split Squat" },
  { name: "Smith Machine Calf Raise" },

  // =========================
  // Machine-Based (Selectorised / Plate-Loaded)
  // =========================
  { name: "Leg Press" },
  { name: "Hack Squat Machine" },
  { name: "Leg Extension Machine" },
  { name: "Seated Leg Curl Machine" },
  { name: "Lying Leg Curl Machine" },
  { name: "Seated Row Machine" },
  { name: "Chest Press Machine" },
  { name: "Pec Deck Machine" },
  { name: "Shoulder Press Machine" },
  { name: "Lat Pulldown Machine" },
  { name: "Seated Calf Raise Machine" },
  { name: "Standing Calf Raise Machine" },
  { name: "Back Extension Machine" },
  { name: "Ab Crunch Machine" },

  // =========================
  // Cardio
  // =========================

  { name: "Steady Run", exerciseType: "CARDIO_STEADY"},
  { name: "Swim", exerciseType: "CARDIO_STEADY"},
  { name: "Run Intervals", exerciseType: "CARDIO_INTERVAL"},
  { name: "Swim Intervals", exerciseType: "CARDIO_INTERVAL"},
];

async function main() {
  console.log(`Seeding ${exerciseTemplates.length} exercise templates...`);

  // If you have a unique index on (name, userId), skipDuplicates will prevent rerun issues.
  // e.g. @@unique([name, userId])
  await prisma.exerciseTemplate.createMany({
    data: exerciseTemplates.map((t) => ({
      name: t.name,
      userId: null, // global template
    })),
    skipDuplicates: true,
  });

  console.log("✅ Done seeding exercise templates.");
}

main()
  .catch((e) => {
    console.error("Error seeding exercise templates:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
