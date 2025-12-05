import WorkoutWrapper from "@/components/workout/WorkoutWrapper";
import { getProgram } from "@/server/program/getProgram";
import { getOrCreateCurrentUser } from "@/server/user/getOrCreateCurrentUser";
import { redirect } from "next/navigation";

export default async function WorkoutPage({
  params,
}: {
  params: { id: string };
}) {
  const user = await getOrCreateCurrentUser();

    const { id } = await params;

  const program = await getProgram(id);

  if (!program) {
    return redirect("/programs"); // Not found or unauthorized
  }

  return (
    <div className="mx-auto h-full w-full max-w-5xl md:px-4 md:py-6">
      <WorkoutWrapper program={program} />
    </div>
  );
}
