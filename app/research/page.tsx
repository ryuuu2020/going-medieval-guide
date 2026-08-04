type ResearchRoute = {
  goal: string;
  check: string;
  route: string;
  evidence: string;
};

const ROUTES: ResearchRoute[] = [
  { goal: 'Food and farming', check: 'Confirm the current Agriculture nodes and the book requirements in the research panel.', route: 'Choose the farming node when food, seeds, or cultivation is the immediate bottleneck.', evidence: 'Current panel required' },
  { goal: 'Metal and steel', check: 'Confirm the Smelting, Steel, Blacksmithing, and Armourer prerequisites in the current save.', route: 'Follow the shortest route that solves the colony\'s actual metal bottleneck; do not use a universal day-by-day order.', evidence: 'Wiki + current panel' },
  { goal: 'Defense', check: 'Confirm the current nodes for defensive structures, gates, and portcullises.', route: 'Prioritize defense when the next raid or base design makes the unlock more valuable than an economic branch.', evidence: 'Official update + current panel' },
  { goal: 'Beekeeping', check: 'Look for the Beekeeping node and its book requirements after the 1.1 research-panel changes.', route: 'Treat it as a goal-based branch, not an automatic first research choice.', evidence: 'Official update + current panel' },
  { goal: 'Ice making', check: 'Look for the Ice Making node and confirm its building and material prerequisites.', route: 'Use it when temperature or storage is the actual problem in the settlement.', evidence: 'Official update + current panel' },
];

export const metadata = {
  title: 'Going Medieval Research Guide — Books, Nodes, and Conditional Order',
  description:
    'A version-aware Going Medieval research guide covering Chronicle, Handbook, Thesis, research nodes, and goal-based unlock routes.',
  keywords: ['going medieval research', 'going medieval tech tree', 'going medieval research guide', 'going medieval unlock order'],
};

export default function ResearchPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-10">
          <section>
            <h1 className="chapter-heading">Going Medieval Research Guide</h1>
            <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
              Research in Going Medieval is best planned from the problem your settlement needs to solve next. The old version of this page described a generic research-points system and five broad technology branches. That model is not reliable enough for the current 1.1.x line, so this guide focuses on the book resources, research nodes, and prerequisites that should be checked in the current game panel.
            </p>
            <div className="aged-border p-5 mt-5" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
              <p className="font-serif text-sm text-ink leading-relaxed">
                <strong className="text-vermillion">Version boundary:</strong> Steam News Hub entries include the 1.1.12, 1.1.11, and 1.1.9 patch line. Node names, costs, and unlock relationships should be read from the current save and not copied from an old 1.0 route.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">How the Research Record Works</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Public reference material describes research through book resources such as Chronicle, Handbook, and Thesis, which are produced, stored, and consumed by the research system. Before publishing a cost or unlock claim, check the current research panel and record the node, prerequisite, book type, and version in your evidence notes.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="journal-card p-4"><h3 className="font-display font-semibold text-ink">Chronicle</h3><p className="font-serif text-sm text-ink-light mt-2">Record the resource name and where the current save produces or stores it.</p></div>
              <div className="journal-card p-4"><h3 className="font-display font-semibold text-ink">Handbook</h3><p className="font-serif text-sm text-ink-light mt-2">Confirm the node cost instead of relying on a generic research-points statement.</p></div>
              <div className="journal-card p-4"><h3 className="font-display font-semibold text-ink">Thesis</h3><p className="font-serif text-sm text-ink-light mt-2">Record advanced-node requirements from the current panel before recommending a route.</p></div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Research by Goal</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              These are decision routes, not a universal “research this on Day 1” order. A colony with a food shortage should not follow the same route as a colony preparing for steel production or a gate upgrade.
            </p>
            <table className="parchment-table">
              <thead><tr><th>Goal</th><th>Check first</th><th>Conditional route</th><th>Evidence</th></tr></thead>
              <tbody>
                {ROUTES.map((item) => (
                  <tr key={item.goal}>
                    <td className="font-semibold text-ink">{item.goal}</td>
                    <td className="text-ink-light">{item.check}</td>
                    <td className="text-ink-light">{item.route}</td>
                    <td className="text-ink-muted">{item.evidence}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Nodes to Verify in the Current Version</h2>
            <div className="space-y-4">
              <div className="journal-card p-5"><h3 className="font-display text-xl font-semibold text-ink">Agriculture</h3><p className="font-serif text-base text-ink-light mt-2">Verify the current farming-related nodes and connect them to the crop page only after confirming what they unlock. Do not claim that Agriculture automatically unlocks every crop, wall, or irrigation feature.</p></div>
              <div className="journal-card p-5"><h3 className="font-display text-xl font-semibold text-ink">Smelting and Steel</h3><p className="font-serif text-base text-ink-light mt-2">Use the current panel to confirm the order between smelting, steel, blacksmithing, and armourer-related nodes. This is the research backbone for the steel production guide.</p></div>
              <div className="journal-card p-5"><h3 className="font-display text-xl font-semibold text-ink">Beekeeping and Ice Making</h3><p className="font-serif text-base text-ink-light mt-2">These nodes were added or reorganized in the newer research content. They must appear in a current guide, but neither should be presented as universally optimal without knowing the colony goal.</p></div>
              <div className="journal-card p-5"><h3 className="font-display text-xl font-semibold text-ink">Defensive Structures</h3><p className="font-serif text-base text-ink-light mt-2">Confirm the node names and prerequisites for gates, tall gates, portcullises, and other defensive structures. Link the result to the defense guide only after the current save has been checked.</p></div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">What We Are Not Claiming</h2>
            <ul className="space-y-3 font-serif text-base text-ink-light list-disc list-inside">
              <li>There is no universal Agriculture → Construction → Military order for every save.</li>
              <li>We are not publishing research speed multipliers, bookshelf bonuses, or intelligence thresholds without current-version evidence.</li>
              <li>We are not calling broad labels such as “Construction Tech” or “Medical Tech” official node names unless they appear in the current panel.</li>
              <li>Old recipes and unlock screenshots must be treated as leads until they are checked against the current game.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Sources and Verification Boundary</h2>
            <ul className="space-y-2 font-serif text-sm text-ink-light list-disc list-inside">
              <li><a className="underline" href="https://goingmedieval.fandom.com/wiki/Research">Going Medieval Wiki — Research</a></li>
              <li><a className="underline" href="https://store.steampowered.com/news/app/1029780/view/4499660870257424735">Official Update #3 — New Resources &amp; Cultivation</a></li>
              <li><a className="underline" href="https://steamcommunity.com/app/1029780/allnews/">Going Medieval Steam News Hub</a></li>
            </ul>
            <p className="font-serif text-xs text-ink-muted italic mt-4">Last reviewed: August 3, 2026. Current-panel verification is still required for exact node costs and prerequisites.</p>
          </section>
        </div>

        <aside className="lg:w-[35%] space-y-8 shrink-0">
          <div className="field-sidebar-block">
            <h3 className="font-display text-lg font-semibold text-ink mb-4">Research Checklist</h3>
            <ol className="space-y-3 font-serif text-sm text-ink-light list-decimal list-inside">
              <li>Write down the settlement bottleneck.</li>
              <li>Open the current research panel.</li>
              <li>Record the node and book requirements.</li>
              <li>Check prerequisites before promising an unlock.</li>
              <li>Update the guide with the version and evidence state.</li>
            </ol>
          </div>
          <div className="journal-card p-5">
            <h3 className="font-display text-base font-semibold text-ink mb-3">Related Guides</h3>
            <div className="space-y-2 font-serif text-sm">
              <a className="block underline" href="/best-crops-tier-list">Crops and Farming Guide</a>
              <a className="block underline" href="/steel-production-guide">Steel Production Guide</a>
              <a className="block underline" href="/best-defense-layout">Defense Layout Guide</a>
              <a className="block underline" href="/buildings">Buildings Guide</a>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
