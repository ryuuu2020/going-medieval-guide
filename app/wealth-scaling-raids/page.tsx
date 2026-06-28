export const metadata = {
  title: "Going Medieval Wealth Scaling Raids — How Raids Scale (2026)",
  description: "Understand Going Medieval raid scaling. How wealth affects raid size, difficulty tiers, wealth management strategy, and controlling when raids escalate.",
};

export default function WealthScalingRaidsPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-10">
          <section>
            <h1 className="chapter-heading">Going Medieval Wealth Scaling — How Raids Get Harder</h1>
            <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
              In Going Medieval, the difficulty of raids you face is not fixed — it scales dynamically with your colony's accumulated wealth. The more valuable your structures, stockpiled goods, and equipment, the larger and better-armed the raid groups the game sends against you. Understanding this system is essential for pacing your base development and ensuring your defenses are always ahead of the raids that your wealth level is generating. This guide explains the wealth scoring formula, which items contribute most to your wealth score, how to read upcoming raid difficulty, strategies for controlled wealth management, and how to build defensively ahead of the wealth curve.
            </p>
          </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">How the Wealth Scaling System Works</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Going Medieval's raid system uses a wealth-based scaling model. The game continuously tracks your colony's total wealth — a score calculated from the value of everything in and around your base: buildings, stockpiled materials, crafted goods, equipment, food, and livestock. As this score increases, the raid difficulty tier advances.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Raid difficulty manifests as: larger group sizes (more individual raiders), better-equipped enemies (more iron armor, ranged units), more coordinated tactics (siege weapon users appear at high wealth tiers), and more frequent raid scheduling. Early colonies with low wealth face small groups of lightly armored raiders. High-wealth late-game colonies face organized assault forces.
              </p>
              <div className="aged-border p-5" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                <p className="font-serif text-sm text-ink leading-relaxed">
                  <strong className="text-vermillion">&#9888; Note:</strong> Exact wealth thresholds are not displayed in-game and vary by difficulty setting. The values in this guide are based on community testing and are approximate. Use them as relative indicators rather than exact numbers.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">High-Value Items That Raise Your Wealth Score Fastest</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Not all items contribute equally to wealth. Crafted finished goods are worth significantly more than raw materials. Equipment and weapons have high individual wealth values. Understanding which items spike your wealth score helps you manage the rate of raid escalation.
              </p>
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Item Category</th>
                    <th>Wealth Impact</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Stone/Brick Walls</td><td>High (cumulative)</td><td>Each wall tile adds to total; large perimeters add up fast</td></tr>
                  <tr><td>Iron Weapons &amp; Armor</td><td>Very High (per item)</td><td>Each piece is high individual value</td></tr>
                  <tr><td>Crafted Furniture</td><td>Medium-High</td><td>Tables, beds, shelves all contribute</td></tr>
                  <tr><td>Stockpiled Food</td><td>Medium</td><td>Large food stores notably increase score</td></tr>
                  <tr><td>Raw Materials (logs, stone)</td><td>Low per unit</td><td>High volume needed to matter</td></tr>
                  <tr><td>Livestock</td><td>Medium</td><td>Each animal adds wealth; herds add up</td></tr>
                </tbody>
              </table>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Wealth Management Strategies</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                The goal of wealth management is not to stay poor forever — it is to ensure your defensive capability always grows faster than your wealth score. Raids should never arrive when your defenses are mid-construction or your settlers are unarmed.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                <strong className="text-ink">Build defenses before stockpiling:</strong> Complete your outer wall, corner towers, and chokepoint design before accumulating large stockpiles of crafted goods. A defended base can absorb a higher-tier raid; an undefended wealthy base cannot.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                <strong className="text-ink">Arm your settlers gradually:</strong> Distributing weapons and armor among your settlers increases both wealth score and defensive capability simultaneously. Time equipment production to precede the wealth tier it pushes you into.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                <strong className="text-ink">Sell high-value items via merchants:</strong> If you are generating excess crafted goods faster than you can store or use them, sell them to passing merchants. This removes wealth from your score while generating silver for future purchases.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Reading Upcoming Raids — Warning Signs</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                The game provides a raid warning system via the threat event notifications in the top-left event log. When a raid is inbound, the log shows the faction name and raid size. Cross-reference the raid size with your current defenses to determine if you are ready.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                As your wealth grows, monitor raid size trends. If each successive raid is noticeably larger than the previous one, your wealth is scaling faster than your defenses. Pause crafting non-essential goods and focus a build cycle on upgrading walls, adding tower capacity, and training more military-focused settlers before the next raid wave arrives.
              </p>
            </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-6">Frequently Asked Questions</h2>

                <div className="aged-border p-5 mb-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                  <h3 className="font-display text-lg font-semibold text-ink mb-2">Does destroying buildings reduce my wealth score?</h3>
                  <p className="font-serif text-base text-ink-light leading-relaxed">Yes — demolished structures are removed from the wealth calculation. Some players deliberately demolish and rebuild structures to reset their wealth score temporarily, though this is an advanced strategy. More practically, avoid building large quantities of high-value structures faster than your defenses can scale.</p>
                </div>
                <div className="aged-border p-5 mb-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                  <h3 className="font-display text-lg font-semibold text-ink mb-2">Do raids scale with game difficulty setting?</h3>
                  <p className="font-serif text-base text-ink-light leading-relaxed">Yes — the base wealth thresholds and raid escalation speed both vary by difficulty. On lower settings, raids escalate more slowly and caps are lower. On harder settings, wealth-driven escalation is faster and raid sizes are larger at the same wealth tiers. The strategies in this guide apply across all difficulties but relative urgency varies.</p>
                </div>
                <div className="aged-border p-5 mb-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                  <h3 className="font-display text-lg font-semibold text-ink mb-2">Can I pause raid escalation?</h3>
                  <p className="font-serif text-base text-ink-light leading-relaxed">There is no in-game pause to wealth scaling. The closest equivalent is slowing your wealth accumulation rate by focusing on raw material production rather than crafted goods, and selling finished items to merchants rather than stockpiling them. This slows the wealth score growth rate and delays raid tier advancement.</p>
                </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-ink mb-4">Related Guides</h2>
            <div className="space-y-2">
                  <a href="/defense" className="text-accent hover:text-accent-hover underline">Defense</a>
                  <a href="/raid-defense" className="text-accent hover:text-accent-hover underline">Raid Defense</a>
                  <a href="/best-defense-layout" className="text-accent hover:text-accent-hover underline">Best Defense Layout</a>
                  <a href="/chokepoint-guide" className="text-accent hover:text-accent-hover underline">Chokepoint Guide</a>

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
      "name": "Does destroying buildings reduce my wealth score?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — demolished structures are removed from the wealth calculation. Some players deliberately demolish and rebuild structures to reset their wealth score temporarily, though this is an advanced strategy. More practically, avoid building large quantities of high-value structures faster than your defenses can scale."
      }
    },
    {
      "@type": "Question",
      "name": "Do raids scale with game difficulty setting?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — the base wealth thresholds and raid escalation speed both vary by difficulty. On lower settings, raids escalate more slowly and caps are lower. On harder settings, wealth-driven escalation is faster and raid sizes are larger at the same wealth tiers. The strategies in this guide apply across all difficulties but relative urgency varies."
      }
    },
    {
      "@type": "Question",
      "name": "Can I pause raid escalation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "There is no in-game pause to wealth scaling. The closest equivalent is slowing your wealth accumulation rate by focusing on raw material production rather than crafted goods, and selling finished items to merchants rather than stockpiling them. This slows the wealth score growth rate and delays raid tier advancement."
      }
    }
            ]
          })
        }}
      />
    </main>
  );
}
