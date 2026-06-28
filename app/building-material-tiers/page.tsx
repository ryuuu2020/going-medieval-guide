export const metadata = {
  title: "Going Medieval Building Material Tiers — Complete Guide (2026)",
  description: "Understand all building material tiers in Going Medieval. Wood vs stone vs brick vs clay, construction costs, durability, and when to upgrade.",
};

export default function BuildingMaterialTiersPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-10">
          <section>
            <h1 className="chapter-heading">Going Medieval Building Material Tiers — Wood to Brick</h1>
            <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
              Every structure in Going Medieval is built from materials, and the material tier you choose determines the structure's durability, fire resistance, insulation value, and visual quality. Starting colonies build everything from wood — fast and cheap but vulnerable to fire and raid damage. Experienced players plan a systematic upgrade path from wood to clay brick to cut stone, ensuring defensive structures are in higher-tier materials while understanding which buildings benefit most from material upgrades. This guide covers every available building material, their comparative stats, construction resource costs, and the optimal upgrade sequence for your colony.
            </p>
          </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Building Material Comparison Table</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Going Medieval features multiple building material tiers. Each has distinct properties, availability timing, and construction costs. The table below compares all major materials across the most important attributes.
              </p>
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Material</th>
                    <th>Durability</th>
                    <th>Fire Resistance</th>
                    <th>Insulation</th>
                    <th>Availability</th>
                    <th>Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Raw Wood</td><td>Low</td><td>Very Low</td><td>Low</td><td>Year 1</td><td>Very Low</td></tr>
                  <tr><td>Wooden Planks</td><td>Low-Med</td><td>Low</td><td>Low</td><td>Year 1</td><td>Low</td></tr>
                  <tr><td>Rough Stone</td><td>Medium</td><td>High</td><td>Medium</td><td>Year 1-2</td><td>Medium</td></tr>
                  <tr><td>Clay Brick</td><td>Medium-High</td><td>High</td><td>Medium-High</td><td>Year 2</td><td>Medium</td></tr>
                  <tr><td>Cut Stone</td><td>High</td><td>Very High</td><td>High</td><td>Year 2-3</td><td>High</td></tr>
                  <tr><td>Iron-Reinforced</td><td>Very High</td><td>High</td><td>Medium</td><td>Year 3+</td><td>Very High</td></tr>
                </tbody>
              </table>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Early Game: Wood Framework Construction</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Start all construction in wood. It requires no processing — logs go directly to construction without a workshop step. This makes early expansion fast. Build your initial shelters, storage rooms, and outer palisade wall in wood to establish coverage quickly.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Accept that wood structures will eventually be demolished or replaced. The goal of wood construction is speed, not permanence. Do not invest time in decorating or finishing wooden rooms you intend to rebuild in stone.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Mid Game: Stone and Clay Brick Transition</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Once your mason is trained and you have a stone quarry or clay deposit access, begin rebuilding defensive structures in stone or clay brick. The priority order for material upgrades:
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                1. <strong className="text-ink">Outer wall:</strong> Stone perimeter walls first — raids damage walls first, so this is the highest-priority upgrade. 2. <strong className="text-ink">Corner towers:</strong> Stone towers after the wall is complete. 3. <strong className="text-ink">Gates:</strong> Iron gates replace wooden gates. 4. <strong className="text-ink">Settler living quarters:</strong> Clay brick or stone rooms provide better insulation, improving settler mood in winter. 5. <strong className="text-ink">Workshops:</strong> Stone workshop floors prevent fire spread from forge accidents.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Late Game: Cut Stone and Iron-Reinforced Structures</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Cut stone requires a stone cutter bench and trained masons. It is the highest-durability readily available material and should be the target for all defensive structures by late game. The construction cost is high but the durability advantage makes it worth the investment for permanent structures.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Iron-reinforced structures (gates, doors, specific wall types) have the highest individual durability of any material in the game but require significant iron investment. Reserve iron reinforcement for single critical structures: your main entrance gate and the innermost fallback wall.
              </p>
            </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-6">Frequently Asked Questions</h2>

                <div className="aged-border p-5 mb-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                  <h3 className="font-display text-lg font-semibold text-ink mb-2">Should I mix materials in one building?</h3>
                  <p className="font-serif text-base text-ink-light leading-relaxed">Yes, mixing is acceptable and common. Use the highest-tier material available for the most-exposed elements (outer walls, roof) and lower tiers for interior walls and floors where durability is less critical. This optimizes resource use without compromising defensive integrity.</p>
                </div>
                <div className="aged-border p-5 mb-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                  <h3 className="font-display text-lg font-semibold text-ink mb-2">Does insulation value affect settler mood?</h3>
                  <p className="font-serif text-base text-ink-light leading-relaxed">Yes — rooms with better-insulated walls maintain more stable temperatures in winter. Cold rooms cause negative mood debuffs to settlers sleeping or working in them. Rebuilding settler quarters in clay brick or cut stone is one of the best quality-of-life investments you can make for settler happiness management.</p>
                </div>
                <div className="aged-border p-5 mb-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                  <h3 className="font-display text-lg font-semibold text-ink mb-2">Is there a material beyond cut stone?</h3>
                  <p className="font-serif text-base text-ink-light leading-relaxed">In the current game version, cut stone and iron-reinforced structures represent the top defensive material tiers available. Future updates may add additional tiers. Check the official wiki or patch notes for the most current material list.</p>
                </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-ink mb-4">Related Guides</h2>
            <div className="space-y-2">
                  <a href="/buildings" className="text-accent hover:text-accent-hover underline">Buildings</a>
                  <a href="/research" className="text-accent hover:text-accent-hover underline">Research</a>
                  <a href="/iron-mining" className="text-accent hover:text-accent-hover underline">Iron Mining</a>
                  <a href="/defense" className="text-accent hover:text-accent-hover underline">Defense</a>

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
      "name": "Should I mix materials in one building?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, mixing is acceptable and common. Use the highest-tier material available for the most-exposed elements (outer walls, roof) and lower tiers for interior walls and floors where durability is less critical. This optimizes resource use without compromising defensive integrity."
      }
    },
    {
      "@type": "Question",
      "name": "Does insulation value affect settler mood?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — rooms with better-insulated walls maintain more stable temperatures in winter. Cold rooms cause negative mood debuffs to settlers sleeping or working in them. Rebuilding settler quarters in clay brick or cut stone is one of the best quality-of-life investments you can make for settler happiness management."
      }
    },
    {
      "@type": "Question",
      "name": "Is there a material beyond cut stone?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In the current game version, cut stone and iron-reinforced structures represent the top defensive material tiers available. Future updates may add additional tiers. Check the official wiki or patch notes for the most current material list."
      }
    }
            ]
          })
        }}
      />
    </main>
  );
}
