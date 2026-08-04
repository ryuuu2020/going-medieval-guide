type DefenseLayer = {
  layer: string;
  purpose: string;
  safeClaim: string;
  testBeforePublishing: string;
};

const LAYERS: DefenseLayer[] = [
  { layer: 'Approach control', purpose: 'Make the settlement entrance readable and manageable.', safeClaim: 'A planned approach can concentrate attention and reduce the number of decisions during a raid.', testBeforePublishing: 'Confirm how raiders choose paths in the current save.' },
  { layer: 'Gate or portcullis line', purpose: 'Control access and create a fallback point.', safeClaim: 'Use the current gate behavior shown in the game panel; do not assume gates behave like ordinary doors.', testBeforePublishing: 'Test open, locked, damaged, and repaired states.' },
  { layer: 'Ranged position', purpose: 'Give defenders a protected place to attack from.', safeClaim: 'Elevated and covered positions are common community designs, not automatically proven damage bonuses.', testBeforePublishing: 'Test height, merlon cover, range, and accuracy instead of quoting a bonus.' },
  { layer: 'Fallback area', purpose: 'Keep the colony from depending on one entrance.', safeClaim: 'A second defensible position reduces the cost of a breach.', testBeforePublishing: 'Check whether colonists can reach it without crossing unsafe traps.' },
];

export const metadata = {
  title: 'Going Medieval Best Defense Layout — Version-Aware Design Guide',
  description:
    'A practical, evidence-aware Going Medieval defense layout guide covering entrances, gates, ranged positions, fallback lines, and chokepoint testing.',
};

export default function BestDefenseLayoutPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-10">
          <section>
            <h1 className="chapter-heading">Going Medieval Best Defense Layout</h1>
            <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
              The best defense layout is the one your settlement can build, staff, repair, and retreat through when a raid does not follow the plan. Rather than presenting a single “proven” killbox, this guide gives you a layered design framework and separates official behavior, community ideas, and claims that still need a current-version test.
            </p>
            <div className="aged-border p-5 mt-5" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
              <p className="font-serif text-sm text-ink leading-relaxed">
                <strong className="text-vermillion">Evidence note:</strong> The current 1.1.x line includes updated gate and defensive-structure behavior. Exact trap damage, wall HP, pathing rules, height bonuses, and ideal corridor dimensions are not stated here as facts unless they are verified in the current save.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">A Layered Layout That Can Be Tested</h2>
            <table className="parchment-table">
              <thead><tr><th>Layer</th><th>Purpose</th><th>Safe recommendation</th><th>Test first</th></tr></thead>
              <tbody>
                {LAYERS.map((row) => (
                  <tr key={row.layer}>
                    <td className="font-semibold text-ink">{row.layer}</td>
                    <td className="text-ink-light">{row.purpose}</td>
                    <td className="text-ink-light">{row.safeClaim}</td>
                    <td className="text-ink-muted">{row.testBeforePublishing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Start With the Entrance, Not the Killbox</h2>
            <div className="space-y-4 font-serif text-base text-ink-light leading-relaxed">
              <p>Choose an entrance that your settlers can reach during normal work and during an alarm. A defense route that requires crossing your own traps, hauling through a narrow corridor, or walking past an open breach is a maintenance problem even if the screenshot looks efficient.</p>
              <p>Use the terrain and buildings to make the defensive problem smaller, but do not assume that every hill, wall, or narrow path creates a fixed combat bonus. Record what the current save actually does before turning a layout preference into a mechanic claim.</p>
              <p>Keep a fallback position behind the first line. The goal is not to guarantee that no raider reaches the settlement; it is to ensure that a damaged gate or breached wall does not immediately expose food, beds, research, and production.</p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Gates, Tall Gates, and Portcullises</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              The Prisoners &amp; Gates update added or documented gates, tall gates, and portcullises. The official update notes that gates and portcullises have deliberate open/locked behavior rather than simply acting like ordinary doors, and that damaged structures can become passable until repaired. That makes repair access and a fallback entrance part of the layout—not optional polish.
            </p>
            <div className="journal-card p-5">
              <h3 className="font-display text-xl font-semibold text-ink mb-3">Current-save test checklist</h3>
              <ul className="space-y-2 font-serif text-base text-ink-light list-disc list-inside">
                <li>Test the structure when open, locked, and damaged.</li>
                <li>Check whether a damaged gate or portcullis becomes passable at the current threshold.</li>
                <li>Confirm how much repair is needed before it can close again.</li>
                <li>Make sure settlers can reach the repair point without entering the enemy route.</li>
                <li>Record the game version and take a screenshot before publishing an exact rule.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Traps and Chokepoints: Use as a Design Hypothesis</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              A narrow route, trap corridor, or curved approach can be a useful design hypothesis: it may make enemies easier to observe and may buy defenders time. It is not automatically a verified “killbox.” The companion <a className="underline" href="/chokepoint-guide">chokepoint guide</a> should record the pathing test separately so this page can stay focused on the whole-base layout.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="journal-card p-4"><h3 className="font-display font-semibold text-ink">Good to record</h3><p className="font-serif text-sm text-ink-light mt-2">Entrance location, safe settler route, fallback line, gate state, repair access, and what happened in the raid test.</p></div>
              <div className="journal-card p-4"><h3 className="font-display font-semibold text-ink">Do not assume</h3><p className="font-serif text-sm text-ink-light mt-2">A fixed 3-tile width, a fixed trap rhythm, guaranteed enemy pathing, exact damage, or a universal height multiplier.</p></div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Three Practical Layout Templates</h2>
            <div className="space-y-4">
              <div className="journal-card p-5"><h3 className="font-display text-xl font-semibold text-ink">1. Starter enclosure</h3><p className="font-serif text-base text-ink-light mt-2">Build the smallest enclosure your settlers can defend and repair. Keep one controlled entrance, a clear route to the defenders&apos; positions, and enough interior space to retreat. Treat this as a temporary survival line rather than a promise that the first wall stops every raid.</p></div>
              <div className="journal-card p-5"><h3 className="font-display text-xl font-semibold text-ink">2. Controlled entrance</h3><p className="font-serif text-base text-ink-light mt-2">Add a gate or portcullis line and place ranged positions where settlers have a clear view of the approach. Keep traps optional until their trigger behavior and settler safety have been tested. Use the layout to make the enemy route legible, not to claim an automatic damage loop.</p></div>
              <div className="journal-card p-5"><h3 className="font-display text-xl font-semibold text-ink">3. Fallback stronghold</h3><p className="font-serif text-base text-ink-light mt-2">Separate essential production and beds from the first line. Add a second defensible point with its own repair route. This is the most reliable late-game improvement because it still helps when the first entrance fails or a siege changes the shape of the fight.</p></div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Claims Removed From This Version</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed">
              This revision does not publish the old fixed values for trap damage, trigger counts, wall HP, corridor length, wall spacing, high-ground accuracy, merlon damage reduction, or a “sally port” building. “Side gate” or “sortie route” is used instead because the official materials checked for this update do not establish sally port as a named building.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Sources and Verification Boundary</h2>
            <ul className="space-y-2 font-serif text-sm text-ink-light list-disc list-inside">
              <li><a className="underline" href="https://steamdb.info/patchnotes/16038708/">Prisoners &amp; Gates update notes</a></li>
              <li><a className="underline" href="https://steamcommunity.com/app/1029780/allnews/">Going Medieval Steam News Hub</a></li>
              <li><a className="underline" href="https://store.steampowered.com/app/1029780/Going_Medieval/">Going Medieval Steam store page</a></li>
            </ul>
            <p className="font-serif text-xs text-ink-muted italic mt-4">Last reviewed: August 3, 2026. Exact combat and pathing claims require current-version testing.</p>
          </section>
        </div>

        <aside className="lg:w-[35%] space-y-8 shrink-0">
          <div className="field-sidebar-block">
            <h3 className="font-display text-lg font-semibold text-ink mb-4">Defense QA Checklist</h3>
            <ol className="space-y-3 font-serif text-sm text-ink-light list-decimal list-inside">
              <li>Can settlers reach the defense position safely?</li>
              <li>Can the gate or portcullis be repaired during a raid?</li>
              <li>Is there a fallback line behind the first entrance?</li>
              <li>Have traps and pathing been tested in this version?</li>
              <li>Are official facts separated from community designs?</li>
            </ol>
          </div>
          <div className="journal-card p-5">
            <h3 className="font-display text-base font-semibold text-ink mb-3">Related Guides</h3>
            <div className="space-y-2 font-serif text-sm">
              <a className="block underline" href="/chokepoint-guide">Chokepoint Guide</a>
              <a className="block underline" href="/research">Research Guide</a>
              <a className="block underline" href="/buildings">Buildings Guide</a>
              <a className="block underline" href="/tips">Tips and Systems</a>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
