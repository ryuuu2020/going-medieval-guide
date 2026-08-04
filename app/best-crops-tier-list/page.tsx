type CropRow = {
  crop: string;
  primaryUse: string;
  PlanningValue: string;
  evidence: 'Official' | 'Needs testing';
};

const CROPS: CropRow[] = [
  { crop: 'Barley', primaryUse: 'Food and downstream production', PlanningValue: 'Consider when your colony can support the required processing chain; do not treat a fixed field size as universal.', evidence: 'Needs testing' },
  { crop: 'Redcurrant', primaryUse: 'Food / processing', PlanningValue: 'Useful as a longer-term planting option if the current save confirms its harvest behavior.', evidence: 'Needs testing' },
  { crop: 'Cabbage', primaryUse: 'Food', PlanningValue: 'A practical food option, but actual timing depends on the current crop cycle, conditions, and botany work.', evidence: 'Needs testing' },
  { crop: 'Herbs', primaryUse: 'Medical and cooking-related needs', PlanningValue: 'Reserve space only after confirming the recipes and medical chain in the current version.', evidence: 'Needs testing' },
  { crop: 'Carrot / Beet', primaryUse: 'Food and variety', PlanningValue: 'Use as part of a mixed food plan rather than a universal ranking.', evidence: 'Needs testing' },
  { crop: 'Flax', primaryUse: 'Textile production', PlanningValue: 'Plant when clothing or other linen-related production is actually on the colony roadmap.', evidence: 'Needs testing' },
  { crop: 'Hay', primaryUse: 'Animal feed', PlanningValue: 'Relevant when keeping livestock; not a human-food priority.', evidence: 'Needs testing' },
];

export const metadata = {
  title: 'Going Medieval Best Crops Guide — Uses, Seeds, and Winter Planning',
  description:
    'A version-aware Going Medieval crops guide covering crop uses, seeds, blight, harvest phases, and winter planning without unsupported fixed rankings.',
};

export default function BestCropsTierListPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-10">
          <section>
            <h1 className="chapter-heading">Going Medieval Best Crops Guide</h1>
            <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
              There is no universal S-tier crop that solves every colony&apos;s farming problem. The useful choice depends on what the settlement needs next: emergency food, a processing chain, animal feed, medical supplies, or textiles. This guide uses those decisions instead of presenting an unsupported one-dimensional ranking.
            </p>
            <div className="aged-border p-5 mt-5" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
              <p className="font-serif text-sm text-ink leading-relaxed">
                <strong className="text-vermillion">Version boundary:</strong> The game has received the Cultivation and Quality of Life updates and Steam News Hub entries for the 1.1.x line. The tables below intentionally avoid unverified growth times, yields, resident counts, and field percentages. Confirm those values in your current save before using them for production planning.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Choose Crops by Colony Goal</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Use this as a planning map, not a permanent tier list. The evidence column distinguishes public update information from values that still need a current-version game test.
            </p>
            <table className="parchment-table">
              <thead>
                <tr><th>Crop</th><th>Primary use</th><th>Planning value</th><th>Evidence</th></tr>
              </thead>
              <tbody>
                {CROPS.map((row) => (
                  <tr key={row.crop}>
                    <td className="font-semibold text-ink">{row.crop}</td>
                    <td className="text-ink-light">{row.primaryUse}</td>
                    <td className="text-ink-light">{row.PlanningValue}</td>
                    <td className="text-ink-muted">{row.evidence}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">What Changed the Farming Question?</h2>
            <div className="space-y-4">
              <div className="journal-card p-5">
                <h3 className="font-display text-xl font-semibold text-ink mb-2">Seeds and trees are part of the planning loop</h3>
                <p className="font-serif text-base text-ink-light leading-relaxed">
                  The Cultivation update introduced or changed seed and sapling behavior, crop life stages, and additional plant content. Do not plan a field from an old list of final harvests alone. Record how a current save obtains seed, what the plant is called in the farming panel, and which stage the settler is being asked to harvest.
                </p>
              </div>
              <div className="journal-card p-5">
                <h3 className="font-display text-xl font-semibold text-ink mb-2">Blight changes the value of a monoculture</h3>
                <p className="font-serif text-base text-ink-light leading-relaxed">
                  A crop plan that puts every food tile into one crop has a larger failure surface than a mixed plan. The safe recommendation is not a universal percentage; it is to keep a food reserve, split essential production across more than one crop where practical, and record the current blight behavior before making numerical claims.
                </p>
              </div>
              <div className="journal-card p-5">
                <h3 className="font-display text-xl font-semibold text-ink mb-2">Harvest and cutting phases matter</h3>
                <p className="font-serif text-base text-ink-light leading-relaxed">
                  Current farming controls include harvest-phase and cutting-phase decisions, plus crop-priority controls such as Don&apos;t Sow. The best crop guide should explain when to let a plant continue, when to harvest, and when a field should stop receiving labor—not merely label a crop S or D.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Winter Planning Checklist</h2>
            <ol className="space-y-3 font-serif text-base text-ink-light list-decimal list-inside">
              <li>Check the current save&apos;s seed and sapling stock before committing the next field.</li>
              <li>Separate food crops from animal feed, textile, and processing crops in your production plan.</li>
              <li>Harvest and store enough food before the growing window closes; do not rely on an untested growth-time estimate.</li>
              <li>Confirm whether the chosen underground or covered location supports the current plant behavior before investing labor.</li>
              <li>Keep a small reserve plan for blight, missed harvests, raids, or a delayed cooking chain.</li>
            </ol>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">What This Guide Does Not Claim</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed">
              This page does not claim that one crop is always best, that a fixed field size feeds a fixed number of settlers, or that old growth-time tables remain accurate in every 1.1.x save. Those claims require a recorded version, map conditions, botany skill, soil or location conditions, and a reproducible test.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Sources and Verification Boundary</h2>
            <ul className="space-y-2 font-serif text-sm text-ink-light list-disc list-inside">
              <li><a className="underline" href="https://store.steampowered.com/news/app/1029780/view/4499660870257424735">Official Update #3 — New Resources &amp; Cultivation</a></li>
              <li><a className="underline" href="https://steamcommunity.com/app/1029780/allnews/">Going Medieval Steam News Hub</a></li>
              <li><a className="underline" href="https://store.steampowered.com/app/1029780/Going_Medieval/">Going Medieval Steam store page</a></li>
            </ul>
            <p className="font-serif text-xs text-ink-muted italic mt-4">Last reviewed: August 3, 2026. Numeric crop data remains pending current-version in-game testing.</p>
          </section>
        </div>

        <aside className="lg:w-[35%] space-y-8 shrink-0">
          <div className="field-sidebar-block">
            <h3 className="font-display text-lg font-semibold text-ink mb-4">Use This Page When...</h3>
            <ul className="space-y-3 font-serif text-sm text-ink-light list-disc list-inside">
              <li>You are deciding what role a field should serve.</li>
              <li>You are preparing food and seed reserves for winter.</li>
              <li>You are checking whether a crop claim is actually verified.</li>
            </ul>
          </div>
          <div className="journal-card p-5">
            <h3 className="font-display text-base font-semibold text-ink mb-3">Related Guides</h3>
            <div className="space-y-2 font-serif text-sm">
              <a className="block underline" href="/farming">Farming System Guide</a>
              <a className="block underline" href="/winter-survival">Winter Survival Guide</a>
              <a className="block underline" href="/research">Research Guide</a>
              <a className="block underline" href="/food-preservation">Food Preservation Guide</a>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
