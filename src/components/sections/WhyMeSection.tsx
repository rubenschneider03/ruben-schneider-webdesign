const REASONS = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <circle cx="11" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 20c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Persönliche Zusammenarbeit',
    body: 'Kein anonymes Ticket-System, kein Team-Durcheinander. Sie arbeiten direkt mit mir – von der ersten Idee bis zur fertigen Website.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M3 19L11 3l8 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 13h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Bauhintergrund & Branchenwissen',
    body: 'Durch meinen Hintergrund im Bau- und Ingenieurwesen verstehe ich, wie Handwerksbetriebe denken – welche Leistungen erklärt werden müssen und was potenzielle Kunden wissen wollen.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <polyline points="15 17 21 11 15 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="7 5 1 11 7 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Moderne Technik',
    body: 'Next.js, TypeScript, Supabase, Tailwind CSS – keine veralteten Template-Lösungen. Ihre Website wird mit aktuellen, bewährten Technologien umgesetzt.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <rect x="2" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 10h8M7 14h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6 6V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 6V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Faire, transparente Preise',
    body: 'Klare Pakete und Startpreise – keine versteckten Kosten, kein Overcharging. Kleinen Betrieben biete ich vernünftige Lösungen zu vernünftigen Preisen.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="11" cy="11" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M11 3v2M11 17v2M3 11h2M17 11h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Fokus auf Wirkung',
    body: 'Nicht nur Ästhetik, sondern echte Wirkung: mehr Vertrauen bei Kunden, klarere Darstellung Ihrer Leistungen, bessere Anfragebasis. Das ist das Ziel.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M11 2l2.4 6.8H20L14.7 12.5l2 6.5L11 15.3 4.3 19l2-6.5L1 8.8h6.6L11 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Klare Kommunikation',
    body: 'Ich erkläre, was ich tue und warum. Keine Fachbegriff-Lawinen, keine Ausreden. Verbindliche Aussagen und ehrliches Feedback, auch wenn es unbequem ist.',
  },
]

export default function WhyMeSection() {
  return (
    <section id="warum" className="scroll-mt-20 bg-background border-t border-hairline">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-24">
        <div className="grid lg:grid-cols-2 gap-14 items-start mb-14">
          <div>
            <p
              className="text-xs font-semibold tracking-[0.2em] uppercase mb-4"
              style={{ color: '#C9A84C' }}
            >
              Warum mit mir?
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground leading-[1.1]">
              Persönlich, kompetent, fair.
            </h2>
          </div>
          <div className="lg:pt-12">
            <p className="text-base text-muted leading-relaxed mb-4">
              Ich bin kein anonymes Unternehmen – ich bin Ruben Schneider, und ich arbeite
              persönlich mit Ihnen zusammen.
            </p>
            <p className="text-base text-muted leading-relaxed">
              Durch meinen Hintergrund im Bau- und Ingenieurwesen verstehe ich, wie
              Handwerksbetriebe, Bauunternehmen und Immobilienanbieter arbeiten – welche
              Leistungen erklärt werden müssen und wie wichtig Vertrauen, Referenzen
              und ein sauberer erster Eindruck für Aufträge sind.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {REASONS.map(r => (
            <div
              key={r.title}
              className="bg-surface rounded-2xl p-6 border border-hairline flex flex-col gap-4"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: '#FBF4E4', color: '#C9A84C' }}
              >
                {r.icon}
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground mb-2">{r.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{r.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
