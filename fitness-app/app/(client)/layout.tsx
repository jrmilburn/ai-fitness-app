import * as React from "react";
import { ClientSidebar } from "@/components/navbar/client-sidebar";

export default async function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-[#050509] text-zinc-50">
      {/* Left: sidebar */}
      <ClientSidebar />

      {/* Right: main content */}
      <main className="flex-1 overflow-y-auto overflow-x-hidden p-4">
        {/* Center the main app surface */}
        <div className="mx-auto h-full w-full max-w-6xl">
          {children}
        </div>
      </main>
    </div>
  );
}
