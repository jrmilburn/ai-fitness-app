import type { 
    Prisma
} from "@prisma/client";

export type ProgramWithRelations = Prisma.ProgramGetPayload<{
  include: {
    user: true; // optional, but often handy
    weeks: {
      include: {
        workouts: {
          include: {
            exercises: {
              include: {
                sets: true;
                template: true
                muscleGroup: true;
              };
            };
          };
        };
      };
    };
  };
}>;