'use client';

import { SiteHeader, SiteFooter } from '@/components/SiteHeader';
export const metadata = {
  title: "Going Medieval Clay & Brick Production — Complete Guide (2026)",
  description:
    "Complete clay and brick production guide for Going Medieval. Clay sourcing, brick mold, kiln setup, and construction applications.",
};


export default function ClayBrickPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-parchment)' }}>
      <SiteHeader currentPage="Buildings" />
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-10">
            <section>
              <h1 className="chapter-heading">Clay & Brick Production Guide</h1>
              <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
                Clay and brick production is the bridge between early-game wooden hovels and late-game stone fortresses in Going Medieval. Clay bricks offer superior durability, better insulation, and improved fire resistance compared to wood, while being far more accessible than stone in the early-to-mid game. This guide covers clay gathering locations, brick kiln setup, the clay brick versus stone wall comparison, and how to build an optimal brick production pipeline. Data below is based on community testing and is for reference only.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Clay Gathering Locations & Methods</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Clay deposits appear as brownish-grey patches on the map, typically near water sources like rivers, lakes, and marshes. Clay is a surface-level resource—unlike stone, which requires mining, clay is gathered by digging shallow pits. Look for darker soil coloration with a slightly wet appearance; these are your clay zones.
              </p>
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Clay Source</th>
                    <th>Yield per Tile</th>
                    <th>Gathering Tool</th>
                    <th>Best Biome</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Riverbank Clay</td><td>3-5 clay</td><td>Shovel</td><td>Valley, River</td></tr>
                  <tr><td>Lakebed Clay</td><td>4-6 clay</td><td>Shovel</td><td>All biomes</td></tr>
                  <tr><td>Marsh Clay</td><td>5-8 clay</td><td>Shovel</td><td>Marsh, Wetlands</td></tr>
                  <tr><td>Underground Clay Vein</td><td>2-4 clay</td><td>Pickaxe or Shovel</td><td>Hills, Mountain</td></tr>
                </tbody>
              </table>
              <p className="font-serif text-sm text-ink-muted italic">Data source: Community testing estimates</p>
              <p className="font-serif text-base text-ink-light leading-relaxed mt-4">
                Designate a gathering zone over clay patches and assign a settler with the Mining labor enabled. Clay gathering is faster than stone mining—each clay tile yields resources in about half the time of stone extraction. One dedicated clay gatherer can supply enough raw clay to keep a brick kiln operating at full capacity.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Brick Kiln Setup & Operation</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                The brick kiln transforms raw clay into usable clay bricks. Unlike the stonecutter's bench which simply shapes existing stone, the kiln requires fuel and processing time to fire clay into hardened bricks. Setting up an efficient kiln operation is the key to scalable brick production.
              </p>
              <div className="space-y-3">
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Kiln Construction</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">Build the brick kiln near your clay source and fuel stockpile. The kiln itself requires: Stone Block x4, Wood x6. Construction skill 4+. The kiln must be placed under a roof to operate—rain extinguishes the fire and halts production. Build a simple 3x3 roofed shed to house the kiln.</p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Fuel Requirements</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">The kiln consumes fuel with each batch. Wood is the most common fuel: 1 wood fuels 1 firing cycle (produces 1 clay brick). Coal is more efficient: 1 coal fuels 3 firing cycles (produces 3 clay bricks). Always keep a fuel stockpile within 3 tiles of the kiln to minimize settler walking time.</p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Production Ratios</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">Conversion ratio: 3 raw clay + 1 fuel → 1 clay brick. A dedicated kiln operator with Crafting skill 5+ can produce approximately 15-20 clay bricks per day. This is sufficient to build roughly 4-5 clay brick wall sections daily.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Clay Brick vs Stone Wall Comparison</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                The choice between clay brick and stone walls is one of the most important building decisions in the mid-game. Both materials upgrade from wood, but they offer different trade-offs in durability, availability, insulation, and production complexity.
              </p>
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Attribute</th>
                    <th>Clay Brick Wall</th>
                    <th>Stone Wall</th>
                    <th>Wood Wall (Baseline)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Durability (HP)</td><td>~250 (community est.)</td><td>~500 (community est.)</td><td>~150 (community est.)</td></tr>
                  <tr><td>Insulation</td><td>Medium</td><td>High</td><td>Low</td></tr>
                  <tr><td>Fire Resistance</td><td>Good</td><td>Excellent</td><td>Poor</td></tr>
                  <tr><td>Materials (per wall)</td><td>Clay Brick x~4</td><td>Stone Block x~4</td><td>Wood x~4</td></tr>
                  <tr><td>Production Time</td><td>Medium (kiln)</td><td>Fast (stonecutter)</td><td>Instant</td></tr>
                  <tr><td>Availability</td><td>Widespread near water</td><td>Biome dependent</td><td>Universal</td></tr>
                </tbody>
              </table>
              <p className="font-serif text-sm text-ink-muted italic">Data source: Community testing estimates</p>
              <p className="font-serif text-base text-ink-light leading-relaxed mt-4">
                Verdict: Clay brick is the superior mid-game choice for colonies on maps with abundant clay (river, marsh biomes). It provides significantly more durability than wood at a manageable production cost. Stone walls are the long-term upgrade target, but clay brick walls serve as an excellent intermediate step that can carry your colony through the mid-game while you build up stone production infrastructure. Exact HP values are community estimates and may vary by game version.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Optimal Brick Production Pipeline</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Building an efficient brick production pipeline requires careful zoning and settler assignment. The goal is to minimize settler travel time and eliminate bottlenecks between raw clay gathering, fuel supply, kiln operation, and brick storage.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                Recommended layout: Place a clay gathering zone directly adjacent to a cluster of clay deposits. Build the brick kiln within 5 tiles of the gathering zone. Place a wood stockpile (fuel) within 3 tiles of the kiln. Place a brick output stockpile within 2 tiles of the kiln. Assign 2 settlers to this production chain: one dedicated to clay gathering (Mining priority set to 1), one dedicated to kiln operation (Crafting priority set to 1). This 2-worker pipeline produces 100+ clay bricks per week, enough to build or upgrade 25 wall sections. For larger construction projects, scale to 3 workers (2 gatherers, 1 kiln operator).
              </p>
              <div className="aged-border p-5 mt-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                <p className="font-serif text-sm text-ink leading-relaxed">
                  <strong className="text-vermillion">&#9888; Pipeline Bottleneck Warning:</strong>
                  The most common brick production failure is fuel shortage. A single kiln operating all day consumes 15-20 wood per day. If your lumberjack can't keep up, kiln production grinds to a halt. Monitor fuel stockpile levels—if it drops below 30 wood, temporarily reduce kiln operations and boost logging.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
              <div className="faq-item">
                <details>
                  <summary>Can I skip brick and go straight to stone walls?</summary>
                  <p>Yes, but only if your map has abundant surface stone (mountain or hills biome). On river, valley, or marsh maps where stone is scarce, clay bricks are essential for upgrading from wood. Brick walls are vastly better than wood and will survive raids that would instantly demolish wood walls (exact HP values are community estimates).</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>How much clay do I need for a full wall upgrade?</summary>
                  <p>A typical small colony perimeter requires 60-80 wall sections. At 3 raw clay per brick and 4 bricks per wall section, you need 720-960 raw clay and 240-320 wood fuel for the kiln. Plan for one full season of dedicated brick production to complete a perimeter upgrade.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>Does clay respawn or run out?</summary>
                  <p>Surface clay deposits are finite—once gathered, they're gone. However, maps typically have 200-400 tiles of clay, which is enough for massive construction projects. If you exhaust surface clay, underground clay veins (on hill/mountain maps) and trading with merchants are your remaining clay sources.</p>
                </details>
              </div>
            </section>
          </div>

          <aside className="lg:w-[35%] space-y-8 shrink-0">
            <div className="field-sidebar-block">
              <h3 className="font-display text-lg font-semibold text-ink mb-4">Brick Production Quick Ref</h3>
              <div className="space-y-3">
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Raw Clay → Brick</h4><p className="font-serif text-xs text-ink-muted mt-1">3 clay + 1 fuel = 1 brick</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Clay Brick Wall</h4><p className="font-serif text-xs text-ink-muted mt-1">~4 bricks per wall | HP: community estimate</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Kiln Construction</h4><p className="font-serif text-xs text-ink-muted mt-1">Stone x4, Wood x6 | Skill 4+</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Daily Output (1 worker)</h4><p className="font-serif text-xs text-ink-muted mt-1">15-20 bricks/day</p></div>
              </div>
            </div>
            <div className="journal-card p-5">
              <h3 className="font-display text-base font-semibold text-ink mb-3">Wall Upgrade Priority</h3>
              <ol className="space-y-2 font-serif text-sm text-ink-light">
                <li>1. Perimeter outer wall → Brick</li>
                <li>2. Gate sections → Brick (double thick)</li>
                <li>3. Interior partitions → Brick</li>
                <li>4. Living quarters → Brick (insulation bonus)</li>
                <li>5. Eventually → Stone (when available)</li>
              </ol>
            </div>
          </aside>
        </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={ __html: `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can I skip brick and go straight to stone walls?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, but only if your map has abundant surface stone (mountain or hills biome). On river, valley, or marsh maps where stone is scarce, clay bricks are essential for upgrading from wood. Brick walls are vastly better than wood and will survive raids that would instantly demolish wood walls (exact HP values are community estimates)."
      }
    },
    {
      "@type": "Question",
      "name": "How much clay do I need for a full wall upgrade?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A typical small colony perimeter requires 60-80 wall sections. At 3 raw clay per brick and 4 bricks per wall section, you need 720-960 raw clay and 240-320 wood fuel for the kiln. Plan for one full season of dedicated brick production to complete a perimeter upgrade."
      }
    },
    {
      "@type": "Question",
      "name": "Does clay respawn or run out?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Surface clay deposits are finite—once gathered, they're gone. However, maps typically have 200-400 tiles of clay, which is enough for massive construction projects. If you exhaust surface clay, underground clay veins (on hill/mountain maps) and trading with merchants are your remaining clay sources."
      }
    }
  ]
}` } />
      </main>
      <SiteFooter />
    </div>
  );
}
