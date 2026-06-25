
export default function UndergroundBasePage() {
  return (
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-10">
            <section>
<h1 className="chapter-heading">Underground Base Building Guide</h1>
            <div className="aged-border p-5 mb-5" style={{ backgroundColor: 'var(--color-parchment-deep)', borderColor: '#8b2500' }}>
                <p className="font-serif text-sm text-ink leading-relaxed">
                  <strong className="text-vermillion">&#9888; DISCLAIMER:</strong> Some mechanics described below (ventilation systems, stale air penalty, mushroom farms, cabin fever) <strong>may reflect mechanics from other colony sims rather than Going Medieval</strong>. Underground bases are viable in Going Medieval, but the specific ventilation, air quality, and mushroom farming mechanics have not been verified against the current game version. Always cross-reference with in-game behavior.
                </p>
              </div>
            <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
                Digging into the earth is one of the most rewarding strategies in Going Medieval. An underground base leverages the natural insulation of stone, protects against surface raiders, and creates a temperature-stable environment that preserves food longer and keeps settlers comfortable year-round. However, underground living introduces unique challenges in lighting, food production, and structural stability management. Data below is based on community testing and is for reference only.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Mining Out Rooms: Excavation Strategy</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Before you swing a pickaxe, plan your underground layout above ground first. Mark out the entire footprint of your planned base on the surface with stockpile zones (which are free to designate), then use those as a guide for where to dig below. The most efficient mining pattern is the corridor-and-branch method: carve a 4-tile-wide main hallway running east-west or north-south, then branch off into rooms on either side. Each room should be no wider than 7 tiles — rooms wider than 7 require support pillars or a constructed ceiling (wood beams, floor tiles) to prevent roof collapse.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Support pillars are non-negotiable for large underground rooms. Place a pillar (wall block, column, or even a constructed stone pillar) every 6 tiles in both directions. For a great hall carved underground, aim for a 6x10 room with a central row of 2-3 pillars — this gives you the spacious feel of a surface hall without the collapse risk. Pillars also serve as torch-mounting points, so they pull double duty as lighting infrastructure.
              </p>
              <div className="aged-border p-5" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                <p className="font-serif text-sm text-ink leading-relaxed">
                  <strong className="text-vermillion">&#9888; Roof Collapse Warning:</strong>
                  Any unsupported span wider than 7 tiles will collapse, killing settlers and destroying furniture. When in doubt, add a pillar. The game's stability overlay (activated through the mining tool) shows safe vs. dangerous zones in green and red respectively.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Ventilation Systems</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Underground rooms develop stale air over time, inflicting a persistent mood penalty on settlers who spend too much time in them. The solution is ventilation — a direct connection between each room and the surface or a designated air shaft. The simplest ventilation system is to mine a 1-tile vertical shaft to the surface above every major room, then cover the surface opening with a wooden grate or leave it open (at the cost of temperature regulation). For larger bases, dig a single 2-tile-wide central ventilation shaft that connects to all rooms via horizontal 1-tile ducts.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                An advanced ventilation technique is the chimney array: mine 2x2 vertical shafts spaced every 10-12 tiles across your underground base, connecting each room to the surface. In winter, you can cover the surface grates with floors to trap heat, then reopen them in summer for cooling. Settlers working in rooms with open ventilation shafts receive no stale air penalty, and rooms adjacent to ventilated rooms also benefit from partial air circulation. Always ensure your hospital and bedrooms have direct ventilation — these are where settlers spend the most continuous time.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Temperature Benefits of Underground Living</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Temperature is the single greatest advantage of underground bases. Rooms dug 3+ tiles into solid rock maintain a natural temperature band of 8-12&deg;C regardless of surface conditions, even during the harshest winter blizzards or scorching summer heat waves. This thermal stability eliminates the need for seasonal heating infrastructure — surface bases must build and fuel braziers all winter, consuming large quantities of wood or coal. An underground base uses zero fuel for temperature control, redirecting that labor toward food production and crafting.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                However, depth matters. Rooms at only 1-2 tiles depth still experience minor surface temperature influence, especially near the entrance corridor. Rooms at 3-4 tiles depth are essentially temperature-immune. The entrance corridor itself acts as a thermal buffer — the outside air temperature bleeds about 5-8 tiles into your base before reaching equilibrium with the underground temperature. Plan your entrance corridor to be at least 8 tiles long, and place your food stockpile at the far end of the corridor where the temperature is most stable.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Growing Food Underground</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Crops cannot grow underground without soil — you cannot simply dump dirt on stone floors. The solution is to dig sunken greenhouse pits: mine a 6x6 room at -1 elevation directly below a matching 6x6 hole in the surface, creating an open-air atrium into your underground base. Fill the atrium floor with soil tiles, and your settlers can plant crops that receive direct sunlight. For winter growing, roof the atrium with windows (if available through research) or keep it as an open pit with braziers below to prevent freezing.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                A more advanced technique for late-game underground colonies is the mushroom farm. Once you unlock the appropriate technology, mushroom beds can be cultivated in dark, damp underground rooms with no sunlight whatsoever, producing a reliable food source year-round. A 4x4 mushroom farm room feeds 2 settlers indefinitely. Pair mushroom farms with underground heating (braziers) to maintain the 10-20&deg;C temperature range that mushrooms prefer, and keep the room sealed to maintain high humidity levels.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Lighting to Prevent Mood Debuffs</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Darkness is the primary mood killer in underground bases. Settlers working, sleeping, or eating in dark rooms accumulate a stacking darkness mood penalty that can drive a well-fed, well-rested colonist into a mental break within days. Every underground room must have at least one light source: torches are the early-game standard, consuming wood fuel; lanterns (research unlock) burn longer and produce more light without consuming fuel; and braziers provide both light and heat for larger rooms like great halls.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                Lighting placement matters. A single torch illuminates a radius of about 3 tiles effectively, so a 6x6 bedroom needs at least 2 torches on opposite walls for full coverage. Workshops where settlers spend long hours should have a torch every 4 tiles. For corridors, space torches every 6-8 tiles along one wall. Priority lighting zones: great hall (brazier + 4 torches minimum), kitchen (2 torches near the stove), hospital (torch per bed), and all bedrooms. Hallways can be lit more sparsely since settlers pass through quickly.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
              <div className="faq-item">
                <details>
                  <summary>How deep should I dig for maximum temperature stability?</summary>
                  <p>Three layers below the surface provides optimal thermal stability (8-12&deg;C year-round). Two layers gives moderate stability; one layer is barely better than a surface structure. Beyond four layers deep adds no additional thermal benefit and increases mining labor.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>Do underground bases need defense against raids?</summary>
                  <p>Yes. While underground bases are safer than surface compounds, raiders can and will dig through your stone walls if given enough time. Always maintain a reinforced entrance corridor with traps and embrasures. Raiders prioritize the entrance over breaking walls — use this to your advantage.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>Can settlers get cabin fever from living underground?</summary>
                  <p>The game tracks time spent without sunlight. Settlers who never go above ground accumulate mood penalties over time. Schedule surface work rotations (hunting, foraging, farming) for underground settlers, or create open-air atrium rooms where settlers can briefly access sunlight.</p>
                </details>
              </div>
            </section>
          </div>

          <aside className="lg:w-[35%] space-y-8 shrink-0">
            <div className="field-sidebar-block">
              <h3 className="font-display text-lg font-semibold text-ink mb-4">Light Source Quick Ref</h3>
              <div className="space-y-3">
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Torch</h4><p className="font-serif text-xs text-ink-muted mt-1">Wood x1 | Radius 3 | Consumes fuel</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Brazier</h4><p className="font-serif text-xs text-ink-muted mt-1">Iron x3, Wood x2 | Radius 5 | Light + Heat</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Lantern</h4><p className="font-serif text-xs text-ink-muted mt-1">Iron x2, Glass x1 | Radius 4 | No fuel</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Candle</h4><p className="font-serif text-xs text-ink-muted mt-1">Tallow x1 | Radius 2 | Decorative</p></div>
              </div>
            </div>
            <div className="journal-card p-5">
              <h3 className="font-display text-base font-semibold text-ink mb-3">Underground Priority Order</h3>
              <ol className="space-y-2 font-serif text-sm text-ink-light">
                <li>1. Mine entrance corridor (4 wide, 8+ long)</li>
                <li>2. Excavate stockpile room (deep end, food first)</li>
                <li>3. Carve bedrooms (6x6 per room, 2 torches)</li>
                <li>4. Great hall with pillars + brazier</li>
                <li>5. Ventilation shaft to surface</li>
                <li>6. Kitchen adjacent to stockpile</li>
                <li>7. Workshop wing + hospital</li>
              </ol>
            </div>
          </aside>
        </div>
      </main>
  );
}
