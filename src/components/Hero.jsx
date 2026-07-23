import WhatsAppButton from './WhatsAppButton'

const pillars = ['Content & social', 'Ads', 'Website (when needed)']

export default function Hero() {
  return (
    <section className="flex min-h-[calc(100svh-3.5rem)] items-center">
      <div className="mx-auto w-full max-w-5xl px-5 pt-10 pb-20 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-1.5 text-xs font-medium text-slate-600">
          <span className="size-1.5 rounded-full bg-blue-600" />
          Content & ads for local businesses · Karachi
        </span>
        <h1 className="mx-auto mt-6 max-w-3xl text-[2.5rem] leading-[1.1] font-extrabold tracking-tight text-slate-900 sm:text-6xl">
          Everything your business needs to get{' '}
          <span className="text-blue-600">more customers</span>
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-lg text-slate-500">
          Content and ads that bring people in — and a website that converts them, if yours doesn't already.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <WhatsAppButton />
          <a
            href="#process"
            className="text-sm font-semibold text-slate-600 transition hover:text-blue-600"
          >
            How it works ↓
          </a>
        </div>
        <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs font-medium text-slate-400">
          {pillars.map((pillar, index) => (
            <li key={pillar} className="flex items-center gap-3">
              {index > 0 && <span className="size-1 rounded-full bg-slate-300" />}
              {pillar}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
