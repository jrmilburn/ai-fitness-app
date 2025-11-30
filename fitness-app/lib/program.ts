import type { 
    Prisma
} from "@/generated/prisma";

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
                template: {
                  include: {
                    muscleGroup: true;
                  };
                };
                muscleGroup: true;
              };
            };
          };
        };
      };
    };
  };
}>;