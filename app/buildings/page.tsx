type BuildingTopic = { title: string; guidance: string; evidence: string };

const TOPICS: BuildingTopic[] = [
  { title: 'Materials', guidance: 'Choose a material for the job you need: shelter, storage, production, or defense. Do not rely on an old durability or insulation table without checking the current building panel.', evidence: 'Current panel required' },
  { title: 'Rooms', guidance: 'Build enclosed, usable spaces around the furniture and workstations the colony actually needs. Room quality and needs should be observed in the current save rather than reduced to one universal footprint.', evidence: 'Game UI + direct play' },
  { title: 'Underground space', guidance: 'Underground storage and rooms can be useful, but temperature, spoilage, stability, and access claims need conditions and version notes.', evidence: 'Direct play required' },
  { title: 'Structural support', guidance: 'Treat multi-level construction and excavation as a support problem. Build in small sections and test unsupported areas before expanding a large hall.', evidence: 'Current save required' },
  { title: 'Defensive structures', guidance: 'Gates, tall gates, and portcullises have specific behavior and damage states. Include repair access and a fallback line in the layout.', evidence: 'Official update + current panel' },
];

export const metadata = {
  title: 'Going Medieval Building Guide — Materials, Rooms, and Stability',
  description:
    'A version-aware Going Medieval building guide covering materials, rooms, underground construction, structural support, and defensive building decisions.',
  keywords: ['going medieval buildings', 'going medieval building guide', 'going medieval wall types', 'going medieval construction'],
};

export default function BuildingsPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-10">
          <section>
            <h1 className="chapter-heading">Going Medieval Building Guide</h1>
            <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">Building in Going Medieval is a planning problem: materials, room function, worker travel, stability, temperature, and defense all compete for the same labor. This guide provides a safe framework for choosing what to build and marks the values that still need a current-version check.</p>
            <div className="aged-border p-5 mt-5" style={{ backgroundColor: 'var(--color-parchment-deep)' }}><p className="font-serif text-sm text-ink leading-relaxed"><strong className="text-vermillion">Version boundary:</strong> Old fixed wall HP, material costs, insulation values, room sizes, underground temperatures, and support distances have been removed until they are confirmed in the current save.</p></div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Building Decisions to Verify</h2>
            <table className="parchment-table"><thead><tr><th>Topic</th><th>Safe guidance</th><th>Evidence</th></tr></thead><tbody>{TOPICS.map((topic) => <tr key={topic.title}><td className="font-semibold text-ink">{topic.title}</td><td className="text-ink-light">{topic.guidance}</td><td className="text-ink-muted">{topic.evidence}</td></tr>)}</tbody></table>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">A Safe Build Order</h2>
            <ol className="space-y-3 font-serif text-base text-ink-light list-decimal list-inside"><li>Start with a shelter and storage area that your current settlers can finish without abandoning food or repair work.</li><li>Place essential workstations close to the inputs and outputs they use.</li><li>Separate daily traffic from defensive routes; avoid making colonists cross traps to reach beds or production.</li><li>Build additional floors or excavate in small sections, checking support and access after each section.</li><li>Upgrade the outer defense only after the colony can maintain food, fuel, and repairs.</li></ol>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Underground Construction Checklist</h2>
            <ul className="space-y-3 font-serif text-base text-ink-light list-disc list-inside"><li>Check whether the planned room has a safe entrance and a route for hauling.</li><li>Leave a support plan instead of assuming a fixed pillar grid works in every terrain.</li><li>Monitor temperature and storage behavior in the current save before claiming a constant value.</li><li>Do not place food, beds, or research in a space that cannot be repaired or evacuated.</li><li>Take a screenshot of a successful test before publishing a stability or spoilage number.</li></ul>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Defense and Doors</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed">Gates, tall gates, and portcullises should be planned with their current open, locked, damaged, and repaired states in mind. A defensive structure that cannot be repaired safely is a delay, not a complete defense. See the <a className="underline" href="/best-defense-layout">defense layout</a> and <a className="underline" href="/chokepoint-guide">chokepoint</a> guides for the current testing framework.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">What This Page Does Not Claim</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed">This revision does not claim universal wall durability, fixed material costs, exact room footprints, constant underground temperatures, a fixed support distance, or a guaranteed overhang limit. Those values need a version, conditions, and reproducible observation.</p>
          </section>

          <section><h2 className="font-display text-2xl font-semibold text-ink mb-4">Sources and Related Guides</h2><ul className="space-y-2 font-serif text-sm text-ink-light list-disc list-inside"><li><a className="underline" href="https://goingmedieval.fandom.com/wiki/Construction">Going Medieval Wiki — Construction</a></li><li><a className="underline" href="https://steamdb.info/patchnotes/16038708/">Prisoners &amp; Gates update notes</a></li><li><a className="underline" href="/best-defense-layout">Defense Layout Guide</a></li><li><a className="underline" href="/underground">Underground Guide</a></li></ul><p className="font-serif text-xs text-ink-muted italic mt-4">Last reviewed: August 4, 2026. Exact construction statistics require current-version testing.</p></section>
        </div>
        <aside className="lg:w-[35%] space-y-8 shrink-0"><div className="field-sidebar-block"><h3 className="font-display text-lg font-semibold text-ink mb-4">Build QA Checklist</h3><ol className="space-y-2 font-serif text-sm text-ink-light list-decimal list-inside"><li>Can settlers finish and repair it?</li><li>Is hauling distance reasonable?</li><li>Is the room actually enclosed and usable?</li><li>Is the support plan tested?</li><li>Does the defense have a fallback?</li></ol></div><div className="journal-card p-5"><h3 className="font-display text-base font-semibold text-ink mb-3">Related Guides</h3><div className="space-y-2 font-serif text-sm"><a className="block underline" href="/research">Research Guide</a><a className="block underline" href="/best-defense-layout">Defense Layout Guide</a><a className="block underline" href="/chokepoint-guide">Chokepoint Guide</a><a className="block underline" href="/winter-survival">Winter Survival Guide</a></div></div></aside>
      </div>
    </main>
  );
}
