import { getOrCreateCurrentUser } from "@/src/server/users/getOrCreateCurrentUser";
import { redirect } from "next/navigation";

export default async function Home() {

  const user = await getOrCreateCurrentUser()

  if(user.currentProgramId){
    redirect(`/programs/${user.currentProgramId}`)
  } else {
    redirect(`/programs`)
  }

  return (
    <main>
      
    </main>
  );
}
