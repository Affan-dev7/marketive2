const projects = [
  {
    name: 'Adorners',
    line: 'Website for an architecture & interior design firm — adorners.pk',
    image: '/portfolio/adorners.svg',
  },
  {
    name: 'Car Audio PK',
    line: 'Online store for car audio systems & accessories.',
    image: '/portfolio/car-audio-pk.svg',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="scroll-mt-14 bg-slate-50 py-16">
      <div className="mx-auto max-w-5xl px-5">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">Work</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
            >
              <img
                src={project.image}
                alt={`${project.name} website screenshot`}
                className="aspect-[16/10] w-full object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <h3 className="font-semibold text-slate-900">{project.name}</h3>
                <p className="mt-1 text-sm text-slate-500">{project.line}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
