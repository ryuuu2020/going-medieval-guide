import type { Metadata } from "next";
import { buildings, crops, research, seasons, defenseTips } from "@/lib/data";

export const metadata: Metadata = {
  title: "Beginner's Guide | Going Medieval Guide",
  description:
    "Step-by-step beginner's guide to Going Medieval 1.0. Walkthrough from Day 1 setup through first buildings, food production, first winter, first raid, mid-game expansion, and the endgame. Everything new players need to survive and thrive.",
};

export default function BeginnersGuidePage() {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem" }}>
      <h1 style={{ marginBottom: "0.5rem" }}>Beginner&apos;s Guide to Going Medieval</h1>
      <p style={{ color: "var(--color-text-muted)", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: "2rem" }}>
        Welcome to Going Medieval, the colony management sim by Foxy Voxel. This step-by-step guide
        walks you through everything from your first day in the wilderness to building a thriving
        fortress ready for the 1.0 endgame. Follow these steps and your colony will not just survive
        — it will prosper.
      </p>

      {/* FAQ */}
      <h2 style={{ marginBottom: "1rem" }}>Quick Answers for New Players</h2>
      <div className="faq-snippets">
        <details>
          <summary>I just started — what do I do in the first 5 minutes?</summary>
          <p>
            Pause the game immediately (Spacebar). Survey your starting area: look for flat ground 
            near trees and a water source. Choose a building spot that&apos;s close to resources but 
            has room to expand. Unpause and order your settlers to chop 30-40 wood. While they cut 
            trees, plan a 5x5 building footprint. Build Wooden Walls, a Thatched Roof, a Wooden 
            Door, and a Campfire inside. This basic shelter is your first objective — get it done 
            before nightfall on Day 1. Then build sleeping spots (beds come later) and you&apos;ve 
            survived your first day.
          </p>
        </details>
        <details>
          <summary>Which biome should I pick for my first game?</summary>
          <p>
            <strong>Valley biome, without question.</strong> The Valley offers the perfect beginner 
            experience: temperate climate with distinct but manageable seasons, balanced resources 
            (wood, stone, clay, iron, fertile soil all available), and the easiest raid difficulty. 
            You get enough challenges to learn the game without being overwhelmed. Once you&apos;ve 
            successfully built a colony that survives a full year on the Valley, try Hillside 
            (medium difficulty) or Mountain (hard). Avoid Marsh as a beginner — limited stone 
            access makes construction frustrating.
          </p>
        </details>
        <details>
          <summary>How do I avoid losing my first colony?</summary>
          <p>
            The three most common ways new players lose colonies: starvation (not planting enough 
            food early), hypothermia (not preparing winter clothing and heating before winter), 
            and raid disasters (not building walls before raids start). Solve each: Plant Cabbage, 
            Beet, and Barley in your first spring week. Build a Tailor Workshop and craft winter 
            coats by mid-autumn. Build a wooden perimeter wall with a defended entrance by Day 10. 
            If you address these three threats, your colony will survive its first year. Most 
            colony failures happen because players are reactive instead of proactive — always 
            prepare a season ahead.
          </p>
        </details>
      </div>

      {/* Day 1 Setup */}
      <h2 style={{ marginTop: "3rem", marginBottom: "1rem" }}>Phase 1: Day 1 Setup</h2>
      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "1rem" }}>
        Your first day sets the foundation for everything that follows. Act quickly and 
        decisively — settlers are vulnerable without shelter and food.
      </p>

      <div className="card" style={{ marginBottom: "1.5rem" }}>
        <h3 style={{ fontSize: "1.05rem", margin: "0 0 0.75rem" }}>Immediate Actions</h3>
        <ol style={{ color: "var(--color-text-muted)", lineHeight: 2, margin: 0, paddingLeft: "1.25rem" }}>
          <li><strong style={{ color: "var(--color-text)" }}>Pause the game</strong> — Spacebar is your best friend. Never make decisions in real-time until you&apos;re comfortable.</li>
          <li><strong style={{ color: "var(--color-text)" }}>Survey the land</strong> — Look for flat terrain near trees, berries, and water. Avoid building on slopes or in enclosed valleys where enemies could surround you.</li>
          <li><strong style={{ color: "var(--color-text)" }}>Order tree chopping</strong> — Select 30-40 trees near your chosen building site. Wood is needed for everything.</li>
          <li><strong style={{ color: "var(--color-text)" }}>Harvest wild berries</strong> — Found on bushes around the map. These provide emergency food while your farms are planted.</li>
          <li><strong style={{ color: "var(--color-text)" }}>Plan your building footprint</strong> — A 5x5 interior room (7x7 with walls) is enough for your first shelter. Leave room to expand in all directions.</li>
        </ol>
      </div>

      <div className="card" style={{ marginBottom: "1.5rem" }}>
        <h3 style={{ fontSize: "1.05rem", margin: "0 0 0.75rem" }}>First Building — Your Starting Shelter</h3>
        <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
          Build a 5x5 room with Wooden Walls on all sides. Add a Wooden Door on one wall (face it 
          toward your planned expansion area). Build a Thatched Roof over the entire room — settlers 
          need protection from rain, snow, and temperature extremes. Place a Campfire in the center 
          of the room. Add Wooden Floors (they&apos;re faster to build than dirt and improve room quality). 
          Finally, mark sleeping spots on the floor — you can build proper beds later. This shelter 
          is crude but functional, and it&apos;s the difference between life and death on your first night.
        </p>
      </div>

      <div className="card">
        <h3 style={{ fontSize: "1.05rem", margin: "0 0 0.75rem" }}>Day 1 Checklist</h3>
        <ul style={{ color: "var(--color-text-muted)", lineHeight: 2, margin: 0, paddingLeft: "1.25rem" }}>
          <li>Shelter with walls, roof, door, and floor built</li>
          <li>Campfire placed and fueled with wood</li>
          <li>Sleeping spots assigned to each settler</li>
          <li>30+ wood stockpiled for future building</li>
          <li>Berries harvested for immediate food</li>
        </ul>
      </div>

      {/* Phase 2: First Buildings */}
      <h2 style={{ marginTop: "3rem", marginBottom: "1rem" }}>Phase 2: First Buildings (Days 2-7)</h2>
      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
        With shelter secured, shift focus to production and long-term survival infrastructure.
        These first structures set up your resource gathering and crafting capability.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2rem" }}>
        <div className="card" style={{ borderLeft: "4px solid var(--color-accent)" }}>
          <h3 style={{ fontSize: "1.05rem", margin: "0 0 0.5rem" }}>Build Order Priority</h3>
          <ol style={{ color: "var(--color-text-muted)", lineHeight: 2, margin: 0, paddingLeft: "1.25rem" }}>
            <li><strong style={{ color: "var(--color-text)" }}>Research Table</strong> — Your most important building. Place it in a dedicated room. Assign your smartest settler to research full-time. Unlock Stonecutting first.</li>
            <li><strong style={{ color: "var(--color-text)" }}>Butcher Table</strong> — Process hunted animals into meat and leather. Place near your campfire for efficiency.</li>
            <li><strong style={{ color: "var(--color-text)" }}>Storage Stockpile</strong> — Designate an area for storing wood, stone, food, and materials. Keep food separate from raw materials to prevent contamination.</li>
            <li><strong style={{ color: "var(--color-text)" }}>First Farm Fields</strong> — Plant 3 fields: 5x5 Cabbage, 5x5 Beet, 5x5 Barley. This feeds 3-4 settlers with surplus.</li>
            <li><strong style={{ color: "var(--color-text)" }}>Carpenter Bench</strong> — Once Carpentry is researched, craft proper beds (massive mood improvement over sleeping spots) and storage containers.</li>
          </ol>
        </div>
        <div className="card">
          <h3 style={{ fontSize: "1.05rem", margin: "0 0 0.5rem" }}>Resource Gathering Priorities</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            <strong style={{ color: "var(--color-text)" }}>Wood:</strong> Chop continuously. You need it for building, fuel, crafting, and research. Never have less than 50 wood stockpiled.{" "}
            <strong style={{ color: "var(--color-text)" }}>Stone:</strong> Start mining as soon as you have shelter. Stone blocks are needed for upgrading walls.{" "}
            <strong style={{ color: "var(--color-text)" }}>Clay:</strong> Mine some for floors and insulation, but don&apos;t over-prioritize early.{" "}
            <strong style={{ color: "var(--color-text)" }}>Iron Ore:</strong> Mine when you find it but don&apos;t stress — you won&apos;t use iron until Smithing is researched. Stockpile it for later.{" "}
            <strong style={{ color: "var(--color-text)" }}>Herbs:</strong> Harvest wild herbs for early medicine. Plant a herb farm once you research Herbalism.
          </p>
        </div>
      </div>

      {/* Phase 3: Food Production */}
      <h2 style={{ marginTop: "3rem", marginBottom: "1rem" }}>Phase 3: Food Production (Week 2-3)</h2>
      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
        Food is the resource that kills colonies when it runs out. Establish food security 
        before expanding anything else. A hungry colony is a dying colony.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2rem" }}>
        <div className="card">
          <h3 style={{ fontSize: "1.05rem", margin: "0 0 0.5rem" }}>Expanding Your Farms</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            As your first crops mature (Cabbage in 4 days, Barley in 6 days), expand your fields. 
            Add Carrots (long growing season, spring through autumn) and Herbs (for medicine). 
            Aim for 25-30 crop tiles per settler for food security. Assign your best Farmer to 
            the Farming task at Priority 1 during planting and harvest seasons. Set up a second 
            campfire or cooking station near the fields so your cook doesn&apos;t have to walk across 
            the map with raw ingredients. Cooked meals provide mood bonuses that raw food doesn&apos;t.
          </p>
        </div>
        <div className="card">
          <h3 style={{ fontSize: "1.05rem", margin: "0 0 0.5rem" }}>Hunting Supplement</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            While crops grow, supplement food with hunting. Deer provide the best risk-to-reward 
            ratio — they flee rather than fight. Assign a settler with Marksman skill to hunting. 
            Rabbits are hard to catch but provide meat. Boars fight back but give more resources. 
            Avoid wolves and bears until you have weapons and armor. Process all hunted animals at 
            the Butcher Table immediately — corpses left on the ground rot and cause mood penalties. 
            Leather from hunting is used for clothing and armor at the Tailor Workshop.
          </p>
        </div>
        <div className="card">
          <h3 style={{ fontSize: "1.05rem", margin: "0 0 0.5rem" }}>Food Storage</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            Raw food spoils quickly on the surface. By the end of Week 2, start digging your 
            first underground root cellar. Go 3 levels down and create a 6x6 storage room. Place 
            food stockpiles inside at high priority. Food stored underground can last 3-4x longer 
            than food left above ground. Build a wooden door at the entrance and consider an 
            airlock (two doors with a gap). Keep the cellar away from campfires and heat sources. 
            A proper cellar built in the first month will serve you for the entire game.
          </p>
        </div>
      </div>

      {/* Phase 4: First Winter */}
      <h2 style={{ marginTop: "3rem", marginBottom: "1rem" }}>Phase 4: Surviving Your First Winter</h2>
      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
        Winter is the great filter in Going Medieval. Colonies that prepare thrive. Colonies 
        that don&apos;t prepare freeze and starve. Start winter preparation in early autumn, not 
        when the first snow falls.
      </p>

      <div className="card" style={{ marginBottom: "1.5rem" }}>
        <h3 style={{ fontSize: "1.05rem", margin: "0 0 0.75rem" }}>Autumn Preparation Checklist</h3>
        <ul style={{ color: "var(--color-text-muted)", lineHeight: 2, margin: 0, paddingLeft: "1.25rem" }}>
          <li><strong style={{ color: "var(--color-text)" }}>Winter crops:</strong> Plant Turnips (grows in autumn and winter) and Hay (livestock feed). Turnips are your winter lifeline.</li>
          <li><strong style={{ color: "var(--color-text)" }}>Winter clothing:</strong> Research Tailoring if you haven&apos;t already. Craft winter coats for every settler. A settler without winter gear will suffer severe mood penalties and possible hypothermia.</li>
          <li><strong style={{ color: "var(--color-text)" }}>Harvest everything:</strong> Harvest all remaining crops before the first frost. Even immature crops give some yield — better than losing them entirely.</li>
          <li><strong style={{ color: "var(--color-text)" }}>Expand the cellar:</strong> Make your root cellar larger. You&apos;ll need space for all the food you harvested. Add shelves or additional stockpile zones.</li>
          <li><strong style={{ color: "var(--color-text)" }}>Fuel stockpile:</strong> Stockpile 100+ wood or coal. Fires go out without fuel, and settlers without heat freeze. Coal burns longer than wood.</li>
          <li><strong style={{ color: "var(--color-text)" }}>Underground mushrooms:</strong> If you&apos;ve researched Herbalism, plant Mushrooms in your cellar for year-round food production. This single crop can prevent winter starvation.</li>
          <li><strong style={{ color: "var(--color-text)" }}>Heating:</strong> Place braziers or campfires in common areas and bedrooms. A warm room keeps settlers functioning through blizzards.</li>
        </ul>
      </div>

      <div className="card">
        <h3 style={{ fontSize: "1.05rem", margin: "0 0 0.75rem" }}>Winter Survival Strategy</h3>
        <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
          During winter, limit outdoor work to essential tasks. Settlers outside in freezing 
          temperatures rapidly lose mood and health. Focus on indoor activities: research, 
          crafting, cooking, and mining. This is the perfect time to push research progress — 
          your Intellectual settler can work in a warm Library while others craft indoors. 
          Schedule shorter outdoor work periods during the warmest part of the day. If food 
          runs low, send hunters after animals that remain active in winter (wolves, bears — 
          but be careful). A well-prepared colony treats winter as a productive planning 
          season rather than a crisis. Craft weapons, armor, and trade goods. Plan your 
          spring expansion. Train settler skills through practice.
        </p>
      </div>

      {/* Phase 5: First Raid */}
      <h2 style={{ marginTop: "3rem", marginBottom: "1rem" }}>Phase 5: Your First Raid</h2>
      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
        Raids arrive based on colony wealth, typically within the first 10 days. Your first 
        raid is small — 2-3 raiders with wooden weapons — but can still be deadly if you&apos;re 
        unprepared. The key is having walls and a plan before the raid notification appears.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2rem" }}>
        <div className="card" style={{ borderLeft: "4px solid var(--color-danger)" }}>
          <h3 style={{ fontSize: "1.05rem", margin: "0 0 0.5rem" }}>Pre-Raid Defense Setup</h3>
          <ul style={{ color: "var(--color-text-muted)", lineHeight: 2, margin: 0, paddingLeft: "1.25rem" }}>
            <li><strong style={{ color: "var(--color-text)" }}>Perimeter wall:</strong> Even a wooden wall changes everything. Build one before Day 10. Leave ONE door as the only entrance — this funnels enemies.</li>
            <li><strong style={{ color: "var(--color-text)" }}>Archer positions:</strong> Build a 2-tile-high platform behind your entrance. Even basic elevation gives ranged damage bonus.</li>
            <li><strong style={{ color: "var(--color-text)" }}>Weapons:</strong> Craft wooden bows at the Carpenter Bench. Give them to settlers with Marksman skill. Craft wooden swords for any settler with Melee skill.</li>
            <li><strong style={{ color: "var(--color-text)" }}>Traps:</strong> Place 2-3 spike traps in the entrance corridor. Early raiders have no armor and die quickly to traps.</li>
            <li><strong style={{ color: "var(--color-text)" }}>Combat assignment:</strong> Set all settlers to respond to threats. In the work tab, make sure combat tasks are enabled.</li>
          </ul>
        </div>
        <div className="card">
          <h3 style={{ fontSize: "1.05rem", margin: "0 0 0.5rem" }}>During the Raid</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            When the raid notification appears, pause the game. Order all non-combat settlers 
            inside the walls. Position your melee fighters behind the entrance door. Place 
            archers on your elevated platform. Unpause and let the raiders come to you — never 
            chase raiders into the open where you lose your defensive advantage. Raiders will 
            path to your door and enter one at a time through the narrow entrance. Your melee 
            fighters engage them at the door while archers fire from above. After the fight, 
            immediately tend to wounded settlers at beds (assigned medical spots). Bury or 
            cremate enemy corpses — leaving them causes mood penalties.
          </p>
        </div>
      </div>

      {/* Phase 6: Mid-Game Expansion */}
      <h2 style={{ marginTop: "3rem", marginBottom: "1rem" }}>Phase 6: Mid-Game Expansion</h2>
      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
        Once you&apos;ve survived your first year (congratulations), shift from survival to 
        prosperity. The mid-game is about scaling your colony, upgrading everything from wood 
        to stone, and preparing for the tougher challenges ahead.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2rem" }}>
        <div className="card">
          <h3 style={{ fontSize: "1.05rem", margin: "0 0 0.5rem" }}>Infrastructure Upgrades</h3>
          <ul style={{ color: "var(--color-text-muted)", lineHeight: 2, margin: 0, paddingLeft: "1.25rem" }}>
            <li>Replace all wooden walls with stone walls (start with outer defensive walls, then critical buildings)</li>
            <li>Build a proper Kitchen (Cooking Station) and Tailor Workshop in dedicated rooms</li>
            <li>Expand your root cellar and add preserved food production</li>
            <li>Build a Smithy and start producing metal tools (pickaxes mine faster, axes chop faster)</li>
            <li>Construct a Great Hall with tables, chairs, and decorations for massive mood bonuses</li>
            <li>Build a Library to boost research speed for remaining technologies</li>
            <li>Add private bedrooms for each settler (3x3 minimum, with bed, torch, and floor)</li>
          </ul>
        </div>
        <div className="card">
          <h3 style={{ fontSize: "1.05rem", margin: "0 0 0.5rem" }}>Expanding Your Population</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            New settlers arrive periodically as events. Accept settlers who fill skill gaps in 
            your colony. A 6-8 settler colony is ideal for mid-game — enough to specialize roles 
            without straining food production. More than 10 settlers requires significant food 
            infrastructure. Each new settler needs a bed, clothing, and a work assignment. Don&apos;t 
            accept settlers with severely negative traits (Pyromaniac, Bloodlust) unless you&apos;re 
            confident you can manage them. New settlers arrive with low skills, so assign them 
            to hauling and simple labor while their skills develop through practice.
          </p>
        </div>
        <div className="card">
          <h3 style={{ fontSize: "1.05rem", margin: "0 0 0.5rem" }}>Defense Scaling</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            As your wealth grows, so do raids. Upgrade from a simple wall to a proper castle 
            defense: double-layer stone walls with a walkway, archer towers at corners, a 
            dedicated killbox, fortified gate, and traps throughout the entrance corridor. 
            Research Armor Crafting and start producing plate armor for your frontline fighters. 
            Equip all settlers with at least leather armor. Station 3-4 archers in permanent 
            defensive positions. Build a field hospital with beds and medicine near your 
            defensive line. By mid-game, your colony should be able to handle 6-8 raiders 
            with minimal injuries.
          </p>
        </div>
      </div>

      {/* Phase 7: 1.0 Endgame */}
      <h2 style={{ marginTop: "3rem", marginBottom: "1rem" }}>Phase 7: The 1.0 Endgame</h2>
      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
        The 1.0 release brought new endgame challenges that test everything you&apos;ve built. 
        Massive siege raids, advanced technologies, and the ultimate goal: building an 
        unbreakable medieval fortress that can withstand anything.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2rem" }}>
        <div className="card" style={{ borderLeft: "4px solid var(--color-accent)" }}>
          <h3 style={{ fontSize: "1.05rem", margin: "0 0 0.5rem" }}>Endgame Goals</h3>
          <ul style={{ color: "var(--color-text-muted)", lineHeight: 2, margin: 0, paddingLeft: "1.25rem" }}>
            <li><strong style={{ color: "var(--color-text)" }}>Complete the research tree</strong> — All technologies unlocked, including Tier 3 endgame techs like Engineering, Alchemy, and Master Crafting.</li>
            <li><strong style={{ color: "var(--color-text)" }}>Build a Stone Keep</strong> — The ultimate defensive structure. Your keep should be the heart of your colony, with multiple floors, storage, and fallback positions.</li>
            <li><strong style={{ color: "var(--color-text)" }}>Equip settlers in masterwork gear</strong> — Legendary-quality plate armor, steel weapons, and shields for every combat settler.</li>
            <li><strong style={{ color: "var(--color-text)" }}>Fortify against sieges</strong> — Reinforced walls, siege engines (ballistae, trebuchets), and counter-siege defenses. Prepare for raids of 15+ enemies with siege weapons.</li>
            <li><strong style={{ color: "var(--color-text)" }}>Achieve self-sufficiency</strong> — Food, materials, and crafting should be fully renewable and automated through settler assignments.</li>
            <li><strong style={{ color: "var(--color-text)" }}>Build a thriving colony</strong> — 10+ happy settlers, beautiful Great Hall, extensive underground network, and impenetrable defenses. Your colony should feel like a medieval home.</li>
          </ul>
        </div>
        <div className="card">
          <h3 style={{ fontSize: "1.05rem", margin: "0 0 0.5rem" }}>Endgame Survival Tips</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            Endgame raids can include trebuchets that destroy walls from across the map. Build 
            counter-siege weapons on elevated platforms. Have at least 2 layers of reinforced 
            walls. Maintain redundancy in food, medicine, weapons, and armor stockpiles. Train 
            backup settlers in combat skills — losing your only good fighter to a lucky hit 
            can cascade into disaster. The underground safe room remains valuable even in 
            endgame. Above all, enjoy what you&apos;ve built. Going Medieval&apos;s endgame is a 
            celebration of your colony&apos;s journey from a wooden hut to a stone castle that 
            would make any medieval lord proud.
          </p>
        </div>
      </div>

      {/* Quick Reference */}
      <h2 style={{ marginTop: "3rem", marginBottom: "1rem" }}>Quick Reference: Key Numbers</h2>
      <div style={{ overflowX: "auto", marginBottom: "2rem" }}>
        <table>
          <thead>
            <tr>
              <th>What</th>
              <th>Target Number</th>
              <th>Why</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={{ fontWeight: 600 }}>Crop tiles per settler</td><td>25-30 tiles</td><td style={{ color: "var(--color-text-muted)" }}>Sustains one settler with surplus for storage</td></tr>
            <tr><td style={{ fontWeight: 600 }}>Food reserve</td><td>10+ days</td><td style={{ color: "var(--color-text-muted)" }}>Buffer against bad harvests and winter</td></tr>
            <tr><td style={{ fontWeight: 600 }}>Wood stockpile</td><td>100+ minimum</td><td style={{ color: "var(--color-text-muted)" }}>Fuel for cooking, heating, crafting, and building</td></tr>
            <tr><td style={{ fontWeight: 600 }}>Cellar depth</td><td>3-4 levels</td><td style={{ color: "var(--color-text-muted)" }}>Near-freezing temperatures for optimal food storage</td></tr>
            <tr><td style={{ fontWeight: 600 }}>Wall layers</td><td>2 (mid-game)</td><td style={{ color: "var(--color-text-muted)" }}>Protected walkway between walls for defender movement</td></tr>
            <tr><td style={{ fontWeight: 600 }}>Archers on defense</td><td>Minimum 3</td><td style={{ color: "var(--color-text-muted)" }}>Cover multiple approach angles and focus-fire targets</td></tr>
            <tr><td style={{ fontWeight: 600 }}>Research priority</td><td>Stonecutting first</td><td style={{ color: "var(--color-text-muted)" }}>Stone walls are the biggest single defense upgrade</td></tr>
            <tr><td style={{ fontWeight: 600 }}>Winter prep start</td><td>Early Autumn</td><td style={{ color: "var(--color-text-muted)" }}>One full season to harvest, preserve, and craft winter gear</td></tr>
          </tbody>
        </table>
      </div>

      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7 }}>
        Going Medieval rewards preparation, patience, and learning from mistakes. Your first 
        colony may not survive its first winter — that&apos;s okay. Each failure teaches you something 
        that makes your next colony stronger. Use this guide as your reference, but don&apos;t be 
        afraid to experiment. The most memorable colonies are the ones where you solved problems 
        your own way. Build something you&apos;re proud of, and may your walls never crumble.
      </p>
    </div>
  );
}
