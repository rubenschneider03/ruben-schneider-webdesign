/**
 * Illustrated architectural hero visual — a finished modern villa at golden hour.
 *
 * This is a hand-built SVG stand-in for a real architectural photo/render.
 * To swap in a real asset later, replace the <svg> in HeroSection with
 * <Image src="/images/hero-house.jpg" fill ... /> — the surrounding layout
 * does not depend on this component's internals.
 */
export default function HouseScene({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 960 640"
      className={className}
      role="img"
      aria-label="Illustration eines modernen, fertiggestellten Einfamilienhauses am Abend"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="hs-glow" cx="0.68" cy="0.35" r="0.65">
          <stop offset="0%" stopColor="#F3DCA8" stopOpacity="0.55" />
          <stop offset="55%" stopColor="#F3DCA8" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#F3DCA8" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="hs-glass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FBE7B8" />
          <stop offset="100%" stopColor="#E0A952" />
        </linearGradient>
        <linearGradient id="hs-glass-bright" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FDF0CC" />
          <stop offset="100%" stopColor="#EBBE6C" />
        </linearGradient>
        <linearGradient id="hs-render-upper" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F7F2E8" />
          <stop offset="100%" stopColor="#EADFC9" />
        </linearGradient>
        <linearGradient id="hs-render-lower" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F0E8D7" />
          <stop offset="100%" stopColor="#DFD2BA" />
        </linearGradient>
        <linearGradient id="hs-stone" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#B2A48C" />
          <stop offset="100%" stopColor="#CDC3B0" />
        </linearGradient>
        <linearGradient id="hs-terrace" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#EBE2CE" />
          <stop offset="100%" stopColor="#DDD0B4" />
        </linearGradient>
        <filter id="hs-blur" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="9" />
        </filter>
      </defs>

      {/* Warm evening glow behind the house */}
      <ellipse cx="660" cy="230" rx="330" ry="250" fill="url(#hs-glow)" />

      {/* Distant hills */}
      <path d="M0 476 L90 396 L180 452 L268 480 L0 490 Z" fill="#E0D8C6" opacity="0.55" />
      <path d="M660 486 L960 432 L960 500 L660 500 Z" fill="#E4DCCA" opacity="0.45" />

      {/* Foliage overhang, top right (framing) */}
      <g opacity="0.9">
        <ellipse cx="918" cy="18" rx="86" ry="52" fill="#8A8563" />
        <ellipse cx="866" cy="62" rx="58" ry="38" fill="#96916C" />
        <ellipse cx="946" cy="86" rx="52" ry="36" fill="#7E795B" />
        <ellipse cx="892" cy="42" rx="26" ry="16" fill="#C2A868" opacity="0.45" />
      </g>

      {/* Slender tree, left */}
      <g>
        <path d="M152 584 C150 480 146 380 142 306" stroke="#6E6450" strokeWidth="7" strokeLinecap="round" fill="none" />
        <path d="M144 380 C120 350 112 330 108 312" stroke="#6E6450" strokeWidth="4" strokeLinecap="round" fill="none" />
        <ellipse cx="148" cy="266" rx="58" ry="48" fill="#837E5F" />
        <ellipse cx="106" cy="306" rx="42" ry="34" fill="#96916C" />
        <ellipse cx="190" cy="298" rx="40" ry="32" fill="#8A8563" />
        <ellipse cx="168" cy="252" rx="24" ry="16" fill="#B3AF90" opacity="0.6" />
      </g>

      {/* Ground shadow */}
      <ellipse cx="548" cy="586" rx="368" ry="24" fill="#463A28" opacity="0.16" filter="url(#hs-blur)" />

      {/* ── House ─────────────────────────────────────────────── */}

      {/* Stone core (vertical accent) */}
      <rect x="196" y="236" width="64" height="304" fill="url(#hs-stone)" />
      <g stroke="#8F8268" strokeWidth="1" opacity="0.35">
        {[262, 288, 314, 340, 366, 392, 418, 444, 470, 496, 522].map((y) => (
          <line key={y} x1="196" y1={y} x2="260" y2={y} />
        ))}
      </g>
      <rect x="188" y="226" width="80" height="12" fill="#2A2622" />

      {/* Upper storey */}
      <rect x="260" y="272" width="440" height="130" fill="url(#hs-render-upper)" />
      {/* Upper glass band */}
      <rect x="288" y="296" width="388" height="94" fill="url(#hs-glass)" />
      <rect x="288" y="296" width="128" height="94" fill="url(#hs-glass-bright)" opacity="0.7" />
      <polygon points="288,296 380,296 320,390 288,390" fill="#FFFFFF" opacity="0.10" />
      <g fill="#34302A">
        <rect x="284" y="292" width="396" height="5" />
        <rect x="284" y="388" width="396" height="4" />
        <rect x="284" y="292" width="4" height="100" />
        <rect x="676" y="292" width="4" height="100" />
        <rect x="416" y="296" width="4" height="94" />
        <rect x="546" y="296" width="4" height="94" />
      </g>
      {/* Balcony slab + glass railing */}
      <rect x="260" y="390" width="440" height="14" fill="#443E35" />
      <rect x="264" y="348" width="432" height="42" fill="#FFFFFF" opacity="0.14" />
      <g stroke="#FFFFFF" strokeWidth="1.4" opacity="0.5">
        <line x1="264" y1="348" x2="696" y2="348" />
        {[264, 336, 408, 480, 552, 624, 696].map((x) => (
          <line key={x} x1={x} y1="348" x2={x} y2="390" />
        ))}
      </g>
      {/* Upper roof slab with warm edge light */}
      <rect x="246" y="256" width="472" height="18" fill="#2A2622" />
      <line x1="246" y1="274" x2="718" y2="274" stroke="#C9A45C" strokeWidth="1.5" opacity="0.6" />

      {/* Ground storey */}
      <rect x="260" y="402" width="600" height="138" fill="url(#hs-render-lower)" />
      {/* Sliding glass front, glowing */}
      <rect x="292" y="428" width="376" height="112" fill="url(#hs-glass)" />
      {/* Interior hints behind glass */}
      <g opacity="0.16" fill="#4A3A22">
        <rect x="330" y="500" width="104" height="26" rx="8" />
        <rect x="342" y="486" width="80" height="12" rx="6" />
        <rect x="472" y="472" width="8" height="54" rx="3" />
        <ellipse cx="476" cy="466" rx="16" ry="10" />
        <rect x="520" y="492" width="72" height="34" rx="4" />
      </g>
      <polygon points="292,428 372,428 316,540 292,540" fill="#FFFFFF" opacity="0.08" />
      <g fill="#34302A">
        <rect x="288" y="424" width="384" height="5" />
        <rect x="288" y="424" width="4" height="116" />
        <rect x="668" y="424" width="4" height="116" />
        <rect x="384" y="428" width="4" height="112" />
        <rect x="478" y="428" width="4" height="112" />
        <rect x="572" y="428" width="4" height="112" />
      </g>
      {/* One-storey wing, right */}
      <rect x="700" y="410" width="160" height="130" fill="url(#hs-render-lower)" />
      <rect x="726" y="434" width="108" height="70" fill="url(#hs-glass-bright)" />
      <g fill="#34302A">
        <rect x="722" y="430" width="116" height="4" />
        <rect x="722" y="430" width="4" height="78" />
        <rect x="834" y="430" width="4" height="78" />
        <rect x="722" y="504" width="116" height="4" />
        <rect x="778" y="434" width="3" height="70" />
      </g>
      <rect x="686" y="394" width="188" height="16" fill="#2A2622" />
      <line x1="686" y1="410" x2="874" y2="410" stroke="#C9A45C" strokeWidth="1.5" opacity="0.55" />

      {/* Soft shading on left faces (light comes from the right) */}
      <rect x="260" y="272" width="30" height="268" fill="#463A28" opacity="0.05" />

      {/* Terrace */}
      <rect x="232" y="540" width="652" height="16" fill="url(#hs-terrace)" />
      <rect x="232" y="556" width="652" height="10" fill="#CFC2A8" />
      <g stroke="#C6B99E" strokeWidth="1" opacity="0.6">
        {[320, 420, 520, 620, 720, 820].map((x) => (
          <line key={x} x1={x} y1="540" x2={x - 6} y2="556" />
        ))}
      </g>

      {/* Landscaping, foreground */}
      <g>
        <ellipse cx="262" cy="572" rx="34" ry="22" fill="#9B9678" />
        <ellipse cx="300" cy="580" rx="24" ry="16" fill="#837E5F" />
        <ellipse cx="352" cy="576" rx="20" ry="13" fill="#ABA88A" />
        <ellipse cx="648" cy="574" rx="30" ry="19" fill="#96916C" />
        <ellipse cx="700" cy="582" rx="22" ry="14" fill="#837E5F" />
        <ellipse cx="806" cy="576" rx="34" ry="21" fill="#9B9678" />
        <ellipse cx="852" cy="586" rx="24" ry="15" fill="#8A8563" />
      </g>
      {/* Ornamental grasses */}
      <g stroke="#8A8563" strokeWidth="1.6" fill="none" strokeLinecap="round">
        <path d="M886 596 C888 578 884 566 878 556" />
        <path d="M892 596 C896 576 898 566 904 556" />
        <path d="M898 598 C900 584 906 574 916 568" />
        <path d="M120 594 C122 578 118 568 112 560" />
        <path d="M126 594 C130 576 132 568 138 560" />
      </g>
      {/* Stones */}
      <g fill="#CFC5B0">
        <rect x="902" y="586" width="40" height="16" rx="8" />
        <rect x="136" y="588" width="30" height="13" rx="6.5" />
        <rect x="168" y="592" width="20" height="10" rx="5" />
      </g>
    </svg>
  )
}
