import { ArrowUpRight } from 'lucide-react'

const badges = {
  client: { label: 'Client work', className: 'bg-slate-100 text-slate-600' },
  concept: { label: 'Concept', className: 'bg-blue-50 text-blue-600' },
}

function CardInner({ project }) {
  const badge = badges[project.kind]

  return (
    <>
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="aspect-[16/10] w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <p className="text-xs font-medium text-blue-600">{project.tag}</p>
        <div className="mt-1.5 flex items-center justify-between gap-2">
          <h3 className="text-lg font-semibold text-slate-900">{project.name}</h3>
          {project.kind === 'live' ? (
            <span className="inline-flex items-center gap-1 text-sm font-medium text-slate-400 transition group-hover:text-blue-600">
              {project.domain}
              <ArrowUpRight className="size-4" />
            </span>
          ) : (
            badge && (
              <span
                className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-medium ${badge.className}`}
              >
                {badge.label}
              </span>
            )
          )}
        </div>
        <p className="mt-1.5 text-sm text-slate-500">{project.line}</p>
      </div>
    </>
  )
}

export default function ProjectCard({ project }) {
  const baseClass =
    'group block overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-600/5'

  // Live sites link out; demo / client pieces are non-clickable cards.
  if (project.kind === 'live') {
    return (
      <a href={project.url} target="_blank" rel="noopener noreferrer" className={baseClass}>
        <CardInner project={project} />
      </a>
    )
  }

  return (
    <div className={baseClass}>
      <CardInner project={project} />
    </div>
  )
}
