"use client";

/**
 * HeroIllustration — Illustration motion design orbital
 * Représente le système nerveux autonome (thème neurosciences)
 * 3 orbites concentriques avec nœuds animés + orbe central pulsant
 * Animations : SVG SMIL (animateTransform/animate) — aucun JS/canvas/framer-motion
 */
export default function HeroIllustration() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <svg
        viewBox="0 0 500 500"
        style={{ width: "100%", height: "100%", display: "block" }}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* ── Gradients ─────────────────────────────────── */}
          <radialGradient id="hi-gold" cx="35%" cy="30%" r="70%">
            <stop offset="0%"   stopColor="#f5e08a" />
            <stop offset="48%"  stopColor="#cda540" />
            <stop offset="100%" stopColor="#7a5010" />
          </radialGradient>

          <radialGradient id="hi-violet-node" cx="38%" cy="32%" r="68%">
            <stop offset="0%"   stopColor="#d090e0" />
            <stop offset="50%"  stopColor="#9b5aaa" />
            <stop offset="100%" stopColor="#3d1545" />
          </radialGradient>

          <radialGradient id="hi-bg-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#78427f" stopOpacity="0.32" />
            <stop offset="70%"  stopColor="#4a1f52" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#1a0a1e" stopOpacity="0"    />
          </radialGradient>

          {/* ── Filters ───────────────────────────────────── */}
          {/* Soft glow for orbital nodes */}
          <filter id="hi-node-glow" x="-90%" y="-90%" width="280%" height="280%">
            <feGaussianBlur stdDeviation="4.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Stronger glow for central orb */}
          <filter id="hi-orb-glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="9" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Subtle glow for secondary nodes */}
          <filter id="hi-sm-glow" x="-70%" y="-70%" width="240%" height="240%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ── Background radial glow (breathes slowly) ──── */}
        <circle cx="250" cy="250" r="235" fill="url(#hi-bg-glow)">
          <animate attributeName="opacity" values="0.65;1;0.65" dur="7s" repeatCount="indefinite" />
        </circle>

        {/* ── Outer decoration ring ─────────────────────── */}
        <circle
          cx="250" cy="250" r="215"
          stroke="rgba(205,165,64,0.06)"
          strokeWidth="1"
          fill="none"
        />

        {/* ── Orbit tracks ─────────────────────────────── */}

        {/* Track 3 — outermost — gold dashed */}
        <circle
          cx="250" cy="250" r="180"
          stroke="rgba(205,165,64,0.16)"
          strokeWidth="1"
          strokeDasharray="7 12"
          fill="none"
        />

        {/* Track 2 — middle — violet dashed */}
        <circle
          cx="250" cy="250" r="128"
          stroke="rgba(155,90,170,0.22)"
          strokeWidth="1"
          strokeDasharray="5 9"
          fill="none"
        />

        {/* Track 1 — inner — gold solid subtle */}
        <circle
          cx="250" cy="250" r="80"
          stroke="rgba(205,165,64,0.2)"
          strokeWidth="1"
          fill="none"
        />

        {/* ── Cross/spoke guides (very faint) ──────────── */}
        <line x1="250" y1="68" x2="250" y2="432" stroke="rgba(205,165,64,0.04)" strokeWidth="1" />
        <line x1="68" y1="250" x2="432" y2="250" stroke="rgba(205,165,64,0.04)" strokeWidth="1" />

        {/* ══════════════════════════════════════════════
             ORBIT 3 — r=180 — gold — clockwise 36 s
             2 nodes at 0° and 180°
        ══════════════════════════════════════════════ */}

        {/* Primary node — gold bright */}
        <circle cx="430" cy="250" r="9" fill="#cda540" filter="url(#hi-node-glow)" opacity="0.9">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 250 250"
            to="360 250 250"
            dur="36s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Secondary node — gold soft, 180° offset */}
        <circle cx="430" cy="250" r="5.5" fill="#e8c060" filter="url(#hi-sm-glow)" opacity="0.55">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="180 250 250"
            to="540 250 250"
            dur="36s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Tertiary node — tiny accent, 90° offset */}
        <circle cx="430" cy="250" r="3.5" fill="#cda540" opacity="0.35">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="270 250 250"
            to="630 250 250"
            dur="36s"
            repeatCount="indefinite"
          />
        </circle>

        {/* ══════════════════════════════════════════════
             ORBIT 2 — r=128 — violet — counter-clockwise 24 s
             2 nodes at 0° and 180°
        ══════════════════════════════════════════════ */}

        {/* Primary node — violet */}
        <circle cx="378" cy="250" r="10" fill="url(#hi-violet-node)" filter="url(#hi-node-glow)" opacity="0.95">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 250 250"
            to="-360 250 250"
            dur="24s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Secondary node — violet dark, 180° */}
        <circle cx="378" cy="250" r="6.5" fill="#78427f" filter="url(#hi-sm-glow)" opacity="0.7">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="180 250 250"
            to="-180 250 250"
            dur="24s"
            repeatCount="indefinite"
          />
        </circle>

        {/* ══════════════════════════════════════════════
             ORBIT 1 — r=80 — gold — clockwise 15 s
             1 primary + 1 small node
        ══════════════════════════════════════════════ */}

        {/* Primary node */}
        <circle cx="330" cy="250" r="7.5" fill="#cda540" filter="url(#hi-node-glow)" opacity="0.95">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 250 250"
            to="360 250 250"
            dur="15s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Small secondary, 120° offset */}
        <circle cx="330" cy="250" r="4" fill="#e8c060" opacity="0.5">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="120 250 250"
            to="480 250 250"
            dur="15s"
            repeatCount="indefinite"
          />
        </circle>

        {/* ══════════════════════════════════════════════
             CENTRAL HALO + ORB
        ══════════════════════════════════════════════ */}

        {/* Halo glow ring (breathes with orb) */}
        <circle cx="250" cy="250" r="66" fill="rgba(205,165,64,0.10)">
          <animate
            attributeName="r"
            values="63;72;63"
            dur="4.8s"
            calcMode="spline"
            keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.08;0.18;0.08"
            dur="4.8s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Central orb — gold sphere, pulsing */}
        <circle cx="250" cy="250" r="44" fill="url(#hi-gold)" filter="url(#hi-orb-glow)">
          <animate
            attributeName="r"
            values="42;47;42"
            dur="4.8s"
            calcMode="spline"
            keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
            repeatCount="indefinite"
          />
        </circle>

        {/* Glass specular highlight — large */}
        <ellipse
          cx="236" cy="236"
          rx="14" ry="10"
          fill="rgba(255,255,255,0.22)"
          transform="rotate(-30, 236, 236)"
        />
        {/* Glass specular highlight — small bright */}
        <circle cx="243" cy="241" r="5" fill="rgba(255,255,255,0.38)" />
      </svg>
    </div>
  );
}
