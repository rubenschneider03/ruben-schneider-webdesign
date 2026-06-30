'use client'

import { useState } from 'react'
import Link from 'next/link'

const NAV_LINKS = [
  { label: 'Leistungen', href: '#leistungen' },
  { label: 'Projekte',   href: '#projekte' },
  { label: 'Über mich',  href: '#ueber-mich' },
  { label: 'Kontakt',    href: '#kontakt' },
]

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm border-b border-hairline">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="font-display text-lg text-foreground hover:opacity-80 transition-opacity">
          Ruben Schneider
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href}
              className="text-sm text-muted hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#kontakt"
            className="text-sm font-medium bg-accent text-white px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity">
            Projekt starten
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground p-1"
          aria-label="Menü öffnen"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {open ? (
              <path d="M4 4l14 14M18 4L4 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            ) : (
              <>
                <line x1="3" y1="6" x2="19" y2="6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                <line x1="3" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                <line x1="3" y1="16" x2="19" y2="16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-hairline bg-background px-6 pb-6 flex flex-col gap-4 pt-4">
          {NAV_LINKS.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="text-base text-muted hover:text-foreground transition-colors py-1">
              {l.label}
            </a>
          ))}
          <a href="#kontakt" onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center mt-2 text-sm font-medium bg-accent text-white px-5 py-3 rounded-full self-start hover:opacity-90 transition-opacity">
            Projekt starten
          </a>
        </div>
      )}
    </header>
  )
}
