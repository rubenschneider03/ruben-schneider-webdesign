'use client'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { PRICING } from '@/lib/constants'

// ── SVG Mockups ───────────────────────────────────────────────────────────────

function OnepagerMockup() {
  return (
    <div className="rounded-xl overflow-hidden" style={{ background: 'white', border: '1px solid var(--border)' }}>
      <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" width="100%">
        {/* Browser chrome */}
        <rect width="300" height="24" fill="#2D2D2D" />
        <circle cx="11" cy="12" r="3.5" fill="#FF5F57" />
        <circle cx="22" cy="12" r="3.5" fill="#FEBC2E" />
        <circle cx="33" cy="12" r="3.5" fill="#28C840" />
        <rect x="55" y="7" width="140" height="10" rx="5" fill="#404040" />
        <text x="125" y="15" textAnchor="middle" fill="#888" fontSize="5.5" fontFamily="system-ui">muster-gmbh.ch</text>

        {/* Hero */}
        <rect x="0" y="24" width="300" height="76" fill="#1C1A17" />
        <text x="150" y="56" textAnchor="middle" fill="white" fontSize="13" fontFamily="Georgia,serif" fontWeight="400">Muster GmbH</text>
        <text x="150" y="70" textAnchor="middle" fill="rgba(255,255,255,0.55)" fontSize="6.5" fontFamily="system-ui">Sanitär · Heizung · Klima</text>
        <rect x="112" y="80" width="76" height="14" rx="7" fill="#B8913A" />
        <text x="150" y="90" textAnchor="middle" fill="white" fontSize="6" fontFamily="system-ui" fontWeight="600">Jetzt anfragen</text>

        {/* Service row */}
        <rect x="0" y="100" width="300" height="50" fill="#F7F5F0" />
        <rect x="8" y="107" width="88" height="36" rx="4" fill="white" stroke="#E2DDD6" strokeWidth="0.8" />
        <rect x="14" y="113" width="10" height="10" rx="2" fill="#F5EDDA" />
        <text x="30" y="120" fill="#1C1A17" fontSize="6" fontFamily="system-ui" fontWeight="600">Sanitär</text>
        <text x="30" y="130" fill="#5C5952" fontSize="5.5" fontFamily="system-ui">Reparatur & Neu</text>
        <rect x="106" y="107" width="88" height="36" rx="4" fill="white" stroke="#E2DDD6" strokeWidth="0.8" />
        <rect x="112" y="113" width="10" height="10" rx="2" fill="#F5EDDA" />
        <text x="128" y="120" fill="#1C1A17" fontSize="6" fontFamily="system-ui" fontWeight="600">Heizung</text>
        <text x="128" y="130" fill="#5C5952" fontSize="5.5" fontFamily="system-ui">Service & Wartung</text>
        <rect x="204" y="107" width="88" height="36" rx="4" fill="white" stroke="#E2DDD6" strokeWidth="0.8" />
        <rect x="210" y="113" width="10" height="10" rx="2" fill="#F5EDDA" />
        <text x="226" y="120" fill="#1C1A17" fontSize="6" fontFamily="system-ui" fontWeight="600">Klima</text>
        <text x="226" y="130" fill="#5C5952" fontSize="5.5" fontFamily="system-ui">Installation</text>

        {/* Über uns */}
        <rect x="0" y="150" width="300" height="28" fill="white" />
        <text x="16" y="163" fill="#1C1A17" fontSize="7.5" fontFamily="Georgia,serif">Über uns</text>
        <rect x="16" y="169" width="180" height="3" rx="1.5" fill="#E2DDD6" />
        <rect x="16" y="174" width="120" height="3" rx="1.5" fill="#E2DDD6" />

        {/* Footer */}
        <rect x="0" y="178" width="300" height="22" fill="#1C1A17" />
        <text x="150" y="191" textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="5.5" fontFamily="system-ui">© 2025 Muster GmbH · info@muster.ch</text>
      </svg>
    </div>
  )
}

function BusinessMockup() {
  return (
    <div className="rounded-xl overflow-hidden" style={{ background: 'white', border: '1px solid var(--border)' }}>
      <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" width="100%">
        {/* Browser chrome */}
        <rect width="300" height="24" fill="#2D2D2D" />
        <circle cx="11" cy="12" r="3.5" fill="#FF5F57" />
        <circle cx="22" cy="12" r="3.5" fill="#FEBC2E" />
        <circle cx="33" cy="12" r="3.5" fill="#28C840" />
        <rect x="55" y="7" width="140" height="10" rx="5" fill="#404040" />
        <text x="125" y="15" textAnchor="middle" fill="#888" fontSize="5.5" fontFamily="system-ui">muster-bau.ch</text>

        {/* Site navbar */}
        <rect x="0" y="24" width="300" height="18" fill="white" />
        <text x="14" y="36" fill="#1C1A17" fontSize="6.5" fontFamily="Georgia,serif" fontWeight="400">Muster Bau</text>
        <line x1="100" y1="31" x2="130" y2="31" stroke="#5C5952" strokeWidth="4" strokeLinecap="round" />
        <line x1="136" y1="31" x2="166" y2="31" stroke="#5C5952" strokeWidth="4" strokeLinecap="round" />
        <line x1="172" y1="31" x2="202" y2="31" stroke="#5C5952" strokeWidth="4" strokeLinecap="round" />
        <rect x="232" y="27" width="56" height="10" rx="5" fill="#B8913A" />
        <text x="260" y="35" textAnchor="middle" fill="white" fontSize="5.5" fontFamily="system-ui" fontWeight="600">Kontakt</text>

        {/* Hero */}
        <rect x="0" y="42" width="300" height="52" fill="#1C1A17" />
        <text x="18" y="65" fill="white" fontSize="10.5" fontFamily="Georgia,serif">Professioneller Bau</text>
        <text x="18" y="78" fill="white" fontSize="10.5" fontFamily="Georgia,serif">&amp; Renovierung</text>
        <rect x="18" y="83" width="62" height="7" rx="3.5" fill="#B8913A" />
        <text x="49" y="89" textAnchor="middle" fill="white" fontSize="5" fontFamily="system-ui" fontWeight="600">Anfrage senden</text>

        {/* Project grid */}
        <rect x="0" y="94" width="300" height="58" fill="#F7F5F0" />
        <text x="16" y="107" fill="#1C1A17" fontSize="7.5" fontFamily="Georgia,serif">Referenzprojekte</text>
        <rect x="14" y="112" width="64" height="34" rx="4" fill="#D8D4CE" />
        <text x="46" y="132" textAnchor="middle" fill="#8A8578" fontSize="5" fontFamily="system-ui">Projekt Zürich</text>
        <rect x="84" y="112" width="64" height="34" rx="4" fill="#DDD9D3" />
        <text x="116" y="132" textAnchor="middle" fill="#8A8578" fontSize="5" fontFamily="system-ui">Projekt Basel</text>
        <rect x="154" y="112" width="64" height="34" rx="4" fill="#E0DCD6" />
        <text x="186" y="132" textAnchor="middle" fill="#8A8578" fontSize="5" fontFamily="system-ui">Projekt Bern</text>
        <rect x="224" y="112" width="62" height="34" rx="4" fill="#D5D0CA" />
        <text x="255" y="132" textAnchor="middle" fill="#8A8578" fontSize="5" fontFamily="system-ui">Umbau Luzern</text>

        {/* Contact form */}
        <rect x="0" y="152" width="300" height="48" fill="white" />
        <text x="16" y="164" fill="#1C1A17" fontSize="7.5" fontFamily="Georgia,serif">Kontakt</text>
        <rect x="14" y="168" width="122" height="8" rx="2" fill="#F2EFE9" stroke="#E2DDD6" strokeWidth="0.7" />
        <rect x="142" y="168" width="144" height="8" rx="2" fill="#F2EFE9" stroke="#E2DDD6" strokeWidth="0.7" />
        <rect x="14" y="180" width="238" height="14" rx="2" fill="#F2EFE9" stroke="#E2DDD6" strokeWidth="0.7" />
        <rect x="258" y="179" width="28" height="16" rx="4" fill="#B8913A" />
        <text x="272" y="190" textAnchor="middle" fill="white" fontSize="5" fontFamily="system-ui" fontWeight="600">→</text>
      </svg>
    </div>
  )
}

function WebAppMockup() {
  return (
    <div className="rounded-xl overflow-hidden" style={{ background: 'white', border: '1px solid var(--border)' }}>
      <svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" width="100%">
        {/* Browser chrome */}
        <rect width="300" height="24" fill="#2D2D2D" />
        <circle cx="11" cy="12" r="3.5" fill="#FF5F57" />
        <circle cx="22" cy="12" r="3.5" fill="#FEBC2E" />
        <circle cx="33" cy="12" r="3.5" fill="#28C840" />
        <rect x="55" y="7" width="140" height="10" rx="5" fill="#404040" />
        <text x="125" y="15" textAnchor="middle" fill="#888" fontSize="5.5" fontFamily="system-ui">app.platform.ch</text>

        {/* Sidebar */}
        <rect x="0" y="24" width="58" height="176" fill="#1C1A17" />
        {/* Avatar */}
        <circle cx="29" cy="42" r="10" fill="#2D2D2D" />
        <circle cx="29" cy="40" r="5" fill="#404040" />
        <rect x="10" y="62" width="38" height="4" rx="2" fill="#B8913A" />
        {/* Nav items */}
        {[76, 90, 104, 118, 132].map((y, i) => (
          <rect key={i} x="10" y={y} width={i === 0 ? 38 : 30} height="4" rx="2"
            fill={i === 0 ? 'rgba(184,145,58,0.22)' : 'rgba(255,255,255,0.08)'} />
        ))}

        {/* Main content area */}
        <rect x="58" y="24" width="242" height="176" fill="#F7F5F0" />

        {/* Top bar */}
        <rect x="58" y="24" width="242" height="20" fill="white" />
        <text x="72" y="36" fill="#1C1A17" fontSize="7" fontFamily="system-ui" fontWeight="600">Dashboard</text>
        <rect x="246" y="29" width="40" height="10" rx="5" fill="#F5EDDA" />
        <text x="266" y="36" textAnchor="middle" fill="#B8913A" fontSize="5.5" fontFamily="system-ui" fontWeight="600">Premium</text>

        {/* Stat cards */}
        <rect x="66" y="52" width="60" height="28" rx="4" fill="white" stroke="#E2DDD6" strokeWidth="0.8" />
        <text x="96" y="63" textAnchor="middle" fill="#1C1A17" fontSize="9" fontFamily="system-ui" fontWeight="700">24</text>
        <text x="96" y="73" textAnchor="middle" fill="#5C5952" fontSize="5" fontFamily="system-ui">Anfragen</text>
        <rect x="134" y="52" width="60" height="28" rx="4" fill="white" stroke="#E2DDD6" strokeWidth="0.8" />
        <text x="164" y="63" textAnchor="middle" fill="#1C1A17" fontSize="9" fontFamily="system-ui" fontWeight="700">8</text>
        <text x="164" y="73" textAnchor="middle" fill="#5C5952" fontSize="5" fontFamily="system-ui">Matches</text>
        <rect x="202" y="52" width="60" height="28" rx="4" fill="white" stroke="#B8913A" strokeWidth="0.8" />
        <text x="232" y="63" textAnchor="middle" fill="#B8913A" fontSize="9" fontFamily="system-ui" fontWeight="700">3</text>
        <text x="232" y="73" textAnchor="middle" fill="#5C5952" fontSize="5" fontFamily="system-ui">Verträge</text>

        {/* Table */}
        <rect x="66" y="88" width="226" height="12" rx="0" fill="white" />
        <text x="74" y="97" fill="#5C5952" fontSize="5.5" fontFamily="system-ui" fontWeight="600">Name</text>
        <text x="150" y="97" fill="#5C5952" fontSize="5.5" fontFamily="system-ui" fontWeight="600">Status</text>
        <text x="226" y="97" fill="#5C5952" fontSize="5.5" fontFamily="system-ui" fontWeight="600">Paket</text>
        {/* Row 1 */}
        <rect x="66" y="100" width="226" height="11" rx="0" fill="#F7F5F0" />
        <text x="74" y="108" fill="#1C1A17" fontSize="5.5" fontFamily="system-ui">Müller GmbH</text>
        <rect x="142" y="103" width="28" height="6" rx="3" fill="rgba(40,200,64,0.12)" />
        <text x="156" y="108" textAnchor="middle" fill="#1A7F37" fontSize="4.5" fontFamily="system-ui" fontWeight="600">Aktiv</text>
        <rect x="218" y="103" width="36" height="6" rx="3" fill="#F5EDDA" />
        <text x="236" y="108" textAnchor="middle" fill="#B8913A" fontSize="4.5" fontFamily="system-ui" fontWeight="600">Business</text>
        {/* Row 2 */}
        <rect x="66" y="111" width="226" height="11" rx="0" fill="white" />
        <text x="74" y="119" fill="#1C1A17" fontSize="5.5" fontFamily="system-ui">Bau AG Zürich</text>
        <rect x="142" y="114" width="28" height="6" rx="3" fill="rgba(40,200,64,0.12)" />
        <text x="156" y="119" textAnchor="middle" fill="#1A7F37" fontSize="4.5" fontFamily="system-ui" fontWeight="600">Aktiv</text>
        <rect x="218" y="114" width="36" height="6" rx="3" fill="#F5EDDA" />
        <text x="236" y="119" textAnchor="middle" fill="#B8913A" fontSize="4.5" fontFamily="system-ui" fontWeight="600">Plattform</text>
        {/* Row 3 */}
        <rect x="66" y="122" width="226" height="11" rx="0" fill="#F7F5F0" />
        <text x="74" y="130" fill="#1C1A17" fontSize="5.5" fontFamily="system-ui">Sanitär Huber</text>
        <rect x="142" y="125" width="34" height="6" rx="3" fill="rgba(255,180,0,0.12)" />
        <text x="159" y="130" textAnchor="middle" fill="#B45309" fontSize="4.5" fontFamily="system-ui" fontWeight="600">Ausstehend</text>
        <rect x="218" y="125" width="36" height="6" rx="3" fill="rgba(226,221,214,0.5)" />
        <text x="236" y="130" textAnchor="middle" fill="#5C5952" fontSize="4.5" fontFamily="system-ui" fontWeight="600">Onepager</text>

        {/* User profile cards */}
        <rect x="66" y="142" width="108" height="50" rx="5" fill="white" stroke="#E2DDD6" strokeWidth="0.8" />
        <circle cx="82" cy="158" r="8" fill="#E2DDD6" />
        <circle cx="82" cy="156" r="4" fill="#D4C9BA" />
        <text x="98" y="156" fill="#1C1A17" fontSize="5.5" fontFamily="system-ui" fontWeight="600">A. Meier</text>
        <text x="98" y="164" fill="#5C5952" fontSize="5" fontFamily="system-ui">Schreiner Meier</text>
        <rect x="72" y="181" width="36" height="7" rx="3.5" fill="#F5EDDA" />
        <text x="90" y="187" textAnchor="middle" fill="#B8913A" fontSize="4.5" fontFamily="system-ui" fontWeight="600">◆ Premium</text>

        <rect x="182" y="142" width="110" height="50" rx="5" fill="white" stroke="#E2DDD6" strokeWidth="0.8" />
        <circle cx="198" cy="158" r="8" fill="#E2DDD6" />
        <circle cx="198" cy="156" r="4" fill="#D4C9BA" />
        <text x="214" y="156" fill="#1C1A17" fontSize="5.5" fontFamily="system-ui" fontWeight="600">K. Baumann</text>
        <text x="214" y="164" fill="#5C5952" fontSize="5" fontFamily="system-ui">Bau AG</text>
        <rect x="187" y="181" width="28" height="7" rx="3.5" fill="rgba(40,200,64,0.1)" />
        <text x="201" y="187" textAnchor="middle" fill="#1A7F37" fontSize="4.5" fontFamily="system-ui" fontWeight="600">Aktiv</text>
      </svg>
    </div>
  )
}

// ── Package Card ───────────────────────────────────────────────────────────────

interface PackageCardProps {
  name: string
  price: string
  tagline: string
  features: string[]
  highlighted?: boolean
  badge?: string
  mockup: React.ReactNode
  index: number
}

function PackageCard({ name, price, tagline, features, highlighted, badge, mockup, index }: PackageCardProps) {
  return (
    <div
      className={`relative rounded-2xl flex flex-col card-lift reveal reveal-delay-${index}`}
      style={{
        background: 'white',
        border: highlighted ? '2px solid var(--gold)' : '1.5px solid var(--border)',
        boxShadow: highlighted
          ? '0 12px 40px rgba(184,145,58,0.14), 0 2px 8px rgba(28,26,23,0.04)'
          : '0 1px 6px rgba(28,26,23,0.04)',
      }}
    >
      {badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
          <span className="text-xs font-bold px-4 py-1.5 rounded-full" style={{ background: 'var(--gold)', color: '#fff' }}>
            {badge}
          </span>
        </div>
      )}

      {/* Mockup */}
      <div className="p-5 pb-0">
        {mockup}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1 gap-4">
        <div>
          <h3 className="text-lg font-bold mb-1" style={{ color: 'var(--fg)' }}>{name}</h3>
          <p className="font-display text-3xl leading-tight" style={{ color: 'var(--gold)' }}>
            {price}
          </p>
          <p className="text-sm mt-1.5 italic" style={{ color: 'var(--fg-muted)' }}>{tagline}</p>
        </div>

        <ul className="flex flex-col gap-2 flex-1">
          {features.map(f => (
            <li key={f} className="flex items-start gap-2.5 text-sm" style={{ color: 'var(--fg)' }}>
              <span className="mt-0.5 flex-shrink-0 font-semibold" style={{ color: 'var(--gold)' }}>✓</span>
              {f}
            </li>
          ))}
        </ul>

        <a
          href="#kontakt"
          className="mt-4 w-full inline-flex items-center justify-center rounded-full py-3 text-sm font-semibold transition-opacity hover:opacity-90"
          style={highlighted
            ? { background: 'var(--gold)', color: '#fff' }
            : { background: 'var(--fg)', color: 'white' }}
        >
          Paket anfragen
        </a>
      </div>
    </div>
  )
}

// ── Main Section ──────────────────────────────────────────────────────────────

export default function PackagesSection() {
  const ref = useScrollReveal()
  return (
    <section id="pakete" className="scroll-mt-20 relative blueprint-grid" ref={ref} style={{ background: 'var(--bg-dark)' }}>
      <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-24">
        <div className="reveal mb-4">
          <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3" style={{ color: 'var(--gold)' }}>
            Pakete &amp; Preise
          </p>
          <h2 className="font-display" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: 'var(--fg)', letterSpacing: '-0.01em', lineHeight: 1.1 }}>
            Drei klare Pakete.
          </h2>
        </div>
        <p className="reveal reveal-delay-1 text-sm mb-14 max-w-xl leading-relaxed" style={{ color: 'var(--fg-muted)' }}>
          Sie wählen den Umfang. Ich sage ehrlich, was sinnvoll ist.
        </p>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          <PackageCard
            name="Onepager"
            price={PRICING.onepager}
            tagline="Wenn Sie einfach professionell online sichtbar sein möchten."
            features={[
              'Eine starke Seite',
              'Leistungen verständlich erklärt',
              'Kontakt klar sichtbar',
              'Mobil optimiert',
              'Ideal für kleinere Betriebe',
            ]}
            mockup={<OnepagerMockup />}
            index={2}
          />

          <PackageCard
            name="Business-Website"
            price={PRICING.business}
            tagline="Wenn Sie Leistungen, Projekte und Referenzen sauber präsentieren möchten."
            features={[
              'Mehrere Seiten',
              'Referenzen / Projekte',
              'Leistungsbereiche',
              'Kontaktformular',
              'Erweiterbar',
            ]}
            highlighted
            badge="Beliebt"
            mockup={<BusinessMockup />}
            index={3}
          />

          <PackageCard
            name="Web-App / Plattform"
            price={PRICING.webapp}
            tagline="Wenn Ihre Idee mehr braucht als eine klassische Website."
            features={[
              'Login / Profile',
              'Datenbank',
              'Zahlungssystem',
              'Automatisierte E-Mails',
              'Individuelle Abläufe',
              'Beispiel: Homelio',
            ]}
            mockup={<WebAppMockup />}
            index={4}
          />
        </div>

        <p className="reveal reveal-delay-5 text-xs mt-8 text-center" style={{ color: 'var(--fg-subtle)' }}>
          Die Preise sind Startpreise. Der genaue Aufwand hängt vom Umfang und den gewünschten Funktionen ab.
        </p>
      </div>
    </section>
  )
}
