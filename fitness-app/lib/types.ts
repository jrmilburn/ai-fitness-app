import { Prisma } from "@/generated/prisma/client";

// Program -> Weeks -> Workouts -> Exercises -> Sets (+ some relations)
export type ProgramWithAllRelations = Prisma.ProgramGetPayload<{
  include: {
    weeks: {
      include: {
        workouts: {
          include: {
            exercises: {
              include: {
                sets: true;
                muscleGroup: true;
                template: true;
                currentSet: true;
              };
            };
            currentExercise: true;
          };
        };
      };
    };
    currentWeek: {
      include: {
        workouts: {
          include: {
            exercises: {
              include: {
                sets: true;
                muscleGroup: true;
                template: true;
                currentSet: true;
              };
            };
            currentExercise: true;
          };
        };
      };
    };
  };
}>;

export type WeekWithAllRelations = Prisma.WeekGetPayload<{
    include: {
        workouts: {
          include: {
            exercises: {
              include: {
                sets: true;
                muscleGroup: true;
                template: true;
                currentSet: true;
              };
            };
            currentExercise: true;
          };
        };
      };
}>;

export type WorkoutWithAllRelations = Prisma.WorkoutGetPayload<{
        include: {
            exercises: {
              include: {
                sets: true;
                muscleGroup: true;
                template: true;
                currentSet: true;
              };
            };
            currentExercise: true;
        };
}>;

export type ExerciseWithAllRelations = Prisma.ExerciseGetPayload<{
    include: {
      sets: true;
      muscleGroup: true;
      template: true;
      currentSet: true;
    };
}>;
