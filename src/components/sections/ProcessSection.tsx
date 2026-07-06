'use client'
import { useEffect, useRef, useState } from 'react'
import HouseBuild from '@/components/visuals/HouseBuild'

const STEPS = [
  {
    n: '1',
    title: 'Kurz besprechen',
    body: 'Sie erzählen mir, was Ihr Betrieb macht und was Sie brauchen.',
    phase: 'Skizze',
  },
  {
    n: '2',
    title: 'Vorschlag erhalten',
    body: 'Ich schlage Struktur, Paket und Designrichtung vor.',
    phase: 'Plan',
  },
  {
    n: '3',
    title: 'Website umsetzen',
    body: 'Design, Inhalte und Technik werden sauber umgesetzt.',
    phase: 'Umsetzung',
  },
  {
    n: '4',
    title: 'Online gehen',
    body: 'Die Website wird veröffentlicht und kann später erweitert werden.',
    phase: 'Fertig',
  },
]

export default function ProcessSection() {
  const [active, setActive] = useState(0)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = stepRefs.current.indexOf(entry.target as HTMLDivElement)
            if (idx !== -1) setActive(idx)
          }
        })
      },
      { rootMargin: '-42% 0px -42% 0px', threshold: 0 }
    )
    stepRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="ablauf" className="scroll-mt-20 py-20 md:py-24" style={{ background: 'var(--bg-dark)' }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="mb-4">
          <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3" style={{ color: 'var(--gold)' }}>Ablauf</p>
          <h2 className="font-display" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: 'var(--fg)', letterSpacing: '-0.01em' }}>
            So kommen Sie zu Ihrer Website.
          </h2>
        </div>
        <p className="text-base leading-relaxed mb-14 max-w-xl" style={{ color: 'var(--fg-muted)' }}>
          Wie beim Hausbau: von der ersten Skizze über den Plan bis zum fertigen Auftritt –
          Schritt für Schritt, ohne Umwege.
        </p>

        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-start">
          {/* Sticky build visual (desktop) */}
          <div className="hidden lg:block sticky top-28">
            <div
              className="relative rounded-3xl p-8 blueprint-grid"
              style={{ background: 'var(--surface)', border: '1.5px solid var(--border-light)', boxShadow: '0 8px 32px rgba(28,26,23,0.06)' }}
            >
              <div className="relative" style={{ aspectRatio: '480 / 360' }}>
                <div className="absolute inset-0">
                  <HouseBuild phase={active} className="w-full h-full" />
                </div>
              </div>
              <div className="flex items-center justify-between mt-6 pt-5" style={{ borderTop: '1px solid var(--border-light)' }}>
                <p className="text-xs font-bold tracking-[0.18em] uppercase" style={{ color: 'var(--gold-dark)' }}>
                  Phase 0{active + 1} — {STEPS[active].phase}
                </p>
                <div className="flex gap-1.5" aria-hidden>
                  {STEPS.map((s, i) => (
                    <span
                      key={s.n}
                      className="h-1.5 rounded-full transition-all duration-500"
                      style={{
                        width: i === active ? '22px' : '8px',
                        background: i <= active ? 'var(--gold)' : 'var(--border)',
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Steps */}
          <div className="flex flex-col gap-0">
            {STEPS.map((step, i) => (
              <div
                key={step.n}
                ref={(el) => { stepRefs.current[i] = el }}
                className="grid grid-cols-[auto_1fr] gap-5"
              >
                {/* Number column */}
                <div className="flex flex-col items-center">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 z-10 transition-colors duration-500"
                    style={{
                      background: i <= active ? 'var(--gold)' : 'var(--clay)',
                      color: '#fff',
                    }}
                  >
                    {step.n}
                  </div>
                  {i < STEPS.length - 1 && (
                    <div className="w-px flex-1 my-2" style={{ background: 'var(--border)', minHeight: '40px' }} />
                  )}
                </div>

                {/* Content */}
                <div style={{ paddingBottom: i < STEPS.length - 1 ? '2rem' : '0', paddingTop: '2px' }}>
                  <div
                    className="card-lift rounded-2xl p-6 transition-colors duration-500"
                    style={{
                      background: 'var(--surface)',
                      border: i === active ? '1.5px solid rgba(184,145,58,0.45)' : '1.5px solid var(--border-light)',
                    }}
                  >
                    <h3 className="text-base font-semibold mb-2" style={{ color: 'var(--fg)' }}>{step.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--fg-muted)' }}>{step.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
