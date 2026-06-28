export const metadata = {
  title: "Going Medieval Trap Placement Guide — Best Locations (2026)",
  description: "Complete trap placement guide for Going Medieval. Best pit trap locations, spike trap corridors, and trap combinations for maximum raid defense.",
};

export default function TrapPlacementPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-10">
          <section>
            <h1 className="chapter-heading">Going Medieval Trap Placement Guide</h1>
            <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
              Traps are one of the most cost-efficient defensive tools in Going Medieval — they deal damage passively, require no settler to operate, and can be reused indefinitely once triggered and reset. The key to effective trap use is placement: a trap in the wrong location does nothing, but a trap at a well-designed chokepoint can eliminate multiple raiders before your melee line ever engages. This guide covers every trap type currently in the game, optimal placement zones, corridor trap spacing, trap layering with archer fire, and how to maintain traps during a raid without putting settlers at risk. All data is based on community testing and current game build.
            </p>
          </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Trap Types and Their Properties</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Going Medieval currently features several trap types, each with distinct behavior and placement requirements. Understanding the differences is essential before placing them in your base.
              </p>
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Trap Type</th>
                    <th>Damage</th>
                    <th>Trigger Condition</th>
                    <th>Reset Time</th>
                    <th>Best Location</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Pit Trap</td><td>Medium</td><td>Stepped on</td><td>Manual reset required</td><td>Corridor center tiles</td></tr>
                  <tr><td>Spike Trap</td><td>High</td><td>Stepped on</td><td>Auto-resets after cooldown</td><td>Killbox entrance</td></tr>
                  <tr><td>Bear Trap</td><td>Low-Medium</td><td>Stepped on</td><td>Manual reset required</td><td>Open approach zones</td></tr>
                  <tr><td>Swinging Blade</td><td>Very High</td><td>Tile adjacency</td><td>Auto-resets</td><td>Narrow corridors (1-tile wide)</td></tr>
                </tbody>
              </table>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Optimal Placement Zones in Your Base</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                The best trap locations are where you can guarantee enemy passage. Random placement in open terrain is wasteful — raiders may avoid trapped tiles if there is a clear path around them. Effective placement forces the enemy to step on the trap or not advance at all.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                <strong className="text-ink">Zone 1 — Corridor Approach:</strong> Place traps in the center 1-2 tiles of a 3-tile-wide corridor. Raiders must enter the corridor and will step on center tiles as they advance. Avoid placing traps along the edges — enemies sometimes hug walls when moving in formation.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                <strong className="text-ink">Zone 2 — Gate Threshold:</strong> Place traps 1-2 tiles inside your gate opening. The first wave of raiders floods through the gate quickly, and traps at the threshold catch the lead units before they can fan out.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                <strong className="text-ink">Zone 3 — S-Bend Turn Points:</strong> If your corridor has directional bends, place traps at the apex of each turn. Raiders slow slightly when changing direction, increasing the probability they step on trapped tiles.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Corridor Trap Spacing for Maximum Coverage</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Trap density matters. Spacing traps too far apart leaves gaps raiders can walk through untriggered. Too close together wastes materials on redundant coverage. The recommended spacing depends on raid group size and corridor length.
              </p>
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Corridor Length</th>
                    <th>Recommended Trap Count</th>
                    <th>Spacing</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>8 tiles</td><td>2-3 traps</td><td>Every 3rd tile</td><td>Early game standard</td></tr>
                  <tr><td>12 tiles</td><td>4-5 traps</td><td>Every 2-3rd tile</td><td>Mid game optimal</td></tr>
                  <tr><td>16+ tiles</td><td>6-8 traps</td><td>Every 2nd tile center</td><td>Late game killcorridor</td></tr>
                </tbody>
              </table>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Combining Traps with Archer Fire</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Traps and archers are strongest when layered. Traps slow and damage advancing raiders, giving your archers more time to fire volleys before melee contact. A raider slowed or stunned by a trap is an easy target for elevated archers.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Position archer platforms at the end of the corridor, overlooking the trap zone. Archers shoot down the corridor as raiders advance through the trapped tiles. The trap damage softens enemies and the archer fire finishes them before they reach your melee defenders.
              </p>
              <div className="aged-border p-5" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                <p className="font-serif text-sm text-ink leading-relaxed">
                  <strong className="text-vermillion">&#9888; Tip:</strong> Never place traps in tiles where your settlers will walk during normal base operation. Accidentally triggering your own traps during patrol or work routes is a common early-game mistake. Designate the trapped corridor as a restricted zone except during raids.
                </p>
              </div>
            </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-6">Frequently Asked Questions</h2>

                <div className="aged-border p-5 mb-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                  <h3 className="font-display text-lg font-semibold text-ink mb-2">Can settlers trigger their own traps?</h3>
                  <p className="font-serif text-base text-ink-light leading-relaxed">Yes — settlers are subject to trap triggers just like enemies. Designate corridors with traps as restricted movement zones during peacetime, and only open them during raids. This prevents friendly casualties from your own defenses.</p>
                </div>
                <div className="aged-border p-5 mb-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                  <h3 className="font-display text-lg font-semibold text-ink mb-2">Do traps affect animals or merchants?</h3>
                  <p className="font-serif text-base text-ink-light leading-relaxed">Traps trigger on any entity that steps on them, including neutral animals and visiting merchants. Keep traps in dedicated raid corridors that friendly traffic never passes through. Avoid placing traps near merchant arrival routes.</p>
                </div>
                <div className="aged-border p-5 mb-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                  <h3 className="font-display text-lg font-semibold text-ink mb-2">What is the best trap for a 3-tile-wide corridor?</h3>
                  <p className="font-serif text-base text-ink-light leading-relaxed">Spike traps placed on the center tile of a 3-tile corridor are the most reliable option. Raiders tend to advance through the center column. Pit traps are good secondary options placed on either side of the center spike trap for coverage of edge-hugging enemies.</p>
                </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-ink mb-4">Related Guides</h2>
            <div className="space-y-2">
                  <a href="/chokepoint-guide" className="text-accent hover:text-accent-hover underline">Chokepoint Guide</a>
                  <a href="/best-defense-layout" className="text-accent hover:text-accent-hover underline">Best Defense Layout</a>
                  <a href="/killbox-design" className="text-accent hover:text-accent-hover underline">Killbox Design</a>
                  <a href="/double-wall-vs-single-wall" className="text-accent hover:text-accent-hover underline">Double Wall Vs Single Wall</a>

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
      "name": "Can settlers trigger their own traps?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — settlers are subject to trap triggers just like enemies. Designate corridors with traps as restricted movement zones during peacetime, and only open them during raids. This prevents friendly casualties from your own defenses."
      }
    },
    {
      "@type": "Question",
      "name": "Do traps affect animals or merchants?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Traps trigger on any entity that steps on them, including neutral animals and visiting merchants. Keep traps in dedicated raid corridors that friendly traffic never passes through. Avoid placing traps near merchant arrival routes."
      }
    },
    {
      "@type": "Question",
      "name": "What is the best trap for a 3-tile-wide corridor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Spike traps placed on the center tile of a 3-tile corridor are the most reliable option. Raiders tend to advance through the center column. Pit traps are good secondary options placed on either side of the center spike trap for coverage of edge-hugging enemies."
      }
    }
            ]
          })
        }}
      />
    </main>
  );
}
