import * as React from "react";
import { ClientSidebar } from "@/components/navbar/client-sidebar";

export default async function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-slate-50">
      {/* Left: sidebar */}
      <ClientSidebar />

      {/* Right: main content */}
      <main className="flex-1 overflow-y-auto overflow-x-auto py-2">
        {children}
      </main>
    </div>
  );
}
