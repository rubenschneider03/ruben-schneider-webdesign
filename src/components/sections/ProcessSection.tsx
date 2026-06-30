const STEPS = [
  {
    n: '1',
    title: 'Kostenloses Erstgespräch',
    body: 'Wir besprechen, was Ihr Betrieb braucht und welches Paket am besten passt. Kein Druck, keine Verpflichtung. Ich gebe Ihnen eine ehrliche Einschätzung.',
  },
  {
    n: '2',
    title: 'Struktur & Designvorschlag',
    body: 'Sie erhalten eine klare Seitenstruktur und einen visuellen Designvorschlag zur Ansicht und Rückmeldung – bevor die eigentliche Umsetzung beginnt.',
  },
  {
    n: '3',
    title: 'Umsetzung',
    body: 'Die Website wird professionell, schnell und mobiloptimiert gebaut. Sie werden regelmässig informiert und können jederzeit Rückmeldungen geben.',
  },
  {
    n: '4',
    title: 'Veröffentlichung',
    body: 'Die Website geht online – mit technisch sauberem Aufbau, korrekten Domain-Einstellungen und vollständig geprüft auf allen Geräten.',
  },
  {
    n: '5',
    title: 'Betreuung & Anpassungen',
    body: 'Auf Wunsch unterstütze ich bei Anpassungen, neuen Inhalten oder technischer Wartung. Die Website bleibt auch nach dem Launch funktionsfähig und aktuell.',
  },
]

export default function ProcessSection() {
  return (
    <section id="ablauf" className="scroll-mt-20 bg-surface2 border-t border-hairline">
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-24">
        <div className="max-w-xl mb-14">
          <p
            className="text-xs font-semibold tracking-[0.2em] uppercase mb-4"
            style={{ color: '#C9A84C' }}
          >
            Ablauf
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground leading-[1.1]">
            So läuft die Zusammenarbeit ab.
          </h2>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-0">
          {STEPS.map((step, i) => (
            <div key={step.n} className="grid md:grid-cols-[auto_1fr] gap-0 md:gap-6">
              {/* Number column */}
              <div className="flex flex-col items-center gap-0 mr-6 md:mr-0">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 z-10"
                  style={{ background: '#C9A84C', color: '#0C0A06' }}
                >
                  {step.n}
                </div>
                {i < STEPS.length - 1 && (
                  <div
                    className="w-px flex-1 my-2"
                    style={{ background: '#E3E1DC', minHeight: '40px' }}
                  />
                )}
              </div>

              {/* Content */}
              <div className={`pb-${i < STEPS.length - 1 ? '10' : '0'} pt-1.5`}
                style={{ paddingBottom: i < STEPS.length - 1 ? '2.5rem' : '0' }}>
                <div
                  className="bg-surface rounded-2xl p-6 border border-hairline"
                >
                  <h3 className="text-base font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">{step.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
