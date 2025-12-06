"use client";

import * as React from "react";
import type { Program, User } from "@prisma/client";
import { MoreVertical } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Button } from "../ui/button";
import { deleteProgram } from "@/server/program/deleteProgram";
import { setCurrentProgram } from "@/server/program/setCurrent";

type ProgramWithTemplate = Program & {
  template: {
    id: string;
  };
};

export default function ProgramList({
  programs,
  user,
}: {
  programs: ProgramWithTemplate[];
  user: User;
}) {
  return (
    <div className="w-full max-w-2xl flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center justify-between px-4">
        <h3 className="text-lg text-[var(--text-strong)]">Programs</h3>
        <Link href="/templates/plan">
          <Button className="rounded-md bg-[#A64DFF] px-3 py-1.5 text-xs font-medium text-white shadow-sm transition-colors hover:bg-[#B56BFF]">
            New +
          </Button>
        </Link>
      </div>

      {/* Empty state */}
      {programs.length === 0 && (
        <p className="mt-2 text-sm text-[var(--text-muted)] px-4 md:px-0">
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

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

function ProgramListItem({
  program,
  user,
}: {
  program: ProgramWithTemplate;
  user: User;
}) {
  const router = useRouter();

  const [menuOpen, setMenuOpen] = React.useState(false);
  const [showDeleteModal, setShowDeleteModal] = React.useState(false);
  const [deleting, setDeleting] = React.useState(false);

  const isCurrent = program.id === user.currentProgramId;
  const isComplete = program.completed;

  const handleCopy = () => {
    setMenuOpen(false);
    router.push(`/templates/new?templateId=${program.template.id}`);
  };

  const handleSetCurrent = async () => {
    await setCurrentProgram(program.id);
    setMenuOpen(false);
    router.refresh();
  };

  const performDelete = async () => {
    setDeleting(true);
    try {
      await deleteProgram(program.id);
      setShowDeleteModal(false);
      router.refresh();
    } catch (err) {
      console.error("Failed to delete program", err);
    } finally {
      setDeleting(false);
    }
  };

  const handleDeleteClick = () => {
    if (isCurrent) {
      // Open modal instead of deleting immediately
      setShowDeleteModal(true);
    } else {
      // Not current → delete immediately
      performDelete();
    }
  };

  // Close dropdown when clicking outside
  React.useEffect(() => {
    if (!menuOpen) return;
    const close = () => setMenuOpen(false);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [menuOpen]);

  return (
    <div className="group relative">
      {/* Main row */}
      <Link
        href={`/programs/${program.id}`}
        className="flex w-full items-center justify-between rounded-lg border border-[var(--border-strong)] bg-[var(--surface-secondary)] px-4 py-4 pr-12 transition-all hover:border-[#A64DFF]/60 hover:bg-[var(--surface-accent)]/40"
      >
        <div className="flex flex-col gap-2 w-full">
          <div className="flex items-center gap-4 justify-between">
            <h3 className="text-md font-medium text-[var(--text-strong)] truncate max-w-[320px]">
              {program.name}
            </h3>

            {isCurrent && !isComplete && (
              <span className="rounded-full bg-[#A64DFF]/15 px-2 py-[2px] text-[10px] font-semibold uppercase tracking-wide text-[#D9B8FF]">
                Current
              </span>
            )}
            {isComplete && (
              <span className="rounded-full bg-[#22C55E]/15 px-2 py-[2px] text-[10px] font-semibold uppercase tracking-wide text-[#86EFAC]">
                Complete
              </span>
            )}
          </div>

          <div className="flex gap-3 text-[0.7rem] uppercase tracking-wide text-[var(--text-strong)]">
            <span>
              {program.length} weeks, {program.days} days
            </span>
          </div>
        </div>
      </Link>

      {/* Dropdown menu trigger */}
      <div className="absolute right-2 top-1/2 -translate-y-1/2 z-[50]">
        <Button
          variant="ghost"
          size="icon"
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            setMenuOpen((v) => !v);
          }}
          className="h-8 w-8 rounded-full text-[var(--text-muted)] hover:text-[var(--text-strong)]"
        >
          <MoreVertical className="h-4 w-4" />
        </Button>

        {menuOpen && (
          <div
            className="absolute right-0 top-9 min-w-[180px] rounded-md border border-[var(--border-strong)] bg-[var(--surface-tertiary)] py-1 text-xs text-[var(--text-strong)] shadow-lg z-[10000]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Set current */}
            <button
              disabled={isCurrent}
              onClick={handleSetCurrent}
              className="block w-full px-3 py-2 text-left text-[11px] hover:bg-[var(--surface-accent)] hover:text-[var(--text-strong)] disabled:opacity-50"
            >
              {isCurrent ? "Already current" : "Set as current"}
            </button>

            {/* Copy */}
            <button
              onClick={handleCopy}
              className="block w-full px-3 py-2 text-left text-[11px] hover:bg-[var(--surface-accent)] hover:text-[var(--text-strong)]"
            >
              Copy program
            </button>

            {/* Delete */}
            <button
              disabled={deleting}
              onClick={handleDeleteClick}
              className="block w-full px-3 py-2 text-left text-[11px] text-red-600 hover:bg-red-500/10 hover:text-red-600 disabled:opacity-60"
            >
              Delete program
            </button>
          </div>
        )}
      </div>

      {/* 🔥 Delete warning modal */}
      <AlertDialog open={showDeleteModal} onOpenChange={setShowDeleteModal}>
        <AlertDialogContent className="bg-[var(--surface-secondary)] border border-[var(--border-strong)]">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-[var(--text-strong)]">
              Delete current program?
            </AlertDialogTitle>
            <AlertDialogDescription className="text-[var(--text-muted)] text-sm">
              This is your current program. Deleting it will permanently remove
              your active workout data. This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel className="text-[var(--text-muted)] bg-[#2E2E32]">
              Cancel
            </AlertDialogCancel>

            <AlertDialogAction
              onClick={performDelete}
              className="bg-red-600 hover:bg-red-700"
            >
              {deleting ? "Deleting..." : "Delete program"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}


