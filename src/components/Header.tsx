'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Leistungen', href: '#leistungen' },
    { label: 'Pakete', href: '#pakete' },
    { label: 'Referenz', href: '#referenz' },
    { label: 'Ablauf', href: '#ablauf' },
    { label: 'Kontakt', href: '#kontakt' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(247,245,240,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(226,221,214,0.8)' : '1px solid transparent',
        boxShadow: scrolled ? '0 1px 12px rgba(28,26,23,0.06)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3" style={{ textDecoration: 'none' }}>
          {/* RS monogram logo */}
          <Image
            src="/images/logo-rs.png"
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 flex-shrink-0"
            aria-hidden="true"
          />
          <span className="flex flex-col leading-none gap-1">
            <span className="font-display text-lg" style={{ color: 'var(--fg)', letterSpacing: '-0.01em' }}>
              Ruben Schneider
            </span>
            <span className="text-[9px] font-bold tracking-[0.32em] uppercase" style={{ color: 'var(--gold-dark)' }}>
              Webdesign
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map(l => (
            <a key={l.href} href={l.href}
              className="text-sm font-medium transition-colors"
              style={{ color: 'var(--fg-muted)', textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--fg)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--fg-muted)')}
            >
              {l.label}
            </a>
          ))}
          <a href="#kontakt"
            className="text-sm font-semibold rounded-full transition-all"
            style={{
              background: 'var(--gold)', color: '#FFFFFF',
              padding: '9px 20px', textDecoration: 'none',
              letterSpacing: '0.01em',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'var(--gold-dark)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'var(--gold)')}
          >
            Kostenlose Ersteinschätzung
          </a>
        </nav>

        {/* Mobile burger */}
        <button onClick={() => setOpen(!open)} aria-label="Menü"
          className="md:hidden p-2 rounded-lg transition-colors"
          style={{ background: open ? 'var(--clay-light)' : 'transparent' }}
        >
          <svg width="20" height="20" fill="none">
            {open
              ? <path d="M4 4l12 12M16 4L4 16" stroke="var(--fg)" strokeWidth="1.6" strokeLinecap="round" />
              : <>
                <line x1="3" y1="6" x2="17" y2="6" stroke="var(--fg)" strokeWidth="1.6" strokeLinecap="round" />
                <line x1="3" y1="11" x2="17" y2="11" stroke="var(--fg)" strokeWidth="1.6" strokeLinecap="round" />
                <line x1="3" y1="16" x2="17" y2="16" stroke="var(--fg)" strokeWidth="1.6" strokeLinecap="round" />
              </>}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-5 pb-5 flex flex-col gap-4"
          style={{ borderTop: '1px solid var(--border)', background: 'rgba(247,245,240,0.98)', backdropFilter: 'blur(12px)' }}
        >
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="text-base font-medium py-2"
              style={{ color: 'var(--fg)', textDecoration: 'none', borderBottom: '1px solid var(--border-light)' }}
            >
              {l.label}
            </a>
          ))}
          <a href="#kontakt" onClick={() => setOpen(false)}
            className="self-start text-sm font-semibold rounded-full"
            style={{ background: 'var(--gold)', color: '#fff', padding: '11px 24px', textDecoration: 'none' }}
          >
            Kostenlose Ersteinschätzung
          </a>
        </div>
      )}
    </header>
  )
}
