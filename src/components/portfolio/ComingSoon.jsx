import { Clock } from 'lucide-react'
import { WHATSAPP_LINK } from '../../config'

export default function ComingSoon({ label }) {
  return (
    <div className="col-span-full flex flex-col items-center rounded-2xl border border-dashed border-slate-200 px-6 py-16 text-center">
      <span className="inline-flex size-10 items-center justify-center rounded-full bg-blue-50 text-blue-600">
        <Clock className="size-5" />
      </span>
      <p className="mt-4 font-semibold text-slate-900">{label} coming soon</p>
      <p className="mt-1 text-sm text-slate-500">
        Ask us on WhatsApp — we can share examples directly.
      </p>
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 text-sm font-semibold text-blue-600 hover:underline"
      >
        Chat on WhatsApp →
      </a>
    </div>
  )
}
