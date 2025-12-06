import { FlaskConical, Pencil, LayoutTemplate } from "lucide-react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default async function PlanPage() {
  return (
    <div className="mx-auto flex h-full max-w-2xl flex-col py-6 text-[var(--text-strong)]">
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

        <ListItem
          title="Use a template"
          description="Start with a pre made template."
          href="/templates"
          icon={<LayoutTemplate className="h-5 w-5" />}
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
          <h2 className="text-lg text-[var(--text-strong)]">
            {title}
          </h2>
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
          "group flex w-full items-center gap-4 rounded-lg border border-[var(--border-strong)] bg-[var(--surface-secondary)] px-4 py-4 transition-all",
          "hover:border-[#A64DFF]/70 hover:bg-[var(--surface-accent)] cursor-pointer"
        )}
      >
        {/* Icon */}
        {icon && (
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--surface-accent)] text-[#A64DFF]">
            {icon}
          </div>
        )}

        {/* Text content */}
        <div className="flex-1">
          <p className="text-sm font-medium text-[var(--text-strong)]">{title}</p>
          {description && <p className="mt-1 text-xs text-[var(--text-muted)]">{description}</p>}
        </div>

        {/* Right Chevron */}
        <ChevronRight className="h-4 w-4 text-[var(--text-muted)] transition-all group-hover:translate-x-[2px] group-hover:text-[#A64DFF]" />
      </div>
    </Link>
  );
}
