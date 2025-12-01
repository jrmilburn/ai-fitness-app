// components/navbar/client-sidebar.tsx
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
import { cn } from "@/lib/utils"; // or your own cn helper, or inline classes

const navItems = [
  { href: "/workout", label: "Current workout" },
  { href: "/programs", label: "Programs" },
];

export function ClientSidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-64 flex-col bg-slate-200 text-slate-900">
      {/* Top: brand/title */}
      <div className="flex h-16 items-center border-b border-slate-800 px-4">
        <span className="text-xl font-semibold tracking-tight">SP</span>
      </div>

      {/* Middle: nav links */}
      <nav className="flex-1 space-y-1 px-2 py-4">
        {navItems.map((item) => {
          const active = pathname.startsWith(item.href);
          return (
            <Link key={item.href} href={item.href} prefetch={true}>
              <button
                className={cn(
                  "flex w-full items-center rounded-md px-3 py-2 text-sm font-medium transition",
                  "hover:bg-slate-800 hover:text-white cursor-pointer",
                  active
                    ? "bg-slate-800 text-white"
                    : "text-slate-900"
                )}
              >
                {item.label}
              </button>
            </Link>
          );
        })}
      </nav>

      {/* Bottom: account / auth */}
      <div className="border-t border-slate-200 px-4 py-4">
        <SignedOut>
          <div className="flex flex-col gap-2">
            <SignInButton>
              <button className="w-full rounded-md bg-slate-200 px-3 py-2 text-sm font-medium hover:bg-slate-700">
                Sign in
              </button>
            </SignInButton>
            <SignUpButton>
              <button className="w-full rounded-md bg-[#6c47ff] px-3 py-2 text-sm font-medium text-white hover:opacity-90">
                Sign up
              </button>
            </SignUpButton>
          </div>
        </SignedOut>

        <SignedIn>
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs text-slate-400">Account</span>
            <UserButton />
          </div>
        </SignedIn>
      </div>
    </aside>
  );
}
