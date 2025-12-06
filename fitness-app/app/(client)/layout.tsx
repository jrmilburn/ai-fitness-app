import * as React from "react";
import { ClientSidebar } from "@/components/navbar/client-sidebar";
import { getOrCreateCurrentUser } from "@/server/user/getOrCreateCurrentUser";

export default async function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const user = await getOrCreateCurrentUser();

  return (
    <div className="flex h-screen bg-[#050509] text-zinc-50">
      {/* Sidebar (desktop) + mobile nav logic inside */}
      <ClientSidebar 
        currentProgramId={user.currentProgramId}
      />

      {/* Main content */}
      <main className="flex-1 overflow-y-auto overflow-x-auto pb-10 md:px-8 md:pb-6">
        {children}
      </main>
    </div>
  );
}
