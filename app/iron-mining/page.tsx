'use client';

import { SiteHeader, SiteFooter } from '@/components/SiteHeader';

export default function IronMiningPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-parchment)' }}>
      <SiteHeader currentPage="Crafting" />
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-10">
            <section>
              <h1 className="chapter-heading">Iron Mining & Smelting Guide</h1>
              <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
                Iron is the strategic resource that transforms your colony from a wooden settlement into an armored, weapon-forging fortress. From iron swords and crossbows to plate armor and reinforced doors, nearly every mid-to-late-game upgrade depends on a steady iron supply. This guide covers iron deposit locations, deep mining setup, smelter efficiency optimization, fuel management strategies, and the complete steel production chain. Data below is based on community testing and is for reference only.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Where to Find Iron</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Iron deposits appear in three forms across Going Medieval maps. Knowing all three sources ensures you never run out of this critical resource. Surface deposits are your early-game source, while underground veins sustain you through the mid and late game.
              </p>
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Iron Source</th>
                    <th>Appearance</th>
                    <th>Yield</th>
                    <th>Depth</th>
                    <th>Best Biome</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Ironstone Outcrops</td><td>Dark grey boulders with rust</td><td>3-6 iron ore</td><td>Surface</td><td>Mountain, Hills</td></tr>
                  <tr><td>Underground Veins</td><td>Metallic streaks in rock walls</td><td>8-15 iron ore per tile</td><td>3-6 levels deep</td><td>All biomes</td></tr>
                  <tr><td>Iron Ore Deposits</td><td>Reddish-brown patches</td><td>4-8 iron ore</td><td>Surface to level 2</td><td>River, Valley</td></tr>
                </tbody>
              </table>
              <p className="font-serif text-sm text-ink-muted italic">Data source: Community testing estimates</p>
              <p className="font-serif text-base text-ink-light leading-relaxed mt-4">
                Early scouting tip: On day one, zoom out and scan your map for ironstone outcrops—those dark grey boulders with reddish rust streaks. Mark their locations with planning designations. Each surface outcrop yields enough iron ore for 3-5 weapons or 1-2 armor pieces. For sustained iron production, you must transition to underground mining by year 2 at the latest.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Deep Mining Setup</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Deep mining is the only sustainable source of iron for medium and large colonies. Surface deposits run out quickly, but underground iron veins can sustain a colony indefinitely. Setting up an efficient deep mine requires careful infrastructure planning.
              </p>
              <div className="space-y-3">
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Shaft Construction</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">Dig a 3x3 vertical shaft from ground level, building stone staircases along one wall for settler access. Go down 4-6 levels before branching horizontally. Iron veins are most common between levels 3-6. The shaft should be close to your smelter (within 20 tiles) to minimize ore hauling distance.</p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Branch Mining Method</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">Once at the target depth, mine 2-tile-wide horizontal tunnels separated by 3-tile-wide walls. This pattern exposes the maximum number of rock faces for iron vein discovery while maintaining structural safety. Every 15 tiles, dig a cross-tunnel to connect branches, creating a grid. Settlers can then navigate efficiently between mining zones.</p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Safety & Support</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">Deep mining carries greater cave-in risk. Follow the 4x4 rule strictly—no ceiling span exceeds 4x4 tiles without support. In branch tunnels, place stone pillars every 4 tiles. If you hear cracking sounds (the cave-in warning), pause immediately, draft all miners out of the area, and reinforce before resuming.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Smelter Efficiency & Fuel Management</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                The smelter converts iron ore into iron ingots, consuming fuel in the process. Smelter efficiency directly determines how many weapons and armor pieces you can produce from your mined iron ore. Optimizing this conversion is one of the highest-ROI improvements you can make to your production chain.
              </p>
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Fuel Type</th>
                    <th>Ore → Ingot Ratio</th>
                    <th>Burns Per Unit</th>
                    <th>Best For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Wood</td><td>2 ore → 1 ingot</td><td>1 smelt</td><td>Early-game, small batches</td></tr>
                  <tr><td>Coal</td><td>1 ore → 1 ingot</td><td>3 smelts</td><td>Mid-game, efficient production</td></tr>
                  <tr><td>Charcoal</td><td>1.5 ore → 1 ingot</td><td>2 smelts</td><td>Alternative when coal is scarce</td></tr>
                </tbody>
              </table>
              <p className="font-serif text-sm text-ink-muted italic">Data source: Community testing estimates</p>
              <p className="font-serif text-base text-ink-light leading-relaxed mt-4">
                The coal advantage is dramatic. With wood fuel, 100 iron ore produces 50 ingots. With coal, the same 100 ore produces 100 ingots—double the output. Prioritize coal production as soon as you have a steady iron mining operation. Build a charcoal kiln (requires research) to convert wood into charcoal if natural coal is unavailable on your map.
              </p>
              <div className="aged-border p-5 mt-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                <p className="font-serif text-sm text-ink leading-relaxed">
                  <strong className="text-vermillion">&#9888; Fuel Supply Warning:</strong>
                  A smelter running at full capacity consumes approximately 8-10 fuel units per day. If you're using wood as fuel, that's 8-10 wood daily—which means your lumberjack must dedicate roughly half their workday to logging just for the smelter. Transition to coal or charcoal as soon as your colony can support it to free up labor for other tasks.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Steel Production Chain</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Steel is the ultimate metal in Going Medieval—required for the best weapons and armor. The steel production chain is complex, requiring multiple processing steps and facilities, but the end result is equipment with 40% more durability and damage than iron equivalents.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                The complete steel production chain: Iron Ore → Smelter (with coal) → Iron Ingots → Blast Furnace (with coal, requires research) → Steel Ingots → Smithy → Steel Equipment. Each steel ingot requires 2 iron ingots and 1 coal in the blast furnace. This means a single steel sword (3 steel ingots) ultimately consumes 6 iron ore and 3 coal.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                Due to the high resource cost, steel production should be targeted, not mass-produced. Produce steel only for your best combat settlers' primary weapons and chest armor. Other settlers and secondary equipment pieces can use iron equivalents. A colony of 10 settlers typically needs only 3-4 pieces of steel equipment—the production chain isn't efficient enough for full steel loadouts.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
              <div className="faq-item">
                <details>
                  <summary>When should I start mining iron?</summary>
                  <p>Start scouting for iron on day one, but don't prioritize mining until you have basic shelter, food production, and perimeter walls established. Typically, iron mining begins in earnest around day 15-20 (late spring/early summer of year 1). This gives you time to establish the colony before committing labor to mining.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>How many miners should I assign to iron?</summary>
                  <p>For a standard 8-settler colony, 1-2 dedicated miners is sufficient. One miner operating 6 hours daily can extract 20-30 iron ore, which produces 10-30 ingots depending on fuel type. Two miners double this output and can also assist with stone quarrying when iron demand is low.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>What if my map has no surface iron?</summary>
                  <p>Every map has underground iron veins—you must dig to find them. If surface iron is absent, prioritize building a mineshaft to level 3-4 as soon as practical. Trading with merchant caravans can provide temporary iron supplies while you establish mining operations. Iron ingots and iron ore are among the most commonly traded industrial goods from traveling merchants.</p>
                </details>
              </div>
            </section>
          </div>

          <aside className="lg:w-[35%] space-y-8 shrink-0">
            <div className="field-sidebar-block">
              <h3 className="font-display text-lg font-semibold text-ink mb-4">Iron Production Quick Ref</h3>
              <div className="space-y-3">
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Smelter</h4><p className="font-serif text-xs text-ink-muted mt-1">Iron Ore + Fuel → Iron Ingot</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Blast Furnace</h4><p className="font-serif text-xs text-ink-muted mt-1">2 Iron + 1 Coal → 1 Steel Ingot</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Iron Sword</h4><p className="font-serif text-xs text-ink-muted mt-1">Iron Ingot x2 + Leather x1</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Plate Armor</h4><p className="font-serif text-xs text-ink-muted mt-1">Iron Ingot x12 + Leather x6</p></div>
              </div>
            </div>
            <div className="journal-card p-5">
              <h3 className="font-display text-base font-semibold text-ink mb-3">Iron Demand by Colony Size</h3>
              <div className="space-y-2 font-serif text-sm text-ink-light">
                <div className="flex justify-between"><span>Early (5 settlers)</span><span className="text-gold">~50 ingots total</span></div>
                <div className="flex justify-between"><span>Mid (8 settlers)</span><span className="text-vermillion">~150 ingots</span></div>
                <div className="flex justify-between"><span>Late (12+ settlers)</span><span className="text-vermillion">~300+ ingots</span></div>
                <div className="mt-2">Estimates include weapons, armor, tools, and construction needs for a fully equipped colony.</div>
              </div>
            </div>
          </aside>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
