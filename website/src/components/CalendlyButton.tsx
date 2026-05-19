"use client";

import React from "react";

const CALENDLY_URL = "https://calendly.com/sara-dabancens/seance-decouverte";

interface CalendlyButtonProps {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children?: React.ReactNode;
  className?: string;
}

export default function CalendlyButton({
  variant = "primary",
  size = "md",
  children,
  className = "",
}: CalendlyButtonProps) {
  const base =
    "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 cursor-pointer no-underline";

  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-base",
    lg: "px-9 py-4.5 text-lg",
  };

  const variants = {
    primary:
      "bg-[#cda540] text-[#1a0a1e] hover:bg-[#e8c060] hover:shadow-lg hover:shadow-[#cda540]/30 active:scale-95",
    secondary:
      "bg-[#78427f] text-white hover:bg-[#9b5aaa] hover:shadow-lg active:scale-95",
    outline:
      "border-2 border-[#cda540] text-[#cda540] hover:bg-[#cda540] hover:text-[#1a0a1e] active:scale-95",
  };

  return (
    <a
      href={CALENDLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {children || "Réserver un diagnostic gratuit"}
    </a>
  );
}
