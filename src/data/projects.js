export const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'websites', label: 'Websites' },
  { id: 'ads', label: 'Ads' },
  { id: 'social', label: 'Social & content' },
  { id: 'branding', label: 'Branding' },
]

// kind:
//   'live'    — a real, launched site; card links out to it
//   'client'  — real work we did, client kept anonymous (labelled "Client work")
//   'concept' — sample / showcase piece, not a paid engagement (labelled "Concept")
export const PROJECTS = [
  // ---- Websites (live) ----
  {
    id: 'adorners',
    category: 'websites',
    kind: 'live',
    name: 'Adorners',
    tag: 'Architecture & interior design',
    line: 'Full website for a Karachi architecture firm — design, build & launch.',
    image: '/portfolio/adorners.jpg',
    url: 'https://adorners.pk',
    domain: 'adorners.pk',
  },
  {
    id: 'car-audio-pk',
    category: 'websites',
    kind: 'live',
    name: 'Car Audio PK',
    tag: 'E-commerce',
    line: 'Online store for Pakistan’s leading car audio importer.',
    image: '/portfolio/car-audio-pk.jpg',
    url: 'https://caraudiopk.com',
    domain: 'caraudiopk.com',
  },

  // ---- Ads ----
  {
    id: 'ad-property',
    category: 'ads',
    kind: 'client',
    name: 'Real estate lead-gen',
    tag: 'Meta ads',
    line: 'Lead-generation campaign for a Karachi property firm.',
    image: '/portfolio/ad-property.svg',
  },
  {
    id: 'ad-restaurant',
    category: 'ads',
    kind: 'concept',
    name: 'Restaurant launch',
    tag: 'Meta ads',
    line: 'Grand-opening promo creative for a local restaurant.',
    image: '/portfolio/ad-restaurant.svg',
  },
  {
    id: 'ad-fitness',
    category: 'ads',
    kind: 'concept',
    name: 'Gym membership drive',
    tag: 'Google & Meta ads',
    line: 'New-year membership offer creative for a fitness studio.',
    image: '/portfolio/ad-fitness.svg',
  },

  // ---- Social & content ----
  {
    id: 'social-cafe',
    category: 'social',
    kind: 'client',
    name: 'Café page management',
    tag: 'Social media',
    line: 'Feed design & content for a Karachi coffee brand.',
    image: '/portfolio/social-cafe.svg',
  },
  {
    id: 'social-skincare',
    category: 'social',
    kind: 'concept',
    name: 'Skincare reels',
    tag: 'Content design',
    line: 'Reel covers & routine content for a beauty brand.',
    image: '/portfolio/social-skincare.svg',
  },
  {
    id: 'social-tips',
    category: 'social',
    kind: 'concept',
    name: 'Tips carousel',
    tag: 'Content design',
    line: 'Value-led carousel to grow a small-business page.',
    image: '/portfolio/social-tips.svg',
  },

  // ---- Branding ----
  {
    id: 'brand-identity',
    category: 'branding',
    kind: 'client',
    name: 'Restaurant brand board',
    tag: 'Brand identity',
    line: 'Wordmark, palette & submark for a modern eatery.',
    image: '/portfolio/brand-identity.svg',
  },
  {
    id: 'brand-logo',
    category: 'branding',
    kind: 'concept',
    name: 'Logo system',
    tag: 'Logo design',
    line: 'Primary mark, monogram & colour system concept.',
    image: '/portfolio/brand-logo.svg',
  },
  {
    id: 'brand-cards',
    category: 'branding',
    kind: 'concept',
    name: 'Stationery set',
    tag: 'Print & identity',
    line: 'Business cards & stationery for a consulting brand.',
    image: '/portfolio/brand-cards.svg',
  },
]
