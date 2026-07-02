'use client'

function BrowserMockup() {
  return (
    <div className="relative w-full max-w-[520px] mx-auto">
      {/* Glow behind */}
      <div className="absolute inset-0 rounded-3xl"
        style={{ background: 'radial-gradient(ellipse at 60% 40%, rgba(184,145,58,0.12) 0%, transparent 70%)', filter: 'blur(30px)', transform: 'scale(1.1)', zIndex: 0 }} />

      {/* Browser frame */}
      <div className="relative rounded-2xl overflow-hidden"
        style={{ background: '#EDEBE7', border: '1px solid rgba(0,0,0,0.10)', boxShadow: '0 32px 80px rgba(28,26,23,0.18), 0 8px 20px rgba(28,26,23,0.08)', zIndex: 1 }}
      >
        {/* Browser chrome */}
        <div className="flex items-center gap-2 px-4 py-3" style={{ background: '#E5E2DC', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full" style={{ background: '#F7786B' }} />
            <div className="w-3 h-3 rounded-full" style={{ background: '#FAC032' }} />
            <div className="w-3 h-3 rounded-full" style={{ background: '#27C841' }} />
          </div>
          <div className="flex-1 mx-3 rounded-md px-3 py-1.5 text-xs" style={{ background: 'rgba(255,255,255,0.7)', color: '#8A8578', fontSize: '11px' }}>
            muster-sanitaer.ch
          </div>
        </div>

        {/* Website preview content */}
        <svg viewBox="0 0 480 340" width="100%" xmlns="http://www.w3.org/2000/svg">
          {/* Hero area */}
          <rect width="480" height="120" fill="#1C1A17" />
          {/* Subtle grid in hero */}
          {[30,60,90].map(y => <line key={`h${y}`} x1="0" y1={y} x2="480" y2={y} stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>)}
          {[60,120,180,240,300,360,420].map(x => <line key={`v${x}`} x1={x} y1="0" x2={x} y2="120" stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>)}
          {/* Nav bar */}
          <rect width="480" height="28" fill="rgba(255,255,255,0.06)" />
          <text x="16" y="18" fill="rgba(255,255,255,0.90)" fontSize="8.5" fontFamily="Georgia,serif">Muster Sanitär</text>
          <text x="310" y="18" fill="rgba(255,255,255,0.50)" fontSize="7" fontFamily="system-ui">Leistungen</text>
          <text x="370" y="18" fill="rgba(255,255,255,0.50)" fontSize="7" fontFamily="system-ui">Referenzen</text>
          <rect x="430" y="10" width="38" height="12" rx="6" fill="#B8913A" />
          <text x="449" y="20" textAnchor="middle" fill="white" fontSize="7" fontFamily="system-ui" fontWeight="600">Kontakt</text>
          {/* Headline */}
          <text x="24" y="66" fill="white" fontSize="14.5" fontFamily="Georgia,serif" fontWeight="400">Sanitär &amp; Heizung</text>
          <text x="24" y="84" fill="white" fontSize="14.5" fontFamily="Georgia,serif" fontWeight="400">in Zürich</text>
          <text x="24" y="100" fill="rgba(255,255,255,0.55)" fontSize="7.5" fontFamily="system-ui">Sauber umgesetzt. Zuverlässig.</text>
          <rect x="24" y="107" width="80" height="10" rx="5" fill="#B8913A" />
          <text x="64" y="115" textAnchor="middle" fill="white" fontSize="7" fontFamily="system-ui" fontWeight="600">Anfrage stellen</text>

          {/* Services section */}
          <rect y="120" width="480" height="96" fill="#F7F5F0" />
          <text x="24" y="140" fill="#1C1A17" fontSize="9" fontFamily="Georgia,serif">Unsere Leistungen</text>
          {/* Service cards */}
          <rect x="16" y="148" width="138" height="54" rx="6" fill="white" stroke="#E2DDD6" strokeWidth="1" />
          <rect x="22" y="155" width="10" height="10" rx="2" fill="#F5EDDA" />
          <text x="22" y="179" fill="#1C1A17" fontSize="8" fontFamily="system-ui" fontWeight="600">Sanitär</text>
          <text x="22" y="190" fill="#5C5952" fontSize="6.5" fontFamily="system-ui">Installation &amp; Service</text>
          <rect x="162" y="148" width="138" height="54" rx="6" fill="white" stroke="#E2DDD6" strokeWidth="1" />
          <rect x="168" y="155" width="10" height="10" rx="2" fill="#F5EDDA" />
          <text x="168" y="179" fill="#1C1A17" fontSize="8" fontFamily="system-ui" fontWeight="600">Heizung</text>
          <text x="168" y="190" fill="#5C5952" fontSize="6.5" fontFamily="system-ui">Wartung &amp; Reparatur</text>
          <rect x="308" y="148" width="138" height="54" rx="6" fill="white" stroke="#E2DDD6" strokeWidth="1" />
          <rect x="314" y="155" width="10" height="10" rx="2" fill="#F5EDDA" />
          <text x="314" y="179" fill="#1C1A17" fontSize="8" fontFamily="system-ui" fontWeight="600">Badezimmer</text>
          <text x="314" y="190" fill="#5C5952" fontSize="6.5" fontFamily="system-ui">Komplett-Renovierung</text>

          {/* References section */}
          <rect y="216" width="480" height="80" fill="white" />
          <text x="24" y="234" fill="#1C1A17" fontSize="9" fontFamily="Georgia,serif">Referenzprojekte</text>
          <rect x="16" y="242" width="140" height="46" rx="5" fill="#EDE9E2" />
          <text x="86" y="268" textAnchor="middle" fill="#8A8578" fontSize="7" fontFamily="system-ui">Zürich, Fluntern</text>
          <rect x="168" y="242" width="140" height="46" rx="5" fill="#E8E4DC" />
          <text x="238" y="268" textAnchor="middle" fill="#8A8578" fontSize="7" fontFamily="system-ui">Winterthur</text>
          <rect x="320" y="242" width="144" height="46" rx="5" fill="#EDE9E2" />
          <text x="392" y="268" textAnchor="middle" fill="#8A8578" fontSize="7" fontFamily="system-ui">Schlieren</text>

          {/* Contact strip */}
          <rect y="296" width="480" height="44" fill="#1C1A17" />
          <text x="24" y="316" fill="rgba(255,255,255,0.90)" fontSize="9" fontFamily="Georgia,serif">Jetzt Kontakt aufnehmen</text>
          <text x="24" y="330" fill="rgba(255,255,255,0.45)" fontSize="7" fontFamily="system-ui">info@muster-sanitaer.ch · 044 000 00 00</text>
          <rect x="372" y="309" width="90" height="18" rx="9" fill="#B8913A" />
          <text x="417" y="322" textAnchor="middle" fill="white" fontSize="7.5" fontFamily="system-ui" fontWeight="600">Kontakt aufnehmen</text>
        </svg>
      </div>

      {/* Floating badge cards around the mockup */}
      <div className="float-1 absolute -left-8 top-20 rounded-xl px-4 py-3 text-xs font-semibold"
        style={{ background: 'white', boxShadow: '0 8px 24px rgba(28,26,23,0.12)', border: '1px solid var(--border)', color: 'var(--fg)', whiteSpace: 'nowrap', zIndex: 5 }}>
        ✓ Mobil optimiert
      </div>
      <div className="float-2 absolute -right-6 top-32 rounded-xl px-4 py-3 text-xs font-semibold"
        style={{ background: 'white', boxShadow: '0 8px 24px rgba(28,26,23,0.12)', border: '1px solid var(--border)', color: 'var(--fg)', whiteSpace: 'nowrap', zIndex: 5 }}>
        ✓ Klare Leistungen
      </div>
      <div className="float-3 absolute -left-10 bottom-24 rounded-xl px-4 py-3 text-xs font-semibold"
        style={{ background: 'white', boxShadow: '0 8px 24px rgba(28,26,23,0.12)', border: '1px solid var(--border)', color: 'var(--fg)', whiteSpace: 'nowrap', zIndex: 5 }}>
        ✓ Kontakt in 1 Klick
      </div>

      {/* Mobile preview floating bottom-right */}
      <div className="float-1 absolute -bottom-8 -right-2 w-28 rounded-xl overflow-hidden"
        style={{ boxShadow: '0 12px 32px rgba(28,26,23,0.20)', border: '1px solid rgba(0,0,0,0.10)', background: 'white', zIndex: 5 }}>
        <div className="p-1.5" style={{ background: '#E5E2DC', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
          <div className="w-8 h-1.5 rounded mx-auto" style={{ background: '#8A8578' }} />
        </div>
        <svg viewBox="0 0 112 160" width="100%">
          <rect width="112" height="60" fill="#1C1A17" />
          <text x="56" y="26" textAnchor="middle" fill="white" fontSize="7" fontFamily="Georgia,serif">Muster Sanitär</text>
          <text x="56" y="38" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="5.5" fontFamily="system-ui">Zürich</text>
          <rect x="28" y="45" width="56" height="9" rx="4.5" fill="#B8913A" />
          <text x="56" y="52" textAnchor="middle" fill="white" fontSize="5.5" fontFamily="system-ui" fontWeight="600">Anfragen</text>
          <rect y="60" width="112" height="100" fill="#F7F5F0" />
          {[0,1,2].map(i => <rect key={i} x="8" y={68 + i * 28} width="96" height="20" rx="4" fill="white" stroke="#E2DDD6" strokeWidth="0.8" />)}
          <text x="16" y="82" fill="#1C1A17" fontSize="6" fontFamily="system-ui" fontWeight="600">Sanitär</text>
          <text x="16" y="110" fill="#1C1A17" fontSize="6" fontFamily="system-ui" fontWeight="600">Heizung</text>
          <text x="16" y="138" fill="#1C1A17" fontSize="6" fontFamily="system-ui" fontWeight="600">Badezimmer</text>
        </svg>
      </div>
    </div>
  )
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16" style={{ background: 'var(--bg)' }}>
      {/* Blueprint grid — right half only, very subtle */}
      <div className="absolute inset-y-0 right-0 w-1/2 blueprint-grid pointer-events-none" aria-hidden />
      {/* Warm gradient glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden
        style={{ background: 'radial-gradient(ellipse 60% 50% at 70% 50%, rgba(184,145,58,0.06) 0%, transparent 70%)' }} />

      <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: text */}
          <div>
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-7 px-4 py-1.5 rounded-full text-xs font-semibold tracking-[0.14em] uppercase"
              style={{ background: 'var(--gold-light)', color: 'var(--gold-dark)', border: '1px solid rgba(184,145,58,0.22)' }}>
              Webdesign · Handwerk · Bau · Immobilien · Schweiz
            </div>

            <h1 className="font-display leading-[1.06] mb-5"
              style={{ fontSize: 'clamp(2.1rem, 4.2vw, 3.4rem)', color: 'var(--fg)', letterSpacing: '-0.02em' }}>
              Websites für Handwerk, Bau und Immobilien, die Vertrauen schaffen und Aufträge bringen.
            </h1>

            <p className="leading-relaxed mb-3 max-w-lg"
              style={{ fontSize: 'clamp(1rem, 1.5vw, 1.12rem)', color: 'var(--fg-muted)' }}>
              Persönlich umgesetzt von Ruben Schneider – modern, verständlich und passend zu Ihrem Betrieb. Vom klaren Onepager bis zur individuellen Web-App.
            </p>

            <p className="text-sm mb-9 font-medium" style={{ color: 'var(--stone)' }}>
              Für Betriebe, die online professioneller wirken und einfacher kontaktiert werden möchten.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#kontakt"
                className="inline-flex items-center justify-center rounded-full font-semibold text-sm transition-all"
                style={{ background: 'var(--gold)', color: '#fff', padding: '14px 28px', boxShadow: '0 4px 16px rgba(184,145,58,0.30)', animation: 'softPulse 3s ease-in-out infinite', textDecoration: 'none' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold-dark)'; e.currentTarget.style.animation = 'none'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.animation = 'softPulse 3s ease-in-out infinite'; }}
              >
                Kostenlose Ersteinschätzung anfragen
              </a>
              <a href="#pakete"
                className="inline-flex items-center justify-center rounded-full font-medium text-sm transition-all"
                style={{ background: 'transparent', color: 'var(--fg)', padding: '14px 28px', border: '1.5px solid var(--border)', textDecoration: 'none' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'var(--clay-light)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                Pakete ansehen
              </a>
            </div>
          </div>

          {/* Right: premium device mockup */}
          <div className="hidden lg:flex justify-end pr-6 relative">
            <BrowserMockup />
          </div>
        </div>
      </div>
    </section>
  )
}
