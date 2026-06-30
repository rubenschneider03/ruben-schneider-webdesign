'use client'

import { useState } from 'react'
import { PRICING } from '@/lib/constants'

const FAQS = [
  {
    q: 'Wie schnell kann eine Website online gehen?',
    a: `Ein Onepager ist oft in 2–4 Wochen fertig, je nach Bereitstellung von Texten und Bildern. Eine Business-Website dauert typisch 4–8 Wochen. Die genaue Zeitplanung besprechen wir beim Erstgespräch.`,
  },
  {
    q: 'Was kostet eine Website?',
    a: `Die Pakete starten ab ${PRICING.onepager} (Onepager), ${PRICING.business} (Business-Website) und ${PRICING.webapp} (Web-App). Der genaue Preis hängt vom Umfang, den Inhalten und den gewünschten Funktionen ab. Ich gebe Ihnen immer eine transparente Offerte.`,
  },
  {
    q: 'Muss ich Texte und Bilder selbst liefern?',
    a: 'Grundlegende Informationen zu Ihrem Betrieb und Ihren Leistungen sind hilfreich. Ich unterstütze gerne bei der Strukturierung und Aufbereitung. Auf Wunsch übernehme ich auch Texte oder helfe bei der Bildauswahl.',
  },
  {
    q: 'Kann eine bestehende Website überarbeitet werden?',
    a: 'Ja – oft ist eine Modernisierung einer bestehenden Website sinnvoller als ein kompletter Neubau. Ich schaue mir Ihre aktuelle Situation gerne an und empfehle den sinnvollsten Weg.',
  },
  {
    q: 'Gibt es laufende Kosten nach der Fertigstellung?',
    a: 'Hosting und Domain-Gebühren fallen separat an – in der Regel CHF 100–200 pro Jahr. Auf Wunsch übernehme ich die Betreuung und Wartung als Add-on, damit Sie sich nicht selbst darum kümmern müssen.',
  },
  {
    q: 'Funktioniert die Website auch auf dem Smartphone?',
    a: 'Ja – alle Websites werden von Anfang an mobiloptimiert entwickelt. Responsive Design ist kein Add-on, sondern Grundvoraussetzung. Über 70% der Suchanfragen kommen heute vom Smartphone.',
  },
  {
    q: 'Kann die Website später noch erweitert werden?',
    a: 'Ja – mit moderner Technologie (Next.js, TypeScript) bleibt die Website technisch erweiterbar. Sei es ein neuer Bereich, zusätzliche Sprachen, ein Kontaktformular-Backend oder spätere Funktionen.',
  },
  {
    q: 'Bieten Sie auch komplexere Plattformen und Web-Apps an?',
    a: 'Ja – wie das Flagship-Projekt Homelio zeigt, sind auch Login-Systeme, Datenbanken, Zahlungsintegration und vollständige Plattformen realisierbar. Sprechen Sie mich an, ich höre mir Ihre Idee gerne an.',
  },
]

function FAQItem({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-hairline last:border-b-0">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-base font-medium text-foreground leading-snug">{q}</span>
        <span
          className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
          style={{ background: open ? '#FBF4E4' : '#F0EFEC', color: '#C9A84C' }}
        >
          {open ? (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
          )}
        </span>
      </button>
      {open && (
        <p className="text-sm text-muted leading-relaxed pb-5 max-w-2xl">{a}</p>
      )}
    </div>
  )
}

export default function FAQSection() {
  return (
    <section className="scroll-mt-20 bg-surface2 border-t border-hairline">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-24">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-14">
          <div>
            <p
              className="text-xs font-semibold tracking-[0.2em] uppercase mb-4"
              style={{ color: '#C9A84C' }}
            >
              FAQ
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground leading-[1.1]">
              Häufige Fragen.
            </h2>
            <p className="text-base text-muted leading-relaxed mt-4">
              Klare Antworten, keine Marketing-Floskeln.
            </p>
          </div>
          <div className="bg-surface rounded-2xl border border-hairline px-6 divide-y-0">
            {FAQS.map((f, i) => (
              <FAQItem key={f.q} q={f.q} a={f.a} defaultOpen={i === 0} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
