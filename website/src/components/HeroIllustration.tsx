"use client";

/**
 * HeroIllustration — Particle wave ribbon
 * Ruban de particules or/violet sur fond sombre,
 * calqué sur l'image de référence fournie.
 */

import React, { useRef, useEffect } from "react";

export default function HeroIllustration() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef    = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    /* ── Dimensionnement DPR ─────────────────────────── */
    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const dpr = window.devicePixelRatio || 1;
      const w = parent.clientWidth, h = parent.clientHeight;
      canvas.width  = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width  = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    /* ── Courbe de Bézier cubique (chemin du ruban) ─── */
    const wavePt = (t: number, w: number, h: number) => {
      const p0 = { x: 0.28 * w, y: 1.10 * h };
      const p1 = { x: 0.46 * w, y: 0.60 * h };
      const p2 = { x: 0.68 * w, y: 0.28 * h };
      const p3 = { x: 1.10 * w, y:-0.05 * h };
      const u  = 1 - t;
      return {
        x: u*u*u*p0.x + 3*u*u*t*p1.x + 3*u*t*t*p2.x + t*t*t*p3.x,
        y: u*u*u*p0.y + 3*u*u*t*p1.y + 3*u*t*t*p2.y + t*t*t*p3.y,
      };
    };

    /* Normale perpendiculaire au chemin */
    const waveNormal = (t: number, w: number, h: number) => {
      const d  = 0.004;
      const a  = wavePt(Math.max(0, t - d), w, h);
      const b  = wavePt(Math.min(1, t + d), w, h);
      const dx = b.x - a.x, dy = b.y - a.y;
      const l  = Math.hypot(dx, dy) || 1;
      return { nx: -dy / l, ny: dx / l };
    };

    /* ── Particules ───────────────────────────────────── */
    const N = 500;
    const pts = Array.from({ length: N }, () => ({
      t:       Math.random(),
      offset:  (Math.random() - 0.5) * 62,
      speed:   0.00022 + Math.random() * 0.00032,
      alpha:   0.2 + Math.random() * 0.8,
      size:    0.3 + Math.random() * 2.0,
    }));

    /* ── Boucle de rendu ─────────────────────────────── */
    const draw = () => {
      const w = canvas.clientWidth, h = canvas.clientHeight;

      ctx.clearRect(0, 0, w, h);

      /* Grille de points or (bas-droite, comme la référence) */
      const gStep = 18, gCols = 14, gRows = 9;
      const gx0 = w * 0.70, gy0 = h * 0.68;
      for (let r = 0; r < gRows; r++) {
        for (let c = 0; c < gCols; c++) {
          const gx = gx0 + c * gStep;
          const gy = gy0 + r * gStep;
          if (gx > w * 1.02 || gy > h * 1.02) continue;
          const d = Math.hypot(c / gCols, r / gRows);
          const op = Math.max(0, 0.45 - d * 0.38);
          ctx.fillStyle = `rgba(205,165,64,${op})`;
          ctx.beginPath();
          ctx.arc(gx, gy, 1.1, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      /* Particules du ruban */
      for (const p of pts) {
        const pos = wavePt(p.t, w, h);
        const { nx, ny } = waveNormal(p.t, w, h);

        const px = pos.x + nx * p.offset;
        const py = pos.y + ny * p.offset;

        const abs  = Math.abs(p.offset);
        const fade = Math.max(0, 1 - abs / 42);
        const a    = fade * p.alpha;

        /* Couleur : violet foncé au cœur → or → violet sur les bords */
        let cr: number, cg: number, cb: number;
        if (fade > 0.78) {
          cr = 120; cg = 60;  cb = 160;       // cœur violet profond
        } else if (fade > 0.42) {
          cr = 205; cg = 165; cb = 64;        // or
        } else {
          cr = 155; cg = 80;  cb = 200;       // violet clair
        }

        /* Halo pour les particules du cœur */
        if (fade > 0.85) {
          ctx.shadowColor = `rgba(140,70,180,${a * 0.9})`;
          ctx.shadowBlur  = 10;
        } else if (fade > 0.5) {
          ctx.shadowColor = `rgba(205,165,64,${a * 0.5})`;
          ctx.shadowBlur  = 5;
        } else {
          ctx.shadowBlur = 0;
        }

        ctx.fillStyle = `rgba(${cr},${cg},${cb},${a})`;
        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fill();

        /* Avancer la particule */
        p.t += p.speed;
        if (p.t > 1.08) {
          p.t      = -0.08;
          p.offset = (Math.random() - 0.5) * 62;
          p.alpha  = 0.2 + Math.random() * 0.8;
          p.size   = 0.3 + Math.random() * 2.0;
        }
      }

      ctx.shadowBlur = 0;
      rafRef.current = requestAnimationFrame(draw);
    };

    draw();

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
      style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit" }}
    />
  );
}
