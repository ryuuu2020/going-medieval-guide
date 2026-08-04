type Tip = { category: string; title: string; guidance: string; evidence: string };

const TIPS: Tip[] = [
  { category: 'Storage', title: 'Store food with a testable plan', guidance: 'Use location, temperature, processing, and access as separate questions. Do not rely on a fixed underground temperature or spoilage multiplier without testing the current save.', evidence: 'Needs testing' },
  { category: 'Defense', title: 'Build a fallback', guidance: 'A second defensible position is more reliable than assuming the first wall or trap corridor cannot fail.', evidence: 'Design guidance' },
  { category: 'Research', title: 'Research the current bottleneck', guidance: 'Use the current research panel and choose the node that solves the colony\'s immediate food, production, or defense problem.', evidence: 'Current panel' },
  { category: 'Management', title: 'Watch needs, not one mood number', guidance: 'Respond to the need or event shown in the current UI instead of applying a universal mood threshold.', evidence: 'Direct play' },
  { category: 'Seasons', title: 'Prepare before the season changes', guidance: 'Build a reserve from the current crop, cooking, storage, and hunting options; do not publish a universal food target.', evidence: 'Scenario-dependent' },
  { category: 'Combat', title: 'Test ranged positions', guidance: 'Height and cover may matter, but exact accuracy, range, damage, or critical bonuses require a current-version test.', evidence: 'Needs testing' },
  { category: 'Building', title: 'Expand in supportable sections', guidance: 'Build or excavate a small section, check support and access, then expand. Avoid treating a fixed pillar grid as a universal stability rule.', evidence: 'Direct play' },
  { category: 'Farming', title: 'Plan fields by purpose', guidance: 'Separate food, feed, textile, and processing crops, then check seeds and current crop behavior before setting proportions.', evidence: 'Official + testing' },
  { category: 'Crafting', title: 'Follow the whole chain', guidance: 'Map inputs, workstation, research, labor, storage, and output before adding a production station.', evidence: 'Decision guidance' },
  { category: 'Trading', title: 'Trade around a surplus', guidance: 'Trade only after food, fuel, equipment, and the next production step are covered; do not call one commodity universally best.', evidence: 'Scenario-dependent' },
  { category: 'Settlers', title: 'Assign by actual bottleneck', guidance: 'Use relevant skills and task priorities, but confirm the current job behavior before claiming a fixed efficiency multiplier.', evidence: 'Needs testing' },
  { category: 'Doors', title: 'Test gate states', guidance: 'Gates, tall gates, and portcullises need open, locked, damaged, and repaired-state checks before they are used as a complete defense.', evidence: 'Official + current panel' },
];

export const metadata = {
  title: 'Going Medieval Tips — Evidence-Aware Colony Decisions',
  description: 'Practical Going Medieval tips for storage, farming, research, building, defense, combat, and colony management with clear evidence boundaries.',
};

export default function TipsPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-10">
          <section><h1 className="chapter-heading">Going Medieval Tips</h1><p className="drop-cap font-serif text-base text-ink-light leading-relaxed">Good tips explain the decision behind an action and the conditions where it stops working. This page replaces the old list of “combat-verified” fixed numbers with short, testable principles for storage, farming, research, building, defense, and settlement management.</p><div className="aged-border p-5 mt-5" style={{ backgroundColor: 'var(--color-parchment-deep)' }}><p className="font-serif text-sm text-ink leading-relaxed"><strong className="text-vermillion">Version boundary:</strong> Current 1.1.x behavior should be checked in the save being documented. The old 1.0 label and unsupported percentages have been removed.</p></div></section>
          <section><h2 className="font-display text-2xl font-semibold text-ink mb-6">Decision Tips</h2><div className="grid grid-cols-1 sm:grid-cols-2 gap-3">{TIPS.map((item) => <div key={item.title} className="journal-card p-4"><div className="flex items-center gap-2 mb-2"><span className="field-tag ink text-[10px]">{item.category}</span><span className="font-serif text-xs text-ink-muted">{item.evidence}</span></div><h3 className="font-display text-base font-semibold text-ink">{item.title}</h3><p className="font-serif text-sm text-ink leading-relaxed mt-2">{item.guidance}</p></div>)}</div></section>
          <section><h2 className="font-display text-2xl font-semibold text-ink mb-4">How to Use These Tips</h2><ol className="space-y-3 font-serif text-base text-ink-light list-decimal list-inside"><li>Identify the immediate colony problem.</li><li>Choose the tip that addresses that problem.</li><li>Check the current UI, version, and available materials.</li><li>Run a small test before scaling a layout or production ratio.</li><li>Record the conditions if the result becomes a guide claim.</li></ol></section>
          <section><h2 className="font-display text-2xl font-semibold text-ink mb-4">Sources and Related Guides</h2><ul className="space-y-2 font-serif text-sm text-ink-light list-disc list-inside"><li><a className="underline" href="https://steamcommunity.com/app/1029780/allnews/">Going Medieval Steam News Hub</a></li><li><a className="underline" href="https://store.steampowered.com/app/1029780/Going_Medieval/">Going Medieval Steam store page</a></li><li><a className="underline" href="/best-crops-tier-list">Crops Guide</a></li><li><a className="underline" href="/research">Research Guide</a></li><li><a className="underline" href="/best-defense-layout">Defense Layout Guide</a></li></ul><p className="font-serif text-xs text-ink-muted italic mt-4">Last reviewed: August 4, 2026. Exact percentages and production numbers require current-version evidence.</p></section>
        </div>
        <aside className="lg:w-[35%] space-y-8 shrink-0"><div className="field-sidebar-block"><h3 className="font-display text-lg font-semibold text-ink mb-4">Core Principles</h3><ul className="space-y-2 font-serif text-sm text-ink-light"><li>1. Solve the current bottleneck</li><li>2. Keep a fallback</li><li>3. Test before scaling</li><li>4. Separate fact from suggestion</li><li>5. Record version and conditions</li></ul></div><div className="journal-card p-5"><h3 className="font-display text-base font-semibold text-ink mb-3">Evidence Labels</h3><p className="font-serif text-sm text-ink-light">Official means supported by an official update or page. Direct play means recorded in a current save. Community lead means useful to investigate, not enough by itself for a precise claim.</p></div></aside>
      </div>
    </main>
  );
}
