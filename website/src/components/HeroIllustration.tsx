"use client";

import React from "react";

// ── Génère un path SVG de sinusoïde ──────────────────────────────────────
function wave(
  startX: number, endX: number,
  cy: number,
  amplitude: number,
  wavelength: number,
  phase = 0,
  step = 4
): string {
  const pts: string[] = [];
  for (let x = startX; x <= endX; x += step) {
    const y = cy + amplitude * Math.sin((2 * Math.PI * (x + phase)) / wavelength);
    pts.push(`${x.toFixed(1)},${y.toFixed(1)}`);
  }
  return `M ${pts.join(" L ")}`;
}

// ── Onde "chaotique" (somme de 2 fréquences) ─────────────────────────────
function chaosWave(
  startX: number, endX: number,
  cy: number, step = 4
): string {
  const pts: string[] = [];
  for (let x = startX; x <= endX; x += step) {
    const y =
      cy +
      18 * Math.sin((2 * Math.PI * x) / 110) +
      8  * Math.sin((2 * Math.PI * x) / 47);
    pts.push(`${x.toFixed(1)},${y.toFixed(1)}`);
  }
  return `M ${pts.join(" L ")}`;
}

export default function HeroIllustration() {
  // ── Ondes calmes / cohérentes (droite) ────────────────────────────────
  const calm1 = wave(-220, 750, 148, 22, 210, 0);
  const calm2 = wave(-180, 750, 220, 30, 165, 40);
  const calm3 = wave(-200, 750, 292, 18, 190, 80);
  const calm4 = wave(-240, 750, 364, 12, 230, 20);

  // ── Ondes chaotiques (gauche) — s'organisent vers la droite ───────────
  const chaos1 = chaosWave(-220, 750, 148);
  const chaos2 = chaosWave(-180, 750, 220);
  const chaos3 = chaosWave(-200, 750, 292);
  const chaos4 = chaosWave(-240, 750, 364);

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <svg
        viewBox="0 0 500 460"
        style={{ width: "100%", height: "100%", display: "block" }}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Clip — vagues restent dans le cadre */}
          <clipPath id="nc-clip">
            <rect x="0" y="0" width="500" height="460" />
          </clipPath>

          {/* Masque : fondu gauche→droite pour transition chaos→calme */}
          <linearGradient id="nc-fade-mask" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor="white" stopOpacity="1" />
            <stop offset="38%"  stopColor="white" stopOpacity="0" />
          </linearGradient>
          <mask id="nc-mask-chaos">
            <rect x="0" y="0" width="500" height="460" fill="url(#nc-fade-mask)" />
          </mask>

          <linearGradient id="nc-fade-mask-calm" x1="0" y1="0" x2="1" y2="0">
            <stop offset="35%"  stopColor="white" stopOpacity="0" />
            <stop offset="70%"  stopColor="white" stopOpacity="1" />
          </linearGradient>
          <mask id="nc-mask-calm">
            <rect x="0" y="0" width="500" height="460" fill="url(#nc-fade-mask-calm)" />
          </mask>

          {/* Fond */}
          <radialGradient id="nc-bg" cx="50%" cy="50%" r="55%">
            <stop offset="0%"   stopColor="#5a2a62" stopOpacity="0.20" />
            <stop offset="100%" stopColor="#1a0a1e" stopOpacity="0"    />
          </radialGradient>

          {/* Halo central */}
          <radialGradient id="nc-halo" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#cda540" stopOpacity="0.55" />
            <stop offset="45%"  stopColor="#cda540" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#cda540" stopOpacity="0"    />
          </radialGradient>

          {/* Glow point central */}
          <filter id="nc-pt-glow" x="-200%" y="-200%" width="500%" height="500%">
            <feGaussianBlur stdDeviation="6" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* Fond */}
        <circle cx="250" cy="230" r="260" fill="url(#nc-bg)" />

        {/* ══════════════════════════════════════════════════════
             ZONE GAUCHE — ondes chaotiques (état de stress)
             Masquées à droite pour un fondu vers les ondes calmes
        ══════════════════════════════════════════════════════ */}
        <g clipPath="url(#nc-clip)" mask="url(#nc-mask-chaos)">
          <g>
            <path d={chaos1} fill="none" stroke="rgba(155,90,170,0.55)" strokeWidth="1.8" strokeLinecap="round">
              <animateTransform attributeName="transform" type="translate" from="0,0" to="-110,0" dur="2.8s" repeatCount="indefinite" />
            </path>
          </g>
          <g>
            <path d={chaos2} fill="none" stroke="rgba(120,66,127,0.60)" strokeWidth="2" strokeLinecap="round">
              <animateTransform attributeName="transform" type="translate" from="0,0" to="-110,0" dur="2.4s" repeatCount="indefinite" />
            </path>
          </g>
          <g>
            <path d={chaos3} fill="none" stroke="rgba(155,90,170,0.45)" strokeWidth="1.5" strokeLinecap="round">
              <animateTransform attributeName="transform" type="translate" from="0,0" to="-110,0" dur="3.1s" repeatCount="indefinite" />
            </path>
          </g>
          <g>
            <path d={chaos4} fill="none" stroke="rgba(120,66,127,0.38)" strokeWidth="1.2" strokeLinecap="round">
              <animateTransform attributeName="transform" type="translate" from="0,0" to="-110,0" dur="2.6s" repeatCount="indefinite" />
            </path>
          </g>
        </g>

        {/* ══════════════════════════════════════════════════════
             ZONE DROITE — ondes calmes / cohérentes (performance)
             Masquées à gauche pour un fondu depuis les ondes chaotiques
        ══════════════════════════════════════════════════════ */}
        <g clipPath="url(#nc-clip)" mask="url(#nc-mask-calm)">
          <g>
            <path d={calm1} fill="none" stroke="rgba(205,165,64,0.65)" strokeWidth="1.8" strokeLinecap="round">
              <animateTransform attributeName="transform" type="translate" from="0,0" to="-210,0" dur="5.5s" repeatCount="indefinite" />
            </path>
          </g>
          <g>
            <path d={calm2} fill="none" stroke="rgba(232,192,96,0.55)" strokeWidth="2" strokeLinecap="round">
              <animateTransform attributeName="transform" type="translate" from="0,0" to="-165,0" dur="4.8s" repeatCount="indefinite" />
            </path>
          </g>
          <g>
            <path d={calm3} fill="none" stroke="rgba(205,165,64,0.42)" strokeWidth="1.5" strokeLinecap="round">
              <animateTransform attributeName="transform" type="translate" from="0,0" to="-190,0" dur="5.2s" repeatCount="indefinite" />
            </path>
          </g>
          <g>
            <path d={calm4} fill="none" stroke="rgba(232,192,96,0.32)" strokeWidth="1.2" strokeLinecap="round">
              <animateTransform attributeName="transform" type="translate" from="0,0" to="-230,0" dur="6.2s" repeatCount="indefinite" />
            </path>
          </g>
        </g>

        {/* ══════════════════════════════════════════════════════
             LIGNE CENTRALE DE TRANSFORMATION
             Séparateur vertical subtil au point de bascule
        ══════════════════════════════════════════════════════ */}
        <line x1="250" y1="90" x2="250" y2="395"
          stroke="rgba(205,165,64,0.12)"
          strokeWidth="1"
          strokeDasharray="4 8"
          strokeLinecap="round"
        />

        {/* ══════════════════════════════════════════════════════
             HALO + POINT FOCAL CENTRAL
             Représente le moment de régulation / disponibilité
        ══════════════════════════════════════════════════════ */}
        <circle cx="250" cy="230" r="80" fill="url(#nc-halo)">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="4.5s" repeatCount="indefinite" />
        </circle>

        {/* Anneau de transition */}
        <circle cx="250" cy="230" r="44"
          fill="none"
          stroke="rgba(205,165,64,0.20)"
          strokeWidth="1"
          strokeDasharray="3 6"
        >
          <animateTransform attributeName="transform" type="rotate"
            from="0 250 230" to="360 250 230" dur="20s" repeatCount="indefinite" />
        </circle>

        {/* Point focal */}
        <circle cx="250" cy="230" r="9" fill="#cda540" filter="url(#nc-pt-glow)">
          <animate attributeName="r" values="8;11;8" dur="4.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="250" cy="230" r="4" fill="#f8ea90" opacity="0.95" />

        {/* ══════════════════════════════════════════════════════
             LABELS — contexte minimal
        ══════════════════════════════════════════════════════ */}
        <text x="72" y="428"
          fontSize="9" fill="rgba(155,90,170,0.55)"
          fontFamily="'DM Sans', system-ui, sans-serif"
          letterSpacing="1.5" textAnchor="middle">
          STRESS
        </text>

        <text x="250" y="428"
          fontSize="9" fill="rgba(205,165,64,0.55)"
          fontFamily="'DM Sans', system-ui, sans-serif"
          letterSpacing="1.5" textAnchor="middle">
          RÉGULATION
        </text>

        <text x="428" y="428"
          fontSize="9" fill="rgba(205,165,64,0.55)"
          fontFamily="'DM Sans', system-ui, sans-serif"
          letterSpacing="1.5" textAnchor="middle">
          PERFORMANCE
        </text>
      </svg>
    </div>
  );
}
