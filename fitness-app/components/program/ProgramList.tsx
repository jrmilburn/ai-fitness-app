"use client";

import type { Program } from "@/generated/prisma/client";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export default function ProgramList({ programs }: { programs: Program[] }) {
  return (
    <div className="w-full max-w-2xl flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center justify-between px-4">
        <h3 className="text-lg font-semibold text-zinc-100">Programs</h3>
        <Link href="/programs/plan">
          <Button
            className="rounded-md bg-[#A64DFF] px-3 py-1.5 text-xs font-medium text-white shadow-sm transition-colors hover:bg-[#B56BFF]"
          >
            New +
          </Button>
        </Link>
      </div>

      {/* Empty state */}
      {programs.length === 0 && (
        <p className="mt-2 text-sm text-zinc-400">
          You have no programs yet. Create one to get started.
        </p>
      )}

      {/* List */}
      <div className="flex flex-col md:gap-2">
        {programs.map((program) => (
          <ProgramListItem key={program.id} program={program} />
        ))}
      </div>
    </div>
  );
}

function ProgramListItem({ program }: { program: Program }) {

  console.log(program);

  return (
    <Link
      href={`/programs/new?templateId=${program.id}`}
      className="group flex w-full items-center justify-between rounded-lg border border-[#2E2E32] bg-[#18181B] px-4 py-4 transition-all hover:border-[#A64DFF]/60 hover:bg-[#2A173F]/40"
    >
      <div className="flex flex-col gap-2">
        <h3 className="text-md font-medium text-zinc-100 truncate max-w-[320px] h-8">
          {program.name}
        </h3>

        <div className="flex gap-3 text-[0.7rem] uppercase tracking-wide text-zinc-500">
          <span>
            {program.length} weeks, {program.days} days
          </span>
        </div>
      </div>

      <ChevronRight
        width={16}
        className="text-zinc-500 transition-all group-hover:translate-x-[3px] group-hover:text-zinc-300"
      />
    </Link>
  );
}
