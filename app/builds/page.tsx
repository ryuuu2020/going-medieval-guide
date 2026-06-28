export const metadata = {
  title: "Going Medieval Best Builds — Defense & Colony Layouts (2026)",
  description:
    "Best builds and defense layouts for Going Medieval. Proven colony designs, killbox variations, and specialization strategies.",
};


export default function BuildsPage() {
  return (
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-10">
            <section>
              <h1 className="chapter-heading">Best Builds &amp; Defense Layouts</h1>
              <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
                In Going Medieval, the layout of your walls, rooms, and production zones determines whether your colony thrives for decades or collapses at the first raid. This guide covers the most effective defense designs — from the meta-defining kill-box to budget-friendly early-game towers — alongside proven room templates for happiness, food storage, and workshop efficiency, plus colony-scale layouts that shape your entire settlement strategy. Every dimension and settler count below is drawn from hundreds of hours of community testing; use it to build smarter, not harder.
              </p>
            </section>

            {/* ═══════════════ 1. Kill-Box Design ═══════════════ */}
            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">1. Defense Layout: Kill-Box Design (S-Tier)</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                The kill-box is the undisputed king of defense in Going Medieval. When built correctly, a single kill-box can defeat raids of 15+ enemies with as few as 6 settlers manning the walls, and it works against every raid type the game throws at you — scattered bandits, organized war parties, and even late-game sieges. The principle is brutally simple: force every enemy through a narrow, trapped corridor, then into an open kill zone where your archers have clear shots from three sides behind merlon cover.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                <strong className="text-ink">Construction dimensions:</strong> Start with a 3-tile-wide entrance at the outermost edge of your perimeter wall. Narrow this immediately into a 2-tile-wide corridor that runs 10 to 14 tiles straight toward your base. The corridor walls must be at least 2 levels high and built from stone — wood walls here will be destroyed before the kill zone even activates. Line the entire corridor floor with wooden spike traps spaced one per tile; raiders walking single-file will trigger every single trap on the approach, arriving at the kill zone already at half health or worse. At the corridor's exit, the space opens into a 12-by-8-tile kill zone enclosed by walls on three sides. Build merlons (the crenellated wall sections that provide cover) along all three interior walls, leaving firing slits for your archers.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                <strong className="text-ink">Settler positioning for 6 defenders:</strong> Station 4 settlers with bows or crossbows on the merlon walls surrounding the kill zone — two on the far wall facing the corridor exit, one on each side wall to create crossfire. The remaining 2 settlers hold melee weapons (spears or swords with shields) just inside the corridor exit, standing 2 tiles back from the opening. Their job is to body-block any raider who survives the corridor traps and the first volley of arrows. With this setup, a raid of 8-10 enemies can be eliminated without a single settler taking damage. Against larger late-game raids of 15-20, supplement with an additional 4 archers on a second elevated platform built 2 levels above the kill zone floor — the height advantage bonus stacks with cover bonuses for devastating accuracy.
              </p>
              <div className="aged-border p-5" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                <p className="font-serif text-sm text-ink leading-relaxed">
                  <strong className="text-vermillion">&#9888; Kill-Box Golden Rule:</strong>
                  Never build your kill-box directly against your main base wall. Leave at minimum a 6-tile buffer zone between the kill zone and your inner buildings. If the kill-box is overrun, this buffer gives you time to reposition settlers to fallback positions. Also, ensure the corridor has a door at the entrance that you can forbid during non-raid times so settlers don't path through the trapped corridor and trigger their own defenses.
                </p>
              </div>
            </section>

            {/* ═══════════════ 2. Moat Fortress ═══════════════ */}
            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">2. Defense Layout: Moat Fortress (A-Tier)</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                The moat fortress trades the kill-box's mathematical efficiency for raw physical obstruction. By digging a deep trench around your entire settlement and bridging the gap with a retractable drawbridge, you create a barrier that stops enemies before they ever touch your walls. This design excels on flat terrain where natural choke points are scarce, and it scales exceptionally well — a properly dug moat protects your colony from raids of any size with zero maintenance cost beyond the initial dig and build.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                <strong className="text-ink">Moat specifications:</strong> Dig the moat 3 tiles deep and 4 tiles wide as a minimum. At 3 tiles deep, raiders cannot climb out once they fall in — they'll wander helplessly in the trench while your archers pick them off from above. Excavate the moat so it encircles your entire base, leaving a single 3-tile-wide land bridge on one side where your main gate sits. The moat walls should be lined with stone blocks on both sides to prevent collapse; soil walls erode over time and may create ramps enemies can exploit. For maximum effectiveness, dig the moat out to 5 tiles wide — this puts melee enemies completely out of reach of your walls while still keeping them in bow range.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                <strong className="text-ink">Drawbridge mechanics:</strong> Build a drawbridge spanning the 4-tile moat gap at your main gate. The drawbridge connects to a mechanism inside your walls that a settler must activate — assign one settler with high Mechanical skill as your dedicated gate operator. When a raid alert sounds, this settler's first job is to pull the lever and raise the drawbridge. Gravity mechanics apply: a raised drawbridge counts as a wall segment enemies cannot path over. Your walls behind the moat should be a minimum of 2 levels high, with merlons along the top for archer positions.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                <strong className="text-ink">Fallback plan:</strong> Even the best moat can be breached by persistent trebuchet raids. Build an inner keep — a 6x6 reinforced stone room at the center of your colony with a steel door, emergency food stockpile, and medical beds. If the outer walls fall, all settlers retreat to the keep where the single entrance can be held by 2 melee fighters indefinitely while your wounded recover. This secondary layer is what pushes the moat fortress from B-tier to A-tier.
              </p>
            </section>

            {/* ═══════════════ 3. Twin Tower Gate ═══════════════ */}
            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">3. Defense Layout: Twin Tower Gate (B-Tier)</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                For the first two years of your colony, you won't have the settler count or stone reserves of a full kill-box or moat. The twin tower gate is your answer — a compact, resource-light defensive structure that can be assembled with 3 settlers in roughly 2 days using only wood and basic stone. It provides effective defense against the 2-5 bandit raids common in the early game, and it serves as the foundation you'll later upgrade into more complex systems.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                <strong className="text-ink">Construction:</strong> Build two 3x3 towers flanking a 2-tile-wide reinforced gate. Each tower should be 2 levels high minimum, with a third level added as your settler count grows. On the second level of each tower, build merlons facing outward and cut firing slits in the wall sections facing the gate approach. Station 1-2 archers per tower — the elevated position gives them a natural accuracy bonus, and the cover from merlons reduces incoming damage by approximately 40-60%. The gate itself should be a reinforced wooden gate (not a basic door) flanked by 2 wooden spike traps on the outside approach path.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                <strong className="text-ink">Upgrade path:</strong> The twin towers are designed to evolve. Once you unlock stonecutting, replace the wood walls with limestone — this triples their durability from 150 to 500 per wall segment. When your colony reaches 8+ settlers, extend the towers outward by 2 tiles on each side and add a roofed bridge connecting them at the third level, creating a gatehouse. The gatehouse bridge lets archers reposition between towers without descending to ground level, and it provides overhead cover for melee fighters stationed at the gate. This upgraded gatehouse form transitions smoothly into a full kill-box once you excavate the approach corridor in front of the gate.
              </p>
            </section>

            {/* ═══════════════ 4. Great Hall ═══════════════ */}
            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">4. Room Template: Great Hall (Happiness Hub)</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Settler mood is the invisible resource that determines whether your colony hums with productivity or grinds to a halt under mental breaks. The Great Hall is the single most efficient happiness investment you can make — it combines dining, recreation, and social gathering into one room that stacks multiple mood bonuses simultaneously. A well-built Great Hall can swing a settler's mood from -15 to +25, which is often the difference between a colonist going berserk during a raid or calmly picking off enemies from the walls.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                <strong className="text-ink">Optimal dimensions:</strong> 9 tiles wide by 7 tiles deep (interior dimensions, excluding walls). This 63-tile footprint is the sweet spot — large enough to trigger the "Spacious Interior" mood bonus without becoming wasteful to heat or decorate. Build with stone walls for superior insulation, add a wooden floor for the "Impressive Room" bonus, and install a roof with at least 2 levels of clearance for the "High Ceiling" aesthetic bonus. For an 8-settler colony, this Great Hall accommodates everyone comfortably for meals and downtime.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                <strong className="text-ink">Contents and bonus stacking:</strong> Place a 3-tile-long banquet table in the center of the room, surrounded by 8 chairs — one per settler. Mount 4 wall torches evenly spaced along the longer walls to eliminate darkness penalties. Hang 2 decorative banners on the shorter end walls. The mood bonuses stack as follows: "Ate in Impressive Dining Room" (+5 to +8 depending on room quality), "Impressive Recreation Room" (+4 to +6), "Spacious Interior" (+3), and "Well-Lit" (+2). Together with a cooked meal from a skilled chef, a settler eating dinner in a properly outfitted Great Hall can gain +20 mood in a single evening. Add a small statue or rug once your artisan skills unlock for an additional +2 "Beautiful Environment" bonus.
              </p>
            </section>

            {/* ═══════════════ 5. Underground Food Storage ═══════════════ */}
            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">5. Room Template: Underground Food Storage</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Food spoilage is the silent colony killer. You can have a bumper harvest of 500 cabbages, and six days later find nothing but rot because your stockpile was sitting at surface temperature. Going Medieval uses a realistic temperature model where underground spaces maintain a constant cool temperature regardless of the season — and exploiting this mechanic is the key to year-round food security.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                <strong className="text-ink">Location and depth:</strong> Dig your food storage at -2 levels below the surface, where the ambient temperature stabilizes at approximately 5 degrees Celsius (41 Fahrenheit). At this temperature, raw vegetables last roughly 3x longer than at surface temperature, raw meat lasts 2.5x longer, and cooked meals that would spoil in 24 hours at room temperature stay fresh for 4-5 days. At -3 levels, the temperature drops to approximately 2 degrees Celsius, adding roughly 15% more preservation time — but the extra labor of hauling food up an additional staircase level often outweighs the marginal gain for colonies smaller than 10 settlers.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                <strong className="text-ink">Storage layout:</strong> Excavate a 6x6 room. Line all four walls with wooden shelves — each shelf holds 50% more items per tile compared to raw floor storage, effectively turning your 36-tile room into 54 tiles of storage capacity. Place 2 wall torches for visibility (torches produce negligible heat that won't affect preservation), but never build a campfire or stove inside the storage room — the heat spike will ruin the temperature advantage. The stockpile zone should be configured to only accept raw food, meals, and animal feed; keep raw materials like wood and stone in a separate stockpile to prevent clutter. Install a wooden door (not a gate) and forbid animals from entering to prevent them from eating your stores.
              </p>
            </section>

            {/* ═══════════════ 6. Efficient Workshop ═══════════════ */}
            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">6. Room Template: Efficient Workshop Layout</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                A settler's productivity isn't just about skill level — it's about how many tiles they walk between picking up materials and reaching their workstation. Every tile of walking is time not spent crafting, and across a 10-settler colony working a full day, inefficient workshop layouts can cost you dozens of lost production hours per season. The goal is to minimize settler path lengths between raw material stockpiles, production stations, and finished goods storage.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                <strong className="text-ink">Hub-and-spoke layout:</strong> Start with a central 4x4 raw materials stockpile containing wood, stone blocks, iron ingots, and leather — the four most-used crafting materials. This central stockpile acts as the hub. Around it, place your production stations in a ring, each facing the hub with zero tiles between the station's interaction tile and the stockpile edge. A typical 8-settler workshop ring includes: smithy (east), tailoring bench (south), carpentry bench (west), and research table (north). Each station should be within 2 tiles of the central stockpile so the settler can grab materials in one or two steps.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                <strong className="text-ink">Finished goods stockpile:</strong> Place a 3x3 finished goods stockpile directly adjacent to each workstation on the side opposite the raw materials hub. When a settler finishes crafting, they deposit the completed item into this nearby stockpile with minimal movement. Configure priority settings so haulers move finished goods to your main storage or armory at lower priority — this keeps the workflow uninterrupted. For colonies with 12+ settlers, duplicate this hub-and-spoke layout on a second floor connected by stairs, with one floor dedicated to heavy industry (smithy, stonecutting) and the other to light crafting (tailoring, carpentry, research).
              </p>
            </section>

            {/* ═══════════════ 7. Mountain Base ═══════════════ */}
            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">7. Colony Layout: Mountain Base</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Carving your colony directly into a mountain is one of the most popular long-term strategies in Going Medieval, and for good reason. A mountain base provides natural insulation year-round, unlimited building stone from excavation, and walls that raiders physically cannot break through — granite and limestone mountain faces are indestructible. Late-game colonies built inside mountains can survive sieges that would flatten above-ground settlements in minutes. However, mountain living comes with three critical challenges you must solve during the design phase.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                <strong className="text-ink">Challenge 1 — Food production:</strong> You cannot grow crops on natural stone floors. You must excavate farming chambers with soil floors, which means finding underground soil deposits or hauling soil from the surface. The most reliable approach is to dig a 10x10 farming chamber on each of your first three underground levels, fill each with soil, and install wall torches every 3 tiles along the perimeter. Underground crops grow at roughly 80% of surface speed due to reduced light, so allocate approximately 20% more farm tiles than you would above ground. Crops that perform best underground include cabbages (cold-tolerant, fast-growing), beets (winter-hardy), and barley (for brewing — settlers value alcohol for mood).
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                <strong className="text-ink">Challenge 2 — Ventilation:</strong> Without airflow, your underground rooms accumulate "Stuffy Air" debuffs that penalize settler mood and work speed. Build ventilation chimneys — 1x1 shafts running from each major room straight up to the surface, capped with a grate to prevent enemy entry. Each chimney effectively ventilates a 6x6 room; larger rooms need 2 chimneys at opposite corners. Connect corridors between rooms with open doorways (not doors) to encourage airflow.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                <strong className="text-ink">Challenge 3 — Darkness and mood:</strong> Settlers living entirely underground suffer cumulative "Darkness" mood penalties. Combat this aggressively: place wall torches every 3-4 tiles in all corridors, every 2 tiles in bedrooms and workshops, and build at least one "sun well" — a 3x3 shaft from the surface lined with windows at each underground level — to let natural light filter down. A settler who spends their entire day in fully lit underground spaces experiences zero darkness penalties; the debuff only triggers when a settler works or sleeps in a tile with light level below 50%.
              </p>
            </section>

            {/* ═══════════════ 8. Hill Fort ═══════════════ */}
            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">8. Colony Layout: Hill Fort</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                If the mountain base is a turtle strategy, the hill fort is a hawk — perched on elevated terrain, commanding sightlines in every direction, and using gravity itself as a defensive multiplier. Hill forts are particularly effective on maps with a prominent plateau or steep hillside where enemies are forced to approach from a single direction. This layout combines above-ground farming convenience with the defensive advantages of height, and it requires far less excavation labor than a full mountain base.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                <strong className="text-ink">Plateau construction:</strong> Flatten the top of the hill into a buildable platform using the Mine tool — aim for a minimum 15x15 flat area to accommodate your core buildings. Construct your main hall, kitchen, barracks, and storage on this plateau. Surround the plateau edge with a 2-level-high stone wall with merlons, leaving a single 3-tile-wide gate on the side facing the gentlest approach slope. The wall's elevated position means enemies must climb to reach it, which slows their movement and gives your archers more firing time. This natural slow-down effect is equivalent to adding 2-3 extra spike traps in front of every wall section.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                <strong className="text-ink">Terraced farming below:</strong> Carve step-like terraces into the hillside below the fort, each 4-6 tiles wide and running the length of the hill. Plant crops on each terrace — the stepped layout means each terrace receives good sunlight while being protected from wind by the terrace above. Build a staircase connecting each terrace level to the plateau for settler access. This design lets you maintain substantial farmland (30-50 crop tiles) without expanding your defensive perimeter, since all farming sits within the protective shadow of the hilltop walls.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                <strong className="text-ink">Ideal terrain and settler count:</strong> Hill forts work best with 4-8 settlers on Mountain or Hillside map seeds. The compact layout means shorter settler travel times compared to sprawling plains bases, and the natural elevation provides defense without the heavy trap investment of a kill-box. For late-game expansion, tunnel into the hill below the plateau to add underground storage and production rooms — this hybrid approach combines the hill fort's surface farming convenience with the mountain base's secure storage, making it one of the most versatile colony layouts in the game.
              </p>
            </section>

            {/* ═══════════════ FAQ ═══════════════ */}
            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
              <div className="faq-snippets">
                <details>
                  <summary>Should I build a kill-box or a moat first?</summary>
                  <p>For your first year, start with the Twin Tower Gate and a basic perimeter wall. Moats require immense digging labor — even with 4 settlers dedicated to mining, a full perimeter moat takes 8-12 in-game days to excavate. Kill-boxes need stone walls and traps that may strain your early resources. Build the towers around day 10, expand to a moat by winter of year 1 if you have 6+ settlers, and convert to a kill-box in year 2 once your stone production is established.</p>
                </details>
              </div>
              <div className="faq-snippets">
                <details>
                  <summary>How many archers do I need for each defense layout?</summary>
                  <p>Kill-box: 4 archers minimum, 8 optimal. Moat fortress: 3-4 archers on walls, plus 2 melee at the gate. Twin tower gate: 2 archers (one per tower). Always assign your highest Marksman-skill settlers to archer duty — Marksman affects both accuracy and damage, making a skill-15 archer roughly 3x more effective than a skill-5 one.</p>
                </details>
              </div>
              <div className="faq-snippets">
                <details>
                  <summary>Can I combine multiple defense layouts?</summary>
                  <p>Absolutely — layered defense is the meta for colonies with 10+ settlers. The optimal late-game setup is: outermost layer = moat with drawbridge, middle layer = kill-box at the main gate, innermost layer = a keep with reinforced walls around your Great Hall and food storage. Each layer buys time for the next, and no single breach collapses your entire defense.</p>
                </details>
              </div>
              <div className="faq-snippets">
                <details>
                  <summary>What's the best room size for settler bedrooms?</summary>
                  <p>Individual bedrooms should be 4x4 minimum (16 tiles interior). At 4x4, a bed, small table, chair, and torch fit comfortably and trigger the "Spacious Bedroom" mood bonus (+3). Going larger than 5x5 provides diminishing returns on mood and wastes valuable space. If you're housing 2 settlers per room temporarily, use 5x5 with two beds on opposite walls.</p>
                </details>
              </div>
            </section>
          </div>

          {/* ═══════════════ Sidebar ═══════════════ */}
          <aside className="lg:w-[35%] space-y-8 shrink-0">
            <div className="field-sidebar-block">
              <h3 className="font-display text-lg font-semibold text-ink mb-4">Layout Quick Ref</h3>
              <div className="space-y-3">
                <div className="recipe-card">
                  <h4 className="font-display text-sm font-semibold text-ink">Kill-Box</h4>
                  <p className="font-serif text-xs text-ink-muted mt-1">Corridor 10-14 tiles | Kill zone 12x8 | 4-8 archers</p>
                </div>
                <div className="recipe-card">
                  <h4 className="font-display text-sm font-semibold text-ink">Moat Fortress</h4>
                  <p className="font-serif text-xs text-ink-muted mt-1">Moat 3 tiles deep x 4 wide | Drawbridge + walls 2 levels</p>
                </div>
                <div className="recipe-card">
                  <h4 className="font-display text-sm font-semibold text-ink">Twin Tower Gate</h4>
                  <p className="font-serif text-xs text-ink-muted mt-1">2x 3x3 towers, 2 levels | Wood walls | 2 archers</p>
                </div>
                <div className="recipe-card">
                  <h4 className="font-display text-sm font-semibold text-ink">Great Hall</h4>
                  <p className="font-serif text-xs text-ink-muted mt-1">9x7 interior | Table + 8 chairs + 4 torches</p>
                </div>
                <div className="recipe-card">
                  <h4 className="font-display text-sm font-semibold text-ink">Food Storage</h4>
                  <p className="font-serif text-xs text-ink-muted mt-1">6x6 at -2 levels | Shelves + torches | ~5°C constant</p>
                </div>
                <div className="recipe-card">
                  <h4 className="font-display text-sm font-semibold text-ink">Workshop</h4>
                  <p className="font-serif text-xs text-ink-muted mt-1">Hub 4x4 stockpile | 4 stations ring | &lt;2 tile pathing</p>
                </div>
                <div className="recipe-card">
                  <h4 className="font-display text-sm font-semibold text-ink">Mountain Base</h4>
                  <p className="font-serif text-xs text-ink-muted mt-1">10x10 farm chambers | Chimneys + torches every 3 tiles</p>
                </div>
                <div className="recipe-card">
                  <h4 className="font-display text-sm font-semibold text-ink">Hill Fort</h4>
                  <p className="font-serif text-xs text-ink-muted mt-1">15x15 plateau | Terraced farms | 4-8 settlers</p>
                </div>
              </div>
            </div>

            <div className="journal-card p-5">
              <h3 className="font-display text-base font-semibold text-ink mb-3">Build Priority by Game Stage</h3>
              <ol className="space-y-2 font-serif text-sm text-ink-light">
                <li><strong className="text-ink">Day 1-3:</strong> Twin Tower Gate + basic perimeter wall</li>
                <li><strong className="text-ink">Day 4-7:</strong> Great Hall (9x7) + underground food storage (-2 level, 6x6)</li>
                <li><strong className="text-ink">Day 8-14:</strong> Workshop hub with central stockpile</li>
                <li><strong className="text-ink">Week 3-4:</strong> Upgrade towers to stone, begin moat excavation</li>
                <li><strong className="text-ink">Month 2-3:</strong> Convert main gate to kill-box corridor</li>
                <li><strong className="text-ink">Month 4+:</strong> Inner keep, layered defenses, ventilation for underground</li>
              </ol>
            </div>

            <div className="journal-card p-5">
              <h3 className="font-display text-base font-semibold text-ink mb-3">Defense Tiers at a Glance</h3>
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Tier</th>
                    <th>Layout</th>
                    <th>Min Settlers</th>
                    <th>Best Game Stage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><span style={{ display: 'inline-block', width: '1.5rem', height: '1.5rem', lineHeight: '1.5rem', textAlign: 'center', fontWeight: 700, borderRadius: '3px', fontSize: '0.7rem', backgroundColor: '#b8860b', color: '#fff', boxShadow: '0 0 4px rgba(184,134,11,0.3)' }}>S</span></td>
                    <td>Kill-Box</td>
                    <td>6</td>
                    <td>Mid-Late</td>
                  </tr>
                  <tr>
                    <td><span style={{ display: 'inline-block', width: '1.5rem', height: '1.5rem', lineHeight: '1.5rem', textAlign: 'center', fontWeight: 700, borderRadius: '3px', fontSize: '0.7rem', backgroundColor: '#7f8c8d', color: '#fff' }}>A</span></td>
                    <td>Moat Fortress</td>
                    <td>5</td>
                    <td>Mid-Late</td>
                  </tr>
                  <tr>
                    <td><span style={{ display: 'inline-block', width: '1.5rem', height: '1.5rem', lineHeight: '1.5rem', textAlign: 'center', fontWeight: 700, borderRadius: '3px', fontSize: '0.7rem', backgroundColor: '#cd7f32', color: '#fff' }}>B</span></td>
                    <td>Twin Tower Gate</td>
                    <td>3</td>
                    <td>Early</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </aside>
        </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={ __html: `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Should I build a kill-box or a moat first?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For your first year, start with the Twin Tower Gate and a basic perimeter wall. Moats require immense digging labor — even with 4 settlers dedicated to mining, a full perimeter moat takes 8-12 in-game days to excavate. Kill-boxes need stone walls and traps that may strain your early resources. Build the towers around day 10, expand to a moat by winter of year 1 if you have 6+ settlers, and convert to a kill-box in year 2 once your stone production is established."
      }
    },
    {
      "@type": "Question",
      "name": "How many archers do I need for each defense layout?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kill-box: 4 archers minimum, 8 optimal. Moat fortress: 3-4 archers on walls, plus 2 melee at the gate. Twin tower gate: 2 archers (one per tower). Always assign your highest Marksman-skill settlers to archer duty — Marksman affects both accuracy and damage, making a skill-15 archer roughly 3x more effective than a skill-5 one."
      }
    },
    {
      "@type": "Question",
      "name": "Can I combine multiple defense layouts?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely — layered defense is the meta for colonies with 10+ settlers. The optimal late-game setup is: outermost layer = moat with drawbridge, middle layer = kill-box at the main gate, innermost layer = a keep with reinforced walls around your Great Hall and food storage. Each layer buys time for the next, and no single breach collapses your entire defense."
      }
    },
    {
      "@type": "Question",
      "name": "What's the best room size for settler bedrooms?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Individual bedrooms should be 4x4 minimum (16 tiles interior). At 4x4, a bed, small table, chair, and torch fit comfortably and trigger the \"Spacious Bedroom\" mood bonus (+3). Going larger than 5x5 provides diminishing returns on mood and wastes valuable space. If you're housing 2 settlers per room temporarily, use 5x5 with two beds on opposite walls."
      }
    }
  ]
}` } />
      </main>
  );
}
