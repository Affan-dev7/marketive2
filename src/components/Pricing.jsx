import { Check } from 'lucide-react'
import WhatsAppButton from './WhatsAppButton'
import { PRICING_STARTING_AT } from '../config'

const included = [
  'Content & social media management',
  'Google & Meta ad campaigns',
  'Website audit — and a fix or rebuild if needed',
]

export default function Pricing() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-5xl px-5">
        <p className="text-xs font-semibold tracking-widest text-blue-600 uppercase">Pricing</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          Simple, upfront pricing.
        </h2>
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-8 sm:p-10">
          <p className="text-sm font-medium text-slate-500">Starting at</p>
          <p className="mt-1 text-4xl font-extrabold tracking-tight text-slate-900">
            {PRICING_STARTING_AT}
          </p>
          <ul className="mt-6 space-y-3">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                <Check className="mt-0.5 size-4 shrink-0 text-blue-600" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <WhatsAppButton label="Get a custom quote" />
          </div>
        </div>
      </div>
    </section>
  )
}
