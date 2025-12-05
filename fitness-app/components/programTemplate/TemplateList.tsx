"use client";

import type { Program, User } from "@prisma/client";
import { ChevronRight, Trash2 } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { deleteTemplate } from "@/server/exerciseTemplate/deleteTemplate";
import { useRouter } from "next/navigation";
import * as React from "react";
import { getOrCreateCurrentUser } from "@/server/user/getOrCreateCurrentUser";

export default function TemplateList({ programs }: { programs: Program[] }) {
    
  return (
    <div className="w-full max-w-2xl flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center justify-between px-4">
        <h3 className="text-lg font-semibold text-zinc-100">Templates</h3>
        <Link href="/programs/plan">
          <Button className="rounded-md bg-[#A64DFF] px-3 py-1.5 text-xs font-medium text-white shadow-sm transition-colors hover:bg-[#B56BFF]">
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
          <ProgramListItem key={program.id} program={program} user={user} />
        ))}
      </div>
    </div>
  );
}

function ProgramListItem({ program }: { program: Program }) {
  const router = useRouter();
  const [deleting, setDeleting] = React.useState(false);

  const handleDelete = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault(); // prevent Link navigation
    e.stopPropagation();

    if (deleting) return;
    setDeleting(true);

    try {
      await deleteTemplate(program.id);
      router.refresh();
    } catch (err) {
      console.error("Failed to delete program/template", err);
      setDeleting(false);
    }
  };

  return (
    <div className="group relative">
      <Link
        href={`/programs/new?templateId=${program.id}`}
        className="flex w-full items-center justify-between rounded-lg border border-[#2E2E32] bg-[#18181B] px-4 py-4 pr-12 transition-all hover:border-[#A64DFF]/60 hover:bg-[#2A173F]/40"
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

      {/* Delete button – appears on hover */}
      <Button
        type="button"
        variant="ghost"
        size="icon"
        onClick={handleDelete}
        disabled={deleting}
        className={`
          absolute right-2 top-1/2 -translate-y-1/2
          hidden h-8 w-8 items-center justify-center rounded-full
          text-zinc-400 hover:text-red-400 hover:bg-red-500/10
          group-hover:flex
        `}
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
}
