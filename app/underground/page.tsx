import type { Metadata } from "next";
import { undergroundData } from "@/lib/data";

export const metadata: Metadata = {
  title: "Underground Building Guide | Going Medieval Guide",
  description:
    "Master underground building in Going Medieval. Learn root cellar food preservation, iron and coal mining, subterranean base design, underground farming with mushrooms, and the pros and cons of living beneath the surface.",
};

export default function UndergroundPage() {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem" }}>
      <h1 style={{ marginBottom: "0.5rem" }}>Underground Building Guide</h1>
      <p style={{ color: "var(--color-text-muted)", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: "2rem" }}>
        The ground beneath your colony holds untold riches — cold storage for your harvest,
        veins of iron and coal for your forges, and the safety of stone walls that no raider
        can breach. Mastering underground construction is essential for long-term colony survival.
      </p>

      {/* FAQ */}
      <h2 style={{ marginBottom: "1rem" }}>Quick Answers</h2>
      <div className="faq-snippets">
        <details>
          <summary>How do root cellars preserve food in Going Medieval?</summary>
          <p>
            Underground cellars maintain a naturally cool and constant temperature that dramatically
            slows food spoilage. The deeper you dig, the colder it gets — at 4+ levels underground,
            temperatures stay near freezing year-round regardless of surface season. Food stored
            in a proper root cellar lasts 3-5 times longer than food stored in above-ground
            stockpiles. Build cellars with stone or clay floors for better insulation, create an
            airlock with double doors at the entrance to prevent temperature leakage, and keep
            cellars away from heat sources like campfires and forges.
          </p>
        </details>
        <details>
          <summary>Where do I find iron and coal in Going Medieval?</summary>
          <p>
            Iron ore and coal are found underground, typically 3-7 levels below the surface. Iron
            appears as reddish-brown veins in the rock, while coal appears as black deposits.
            Both resources are more abundant in Mountain and Hillside biomes and scarcer in Valley
            and Marsh. Assign settlers with high Mining skill to extract more resources per tile.
            Iron is essential for smithing weapons and tools; coal is the most efficient forge
            fuel. Always mine exploratory tunnels horizontally at depth to locate veins rather
            than digging straight down randomly.
          </p>
        </details>
        <details>
          <summary>Can I build my entire colony underground?</summary>
          <p>
            Yes, an entirely subterranean colony is possible but comes with significant trade-offs.
            Underground colonies have perfect natural temperature regulation, immunity to siege
            weapons and weather, and inherent defensive advantages (raiders cannot dig). However,
            they suffer from limited farming options (only Mushrooms grow underground), settler
            mood penalties from lack of sunlight exposure, and complex structural stability
            requirements. Hybrid designs that combine underground storage and production with
            above-ground living quarters typically work better than fully underground cities.
          </p>
        </details>
      </div>

      {/* Underground Data Table */}
      <h2 style={{ marginTop: "3rem", marginBottom: "1rem" }}>Underground Systems Overview</h2>
      <div style={{ overflowX: "auto" }}>
        <table>
          <thead>
            <tr>
              <th>Topic</th>
              <th>Category</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {undergroundData.map((u) => (
              <tr key={u.topic}>
                <td style={{ fontWeight: 600, whiteSpace: "nowrap" }}>{u.topic}</td>
                <td style={{ fontSize: "0.9rem", whiteSpace: "nowrap" }}>{u.category}</td>
                <td style={{ fontSize: "0.9rem", color: "var(--color-text-muted)" }}>{u.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Food Preservation */}
      <h2 style={{ marginTop: "3rem", marginBottom: "1rem" }}>Food Preservation — Root Cellars and Cold Storage</h2>
      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "1rem" }}>
        The root cellar is the single most important underground structure in Going Medieval —
        it&apos;s the difference between your Autumn harvest rotting in two weeks and lasting through
        the entire Winter. Underground cellars work through passive temperature regulation: the
        earth insulates against surface temperature swings, keeping the cellar interior cool and
        stable regardless of the season above.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "1.5rem" }}>
        <div className="card" style={{ borderLeft: "4px solid var(--color-success)" }}>
          <h3 style={{ fontSize: "1.15rem", margin: "0 0 0.5rem" }}>Cellar Design Principles</h3>
          <ul style={{ color: "var(--color-text-muted)", lineHeight: 1.8, margin: 0, paddingLeft: "1.25rem" }}>
            <li><strong style={{ color: "var(--color-accent)" }}>Depth matters:</strong> Dig at least 3 levels underground. Each additional level of depth provides colder temperatures. At 5+ levels underground, temperatures approach freezing even in Summer.</li>
            <li><strong style={{ color: "var(--color-accent)" }}>Airlock entrances:</strong> Never put a single door on your cellar — the temperature equalizes with the outside every time it opens. Build a 2-tile airlock (door, empty tile, door) so cold air stays trapped inside.</li>
            <li><strong style={{ color: "var(--color-accent)" }}>Insulated materials:</strong> Clay and stone floors provide better thermal insulation than dirt or wood. Upgrade cellar floors from raw dirt to clay or stone as soon as resources allow.</li>
            <li><strong style={{ color: "var(--color-accent)" }}>Keep heat sources away:</strong> Never place campfires, cooking stations, or forges adjacent to your cellar. Heat radiates through walls and floors, warming your cold storage. Maintain at least a 5-tile buffer between heat sources and cellar walls.</li>
            <li><strong style={{ color: "var(--color-accent)" }}>Size for surplus:</strong> Build your cellar 50% larger than you think you need. A crowded storage room spoils faster because items stack and generate localized heat. Spread stored food across multiple shelves and floor tiles.</li>
          </ul>
        </div>
      </div>

      <h3 style={{ fontSize: "1.15rem", margin: "0 0 0.5rem" }}>Spoilage Mechanics</h3>
      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "1rem" }}>
        Food spoilage rate is determined by ambient temperature: hotter environments accelerate
        spoilage, cold environments slow it. At surface temperatures in Summer (25-32°C), raw
        food spoils in 2-3 days. In a proper underground cellar at 4+ levels deep (near 0-5°C),
        the same food lasts 12-15 days. Preserved meals from the Cooking Station last even longer
        — combine preserved food with cold storage for maximum shelf life. Food that reaches the
        &quot;rotting&quot; state can still be used for a short time but causes mood penalties and health
        risks if eaten. Process rotting food into animal feed rather than feeding it to settlers.
      </p>

      {/* Mining */}
      <h2 style={{ marginTop: "3rem", marginBottom: "1rem" }}>Mining — Iron, Coal, and Stone</h2>
      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "1rem" }}>
        Mining is your colony&apos;s industrial engine. Every metal tool, weapon, armor piece, and
        stone block passes through the hands of your miners before reaching your crafters.
        Efficient mining operations ensure your colony never runs short of the materials needed
        for construction, crafting, and fuel.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "1.5rem" }}>
        <div>
          <h3 style={{ fontSize: "1.15rem", margin: "0 0 0.5rem" }}>Iron Mining Strategy</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            Iron ore is found in veins 3-7 levels underground. The color of iron ore is distinctly
            reddish-brown against the grey stone background, making it visible even before mining
            begins. Use settlers with Mining skill of 5+ for efficient extraction — higher Mining
            skill means more ore per tile and faster extraction speed. Dig exploratory horizontal
            tunnels (2 tiles wide) at each depth level to locate veins efficiently. When you find
            iron, mine out the entire vein — partial mining is wasteful since veins don&apos;t respawn.
            For continuous iron supply in late game, establish multiple mining levels and rotate
            miners between them as veins are exhausted. Mountain and Hillside biomes have the
            richest iron deposits; Valley and Marsh may require trade to supplement limited
            underground supplies.
          </p>
        </div>
        <div>
          <h3 style={{ fontSize: "1.15rem", margin: "0 0 0.5rem" }}>Coal Mining and Fuel Management</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            Coal deposits appear alongside iron at similar depths (3-7 levels underground). Coal
            is the superior fuel source: it burns twice as long as wood in forges and campfires,
            produces more consistent heat, and doesn&apos;t require harvesting finite surface trees.
            Stockpile coal for Winter when wood is scarce and for sustained Smithing operations.
            A single coal tile mined by a skilled miner can yield enough fuel to run your Smithy
            for an entire day of continuous production. Coal is particularly valuable in biomes
            with limited wood — Mountain colonies should prioritize coal mining immediately after
            establishing basic food security.
          </p>
        </div>
        <div>
          <h3 style={{ fontSize: "1.15rem", margin: "0 0 0.5rem" }}>Stone Quarrying</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            Stone is the most common underground resource and the foundation of all stone-based
            construction. Every tile of mined stone yields stone chunks that can be crafted into
            stone blocks at a Stonecutter workshop. For large construction projects, designate a
            dedicated quarry area where miners continuously extract stone. Place the quarry
            adjacent to your construction zone to minimize material hauling distance. Underground
            stone extraction has an additional benefit: it creates the space you need for cellars,
            underground farms, and subterranean rooms. Every mining operation serves double duty —
            extracting resources while expanding your usable underground space.
          </p>
        </div>
      </div>

      {/* Underground Base Design */}
      <h2 style={{ marginTop: "3rem", marginBottom: "1rem" }}>Underground Base Design — Pros and Cons</h2>
      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "1rem" }}>
        Building underground isn&apos;t just about resource extraction — it&apos;s a legitimate architectural
        strategy with unique advantages and serious drawbacks. Successful underground colonies
        lean into the strengths while mitigating the weaknesses.
      </p>

      <div style={{ display: "flex", gap: "1.5rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
        <div className="card" style={{ flex: "1 1 300px", borderLeft: "4px solid var(--color-success)" }}>
          <h3 style={{ fontSize: "1.15rem", margin: "0 0 0.75rem" }}>Pros of Underground Living</h3>
          <ul style={{ color: "var(--color-text-muted)", lineHeight: 1.8, margin: 0, paddingLeft: "1.25rem" }}>
            <li>Natural temperature regulation year-round — no heating or cooling needed</li>
            <li>Immune to siege weapons — trebuchets and catapults can&apos;t damage underground rooms</li>
            <li>Perfect defense — enemies cannot dig and must use your controlled entrances</li>
            <li>Weather immunity — blizzards, heat waves, and rain don&apos;t affect underground settlers</li>
            <li>Integrated mining — living where you mine eliminates resource hauling distances</li>
            <li>Space efficiency — build vertically and horizontally without surface footprint concerns</li>
          </ul>
        </div>
        <div className="card" style={{ flex: "1 1 300px", borderLeft: "4px solid var(--color-danger)" }}>
          <h3 style={{ fontSize: "1.15rem", margin: "0 0 0.75rem" }}>Cons of Underground Living</h3>
          <ul style={{ color: "var(--color-text-muted)", lineHeight: 1.8, margin: 0, paddingLeft: "1.25rem" }}>
            <li>Limited farming — only Mushrooms grow without sunlight; surface farms still needed</li>
            <li>Settler mood penalties from lack of sunlight exposure and enclosed spaces</li>
            <li>Structural stability requires support pillars every 4 tiles — limits room sizes</li>
            <li>Expansion is slow — mining new rooms takes far longer than building walls above ground</li>
            <li>No skylight or outdoor recreation — settlers need occasional surface access for mood</li>
            <li>Harder to visually monitor colony — underground rooms are hidden from the default camera</li>
          </ul>
        </div>
      </div>

      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "1rem" }}>
        The most effective approach for most colonies is a hybrid design: underground production,
        storage, and mining combined with above-ground living quarters, farming, and recreation.
        Keep your root cellars, mushroom farms, stockpiles, and industrial buildings (Smithy,
        Brewing Station) underground where temperature and security are optimal. Build living
        quarters, Great Halls, Libraries, and defensive walls above ground where settlers get
        sunlight exposure for mood benefits and where you can visually monitor the surface for
        approaching threats. This balanced approach gives you the safety and efficiency of
        underground spaces while maintaining the settler happiness and visibility of surface
        living.
      </p>

      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7 }}>
        Underground building is a deep and rewarding system in Going Medieval — literally and
        figuratively. From your first root cellar to a sprawling network of subterranean farms,
        forges, and stockpiles, the earth beneath your colony is your greatest asset. Dig deep,
        build smart, and let the stone walls protect what your settlers have built.
      </p>
    </div>
  );
}
