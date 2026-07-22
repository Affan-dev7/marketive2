import {
  Bot,
  Camera,
  Clapperboard,
  Compass,
  Globe,
  Megaphone,
  Palette,
  PenLine,
  Search,
  Share2,
  TrendingUp,
} from 'lucide-react'

const services = [
  { icon: Globe, name: 'Website development', line: 'Fast sites that convert' },
  { icon: Bot, name: 'AI automation', line: 'Replies & bookings, 24/7' },
  { icon: TrendingUp, name: 'Digital marketing', line: 'Campaigns that sell' },
  { icon: Share2, name: 'Social media management', line: 'Your pages, handled' },
  { icon: Search, name: 'Google ads', line: 'Found when they search' },
  { icon: Megaphone, name: 'Meta ads', line: 'Reach on FB & Insta' },
  { icon: PenLine, name: 'Content creation', line: 'Posts, reels & copy' },
  { icon: Clapperboard, name: 'AI videos', line: 'Scroll-stopping video' },
  { icon: Palette, name: 'Graphics design', line: 'Clean brand visuals' },
  { icon: Compass, name: 'Brand strategy', line: 'Stand out locally' },
  { icon: Camera, name: 'Product photoshoots', line: 'Photos that sell' },
]

export default function Services() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-5">
        <p className="text-xs font-semibold tracking-widest text-blue-600 uppercase">Services</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
          Everything your business needs
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {services.map(({ icon: Icon, name, line }) => (
            <div
              key={name}
              className="rounded-xl border border-slate-200 p-4 transition hover:border-blue-300"
            >
              <span className="inline-flex size-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                <Icon className="size-4.5" strokeWidth={2} />
              </span>
              <h3 className="mt-3 text-sm font-semibold text-slate-900">{name}</h3>
              <p className="mt-1 text-xs text-slate-500">{line}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
