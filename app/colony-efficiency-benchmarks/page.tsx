export const metadata = {
  title: "Going Medieval Colony Efficiency Benchmarks — Optimal Settler Ratios & Production Targets (2026)",
  description:
    "Colony efficiency benchmarks for Going Medieval. Optimal settler counts per task, production targets, food-per-settler math, and labor allocation tables to maximize output at every colony size.",
};

export default function ColonyEfficiencyBenchmarksPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-10">
          <section>
            <h1 className="chapter-heading">Going Medieval Colony Efficiency Benchmarks</h1>
            <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
              You have 12 settlers. Some farm, some craft, some fight. How many should do each? How much food do you need to produce per day to survive winter? When is a second cook worth the investment? These are not questions of preference — they are questions of math, and math has answers. This guide provides efficiency benchmarks for Going Medieval colonies across four size brackets (6, 10, 15, and 20+ settlers), covering food production targets, optimal labor allocation, resource consumption rates, and the productivity breakpoints where adding one more settler to a specific task stops being worth it. Every number below is derived from in-game mechanics and community testing data.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Food Production: The Non-Negotiable Baseline</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Each settler consumes approximately 2 meals per day (varies slightly by traits and activity level). A single meal requires 10 raw food units (vegetables, meat, or grain flour). Therefore, a 10-settler colony consumes <strong>~20 meals = ~200 raw food units per day</strong>. Winter amplifies this: crops stop growing entirely, forcing the colony to survive on stored food for 8-12 days. The math below shows what your fields must produce.
            </p>
            <table className="parchment-table">
              <thead>
                <tr>
                  <th>Colony Size</th>
                  <th>Daily Raw Food Need</th>
                  <th>Winter Reserve (12 days)</th>
                  <th>Total Annual Minimum</th>
                  <th>Recommended Field Tiles (cabbage equivalent)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>6 settlers</td><td>120 raw units</td><td>1,440 units</td><td>~4,500 units</td><td>80-100 tiles</td></tr>
                <tr><td>10 settlers</td><td>200 raw units</td><td>2,400 units</td><td>~7,500 units</td><td>130-160 tiles</td></tr>
                <tr><td>15 settlers</td><td>300 raw units</td><td>3,600 units</td><td>~11,000 units</td><td>200-240 tiles</td></tr>
                <tr><td>20 settlers</td><td>400 raw units</td><td>4,800 units</td><td>~15,000 units</td><td>260-320 tiles</td></tr>
              </tbody>
            </table>
            <p className="font-serif text-sm text-ink-faded mt-2">Note: Cabbage-equivalent means standard crop yield. Barley, beets, and redcurrants have different yields — adjust field size accordingly. Add 20% buffer for crop failures, blight events, and animal feed.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Optimal Labor Allocation by Colony Size</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              The table below shows proven settler allocation ratios that keep colonies productive without idle crafters or unfed settlers. These are starting points — adjust for individual settler skill levels and your colony priorities (defense-heavy vs. production-heavy).
            </p>
            <table className="parchment-table">
              <thead>
                <tr>
                  <th>Role</th>
                  <th>6 Settlers</th>
                  <th>10 Settlers</th>
                  <th>15 Settlers</th>
                  <th>20+ Settlers</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Farmers (plant + harvest)</td><td>2</td><td>3</td><td>4</td><td>5-6</td></tr>
                <tr><td>Cook (kitchen only)</td><td>1 (part-time)</td><td>1</td><td>1-2</td><td>2</td></tr>
                <tr><td>Builder / Miner</td><td>1</td><td>2</td><td>3</td><td>4</td></tr>
                <tr><td>Crafter (smith + carpentry)</td><td>1</td><td>1-2</td><td>2-3</td><td>3-4</td></tr>
                <tr><td>Tailor (clothing + leather)</td><td>0 (part-time crafter)</td><td>1 (part-time)</td><td>1</td><td>1-2</td></tr>
                <tr><td>Dedicated Hauler</td><td>0 (shared duty)</td><td>1</td><td>1-2</td><td>2-3</td></tr>
                <tr><td>Researcher</td><td>1 (part-time)</td><td>1</td><td>1-2</td><td>2</td></tr>
                <tr><td>Hunter / Animal Handler</td><td>0-1</td><td>1</td><td>1</td><td>2</td></tr>
              </tbody>
            </table>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Workshop Productivity Benchmarks</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              How much can a single settler produce in one work day? The benchmarks below assume a standard work shift (~14 daylight hours), a settler with skill level 10-15 in the relevant category, and optimal stockpile adjacency (input and output within 3 tiles). Lower skill levels reduce output proportionally.
            </p>
            <table className="parchment-table">
              <thead>
                <tr>
                  <th>Workshop</th>
                  <th>Product</th>
                  <th>Output per Day (Skill 10)</th>
                  <th>Output per Day (Skill 20)</th>
                  <th>Can 1 Settler Supply a Colony?</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Campfire/Stove</td><td>Meals</td><td>~15-18 meals</td><td>~25-30 meals</td><td>Yes, up to ~12 settlers</td></tr>
                <tr><td>Millstone</td><td>Flour (from barley)</td><td>~25-30 units</td><td>~40-50 units</td><td>Yes, up to 20+ settlers</td></tr>
                <tr><td>Stonecutter</td><td>Limestone blocks</td><td>~20-25 blocks</td><td>~35-45 blocks</td><td>Yes, up to 15 settlers' building needs</td></tr>
                <tr><td>Kiln</td><td>Clay/Limestone bricks</td><td>~12-15 bricks</td><td>~20-25 bricks</td><td>One kiln per 10 settlers for active building</td></tr>
                <tr><td>Forge</td><td>Steel ingots</td><td>~8-10 ingots</td><td>~15-18 ingots</td><td>Yes for weapons. Multiple forges for full plate sets.</td></tr>
                <tr><td>Tailor Bench</td><td>Clothing items</td><td>~4-6 items</td><td>~8-10 items</td><td>Yes for basic clothing. Add second for armor production.</td></tr>
                <tr><td>Research Table</td><td>Research points</td><td>~80-100 pts</td><td>~150-180 pts</td><td>One researcher completes all tech in ~30-40 days</td></tr>
                <tr><td>Brewery</td><td>Alcohol (beer/wine)</td><td>~8-10 units</td><td>~15-18 units</td><td>1 brewer per ~15 settlers for mood management</td></tr>
              </tbody>
            </table>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">The 80% Rule: When Adding Settlers Stops Helping</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Diminishing returns hit hard in Going Medieval. Each new settler adds one mouth to feed and requires additional housing, clothing, and weapons — but the marginal productive output of adding a second or third settler to the same task drops significantly. The 80% rule: a single skilled settler running a workshop at 80% capacity is more efficient than two unskilled settlers sharing it, because the second settler adds 100% more food consumption for maybe 40% more output (due to walking, stockpile congestion, and task switching). Apply this breakpoint table:
            </p>
            <table className="parchment-table">
              <thead>
                <tr>
                  <th>Task</th>
                  <th>1st Settler Output (base)</th>
                  <th>2nd Settler Output (marginal)</th>
                  <th>3rd Settler Output (marginal)</th>
                  <th>Breakpoint</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Farming (per field zone)</td><td>100%</td><td>~70% of 1st</td><td>~40% of 1st</td><td>2 farmers max per field zone</td></tr>
                <tr><td>Cooking (1 kitchen)</td><td>100%</td><td>~50% of 1st</td><td>~20% of 1st</td><td>1 cook per kitchen until 15+ settlers</td></tr>
                <tr><td>Mining (per vein)</td><td>100%</td><td>~50% of 1st</td><td>0% (vein blocked)</td><td>1-2 miners per vein depending on access</td></tr>
                <tr><td>Smithing (1 forge)</td><td>100%</td><td>~30% of 1st</td><td>0% (forge occupied)</td><td>1 smith per forge. Add forge, not smith.</td></tr>
                <tr><td>Research (1 table)</td><td>100%</td><td>0% (table occupied)</td><td>0%</td><td>1 researcher per table. Add table for second.</td></tr>
                <tr><td>Hauling</td><td>100%</td><td>~85% of 1st</td><td>~70% of 1st</td><td>Up to 3 haulers scale well</td></tr>
              </tbody>
            </table>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Resource Consumption Benchmarks</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">How fast does your colony burn through key resources? These per-settler-per-day numbers help you size stockpiles and set production targets.</p>
            <table className="parchment-table">
              <thead>
                <tr>
                  <th>Resource</th>
                  <th>Per Settler Per Day</th>
                  <th>10-Settler Colony (per season, 12 days)</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Food (raw units)</td><td>~20</td><td>2,400 per season</td><td>Based on 2 meals/day. Packaged meals reduce by 15% due to nutrition density.</td></tr>
                <tr><td>Alcohol (for mood)</td><td>~0.5 units</td><td>60 per season</td><td>Optional. Only needed if mood is problematic. 1 brewer can supply ~15 settlers.</td></tr>
                <tr><td>Wood (heating + crafting)</td><td>~3-5 logs</td><td>360-600 per season</td><td>Higher in winter (heating). Lower if using braziers with coal.</td></tr>
                <tr><td>Coal/Charcoal (smelting)</td><td>~0.5-1 unit</td><td>60-120 per season</td><td>Only if actively smelting/forging. Zero without metal industry.</td></tr>
                <tr><td>Clothing (wear rate)</td><td>~0.03 items</td><td>~4 items per season</td><td>Wear rate doubles in combat and harsh weather. Keep 2 spare outfits per settler.</td></tr>
                <tr><td>Medicine (healing)</td><td>~0.1-0.3 units</td><td>12-36 per season</td><td>Combat-heavy colonies use 3x more. Always stock 50+ herbal medicine pre-raid.</td></tr>
              </tbody>
            </table>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Seasonal Efficiency Calendar</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">Each season demands a different labor allocation. Follow this calendar to avoid the winter starvation spiral that kills most colonies:</p>
            <table className="parchment-table">
              <thead>
                <tr>
                  <th>Season</th>
                  <th>Primary Focus</th>
                  <th>Farmers</th>
                  <th>Builders</th>
                  <th>Crafters</th>
                  <th>Critical Task</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Spring</td>
                  <td>Planting + Expansion</td>
                  <td>4-6 (max)</td>
                  <td>2-3</td>
                  <td>1-2</td>
                  <td>Sow all fields within first 3 days. Do NOT delay — late crops = winter death.</td>
                </tr>
                <tr>
                  <td>Summer</td>
                  <td>Building + Mining</td>
                  <td>2-3</td>
                  <td>3-4</td>
                  <td>2</td>
                  <td>Complete major construction before autumn. Harvest early crops.</td>
                </tr>
                <tr>
                  <td>Autumn</td>
                  <td>Harvest + Stockpile</td>
                  <td>4-6 (max)</td>
                  <td>1-2</td>
                  <td>1-2</td>
                  <td>Harvest EVERYTHING. Food left in fields rots at first frost. Build extra storage.</td>
                </tr>
                <tr>
                  <td>Winter</td>
                  <td>Crafting + Research</td>
                  <td>0-1 (greenhouse only)</td>
                  <td>1 (interior)</td>
                  <td>3-4</td>
                  <td>Convert all stored raw materials to finished goods. Research sprint. Train combat.</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-ink mb-1">Q: What is the minimum settler count for a self-sustaining colony?</h3>
                <p className="font-serif text-base text-ink-light leading-relaxed">Three settlers is the absolute minimum — one farmer, one builder/crafter, and one flexible. However, a 3-settler colony cannot survive a raid without extreme defensive preparations and will struggle to maintain food production through winter. Six settlers is the realistic minimum for a stable, defensible colony that can produce surplus food, maintain equipment, and research essential technologies.</p>
              </div>
              <div>
                <h3 className="font-semibold text-ink mb-1">Q: When should I stop accepting new settlers?</h3>
                <p className="font-serif text-base text-ink-light leading-relaxed">Stop accepting new settlers when your food production cannot sustain a 12-day winter reserve with a 20% buffer. This is typically around 20 settlers for most colonies unless you have optimized fields and dedicated farmers. Beyond 20 settlers, each new mouth requires an additional 8-10 field tiles and more hauling infrastructure — the marginal benefit drops sharply. Many veteran players cap at 15-18 settlers for peak efficiency.</p>
              </div>
              <div>
                <h3 className="font-semibold text-ink mb-1">Q: Is it better to have generalists or specialists?</h3>
                <p className="font-serif text-base text-ink-light leading-relaxed">Specialists outperform generalists by a significant margin. A settler dedicated to Smithing will produce weapons and armor 2-3x faster than a generalist who splits time between smithing, hauling, and farming — even accounting for idle time waiting for materials. For colonies under 10 settlers, you may need 1-2 generalists for flexibility. For 10+ settlers, every colonist should have one primary role and at most one secondary backup role. Enable only those two jobs in the Work tab and set the primary role to Priority 1.</p>
              </div>
            </div>
          </section>

          <p className="text-sm text-ink-faded mt-8 italic">
            Last updated: June 2026. Efficiency benchmarks derived from in-game mechanics, settler action timers, and community performance testing. Food consumption math is based on verified meal requirements. Productivity numbers assume standard difficulty with no modifiers — extreme biomes, custom difficulty, and mods will alter these benchmarks.
          </p>
        </div>
        <aside className="lg:w-[30%] space-y-6">
          <div className="bg-parchment-light border border-ink-faded/20 rounded-sm p-5">
            <h3 className="font-display text-lg font-semibold text-ink mb-3">Related Guides</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/work-priorities-setup" className="text-accent hover:underline">Work Priorities Setup</a></li>
              <li><a href="/production-chain-optimization" className="text-accent hover:underline">Production Chain Optimization</a></li>
              <li><a href="/farming-calendar" className="text-accent hover:underline">Farming Calendar</a></li>
              <li><a href="/specialist-training" className="text-accent hover:underline">Specialist Training Guide</a></li>
              <li><a href="/settler-skills" className="text-accent hover:underline">Settler Skills Overview</a></li>
              <li><a href="/food-preservation-guide" className="text-accent hover:underline">Food Preservation Guide</a></li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
