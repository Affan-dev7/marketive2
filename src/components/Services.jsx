import { Globe, Megaphone, Share2 } from 'lucide-react'

const services = [
  {
    icon: Megaphone,
    name: 'Ads',
    line: 'Google & Meta campaigns that bring in real leads.',
  },
  {
    icon: Share2,
    name: 'Content & social',
    line: 'Posts, reels, and page management that build an audience.',
  },
  {
    icon: Globe,
    name: 'Website',
    line: "We build or fix your site — only if it's needed to convert traffic.",
  },
]

export default function Services() {
  return (
    <section id="services" className="scroll-mt-14 py-20">
      <div className="mx-auto max-w-5xl px-5">
        <p className="text-xs font-semibold tracking-widest text-blue-600 uppercase">Services</p>
        <h2 className="mt-2 max-w-lg text-3xl font-bold tracking-tight text-slate-900">
          We get you customers — not just followers.
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {services.map(({ icon: Icon, name, line }) => (
            <div
              key={name}
              className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-blue-300 hover:shadow-lg hover:shadow-blue-600/5"
            >
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-blue-600 text-white">
                <Icon className="size-5" strokeWidth={2} />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{name}</h3>
              <p className="mt-1.5 text-sm text-slate-500">{line}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
