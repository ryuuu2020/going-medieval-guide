export const metadata = {
  title: "Going Medieval Specialist Training — Skill Leveling Guide (2026)",
  description: "Train specialist settlers in Going Medieval. Fastest skill leveling methods, work priority setup, passion traits, and which skills to specialize first.",
};

export default function SpecialistTrainingPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-10">
          <section>
            <h1 className="chapter-heading">Going Medieval Specialist Training — Complete Skill Guide</h1>
            <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
              A colony of generalist settlers who do everything at medium skill level will always underperform a colony with dedicated specialists who excel at critical roles. In Going Medieval, settler skills advance through use — a settler who spends 80% of their time farming reaches high Farming skill far faster than one who splits time between farming, crafting, and construction. The key to rapid specialization is using the work priority system to focus each settler on their highest-need role and removing all competing task assignments that dilute their skill progression. This guide explains skill mechanics, how work priorities affect leveling speed, which skills to specialize first, and how trait-based passions accelerate certain skill paths.
            </p>
          </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">How Skill Progression Works</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Skills in Going Medieval advance on an experience-point system. Performing tasks related to a skill awards experience. The experience required per level increases with each level, so early levels advance quickly while higher levels require sustained specialization.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                A settler performing a task they are not skilled in works significantly slower than a specialist. This creates a compounding advantage for specialization: the specialist finishes tasks faster, freeing time for more tasks, accumulating more experience per day than a generalist performing the same task at low skill.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Work Priority Configuration for Specialization</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Set each settler's work priorities to reflect their designated specialty. The priority system assigns a numeric priority to each task category. A settler with Farming at priority 1 and everything else at 3-4 will spend the majority of their active work hours farming, advancing Farming skill rapidly.
              </p>
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Specialty Role</th>
                    <th>Priority 1 (Primary)</th>
                    <th>Priority 2 (Secondary)</th>
                    <th>Everything Else</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Farmer</td><td>Farming, Foraging</td><td>Hauling</td><td>Off or Low</td></tr>
                  <tr><td>Carpenter</td><td>Building, Crafting</td><td>Hauling</td><td>Off or Low</td></tr>
                  <tr><td>Smith</td><td>Smithing, Smelting</td><td>Mining</td><td>Off or Low</td></tr>
                  <tr><td>Mason</td><td>Building, Mining</td><td>Hauling</td><td>Off or Low</td></tr>
                  <tr><td>Archer</td><td>Combat (Ranged)</td><td>Hunting</td><td>Off or Low</td></tr>
                  <tr><td>Cook</td><td>Cooking, Baking</td><td>Hauling food</td><td>Off or Low</td></tr>
                  <tr><td>Healer</td><td>Medicine</td><td>Research</td><td>Off or Low</td></tr>
                </tbody>
              </table>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Passion Traits and Skill Acceleration</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Settler traits include Passion designations for specific skills. A settler with Major Passion for Farming advances Farming skill at roughly double the normal experience rate. A settler with Minor Passion advances at approximately 1.5x. Settlers with no passion advance at 1x.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Always match specialist roles to settler passions where possible. A settler with Major Passion for Combat is an ideal dedicated warrior; one with Major Passion for Farming should be your primary farmer. Assigning a passion settler to a role they have no passion for wastes their skill acceleration potential.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Priority Specialization Order — Which Skills First</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Not all skills are equally critical in the early game. Prioritize specialization in this order based on impact:
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                1. <strong className="text-ink">Farmer (Farming 8+)</strong> — high-skill farming produces dramatically more food per tile. 2. <strong className="text-ink">Carpenter (Building 8+)</strong> — faster construction and higher-quality furniture. 3. <strong className="text-ink">Smith (Smithing 8+)</strong> — better weapons and armor for defense. 4. <strong className="text-ink">Cook (Cooking 8+)</strong> — better meals mean ongoing mood bonuses for every settler. 5. <strong className="text-ink">Healer (Medicine 8+)</strong> — prevents injury deaths that trigger colony-wide mood spirals.
              </p>
            </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-6">Frequently Asked Questions</h2>

                <div className="aged-border p-5 mb-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                  <h3 className="font-display text-lg font-semibold text-ink mb-2">Can a specialist change roles later if needed?</h3>
                  <p className="font-serif text-base text-ink-light leading-relaxed">Yes — work priorities can be changed at any time and skills do not decay. If your designated farmer is injured, you can temporarily reassign another settler to cover farming and switch back when the specialist recovers. Skills persist, so the specialist's high Farming level remains available whenever they return to that role.</p>
                </div>
                <div className="aged-border p-5 mb-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                  <h3 className="font-display text-lg font-semibold text-ink mb-2">What level should I aim for in critical skills?</h3>
                  <p className="font-serif text-base text-ink-light leading-relaxed">Level 8 is the practical target for most specialist roles — at this level, the quality bonuses for crafted items and work speed improvements are significant. Level 10 (maximum) is ideal for your most important roles: Farming, Smithing, Cooking. Diminishing returns apply, so Level 10 is worth pursuing only for the most-used skills.</p>
                </div>
                <div className="aged-border p-5 mb-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                  <h3 className="font-display text-lg font-semibold text-ink mb-2">How do I identify which settler has the best potential for each role?</h3>
                  <p className="font-serif text-base text-ink-light leading-relaxed">Check settler traits for Passions (double skill XP) and Aptitude scores at settler arrival. The inspect settler panel shows skill starting values — a settler arriving with Farming 4 and Major Passion for Farming is a far better farmer candidate than one arriving at Farming 1 with no passion, even if they have similar total stats.</p>
                </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-ink mb-4">Related Guides</h2>
            <div className="space-y-2">
                  <a href="/settlers" className="text-accent hover:text-accent-hover underline">Settlers</a>
                  <a href="/work-priorities" className="text-accent hover:text-accent-hover underline">Work Priorities</a>
                  <a href="/settler-skills" className="text-accent hover:text-accent-hover underline">Settler Skills</a>
                  <a href="/settler-traits-tier-list" className="text-accent hover:text-accent-hover underline">Settler Traits Tier List</a>

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
      "name": "Can a specialist change roles later if needed?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — work priorities can be changed at any time and skills do not decay. If your designated farmer is injured, you can temporarily reassign another settler to cover farming and switch back when the specialist recovers. Skills persist, so the specialist's high Farming level remains available whenever they return to that role."
      }
    },
    {
      "@type": "Question",
      "name": "What level should I aim for in critical skills?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Level 8 is the practical target for most specialist roles — at this level, the quality bonuses for crafted items and work speed improvements are significant. Level 10 (maximum) is ideal for your most important roles: Farming, Smithing, Cooking. Diminishing returns apply, so Level 10 is worth pursuing only for the most-used skills."
      }
    },
    {
      "@type": "Question",
      "name": "How do I identify which settler has the best potential for each role?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Check settler traits for Passions (double skill XP) and Aptitude scores at settler arrival. The inspect settler panel shows skill starting values — a settler arriving with Farming 4 and Major Passion for Farming is a far better farmer candidate than one arriving at Farming 1 with no passion, even if they have similar total stats."
      }
    }
            ]
          })
        }}
      />
    </main>
  );
}
