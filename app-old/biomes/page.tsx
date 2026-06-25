import type { Metadata } from "next";
import { biomes } from "@/lib/data";

export const metadata: Metadata = {
  title: "Biomes and Map Seeds Guide | Going Medieval Guide",
  description:
    "Complete guide to all 4 biomes in Going Medieval — Mountain, Valley, Hillside, and Marsh. Compare temperature, resources, difficulty, and find the best map seeds for your playstyle.",
};

export default function BiomesPage() {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem" }}>
      <h1 style={{ marginBottom: "0.5rem" }}>Biomes and Map Seeds Guide</h1>
      <p style={{ color: "var(--color-text-muted)", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: "2rem" }}>
        Your choice of biome is the single most impactful decision you make when starting a new
        colony in Going Medieval. It determines resource availability, temperature extremes,
        wildlife threats, and overall difficulty. Choose wisely — the biome shapes every aspect
        of your settlement strategy.
      </p>

      {/* FAQ */}
      <h2 style={{ marginBottom: "1rem" }}>Quick Answers</h2>
      <div className="faq-snippets">
        <details>
          <summary>What is the best biome for beginners?</summary>
          <p>
            Valley is the undisputed best biome for new players. It offers a balanced mix of all
            resources — plenty of wood, fertile soil for farming, accessible stone and iron, and
            a temperate climate with distinct but manageable seasons. Raiders are present but not
            overwhelming, and you won&apos;t face the extreme resource scarcity or harsh temperatures
            of other biomes. Start here, learn the game&apos;s systems, and then challenge yourself
            with harder biomes once you&apos;re comfortable.
          </p>
        </details>
        <details>
          <summary>How do Going Medieval map seeds work?</summary>
          <p>
            Map seeds are text strings you enter when creating a new game that determine the
            procedural generation of terrain, resource deposits, and starting locations. The same
            seed and biome combination always produces the same map. Community-shared seeds let
            you play on proven maps with good layouts. Seeds are case-sensitive. You can enter
            any word or phrase — try descriptive names like &quot;IronMountain&quot; or random combinations.
          </p>
        </details>
        <details>
          <summary>Can I change biomes mid-game?</summary>
          <p>
            No, your biome choice is permanent for that save file. The biome affects core game
            mechanics including temperature ranges, resource spawn rates, animal types, and
            environmental hazards. If you&apos;re unhappy with your current biome, you&apos;ll need to
            start a new game. This is why it&apos;s worth spending time in the map seed screen to
            find a layout you like before committing to a long playthrough.
          </p>
        </details>
      </div>

      {/* Biome Comparison Table */}
      <h2 style={{ marginTop: "3rem", marginBottom: "1rem" }}>Biome Comparison</h2>
      <div style={{ overflowX: "auto" }}>
        <table>
          <thead>
            <tr>
              <th>Biome</th>
              <th>Temperature</th>
              <th>Resources</th>
              <th>Difficulty</th>
            </tr>
          </thead>
          <tbody>
            {biomes.map((b) => (
              <tr key={b.name}>
                <td style={{ fontWeight: 600, whiteSpace: "nowrap" }}>{b.name}</td>
                <td style={{ fontSize: "0.9rem" }}>{b.temperature}</td>
                <td style={{ fontSize: "0.9rem" }}>{b.resources}</td>
                <td style={{ fontSize: "0.9rem", color: b.difficulty.includes("Hard") ? "var(--color-danger)" : b.difficulty.includes("Easy") ? "var(--color-success)" : "var(--color-accent)" }}>{b.difficulty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Valley */}
      <h2 style={{ marginTop: "3rem", marginBottom: "1rem" }}>Valley — The Beginner&apos;s Paradise</h2>
      <div className="card" style={{ borderLeft: "4px solid var(--color-success)", marginBottom: "1.5rem" }}>
        <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, margin: 0 }}>
          Valley is the quintessential Going Medieval experience. Temperatures swing through all
          four distinct seasons, giving you the full seasonal gameplay loop without the extreme
          punishments of harsher biomes. The fertile soil yields abundant crops, forests provide
          ample wood for early construction, and stone and iron deposits are readily available
          without requiring desperate mining expeditions. Wildlife is diverse and includes
          huntable deer and rabbits alongside threats like wolves. For newcomers and players who
          want a balanced experience with room to experiment, Valley is the clear choice.
          First-time players should absolutely start here — you&apos;ll learn seasonal management,
          construction mechanics, and combat fundamentals in a forgiving environment.
        </p>
      </div>

      {/* Hillside */}
      <h2 style={{ marginTop: "2rem", marginBottom: "1rem" }}>Hillside — The Woodland Haven</h2>
      <div className="card" style={{ borderLeft: "4px solid var(--color-accent)", marginBottom: "1.5rem" }}>
        <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, margin: 0 }}>
          Hillside offers the richest wood and clay deposits of any biome, making it perfect for
          players who favor wood-based construction and early-game expansion. The mild climate
          with cold winters means you still need to prepare for seasonal challenges, but the
          wealth of building materials gives you flexibility in how you approach defense and
          base design. Don&apos;t be lulled by the abundant surface resources — Hillside has only
          moderate stone and iron deposits, so you&apos;ll need to mine deeper and plan your metal
          usage carefully. The terrain&apos;s natural elevation changes create interesting defensive
          opportunities, with high ground providing natural archer positions. Hillside is the
          &quot;goldilocks&quot; biome — harder than Valley but not punishing like Mountain, making it
          an excellent second playthrough for players ready for a moderate challenge.
        </p>
      </div>

      {/* Marsh */}
      <h2 style={{ marginTop: "2rem", marginBottom: "1rem" }}>Marsh — The Herbalist&apos;s Dream</h2>
      <div className="card" style={{ borderLeft: "4px solid var(--color-accent)", marginBottom: "1.5rem" }}>
        <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, margin: 0 }}>
          Marsh takes Valley&apos;s formula and flips it on its head. Instead of balanced resources,
          you get an extreme abundance of herbs, peat (a burnable fuel), and clay — but stone
          and iron are critically scarce. The warm, humid climate means farming is productive
          and Winter is less brutal, but your inability to easily mine building stone and forge
          metal fundamentally changes how you play. In Marsh, you must trade aggressively for
          stone and iron, prioritize recycling metal scrap into ingots, and rely heavily on
          wood-based construction supplemented by clay bricks. Herbalism and Alchemy research
          paths are particularly valuable here because you have the herb supply to support them.
          Marsh rewards creative problem-solving — players who master the trading system and
          learn to make every scrap of metal count will thrive. For experienced players seeking
          a unique challenge that tests resource management skills, Marsh is a refreshing
          departure from standard colony sim gameplay.
        </p>
      </div>

      {/* Mountain */}
      <h2 style={{ marginTop: "2rem", marginBottom: "1rem" }}>Mountain — The Hard Mode Choice</h2>
      <div className="card" style={{ borderLeft: "4px solid var(--color-danger)", marginBottom: "1.5rem" }}>
        <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, margin: 0 }}>
          Mountain is Going Medieval&apos;s hard mode, and it doesn&apos;t apologize. Year-round cold
          temperatures mean you&apos;re always fighting the elements — Winter clothing and indoor
          heating aren&apos;t seasonal concerns, they&apos;re permanent requirements. The terrain is
          rugged with limited flat land for farming, forcing you to terrace hillsides or embrace
          underground farming from Day 1. Wood is scarce in Mountain biomes, so your early-game
          construction relies on whatever wood you can scavenge before transitioning to stone
          as quickly as possible. The silver lining? Stone, iron ore, and coal are abundant
          underground. Once you establish mining operations, you&apos;ll never want for building
          materials or forge fuel. The wildlife skews dangerous — expect bears and wolf packs
          that will attack settlers who stray too far from the walls. Mountain playthroughs
          demand mastery of every game system: efficient food production, heat management,
          defensive fortifications, underground construction, and combat tactics. This biome is
          for veterans who find Valley too easy and want to test their colony management skills
          under constant pressure.
        </p>
      </div>

      {/* Map Seeds */}
      <h2 style={{ marginTop: "3rem", marginBottom: "1rem" }}>Map Seed Recommendations</h2>
      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
        Map seeds are a powerful tool for finding great starting positions. The Going Medieval
        community has discovered and shared numerous seeds that produce maps with favorable
        terrain, rich resource deposits, and defensible starting locations. Here are some
        strategies for finding and using seeds effectively.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "1.5rem" }}>
        <div>
          <h3 style={{ fontSize: "1.15rem", margin: "0 0 0.5rem" }}>Finding Good Seeds</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            When generating maps, look for: a central hill or elevated plateau (natural defense),
            nearby surface iron deposits (early metal tools), fertile soil visible on the
            starting screen (guaranteed good farming), and a water source within your build
            radius (critical for drinking and firefighting). Avoid maps where your starting
            area is at the bottom of a valley — raiders get height advantage shooting down
            at your settlers. Seeds with multiple resource types visible on the starting screen
            are generally better than seeds where you can only see one resource type.
          </p>
        </div>
        <div>
          <h3 style={{ fontSize: "1.15rem", margin: "0 0 0.5rem" }}>Seed Naming Conventions</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            Community members often use descriptive seed names. Try combinations that describe
            what you want: words like &quot;IronRiver&quot;, &quot;SafeHaven&quot;, &quot;GreenValley&quot;, or descriptive
            phrases. Seeds are case-sensitive — &quot;ValleyKing&quot; and &quot;valleyking&quot; produce different
            maps. Numbers and special characters work in seeds. Some players use memorable dates,
            names, or inside jokes as seeds. Experiment with different seed formats to find maps
            that match your preferred playstyle and biome combination.
          </p>
        </div>
        <div>
          <h3 style={{ fontSize: "1.15rem", margin: "0 0 0.5rem" }}>Testing Seeds</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            You can quickly preview a seed by starting a new game and immediately looking at the
            map. Pause the game and use the camera to scout the starting area — check for visible
            resources, terrain features, and potential defensive positions. If the seed doesn&apos;t
            look promising, exit to menu and try another. This &quot;seed rolling&quot; process saves you
            from committing to a bad map and restarting hours later when you discover a critical
            resource shortage. Spend 5-10 minutes seed rolling before committing to a serious
            playthrough.
          </p>
        </div>
      </div>

      {/* Choosing a Biome */}
      <h2 style={{ marginTop: "3rem", marginBottom: "1rem" }}>How to Choose Your Biome</h2>
      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "1rem" }}>
        Your biome choice should align with your experience level and preferred challenge type.
        New players should always start with Valley — it&apos;s the intended first experience and
        teaches you all game systems without punishing you excessively for mistakes. Hillside is
        the natural second step, introducing resource scarcity while keeping the overall
        experience manageable. Marsh is for players who enjoy the trading and crafting aspects
        of the game and want a unique economic challenge. Mountain is exclusively for veterans
        who have mastered seasonal survival, food management, and defensive combat and want the
        ultimate test of their colony management skills.
      </p>

      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7 }}>
        Remember that difficulty in Going Medieval isn&apos;t just about surviving raiders — it&apos;s
        about the compounding effect of environmental pressure, resource scarcity, and settler
        morale. A Mountain biome isn&apos;t just harder because enemies are tougher; it&apos;s harder
        because your settlers are cold, hungry, resource-poor, and fighting predators while
        trying to build a colony on frozen rock. Choose the biome that matches the type of
        story you want your colony to tell. A scrappy Mountain settlement that survives against
        all odds tells a very different story than a prosperous Valley town with sprawling
        fields and a bustling Great Hall.
      </p>
    </div>
  );
}
