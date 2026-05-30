"use client";

import React, { useState } from "react";

export default function PhotoSarah() {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        style={{
          width: "100%",
          height: "480px",
          background: "linear-gradient(160deg, #1a0a1e 0%, #78427f 55%, #cda540 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <span
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "5rem",
            fontWeight: 700,
            color: "rgba(255,255,255,0.15)",
            lineHeight: 1,
          }}
        >
          SD
        </span>
        <span
          style={{
            color: "rgba(255,255,255,0.35)",
            fontSize: "0.7rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
          }}
        >
          Photo à venir
        </span>
      </div>
    );
  }

  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src="/sarah-dabancens.jpg"
      alt="Sarah Dabancens — Fondatrice SD Équicoaching"
      onError={() => setFailed(true)}
      style={{
        width: "100%",
        height: "auto",
        display: "block",
      }}
    />
  );
}
