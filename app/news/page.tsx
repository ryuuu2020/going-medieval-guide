
const NEWS = [
  {
    date: "2026-06-27",
    title: "Going Medieval Patch 1.0.105 — Load Time Optimization and Crash Fixes",
    tag: "Update",
    excerpt:
      "Foxy Voxel shipped Going Medieval patch 1.0.105 on June 25, and the headline improvement is a significant reduction in loading times when entering or exiting sub-maps in large settlements. If your colony has grown to 30+ settlers with extensive underground construction, you have likely noticed the loading screens getting longer — this patch directly addresses that issue. Beyond load times, the patch fixes multiple crash scenarios, resolves a tutorial resource shortage bug that could block progression, and corrects several visual display errors. One known issue remains: assigned pets still do not sleep with their owners, which the developers have acknowledged but not yet fixed. The patch is live on both the main branch and the demo, so new players trying the game during the Steam Summer Sale will get the optimized build. For veteran colony builders, the load time improvement alone makes this patch worth updating to — large save files that previously took 30+ seconds to load sub-maps should now be noticeably faster.",
  },
      {
    date: '2026-06-26',
    title: 'Medieval Monday Talk #81: Downtime Activities + Patch 1.0.105 Performance',
    excerpt: "Foxy Voxel's Medieval Monday Talk #81 explores 'Interesting Downtime' — new idle activities for settlers between major construction projects. Proposed features include: settler social interactions (gossip and storytelling around campfires), animal petting mechanics with mood buffs, and a 'contemplation' system where idle settlers generate research points by observing nature. These are experimental-branch targets and won't hit main until stability is confirmed. Meanwhile, Patch 1.0.105 (June 24) delivers significantly faster map transitions for players with massive 50+ structure settlements — a long-requested optimization. Several crash fixes and visual glitch patches are included. Important: experimental and main branches are currently divergent; loading experimental saves on main may cause corruption. A new developer logging system on the experimental branch will help Foxy Voxel gather detailed crash telemetry.",
    tag: 'Update',
  },
  {
    date: '2026-06-25',
    title: 'Underground Mining 101: How to Build Your First Iron Mine Without Collapsing Everything',
    excerpt: "One of the most common mistakes new Going Medieval players make is digging too aggressively underground and triggering a catastrophic collapse that destroys hours of work. Our new Underground Mining guide walks you through the safe way to extract iron, coal, and gold. Key rules: never dig a 7×7 or larger room without support beams (wood beams every 4 tiles), always leave at least 2 tiles of overhead rock above your mining chamber, and build support pillars in a grid pattern before expanding. The guide includes a step-by-step walkthrough for your first iron mine — from picking the right hill to smelting your first bars — with annotated screenshots. Bonus section covers advanced topics: multi-level mine shaft design, temperature management in deep mines (critical for summer survival), and how to use the new trading system to supplement iron income while your mine ramps up. For players struggling with the research unlock order: Carpentry → Architecture → Smithing gets you from settlement to iron tools in the shortest number of research cycles.",
    tag: 'Guide',
  },
  {
    date: '2026-06-25',
    title: 'Patch 1.0.105: Load Time Optimization for Massive Settlements, Crash Fixes Live',
    excerpt: 'Foxy Voxel released patch 1.0.105 on June 24, targeting quality-of-life and stability improvements. The headline change: significantly reduced enter/exit duration when loading secondary maps on saves with massive settlements — a long-requested fix for late-game colony builders with hundreds of structures. Several crash occurrences have been resolved, including a fix for the tutorial resource shortage bug that could soft-lock new players under certain conditions. Visual glitches have also been patched. The developers note that experimental and main branches are currently divergent — avoid loading experimental saves on the main branch to prevent corruption. A new Dev logging system has been added to the experimental branch to gather detailed crash reports from the community.',
    tag: 'Update',
  },
  {
    date: '2026-06-15',
    title: 'Going Medieval 1.0 Full Release Review: Massive Content Expansion, New Biomes Arrive',
    excerpt: 'The 1.0 full release delivers a massive content expansion over earlier versions, adding Grasslands and Desert biomes, a trading system, underground exploration, and more. The game\'s level of completion has significantly improved, with an 89% positive Steam rating (community estimate). This guide site has been fully updated for 1.0.',
    tag: 'Review',
  },
  {
    date: '2026-05-20',
    title: 'Community Mod Tools Released, Custom Content Surges',
    excerpt: 'The developers released official modding tools, and the community quickly produced a flood of custom content — new buildings, crops, weapons, and biomes. Check out the Steam Workshop for high-quality mods. Note that mods may affect game balance.',
    tag: 'Community',
  },
  {
    date: '2026-03-12',
    title: 'Going Medieval 1.0 Officially Launches',
    excerpt: 'After years in Early Access, Going Medieval has finally released its 1.0 version. New content includes: a trading system, underground cave exploration, new biomes, new weapons and armor, improved settler AI, and a refined UI. Thanks to all Early Access players for their support.',
    tag: 'Update',
  },
  {
    date: '2026-02-28',
    title: 'Final 1.0 Preview: New Features Overview',
    excerpt: 'The developer released the final 1.0 preview, showcasing upcoming features: merchant NPC system, underground ecology, seasonal weather events, and new building materials. The game was also confirmed to support Simplified Chinese.',
    tag: 'Preview',
  },
  {
    date: '2026-01-15',
    title: 'Dev Diary: 1.0 Progress Update & Release Window',
    excerpt: 'The development team revealed 1.0 progress — core features 90% complete, with final bug fixes and performance optimization underway. Expected Q1 2026 release. Early Access players will receive a free upgrade to the full version.',
    tag: 'Dev',
  },
];
export const metadata = {
  title: "Going Medieval News & Updates — Latest Patches (2026)",
  description:
    "Latest Going Medieval news and updates. Patch notes, new features, and community highlights for Going Medieval players.",
};


export default function NewsPage() {
  return (
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-10">
            <section>
              <h1 className="chapter-heading">News & Updates</h1>
              <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
                Stay up to date with the latest Going Medieval news — version updates, community happenings, dev diaries, and reviews. This site will continuously track the game's development and bring you the latest news first. Content below is based on community compilation and is for reference only.
              </p>
            </section>

            <section>
              <div className="space-y-5">
                {NEWS.map((item, i) => (
                  <article key={i} className="journal-card p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-label text-xs text-ink-muted">{item.date}</span>
                      <span className="field-tag vermillion text-[10px]">{item.tag}</span>
                    </div>
                    <h2 className="font-display text-xl font-semibold text-ink mb-2">{item.title}</h2>
                    <p className="font-serif text-sm text-ink-light leading-relaxed">{item.excerpt}</p>
                  </article>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
              <div className="faq-item">
                <details>
                  <summary>What's different between 1.0 and Early Access?</summary>
                  <p>1.0 added a massive amount of content: trading system, underground exploration, new biomes, new weapons and armor, etc. It also features improved AI and UI, plus numerous bug fixes. Early Access players get a free upgrade.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>Will there be future updates?</summary>
                  <p>The developer has indicated they will continue maintaining the game post-1.0, optimizing and fixing based on community feedback. Major content update plans haven't been announced yet, but the modding tool release provides community-driven content expansion.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>How do I get the latest news?</summary>
                  <p>Follow this site's news page for information. You can also follow the Steam store page, the dev team's social media, and the official Discord for firsthand English-language news.</p>
                </details>
              </div>
            </section>
          </div>

          <aside className="lg:w-[35%] space-y-8 shrink-0">
            <div className="field-sidebar-block">
              <h3 className="font-display text-lg font-semibold text-ink mb-4">News Categories</h3>
              <div className="flex flex-wrap gap-2">
                {['Review', 'Community', 'Update', 'Preview', 'Dev'].map(tag => (
                  <span key={tag} className="field-tag gold text-[10px]">{tag}</span>
                ))}
              </div>
            </div>
            <div className="journal-card p-5">
              <h3 className="font-display text-base font-semibold text-ink mb-3">Version Timeline</h3>
              <ul className="space-y-2 font-serif text-sm text-ink-light">
                <li>2026.03 — 1.0 Full Release</li>
                <li>2026.05 — Mod Tools Released</li>
                <li>2026.06 — First Mods Go Live</li>
              </ul>
            </div>
          </aside>
        </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What's different between 1.0 and Early Access?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "1.0 added a massive amount of content: trading system, underground exploration, new biomes, new weapons and armor, etc. It also features improved AI and UI, plus numerous bug fixes. Early Access players get a free upgrade."
      }
    },
    {
      "@type": "Question",
      "name": "Will there be future updates?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The developer has indicated they will continue maintaining the game post-1.0, optimizing and fixing based on community feedback. Major content update plans haven't been announced yet, but the modding tool release provides community-driven content expansion."
      }
    },
    {
      "@type": "Question",
      "name": "How do I get the latest news?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Follow this site's news page for information. You can also follow the Steam store page, the dev team's social media, and the official Discord for firsthand English-language news."
      }
    }
  ]
}` }} />
      </main>
  );
}
