'use client'

import { useState, type FormEvent } from 'react'
import { CONTACT_EMAIL } from '@/lib/constants'

const TRUST = [
  'Kostenlose Ersteinschätzung',
  'Keine versteckten Kosten',
  'Persönliche Betreuung',
]

const inputClass =
  'w-full bg-white border border-hairline rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-1 transition-colors'

export default function ContactSection() {
  const [name, setName] = useState('')
  const [firma, setFirma] = useState('')
  const [website, setWebsite] = useState('')
  const [paket, setPaket] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const subject = `Website-Anfrage von ${name}${firma ? ` – ${firma}` : ''}`
    const body = [
      `Name: ${name}`,
      `Firma: ${firma || '–'}`,
      `Bestehende Website: ${website || '–'}`,
      `Gewünschtes Paket: ${paket || '–'}`,
      '',
      `Nachricht:`,
      message,
    ].join('\n')
    window.open(`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`)
    setSent(true)
  }

  return (
    <section id="kontakt" className="scroll-mt-20 bg-background border-t border-hairline">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-24">
        <div className="max-w-xl mb-12">
          <p
            className="text-xs font-semibold tracking-[0.2em] uppercase mb-4"
            style={{ color: '#C9A84C' }}
          >
            Kontakt
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground leading-[1.1] mb-4">
            Bereit für einen professionellen Online-Auftritt?
          </h2>
          <p className="text-base text-muted leading-relaxed">
            Schreiben Sie mir kurz, was Ihr Betrieb macht und ob bereits eine Website
            vorhanden ist. Ich gebe Ihnen eine ehrliche Einschätzung, welches Paket
            sinnvoll ist – kostenlos und unverbindlich.
          </p>
        </div>

        <div className="grid lg:grid-cols-[2fr_1fr] gap-12">
          {/* Form */}
          <div>
            {sent ? (
              <div
                className="rounded-2xl p-8 text-center flex flex-col gap-4"
                style={{ background: '#FBF4E4', border: '1px solid rgba(201,168,76,0.3)' }}
              >
                <div
                  className="w-12 h-12 rounded-full mx-auto flex items-center justify-center"
                  style={{ background: '#C9A84C', color: '#0C0A06' }}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10l5 5 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="font-semibold text-foreground">Ihre E-Mail-App sollte sich jetzt öffnen.</p>
                <p className="text-sm text-muted">
                  Falls nicht, schreiben Sie mir direkt an{' '}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="font-medium"
                    style={{ color: '#C9A84C' }}
                  >
                    {CONTACT_EMAIL}
                  </a>
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="text-sm text-muted underline mt-2"
                >
                  Formular erneut öffnen
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-medium text-muted uppercase tracking-wide">
                      Name *
                    </label>
                    <input
                      id="name" type="text" required
                      placeholder="Ihr Name"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      className={inputClass}
                      style={{ '--tw-ring-color': '#C9A84C' } as React.CSSProperties}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="firma" className="text-xs font-medium text-muted uppercase tracking-wide">
                      Firma
                    </label>
                    <input
                      id="firma" type="text"
                      placeholder="Ihr Betrieb"
                      value={firma}
                      onChange={e => setFirma(e.target.value)}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="website" className="text-xs font-medium text-muted uppercase tracking-wide">
                      Bestehende Website?
                    </label>
                    <select
                      id="website"
                      value={website}
                      onChange={e => setWebsite(e.target.value)}
                      className={inputClass}
                      style={{ colorScheme: 'light' }}
                    >
                      <option value="">Bitte wählen</option>
                      <option value="Nein, keine Website vorhanden">Nein, keine Website vorhanden</option>
                      <option value="Ja, soll überarbeitet werden">Ja, soll überarbeitet werden</option>
                      <option value="Ja, komplett neu aufbauen">Ja, komplett neu aufbauen</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="paket" className="text-xs font-medium text-muted uppercase tracking-wide">
                      Gewünschtes Paket
                    </label>
                    <select
                      id="paket"
                      value={paket}
                      onChange={e => setPaket(e.target.value)}
                      className={inputClass}
                      style={{ colorScheme: 'light' }}
                    >
                      <option value="">Noch unklar</option>
                      <option value="Onepager (ab CHF 990)">Onepager (ab CHF 990)</option>
                      <option value="Business-Website (ab CHF 2'490)">Business-Website (ab CHF 2'490)</option>
                      <option value="Web-App / Plattform (ab CHF 7'500)">Web-App / Plattform (ab CHF 7'500)</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-medium text-muted uppercase tracking-wide">
                    Nachricht *
                  </label>
                  <textarea
                    id="message" rows={4} required
                    placeholder="Kurze Beschreibung Ihres Betriebs und was Sie benötigen…"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    className={`${inputClass} resize-y`}
                  />
                </div>

                <div className="flex items-start gap-4">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium transition-opacity hover:opacity-90"
                    style={{ background: '#C9A84C', color: '#0C0A06' }}
                  >
                    Nachricht senden →
                  </button>
                  <p className="text-xs text-muted leading-relaxed pt-3">
                    Öffnet Ihre E-Mail-App.<br />Kein Datenverlust, keine Weiterleitung an Dritte.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Right: trust + direct contact */}
          <div className="flex flex-col gap-8">
            <div>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-base font-medium transition-opacity hover:opacity-80"
                style={{ color: '#C9A84C' }}
              >
                {CONTACT_EMAIL}
              </a>
              <p className="text-sm text-muted mt-2">
                Ich antworte in der Regel innerhalb von 24 Stunden.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {TRUST.map(t => (
                <div key={t} className="flex items-center gap-3">
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center text-xs flex-shrink-0"
                    style={{ background: '#FBF4E4', color: '#C9A84C' }}
                  >
                    ✓
                  </span>
                  <span className="text-sm text-foreground">{t}</span>
                </div>
              ))}
            </div>

            <div
              className="rounded-2xl p-5 text-sm text-muted leading-relaxed"
              style={{ background: '#F0EFEC', border: '1px solid #E3E1DC' }}
            >
              <strong className="text-foreground block mb-2">Ruben Schneider</strong>
              Webdesign & Entwicklung<br />
              Zürich, Schweiz
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
