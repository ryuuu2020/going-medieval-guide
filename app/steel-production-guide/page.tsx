type ChainStep = {
  step: string;
  role: string;
  currentClaim: string;
  evidence: string;
};

const CHAIN: ChainStep[] = [
  { step: 'Iron supply', role: 'Provide the metal input for later processing.', currentClaim: 'Confirm the resource name, deposit behavior, and current source in the map before quoting yield or HP.', evidence: 'Current save required' },
  { step: 'Fuel supply', role: 'Keep the smelting chain running.', currentClaim: 'Separate ordinary smelting fuel from any coal requirement shown by the current steel recipe.', evidence: 'Current recipe required' },
  { step: 'Smelting', role: 'Convert the raw input into workable metal.', currentClaim: 'Record the workstation, input, output, and research node from the current panel.', evidence: 'Wiki + current panel' },
  { step: 'Steel node', role: 'Unlock the steel branch when the colony can support it.', currentClaim: 'Treat Steel as a goal-based research choice, not a universal rush order.', evidence: 'Research page + current panel' },
  { step: 'Forge / armourer', role: 'Turn steel into equipment.', currentClaim: 'Verify each weapon or armour prerequisite before promising a specific item.', evidence: 'Current panel required' },
];

export const metadata = {
  title: 'Going Medieval Steel Production Guide — Evidence-Aware Production Chain',
  description:
    'A version-aware Going Medieval steel guide covering iron, fuel, smelting, research, and equipment decisions without unsupported recipe numbers.',
};

export default function SteelProductionGuidePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-10">
          <section>
            <h1 className="chapter-heading">Going Medieval Steel Production Guide</h1>
            <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
              Steel is not a single building or a universal late-game priority. It is a chain: metal input, fuel, research, smelting capacity, and a workshop that can turn the output into equipment. This guide explains how to plan that chain and marks the exact recipe values that still require a current-version game check.
            </p>
            <div className="aged-border p-5 mt-5" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
              <p className="font-serif text-sm text-ink leading-relaxed">
                <strong className="text-vermillion">Version boundary:</strong> Steam News Hub entries include the 1.1.x patch line. The old version of this page contained exact costs, yields, HP, heat, stack sizes, and research totals without a page-level source. Those values are intentionally removed until they are recorded from the current panel or a reproducible save.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">The Steel Chain at a Glance</h2>
            <table className="parchment-table">
              <thead><tr><th>Step</th><th>Role</th><th>What to record</th><th>Evidence</th></tr></thead>
              <tbody>
                {CHAIN.map((row) => (
                  <tr key={row.step}>
                    <td className="font-semibold text-ink">{row.step}</td>
                    <td className="text-ink-light">{row.role}</td>
                    <td className="text-ink-light">{row.currentClaim}</td>
                    <td className="text-ink-muted">{row.evidence}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">When Steel Is Worth Prioritizing</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Steel becomes a reasonable project when the colony has a stable food reserve, enough labor to keep mining and fuel tasks from starving other work, and a combat or equipment problem that iron gear cannot solve. It is usually a poor first response to a food shortage, an unfinished shelter, or a research bottleneck caused by missing books.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="journal-card p-5"><h3 className="font-display text-xl font-semibold text-ink mb-2">Start the chain when...</h3><ul className="space-y-2 font-serif text-sm text-ink-light list-disc list-inside"><li>the research prerequisite is visible in the current panel;</li><li>iron and fuel can be supplied without stopping food or defense;</li><li>you have a clear equipment goal rather than stockpiling steel for its own sake.</li></ul></div>
              <div className="journal-card p-5"><h3 className="font-display text-xl font-semibold text-ink mb-2">Delay it when...</h3><ul className="space-y-2 font-serif text-sm text-ink-light list-disc list-inside"><li>the colony is still missing basic food or winter storage;</li><li>the fuel source is unconfirmed or too far from the workshop;</li><li>the next raid can be handled by existing weapons and a better layout.</li></ul></div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Build an Evidence Table Before Publishing Numbers</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              For every recipe, create one row with the exact item names shown in the current game. Record the version, workstation, inputs, outputs, research node, book type, production time, and whether the result was observed once or reproduced. This prevents a 1.0 recipe or an old community table from becoming a false current fact.
            </p>
            <table className="parchment-table">
              <thead><tr><th>Field</th><th>Example record format</th></tr></thead>
              <tbody>
                <tr><td className="font-semibold text-ink">Version</td><td className="text-ink-light">1.1.x patch or current save date</td></tr>
                <tr><td className="font-semibold text-ink">Recipe</td><td className="text-ink-light">Exact in-game recipe name</td></tr>
                <tr><td className="font-semibold text-ink">Inputs / outputs</td><td className="text-ink-light">Exact quantities, or “not recorded”</td></tr>
                <tr><td className="font-semibold text-ink">Research</td><td className="text-ink-light">Node and book requirements as displayed</td></tr>
                <tr><td className="font-semibold text-ink">Test status</td><td className="text-ink-light">Official / Direct play / Community lead / No access</td></tr>
              </tbody>
            </table>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Production Layout</h2>
            <ol className="space-y-3 font-serif text-base text-ink-light list-decimal list-inside">
              <li>Place raw-material storage where miners and haulers can reach it without crossing the defensive route.</li>
              <li>Keep the smelting station, fuel storage, and output storage close enough to expose logistics problems.</li>
              <li>Separate the steel project from ordinary fuel consumption so a basic task does not consume the reserve needed for the steel recipe.</li>
              <li>Put the forge or armourer station on the same production plan only after its research and material prerequisites are confirmed.</li>
              <li>Track the chain for one complete batch before deciding whether additional stations are justified.</li>
            </ol>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">What This Revision Removes</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed">
              This revision does not publish the previous fixed values for deposit yields, coal HP, wood-to-coal conversion, smelting inputs, furnace HP or heat, steel stack size, weapon costs, research totals, or skill-speed multipliers. Those values can return after they are verified in the current version and recorded with their conditions.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Sources and Verification Boundary</h2>
            <ul className="space-y-2 font-serif text-sm text-ink-light list-disc list-inside">
              <li><a className="underline" href="https://goingmedieval.fandom.com/wiki/Research">Going Medieval Wiki — Research</a></li>
              <li><a className="underline" href="https://goingmedieval.fandom.com/wiki/Construction">Going Medieval Wiki — Construction</a></li>
              <li><a className="underline" href="https://steamcommunity.com/app/1029780/allnews/">Going Medieval Steam News Hub</a></li>
              <li><a className="underline" href="https://store.steampowered.com/app/1029780/Going_Medieval/">Going Medieval Steam store page</a></li>
            </ul>
            <p className="font-serif text-xs text-ink-muted italic mt-4">Last reviewed: August 3, 2026. Exact recipes and production statistics require current-version testing.</p>
          </section>
        </div>

        <aside className="lg:w-[35%] space-y-8 shrink-0">
          <div className="field-sidebar-block">
            <h3 className="font-display text-lg font-semibold text-ink mb-4">Steel QA Checklist</h3>
            <ol className="space-y-3 font-serif text-sm text-ink-light list-decimal list-inside">
              <li>Confirm the research node in the current panel.</li>
              <li>Confirm the exact fuel and metal inputs.</li>
              <li>Record whether coal is required for this recipe.</li>
              <li>Run one complete batch before calculating efficiency.</li>
              <li>Link equipment pages only after prerequisites are verified.</li>
            </ol>
          </div>
          <div className="journal-card p-5">
            <h3 className="font-display text-base font-semibold text-ink mb-3">Related Guides</h3>
            <div className="space-y-2 font-serif text-sm">
              <a className="block underline" href="/research">Research Guide</a>
              <a className="block underline" href="/iron-mining">Iron Mining Guide</a>
              <a className="block underline" href="/production-chain-optimization">Production Chain Guide</a>
              <a className="block underline" href="/best-defense-layout">Defense Layout Guide</a>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
