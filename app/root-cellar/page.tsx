export const metadata = {
  title: "Going Medieval Root Cellar Design — Food Storage Guide (2026)",
  description: "Build effective root cellars in Going Medieval. Temperature control, optimal depth, storage capacity, and food preservation best practices.",
};

export default function RootCellarPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-10">
          <section>
            <h1 className="chapter-heading">Going Medieval Root Cellar Design — Complete Food Storage Guide</h1>
            <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
              Food spoilage is one of the most common causes of mid-game colony collapse in Going Medieval. Your settlers can grow abundant harvests in summer but starve in winter if the food was never properly preserved. The root cellar — an underground storage chamber built to maintain low, stable temperatures — is the primary solution. A well-designed root cellar can keep food fresh through multiple winters, dramatically reducing spoilage losses and providing the stable food reserve your colony needs to survive the cold months. This guide covers optimal root cellar dimensions, required depth for temperature stability, shelf and stockpile zone layout, temperature monitoring, and the food types most benefited by cellar storage.
            </p>
          </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Why Temperature Matters for Food Storage</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                In Going Medieval, food items have a freshness value that decreases over time. The rate of spoilage is significantly affected by ambient temperature. High temperatures (summer, near fires) accelerate spoilage. Low, stable temperatures (underground, away from heat sources) slow spoilage considerably.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Underground rooms benefit from natural thermal mass — the earth surrounding the room insulates it from surface temperature swings. A room dug at least 2 levels below surface level maintains a naturally cool temperature year-round, including during summer heat waves that would rapidly spoil food stored on the surface.
              </p>
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Storage Location</th>
                    <th>Summer Temp</th>
                    <th>Winter Temp</th>
                    <th>Spoilage Rate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Surface room (heated)</td><td>High</td><td>Moderate</td><td>Fast</td></tr>
                  <tr><td>Surface room (unheated)</td><td>Moderate</td><td>Low</td><td>Moderate</td></tr>
                  <tr><td>Underground (1 level)</td><td>Cool</td><td>Low</td><td>Slow</td></tr>
                  <tr><td>Underground (2+ levels)</td><td>Cool</td><td>Low</td><td>Very Slow</td></tr>
                </tbody>
              </table>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Root Cellar Dimensions and Construction</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                The optimal root cellar is a dedicated underground room with no heat sources, good settler access, and enough floor space for stockpile zones covering all perishable food categories. A 7×5 or 8×6 room provides adequate capacity for a colony of 10-15 settlers.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                <strong className="text-ink">Construction Rules:</strong> Dig at minimum 2 levels below the surface (level -2). Do not install any heaters, fireplaces, or torch sconces inside the cellar — any heat source raises the ambient temperature and reduces its effectiveness. Use stone or brick walls for the cellar chamber for durability and natural insulation. Add shelving units along the walls to increase storage density.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Connect the cellar to your main base via a staircase passage. Position the cellar directly below your kitchen for efficient work routing — cooks will walk less distance between food storage and cooking workbench.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Food Categories and Storage Priority</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Not all food benefits equally from cellar storage. Raw produce, prepared meals, and meat have different baseline spoilage rates. Prioritize cellar space for the fastest-spoiling, highest-nutrition foods.
              </p>
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Food Category</th>
                    <th>Spoilage Rate</th>
                    <th>Cellar Priority</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Prepared Meals</td><td>Fast</td><td>High</td><td>Highest value; spoil quickly outside cellar</td></tr>
                  <tr><td>Raw Meat / Fish</td><td>Very Fast</td><td>Very High</td><td>Store immediately after hunting/fishing</td></tr>
                  <tr><td>Dairy Products</td><td>Fast</td><td>High</td><td>Cellar extends shelf life significantly</td></tr>
                  <tr><td>Root Vegetables</td><td>Moderate</td><td>Medium</td><td>Designed for cellar storage; holds well</td></tr>
                  <tr><td>Grain / Flour</td><td>Slow</td><td>Low</td><td>Stays fresh long; cellar not critical</td></tr>
                  <tr><td>Dried / Smoked Food</td><td>Very Slow</td><td>Low</td><td>Preservation already extended by processing</td></tr>
                </tbody>
              </table>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Winter Food Reserve Calculation</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Before the first winter arrives (typically around Day 40-50 of a new playthrough), calculate your required food reserve. A settler consumes approximately 2-3 food units per day. For a colony of 10 settlers, a 90-day winter requires 900-1350 food units in reserve.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Build your root cellar large enough to hold at least this reserve plus a 20% safety buffer. Run harvest calculations in late summer: if your projected stockpile falls short, prioritize food crop harvesting over other tasks in the fall window before crops freeze.
              </p>
            </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-6">Frequently Asked Questions</h2>

                <div className="aged-border p-5 mb-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                  <h3 className="font-display text-lg font-semibold text-ink mb-2">Does the cellar temperature affect all food categories equally?</h3>
                  <p className="font-serif text-base text-ink-light leading-relaxed">Temperature affects all food, but the impact is largest for fast-spoiling categories like raw meat and prepared meals. Grain and dried foods have low enough base spoilage rates that cellar storage provides minimal additional benefit — focus cellar space on high-priority perishables.</p>
                </div>
                <div className="aged-border p-5 mb-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                  <h3 className="font-display text-lg font-semibold text-ink mb-2">Should I build one large cellar or multiple smaller ones?</h3>
                  <p className="font-serif text-base text-ink-light leading-relaxed">One centralized cellar connected to the kitchen is more efficient than multiple scattered storage rooms. Settlers follow shortest-path routing, so a single large cellar directly below the kitchen minimizes travel time. Only build secondary cellars if your colony is large enough (15+ settlers) that the primary cellar is at capacity.</p>
                </div>
                <div className="aged-border p-5 mb-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                  <h3 className="font-display text-lg font-semibold text-ink mb-2">Can I keep my root cellar cool in summer if I live in a hot biome?</h3>
                  <p className="font-serif text-base text-ink-light leading-relaxed">Yes — going deep underground (level -2 or -3) provides enough thermal insulation that even hot biomes maintain reasonable cellar temperatures. The key is depth, not biome. Never place heat sources inside the cellar regardless of biome, and the natural underground temperature will stay cool enough for effective food preservation.</p>
                </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-ink mb-4">Related Guides</h2>
            <div className="space-y-2">
                  <a href="/farming" className="text-accent hover:text-accent-hover underline">Farming</a>
                  <a href="/food-preservation" className="text-accent hover:text-accent-hover underline">Food Preservation</a>
                  <a href="/winter-survival" className="text-accent hover:text-accent-hover underline">Winter Survival</a>
                  <a href="/seasons" className="text-accent hover:text-accent-hover underline">Seasons</a>

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
      "name": "Does the cellar temperature affect all food categories equally?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Temperature affects all food, but the impact is largest for fast-spoiling categories like raw meat and prepared meals. Grain and dried foods have low enough base spoilage rates that cellar storage provides minimal additional benefit — focus cellar space on high-priority perishables."
      }
    },
    {
      "@type": "Question",
      "name": "Should I build one large cellar or multiple smaller ones?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "One centralized cellar connected to the kitchen is more efficient than multiple scattered storage rooms. Settlers follow shortest-path routing, so a single large cellar directly below the kitchen minimizes travel time. Only build secondary cellars if your colony is large enough (15+ settlers) that the primary cellar is at capacity."
      }
    },
    {
      "@type": "Question",
      "name": "Can I keep my root cellar cool in summer if I live in a hot biome?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — going deep underground (level -2 or -3) provides enough thermal insulation that even hot biomes maintain reasonable cellar temperatures. The key is depth, not biome. Never place heat sources inside the cellar regardless of biome, and the natural underground temperature will stay cool enough for effective food preservation."
      }
    }
            ]
          })
        }}
      />
    </main>
  );
}
