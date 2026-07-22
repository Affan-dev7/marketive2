export default function CategoryTabs({ categories, active, onChange }) {
  return (
    <div className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
      {categories.map((category) => {
        const isActive = category.id === active
        return (
          <button
            key={category.id}
            type="button"
            onClick={() => onChange(category.id)}
            aria-pressed={isActive}
            className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap transition ${
              isActive
                ? 'bg-blue-600 text-white'
                : 'border border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-600'
            }`}
          >
            {category.label}
          </button>
        )
      })}
    </div>
  )
}
