export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-hairline bg-surface">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted">
          © {year} Ruben Schneider – Webdesign & Entwicklung, Zürich
        </p>
        <div className="flex items-center gap-6 text-sm text-muted">
          <a href="/impressum" className="hover:text-foreground transition-colors">Impressum</a>
          <a href="/datenschutz" className="hover:text-foreground transition-colors">Datenschutz</a>
          <a href="mailto:hallo@ruben-schneider.ch" className="hover:text-foreground transition-colors">
            hallo@ruben-schneider.ch
          </a>
        </div>
      </div>
    </footer>
  )
}
