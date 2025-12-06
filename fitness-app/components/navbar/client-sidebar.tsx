"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { cn } from "@/lib/utils";

import { CalendarDays, Dumbbell, MoreHorizontal, X } from "lucide-react";

type ClientSidebarProps = {
  currentProgramId?: string | null;
};

const navItems = [
  { key: "workout", label: "Current workout", short: "Workout" },
  { key: "programs", label: "Programs", short: "Programs" },
  { key: "templates", label: "Templates", short: "Templates" },
];

export function ClientSidebar({ currentProgramId }: ClientSidebarProps) {
  const pathname = usePathname();
  const [moreOpen, setMoreOpen] = React.useState(false);

  // Where the workout button should go
  const currentProgramHref = currentProgramId
    ? `/programs/${currentProgramId}`
    : "/programs";

  const isWorkoutActive = pathname === currentProgramHref;
  const isProgramsActive =
    pathname.startsWith("/programs") && !isWorkoutActive;

  const getHrefForItem = (key: string) => {
    switch (key) {
      case "workout":
        return currentProgramHref;
      case "programs":
        return "/programs";
      case "templates":
        return "/templates";
      default:
        return "/";
    }
  };

  const isItemActive = (key: string, href: string) => {
    if (key === "workout") return isWorkoutActive;
    if (key === "programs") return isProgramsActive;
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* DESKTOP SIDEBAR */}
      <aside className="hidden h-screen w-64 flex-col border-r border-[#2E2E32] bg-[#121214] text-zinc-50 md:flex">
        {/* Top brand */}
        <div className="flex h-16 items-center border-b border-[#2E2E32] px-4">
          <span className="text-xl font-semibold tracking-tight">SP</span>
        </div>

        {/* Nav links */}
        <nav className="flex-1 space-y-1 px-2 py-4">
          {navItems.map((item) => {
            const href = getHrefForItem(item.key);
            const active = isItemActive(item.key, href);

            return (
              <Link key={item.key} href={href} prefetch>
                <button
                  className={cn(
                    "flex w-full items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors border",
                    "hover:bg-[#1C1C1E] hover:text-zinc-50",
                    active
                      ? "bg-[#1C1C1E] text-zinc-50 border-[#A64DFF]"
                      : "text-zinc-300 border-transparent"
                  )}
                >
                  {item.label}
                </button>
              </Link>
            );
          })}
        </nav>

        {/* Bottom account area */}
        <div className="border-t border-[#2E2E32] px-4 py-4">
          <SignedOut>
            <div className="flex flex-col gap-2">
              <SignInButton>
                <button className="w-full rounded-md border border-[#2E2E32] bg-[#18181B] px-3 py-2 text-sm font-medium text-zinc-100 hover:bg-[#1F1F23]">
                  Sign in
                </button>
              </SignInButton>
              <SignUpButton>
                <button className="w-full rounded-md bg-[#A64DFF] px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#B56BFF]">
                  Sign up
                </button>
              </SignUpButton>
            </div>
          </SignedOut>

          <SignedIn>
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs text-zinc-400">Account</span>
              <UserButton />
            </div>
          </SignedIn>
        </div>
      </aside>

      {/* MOBILE BOTTOM NAV */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-around border-t border-[#2E2E32] bg-[#1C1C1E] px-4 py-2 md:hidden">
        {/* Workout */}
        <Link href={currentProgramHref} prefetch>
          <button
            className={cn(
              "flex flex-col items-center gap-1 text-[11px] font-medium transition-colors",
              isWorkoutActive ? "text-[#A64DFF]" : "text-zinc-400"
            )}
          >
            <CalendarDays className="h-5 w-5" />
            <span>Workout</span>
          </button>
        </Link>

        {/* Programs */}
        <Link href="/programs" prefetch>
          <button
            className={cn(
              "flex flex-col items-center gap-1 text-[11px] font-medium transition-colors",
              isProgramsActive ? "text-[#A64DFF]" : "text-zinc-400"
            )}
          >
            <Dumbbell className="h-5 w-5" />
            <span>Programs</span>
          </button>
        </Link>

        {/* More */}
        <button
          type="button"
          onClick={() => setMoreOpen(true)}
          className="flex flex-col items-center gap-1 text-[11px] font-medium text-zinc-400 transition-colors hover:text-zinc-200"
        >
          <MoreHorizontal className="h-5 w-5" />
          <span>More</span>
        </button>
      </nav>

      {/* MOBILE "MORE" SHEET */}
      <div
        className={cn(
          "pointer-events-none fixed inset-0 z-50 transform transition-transform duration-200 md:hidden",
          moreOpen ? "pointer-events-auto translate-x-0" : "translate-x-full"
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60"
          onClick={() => setMoreOpen(false)}
        />

        {/* Panel */}
        <div className="absolute right-0 top-0 flex h-full w-full flex-col bg-[#26262B] px-6 py-6">
          {/* Header */}
          <div className="mb-8 flex items-center justify-between">
            <div className="space-y-1">
              <div className="text-xl font-semibold text-white">SP</div>
              <p className="text-xs uppercase tracking-wide text-zinc-400">
                Studio Parallel
              </p>
            </div>
            <button
              type="button"
              onClick={() => setMoreOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#18181B] text-zinc-300 hover:bg-[#1C1C20]"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Nav section */}
          <div className="flex-1 space-y-4">
            <div className="space-y-2">
              {navItems.map((item) => {
                const href = getHrefForItem(item.key);
                const active = isItemActive(item.key, href);

                return (
                  <Link
                    key={item.key}
                    href={href}
                    prefetch
                    onClick={() => setMoreOpen(false)}
                  >
                    <div
                      className={cn(
                        "flex items-center justify-between rounded-lg px-3 py-3 text-sm font-medium transition-colors border",
                        active
                          ? "bg-[#1C1C1E] text-zinc-50 border-[#A64DFF]"
                          : "bg-transparent text-zinc-200 border-transparent hover:bg-[#33333A]"
                      )}
                    >
                      <span>{item.label}</span>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Auth / account block */}
            <div className="mt-6 border-t border-white/5 pt-4 space-y-3">
              <SignedOut>
                <div className="flex flex-col gap-2">
                  <SignInButton>
                    <button className="w-full rounded-md border border-[#2E2E32] bg-[#18181B] px-3 py-2 text-sm font-medium text-zinc-100 hover:bg-[#1F1F23]">
                      Sign in
                    </button>
                  </SignInButton>
                  <SignUpButton>
                    <button className="w-full rounded-md bg-[#A64DFF] px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#B56BFF]">
                      Sign up
                    </button>
                  </SignUpButton>
                </div>
              </SignedOut>

              <SignedIn>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs text-zinc-300">Signed in</span>
                  <UserButton />
                </div>
              </SignedIn>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-4 text-[11px] text-zinc-500">
            Version 0.1 • SP Fitness
          </div>
        </div>
      </div>
    </>
  );
}
