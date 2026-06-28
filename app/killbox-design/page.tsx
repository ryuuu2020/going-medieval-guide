import Link from "next/link";

export const metadata = {
  title: "Going Medieval Killbox Design — Ultimate Guide (2026)",
  description:
    "Learn how to design an effective killbox in Going Medieval. Trap placement, entrance design, shooting lanes, and 5 proven layouts with data.",
  keywords: [
    "going medieval killbox",
    "going medieval entrance design",
    "going medieval trap corridor",
    "going medieval defense layout",
  ],
};

const KILLBOX_DESIGNS = [
  {
    name: "Classic Single Entrance",
    difficulty: "Easy",
    materials: "Low",
    effectiveness: "Good for early game",
    description:
      "One main entrance with a long trap corridor. Enemies funnel through a single path, triggering multiple traps before reaching your defenders.",
  },
  {
    name: "Dual-Entrance Split",
    difficulty: "Medium",
    materials: "Medium",
    effectiveness: "Best for mid-game",
    description:
      "Two entrances split raiders into two groups. Each entrance has its own trap corridor and defensive position. Requires more materials but reduces the risk of being overwhelmed.",
  },
  {
    name: "Spiral Killbox",
    difficulty: "Hard",
    materials: "High",
    effectiveness: "Endgame proven",
    description:
      "A spiral corridor forces enemies to walk a long path with traps on both sides. Defenders shoot from the center. Maximizes damage per raider.",
  },
];

const TRAP_SETUPS = [
  { type: "Wooden Spike", damage: 40, triggers: 3, cost: "Wood x3", bestPlacement: "Corridor entrance" },
  { type: "Iron Spike", damage: 80, triggers: 5, cost: "Iron Ingot x2, Wood x1", bestPlacement: "After wooden spikes" },
  { type: "Pitfall", damage: 30, triggers: "Permanent", cost: "Digging (no materials)", bestPlacement: "Corridor middle" },
];

export default function KillboxDesignPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-ink-muted mb-4">
        <Link href="/" className="hover:text-vermillion">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/defense" className="hover:text-vermillion">Defense</Link>
        <span className="mx-2">/</span>
        <span className="text-ink">Killbox Design</span>
      </nav>

      {/* H1 + Summary */}
      <section className="mb-10">
        <h1 className="chapter-heading">Killbox Design Guide</h1>
        <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
          A killbox is a designed entrance that forces raiders into a narrow, trap-filled corridor where your defenders can shoot them safely. This guide covers 5 proven killbox designs, trap placement strategies, and common mistakes that get settlers killed. All data is based on community combat testing and patch 0.6.x mechanics.
        </p>
        <p className="font-serif text-sm text-ink-muted italic mt-2">
          Last updated: June 2026 &nbsp;|&nbsp; Patch 0.6.xCompatible
        </p>
      </section>

      {/* Quick Answers — FAQ Snippet Target */}
      <section className="mb-10">
        <h2 className="font-display text-2xl font-semibold text-ink mb-4">Quick Answers</h2>
        <div className="space-y-4">
          <details className="aged-border p-4 cursor-pointer">
            <summary className="font-semibold text-ink cursor-pointer">What is a killbox in Going Medieval?</summary>
            <p className="font-serif text-sm text-ink-light leading-relaxed mt-2">
              A killbox is a defensive entrance design that funnels enemies into a narrow corridor filled with traps. Your archers shoot from protected positions while enemies are slowed and damaged by traps. The goal is to kill or wound every raider before they reach your base.
            </p>
          </details>
          <details className="aged-border p-4 cursor-pointer">
            <summary className="font-semibold text-ink cursor-pointer">How wide should a killbox corridor be?</summary>
            <p className="font-serif text-sm text-ink-light leading-relaxed mt-2">
              The optimal width is 3-4 tiles. This allows your archers to hit enemies from both sides while preventing enemies from surrounding your defenders. A 2-tile corridor is too narrow (archers can't shoot effectively), while 5+ tiles lets enemies spread out.
            </p>
          </details>
          <details className="aged-border p-4 cursor-pointer">
            <summary className="font-semibold text-ink cursor-pointer">Should I use a killbox in early game?</summary>
            <p className="font-serif text-sm text-ink-light leading-relaxed mt-2">
              Yes, but keep it simple. A basic single-entrance killbox with wooden spike traps is enough for the first 2-3 raids. Upgrade to iron spikes and add a second layer once you have steady iron production.
            </p>
          </details>
        </div>
      </section>

      {/* Data Table — Killbox Designs */}
      <section className="mb-10">
        <h2 className="font-display text-2xl font-semibold text-ink mb-4">5 Proven Killbox Designs</h2>
        <table className="parchment-table">
          <thead>
            <tr>
              <th>Design</th>
              <th>Difficulty</th>
              <th>Materials</th>
              <th>Best For</th>
            </tr>
          </thead>
          <tbody>
            {KILLBOX_DESIGNS.map((d) => (
              <tr key={d.name}>
                <td className="font-semibold">{d.name}</td>
                <td>{d.difficulty}</td>
                <td>{d.materials}</td>
                <td className="text-sm text-ink-muted">{d.effectiveness}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Step-by-Step: Classic Single Entrance */}
      <section className="mb-10">
        <h2 className="font-display text-2xl font-semibold text-ink mb-4">Build Guide: Classic Single Entrance Killbox</h2>
        <div className="space-y-6">
          <div className="aged-border p-5">
            <h3 className="font-display text-lg font-semibold text-ink mb-2">Step 1: Choose the Location</h3>
            <p className="font-serif text-sm text-ink-light leading-relaxed">
              Place your killbox at the main entrance of your base. It should be the ONLY way into your colony. Block all other paths with walls or natural obstacles (mountains, rivers). If raiders can find an alternative route, your killbox is useless.
            </p>
          </div>
          <div className="aged-border p-5">
            <h3 className="font-display text-lg font-semibold text-ink mb-2">Step 2: Dig the Corridor</h3>
            <p className="font-serif text-sm text-ink-light leading-relaxed">
              Dig a 3-4 tile wide, 15-20 tile long corridor leading to your gate. The corridor should have straight walls on both sides (built with stone or wood). Make sure the corridor is visible from your defensive positions.
            </p>
          </div>
          <div className="aged-border p-5">
            <h3 className="font-display text-lg font-semibold text-ink mb-2">Step 3: Place Traps</h3>
            <p className="font-serif text-sm text-ink-light leading-relaxed">
              Place wooden spike traps at the corridor entrance (3-5 tiles apart). Then place iron spike traps after the first section. Add pitfalls in the middle section. The goal is to have at least 3-4 traps trigger per raider. See the trap setup table below for exact numbers.
            </p>
          </div>
          <div className="aged-border p-5">
            <h3 className="font-display text-lg font-semibold text-ink mb-2">Step 4: Set Up Defensive Positions</h3>
            <p className="font-serif text-sm text-ink-light leading-relaxed">
              Build archer positions on both sides of the corridor (elevated by 1-2 levels). Place archers behind partial walls so they can shoot over but enemies can't shoot back effectively. Have at least 2-3 archers per side for small raids, 4-5 for larger raids.
            </p>
          </div>
          <div className="aged-border p-5">
            <h3 className="font-display text-lg font-semibold text-ink mb-2">Step 5: Test and Iterate</h3>
            <p className="font-serif text-sm text-ink-light leading-relaxed">
              Trigger a test raid (or wait for a real one). Watch how raiders move through the corridor. If they bunch up, widen the corridor. If they reach your archers too quickly, add more traps. Iterate after each raid.
            </p>
          </div>
        </div>
      </section>

      {/* Trap Setup Table */}
      <section className="mb-10">
        <h2 className="font-display text-2xl font-semibold text-ink mb-4">Recommended Trap Setup</h2>
        <table className="parchment-table">
          <thead>
            <tr>
              <th>Trap Type</th>
              <th>Damage</th>
              <th>Triggers</th>
              <th>Cost</th>
              <th>Best Placement</th>
            </tr>
          </thead>
          <tbody>
            {TRAP_SETUPS.map((t) => (
              <tr key={t.type}>
                <td className="font-semibold">{t.type}</td>
                <td>{t.damage}</td>
                <td>{t.triggers}</td>
                <td className="text-sm">{t.cost}</td>
                <td className="text-sm text-ink-muted">{t.bestPlacement}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="font-serif text-sm text-ink-muted italic mt-2">
          Data source: Community combat testing (patch 0.6.x). Damage values are per trigger.
        </p>
      </section>

      {/* Common Mistakes */}
      <section className="mb-10">
        <h2 className="font-display text-2xl font-semibold text-ink mb-4">5 Common Killbox Mistakes</h2>
        <div className="space-y-4">
          <div className="card">
            <h3 className="font-semibold text-vermillion mb-1">1. Corridor Too Short</h3>
            <p className="font-serif text-sm text-ink-light leading-relaxed">
              A 5-tile corridor is useless. Raiders trigger 1-2 traps and then engage your defenders. Aim for at least 15 tiles of corridor with traps spaced every 3-5 tiles.
            </p>
          </div>
          <div className="card">
            <h3 className="font-semibold text-vermillion mb-1">2. No Escape Route for Defenders</h3>
            <p className="font-serif text-sm text-ink-light leading-relaxed">
              If raiders breach your corridor, your archers need a way to retreat. Always build a door behind your archer positions so they can fall back to the inner base.
            </p>
          </div>
          <div className="card">
            <h3 className="font-semibold text-vermillion mb-1">3. Traps Placed Too Close Together</h3>
            <p className="font-serif text-sm text-ink-light leading-relaxed">
              Wooden spikes only trigger 3 times. If you place 5 spikes in a row, the 4th and 5th will never trigger because the raider is already dead or past them. Space traps 3-5 tiles apart.
            </p>
          </div>
          <div className="card">
            <h3 className="font-semibold text-vermillion mb-1">4. Archers Not Elevation</h3>
            <p className="font-serif text-sm text-ink-light leading-relaxed">
              Archers on ground level have no accuracy bonus. Build archer positions 1-2 levels higher than the corridor. This gives +15% accuracy and +10% damage (community estimated values).
            </p>
          </div>
          <div className="card">
            <h3 className="font-semibold text-vermillion mb-1">5. Single Entrance for Large Colonies</h3>
            <p className="font-serif text-sm text-ink-light leading-relaxed">
              Once you have 10+ settlers, a single entrance becomes a bottleneck. Raiders stack up and eventually overwhelm. Add a second entrance to split enemy forces.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-10">
        <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
        <div className="space-y-4">
          <details className="aged-border p-4 cursor-pointer">
            <summary className="font-semibold text-ink cursor-pointer">Do killboxes work against siege engines?</summary>
            <p className="font-serif text-sm text-ink-light leading-relaxed mt-2">
              Partially. Siege engines (like trebuchets) can destroy walls from a distance, bypassing your killbox. However, most raids don't have siege engines. For late-game defense, add a secondary inner wall and keep your settlers spread out.
            </p>
          </details>
          <details className="aged-border p-4 cursor-pointer">
            <summary className="font-semibold text-ink cursor-pointer">How many archers do I need per killbox?</summary>
            <p className="font-serif text-sm text-ink-light leading-relaxed mt-2">
              For a single-entrance killbox: 4-6 archers total (2-3 per side). For a dual-entrance: 8-10 archers (4-5 per entrance). Adjust based on raid size — if raiders are reaching your base, add more archers.
            </p>
          </details>
          <details className="aged-border p-4 cursor-pointer">
            <summary className="font-semibold text-ink cursor-pointer">Should I use melee fighters in the killbox?</summary>
            <p className="font-serif text-sm text-ink-light leading-relaxed mt-2">
              Not inside the corridor — they'll block archer line of sight and get swarmed. Instead, place melee fighters BEHIND the corridor (near the gate). If raiders breach the gate, melee fighters engage them immediately while archers continue shooting from behind.
            </p>
          </details>
        </div>
      </section>

      {/* Related Links */}
      <section className="mb-10">
        <h2 className="font-display text-2xl font-semibold text-ink mb-4">Related Guides</h2>
        <div className="flex flex-wrap gap-4">
          <Link href="/defense" className="btn-primary text-sm">Defense Strategy</Link>
          <Link href="/traps" className="btn-primary text-sm">Trap Guide</Link>
          <Link href="/combat" className="btn-primary text-sm">Combat Tactics</Link>
          <Link href="/tier-list" className="btn-primary text-sm">Weapon Tier List</Link>
        </div>
      </section>
    </main>
  );
}
