"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  SignOutButton,
  UserButton,
} from "@clerk/nextjs";
import { useSubscription } from "@clerk/clerk-react/experimental";
import { cn } from "@/lib/utils";
import {
  CalendarDays,
  Dumbbell,
  MoreHorizontal,
  X,
  Sparkles,
} from "lucide-react";
import { useUser } from "@clerk/nextjs";

type ClientSidebarProps = {
  currentProgramId?: string | null;
  showInsights?: boolean;
};

type NavItem = {
  key: "workout" | "programs" | "templates" | "exercises" | "insights";
  label: string;
  short: string;
  icon?: React.ElementType;
};

export function ClientSidebar({
  currentProgramId,
  showInsights = false,
}: ClientSidebarProps) {
  const pathname = usePathname();
  const [moreOpen, setMoreOpen] = React.useState(false);
  const { data: subscription } = useSubscription();
  const { user } = useUser();

  const accountLabel =
    user?.fullName ??
    [user?.firstName, user?.lastName].filter(Boolean).join(" ") ??
    user?.username ??
    user?.primaryEmailAddress?.emailAddress ??
    "Account";

  const currentProgramHref = currentProgramId
    ? `/programs/${currentProgramId}`
    : "/programs";

  const isWorkoutActive = pathname === currentProgramHref;
  const isProgramsActive =
    pathname.startsWith("/programs") && !isWorkoutActive;

  const getHrefForItem = (key: NavItem["key"]) => {
    switch (key) {
      case "workout":
        return currentProgramHref;
      case "programs":
        return "/programs";
      case "templates":
        return "/templates";
      case "exercises":
        return "/exercises";
      case "insights":
        return "/insights";
      default:
        return "/";
    }
  };

  const isItemActive = (key: NavItem["key"], href: string) => {
    if (key === "workout") return isWorkoutActive;
    if (key === "programs") return isProgramsActive;
    if (key === "insights") return pathname === "/insights" || pathname.startsWith("/insights/");
    return pathname.startsWith(href);
  };

  const hasActiveSubscription =
    subscription?.status === "active" ||
    subscription?.subscriptionItems?.some(
      (item) => item.status === "active" || item.status === "upcoming"
    );

  const billingCta = hasActiveSubscription
    ? { label: "Billing", href: "/billing" }
    : { label: "Upgrade", href: "/pricing" };

  const navItems: NavItem[] = [
    { key: "workout", label: "Current workout", short: "Workout", icon: CalendarDays },
    { key: "programs", label: "Programs", short: "Programs", icon: Dumbbell },
    { key: "templates", label: "Templates", short: "Templates" },
    { key: "exercises", label: "Exercises", short: "Exercises" },
    ...(showInsights
      ? [{ key: "insights", label: "AI Insights", short: "Insights", icon: Sparkles }]
      : []),
  ];

  return (
    <>
      {/* DESKTOP SIDEBAR */}
      <aside className="hidden h-screen w-64 flex-col border-r border-[var(--border-strong)] bg-[var(--surface-tertiary)] text-[var(--text-strong)] md:flex">
        <div className="flex h-16 items-center border-b border-[var(--border-strong)] px-4">
          <div className="h-8 w-8">
            <Image src="/logo.png" height={256} width={256} alt="logo" />
          </div>
        </div>

        <nav className="flex-1 space-y-1 px-2 py-4">
          {navItems.map((item) => {
            const href = getHrefForItem(item.key);
            const active = isItemActive(item.key, href);
            const Icon = item.icon;

            return (
              <Link key={item.key} href={href} prefetch>
                <button
                  className={cn(
                    "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors border",
                    "hover:bg-[var(--surface-secondary)] hover:text-[var(--text-strong)] cursor-pointer",
                    active
                      ? "bg-[var(--surface-secondary)] text-[var(--text-strong)] border-[#A64DFF]"
                      : "text-[var(--text-muted)] border-transparent"
                  )}
                >
                  {Icon ? (
                    <Icon
                      className={cn(
                        "h-4 w-4 shrink-0",
                        item.key === "insights"
                          ? active
                            ? "text-[#A64DFF]"
                            : "text-[var(--text-muted)]"
                          : undefined
                      )}
                    />
                  ) : (
                    <span className="h-4 w-4 shrink-0" />
                  )}
                  <span>{item.label}</span>
                </button>
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-[var(--border-strong)] px-4 py-4">
          <SignedOut>
            <div className="flex flex-col gap-2">
              <SignInButton>
                <button className="w-full rounded-md border border-[var(--border-strong)] bg-[var(--surface-secondary)] px-3 py-2 text-sm font-medium text-[var(--text-strong)] hover:bg-[var(--surface-accent)]">
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
            <div className="space-y-3">
              <div className="flex gap-2">
                <Link href={billingCta.href} prefetch className="flex-1 w-full">
                  <button className="flex-1 w-full rounded-md border border-[var(--border-strong)] bg-[var(--surface-secondary)] px-3 py-2 text-xs font-medium text-[var(--text-strong)] hover:bg-[var(--surface-accent)] cursor-pointer">
                    {billingCta.label}
                  </button>
                </Link>

                <SignOutButton redirectUrl="/">
                  <button className="flex-1 rounded-md w-full border border-[var(--border-strong)] bg-transparent px-3 py-2 text-xs font-medium text-[var(--text-muted)] hover:bg-[var(--surface-secondary)] hover:text-[var(--text-strong)] cursor-pointer">
                    Sign out
                  </button>
                </SignOutButton>
              </div>

              <div className="flex items-center justify-between gap-2">
                <span
                  className="min-w-0 max-w-[160px] truncate text-xs text-[var(--text-muted)]"
                  title={accountLabel}
                >
                  {accountLabel}
                </span>
                <UserButton />
              </div>
            </div>
          </SignedIn>
        </div>
      </aside>

      {/* MOBILE BOTTOM NAV */}
      <nav className="fixed bottom-0 left-0 right-0 z-[1] flex items-center justify-around border-t border-[var(--border-strong)] bg-[var(--surface-secondary)] px-4 py-2 md:hidden">
        <Link href={currentProgramHref} prefetch>
          <button
            className={cn(
              "flex flex-col items-center gap-1 text-[11px] font-medium transition-colors",
              isWorkoutActive ? "text-[#A64DFF]" : "text-[var(--text-muted)]"
            )}
          >
            <CalendarDays className="h-5 w-5" />
            <span>Workout</span>
          </button>
        </Link>

        <Link href="/programs" prefetch>
          <button
            className={cn(
              "flex flex-col items-center gap-1 text-[11px] font-medium transition-colors",
              isProgramsActive ? "text-[#A64DFF]" : "text-[var(--text-muted)]"
            )}
          >
            <Dumbbell className="h-5 w-5" />
            <span>Programs</span>
          </button>
        </Link>

        <button
          type="button"
          onClick={() => setMoreOpen(true)}
          className="flex flex-col items-center gap-1 text-[11px] font-medium text-[var(--text-muted)] transition-colors hover:text-[var(--text-strong)]"
        >
          <MoreHorizontal className="h-5 w-5" />
          <span>More</span>
        </button>
      </nav>

      {/* MOBILE "MORE" SHEET */}
      <div
        className={cn(
          "pointer-events-none fixed inset-0 z-[10001] transform transition-transform duration-200 md:hidden",
          moreOpen ? "pointer-events-auto translate-x-0" : "translate-x-full"
        )}
      >
        <div
          className="absolute inset-0 bg-black/60"
          onClick={() => setMoreOpen(false)}
        />

        <div className="absolute right-0 top-0 flex h-full w-full flex-col bg-[var(--surface-primary)] px-6 py-6">
          <div className="mb-8 flex items-center justify-between">
            <div className="space-y-1">
              <div className="text-xl font-semibold text-[var(--text-strong)]">
                SP
              </div>
              <p className="text-xs uppercase tracking-wide text-[var(--text-muted)]">
                Studio Parallel
              </p>
            </div>
            <button
              type="button"
              onClick={() => setMoreOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--surface-secondary)] text-[var(--text-muted)] hover:bg-[var(--surface-tertiary)]"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="flex-1 space-y-4">
            <div className="space-y-2">
              {navItems.map((item) => {
                const href = getHrefForItem(item.key);
                const active = isItemActive(item.key, href);
                const Icon = item.icon;

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
                          ? "bg-[var(--surface-secondary)] text-[var(--text-strong)] border-[#A64DFF]"
                          : "bg-transparent text-[var(--text-muted)] border-transparent hover:bg-[var(--surface-accent)]"
                      )}
                    >
                      <div className="flex items-center gap-3">
                        {Icon ? (
                          <Icon
                            className={cn(
                              "h-4 w-4 shrink-0",
                              item.key === "insights"
                                ? active
                                  ? "text-[#A64DFF]"
                                  : "text-[var(--text-muted)]"
                                : undefined
                            )}
                          />
                        ) : (
                          <span className="h-4 w-4 shrink-0" />
                        )}
                        <span>{item.label}</span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            <div className="mt-6 space-y-3 border-t border-[var(--border-strong)] pt-4">
              <SignedOut>
                <div className="flex flex-col gap-2">
                  <SignInButton>
                    <button className="w-full rounded-md border border-[var(--border-strong)] bg-[var(--surface-secondary)] px-3 py-2 text-sm font-medium text-[var(--text-strong)] hover:bg-[var(--surface-accent)]">
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
                <div className="space-y-3">
                  <div className="flex gap-2">
                    <Link
                      href={billingCta.href}
                      prefetch
                      onClick={() => setMoreOpen(false)}
                      className="flex-1 w-full"
                    >
                      <div className="w-full rounded-md border border-[var(--border-strong)] bg-[var(--surface-secondary)] px-3 py-2 text-xs font-medium text-[var(--text-strong)] hover:bg-[var(--surface-accent)]">
                        {billingCta.label}
                      </div>
                    </Link>

                    <SignOutButton redirectUrl="/">
                      <button className="flex-1 rounded-md border border-[var(--border-strong)] bg-transparent px-3 py-2 text-xs font-medium text-[var(--text-muted)] hover:bg-[var(--surface-secondary)] hover:text-[var(--text-strong)]">
                        Sign out
                      </button>
                    </SignOutButton>
                  </div>

                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs text-[var(--text-muted)]">
                      Signed in
                    </span>
                    <UserButton />
                  </div>
                </div>
              </SignedIn>
            </div>
          </div>

          <div className="mt-4 text-[11px] text-[var(--text-muted)]">
            Version 0.1 • SP Fitness
          </div>
        </div>
      </div>
    </>
  );
}
