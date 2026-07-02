'use client'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const REASONS = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M3 19L11 3l8 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 13h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Bauhintergrund',
    body: 'Ich verstehe, wie Bau-, Handwerks- und Immobilienbetriebe arbeiten.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <rect x="2" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 10h8M7 14h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6 6V4M16 6V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Klare Kommunikation',
    body: 'Sie wissen, was gemacht wird, was es kostet und was sinnvoll ist.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <polyline points="15 17 21 11 15 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="7 5 1 11 7 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Moderne Umsetzung',
    body: 'Schnell, mobiloptimiert und technisch sauber.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <circle cx="11" cy="11" r="9" stroke="currentColor" strokeWidth="1.5" />
        <path d="M11 7v4l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Faire Startpreise',
    body: 'Geeignet für kleinere Betriebe, die professionell auftreten möchten.',
  },
]

export default function WhyMeSection() {
  const ref = useScrollReveal()
  return (
    <section id="warum" className="scroll-mt-20 py-20 md:py-24" ref={ref} style={{ background: 'var(--bg)' }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="reveal mb-3">
          <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3" style={{ color: 'var(--gold)' }}>Warum mit mir?</p>
          <h2 className="font-display" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: 'var(--fg)', letterSpacing: '-0.01em' }}>
            Direkt mit mir. Ohne Agentur-Umwege.
          </h2>
        </div>
        <p className="reveal reveal-delay-1 text-base leading-relaxed mb-12 max-w-xl" style={{ color: 'var(--fg-muted)' }}>
          Ich bin kein grosses Agenturteam. Sie sprechen direkt mit mir – von der ersten Idee bis zur fertigen Website.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {REASONS.map((r, i) => (
            <div
              key={r.title}
              className={`reveal reveal-delay-${i + 1} rounded-2xl p-6 flex flex-col gap-4`}
              style={{ background: 'var(--surface)', border: '1.5px solid var(--border-light)' }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'var(--gold-light)', color: 'var(--gold)' }}
              >
                {r.icon}
              </div>
              <div>
                <h3 className="text-base font-semibold mb-1.5" style={{ color: 'var(--fg)' }}>{r.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--fg-muted)' }}>{r.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
