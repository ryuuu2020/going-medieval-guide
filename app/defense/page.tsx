
export const metadata = {
  title: "Going Medieval Best Defense Layout — Ultimate Guide (2026)",
  description:
    "Learn the best defense layout in Going Medieval. Double wall vs single wall, killbox design, trap placement, and 5 proven layouts with data.",
  keywords: [
    "going medieval best defense layout",
    "going medieval defense layout",
    "going medieval wall design",
    "going medieval killbox",
  ],
};

export default function DefensePage() {
  return (
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-10">
            <section>
              <h1 className="chapter-heading">Going Medieval Best Defense Layout</h1>
              <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
                In the world of Going Medieval, raiders can strike at any time. From scattered bandits to organized raiding parties, your colony must be combat-ready at all times. This guide systematically covers wall layouts, trap configurations, weapon selection, and raid response tactics to help you build a multi-layered defense that leaves no invader standing. Data below is based on community combat experience and is for reference only.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Wall Defense Layout Strategies</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Walls are your first line of defense. A well-designed wall layout not only blocks enemies but also buys you time to counterattack. The recommended approach is a multi-layered wall strategy — leave a 3-4 tile buffer zone between outer and inner walls, filled with traps and ranged firing positions.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Wall height matters too. Building walls 2 levels high prevents enemies from climbing, while allowing archers to shoot from the top. Archers on wall tops gain a height advantage with significant accuracy and damage bonuses. Every wall section should have at least one gate or sally port to ensure settlers have clear entry and retreat routes.
              </p>
              <div className="aged-border p-5" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                <p className="font-serif text-sm text-ink leading-relaxed">
                  <strong className="text-vermillion">&#9888; Layered Defense Principle:</strong>
                  Never rely on a single defensive line. The recommended three-line setup: Outer wall &rarr; Trap zone &rarr; Inner wall. Even if the outer wall is breached, the trap zone wears enemies down, and the inner wall provides a final stronghold.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Trap Configuration</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Traps are extremely cost-effective defensive tools. Placing traps in wall gaps, in front of gates, and throughout buffer zones can damage enemies without exposing your settlers.
              </p>
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Trap Type</th>
                    <th>Damage</th>
                    <th>Crafting Materials</th>
                    <th>Triggers</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Wooden Spike Trap</td><td>40</td><td>Wood x3</td><td>3 times</td></tr>
                  <tr><td>Iron Spike Trap</td><td>80</td><td>Iron Ingot x2, Wood x1</td><td>5 times</td></tr>
                  <tr><td>Pitfall</td><td>30</td><td>None (digging)</td><td>Permanent</td></tr>
                </tbody>
              </table>
              <p className="font-serif text-sm text-ink-muted italic">Data source: Community testing estimates</p>
              <p className="font-serif text-base text-ink-light leading-relaxed mt-4">
                Trap placement tips: Densely pack wooden spike traps 2 tiles ahead of gates — raiders will continuously trigger them while breaking the gate. Pitfalls are best placed outside walls to slow enemy advance. Note that settlers can also trigger traps, so plan safe movement routes.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Weapons & Equipment</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Choosing the right weapons is critical for combat efficiency. Ranged weapons excel at wall defense; melee weapons are better for sorties and close-quarters fighting. Each settler should carry a primary weapon and a backup.
              </p>
              <div className="space-y-3">
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Bow (Ranged)</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">Long range, moderate damage. Ideal for archers on walls. Crafted with wood and rope. Archers on walls gain a height advantage bonus.</p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Crossbow (Ranged)</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">High damage, long range, but slow reload. Requires research unlock. Best for elite marksmen — can take down lightly armored enemies in one shot.</p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Spear (Melee)</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">Long attack reach (can strike first in melee), high damage. Great for gate defense. Requires wood and iron ingots.</p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Sword & Shield (Melee)</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">Balanced offense and defense; shields can block ranged attacks. Best for aggressive fighters. Requires iron ingots and leather.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Raid Response Plan</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                When a raid hits, stay calm and execute your defense plan quickly. Immediately recall all settlers inside the walls. Archers take positions on walls, melee fighters hold the gates. Use height advantage and traps to wear down enemies — avoid reckless sorties.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                If walls are breached, fall back inside buildings. Consolidate settlers in the strongest structure, blocking doorways with furniture as makeshift barricades. Pull wounded settlers to the rear for treatment immediately. After the battle, prioritize repairing walls and replenishing traps to prepare for follow-up attacks.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
              <div className="faq-item">
                <details>
                  <summary>Do raid frequency and difficulty increase over time?</summary>
                  <p>Yes. As your colony's wealth and population grow, raid size and frequency escalate. Early-game you might face 2-3 bandits; late-game you could face organized raiding parties of 10+. Continually upgrade your defenses.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>How do I improve settler combat skills?</summary>
                  <p>Settlers gain combat experience through fighting. You can also set up regular training (craft target dummies for archery practice). Better weapons and armor also significantly boost combat effectiveness. Prioritize assigning high-combat-skill settlers to your guard force.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>What should I do with prisoners?</summary>
                  <p>Hold prisoners in a prison cell and provide food regularly. After some time you can attempt to recruit them — successfully recruited prisoners become new settlers. If you don't need more population, you can release or execute them (execution lowers mood).</p>
                </details>
              </div>
            </section>
          </div>

          <aside className="lg:w-[35%] space-y-8 shrink-0">
            <div className="field-sidebar-block">
              <h3 className="font-display text-lg font-semibold text-ink mb-4">Weapon Quick Ref</h3>
              <div className="space-y-3">
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Bow</h4><p className="font-serif text-xs text-ink-muted mt-1">Wood x3, Rope x1 | Ranged</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Crossbow</h4><p className="font-serif text-xs text-ink-muted mt-1">Wood x2, Iron Ingot x2 | Ranged</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Spear</h4><p className="font-serif text-xs text-ink-muted mt-1">Wood x2, Iron Ingot x1 | Melee</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Iron Sword</h4><p className="font-serif text-xs text-ink-muted mt-1">Iron Ingot x2, Leather x1 | Melee</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Leather Armor</h4><p className="font-serif text-xs text-ink-muted mt-1">Leather x3 | Armor</p></div>
              </div>
            </div>
            <div className="journal-card p-5">
              <h3 className="font-display text-base font-semibold text-ink mb-3">Defense Priority</h3>
              <ol className="space-y-2 font-serif text-sm text-ink-light">
                <li>1. Wood wall enclosure (min. 2 levels high)</li>
                <li>2. Wooden spike traps (in front of gates)</li>
                <li>3. Archers on walls</li>
                <li>4. Upgrade to stone walls</li>
                <li>5. Multi-layered walls + buffer zone</li>
                <li>6. Crossbow elite marksmen</li>
              </ol>
            </div>
          </aside>
        </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do raid frequency and difficulty increase over time?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. As your colony's wealth and population grow, raid size and frequency escalate. Early-game you might face 2-3 bandits; late-game you could face organized raiding parties of 10+. Continually upgrade your defenses."
      }
    },
    {
      "@type": "Question",
      "name": "How do I improve settler combat skills?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Settlers gain combat experience through fighting. You can also set up regular training (craft target dummies for archery practice). Better weapons and armor also significantly boost combat effectiveness. Prioritize assigning high-combat-skill settlers to your guard force."
      }
    },
    {
      "@type": "Question",
      "name": "What should I do with prisoners?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hold prisoners in a prison cell and provide food regularly. After some time you can attempt to recruit them — successfully recruited prisoners become new settlers. If you don't need more population, you can release or execute them (execution lowers mood)."
      }
    }
  ]
}` }} />
      </main>
  );
}
