"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Phase = "ventral" | "sympathique" | "regulation";
const SEQ: Phase[] = ["ventral", "sympathique", "regulation"];
const PHASE_MS = 5000;

// ── Ripple ring — expands outward only during stress ──────────────────────────
function RippleRing({ active, delay }: { active: boolean; delay: number }) {
  return (
    <motion.div
      style={{
        position: "absolute",
        inset: 0,
        borderRadius: "50%",
        border: "1.5px solid rgba(231,76,60,0.75)",
        pointerEvents: "none",
      }}
      animate={
        active
          ? { scale: [1, 2.8], opacity: [0.65, 0] }
          : { scale: 1, opacity: 0 }
      }
      transition={
        active
          ? { duration: 1.7, delay, ease: "easeOut", repeat: Infinity }
          : { duration: 0.6, ease: "easeOut" }
      }
    />
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export default function NervousSystemOrb() {
  const [phaseIdx, setPhaseIdx] = useState(0);

  // Advance phase every 5 seconds
  useEffect(() => {
    const t = setTimeout(() => setPhaseIdx((i) => (i + 1) % 3), PHASE_MS);
    return () => clearTimeout(t);
  }, [phaseIdx]);

  const phase    = SEQ[phaseIdx];
  const isStress = phase === "sympathique";
  const isRegul  = phase === "regulation";

  // ── Color ──────────────────────────────────────────────────────────────────
  const orbColor = isStress ? "#E74C3C" : "#D4AF37";

  // ── Scale keyframes ────────────────────────────────────────────────────────
  const scaleKeys: number[] = isStress
    // Fast erratic pulses — stress
    ? [1, 1.15, 0.91, 1.12, 0.93, 1.13, 0.95, 1.09, 0.97, 1.05, 1]
    : isRegul
    // Gradually settles — regulation
    ? [1.04, 1.02, 1.01, 1.005, 1]
    // Slow breathing — ventral
    : [1, 1.065, 0.995, 1.055, 1.01, 1];

  // ── Jitter keyframes (x/y) — stress only ─────────────────────────────────
  const xKeys: number[] = isStress
    ? [0, -4, 4, -3, 4, -4, 3, -3, 4, -3, 2, -3, 0]
    : [0];
  const yKeys: number[] = isStress
    ? [0, 2, -3, 2, -2, 3, -2, 3, -2, 2, -3, 2, 0]
    : [0];

  // ── Glow ──────────────────────────────────────────────────────────────────
  const glow = isStress
    ? "0 0 55px rgba(231,76,60,0.95), 0 0 110px rgba(231,76,60,0.45), 0 0 200px rgba(231,76,60,0.2)"
    : "0 0 55px rgba(212,175,55,0.75), 0 0 110px rgba(212,175,55,0.32), 0 0 200px rgba(212,175,55,0.14)";

  const scaleDur = isStress ? 4.4 : 4.8;

  return (
    <div
      className="relative flex items-center justify-center select-none"
      style={{ width: "100%", height: "100%" }}
    >
      {/* Ambient outer haze */}
      <motion.div
        style={{
          position: "absolute",
          width: "88%",
          height: "88%",
          borderRadius: "50%",
          filter: "blur(55px)",
          pointerEvents: "none",
        }}
        animate={{
          backgroundColor: isStress
            ? "rgba(231,76,60,0.14)"
            : "rgba(212,175,55,0.11)",
        }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />

      {/* Ripple rings — stress only */}
      <div
        style={{
          position: "absolute",
          width: "52%",
          height: "52%",
        }}
      >
        <RippleRing active={isStress} delay={0}   />
        <RippleRing active={isStress} delay={0.57} />
        <RippleRing active={isStress} delay={1.14} />
      </div>

      {/* ── Main orb ── */}
      <motion.div
        style={{
          position: "absolute",
          width: "52%",
          height: "52%",
          borderRadius: "50%",
        }}
        animate={{
          backgroundColor: orbColor,
          boxShadow: glow,
          scale: scaleKeys,
          x: xKeys,
          y: yKeys,
        }}
        transition={{
          backgroundColor: { duration: 1.8, ease: "easeInOut" },
          boxShadow:       { duration: 1.8, ease: "easeInOut" },
          scale:           { duration: scaleDur, ease: "easeInOut" },
          // Jitter stops quickly when leaving stress phase
          x: { duration: isStress ? scaleDur : 0.5, ease: isStress ? "easeInOut" : "easeOut" },
          y: { duration: isStress ? scaleDur : 0.5, ease: isStress ? "easeInOut" : "easeOut" },
        }}
      />

      {/* Specular highlight — static glass-like sheen */}
      <div
        style={{
          position: "absolute",
          width: "52%",
          height: "52%",
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 34% 28%, rgba(255,255,255,0.32) 0%, rgba(255,255,255,0.1) 36%, transparent 58%)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
