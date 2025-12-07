"use client";

import * as React from "react";

export type DropdownOption = {
  value: string;
  label: string;
};

export interface DropdownProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "onChange"> {
  label?: string;
  error?: string;
  hint?: string;
  options: DropdownOption[];
  placeholder?: string;
  onChange?: (value: string) => void;
}

export function Dropdown({
  label,
  error,
  hint,
  options,
  placeholder = "Select an option",
  className = "",
  value,
  onChange,
  ...rest
}: DropdownProps) {
  const base =
    "block w-full rounded-md border bg-white px-3 py-2 text-sm outline-none transition-all";
  const normal =
    "border-gray-300 focus:border-black focus:ring-2 focus:ring-black/5";
  const errored =
    "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/10";

  const finalClass = base + " " + (error ? errored : normal) + " " + className;

  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <select
        className={finalClass}
        value={value ?? ""}
        onChange={(e) => onChange?.(e.target.value)}
        {...rest}
      >
        {/* Placeholder option */}
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}

        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {error && <p className="text-xs text-red-600">{error}</p>}
      {!error && hint && <p className="text-xs text-gray-500">{hint}</p>}
    </div>
  );
}
