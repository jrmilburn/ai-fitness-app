import WorkoutWrapper from "@/components/workout/WorkoutWrapper";
import { getProgram } from "@/server/program/getProgram";
import { getOrCreateCurrentUser } from "@/server/user/getOrCreateCurrentUser";
import { redirect } from "next/navigation";

type WorkoutPageProps = {
  params: { id: string };
  searchParams: {
    workoutId?: string;
  };
};

export default async function WorkoutPage({ params, searchParams }: WorkoutPageProps) {
  const user = await getOrCreateCurrentUser();
  const { id } = await params; // no need to await

  const program = await getProgram(id);
  const { workoutId } = await searchParams;

  if (!program) {
    redirect("/programs");
  }

  return (
    <div className="mx-auto h-full w-full max-w-5xl md:px-4 md:py-6">
      <WorkoutWrapper
        program={program}
        workoutId={workoutId}
      />
    </div>
  );
}
