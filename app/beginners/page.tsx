type OpeningStep = { title: string; focus: string; guidance: string };

const OPENING_STEPS: OpeningStep[] = [
  { title: 'Read the map', focus: 'Terrain and access', guidance: 'Choose a site that gives you workable building ground, nearby materials, and a route your settlers can defend. Do not assume a river automatically irrigates a field.' },
  { title: 'Secure shelter and storage', focus: 'Immediate survival', guidance: 'Build only what the starting colony needs to sleep, store essential items, and keep work paths short. Exact room sizes and bed counts depend on the starting group and current scenario.' },
  { title: 'Start a food plan', focus: 'Food before expansion', guidance: 'Create a field and cooking plan that matches the crops, seed supply, and research options visible in the current save. Use the crops guide for evidence-aware choices.' },
  { title: 'Create a research plan', focus: 'Solve the next bottleneck', guidance: 'Open the current research panel and choose the node that addresses your immediate food, production, or defense problem. Avoid copying a fixed Agriculture → Construction order.' },
  { title: 'Prepare a defensible route', focus: 'Raid readiness', guidance: 'Keep one controlled entrance, a safe route for defenders, and a fallback position. Test traps and gates before relying on a fixed layout.' },
  { title: 'Stabilize before scaling', focus: 'Labor and logistics', guidance: 'Add workshops, underground storage, hunting, trade, or additional fields only when the current food and shelter chain can support the labor cost.' },
];

export const metadata = {
  title: 'Going Medieval Beginner Guide — First Decisions and Survival Priorities',
  description:
    'A version-aware Going Medieval beginner guide focused on first decisions, shelter, food, research, defense, and avoiding unsupported fixed day-by-day rules.',
  keywords: ['going medieval beginner guide', 'going medieval walkthrough', 'going medieval first days', 'going medieval tutorial'],
};

export default function BeginnersPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-10">
          <section>
            <h1 className="chapter-heading">Going Medieval Beginner Guide</h1>
            <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
              A good opening is not a rigid ten-day checklist. Map, scenario, settlers, skills, weather, and available resources change the correct order. This guide gives you a decision sequence for the first settlement and points to the detailed pages where current-version evidence is still required.
            </p>
            <div className="aged-border p-5 mt-5" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
              <p className="font-serif text-sm text-ink leading-relaxed"><strong className="text-vermillion">Version boundary:</strong> The game has moved beyond the old 1.0 framing. Exact crop timing, raid size, room dimensions, research costs, and resource targets should be read from the current save rather than treated as universal rules.</p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Opening Decision Sequence</h2>
            <div className="space-y-4">
              {OPENING_STEPS.map((step, index) => (
                <div className="journal-card p-5" key={step.title}>
                  <div className="flex gap-4 items-start">
                    <span className="step-number">{index + 1}</span>
                    <div><h3 className="font-display text-xl font-semibold text-ink">{step.title}</h3><p className="font-label text-xs uppercase tracking-widest text-vermillion mt-1">{step.focus}</p><p className="font-serif text-base text-ink-light leading-relaxed mt-2">{step.guidance}</p></div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">First Settlement Checklist</h2>
            <ul className="space-y-3 font-serif text-base text-ink-light list-disc list-inside">
              <li>Every settler has a safe place to sleep, even if the first shelter is temporary.</li>
              <li>A stockpile is close enough to reduce hauling without blocking the defensive route.</li>
              <li>Food production, cooking, and storage are planned as one chain.</li>
              <li>The next research node is chosen from the current bottleneck, not a universal script.</li>
              <li>The first entrance can be reached by defenders and repaired after damage.</li>
              <li>A fallback area exists before the colony expands into a larger footprint.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Common Opening Mistakes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="journal-card p-4"><h3 className="font-display font-semibold text-ink">Overbuilding too early</h3><p className="font-serif text-sm text-ink-light mt-2">Large rooms and long walls consume labor that the colony still needs for food, hauling, and repairs.</p></div>
              <div className="journal-card p-4"><h3 className="font-display font-semibold text-ink">Trusting fixed numbers</h3><p className="font-serif text-sm text-ink-light mt-2">A field size, growth time, or first-raid count is not a safe universal rule without scenario and version conditions.</p></div>
              <div className="journal-card p-4"><h3 className="font-display font-semibold text-ink">Researching by habit</h3><p className="font-serif text-sm text-ink-light mt-2">Open the current panel and solve the resource or defense problem that is actually limiting the settlement.</p></div>
              <div className="journal-card p-4"><h3 className="font-display font-semibold text-ink">One-point defense</h3><p className="font-serif text-sm text-ink-light mt-2">A single gate or trap corridor can fail; keep a fallback line and a safe route for settlers.</p></div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">When to Expand</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed">Expand when the current settlement can maintain food, shelter, repairs, and essential production without moving every worker away from survival tasks. A new workshop, field, or room is an investment; check its input materials, labor, storage, and defensive cost before placing it.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Sources and Related Guides</h2>
            <ul className="space-y-2 font-serif text-sm text-ink-light list-disc list-inside">
              <li><a className="underline" href="/best-crops-tier-list">Crops and Farming Guide</a></li>
              <li><a className="underline" href="/research">Research Guide</a></li>
              <li><a className="underline" href="/best-defense-layout">Defense Layout Guide</a></li>
              <li><a className="underline" href="/chokepoint-guide">Chokepoint Guide</a></li>
              <li><a className="underline" href="https://store.steampowered.com/app/1029780/Going_Medieval/">Going Medieval Steam store page</a></li>
              <li><a className="underline" href="https://steamcommunity.com/app/1029780/allnews/">Going Medieval Steam News Hub</a></li>
            </ul>
            <p className="font-serif text-xs text-ink-muted italic mt-4">Last reviewed: August 4, 2026. Fixed day-by-day targets remain intentionally excluded.</p>
          </section>
        </div>

        <aside className="lg:w-[35%] space-y-8 shrink-0">
          <div className="field-sidebar-block"><h3 className="font-display text-lg font-semibold text-ink mb-4">First Questions</h3><ul className="space-y-2 font-serif text-sm text-ink-light"><li>What can my settlers eat now?</li><li>Where can they sleep safely?</li><li>Which resource is the next bottleneck?</li><li>Can everyone reach the defense line?</li><li>What happens if the first wall fails?</li></ul></div>
          <div className="journal-card p-5"><h3 className="font-display text-base font-semibold text-ink mb-3">Use Detailed Pages For</h3><div className="space-y-2 font-serif text-sm"><a className="block underline" href="/farming">Farming decisions</a><a className="block underline" href="/food-preservation">Food storage</a><a className="block underline" href="/buildings">Building systems</a><a className="block underline" href="/winter-survival">Winter preparation</a></div></div>
        </aside>
      </div>
    </main>
  );
}
