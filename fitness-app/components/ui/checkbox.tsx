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
  const base =
    "h-4 w-4 rounded border cursor-pointer transition-all accent-black";
  const normalBorder = "border-gray-300 focus:ring-2 focus:ring-black/20";
  const errorBorder = "border-red-500 focus:ring-2 focus:ring-red-500/20";

  const final =
    base + " " + (error ? errorBorder : normalBorder) + " " + className;

  return (
    <label className="flex items-start gap-2 cursor-pointer select-none">
      <input type="checkbox" className={final} {...props} />

      <div className="flex flex-col leading-none">
        {label && (
          <span className="text-sm font-medium text-gray-800">{label}</span>
        )}
        {hint && !error && (
          <span className="text-xs text-gray-500">{hint}</span>
        )}
        {error && <span className="text-xs text-red-600">{error}</span>}
      </div>
    </label>
  );
}
