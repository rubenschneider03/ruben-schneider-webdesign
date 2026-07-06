'use client'

import { useState, type FormEvent } from 'react'
import { CONTACT_EMAIL } from '@/lib/constants'

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: 'var(--bg)',
  border: '1.5px solid var(--border)',
  borderRadius: '12px',
  padding: '12px 16px',
  fontSize: '0.875rem',
  color: 'var(--fg)',
  outline: 'none',
  fontFamily: 'inherit',
}

export default function ContactSection() {
  const [name, setName] = useState('')
  const [firma, setFirma] = useState('')
  const [website, setWebsite] = useState('Nein')
  const [paket, setPaket] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const subject = `Website-Anfrage`
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
    <section id="kontakt" className="scroll-mt-20 py-20 md:py-24" style={{ background: 'var(--bg)' }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <p className="text-xs font-bold tracking-[0.2em] uppercase mb-4" style={{ color: 'var(--gold)' }}>Kontakt</p>
          <h2 className="font-display mb-4" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: 'var(--fg)', letterSpacing: '-0.01em' }}>
            Lassen Sie uns kurz über Ihre Website sprechen.
          </h2>
          <p className="text-base leading-relaxed" style={{ color: 'var(--fg-muted)' }}>
            Schreiben Sie mir, was Ihr Betrieb macht. Ich gebe Ihnen eine ehrliche Einschätzung,
            welches Paket sinnvoll ist.
          </p>
        </div>

        <div className="grid lg:grid-cols-[2fr_1fr] gap-10 max-w-4xl mx-auto">
          {/* Form */}
          <div className="rounded-3xl p-8" style={{ background: 'var(--surface)', border: '1.5px solid var(--border-light)', boxShadow: '0 4px 24px rgba(28,26,23,0.06)' }}>
            {sent ? (
              <div className="text-center flex flex-col gap-4 py-8">
                <div className="w-12 h-12 rounded-full mx-auto flex items-center justify-center" style={{ background: 'var(--gold-light)', color: 'var(--gold)' }}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10l5 5 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="font-semibold" style={{ color: 'var(--fg)' }}>Ihre E-Mail-App sollte sich jetzt öffnen.</p>
                <p className="text-sm" style={{ color: 'var(--fg-muted)' }}>
                  Falls nicht, schreiben Sie direkt an{' '}
                  <a href={`mailto:${CONTACT_EMAIL}`} className="font-medium" style={{ color: 'var(--gold)' }}>
                    {CONTACT_EMAIL}
                  </a>
                </p>
                <button onClick={() => setSent(false)} className="text-sm underline mt-2" style={{ color: 'var(--fg-muted)' }}>
                  Formular erneut öffnen
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--fg-muted)' }}>Name *</label>
                    <input id="name" type="text" required placeholder="Ihr Name" value={name} onChange={e => setName(e.target.value)} style={inputStyle} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="firma" className="text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--fg-muted)' }}>Firma</label>
                    <input id="firma" type="text" placeholder="Ihr Betrieb" value={firma} onChange={e => setFirma(e.target.value)} style={inputStyle} />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="website" className="text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--fg-muted)' }}>Bestehende Website?</label>
                    <select id="website" value={website} onChange={e => setWebsite(e.target.value)} style={{ ...inputStyle, colorScheme: 'light' }}>
                      <option value="Nein">Nein</option>
                      <option value="Ja">Ja</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="paket" className="text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--fg-muted)' }}>Gewünschtes Paket</label>
                    <select id="paket" value={paket} onChange={e => setPaket(e.target.value)} style={{ ...inputStyle, colorScheme: 'light' }}>
                      <option value="">Noch unklar</option>
                      <option value="Onepager">Onepager</option>
                      <option value="Business-Website">Business-Website</option>
                      <option value="Web-App">Web-App</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--fg-muted)' }}>Nachricht *</label>
                  <textarea
                    id="message" rows={4} required
                    placeholder="Kurze Beschreibung Ihres Betriebs und was Sie benötigen…"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    style={{ ...inputStyle, resize: 'vertical' }}
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full font-semibold text-sm transition-opacity hover:opacity-90"
                  style={{ background: 'var(--gold)', color: '#fff', padding: '14px 28px', cursor: 'pointer', border: 'none' }}
                >
                  Nächstes Gespräch anfragen
                </button>
              </form>
            )}
          </div>

          {/* Trust bullets */}
          <div className="flex flex-col justify-center gap-6 lg:pl-4">
            <div className="flex flex-col gap-4">
              {[
                'Kostenlose Ersteinschätzung',
                'Keine versteckten Kosten',
                'Persönlich beantwortet',
              ].map(t => (
                <div key={t} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0 font-bold" style={{ background: 'var(--gold-light)', color: 'var(--gold)' }}>
                    ✓
                  </span>
                  <span className="text-sm font-medium" style={{ color: 'var(--fg)' }}>{t}</span>
                </div>
              ))}
            </div>
            <div className="rounded-2xl p-5" style={{ background: 'var(--surface)', border: '1.5px solid var(--border-light)' }}>
              <p className="font-semibold text-sm mb-1" style={{ color: 'var(--fg)' }}>Ruben Schneider</p>
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm" style={{ color: 'var(--gold)', textDecoration: 'none' }}>
                {CONTACT_EMAIL}
              </a>
              <p className="text-xs mt-2" style={{ color: 'var(--fg-subtle)' }}>Zürich, Schweiz</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
