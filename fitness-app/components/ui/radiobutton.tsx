"use client";

import * as React from "react";

export type RadioOption = {
  value: string;
  label: string;
  description?: string;
};

export interface RadioGroupProps {
  label?: string;
  name: string;
  options: RadioOption[];
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  hint?: string;
  disabled?: boolean;
  direction?: "row" | "column"; // layout
  className?: string;
}

export function RadioGroup({
  label,
  name,
  options,
  value,
  onChange,
  error,
  hint,
  disabled,
  direction = "column",
  className = "",
}: RadioGroupProps) {
  const baseContainer = "flex w-full gap-2";
  const directionClass =
    direction === "row" ? "flex-row flex-wrap" : "flex-col";
  const containerClass = baseContainer + " " + directionClass + " " + className;

  const labelClass = "text-sm font-medium text-gray-700";
  const errorClass = "text-xs text-red-600";
  const hintClass = "text-xs text-gray-500";

  return (
    <div className="flex flex-col gap-2 w-full">
      {label && <span className={labelClass}>{label}</span>}

      <div className={containerClass}>
        {options.map((option) => {
          const checked = value === option.value;

          const outer =
            "flex items-start gap-2 rounded-md border px-3 py-2 cursor-pointer transition-colors text-sm";
          const normal =
            "border-gray-300 bg-white hover:border-black/70 hover:bg-black/[0.02]";
          const selected =
            "border-black bg-black/[0.03]";
          const disabledCls = disabled ? "opacity-50 cursor-not-allowed" : "";

          const outerClass =
            outer +
            " " +
            (checked ? selected : normal) +
            " " +
            disabledCls;

          const circleOuter =
            "h-4 w-4 rounded-full border flex items-center justify-center mt-[2px]";
          const circleBorder = checked ? "border-black" : "border-gray-400";
          const circleInner =
            "h-2 w-2 rounded-full" + (checked ? " bg-black" : "");

          return (
            <label key={option.value} className={outerClass}>
              <span className={circleOuter + " " + circleBorder}>
                <span className={circleInner} />
              </span>
              <span className="flex flex-col">
                <span className="text-sm font-medium">{option.label}</span>
                {option.description && (
                  <span className="text-xs text-gray-500">
                    {option.description}
                  </span>
                )}
              </span>
              <input
                type="radio"
                name={name}
                value={option.value}
                checked={checked}
                onChange={(e) => onChange?.(e.target.value)}
                className="hidden"
                disabled={disabled}
              />
            </label>
          );
        })}
      </div>

      {error && <p className={errorClass}>{error}</p>}
      {!error && hint && <p className={hintClass}>{hint}</p>}
    </div>
  );
}
