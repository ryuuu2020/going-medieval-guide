'use client';

import { SiteHeader, SiteFooter } from '@/components/SiteHeader';

export default function StoneManagementPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-parchment)' }}>
      <SiteHeader currentPage="Buildings" />
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-10">
            <section>
              <h1 className="chapter-heading">Stone Management Guide</h1>
              <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
                Stone is the most valuable building material in Going Medieval—the foundation of your walls, floors, and defensive fortifications. But efficient stone management requires understanding the differences between limestone, claystone, and ironstone; optimizing quarry layouts; organizing stockpiles for maximum efficiency; and mastering the stone-to-block conversion ratio. This comprehensive guide covers everything you need to turn raw rock into a fortress. Data below is based on community testing and is for reference only.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Stone Types: Limestone vs Claystone vs Ironstone</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Not all stone is created equal. Going Medieval features three distinct stone types, each with different properties, yields, and optimal uses. Identifying which stone types exist on your map and planning extraction accordingly is the first step in stone management.
              </p>
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Stone Type</th>
                    <th>Color/Appearance</th>
                    <th>Block Yield</th>
                    <th>Best Use</th>
                    <th>Mining Difficulty</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Limestone</td><td>Light grey, layered</td><td>3 blocks per tile</td><td>Wall construction, flooring</td><td>Medium</td></tr>
                  <tr><td>Claystone</td><td>Brownish-grey, smooth</td><td>2 blocks per tile</td><td>Interior walls, decoration</td><td>Easy</td></tr>
                  <tr><td>Ironstone</td><td>Dark grey with rust spots</td><td>1 block + iron ore</td><td>Iron production, reinforced walls</td><td>Hard</td></tr>
                </tbody>
              </table>
              <p className="font-serif text-sm text-ink-muted italic">Data source: Community testing estimates</p>
              <p className="font-serif text-base text-ink-light leading-relaxed mt-4">
                Limestone is your primary construction stone—abundant, high yield, and perfect for walls. Claystone is softer and yields fewer blocks, making it less efficient for bulk construction but useful for interior projects where aesthetics matter. Ironstone is the most valuable—it produces both stone blocks and iron ore simultaneously, making it a dual-purpose mining target that supplies both your building and smithing needs.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Quarry Optimization</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                A well-designed quarry maximizes mining efficiency while maintaining structural safety. Poor quarry design leads to cave-ins, wasted settler time, and inefficient resource extraction. The key principle is systematic mining: plan your quarry layout before the first pickaxe strikes.
              </p>
              <div className="space-y-3">
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Grid Mining Pattern</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">Mine in a checkerboard pattern, leaving 1-tile-wide stone pillars every 4 tiles. This provides structural support while maximizing accessible mining area. As you exhaust each grid section, remove pillars and expand to new areas. This prevents cave-ins while maintaining 80%+ extraction efficiency.</p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Vertical Quarry Design</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">Instead of spreading horizontally, dig a 6x6 vertical shaft. As you descend, build stone staircases along the walls. Each level exposes new stone faces. A 5-level deep quarry yields more stone than a 15x15 surface quarry and takes up far less map space. Just ensure each level has support pillars.</p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Accessibility & Hauling</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">Build a stone stockpile within 10 tiles of your quarry entrance. Place stonecutter benches adjacent to the stockpile. This minimizes settler hauling trips. Each trip a settler spends hauling stone blocks is time they're not mining or building. A well-placed stockpile can cut hauling time by 60%.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Stockpile Organization</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Stone stockpile organization directly impacts construction speed. When settlers build walls, they grab the nearest available stone blocks. If blocks are scattered across multiple distant stockpiles, construction crawls. Centralized, well-organized stockpiles are essential.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                Recommended storage layout: Create three stone stockpile zones. Zone 1 (Construction Stockpile): Located centrally, within 15 tiles of all major construction areas. Stores only processed stone blocks. High priority—this is where settlers grab blocks for building. Zone 2 (Quarry Output): Adjacent to quarries and stonecutter benches. Stores raw stone waiting to be processed and finished blocks. Zone 3 (Overflow/Deep Storage): Underground, further away. Stores excess stone beyond immediate construction needs. Use shelves in all stockpile zones to increase storage density by 50%.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Stone-to-Block Conversion Ratio</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Understanding the stone-to-block conversion is critical for production planning. The stonecutter's bench processes raw stone chunks into usable stone blocks at a specific ratio that varies by stone type and worker skill level.
              </p>
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Input</th>
                    <th>Output (Skill 1-5)</th>
                    <th>Output (Skill 6-10)</th>
                    <th>Production Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>1 Limestone Chunk</td><td>2 Stone Blocks</td><td>3 Stone Blocks</td><td>~30 sec</td></tr>
                  <tr><td>1 Claystone Chunk</td><td>1 Stone Block</td><td>2 Stone Blocks</td><td>~25 sec</td></tr>
                  <tr><td>1 Ironstone Chunk</td><td>1 Block + 1 Iron Ore</td><td>1 Block + 2 Iron Ore</td><td>~40 sec</td></tr>
                </tbody>
              </table>
              <p className="font-serif text-sm text-ink-muted italic">Data source: Community testing estimates</p>
              <p className="font-serif text-base text-ink-light leading-relaxed mt-4">
                Key insight: Assign your highest-Crafting-skill settler to the stonecutter's bench. The skill-based output multiplier means a skill 8+ crafter produces 50% more blocks from the same raw stone as a skill 3 crafter. Over a large quarrying operation, this difference amounts to hundreds of extra stone blocks.
              </p>
              <div className="aged-border p-5 mt-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                <p className="font-serif text-sm text-ink leading-relaxed">
                  <strong className="text-vermillion">&#9888; Stone Conversion Tip:</strong>
                  Never use raw stone chunks for construction if you can process them into blocks first. Raw stone placed directly as a wall provides significantly lower durability than processed stone block walls. Always run stone through the stonecutter's bench before building—the conversion step is essential, not optional.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
              <div className="faq-item">
                <details>
                  <summary>How many stone blocks do I need for a full perimeter wall?</summary>
                  <p>Calculate based on your perimeter length. A typical early-game 40-tile perimeter requires 160 stone blocks (4 blocks per wall section × 40). Add 20% for gates, towers, and reinforced sections—plan for ~200 blocks minimum. This translates to roughly 65-100 raw limestone chunks, depending on your stonecutter's skill level.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>Can I build underground without cave-ins?</summary>
                  <p>Yes, by following the 4x4 rule: no unsupported ceiling span should exceed 4x4 tiles without a support pillar. Build stone pillars every 4 tiles in a grid pattern. Natural rock supports 4 tiles in each direction. For larger rooms (like a great hall), use constructed stone pillars to replace the rock pillars you mine away.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>What's the fastest way to get stone in the early game?</summary>
                  <p>Mine surface-level limestone deposits rather than digging deep. Surface mining is faster because settlers don't need to navigate stairs or deep shafts. Identify limestone patches on your starting map within the first day and designate a mining zone immediately. Even before building your first house, get stone production started.</p>
                </details>
              </div>
            </section>
          </div>

          <aside className="lg:w-[35%] space-y-8 shrink-0">
            <div className="field-sidebar-block">
              <h3 className="font-display text-lg font-semibold text-ink mb-4">Stone Quick Ref</h3>
              <div className="space-y-3">
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Stone Wall</h4><p className="font-serif text-xs text-ink-muted mt-1">4 Stone Blocks | 500 HP</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Stone Floor</h4><p className="font-serif text-xs text-ink-muted mt-1">2 Stone Blocks | Cleanliness bonus</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Stone Staircase</h4><p className="font-serif text-xs text-ink-muted mt-1">6 Stone Blocks | Level connector</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Stone Pillar</h4><p className="font-serif text-xs text-ink-muted mt-1">3 Stone Blocks | Ceiling support</p></div>
              </div>
            </div>
            <div className="journal-card p-5">
              <h3 className="font-display text-base font-semibold text-ink mb-3">Limestone → Wall Calculator</h3>
              <div className="space-y-2 font-serif text-sm text-ink-light">
                <div>Per wall section (4 blocks):</div>
                <div>&bull; Skill 5: ~1.3 limestone chunks</div>
                <div>&bull; Skill 8: ~1 limestone chunk</div>
                <div className="mt-2">For 40-wall perimeter at Skill 8:</div>
                <div>&bull; Need ~160 stone blocks</div>
                <div>&bull; Need ~55 limestone chunks</div>
              </div>
            </div>
          </aside>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
