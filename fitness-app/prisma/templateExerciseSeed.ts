// prisma/seedExerciseTemplates.ts
// Seed global ExerciseTemplate rows into your Supabase (Postgres) DB via Prisma

import { PrismaClient, ExerciseType, Equipment, MuscleGroup } from "@prisma/client";

const prisma = new PrismaClient();

type MinimalExerciseTemplate = {
  name: string;
  exerciseType?: ExerciseType;
  equipment?: Equipment;
  muscleGroup?: MuscleGroup;
};

// Global templates: userId = null
const exerciseTemplates: MinimalExerciseTemplate[] = [
  // =========================
  // Barbell
  // =========================
  {
    name: "Barbell Back Squat",
    equipment: Equipment.Barbell,
    muscleGroup: MuscleGroup.Quads,
  },
  {
    name: "Barbell Front Squat",
    equipment: Equipment.Barbell,
    muscleGroup: MuscleGroup.Quads,
  },
  {
    name: "Barbell Bench Press",
    equipment: Equipment.Barbell,
    muscleGroup: MuscleGroup.Chest,
  },
  {
    name: "Barbell Incline Bench Press",
    equipment: Equipment.Barbell,
    muscleGroup: MuscleGroup.Chest,
  },
  {
    name: "Barbell Overhead Press",
    equipment: Equipment.Barbell,
    muscleGroup: MuscleGroup.Shoulders,
  },
  {
    name: "Barbell Bent-Over Row",
    equipment: Equipment.Barbell,
    muscleGroup: MuscleGroup.Back,
  },
  {
    name: "Barbell Romanian Deadlift",
    equipment: Equipment.Barbell,
    muscleGroup: MuscleGroup.Hamstrings,
  },
  {
    name: "Barbell Deadlift",
    equipment: Equipment.Barbell,
    muscleGroup: MuscleGroup.Back,
  },
  {
    name: "Barbell Hip Thrust",
    equipment: Equipment.Barbell,
    muscleGroup: MuscleGroup.Glutes,
  },
  {
    name: "Barbell Biceps Curl",
    equipment: Equipment.Barbell,
    muscleGroup: MuscleGroup.Biceps,
  },
  {
    name: "Barbell Close-Grip Bench Press",
    equipment: Equipment.Barbell,
    muscleGroup: MuscleGroup.Triceps,
  },
  {
    name: "Barbell Pendlay Row",
    equipment: Equipment.Barbell,
    muscleGroup: MuscleGroup.Back,
  },
  {
    name: "Barbell Split Squat",
    equipment: Equipment.Barbell,
    muscleGroup: MuscleGroup.Quads,
  },
  {
    name: "Barbell Glute Bridge",
    equipment: Equipment.Barbell,
    muscleGroup: MuscleGroup.Glutes,
  },

  // =========================
  // Dumbbell
  // =========================
  {
    name: "Dumbbell Bench Press",
    equipment: Equipment.Dumbbell,
    muscleGroup: MuscleGroup.Chest,
  },
  {
    name: "Dumbbell Incline Bench Press",
    equipment: Equipment.Dumbbell,
    muscleGroup: MuscleGroup.Chest,
  },
  {
    name: "Dumbbell Shoulder Press",
    equipment: Equipment.Dumbbell,
    muscleGroup: MuscleGroup.Shoulders,
  },
  {
    name: "Dumbbell Lateral Raise",
    equipment: Equipment.Dumbbell,
    muscleGroup: MuscleGroup.Shoulders,
  },
  {
    name: "Dumbbell Front Raise",
    equipment: Equipment.Dumbbell,
    muscleGroup: MuscleGroup.Shoulders,
  },
  {
    name: "Dumbbell Rear Delt Fly",
    equipment: Equipment.Dumbbell,
    muscleGroup: MuscleGroup.Shoulders,
  },
  {
    name: "Dumbbell Romanian Deadlift",
    equipment: Equipment.Dumbbell,
    muscleGroup: MuscleGroup.Hamstrings,
  },
  {
    name: "Dumbbell Goblet Squat",
    equipment: Equipment.Dumbbell,
    muscleGroup: MuscleGroup.Quads,
  },
  {
    name: "Dumbbell Lunge",
    equipment: Equipment.Dumbbell,
    muscleGroup: MuscleGroup.Quads,
  },
  {
    name: "Dumbbell Step-Up",
    equipment: Equipment.Dumbbell,
    muscleGroup: MuscleGroup.Quads,
  },
  {
    name: "Dumbbell Biceps Curl",
    equipment: Equipment.Dumbbell,
    muscleGroup: MuscleGroup.Biceps,
  },
  {
    name: "Dumbbell Hammer Curl",
    equipment: Equipment.Dumbbell,
    muscleGroup: MuscleGroup.Biceps,
  },
  {
    name: "Dumbbell Concentration Curl",
    equipment: Equipment.Dumbbell,
    muscleGroup: MuscleGroup.Biceps,
  },
  {
    name: "Dumbbell Triceps Overhead Extension",
    equipment: Equipment.Dumbbell,
    muscleGroup: MuscleGroup.Triceps,
  },
  {
    name: "Dumbbell Skull Crusher",
    equipment: Equipment.Dumbbell,
    muscleGroup: MuscleGroup.Triceps,
  },
  {
    name: "Dumbbell Single-Arm Row",
    equipment: Equipment.Dumbbell,
    muscleGroup: MuscleGroup.Back,
  },
  {
    name: "Dumbbell Chest Fly",
    equipment: Equipment.Dumbbell,
    muscleGroup: MuscleGroup.Chest,
  },

  // =========================
  // Bodyweight
  // =========================
  {
    name: "Push-Up",
    equipment: Equipment.Bodyweight,
    muscleGroup: MuscleGroup.Chest,
  },
  {
    name: "Wide-Grip Push-Up",
    equipment: Equipment.Bodyweight,
    muscleGroup: MuscleGroup.Chest,
  },
  {
    name: "Diamond Push-Up",
    equipment: Equipment.Bodyweight,
    muscleGroup: MuscleGroup.Triceps,
  },
  {
    name: "Decline Push-Up",
    equipment: Equipment.Bodyweight,
    muscleGroup: MuscleGroup.Chest,
  },
  {
    name: "Bodyweight Squat",
    equipment: Equipment.Bodyweight,
    muscleGroup: MuscleGroup.Quads,
  },
  {
    name: "Pistol Squat",
    equipment: Equipment.Bodyweight,
    muscleGroup: MuscleGroup.Quads,
  },
  {
    name: "Reverse Lunge",
    equipment: Equipment.Bodyweight,
    muscleGroup: MuscleGroup.Quads,
  },
  {
    name: "Bulgarian Split Squat",
    equipment: Equipment.Bodyweight,
    muscleGroup: MuscleGroup.Quads,
  },
  {
    name: "Glute Bridge",
    equipment: Equipment.Bodyweight,
    muscleGroup: MuscleGroup.Glutes,
  },
  {
    name: "Hip Thrust (Bodyweight)",
    equipment: Equipment.Bodyweight,
    muscleGroup: MuscleGroup.Glutes,
  },
  {
    name: "Plank",
    equipment: Equipment.Bodyweight,
    muscleGroup: MuscleGroup.Abs,
  },
  {
    name: "Side Plank",
    equipment: Equipment.Bodyweight,
    muscleGroup: MuscleGroup.Abs,
  },
  {
    name: "Hollow Body Hold",
    equipment: Equipment.Bodyweight,
    muscleGroup: MuscleGroup.Abs,
  },
  {
    name: "Mountain Climbers",
    equipment: Equipment.Bodyweight,
    muscleGroup: MuscleGroup.Abs,
  },
  {
    name: "Burpees",
    equipment: Equipment.Bodyweight,
    muscleGroup: MuscleGroup.Cardio
  }, // TEMP: adjust this if you don't have FullBody – or change to Quads/Abs etc.
  {
    name: "Inverted Row",
    equipment: Equipment.Bodyweight,
    muscleGroup: MuscleGroup.Back,
  },

  // =========================
  // Calisthenics (Bodyweight)
  // =========================
  {
    name: "Pull-Up",
    equipment: Equipment.Bodyweight,
    muscleGroup: MuscleGroup.Back,
  },
  {
    name: "Chin-Up",
    equipment: Equipment.Bodyweight,
    muscleGroup: MuscleGroup.Biceps,
  },
  {
    name: "Wide-Grip Pull-Up",
    equipment: Equipment.Bodyweight,
    muscleGroup: MuscleGroup.Back,
  },
  {
    name: "Neutral-Grip Pull-Up",
    equipment: Equipment.Bodyweight,
    muscleGroup: MuscleGroup.Back,
  },
  {
    name: "Muscle-Up",
    equipment: Equipment.Bodyweight,
    muscleGroup: MuscleGroup.Back,
  },
  {
    name: "Dips",
    equipment: Equipment.Bodyweight,
    muscleGroup: MuscleGroup.Triceps,
  },
  {
    name: "Ring Dips",
    equipment: Equipment.Bodyweight,
    muscleGroup: MuscleGroup.Triceps,
  },
  {
    name: "Ring Rows",
    equipment: Equipment.Bodyweight,
    muscleGroup: MuscleGroup.Back,
  },
  {
    name: "Toes to Bar",
    equipment: Equipment.Bodyweight,
    muscleGroup: MuscleGroup.Abs,
  },
  {
    name: "Hanging Leg Raise",
    equipment: Equipment.Bodyweight,
    muscleGroup: MuscleGroup.Abs,
  },
  {
    name: "L-Sit",
    equipment: Equipment.Bodyweight,
    muscleGroup: MuscleGroup.Abs,
  },
  {
    name: "Handstand Hold",
    equipment: Equipment.Bodyweight,
    muscleGroup: MuscleGroup.Shoulders,
  },
  {
    name: "Handstand Push-Up",
    equipment: Equipment.Bodyweight,
    muscleGroup: MuscleGroup.Shoulders,
  },
  {
    name: "Back Lever Progression",
    equipment: Equipment.Bodyweight,
    muscleGroup: MuscleGroup.Back,
  },
  {
    name: "Front Lever Progression",
    equipment: Equipment.Bodyweight,
    muscleGroup: MuscleGroup.Back,
  },

  // =========================
  // Cable Machine
  // =========================
  {
    name: "Cable Chest Fly",
    equipment: Equipment.Cable,
    muscleGroup: MuscleGroup.Chest,
  },
  {
    name: "Cable Crossover",
    equipment: Equipment.Cable,
    muscleGroup: MuscleGroup.Chest,
  },
  {
    name: "Seated Cable Row",
    equipment: Equipment.Cable,
    muscleGroup: MuscleGroup.Back,
  },
  {
    name: "Lat Pulldown (Cable)",
    equipment: Equipment.Cable,
    muscleGroup: MuscleGroup.Back,
  },
  {
    name: "Straight-Arm Cable Pulldown",
    equipment: Equipment.Cable,
    muscleGroup: MuscleGroup.Back,
  },
  {
    name: "Cable Face Pull",
    equipment: Equipment.Cable,
    muscleGroup: MuscleGroup.Shoulders,
  },
  {
    name: "Cable Lateral Raise",
    equipment: Equipment.Cable,
    muscleGroup: MuscleGroup.Shoulders,
  },
  {
    name: "Cable Biceps Curl",
    equipment: Equipment.Cable,
    muscleGroup: MuscleGroup.Biceps,
  },
  {
    name: "Cable Hammer Curl",
    equipment: Equipment.Cable,
    muscleGroup: MuscleGroup.Biceps,
  },
  {
    name: "Cable Triceps Pushdown",
    equipment: Equipment.Cable,
    muscleGroup: MuscleGroup.Triceps,
  },
  {
    name: "Cable Overhead Triceps Extension",
    equipment: Equipment.Cable,
    muscleGroup: MuscleGroup.Triceps,
  },
  {
    name: "Cable Rope Crunch",
    equipment: Equipment.Cable,
    muscleGroup: MuscleGroup.Abs,
  },

  // =========================
  // Smith Machine -> Machine
  // =========================
  {
    name: "Smith Machine Squat",
    equipment: Equipment.Machine,
    muscleGroup: MuscleGroup.Quads,
  },
  {
    name: "Smith Machine Front Squat",
    equipment: Equipment.Machine,
    muscleGroup: MuscleGroup.Quads,
  },
  {
    name: "Smith Machine Bench Press",
    equipment: Equipment.Machine,
    muscleGroup: MuscleGroup.Chest,
  },
  {
    name: "Smith Machine Incline Bench Press",
    equipment: Equipment.Machine,
    muscleGroup: MuscleGroup.Chest,
  },
  {
    name: "Smith Machine Shoulder Press",
    equipment: Equipment.Machine,
    muscleGroup: MuscleGroup.Shoulders,
  },
  {
    name: "Smith Machine Romanian Deadlift",
    equipment: Equipment.Machine,
    muscleGroup: MuscleGroup.Hamstrings,
  },
  {
    name: "Smith Machine Hip Thrust",
    equipment: Equipment.Machine,
    muscleGroup: MuscleGroup.Glutes,
  },
  {
    name: "Smith Machine Lunge",
    equipment: Equipment.Machine,
    muscleGroup: MuscleGroup.Quads,
  },
  {
    name: "Smith Machine Split Squat",
    equipment: Equipment.Machine,
    muscleGroup: MuscleGroup.Quads,
  },
  {
    name: "Smith Machine Calf Raise",
    equipment: Equipment.Machine,
    muscleGroup: MuscleGroup.Calves,
  },

  // =========================
  // Machine-Based (Selectorised / Plate-Loaded)
  // =========================
  {
    name: "Leg Press",
    equipment: Equipment.Machine,
    muscleGroup: MuscleGroup.Quads,
  },
  {
    name: "Hack Squat Machine",
    equipment: Equipment.Machine,
    muscleGroup: MuscleGroup.Quads,
  },
  {
    name: "Leg Extension Machine",
    equipment: Equipment.Machine,
    muscleGroup: MuscleGroup.Quads,
  },
  {
    name: "Seated Leg Curl Machine",
    equipment: Equipment.Machine,
    muscleGroup: MuscleGroup.Hamstrings,
  },
  {
    name: "Lying Leg Curl Machine",
    equipment: Equipment.Machine,
    muscleGroup: MuscleGroup.Hamstrings,
  },
  {
    name: "Seated Row Machine",
    equipment: Equipment.Machine,
    muscleGroup: MuscleGroup.Back,
  },
  {
    name: "Chest Press Machine",
    equipment: Equipment.Machine,
    muscleGroup: MuscleGroup.Chest,
  },
  {
    name: "Pec Deck Machine",
    equipment: Equipment.Machine,
    muscleGroup: MuscleGroup.Chest,
  },
  {
    name: "Shoulder Press Machine",
    equipment: Equipment.Machine,
    muscleGroup: MuscleGroup.Shoulders,
  },
  {
    name: "Lat Pulldown Machine",
    equipment: Equipment.Machine,
    muscleGroup: MuscleGroup.Back,
  },
  {
    name: "Seated Calf Raise Machine",
    equipment: Equipment.Machine,
    muscleGroup: MuscleGroup.Calves,
  },
  {
    name: "Standing Calf Raise Machine",
    equipment: Equipment.Machine,
    muscleGroup: MuscleGroup.Calves,
  },
  {
    name: "Back Extension Machine",
    equipment: Equipment.Machine,
    muscleGroup: MuscleGroup.Back,
  },
  {
    name: "Ab Crunch Machine",
    equipment: Equipment.Machine,
    muscleGroup: MuscleGroup.Abs,
  },

  // =========================
  // Cardio
  // =========================
  {
    name: "Steady Run",
    exerciseType: ExerciseType.CARDIO_STEADY,
    equipment: Equipment.Machine,
    muscleGroup: MuscleGroup.Cardio
  },
  {
    name: "Swim",
    exerciseType: ExerciseType.CARDIO_STEADY,
    equipment: Equipment.Bodyweight,
    muscleGroup: MuscleGroup.Cardio
  },
  {
    name: "Run Intervals",
    exerciseType: ExerciseType.CARDIO_INTERVAL,
    equipment: Equipment.Machine,
    muscleGroup: MuscleGroup.Cardio
  },
  {
    name: "Swim Intervals",
    exerciseType: ExerciseType.CARDIO_INTERVAL,
    equipment: Equipment.Bodyweight,
    muscleGroup: MuscleGroup.Cardio
  },
];

async function main() {
  console.log(`Seeding ${exerciseTemplates.length} exercise templates...`);

  await prisma.exerciseTemplate.createMany({
    data: exerciseTemplates.map((t) => ({
      name: t.name,
      userId: null, // global template
      exerciseType: t.exerciseType ?? ExerciseType.STRENGTH,
      equipment: t.equipment ?? null,
      muscleGroup: t.muscleGroup ?? null,
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
