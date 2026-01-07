import * as React from "react";
import { ClientSidebar } from "@/shared/ui/client-sidebar";
import { getOrCreateCurrentUser } from "@/server/users/getOrCreateCurrentUser";
import { requireActiveSubscription } from "@/server/subscription/requireActiveSubscription";
import { getInsightsEligibility } from "@/server/insights/getInsightsEligibility";

export default async function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const user = await getOrCreateCurrentUser();
  await requireActiveSubscription();
  const insightsEligibility = await getInsightsEligibility(user.id);

  return (
    <div className="relative flex h-screen text-[var(--text-strong)]">
      {/* Sidebar (desktop) + mobile nav logic inside */}
      <ClientSidebar
        currentProgramId={user.currentProgramId}
        showInsights={insightsEligibility.eligible}
      />

      {/* Main content */}
      <main className="flex-1 overflow-y-auto overflow-x-auto pb-10 md:px-8 md:pb-6 z-[0] mb-[58px] sm:mb-0">
        {children}
      </main>
    </div>
  );
}
