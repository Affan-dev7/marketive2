import { EMAIL, WHATSAPP_DISPLAY, WHATSAPP_LINK } from '../config'

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-5 text-center text-sm text-slate-500">
        <p className="font-bold tracking-tight text-slate-900">
          Marketive<span className="text-blue-600">.</span>
        </p>
        <a href={WHATSAPP_LINK} className="transition hover:text-blue-600">
          {WHATSAPP_DISPLAY}
        </a>
        <a href={`mailto:${EMAIL}`} className="transition hover:text-blue-600">
          {EMAIL}
        </a>
      </div>
    </footer>
  )
}
