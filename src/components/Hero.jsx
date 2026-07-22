import WhatsAppButton from './WhatsAppButton'

export default function Hero() {
  return (
    <section className="flex min-h-[calc(100svh-3.5rem)] items-center">
      <div className="mx-auto w-full max-w-5xl px-5 py-16 text-center">
        <p className="mb-4 text-xs font-semibold tracking-widest text-blue-600 uppercase">
          Digital agency · Karachi
        </p>
        <h1 className="mx-auto max-w-2xl text-4xl leading-tight font-bold tracking-tight text-slate-900 sm:text-5xl">
          Websites & AI automation that bring you{' '}
          <span className="text-blue-600">more customers</span>
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base text-slate-500">
          Built for local businesses — done for you, start to finish.
        </p>
        <div className="mt-8">
          <WhatsAppButton />
        </div>
      </div>
    </section>
  )
}
