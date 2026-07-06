import HouseScene from '@/components/visuals/HouseScene'

const TRUST_CARDS = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 1.5l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9v-5l7-3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Vertrauen stärken',
    desc: 'Professioneller Auftritt, der überzeugt.',
    float: 'float-1',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="10" cy="10" r="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="10" cy="10" r="1" fill="currentColor" />
      </svg>
    ),
    title: 'Mehr Aufträge',
    desc: 'Klare Website, die Interessenten schneller überzeugt.',
    float: 'float-2',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M11 2c3.5 0 6.5 3 7 7-2.5 4-6 7.5-11.5 8.5L4 15C5 9.5 8 4.5 11 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <circle cx="12.5" cy="7.5" r="1.6" stroke="currentColor" strokeWidth="1.3" />
        <path d="M4.5 12.5c-1.5.5-2.5 2-2.5 5 3 0 4.5-1 5-2.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Schnell & zuverlässig',
    desc: 'Persönlich, effizient und ohne Umwege.',
    float: 'float-3',
  },
]

const BRANCHES = [
  {
    label: 'Handwerk',
    icon: (
      <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M2 5.5L5.5 2l2 2L4 7.5 2 5.5zM6.5 6.5l7 7-1.5 1.5-7-7" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'Bau',
    icon: (
      <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M2 14h12M3.5 14V7l4.5-4 4.5 4v7M6.5 14v-3.5h3V14" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: 'Immobilien',
    icon: (
      <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M2 8l6-5.5L14 8M4 6.8V14h8V6.8" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
        <rect x="6.8" y="9.5" width="2.4" height="4.5" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
  },
]

export default function HeroSection() {
  return (
    <section
      id="start"
      className="relative overflow-hidden pt-28 md:pt-32 pb-12 md:pb-16"
      style={{ background: 'linear-gradient(180deg, #FBF8F1 0%, var(--bg) 60%)' }}
    >
      {/* Warm ambient glow, upper right */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{ background: 'radial-gradient(ellipse 55% 45% at 72% 30%, rgba(196,155,70,0.10) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-6xl mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-[minmax(0,44%)_1fr] gap-10 lg:gap-4 items-center">
          {/* Left: copy */}
          <div className="relative z-10">
            <div
              className="hero-enter hero-enter-1 inline-flex items-center gap-2 mb-6 text-xs font-bold tracking-[0.18em] uppercase"
              style={{ color: 'var(--gold-dark)' }}
            >
              Webdesign für Handwerk · Bau · Immobilien
            </div>

            <h1
              className="hero-enter hero-enter-2 font-display leading-[1.05] mb-6"
              style={{ fontSize: 'clamp(2.5rem, 5.2vw, 4rem)', color: 'var(--fg)', letterSpacing: '-0.02em' }}
            >
              Websites, die Vertrauen schaffen und Aufträge bringen.
            </h1>

            <p
              className="hero-enter hero-enter-3 leading-relaxed mb-9 max-w-md"
              style={{ fontSize: 'clamp(1rem, 1.4vw, 1.1rem)', color: 'var(--fg-muted)' }}
            >
              Moderne, schnelle und klare Websites für Handwerksbetriebe, Bauunternehmen und
              Immobilienanbieter in der Schweiz – persönlich umgesetzt und passend zu Ihrem Betrieb.
            </p>

            <div className="hero-enter hero-enter-4 flex flex-col sm:flex-row gap-3">
              <a
                href="#kontakt"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full font-semibold text-sm transition-all hover:opacity-95"
                style={{
                  background: 'linear-gradient(135deg, #C49B46 0%, var(--gold) 60%, var(--gold-dark) 100%)',
                  color: '#fff',
                  padding: '15px 30px',
                  boxShadow: '0 8px 24px rgba(184,145,58,0.32)',
                  textDecoration: 'none',
                }}
              >
                Kostenlose Ersteinschätzung
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="transition-transform group-hover:translate-x-0.5" aria-hidden="true">
                  <path d="M2 7.5h11M9 3.5l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#pakete"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full font-medium text-sm transition-colors hover:bg-[var(--clay-light)]"
                style={{
                  background: 'rgba(255,255,255,0.75)',
                  color: 'var(--fg)',
                  padding: '15px 30px',
                  border: '1.5px solid var(--border)',
                  textDecoration: 'none',
                }}
              >
                Pakete ansehen
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="transition-transform group-hover:translate-x-0.5" aria-hidden="true">
                  <path d="M2 7.5h11M9 3.5l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: architectural hero visual */}
          <div className="hero-enter-visual relative lg:-mr-16 xl:-mr-28">
            <HouseScene className="w-full h-auto" />
          </div>
        </div>

        {/* Floating trust cards — overlap the visual on desktop */}
        <div className="hero-enter hero-enter-5 relative z-10 grid sm:grid-cols-3 gap-4 mt-4 lg:-mt-20 lg:max-w-4xl">
          {TRUST_CARDS.map((card) => (
            <div
              key={card.title}
              className={`${card.float} card-lift rounded-2xl p-5 flex flex-col gap-3`}
              style={{
                background: 'rgba(255,255,255,0.92)',
                backdropFilter: 'blur(8px)',
                border: '1px solid var(--border-light)',
                boxShadow: '0 10px 32px rgba(28,26,23,0.10)',
              }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: 'var(--gold-light)', color: 'var(--gold-dark)', border: '1px solid rgba(184,145,58,0.25)' }}
              >
                {card.icon}
              </div>
              <div>
                <h3 className="text-sm font-bold mb-1" style={{ color: 'var(--fg)' }}>{card.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--fg-muted)' }}>{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust strip */}
        <div
          className="hero-enter hero-enter-6 mt-10 md:mt-14 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4 px-6 py-5"
          style={{ background: 'rgba(255,255,255,0.65)', border: '1px solid var(--border-light)', backdropFilter: 'blur(8px)' }}
        >
          <p className="flex items-center gap-2.5 text-sm font-medium" style={{ color: 'var(--fg-muted)' }}>
            <span
              className="inline-flex items-center justify-center w-5 h-5 rounded flex-shrink-0"
              style={{ background: '#D52B1E' }}
              aria-label="Schweiz"
            >
              <svg width="11" height="11" viewBox="0 0 11 11" aria-hidden="true">
                <path d="M4.4 1.5h2.2v2.9h2.9v2.2H6.6v2.9H4.4V6.6H1.5V4.4h2.9V1.5z" fill="#fff" />
              </svg>
            </span>
            Für Handwerk, Bau und Immobilien in der Schweiz
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {BRANCHES.map((b) => (
              <span
                key={b.label}
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.08em] uppercase px-4 py-2 rounded-full"
                style={{ color: 'var(--stone)', border: '1px solid var(--border)', background: 'var(--bg)' }}
              >
                {b.icon}
                {b.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
