type ChokepointCheck = {
  element: string;
  purpose: string;
  safeGuidance: string;
  verify: string;
};

const CHECKS: ChokepointCheck[] = [
  { element: 'Single controlled entrance', purpose: 'Make the defensive route visible and manageable.', safeGuidance: 'Close unintended gaps, but keep a safe settler route and a fallback option.', verify: 'Test whether raiders choose the opening or attack another wall.' },
  { element: 'Narrow passage', purpose: 'Reduce the number of enemies that can reach defenders at once.', safeGuidance: 'Start with a compact passage that your settlers can still traverse.', verify: 'Test movement, melee frontage, and whether enemies repath.' },
  { element: 'Trap section', purpose: 'Add delay or damage before the engagement.', safeGuidance: 'Treat trap placement as a design hypothesis; keep side paths for settlers.', verify: 'Record trigger behavior, damage, repair, and whether raiders avoid it.' },
  { element: 'Ranged position', purpose: 'Give defenders a line of sight into the approach.', safeGuidance: 'Use walls or platforms only after checking sightlines and cover.', verify: 'Test height, merlons, range, and incoming damage in the current version.' },
  { element: 'Fallback line', purpose: 'Prevent one breach from exposing the whole colony.', safeGuidance: 'Keep production, beds, and a second defensive position behind the first line.', verify: 'Check that settlers can retreat without crossing their own traps.' },
];

export const metadata = {
  title: 'Going Medieval Chokepoint Guide — Pathing, Traps, and Testable Designs',
  description:
    'A version-aware Going Medieval chokepoint guide covering controlled entrances, trap sections, ranged positions, pathing tests, and fallback defense.',
};

export default function ChokepointGuidePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-10">
          <section>
            <h1 className="chapter-heading">Going Medieval Chokepoint Guide</h1>
            <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
              A chokepoint is a controlled approach, not a guaranteed killbox. The useful question is whether a layout makes the raid easier for your defenders to observe, reach, and survive. This guide separates testable pathing observations from community design ideas and avoids presenting one corridor width or trap pattern as a universal rule.
            </p>
            <div className="aged-border p-5 mt-5" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
              <p className="font-serif text-sm text-ink leading-relaxed">
                <strong className="text-vermillion">Version boundary:</strong> Current 1.1.x gate and defensive-structure behavior must be checked in the save being documented. Exact enemy pathing, trap avoidance, damage, and height bonuses are not assumed here without a reproducible test.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Chokepoint Components</h2>
            <table className="parchment-table">
              <thead><tr><th>Element</th><th>Purpose</th><th>Safe guidance</th><th>Verify</th></tr></thead>
              <tbody>
                {CHECKS.map((row) => (
                  <tr key={row.element}>
                    <td className="font-semibold text-ink">{row.element}</td>
                    <td className="text-ink-light">{row.purpose}</td>
                    <td className="text-ink-light">{row.safeGuidance}</td>
                    <td className="text-ink-muted">{row.verify}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">How to Test Enemy Pathing</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Do not turn one community post or one successful raid into a deterministic AI rule. Use a repeatable test and record the conditions.
            </p>
            <ol className="space-y-3 font-serif text-base text-ink-light list-decimal list-inside">
              <li>Save the game and note the version, map layout, target beds, open gates, and accessible buildings.</li>
              <li>Leave one proposed route open and observe whether raiders use it or attack another section.</li>
              <li>Repeat with the alternate route closed, then record any breach or repathing behavior.</li>
              <li>Test traps separately from pathing so damage, trigger behavior, and route choice are not confused.</li>
              <li>Take screenshots or a short recording before publishing an exact claim.</li>
            </ol>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">A Compact Funnel Design</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Start with a controlled entrance and a short passage that your settlers can use safely. If the current save confirms that enemies continue through it, extend the passage with a trap section and a ranged position. If they attack a nearby wall instead, the layout is not yet a chokepoint—it is an invitation to breach.
            </p>
            <div className="space-y-4">
              <div className="journal-card p-5"><h3 className="font-display text-xl font-semibold text-ink">Phase 1 — Control the approach</h3><p className="font-serif text-base text-ink-light mt-2">Close accidental openings and keep the intended entrance obvious. Do not remove every fallback route until you know settlers can retreat and repair the main line.</p></div>
              <div className="journal-card p-5"><h3 className="font-display text-xl font-semibold text-ink">Phase 2 — Add the passage</h3><p className="font-serif text-base text-ink-light mt-2">Use a narrow passage as a testable starting point, not a fixed “optimal” dimension. Confirm that settlers can move along it and that melee defenders are not blocked by their own construction.</p></div>
              <div className="journal-card p-5"><h3 className="font-display text-xl font-semibold text-ink">Phase 3 — Add traps carefully</h3><p className="font-serif text-base text-ink-light mt-2">Put traps where the enemy route is confirmed, while keeping a safe side route for daily colony traffic. Record trigger count, repair needs, and whether enemies ever choose another path.</p></div>
              <div className="journal-card p-5"><h3 className="font-display text-xl font-semibold text-ink">Phase 4 — Add the fallback</h3><p className="font-serif text-base text-ink-light mt-2">Keep a second defensive position behind the entrance. A chokepoint is valuable because it buys time; it should not become the only place where the colony can survive.</p></div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Gates and Portcullises</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              The Prisoners &amp; Gates update documents gates, tall gates, and portcullises with deliberate open/locked behavior. The update also describes damaged structures becoming passable until repaired. That makes repair access part of the chokepoint design. A gate that cannot be repaired safely is a temporary delay, not a dependable wall.
            </p>
            <ul className="space-y-2 font-serif text-base text-ink-light list-disc list-inside">
              <li>Test open, locked, damaged, and repaired states in the current save.</li>
              <li>Keep the repair point outside the enemy’s preferred route when possible.</li>
              <li>Confirm that settlers can reach it without triggering their own traps.</li>
              <li>Give the colony another defensible line if the gate becomes passable.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Traps, Line of Sight, and Ranged Positions</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              A trap corridor is useful only when the enemy route is actually forced. A curved section may break line of sight, but it should be presented as a layout choice until the current save confirms the effect. Elevated positions and merlons may improve survivability or firing conditions, but the exact accuracy, range, critical, or damage changes require testing rather than a copied percentage.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="journal-card p-4"><h3 className="font-display font-semibold text-ink">Record</h3><p className="font-serif text-sm text-ink-light mt-2">Version, screenshot, route, gate state, trap state, defender location, and raid outcome.</p></div>
              <div className="journal-card p-4"><h3 className="font-display font-semibold text-ink">Do not publish yet</h3><p className="font-serif text-sm text-ink-light mt-2">Fixed 3-tile rules, guaranteed shortest-path behavior, exact trap values, or exact height bonuses without a test.</p></div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">When a Chokepoint Fails</h2>
            <ul className="space-y-3 font-serif text-base text-ink-light list-disc list-inside">
              <li>Raiders choose another wall because the planned entrance is not the shortest or most accessible route.</li>
              <li>A gate becomes passable and settlers cannot repair it safely.</li>
              <li>Traps are empty, inaccessible, or triggered by the colony’s own traffic.</li>
              <li>Ranged defenders have no retreat route or are exposed to a different attack angle.</li>
              <li>The whole colony depends on one line with no fallback position.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Sources and Verification Boundary</h2>
            <ul className="space-y-2 font-serif text-sm text-ink-light list-disc list-inside">
              <li><a className="underline" href="https://steamdb.info/patchnotes/16038708/">Prisoners &amp; Gates update notes</a></li>
              <li><a className="underline" href="https://steamcommunity.com/app/1029780/allnews/">Going Medieval Steam News Hub</a></li>
              <li><a className="underline" href="https://store.steampowered.com/app/1029780/Going_Medieval/">Going Medieval Steam store page</a></li>
              <li><a className="underline" href="/best-defense-layout">Our broader defense layout guide</a></li>
            </ul>
            <p className="font-serif text-xs text-ink-muted italic mt-4">Last reviewed: August 3, 2026. Exact pathing and combat claims require current-version testing.</p>
          </section>
        </div>

        <aside className="lg:w-[35%] space-y-8 shrink-0">
          <div className="field-sidebar-block">
            <h3 className="font-display text-lg font-semibold text-ink mb-4">Chokepoint QA Checklist</h3>
            <ol className="space-y-3 font-serif text-sm text-ink-light list-decimal list-inside">
              <li>Is the intended route actually selected?</li>
              <li>Can settlers reach and repair the gate?</li>
              <li>Do traps remain safe for daily traffic?</li>
              <li>Can ranged defenders retreat?</li>
              <li>Is there a fallback behind the first line?</li>
            </ol>
          </div>
          <div className="journal-card p-5">
            <h3 className="font-display text-base font-semibold text-ink mb-3">Related Guides</h3>
            <div className="space-y-2 font-serif text-sm">
              <a className="block underline" href="/best-defense-layout">Defense Layout Guide</a>
              <a className="block underline" href="/research">Research Guide</a>
              <a className="block underline" href="/buildings">Buildings Guide</a>
              <a className="block underline" href="/steel-production-guide">Steel Production Guide</a>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
