const TAGS = [
  'Login & Profile',
  'Matching-System',
  'Stripe Zahlung',
  'E-Mail-System',
  'Datenbank',
  'Bewerbungsdossier',
]

export default function HomelioReference() {
  return (
    <section id="referenz" className="scroll-mt-20 border-t border-hairline" style={{ background: '#111110' }}>
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <p
              className="text-xs font-semibold tracking-[0.2em] uppercase mb-4"
              style={{ color: '#C9A84C' }}
            >
              Flagship-Projekt
            </p>
            <h2
              className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.1] mb-6"
              style={{ color: 'rgba(245,242,235,0.96)' }}
            >
              Homelio – Eine komplexe digitale Plattform
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: 'rgba(245,242,235,0.62)' }}>
              Mit Homelio wurde eine komplexe Plattform von Grund auf neu entwickelt –
              inklusive Nutzerregistrierung, Profilsystem, intelligentem Matching-Algorithmus,
              Premium-Abonnement mit Stripe-Zahlung, automatisierten E-Mail-Benachrichtigungen
              und Bewerbungsdossier-Funktion.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(245,242,235,0.42)' }}>
              Dieses Projekt zeigt, dass neben klassischen Websites auch anspruchsvollere
              digitale Plattformen realisierbar sind.
            </p>
          </div>

          {/* Right: project card */}
          <div
            className="rounded-2xl p-8 flex flex-col gap-6"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.12)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.28)',
            }}
          >
            {/* Card header */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3
                  className="font-display text-3xl mb-1"
                  style={{ color: 'rgba(245,242,235,0.96)' }}
                >
                  Homelio
                </h3>
                <p className="text-sm" style={{ color: 'rgba(245,242,235,0.45)' }}>
                  Der unsichtbare Wohnungsmarkt der Schweiz
                </p>
              </div>
              <div
                className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.25)' }}
              >
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                  <path d="M2 9.5L10 3l8 6.5V19H13v-5.5H7V19H2V9.5z"
                    stroke="#C9A84C" strokeWidth="1.4" fill="none" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {TAGS.map(tag => (
                <span
                  key={tag}
                  className="text-xs font-medium px-3 py-1.5 rounded-full"
                  style={{
                    border: '1px solid rgba(201,168,76,0.35)',
                    color: '#C9A84C',
                    background: 'rgba(201,168,76,0.08)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Divider */}
            <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)' }} />

            {/* Description */}
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(245,242,235,0.55)' }}>
              Full-Stack-Plattform mit Next.js, Supabase, Stripe und Resend.
              Komplex in der Umsetzung, klar in der Nutzung – für den Schweizer Mietmarkt.
            </p>

            {/* CTA */}
            <a
              href="https://homelio.ch"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-opacity hover:opacity-90 self-start"
              style={{ background: '#C9A84C', color: '#0C0A06' }}
            >
              Homelio ansehen
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
