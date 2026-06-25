import type { Metadata } from "next";
import { research } from "@/lib/data";

export const metadata: Metadata = {
  title: "Research | Going Medieval Guide",
  description:
    "Complete research tree guide for Going Medieval. All 16 technologies across 3 tiers explained. Learn chronicles/books mechanics, optimal research order, and how to speed up your colony's technological progress.",
};

export default function ResearchPage() {
  const tier1 = research.filter((r) => r.tier === 1);
  const tier2 = research.filter((r) => r.tier === 2);
  const tier3 = research.filter((r) => r.tier === 3);

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem" }}>
      <h1 style={{ marginBottom: "0.5rem" }}>Research Tree Guide</h1>
      <p style={{ color: "var(--color-text-muted)", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: "2rem" }}>
        Master the research system in Going Medieval. Unlock new buildings, weapons, armor,
        and capabilities across 3 technology tiers. Learn how to optimize your research speed
        and pick the right tech path for your colony&apos;s survival and growth.
      </p>

      {/* FAQ */}
      <h2 style={{ marginBottom: "1rem" }}>Quick Answers</h2>
      <div className="faq-snippets">
        <details>
          <summary>What is the best research order for new players?</summary>
          <p>
            Start with <strong>Stonecutting</strong> (stone walls for defense), then{" "}
            <strong>Agriculture</strong> (faster crop growth and higher yields), then{" "}
            <strong>Tailoring</strong> (winter clothing and basic armor), followed by{" "}
            <strong>Carpentry</strong> (furniture, beds, wooden bows). In Tier 2, prioritize{" "}
            <strong>Smithing</strong> for metal tools, then <strong>Animal Taming</strong> for
            renewable food, and <strong>Advanced Cooking</strong> for better meals. Avoid rushing
            military techs — food and shelter security matters more in the early game. The exact
            order can shift based on your biome and starting settlers&apos; skills.
          </p>
        </details>
        <details>
          <summary>How do Chronicles and Books speed up research?</summary>
          <p>
            Chronicles and Books are consumable research items that provide instant research
            progress when used at a Research Table. You can find them by looting ruins, trading
            with merchants, or crafting them at the Library (requires a settler with high
            Intellectual skill to write). A single Chronicle provides a small boost, while Books
            provide significant progress. Stockpile Chronicles and Books and use them strategically
            to rush through high-cost Tier 3 technologies. They&apos;re especially valuable for
            skipping technologies you don&apos;t need immediately to reach deeper techs faster.
          </p>
        </details>
        <details>
          <summary>How long does research take in Going Medieval?</summary>
          <p>
            Research time depends on three factors: the technology&apos;s base cost (Tier 1 items are
            fast, Tier 3 items are slow), the Intellectual skill level of the settler doing
            research (each skill point provides roughly 10% faster research), and the quality
            of the research room. A settler with Intellectual skill 10 researches roughly twice
            as fast as one with skill 5. Building the Research Table inside a designated room with
            a floor, door, and roof provides a research speed bonus (room quality matters). A
            Library room provides an additional permanent bonus when your researcher works inside.
            With a maxed Intellectual settler in an optimized Library, you can complete all
            Tier 1 technologies in under one season.
          </p>
        </details>
      </div>

      {/* How Research Works */}
      <h2 style={{ marginTop: "3rem", marginBottom: "1rem" }}>How Research Works</h2>
      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
        Research is conducted at the Research Table by a settler assigned to the Research task.
        The settler&apos;s Intellectual skill directly determines research speed — every point in
        Intellectual provides a measurable speed increase. Research continues as long as the
        settler is working at the table, and progress is saved so you can pause and resume
        without losing work.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
        <div className="card">
          <h3 style={{ fontSize: "1.05rem", margin: "0 0 0.5rem" }}>Chronicles &amp; Books</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            These consumable items provide instant research progress when used. Chronicles are
            single-use items found in ruins or purchased from merchants. Books are more powerful
            and can be crafted by settlers with high Intellectual skill at a Library. Both
            items bypass the time requirement — when you use a Chronicle or Book, the research
            progress is applied immediately. Strategy tip: save your Books for Tier 3 technologies
            which have the highest research costs. Using Books on Tier 1 techs is wasteful since
            those complete quickly through normal research.
          </p>
        </div>
        <div className="card">
          <h3 style={{ fontSize: "1.05rem", margin: "0 0 0.5rem" }}>Research Room Quality</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            Place your Research Table in an enclosed room with a roof, door, and proper flooring
            to create a research room bonus. The room quality tier (from &quot;Awful&quot; to 
            &quot;Legendary&quot;) provides a multiplicative bonus to research speed. A Library room 
            type (with bookshelves) provides the highest bonus. Keep the research room clean — 
            dirt and filth reduce room quality. Build it away from noisy production areas since 
            settler comfort in the room also affects research efficiency. A candle or torch 
            provides lighting for night research sessions.
          </p>
        </div>
        <div className="card">
          <h3 style={{ fontSize: "1.05rem", margin: "0 0 0.5rem" }}>Technology Prerequisites</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            Each technology has prerequisites that must be researched first. Tier 1 technologies
            have no prerequisites — you can research any of them immediately. Tier 2 technologies
            require specific Tier 1 techs. Tier 3 technologies require specific Tier 2 techs (and
            sometimes multiple). The research tree has multiple branching paths, so you can skip
            some technologies to reach others faster. For example, you don&apos;t need to research
            Herbalism before Smithing — they&apos;re on different branches. Plan your research path
            based on what your colony needs most urgently.
          </p>
        </div>
      </div>

      {/* Full Research Table by Tier */}
      <h2 style={{ marginTop: "3rem", marginBottom: "1rem" }}>Complete Research Tree — All {research.length} Technologies</h2>

      {/* Tier 1 */}
      <h3 style={{ marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <span style={{
          background: "var(--color-success)",
          color: "var(--color-bg)",
          padding: "0.2rem 0.75rem",
          borderRadius: "0.25rem",
          fontSize: "0.85rem",
          fontWeight: 700,
        }}>Tier 1</span>
        <span style={{ color: "var(--color-text-muted)", fontWeight: 400, fontSize: "0.9rem" }}>— No prerequisites required</span>
      </h3>
      <div style={{ overflowX: "auto", marginBottom: "2.5rem" }}>
        <table>
          <thead>
            <tr>
              <th>Technology</th>
              <th>Requires</th>
              <th>Unlocks</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {tier1.map((r) => (
              <tr key={r.name}>
                <td style={{ fontWeight: 600, whiteSpace: "nowrap" }}>{r.name}</td>
                <td style={{ whiteSpace: "nowrap", color: "var(--color-text-muted)" }}>{r.requires}</td>
                <td style={{ fontSize: "0.9rem" }}>{r.unlocks}</td>
                <td style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", lineHeight: 1.5 }}>{r.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Tier 2 */}
      <h3 style={{ marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <span style={{
          background: "var(--color-accent)",
          color: "var(--color-bg)",
          padding: "0.2rem 0.75rem",
          borderRadius: "0.25rem",
          fontSize: "0.85rem",
          fontWeight: 700,
        }}>Tier 2</span>
        <span style={{ color: "var(--color-text-muted)", fontWeight: 400, fontSize: "0.9rem" }}>— Requires specific Tier 1 technologies</span>
      </h3>
      <div style={{ overflowX: "auto", marginBottom: "2.5rem" }}>
        <table>
          <thead>
            <tr>
              <th>Technology</th>
              <th>Requires</th>
              <th>Unlocks</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {tier2.map((r) => (
              <tr key={r.name}>
                <td style={{ fontWeight: 600, whiteSpace: "nowrap" }}>{r.name}</td>
                <td style={{ whiteSpace: "nowrap", color: "var(--color-text-muted)" }}>{r.requires}</td>
                <td style={{ fontSize: "0.9rem" }}>{r.unlocks}</td>
                <td style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", lineHeight: 1.5 }}>{r.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Tier 3 */}
      <h3 style={{ marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <span style={{
          background: "var(--color-danger)",
          color: "#fff",
          padding: "0.2rem 0.75rem",
          borderRadius: "0.25rem",
          fontSize: "0.85rem",
          fontWeight: 700,
        }}>Tier 3</span>
        <span style={{ color: "var(--color-text-muted)", fontWeight: 400, fontSize: "0.9rem" }}>— Requires specific Tier 2 technologies</span>
      </h3>
      <div style={{ overflowX: "auto", marginBottom: "2.5rem" }}>
        <table>
          <thead>
            <tr>
              <th>Technology</th>
              <th>Requires</th>
              <th>Unlocks</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {tier3.map((r) => (
              <tr key={r.name}>
                <td style={{ fontWeight: 600, whiteSpace: "nowrap" }}>{r.name}</td>
                <td style={{ whiteSpace: "nowrap", color: "var(--color-text-muted)" }}>{r.requires}</td>
                <td style={{ fontSize: "0.9rem" }}>{r.unlocks}</td>
                <td style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", lineHeight: 1.5 }}>{r.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Priority Research Order */}
      <h2 style={{ marginTop: "3rem", marginBottom: "1rem" }}>Recommended Research Priority for New Players</h2>
      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
        This recommended order balances food security, defense, and quality of life for 
        standard Valley biome starts. Adjust based on your biome and playstyle.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
        {[
          { order: 1, name: "Stonecutting", reason: "Upgrade to stone walls ASAP. Fireproof and vastly more durable than wood. Essential before first serious raid." },
          { order: 2, name: "Agriculture", reason: "Faster crop growth and higher yields. More food means more settlers and less time spent farming." },
          { order: 3, name: "Tailoring", reason: "Winter clothing for cold seasons. Leather armor for basic protection. Both are survival-critical." },
          { order: 4, name: "Carpentry", reason: "Proper beds, furniture, wooden bows. Improves settler mood, rest quality, and gives ranged combat options." },
          { order: 5, name: "Smithing", reason: "First Tier 2 tech. Metal tools work faster than wooden. Iron swords and pickaxes are game-changers." },
          { order: 6, name: "Animal Taming", reason: "Renewable milk, eggs, and wool. Tamed animals make food production sustainable long-term." },
          { order: 7, name: "Advanced Cooking", reason: "Better meals = happier settlers. Preserved food lasts through winter without spoiling." },
          { order: 8, name: "Masonry", reason: "Stone Keeps and reinforced walls. Necessary for surviving mid-game sieges and large raids." },
          { order: 9, name: "Fortifications", reason: "Merlons, fortified gates, archer towers. Transforms your wall into an actual castle defense system." },
          { order: 10, name: "Armor Crafting", reason: "Plate armor makes settlers nearly invincible against basic raiders. Worth the iron investment." },
          { order: 11, name: "Brewing", reason: "Ale and mead for mood bonuses. High trade value. Best left for when basic needs are fully met." },
          { order: 12, name: "Herbalism", reason: "Medicine and healing. Important, but injuries can be survived with bed rest in the early game." },
        ].map((item) => (
          <div key={item.order} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
            <span style={{
              background: "var(--color-accent)",
              color: "var(--color-bg)",
              width: "28px",
              height: "28px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              flexShrink: 0,
              fontSize: "0.85rem",
            }}>{item.order}</span>
            <div>
              <strong>{item.name}</strong>
              <p style={{ color: "var(--color-text-muted)", margin: "0.25rem 0 0", lineHeight: 1.6, fontSize: "0.9rem" }}>
                {item.reason}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Optimization Tips */}
      <h2 style={{ marginTop: "3rem", marginBottom: "1rem" }}>Research Optimization Tips</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
        <div className="card">
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            <strong style={{ color: "var(--color-text)" }}>Dedicated Researcher.</strong> Assign
            one settler with the highest Intellectual skill to do nothing but research. Give them
            a bed near the Research Table and set their work priority to Research (Priority 1).
            A dedicated researcher can clear all Tier 1 technologies within the first season,
            giving your colony a massive early-game advantage.
          </p>
        </div>
        <div className="card">
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            <strong style={{ color: "var(--color-text)" }}>Library Room Bonus.</strong> Build
            a dedicated library room with a Research Table, bookshelves, proper flooring, and
            a roof. The room quality bonus from a library stacks multiplicatively with your
            researcher&apos;s Intellectual skill, potentially doubling research speed compared
            to a table placed in a random corner.
          </p>
        </div>
        <div className="card">
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            <strong style={{ color: "var(--color-text)" }}>Save Books for Tier 3.</strong>
            Never use Chronicles or Books on Tier 1 technologies — they complete quickly through
            normal research. Hoard all books until you reach Tier 3, where research costs are
            exponentially higher. A single Book can save days of research time on a Tier 3 tech.
            If you find Chronicles in early ruins, use them on Tier 2 techs that unlock critical
            production buildings.
          </p>
        </div>
        <div className="card">
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            <strong style={{ color: "var(--color-text)" }}>Lighting and Comfort.</strong>
            Place a torch or candle near the Research Table for lighting. Your researcher works
            at night too, and darkness causes a work speed penalty. Keep the room at a comfortable
            temperature. A too-cold or too-hot research room slows research progress. A nearby
            dining area means less travel time for meals.
          </p>
        </div>
      </div>

      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7 }}>
        Research is the most important long-term progression system in Going Medieval. A colony
        that falls behind in technology will struggle against increasingly difficult raids, 
        winter food shortages, and settler mood crises. Make research a top priority from Day 1,
        and you&apos;ll have the tools to handle anything the medieval frontier throws at you.
      </p>
    </div>
  );
}
