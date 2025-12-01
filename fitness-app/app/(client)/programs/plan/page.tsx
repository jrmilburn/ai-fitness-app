
import { FlaskConical, Pencil } from "lucide-react"; // pick icons you like

export default async function PlanPage() {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white h-full">
      <ListSection title="Plan a program">
        <ListItem
          title="Build with AI"
          description="Use an AI prompt to automatically create a tailored program."
          href="/programs/plan/ai"
          icon={<FlaskConical className="h-6 w-6 text-purple-600" />}
        />

        <ListItem
          title="Start from scratch"
          description="Create a completely custom program with no preset structure."
          href="/programs/new"
          icon={<Pencil className="h-6 w-6 text-green-600" />}
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
    <div className="flex flex-col gap-2">
      {title && (
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
      )}
      {children}
    </div>
  );
}


import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils"; // optional

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
          "w-full rounded-xl border border-gray-200 bg-white px-4 py-4",
          "hover:bg-gray-100 transition cursor-pointer",
          "flex items-center gap-4"
        )}
      >
        {/* Icon */}
        {icon && (
          <div className="text-gray-600 flex-shrink-0">{icon}</div>
        )}

        {/* Text content */}
        <div className="flex-1">
          <p className="font-semibold text-gray-900">{title}</p>
          {description && (
            <p className="text-sm text-gray-500 mt-0.5">{description}</p>
          )}
        </div>

        {/* Right Chevron */}
        <ChevronRight className="h-5 w-5 text-gray-400" />
      </div>
    </Link>
  );
}


