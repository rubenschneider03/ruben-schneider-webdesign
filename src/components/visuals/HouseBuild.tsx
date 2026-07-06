/**
 * The hero house, deconstructed into build phases.
 * Renders four stacked layers of the same silhouette — sketch, plan,
 * shell construction, finished — and crossfades to the active phase.
 * Used as the sticky visual in the process section.
 */
const OUTLINE = '#4A453B'
const GOLD = '#B8913A'

export default function HouseBuild({ phase, className = '' }: { phase: number; className?: string }) {
  return (
    <svg
      viewBox="0 0 480 360"
      className={className}
      role="img"
      aria-label="Hausbau-Illustration in vier Phasen: Skizze, Plan, Rohbau, fertiges Haus"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="hb-glass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FBE7B8" />
          <stop offset="100%" stopColor="#E0A952" />
        </linearGradient>
      </defs>

      {/* Phase 0 — Skizze (loose sketch) */}
      <g className={`phase-layer ${phase === 0 ? 'active' : ''}`}>
        <g fill="none" stroke={OUTLINE} strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round" opacity="0.85">
          <path d="M96 300 L96 112 L128 110 L129 300" />
          <path d="M122 126 L362 124 M124 131 L360 130" />
          <path d="M128 131 L129 202 M356 129 L356 202" />
          <path d="M128 202 L436 200 L437 300" />
          <path d="M348 198 L442 196" />
          <path d="M84 302 L452 300" />
          <path d="M144 144 L340 142 L341 192 L145 194 Z" />
          <path d="M146 218 L328 216 L329 298" />
        </g>
        {/* Loose pencil strokes + sketched sun */}
        <g fill="none" stroke={OUTLINE} strokeWidth="1.2" opacity="0.4" strokeLinecap="round">
          <path d="M90 308 C180 304 320 306 448 304" />
          <path d="M100 118 C104 112 110 108 118 107" />
        </g>
        <circle cx="416" cy="60" r="22" fill="none" stroke={GOLD} strokeWidth="1.6" strokeDasharray="3 5" opacity="0.8" />
      </g>

      {/* Phase 1 — Plan (technical drawing with dimensions) */}
      <g className={`phase-layer ${phase === 1 ? 'active' : ''}`}>
        <g stroke={OUTLINE} strokeWidth="0.6" opacity="0.12">
          {[60, 120, 180, 240, 300].map((y) => (
            <line key={`h${y}`} x1="20" y1={y} x2="460" y2={y} />
          ))}
          {[80, 160, 240, 320, 400].map((x) => (
            <line key={`v${x}`} x1={x} y1="20" x2={x} y2="340" />
          ))}
        </g>
        <g fill="none" stroke={OUTLINE} strokeWidth="1.3" strokeLinejoin="round">
          <rect x="96" y="112" width="32" height="188" />
          <rect x="122" y="122" width="240" height="9" />
          <rect x="128" y="131" width="228" height="71" />
          <rect x="128" y="202" width="308" height="98" />
          <rect x="348" y="196" width="94" height="7" />
          <rect x="84" y="300" width="368" height="8" />
          <rect x="142" y="142" width="200" height="52" />
          <rect x="144" y="216" width="186" height="84" />
          <rect x="360" y="218" width="60" height="38" />
        </g>
        <g stroke={OUTLINE} strokeWidth="0.8" strokeDasharray="4 4" opacity="0.5">
          <line x1="208" y1="216" x2="208" y2="300" />
          <line x1="268" y1="216" x2="268" y2="300" />
          <line x1="242" y1="142" x2="242" y2="194" />
        </g>
        {/* Dimension lines */}
        <g stroke={GOLD} strokeWidth="1">
          <line x1="96" y1="326" x2="452" y2="326" />
          <line x1="96" y1="320" x2="96" y2="332" />
          <line x1="452" y1="320" x2="452" y2="332" />
          <line x1="66" y1="112" x2="66" y2="300" />
          <line x1="60" y1="112" x2="72" y2="112" />
          <line x1="60" y1="300" x2="72" y2="300" />
        </g>
        <text x="274" y="320" textAnchor="middle" fontSize="10" fontFamily="system-ui" fill={GOLD} fontWeight="600">
          14.20 m
        </text>
        <text x="52" y="210" textAnchor="middle" fontSize="10" fontFamily="system-ui" fill={GOLD} fontWeight="600" transform="rotate(-90 52 210)">
          6.40 m
        </text>
      </g>

      {/* Phase 2 — Rohbau (shell construction) */}
      <g className={`phase-layer ${phase === 2 ? 'active' : ''}`}>
        {/* Ground storey: concrete shell */}
        <rect x="128" y="202" width="308" height="98" fill="#E4DCCB" stroke="#B4A88E" strokeWidth="1.2" />
        <rect x="144" y="216" width="186" height="84" fill="#C9BCA2" opacity="0.8" />
        <rect x="360" y="218" width="60" height="38" fill="#C9BCA2" opacity="0.8" />
        {/* Stone core */}
        <rect x="96" y="112" width="32" height="188" fill="#BFB29A" stroke="#9C8F75" strokeWidth="1" />
        {/* Upper storey: timber framing */}
        <g stroke="#8A7B5E" strokeWidth="2.4" strokeLinecap="round">
          <line x1="128" y1="202" x2="128" y2="131" />
          <line x1="356" y1="202" x2="356" y2="131" />
          <line x1="126" y1="131" x2="358" y2="131" />
          <line x1="126" y1="202" x2="358" y2="202" />
          {[158, 188, 218, 248, 278, 308, 334].map((x) => (
            <line key={x} x1={x} y1="131" x2={x} y2="202" />
          ))}
          <line x1="128" y1="202" x2="188" y2="131" />
        </g>
        {/* Roof slab waiting */}
        <rect x="122" y="122" width="240" height="9" fill="none" stroke="#8A7B5E" strokeWidth="1.4" strokeDasharray="6 4" />
        {/* Scaffolding, left */}
        <g stroke="#A89B7F" strokeWidth="1.6">
          <line x1="76" y1="300" x2="76" y2="120" />
          <line x1="92" y1="300" x2="92" y2="120" />
          <line x1="70" y1="160" x2="98" y2="160" />
          <line x1="70" y1="220" x2="98" y2="220" />
          <line x1="70" y1="278" x2="98" y2="278" />
        </g>
        <rect x="84" y="300" width="368" height="8" fill="#DDD0B4" stroke="#B4A88E" strokeWidth="1" />
      </g>

      {/* Phase 3 — Fertig (finished house) */}
      <g className={`phase-layer ${phase === 3 ? 'active' : ''}`}>
        <ellipse cx="268" cy="322" rx="180" ry="12" fill="#463A28" opacity="0.12" />
        <rect x="96" y="112" width="32" height="188" fill="#BFB29A" />
        <rect x="92" y="106" width="40" height="7" fill="#2A2622" />
        <rect x="128" y="131" width="228" height="71" fill="#F3EDDF" />
        <rect x="142" y="142" width="200" height="52" fill="url(#hb-glass)" />
        <g fill="#34302A">
          <rect x="140" y="140" width="204" height="3" />
          <rect x="140" y="192" width="204" height="3" />
          <rect x="206" y="142" width="3" height="52" />
          <rect x="272" y="142" width="3" height="52" />
        </g>
        <rect x="122" y="122" width="240" height="9" fill="#2A2622" />
        <line x1="122" y1="131" x2="362" y2="131" stroke="#C9A45C" strokeWidth="1" opacity="0.6" />
        <rect x="128" y="202" width="308" height="98" fill="#E9E0CB" />
        <rect x="144" y="216" width="186" height="84" fill="url(#hb-glass)" />
        <g fill="#34302A">
          <rect x="142" y="214" width="190" height="3" />
          <rect x="206" y="216" width="3" height="84" />
          <rect x="268" y="216" width="3" height="84" />
        </g>
        <rect x="360" y="218" width="60" height="38" fill="url(#hb-glass)" stroke="#34302A" strokeWidth="2" />
        <rect x="348" y="196" width="94" height="7" fill="#2A2622" />
        <rect x="84" y="300" width="368" height="8" fill="#DDD0B4" />
        <ellipse cx="112" cy="312" rx="20" ry="12" fill="#9B9678" />
        <ellipse cx="404" cy="314" rx="22" ry="13" fill="#96916C" />
        <ellipse cx="440" cy="318" rx="14" ry="9" fill="#837E5F" />
      </g>
    </svg>
  )
}
