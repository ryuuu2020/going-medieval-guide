
export default function StorageGuidePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-10">
          <section>
            <h1 className="chapter-heading">Storage & Stockpile Optimization Guide</h1>
            <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
              Efficient storage is the circulatory system of your colony. Well-designed stockpiles reduce hauling time, prevent spoilage, and ensure resources are available where they are needed. Poor storage design forces settlers to walk 50+ tiles per trip, wastes 30% of your food to decay, and creates production bottlenecks. This guide covers stockpile priority systems, shelf vs floor storage, temperature zone management, decay mechanics, and optimal stockpile layouts for every resource type. Data below is based on community testing and is for reference only.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Stockpile Priority System</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              The priority system controls where items are stored and in what order they are consumed. Each stockpile can be assigned a priority level (Low, Normal, Preferred, Important, Critical). Settlers will always move items to the highest-priority stockpile that accepts them. This system is the key to creating efficient material flow through your colony.
            </p>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Critical strategy: Use priority to create "pull" systems. Place a Critical-priority stockpile next to each workstation, set to accept only the inputs that workstation needs. Place a Normal-priority "bulk" stockpile in your main storage area. Result: settlers haul bulk resources to the main storage, then secondary haulers move items from bulk storage to workstation-side stockpiles. This ensures every workstation has materials within arm's reach while bulk storage remains organized.
            </p>
            <div className="space-y-3">
              <div className="journal-card p-4">
                <h4 className="font-display text-base font-semibold text-ink">Priority Example: Kitchen Flow</h4>
                <p className="font-serif text-sm text-ink-light mt-1">Kitchen stove has a Critical-priority 2x2 stockpile accepting only raw meat + vegetables. Cellar has a Normal-priority 6x6 stockpile accepting all food. Farmers deposit harvest in the cellar. A hauler moves food from cellar to kitchen stockpile. Cook grabs ingredients from the 2x2 stockpile at arm's reach — never walks to the cellar. Result: cooking time cut by 40%.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Shelf vs Floor Storage</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Wooden shelves (crafted at a carpenter's bench) provide a critical storage density advantage. A single shelf occupies 1 tile but provides storage equivalent to 3 floor tiles. Additionally, items on shelves have a slightly reduced decay rate (approximately 10% slower spoilage) compared to items on the floor. Shelving every stockpile tile effectively triples your storage capacity per room.
            </p>
            <table className="parchment-table">
              <thead>
                <tr>
                  <th>Storage Type</th>
                  <th>Capacity per Tile</th>
                  <th>Decay Modifier</th>
                  <th>Cost to Build</th>
                  <th>Best Use</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="font-semibold">Floor Stockpile</td><td>1x (baseline)</td><td>100% (normal)</td><td>Free (designate)</td><td>Bulk stone/wood, temporary overflow</td></tr>
                <tr><td className="font-semibold">Wooden Shelf</td><td>~3x capacity</td><td>~90% spoilage (slower)</td><td>~15 wood per shelf</td><td>Food, medicine, valuable items, long-term storage</td></tr>
                <tr><td className="font-semibold">Weapon Rack</td><td>~2x capacity</td><td>N/A</td><td>~20 wood per rack</td><td>Weapons and ammunition near defensive positions</td></tr>
                <tr><td className="font-semibold">Armor Stand</td><td>~2x capacity</td><td>N/A</td><td>~20 wood per stand</td><td>Armor storage near barracks or armory</td></tr>
              </tbody>
            </table>
            <div className="aged-border p-5 mt-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
              <p className="font-serif text-sm text-ink leading-relaxed">
                <strong className="text-vermillion">Shelf Strategy:</strong>
                A 6x6 underground room with shelves provides dramatically higher effective storage capacity than floor stockpile alone. Shelves reduce spoilage rates and increase storage density. Smaller rooms are easier to temperature-control and require less excavation labor. Always shelf your underground food cellars first, then expand shelving to other storage zones as wood supply allows. Exact capacity multipliers and spoilage rates are community estimates.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Temperature Zones for Storage</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Different resource types have different ideal storage temperatures. Segregating storage by temperature zone rather than putting everything in one cold room significantly improves organization and reduces unnecessary hauling. Place each stockpile zone at the optimal temperature for its contents.
            </p>
            <table className="parchment-table">
              <thead>
                <tr>
                  <th>Resource Type</th>
                  <th>Ideal Temperature</th>
                  <th>Recommended Location</th>
                  <th>Storage Type</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="font-semibold">Raw Food</td><td>~0-5°C</td><td>-2F Cellar</td><td>Wooden Shelves</td><td>Coldest zone — extends shelf life significantly</td></tr>
                <tr><td className="font-semibold">Preserved Food</td><td>~5-10°C</td><td>-1F Cellar</td><td>Wooden Shelves</td><td>Longer shelf life, can tolerate slightly warmer temps</td></tr>
                <tr><td className="font-semibold">Medicine & Herbs</td><td>~5-10°C</td><td>-1F Cellar</td><td>Wooden Shelves (dedicated)</td><td>Separate from food to prevent accidental consumption</td></tr>
                <tr><td className="font-semibold">Raw Stone/Ore</td><td>Any temperature</td><td>-1F or Surface</td><td>Floor Stockpile</td><td>No decay, temperature irrelevant. Store near mines/workstations.</td></tr>
                <tr><td className="font-semibold">Wood & Building Materials</td><td>Any temperature</td><td>Surface (covered)</td><td>Floor Stockpile</td><td>No decay but deteriorates in rain. Roof the stockpile area.</td></tr>
                <tr><td className="font-semibold">Weapons & Armor</td><td>Any temperature</td><td>Near defensive positions</td><td>Weapon Racks / Armor Stands</td><td>Speed matters more than temperature — put near gates.</td></tr>
                <tr><td className="font-semibold">Silver & Valuables</td><td>Any temperature</td><td>-1F Secured Room</td><td>Wooden Shelves</td><td>Lock the door — prevents theft during raids.</td></tr>
                <tr><td className="font-semibold">Raw Textiles (Flax, Wool)</td><td>Any temperature</td><td>Near Tailor Station</td><td>Floor Stockpile</td><td>Proximity to workstation &gt; storage conditions.</td></tr>
              </tbody>
            </table>
            <p className="font-serif text-sm text-ink-muted italic">Data source: Community testing estimates</p>
          </section>

          <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Decay Mechanics & Spoilage Optimization</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Decay affects all organic items (food, herbs, medicine, animal products, textiles). The decay rate is influenced by three factors: base item shelf life, temperature, and storage type (shelf vs floor). Cold temperatures (underground cellars) dramatically slow spoilage, while hot temperatures accelerate it.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                <strong className="text-vermillion">Note:</strong> The exact temperature multiplier values and decay formulas are not verified against official game data. Community testing suggests optimal cold storage (near-freezing underground temperatures) can extend food shelf life by roughly 3-4x compared to surface storage. Hot storage (summer temperatures) accelerates spoilage. Shelves appear to provide a modest spoilage reduction bonus compared to floor stockpiles. For reliable numbers, cross-reference with in-game behavior.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Optimal Stockpile Layout by Resource Type</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Every resource type has an optimal storage layout that minimizes settler walking distance while maximizing storage density. Follow these layouts for a well-organized, high-throughput colony.
            </p>
            <div className="space-y-3">
              <div className="journal-card p-4">
                <h4 className="font-display text-base font-semibold text-ink">Food Storage Hub (-2F, 8x8 room)</h4>
                <p className="font-serif text-sm text-ink-light mt-1">Central food cellar with wooden shelves on all 4 walls. Zone 1 (left wall): raw vegetables with Critical priority. Zone 2 (right wall): raw meat with Critical priority. Zone 3 (back wall): preserved foods (bread, pickles, smoked meat) with Preferred priority. Zone 4 (center floor): overflow for harvest season with Normal priority. Staircase up to kitchen directly above. This layout separates perishable from preserved, with Critical-priority cooking ingredients nearest the stairs for rapid kitchen access.</p>
              </div>
              <div className="journal-card p-4">
                <h4 className="font-display text-base font-semibold text-ink">Workshop Material Cache (Surface, 4x4 per station)</h4>
                <p className="font-serif text-sm text-ink-light mt-1">For each workstation (brewery, smithy, tailor, carpenter), place a 2x2 Critical-priority stockpile on the tile immediately adjacent, accepting only that station's inputs. Brewery: barley stockpile. Smithy: iron ore/ingots stockpile. Tailor: flax/wool stockpile. Carpenter: wood stockpile. This eliminates 100% of input-hauling time for your crafters — they never leave their station.</p>
              </div>
              <div className="journal-card p-4">
                <h4 className="font-display text-base font-semibold text-ink">Bulk Construction Materials (Surface, 6x6 covered zone)</h4>
                <p className="font-serif text-sm text-ink-light mt-1">Place a large covered stockpile zone centrally in your base (ground level, roofed). Accept: stone blocks, wood planks, clay bricks — all construction materials. Set priority to Normal. This is the "Home Depot" of your colony — builders grab materials from here for all projects. Stairs directly above this zone go to mining areas; stairs directly below go to the underground base. Central location minimizes walking distance to all building projects.</p>
              </div>
              <div className="journal-card p-4">
                <h4 className="font-display text-base font-semibold text-ink">Defense Equipment Cache (Surface, near each gate)</h4>
                <p className="font-serif text-sm text-ink-light mt-1">Place 2-3 weapon racks and 1 armor stand within 5 tiles of each defensive gate. Set weapon racks to accept only bows/crossbows/ammunition at Critical priority. When a raid alert sounds, settlers can grab weapons instantly rather than running to a central armory. This can save 10-15 seconds per settler in combat response time — critical for defensive battles.</p>
              </div>
              <div className="journal-card p-4">
                <h4 className="font-display text-base font-semibold text-ink">Medical Supplies (Near Hospital, 2x2 shelf)</h4>
                <p className="font-serif text-sm text-ink-light mt-1">Place a locked 2x2 shelf (wooden shelves in a 2x1 arrangement) immediately adjacent to hospital beds. Accept only: medicine kits, bandages, herbs. Set to Critical priority. Lock the door except for the medic — this prevents healthy settlers from consuming medicine as food. When a wounded settler arrives, the medic grabs supplies from the adjacent shelf — no running to storage mid-treatment.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
            <div className="faq-item">
              <details>
                <summary>How many stockpiles should I have in total?</summary>
                <p>For a colony of 8 settlers, the optimal setup is 6-8 specialized stockpiles (food, construction materials, workshop inputs, weapons, medicine, overflow, valuables) rather than 1-2 general stockpiles. Specialization allows temperature optimization per resource type and eliminates contamination (food mixing with stone, medicine mixing with food). Each specialized stockpile saves roughly 3-5 tiles of walking distance per settler per trip compared to one central stockpile.</p>
              </details>
            </div>
            <div className="faq-item">
              <details>
                <summary>Should I use shelves for everything?</summary>
                <p>Shelves for: food, medicine, valuables, seeds (everything temperature-sensitive or capacity-critical). Floor stockpiles for: stone blocks, clay bricks, raw ore, wood logs (high-volume, no-decay items where shelf capacity matters less than floor space). The 15-wood cost per shelf is negligible late-game but significant early-game — prioritize shelving your food cellar first, then expand as wood supply grows.</p>
              </details>
            </div>
            <div className="faq-item">
              <details>
                <summary>How do I stop settlers from hauling constantly?</summary>
                <p>Excessive hauling is usually caused by poorly placed stockpiles. If settlers are hauling constantly, check: 1) Are production stations far from their input stockpiles? Move stockpiles adjacent to workstations. 2) Are there too many tiny stockpiles? Consolidate similar items. 3) Are stockpile priorities misconfigured? Use the priority system to create pull flow (bulk → local caches). 4) Do you have dedicated haulers? Assign low-skill settlers to hauling to reduce production worker hauling time (community estimate: hauling dogs, if available, may additionally help).</p>
              </details>
            </div>
          </section>
        </div>

        <aside className="lg:w-[35%] space-y-8 shrink-0">
          <div className="field-sidebar-block">
            <h3 className="font-display text-lg font-semibold text-ink mb-4">Storage Priority Flow</h3>
            <div className="space-y-2 font-serif text-sm text-ink-light">
              <div className="flex justify-between"><span>1. Production</span><span className="text-vermillion">Harvest/Mine/Craft</span></div>
              <div className="flex justify-between"><span>2. Bulk Storage</span><span>Normal priority</span></div>
              <div className="flex justify-between"><span>3. Workstation Cache</span><span className="text-vermillion">Critical priority</span></div>
              <div className="flex justify-between"><span>4. Settler Consume</span><span>From cache or cellar</span></div>
            </div>
          </div>
          <div className="journal-card p-5">
            <h3 className="font-display text-base font-semibold text-ink mb-3">Storage Quick Tips</h3>
            <ul className="space-y-2 font-serif text-sm text-ink-light">
              <li>&bull; Food always at -2F on shelves</li>
              <li>&bull; Workstation inputs at Critical priority adjacent</li>
              <li>&bull; Construction materials at central covered zone</li>
              <li>&bull; Weapons near each defensive gate</li>
              <li>&bull; Medicine locked near hospital beds</li>
              <li>&bull; Seeds locked in separate room</li>
            </ul>
          </div>
        </aside>
      </div>
      </main>
  );
}
