"use client";
import React from "react";

const sizeMap = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-2xl",
};

export default function CommonModal({
  open,
  setOpen,
  title = "",
  subtitle = "",
  icon,
  content,
  size = "md",
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />

      {/* Modal Box */}
      <div
        className={`relative w-full ${
          sizeMap[size]
        } bg-[#111118] border border-white/10 rounded-2xl shadow-2xl shadow-black/60 overflow-hidden`}
      >
        {/* Header */}
        <div className="bg-[#16161f] px-6 py-5 border-b border-white/5 flex items-center gap-3">
          {icon && (
            <div className="flex items-center justify-center border w-9 h-9 rounded-xl bg-indigo-600/20 border-indigo-500/20 shrink-0">
              {icon}
            </div>
          )}
          <div className="flex-1">
            {title && (
              <h2 className="text-base font-bold text-white">{title}</h2>
            )}
            {subtitle && (
              <p className="text-xs text-gray-500 mt-0.5">{subtitle}</p>
            )}
          </div>
          <button
            onClick={() => setOpen(false)}
            className="flex items-center justify-center w-8 h-8 transition-colors border rounded-lg bg-white/5 hover:bg-white/10 border-white/5"
          >
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div>{content}</div>
      </div>
    </div>
  );
}