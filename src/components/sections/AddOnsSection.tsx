const ADDONS = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M3 5h14M3 10h10M3 15h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Texte überarbeiten',
    body: 'Bestehende Texte strukturieren und verständlicher formulieren.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="2" y="3" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="7" cy="8" r="2" stroke="currentColor" strokeWidth="1.3" />
        <path d="M2 13l4-4 4 4 3-3 5 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Bildauswahl & -aufbereitung',
    body: 'Passende Bilder auswählen und für Web optimieren.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 10h6M10 7v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Google Business Profil',
    body: 'Einrichten oder optimieren für lokale Sichtbarkeit.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 3v2M10 15v2M3 10h2M15 10h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'SEO-Grundoptimierung',
    body: 'Titles, Meta-Tags, Struktur und Ladezeit verbessern.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="2" y="13" width="16" height="5" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M5 13V9M10 13V6M15 13V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Hosting & Wartung',
    body: 'Technische Betreuung, Updates und Verfügbarkeit.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 10c0-1.5.7-3 3-3s3 1.5 3 3-.7 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M13 13l2 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
    title: 'Mehrsprachigkeit',
    body: 'Website in Deutsch, Französisch, Italienisch oder Englisch.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="2" y="6" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 10h8M6 13h5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
    title: 'Kontaktformular-Backend',
    body: 'Echte E-Mail-Weiterleitung ohne Datenverlust.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M3 14l4-4 3 3 4-6 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Analytics & Statistiken',
    body: 'Besucherzahlen und Verhalten datenschutzkonform messen.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 2L12.5 7.5L18 8.5L14 12.5L15 18L10 15.5L5 18L6 12.5L2 8.5L7.5 7.5L10 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Logo / Branding Light',
    body: 'Einfaches, sauberes Logo und Farbkonzept für den Betrieb.',
  },
]

export default function AddOnsSection() {
  return (
    <section className="bg-background border-t border-hairline">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-24">
        <div className="max-w-xl mb-14">
          <p
            className="text-xs font-semibold tracking-[0.2em] uppercase mb-4"
            style={{ color: '#C9A84C' }}
          >
            Add-Ons
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground leading-[1.1] mb-4">
            Zusätzliche Unterstützung.
          </h2>
          <p className="text-base text-muted leading-relaxed">
            Ergänzende Leistungen, die Ihren Online-Auftritt abrunden.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ADDONS.map(a => (
            <div
              key={a.title}
              className="bg-surface rounded-2xl p-5 border border-hairline flex gap-4"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: '#FBF4E4', color: '#C9A84C' }}
              >
                {a.icon}
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-1">{a.title}</h3>
                <p className="text-xs text-muted leading-relaxed">{a.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
