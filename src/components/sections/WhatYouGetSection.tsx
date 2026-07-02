'use client'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const ITEMS = [
  {
    icon: <svg width="22" height="22" fill="none" viewBox="0 0 22 22"><circle cx="11" cy="11" r="9" stroke="currentColor" strokeWidth="1.5"/><path d="M7 11l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    title: 'Klarer erster Eindruck',
    desc: 'Besucher verstehen sofort, was Sie anbieten und was sie tun sollen.',
  },
  {
    icon: <svg width="22" height="22" fill="none" viewBox="0 0 22 22"><path d="M5 5h5l2 4-2.5 1.5a11 11 0 005 5L16 13l4 2v5a2 2 0 01-2 2C9 22 6 9 5 7a2 2 0 010-2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>,
    title: 'Einfacher Kontakt',
    desc: 'Telefon, E-Mail oder Anfrage ohne Umwege – auf jedem Gerät.',
  },
  {
    icon: <svg width="22" height="22" fill="none" viewBox="0 0 22 22"><rect x="7" y="1" width="8" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M10 17v2M8 21h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
    title: 'Sauber auf Handy',
    desc: 'Mobiloptimiert von Anfang an – über 70% suchen vom Smartphone.',
  },
]

export default function WhatYouGetSection() {
  const ref = useScrollReveal()
  return (
    <section ref={ref} className="py-16 md:py-20" style={{ background: 'var(--surface)' }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="reveal mb-10 md:mb-12">
          <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3" style={{ color: 'var(--gold)' }}>Was Sie bekommen</p>
          <h2 className="font-display" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: 'var(--fg)', letterSpacing: '-0.01em' }}>
            Eine Website, die Ihr Betrieb wirklich nutzen kann.
          </h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-5">
          {ITEMS.map((item, i) => (
            <div key={item.title}
              className={`reveal reveal-delay-${i + 1} rounded-2xl p-7 flex flex-col gap-4 transition-all`}
              style={{ background: 'var(--bg)', border: '1.5px solid var(--border-light)' }}
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: 'var(--gold-light)', color: 'var(--gold)' }}>
                {item.icon}
              </div>
              <div>
                <h3 className="text-base font-semibold mb-1.5" style={{ color: 'var(--fg)' }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--fg-muted)' }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
