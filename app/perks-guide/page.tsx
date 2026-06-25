
export default function PerksGuidePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-10">
          <section>
            <h1 className="chapter-heading">Perks & Traits Guide</h1>
            <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
              Every settler in Going Medieval arrives with a unique set of perks and traits that define their personality, work style, and behavior. Positive perks can turn an average settler into a powerhouse — negative perks can cripple even high-skilled individuals. Understanding how perks interact, which combinations are strongest, and how to manage negative traits is essential for building an elite colony. This guide covers all settler perks, the best combinations, and a priority system for selecting new settlers. Data below is based on community compilation and is for reference only.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Positive Perks (Top Tier)</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              These perks provide the strongest bonuses and should be prioritized when selecting new settlers or recruiting prisoners. A settler with one of these perks is almost always worth taking, even if their starting skills are slightly below average.
            </p>
            <table className="parchment-table">
              <thead>
                <tr>
                  <th>Perk</th>
                  <th>Effect</th>
                  <th>Best For</th>
                  <th>Priority</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="font-semibold">Industrious</td><td>+20% global work speed</td><td>All roles</td><td className="text-vermillion font-semibold">S-Tier</td></tr>
                <tr><td className="font-semibold">Fast Learner</td><td>+50% skill XP gain rate</td><td>New settlers, specialists</td><td className="text-vermillion font-semibold">S-Tier</td></tr>
                <tr><td className="font-semibold">Iron-Willed</td><td>+15 mood threshold, harder to break</td><td>Combat, high-stress roles</td><td className="text-vermillion font-semibold">S-Tier</td></tr>
                <tr><td className="font-semibold">Strong</td><td>+30% carry capacity, faster hauling</td><td>Miners, builders, haulers</td><td className="text-gold font-semibold">A-Tier</td></tr>
                <tr><td className="font-semibold">Perfectionist</td><td>+15% quality on crafted items</td><td>Crafters, tailors, cooks</td><td className="text-gold font-semibold">A-Tier</td></tr>
                <tr><td className="font-semibold">Intellectual</td><td>+25% research speed</td><td>Researchers</td><td className="text-gold font-semibold">A-Tier</td></tr>
              </tbody>
            </table>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Positive Perks (Mid & Lower Tier)</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              These perks offer situational or moderate bonuses. They are useful but not game-changing. Stack multiple mid-tier perks on a settler and they can still be very effective.
            </p>
            <table className="parchment-table">
              <thead>
                <tr>
                  <th>Perk</th>
                  <th>Effect</th>
                  <th>Best For</th>
                  <th>Priority</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="font-semibold">Creative</td><td>+15% crafting and cooking speed</td><td>Cooks, crafters</td><td>B-Tier</td></tr>
                <tr><td className="font-semibold">Optimistic</td><td>+10 base mood, easier to keep happy</td><td>All roles</td><td>B-Tier</td></tr>
                <tr><td className="font-semibold">Calm</td><td>Not affected by corpses, less combat stress</td><td>Medics, combat settlers</td><td>B-Tier</td></tr>
                <tr><td className="font-semibold">Charismatic</td><td>+20% trade prices, +15% recruitment chance</td><td>Traders, recruiters</td><td>B-Tier</td></tr>
                <tr><td className="font-semibold">Night Owl</td><td>+15% work speed at night, no darkness penalty</td><td>Researchers, cooks</td><td>B-Tier</td></tr>
                <tr><td className="font-semibold">Tough</td><td>+25% HP, less damage taken</td><td>Combat settlers</td><td>B-Tier</td></tr>
                <tr><td className="font-semibold">Ascetic</td><td>Lower expectations for room/food quality</td><td>Low-priority settlers</td><td>C-Tier</td></tr>
                <tr><td className="font-semibold">Green Thumb</td><td>+15% crop harvest yield</td><td>Farmers</td><td>B-Tier</td></tr>
              </tbody>
            </table>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Negative Perks & Management</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Negative perks cannot be removed, but they can be managed through careful role assignment and colony design. Avoid settlers with multiple severe negative perks unless their positive traits are exceptional.
            </p>
            <table className="parchment-table">
              <thead>
                <tr>
                  <th>Negative Perk</th>
                  <th>Penalty</th>
                  <th>Severity</th>
                  <th>Mitigation Strategy</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="font-semibold">Lazy</td><td>-15% global work speed</td><td className="text-vermillion font-semibold">Severe</td><td>Avoid unless paired with Industrious (net +5%). Assign to non-critical tasks.</td></tr>
                <tr><td className="font-semibold">Slow Learner</td><td>-40% skill XP gain rate</td><td className="text-vermillion font-semibold">Severe</td><td>Only recruit if high starting skills exist. This settler will never reach mastery.</td></tr>
                <tr><td className="font-semibold">Pyromaniac</td><td>May randomly start fires</td><td className="text-vermillion font-semibold">Severe</td><td>Keep away from wooden structures and stockpiles. Assign to outdoor or stone-area work.</td></tr>
                <tr><td className="font-semibold">Gourmand</td><td>Eats 2x food per day</td><td className="text-gold font-semibold">Moderate</td><td>Acceptable if you have strong food surplus. Factor into winter food calculations.</td></tr>
                <tr><td className="font-semibold">Pessimistic</td><td>-10 base mood, harder to please</td><td className="text-gold font-semibold">Moderate</td><td>Give individual bedroom + beer access to offset. Not recommended for high-stress roles.</td></tr>
                <tr><td className="font-semibold">Weak</td><td>-25% carry capacity</td><td className="text-gold font-semibold">Moderate</td><td>Assign to stationary jobs (research, crafting, cooking) — never make them a hauler or miner.</td></tr>
                <tr><td className="font-semibold">Ugly</td><td>-10 social opinion from others</td><td>Minor</td><td>Avoid social roles. Other settlers will dislike them, causing minor mood drain.</td></tr>
                <tr><td className="font-semibold">Sensitive</td><td>Mood penalties are 25% worse</td><td>Minor</td><td>Give extra attention to their needs. Not debilitating if colony conditions are good.</td></tr>
              </tbody>
            </table>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Best Perk Combinations</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              The most powerful settlers combine perks that create multiplicative synergy. A settler with two complementary top-tier perks can be worth 2-3 normal settlers in productivity. When recruiting, always look for these dream combinations.
            </p>
            <div className="space-y-3">
              <div className="journal-card p-4">
                <h4 className="font-display text-base font-semibold text-ink">Industrious + Fast Learner — "The Prodigy"</h4>
                <p className="font-serif text-sm text-ink-light mt-1">The absolute best combination. Works 20% faster and learns 50% faster. This settler will rapidly become your most valuable colonist regardless of starting skills. Assign to your most important role and let them grow into a master within a single year.</p>
              </div>
              <div className="journal-card p-4">
                <h4 className="font-display text-base font-semibold text-ink">Industrious + Strong — "The Workhorse"</h4>
                <p className="font-serif text-sm text-ink-light mt-1">Perfect for mining and construction. Works faster, carries more per trip, and completes heavy labor projects in record time. This settler can single-handedly excavate an entire underground base while carrying the stone to stockpiles without ever running out of stamina.</p>
              </div>
              <div className="journal-card p-4">
                <h4 className="font-display text-base font-semibold text-ink">Iron-Willed + Tough — "The Unbreakable"</h4>
                <p className="font-serif text-sm text-ink-light mt-1">The ultimate combat settler. Higher HP, better damage resistance, and near-immunity to mental breaks even in horrific combat situations. This settler can stand on the front line watching companions fall without ever breaking. Ideal for your primary defender.</p>
              </div>
              <div className="journal-card p-4">
                <h4 className="font-display text-base font-semibold text-ink">Perfectionist + Creative — "The Artisan"</h4>
                <p className="font-serif text-sm text-ink-light mt-1">Crafting and cooking powerhouse. Items produced at 15% higher quality and 15% faster speed. This settler will craft masterwork weapons that sell for premium prices and cook meals that significantly boost colony mood. Worth its weight in silver.</p>
              </div>
              <div className="journal-card p-4">
                <h4 className="font-display text-base font-semibold text-ink">Intellectual + Fast Learner — "The Genius"</h4>
                <p className="font-serif text-sm text-ink-light mt-1">Research speed monster. 25% faster research combined with 50% faster skill gain means this settler will reach Research 20 faster than anyone else. Your tech tree will fly open. Great secondary role as a medic since Medical also benefits from fast learning.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Perk Selection Priority for New Settlers</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              When choosing your starting settlers or evaluating new arrivals, use this priority system. A settler with high-priority perks should almost always be accepted, even with mediocre skills. Skills can be trained — perks are permanent.
            </p>
            <div className="space-y-3">
              <div className="journal-card p-4" style={{ borderLeft: '4px solid var(--color-accent-gold)' }}>
                <h4 className="font-display text-base font-semibold text-ink">Priority 1: Accept Always</h4>
                <p className="font-serif text-sm text-ink-light mt-1">Any settler with Industrious OR Fast Learner, regardless of other stats. These two perks alone justify recruitment. If you see both on one settler, drop everything and recruit immediately.</p>
              </div>
              <div className="journal-card p-4" style={{ borderLeft: '4px solid var(--color-accent)' }}>
                <h4 className="font-display text-base font-semibold text-ink">Priority 2: Strongly Consider</h4>
                <p className="font-serif text-sm text-ink-light mt-1">Settlers with Iron-Willed, Strong, or Perfectionist. Accept if their skills fill a need in your colony. Two mid-tier positive perks from the B-tier list is also worth considering.</p>
              </div>
              <div className="journal-card p-4" style={{ borderLeft: '4px solid var(--color-border)' }}>
                <h4 className="font-display text-base font-semibold text-ink">Priority 3: Conditional</h4>
                <p className="font-serif text-sm text-ink-light mt-1">Settlers with one minor positive perk but no severe negatives. Accept only if you need their specific skills NOW (e.g., you urgently need a cook and this settler has Cooking 8+). Otherwise, wait for better candidates.</p>
              </div>
              <div className="journal-card p-4" style={{ borderLeft: '4px solid #8b2500' }}>
                <h4 className="font-display text-base font-semibold text-ink">Avoid: Reject</h4>
                <p className="font-serif text-sm text-ink-light mt-1">Settlers with Lazy AND Slow Learner simultaneously, or Pyromaniac without compensating top-tier perks. Also reject settlers with 3+ minor negative perks — the cumulative penalties will make them a constant drain on colony resources and mood.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
            <div className="faq-item">
              <details>
                <summary>Can negative perks be removed or changed?</summary>
                <p>No. Perks are permanent traits that cannot be changed through any in-game mechanic. There is no way to remove a negative perk or add a positive one after character creation. The only way to replace a bad settler is to recruit a better one and let the problematic settler leave (or perish). This is why perk selection at recruitment is so critical.</p>
              </details>
            </div>
            <div className="faq-item">
              <details>
                <summary>Are perks more important than skills when choosing settlers?</summary>
                <p>For new colonies (first 5-7 days): skills matter slightly more because you need immediate productivity. For established colonies: perks matter more because skills can be trained but perks are permanent. A settler with Industrious and level 3 Cooking will eventually outperform a settler with level 10 Cooking and no useful perks — it just takes time.</p>
              </details>
            </div>
            <div className="faq-item">
              <details>
                <summary>What's the single best perk in the game?</summary>
                <p>Industrious is widely considered the best standalone perk. A flat 20% work speed boost affects everything a settler does — mining, building, crafting, cooking, farming, researching. Over a 5-year colony lifespan, an Industrious settler will accomplish roughly 20% more work than an identical settler without the perk. Fast Learner is a close second due to its compounding effect over time.</p>
              </details>
            </div>
          </section>
        </div>

        <aside className="lg:w-[35%] space-y-8 shrink-0">
          <div className="field-sidebar-block">
            <h3 className="font-display text-lg font-semibold text-ink mb-4">Perk Tier Summary</h3>
            <div className="space-y-2 font-serif text-sm text-ink-light">
              <div className="flex justify-between"><span>Industrious</span><span className="text-vermillion font-semibold">S</span></div>
              <div className="flex justify-between"><span>Fast Learner</span><span className="text-vermillion font-semibold">S</span></div>
              <div className="flex justify-between"><span>Iron-Willed</span><span className="text-vermillion font-semibold">S</span></div>
              <div className="flex justify-between"><span>Strong</span><span className="text-gold font-semibold">A</span></div>
              <div className="flex justify-between"><span>Perfectionist</span><span className="text-gold font-semibold">A</span></div>
              <div className="flex justify-between"><span>Intellectual</span><span className="text-gold font-semibold">A</span></div>
              <div className="flex justify-between"><span>Creative</span><span>B</span></div>
              <div className="flex justify-between"><span>Optimistic</span><span>B</span></div>
              <div className="flex justify-between"><span>Charismatic</span><span>B</span></div>
              <div className="flex justify-between"><span>Tough</span><span>B</span></div>
            </div>
          </div>
          <div className="journal-card p-5">
            <h3 className="font-display text-base font-semibold text-ink mb-3">Red Flag Perks (Reject)</h3>
            <ul className="space-y-2 font-serif text-sm text-ink-light">
              <li>&bull; Lazy (-15% work speed)</li>
              <li>&bull; Slow Learner (-40% XP)</li>
              <li>&bull; Pyromaniac (fire risk)</li>
              <li>&bull; Lazy + Slow Learner (never)</li>
              <li>&bull; 3+ minor negative perks</li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
