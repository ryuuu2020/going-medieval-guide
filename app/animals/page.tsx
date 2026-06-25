import type { Metadata } from "next";
import { animals } from "@/lib/data";

export const metadata: Metadata = {
  title: "Animals Guide | Going Medieval Guide",
  description:
    "Complete guide to all 13 animals in Going Medieval. Learn hunting strategies, taming mechanics, animal products (leather, meat, milk, eggs, wool), pen building, and which animals to prioritize for your colony.",
};

export default function AnimalsPage() {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem" }}>
      <h1 style={{ marginBottom: "0.5rem" }}>Animals Guide</h1>
      <p style={{ color: "var(--color-text-muted)", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: "2rem" }}>
        Animals are a vital resource in Going Medieval — providing food, materials, defense, and
        companionship. Understanding which animals to hunt, tame, or avoid can mean the difference
        between a thriving colony and a starving settlement. From deer in the forests to bears in
        the mountains, every creature plays a role in your colony&apos;s story.
      </p>

      {/* FAQ */}
      <h2 style={{ marginBottom: "1rem" }}>Quick Answers</h2>
      <div className="faq-snippets">
        <details>
          <summary>How do I tame animals in Going Medieval?</summary>
          <p>
            Taming requires researching Animal Taming (Tier 2, requires Agriculture) and building
            an Animal Pen. Select a settler with high Animal Handling skill and right-click on a
            tamable animal. The taming attempt has a success rate based on the settler&apos;s Animal
            Handling skill level. Failed attempts can anger the animal, so bring backup in case
            it turns aggressive. Tamed animals need food and shelter — build pens with troughs
            and a roofed area for protection from weather and predators.
          </p>
        </details>
        <details>
          <summary>What are the best animals to tame first?</summary>
          <p>
            Chickens should be your first taming priority — they produce eggs daily, require
            minimal feed, and breed quickly. Goats are second-best for renewable milk with low
            maintenance. Sheep provide wool, leather, and meat, making them excellent all-around
            livestock. Cows produce the most milk but eat more than goats. Save Cats and Dogs
            for later once your food supply is stable — their utility (pest control and combat
            assistance) is valuable but doesn&apos;t directly feed your colony.
          </p>
        </details>
        <details>
          <summary>How dangerous are wolves and bears?</summary>
          <p>
            Wolves hunt in packs and will attack settlers who stray alone outside your walls.
            Never send a lone settler to hunt wolves — bring at least 2 armed settlers with
            ranged weapons. Bears are the most dangerous animal in the game. A single bear can
            kill an armored settler in seconds. Only hunt bears with 3+ well-armed settlers
            using ranged attacks from elevated positions. If a bear wanders near your colony,
            draft everyone inside and wait for it to leave unless you have overwhelming force.
          </p>
        </details>
      </div>

      {/* Complete Animal Table */}
      <h2 style={{ marginTop: "3rem", marginBottom: "1rem" }}>Complete Animal List</h2>
      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
        There are {animals.length} animal species in Going Medieval — 7 wild species that must
        be hunted and 6 tamable species that can be domesticated for renewable resources. Each
        animal has unique behavior, products, and danger levels.
      </p>
      <div style={{ overflowX: "auto" }}>
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
                <td style={{ fontSize: "0.9rem", whiteSpace: "nowrap" }}>{a.type}</td>
                <td style={{ fontSize: "0.9rem" }}>{a.products}</td>
                <td style={{ fontSize: "0.9rem", color: a.tamable ? "var(--color-success)" : "var(--color-text-muted)", fontWeight: a.tamable ? 600 : 400 }}>
                  {a.tamable ? "Yes" : "No"}
                </td>
                <td style={{ fontSize: "0.9rem", color: a.danger.includes("Very High") ? "var(--color-danger)" : a.danger.includes("High") ? "var(--color-warning, #c9903a)" : "var(--color-text-muted)" }}>
                  {a.danger}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Hunting Strategies */}
      <h2 style={{ marginTop: "3rem", marginBottom: "1rem" }}>Hunting Strategies</h2>
      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "1rem" }}>
        Hunting provides meat and leather, two of the most important early-game resources in Going
        Medieval. Meat feeds your settlers through the early days before your farms produce
        harvests, and leather is essential for clothing, armor, and crafting at the Tailor
        Workshop. Different animals require different hunting approaches based on their behavior
        and danger level.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "1.5rem" }}>
        <div className="card" style={{ borderLeft: "4px solid var(--color-success)" }}>
          <h3 style={{ fontSize: "1.15rem", margin: "0 0 0.5rem" }}>Passive Animals — Safe Hunting</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            Deer, rabbits, and foxes are passive — they flee when approached or attacked. Hunt
            deer for the best meat-to-effort ratio; their large bodies yield substantial leather
            and meat. Rabbits are fast and yield small amounts, making them low-priority targets
            unless you need leather in a pinch. Foxes provide leather but little meat. For deer,
            use a single hunter with a bow — the deer will run but can be chased and shot before
            escaping. Rabbits require two hunters to corner, or wait until they stop moving to
            take a shot. Passive animals are your safest food source early-game and should be
            hunted aggressively when spotted near your colony.
          </p>
        </div>
        <div className="card" style={{ borderLeft: "4px solid var(--color-accent)" }}>
          <h3 style={{ fontSize: "1.15rem", margin: "0 0 0.5rem" }}>Aggressive Animals — Combat Hunting</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            Boars, wolves, and bears will fight back when attacked — this turns hunting into
            combat. Boars are medium threat; they&apos;ll charge the hunter but can be killed by a
            single armed settler with decent melee or marksman skill. Wolves hunt in packs and
            will swarm isolated hunters. Always hunt wolves with at least 2 settlers and use
            ranged weapons from a safe distance. Bears require a coordinated team effort — draft
            3-4 settlers, position them at range on elevated ground, and focus fire. Never engage
            a bear in melee unless absolutely necessary. The leather and meat from a bear hunt
            are substantial enough to justify the risk, but only when your colony is well-armed
            and your settlers are trained in combat.
          </p>
        </div>
        <div className="card" style={{ borderLeft: "4px solid var(--color-danger)" }}>
          <h3 style={{ fontSize: "1.15rem", margin: "0 0 0.5rem" }}>Hunting Efficiency Tips</h3>
          <ul style={{ color: "var(--color-text-muted)", lineHeight: 1.8, margin: 0, paddingLeft: "1.25rem" }}>
            <li>Prioritize settlers with Marksman skill for hunting — they hit more shots and waste fewer arrows</li>
            <li>Build a Butcher Table near your hunting grounds to process carcasses before they spoil</li>
            <li>Animal corpses spoil in 2-3 days if not processed — always butcher immediately after a successful hunt</li>
            <li>Use Auto Hunt (draft a settler and right-click on animal groups) for passive animals near your base</li>
            <li>Don&apos;t overhunt — animal populations respawn slowly. Leave some breeding pairs to maintain hunting grounds</li>
            <li>Winter makes animals scarcer as some species hibernate or migrate — stockpile meat and leather before cold seasons</li>
          </ul>
        </div>
      </div>

      {/* Taming and Livestock */}
      <h2 style={{ marginTop: "3rem", marginBottom: "1rem" }}>Taming and Livestock Management</h2>
      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "1rem" }}>
        Tamed animals provide renewable resources without the risk of hunting. Once you unlock
        Animal Taming research (Tier 2, requires Agriculture), you can build Animal Pens and
        begin domesticating the 6 tamable species. A well-managed livestock operation produces
        food, materials, and utility benefits that make your colony partially self-sustaining.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "1.5rem" }}>
        <div>
          <h3 style={{ fontSize: "1.15rem", margin: "0 0 0.5rem" }}>Pen Construction</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            Build pens with wooden or stone walls to contain your animals. Each pen needs a
            Trough (filled with Hay or food) for feeding, a roofed area for weather protection,
            and enough space for the animals to move. Overcrowded pens cause animal stress and
            reduce production rates. A general guideline: 4x4 tiles per chicken, 6x6 per goat
            or sheep, and 8x8 per cow. Place pens near your settlement core so assigned Animal
            Handling settlers can tend to them efficiently. Protect pens from predators —
            wolves and foxes will attack unprotected livestock.
          </p>
        </div>
        <div>
          <h3 style={{ fontSize: "1.15rem", margin: "0 0 0.5rem" }}>Animal Products</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            Milk (Cows, Goats) is collected daily by settlers with Animal Handling skill and
            used in cooking and as a drinkable food source. Eggs (Chickens) are laid daily and
            can be eaten raw or cooked into meals. Wool (Sheep) is sheared periodically and
            processed into cloth at the Tailor Workshop — the only renewable source of cloth
            fiber besides farming Flax. Leather and Meat from slaughtering excess livestock
            provide a controllable food injection when needed. Dogs assist in combat and hunting,
            bonding with settlers for mood bonuses. Cats patrol for rats and vermin, passively
            protecting your food stockpiles from contamination and loss.
          </p>
        </div>
        <div>
          <h3 style={{ fontSize: "1.15rem", margin: "0 0 0.5rem" }}>Feeding and Winter Care</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            Livestock needs food year-round, and Winter is the critical period. Stockpile Hay
            (grown in Autumn) in your animal pens&apos; Troughs before Winter arrives. Without
            adequate feed, animals will starve — and a starved animal provides no products before
            eventually dying. Goats require the least feed and are the most Winter-hardy livestock.
            Chickens eat very little but stop laying eggs if cold-stressed; keep chicken coops
            heated. Sheep need the most feed and are the most expensive to maintain through Winter,
            but their wool production justifies the cost. Build heated indoor pens for maximum
            Winter productivity — animals, like settlers, produce better when warm.
          </p>
        </div>
      </div>

      {/* Danger Management */}
      <h2 style={{ marginTop: "3rem", marginBottom: "1rem" }}>Predator Management and Safety</h2>
      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "1rem" }}>
        Aggressive predators — wolves, bears, and boars — can threaten your settlers if they
        wander too close to your colony. Proactive predator management prevents settler deaths
        and protects your livestock from attacks.
      </p>

      <div className="card" style={{ borderLeft: "4px solid var(--color-danger)", marginBottom: "1.5rem" }}>
        <h3 style={{ fontSize: "1.15rem", margin: "0 0 0.5rem" }}>Predator Defense Checklist</h3>
        <ul style={{ color: "var(--color-text-muted)", lineHeight: 1.8, margin: 0, paddingLeft: "1.25rem" }}>
          <li>Build walls around your entire settlement, including animal pens — predators can&apos;t pass through walls</li>
          <li>Station a settler with Marksman skill in an archer tower facing the direction predators commonly approach from</li>
          <li>Keep at least one tamed Dog — they will alert to nearby threats and assist in combat</li>
          <li>If a bear or wolf pack is spotted near your colony, draft all outdoor settlers and move them inside immediately</li>
          <li>Hunt dangerous predators proactively before they wander into your colony perimeter</li>
          <li>Don&apos;t leave food or animal corpses outside your walls — they attract predators</li>
        </ul>
      </div>

      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7 }}>
        Animals are more than just a food source in Going Medieval — they&apos;re an entire ecosystem
        that interacts with your colony. Hunt wisely, tame strategically, and protect your
        settlers and livestock from the dangers that lurk in the medieval wilderness. A colony
        that manages its animal resources well will never want for leather, meat, milk, eggs,
        or wool — the building blocks of clothing, armor, food sustainability, and settler
        happiness.
      </p>
    </div>
  );
}
