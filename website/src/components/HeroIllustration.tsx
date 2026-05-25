"use client";

import React from "react";

/**
 * HeroIllustration — style collage "Octave Management"
 *
 * Composition :
 *  • Fond très sombre (#080d18) avec grain SVG
 *  • Plateforme isométrique grise (bas-gauche)
 *  • Figure humaine vue de dos (palette N&B)
 *  • Grand cube isométrique violette / or (centre-droite)
 *  • Petit cube flottant (haut-droite)
 *  • Chemin en pointillés dorés animé (bas-gauche → haut-droite)
 *  • Astérisque doré lumineux
 *  • Petits accents diamants / points
 */
export default function HeroIllustration() {
  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <svg
        viewBox="0 0 500 500"
        style={{ width: "100%", height: "100%", display: "block" }}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* ── Grain / texture papier ─────────────────────── */}
          <filter id="oc-grain" x="0%" y="0%" width="100%" height="100%" colorInterpolationFilters="sRGB">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.78"
              numOctaves="4"
              stitchTiles="stitch"
              result="noise"
            />
            <feColorMatrix type="saturate" values="0" in="noise" result="grayNoise" />
            <feBlend in="SourceGraphic" in2="grayNoise" mode="multiply" />
          </filter>

          {/* ── Glow astérisque ───────────────────────────── */}
          <filter id="oc-glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* ── Glow subtil cube ─────────────────────────── */}
          <filter id="oc-cube-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* ── Gradients cube principal ──────────────────── */}
          <linearGradient id="oc-top" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#c880e0" />
            <stop offset="100%" stopColor="#78427f" />
          </linearGradient>

          <linearGradient id="oc-right" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%"   stopColor="#e8c060" />
            <stop offset="100%" stopColor="#7a5010" />
          </linearGradient>

          <linearGradient id="oc-left" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%"   stopColor="#50255a" />
            <stop offset="100%" stopColor="#100818" />
          </linearGradient>

          {/* ── Gradients petit cube ──────────────────────── */}
          <linearGradient id="oc-sm-top" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#a060c0" />
            <stop offset="100%" stopColor="#6a3878" />
          </linearGradient>
          <linearGradient id="oc-sm-right" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%"   stopColor="#cda540" />
            <stop offset="100%" stopColor="#6a4810" />
          </linearGradient>

          {/* ── Plateforme ────────────────────────────────── */}
          <linearGradient id="oc-plat" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%"   stopColor="#c8cad8" />
            <stop offset="100%" stopColor="#90929e" />
          </linearGradient>
        </defs>

        {/* ════════════════════════════════════════════════
            FOND
        ════════════════════════════════════════════════ */}
        <rect x="0" y="0" width="500" height="500" fill="#080d18" />
        {/* Grain overlay */}
        <rect x="0" y="0" width="500" height="500" fill="#0d1424" filter="url(#oc-grain)" opacity="0.22" />

        {/* ════════════════════════════════════════════════
            PLATEFORME ISOMÉTRIQUE (bas-gauche)
            top-surface : quadrilatère isométrique
        ════════════════════════════════════════════════ */}
        {/* Surface supérieure */}
        <polygon
          points="30,415 182,378 240,415 88,452"
          fill="url(#oc-plat)"
          opacity="0.88"
        />
        {/* Face avant-gauche */}
        <polygon
          points="30,415 88,452 88,468 30,431"
          fill="#6e7080"
          opacity="0.88"
        />
        {/* Face avant-droite */}
        <polygon
          points="88,452 240,415 240,431 88,468"
          fill="#80828e"
          opacity="0.88"
        />

        {/* ════════════════════════════════════════════════
            FIGURE HUMAINE — vue de dos, palette N&B
        ════════════════════════════════════════════════ */}
        {/* Ombre au sol */}
        <ellipse cx="136" cy="416" rx="28" ry="7" fill="rgba(0,0,0,0.28)" />

        {/* — Pieds / chaussures — */}
        <ellipse cx="122" cy="416" rx="13" ry="5"
          fill="#141420"
          transform="rotate(-6 122 416)"
        />
        <ellipse cx="150" cy="416" rx="13" ry="5"
          fill="#141420"
          transform="rotate(6 150 416)"
        />

        {/* — Jambes — */}
        <path d="M128,368 L120,416" stroke="#252535" strokeWidth="13" strokeLinecap="round" />
        <path d="M144,368 L152,416" stroke="#1e1e2e" strokeWidth="13" strokeLinecap="round" />

        {/* — Bas du pantalon (légère distinction) — */}
        <path d="M123,405 L120,416" stroke="#1a1a28" strokeWidth="14" strokeLinecap="round" opacity="0.7" />
        <path d="M149,405 L152,416" stroke="#1a1a28" strokeWidth="14" strokeLinecap="round" opacity="0.7" />

        {/* — Veste / torse — */}
        <path
          d="M118,312 C117,308 125,302 136,302 C147,302 155,308 154,312 L150,368 L122,368 Z"
          fill="#3a3a50"
        />
        {/* Pli central veste */}
        <line x1="136" y1="310" x2="136" y2="365"
          stroke="rgba(0,0,0,0.15)" strokeWidth="1.5"
        />
        {/* Revers col */}
        <path d="M127,304 L136,318 L145,304"
          fill="#3a3a50" stroke="#28283a" strokeWidth="1"
        />

        {/* — Ceinture — */}
        <rect x="123" y="360" width="26" height="6" rx="3" fill="#181826" />
        <rect x="133" y="360" width="6" height="6" rx="1" fill="#2a2a3a" />

        {/* — Bras gauche (pendant, légèrement courbé) — */}
        <path d="M118,318 Q104,342 106,366"
          stroke="#3a3a50" strokeWidth="12" fill="none" strokeLinecap="round"
        />
        {/* — Bras droit — */}
        <path d="M154,318 Q166,342 163,366"
          stroke="#3a3a50" strokeWidth="12" fill="none" strokeLinecap="round"
        />

        {/* — Mains — */}
        <ellipse cx="106" cy="369" rx="8" ry="5.5"
          fill="#4a4a5e"
          transform="rotate(-18 106 369)"
        />
        <ellipse cx="163" cy="369" rx="8" ry="5.5"
          fill="#4a4a5e"
          transform="rotate(18 163 369)"
        />

        {/* — Nuque — */}
        <rect x="128" y="298" width="16" height="17" rx="5" fill="#505065" />

        {/* — Tête — */}
        <circle cx="136" cy="289" r="14" fill="#505065" />

        {/* — Oreilles (détail subtil) — */}
        <path d="M123,292 Q120,289 123,286"
          stroke="#404055" strokeWidth="3" fill="none" strokeLinecap="round"
        />

        {/* — Chapeau brim (blanc cassé) — */}
        <ellipse cx="136" cy="279" rx="23" ry="5.5" fill="#d8dae8" />
        {/* — Chapeau couronne — */}
        <path d="M116,280 C114,260 120,253 136,251 C152,253 158,260 156,280"
          fill="#e0e2ee"
        />
        {/* — Bandeau chapeau — */}
        <path d="M116,280 C114,268 120,264 136,262 C152,264 158,268 156,280"
          fill="none" stroke="#b0b2c0" strokeWidth="2"
        />

        {/* ════════════════════════════════════════════════
            GRAND CUBE ISOMÉTRIQUE (centre-droite)

            Edge visible length s = 68px
            cos30 * 68 ≈ 59   |   sin30 * 68 = 34

            Top vertex :   (338, 192)
            Right vertex : (397, 226)  [+59, +34]
            Bot vertex :   (338, 260)  [  0, +68 from top → 2*34]
            Left vertex :  (279, 226)  [-59, +34]

            Right face :   (397,226) → (338,260) → (338,328) → (397,294)
            Left face :    (279,226) → (338,260) → (338,328) → (279,294)
        ════════════════════════════════════════════════ */}
        {/* Aura glow derrière le cube */}
        <ellipse cx="338" cy="295" rx="78" ry="68"
          fill="rgba(120,66,127,0.18)"
          filter="url(#oc-cube-glow)"
        />

        {/* Face supérieure */}
        <polygon
          points="338,192 397,226 338,260 279,226"
          fill="url(#oc-top)"
        />
        {/* Reflets surface supérieure */}
        <line x1="279" y1="226" x2="397" y2="226"
          stroke="rgba(255,255,255,0.14)" strokeWidth="1"
        />
        <line x1="338" y1="192" x2="338" y2="260"
          stroke="rgba(255,255,255,0.08)" strokeWidth="1"
        />

        {/* Face droite (or) */}
        <polygon
          points="397,226 338,260 338,328 397,294"
          fill="url(#oc-right)"
        />
        {/* Stries face droite */}
        <line x1="367" y1="243" x2="367" y2="311"
          stroke="rgba(0,0,0,0.12)" strokeWidth="1"
        />

        {/* Face gauche (violet sombre) */}
        <polygon
          points="279,226 338,260 338,328 279,294"
          fill="url(#oc-left)"
        />
        {/* Stries face gauche */}
        <line x1="309" y1="243" x2="309" y2="311"
          stroke="rgba(255,255,255,0.05)" strokeWidth="1"
        />

        {/* Arête avant (ligne de lumière) */}
        <line x1="338" y1="260" x2="338" y2="328"
          stroke="rgba(255,255,255,0.18)" strokeWidth="1.5"
        />

        {/* ════════════════════════════════════════════════
            PETIT CUBE FLOTTANT (haut-droite)

            s = 40   |   cos30*40 ≈ 35   |   sin30*40 = 20

            Top :   (428, 155)
            Right : (463, 175)
            Bot :   (428, 195)
            Left :  (393, 175)

            R face : (463,175) → (428,195) → (428,235) → (463,215)
            L face : (393,175) → (428,195) → (428,235) → (393,215)
        ════════════════════════════════════════════════ */}
        <polygon
          points="428,155 463,175 428,195 393,175"
          fill="url(#oc-sm-top)"
          opacity="0.82"
        />
        <polygon
          points="463,175 428,195 428,235 463,215"
          fill="url(#oc-sm-right)"
          opacity="0.82"
        />
        <polygon
          points="393,175 428,195 428,235 393,215"
          fill="#1e0d28"
          opacity="0.82"
        />
        {/* Arête avant petit cube */}
        <line x1="428" y1="195" x2="428" y2="235"
          stroke="rgba(255,255,255,0.14)" strokeWidth="1"
        />

        {/* ════════════════════════════════════════════════
            CHEMIN EN POINTILLÉS DORÉS
            De la figure (bas-gauche) → cube → astérisque (haut-droite)
        ════════════════════════════════════════════════ */}
        <path
          d="M 165,400 Q 240,340 295,295 Q 340,262 415,192"
          fill="none"
          stroke="#cda540"
          strokeWidth="2.8"
          strokeDasharray="10 9"
          strokeLinecap="round"
          opacity="0.90"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="0"
            to="-190"
            dur="3.2s"
            repeatCount="indefinite"
          />
        </path>

        {/* Points d'ancrage du chemin */}
        <circle cx="165" cy="400" r="4" fill="#cda540" opacity="0.70" />
        <circle cx="415" cy="192" r="4" fill="#cda540" opacity="0.70" />

        {/* ════════════════════════════════════════════════
            ASTÉRISQUE DORÉ (haut-droite)
        ════════════════════════════════════════════════ */}
        <g transform="translate(458, 145)" filter="url(#oc-glow)">
          <line x1="-22" y1="0"   x2="22" y2="0"   stroke="#cda540" strokeWidth="4.5" strokeLinecap="round" />
          <line x1="0"   y1="-22" x2="0"  y2="22"  stroke="#cda540" strokeWidth="4.5" strokeLinecap="round" />
          <line x1="-15" y1="-15" x2="15" y2="15"  stroke="#cda540" strokeWidth="4.5" strokeLinecap="round" />
          <line x1="15"  y1="-15" x2="-15" y2="15" stroke="#cda540" strokeWidth="4.5" strokeLinecap="round" />
          <animate attributeName="opacity" values="0.65;1;0.65" dur="2.8s" repeatCount="indefinite" />
        </g>

        {/* ════════════════════════════════════════════════
            ACCENTS DÉCORATIFS
        ════════════════════════════════════════════════ */}
        {/* Petit diamant flottant près du grand cube */}
        <polygon
          points="220,178 240,192 220,206 200,192"
          fill="none"
          stroke="rgba(205,165,64,0.42)"
          strokeWidth="1.5"
        />
        {/* Points lumineux */}
        <circle cx="225" cy="208" r="2.5" fill="rgba(205,165,64,0.35)" />
        <circle cx="354" cy="162" r="2"   fill="rgba(190,140,220,0.45)" />
        <circle cx="420" cy="348" r="2.5" fill="rgba(205,165,64,0.28)" />
        <circle cx="70"  cy="310" r="2"   fill="rgba(155,90,170,0.35)" />

        {/* Ligne de grille légère en fond (inspire Octave) */}
        <line x1="0" y1="248" x2="500" y2="248"
          stroke="rgba(205,165,64,0.04)" strokeWidth="1"
        />
        <line x1="248" y1="0" x2="248" y2="500"
          stroke="rgba(205,165,64,0.04)" strokeWidth="1"
        />
      </svg>
    </div>
  );
}
