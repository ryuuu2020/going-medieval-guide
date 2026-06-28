export const metadata = {
  title: "Going Medieval Year 2 Colony Guide — What to Do Next (2026)",
  description: "Going Medieval year 2 guide. What to prioritize after surviving year 1, mid-game expansion goals, settler recruitment, research priorities, and defense upgrades.",
};

export default function YearTwoGuidePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-10">
          <section>
            <h1 className="chapter-heading">Going Medieval Year 2 Guide — Mid-Game Colony Strategy</h1>
            <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
              Surviving the first year in Going Medieval is an achievement, but year 2 is where many colonies stall. The early-game urgency (build walls, grow food, survive first raids) gives way to a less obvious mid-game agenda — and without a clear plan, colonies often plateau with 8-10 settlers, modest defenses, and no clear upgrade path. Year 2 is the critical expansion phase: recruiting more settlers, upgrading from wood to stone construction, establishing specialist roles, extending your research tree, and building the infrastructure for late-game wealth generation. This guide provides a structured year 2 agenda, prioritized by impact.
            </p>
          </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Year 2 Priority Checklist</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                At the start of year 2, assess your colony against these benchmarks. If you are behind on any category, prioritize it before moving to the next phase.
              </p>
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Year 2 Target</th>
                    <th>Priority</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Settler Count</td><td>12-15 settlers</td><td>Critical</td></tr>
                  <tr><td>Outer Wall</td><td>Stone/clay brick perimeter</td><td>Critical</td></tr>
                  <tr><td>Food Reserve</td><td>2× winter requirements</td><td>Critical</td></tr>
                  <tr><td>Specialist Skills</td><td>Farmer 8+, Carpenter 8+, Smith 6+</td><td>High</td></tr>
                  <tr><td>Research</td><td>Mid-tier completed; advanced underway</td><td>High</td></tr>
                  <tr><td>Settler Quarters</td><td>Private bedrooms for all</td><td>Medium</td></tr>
                  <tr><td>Iron Production</td><td>Smelter + blacksmith operational</td><td>High</td></tr>
                  <tr><td>Military Equipment</td><td>Iron weapons + basic armor for 5+ fighters</td><td>High</td></tr>
                </tbody>
              </table>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Settler Recruitment Strategy for Year 2</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Year 2 colony growth depends on attracting and accepting new settlers. As your colony's reputation grows (through successful raids, high mood, quality structures), better-skilled settlers arrive via wanderer events. Accept settlers selectively in year 2 — prioritize those with high starting skills in your current gaps (Medicine, Combat, Crafting) and Passion traits that match needed roles.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Before accepting new settlers, verify you have bed capacity, food reserves, and productive work assignments waiting for them. A settler who arrives and has nothing to do, nowhere to sleep, or insufficient food is immediately a mood liability.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Infrastructure Upgrades for Year 2</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Year 2 infrastructure priorities in order: (1) <strong className="text-ink">Stone outer wall</strong> — replace all wooden palisade with cut stone or clay brick. (2) <strong className="text-ink">Iron smelter + blacksmith</strong> — start producing iron weapons and armor. (3) <strong className="text-ink">Expanded farm zone</strong> — year 2 settler count requires larger food production. (4) <strong className="text-ink">Root cellar</strong> — underground food preservation for the second winter. (5) <strong className="text-ink">Research bench expansion</strong> — add second bench and dedicated researcher to accelerate tech unlocks.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Research Priorities for Year 2</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                By end of year 1 you should have the early research tiers completed. Year 2 research priorities: Iron smelting (if not done) → Advanced construction (stone cutting) → Advanced farming → Advanced medicine → Advanced weapons/armor.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Assign a dedicated researcher in year 2 — do not rely on cross-tasking. A settler with Medicine or Learning passion makes an excellent dedicated researcher. Research speed compounds: earlier completion of key techs unlocks better production options that feed every other part of your colony.
              </p>
            </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-6">Frequently Asked Questions</h2>

                <div className="aged-border p-5 mb-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                  <h3 className="font-display text-lg font-semibold text-ink mb-2">My colony survived year 1 but settlers keep dying in year 2 raids. What changed?</h3>
                  <p className="font-serif text-base text-ink-light leading-relaxed">Raid difficulty scales with wealth. By year 2, your accumulated buildings, crafted goods, and equipment push your wealth score into a higher raid tier. Ensure your defenses scaled with your wealth: stone walls, iron gates, multiple archers with iron-quality bows, and trained melee fighters with at least basic armor.</p>
                </div>
                <div className="aged-border p-5 mb-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                  <h3 className="font-display text-lg font-semibold text-ink mb-2">How many settlers is too many for a stable colony in year 2?</h3>
                  <p className="font-serif text-base text-ink-light leading-relaxed">Year 2 sweet spot is 12-15 settlers. More settlers mean more production capacity but also more food requirements, more beds, more complex scheduling, and higher wealth score (faster raid escalation). Grow incrementally — add 2-3 settlers at a time and verify your food and housing systems can absorb the new arrivals before adding more.</p>
                </div>
                <div className="aged-border p-5 mb-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                  <h3 className="font-display text-lg font-semibold text-ink mb-2">Should I expand my base footprint in year 2?</h3>
                  <p className="font-serif text-base text-ink-light leading-relaxed">Yes — year 2 is the right time to expand your outer wall perimeter to accommodate growth. Expand in planned phases rather than ad-hoc: draw the new perimeter first, build the wall, then develop the interior. Expanding without pre-planned wall extension creates temporary defensive gaps during construction.</p>
                </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-ink mb-4">Related Guides</h2>
            <div className="space-y-2">
                  <a href="/beginners" className="text-accent hover:text-accent-hover underline">Beginners</a>
                  <a href="/research" className="text-accent hover:text-accent-hover underline">Research</a>
                  <a href="/defense" className="text-accent hover:text-accent-hover underline">Defense</a>
                  <a href="/specialist-training" className="text-accent hover:text-accent-hover underline">Specialist Training</a>

            </div>
          </section>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
    {
      "@type": "Question",
      "name": "My colony survived year 1 but settlers keep dying in year 2 raids. What changed?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Raid difficulty scales with wealth. By year 2, your accumulated buildings, crafted goods, and equipment push your wealth score into a higher raid tier. Ensure your defenses scaled with your wealth: stone walls, iron gates, multiple archers with iron-quality bows, and trained melee fighters with at least basic armor."
      }
    },
    {
      "@type": "Question",
      "name": "How many settlers is too many for a stable colony in year 2?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Year 2 sweet spot is 12-15 settlers. More settlers mean more production capacity but also more food requirements, more beds, more complex scheduling, and higher wealth score (faster raid escalation). Grow incrementally — add 2-3 settlers at a time and verify your food and housing systems can absorb the new arrivals before adding more."
      }
    },
    {
      "@type": "Question",
      "name": "Should I expand my base footprint in year 2?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — year 2 is the right time to expand your outer wall perimeter to accommodate growth. Expand in planned phases rather than ad-hoc: draw the new perimeter first, build the wall, then develop the interior. Expanding without pre-planned wall extension creates temporary defensive gaps during construction."
      }
    }
            ]
          })
        }}
      />
    </main>
  );
}
