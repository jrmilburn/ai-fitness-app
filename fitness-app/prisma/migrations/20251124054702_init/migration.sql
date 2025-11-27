-- CreateEnum
CREATE TYPE "ProgramGoal" AS ENUM ('STRENGTH', 'HYPERTROPHY', 'ENDURANCE', 'GENERAL_FITNESS');

-- CreateEnum
CREATE TYPE "WorkoutMode" AS ENUM ('STRENGTH', 'CARDIO', 'MIXED');

-- CreateEnum
CREATE TYPE "ExerciseType" AS ENUM ('STRENGTH', 'CARDIO_STEADY', 'CARDIO_INTERVAL');

-- CreateEnum
CREATE TYPE "SetType" AS ENUM ('NORMAL', 'WARMUP', 'BACKOFF', 'INTERVAL');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Program" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "name" TEXT NOT NULL,
    "goal" "ProgramGoal",
    "length" INTEGER NOT NULL,
    "days" INTEGER NOT NULL,
    "currentWeekId" TEXT,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "aiPlanJson" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Program_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Week" (
    "id" TEXT NOT NULL,
    "programId" TEXT NOT NULL,
    "weekNumber" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Week_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Workout" (
    "id" TEXT NOT NULL,
    "weekId" TEXT NOT NULL,
    "dayNumber" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "mode" "WorkoutMode" NOT NULL DEFAULT 'STRENGTH',
    "focusMuscleGroups" TEXT[],
    "notes" TEXT,
    "currentExerciseId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Workout_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Exercise" (
    "id" TEXT NOT NULL,
    "workoutId" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "exerciseType" "ExerciseType" NOT NULL DEFAULT 'STRENGTH',
    "exerciseLibraryId" TEXT,
    "muscleGroupId" TEXT,
    "details" TEXT,
    "currentSetId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Exercise_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Set" (
    "id" TEXT NOT NULL,
    "exerciseId" TEXT NOT NULL,
    "setNumber" INTEGER NOT NULL,
    "type" "SetType" NOT NULL DEFAULT 'NORMAL',
    "targetReps" INTEGER,
    "targetWeightKg" DOUBLE PRECISION,
    "minWeightKg" DOUBLE PRECISION,
    "maxWeightKg" DOUBLE PRECISION,
    "rir" INTEGER,
    "rpe" DOUBLE PRECISION,
    "targetDurationSec" INTEGER,
    "targetDistanceM" INTEGER,
    "targetPaceSecPerKm" INTEGER,
    "intensityZone" TEXT,
    "actualReps" INTEGER,
    "actualWeightKg" DOUBLE PRECISION,
    "actualDurationSec" INTEGER,
    "actualDistanceM" INTEGER,
    "actualRpe" DOUBLE PRECISION,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Set_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Program_currentWeekId_key" ON "Program"("currentWeekId");

-- CreateIndex
CREATE UNIQUE INDEX "Week_programId_weekNumber_key" ON "Week"("programId", "weekNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Workout_currentExerciseId_key" ON "Workout"("currentExerciseId");

-- CreateIndex
CREATE UNIQUE INDEX "Workout_weekId_dayNumber_key" ON "Workout"("weekId", "dayNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Exercise_currentSetId_key" ON "Exercise"("currentSetId");

-- CreateIndex
CREATE UNIQUE INDEX "Exercise_workoutId_order_key" ON "Exercise"("workoutId", "order");

-- CreateIndex
CREATE UNIQUE INDEX "Set_exerciseId_setNumber_key" ON "Set"("exerciseId", "setNumber");

-- AddForeignKey
ALTER TABLE "Program" ADD CONSTRAINT "Program_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Program" ADD CONSTRAINT "Program_currentWeekId_fkey" FOREIGN KEY ("currentWeekId") REFERENCES "Week"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Week" ADD CONSTRAINT "Week_programId_fkey" FOREIGN KEY ("programId") REFERENCES "Program"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Workout" ADD CONSTRAINT "Workout_weekId_fkey" FOREIGN KEY ("weekId") REFERENCES "Week"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Workout" ADD CONSTRAINT "Workout_currentExerciseId_fkey" FOREIGN KEY ("currentExerciseId") REFERENCES "Exercise"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Exercise" ADD CONSTRAINT "Exercise_workoutId_fkey" FOREIGN KEY ("workoutId") REFERENCES "Workout"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Exercise" ADD CONSTRAINT "Exercise_currentSetId_fkey" FOREIGN KEY ("currentSetId") REFERENCES "Set"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Set" ADD CONSTRAINT "Set_exerciseId_fkey" FOREIGN KEY ("exerciseId") REFERENCES "Exercise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
