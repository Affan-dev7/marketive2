import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import CategoryTabs from '../components/portfolio/CategoryTabs'
import ProjectCard from '../components/portfolio/ProjectCard'
import ComingSoon from '../components/portfolio/ComingSoon'
import { CATEGORIES, PROJECTS } from '../data/projects'

export default function PortfolioPage() {
  const [active, setActive] = useState('all')

  const visible = useMemo(
    () => (active === 'all' ? PROJECTS : PROJECTS.filter((p) => p.category === active)),
    [active],
  )

  const activeLabel = CATEGORIES.find((c) => c.id === active)?.label ?? 'Work'

  return (
    <section className="mx-auto max-w-5xl px-5 py-12">
      <Link
        to="/"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition hover:text-blue-600"
      >
        <ArrowLeft className="size-4" />
        Back home
      </Link>

      <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        Our work
      </h1>
      <p className="mt-2 max-w-md text-slate-500">
        A look at what we've built and run for local businesses.
      </p>

      <div className="mt-7">
        <CategoryTabs categories={CATEGORIES} active={active} onChange={setActive} />
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {visible.length > 0 ? (
          visible.map((project) => <ProjectCard key={project.id} project={project} />)
        ) : (
          <ComingSoon label={activeLabel} />
        )}
      </div>

      <p className="mt-8 text-xs text-slate-400">
        Pieces marked “Concept” are sample work that shows our style. Client work is shown
        without brand names for privacy.
      </p>
    </section>
  )
}
