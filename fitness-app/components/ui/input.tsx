"use client";

import * as React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  className: string;
}

export function Input({
  label,
  error,
  hint,
  className = "",
  ...props
}: InputProps) {
  // build className manually
  const base =
    "w-full px-3 py-2 rounded-md border bg-white text-sm font-medium outline-none transition-all";
  const normalBorder = "border-gray-300 focus:border-black focus:ring-2 focus:ring-black/5";
  const errorBorder = "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/10";

  const finalClass =
    base + " " + (error ? errorBorder : normalBorder) + " " + className;

  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <input className={finalClass} {...props} />

      {error && <p className="text-xs text-red-600">{error}</p>}
      {!error && hint && <p className="text-xs text-gray-500">{hint}</p>}
    </div>
  );
}
