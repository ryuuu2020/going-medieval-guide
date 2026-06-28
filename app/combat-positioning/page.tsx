export const metadata = {
  title: "Going Medieval Combat Positioning — Tactics Guide (2026)",
  description: "Master combat positioning in Going Medieval. Settler formation tactics, high ground advantage, cover usage, flanking defense, and melee/ranged coordination.",
};

export default function CombatPositioningPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-10">
          <section>
            <h1 className="chapter-heading">Going Medieval Combat Positioning — Tactics Guide</h1>
            <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
              Positioning is the difference between a controlled raid defense and a chaotic melee where your settlers take unnecessary wounds. Going Medieval rewards deliberate placement: a melee line holding a corridor entrance while archers fire from elevated flanks is far more effective than the same settlers fighting in an open cluster. This guide covers the core principles of combat positioning — chokepoint formation, elevation advantage, cover mechanics, melee-ranged coordination, fallback line design, and manual vs automatic combat management — so you can convert every raid into a one-sided engagement.
            </p>
          </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Melee Line Formation at Chokepoints</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Position your melee defenders at the narrowest point of your chokepoint — ideally a 3-tile-wide corridor entrance. A 3-settler melee line occupying all three tiles of the corridor entrance creates an impassable barrier. No raider can bypass this line without defeating the settlers holding it; they cannot go around because the walls funnel all movement through the three tiles.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Melee defenders should have their backs to the interior of your base and face outward toward approaching raiders. Assign defenders to specific tiles using the zone/draft system. Lock them at these positions before the raid arrives so they do not wander when the event starts.
              </p>
              <div className="aged-border p-5" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                <p className="font-serif text-sm text-ink leading-relaxed">
                  <strong className="text-vermillion">&#9888; Positioning Rule:</strong> Never let your melee defenders leave the chokepoint to chase retreating enemies. Pursuit breaks formation and leaves the chokepoint undefended. Set your ranged settlers to finish retreating enemies while melee holds position.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Elevation Advantage for Ranged Settlers</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Archers and crossbowmen positioned on platforms higher than the combat zone gain a range advantage and attack bonus. Elevated ranged settlers can fire over the melee line and into the approaching raider column, dealing damage before enemies reach melee contact.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Build archer platforms 1-2 levels above the chokepoint floor, overlooking the approach corridor. Position ranged settlers on these platforms before the raid begins. With merlons for cover, elevated archers are practically untouchable while the melee line holds the chokepoint.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Fallback Lines and Retreat Positioning</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Design a fallback position 8-12 tiles behind your primary chokepoint. If the first line fails (settlers too wounded to continue, chokepoint overwhelmed), defenders retreat to the fallback line which provides a second defensible position and buys time for healing and recovery.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Pre-designate fallback positions before raids start. In the chaos of a raid, manually positioning settlers correctly takes time you may not have. Know where defenders go when the first line breaks and set those positions in advance.
              </p>
            </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-6">Frequently Asked Questions</h2>

                <div className="aged-border p-5 mb-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                  <h3 className="font-display text-lg font-semibold text-ink mb-2">Should I manually control settler positions during raids?</h3>
                  <p className="font-serif text-base text-ink-light leading-relaxed">Yes for critical positions — manually draft and position your melee line before the raid arrives. Automatic combat AI will have settlers engage, but may not position them optimally at the exact chokepoint tile you need. For archers, the AI usually does well if they are on the correct platform; melee positioning benefits most from manual control.</p>
                </div>
                <div className="aged-border p-5 mb-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                  <h3 className="font-display text-lg font-semibold text-ink mb-2">How do I use cover effectively?</h3>
                  <p className="font-serif text-base text-ink-light leading-relaxed">Settlers adjacent to walls or behind structures gain cover bonuses that reduce incoming ranged damage. In an open-field skirmish, position settlers next to trees, rocks, or building corners. In base defense, the walls and merlons provide automatic cover — position defenders to use this architecture rather than fighting in the open.</p>
                </div>
                <div className="aged-border p-5 mb-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                  <h3 className="font-display text-lg font-semibold text-ink mb-2">What if my settlers keep running past the chokepoint to meet enemies?</h3>
                  <p className="font-serif text-base text-ink-light leading-relaxed">This happens when the AI decides a shorter path to an enemy exists outside your chokepoint. Force chokepoint usage by drafting all military settlers manually at raid start and positioning them at the chokepoint before releasing to auto-combat, or by closing all alternative paths so the chokepoint is the only valid route.</p>
                </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-ink mb-4">Related Guides</h2>
            <div className="space-y-2">
                  <a href="/defense" className="text-accent hover:text-accent-hover underline">Defense</a>
                  <a href="/chokepoint-guide" className="text-accent hover:text-accent-hover underline">Chokepoint Guide</a>
                  <a href="/melee-vs-ranged" className="text-accent hover:text-accent-hover underline">Melee Vs Ranged</a>
                  <a href="/best-defense-layout" className="text-accent hover:text-accent-hover underline">Best Defense Layout</a>

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
      "name": "Should I manually control settler positions during raids?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes for critical positions — manually draft and position your melee line before the raid arrives. Automatic combat AI will have settlers engage, but may not position them optimally at the exact chokepoint tile you need. For archers, the AI usually does well if they are on the correct platform; melee positioning benefits most from manual control."
      }
    },
    {
      "@type": "Question",
      "name": "How do I use cover effectively?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Settlers adjacent to walls or behind structures gain cover bonuses that reduce incoming ranged damage. In an open-field skirmish, position settlers next to trees, rocks, or building corners. In base defense, the walls and merlons provide automatic cover — position defenders to use this architecture rather than fighting in the open."
      }
    },
    {
      "@type": "Question",
      "name": "What if my settlers keep running past the chokepoint to meet enemies?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "This happens when the AI decides a shorter path to an enemy exists outside your chokepoint. Force chokepoint usage by drafting all military settlers manually at raid start and positioning them at the chokepoint before releasing to auto-combat, or by closing all alternative paths so the chokepoint is the only valid route."
      }
    }
            ]
          })
        }}
      />
    </main>
  );
}
