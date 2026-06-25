import type { Metadata } from "next";
import { buildings, research } from "@/lib/data";

export const metadata: Metadata = {
  title: "Crafting | Going Medieval Guide",
  description:
    "Complete crafting and resources guide for Going Medieval. Master raw resources (wood, stone, clay, iron, coal, herbs, flax, leather), workstations, crafting chains, and all key crafted items from weapons and armor to tools, clothing, furniture, food, and drink.",
};

interface CraftedItem {
  name: string;
  category: string;
  workstation: string;
  materials: string;
  description: string;
}

const craftedItems: CraftedItem[] = [
  { name: "Iron Sword", category: "Weapons", workstation: "Smithy", materials: "Iron Ingot x3, Wood x2", description: "Standard melee weapon with balanced damage and speed. The workhorse of your militia. Requires Smithing research." },
  { name: "Iron Axe", category: "Weapons", workstation: "Smithy", materials: "Iron Ingot x4, Wood x3", description: "Higher damage than swords but slower attack speed. Effective against unarmored enemies. Also doubles as a woodcutting tool." },
  { name: "Iron Mace", category: "Weapons", workstation: "Smithy", materials: "Iron Ingot x5, Wood x2", description: "Armor-piercing blunt weapon. Deals bonus damage against plate armor. Essential against late-game armored raiders." },
  { name: "Longbow", category: "Weapons", workstation: "Carpenter Bench", materials: "Wood x8, Leather x2", description: "The best standard ranged weapon. Longer range than shortbow with good damage. Craft for every Marksman settler." },
  { name: "Crossbow", category: "Weapons", workstation: "Smithy", materials: "Iron Ingot x5, Wood x5, Leather x2", description: "Armor-piercing ranged weapon. Slower fire rate but hits harder. Excellent against armored targets and siege crews." },
  { name: "Leather Armor", category: "Armor", workstation: "Tailor Workshop", materials: "Leather x6", description: "Basic protective gear. Lightweight, doesn't slow movement. Good for archers and non-combat settlers. Requires Tailoring research." },
  { name: "Chainmail", category: "Armor", workstation: "Smithy", materials: "Iron Ingot x8, Leather x2", description: "Medium armor with solid protection-to-weight ratio. Standard gear for melee fighters. Requires Smithing research." },
  { name: "Plate Armor", category: "Armor", workstation: "Armorer", materials: "Iron Ingot x12, Leather x3", description: "Heavy armor providing maximum protection. Slows movement but makes settlers extremely durable. Requires Armor Crafting research." },
  { name: "Iron Helmet", category: "Armor", workstation: "Armorer", materials: "Iron Ingot x5", description: "Head protection that prevents devastating headshot critical hits. Every combat settler should wear a helmet." },
  { name: "Shield", category: "Armor", workstation: "Carpenter Bench", materials: "Wood x5, Iron Ingot x2", description: "Blocks incoming arrows and provides a chance to deflect melee attacks. Essential for frontline fighters." },
  { name: "Pickaxe", category: "Tools", workstation: "Smithy", materials: "Iron Ingot x3, Wood x2", description: "Increases mining speed and yield per tile. Iron pickaxes mine roughly 2x faster than mining by hand. Always craft these first." },
  { name: "Axe (Tool)", category: "Tools", workstation: "Smithy", materials: "Iron Ingot x4, Wood x3", description: "Increases woodcutting speed. Iron axes chop trees roughly 2x faster. Essential for maintaining wood supply efficiently." },
  { name: "Winter Coat", category: "Clothing", workstation: "Tailor Workshop", materials: "Leather x4, Cloth x2", description: "Provides cold protection. Settlers without winter coats suffer severe cold penalties. Craft one for every settler before winter." },
  { name: "Summer Tunic", category: "Clothing", workstation: "Tailor Workshop", materials: "Cloth x4", description: "Light clothing for warm weather. Prevents overheating during summer heat waves. Swap with winter coats seasonally." },
  { name: "Hat", category: "Clothing", workstation: "Tailor Workshop", materials: "Leather x2, Cloth x1", description: "Small temperature regulation and a modest mood bonus from wearing complete outfits. Optional but nice quality-of-life item." },
  { name: "Bed", category: "Furniture", workstation: "Carpenter Bench", materials: "Wood x8, Cloth x2", description: "Provides comfortable sleep with a mood bonus. Significantly better than sleeping spots. Upgrade all sleeping spots to beds as soon as Carpentry is researched." },
  { name: "Table", category: "Furniture", workstation: "Carpenter Bench", materials: "Wood x10", description: "Required for settlers to eat meals with a mood bonus. Place chairs around it. Essential furniture for the Great Hall." },
  { name: "Chair", category: "Furniture", workstation: "Carpenter Bench", materials: "Wood x5", description: "Provides comfort when settlers sit to eat, research, or recreate. Place at tables, research stations, and recreation areas." },
  { name: "Bookshelf", category: "Furniture", workstation: "Carpenter Bench", materials: "Wood x12", description: "Required for Library rooms. Provides research speed bonus when placed near a Research Table. Also improves room quality." },
  { name: "Stew", category: "Food", workstation: "Cooking Station", materials: "Meat x3, Vegetables x2", description: "Advanced meal with high nutrition and mood bonus. Much better than campfire meals. Requires Advanced Cooking research." },
  { name: "Preserved Food", category: "Food", workstation: "Cooking Station", materials: "Vegetables x4, Salt x1", description: "Long-lasting preserved rations. Shelf life of several seasons vs days for raw food. Essential for winter and siege stockpiles." },
  { name: "Bread", category: "Food", workstation: "Cooking Station", materials: "Barley Flour x3, Water x1", description: "Filling food made from milled barley. Provides good nutrition and food variety for settler meal rotation bonuses." },
  { name: "Ale", category: "Drink", workstation: "Brewing Station", materials: "Barley x5, Water x2", description: "Alcoholic beverage providing significant mood bonus. Also has high trade value with merchants. Requires Brewing research." },
  { name: "Mead", category: "Drink", workstation: "Brewing Station", materials: "Herbs x3, Water x3", description: "Alternative alcoholic drink. Different flavor profile for food variety. Slightly higher trade value than ale." },
  { name: "Healing Salve", category: "Medicine", workstation: "Alchemy Lab", materials: "Herbs x3, Cloth x1", description: "Basic medical item that speeds wound healing. Keep a stockpile for post-raid recovery. Requires Herbalism research." },
];

const categories = ["Weapons", "Armor", "Tools", "Clothing", "Furniture", "Food", "Drink", "Medicine"];

export default function CraftingPage() {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem" }}>
      <h1 style={{ marginBottom: "0.5rem" }}>Crafting &amp; Resources Guide</h1>
      <p style={{ color: "var(--color-text-muted)", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: "2rem" }}>
        Master the crafting system in Going Medieval. From gathering raw resources to operating
        workstations and managing complex production chains, learn how to equip your colony
        with the best weapons, armor, tools, clothing, furniture, food, and drink.
      </p>

      {/* FAQ */}
      <h2 style={{ marginBottom: "1rem" }}>Quick Answers</h2>
      <div className="faq-snippets">
        <details>
          <summary>What is the most important crafting chain to set up first?</summary>
          <p>
            The iron production chain is the most impactful: mine iron ore, smelt it into iron 
            ingots at a Smithy, then craft pickaxes and axes. Better tools mean faster resource 
            gathering across everything else — mining, woodcutting, construction. This snowball 
            effect makes iron tools your highest-priority crafting goal after basic shelter and 
            food. A settler with an iron pickaxe mines 2x faster, which means more iron for 
            weapons, armor, and more tools. The second priority chain is tailoring: leather from 
            hunted animals into winter coats and basic armor. Cold settlers are useless settlers.
          </p>
        </details>
        <details>
          <summary>How do I efficiently manage raw resources?</summary>
          <p>
            Set up dedicated stockpiles near relevant workstations: wood and stone near the 
            Carpenter Bench and construction areas, iron ore and coal near the Smithy, leather 
            and cloth near the Tailor Workshop, and food near the kitchen and cellar. Use the 
            stockpile priority system — keep frequently used materials at high-priority stockpiles 
            close to workstations, and overflow at lower-priority stockpiles further away. Assign 
            at least one settler to hauling tasks. Build storage containers (crates, shelves) at 
            the Carpenter Bench to increase stockpile capacity. A well-organized resource system 
            means settlers spend more time crafting and less time walking across the map.
          </p>
        </details>
        <details>
          <summary>What determines the quality of crafted items?</summary>
          <p>
            Item quality is determined by the crafting settler&apos;s relevant skill level and the 
            workstation&apos;s room quality. A settler with Smithing skill 15 crafts weapons that deal 
            more damage and have higher durability than one with skill 5. Quality tiers: Poor, 
            Normal, Good, Excellent, Masterwork, Legendary. Each tier improves item stats (damage 
            for weapons, protection for armor, comfort for furniture). Room quality provides a 
            small bonus — a Smithy in a well-lit, clean room produces slightly better items. The 
            Master Crafting research (Tier 3) increases the chance of achieving higher quality 
            tiers. Always have your best crafter make combat-critical items.
          </p>
        </details>
      </div>

      {/* Raw Resources */}
      <h2 style={{ marginTop: "3rem", marginBottom: "1rem" }}>Raw Resources</h2>
      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
        Understanding each resource type and how to obtain it is the foundation of efficient 
        crafting. Resources are gathered, mined, harvested, or produced — and each feeds into 
        specific crafting chains.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2rem" }}>
        <div className="card">
          <h3 style={{ fontSize: "1.05rem", margin: "0 0 0.5rem" }}>Wood</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            <strong style={{ color: "var(--color-text)" }}>Source:</strong> Chop trees.{" "}
            <strong style={{ color: "var(--color-text)" }}>Used for:</strong> Building (walls, 
            floors, roofs), crafting (furniture, bows, tools), fuel (campfires, forges). The 
            most versatile and most-used resource. Always maintain a large stockpile. Iron axes 
            speed up woodcutting significantly. Trees regrow over time in most biomes, making 
            wood a renewable resource if managed properly. Hillside biome has abundant wood.
          </p>
        </div>
        <div className="card">
          <h3 style={{ fontSize: "1.05rem", margin: "0 0 0.5rem" }}>Stone / Stone Block</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            <strong style={{ color: "var(--color-text)" }}>Source:</strong> Mine rock tiles. 
            Process into stone blocks at a Stonecutter.{" "}
            <strong style={{ color: "var(--color-text)" }}>Used for:</strong> Stone walls, 
            floors, keeps, reinforced walls, and stone-based workshops (Smithy, Armorer). 
            Stone blocks are fireproof and have high structural integrity. Mountain biome has 
            the most stone. A settler with high Mining skill yields more stone per tile.
          </p>
        </div>
        <div className="card">
          <h3 style={{ fontSize: "1.05rem", margin: "0 0 0.5rem" }}>Clay</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            <strong style={{ color: "var(--color-text)" }}>Source:</strong> Mine clay deposits 
            (visible as lighter-colored soil).{" "}
            <strong style={{ color: "var(--color-text)" }}>Used for:</strong> Clay floors 
            (good insulation), pottery, some crafting recipes. Clay floors are excellent for 
            root cellars due to their insulating properties. Marsh biome has abundant clay. 
            Less critical than stone or wood but useful for specialized applications.
          </p>
        </div>
        <div className="card">
          <h3 style={{ fontSize: "1.05rem", margin: "0 0 0.5rem" }}>Iron Ore / Iron Ingot</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            <strong style={{ color: "var(--color-text)" }}>Source:</strong> Mine iron ore 
            veins (dark metallic patches underground, 3-7 levels deep). Smelt into iron ingots 
            at a Smithy requiring coal as fuel.{" "}
            <strong style={{ color: "var(--color-text)" }}>Used for:</strong> All metal tools, 
            weapons, armor, and reinforced construction. The most important mid-game resource. 
            Without iron ingots, you can&apos;t make metal equipment. Stockpile iron ore early 
            even before you unlock Smithing. Mountain biome has the richest iron deposits.
          </p>
        </div>
        <div className="card">
          <h3 style={{ fontSize: "1.05rem", margin: "0 0 0.5rem" }}>Coal</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            <strong style={{ color: "var(--color-text)" }}>Source:</strong> Mine coal deposits 
            alongside iron at similar depths.{" "}
            <strong style={{ color: "var(--color-text)" }}>Used for:</strong> High-temperature 
            fuel for the Smithy and Armorer. Coal burns longer and hotter than wood, making it 
            more efficient for smelting and forging. Stockpile coal for winter heating — it 
            outlasts wood in campfires and braziers. Essential for powering your metalworking 
            industry efficiently.
          </p>
        </div>
        <div className="card">
          <h3 style={{ fontSize: "1.05rem", margin: "0 0 0.5rem" }}>Leather</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            <strong style={{ color: "var(--color-text)" }}>Source:</strong> Butcher animal 
            corpses at the Butcher Table. Deer, boars, wolves, and bears all provide leather. 
            Tamed sheep provide wool as an alternative.{" "}
            <strong style={{ color: "var(--color-text)" }}>Used for:</strong> Clothing (winter 
            coats), armor (leather armor), and some weapons (longbow requires leather). One of 
            the few resources obtained primarily through hunting rather than mining or farming.
          </p>
        </div>
        <div className="card">
          <h3 style={{ fontSize: "1.05rem", margin: "0 0 0.5rem" }}>Cloth</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            <strong style={{ color: "var(--color-text)" }}>Source:</strong> Process Flax at 
            the Tailor Workshop. Flax is a spring crop. Also obtainable from shearing sheep 
            (converting wool to cloth).{" "}
            <strong style={{ color: "var(--color-text)" }}>Used for:</strong> Summer clothing, 
            bedding, bandages, decorative items. Cloth provides temperature regulation for 
            warmer seasons and is used in crafting medical items.
          </p>
        </div>
        <div className="card">
          <h3 style={{ fontSize: "1.05rem", margin: "0 0 0.5rem" }}>Herbs</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            <strong style={{ color: "var(--color-text)" }}>Source:</strong> Harvest wild herbs 
            or farm them once Herbalism is researched (spring, summer, autumn crop). Marsh 
            biome has abundant herbs.{" "}
            <strong style={{ color: "var(--color-text)" }}>Used for:</strong> Medicine crafting 
            at the Alchemy Lab, flavoring advanced meals, brewing mead. Essential for healing 
            wounded settlers and treating diseases. Always keep 10+ herbs stockpiled for 
            medical emergencies.
          </p>
        </div>
      </div>

      {/* Workstations */}
      <h2 style={{ marginTop: "3rem", marginBottom: "1rem" }}>Crafting Workstations</h2>
      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
        Each workstation produces specific categories of items. Building workstations in a 
        logical layout near their resource stockpiles minimizes settler travel time and 
        maximizes crafting output.
      </p>

      <div style={{ overflowX: "auto", marginBottom: "2rem" }}>
        <table>
          <thead>
            <tr>
              <th>Workstation</th>
              <th>Requires Research</th>
              <th>Produces</th>
              <th>Key Skill</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ fontWeight: 600 }}>Campfire</td>
              <td style={{ color: "var(--color-text-muted)" }}>None</td>
              <td style={{ color: "var(--color-text-muted)" }}>Simple meals</td>
              <td>Cooking</td>
            </tr>
            <tr>
              <td style={{ fontWeight: 600 }}>Butcher Table</td>
              <td style={{ color: "var(--color-text-muted)" }}>None</td>
              <td style={{ color: "var(--color-text-muted)" }}>Meat, Leather from corpses</td>
              <td>Cooking</td>
            </tr>
            <tr>
              <td style={{ fontWeight: 600 }}>Carpenter Bench</td>
              <td style={{ color: "var(--color-text-muted)" }}>Carpentry (Tier 1)</td>
              <td style={{ color: "var(--color-text-muted)" }}>Furniture, wooden weapons, storage</td>
              <td>Construction</td>
            </tr>
            <tr>
              <td style={{ fontWeight: 600 }}>Tailor Workshop</td>
              <td style={{ color: "var(--color-text-muted)" }}>Tailoring (Tier 1)</td>
              <td style={{ color: "var(--color-text-muted)" }}>Clothing, leather armor, cloth</td>
              <td>Tailoring</td>
            </tr>
            <tr>
              <td style={{ fontWeight: 600 }}>Smithy</td>
              <td style={{ color: "var(--color-text-muted)" }}>Smithing (Tier 2)</td>
              <td style={{ color: "var(--color-text-muted)" }}>Metal tools, iron weapons, chainmail</td>
              <td>Smithing</td>
            </tr>
            <tr>
              <td style={{ fontWeight: 600 }}>Armorer</td>
              <td style={{ color: "var(--color-text-muted)" }}>Armor Crafting (Tier 2)</td>
              <td style={{ color: "var(--color-text-muted)" }}>Plate armor, helmets, shields</td>
              <td>Smithing</td>
            </tr>
            <tr>
              <td style={{ fontWeight: 600 }}>Cooking Station</td>
              <td style={{ color: "var(--color-text-muted)" }}>Advanced Cooking (Tier 2)</td>
              <td style={{ color: "var(--color-text-muted)" }}>Stews, bread, preserved food</td>
              <td>Cooking</td>
            </tr>
            <tr>
              <td style={{ fontWeight: 600 }}>Brewing Station</td>
              <td style={{ color: "var(--color-text-muted)" }}>Brewing (Tier 1)</td>
              <td style={{ color: "var(--color-text-muted)" }}>Ale, mead</td>
              <td>Cooking</td>
            </tr>
            <tr>
              <td style={{ fontWeight: 600 }}>Alchemy Lab</td>
              <td style={{ color: "var(--color-text-muted)" }}>Alchemy (Tier 3)</td>
              <td style={{ color: "var(--color-text-muted)" }}>Medicine, potions, compounds</td>
              <td>Medicine</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Key Crafted Items Table */}
      <h2 style={{ marginTop: "3rem", marginBottom: "1rem" }}>Key Crafted Items — {craftedItems.length} Essential Recipes</h2>
      <div style={{ overflowX: "auto", marginBottom: "2rem" }}>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Category</th>
              <th>Workstation</th>
              <th>Materials</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {craftedItems.map((item) => (
              <tr key={item.name}>
                <td style={{ fontWeight: 600, whiteSpace: "nowrap" }}>{item.name}</td>
                <td>
                  <span style={{
                    padding: "0.2rem 0.6rem",
                    borderRadius: "0.25rem",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    background: item.category === "Weapons" || item.category === "Armor" ? "rgba(196, 75, 60, 0.2)" :
                      item.category === "Tools" ? "rgba(201, 144, 58, 0.2)" :
                      item.category === "Food" || item.category === "Drink" ? "rgba(107, 142, 78, 0.2)" :
                      item.category === "Medicine" ? "rgba(122, 92, 58, 0.3)" :
                      "rgba(168, 152, 128, 0.2)",
                    color: item.category === "Weapons" || item.category === "Armor" ? "var(--color-danger)" :
                      item.category === "Tools" ? "var(--color-accent)" :
                      item.category === "Food" || item.category === "Drink" ? "var(--color-success)" :
                      item.category === "Medicine" ? "var(--color-accent-secondary)" :
                      "var(--color-text-muted)",
                  }}>{item.category}</span>
                </td>
                <td style={{ whiteSpace: "nowrap", fontSize: "0.9rem" }}>{item.workstation}</td>
                <td style={{ fontSize: "0.85rem", whiteSpace: "nowrap" }}>{item.materials}</td>
                <td style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", lineHeight: 1.5 }}>{item.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Crafting Efficiency */}
      <h2 style={{ marginTop: "3rem", marginBottom: "1rem" }}>Crafting Efficiency Tips</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2rem" }}>
        <div className="card">
          <h3 style={{ fontSize: "1.05rem", margin: "0 0 0.5rem" }}>Workstation Layout</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            Place workstations close to their resource stockpiles. Your Butcher Table should be 
            near your hunting grounds or a corpse stockpile. The Smithy should be near iron ore 
            and coal stockpiles. The Tailor Workshop should be near leather and cloth storage. 
            Every tile your crafter walks to get materials is time not spent crafting. A compact, 
            well-organized crafting district dramatically increases production output. Build 
            dining areas and bedrooms near crafting zones so crafters don&apos;t waste time commuting 
            between work, food, and sleep.
          </p>
        </div>
        <div className="card">
          <h3 style={{ fontSize: "1.05rem", margin: "0 0 0.5rem" }}>Crafting Queue Management</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            Set crafting bills at each workstation to auto-produce essential items. Set a bill 
            to &quot;craft until you have X&quot; for items like meals (maintain 20), winter coats 
            (maintain 1 per settler), and tools (maintain 2 pickaxes, 2 axes). This prevents 
            over-production of non-essential items and ensures critical supplies never run out. 
            Suspend luxury crafting bills during emergencies or resource shortages. Use the 
            priority system to keep critical items at the top of the queue.
          </p>
        </div>
        <div className="card">
          <h3 style={{ fontSize: "1.05rem", margin: "0 0 0.5rem" }}>Specialist Training</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            Dedicate specific settlers to specific crafting roles. Your highest-Smithing settler 
            should make all weapons and armor. Your highest-Cooking settler should make all meals. 
            Skill improves through practice — the more a settler crafts, the better they become 
            at it. Over time, specialists will produce consistently high-quality items, and 
            eventually masterwork quality. Don&apos;t spread crafting across multiple settlers; 
            concentrate it on your specialists for the best results. A master smith with 20 
            Smithing skill produces legendary weapons that can one-shot unarmored raiders.
          </p>
        </div>
      </div>

      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7 }}>
        Crafting is the engine of your colony&apos;s progression. Every better weapon, warmer coat, 
        and sturdier piece of furniture comes from your crafting setup. Invest in organized 
        stockpiles, skilled specialists, and efficient workstation layouts. A colony that crafts 
        well never wants for anything — from the sharpest swords to the finest meals, your 
        settlers can produce everything they need to thrive on the medieval frontier.
      </p>
    </div>
  );
}
