'use client'

import { useState } from 'react'
import { PRICING } from '@/lib/constants'

const FAQS = [
  {
    q: 'Wie schnell kann eine Website online gehen?',
    a: 'Ein Onepager ist oft in 2–4 Wochen fertig. Eine Business-Website dauert typisch 4–8 Wochen.',
  },
  {
    q: 'Was kostet eine Website?',
    a: `Onepager ${PRICING.onepager}, Business-Website ${PRICING.business}, Web-App ${PRICING.webapp}. Ich gebe Ihnen immer eine transparente Offerte.`,
  },
  {
    q: 'Muss ich Texte und Bilder selbst liefern?',
    a: 'Grundinfos zu Ihrem Betrieb sind hilfreich. Ich helfe gern bei Struktur und Aufbereitung.',
  },
  {
    q: 'Gibt es laufende Kosten?',
    a: 'Hosting und Domain fallen separat an – in der Regel CHF 100–200 pro Jahr.',
  },
  {
    q: 'Funktioniert die Website auf dem Smartphone?',
    a: 'Ja – alle Websites werden mobiloptimiert entwickelt. Das ist Standard, kein Extra.',
  },
  {
    q: 'Kann die Website später erweitert werden?',
    a: 'Ja – mit moderner Technologie bleibt die Website technisch erweiterbar.',
  },
]

function FAQItem({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div style={{ borderBottom: '1px solid var(--border)' }} className="last:border-b-0">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-base font-medium leading-snug" style={{ color: 'var(--fg)' }}>{q}</span>
        <span
          className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
          style={{ background: open ? 'var(--gold-light)' : 'var(--clay-light)', color: 'var(--gold)' }}
        >
          {open ? (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
          )}
        </span>
      </button>
      {open && (
        <p className="text-sm leading-relaxed pb-5 max-w-2xl" style={{ color: 'var(--fg-muted)' }}>{a}</p>
      )}
    </div>
  )
}

export default function FAQSection() {
  return (
    <section className="scroll-mt-20 py-20 md:py-24" style={{ background: 'var(--bg-dark)' }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-14">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase mb-4" style={{ color: 'var(--gold)' }}>
              FAQ
            </p>
            <h2 className="font-display" style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)', color: 'var(--fg)', letterSpacing: '-0.01em' }}>
              Häufige Fragen.
            </h2>
            <p className="text-base leading-relaxed mt-4" style={{ color: 'var(--fg-muted)' }}>
              Klare Antworten, keine Marketing-Floskeln.
            </p>
          </div>
          <div className="rounded-2xl px-6" style={{ background: 'var(--surface)', border: '1.5px solid var(--border-light)' }}>
            {FAQS.map((f, i) => (
              <FAQItem key={f.q} q={f.q} a={f.a} defaultOpen={i === 0} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
