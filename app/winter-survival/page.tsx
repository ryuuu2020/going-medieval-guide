'use client';

import { SiteHeader, SiteFooter } from '@/components/SiteHeader';

export default function WinterSurvivalPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-parchment)' }}>
      <SiteHeader currentPage="Farming" />
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-10">
            <section>
              <h1 className="chapter-heading">Winter Survival Guide</h1>
              <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
                Winter in Going Medieval is the ultimate test of your colony's preparation and resource management. Crops stop growing, surface water freezes, temperatures plummet, and settler mood takes a relentless hit from cold and confinement. A colony that breezes through summer can collapse within the first two weeks of winter if it hasn't stockpiled properly. This guide covers food stockpiling targets, heating system design, cold-weather clothing strategies, frozen soil solutions, and settler mood management through the dark months. Data below is based on community testing and is for reference only.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Food Stockpiling Targets</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Food stops growing the moment winter arrives—what you have stockpiled is all you'll have until spring thaw. The most common cause of winter colony death is running out of food. Calculating adequate stockpile targets based on your settler count is the most important pre-winter calculation you'll make.
              </p>
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Settler Count</th>
                    <th>Food/Day (Raw)</th>
                    <th>Food/Day (Processed)</th>
                    <th>Winter Stockpile (90 Days)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>3 settlers</td><td>6 units/day</td><td>4 units/day</td><td>360-540 units</td></tr>
                  <tr><td>5 settlers</td><td>10 units/day</td><td>7 units/day</td><td>630-900 units</td></tr>
                  <tr><td>8 settlers</td><td>16 units/day</td><td>11 units/day</td><td>990-1,440 units</td></tr>
                  <tr><td>10+ settlers</td><td>20+ units/day</td><td>14+ units/day</td><td>1,260-1,800+ units</td></tr>
                </tbody>
              </table>
              <p className="font-serif text-sm text-ink-muted italic">Data source: Community testing estimates. Winter typically lasts 30-90 days depending on biome.</p>
              <p className="font-serif text-base text-ink-light leading-relaxed mt-4">
                Strategy: Always stockpile ~30% more than the calculated minimum. Spoilage, unexpected settler additions, and extended winters can all drain reserves faster than planned. Processed food (pickled food, smoked meat) spoils slower — invest in food processing facilities before winter as a stockpile multiplier. Store winter food in underground cellars where temperatures stay low year-round, dramatically reducing spoilage.
              </p>
              <div className="aged-border p-5 mt-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                <p className="font-serif text-sm text-ink leading-relaxed">
                  <strong className="text-vermillion">&#9888; Winter Food Crisis:</strong>
                  If food runs out mid-winter, options are limited: 1) Slaughter livestock immediately, 2) Hunt any available wild animals (rats, hares, water voles near the surface — low yield but better than nothing), 3) Buy food from winter merchant caravans (expensive, unreliable), 4) Emergency rationing — reduce food consumption but expect mood penalties.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Heating Systems & Temperature Control</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Winter temperatures in Going Medieval can drop to -20&deg;C or lower, especially in northern biomes. Settlers without adequate heating suffer hypothermia, frostbite, and severe mood penalties. Building an effective heating system requires understanding heat sources, insulation values, and room temperature mechanics.
              </p>
              <div className="space-y-3">
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Heat Sources</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">Campfire (wood fuel, heats ~15 tile radius, +10&deg;C). Brazier (coal fuel, heats ~10 tile radius, +12&deg;C, requires research). Fireplace (wood/coal, heats ~20 tile radius, +15&deg;C, requires stone construction). Place heat sources centrally in rooms—heat radiates in a circular pattern and diminishes with distance. One fireplace can heat a 5x5 room to comfortable levels.</p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Insulation & Room Design</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">Wall material directly affects insulation: stone walls (high insulation) retain heat far better than wood (low). Doors lose heat every time they open—build airlocks (two doors with a 1-tile gap) at external entrances. Smaller rooms are easier to heat—design winter living quarters as compact 3x3 or 4x4 units rather than sprawling halls. Underground rooms stay naturally warmer (5-10&deg;C) regardless of heating.</p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Fuel Stockpile for Winter</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">Each heating source consumes fuel continuously while lit. A fireplace consumes roughly 8-10 wood per day. Multiply by your number of heat sources and winter days: 3 fireplaces × 70 winter days × 8 wood/day = 1,680 wood minimum. Stockpile fuel alongside food—running out of firewood mid-winter is nearly as deadly as running out of food.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Cold-Weather Clothing</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Clothing is your settlers' personal insulation layer. Without appropriate winter clothing, settlers suffer cold penalties even inside heated rooms. Equipping every settler with cold-weather gear before the first snow is a non-negotiable winter preparation step.
              </p>
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Clothing Item</th>
                    <th>Cold Protection</th>
                    <th>Materials</th>
                    <th>Production Priority</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Wool Tunic</td><td>+15&deg;C tolerance</td><td>Wool x3 (from sheep)</td><td>High—best cost-effective option</td></tr>
                  <tr><td>Leather Coat</td><td>+12&deg;C tolerance</td><td>Leather x4</td><td>Medium—good alternative</td></tr>
                  <tr><td>Fur Hat</td><td>+8&deg;C tolerance</td><td>Fur x2, Leather x1</td><td>Medium—head protection</td></tr>
                  <tr><td>Winter Cloak</td><td>+20&deg;C tolerance</td><td>Wool x3, Fur x2, Leather x2</td><td>Best overall—craft last</td></tr>
                </tbody>
              </table>
              <p className="font-serif text-sm text-ink-muted italic">Data source: Community testing estimates</p>
              <p className="font-serif text-base text-ink-light leading-relaxed mt-4">
                Clothing strategy: Prioritize wool tunics for all settlers—they offer the best protection-to-material cost ratio. Fur hats are next, as head coverage provides disproportionate warmth. Winter cloaks are the ultimate cold-weather item but require significant material investment. Craft clothing during summer when leather and wool are abundant from animal husbandry. Every settler should have their winter clothing equipped by the final month of autumn.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Frozen Soil Solutions</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                When the ground freezes, all outdoor farming becomes impossible—frozen soil cannot be tilled, planted, or harvested. However, there are ways to maintain some food production through winter using specific techniques that bypass the frozen ground limitation.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                Underground farming: Dig a growing room 2-3 levels underground where soil doesn't freeze. The natural geothermal temperature at depth stays above freezing year-round. Build torches or braziers for light (crops need light to grow), and your underground farm operates through winter. This requires significant excavation work—plan and dig the underground farm during summer. Alternative: Build a greenhouse—an enclosed, heated room with soil floors. Build walls and a roof around a soil patch, add a heating source, and the enclosed space stays warm enough for limited winter growing. Greenhouses are smaller-scale but require less digging investment. Animal hunting remains viable in winter—animals still spawn on the surface, providing supplementary meat. However, hunting efficiency drops as animals become scarcer.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Settler Mood During Winter</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Winter is a mood pressure cooker. Cold temperatures, cabin fever from being stuck indoors, reduced food variety, and seasonal affective penalties stack up to create the lowest settler mood of the year. Managing winter mood is as important as managing winter resources—a colony with full food stores can still collapse from settler breakdowns.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                Counter-measures: Schedule extra recreation time during winter—increase daily recreation from 2 hours to 3 hours to offset the confinement penalty. Brew beer during autumn specifically for winter consumption—alcohol provides a powerful mood buff (+8) that counters winter penalties. Decorate indoor spaces with rugs, tapestries, and art—settlers spend more time indoors during winter, so interior beauty matters more. Keep living quarters clean and well-heated. Consider scheduling a winter festival period where work hours are reduced and recreation is maximized for 2-3 days—this can boost mood enough to carry settlers through the worst weeks. The combination of alcohol, heated rooms, good food, and recreation can maintain settler mood above 50 even through the harshest winter.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
              <div className="faq-item">
                <details>
                  <summary>How long does winter last in Going Medieval?</summary>
                  <p>Winter duration varies by biome and game settings. <strong>Note: winter length estimates differ between community sources (some report ~12-15 days, others 30-90 days).</strong> Temperate biomes typically have shorter winters; colder biomes may have longer ones. Check your biome type when starting a new game — it is displayed during map selection and determines how aggressively you need to prepare.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>Can settlers die from cold even indoors?</summary>
                  <p>Yes. If indoor temperature drops below -5&deg;C, hypothermia risk begins regardless of being indoors. This is why heating sources are critical—walls alone insulate but don't generate heat. A room with stone walls and no heat source will eventually drop to outdoor temperature during prolonged cold snaps. Always have at least one lit heat source in every occupied building.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>What's the single most important winter preparation?</summary>
                  <p>Food stockpiling. You can survive without optimal heating (mood penalties are recoverable). You can survive with basic clothing (cold damage takes time). You cannot survive without food—starvation kills settlers within 3-5 days. If you only do one thing to prepare for winter, triple-check your food reserves. Everything else is secondary to having enough food.</p>
                </details>
              </div>
            </section>
          </div>

          <aside className="lg:w-[35%] space-y-8 shrink-0">
            <div className="field-sidebar-block">
              <h3 className="font-display text-lg font-semibold text-ink mb-4">Winter Prep Checklist</h3>
              <div className="space-y-3">
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">1. Food Stockpile</h4><p className="font-serif text-xs text-ink-muted mt-1">900+ units for 8 settlers, stored underground</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">2. Fuel Stockpile</h4><p className="font-serif text-xs text-ink-muted mt-1">1,500+ wood or coal for heating</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">3. Winter Clothing</h4><p className="font-serif text-xs text-ink-muted mt-1">Wool tunics + fur hats for all settlers</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">4. Heat Sources</h4><p className="font-serif text-xs text-ink-muted mt-1">Fireplaces in all occupied rooms</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">5. Underground Farm</h4><p className="font-serif text-xs text-ink-muted mt-1">Optional—dig during summer if possible</p></div>
              </div>
            </div>
            <div className="journal-card p-5">
              <h3 className="font-display text-base font-semibold text-ink mb-3">Underground Temperature Guide</h3>
              <div className="space-y-2 font-serif text-sm text-ink-light">
                <div className="flex justify-between"><span>Surface Level</span><span className="text-vermillion">-20 to +5&deg;C</span></div>
                <div className="flex justify-between"><span>Level -1</span><span className="text-ink-muted">0 to +8&deg;C</span></div>
                <div className="flex justify-between"><span>Level -2 to -3</span><span className="text-gold">+5 to +12&deg;C</span></div>
                <div className="flex justify-between"><span>Level -4+</span><span className="text-gold">+8 to +15&deg;C</span></div>
                <div className="mt-2">The deeper you build, the warmer and more stable the temperature. Underground bases are the ultimate winter survival strategy.</div>
              </div>
            </div>
          </aside>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
