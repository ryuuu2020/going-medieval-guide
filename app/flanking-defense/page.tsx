export const metadata = {
  title: "Going Medieval Flanking Defense — Prevent Raid Flanking (2026)",
  description: "Defend against flanking in Going Medieval. Detect side attacks, secondary wall positions, patrol coverage, and how to prevent raiders from bypassing your main defense.",
};

export default function FlankingDefensePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-10">
          <section>
            <h1 className="chapter-heading">Going Medieval Flanking Defense — Stop Raid Flanks</h1>
            <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
              A well-designed chokepoint can be bypassed if raiders find an undefended approach vector. Flanking in Going Medieval occurs when raider AI calculates that a path around your primary defense — through a gap in your walls, over a partially built section, or through a secondary entrance — is shorter than your main chokepoint. A flank hits your base where defenders are not positioned, potentially reaching your interior before you can respond. This guide explains how to identify flanking vulnerabilities in your base design, how to build secondary wall coverage, how to use patrols and archer overlap to detect and respond to side attacks.
            </p>
          </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Why Flanking Happens — Pathfinding Mechanics</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Raiders in Going Medieval use pathfinding to determine their route. They target the shortest available path to a settler or bed. If your base has any gap — an unfinished wall section, an unlocked secondary door, a wall that doesn't connect fully — the pathfinding may calculate a shorter route through that gap than through your prepared chokepoint.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Common flanking vulnerabilities: (1) Walls with gaps that aren't yet filled in. (2) Side doors or gates that were left unlocked. (3) Wall sections that don't connect to terrain obstacles (cliff, river) at the edges. (4) Partially constructed wall sections that raiders can climb over.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Perimeter Audit — Close All Gaps</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Before each game day (or certainly before the next scheduled raid season), walk the full perimeter of your base in the map view. Verify that your outer wall is fully continuous — no missing tiles, no unconnected sections. Check that every wall segment connects either to another wall, to an impassable terrain feature (cliff face, deep water), or to the map border.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Even a single missing wall tile creates a valid pathfinding route. Raiders will find it. Prioritize wall completion over interior construction whenever a raid warning appears.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Archer Overlap for Perimeter Coverage</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                A single chokepoint covered by archers in corner towers is the core of most early defenses. As your base grows and wall sections extend, ensure that your archer towers can collectively cover the entire outer perimeter, not just the main chokepoint approach.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Draw imaginary lines from each archer position to the outer wall. Every section of wall should be within range of at least one archer platform. Blind spots — wall sections no archer can reach — are where flanking raids will concentrate attacks, since they face no ranged opposition while breaching.
              </p>
            </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-6">Frequently Asked Questions</h2>

                <div className="aged-border p-5 mb-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                  <h3 className="font-display text-lg font-semibold text-ink mb-2">How do I know if a raid is trying to flank?</h3>
                  <p className="font-serif text-base text-ink-light leading-relaxed">Watch the raid spawn direction and the AI movement path. If a raider group spawns east but your base faces west, they are likely looking for an eastern approach. Check your east wall for vulnerabilities. The minimap can help track raid movement direction before they reach your walls.</p>
                </div>
                <div className="aged-border p-5 mb-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                  <h3 className="font-display text-lg font-semibold text-ink mb-2">Should I build walls along rivers and cliffs?</h3>
                  <p className="font-serif text-base text-ink-light leading-relaxed">Yes — natural terrain that raiders cannot cross (deep rivers, cliff faces) acts as a free wall section. Build your outer wall so its ends connect to these natural barriers rather than terminating in open terrain. This eliminates the flanking approaches on those sides without requiring additional wall tiles.</p>
                </div>
                <div className="aged-border p-5 mb-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                  <h3 className="font-display text-lg font-semibold text-ink mb-2">What if I cannot afford a full perimeter wall in early game?</h3>
                  <p className="font-serif text-base text-ink-light leading-relaxed">Use palisade walls (cheap wood construction) to close gaps temporarily while you save materials for proper walls. Even low-durability palisade sections prevent pathfinding flanking routes — they don't need to be impenetrable, just present enough to route raid traffic through your chokepoint.</p>
                </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-ink mb-4">Related Guides</h2>
            <div className="space-y-2">
                  <a href="/defense" className="text-accent hover:text-accent-hover underline">Defense</a>
                  <a href="/best-defense-layout" className="text-accent hover:text-accent-hover underline">Best Defense Layout</a>
                  <a href="/double-wall-vs-single-wall" className="text-accent hover:text-accent-hover underline">Double Wall Vs Single Wall</a>
                  <a href="/corner-tower" className="text-accent hover:text-accent-hover underline">Corner Tower</a>

            </div>
          </section>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I know if a raid is trying to flank?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Watch the raid spawn direction and the AI movement path. If a raider group spawns east but your base faces west, they are likely looking for an eastern approach. Check your east wall for vulnerabilities. The minimap can help track raid movement direction before they reach your walls."
      }
    },
    {
      "@type": "Question",
      "name": "Should I build walls along rivers and cliffs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — natural terrain that raiders cannot cross (deep rivers, cliff faces) acts as a free wall section. Build your outer wall so its ends connect to these natural barriers rather than terminating in open terrain. This eliminates the flanking approaches on those sides without requiring additional wall tiles."
      }
    },
    {
      "@type": "Question",
      "name": "What if I cannot afford a full perimeter wall in early game?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Use palisade walls (cheap wood construction) to close gaps temporarily while you save materials for proper walls. Even low-durability palisade sections prevent pathfinding flanking routes — they don't need to be impenetrable, just present enough to route raid traffic through your chokepoint."
      }
    }
            ]
          })
        }}
      />
    </main>
  );
}
