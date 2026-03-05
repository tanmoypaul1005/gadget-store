"use client";
import React from "react";

/**
 * CommonButton
 *
 * variant  : "primary" | "secondary" | "danger"
 * size     : "sm" | "md" | "lg"
 * loading  : shows spinner and disables button
 * fullWidth: w-full
 * icon     : JSX element shown on the left
 * iconRight: JSX element shown on the right
 */
const Spinner = () => (
  <svg className="w-4 h-4 animate-spin shrink-0" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
  </svg>
);

const variantClasses = {
  primary:
    "bg-indigo-600 hover:bg-indigo-500 text-white border border-transparent disabled:opacity-50",
  secondary:
    "bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/5 hover:border-white/10 disabled:opacity-50",
  danger:
    "bg-red-600/20 hover:bg-red-600/30 text-red-400 hover:text-red-300 border border-red-500/20 disabled:opacity-50",
};

const sizeClasses = {
  sm: "px-3 py-2 text-xs",
  md: "px-4 py-3 text-sm",
  lg: "px-6 py-3.5 text-base",
};

const CommonButton = ({
  children,
  btnLabel,
  variant = "primary",
  size = "md",
  loading = false,
  fullWidth = false,
  icon,
  iconRight,
  onClick,
  type = "button",
  disabled = false,
  className = "",
}) => {
  const label = children ?? btnLabel ?? "";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={[
        "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200",
        "cursor-pointer disabled:cursor-not-allowed",
        variantClasses[variant] ?? variantClasses.primary,
        sizeClasses[size] ?? sizeClasses.md,
        fullWidth ? "w-full" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {loading ? <Spinner /> : icon}
      {label}
      {!loading && iconRight}
    </button>
  );
};

export default CommonButton;
