function LaptopMockup() {
  return (
    <div
      className="relative w-full max-w-lg mx-auto"
      style={{ transform: 'perspective(1000px) rotateY(-4deg) rotateX(2deg)' }}
    >
      {/* Drop shadow */}
      <div
        className="absolute inset-0 rounded-2xl"
        style={{
          boxShadow: '0 40px 80px rgba(0,0,0,0.18), 0 8px 24px rgba(0,0,0,0.10)',
          borderRadius: '16px',
          transform: 'translate(4px, 8px)',
          zIndex: 0,
          background: 'rgba(0,0,0,0.08)',
          filter: 'blur(8px)',
        }}
      />

      {/* Device frame */}
      <div
        className="relative rounded-2xl overflow-hidden border"
        style={{
          borderColor: '#D1CECC',
          backgroundColor: '#EDEBE8',
          padding: '8px 8px 20px 8px',
          zIndex: 1,
        }}
      >
        {/* Screen */}
        <div className="rounded-xl overflow-hidden bg-white" style={{ boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.08)' }}>
          <svg viewBox="0 0 500 360" xmlns="http://www.w3.org/2000/svg" width="100%">
            {/* Browser chrome */}
            <rect width="500" height="32" fill="#2D2D2D" />
            {/* Traffic lights */}
            <circle cx="14" cy="16" r="5" fill="#FF5F57" />
            <circle cx="30" cy="16" r="5" fill="#FEBC2E" />
            <circle cx="46" cy="16" r="5" fill="#28C840" />
            {/* URL bar */}
            <rect x="70" y="9" width="290" height="14" rx="7" fill="#404040" />
            <text x="215" y="20" textAnchor="middle" fill="#9A9A9A" fontSize="7.5" fontFamily="system-ui">
              muster-bau.ch
            </text>

            {/* Hero section of mock website */}
            <rect y="32" width="500" height="110" fill="#1E2A38" />
            {/* Blueprint grid lines inside hero */}
            {[0,40,80].map(y => (
              <line key={`h${y}`} x1="0" y1={32+y} x2="500" y2={32+y} stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
            ))}
            {[0,40,80,120,160,200,240,280,320,360,400,440,480].map(x => (
              <line key={`v${x}`} x1={x} y1="32" x2={x} y2="142" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
            ))}
            {/* Company name */}
            <text x="250" y="80" textAnchor="middle" fill="white" fontSize="20" fontFamily="Georgia, serif" fontWeight="400">
              Muster Bau &amp; Handwerk
            </text>
            <text x="250" y="100" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="9.5" fontFamily="system-ui">
              Ihr zuverlässiger Partner für Bau und Renovierung
            </text>
            {/* Gold CTA button */}
            <rect x="190" y="112" width="120" height="22" rx="11" fill="#C9A84C" />
            <text x="250" y="127" textAnchor="middle" fill="#0C0A06" fontSize="8.5" fontFamily="system-ui" fontWeight="600">
              Jetzt Anfragen
            </text>

            {/* Service cards row */}
            <rect y="142" width="500" height="70" fill="#F8F7F4" />
            {/* Card 1 */}
            <rect x="20" y="154" width="142" height="46" rx="6" fill="white" stroke="#E3E1DC" strokeWidth="1" />
            <rect x="30" y="163" width="16" height="16" rx="3" fill="#FBF4E4" />
            <text x="54" y="173" fill="#111110" fontSize="8" fontFamily="system-ui" fontWeight="600">Hochbau</text>
            <text x="54" y="184" fill="#64645F" fontSize="7" fontFamily="system-ui">Neubau &amp; Umbau</text>
            {/* Card 2 */}
            <rect x="180" y="154" width="140" height="46" rx="6" fill="white" stroke="#E3E1DC" strokeWidth="1" />
            <rect x="190" y="163" width="16" height="16" rx="3" fill="#FBF4E4" />
            <text x="214" y="173" fill="#111110" fontSize="8" fontFamily="system-ui" fontWeight="600">Renovierungen</text>
            <text x="214" y="184" fill="#64645F" fontSize="7" fontFamily="system-ui">Innen &amp; Aussen</text>
            {/* Card 3 */}
            <rect x="338" y="154" width="142" height="46" rx="6" fill="white" stroke="#E3E1DC" strokeWidth="1" />
            <rect x="348" y="163" width="16" height="16" rx="3" fill="#FBF4E4" />
            <text x="372" y="173" fill="#111110" fontSize="8" fontFamily="system-ui" fontWeight="600">Beratung</text>
            <text x="372" y="184" fill="#64645F" fontSize="7" fontFamily="system-ui">Kostenlos &amp; schnell</text>

            {/* References section */}
            <rect y="212" width="500" height="100" fill="white" />
            <text x="20" y="233" fill="#111110" fontSize="11" fontFamily="Georgia, serif">Referenzen</text>
            {/* Image blocks */}
            <rect x="20" y="242" width="218" height="58" rx="6" fill="#E8E6E2" />
            <text x="129" y="275" textAnchor="middle" fill="#8A8A85" fontSize="8" fontFamily="system-ui">Projekt Zürich</text>
            <rect x="250" y="242" width="230" height="58" rx="6" fill="#E0DDD8" />
            <text x="365" y="275" textAnchor="middle" fill="#8A8A85" fontSize="8" fontFamily="system-ui">Projekt Bern</text>

            {/* Contact strip */}
            <rect y="312" width="500" height="48" fill="#111110" />
            {/* Email icon */}
            <rect x="130" y="322" width="16" height="11" rx="2" fill="none" stroke="#C9A84C" strokeWidth="1.2" />
            <polyline points="130,322 138,329 146,322" fill="none" stroke="#C9A84C" strokeWidth="1.2" />
            <text x="155" y="331" fill="rgba(255,255,255,0.7)" fontSize="7.5" fontFamily="system-ui">
              info@muster-bau.ch
            </text>
            <rect x="310" y="320" width="90" height="20" rx="10" fill="#C9A84C" />
            <text x="355" y="334" textAnchor="middle" fill="#0C0A06" fontSize="7.5" fontFamily="system-ui" fontWeight="600">
              Kontakt aufnehmen
            </text>
          </svg>
        </div>

        {/* Laptop base notch */}
        <div
          className="absolute bottom-0 left-1/2"
          style={{
            transform: 'translateX(-50%)',
            width: '60px',
            height: '4px',
            background: '#C8C5C0',
            borderRadius: '0 0 4px 4px',
          }}
        />
      </div>
    </div>
  )
}

export default function HeroSection() {
  return (
    <section id="hero" className="scroll-mt-20 relative overflow-hidden bg-background">
      {/* Blueprint grid - right half only */}
      <div
        className="absolute right-0 top-0 bottom-0 w-1/2 blueprint-grid pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span
                className="text-xs font-semibold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full border"
                style={{ color: '#C9A84C', borderColor: '#C9A84C', background: '#FBF4E4' }}
              >
                Webdesign · Handwerk · Bau · Immobilien · Schweiz
              </span>
            </div>

            {/* H1 */}
            <h1
              className="font-display leading-[1.08] text-foreground mb-6"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 3.75rem)' }}
            >
              Websites für Handwerk, Bau und Immobilien, die Vertrauen schaffen und Aufträge bringen.
            </h1>

            {/* Subline */}
            <p className="text-lg text-muted leading-relaxed mb-4 max-w-xl">
              Moderne, schnelle und verständliche Websites für Handwerksbetriebe, Bauunternehmen und Immobilienanbieter – vom einfachen Onepager bis zur komplexen Plattform mit Login, Profilen und Zahlungssystem.
            </p>

            {/* Support text */}
            <p className="text-sm text-muted leading-relaxed mb-10 max-w-xl">
              Persönlich umgesetzt von Ruben Schneider – mit technischem Verständnis, Bauhintergrund und Blick für professionelle Online-Auftritte.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#kontakt"
                className="inline-flex items-center justify-center gap-2 rounded-full font-medium text-sm px-7 py-3.5 transition-opacity hover:opacity-90"
                style={{ background: '#C9A84C', color: '#0C0A06' }}
              >
                Kostenlose Ersteinschätzung anfragen
              </a>
              <a
                href="#pakete"
                className="inline-flex items-center justify-center rounded-full border border-hairline px-7 py-3.5 text-sm font-medium text-foreground hover:bg-surface2 transition-colors"
              >
                Pakete ansehen
              </a>
            </div>
          </div>

          {/* Right column: device mockup */}
          <div className="hidden lg:block">
            <LaptopMockup />
          </div>
        </div>
      </div>
    </section>
  )
}
