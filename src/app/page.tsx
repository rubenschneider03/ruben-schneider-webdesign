import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'

const SERVICES = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-accent">
        <rect x="2" y="4" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 20h8M12 18v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Webdesign',
    body:
      'Visuelle Konzepte und UI-Designs, die Ihre Marke stärken und Besucher überzeugen – modern, klar und zielgruppengerecht.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-accent">
        <polyline points="16 18 22 12 16 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="8 6 2 12 8 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Webentwicklung',
    body:
      'Performante, wartbare Websites und Web-Applikationen mit modernen Technologien. Von der Landingpage bis zur komplexen Plattform.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-accent">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Performance & SEO',
    body:
      'Technische Optimierungen für schnelle Ladezeiten und bessere Sichtbarkeit in Suchmaschinen. Messbares Ergebnis statt Versprechen.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-accent">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'UX / Beratung',
    body:
      'Strukturierte User-Experience-Analyse und strategische Beratung – damit Ihre Website nicht nur schön aussieht, sondern auch funktioniert.',
  },
]

const PROJECTS = [
  {
    title: 'Homelio',
    category: 'Plattform · Next.js · Supabase',
    description: 'Digitale Matching-Plattform für den Schweizer Mietmarkt. Intelligentes Algorithmus-basiertes Matching, Zahlungsintegration via Stripe, E-Mail-Benachrichtigungen.',
    url: 'https://homelio.ch',
  },
  {
    title: 'Projekt 2',
    category: 'E-Commerce · Next.js',
    description: 'Folgt in Kürze.',
    url: '#projekte',
  },
  {
    title: 'Projekt 3',
    category: 'Corporate Website',
    description: 'Folgt in Kürze.',
    url: '#projekte',
  },
]

export default function HomePage() {
  return (
    <>
      <Nav />
      <main className="flex-1">

        {/* ── Hero ────────────────────────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-6 pt-24 pb-28 md:pt-32 md:pb-36">
          <p className="text-xs font-semibold tracking-[0.24em] uppercase text-accent mb-6">
            Webdesign · Entwicklung · Zürich
          </p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.08] text-foreground max-w-3xl mb-8">
            Websites, die Ihr Unternehmen voranbringen.
          </h1>
          <p className="text-lg md:text-xl text-muted leading-relaxed max-w-xl mb-10">
            Ich entwickle massgeschneiderte Websites und Web-Applikationen für Unternehmen
            in der Schweiz — klar, schnell und konversionsorientiert.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#kontakt"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent text-white px-7 py-3.5 text-sm font-medium hover:opacity-90 transition-opacity">
              Projekt besprechen →
            </a>
            <a href="#projekte"
              className="inline-flex items-center justify-center rounded-full border border-hairline px-7 py-3.5 text-sm font-medium text-foreground hover:bg-surface2 transition-colors">
              Projekte ansehen
            </a>
          </div>
        </section>

        {/* ── Divider ─────────────────────────────────────────────── */}
        <div className="border-t border-hairline" />

        {/* ── Leistungen ──────────────────────────────────────────── */}
        <section id="leistungen" className="max-w-6xl mx-auto px-6 py-24 scroll-mt-20">
          <p className="text-xs font-semibold tracking-[0.24em] uppercase text-accent mb-4">Leistungen</p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-14 max-w-lg leading-[1.15]">
            Was ich für Sie umsetze.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map(s => (
              <div key={s.title}
                className="bg-surface rounded-2xl p-7 border border-hairline flex flex-col gap-4">
                <div className="w-11 h-11 rounded-xl bg-accent-light flex items-center justify-center">
                  {s.icon}
                </div>
                <h3 className="text-base font-semibold text-foreground">{s.title}</h3>
                <p className="text-sm text-muted leading-relaxed flex-1">{s.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Divider ─────────────────────────────────────────────── */}
        <div className="border-t border-hairline" />

        {/* ── Projekte ────────────────────────────────────────────── */}
        <section id="projekte" className="max-w-6xl mx-auto px-6 py-24 scroll-mt-20">
          <p className="text-xs font-semibold tracking-[0.24em] uppercase text-accent mb-4">Projekte</p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-14 max-w-lg leading-[1.15]">
            Ausgewählte Arbeiten.
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {PROJECTS.map(p => (
              <a key={p.title} href={p.url}
                className="group bg-surface rounded-2xl border border-hairline p-7 flex flex-col gap-3 hover:border-accent/30 hover:shadow-md transition-all">
                <div className="aspect-video rounded-xl bg-surface2 flex items-center justify-center mb-2">
                  <span className="text-sm text-muted">{p.title}</span>
                </div>
                <p className="text-xs text-accent font-medium tracking-wide">{p.category}</p>
                <h3 className="text-base font-semibold text-foreground group-hover:text-accent transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{p.description}</p>
              </a>
            ))}
          </div>
        </section>

        {/* ── Divider ─────────────────────────────────────────────── */}
        <div className="border-t border-hairline" />

        {/* ── Über mich ───────────────────────────────────────────── */}
        <section id="ueber-mich" className="max-w-6xl mx-auto px-6 py-24 scroll-mt-20">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-xs font-semibold tracking-[0.24em] uppercase text-accent mb-4">Über mich</p>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6 leading-[1.15]">
                Hallo, ich bin Ruben.
              </h2>
              <div className="flex flex-col gap-4 text-muted text-[15px] leading-relaxed">
                <p>
                  Als freier Webdesigner und Entwickler aus Zürich begleite ich Unternehmen von der
                  ersten Idee bis zum fertigen Produkt. Ich verbinde Designgespür mit technischem
                  Knowhow — von der Startseite bis zur skalierbaren Web-Applikation.
                </p>
                <p>
                  Mein Fokus liegt auf klaren Lösungen, die wirklich performen:
                  schnell, zugänglich, und auf Ihre Ziele ausgerichtet.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Figma'].map(t => (
                  <span key={t}
                    className="text-xs font-medium bg-accent-light text-accent px-3.5 py-1.5 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="aspect-square rounded-2xl bg-surface2 flex items-center justify-center text-muted text-sm border border-hairline">
              Foto folgt
            </div>
          </div>
        </section>

        {/* ── Divider ─────────────────────────────────────────────── */}
        <div className="border-t border-hairline" />

        {/* ── Kontakt ─────────────────────────────────────────────── */}
        <section id="kontakt" className="max-w-6xl mx-auto px-6 py-24 scroll-mt-20">
          <div className="max-w-xl">
            <p className="text-xs font-semibold tracking-[0.24em] uppercase text-accent mb-4">Kontakt</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4 leading-[1.15]">
              Lassen Sie uns zusammenarbeiten.
            </h2>
            <p className="text-muted text-[15px] leading-relaxed mb-10">
              Sie haben ein Projekt oder eine Frage? Ich freue mich auf Ihre Nachricht.
              In der Regel antworte ich innerhalb von 24 Stunden.
            </p>
            <form
              action="mailto:hallo@ruben-schneider.ch"
              method="GET"
              className="flex flex-col gap-5"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs font-medium text-foreground/70 uppercase tracking-wide">
                    Name
                  </label>
                  <input
                    id="name" name="name" type="text" placeholder="Ihr Name" required
                    className="bg-surface border border-hairline rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-accent/50 transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-medium text-foreground/70 uppercase tracking-wide">
                    E-Mail
                  </label>
                  <input
                    id="email" name="email" type="email" placeholder="ihre@email.ch" required
                    className="bg-surface border border-hairline rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-accent/50 transition-colors"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="subject" className="text-xs font-medium text-foreground/70 uppercase tracking-wide">
                  Betreff
                </label>
                <input
                  id="subject" name="subject" type="text" placeholder="Kurze Beschreibung Ihres Projekts"
                  className="bg-surface border border-hairline rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-accent/50 transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="body" className="text-xs font-medium text-foreground/70 uppercase tracking-wide">
                  Nachricht
                </label>
                <textarea
                  id="body" name="body" rows={5}
                  placeholder="Was planen Sie? Was ist Ihr Ziel?"
                  className="bg-surface border border-hairline rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-accent/50 transition-colors resize-y"
                />
              </div>
              <div>
                <button type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-accent text-white px-7 py-3.5 text-sm font-medium hover:opacity-90 transition-opacity">
                  Nachricht senden →
                </button>
              </div>
            </form>
            <div className="mt-10 pt-8 border-t border-hairline flex flex-col sm:flex-row gap-6 text-sm text-muted">
              <a href="mailto:hallo@ruben-schneider.ch"
                className="hover:text-accent transition-colors">
                hallo@ruben-schneider.ch
              </a>
              <span>Zürich, Schweiz</span>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
