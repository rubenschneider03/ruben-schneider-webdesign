'use client'
import { CONTACT_EMAIL } from '@/lib/constants'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: 'var(--dark-bg)' }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 pt-16 pb-10">
        {/* Brand */}
        <div className="mb-8">
          <p className="font-display mb-1" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: 'rgba(247,245,240,0.96)' }}>
            Ruben Schneider
          </p>
          <p className="text-sm" style={{ color: 'rgba(247,245,240,0.45)' }}>
            Webdesign für Handwerk, Bau &amp; Immobilien
          </p>
        </div>

        {/* Divider */}
        <div className="mb-8" style={{ height: '1px', background: 'rgba(255,255,255,0.08)' }} />

        {/* Contact + links row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10">
          <div className="flex flex-col gap-1.5">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-sm font-medium transition-opacity hover:opacity-80"
              style={{ color: 'var(--gold)', textDecoration: 'none' }}
            >
              {CONTACT_EMAIL}
            </a>
            <span className="text-sm" style={{ color: 'rgba(247,245,240,0.40)' }}>
              schneider-webdesign.ch
            </span>
          </div>
          <div className="flex flex-wrap gap-6">
            {[
              { label: 'Pakete', href: '#pakete' },
              { label: 'Referenz', href: '#referenz' },
              { label: 'Ablauf', href: '#ablauf' },
              { label: 'Kontakt', href: '#kontakt' },
            ].map(l => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm transition-colors"
                style={{ color: 'rgba(247,245,240,0.45)', textDecoration: 'none' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(247,245,240,0.85)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(247,245,240,0.45)')}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.5rem' }}>
          <p className="text-xs" style={{ color: 'rgba(247,245,240,0.28)' }}>
            © {year} Ruben Schneider · Moderne Websites für die Deutschschweiz
          </p>
        </div>
      </div>
    </footer>
  )
}
