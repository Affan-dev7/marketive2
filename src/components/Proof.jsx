import ComingSoon from './portfolio/ComingSoon'

export default function Proof() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-5">
        <p className="text-xs font-semibold tracking-widest text-blue-600 uppercase">Results</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          Real numbers, not promises.
        </h2>
        <div className="mt-8">
          <ComingSoon label="Case study" />
        </div>
      </div>
    </section>
  )
}
