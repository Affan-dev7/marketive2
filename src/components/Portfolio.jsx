import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    name: 'Adorners',
    tag: 'Architecture & interior design',
    line: 'Full website for a Karachi architecture firm — design, build & launch.',
    image: '/portfolio/adorners.jpg',
    url: 'https://adorners.pk',
    domain: 'adorners.pk',
  },
  {
    name: 'Car Audio PK',
    tag: 'E-commerce',
    line: 'Online store for Pakistan’s leading car audio importer.',
    image: '/portfolio/car-audio-pk.jpg',
    url: 'https://caraudiopk.com',
    domain: 'caraudiopk.com',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="scroll-mt-14 bg-slate-50 py-20">
      <div className="mx-auto max-w-5xl px-5">
        <p className="text-xs font-semibold tracking-widest text-blue-600 uppercase">Work</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          Built by Marketive
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-600/5"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.name} website`}
                  className="aspect-[16/10] w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-medium text-blue-600">{project.tag}</p>
                <div className="mt-1.5 flex items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold text-slate-900">{project.name}</h3>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-slate-400 transition group-hover:text-blue-600">
                    {project.domain}
                    <ArrowUpRight className="size-4" />
                  </span>
                </div>
                <p className="mt-1.5 text-sm text-slate-500">{project.line}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
