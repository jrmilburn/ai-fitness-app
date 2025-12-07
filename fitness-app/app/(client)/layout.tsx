import * as React from "react";
import { ClientSidebar } from "@/shared/ui/client-sidebar";
import { getOrCreateCurrentUser } from "@/server/users/getOrCreateCurrentUser";
import { requireActiveSubscription } from "@/server/subscription/requireActiveSubscription";

export default async function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const user = await getOrCreateCurrentUser();
  await requireActiveSubscription();

  return (
    <div className="relative flex h-screen text-[var(--text-strong)]">
      {/* Sidebar (desktop) + mobile nav logic inside */}
      <ClientSidebar
        currentProgramId={user.currentProgramId}
      />

      {/* Main content */}
      <main className="flex-1 overflow-y-auto overflow-x-auto pb-10 md:px-8 md:pb-6 bg-[var(--surface-secondary)] z-[0]">
        {children}
      </main>
    </div>
  );
}
