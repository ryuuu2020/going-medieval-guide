import Link from "next/link";

export const metadata = {
  title: "Going Medieval Double Wall vs Single Wall — Which is Better? (2026)",
  description:
    "Complete comparison of double wall vs single wall in Going Medieval. Data on cost, defense effectiveness, and 3 best wall designs with layouts.",
  keywords: [
    "going medieval double wall",
    "going medieval single wall defense",
    "going medieval wall design",
    "going medieval base layout",
  ],
};

const WALL_COMPARISON = [
  {
    aspect: "Defense Effectiveness",
    singleWall: "Enemies breach in 1 raid if wall is destroyed",
    doubleWall: "Enemies must destroy 2 walls to enter — buys critical time",
    winner: "Double Wall",
  },
  {
    aspect: "Material Cost",
    singleWall: "100-150 stone for a 20-tile perimeter",
    doubleWall: "200-300 stone for same perimeter (2x cost)",
    winner: "Single Wall",
  },
  {
    aspect: "Construction Time",
    singleWall: "1-2 settlers can complete in 1-2 days",
    doubleWall: "Requires 2-3 settlers working 3-5 days",
    winner: "Single Wall",
  },
  {
    aspect: "Trap Placement Space",
    singleWall: "No space between wall and base — traps must be outside",
    doubleWall: "3-4 tile buffer zone for traps between walls",
    winner: "Double Wall",
  },
  {
    aspect: "Repair Complexity",
    singleWall: "Easy — repair 1 wall after raid",
    doubleWall: "More complex — may need to repair both walls",
    winner: "Single Wall",
  },
];

const WALL_DESIGNS = [
  {
    name: "Single Wall + Moat",
    cost: "Low",
    difficulty: "Easy",
    description: "Dig a 2-tile wide moat around your base, then build a single stone wall behind it. Enemies must cross the moat (slowed) then breach the wall.",
  },
  {
    name: "Double Wall (Standard)",
    cost: "Medium-High",
    difficulty: "Medium",
    description: "Two stone walls with a 3-tile buffer zone. Place traps in the buffer. This is the most common mid-game design.",
  },
  {
    name: "Triple Layer (Endgame)",
    cost: "Very High",
    difficulty: "Hard",
    description: "Three walls with 2 buffer zones. Reserved for late-game when raids have siege engines. Overkill for early-mid game.",
  },
];

export default function DoubleWallVsSingleWallPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-ink-muted mb-4">
        <Link href="/" className="hover:text-vermilion">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/defense" className="hover:text-vermilion">Defense</Link>
        <span className="mx-2">/</span>
        <span className="text-ink">Double Wall vs Single Wall</span>
      </nav>

      {/* H1 + Summary */}
      <section className="mb-10">
        <h1 className="chapter-heading">Double Wall vs Single Wall — Which is Better?</h1>
        <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
          Should you build a single wall or double wall in Going Medieval? This guide compares both designs with data on cost, defense effectiveness, and construction time. For most players, a <strong className="text-ink">double wall with a 3-tile buffer zone</strong> is the best balance of cost and defense. Single walls are only viable in early game (first 2-3 raids).
        </p>
        <p className="font-serif text-sm text-ink-muted italic mt-2">
          Last updated: June 2026 &nbsp;|&nbsp; Patch 0.6.x Compatible
        </p>
      </section>

      {/* Quick Answers — FAQ Snippet Target */}
      <section className="mb-10">
        <h2 className="font-display text-2xl font-semibold text-ink mb-4">Quick Answers</h2>
        <div className="space-y-4">
          <details className="aged-border p-4 cursor-pointer">
            <summary className="font-semibold text-ink cursor-pointer">Is a double wall worth it in Going Medieval?</summary>
            <p className="font-serif text-sm text-ink-light leading-relaxed mt-2">
              Yes, for mid to late game. A double wall forces raiders to destroy two separate walls before entering your base. The buffer zone between walls also gives you space to place traps and ranged defenders. The extra stone cost (2x) is worth it once you have steady stone production.
            </p>
          </details>
          <details className="aged-border p-4 cursor-pointer">
            <summary className="font-semibold text-ink cursor-pointer">How far apart should double walls be?</summary>
            <p className="font-serif text-sm text-ink-light leading-relaxed mt-2">
              The optimal distance is <strong className="text-ink">3-4 tiles</strong>. This gives enough space for trap placement and archer firing positions, without making the buffer zone so large that enmies can spread out. A 2-tile gap is too narrow for effective trap placement.
            </p>
          </details>
          <details className="aged-border p-4 cursor-pointer">
            <summary className="font-semibold text-ink cursor-pointer">Can I start with a single wall?</summary>
            <p className="font-serif text-sm text-ink-light leading-relaxed mt-2">
              Yes. In early game (first 10-15 settlers), a single stone wall is enough. Focus on getting steady stone production first. Upgrade to double wall once you have 2+ stone mines and spare stone for expansion.
            </p>
          </details>
        </div>
      </section>

      {/* Data Table — Comparison */}
      <section className="mb-10">
        <h2 className="font-display text-2xl font-semibold text-ink mb-4">Single Wall vs Double Wall — Comparison</h2>
        <table className="parchment-table">
          <thead>
            <tr>
              <th>Aspect</th>
              <th>Single Wall</th>
              <th>Double Wall</th>
              <th>Winner</th>
            </tr>
          </thead>
          <tbody>
            {WALL_COMPARISON.map((row) => (
              <tr key={row.aspect}>
                <td className="font-semibold">{row.aspect}</td>
                <td className="text-sm">{row.singleWall}</td>
                <td className="text-sm">{row.doubleWall}</td>
                <td className="font-semibold text-vermilion">{row.winner}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Step-by-Step: Building a Double Wall */}
      <section className="mb-10">
        <h2 className="font-display text-2xl font-semibold text-ink mb-4">How to Build a Double Wall — Step by Step</h2>
        <div className="space-y-6">
          <div className="aged-border p-5">
            <h3 className="font-display text-lg font-semibold text-ink mb-2">Step 1: Plan the Layout</h3>
            <p className="font-serif text-sm text-ink-light leading-relaxed">
              Walk around your base perimeter. Mark where the outer wall will go (3-4 tiles outside your buildings). Then mark the inner wall (3-4 tiles inside the outer wall). Make sure the gap between walls is consistent — 3 tiles is the sweet spot.
            </p>
          </div>
          <div className="aged-border p-5">
            <h3 className="font-display text-lg font-semibold text-ink mb-2">Step 2: Build the Outer Wall First</h3>
            <p className="font-serif text-sm text-ink-light leading-relaxed">
              Build the outer wall with stone (not wood — wood walls have too little HP). Make it 2 levels high so enemies can't climb over. Leave 1-2 gates for entrance(s). The outer wall doesn't need to be pretty — it's just the first line of defense.
            </p>
          </div>
          <div className="aged-border p-5">
            <h3 className="font-display text-lg font-semibold text-ink mb-2">Step 3: Dig the Buffer Zone</h3>
            <p className="font-serif text-sm text-ink-light leading-relaxed">
              In the 3-tile gap between walls, dig the ground to create a slight depression (slows enemies). Then place traps: wooden spikes near the outer gate, iron spikes further in, and pitfalls in the middle. Also build archer positions on the inner wall (elevated).
            </p>
          </div>
          <div className="aged-border p-5">
            <h3 className="font-display text-lg font-semibold text-ink mb-2">Step 4: Build the Inner Wall</h3>
            <p className="font-serif text-sm text-ink-light leading-relaxed">
              The inner wall should be stronger than the outer wall (use stone blocks, not rough stone). This is your final defensive line. Place your best archers and melee fighters near the inner wall gates. If raiders breach the outer wall, they still have to fight through the buffer zone and breach the inner wall.
            </p>
          </div>
          <div className="aged-border p-5">
            <h3 className="font-display text-lg font-semibold text-ink mb-2">Step 5: Test and Adjust</h3>
            <p className="font-serif text-sm text-ink-light leading-relaxed">
              Trigger a test raid. Watch how raiders move. If they breach the outer wall too quickly, add more traps. If they're not triggering traps (pathing around them), adjust trap placement. Iterate after each raid.
            </p>
          </div>
        </div>
      </section>

      {/* 3 Recommended Designs */}
      <section className="mb-10">
        <h2 className="font-display text-2xl font-semibold text-ink mb-4">3 Recommended Wall Designs</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {WALL_DESIGNS.map((d) => (
            <div key={d.name} className="card">
              <h3 className="font-display text-lg font-semibold text-ink mb-2">{d.name}</h3>
              <div className="flex gap-2 mb-3">
                <span className="text-xs px-2 py-1 rounded" style={{ backgroundColor: 'var(--color-parchment-deep)', color: 'var(--color-text-muted)' }}>Cost: {d.cost}</span>
                <span className="text-xs px-2 py-1 rounded" style={{ backgroundColor: 'var(--color-parchment-deep)', color: 'var(--color-text-muted)' }}>Difficulty: {d.difficulty}</span>
              </div>
              <p className="font-serif text-sm text-ink-light leading-relaxed">{d.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="mb-10">
        <h2 className="font-display text-2xl font-semibold text-ink mb-4">4 Common Wall-Building Mistakes</h2>
        <div className="space-y-4">
          <div className="card">
            <h3 className="font-semibold text-vermilion mb-1">1. Using Wood for the Outer Wall</h3>
            <p className="font-serif text-sm text-ink-light leading-relaxed">
              Wood walls have ~50% less HP than stone walls. Raiders with torches can burn through a wood wall in seconds. Always use stone for the outer wall (and definitely for the inner wall).
            </p>
          </div>
          <div className="card">
            <h3 className="font-semibold text-vermilion mb-1">2. No Gates in the Inner Wall</h3>
            <p className="font-serif text-sm text-ink-light leading-relaxed">
              If raiders breach the outer wall and your settlers need to retreat, they need a way through the inner wall. Always build at least one gate in the inner wall (preferably two, on opposite sides).
            </p>
          </div>
          <div className="card">
            <h3 className="font-semibold text-vermilion mb-1">3. Buffer Zone Too Narrow</h3>
            <p className="font-serif text-sm text-ink-light leading-relaxed">
              A 1-2 tile gap between walls is useless — no space for traps or archer positions. Aim for 3-4 tiles. If you're short on stone, build a smaller double-wall section around your main entrance only.
            </p>
          </div>
          <div className="card">
            <h3 className="font-semibold text-vermilion mb-1">4. Forgetting to Upgrade from Single to Double</h3>
            <p className="font-serif text-sm text-ink-light leading-relaxed">
              Many players build a single wall and never upgrade. By the time raids get tough (15+ raiders), a single wall is not enough. Plan your double wall upgrade once you have 8+ settlers and steady stone production.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-10">
        <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
        <div className="space-y-4">
          <details className="aged-border p-4 cursor-pointer">
            <summary className="font-semibold text-ink cursor-pointer">Does wall height matter?</summary>
            <p className="font-serif text-sm text-ink-light leading-relaxed mt-2">
              Yes. A 2-level wall prevents enemies from climbing over. However, building walls 3+ levels high is usually a waste of materials — raiders will target the gate instead of climbing.
            </p>
          </details>
          <details className="aged-border p-4 cursor-pointer">
            <summary className="font-semibold text-ink cursor-pointer">Should I build walls before winter?</summary>
            <p className="font-serif text-sm text-ink-light leading-relaxed mt-2">
              Yes. Winter raids are especially dangerous because your settlers are already dealing with cold and food shortages. Make sure your walls are fully built and repaired before the first winter.
            </p>
          </details>
          <details className="aged-border p-4 cursor-pointer">
            <summary className="font-semibold text-ink cursor-pointer">Can I use a moat instead of a wall?</summary>
            <p className="font-serif text-sm text-ink-light leading-relaxed mt-2">
              A moat slows enemies but doesn't stop them. Enemies will eventually fill the moat with dirt or find a way around. Use a moat as a supplement to walls, not a replacement.
            </p>
          </details>
        </div>
      </section>

      {/* Related Links */}
      <section>
        <h2 className="font-display text-2xl font-semibold text-ink mb-4">Related Guides</h2>
        <div className="flex flex-wrap gap-4">
          <Link href="/killbox-design" className="btn-primary text-sm">Killbox Design</Link>
          <Link href="/defense" className="btn-primary text-sm">Defense Strategy</Link>
          <Link href="/traps" className="btn-primary text-sm">Trap Guide</Link>
          <Link href="/base-layout" className="btn-primary text-sm">Base Layout Guide</Link>
        </div>
      </section>
    </main>
  );
}
