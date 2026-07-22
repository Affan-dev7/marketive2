import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import ProjectCard from './portfolio/ProjectCard'
import { PROJECTS } from '../data/projects'

const featured = PROJECTS.filter((p) => p.category === 'websites').slice(0, 2)

export default function Portfolio() {
  return (
    <section id="portfolio" className="scroll-mt-14 bg-slate-50 py-20">
      <div className="mx-auto max-w-5xl px-5">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-xs font-semibold tracking-widest text-blue-600 uppercase">Work</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
              Built by Marketive
            </h2>
          </div>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:underline"
          >
            View full portfolio
            <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
