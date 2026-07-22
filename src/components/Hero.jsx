import WhatsAppButton from './WhatsAppButton'

export default function Hero() {
  return (
    <section className="flex min-h-[calc(100svh-3.5rem)] items-center">
      <div className="mx-auto w-full max-w-5xl px-5 pt-10 pb-20 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-1.5 text-xs font-medium text-slate-600">
          <span className="size-1.5 rounded-full bg-blue-600" />
          Digital agency · Karachi
        </span>
        <h1 className="mx-auto mt-6 max-w-3xl text-[2.6rem] leading-[1.1] font-extrabold tracking-tight text-slate-900 sm:text-6xl">
          Websites & AI automation that bring you{' '}
          <span className="text-blue-600">more customers</span>
        </h1>
        <p className="mx-auto mt-5 max-w-md text-lg text-slate-500">
          Built for local businesses — done for you, start to finish.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <WhatsAppButton />
          <a
            href="#portfolio"
            className="text-sm font-semibold text-slate-600 transition hover:text-blue-600"
          >
            See our work ↓
          </a>
        </div>
      </div>
    </section>
  )
}
