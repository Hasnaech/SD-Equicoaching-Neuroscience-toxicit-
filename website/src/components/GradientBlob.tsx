"use client";

import React from "react";

interface GradientBlobProps {
  className?: string;
}

export default function GradientBlob({ className = "" }: GradientBlobProps) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {/* Blob 1 — violet glow (static) */}
      <div
        className="absolute rounded-full opacity-30"
        style={{
          width: "600px",
          height: "600px",
          top: "-100px",
          left: "-150px",
          background:
            "radial-gradient(circle at center, #9b5aaa 0%, #78427f 40%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      {/* Blob 2 — gold glow (static) */}
      <div
        className="absolute rounded-full opacity-20"
        style={{
          width: "500px",
          height: "500px",
          top: "100px",
          right: "-100px",
          background:
            "radial-gradient(circle at center, #cda540 0%, #78427f 50%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />
      {/* Blob 3 — deep violet (static) */}
      <div
        className="absolute rounded-full opacity-25"
        style={{
          width: "400px",
          height: "400px",
          bottom: "-50px",
          left: "40%",
          background:
            "radial-gradient(circle at center, #78427f 0%, #1a0a1e 60%, transparent 80%)",
          filter: "blur(70px)",
        }}
      />
    </div>
  );
}
