// components/exercise/ExerciseTemplateButton.tsx
"use client";

import type { ExerciseTemplate } from "@/generated/prisma";
import { ChevronRight } from "lucide-react";

type ExerciseTemplateButtonProps = {
  template: ExerciseTemplate;
  onSelect: () => void;
  onShowInfo: () => void;
};

export function ExerciseTemplateButton({
  template,
  onSelect,
  onShowInfo,
}: ExerciseTemplateButtonProps) {
  return (
    <div className="w-full overflow-hidden rounded-md border border-input bg-background shadow-sm">
      <div className="flex items-stretch">
        {/* Main clickable area: selects exercise */}
        <button
          type="button"
          onClick={onSelect}
          className="flex-1 px-3 py-2 text-left hover:bg-muted transition-colors"
        >
          <div className="font-medium text-sm">{template.name}</div>
          {template.description && (
            <div className="text-xs text-muted-foreground line-clamp-2 mt-0.5">
              {template.description}
            </div>
          )}
        </button>

        {/* Right chevron: opens detail view */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onShowInfo();
          }}
          className="flex items-center justify-center px-2 border-l border-input hover:bg-muted transition-colors"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
