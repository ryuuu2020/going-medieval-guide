
export default function FarmingPage() {
  return (
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-10">
            <section>
              <h1 className="chapter-heading">Farming System In-Depth</h1>
              <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
                Farming is the most stable food source in Going Medieval. From sowing to harvest, you need to plan crop types, planting zones, and storage methods carefully. Before winter arrives, an adequate food stockpile is the fundamental guarantee of your colony's survival. This guide covers crop types, seasonal patterns, irrigation, and food preservation strategies in full. Data below is based on community testing and is for reference only.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Crop Types & Characteristics</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Going Medieval offers multiple crop types, each with different growth cycles, yields, and uses. Choosing the right crops for the current season and terrain is key to efficient farming.
              </p>
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Crop</th>
                    <th>Growth Cycle</th>
                    <th>Yield</th>
                    <th>Use</th>
                    <th>Best Season</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Cabbage</td><td>6 days</td><td>High</td><td>Eat raw</td><td>Spring-Summer</td></tr>
                  <tr><td>Wheat</td><td>10 days</td><td>Medium</td><td>Flour &rarr; Bread</td><td>Spring-Summer</td></tr>
                  <tr><td>Carrot</td><td>5 days</td><td>Medium</td><td>Eat raw</td><td>Spring-Autumn</td></tr>
                  <tr><td>Hops</td><td>8 days</td><td>Low</td><td>Brewing beer</td><td>Summer-Autumn</td></tr>
                  <tr><td>Flax</td><td>9 days</td><td>Low</td><td>Weaving cloth</td><td>Spring-Summer</td></tr>
                  <tr><td>Herbs</td><td>7 days</td><td>Low</td><td>Making medicine</td><td>Summer-Autumn</td></tr>
                </tbody>
              </table>
              <p className="font-serif text-sm text-ink-muted italic">Data source: Community testing estimates</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Seasons & Planting Schedule</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Going Medieval's season system directly impacts farming efficiency. Spring and summer are the main growing seasons, autumn can support cold-tolerant crops, and winter halts all plant growth. Smart planting schedules must ensure enough food is harvested before winter hits.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Recommended strategy: In spring, plant both cabbage and wheat simultaneously — cabbage grows fast for early food, while wheat harvested in summer gets processed into bread for winter reserves. In summer, plant hops and herbs. In autumn, plant a final round of carrots. Replant immediately after each harvest to maximize land use. Before winter, ensure your stockpile holds at least 200 units of food.
              </p>
              <div className="aged-border p-5" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                <p className="font-serif text-sm text-ink leading-relaxed">
                  <strong className="text-vermillion">&#9888; Winter Warning:</strong>
                  All crops stop growing in winter. Once snow covers the ground, neither planting nor hunting is possible. If food runs out, settlers will starve or die. Make sure to complete all harvesting by the final month of autumn.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Irrigation & Soil</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Farmland needs to be near a water source for efficient operation. Settlers will automatically fetch water from the nearest source to irrigate crops. Digging irrigation channels near fields improves efficiency, but the simplest approach is building fields near rivers or lakes.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                Different soil types affect growth speed: fertile soil (dark brown) grows fastest, normal soil is average, sandy soil is slowest. Prioritize fertile soil when choosing field locations. Each field zone should not exceed 10x10 tiles — it's easier to manage and prevents a single settler from being overwhelmed.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Food Storage & Preservation</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Food spoils over time, and how you store it directly impacts shelf life. Underground stockpiles stay cool and constant — the best choice for food storage. Building stockpiles inside mountains or 2+ levels below ground can reduce spoilage rate by over 70%.
              </p>
              <div className="space-y-3">
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Cellar Storage</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">Build stockpiles 2+ levels underground, paired with wooden shelves to increase capacity. Temperature stays 5-10&deg;C year-round, maximizing food preservation.</p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Processed Preservation</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">Processing wheat into flour then bread, or pickling cabbage, dramatically extends shelf life. Processed food spoils at only 1/3 the rate of raw food.</p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Smoking & Drying</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">Hunted meat can be smoked to extend shelf life. Build a smokehouse (requires research unlock), and process raw meat into smoked meat — shelf life extends from 3 days to 15 days.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
              <div className="faq-item">
                <details>
                  <summary>How big should my farmland be?</summary>
                  <p>Each field zone should be about 8x8 to 10x10 tiles. 3-4 fields of this size can feed 6-8 settlers. Fields that are too large lead to delayed harvesting, causing crops to rot in the field.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>What if I run out of food in winter?</summary>
                  <p>If winter food runs short, try: 1) Send settlers to underground caves to hunt bats and similar creatures; 2) Trade with passing merchants for food; 3) Slaughter excess livestock. But the best solution is always advance stockpiling.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>What's beer used for — is it worth growing hops?</summary>
                  <p>Beer is an important settler mood booster. Settlers with mood below 30 can trigger negative events. A regular beer supply effectively maintains morale. Plant hops once you have sufficient food reserves.</p>
                </details>
              </div>
            </section>
          </div>

          <aside className="lg:w-[35%] space-y-8 shrink-0">
            <div className="field-sidebar-block">
              <h3 className="font-display text-lg font-semibold text-ink mb-4">Crop Quick Ref</h3>
              <div className="space-y-3">
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Cabbage</h4><p className="font-serif text-xs text-ink-muted mt-1">6 days | Spring-Summer | Eat raw</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Wheat</h4><p className="font-serif text-xs text-ink-muted mt-1">10 days | Spring-Summer | Flour &rarr; Bread</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Carrot</h4><p className="font-serif text-xs text-ink-muted mt-1">5 days | Spring-Autumn | Eat raw</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Hops</h4><p className="font-serif text-xs text-ink-muted mt-1">8 days | Summer-Autumn | Brewing</p></div>
              </div>
            </div>
            <div className="journal-card p-5">
              <h3 className="font-display text-base font-semibold text-ink mb-3">Annual Planting Calendar</h3>
              <div className="space-y-2 font-serif text-sm text-ink-light">
                <div><span className="field-tag vermillion text-[10px]">Spring</span> Cabbage + Wheat</div>
                <div><span className="field-tag gold text-[10px]">Summer</span> Harvest wheat, plant hops + herbs</div>
                <div><span className="field-tag ink text-[10px]">Autumn</span> Final carrots, harvest everything</div>
                <div><span className="field-tag ink text-[10px]">Winter</span> No planting, consume reserves</div>
              </div>
            </div>
          </aside>
        </div>
      </main>
  );
}
