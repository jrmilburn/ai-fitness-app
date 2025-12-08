import { getOrCreateCurrentUser } from "@/src/server/users/getOrCreateCurrentUser";
import { redirect } from "next/navigation";

export default async function Home() {

  const user = await getOrCreateCurrentUser()

  redirect(`/programs${user.currentProgramId}`)

  return (
    <main>
      
    </main>
  );
}
