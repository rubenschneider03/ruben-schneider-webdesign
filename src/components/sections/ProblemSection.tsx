const PROBLEMS = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="2" y="5" width="24" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M10 23h8M14 21v2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M10 11l8 8M18 11l-8 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    title: 'Keine Website',
    description: 'Wer online nicht sichtbar ist, wird nicht gefunden – egal wie gut die Arbeit ist.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="11" stroke="currentColor" strokeWidth="1.6" />
        <path d="M14 8v6l4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 22l2-2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    title: 'Veralteter Auftritt',
    description: 'Ein Webauftritt aus dem Jahr 2010 weckt kein Vertrauen bei heutigen Kunden.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="9" y="2" width="10" height="18" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="14" cy="17" r="1" fill="currentColor" />
        <path d="M5 8l2 2M23 8l-2 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M3 22l3-3M25 22l-3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    title: 'Schlechte Darstellung auf Handy',
    description: 'Über 70% der Suchanfragen kommen vom Smartphone – ist Ihre Website da noch lesbar?',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M5 5h5l2 4-2.5 1.5a11 11 0 005 5L16 13l4 2v5a2 2 0 01-2 2C9 22 6 9 5 7a2 2 0 010-2z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M19 5h4M21 3v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    title: 'Unklare Kontaktmöglichkeit',
    description: 'Wer nicht sofort versteht, wie er Kontakt aufnehmen kann, sucht weiter.',
  },
]

export default function ProblemSection() {
  return (
    <section id="leistungen" className="scroll-mt-20 bg-background border-t border-hairline">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-24">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground leading-[1.1] mb-6">
            Viele gute Betriebe wirken online schlechter, als sie sind.
          </h2>
          <p className="text-base md:text-lg text-muted leading-relaxed">
            Ob Schreiner, Elektriker, Gipser, Gartenbauer oder Immobilienverwaltung – viele Betriebe und Dienstleister leisten ausgezeichnete Arbeit, verlieren aber potenzielle Aufträge, weil der erste Google-Treffer enttäuscht.
          </p>
        </div>

        {/* Problem cards */}
        <div className="grid sm:grid-cols-2 gap-5 mb-12">
          {PROBLEMS.map(p => (
            <div
              key={p.title}
              className="bg-surface rounded-2xl p-7 border border-hairline flex gap-5"
            >
              <div
                className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: '#FBF4E4', color: '#C9A84C' }}
              >
                {p.icon}
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{p.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Callout quote */}
        <div
          className="rounded-2xl px-8 py-7 border-l-4"
          style={{ background: '#FBF4E4', borderLeftColor: '#C9A84C' }}
        >
          <p className="font-display text-xl md:text-2xl text-foreground leading-snug">
            "Kunden prüfen Ihr Unternehmen online, bevor sie anrufen. Der erste Eindruck entscheidet."
          </p>
        </div>
      </div>
    </section>
  )
}
