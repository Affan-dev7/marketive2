export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-5">
        <a href="#" className="text-lg font-bold tracking-tight text-slate-900">
          Marketive<span className="text-blue-600">.</span>
        </a>
        <nav className="flex items-center gap-5 text-sm font-medium text-slate-600">
          <a href="#portfolio" className="transition hover:text-blue-600">
            Portfolio
          </a>
          <a href="#contact" className="transition hover:text-blue-600">
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}
