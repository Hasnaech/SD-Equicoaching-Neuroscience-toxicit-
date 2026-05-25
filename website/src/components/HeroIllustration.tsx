"use client";

/**
 * HeroIllustration — "Un leader, une équipe, une décision lucide"
 * Silhouettes humaines reconnaissables (tête + épaules plates)
 * Leader central doré, équipe violette, flux d'influence entre eux
 * Design plat / iconographique — pas de sphères planétaires
 */

// Composant silhouette humaine réutilisable
function Person({
  cx, cy,        // centre de la tête
  r,             // rayon de la tête
  fill,          // couleur de remplissage
  stroke,        // couleur du contour
  strokeW = 1.5, // épaisseur contour
  opacity = 1,
  glowId,
}: {
  cx: number; cy: number; r: number;
  fill: string; stroke: string; strokeW?: number;
  opacity?: number; glowId?: string;
}) {
  const sx = r * 1.55; // demi-largeur épaules
  const sy1 = r * 1.15; // hauteur début épaules
  const sy2 = r * 1.65; // profondeur arc épaules

  return (
    <g opacity={opacity} filter={glowId ? `url(#${glowId})` : undefined}>
      {/* Tête */}
      <circle
        cx={cx} cy={cy} r={r}
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeW}
      />
      {/* Épaules */}
      <path
        d={`M ${cx - sx},${cy + sy1} Q ${cx},${cy + sy2} ${cx + sx},${cy + sy1}`}
        fill="none"
        stroke={stroke}
        strokeWidth={strokeW}
        strokeLinecap="round"
      />
    </g>
  );
}

export default function HeroIllustration() {
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <svg
        viewBox="0 0 500 460"
        style={{ width: "100%", height: "100%", display: "block" }}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Fond radial */}
          <radialGradient id="hi2-bg" cx="50%" cy="52%" r="52%">
            <stop offset="0%"   stopColor="#6a3070" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#1a0a1e" stopOpacity="0" />
          </radialGradient>

          {/* Glow leader */}
          <filter id="hi2-leader-glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="10" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>

          {/* Glow équipe */}
          <filter id="hi2-team-glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="5" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>

          {/* Glow impulsion */}
          <filter id="hi2-pulse" x="-200%" y="-200%" width="500%" height="500%">
            <feGaussianBlur stdDeviation="2.5" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* Fond */}
        <circle cx="250" cy="230" r="260" fill="url(#hi2-bg)" />

        {/* ══ CONNEXIONS entre leader et équipe ══════════════
            Tracées AVANT les silhouettes pour rester en dessous
        ══════════════════════════════════════════════════ */}

        {/* Leader (250,270) → Gauche-haut (95,160) */}
        <path d="M 250,255 C 200,220 150,192 95,160"
          fill="none" stroke="rgba(205,165,64,0.22)" strokeWidth="1.2" strokeLinecap="round" />

        {/* Leader → Centre-haut (250,110) */}
        <path d="M 250,255 C 250,210 250,165 250,112"
          fill="none" stroke="rgba(205,165,64,0.20)" strokeWidth="1.2" strokeLinecap="round" />

        {/* Leader → Droite-haut (405,160) */}
        <path d="M 250,255 C 300,220 350,192 405,160"
          fill="none" stroke="rgba(205,165,64,0.22)" strokeWidth="1.2" strokeLinecap="round" />

        {/* Leader → Gauche (68,268) */}
        <path d="M 250,268 C 195,268 140,268 70,268"
          fill="none" stroke="rgba(205,165,64,0.16)" strokeWidth="1.2" strokeLinecap="round" />

        {/* Leader → Droite (432,268) */}
        <path d="M 250,268 C 305,268 360,268 430,268"
          fill="none" stroke="rgba(205,165,64,0.16)" strokeWidth="1.2" strokeLinecap="round" />

        {/* Leader → Gauche-bas (95,375) */}
        <path d="M 250,282 C 200,315 150,345 95,375"
          fill="none" stroke="rgba(155,90,170,0.18)" strokeWidth="1" strokeDasharray="4 5" strokeLinecap="round" />

        {/* Leader → Droite-bas (405,375) */}
        <path d="M 250,282 C 300,315 350,345 405,375"
          fill="none" stroke="rgba(155,90,170,0.18)" strokeWidth="1" strokeDasharray="4 5" strokeLinecap="round" />

        {/* ══ IMPULSIONS VOYAGEUSES ═══════════════════════ */}

        <circle r="3" fill="#cda540" filter="url(#hi2-pulse)" opacity="0.9">
          <animateMotion dur="2.6s" begin="0s" repeatCount="indefinite"
            path="M 250,255 C 200,220 150,192 95,160" />
        </circle>
        <circle r="3" fill="#cda540" filter="url(#hi2-pulse)" opacity="0.9">
          <animateMotion dur="2.1s" begin="0.8s" repeatCount="indefinite"
            path="M 250,255 C 250,210 250,165 250,112" />
        </circle>
        <circle r="3" fill="#cda540" filter="url(#hi2-pulse)" opacity="0.9">
          <animateMotion dur="2.6s" begin="1.4s" repeatCount="indefinite"
            path="M 250,255 C 300,220 350,192 405,160" />
        </circle>
        <circle r="2.5" fill="#9b5aaa" filter="url(#hi2-pulse)" opacity="0.85">
          <animateMotion dur="2.3s" begin="0.4s" repeatCount="indefinite"
            path="M 250,268 C 195,268 140,268 70,268" />
        </circle>
        <circle r="2.5" fill="#9b5aaa" filter="url(#hi2-pulse)" opacity="0.85">
          <animateMotion dur="2.3s" begin="1.1s" repeatCount="indefinite"
            path="M 250,268 C 305,268 360,268 430,268" />
        </circle>
        <circle r="2" fill="#9b5aaa" filter="url(#hi2-pulse)" opacity="0.7">
          <animateMotion dur="2.8s" begin="1.8s" repeatCount="indefinite"
            path="M 250,282 C 200,315 150,345 95,375" />
        </circle>
        <circle r="2" fill="#9b5aaa" filter="url(#hi2-pulse)" opacity="0.7">
          <animateMotion dur="2.8s" begin="0.6s" repeatCount="indefinite"
            path="M 250,282 C 300,315 350,345 405,375" />
        </circle>

        {/* ══ SILHOUETTES ÉQUIPE (plates, iconographiques) ══ */}

        {/* Gauche-haut */}
        <Person cx={95}  cy={148} r={16} fill="rgba(120,66,127,0.25)" stroke="#9b5aaa" glowId="hi2-team-glow" />

        {/* Centre-haut */}
        <Person cx={250} cy={100} r={16} fill="rgba(120,66,127,0.25)" stroke="#9b5aaa" glowId="hi2-team-glow" />

        {/* Droite-haut */}
        <Person cx={405} cy={148} r={16} fill="rgba(120,66,127,0.25)" stroke="#9b5aaa" glowId="hi2-team-glow" />

        {/* Gauche */}
        <Person cx={60}  cy={255} r={14} fill="rgba(120,66,127,0.20)" stroke="rgba(155,90,170,0.70)" />

        {/* Droite */}
        <Person cx={440} cy={255} r={14} fill="rgba(120,66,127,0.20)" stroke="rgba(155,90,170,0.70)" />

        {/* Gauche-bas */}
        <Person cx={95}  cy={363} r={14} fill="rgba(120,66,127,0.18)" stroke="rgba(155,90,170,0.55)" />

        {/* Droite-bas */}
        <Person cx={405} cy={363} r={14} fill="rgba(120,66,127,0.18)" stroke="rgba(155,90,170,0.55)" />

        {/* ══ LEADER CENTRAL ══════════════════════════════ */}

        {/* Halo leader */}
        <circle cx="250" cy="262" r="58" fill="rgba(205,165,64,0.07)">
          <animate attributeName="r"       values="54;64;54"         dur="5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.05;0.12;0.05"   dur="5s" repeatCount="indefinite" />
        </circle>

        {/* Leader — tête + épaules, style iconographique */}
        <Person
          cx={250} cy={248}
          r={36}
          fill="#cda540"
          stroke="#f0d070"
          strokeW={2}
          glowId="hi2-leader-glow"
        />

        {/* Reflet vitré sur la tête du leader */}
        <ellipse cx="238" cy="237" rx="10" ry="7" fill="rgba(255,255,255,0.28)" transform="rotate(-28,238,237)" />
        <circle  cx="243" cy="241" r="4"  fill="rgba(255,255,255,0.40)" />

        {/* Pulsation douce du leader */}
        <circle cx="250" cy="248" r="36" fill="none" stroke="rgba(205,165,64,0.30)" strokeWidth="1">
          <animate attributeName="r"       values="36;44;36"         dur="5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.30;0;0.30"      dur="5s" repeatCount="indefinite" />
        </circle>

        {/* ══ ÉLÉMENT "CLARTÉ MENTALE" au-dessus du leader ══
            Représente la disponibilité neurologique — 3 arcs concentriques
            Subtil, pas médical
        ══════════════════════════════════════════════════ */}
        <g opacity="0.6">
          <path d="M 230,206 Q 250,196 270,206" fill="none" stroke="#cda540" strokeWidth="1.5" strokeLinecap="round">
            <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" begin="0s" repeatCount="indefinite" />
          </path>
          <path d="M 222,198 Q 250,183 278,198" fill="none" stroke="rgba(205,165,64,0.6)" strokeWidth="1" strokeLinecap="round">
            <animate attributeName="opacity" values="0.3;0.65;0.3" dur="3s" begin="0.4s" repeatCount="indefinite" />
          </path>
          <path d="M 214,190 Q 250,172 286,190" fill="none" stroke="rgba(205,165,64,0.35)" strokeWidth="1" strokeLinecap="round">
            <animate attributeName="opacity" values="0.2;0.50;0.2" dur="3s" begin="0.8s" repeatCount="indefinite" />
          </path>
        </g>
      </svg>
    </div>
  );
}
