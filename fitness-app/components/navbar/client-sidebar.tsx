"use client";

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

const navItems = [
  { href: "/workout", label: "Current workout" },
  { href: "/programs", label: "Programs" },
];

export function ClientSidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-64 flex-col border-r border-[#2E2E32] bg-[#101015] text-zinc-100">
      {/* Top: brand/title */}
      <div className="flex h-16 items-center border-b border-[#2E2E32] px-5">
        <span className="text-xl font-semibold tracking-tight text-zinc-50">
          SP
        </span>
      </div>

      {/* Middle: nav links */}
      <nav className="flex-1 space-y-1 px-3 py-4">
        {navItems.map((item) => {
          const active = pathname.startsWith(item.href);

          return (
            <Link key={item.href} href={item.href} prefetch={true}>
              <button
                className={cn(
                  "flex w-full items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  "cursor-pointer",
                  active
                    ? "border border-[#A64DFF]/70 bg-[#2A173F] text-zinc-50 shadow-sm"
                    : "text-zinc-400 hover:bg-[#18181B] hover:text-zinc-100"
                )}
              >
                {item.label}
              </button>
            </Link>
          );
        })}
      </nav>

      {/* Bottom: account / auth */}
      <div className="border-t border-[#2E2E32] px-4 py-4">
        <SignedOut>
          <div className="flex flex-col gap-2">
            <SignInButton>
              <button className="w-full rounded-md border border-[#2E2E32] bg-[#18181B] px-3 py-2 text-xs font-medium text-zinc-100 transition-colors hover:border-[#A64DFF] hover:bg-[#2A173F] hover:text-white">
                Sign in
              </button>
            </SignInButton>
            <SignUpButton>
              <button className="w-full rounded-md bg-[#A64DFF] px-3 py-2 text-xs font-medium text-white shadow-sm transition-colors hover:bg-[#B56BFF]">
                Sign up
              </button>
            </SignUpButton>
          </div>
        </SignedOut>

        <SignedIn>
          <div className="flex items-center justify-between gap-2">
            <span className="text-[0.7rem] uppercase tracking-wide text-zinc-500">
              Account
            </span>
            <UserButton />
          </div>
        </SignedIn>
      </div>
    </aside>
  );
}
