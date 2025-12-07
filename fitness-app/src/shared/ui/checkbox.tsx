"use client";

import * as React from "react";

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
}

export function Checkbox({
  label,
  error,
  hint,
  className = "",
  ...props
}: CheckboxProps) {
  // base styling
  const base =
    "h-5 w-5 rounded-md cursor-pointer transition-all appearance-none";

  // normal state using theme variables for light mode
  const normal =
    "bg-[var(--surface-secondary)] border border-[var(--border-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A64DFF]/30";

  // checked state overrides (accent color)
  const checked =
    "checked:bg-[#A64DFF] checked:border-[#A64DFF] checked:hover:bg-[#A64DFF]/90";

  const errorState =
    "border-red-500 focus-visible:ring-red-500/40 checked:bg-red-600 checked:border-red-600";

  const final =
    [
      base,
      error ? errorState : normal,
      checked,
      className,
    ].join(" ");

  return (
    <label className="flex items-start gap-2 cursor-pointer select-none">
      {/* checkbox */}
      <input type="checkbox" className={final} {...props} />

      {/* label + hint */}
      <div className="flex flex-col leading-none">
        {label && (
          <span className="text-sm font-medium text-[var(--text-strong)]">{label}</span>
        )}

        {!error && hint && (
          <span className="text-xs text-[var(--text-muted)]">{hint}</span>
        )}

        {error && <span className="text-xs text-red-500">{error}</span>}
      </div>
    </label>
  );
}
