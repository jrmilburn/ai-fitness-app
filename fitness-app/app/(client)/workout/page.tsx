import { getOrCreateCurrentUser } from "@/server/users/getOrCreateCurrentUser";
import { redirect } from "next/navigation";

export default async function WorkoutPage() {
  const user = await getOrCreateCurrentUser();

  if(!user.currentProgramId){
    redirect("/templates/plan");
  }

  redirect(`/programs/${user.currentProgramId}`)

  return (
    <div className="mx-auto h-full w-full max-w-5xl md:px-4 md:py-6">
    </div>
  );
}
