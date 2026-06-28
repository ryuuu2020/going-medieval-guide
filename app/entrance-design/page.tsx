export const metadata = {
  title: "Going Medieval Entrance Design — Defensive Gate Guide (2026)",
  description: "Design defensible entrances in Going Medieval. Gate placement, drawbridge setups, murder-hole corridors, and entrance defense strategy.",
};

export default function EntranceDesignPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-10">
          <section>
            <h1 className="chapter-heading">Going Medieval Entrance Design — Defensive Gate Guide</h1>
            <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
              Your colony's entrance is both its most necessary vulnerability and its greatest defensive opportunity. Every raid must enter through a gap — the question is whether that gap is a controlled killzone you designed, or a breach in a wall you didn't finish. This guide covers gate types and their defensive properties, optimal entrance positioning relative to your base, layered gate designs (outer gate, inner gate, fallback positions), murder-hole corridor construction, and common entrance design mistakes that leave colonies exposed. All recommendations reflect current game mechanics.
            </p>
          </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Gate Types and Defensive Properties</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Going Medieval offers several gate and door options with distinct health pools and construction costs. Choosing the right gate for your entrance tier significantly affects how long your defense line holds during a raid.
              </p>
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Gate Type</th>
                    <th>Material</th>
                    <th>Durability</th>
                    <th>Best Use</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Wooden Door</td><td>Wood</td><td>Low</td><td>Internal doors only; not suitable for outer walls</td></tr>
                  <tr><td>Reinforced Door</td><td>Wood + Iron</td><td>Medium</td><td>Early outer entrance, replace ASAP</td></tr>
                  <tr><td>Iron Gate</td><td>Iron</td><td>High</td><td>Primary outer entrance from mid-game</td></tr>
                  <tr><td>Stone Gate</td><td>Stone</td><td>Very High</td><td>Main entrance in hardened base</td></tr>
                  <tr><td>Drawbridge</td><td>Wood/Stone</td><td>N/A</td><td>Retractable bridge over moat — best outer layer</td></tr>
                </tbody>
              </table>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Entrance Positioning — Where to Place Your Gate</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Gate position determines which direction raiders approach from and what terrain they cross before reaching your defenders. Poor gate placement creates approach zones with no natural obstacles, allowing raids to arrive in large formations at full combat strength.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                <strong className="text-ink">Corner Placement:</strong> Position your entrance at the corner of your outer wall rather than the center of a wall face. Corner gates force raiders to approach at an angle, breaking formation and exposing them to fire from two wall faces simultaneously.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                <strong className="text-ink">Terrain Leverage:</strong> Place gates where natural terrain features (cliffs, rivers, dense trees) restrict approach vectors. An entrance backed by a cliff eliminates one full flank and concentrates all raid traffic through your prepared kill zone.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Layered Entrance Design: Outer, Middle, and Fallback Gates</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                The strongest entrance designs are layered — multiple gates with killing zones between each layer. When the outer gate falls, raiders enter a prepared courtyard before reaching the next gate. Each layer gives your archers and settlers time to deal damage before the next structure is breached.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                A three-layer entrance works as follows: the outer gate (drawbridge or stone gate) is the first layer — it will eventually fall in hard raids. Between the outer and middle gates is a walled courtyard with no cover for raiders and archer fire from both sides. The middle gate is reinforced iron or stone. If it breaches, a short corridor with traps leads to the fallback gate, which opens directly into your melee line.
              </p>
              <div className="aged-border p-5" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                <p className="font-serif text-sm text-ink leading-relaxed">
                  <strong className="text-vermillion">&#9888; Design Rule:</strong> Never build a single entrance gate with open space immediately behind it. A gate that falls and opens directly into your base with no secondary defensive position gives you zero reaction time. Always have a courtyard, a corridor, or a fallback defensive line behind your outer gate.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Murder-Hole Corridor Construction</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                A murder-hole corridor is a narrow passage between your outer and inner gate where raiders are funneled into a zone with no cover, exposed to archer fire from elevated positions on both sides. The term comes from medieval castle design: narrow passages where defenders could pour fire downward on attackers with minimal risk.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Build the corridor 3 tiles wide and 8-12 tiles long. Elevate both side walls to height 2 or 3 and place archer positions overlooking the corridor. Add merlon cover for your archers so they are protected from return fire. Trap the center tile. Raiders must walk through this corridor to reach your inner gate — they take constant damage from traps and archers with no way to return effective fire.
              </p>
            </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-6">Frequently Asked Questions</h2>

                <div className="aged-border p-5 mb-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                  <h3 className="font-display text-lg font-semibold text-ink mb-2">Should my entrance face north, south, east, or west?</h3>
                  <p className="font-serif text-base text-ink-light leading-relaxed">Direction matters less than terrain. Face your entrance toward the flattest, most open approach so you can see raids coming from a distance, and position your archer towers to cover the approach. Avoid placing the entrance at the bottom of a hill where raiders gain high ground before reaching your gate.</p>
                </div>
                <div className="aged-border p-5 mb-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                  <h3 className="font-display text-lg font-semibold text-ink mb-2">How many gates should a mid-game base have?</h3>
                  <p className="font-serif text-base text-ink-light leading-relaxed">One primary entrance and one secondary emergency exit (which should be sealed shut during raids). Multiple active entrances multiply the number of chokepoints you need to defend simultaneously. Keep it to one functional entrance until you have enough settlers to defend two positions at once.</p>
                </div>
                <div className="aged-border p-5 mb-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                  <h3 className="font-display text-lg font-semibold text-ink mb-2">What is the best gate material in early game?</h3>
                  <p className="font-serif text-base text-ink-light leading-relaxed">Reinforced wooden doors are the best early option before iron is available. Prioritize upgrading to iron gates as soon as your smithy is operational. Wooden gates can be breached quickly by raider groups of 8+, while iron gates hold significantly longer, giving your archers more firing time.</p>
                </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-ink mb-4">Related Guides</h2>
            <div className="space-y-2">
                  <a href="/best-defense-layout" className="text-accent hover:text-accent-hover underline">Best Defense Layout</a>
                  <a href="/chokepoint-guide" className="text-accent hover:text-accent-hover underline">Chokepoint Guide</a>
                  <a href="/trap-placement" className="text-accent hover:text-accent-hover underline">Trap Placement</a>
                  <a href="/killbox-design" className="text-accent hover:text-accent-hover underline">Killbox Design</a>

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
      "name": "Should my entrance face north, south, east, or west?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Direction matters less than terrain. Face your entrance toward the flattest, most open approach so you can see raids coming from a distance, and position your archer towers to cover the approach. Avoid placing the entrance at the bottom of a hill where raiders gain high ground before reaching your gate."
      }
    },
    {
      "@type": "Question",
      "name": "How many gates should a mid-game base have?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "One primary entrance and one secondary emergency exit (which should be sealed shut during raids). Multiple active entrances multiply the number of chokepoints you need to defend simultaneously. Keep it to one functional entrance until you have enough settlers to defend two positions at once."
      }
    },
    {
      "@type": "Question",
      "name": "What is the best gate material in early game?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Reinforced wooden doors are the best early option before iron is available. Prioritize upgrading to iron gates as soon as your smithy is operational. Wooden gates can be breached quickly by raider groups of 8+, while iron gates hold significantly longer, giving your archers more firing time."
      }
    }
            ]
          })
        }}
      />
    </main>
  );
}
