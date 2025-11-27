"use client";

import React from "react";
import { Loader2 } from "lucide-react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "subtle";
type ButtonSize = "sm" | "md" | "lg";

export interface SPButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  fullWidth?: boolean;
}

function getVariantClasses(variant: ButtonVariant): string {
  switch (variant) {
    case "secondary":
      return "bg-black/5 text-black hover:bg-black/10 active:scale-[0.98]";
    case "outline":
      return "border border-black/10 text-black hover:bg-black/5 active:scale-[0.98]";
    case "ghost":
      return "text-black hover:bg-black/5 active:scale-[0.98]";
    case "subtle":
      return "bg-white/60 backdrop-blur-md text-black shadow-sm hover:bg-white/70 active:scale-[0.98]";
    case "primary":
    default:
      return "bg-[#A64DFF] text-white hover:bg-[#9243e6] active:scale-[0.98] shadow-sm";
  }
}

function getSizeClasses(size: ButtonSize): string {
  switch (size) {
    case "sm":
      return "h-8 px-3 text-sm";
    case "lg":
      return "h-12 px-6 text-lg";
    case "md":
    default:
      return "h-10 px-4 text-base";
  }
}

export function Button({
  variant = "primary",
  size = "md",
  isLoading,
  fullWidth,
  className,
  children,
  disabled,
  ...props
}: SPButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-xl font-medium transition-all focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";

  const variantClasses = getVariantClasses(variant);
  const sizeClasses = getSizeClasses(size);
  const widthClasses = fullWidth ? "w-full" : "";

  const finalClassName = [
    baseClasses,
    variantClasses,
    sizeClasses,
    widthClasses,
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      className={finalClassName}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
      )}
      {children}
    </button>
  );
}
