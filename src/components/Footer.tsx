import { CONTACT_EMAIL } from '@/lib/constants'

const SECTION_LINKS = [
  { label: 'Leistungen', href: '#leistungen' },
  { label: 'Pakete',     href: '#pakete' },
  { label: 'Referenz',   href: '#referenz' },
  { label: 'Ablauf',     href: '#ablauf' },
  { label: 'Kontakt',    href: '#kontakt' },
]

const SERVICE_LINKS = [
  { label: 'Onepager',            href: '#pakete' },
  { label: 'Business-Website',    href: '#pakete' },
  { label: 'Web-App / Plattform', href: '#pakete' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ backgroundColor: '#111110' }}>
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-8">
        {/* Top: brand */}
        <div className="mb-12">
          <p className="font-display text-3xl md:text-4xl text-white mb-2">
            Ruben Schneider
          </p>
          <p className="text-muted text-sm">Webdesign für Handwerk & Bau</p>
        </div>

        {/* Middle: 3 columns */}
        <div className="grid sm:grid-cols-3 gap-8 mb-12">
          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-accent mb-4">
              Navigation
            </p>
            <ul className="flex flex-col gap-2.5">
              {SECTION_LINKS.map(l => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-muted hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Leistungen */}
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-accent mb-4">
              Leistungen
            </p>
            <ul className="flex flex-col gap-2.5">
              {SERVICE_LINKS.map(l => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-muted hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-accent mb-4">
              Kontakt
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-sm text-muted hover:text-white transition-colors"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>

        {/* Bottom: copyright */}
        <div
          className="border-t pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
          style={{ borderColor: 'rgba(227,225,220,0.12)' }}
        >
          <p className="text-sm text-muted">
            © {year} Ruben Schneider
          </p>
          <p className="text-sm text-muted">
            Moderne Websites für die Deutschschweiz
          </p>
        </div>
      </div>
    </footer>
  )
}
