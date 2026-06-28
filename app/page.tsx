import Link from 'next/link';
import Image from 'next/image';

const NAV_ITEMS = [
  { label: 'Home', href: '/', tilt: -1 },
  { label: 'Buildings', href: '/buildings', tilt: 2 },
  { label: 'Farming', href: '/farming', tilt: -2 },
  { label: 'Defense', href: '/defense', tilt: 1 },
  { label: 'Research', href: '/research', tilt: 0 },
  { label: 'Settlers', href: '/settlers', tilt: -1 },
  { label: 'Guides', href: '/beginners', tilt: 3 },
];

const FEATURED_GUIDES = [
  {
    title: 'Building Structures Guide',
    excerpt: 'From wooden walls to stone fortresses — a deep dive into wall types, room requirements, and structural stability. Master multi-story construction and build an impenetrable medieval settlement.',
    tag: 'Buildings',
    tagType: 'vermillion' as const,
    readTime: '12',
    href: '/buildings',
  },
  {
    title: 'Farming System Guide',
    excerpt: 'Crop planting, seasonal rotation, irrigation systems, and food storage strategies. Learn to stockpile enough food before winter arrives and ensure your colony survives.',
    tag: 'Farming',
    tagType: 'gold' as const,
    readTime: '10',
    href: '/farming',
  },
  {
    title: 'Defense Strategy Guide',
    excerpt: 'Wall layouts, trap configurations, weapon selection, and raid defense tactics. A complete multi-layered defense system to ensure no invader makes it back out.',
    tag: 'Defense',
    tagType: 'vermillion' as const,
    readTime: '15',
    href: '/defense',
  },
  {
    title: 'Underground Base Building',
    excerpt: 'Carve into the terrain for temperature-stable storage and living quarters. A complete guide to ventilation, support, and defense for underground bases.',
    tag: 'Advanced',
    tagType: 'ink' as const,
    readTime: '14',
    href: '/underground',
  },
];

const GETTING_STARTED = [
  { step: '1', title: 'Choosing a Site', desc: 'Pick a spot near water on elevated ground, balancing defense and farming needs. A hillside is ideal for building an underground base.' },
  { step: '2', title: 'Your First Building', desc: 'Prioritize building a wooden-walled temporary shelter so your settlers have protection from the elements. Also build a stockpile zone for initial supplies.' },
  { step: '3', title: 'Food Supply', desc: 'Immediately plant cabbage and barley fields, while setting up hunting zones. Stockpile enough food to survive your first winter.' },
  { step: '4', title: 'Defense Prep', desc: 'Build wooden walls and gates around the settlement perimeter. Craft bows and melee weapons. Train at least one settler in combat skills.' },
];

const TIPS = [
  { tip: 'Storing food underground dramatically slows spoilage. Digging an underground cellar is one of the most important early investments.', category: 'Storage' },
  { tip: 'Multi-layered walls are more effective than a single thick wall. Enemies must break through repeatedly, buying you time to counterattack.', category: 'Defense' },
  { tip: 'Research farming tech first to unlock advanced crops. Food is the #1 priority for colony survival.', category: 'Research' },
  { tip: 'Settler mood below 30 triggers negative events. Keep rooms clean, provide alcohol, and build recreational facilities.', category: 'Management' },
  { tip: 'Stockpile at least 200 units of food before winter hits. Once snow covers the ground, planting and hunting become impossible.', category: 'Seasons' },
  { tip: 'After crafting bows, station settlers on walls to shoot from above. High ground significantly boosts accuracy and damage.', category: 'Combat' },
];

export default function HomePage() {
  return (
    <>
      {/* ===== Hero Parchment Unfurl ===== */}
      <header className="pt-16 pb-8 px-4 text-center max-w-4xl mx-auto">
      <div className="relative w-full h-48 lg:h-64 rounded-lg mb-6 overflow-hidden">
          <Image
            src="/hero.jpg"
            alt="Going Medieval colony building screenshot"
            fill
            className="object-cover"
            priority
          />
        </div>
        <h1
          className="font-display font-bold text-ink leading-none"
          style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)', letterSpacing: '0.05em' }}
        >
          GOING MEDIEVAL
        </h1>
        <p className="font-display italic text-ink-muted mt-4" style={{ fontSize: 'clamp(1.1rem, 3vw, 1.5rem)' }}>
          &ldquo; Colony Starting Guide &rdquo;
        </p>
        <div className="field-divider mt-8" />
      </header>

      {/* ===== Bookmark Navigation ===== */}
      <nav className="px-4 lg:px-8 max-w-6xl mx-auto pb-2">
        <div className="flex gap-2 justify-center flex-wrap">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="nav-pill"
              style={{ transform: `rotate(${item.tilt}deg)` }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      {/* ===== Main Content ===== */}
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-10">
        <div className="space-y-14">

          {/* --- Welcome paragraph (drop cap) --- */}
          <section>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-ink leading-tight text-balance">
              Build Your Colony in the Medieval Wilderness
            </h2>
            <p className="drop-cap font-serif text-lg text-ink-light leading-relaxed mt-6">
              Going Medieval is a medieval colony simulation game that launched its 1.0 full release on March 12, 2026. You lead a group of settlers building a settlement from scratch in the wilderness — constructing homes, cultivating farmland, forging weapons, fending off raiders, and surviving brutal winters. This guide site collects battle-tested community knowledge, covering all core systems: buildings, farming, defense, research, and more, to help you build a thriving medieval colony. All data is based on community estimates and provided for reference only.
            </p>
          </section>

          {/* --- Featured Guides --- */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-display text-2xl font-semibold text-ink">Featured Guides</h3>
                <p className="font-serif text-sm text-ink-muted mt-1">In-depth breakdowns of core systems</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {FEATURED_GUIDES.map((guide, i) => (
                <a key={i} href={guide.href} className="journal-card block p-6 group">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`field-tag ${guide.tagType}`}>{guide.tag}</span>
                    <span className="font-label text-xs text-ink-muted">{guide.readTime} min read</span>
                  </div>
                  <h4 className="font-display text-lg font-semibold text-ink group-hover:text-vermillion transition-colors duration-200">
                    {guide.title}
                  </h4>
                  <p className="font-serif text-sm text-ink-light leading-relaxed mt-2">
                    {guide.excerpt}
                  </p>
                </a>
              ))}
            </div>
          </section>

          {/* --- Getting Started --- */}
          <section>
            <h3 className="font-display text-2xl font-semibold text-ink mb-6">Getting Started</h3>
            <div className="space-y-5">
              {GETTING_STARTED.map((s, i) => (
                <div key={i} className="flex gap-5 items-start">
                  <span className="step-number">{s.step}</span>
                  <div>
                    <h4 className="font-display text-lg font-semibold text-ink">{s.title}</h4>
                    <p className="font-serif text-sm text-ink-light leading-relaxed mt-1">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* --- Pro Tips --- */}
          <section>
            <h3 className="font-display text-2xl font-semibold text-ink mb-6">Pro Tips</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {TIPS.map((item, i) => (
                <div key={i} className="journal-card p-4">
                  <span className="field-tag ink text-[10px] mb-2 inline-block">{item.category}</span>
                  <p className="font-serif text-sm text-ink leading-relaxed">{item.tip}</p>
                </div>
              ))}
            </div>
          </section>

        </div>

        <div className="field-divider mt-16" />
      </main>
    </>
  );
}
