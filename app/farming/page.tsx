
export default function FarmingPage() {
  return (
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-10">
            <section>
              <h1 className="chapter-heading">Farming System In-Depth</h1>
              <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
                Farming is the most stable food source in Going Medieval. From sowing to harvest, you need to plan crop types, planting zones, and storage methods carefully. Before winter arrives, an adequate food stockpile is the fundamental guarantee of your colony's survival. There are 9 confirmed crops: Barley, Cabbage, Carrots, Beet, Flax, Herbs, Redcurrant, Hay, and Mushrooms. This guide covers crop types, seasonal patterns, irrigation, and food preservation strategies in full. Data below is based on community testing and is for reference only.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Crop Types & Characteristics</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Going Medieval offers 9 confirmed crop types, each with different growth cycles, yields, and uses. Choosing the right crops for the current season and terrain is key to efficient farming.
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
                  <tr><td>Cabbage</td><td>~6 days (est.)</td><td>High</td><td>Eat raw, stews</td><td>Spring-Summer</td></tr>
                  <tr><td>Barley</td><td>~10 days (est.)</td><td>Medium</td><td>Flour &rarr; Bread, Ale, Beer</td><td>Spring-Summer</td></tr>
                  <tr><td>Carrots</td><td>~5 days (est.)</td><td>Medium</td><td>Eat raw</td><td>Spring-Autumn</td></tr>
                  <tr><td>Beet</td><td>~7 days (est.)</td><td>Medium</td><td>Eat raw, stews</td><td>Spring-Autumn</td></tr>
                  <tr><td>Flax</td><td>~9 days (est.)</td><td>Low</td><td>Linen Cloth</td><td>Spring-Summer</td></tr>
                  <tr><td>Herbs</td><td>~7 days (est.)</td><td>Low</td><td>Medicine (Healing Kits)</td><td>Summer-Autumn</td></tr>
                  <tr><td>Redcurrant</td><td>~8 days (est.)</td><td>Low-Medium</td><td>Eat raw, Redcurrant Pie</td><td>Spring-Summer</td></tr>
                  <tr><td>Hay</td><td>~5 days (est.)</td><td>High</td><td>Animal feed</td><td>Spring-Autumn</td></tr>
                  <tr><td>Mushrooms</td><td>~6 days (est.)</td><td>Low</td><td>Eat raw, stews</td><td>Year-round (caves)</td></tr>
                </tbody>
              </table>
              <p className="font-serif text-sm text-ink-muted italic">Crop names confirmed via Wiki. Growth cycles are community estimates.</p>
              <div className="aged-border p-5 mt-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                <p className="font-serif text-sm text-ink leading-relaxed">
                  <strong className="text-vermillion">Blight Warning:</strong> Blight (crop disease) affects flax, barley, cabbage, carrots, and beets. This has been confirmed from official Update #3 patch notes. If you see crops withering, destroy the affected plants immediately to prevent spread.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Seasons & Planting Schedule</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Going Medieval's season system directly impacts farming efficiency. Spring and summer are the main growing seasons, autumn can support cold-tolerant crops, and winter halts all plant growth. Smart planting schedules must ensure enough food is harvested before winter hits.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Recommended strategy: In spring, plant cabbage and barley simultaneously — cabbage grows fast for early food, while barley harvested in summer gets milled into flour for bread and brewed into ale or beer for winter. In summer, plant herbs and redcurrant. In autumn, plant a final round of carrots and beets. Hay should be planted continuously to maintain animal feed supplies. Replant immediately after each harvest to maximize land use. Before winter, ensure your stockpile holds at least 200 units of food.
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
                  <p className="font-serif text-sm text-ink-light mt-1">Build stockpiles 2+ levels underground, paired with wooden shelves to increase capacity. Temperature stays 5-10&deg;C year-round, maximizing food preservation. Ice Blocks can further extend cold storage.</p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Processed Preservation</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">Mill barley into flour then bake into bread, pickle vegetables with vinegar, or make cheese from milk — all dramatically extend shelf life. Processed food spoils at only 1/3 the rate of raw food.</p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Smoking & Salting</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">Hunted meat can be smoked or salted to extend shelf life. Build a smokehouse (requires research unlock) for smoked meat, or use Salt to preserve meat. Shelf life extends from ~3 days to 15-25 days.</p>
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
                  <summary>What's beer used for — is it worth growing barley for it?</summary>
                  <p>Ale and Beer are important settler mood boosters. They are brewed from Barley — the confirmed grain crop. Settlers with mood below 30 can trigger negative events. A regular beer supply effectively maintains morale. Plant barley for brewing once you have sufficient food reserves.</p>
                </details>
              </div>
            </section>
          </div>

          <aside className="lg:w-[35%] space-y-8 shrink-0">
            <div className="field-sidebar-block">
              <h3 className="font-display text-lg font-semibold text-ink mb-4">Crop Quick Ref</h3>
              <div className="space-y-3">
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Cabbage</h4><p className="font-serif text-xs text-ink-muted mt-1">~6 days | Spring-Summer | Eat raw</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Barley</h4><p className="font-serif text-xs text-ink-muted mt-1">~10 days | Spring-Summer | Flour, Ale, Beer</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Carrots</h4><p className="font-serif text-xs text-ink-muted mt-1">~5 days | Spring-Autumn | Eat raw</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Beet</h4><p className="font-serif text-xs text-ink-muted mt-1">~7 days | Spring-Autumn | Eat raw, stews</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Flax</h4><p className="font-serif text-xs text-ink-muted mt-1">~9 days | Spring-Summer | Linen Cloth</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Herbs</h4><p className="font-serif text-xs text-ink-muted mt-1">~7 days | Summer-Autumn | Healing Kits</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Redcurrant</h4><p className="font-serif text-xs text-ink-muted mt-1">~8 days | Spring-Summer | Pie, eat raw</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Hay</h4><p className="font-serif text-xs text-ink-muted mt-1">~5 days | Spring-Autumn | Animal feed</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Mushrooms</h4><p className="font-serif text-xs text-ink-muted mt-1">~6 days | Year-round (caves) | Eat raw, stews</p></div>
              </div>
            </div>
            <div className="journal-card p-5">
              <h3 className="font-display text-base font-semibold text-ink mb-3">Annual Planting Calendar</h3>
              <div className="space-y-2 font-serif text-sm text-ink-light">
                <div><span className="field-tag vermillion text-[10px]">Spring</span> Cabbage + Barley + Redcurrant</div>
                <div><span className="field-tag gold text-[10px]">Summer</span> Harvest barley, plant herbs</div>
                <div><span className="field-tag ink text-[10px]">Autumn</span> Final carrots + beets, harvest all</div>
                <div><span className="field-tag ink text-[10px]">Winter</span> No planting, consume reserves</div>
              </div>
            </div>
          </aside>
        </div>
      </main>
  );
}
