"use client";

/**
 * HeroIllustration — Réseau neural / synaptique
 * Nœuds à positions organiques irrégulières + connexions synaptiques
 * Impulsions qui voyagent le long des connexions (animateMotion inline)
 * Aucune orbite circulaire — look "réseau neuronal", pas "système solaire"
 */
export default function HeroIllustration() {
  // ── Nœuds (positions organiques, pas de cercles concentriques) ──────────
  const cx = 252;
  const cy = 250;

  // Satellites : [x, y, rayon, couleur, durée pulse, délai pulse]
  const nodes: [number, number, number, string, string, string][] = [
    [352, 145, 9,   "#cda540", "3.1s", "0s"   ],  // N0 — haut droite
    [148, 162, 8,   "#9b5aaa", "2.7s", "0.8s" ],  // N1 — haut gauche
    [420, 265, 10,  "#cda540", "2.4s", "0.4s" ],  // N2 — droite
    [88,  280, 8,   "#78427f", "3.5s", "1.2s" ],  // N3 — gauche
    [325, 388, 9,   "#9b5aaa", "2.9s", "0.6s" ],  // N4 — bas droite
    [168, 378, 8,   "#cda540", "3.3s", "1.5s" ],  // N5 — bas gauche
    [252,  95, 7,   "#cda540", "2.2s", "0.3s" ],  // N6 — haut centre
    [388, 345, 6,   "#78427f", "2.6s", "1.0s" ],  // N7 — bas droite loin
    [155, 102, 6,   "#9b5aaa", "3.0s", "0.7s" ],  // N8 — haut gauche loin
    [445, 168, 5.5, "#cda540", "2.8s", "1.4s" ],  // N9 — coin haut droite
    [65,  185, 5,   "#78427f", "3.2s", "0.2s" ],  // N10 — coin gauche
    [290, 440, 5.5, "#9b5aaa", "2.5s", "0.9s" ],  // N11 — bas centre
  ];

  // ── Connexions (lignes synaptiques) ─────────────────────────────────────
  // [from_x, from_y, to_x, to_y, opacité ligne]
  const lines: [number, number, number, number, number][] = [
    [cx,       cy,       352, 145, 0.18],  // centre → N0
    [cx,       cy,       148, 162, 0.16],  // centre → N1
    [cx,       cy,       420, 265, 0.20],  // centre → N2
    [cx,       cy,       88,  280, 0.15],  // centre → N3
    [cx,       cy,       325, 388, 0.17],  // centre → N4
    [cx,       cy,       168, 378, 0.16],  // centre → N5
    [352,      145,      252,  95, 0.12],  // N0 → N6
    [148,      162,      252,  95, 0.11],  // N1 → N6
    [352,      145,      420, 265, 0.10],  // N0 → N2
    [148,      162,      88,  280, 0.10],  // N1 → N3
    [325,      388,      388, 345, 0.10],  // N4 → N7
    [168,      378,      388, 345, 0.09],  // N5 → N7
    [148,      162,      155, 102, 0.10],  // N1 → N8
    [352,      145,      445, 168, 0.09],  // N0 → N9
    [148,      162,      65,  185, 0.08],  // N1 → N10
    [325,      388,      290, 440, 0.09],  // N4 → N11
    [168,      378,      290, 440, 0.08],  // N5 → N11
  ];

  // ── Impulsions synaptiques ───────────────────────────────────────────────
  // [path, dur, begin, couleur]  — voyagent le long d'une connexion
  const pulses: [string, string, string, string][] = [
    [`M ${cx},${cy} L 352,145`,  "2.4s", "0s",    "#cda540"],
    [`M ${cx},${cy} L 420,265`,  "1.9s", "0.7s",  "#e8c060"],
    [`M ${cx},${cy} L 88,280`,   "2.8s", "1.2s",  "#9b5aaa"],
    [`M ${cx},${cy} L 325,388`,  "3.1s", "0.3s",  "#cda540"],
    [`M ${cx},${cy} L 168,378`,  "2.6s", "1.8s",  "#cda540"],
    [`M ${cx},${cy} L 148,162`,  "2.2s", "0.5s",  "#9b5aaa"],
    [`M 352,145 L 252,95`,       "1.5s", "1.1s",  "#cda540"],
    [`M 325,388 L 388,345`,      "1.7s", "0.4s",  "#78427f"],
    [`M 352,145 L 420,265`,      "2.0s", "1.6s",  "#cda540"],
    [`M 148,162 L 88,280`,       "2.3s", "0.9s",  "#9b5aaa"],
    [`M 168,378 L 290,440`,      "1.8s", "2.1s",  "#cda540"],
  ];

  return (
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <svg
        viewBox="0 0 500 500"
        style={{ width: "100%", height: "100%", display: "block" }}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradient orbe centrale */}
          <radialGradient id="ng-gold" cx="34%" cy="29%" r="72%">
            <stop offset="0%"   stopColor="#f8ea95" />
            <stop offset="40%"  stopColor="#cda540" />
            <stop offset="100%" stopColor="#6e4010" />
          </radialGradient>

          {/* Gradient violet node */}
          <radialGradient id="ng-violet" cx="38%" cy="33%" r="68%">
            <stop offset="0%"   stopColor="#d080e8" />
            <stop offset="50%"  stopColor="#9b5aaa" />
            <stop offset="100%" stopColor="#3a1045" />
          </radialGradient>

          {/* Fond radial très doux */}
          <radialGradient id="ng-bg" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#6e3878" stopOpacity="0.22" />
            <stop offset="60%"  stopColor="#3a1545" stopOpacity="0.10" />
            <stop offset="100%" stopColor="#1a0a1e" stopOpacity="0"    />
          </radialGradient>

          {/* Glow fort — orbe centrale */}
          <filter id="ng-glow-xl" x="-70%" y="-70%" width="240%" height="240%">
            <feGaussianBlur stdDeviation="10" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>

          {/* Glow moyen — gros nœuds */}
          <filter id="ng-glow-md" x="-90%" y="-90%" width="280%" height="280%">
            <feGaussianBlur stdDeviation="4.5" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>

          {/* Glow léger — petits nœuds */}
          <filter id="ng-glow-sm" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="2.5" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>

          {/* Glow impulsion (petite) */}
          <filter id="ng-pulse-glow" x="-200%" y="-200%" width="500%" height="500%">
            <feGaussianBlur stdDeviation="2" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* ── Fond radial ─────────────────────────────────── */}
        <circle cx={cx} cy={cy} r="235" fill="url(#ng-bg)">
          <animate attributeName="opacity" values="0.7;1;0.7" dur="8s" repeatCount="indefinite" />
        </circle>

        {/* ── Connexions synaptiques ───────────────────────── */}
        {lines.map(([x1, y1, x2, y2, op], i) => (
          <line
            key={`l${i}`}
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke={`rgba(205,165,64,${op})`}
            strokeWidth="1"
            strokeLinecap="round"
          />
        ))}

        {/* ── Impulsions synaptiques (dots voyageurs) ──────── */}
        {pulses.map(([path, dur, begin, color], i) => (
          <circle key={`p${i}`} r="2.8" fill={color} filter="url(#ng-pulse-glow)" opacity="0.9">
            <animateMotion
              dur={dur}
              begin={begin}
              repeatCount="indefinite"
              path={path}
            />
          </circle>
        ))}

        {/* ── Nœuds satellites ─────────────────────────────── */}
        {nodes.map(([x, y, r, color, dur, delay], i) => {
          const isLarge = r >= 8;
          return (
            <circle
              key={`n${i}`}
              cx={x} cy={y} r={r}
              fill={color}
              filter={isLarge ? "url(#ng-glow-md)" : "url(#ng-glow-sm)"}
            >
              <animate
                attributeName="opacity"
                values="0.55;1;0.55"
                dur={dur}
                begin={delay}
                repeatCount="indefinite"
              />
              <animate
                attributeName="r"
                values={`${r * 0.9};${r * 1.1};${r * 0.9}`}
                dur={dur}
                begin={delay}
                repeatCount="indefinite"
              />
            </circle>
          );
        })}

        {/* ── Halo de l'orbe centrale ──────────────────────── */}
        <circle cx={cx} cy={cy} r="70" fill="rgba(205,165,64,0.08)">
          <animate attributeName="r"       values="65;76;65"         dur="4.8s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.06;0.14;0.06"   dur="4.8s" repeatCount="indefinite" />
        </circle>

        {/* ── Orbe centrale ────────────────────────────────── */}
        <circle cx={cx} cy={cy} r="44" fill="url(#ng-gold)" filter="url(#ng-glow-xl)">
          <animate
            attributeName="r"
            values="42;47;42"
            dur="4.8s"
            calcMode="spline"
            keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
            repeatCount="indefinite"
          />
        </circle>

        {/* Reflet vitré — grand */}
        <ellipse
          cx={cx - 14} cy={cy - 13}
          rx="13" ry="9"
          fill="rgba(255,255,255,0.22)"
          transform={`rotate(-30, ${cx - 14}, ${cy - 13})`}
        />
        {/* Reflet vitré — petit brillant */}
        <circle cx={cx - 7} cy={cy - 6} r="5" fill="rgba(255,255,255,0.38)" />
      </svg>
    </div>
  );
}
