{/* Meta description: Complete guide to steel production in Going Medieval — covering iron ore mining, smelting furnace setup, coal fuel management, steel ingot crafting, and advanced metalworking for weapons and armor. */}

export default function SteelProductionGuidePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <section>
        <h1 className="chapter-heading">Going Medieval Steel Production Guide</h1>
        <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
          Steel is the pinnacle of metalworking in Going Medieval. While iron suffices for early-game tools and basic weaponry, steel separates a struggling colony from a dominant one. Steel weapons deal more damage and steel armor absorbs more punishment than their iron counterparts, making steel the definitive late-game material for outfitting your best combat settlers. This guide walks through the entire production chain — from mining iron ore and coal, through smelting iron ingots, to forging steel and crafting elite equipment at the Blacksmith's Forge and Armourer's Table. Every figure below comes from community testing and wiki data; exact values may shift between game updates.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-semibold text-ink mb-4">Raw Material Gathering: Iron Ore and Coal</h2>
        <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
          Steel production begins deep in the earth. Two raw materials are essential: iron nuggets and coal. Without a reliable supply of both, your smelting furnace will sit idle and steel will remain out of reach. Iron nuggets appear as reddish-orange deposits on the surface and underground, often found beneath limestone layers. Coal can be mined from coal veins underground or manufactured at a kiln, giving you a renewable fallback when natural deposits run thin.
        </p>
        <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
          Surface iron outcrops are your first source. Scan the map on day one for reddish-brown rocks poking through the ground — these often sit on top of larger underground iron deposits. When surface iron runs out, dig downward near limestone formations; iron veins commonly hide beneath limestone layers at depths of 3 to 6 levels. A tile composition reading of 80% limestone and 20% iron signals that more iron is nearby. For detailed mining strategies, see our <a href="/iron-mining">iron mining guide</a>.
        </p>
        <table className="parchment-table">
          <thead>
            <tr>
              <th>Raw Material</th>
              <th>Source</th>
              <th>Yield per Source</th>
              <th>Deposit HP</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Iron Nuggets</td>
              <td>Surface outcrops</td>
              <td>3-6 nuggets</td>
              <td>Varies</td>
              <td>Early-game source, depletes quickly</td>
            </tr>
            <tr>
              <td>Iron Nuggets</td>
              <td>Underground veins</td>
              <td>8-15 nuggets per tile</td>
              <td>Varies</td>
              <td>Found under limestone, levels 3-6</td>
            </tr>
            <tr>
              <td>Coal</td>
              <td>Coal veins (underground)</td>
              <td>60 coal per vein</td>
              <td>1100</td>
              <td>Spans multiple layers, intersects other veins</td>
            </tr>
            <tr>
              <td>Coal</td>
              <td>Kiln production</td>
              <td>20 coal per batch</td>
              <td>N/A</td>
              <td>30 wood converts to 20 coal; renewable</td>
            </tr>
          </tbody>
        </table>
        <p className="font-serif text-sm text-ink-muted italic">Data source: Community testing estimates</p>
        <p className="font-serif text-base text-ink-light leading-relaxed mt-4">
          Coal veins are tough — at 1100 hit points each, a single vein takes significant mining time but yields a generous 60 coal. Because coal veins can span multiple underground layers and intersect with other mineral deposits, you may stumble upon coal while digging for iron, or vice versa. If your map lacks coal veins entirely, the kiln provides a renewable alternative: 30 wood produces 20 coal. This conversion is fuel-negative if you burn wood directly, but it is the only way to sustain steel production on maps without natural coal.
        </p>
        <div className="aged-border p-5 mt-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
          <p className="font-serif text-sm text-ink leading-relaxed">
            <strong className="text-vermillion">Pro Tip:</strong> Assign at least one settler with high Mining skill to dedicated coal extraction once you unlock steel research. A coal vein's 1100 HP means a low-skill miner will spend days on a single vein. Skill level 8+ miners break through coal veins roughly twice as fast as beginners.
          </p>
        </div>
      </section>

      <section>
        <h2 className="font-display text-2xl font-semibold text-ink mb-4">The Smelting Process: From Ore to Iron to Steel</h2>
        <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
          The smelting furnace is the heart of your metalworking operation. Unlocked through the Smelting research node — which itself requires Architecture (15 Chronicles) as a prerequisite — the smelting furnace converts raw ore into workable ingots. Building one costs 70 clay or 70 limestone, and unlike most workstations, it operates at full efficiency outdoors without a roof. Place it near your mine entrance to minimize hauling time.
        </p>
        <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
          Iron ingot production is straightforward: 30 iron nuggets combined with 20 units of fuel (sticks, wood, or coal) yields 30 iron ingots. Once you have iron ingots and have unlocked the Steel research node, the same smelting furnace can produce steel ingots. Steel requires iron ingots as input along with coal as fuel — coal is specifically called out by the game as the key ingredient for steel production, distinguishing it from generic fuel use.
        </p>
        <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
          The research path to steel is: Architecture (15 Chronicles) → Smelting (30 Chronicles) → Steel (30 Chronicles + 15 Handbooks). This means you need a Research Table upgraded to produce Handbooks, which requires Research II. The full research tree is covered in our <a href="/research">research guide</a>. Plan ahead — collecting 15 Handbooks takes time, so start producing books early.
        </p>
        <table className="parchment-table">
          <thead>
            <tr>
              <th>Production Step</th>
              <th>Input</th>
              <th>Output</th>
              <th>Workstation</th>
              <th>Research Required</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Iron Smelting</td>
              <td>30 Iron Nuggets + 20 Fuel</td>
              <td>30 Iron Ingots</td>
              <td>Smelting Furnace</td>
              <td>Smelting</td>
            </tr>
            <tr>
              <td>Steel Smelting</td>
              <td>Iron Ingots + Coal</td>
              <td>Steel Ingots</td>
              <td>Smelting Furnace</td>
              <td>Steel</td>
            </tr>
            <tr>
              <td>Coal Production</td>
              <td>30 Wood</td>
              <td>20 Coal</td>
              <td>Kiln</td>
              <td>Clay Brick Making</td>
            </tr>
            <tr>
              <td>Weapon Forging</td>
              <td>Steel Ingots</td>
              <td>Swords, Axes, Maces</td>
              <td>Blacksmith's Forge</td>
              <td>Blacksmithing + weapon type</td>
            </tr>
            <tr>
              <td>Armor Crafting</td>
              <td>Steel Ingots + Leather</td>
              <td>Mail, Plate, Helms</td>
              <td>Armourer's Table</td>
              <td>Armourer II / III</td>
            </tr>
          </tbody>
        </table>
        <p className="font-serif text-sm text-ink-muted italic">Data source: Community testing estimates</p>
        <p className="font-serif text-base text-ink-light leading-relaxed mt-4">
          The smelting furnace has another valuable function: recycling. Old weapons looted from raiders can be melted down at the furnace to recover metal. After a raid, sweep the battlefield for dropped weapons and queue them for smelting. This not only cleans up the map but also provides free metal ingots and gives your settlers smithing experience. The return rate is not 1:1, but recycled metal significantly offsets the cost of equipping your colony.
        </p>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          Smelting furnace specs: the clay version has 100 hit points and costs 70 clay to build; the limestone version has 160 hit points and costs 70 limestone. Both produce 2000 heat when operating, which can warm nearby rooms in winter but may cause overheating in summer. Both versions share the same 3x1x2 footprint and 20% cover effectiveness. Choose based on which material is more abundant near your base.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-semibold text-ink mb-4">Fuel Efficiency and Coal Management</h2>
        <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
          Fuel is the hidden bottleneck in steel production. Every smelting batch consumes fuel, and steel production demands coal specifically. The game currently treats sticks, wood, and coal as interchangeable for basic smelting fuel — but coal has a dedicated role in steel production that the other fuels cannot fill. This makes coal a strategic resource, not just a convenience.
        </p>
        <table className="parchment-table">
          <thead>
            <tr>
              <th>Fuel Type</th>
              <th>Source</th>
              <th>Stack Size</th>
              <th>Weight</th>
              <th>Value</th>
              <th>Steel Production</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sticks</td>
              <td>Tree cutting, foraging</td>
              <td>200</td>
              <td>0.1</td>
              <td>1</td>
              <td>No</td>
            </tr>
            <tr>
              <td>Wood</td>
              <td>Tree cutting</td>
              <td>200</td>
              <td>0.5</td>
              <td>2</td>
              <td>No</td>
            </tr>
            <tr>
              <td>Coal</td>
              <td>Mining or Kiln (30 wood → 20 coal)</td>
              <td>200</td>
              <td>0.5</td>
              <td>3</td>
              <td>Yes — required</td>
            </tr>
          </tbody>
        </table>
        <p className="font-serif text-sm text-ink-muted italic">Data source: Community testing estimates</p>
        <p className="font-serif text-base text-ink-light leading-relaxed mt-4 mb-4">
          Because sticks and wood cannot produce steel, every steel ingot ultimately requires coal. If your map has coal veins, prioritize mining them early — a single 60-coal vein fuels multiple steel smelting batches. If no coal veins exist, you must route wood through a kiln at a 3:2 ratio (30 wood yields 20 coal), which means every 20 coal costs 30 wood. Factor this into your lumberjack labor allocation: a steel-producing colony without natural coal needs significantly more woodcutting capacity than one that burns wood directly.
        </p>
        <div className="aged-border p-5 mt-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
          <p className="font-serif text-sm text-ink leading-relaxed">
            <strong className="text-vermillion">Efficiency Warning:</strong> Do not waste coal on basic iron smelting if your coal supply is limited. Use sticks or wood for iron ingot production and reserve coal exclusively for steel. Sticks are the cheapest early-game fuel — settlers gathering kindling from fallen trees can supply a smelter without cutting living timber. Save every lump of coal for the steel furnace.
          </p>
        </div>
        <p className="font-serif text-base text-ink-light leading-relaxed mt-4">
          Stockpiling is critical. Build dedicated coal storage near your smelting furnace and set a stockpile limit high enough to buffer against production interruptions. A good target is 100+ coal in reserve before you begin a steel smelting campaign. Keep iron ingot stockpiles equally robust — steel production pauses if either input runs dry, and restarting a smelting queue wastes settler time on travel and task-switching.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-semibold text-ink mb-4">Advanced Metalworking: Weapons and Armor</h2>
        <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
          Steel ingots are only useful once forged into equipment. Two workstations convert steel into weapons and armor: the Blacksmith's Forge and the Armourer's Table. Each requires its own research path and construction materials, and both must be placed under a roof at 100% efficiency — ideally inside a Workshop room for the productivity bonus. For a broader overview of crafting stations, see our <a href="/crafting">crafting guide</a>.
        </p>
        <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
          The Blacksmith's Forge, unlocked via the Blacksmithing research node (30 Chronicles, requires Smelting), crafts metal weapons and mechanical components. Building it costs 100 clay bricks or 100 limestone bricks and requires Construction skill level 10. It has 180 hit points, a 4x1x3 footprint, and produces 2000 heat. The forge can craft seven weapon types from steel: short sword, long sword, mace, hatchet, two-handed mace, berdiche, and greataxe. Additional weapon-specific research (Axes, Maces, Swords — each costing 30 Chronicles + 20 Handbooks) unlocks the full roster.
        </p>
        <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
          The Armourer's Table, unlocked via the Armourer research node (30 Chronicles, requires Tailoring), crafts all armor and shields. It costs 5 iron and 50 wood to build, requiring Construction skill level 10. Steel armor options include Steel Mail Armour and Steel Mail Helmet (unlocked at Armourer II — 30 Chronicles + 15 Handbooks), plus Steel Plate Armour and Steel Great Helm (unlocked at Armourer III — 30 Chronicles + 15 Handbooks + 15 Thesis). The plate armor and great helm represent the best protective gear in the game, but they require Thesis-level research, meaning you need an Advanced Research Table (Research III) to produce the necessary books.
        </p>
        <div className="aged-border p-5 mt-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
          <p className="font-serif text-sm text-ink leading-relaxed">
            <strong className="text-vermillion">Strategic Note:</strong> Steel equipment should be prioritized, not mass-produced. The full chain — iron ore mining, coal gathering, iron smelting, steel smelting, and forging — consumes enormous labor and fuel. Outfit only your front-line combat settlers with full steel loadouts. Secondary defenders can use iron gear, which requires far less infrastructure. For a complete breakdown of weapon and armor stats, see our <a href="/armor-weapons">armor and weapons guide</a>.
          </p>
        </div>
        <p className="font-serif text-base text-ink-light leading-relaxed mt-4">
          The steel ingot itself has solid stats: 600 hit points, stack of 50, 1 kg weight, and a value of 5. This makes steel ingots compact to store and valuable for trade. Merchants will pay well for steel equipment, so if your production outpaces your colony's needs, surplus steel weapons and armor are excellent trade goods for acquiring resources your map lacks.
        </p>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          Recycling remains relevant even in late game. The smelting furnace can melt down iron weapons from early-game raids to recover iron ingots, which then feed back into the steel chain. This closed-loop approach minimizes waste and keeps your mining operations focused on net-new material rather than replacing losses.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl font-semibold text-ink mb-4">Frequently Asked Questions</h2>
        <div className="faq-snippets">
          <details>
            <summary>Can I produce steel without coal?</summary>
            <p className="font-serif text-base text-ink-light leading-relaxed">No. Coal is explicitly required for steel ingot production at the smelting furnace. If your map has no coal veins, you must manufacture coal at a kiln using wood (30 wood yields 20 coal). This makes coal a renewable but labor-intensive resource on maps without natural deposits. Sticks and wood can substitute as fuel for iron smelting, but only coal works for steel.</p>
          </details>
          <details>
            <summary>What research do I need before I can make steel?</summary>
            <p className="font-serif text-base text-ink-light leading-relaxed">The minimum research chain is Architecture (15 Chronicles) → Smelting (30 Chronicles) → Steel (30 Chronicles + 15 Handbooks). To craft steel weapons, add Blacksmithing (30 Chronicles) plus a weapon-type research (Axes, Maces, or Swords — 30 Chronicles + 20 Handbooks each). For steel armor, you need Tailoring (20 Chronicles) → Armourer (30 Chronicles) → Armourer II (30 Chronicles + 15 Handbooks) for mail armor, and Armourer III (30 Chronicles + 15 Handbooks + 15 Thesis) for plate armor and great helms.</p>
          </details>
          <details>
            <summary>Should I build the clay or limestone smelting furnace?</summary>
            <p className="font-serif text-base text-ink-light leading-relaxed">Functionally, both are identical — same 3x1x2 footprint, same 20% cover, same 2000 heat output, same 100% outdoor efficiency. The only difference is durability: clay has 100 HP, limestone has 160 HP. Choose whichever material is more abundant near your base. If both are equally available, limestone is slightly more durable against raids. Since the furnace costs 70 units of either material, proximity to your source deposit matters more than the marginal HP difference.</p>
          </details>
          <details>
            <summary>How do I speed up steel production?</summary>
            <p className="font-serif text-base text-ink-light leading-relaxed">Three levers control steel throughput. First, settler Smithing skill — assign your highest-skill settler to the smelting furnace and forge. Second, logistics — place the furnace, forge, and armourer's table in the same Workshop room with adjacent stockpiles for iron nuggets, coal, and ingots. Third, parallel production — run multiple smelting furnaces simultaneously if you have the fuel and ore to sustain them. One furnace can smelt iron while another produces steel, eliminating the single-station bottleneck.</p>
          </details>
          <details>
            <summary>Is steel worth the investment for a small colony?</summary>
            <p className="font-serif text-base text-ink-light leading-relaxed">For colonies under 6 settlers, steel is usually not worth the infrastructure cost. Iron weapons and armor suffice for early raids, and the labor spent on coal mining, Handbooks research, and steel smelting is better directed toward food production, base defense, and population growth. Begin steel production once your colony has 8+ settlers, a stable food supply, and surviving raids that demand better gear. Steel becomes essential when raid sizes scale up in year 2 and beyond.</p>
          </details>
        </div>
      </section>

      <section>
        <p className="font-serif text-sm text-ink-muted italic">
          Data source: Community testing estimates. Game mechanics, recipe amounts, and research costs are based on the Going Medieval wiki and player testing as of the latest game version. Values may change with game updates. Always verify in your current version before committing resources.
        </p>
      </section>
    </main>
  );
}
