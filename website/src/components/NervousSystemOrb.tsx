"use client";

import { useEffect, useRef } from "react";

// ── Brand colors ──────────────────────────────────────────────────────────────
type RGB = { r: number; g: number; b: number };
const GOLD: RGB = { r: 212, g: 175, b: 55  };
const RED:  RGB = { r: 231, g: 76,  b: 60  };

function lerp(a: number, b: number, t: number) { return a + (b - a) * t; }

function lerpColor(c1: RGB, c2: RGB, t: number): RGB {
  return {
    r: Math.round(lerp(c1.r, c2.r, t)),
    g: Math.round(lerp(c1.g, c2.g, t)),
    b: Math.round(lerp(c1.b, c2.b, t)),
  };
}

function rgba({ r, g, b }: RGB, a: number) {
  return `rgba(${r},${g},${b},${a.toFixed(3)})`;
}

// Smooth S-curve
function ease(t: number) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

// ── Draw a glowing sphere on canvas ──────────────────────────────────────────
function drawOrb(
  ctx: CanvasRenderingContext2D,
  cx: number, cy: number,
  r: number,
  color: RGB,
  glowRadius: number,
) {
  // --- Multi-pass glow (each pass adds depth) ---
  ctx.save();
  for (let pass = 3; pass >= 1; pass--) {
    ctx.shadowBlur  = glowRadius * pass * 0.9;
    ctx.shadowColor = rgba(color, 0.35);
    ctx.beginPath();
    ctx.arc(cx, cy, r * (1 + pass * 0.12), 0, Math.PI * 2);
    ctx.fillStyle = rgba(color, 0.02);
    ctx.fill();
  }
  ctx.shadowBlur = 0;

  // --- Main sphere (radial gradient for depth) ---
  ctx.shadowBlur  = glowRadius * 1.2;
  ctx.shadowColor = rgba(color, 0.7);
  const grad = ctx.createRadialGradient(
    cx - r * 0.28, cy - r * 0.28, r * 0.04,
    cx, cy, r,
  );
  grad.addColorStop(0,   rgba(color, 1.0));
  grad.addColorStop(0.5, rgba(color, 0.92));
  grad.addColorStop(1,   rgba(color, 0.55));
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.fillStyle = grad;
  ctx.fill();
  ctx.shadowBlur = 0;

  // --- Specular highlight (glass-like sheen top-left) ---
  const hl = ctx.createRadialGradient(
    cx - r * 0.3, cy - r * 0.3, 0,
    cx - r * 0.3, cy - r * 0.3, r * 0.52,
  );
  hl.addColorStop(0, "rgba(255,255,255,0.40)");
  hl.addColorStop(1, "rgba(255,255,255,0.00)");
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.fillStyle = hl;
  ctx.fill();
  ctx.restore();
}

// ── Main component ────────────────────────────────────────────────────────────
export default function NervousSystemOrb() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef    = useRef<number>(0);
  const t0Ref     = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Retina-aware sizing
    const setupCanvas = () => {
      const dpr  = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      if (rect.width === 0) return;
      canvas.width  = rect.width  * dpr;
      canvas.height = rect.height * dpr;
      const ctx = canvas.getContext("2d");
      ctx?.scale(dpr, dpr);
    };
    setupCanvas();

    const draw = (ts: number) => {
      if (!t0Ref.current) t0Ref.current = ts;
      const sec   = (ts - t0Ref.current) / 1000;   // seconds since mount
      const cycle = sec % 15;                        // position in 15s loop
      const phase = Math.floor(cycle / 5);           // 0 | 1 | 2
      const pt    = (cycle % 5) / 5;                 // 0→1 within phase

      const ctx = canvas.getContext("2d");
      if (!ctx) { rafRef.current = requestAnimationFrame(draw); return; }

      const rect = canvas.getBoundingClientRect();
      const W = rect.width;
      const H = rect.height;
      ctx.clearRect(0, 0, W, H);

      const cx     = W / 2;
      const cy     = H / 2;
      const BASE_R = Math.min(W, H) * 0.26;

      // ── PHASE 0 — VENTRAL (calme, doré) ────────────────────────────────────
      if (phase === 0) {
        // Slow deep breath (~2.2s period)
        const breath = Math.sin(sec * (Math.PI / 1.1)) * 0.07;
        drawOrb(ctx, cx, cy, BASE_R * (1 + breath), GOLD, 55 + Math.abs(breath) * 60);

      // ── PHASE 1 — SYMPATHIQUE (stress, rouge) ──────────────────────────────
      } else if (phase === 1) {
        const colorT = ease(Math.min(pt * 2.8, 1));
        const color  = lerpColor(GOLD, RED, colorT);

        // Fast pulsing (8 Hz escalates to stress)
        const pulse  = Math.sin(sec * Math.PI * (4 + colorT * 6)) * 0.09 * colorT;
        const r      = BASE_R * (1 + pulse);

        // Jitter: sum of 2 incommensurate sinusoids → smooth quasi-random motion
        const jStr = colorT * 6;
        const jx   = cx + (Math.sin(sec * 43) + Math.sin(sec * 79)) * jStr;
        const jy   = cy + (Math.sin(sec * 61) + Math.sin(sec * 97)) * jStr * 0.65;

        drawOrb(ctx, jx, jy, r, color, 55 + colorT * 50);

        // Expanding shock-wave rings (3, staggered by 1/3)
        for (let i = 0; i < 3; i++) {
          const rt  = ((pt * 2 + i / 3) % 1);           // 0→1 per ring cycle
          const rr  = BASE_R + rt * BASE_R * 2.4;
          const ra  = (1 - rt) * 0.7 * colorT;
          ctx.beginPath();
          ctx.arc(cx, cy, rr, 0, Math.PI * 2);
          ctx.strokeStyle = rgba(RED, ra);
          ctx.lineWidth   = 1.8;
          ctx.stroke();
        }

      // ── PHASE 2 — RÉGULATION (retour au calme) ─────────────────────────────
      } else {
        const colorT  = ease(Math.min(pt * 1.8, 1));
        const color   = lerpColor(RED, GOLD, colorT);

        // Jitter decays exponentially over first 40% of phase
        const jDecay  = Math.max(0, 1 - pt / 0.4);
        const jStr    = 6 * jDecay;
        const jx      = cx + (Math.sin(sec * 43) + Math.sin(sec * 79)) * jStr;
        const jy      = cy + (Math.sin(sec * 61) + Math.sin(sec * 97)) * jStr * 0.65;

        // Breathing gradually deepens as calm returns
        const breathDepth = (1 - jDecay) * 0.05;
        const breath      = Math.sin(sec * (Math.PI / 1.7)) * breathDepth;
        const r           = BASE_R * (1 + breath);

        const glowAmt = lerp(105, 55, colorT);
        drawOrb(ctx, jx, jy, r, color, glowAmt);
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: "100%", height: "100%", display: "block" }}
      aria-hidden="true"
    />
  );
}
