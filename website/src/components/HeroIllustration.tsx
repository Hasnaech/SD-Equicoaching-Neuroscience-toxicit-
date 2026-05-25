"use client";

/**
 * HeroIllustration — "Intelligence Collective & Leadership"
 * Figures humaines abstraites en réseau collaboratif + courbe de performance
 * Esthétique corporate / consulting — pas médical
 * Animations SVG SMIL : glow lent, flux de connexions, courbe ascendante
 */
export default function HeroIllustration() {
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <svg
        viewBox="0 0 520 480"
        style={{ width: "100%", height: "100%", display: "block" }}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* ── Gradients ── */}
          <radialGradient id="lg-gold" cx="34%" cy="28%" r="72%">
            <stop offset="0%"   stopColor="#f8ea90" />
            <stop offset="42%"  stopColor="#cda540" />
            <stop offset="100%" stopColor="#6a3c08" />
          </radialGradient>

          <radialGradient id="lg-violet" cx="36%" cy="30%" r="70%">
            <stop offset="0%"   stopColor="#c880e0" />
            <stop offset="50%"  stopColor="#9b5aaa" />
            <stop offset="100%" stopColor="#3a1045" />
          </radialGradient>

          <radialGradient id="lg-violet-dark" cx="36%" cy="30%" r="70%">
            <stop offset="0%"   stopColor="#9b5aaa" />
            <stop offset="55%"  stopColor="#78427f" />
            <stop offset="100%" stopColor="#2a0a30" />
          </radialGradient>

          <radialGradient id="lg-bg" cx="50%" cy="42%" r="55%">
            <stop offset="0%"   stopColor="#5a2a62" stopOpacity="0.20" />
            <stop offset="100%" stopColor="#1a0a1e" stopOpacity="0"    />
          </radialGradient>

          {/* ── Glow filters ── */}
          <filter id="lg-glow-leader" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="9"   result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="lg-glow-node" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="4"   result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="lg-glow-sm" x="-120%" y="-120%" width="340%" height="340%">
            <feGaussianBlur stdDeviation="2.5" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="lg-glow-line" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.8" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* ── Fond radial ─────────────────────────────────────── */}
        <circle cx="260" cy="240" r="250" fill="url(#lg-bg)" />

        {/* ══════════════════════════════════════════════════════
             COURBE DE PERFORMANCE ASCENDANTE (arrière-plan)
             Représente la croissance / le leadership en action
        ══════════════════════════════════════════════════════ */}

        {/* Aire sous la courbe — très translucide */}
        <path
          d="M 60,390 C 120,360 170,310 230,270 S 320,210 390,175 S 450,158 490,150 L 490,420 L 60,420 Z"
          fill="rgba(205,165,64,0.04)"
        />

        {/* Courbe principale — gold subtil */}
        <path
          d="M 60,390 C 120,360 170,310 230,270 S 320,210 390,175 S 450,158 490,150"
          fill="none"
          stroke="rgba(205,165,64,0.22)"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <animate
            attributeName="stroke-opacity"
            values="0.15;0.30;0.15"
            dur="5s"
            repeatCount="indefinite"
          />
        </path>

        {/* Point final sur la courbe — accent doré */}
        <circle cx="490" cy="150" r="4" fill="#cda540" opacity="0.7" filter="url(#lg-glow-sm)" />

        {/* Ligne de base légère */}
        <line
          x1="50" y1="410" x2="500" y2="410"
          stroke="rgba(205,165,64,0.08)"
          strokeWidth="1"
          strokeDasharray="4 8"
        />

        {/* ══════════════════════════════════════════════════════
             CONNEXIONS ENTRE PERSONNES
             Bezier courbes douces — réseau collaboratif
        ══════════════════════════════════════════════════════ */}

        {/* Leader → chaque manager */}
        {/* Leader(260,235) → Haut-gauche(148,135) */}
        <path d="M 260,235 C 220,200 180,168 148,135"
          fill="none" stroke="rgba(205,165,64,0.18)" strokeWidth="1" strokeLinecap="round" />
        {/* Leader → Haut-centre(260,105) */}
        <path d="M 260,235 C 260,195 260,155 260,105"
          fill="none" stroke="rgba(205,165,64,0.16)" strokeWidth="1" strokeLinecap="round" />
        {/* Leader → Haut-droit(372,135) */}
        <path d="M 260,235 C 295,198 332,165 372,135"
          fill="none" stroke="rgba(205,165,64,0.18)" strokeWidth="1" strokeLinecap="round" />
        {/* Leader → Gauche(105,245) */}
        <path d="M 260,235 C 215,238 165,241 105,245"
          fill="none" stroke="rgba(205,165,64,0.14)" strokeWidth="1" strokeLinecap="round" />
        {/* Leader → Droite(415,245) */}
        <path d="M 260,235 C 305,237 355,241 415,245"
          fill="none" stroke="rgba(205,165,64,0.14)" strokeWidth="1" strokeLinecap="round" />
        {/* Leader → Bas-gauche(165,355) */}
        <path d="M 260,235 C 232,278 202,315 165,355"
          fill="none" stroke="rgba(205,165,64,0.15)" strokeWidth="1" strokeLinecap="round" />
        {/* Leader → Bas-droit(355,355) */}
        <path d="M 260,235 C 285,278 315,315 355,355"
          fill="none" stroke="rgba(205,165,64,0.15)" strokeWidth="1" strokeLinecap="round" />

        {/* Connexions latérales (entre managers) */}
        <path d="M 148,135 C 195,120 225,115 260,105"
          fill="none" stroke="rgba(155,90,170,0.12)" strokeWidth="1" strokeDasharray="3 5" strokeLinecap="round" />
        <path d="M 260,105 C 295,115 330,120 372,135"
          fill="none" stroke="rgba(155,90,170,0.12)" strokeWidth="1" strokeDasharray="3 5" strokeLinecap="round" />
        <path d="M 105,245 C 120,295 138,320 165,355"
          fill="none" stroke="rgba(155,90,170,0.10)" strokeWidth="1" strokeDasharray="3 5" strokeLinecap="round" />
        <path d="M 415,245 C 400,295 382,320 355,355"
          fill="none" stroke="rgba(155,90,170,0.10)" strokeWidth="1" strokeDasharray="3 5" strokeLinecap="round" />

        {/* ── Flux d'énergie sur les connexions principales ── */}
        {/* Impulsion Leader → haut-gauche */}
        <circle r="2.5" fill="rgba(205,165,64,0.85)" filter="url(#lg-glow-sm)">
          <animateMotion dur="2.8s" begin="0s" repeatCount="indefinite"
            path="M 260,235 C 220,200 180,168 148,135" />
        </circle>
        {/* Impulsion Leader → haut-centre */}
        <circle r="2.5" fill="rgba(205,165,64,0.85)" filter="url(#lg-glow-sm)">
          <animateMotion dur="2.2s" begin="0.9s" repeatCount="indefinite"
            path="M 260,235 C 260,195 260,155 260,105" />
        </circle>
        {/* Impulsion Leader → haut-droit */}
        <circle r="2.5" fill="rgba(205,165,64,0.85)" filter="url(#lg-glow-sm)">
          <animateMotion dur="2.8s" begin="1.5s" repeatCount="indefinite"
            path="M 260,235 C 295,198 332,165 372,135" />
        </circle>
        {/* Impulsion Leader → gauche */}
        <circle r="2" fill="rgba(155,90,170,0.8)" filter="url(#lg-glow-sm)">
          <animateMotion dur="2.4s" begin="0.4s" repeatCount="indefinite"
            path="M 260,235 C 215,238 165,241 105,245" />
        </circle>
        {/* Impulsion Leader → droite */}
        <circle r="2" fill="rgba(155,90,170,0.8)" filter="url(#lg-glow-sm)">
          <animateMotion dur="2.4s" begin="1.2s" repeatCount="indefinite"
            path="M 260,235 C 305,237 355,241 415,245" />
        </circle>
        {/* Impulsion Leader → bas-gauche */}
        <circle r="2" fill="rgba(205,165,64,0.7)" filter="url(#lg-glow-sm)">
          <animateMotion dur="2.6s" begin="0.7s" repeatCount="indefinite"
            path="M 260,235 C 232,278 202,315 165,355" />
        </circle>
        {/* Impulsion Leader → bas-droit */}
        <circle r="2" fill="rgba(205,165,64,0.7)" filter="url(#lg-glow-sm)">
          <animateMotion dur="2.6s" begin="2.0s" repeatCount="indefinite"
            path="M 260,235 C 285,278 315,315 355,355" />
        </circle>

        {/* ══════════════════════════════════════════════════════
             ICÔNES PERSONNES (tête + épaules abstraites)
             Head = cercle  |  Shoulders = arc discret
        ══════════════════════════════════════════════════════ */}

        {/* Helper macro : personne = cercle tête + arc épaules */}
        {/* On définit chaque personne à la main pour contrôle précis */}

        {/* ── Manager haut-gauche ── */}
        <g filter="url(#lg-glow-node)">
          <circle cx="148" cy="126" r="11" fill="url(#lg-violet)" />
          <circle cx="143" cy="121" r="3.5" fill="rgba(255,255,255,0.25)" />
        </g>
        <path d="M 130,140 Q 148,150 166,140" fill="none" stroke="rgba(155,90,170,0.50)" strokeWidth="1.5" strokeLinecap="round" />
        <animate attributeName="opacity" values="0.75;1;0.75" dur="3.8s" begin="0.5s" repeatCount="indefinite" />

        {/* ── Manager haut-centre ── */}
        <g filter="url(#lg-glow-node)">
          <circle cx="260" cy="96" r="11" fill="url(#lg-violet)" />
          <circle cx="255" cy="91" r="3.5" fill="rgba(255,255,255,0.25)" />
        </g>
        <path d="M 242,110 Q 260,120 278,110" fill="none" stroke="rgba(155,90,170,0.50)" strokeWidth="1.5" strokeLinecap="round" />

        {/* ── Manager haut-droit ── */}
        <g filter="url(#lg-glow-node)">
          <circle cx="372" cy="126" r="11" fill="url(#lg-violet)" />
          <circle cx="367" cy="121" r="3.5" fill="rgba(255,255,255,0.25)" />
        </g>
        <path d="M 354,140 Q 372,150 390,140" fill="none" stroke="rgba(155,90,170,0.50)" strokeWidth="1.5" strokeLinecap="round" />

        {/* ── Manager gauche ── */}
        <g filter="url(#lg-glow-node)">
          <circle cx="105" cy="236" r="10" fill="url(#lg-violet-dark)" />
          <circle cx="100" cy="231" r="3" fill="rgba(255,255,255,0.22)" />
        </g>
        <path d="M 88,249 Q 105,258 122,249" fill="none" stroke="rgba(120,66,127,0.50)" strokeWidth="1.5" strokeLinecap="round" />

        {/* ── Manager droite ── */}
        <g filter="url(#lg-glow-node)">
          <circle cx="415" cy="236" r="10" fill="url(#lg-violet-dark)" />
          <circle cx="410" cy="231" r="3" fill="rgba(255,255,255,0.22)" />
        </g>
        <path d="M 398,249 Q 415,258 432,249" fill="none" stroke="rgba(120,66,127,0.50)" strokeWidth="1.5" strokeLinecap="round" />

        {/* ── Manager bas-gauche ── */}
        <g filter="url(#lg-glow-node)">
          <circle cx="165" cy="346" r="10" fill="url(#lg-violet-dark)" />
          <circle cx="160" cy="341" r="3" fill="rgba(255,255,255,0.22)" />
        </g>
        <path d="M 148,359 Q 165,368 182,359" fill="none" stroke="rgba(120,66,127,0.50)" strokeWidth="1.5" strokeLinecap="round" />

        {/* ── Manager bas-droit ── */}
        <g filter="url(#lg-glow-node)">
          <circle cx="355" cy="346" r="10" fill="url(#lg-violet-dark)" />
          <circle cx="350" cy="341" r="3" fill="rgba(255,255,255,0.22)" />
        </g>
        <path d="M 338,359 Q 355,368 372,359" fill="none" stroke="rgba(120,66,127,0.50)" strokeWidth="1.5" strokeLinecap="round" />

        {/* ══════════════════════════════════════════════════════
             LEADER CENTRAL — plus grand, doré, pulsation douce
        ══════════════════════════════════════════════════════ */}

        {/* Halo du leader */}
        <circle cx="260" cy="235" r="52" fill="rgba(205,165,64,0.08)">
          <animate attributeName="r"       values="48;56;48"       dur="5.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.06;0.14;0.06" dur="5.5s" repeatCount="indefinite" />
        </circle>

        {/* Bague décorative */}
        <circle cx="260" cy="235" r="40"
          fill="none"
          stroke="rgba(205,165,64,0.18)"
          strokeWidth="1"
          strokeDasharray="5 7"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 260 235"
            to="360 260 235"
            dur="40s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Tête du leader */}
        <circle cx="260" cy="220" r="22" fill="url(#lg-gold)" filter="url(#lg-glow-leader)">
          <animate attributeName="r" values="21;23.5;21" dur="5.5s" repeatCount="indefinite" />
        </circle>

        {/* Reflet vitré */}
        <ellipse cx="251" cy="212" rx="7" ry="5" fill="rgba(255,255,255,0.28)" transform="rotate(-25, 251, 212)" />
        <circle cx="255" cy="215" r="3" fill="rgba(255,255,255,0.42)" />

        {/* Épaules du leader */}
        <path
          d="M 234,246 Q 260,260 286,246"
          fill="none"
          stroke="rgba(205,165,64,0.65)"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* ── Petits points décoratifs sur la courbe de performance ── */}
        <circle cx="130" cy="368" r="3"   fill="rgba(155,90,170,0.4)" />
        <circle cx="200" cy="328" r="3.5" fill="rgba(155,90,170,0.5)" />
        <circle cx="290" cy="282" r="3.5" fill="rgba(205,165,64,0.45)" />
        <circle cx="370" cy="245" r="3"   fill="rgba(205,165,64,0.45)" />
        <circle cx="440" cy="208" r="3"   fill="rgba(205,165,64,0.50)" />

        {/* ── Label de performance (très discret) ── */}
        <text
          x="478" y="143"
          fontSize="9"
          fill="rgba(205,165,64,0.45)"
          fontFamily="'DM Sans', system-ui, sans-serif"
          textAnchor="end"
          letterSpacing="1"
        >
          PERFORMANCE
        </text>
      </svg>
    </div>
  );
}
