'use client';

import { SiteHeader, SiteFooter } from '@/components/SiteHeader';

export default function BuildingsPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-parchment)' }}>
      <SiteHeader currentPage="Buildings" />
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-10">
            <section>
              <h1 className="chapter-heading">Building System In-Depth</h1>
              <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
                Building is one of the core systems in Going Medieval. From a simple wooden hut to a grand stone fortress, your building quality directly determines your colony's survivability and defensive strength. This guide covers wall types, room requirements, structural stability, and multi-story construction techniques to help you build an impenetrable medieval settlement. All data is based on community estimates and may change with game updates.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Wall Type Comparison</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Going Medieval offers multiple building materials, from basic wood walls to sturdy stone walls. Each material has different durability, build cost, and insulation values. Early-game you're limited to wood; as research progresses, upgrading to brick and stone is key to improving defense.
              </p>
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Wall Type</th>
                    <th>Durability</th>
                    <th>Materials</th>
                    <th>Insulation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Wood Wall</td><td>150</td><td>Wood x4</td><td>Low</td></tr>
                  <tr><td>Wood Fence</td><td>50</td><td>Wood x2</td><td>None</td></tr>
                  <tr><td>Clay Brick Wall</td><td>250</td><td>Clay Brick x4</td><td>Medium</td></tr>
                  <tr><td>Limestone Wall</td><td>500</td><td>Limestone x4</td><td>High</td></tr>
                  <tr><td>Brick Wall</td><td>400</td><td>Brick x4</td><td>High</td></tr>
                  <tr><td>Iron Wall</td><td>800</td><td>Iron Ingot x3</td><td>Very High</td></tr>
                </tbody>
              </table>
              <p className="font-serif text-sm text-ink-muted italic">Data source: Community testing estimates</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Room Requirements & Functions</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Each room must meet specific conditions to function. Rooms are enclosed by walls and doors, and need sufficient interior space for furniture and workstations. Settler mood fluctuates based on room quality — clean, spacious, decorated rooms significantly boost morale.
              </p>
              <div className="space-y-3">
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Living Quarters</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">Minimum 3x3 tile space, requires a bed and door. Individual rooms per settler grant a mood bonus. Adding tables, chairs, and rugs further improves comfort.</p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Stockpile</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">Used for storing supplies. Underground stockpiles stay cooler, dramatically slowing food spoilage. Build inside a mountain and add wooden shelves to increase capacity.</p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Kitchen / Workshop</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">Requires enough space for stoves, workbenches, and other equipment. Build near stockpiles to reduce settler hauling travel time.</p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Prison</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">A dedicated room for holding prisoners, requiring sturdy doors and walls. Prisoners can be recruited as settlers — a key way to expand your population.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Structural Stability</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Going Medieval's building system features structural stability mechanics. Walls and floors need adequate support or they will collapse. Underground excavation also requires attention to overhead support — when digging large spaces, you must leave pillars or build support beams.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Key rules: Each wall can extend horizontally up to 6 tiles without additional support; beyond that you must build pillars or adjacent walls. Natural rock ceilings can support roughly 4x4 areas; larger spaces require leaving rock pillars. Multi-story floors need walls beneath for support — floors overhanging by more than 2 tiles will collapse.
              </p>
              <div className="aged-border p-5" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                <p className="font-serif text-sm text-ink leading-relaxed">
                  <strong className="text-vermillion">&#9888; Building Tip:</strong>
                  When excavating an underground base, use a grid layout leaving 1-tile-wide rock pillars every 4 tiles. This maximizes usable space while ensuring structural stability. If a cave-in occurs, settlers below can suffer severe injuries or death.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Multi-Story Building Tips</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Multi-story construction is the primary way to expand your colony in the mid-to-late game. Use stairs and ramps to connect different levels, creating a vertical settlement with functional zoning. A common layout: ground level for defense and farming, basement level 1 for stockpiles, basement level 2 for living quarters — leveraging the constant underground temperature for indoor comfort.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                When building multi-story structures, build bottom-up, one level at a time. Each upper-level wall must align with the wall or pillar below. Roofs are mandatory — rooms without a roof are considered outdoor, and settlers will suffer negative mood from weather exposure. Flat roofs vs. peaked roofs: flat roofs let you build above, peaked roofs provide better insulation.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
              <div className="faq-item">
                <details>
                  <summary>Which is better to build — wood or stone walls?</summary>
                  <p>Early-game wood walls are your only option, but mid-to-late game you must upgrade to stone. Stone walls have 3x the durability of wood and better insulation. Prioritize upgrading walls facing the outside — interior partitions can stay wood temporarily.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>How do I dig an underground base without it collapsing?</summary>
                  <p>Use a grid layout when digging, leaving 1-tile-wide rock pillars every 4 tiles as support. Avoid excavating large areas all at once. If you need a large hall, dig the perimeter first, then the interior, watching for cracks as you go.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>Settlers keep complaining about small rooms. What do I do?</summary>
                  <p>Expand living quarters to at least 4x4 tiles, add a bed, table, chair, and decorations. Individual rooms per settler work best. If resources are tight, you can house 2 per room but must scale up the room size accordingly. Keeping rooms clean also boosts mood.</p>
                </details>
              </div>
            </section>
          </div>

          <aside className="lg:w-[35%] space-y-8 shrink-0">
            <div className="field-sidebar-block">
              <h3 className="font-display text-lg font-semibold text-ink mb-4">Building Quick Ref</h3>
              <div className="space-y-3">
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Wood Wall</h4><p className="font-serif text-xs text-ink-muted mt-1">Wood x4 | Durability 150</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Wood Door</h4><p className="font-serif text-xs text-ink-muted mt-1">Wood x6 | Durability 120</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Wood Stairs</h4><p className="font-serif text-xs text-ink-muted mt-1">Wood x8 | Connects levels</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Stone Wall</h4><p className="font-serif text-xs text-ink-muted mt-1">Limestone x4 | Durability 500</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Wood Shelf</h4><p className="font-serif text-xs text-ink-muted mt-1">Wood x3 | Storage +50%</p></div>
              </div>
            </div>
            <div className="journal-card p-5">
              <h3 className="font-display text-base font-semibold text-ink mb-3">Build Priority</h3>
              <ol className="space-y-2 font-serif text-sm text-ink-light">
                <li>1. Temporary shelter (wood walls + door + beds)</li>
                <li>2. Stockpile (move underground ASAP)</li>
                <li>3. Perimeter wall (wood walls first loop)</li>
                <li>4. Kitchen & workshop</li>
                <li>5. Upgrade to stone (perimeter first)</li>
                <li>6. Decorations & optimization</li>
              </ol>
            </div>
          </aside>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
