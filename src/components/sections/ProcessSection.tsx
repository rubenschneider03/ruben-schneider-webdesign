'use client'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const STEPS = [
  {
    n: '1',
    title: 'Kurz besprechen',
    body: 'Sie erzählen mir, was Ihr Betrieb macht und was Sie brauchen.',
  },
  {
    n: '2',
    title: 'Vorschlag erhalten',
    body: 'Ich schlage Struktur, Paket und Designrichtung vor.',
  },
  {
    n: '3',
    title: 'Website umsetzen',
    body: 'Design, Inhalte und Technik werden sauber umgesetzt.',
  },
  {
    n: '4',
    title: 'Online gehen',
    body: 'Die Website wird veröffentlicht und kann später erweitert werden.',
  },
]

export default function ProcessSection() {
  const ref = useScrollReveal()
  return (
    <section id="ablauf" className="scroll-mt-20 py-20 md:py-24" ref={ref} style={{ background: 'var(--bg-dark)' }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="reveal mb-14">
          <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3" style={{ color: 'var(--gold)' }}>Ablauf</p>
          <h2 className="font-display" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: 'var(--fg)', letterSpacing: '-0.01em' }}>
            So kommen Sie zu Ihrer Website.
          </h2>
        </div>

        <div className="flex flex-col gap-0">
          {STEPS.map((step, i) => (
            <div key={step.n} className={`reveal reveal-delay-${i + 1} grid md:grid-cols-[auto_1fr] gap-0 md:gap-6`}>
              {/* Number column */}
              <div className="flex flex-col items-center gap-0 mr-6 md:mr-0">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 z-10"
                  style={{ background: 'var(--gold)', color: '#fff' }}
                >
                  {step.n}
                </div>
                {i < STEPS.length - 1 && (
                  <div
                    className="w-px flex-1 my-2"
                    style={{ background: 'var(--border)', minHeight: '40px' }}
                  />
                )}
              </div>

              {/* Content */}
              <div style={{ paddingBottom: i < STEPS.length - 1 ? '2rem' : '0', paddingTop: '4px' }}>
                <div className="rounded-2xl p-6" style={{ background: 'var(--surface)', border: '1.5px solid var(--border-light)' }}>
                  <h3 className="text-base font-semibold mb-2" style={{ color: 'var(--fg)' }}>
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--fg-muted)' }}>{step.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
