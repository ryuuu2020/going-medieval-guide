export const metadata = {
  title: "Going Medieval Settler Mood System — Complete Guide (2026)",
  description: "Master the Going Medieval mood system. All mood factors, debuff thresholds, how to keep settlers happy, and preventing mood spiral in your colony.",
};

export default function SettlerMoodSystemPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-10">
          <section>
            <h1 className="chapter-heading">Going Medieval Settler Mood System — How to Keep Settlers Happy</h1>
            <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
              Settler mood is one of the most consequential systems in Going Medieval. A happy settler works faster, recovers from illness more quickly, and contributes to positive social dynamics across your whole colony. An unhappy settler works slower, is more prone to mental breaks, refuses certain tasks, and can trigger a debuff cascade that drags down the mood of surrounding settlers. Understanding the mood system — what buffs it, what tanks it, and how to design your base to maintain positive mood across all settlers — is one of the highest-leverage management skills in the game. This guide covers every mood factor, their weights, the debuff thresholds you must avoid, and practical systems for keeping settler mood reliably in the positive range.
            </p>
          </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">The Mood Score System</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Each settler has an individual mood score (typically displayed as a percentage or numerical value). This score is the sum of all active mood modifiers at any given moment. Positive events and conditions add to the score; negative conditions subtract from it. The net total determines the settler's mood tier.
              </p>
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Mood Tier</th>
                    <th>Approximate Score</th>
                    <th>Effect</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Ecstatic</td><td>80-100</td><td>+20% work speed; positive social influence</td></tr>
                  <tr><td>Happy</td><td>60-79</td><td>+10% work speed; normal behavior</td></tr>
                  <tr><td>Content</td><td>40-59</td><td>No bonus or penalty; baseline performance</td></tr>
                  <tr><td>Unhappy</td><td>20-39</td><td>-10% work speed; may refuse some tasks</td></tr>
                  <tr><td>Miserable</td><td>0-19</td><td>-25% work speed; risk of mental break</td></tr>
                  <tr><td>Mental Break</td><td>&lt;0</td><td>Settler becomes uncontrollable temporarily</td></tr>
                </tbody>
              </table>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Highest-Impact Mood Factors</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Not all mood factors are equal. Some factors can swing mood by 15-30 points; others are minor 1-3 point adjustments. Prioritize the high-impact factors to get the most mood improvement per effort.
              </p>
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Factor</th>
                    <th>Mood Impact</th>
                    <th>Duration</th>
                    <th>Management</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Bedroom Quality</td><td>+15 to +25</td><td>Ongoing (daily)</td><td>Build quality private bedrooms</td></tr>
                  <tr><td>Meal Quality</td><td>+10 to +20</td><td>After each meal (8h)</td><td>Cook varied meals; upgrade kitchen</td></tr>
                  <tr><td>Settler Death Witnessed</td><td>-20 to -40</td><td>7-30 days</td><td>Prevent deaths; keep warriors armored</td></tr>
                  <tr><td>Recreation Satisfied</td><td>+10 to +15</td><td>After recreation</td><td>Build recreation spaces; schedule free time</td></tr>
                  <tr><td>Social Interaction</td><td>+5 to +10</td><td>After socializing</td><td>Shared dining hall; recreation scheduling</td></tr>
                  <tr><td>Clothing Quality</td><td>+5 to +15</td><td>Ongoing</td><td>Dress all settlers in quality clothes</td></tr>
                  <tr><td>Outdoors Time</td><td>+5 to +10</td><td>After outdoor activities</td><td>Farm/hunting roles; outdoor workbenches</td></tr>
                  <tr><td>Injury / Pain</td><td>-10 to -30</td><td>Until healed</td><td>Hospital; trained healer settler</td></tr>
                </tbody>
              </table>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Preventing the Mood Spiral</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                A mood spiral occurs when one settler's mental break or death causes nearby settlers to receive negative mood events, which in turn pushes their mood lower, increasing the chance of further breaks. Left unchecked, a spiral can collapse a colony within a few in-game days.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Prevent spirals by maintaining a mood buffer — keeping all settlers at Content or above so that a single negative event cannot push any settler into the danger zone. Monitor mood values daily in the colonist panel and act immediately when any settler drops below 40.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">High-Value Mood Investments (Ordered by ROI)</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                If you need to improve colony mood quickly, prioritize these investments in order:
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                1. <strong className="text-ink">Private bedrooms with quality beds</strong> — ongoing daily bonus, affects every night. 2. <strong className="text-ink">Varied cooked meals</strong> — train a dedicated cook, use multiple ingredients. 3. <strong className="text-ink">Quality clothing for every settler</strong> — dress everyone in cloth or leather garments made by a skilled tailor. 4. <strong className="text-ink">Recreation space</strong> — a great hall with chairs, game boards, instruments satisfies social and recreation needs simultaneously. 5. <strong className="text-ink">Outdoor work assignments</strong> — settlers with traits that value nature need regular outdoor task assignments.
              </p>
            </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-6">Frequently Asked Questions</h2>

                <div className="aged-border p-5 mb-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                  <h3 className="font-display text-lg font-semibold text-ink mb-2">What is the minimum mood I should allow before taking action?</h3>
                  <p className="font-serif text-base text-ink-light leading-relaxed">Treat 40 (the bottom of Content tier) as your intervention threshold. When any settler drops below 40, investigate the cause immediately and address it. Common causes: poor bedroom, no recent meals, witnessed a death, recurring pain from injury. Do not wait until a settler reaches Miserable before acting.</p>
                </div>
                <div className="aged-border p-5 mb-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                  <h3 className="font-display text-lg font-semibold text-ink mb-2">Do settler traits affect how much each factor matters?</h3>
                  <p className="font-serif text-base text-ink-light leading-relaxed">Yes — traits significantly modify mood factor weights. A settler with the 'Ascetic' trait cares less about room quality; one with 'Gourmet' needs better food quality; 'Outdoorsy' settlers need more outdoor time. Always check trait descriptions when a settler seems harder to keep happy than expected.</p>
                </div>
                <div className="aged-border p-5 mb-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                  <h3 className="font-display text-lg font-semibold text-ink mb-2">Can settler relationships affect mood?</h3>
                  <p className="font-serif text-base text-ink-light leading-relaxed">Yes — settlers develop positive and negative relationships over time based on interactions, shared meals, and working proximity. Strong positive relationships provide small ongoing mood bonuses. Hostile relationships create recurring negative events. Manage problematic relationships by separating incompatible settlers into different work schedules or living quarters.</p>
                </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-ink mb-4">Related Guides</h2>
            <div className="space-y-2">
                  <a href="/settlers" className="text-accent hover:text-accent-hover underline">Settlers</a>
                  <a href="/happiness-guide" className="text-accent hover:text-accent-hover underline">Happiness Guide</a>
                  <a href="/room-quality" className="text-accent hover:text-accent-hover underline">Room Quality</a>
                  <a href="/recreation-scheduling" className="text-accent hover:text-accent-hover underline">Recreation Scheduling</a>

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
      "name": "What is the minimum mood I should allow before taking action?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Treat 40 (the bottom of Content tier) as your intervention threshold. When any settler drops below 40, investigate the cause immediately and address it. Common causes: poor bedroom, no recent meals, witnessed a death, recurring pain from injury. Do not wait until a settler reaches Miserable before acting."
      }
    },
    {
      "@type": "Question",
      "name": "Do settler traits affect how much each factor matters?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — traits significantly modify mood factor weights. A settler with the 'Ascetic' trait cares less about room quality; one with 'Gourmet' needs better food quality; 'Outdoorsy' settlers need more outdoor time. Always check trait descriptions when a settler seems harder to keep happy than expected."
      }
    },
    {
      "@type": "Question",
      "name": "Can settler relationships affect mood?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — settlers develop positive and negative relationships over time based on interactions, shared meals, and working proximity. Strong positive relationships provide small ongoing mood bonuses. Hostile relationships create recurring negative events. Manage problematic relationships by separating incompatible settlers into different work schedules or living quarters."
      }
    }
            ]
          })
        }}
      />
    </main>
  );
}
