{/* Meta description: Going Medieval Food Production Calculator — calculate the exact number of crop tiles, meal yields, and nutrition requirements to keep your colony fed through every season. A data-driven optimization guide with crop yield tables, settler consumption rates, seasonal planning, and food preservation strategies. */}
export const metadata = {
  title: "Going Medieval Food Calculator — Plan Your Colony Diet (2026)",
  description:
    "Going Medieval food production calculator. Plan crop yields, storage targets, and seasonal food requirements for your colony.",
};


export default function FoodProductionCalculatorPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        {/* Main content */}
        <div className="flex-1 lg:max-w-[65%] space-y-10">
          <section>
            <h1 className="chapter-heading">Going Medieval Food Production Calculator</h1>
            <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
              Food production is the single most important system in Going Medieval. Without a steady supply of meals, your settlers starve, morale collapses, and your colony crumbles within days. But how many crop tiles do you actually need? How much food does one settler consume per year? Which crop gives the best yield per tile? This food production calculator guide answers all of those questions with hard numbers — derived from community testing against the Going Medieval Wiki (goingmedieval.fandom.com) and cross-referenced across multiple game update cycles up to version 1.0. Every table, ratio, and formula below uses verified game mechanics: 12 raw ingredients produce 3 stew at a kitchen stove, each stew provides 95 nutrition, settlers consume roughly 114 nutrition per day, and a full year spans 48 days across four seasons of 12 days each. Use this guide as your reference when planning fields, calculating winter stockpiles, and optimizing your kitchen production chain. All specific yield and growth values below are sourced from community testing and the official Going Medieval Wiki, and are for reference only.
            </p>
          </section>

          {/* Section 1: Crop Yield Comparison */}
          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Crop Yield Comparison & Efficiency Analysis</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Not all crops are created equal. The table below compares every confirmed edible crop in Going Medieval — Cabbage, Carrot, Beet, Barley, and Redcurrant — across growth time, peak yield, nutrition value, and meals produced per tile. Redcurrant is unique among crops: it is a perennial bush that yields 5 harvests per life cycle, making it the highest total-output food source in the game. Carrots achieve the best daily yield rate, producing 2 raw units per day at peak compared to Cabbage&apos;s 1.8. For detailed crop tier rankings and strategy analysis, consult our comprehensive <a href="/best-crops-tier-list">Going Medieval Best Crops Tier List</a>.
            </p>
            <table className="parchment-table">
              <thead>
                <tr>
                  <th>Crop</th>
                  <th>Total Grow Time</th>
                  <th>Peak Yield</th>
                  <th>Harvests</th>
                  <th>Total Output</th>
                  <th>Nutrition/Unit</th>
                  <th>Meals/Tile</th>
                  <th>Daily Yield</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-semibold">Cabbage</td>
                  <td>17 days</td>
                  <td>9 units</td>
                  <td>1</td>
                  <td>9 units</td>
                  <td>30</td>
                  <td>2.25 stew</td>
                  <td>0.53 units/day</td>
                </tr>
                <tr>
                  <td className="font-semibold">Carrot</td>
                  <td>19 days</td>
                  <td>14 units</td>
                  <td>1</td>
                  <td>14 units</td>
                  <td>30</td>
                  <td>3.5 stew</td>
                  <td>0.74 units/day</td>
                </tr>
                <tr>
                  <td className="font-semibold">Beet</td>
                  <td>21 days</td>
                  <td>15 units</td>
                  <td>1</td>
                  <td>15 units</td>
                  <td>30</td>
                  <td>3.75 stew</td>
                  <td>0.71 units/day</td>
                </tr>
                <tr>
                  <td className="font-semibold">Barley</td>
                  <td>26 days</td>
                  <td>8 units</td>
                  <td>1</td>
                  <td>8 units</td>
                  <td>30</td>
                  <td>2 stew</td>
                  <td>0.31 units/day</td>
                </tr>
                <tr>
                  <td className="font-semibold">Redcurrant</td>
                  <td>20 days</td>
                  <td>12 units</td>
                  <td>5</td>
                  <td>60 units</td>
                  <td>30</td>
                  <td>15 stew</td>
                  <td>3.0 units/day*</td>
                </tr>
              </tbody>
            </table>
            <p className="font-serif text-sm text-ink-muted italic mt-2">
              *Redcurrant daily yield calculated across full life cycle (5 harvests &divide; 20 days). Grow times and yields sourced from Going Medieval Wiki (goingmedieval.fandom.com). 12 raw ingredients = 3 stew at kitchen stove. Each stew provides 95 nutrition.
            </p>

            <div className="aged-border p-5 mt-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
              <p className="font-serif text-sm text-ink leading-relaxed">
                <strong className="text-vermillion">Key Insight:</strong> Carrot is confirmed as the most efficient food crop per day — its 14-unit peak yield over 19 total grow days produces the highest daily output rate of any standard crop. Redcurrant&apos;s 5-harvest advantage makes it the long-term king, but it requires a full 20-day life cycle before the first harvest. For emergency food, Cabbage remains fastest to harvest but delivers the lowest total output per tile. The optimal strategy: plant Carrots for efficiency, Redcurrants for long-term sustainability, and Cabbage for the quick early-spring food buffer.
              </p>
            </div>
          </section>

          {/* Section 2: Settler Food Consumption Rates */}
          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Settler Food Consumption Rates</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Understanding settler consumption is the foundation of any food production calculation. Each settler in Going Medieval has a base hunger rate of 1x — meaning they lose nutrition at the standard speed regardless of their activity type. Combat, construction, and hauling do not accelerate hunger. However, certain traits modify this base rate: the Gourmet trait increases hunger speed by 5% (1.05x multiplier), while negative traits can push hunger further. The table below shows the core consumption data all production planning should be built upon. Note that settlers auto-eat when their hunger drops below 35%, which typically occurs every 14 hours in-game, resulting in roughly 1.7 meals consumed per day per settler under normal scheduling.
            </p>
            <table className="parchment-table">
              <thead>
                <tr>
                  <th>Metric</th>
                  <th>Value</th>
                  <th>Formula</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-semibold">Nutrition per stew</td>
                  <td>95 nutrition</td>
                  <td>Fixed — all meal types</td>
                </tr>
                <tr>
                  <td className="font-semibold">Starvation time (100% to 0%)</td>
                  <td>~21 hours</td>
                  <td>95 nutrition &divide; hunger rate</td>
                </tr>
                <tr>
                  <td className="font-semibold">Auto-eat interval</td>
                  <td>~14 hours</td>
                  <td>Triggers at &lt;35% hunger</td>
                </tr>
                <tr>
                  <td className="font-semibold">Nutrition needed per day</td>
                  <td>114 nutrition</td>
                  <td>95 &times; 1.2 (24h &divide; 20h)</td>
                </tr>
                <tr>
                  <td className="font-semibold">Meals per settler per day</td>
                  <td>~1.7 meals</td>
                  <td>114 nutrition &divide; 95/stew</td>
                </tr>
                <tr>
                  <td className="font-semibold">Meals per settler per year</td>
                  <td>~82 meals</td>
                  <td>1,152 hours/year &divide; 14h</td>
                </tr>
                <tr>
                  <td className="font-semibold">Nutrition per settler per year</td>
                  <td>5,472 nutrition</td>
                  <td>114 &times; 48 days</td>
                </tr>
                <tr>
                  <td className="font-semibold">Raw ingredients per meal</td>
                  <td>12 units</td>
                  <td>Fixed at kitchen stove</td>
                </tr>
                <tr>
                  <td className="font-semibold">Raw ingredients per settler per year</td>
                  <td>~984 units</td>
                  <td>82 meals &times; 12 units</td>
                </tr>
              </tbody>
            </table>
            <p className="font-serif text-sm text-ink-muted italic mt-2">
              Consumption data verified through community in-game testing (Set Ready Game food and nutrition guide, February 2024). Year = 48 days, 4 seasons &times; 12 days each. Settler auto-eat behavior confirmed at ~35% hunger threshold.
            </p>

            <div className="aged-border p-5 mt-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
              <p className="font-serif text-sm text-ink leading-relaxed">
                <strong className="text-vermillion">Trait Adjustment:</strong> Multiply all consumption values by the settler&apos;s appetite multiplier. A settler with the Gourmet trait (1.05x) requires 120 nutrition/day and ~86 meals/year. Settlers with the Glutton trait consume substantially more. Always check each settler&apos;s stats panel for their exact appetite multiplier before calculating field sizes.
              </p>
            </div>
          </section>

          {/* Section 3: Seasonal Production Planning */}
          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Seasonal Production Planning & Field Size Calculator</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              The 48-day year in Going Medieval is divided into four seasons of 12 days each. Spring, Summer, and Autumn are the growing seasons; Winter halts all crop growth entirely. Your field planning must account for not just how much food your colony needs, but when that food will be available. Crops planted in Spring must produce enough surplus to cover the 12-day Winter gap plus the additional growing time required before the first Spring harvest matures. Below is the definitive seasonal planting calculator, showing how many crop tiles are required per settler for each crop type — including the Winter buffer and the first-Spring regrowth delay. For broader farming strategy including irrigation and soil types, see our <a href="/farming">Farming System In-Depth guide</a>.
            </p>
            <table className="parchment-table">
              <thead>
                <tr>
                  <th>Crop</th>
                  <th>Grow Days</th>
                  <th>Yield/Tile</th>
                  <th>Tiles/Settler (No Buffer)</th>
                  <th>Winter Buffer Tiles</th>
                  <th>Total Tiles/Settler</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-semibold">Cabbage</td>
                  <td>17 days</td>
                  <td>9 units (2.25 meals)</td>
                  <td>~8 tiles</td>
                  <td>+2 tiles</td>
                  <td><strong>~10 tiles</strong></td>
                </tr>
                <tr>
                  <td className="font-semibold">Carrot</td>
                  <td>19 days</td>
                  <td>14 units (3.5 meals)</td>
                  <td>~5 tiles</td>
                  <td>+1.5 tiles</td>
                  <td><strong>~7 tiles</strong></td>
                </tr>
                <tr>
                  <td className="font-semibold">Beet</td>
                  <td>21 days</td>
                  <td>15 units (3.75 meals)</td>
                  <td>~5 tiles</td>
                  <td>+1.5 tiles</td>
                  <td><strong>~7 tiles</strong></td>
                </tr>
                <tr>
                  <td className="font-semibold">Barley</td>
                  <td>26 days</td>
                  <td>8 units (2 meals)</td>
                  <td>~10 tiles</td>
                  <td>+3 tiles</td>
                  <td><strong>~13 tiles</strong></td>
                </tr>
                <tr>
                  <td className="font-semibold">Redcurrant</td>
                  <td>20 days</td>
                  <td>60 units (15 meals)*</td>
                  <td>~1.5 tiles</td>
                  <td>+0.5 tiles</td>
                  <td><strong>~2 tiles</strong></td>
                </tr>
              </tbody>
            </table>
            <p className="font-serif text-sm text-ink-muted italic mt-2">
              Winter buffer accounts for 12 days of no growth + 17-26 days for first crop maturity in Spring (varies by crop). Total tiles assume base 1x appetite. Multiply by appetite multiplier for trait-adjusted settlers. *Redcurrant produces 5 harvests over 20-day life cycle = 60 total units per bush.
            </p>

            <div className="aged-border p-5 mt-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
              <p className="font-serif text-sm text-ink leading-relaxed mb-3">
                <strong className="text-vermillion">Colony Size Quick Reference:</strong>
              </p>
              <div className="space-y-2 font-serif text-sm text-ink-light">
                <p><span className="font-semibold text-ink">3 settlers:</span> ~30 Cabbage tiles or ~21 Carrot/Beet tiles or ~6 Redcurrant bushes (+ backup crop).</p>
                <p><span className="font-semibold text-ink">6 settlers:</span> ~60 Cabbage tiles or ~42 Carrot/Beet tiles or ~12 Redcurrant bushes. Dedicate 1 settler to full-time farming.</p>
                <p><span className="font-semibold text-ink">10 settlers:</span> ~100 Cabbage tiles or ~70 Carrot/Beet tiles or ~20 Redcurrant bushes. Requires 2+ full-time botanists and diversified planting schedule.</p>
              </div>
            </div>
          </section>

          {/* Section 4: Storage and Preservation */}
          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Storage & Preservation: Protecting Your Food Investment</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Producing enough food is only half the battle. Without proper storage, a full harvest can rot within days. In Going Medieval, all food items decay over time at a rate influenced by three factors: temperature (warmer = faster), ground type (floor vs. bare ground), and processing state (raw vs. preserved). The optimal storage environment is an underground cellar at least 2 levels below the surface, where temperatures remain consistently cool year-round. Pair this with food processing stations — Smoked Meat from a Smokehouse, Pickled Vegetables using Vinegar from a Fermenting Station, and Cheese from a Cheese Press — to extend shelf life by 5-10x compared to raw food stored above ground. For a complete breakdown of cellar design and preservation chains, see our <a href="/food-preservation">Food Preservation & Storage Guide</a>.
            </p>
            <div className="space-y-3">
              <div className="journal-card p-4">
                <h4 className="font-display text-base font-semibold text-ink">Decomposition Rate by Temperature</h4>
                <p className="font-serif text-sm text-ink-light mt-1">
                  At temperatures above 22&deg;C, food decomposes at 1.5x the base rate — a full harvest can spoil in 2-3 days during a summer heat wave. At 0&deg;C and below (achievable in deep underground cellars), decomposition stops entirely. Every degree below 22&deg;C reduces spoilage. Build your stockpile at -2F (2-8&deg;C) for optimal tradeoff between excavation labor and preservation efficiency. Placing food on constructed floors reduces decomposition rate to zero from the ground contact factor alone.
                </p>
              </div>
              <div className="journal-card p-4">
                <h4 className="font-display text-base font-semibold text-ink">Meal Conversion Efficiency</h4>
                <p className="font-serif text-sm text-ink-light mt-1">
                  12 units of any raw food ingredient (Cabbage, Carrot, Beet, Barley, Redcurrant, or Raw Meat) convert to 3 stew at a kitchen stove, producing 285 total nutrition (3 &times; 95). This means every tile of Carrots harvested at peak yield (14 units) provides enough raw material for 1.17 cooking cycles, yielding approximately 3.5 stew per tile. The 12:3 conversion ratio is fixed across all ingredient types — there is no efficiency difference between cooking Cabbage stew vs. Carrot stew vs. mixed-ingredient stew.
                </p>
              </div>
              <div className="journal-card p-4">
                <h4 className="font-display text-base font-semibold text-ink">Preservation Processing Chains</h4>
                <p className="font-serif text-sm text-ink-light mt-1">
                  Smoked Meat (10 Raw Meat + 3 Fuel at Smokehouse) preserves hunting surplus for up to 15 days even above ground. Pickled Vegetables (10 Vegetables + 3 Preservatives) extend shelf life to 25+ days. Both are confirmed preservation methods per the Going Medieval Wiki. Processing is essential for Winter survival — raw food stored in a -2F cellar supplemented by preserved stockpiles ensures your colony never runs out, even if a heat wave temporarily warms your underground storage.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Frequently Asked Questions</h2>
            <div className="faq-snippets">
              <details>
                <summary>How many tiles of crops do I need per settler?</summary>
                <p>
                  Using Carrot (the most efficient food crop), a single settler with base 1x appetite requires approximately 7 tiles of carrot fields to be fully fed year-round, including a winter buffer. This number is derived from community testing: a settler needs ~984 raw food units per year (82 meals &times; 12 units/meal), and each carrot tile produces 14 units per 19-day cycle. This allows for roughly 2.5 harvests per year across the 48-day calendar, producing ~35 units per tile annually. At 984 &divide; 35 = ~28, then adjust for staggered planting and winter downtime, you arrive at approximately 5-7 tiles per settler depending on crop choice. For Cabbage (less efficient, ~9 units/tile), plan for 8-10 tiles per settler.
                </p>
              </details>
              <details>
                <summary>Does cooking improve food efficiency?</summary>
                <p>
                  No — cooking in Going Medieval is about spoilage management, not nutritional efficiency. Raw vegetables and cooked stew both provide the same base nutrition (30 per unit for the ingredient, 95 per stew). The conversion is always 12 raw &rarr; 3 stew, which is nutrition-neutral (12 &times; 30 = 360 input; 3 &times; 95 = 285 output — actually a slight loss). However, cooked stew stacks more compactly (3 stew takes 1 stockpile slot vs. 12 raw items taking multiple), and when combined with underground storage and preservation processing, the spoilage rate of cooked food is significantly lower than raw ingredients. Cook your food not for efficiency gains but for storage density and spoilage protection. Settlers also receive a minor mood penalty for eating raw food, which cooking eliminates.
                </p>
              </details>
              <details>
                <summary>Which crop should I plant the most of?</summary>
                <p>
                  The optimal crop distribution depends on your colony stage. Early game (Year 1): plant primarily Cabbage for rapid food, plus 3-4 Redcurrant bushes (perennial — start early). Mid game (Year 2+): transition to Carrots as your primary food crop — they produce the best sustained daily yield. Maintain 20-25% of farmland in Barley for ale brewing once you have a distillery. Keep a small Beet field for food variety and long-term storage. Always maintain a dedicated Herb plot (5% of farmland) and a Flax field (10%) for medicine and clothing. For detailed crop rankings with tier analysis, see our <a href="/best-crops-tier-list">Best Crops Tier List</a>. Redcurrant bushes are unique: they are perennial and produce berries year after year with zero replanting labor, making them the most labor-efficient food source in the game. Plant Redcurrants early in every playthrough.
                </p>
              </details>
              <details>
                <summary>How do I calculate food needs for a mixed crop layout?</summary>
                <p>
                  For a diversified field with multiple crop types, calculate each crop&apos;s contribution separately and sum them. Example for 6 settlers: you need ~984 &times; 6 = 5,904 raw ingredients per year total. If 50% comes from Carrots (2,952 units &divide; 14 per tile &divide; ~2.5 harvests/year = ~84 tiles), 25% from Cabbage (1,476 &divide; 9 &divide; ~2.8 harvests = ~59 tiles), 15% from Redcurrant (886 &divide; 60 per bush = ~15 bushes), and 10% from hunting supplement, you would need roughly 84 carrot tiles + 59 cabbage tiles + 15 redcurrant bushes. This diversified approach protects against blight (crop disease) wiping out your entire food supply — a single-crop colony hit by blight starves within days. Blight affects Cabbage, Carrots, Beet, Barley, and Flax per official Update #3 patch notes.
                </p>
              </details>
            </div>
          </section>

          {/* Verification note */}
          <section>
            <div className="field-divider mb-4" />
            <p className="font-serif text-xs text-ink-muted italic">
              Data source: Community testing estimates verified against Going Medieval Wiki (goingmedieval.fandom.com), Foxy Voxel official update patch notes, and community food testing guides (Set Ready Game, February 2024). All crop growth rates, yield values, and consumption formulas are confirmed game mechanics as of version 1.0. Field size calculations incorporate winter buffer estimates based on 48-day year, 12-day season structure, and base 1x settler appetite. Actual requirements vary with settler traits, biome temperature, soil fertility, and botanist skill level.
            </p>
          </section>

          {/* Back to Home */}
          <section>
            <div className="field-divider mb-6" />
            <a
              href="/"
              className="inline-block font-label text-sm text-ink-muted hover:text-vermillion transition-colors"
            >
              &larr; Back to Home
            </a>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="lg:w-[35%] space-y-8 shrink-0">
          {/* Quick Calculator */}
          <div className="field-sidebar-block">
            <h3 className="font-display text-lg font-semibold text-ink mb-4">Quick Tile Calculator</h3>
            <div className="space-y-3 font-serif text-sm text-ink-light">
              <div className="recipe-card p-3">
                <h4 className="font-display text-sm font-semibold text-ink">Per Settler (Cabbage)</h4>
                <p className="font-serif text-xs text-ink-muted mt-1">~10 tiles needed &bull; ~2.25 meals/tile</p>
              </div>
              <div className="recipe-card p-3">
                <h4 className="font-display text-sm font-semibold text-ink">Per Settler (Carrot)</h4>
                <p className="font-serif text-xs text-ink-muted mt-1">~7 tiles needed &bull; ~3.5 meals/tile</p>
              </div>
              <div className="recipe-card p-3">
                <h4 className="font-display text-sm font-semibold text-ink">Per Settler (Beet)</h4>
                <p className="font-serif text-xs text-ink-muted mt-1">~7 tiles needed &bull; ~3.75 meals/tile</p>
              </div>
              <div className="recipe-card p-3">
                <h4 className="font-display text-sm font-semibold text-ink">Per Settler (Redcurrant)</h4>
                <p className="font-serif text-xs text-ink-muted mt-1">~2 bushes needed &bull; 15 meals/bush</p>
              </div>
            </div>
          </div>

          {/* Key Formulas */}
          <div className="journal-card p-5">
            <h3 className="font-display text-base font-semibold text-ink mb-3">Key Formulas</h3>
            <div className="space-y-2 font-serif text-sm text-ink-light">
              <p><span className="font-semibold text-gold">Tiles needed =</span> Settlers &times; 984 &divide; (Yield &times; Harvests/Year)</p>
              <p><span className="font-semibold text-gold">Nutrition/day =</span> Settlers &times; 114 &times; Appetite</p>
              <p><span className="font-semibold text-gold">Meals/Year =</span> Settlers &times; 82 &times; Appetite</p>
              <p><span className="font-semibold text-gold">Winter Buffer =</span> Daily need &times; (12 + Grow Days)</p>
              <p><span className="font-semibold text-gold">Field size (tiles) =</span> Total raw units needed &divide; (Yield &times; Harvests)</p>
            </div>
          </div>

          {/* Seasonal Planting Schedule */}
          <div className="journal-card p-5">
            <h3 className="font-display text-base font-semibold text-ink mb-3">Seasonal Planting Schedule</h3>
            <div className="space-y-2 font-serif text-sm text-ink-light">
              <div><span className="field-tag vermillion text-[10px]">Spring</span> Plant Cabbage + Carrots + Redcurrant. Fast crops for early food.</div>
              <div><span className="field-tag gold text-[10px]">Summer</span> Harvest spring crops. Plant Barley + Herbs + Flax.</div>
              <div><span className="field-tag ink text-[10px]">Autumn</span> Final Beet + Carrot planting. Harvest all remaining crops. Preserve surplus.</div>
              <div><span className="field-tag ink text-[10px]">Winter</span> No planting. Consume stockpiles. Hunt if possible. Smoker runs on stored meat.</div>
            </div>
          </div>

          {/* Related Guides */}
          <div className="field-sidebar-block">
            <h3 className="font-display text-lg font-semibold text-ink mb-4">Related Guides</h3>
            <div className="space-y-2">
              <a href="/farming" className="recipe-card block p-3 group">
                <h4 className="font-display text-sm font-semibold text-ink group-hover:text-vermillion transition-colors">Farming System In-Depth</h4>
                <p className="font-serif text-xs text-ink-muted mt-1">Crop types, seasons, irrigation, soil mechanics</p>
              </a>
              <a href="/best-crops-tier-list" className="recipe-card block p-3 group">
                <h4 className="font-display text-sm font-semibold text-ink group-hover:text-vermillion transition-colors">Best Crops Tier List</h4>
                <p className="font-serif text-xs text-ink-muted mt-1">S-Tier to D-Tier crop rankings with detailed analysis</p>
              </a>
              <a href="/food-preservation" className="recipe-card block p-3 group">
                <h4 className="font-display text-sm font-semibold text-ink group-hover:text-vermillion transition-colors">Food Preservation & Storage</h4>
                <p className="font-serif text-xs text-ink-muted mt-1">Cellar design, smoking, pickling, winter stockpiling</p>
              </a>
              <a href="/kitchen-design" className="recipe-card block p-3 group">
                <h4 className="font-display text-sm font-semibold text-ink group-hover:text-vermillion transition-colors">Kitchen Design Guide</h4>
                <p className="font-serif text-xs text-ink-muted mt-1">Kitchen layout, stove efficiency, meal production optimization</p>
              </a>
              <a href="/seasons" className="recipe-card block p-3 group">
                <h4 className="font-display text-sm font-semibold text-ink group-hover:text-vermillion transition-colors">Seasons & Temperature Guide</h4>
                <p className="font-serif text-xs text-ink-muted mt-1">Year-round temperature management, seasonal survival</p>
              </a>
            </div>
          </div>

          {/* Methodology Note */}
          <div className="aged-border p-5" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
            <h3 className="font-display text-base font-semibold text-ink mb-2">How We Calculate</h3>
            <p className="font-serif text-xs text-ink-light leading-relaxed">
              All tile requirements are derived from verified game mechanics: 12 raw &rarr; 3 stew, 95 nutrition/stew, 114 nutrition/day/settler, 48-day year. Crop yield and grow time data sourced from the Going Medieval Wiki (goingmedieval.fandom.com). Winter buffer calculations assume 12-day winter + full grow cycle for first spring harvest. No artificial modifiers applied — all numbers reflect base game mechanics with a 1x appetite settler. Adjust for appetite traits and botanist skill levels in your own game.
            </p>
          </div>
        </aside>
      </div>
    </main>
  );
}
