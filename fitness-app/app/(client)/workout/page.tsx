import WorkoutWrapper from "@/components/workout/WorkoutWrapper";
import { getProgram } from "@/server/program/getProgram";
import { getOrCreateCurrentUser } from "@/server/user/getOrCreateCurrentUser";
import { redirect } from "next/navigation";

export default async function WorkoutPage() {
  const user = await getOrCreateCurrentUser();

  if(!user.currentProgramId){
    redirect("/templates/plan");
  }

  redirect(`/programs/${user.currentProgramId}`)

  return (
    <div className="mx-auto h-full w-full max-w-5xl md:px-4 md:py-6">
      <WorkoutWrapper program={program} />
    </div>
  );
}
