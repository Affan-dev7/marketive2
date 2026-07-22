import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function Header() {
  const location = useLocation()
  const navigate = useNavigate()

  function handleContactClick(event) {
    if (location.pathname === '/') return // anchor's default smooth-scroll handles it
    event.preventDefault()
    navigate('/#contact')
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-5">
        <Link to="/" className="text-lg font-bold tracking-tight text-slate-900">
          Marketive<span className="text-blue-600">.</span>
        </Link>
        <nav className="flex items-center gap-5 text-sm font-medium text-slate-600">
          <Link to="/portfolio" className="transition hover:text-blue-600">
            Portfolio
          </Link>
          <a href="#contact" onClick={handleContactClick} className="transition hover:text-blue-600">
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}
