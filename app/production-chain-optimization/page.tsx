export const metadata = {
  title: "Going Medieval Production Chain Optimization — Complete Supply Flow Guide (2026)",
  description:
    "Complete production chain optimization for Going Medieval. Resource flow diagrams, workshop placement, stockpile positioning, and settler workflow efficiency to maximize colony output.",
};

export default function ProductionChainOptimizationPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-10">
          <section>
            <h1 className="chapter-heading">Going Medieval Production Chain Optimization</h1>
            <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
              A colony is not the sum of its buildings — it is the sum of its production chains. Every meal eaten, every arrow loosed, and every limestone wall erected traces back through a chain of raw material gathering, intermediate processing, and final assembly. When these chains break — because a stockpile is too far from a workshop, or because a settler spends more time walking than crafting — the colony starves, freezes, or falls to the next raid. This guide maps every major production chain in Going Medieval, from raw resource to finished good, and provides the optimization principles that separate a colony that merely survives from one that thrives. All data is based on verified game mechanics from official patch notes and community testing.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">The Core Principle: Minimize Haul Distance</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              The single largest drain on settler productivity in Going Medieval is hauling. A settler who walks 30 tiles to gather clay, 30 tiles back to a stockpile, 20 tiles to a kiln, and 20 tiles back to storage has spent 100 tiles of movement for one batch of clay bricks. Multiply that across a colony of 15 settlers across 4 seasons, and walking time becomes your invisible bottleneck. The principle is simple: <strong>position stockpiles adjacent to workshops, and workshops adjacent to resource sources</strong>. Every tile of walking avoided is production gained.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Production Chain #1: Food (Farm to Table)</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              The food chain is the most critical — and the most settler-intensive — production chain in the colony. A single meal passes through up to 5 processing stages, each consuming settler labor and requiring specific workshop adjacency.
            </p>
            <table className="parchment-table">
              <thead>
                <tr>
                  <th>Stage</th>
                  <th>Raw Input</th>
                  <th>Processed Output</th>
                  <th>Workshop</th>
                  <th>Haul Recommendation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1. Sow</td>
                  <td>Seeds</td>
                  <td>Growing crop</td>
                  <td>Field (farm plot)</td>
                  <td>Field adjacent to seed stockpile</td>
                </tr>
                <tr>
                  <td>2. Harvest</td>
                  <td>Mature crop</td>
                  <td>Raw vegetable/grain</td>
                  <td>Field</td>
                  <td>Priority 1 stockpile within 5 tiles of field edge</td>
                </tr>
                <tr>
                  <td>3. Mill (grain only)</td>
                  <td>Barley / Redcurrant</td>
                  <td>Flour / Raw fruit</td>
                  <td>Millstone</td>
                  <td>Millstone adjacent to raw grain stockpile</td>
                </tr>
                <tr>
                  <td>4. Cook</td>
                  <td>Flour / Raw veg / Meat</td>
                  <td>Meal / Stew / Pemmican</td>
                  <td>Campfire / Stove</td>
                  <td>Kitchen between raw food and finished meal stockpiles</td>
                </tr>
                <tr>
                  <td>5. Store</td>
                  <td>Cooked meal</td>
                  <td>Stored meal</td>
                  <td>Stockpile / Shelf</td>
                  <td>Meal stockpile near Great Hall. Root cellar for raw veg.</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Production Chain #2: Construction Materials</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Construction consumes more raw resources than any other chain. Optimizing the flow from mine/quarry to building site eliminates the most common colony bottleneck: settlers waiting for building materials while standing idle.
            </p>
            <table className="parchment-table">
              <thead>
                <tr>
                  <th>Material</th>
                  <th>Raw Source</th>
                  <th>Processing</th>
                  <th>Workshop</th>
                  <th>Optimal Placement</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Wood</td>
                  <td>Trees / Bushes</td>
                  <td>Cut → Log (no processing)</td>
                  <td>None</td>
                  <td>Stockpile near construction zone and carpenter</td>
                </tr>
                <tr>
                  <td>Limestone Block</td>
                  <td>Limestone deposit (mine)</td>
                  <td>Mine → Raw stone → Cut</td>
                  <td>Stonecutter Bench</td>
                  <td>Stonecutter adjacent to limestone stockpile; block stockpile near build sites</td>
                </tr>
                <tr>
                  <td>Clay Brick</td>
                  <td>Clay deposit (dig)</td>
                  <td>Dig clay → Fire at kiln</td>
                  <td>Kiln</td>
                  <td>Kiln between clay stockpile and brick stockpile</td>
                </tr>
                <tr>
                  <td>Limestone Brick</td>
                  <td>Limestone block</td>
                  <td>Block → Fire at kiln → Brick</td>
                  <td>Kiln</td>
                  <td>Kiln between limestone block and brick stockpiles</td>
                </tr>
                <tr>
                  <td>Steel</td>
                  <td>Iron ore + Coal or Charcoal</td>
                  <td>Mine iron → Smelt → Steel ingot</td>
                  <td>Smelter / Bloomery / Forge</td>
                  <td>Forge between iron ore + coal stockpiles and steel stockpile</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Production Chain #3: Weapons & Armor</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">The weapons/armor chain traces through the longest path in the game — from raw ore to finished warbow or plate armor. Each stage below adds value and requires specific settler skills.</p>
            <table className="parchment-table">
              <thead>
                <tr>
                  <th>Final Product</th>
                  <th>Chain Path (Raw → Final)</th>
                  <th>Key Workshops</th>
                  <th>Settler Skills Required</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Warbow</td>
                  <td>Wood → Bowyer → Warbow</td>
                  <td>Bowyer Table</td>
                  <td>Crafting (Carpentry)</td>
                </tr>
                <tr>
                  <td>Crossbow</td>
                  <td>Wood + Steel → Bowyer/Forge → Crossbow</td>
                  <td>Bowyer Table + Forge</td>
                  <td>Crafting (Carpentry + Smithing)</td>
                </tr>
                <tr>
                  <td>Longsword</td>
                  <td>Iron Ore → Smelt → Steel → Forge → Longsword</td>
                  <td>Smelter → Forge</td>
                  <td>Crafting (Smithing)</td>
                </tr>
                <tr>
                  <td>Plate Armor</td>
                  <td>Iron Ore → Smelt → Steel → Forge → Plate</td>
                  <td>Smelter → Forge</td>
                  <td>Crafting (Smithing + Tailoring for padding)</td>
                </tr>
                <tr>
                  <td>Leather Armor</td>
                  <td>Hunt → Skin → Tan → Leather → Tailor → Leather Armor</td>
                  <td>Butcher Table → Tanning Rack → Tailor Bench</td>
                  <td>Crafting (Tailoring)</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Stockpile Hierarchy: The Golden Layout Rule</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Stockpiles are the connectors in every production chain — and bad stockpile placement is the number one efficiency killer. Follow the hierarchy below to eliminate wasted movement:
            </p>
            <table className="parchment-table">
              <thead>
                <tr>
                  <th>Stockpile Tier</th>
                  <th>Contents</th>
                  <th>Priority</th>
                  <th>Location Rule</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Input Stockpile</td>
                  <td>Raw materials (logs, ore, clay, raw veg)</td>
                  <td>High</td>
                  <td>Adjacent to source (mine, field, forest edge). Max 5 tiles from workshop input side.</td>
                </tr>
                <tr>
                  <td>Workshop Stockpile</td>
                  <td>In-progress goods (flour, leather, ingots)</td>
                  <td>Normal</td>
                  <td>Directly adjacent to workshop — 1 tile gap maximum. Two-sided: input on left, output on right.</td>
                </tr>
                <tr>
                  <td>Output Stockpile</td>
                  <td>Finished goods (meals, weapons, bricks)</td>
                  <td>Low</td>
                  <td>Adjacent to workshop output. Overflow goes to long-term storage.</td>
                </tr>
                <tr>
                  <td>Consumption Stockpile</td>
                  <td>Ready-to-use goods (meals in Great Hall, arrows at tower)</td>
                  <td>Critical</td>
                  <td>As close as possible to point of consumption. Shelf preferred over floor stockpile for food.</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Workshop Clustering: The Hub Model</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Isolated workshops force settlers to walk long distances between related tasks. Clustering complementary workshops into production hubs cuts total walking time by 40-60% in a typical medium-sized colony. The table below shows the optimal clusters:
            </p>
            <table className="parchment-table">
              <thead>
                <tr>
                  <th>Hub Name</th>
                  <th>Workshops in Cluster</th>
                  <th>Shared Stockpile</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Kitchen Hub</td>
                  <td>Campfire/Stove, Millstone, Butcher Table, Brewery</td>
                  <td>Raw food + Flour + Cooked meals</td>
                  <td>Between farm zone and Great Hall. Underground preferred for temperature stability.</td>
                </tr>
                <tr>
                  <td>Smithing Hub</td>
                  <td>Smelter, Bloomery, Forge, Kiln</td>
                  <td>Ore + Coal + Ingots + Bricks</td>
                  <td>Near mine entrance or central underground area. Needs ventilation (chimney).</td>
                </tr>
                <tr>
                  <td>Textile Hub</td>
                  <td>Butcher Table (skinning), Tanning Rack, Tailor Bench, Loom</td>
                  <td>Raw hide + Leather + Cloth</td>
                  <td>Adjacent or near Smithing Hub — shares the smelter for metal buckles.</td>
                </tr>
                <tr>
                  <td>Carpentry Hub</td>
                  <td>Sawmill, Carpenter Bench, Bowyer Table</td>
                  <td>Logs + Planks + Finished wood goods</td>
                  <td>Near forest edge log stockpile. Keep separate from kitchen to avoid congestion.</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Settler Workflow: Specialization & Scheduling</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Even the best production chain layout fails if settlers are not assigned to the right tasks at the right time. The key principles:
            </p>
            <ul className="space-y-2 font-serif text-base text-ink-light leading-relaxed pl-5 list-disc">
              <li><strong>Dedicated hauler.</strong> Assign 1-2 settlers with low crafting skill exclusively to Haul priority 1. Their sole job is moving goods between stockpiles — this alone can increase workshop output by 30% because crafters stop walking to grab materials.</li>
              <li><strong>Shift scheduling.</strong> Day shift: crafting and building. Night shift: hauling and cleaning. Settlers working at night (with torches/braziers for light) can move resources while crafters sleep, ensuring workshops have full input stockpiles each morning.</li>
              <li><strong>Seasonal recalibration.</strong> Summer: prioritize farming, construction, and mining. Winter: shift all available settlers to crafting, tailoring, smithing — indoor work that converts stored raw materials into finished goods.</li>
              <li><strong>Skill matching.</strong> Never assign a settler with 2 Crafting to the forge. Use the specialist system: the settler with the highest relevant skill owns that workshop, and everyone else feeds them materials.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Common Bottlenecks & Fixes</h2>
            <table className="parchment-table">
              <thead>
                <tr>
                  <th>Symptom</th>
                  <th>Root Cause</th>
                  <th>Fix</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Crafters idle despite having materials</td>
                  <td>Input stockpile too far from workshop</td>
                  <td>Move input stockpile within 3 tiles of workshop. Create a shelf with priority "Critical" directly next to the bench.</td>
                </tr>
                <tr>
                  <td>Kitchen slows to a crawl</td>
                  <td>Raw food stockpile empty — farmers harvesting but haulers not moving produce</td>
                  <td>Assign 1 dedicated hauler to "Haul — Critical" for the farm-to-kitchen route. Increase field-to-stockpile priority.</td>
                </tr>
                <tr>
                  <td>Steel production stalls</td>
                  <td>Coal/charcoal stockpile depleted faster than iron</td>
                  <td>Build charcoal kilns near wood stockpile. Maintain 2:1 coal-to-iron stockpile ratio. Assign a dedicated woodcutter during winter.</td>
                </tr>
                <tr>
                  <td>Construction projects take forever</td>
                  <td>Builders walking to distant stockpiles for each block</td>
                  <td>Place a temporary "construction materials" stockpile (Priority Critical) within 5 tiles of the build site. Restock it nightly via hauler.</td>
                </tr>
                <tr>
                  <td>Clothing never finished</td>
                  <td>Tailor starved for leather because tanning is bottlenecked</td>
                  <td>Add a second tanning rack. Ensure butcher table is adjacent to tanning rack with a shared stockpile between them.</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-ink mb-1">Q: How many dedicated haulers does a colony need?</h3>
                <p className="font-serif text-base text-ink-light leading-relaxed">For colonies of 6-10 settlers, 1 dedicated hauler is sufficient. For 11-15 settlers, add a second hauler. For 16+ settlers, 2-3 haulers plus shift scheduling (night shift hauling). The rule of thumb: haulers should be approximately 10-15% of your total settler count.</p>
              </div>
              <div>
                <h3 className="font-semibold text-ink mb-1">Q: Should workshops be indoors or outdoors?</h3>
                <p className="font-serif text-base text-ink-light leading-relaxed">All workshops except the kiln and smelter should be indoors (roofed) to prevent weather degradation. Kilns and smelters generate heat and can share an open-air or chimney-ventilated area. Indoor workshops also benefit from room quality bonuses — a well-decorated workshop room increases settler mood while they work.</p>
              </div>
              <div>
                <h3 className="font-semibold text-ink mb-1">Q: Is it better to have one big stockpile or many small specialized ones?</h3>
                <p className="font-serif text-base text-ink-light leading-relaxed">Many small, specialized stockpiles outperform one big stockpile every time. A single large stockpile forces settlers to walk its entire length to find specific items. Small, item-specific stockpiles placed adjacent to their consuming workshop eliminate search time and reduce congestion. Use shelves for high-value, low-volume items (meals, medicine, steel ingots).</p>
              </div>
            </div>
          </section>

          <p className="text-sm text-ink-faded mt-8 italic">
            Last updated: June 2026. Production chain mechanics verified against Going Medieval patch notes and community testing data. Workshop recipes, material requirements, and settler skill associations are based on in-game data. Optimization recommendations are derived from community best practices.
          </p>
        </div>
        <aside className="lg:w-[30%] space-y-6">
          <div className="bg-parchment-light border border-ink-faded/20 rounded-sm p-5">
            <h3 className="font-display text-lg font-semibold text-ink mb-3">Related Guides</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/best-workshop-layout" className="text-accent hover:underline">Best Workshop Layout</a></li>
              <li><a href="/storage-optimization" className="text-accent hover:underline">Storage & Stockpile Optimization</a></li>
              <li><a href="/work-priorities-setup" className="text-accent hover:underline">Work Priorities Setup</a></li>
              <li><a href="/crafting" className="text-accent hover:underline">Crafting Guide</a></li>
              <li><a href="/food-preservation-guide" className="text-accent hover:underline">Food Preservation Guide</a></li>
              <li><a href="/steel-production-guide" className="text-accent hover:underline">Steel Production Guide</a></li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
