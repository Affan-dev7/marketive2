import {
  Bot,
  Camera,
  Clapperboard,
  Compass,
  Globe,
  Megaphone,
  Palette,
  PenLine,
  PhoneCall,
  Share2,
  TrendingUp,
} from 'lucide-react'

const featured = [
  {
    icon: Megaphone,
    name: 'Google & Meta ads',
    line: 'Campaigns that bring buyers — on Google, Facebook & Instagram.',
  },
  {
    icon: Share2,
    name: 'Social media marketing',
    line: 'Your pages managed, your content posted, your brand growing.',
  },
  {
    icon: Globe,
    name: 'Website development',
    line: 'Fast, modern sites built to turn visitors into customers.',
  },
]

const more = [
  { icon: TrendingUp, name: 'Digital marketing', line: 'Full-funnel growth' },
  { icon: Bot, name: 'AI automation', line: 'Workflows that run themselves' },
  { icon: PhoneCall, name: 'AI calling agents', line: 'Answers & books calls, 24/7' },
  { icon: PenLine, name: 'Content creation', line: 'Posts, reels & copy' },
  { icon: Clapperboard, name: 'AI videos', line: 'Scroll-stopping video' },
  { icon: Palette, name: 'Graphics design', line: 'Clean brand visuals' },
  { icon: Compass, name: 'Brand strategy', line: 'Stand out locally' },
  { icon: Camera, name: 'Product photoshoots', line: 'Photos that sell' },
]

export default function Services() {
  return (
    <section id="services" className="scroll-mt-14 py-20">
      <div className="mx-auto max-w-5xl px-5">
        <p className="text-xs font-semibold tracking-widest text-blue-600 uppercase">Services</p>
        <h2 className="mt-2 max-w-md text-3xl font-bold tracking-tight text-slate-900">
          Stop juggling five agencies. We do it all.
        </h2>
        <p className="mt-2 max-w-md text-slate-500">
          Ads, social media, websites and AI — one team handles it end-to-end.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {featured.map(({ icon: Icon, name, line }) => (
            <div
              key={name}
              className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-blue-300 hover:shadow-lg hover:shadow-blue-600/5"
            >
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-blue-600 text-white">
                <Icon className="size-5" strokeWidth={2} />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{name}</h3>
              <p className="mt-1.5 text-sm text-slate-500">{line}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm font-semibold text-slate-400">Plus everything around them</p>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {more.map(({ icon: Icon, name, line }) => (
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
