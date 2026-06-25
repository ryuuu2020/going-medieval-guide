import type { Metadata } from "next";
import { crops, animals, seasons } from "@/lib/data";

export const metadata: Metadata = {
  title: "Farming | Going Medieval Guide",
  description:
    "Complete farming and food guide for Going Medieval. Master all 11 crops across 4 seasons, learn soil fertility and irrigation, food preservation (cellars, pickling), and animal husbandry for sustainable food production.",
};

export default function FarmingPage() {
  const tamableAnimals = animals.filter((a) => a.tamable);
  const wildAnimals = animals.filter((a) => !a.tamable);

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem" }}>
      <h1 style={{ marginBottom: "0.5rem" }}>Farming &amp; Food Guide</h1>
      <p style={{ color: "var(--color-text-muted)", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: "2rem" }}>
        Keep your colony fed year-round with strategic farming, seasonal planning, and
        food preservation. Master all {crops.length} crop types, understand animal husbandry,
        and build the underground storage systems that surviving Going Medieval requires.
      </p>

      {/* FAQ */}
      <h2 style={{ marginBottom: "1rem" }}>Quick Answers</h2>
      <div className="faq-snippets">
        <details>
          <summary>What crops should I plant in my first spring?</summary>
          <p>
            Plant <strong>Cabbage</strong> (fastest growth at 4 days), <strong>Barley</strong>{" "}
            (high yield, used for flour and brewing), and <strong>Carrot</strong> (long growing 
            season, versatile). A 5x5 field of each feeds 3-4 settlers comfortably. Add{" "}
            <strong>Herbs</strong> for medicine once you unlock Herbalism. Avoid planting{" "}
            Apple Trees in your first year — they take 14 days to mature and won&apos;t produce 
            until your second year. Focus on fast-growing annuals to establish your food supply.
          </p>
        </details>
        <details>
          <summary>How does food preservation work in Going Medieval?</summary>
          <p>
            Food preservation uses three main methods. <strong>Underground root cellars</strong>{" "}
            (3+ levels underground) maintain a constant cool temperature that dramatically slows 
            spoilage. <strong>Preserved foods</strong> crafted at the Cooking Station (requires 
            Advanced Cooking research) last significantly longer than raw ingredients.{" "}
            <strong>Pickling</strong> extends vegetable shelf life. Build your cellar with 
            clay or stone floors for insulation, add an airlock with double doors, and keep 
            it away from heat sources. A well-built cellar keeps food fresh through the 
            entire winter season.
          </p>
        </details>
        <details>
          <summary>Why are my crops failing to grow?</summary>
          <p>
            Crops fail for several reasons: planting in the wrong season (check each crop&apos;s 
            season requirement), temperature extremes (frost kills most crops, heat waves wilt 
            them), poor soil fertility (some areas have lower natural fertility — use fertile 
            soil patches visible on the map), lack of irrigation during dry spells, or planting 
            too late in the season so crops don&apos;t mature before the season changes. Also note 
            that crops need a settler assigned to Farming to be planted and harvested — unassigned 
            fields will sit idle.
          </p>
        </details>
      </div>

      {/* Seasonal Overview */}
      <h2 style={{ marginTop: "3rem", marginBottom: "1rem" }}>Seasonal Farming Calendar</h2>
      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
        Going Medieval has {seasons.length} seasons, each with distinct temperature ranges and 
        available crops. Plan your planting calendar around these seasonal windows to ensure 
        continuous food production.
      </p>

      <div style={{ overflowX: "auto", marginBottom: "2rem" }}>
        <table>
          <thead>
            <tr>
              <th>Season</th>
              <th>Temperature</th>
              <th>Available Crops</th>
              <th>Threats</th>
              <th>Strategy</th>
            </tr>
          </thead>
          <tbody>
            {seasons.map((s) => (
              <tr key={s.name}>
                <td style={{ fontWeight: 600, whiteSpace: "nowrap" }}>{s.name}</td>
                <td style={{ fontSize: "0.9rem", whiteSpace: "nowrap" }}>{s.temperature}</td>
                <td style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>{s.crops}</td>
                <td style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>{s.threats}</td>
                <td style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", lineHeight: 1.5 }}>{s.tips}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Complete Crops Table */}
      <h2 style={{ marginTop: "3rem", marginBottom: "1rem" }}>All {crops.length} Crops</h2>
      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
        Each crop has a specific growing season, maturation time, and use. Diversify your 
        fields to maintain food variety (important for settler mood) and ensure something 
        is always growing regardless of the season.
      </p>

      <div style={{ overflowX: "auto", marginBottom: "2rem" }}>
        <table>
          <thead>
            <tr>
              <th>Crop</th>
              <th>Season</th>
              <th>Grow Time</th>
              <th>Yield</th>
              <th>Primary Use</th>
            </tr>
          </thead>
          <tbody>
            {crops.map((c) => (
              <tr key={c.name}>
                <td style={{ fontWeight: 600, whiteSpace: "nowrap" }}>{c.name}</td>
                <td style={{ fontSize: "0.9rem", whiteSpace: "nowrap" }}>{c.season}</td>
                <td style={{ whiteSpace: "nowrap" }}>{c.growTime}</td>
                <td style={{ whiteSpace: "nowrap" }}>{c.yield}</td>
                <td style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", lineHeight: 1.5 }}>{c.use}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Soil and Irrigation */}
      <h2 style={{ marginTop: "3rem", marginBottom: "1rem" }}>Soil Fertility &amp; Irrigation</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2rem" }}>
        <div className="card">
          <h3 style={{ fontSize: "1.05rem", margin: "0 0 0.5rem" }}>Soil Types</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            Soil fertility varies across the map. Rich soil (darker patches) grows crops noticeably 
            faster and yields more per harvest. Regular soil (lighter brown) is adequate for most 
            crops. Poor soil (rocky or sandy patches) slows growth and reduces yields. The Valley 
            biome has the most fertile soil, while Mountain and Marsh biomes have limited farming 
            areas. Use the terrain overlay to identify rich soil patches when planning your farm 
            layout. Building floors over rich soil removes the fertility bonus permanently.
          </p>
        </div>
        <div className="card">
          <h3 style={{ fontSize: "1.05rem", margin: "0 0 0.5rem" }}>Irrigation</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            Water is essential for crop growth. Place farms near natural water sources like rivers 
            and lakes. During dry seasons and heat waves, crops may wilt without adequate water. 
            You can build irrigation ditches (channels dug from water sources to farm areas) to 
            maintain soil moisture. Rain provides natural irrigation — Mountain and Hillside biomes 
            receive more rain than Valley. Mushrooms grown underground rely on moisture from the 
            surrounding soil rather than surface water, making them drought-proof once established.
          </p>
        </div>
      </div>

      {/* Food Preservation */}
      <h2 style={{ marginTop: "3rem", marginBottom: "1rem" }}>Food Preservation Methods</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2rem" }}>
        <div className="card">
          <h3 style={{ fontSize: "1.05rem", margin: "0 0 0.5rem" }}>Underground Root Cellar</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            The most effective food preservation method. Dig at least 3 levels underground to 
            reach consistently cool temperatures (near freezing at 4+ levels). Build a dedicated 
            storage room with clay or stone floors for insulation. The deeper you go, the colder 
            it gets, and the slower your food spoils. Place food stockpiles inside the cellar and 
            set them to high priority. Build an airlock — two doors with a 1-2 tile gap — at the 
            entrance to maintain temperature when settlers come and go. Keep the cellar away from 
            campfires, forges, and other heat sources that warm surrounding tiles.
          </p>
        </div>
        <div className="card">
          <h3 style={{ fontSize: "1.05rem", margin: "0 0 0.5rem" }}>Preserved Food Crafting</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            The Cooking Station (unlocked via Advanced Cooking research) can convert raw ingredients 
            into preserved meals that last significantly longer. Preserved stews and pickled 
            vegetables have 3-4x the shelf life of raw ingredients. These are your winter food 
            reserves. Start crafting preserved food in autumn when harvest yields are highest. 
            Prioritize preserving perishable crops like Cabbage and Beet over naturally long-lasting 
            items like Barley grain. Preserved food also has higher trade value than raw ingredients, 
            making food an excellent trade commodity.
          </p>
        </div>
        <div className="card">
          <h3 style={{ fontSize: "1.05rem", margin: "0 0 0.5rem" }}>Pickling &amp; Salt</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            Pickling extends vegetable shelf life using salt or vinegar. Salt can be mined in 
            certain biomes or purchased from merchants. Pickled vegetables last through multiple 
            seasons and provide decent nutrition. This method is great for preserving surplus 
            harvest from autumn to carry through winter and into early spring when new crops 
            haven&apos;t matured yet. Pickled foods also count as a different food type for settler 
            food variety, helping maintain meal-related mood bonuses.
          </p>
        </div>
      </div>

      {/* Animals Table */}
      <h2 style={{ marginTop: "3rem", marginBottom: "1rem" }}>Animal Husbandry — All {animals.length} Animals</h2>
      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
        Animals provide meat, leather, milk, eggs, wool, and companionship. {tamableAnimals.length}{" "}
        species can be tamed for domestication. Wild animals must be hunted for their resources.
      </p>

      <div style={{ overflowX: "auto", marginBottom: "2rem" }}>
        <table>
          <thead>
            <tr>
              <th>Animal</th>
              <th>Type</th>
              <th>Products</th>
              <th>Tamable</th>
              <th>Danger Level</th>
            </tr>
          </thead>
          <tbody>
            {animals.map((a) => (
              <tr key={a.name}>
                <td style={{ fontWeight: 600, whiteSpace: "nowrap" }}>{a.name}</td>
                <td style={{ whiteSpace: "nowrap" }}>
                  <span style={{
                    padding: "0.2rem 0.6rem",
                    borderRadius: "0.25rem",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    background: a.tamable ? "rgba(107, 142, 78, 0.2)" :
                      a.type.includes("Aggressive") ? "rgba(196, 75, 60, 0.2)" :
                      "rgba(168, 152, 128, 0.2)",
                    color: a.tamable ? "var(--color-success)" :
                      a.type.includes("Aggressive") ? "var(--color-danger)" :
                      "var(--color-text-muted)",
                  }}>{a.type}</span>
                </td>
                <td style={{ fontSize: "0.9rem" }}>{a.products}</td>
                <td style={{ whiteSpace: "nowrap" }}>
                  <span style={{
                    color: a.tamable ? "var(--color-success)" : "var(--color-text-muted)",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                  }}>
                    {a.tamable ? "Yes" : "No"}
                  </span>
                </td>
                <td style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>{a.danger}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Tamable vs Wild */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2rem" }}>
        <div className="card" style={{ borderLeft: "4px solid var(--color-success)" }}>
          <h3 style={{ fontSize: "1.05rem", margin: "0 0 0.5rem" }}>Tamable Animals ({tamableAnimals.length})</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            Tamable animals require the Animal Taming research (Tier 2) and an Animal Pen. 
            Once tamed, they provide renewable resources: Cows and Goats produce daily milk, 
            Chickens lay eggs daily, Sheep produce wool periodically, and Dogs assist in 
            hunting and combat. Tamed animals need food — Hay is the primary livestock feed 
            (plant in Autumn). Cats are the easiest animal to maintain as they feed themselves 
            by hunting rats. Tamed animals reproduce over time, so a breeding pair can generate 
            a sustainable herd. Protect livestock from predators (wolves, foxes) by building 
            enclosed pens with roofs.
          </p>
        </div>
        <div className="card" style={{ borderLeft: "4px solid var(--color-danger)" }}>
          <h3 style={{ fontSize: "1.05rem", margin: "0 0 0.5rem" }}>Wild Animals ({wildAnimals.length})</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            Wild animals must be hunted for their resources. Assign settlers with Marksman skill 
            to hunting tasks. Deer, Rabbits, and Foxes are easy prey that provide leather and 
            meat. Boars fight back when attacked — hunt with at least 2 settlers or use ranged 
            weapons. Wolves hunt in packs and are dangerous; avoid early-game wolf hunting unless 
            well-armed. Bears are extremely dangerous and can kill settlers quickly; hunt only 
            with plate-armored melee fighters or ranged hit-and-run tactics. Rats eat stored 
            food if they enter your stockpile — keep food storage sealed with doors.
          </p>
        </div>
      </div>

      {/* Food Sustainability Tips */}
      <h2 style={{ marginTop: "3rem", marginBottom: "1rem" }}>Food Sustainability Tips</h2>
      <div className="card" style={{ marginBottom: "2rem" }}>
        <ul style={{ color: "var(--color-text-muted)", lineHeight: 2, margin: 0, paddingLeft: "1.25rem" }}>
          <li>Maintain at least a 10-day food reserve at all times — a bad harvest or long winter can deplete stocks rapidly</li>
          <li>Diversify your crops — if one crop type fails (blight, wrong season), others compensate</li>
          <li>Build multiple smaller fields instead of one giant field — you can stagger planting and harvesting</li>
          <li>Grow Mushrooms underground for year-round food production immune to surface weather</li>
          <li>Apple Trees are a long-term investment — plant them in Year 1, and they&apos;ll produce forever once mature</li>
          <li>Assign your best Farmer settler to harvesting to maximize yield per crop tile</li>
          <li>Hay is critical for livestock — plant it in autumn and stockpile it for winter animal feed</li>
          <li>Turn surplus food into preserved meals or trade goods — spoiled food is wasted labor</li>
        </ul>
      </div>

      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7 }}>
        Food is the foundation of your colony. Running out of food is the most common cause of 
        colony failure in Going Medieval. Plan your farms a season ahead, build deep cellars 
        for winter storage, and diversify your food sources between crops, hunting, and animal 
        husbandry. A well-fed colony is a happy, productive colony that can weather any storm 
        the medieval frontier brings.
      </p>
    </div>
  );
}
