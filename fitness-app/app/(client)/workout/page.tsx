import WorkoutWrapper from "@/components/workout/WorkoutWrapper";
import { getProgram } from "@/server/program/getProgram";
import { getOrCreateCurrentUser } from "@/server/user/getOrCreateCurrentUser";
import { redirect } from "next/navigation";

export default async function WorkoutPage() {
  const user = await getOrCreateCurrentUser();

  if (!user.currentProgramId) {
    return redirect("/programs");
  }

  const program = await getProgram(user.currentProgramId);

  return (
    <div className="mx-auto h-full w-full max-w-5xl px-4 py-6">
      <WorkoutWrapper program={program} />
    </div>
  );
}
