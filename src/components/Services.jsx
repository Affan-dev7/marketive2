const services = [
  { name: 'Website development', line: 'Fast sites that convert' },
  { name: 'AI automation', line: 'Replies & bookings, 24/7' },
  { name: 'Digital marketing', line: 'Campaigns that sell' },
  { name: 'Social media management', line: 'Your pages, handled' },
  { name: 'Google ads', line: 'Found when they search' },
  { name: 'Meta ads', line: 'Reach on FB & Insta' },
  { name: 'Content creation', line: 'Posts, reels & copy' },
  { name: 'AI videos', line: 'Scroll-stopping video' },
  { name: 'Graphics design', line: 'Clean brand visuals' },
  { name: 'Brand strategy', line: 'Stand out locally' },
  { name: 'Product photoshoots', line: 'Photos that sell' },
]

export default function Services() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl px-5">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900">
          Everything your business needs
        </h2>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {services.map((service) => (
            <div key={service.name} className="rounded-xl border border-slate-200 p-4">
              <h3 className="text-sm font-semibold text-slate-900">{service.name}</h3>
              <p className="mt-1 text-xs text-slate-500">{service.line}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
