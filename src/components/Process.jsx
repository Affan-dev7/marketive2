const steps = [
  {
    n: '01',
    title: 'Free website audit',
    line: 'We check if your current site can actually convert traffic.',
  },
  {
    n: '02',
    title: 'Fix it — or build new',
    line: "We improve what's there, or build a new site, only if it's needed.",
  },
  {
    n: '03',
    title: 'Bring people to it',
    line: 'We run content and ads that drive real traffic to your site.',
  },
]

export default function Process() {
  return (
    <section id="process" className="scroll-mt-14 bg-slate-50 py-16">
      <div className="mx-auto max-w-5xl px-5">
        <p className="text-xs font-semibold tracking-widest text-blue-600 uppercase">
          How it works
        </p>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {steps.map((step) => (
            <div key={step.n}>
              <p className="text-sm font-bold text-blue-600">{step.n}</p>
              <h3 className="mt-2 font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-1.5 text-sm text-slate-500">{step.line}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
