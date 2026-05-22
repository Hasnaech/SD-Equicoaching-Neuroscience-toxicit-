"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Phase = "ventral" | "sympathique" | "regulation";
const SEQ: Phase[] = ["ventral", "sympathique", "regulation"];

const GOLD = "#D4AF37";
const RED  = "#E74C3C";

// ── Expanding ripple ring ─────────────────────────────────────────────────────
function RippleRing({ active, delay }: { active: boolean; delay: number }) {
  return (
    <motion.div
      style={{
        position: "absolute",
        inset: 0,
        borderRadius: "50%",
        border: "1.5px solid rgba(231,76,60,0.8)",
        pointerEvents: "none",
      }}
      animate={
        active
          ? { scale: [1, 2.9], opacity: [0.72, 0] }
          : { scale: 1,        opacity: 0 }
      }
      transition={
        active
          ? { duration: 1.6, delay, ease: "easeOut", repeat: Infinity }
          : { duration: 0.5, ease: "easeOut" }
      }
    />
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export default function NervousSystemOrb() {
  const [phaseIdx, setPhaseIdx] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setPhaseIdx((i) => (i + 1) % 3), 5000);
    return () => clearTimeout(t);
  }, [phaseIdx]);

  const phase    = SEQ[phaseIdx];
  const isStress = phase === "sympathique";
  const isRegul  = phase === "regulation";

  // ── Orb color & glow per phase ─────────────────────────────────────────────
  const color = isStress ? RED : GOLD;

  const glow = isStress
    ? "0 0 60px rgba(231,76,60,1), 0 0 130px rgba(231,76,60,0.52), 0 0 250px rgba(231,76,60,0.22)"
    : "0 0 60px rgba(212,175,55,0.85), 0 0 130px rgba(212,175,55,0.38), 0 0 230px rgba(212,175,55,0.16)";

  // ── Breathing (scale) ──────────────────────────────────────────────────────
  // Ventral: slow 2.2s breath, Regulation: slower 3.8s calm breath
  // Sympathique: hold at 1 (jitter handles movement)
  const scaleTarget  = isStress ? 1    : (isRegul ? [1, 1.04, 1] : [1, 1.08, 1]);
  const scaleDur     = isStress ? 0.25 : (isRegul ? 3.8           : 2.2);
  const scaleRepeat  = isStress ? 0    : Infinity;

  // ── Jitter (x / y) — rapid mirror oscillation during stress ───────────────
  const xTarget: number | number[] = isStress ? [-5, 5] : 0;
  const yTarget: number | number[] = isStress ? [-4, 4] : 0;
  const xDur    = isStress ? 0.11 : 0.4;   // 0.11s = ~9 oscillations/sec
  const yDur    = isStress ? 0.14 : 0.4;   // slightly offset for realism

  return (
    <div
      className="relative flex items-center justify-center select-none"
      style={{ width: "100%", height: "100%" }}
    >
      {/* Ambient outer haze — changes color with phase */}
      <motion.div
        animate={{
          backgroundColor: isStress
            ? "rgba(231,76,60,0.16)"
            : "rgba(212,175,55,0.12)",
        }}
        transition={{ duration: 1.8, ease: "easeInOut" }}
        style={{
          position: "absolute",
          width: "88%",
          height: "88%",
          borderRadius: "50%",
          filter: "blur(64px)",
          pointerEvents: "none",
        }}
      />

      {/* Ripple shock waves — stress only */}
      <div style={{ position: "absolute", width: "58%", height: "58%" }}>
        <RippleRing active={isStress} delay={0}    />
        <RippleRing active={isStress} delay={0.53} />
        <RippleRing active={isStress} delay={1.06} />
      </div>

      {/* ── Main orb — all visual states on one element ── */}
      <motion.div
        animate={{
          backgroundColor: color,
          boxShadow: glow,
          scale: scaleTarget,
          x: xTarget,
          y: yTarget,
        }}
        transition={{
          // Color + glow: smooth 1.4s crossfade
          backgroundColor: { duration: 1.4, ease: "easeInOut" },
          boxShadow:       { duration: 1.4, ease: "easeInOut" },
          // Breathing: loops during calm phases
          scale: {
            duration:   scaleDur,
            ease:       "easeInOut",
            repeat:     scaleRepeat,
            repeatType: "mirror",
          },
          // Jitter: rapid mirror oscillation during stress, quick stop otherwise
          x: {
            duration:   xDur,
            ease:       "easeInOut",
            repeat:     isStress ? Infinity : 0,
            repeatType: "mirror",
          },
          y: {
            duration:   yDur,
            ease:       "easeInOut",
            repeat:     isStress ? Infinity : 0,
            repeatType: "mirror",
          },
        }}
        style={{
          position:     "absolute",
          width:        "58%",
          height:       "58%",
          borderRadius: "50%",
        }}
      />

      {/* Glass specular highlight — static layer above orb */}
      <div
        style={{
          position:     "absolute",
          width:        "58%",
          height:       "58%",
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 33% 27%, rgba(255,255,255,0.36) 0%, rgba(255,255,255,0.12) 38%, transparent 60%)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
