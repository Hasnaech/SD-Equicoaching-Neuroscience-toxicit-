"use client";

/**
 * HeroIllustration — Canvas gradient aurora
 *
 * Orbes de gradient animés en canvas (requestAnimationFrame).
 * Rendu proche des sites Anthropic, Stripe, Apple Intelligence.
 * Aucune dépendance externe — pur canvas API.
 *
 * Palette : violet (#9b5aaa, #78427f) + or (#cda540, #e8c060)
 * Fond : #080d18 (near-black, cohérent avec le hero dark)
 */

import React, { useRef, useEffect } from "react";

/* ── Configuration des orbes ────────────────────────────── */
interface Orb {
  /** Position relative initiale [0-1] */
  bx: number;
  by: number;
  /** Rayon relatif [0-1] du plus petit côté */
  r: number;
  /** Couleur RGB */
  rgb: [number, number, number];
  /** Phase de départ (évite que tous les orbes bougent en sync) */
  phase: number;
  /** Amplitude de déplacement [0-1] */
  amp: number;
  /** Fréquence de déplacement */
  freq: number;
}

const ORBS: Orb[] = [
  // Orbe violet principal — centre-gauche
  { bx: 0.28, by: 0.38, r: 0.50, rgb: [155, 90, 170], phase: 0,    amp: 0.10, freq: 0.00032 },
  // Orbe or — centre-droite
  { bx: 0.70, by: 0.32, r: 0.42, rgb: [205, 165, 64], phase: 2.1,  amp: 0.09, freq: 0.00041 },
  // Orbe violet sombre — bas
  { bx: 0.50, by: 0.72, r: 0.38, rgb: [120,  66, 127], phase: 4.2,  amp: 0.08, freq: 0.00028 },
  // Orbe or clair — haut-droite
  { bx: 0.78, by: 0.18, r: 0.28, rgb: [232, 192,  96], phase: 1.4,  amp: 0.07, freq: 0.00050 },
  // Orbe violet profond — bas-gauche
  { bx: 0.18, by: 0.68, r: 0.32, rgb: [ 90,  40, 105], phase: 3.5,  amp: 0.10, freq: 0.00037 },
];

export default function HeroIllustration() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef    = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    /* ── Dimensionnement ──────────────────────────────────── */
    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      // DPR pour rendu net sur écrans Retina
      const dpr = window.devicePixelRatio || 1;
      const w = parent.clientWidth;
      const h = parent.clientHeight;
      canvas.width  = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width  = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();

    /* ── Boucle de rendu ─────────────────────────────────── */
    let frame = 0;

    const draw = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      const minSide = Math.min(w, h);

      // Fond sombre
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "#080d18";
      ctx.fillRect(0, 0, w, h);

      // Chaque orbe
      ORBS.forEach((orb) => {
        const t = frame;

        // Mouvement sinusoïdal indépendant sur x et y
        const cx = (orb.bx + orb.amp * Math.sin(t * orb.freq       + orb.phase)) * w;
        const cy = (orb.by + orb.amp * Math.cos(t * orb.freq * 0.7 + orb.phase * 1.3)) * h;
        const radius = orb.r * minSide;

        const grd = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
        const [r, g, b] = orb.rgb;
        grd.addColorStop(0,   `rgba(${r},${g},${b},0.38)`);
        grd.addColorStop(0.45,`rgba(${r},${g},${b},0.14)`);
        grd.addColorStop(1,   `rgba(${r},${g},${b},0)`);

        ctx.save();
        ctx.globalCompositeOperation = "screen";
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();
        ctx.restore();
      });

      /* ── Vignette périphérique (frame intérieur sombre) ── */
      const vgrd = ctx.createRadialGradient(
        w / 2, h / 2, minSide * 0.28,
        w / 2, h / 2, minSide * 0.78,
      );
      vgrd.addColorStop(0, "rgba(8,13,24,0)");
      vgrd.addColorStop(1, "rgba(8,13,24,0.72)");
      ctx.fillStyle = vgrd;
      ctx.fillRect(0, 0, w, h);

      /* ── Grain léger (performance : appliqué toutes les 3 frames) ── */
      if (frame % 3 === 0) {
        const imgData = ctx.getImageData(0, 0, w, h);
        const data = imgData.data;
        for (let i = 0; i < data.length; i += 4) {
          const noise = (Math.random() - 0.5) * 14;
          data[i]     = Math.min(255, Math.max(0, data[i]     + noise));
          data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + noise));
          data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + noise));
        }
        ctx.putImageData(imgData, 0, 0);
      }

      frame++;
      rafRef.current = requestAnimationFrame(draw);
    };

    draw();

    /* ── ResizeObserver ──────────────────────────────────── */
    const ro = new ResizeObserver(resize);
    if (canvas.parentElement) ro.observe(canvas.parentElement);

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        borderRadius: "inherit",
      }}
    />
  );
}
