import { ArrowUpRight } from 'lucide-react'

export default function ProjectCard({ project }) {
  return (
    <a
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
  )
}
