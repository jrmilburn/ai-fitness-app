import { FlaskConical, Pencil } from "lucide-react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default async function PlanPage() {
  return (
    <div className="mx-auto flex h-full max-w-2xl flex-col px-6 py-6">
      <ListSection title="Plan a program">
        <ListItem
          title="Build with AI"
          description="Use an AI prompt to automatically create a tailored program."
          href="/templates/plan/ai"
          icon={<FlaskConical className="h-5 w-5" />}
        />

        <ListItem
          title="Start from scratch"
          description="Create a completely custom program with no preset structure."
          href="/templates/new"
          icon={<Pencil className="h-5 w-5" />}
        />
      </ListSection>
    </div>
  );
}

export function ListSection({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4">
      {title && (
        <div className="space-y-1">
          <h2 className="text-xl font-semibold text-zinc-100">
            {title}
          </h2>
          <p className="text-xs text-zinc-400">
            Choose how you want to design your next training block.
          </p>
        </div>
      )}
      {children}
    </div>
  );
}

export function ListItem({
  title,
  description,
  href,
  icon,
}: {
  title: string;
  description?: string;
  href: string;
  icon?: React.ReactNode;
}) {
  return (
    <Link href={href}>
      <div
        className={cn(
          "flex w-full items-center gap-4 rounded-lg border border-[#2E2E32] bg-[#18181B] px-4 py-4 transition-all",
          "hover:border-[#A64DFF]/70 hover:bg-[#2A173F]/40 cursor-pointer"
        )}
      >
        {/* Icon */}
        {icon && (
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#2A173F]/40 text-[#A64DFF]">
            {icon}
          </div>
        )}

        {/* Text content */}
        <div className="flex-1">
          <p className="text-sm font-medium text-zinc-100">{title}</p>
          {description && (
            <p className="mt-1 text-xs text-zinc-400">{description}</p>
          )}
        </div>

        {/* Right Chevron */}
        <ChevronRight className="h-4 w-4 text-zinc-500 transition-all group-hover:translate-x-[2px]" />
      </div>
    </Link>
  );
}
