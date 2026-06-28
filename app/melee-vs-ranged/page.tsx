export const metadata = {
  title: "Going Medieval Melee vs Ranged Defense — Which is Better? (2026)",
  description: "Compare melee vs ranged defense in Going Medieval. When to use archers, when to use melee defenders, optimal unit composition, and hybrid defense strategy.",
};

export default function MeleeVsRangedPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-10">
          <section>
            <h1 className="chapter-heading">Going Medieval Melee vs Ranged Defense — Complete Comparison</h1>
            <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
              Every raid in Going Medieval tests the same core question: do you stop the enemy before they reach your walls with ranged fire, or do you hold them at the wall with melee fighters? The answer is that neither approach alone is optimal — the strongest defenses use both in coordinated roles. Archers deal the most damage per settler during approach phase when enemies are in the open. Melee defenders hold gates, block corridors, and protect archers from direct engagement. This guide breaks down the strengths and weaknesses of each approach, optimal settler assignment ratios, equipment requirements for each role, and how to transition from pure-melee early game to a balanced hybrid force in the mid-game.
            </p>
          </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Melee Defense — Strengths and Weaknesses</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Melee defenders are settlers assigned to fight in close combat using swords, spears, axes, or shields. They are most effective in narrow corridors and gate positions where they can block enemy advance while absorbing damage.
              </p>
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Attribute</th>
                    <th>Melee</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Damage Output</td><td>High (in contact)</td><td>Requires direct engagement</td></tr>
                  <tr><td>Damage Taken</td><td>High</td><td>Directly in combat line</td></tr>
                  <tr><td>Equipment Cost</td><td>Medium-High</td><td>Armor investment critical for survival</td></tr>
                  <tr><td>Position Dependency</td><td>Very High</td><td>Must be at the right chokepoint</td></tr>
                  <tr><td>Early Game Viability</td><td>High</td><td>Works with basic weapons from year 1</td></tr>
                  <tr><td>Late Game Viability</td><td>Medium</td><td>Raids scale faster than single-tier melee</td></tr>
                </tbody>
              </table>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Ranged Defense — Strengths and Weaknesses</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Ranged defenders (archers and crossbowmen) deal damage from elevated positions before enemies reach melee contact. They require less armor investment since they should never be directly in combat, but they need platform construction and careful positioning.
              </p>
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Attribute</th>
                    <th>Ranged</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Damage Output</td><td>High (during approach)</td><td>Best when enemies in open terrain</td></tr>
                  <tr><td>Damage Taken</td><td>Low (with merlons)</td><td>Exposed without cover</td></tr>
                  <tr><td>Equipment Cost</td><td>Medium</td><td>Bows + arrows require material production</td></tr>
                  <tr><td>Position Dependency</td><td>High</td><td>Requires built platforms and sightlines</td></tr>
                  <tr><td>Early Game Viability</td><td>Medium</td><td>Arrow production can be bottleneck</td></tr>
                  <tr><td>Late Game Viability</td><td>Very High</td><td>Scales well with tower network</td></tr>
                </tbody>
              </table>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Optimal Hybrid Composition by Game Stage</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                The recommended military composition shifts as your colony grows, your infrastructure develops, and raids escalate in difficulty.
              </p>
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Game Stage</th>
                    <th>Settlers Total</th>
                    <th>Recommended Ratio</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Early (Year 1)</td><td>5-8</td><td>70% Melee / 30% Ranged</td><td>Infrastructure for arrows not yet mature</td></tr>
                  <tr><td>Mid (Year 1-2)</td><td>9-15</td><td>50% Melee / 50% Ranged</td><td>Towers built, arrow production established</td></tr>
                  <tr><td>Late (Year 2+)</td><td>16+</td><td>35% Melee / 65% Ranged</td><td>Tower network covers all angles; melee for fallback</td></tr>
                </tbody>
              </table>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Equipment Priority for Each Role</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Melee defenders should receive armor investment first. An unarmored melee settler dies quickly in direct combat. Prioritize: iron helmet → iron chestplate → iron greaves → weapon upgrade. Shield is optional but adds survivability in exchange for DPS.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Ranged defenders need less armor since they should never be in melee contact. Prioritize: weapon quality (longbow or crossbow over shortbow) → sufficient arrow stockpile (minimum 100 per archer for a standard raid) → light armor as secondary.
              </p>
              <div className="aged-border p-5" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                <p className="font-serif text-sm text-ink leading-relaxed">
                  <strong className="text-vermillion">&#9888; Key Principle:</strong> In the early game, every settler who can fight melee is a viable defender with just a weapon. Archers require arrow production infrastructure that takes time to establish. Start with a melee-heavy early force and transition toward ranged as your base matures. Never let your archer run out of arrows during a raid.
                </p>
              </div>
            </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-6">Frequently Asked Questions</h2>

                <div className="aged-border p-5 mb-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                  <h3 className="font-display text-lg font-semibold text-ink mb-2">Can the same settler be both melee and ranged?</h3>
                  <p className="font-serif text-base text-ink-light leading-relaxed">Yes — settlers can switch weapons, and skilled players sometimes arm settlers with both a melee weapon and a bow, switching roles based on raid phase. However, this requires manual micromanagement. It's simpler and more reliable to specialize settlers into dedicated melee or ranged roles with appropriate equipment.</p>
                </div>
                <div className="aged-border p-5 mb-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                  <h3 className="font-display text-lg font-semibold text-ink mb-2">Which skill matters more — melee skill or ranged skill?</h3>
                  <p className="font-serif text-base text-ink-light leading-relaxed">Ranged skill (Archery) matters more at mid-to-late game because ranged damage is the primary raid damage dealer during the approach phase. Melee skill (Combat) matters most for the defenders who hold your gate line. Prioritize training your designated melee settlers in Combat and your archers in Archery.</p>
                </div>
                <div className="aged-border p-5 mb-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                  <h3 className="font-display text-lg font-semibold text-ink mb-2">What if I only have 5 settlers and raids are already hard?</h3>
                  <p className="font-serif text-base text-ink-light leading-relaxed">With 5 settlers, keep all 5 armed with melee weapons and position them at your single chokepoint. Ranged requires infrastructure investment that is not viable with 5 settlers. Focus on building a wall with a single narrow chokepoint, place a few traps in the corridor, and hold the entrance with all available settlers.</p>
                </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-ink mb-4">Related Guides</h2>
            <div className="space-y-2">
                  <a href="/defense" className="text-accent hover:text-accent-hover underline">Defense</a>
                  <a href="/best-defense-layout" className="text-accent hover:text-accent-hover underline">Best Defense Layout</a>
                  <a href="/chokepoint-guide" className="text-accent hover:text-accent-hover underline">Chokepoint Guide</a>
                  <a href="/archer-vs-crossbow" className="text-accent hover:text-accent-hover underline">Archer Vs Crossbow</a>

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
      "name": "Can the same settler be both melee and ranged?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — settlers can switch weapons, and skilled players sometimes arm settlers with both a melee weapon and a bow, switching roles based on raid phase. However, this requires manual micromanagement. It's simpler and more reliable to specialize settlers into dedicated melee or ranged roles with appropriate equipment."
      }
    },
    {
      "@type": "Question",
      "name": "Which skill matters more — melee skill or ranged skill?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ranged skill (Archery) matters more at mid-to-late game because ranged damage is the primary raid damage dealer during the approach phase. Melee skill (Combat) matters most for the defenders who hold your gate line. Prioritize training your designated melee settlers in Combat and your archers in Archery."
      }
    },
    {
      "@type": "Question",
      "name": "What if I only have 5 settlers and raids are already hard?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "With 5 settlers, keep all 5 armed with melee weapons and position them at your single chokepoint. Ranged requires infrastructure investment that is not viable with 5 settlers. Focus on building a wall with a single narrow chokepoint, place a few traps in the corridor, and hold the entrance with all available settlers."
      }
    }
            ]
          })
        }}
      />
    </main>
  );
}
