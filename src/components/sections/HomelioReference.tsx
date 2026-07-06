const TAGS = ['Login', 'Profile', 'Matching', 'Stripe', 'E-Mail-System', 'Datenbank']

export default function HomelioReference() {
  return (
    <section id="referenz" className="scroll-mt-20 py-20 md:py-24" style={{ background: 'var(--dark-bg)' }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase mb-4" style={{ color: 'var(--gold)' }}>Flagship-Projekt</p>
            <h2 className="font-display mb-5" style={{ color: 'rgba(247,245,240,0.96)', fontSize: 'clamp(1.8rem,3vw,2.6rem)', letterSpacing: '-0.01em' }}>
              Flagship-Projekt: Homelio
            </h2>
            <p className="leading-relaxed mb-6" style={{ color: 'rgba(247,245,240,0.60)', fontSize: '0.95rem' }}>
              Homelio ist eine komplexe Plattform mit Registrierung, Nutzerprofilen, Matching, Premium-Abo, Stripe-Zahlung, E-Mail-Benachrichtigungen und Bewerbungsdossier.
            </p>
            <p className="text-sm" style={{ color: 'rgba(247,245,240,0.38)' }}>
              Dieses Projekt zeigt: Neben klassischen Websites sind auch anspruchsvolle digitale Plattformen möglich.
            </p>
          </div>
          <div className="rounded-2xl p-7 flex flex-col gap-5" style={{ background: 'var(--dark-surface)', border: '1px solid var(--dark-border)', boxShadow: '0 8px 32px rgba(0,0,0,0.30)' }}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-2xl mb-1" style={{ color: 'rgba(247,245,240,0.96)' }}>Homelio</h3>
                <p className="text-sm" style={{ color: 'rgba(247,245,240,0.45)' }}>Der unsichtbare Wohnungsmarkt der Schweiz</p>
              </div>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(184,145,58,0.15)', border: '1px solid rgba(184,145,58,0.25)' }}>
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                  <path d="M2 9.5L10 3l8 6.5V19H13v-5.5H7V19H2V9.5z" stroke="#B8913A" strokeWidth="1.4" fill="none" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {TAGS.map(tag => (
                <span key={tag} className="text-xs font-medium px-3 py-1.5 rounded-full" style={{ border: '1px solid rgba(184,145,58,0.35)', color: '#B8913A', background: 'rgba(184,145,58,0.08)' }}>{tag}</span>
              ))}
            </div>
            <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)' }} />
            <a href="https://homelio.ch" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 self-start rounded-full text-sm font-semibold transition-opacity hover:opacity-80"
              style={{ background: 'var(--gold)', color: '#fff', padding: '11px 22px', textDecoration: 'none' }}>
              Homelio ansehen
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
