"use client";

import * as React from "react";
import type { ProgramTemplate } from "@prisma/client";
import { ChevronRight, Trash2 } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { deleteTemplate } from "@/server/programTemplate/deleteTemplate";
import { useRouter } from "next/navigation";

type TemplateListProps = {
  programs: ProgramTemplate[];
};

export default function TemplateList({ programs }: TemplateListProps) {
  const [activeTab, setActiveTab] = React.useState<"sp" | "saved">("sp");

  // Split into SP templates and user-saved templates
  const spTemplates = programs.filter((p) => p.sptemplate === true);
  const savedTemplates = programs.filter((p) => !p.sptemplate);

  const visiblePrograms =
    activeTab === "sp" ? spTemplates : savedTemplates;

  return (
    <div className="flex w-full max-w-2xl flex-col gap-4">
      {/* Header */}
      <div className="flex items-center justify-between px-4">
        <h3 className="text-lg text-[var(--text-strong)]">Templates</h3>
        <Link href="/templates/plan">
          <Button className="rounded-md bg-[#A64DFF] px-3 py-1.5 text-xs font-medium text-white shadow-sm transition-colors hover:bg-[#B56BFF]">
            New +
          </Button>
        </Link>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 px-4 md:px-0">
        <button
          type="button"
          onClick={() => setActiveTab("sp")}
          className={[
            "flex-1 rounded-full px-3 py-2 text-xs font-medium transition-colors cursor-pointer",
            activeTab === "sp"
              ? "text-[var(--text-strong)] border border-[#A64DFF]"
              : "bg-[var(--surface-secondary)] text-[var(--text-muted)] border border-[var(--border-strong)] hover:bg-[var(--surface-accent)]/40",
          ].join(" ")}
        >
          SP Templates
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("saved")}
          className={[
            "flex-1 rounded-full px-3 py-2 text-xs font-medium transition-colors cursor-pointer",
            activeTab === "saved"
              ? "text-[var(--text-strong)] border border-[#A64DFF]"
              : "bg-[var(--surface-secondary)] text-[var(--text-muted)] border border-[var(--border-strong)] hover:bg-[var(--surface-accent)]/40",
          ].join(" ")}
        >
          Saved templates
        </button>
      </div>

      {/* Empty state (per tab) */}
      {visiblePrograms.length === 0 && (
        <p className="mt-2 px-4 text-sm text-[var(--text-muted)] md:px-0">
          {activeTab === "sp"
            ? "No SP templates available yet."
            : "You have no saved templates yet. Create one to get started."}
        </p>
      )}

      {/* List */}
      <div className="flex flex-col md:gap-2">
        {visiblePrograms.map((program) => (
          <ProgramListItem
            key={program.id}
            program={program}
            allowDelete={activeTab === "saved"}
          />
        ))}
      </div>
    </div>
  );
}

function ProgramListItem({
  program,
  allowDelete,
}: {
  program: ProgramTemplate;
  allowDelete: boolean;
}) {
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
        href={`/templates/new?templateId=${program.id}`}
        className="flex w-full items-center justify-between rounded-lg border border-[var(--border-strong)] bg-[var(--surface-secondary)] px-4 py-4 pr-12 transition-all hover:border-[#A64DFF]/60 hover:bg-[var(--surface-accent)]/40"
      >
        <div className="flex flex-col gap-2">
          <h3 className="h-8 max-w-[320px] truncate text-md font-medium text-[var(--text-strong)]">
            {program.name}
          </h3>

          <div className="flex gap-3 text-[0.7rem] uppercase tracking-wide text-[var(--text-strong)]">
            <span>
              {program.weeks} weeks, {program.days} days
            </span>
          </div>
        </div>

        <ChevronRight
          width={16}
          className="text-[var(--text-strong)] transition-all group-hover:translate-x-[3px] group-hover:text-[var(--text-muted)]"
        />
      </Link>

      {/* Delete button – only for saved templates */}
      {allowDelete && (
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={handleDelete}
          disabled={deleting}
          className={`
            absolute right-2 top-1/2 -translate-y-1/2
            hidden h-8 w-8 items-center justify-center rounded-full
            text-[var(--text-muted)] hover:bg-red-500/10 hover:text-red-400
            group-hover:flex
          `}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
}
