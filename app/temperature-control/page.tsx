export const metadata = {
  title: "Going Medieval Temperature Control — Summer & Winter (2026)",
  description:
    "Complete temperature control guide for Going Medieval. Manage extreme heat and cold, clothing layers, and underground stability.",
};


export default function TemperatureControlPage() {
  return (
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-10">
            <section>
              <h1 className="chapter-heading">Temperature Control Guide</h1>
              <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
                Temperature is a silent killer in Going Medieval. A settler who freezes to death in their bedroom, collapses from heatstroke in the kitchen, or loses a limb to frostbite while hauling firewood during a winter blizzard — these deaths are entirely preventable with proper temperature control infrastructure. Managing colony temperature involves understanding the game's heat mechanics, placing heating sources efficiently, leveraging underground areas for natural cooling, building ventilation systems, and preparing seasonal survival strategies. This guide covers both heating and cooling systems from day one through late-game climate control. Data below is based on community testing and is for reference only.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">How Room Temperature Works</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Going Medieval simulates heat transfer between tiles and through walls. Each tile has a temperature value influenced by: ambient outdoor temperature (determined by season and biome), heat sources in adjacent tiles (braziers, torches, campfires, forges), insulation provided by walls and roofs, and heat loss through open doors, unroofed areas, and ventilation shafts. Enclosed rooms retain heat better than open structures, and rooms with thick stone walls insulate more effectively than rooms with thin wooden walls.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Each settler has a comfortable temperature range — community testing suggests roughly 10-30°C for average settlers, with some traits potentially modifying this range. When ambient temperature drops below a settler's comfort minimum, they accumulate hypothermia; above their maximum, heatstroke. Both conditions start with mood penalties, progress to movement and work speed reductions, escalate to health damage, and ultimately lead to death if untreated. Clothing adds tolerance but does not eliminate the need for heated/cooled rooms. Exact temperature thresholds and trait modifiers have not been verified against official data.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Heating Sources Compared</h2>
              <p className="font-serif text-sm text-ink-muted italic mb-4">&#9888; All specific temperature values, heat radii, and construction costs below are community estimates. Exact values are not verified in official game data.</p>
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Heat Source</th>
                    <th>Heat Radius</th>
                    <th>Max Temp Output</th>
                    <th>Fuel Type</th>
                    <th>Construction Cost</th>
                    <th>Best Room Size</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Torch</td><td>~3 tiles</td><td>~+3°C</td><td>Wood (refuel)</td><td>~Wood x1</td><td>2x2 to 3x3</td></tr>
                  <tr><td>Campfire</td><td>~5 tiles</td><td>~+8°C</td><td>Wood</td><td>~Stone x3</td><td>4x4 to 5x5</td></tr>
                  <tr><td>Brazier</td><td>~5 tiles</td><td>~+12°C</td><td>Wood or Coal</td><td>~Iron x3, Wood x2</td><td>5x5 to 7x7</td></tr>
                  <tr><td>Forge</td><td>~4 tiles</td><td>~+15°C</td><td>Coal (required)</td><td>~Iron x8, Stone x5</td><td>N/A (workshop use)</td></tr>
                  <tr><td>Bonfire</td><td>~8 tiles</td><td>~+20°C</td><td>~Wood x5</td><td>~Wood x3</td><td>Outdoors only</td></tr>
                </tbody>
              </table>
              <p className="font-serif text-sm text-ink-muted italic">Data source: Community testing estimates</p>
              <p className="font-serif text-base text-ink-light leading-relaxed mt-4">
                Braziers are the optimal heating choice for most indoor spaces. They produce consistent heat in a 5-tile radius, can be fueled with efficient coal, and their heat output is sufficient for rooms up to 7x7. Place braziers centrally for even heat distribution, not against walls. For larger rooms (great halls, workshops over 7x7), use two braziers placed in opposite corners to cover the floor area completely. Torches provide negligible heat and should be considered lighting only — relying on torches for heating during winter will result in frozen settlers.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Underground Cooling: Natural Temperature Regulation</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Underground rooms are the most reliable and fuel-free cooling system in the game. Rooms dug at sufficient depth into solid rock maintain a naturally stable temperature year-round (community estimates suggest ~5-15°C range depending on depth), providing natural refrigeration in summer and insulation against extreme cold in winter. This makes underground spaces ideal for food stockpiles (preserving food significantly longer than surface storage), hospital rooms (stable temperature aids recovery), and emergency summer shelters for settlers suffering heatstroke.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                The cooling effectiveness of underground rooms depends on depth and isolation. Rooms at shallow depth provide minimal cooling; deeper rooms achieve greater stability. Rooms near the surface entrance (within a few tiles of an open door or ventilation shaft) lose thermal stability as outdoor air mixes in. Place your most temperature-sensitive rooms — food storage, hospital, and brewery barrel cellar — as far from the entrance as practical, and use airlock-style double doors at the surface entrance to minimize temperature bleed.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Ventilation: Passive Cooling for Above-Ground Structures</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Above-ground buildings overheat in summer without ventilation. A closed kitchen with a stove burning all day can hit 40+&deg;C, heatstroking your cook within hours. The solution is ventilation — creating intentional openings that allow hot air to escape. The simplest method is to leave one wall segment open (unroofed) in overheated rooms, but this sacrifices security and winter insulation. A better approach is to build a chimney: mine or leave a 1x1 vertical shaft from the room's ceiling to the roof, covered with a grate to prevent rain and debris from falling in while allowing hot air to vent upward.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                Advanced ventilation uses controllable vents. Build a 1x1 ventilation shaft (vertical tunnel) with a constructed floor tile at the top. During summer, remove the floor tile for passive cooling; during winter, replace it to trap heat. Settlers can open and close vents by deconstructing and reconstructing a single floor tile — a cheap, fast operation that costs minimal wood and a few seconds of builder time. Apply this technique to kitchens, forges, and workshops where seasonal heat management makes a large difference.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Winter Heating Strategy</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Winter preparation begins in autumn. Before the first snow falls, every occupied room must have a heat source and adequate fuel reserves. For a colony of ~8 settlers in a cold biome, plan for braziers in each occupied room. Fuel consumption rates are community estimates: each brazier may consume roughly 1 wood or 0.5 coal per day, so a ~15-day winter requires a substantial fuel stockpile (hundreds of wood or coal units). Store this fuel in an accessible underground stockpile — wood left on the surface in snow may rot or deteriorate.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                Fuel management is critical. Coal may burn longer per unit than wood (community reports suggest roughly 3x duration), making it the superior winter fuel. Mine coal deposits as aggressively as possible during spring and summer, and store the coal underground. If coal is unavailable, establish a woodcutting rotation — several trees cut per day — and build a dedicated wood storage shed with roof protection. Rationing: during mild winter days, extinguish braziers in unused rooms and concentrate settlers in heated common areas (great hall) to conserve fuel for the coldest nights.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Summer Cooling Strategy</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Heat waves in summer are as dangerous as winter blizzards. When outdoor temperatures exceed 30&deg;C, indoor rooms with heat sources (kitchens, forges) rapidly become uninhabitable. Mitigation strategies: extinguish all braziers and torches (keep only essential kitchen fires), open ventilation shafts, rotate outdoor workers to early morning and evening shifts (hours 4-10 and 18-22) to avoid peak heat hours, and move temperature-sensitive activities underground.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                Clothing adjustments for summer: remove winter coats, leather tunics, and heavy armor from all settlers not actively in combat. Equip light cloth tunics and cloth pants for optimal heat tolerance. Settlers wearing plate armor in summer heat will heatstroke in under 30 minutes of outdoor labor — armor should only be equipped when a raid warning appears, and removed immediately after combat. A clothing stockpile near your armory with seasonal outfits (swapped via the equipment tab) simplifies seasonal transitions.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
              <div className="faq-item">
                <details>
                  <summary>How do I know if a settler is too cold?</summary>
                  <p>Check the settler's Needs panel. Temperature warnings appear as "Cold" (mild discomfort, -2 mood), "Freezing" (moderate, -5 mood + slowed movement), or "Hypothermia" (severe, health damage + possible death). The settler's body will also visibly shiver when cold.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>Do double-thick walls improve insulation?</summary>
                  <p>Yes. Rooms with walls 2 tiles thick insulate approximately 30% better than single-thick walls, reducing heat loss in winter and heat gain in summer. This is most impactful for food storage rooms and bedrooms — consider double-thick stone walls for these critical rooms.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>Can I mix heating and cooling in the same room?</summary>
                  <p>Technically yes, but it's inefficient and wasteful. A brazier heating a room while a ventilation shaft cools it results in fuel consumption with no net benefit. Plan rooms as either heated (winter) or cooled/ventilated (summer), and adjust infrastructure seasonally rather than running both simultaneously.</p>
                </details>
              </div>
            </section>
          </div>

          <aside className="lg:w-[35%] space-y-8 shrink-0">
            <div className="field-sidebar-block">
              <h3 className="font-display text-lg font-semibold text-ink mb-4">Temperature Danger Zones</h3>
              <div className="space-y-3">
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Below ~0°C</h4><p className="font-serif text-xs text-ink-muted mt-1">Severe hypothermia | Unheated outdoors in winter</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">~0-10°C</h4><p className="font-serif text-xs text-ink-muted mt-1">Mild cold penalty | Heated rooms with weak heat source</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">~10-30°C</h4><p className="font-serif text-xs text-ink-muted mt-1">Comfort zone | Settlers happy, no penalties</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">~30-40°C</h4><p className="font-serif text-xs text-ink-muted mt-1">Mild heat penalty | Summer kitchen/forge without vents</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Above ~40°C</h4><p className="font-serif text-xs text-ink-muted mt-1">Heatstroke danger | Unvented forge room in summer</p></div>
              </div>
            </div>
            <div className="journal-card p-5">
              <h3 className="font-display text-base font-semibold text-ink mb-3">Seasonal Temp Checklist</h3>
              <ol className="space-y-2 font-serif text-sm text-ink-light">
                <li><span className="field-tag ink text-[10px]">Autumn</span> Stockpile wood/coal, craft braziers</li>
                <li><span className="field-tag ink text-[10px]">Winter</span> Heat all occupied rooms, extinguish unused</li>
                <li><span className="field-tag ink text-[10px]">Spring</span> Open vents, remove heavy clothing</li>
                <li><span className="field-tag ink text-[10px]">Summer</span> Extinguish heat sources, ventilate</li>
                <li><span className="field-tag vermillion text-[10px]">Always</span> Monitor settler temp in Needs panel</li>
              </ol>
            </div>
          </aside>
        </div>
      </main>
  );
}
