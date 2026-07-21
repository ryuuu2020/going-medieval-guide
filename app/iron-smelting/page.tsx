
export const metadata = {
  title: "Going Medieval Iron Smelting Guide — Metal Production (2026)",
  description:
    "Complete iron smelting guide for Going Medieval. Learn where to find iron ore, how to build smelting furnaces, produce iron/steel ingots, optimize fuel efficiency, and master metal production chains.",
  keywords: [
    "going medieval iron smelting",
    "going medieval iron guide",
    "going medieval metal production",
    "going medieval smelting furnace",
    "going medieval steel ingots",
    "going medieval iron ingots",
  ],
};

export default function IronSmeltingPage() {
  return (
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-10">
            <section>
              <h1 className="chapter-heading">Iron Smelting Guide</h1>
              <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
                Metal production is one of the most important industrial chains in Going Medieval. Iron, the most common metal, serves as the backbone for weapons, armor, tools, and advanced structures. Mastering the smelting process — from locating iron deposits to efficiently producing steel ingots — transforms your colony from a wooden fort into a stone-and-steel fortress capable of withstanding the most brutal raids. This guide covers every aspect of iron smelting with real game data.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Where to Find Iron Ore</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Iron appears as a distinctive reddish-orange rock on the map. Iron Nuggets can sometimes be found as surface deposits in mountain and hill regions, but more commonly you'll need to dig underground to access substantial iron veins.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                The most reliable method is to look for 100% limestone deposits and dig beneath them. Iron frequently spawns directly under limestone formations. When mining, hover over tiles to check their composition — a tile showing 80% limestone and 20% iron is a strong indicator that more iron lies nearby. Dig the surrounding area to expose the full vein. Iron is rarely found when digging through dirt or clay alone, so focus your mining efforts on limestone-heavy areas.
              </p>
              <div className="recipe-card p-4">
                <h4 className="font-display text-sm font-semibold text-ink mb-2">Iron Prospecting Tips</h4>
                <ul className="space-y-1 font-serif text-xs text-ink-light">
                  <li>&bull; Survey hill and mountain regions first — iron is more common at higher elevations</li>
                  <li>&bull; Dig under limestone deposits for the best chance of finding iron veins</li>
                  <li>&bull; Check tile composition by hovering — mixed tiles (limestone + iron) indicate nearby veins</li>
                  <li>&bull; Surface iron nuggets may indicate a larger deposit underneath</li>
                  <li>&bull; If your starting map lacks iron, expand your mining operation deeper and wider</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Unlocking the Smelting Furnace</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Before you can smelt iron, you must progress through the research tree. The smelting furnace is locked behind two research stages and requires specific materials to construct.
              </p>
              <div className="space-y-4">
                <div className="journal-card p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="step-number">1</span>
                    <h4 className="font-display text-lg font-semibold text-ink">Research Architecture</h4>
                  </div>
                  <p className="font-serif text-sm text-ink-light">The foundational tech branch. Architecture unlocks basic construction options and serves as the prerequisite for Smelting research.</p>
                </div>
                <div className="journal-card p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="step-number">2</span>
                    <h4 className="font-display text-lg font-semibold text-ink">Research Smelting (30 Chronicles)</h4>
                  </div>
                  <p className="font-serif text-sm text-ink-light">After Architecture is complete, allocate 30 chronicles to unlock the Smelting technology. This enables the Smelting Furnace build option and is required before you can process any metal ore.</p>
                </div>
                <div className="journal-card p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="step-number">3</span>
                    <h4 className="font-display text-lg font-semibold text-ink">Build the Smelting Furnace</h4>
                  </div>
                  <p className="font-serif text-sm text-ink-light">The furnace can be built from either 70 clay or 70 limestone. The clay version has 100 HP and costs 200 value; the limestone version has 160 HP and costs 210 value. Both are identical in function with a 3x1x2 footprint and 2000 heat output. Choose limestone if you have it — the 60% extra durability matters during raids.</p>
                </div>
                <div className="journal-card p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="step-number">4</span>
                    <h4 className="font-display text-lg font-semibold text-ink">Assign a Smithing Settler</h4>
                  </div>
                  <p className="font-serif text-sm text-ink-light">Once the furnace is built, assign a settler with the Smithing job as their primary task. The settler will operate the furnace, processing ore into ingots. Higher Smithing skill improves crafting speed and quality outcomes.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Smelting Recipes & Production Data</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                The smelting furnace can process all four metal types in the game. Each recipe requires raw ore plus fuel. The furnace operates at 100% efficiency outdoors — a unique advantage that saves valuable indoor workshop space during early and mid game.
              </p>

              <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm font-serif text-ink-light border-collapse">
                  <thead>
                    <tr className="bg-amber-950/30">
                      <th className="p-3 text-left font-display text-ink border-b-2 border-amber-800/40">Product</th>
                      <th className="p-3 text-left font-display text-ink border-b-2 border-amber-800/40">Input Materials</th>
                      <th className="p-3 text-left font-display text-ink border-b-2 border-amber-800/40">Fuel Required</th>
                      <th className="p-3 text-left font-display text-ink border-b-2 border-amber-800/40">Output</th>
                      <th className="p-3 text-left font-display text-ink border-b-2 border-amber-800/40">Tech Required</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-amber-800/20 hover:bg-amber-950/20">
                      <td className="p-3 font-semibold text-ink">Iron Ingots</td>
                      <td className="p-3">30 Iron Nuggets</td>
                      <td className="p-3">20 Fuel (Sticks/Wood/Coal)</td>
                      <td className="p-3">30 Iron Ingots</td>
                      <td className="p-3">Smelting</td>
                    </tr>
                    <tr className="border-b border-amber-800/20 hover:bg-amber-950/20">
                      <td className="p-3 font-semibold text-ink">Steel Ingots</td>
                      <td className="p-3">Iron Ingots + Fuel</td>
                      <td className="p-3">Fuel (Coal recommended)</td>
                      <td className="p-3">Steel Ingots</td>
                      <td className="p-3">Steel Technology</td>
                    </tr>
                    <tr className="border-b border-amber-800/20 hover:bg-amber-950/20">
                      <td className="p-3 font-semibold text-ink">Gold Ingots</td>
                      <td className="p-3">Gold Ore</td>
                      <td className="p-3">Fuel</td>
                      <td className="p-3">Gold Ingots</td>
                      <td className="p-3">Smelting</td>
                    </tr>
                    <tr className="hover:bg-amber-950/20">
                      <td className="p-3 font-semibold text-ink">Silver Ingots</td>
                      <td className="p-3">Silver Ore</td>
                      <td className="p-3">Fuel</td>
                      <td className="p-3">Silver Ingots</td>
                      <td className="p-3">Smelting</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="font-serif text-xs text-ink-muted italic">Recipe data verified against game version 1.0. Iron is the only metal with a confirmed 30-for-30 conversion rate. Other metal ratios may vary by game version.</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Fuel Types & Efficiency</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                The smelting furnace accepts three fuel types: sticks, wood, and coal. While all three function identically in terms of the 20-fuel-per-batch requirement, their availability and acquisition costs differ significantly.
              </p>

              <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm font-serif text-ink-light border-collapse">
                  <thead>
                    <tr className="bg-amber-950/30">
                      <th className="p-3 text-left font-display text-ink border-b-2 border-amber-800/40">Fuel Type</th>
                      <th className="p-3 text-left font-display text-ink border-b-2 border-amber-800/40">Source</th>
                      <th className="p-3 text-left font-display text-ink border-b-2 border-amber-800/40">Labor Cost</th>
                      <th className="p-3 text-left font-display text-ink border-b-2 border-amber-800/40">Sustainability</th>
                      <th className="p-3 text-left font-display text-ink border-b-2 border-amber-800/40">Best Use Case</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-amber-800/20 hover:bg-amber-950/20">
                      <td className="p-3 font-semibold text-ink">Sticks</td>
                      <td className="p-3">Foraging, tree cutting byproduct</td>
                      <td className="p-3">Very Low</td>
                      <td className="p-3">Renewable (tree regrowth)</td>
                      <td className="p-3">Early game, emergency smelting</td>
                    </tr>
                    <tr className="border-b border-amber-800/20 hover:bg-amber-950/20">
                      <td className="p-3 font-semibold text-ink">Wood</td>
                      <td className="p-3">Tree cutting (any tree type)</td>
                      <td className="p-3">Low</td>
                      <td className="p-3">Renewable (tree farming)</td>
                      <td className="p-3">Primary fuel for most colonies</td>
                    </tr>
                    <tr className="hover:bg-amber-950/20">
                      <td className="p-3 font-semibold text-ink">Coal</td>
                      <td className="p-3">Mining (underground deposits)</td>
                      <td className="p-3">Moderate</td>
                      <td className="p-3">Finite (depleted on mining)</td>
                      <td className="p-3">Large-scale production, steel smelting</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                For long-term sustainability, plant a dedicated tree farm near your smelting area. Wood is renewable and requires minimal labor once trees mature. Coal is non-renewable but more convenient for large batches — reserve coal deposits for steel production where efficiency matters most. Sticks should only be used as a last resort; their low yield makes them inefficient for regular smelting operations.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Steel Production</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Steel ingots are the pinnacle of metal production in Going Medieval. Steel weapons and armor significantly outperform their iron counterparts, making steel the ultimate late-game material for arming your best fighters. To produce steel, you must first research the Steel technology (available after Smelting), then smelt iron ingots with fuel in a smelting furnace.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                The steel production chain requires two smelting passes: first smelt iron ore into iron ingots, then smelt iron ingots into steel. This doubles fuel consumption and production time. Plan your fuel reserves accordingly — a single batch of steel effectively costs 30 iron nuggets plus 40+ fuel units across both smelting stages. Steel ingots have a value of 5 and HP of 600, making them the most valuable metal product in the game. Use steel exclusively for weapons and armor; iron ingots remain sufficient for tools, traps, and mechanical components.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Weapon Recycling</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                The smelting furnace serves a secondary but equally important function: recycling old weapons back into metal. After each raid, collect damaged and low-quality weapons dropped by enemies and smelt them to recover iron and steel ingots. This is one of the most efficient ways to sustain metal production without exhausting your mining operations.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                Recycling also provides valuable Smithing experience for the settler operating the furnace. A dedicated recycling workflow — hauling post-raid weapons to a stockpile near the furnace, then assigning a smithing settler to process them — creates a self-sustaining metal economy. The weapons you recover from raids effectively become free iron ingots that feed back into your own weapon and armor production.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Production Chain Optimization</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Efficient metal production depends on smart colony layout. Position your smelting furnace near your iron ore stockpile and fuel storage to minimize settler travel time. Since the furnace operates at 100% efficiency outdoors, you can place it in an open-air industrial yard without sacrificing output — this frees indoor space for workstations that require roof coverage.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                For large colonies, build two smelting furnaces side by side and assign two settlers with Smithing priority. This doubles your output rate. Keep a dedicated hauler to continuously resupply fuel and ore. The complete iron production chain — mining, hauling, smelting, and forging — requires at least 3-4 settlers for smooth operation: one miner, one hauler, one smelter, and one blacksmith. Scale up as your colony grows and demands more metal for weapons, armor, traps, and mechanical components.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
              <div className="faq-item">
                <details>
                  <summary>How do I make iron ingots in Going Medieval?</summary>
                  <p>First research Architecture, then Smelting (30 chronicles). Build a smelting furnace using 70 clay or 70 limestone. Deposit 30 iron nuggets and 20 fuel (sticks, wood, or coal) into the furnace. Assign a settler with Smithing as their primary job to operate it. The furnace produces 30 iron ingots per batch. The furnace works at 100% efficiency even outdoors.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>Where is the best place to find iron?</summary>
                  <p>Iron appears as reddish-orange rock, most commonly found under limestone deposits. Dig beneath 100% limestone formations for the highest chance of discovering iron veins. Mountain and hill regions have higher iron density than flat terrain. If surface scanning yields nothing, mine deeper — iron deposits can be several layers underground.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>What's the difference between iron and steel?</summary>
                  <p>Steel is a superior metal derived from iron ingots. Steel weapons and armor have higher damage, durability, and protection values than iron equivalents. Steel requires researching Steel Technology and a second smelting pass (iron ingots + fuel). Due to its resource cost, reserve steel for your best fighters and critical equipment. Iron remains sufficient for tools, traps, and mechanical components.</p>
                </details>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Related Guides</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a href="/research" className="recipe-card p-4 no-underline">
                  <h4 className="font-display text-sm font-semibold text-ink">Research Tech Tree</h4>
                  <p className="font-serif text-xs text-ink-muted mt-1">Unlock Smelting and Steel technologies</p>
                </a>
                <a href="/crafting" className="recipe-card p-4 no-underline">
                  <h4 className="font-display text-sm font-semibold text-ink">Crafting System</h4>
                  <p className="font-serif text-xs text-ink-muted mt-1">Forge weapons and armor from ingots</p>
                </a>
                <a href="/production-chain-optimization" className="recipe-card p-4 no-underline">
                  <h4 className="font-display text-sm font-semibold text-ink">Production Chains</h4>
                  <p className="font-serif text-xs text-ink-muted mt-1">Optimize metal production workflow</p>
                </a>
                <a href="/merchant-trading" className="recipe-card p-4 no-underline">
                  <h4 className="font-display text-sm font-semibold text-ink">Merchant Trading Guide</h4>
                  <p className="font-serif text-xs text-ink-muted mt-1">Trade excess ingots for rare goods</p>
                </a>
              </div>
            </section>
          </div>

          <aside className="lg:w-[35%] space-y-8 shrink-0">
            <div className="field-sidebar-block">
              <h3 className="font-display text-lg font-semibold text-ink mb-4">Smelting Prerequisites</h3>
              <div className="space-y-3">
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Research: Architecture</h4><p className="font-serif text-xs text-ink-muted mt-1">Required before Smelting research</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Research: Smelting</h4><p className="font-serif text-xs text-ink-muted mt-1">30 chronicles — unlocks furnace</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Smelting Furnace</h4><p className="font-serif text-xs text-ink-muted mt-1">70 clay or 70 limestone, 3x1x2</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Research: Steel Tech</h4><p className="font-serif text-xs text-ink-muted mt-1">Required for steel ingot production</p></div>
              </div>
            </div>

            <div className="journal-card p-5">
              <h3 className="font-display text-base font-semibold text-ink mb-3">Smelting Tips</h3>
              <ul className="space-y-2 font-serif text-sm text-ink-light">
                <li>&bull; Furnace works at 100% outdoors — save indoor space</li>
                <li>&bull; Build near ore stockpile for faster hauls</li>
                <li>&bull; Limestone furnace (+160 HP) outlasts clay (+100 HP)</li>
                <li>&bull; Recycle post-raid weapons for free metal</li>
                <li>&bull; Plant tree farm near furnace for renewable fuel</li>
                <li>&bull; Use 2 furnaces + 2 smiths for double output</li>
                <li>&bull; Reserve coal for steel production</li>
              </ul>
            </div>

            <div className="journal-card p-5">
              <h3 className="font-display text-base font-semibold text-ink mb-3">Metal Uses</h3>
              <ul className="space-y-2 font-serif text-sm text-ink-light">
                <li>&bull; <strong>Weapons:</strong> Swords, maces, crossbows, war hammers</li>
                <li>&bull; <strong>Armor:</strong> Mail, plate, helmets, tower shields</li>
                <li>&bull; <strong>Tools:</strong> Improved efficiency for all jobs</li>
                <li>&bull; <strong>Traps:</strong> Metal traps deal more damage</li>
                <li>&bull; <strong>Components:</strong> Mechanical parts for advanced builds</li>
                <li>&bull; <strong>Cooking:</strong> Better cooking stations use iron</li>
              </ul>
            </div>
          </aside>
        </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I make iron ingots in Going Medieval?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "First research Architecture, then Smelting (30 chronicles). Build a smelting furnace using 70 clay or 70 limestone. Deposit 30 iron nuggets and 20 fuel (sticks, wood, or coal) into the furnace. Assign a settler with Smithing as their primary job to operate it. The furnace produces 30 iron ingots per batch."
      }
    },
    {
      "@type": "Question",
      "name": "Where is the best place to find iron?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Iron appears as reddish-orange rock, most commonly found under limestone deposits. Dig beneath 100% limestone formations for the highest chance of discovering iron veins. Mountain and hill regions have higher iron density than flat terrain."
      }
    },
    {
      "@type": "Question",
      "name": "What's the difference between iron and steel?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Steel is a superior metal derived from iron ingots. Steel weapons and armor have higher damage, durability, and protection values than iron equivalents. Steel requires researching Steel Technology and a second smelting pass. Reserve steel for your best fighters and critical equipment."
      }
    }
  ]
}` }} />
      </main>
  );
}
