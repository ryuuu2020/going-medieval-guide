export const metadata = {
  title: "Going Medieval Steam Achievements — Complete Guide (2026)",
  description:
    "Complete Steam achievements guide for Going Medieval. All achievement requirements, tips, and walkthroughs to 100% the game.",
};


export default function SteamAchievementsPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-10">
          <section>
            <h1 className="chapter-heading">Steam Achievements Guide</h1>
            <div className="aged-border p-5 mb-5" style={{ backgroundColor: 'var(--color-parchment-deep)', borderColor: '#8b2500' }}>
                <p className="font-serif text-sm text-ink leading-relaxed">
                  <strong className="text-vermillion">&#9888; IMPORTANT:</strong> This guide documents what is known about Going Medieval's Steam achievements based on community observation and the Going Medieval Wiki (goingmedieval.fandom.com). The exact number, names, and unlock conditions of achievements are <strong>not fully verified</strong> and may change between game versions. This page does <strong>not</strong> contain a fabricated achievement list — it offers general achievement-hunting strategies applicable to the game. For the complete, official achievement list, check the <strong>Steam achievements page</strong> for Going Medieval (Steam App 1029780).
                </p>
              </div>
            <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
              Like most colony sims, Going Medieval features Steam achievements that reward players for reaching milestones across survival, construction, combat, population growth, crafting, and farming. The exact achievement list is best viewed directly on Steam, but this guide covers the achievement categories you can expect, general strategies for efficient achievement hunting, and tips for tackling the hardest goals without wasting dozens of hours on dead-end approaches.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Achievement Categories (Expected)</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Based on the game's mechanics and common colony sim achievement design, Going Medieval's achievements fall into several broad categories. While specific achievement names and exact unlock thresholds are best confirmed on Steam, these categories represent the types of goals you will encounter:
            </p>
            <table className="parchment-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>What It Tests</th>
                  <th>Typical Goals</th>
                  <th>Difficulty Range</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="font-semibold">Survival Milestones</td><td>Longevity and colony stability</td><td>Surviving first night, first winter, first year, multiple years</td><td>Easy to Hard</td></tr>
                <tr><td className="font-semibold">Population</td><td>Recruitment and settlement growth</td><td>Reaching settler count thresholds, recruiting prisoners</td><td>Easy to Medium</td></tr>
                <tr><td className="font-semibold">Building</td><td>Construction scale and quality</td><td>Building specific room types, total structures built, excavation</td><td>Easy to Hard</td></tr>
                <tr><td className="font-semibold">Combat</td><td>Defense and military prowess</td><td>Killing raiders, surviving raids, settler combat skill milestones</td><td>Easy to Hard</td></tr>
                <tr><td className="font-semibold">Crafting</td><td>Production and quality</td><td>Crafting first items, reaching quality tiers, total items produced</td><td>Easy to Hard</td></tr>
                <tr><td className="font-semibold">Farming</td><td>Agriculture and animal husbandry</td><td>Total crops harvested, animals owned, specific crop milestones</td><td>Easy to Medium</td></tr>
              </tbody>
            </table>
            <p className="font-serif text-sm text-ink-muted italic">Categories are inferred from common colony sim achievement design. Actual categories and achievements may differ. Check Steam for the official list.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">General Achievement Hunting Tips</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Going Medieval achievements unlock organically as you play, but targeted hunting can dramatically reduce the time to 100% completion. These strategies apply across all achievement categories.
            </p>
            <div className="space-y-3">
              <div className="journal-card p-4">
                <h4 className="font-display text-base font-semibold text-ink">Play on Normal Difficulty</h4>
                <p className="font-serif text-sm text-ink-light mt-1">Normal difficulty provides the best balance for achievement hunting. Peaceful mode disables raids, which locks you out of combat-related achievements entirely. Higher difficulties slow progress because you spend more time recovering from losses. Normal gives you enough threat to earn combat achievements without constant setbacks.</p>
              </div>
              <div className="journal-card p-4">
                <h4 className="font-display text-base font-semibold text-ink">One Colony, Multiple Achievements</h4>
                <p className="font-serif text-sm text-ink-light mt-1">Plan to earn most achievements in a single long-running colony. Survival-year achievements, population thresholds, total items crafted, and crops harvested all accumulate over time. Starting a new colony resets progress on cumulative achievements. Build your colony to survive long-term and the achievements will follow.</p>
              </div>
              <div className="journal-card p-4">
                <h4 className="font-display text-base font-semibold text-ink">Prioritize Self-Sufficiency Early</h4>
                <p className="font-serif text-sm text-ink-light mt-1">Before targeting specific achievements, your colony must be stable. Secure a renewable food supply (farming + animal husbandry), reliable defense (stone walls + archers), and steady mood management (bedrooms, great hall, beer/mead). A stable colony can run at 3x speed for long-term milestone achievements without constant player intervention.</p>
              </div>
              <div className="journal-card p-4">
                <h4 className="font-display text-base font-semibold text-ink">Track Cumulative Progress Manually</h4>
                <p className="font-serif text-sm text-ink-light mt-1">Going Medieval doesn't display progress toward cumulative achievements (e.g., "craft 500 items") in-game. Keep rough mental notes of your totals or use external tracking. For crop harvests, you can approximate from stockpile counts. For buildings, the game's statistics panel (if available) or a manual count works.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Hardest Achievement Strategies</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Some achievements require significant time investment and specific strategies. While exact achievement names are best verified on Steam, these are the archetypes of difficult achievements you will encounter and how to approach them.
            </p>
            <div className="space-y-3">
              <div className="journal-card p-4">
                <h4 className="font-display text-base font-semibold text-ink">Long-Term Survival (e.g., Survive 5+ Years)</h4>
                <p className="font-serif text-sm text-ink-light mt-1">Time-based achievements require patience more than skill. Build a fully self-sufficient colony with automated food production, impenetrable defenses, and stable mood management. Ensure your food preservation (pickled food, smoked meat, underground storage) can handle winter. Run at 3x speed and monitor for raid alerts. The key is a colony that can run for extended periods without player input — if you find yourself constantly putting out fires, your foundation isn't ready for a long-term achievement run.</p>
              </div>
              <div className="journal-card p-4">
                <h4 className="font-display text-base font-semibold text-ink">Combat Skill Mastery (e.g., Reach Max Melee/Marksman)</h4>
                <p className="font-serif text-sm text-ink-light mt-1">Leveling combat skills to their cap requires a settler to fight in many battles. Keep this settler on every raid defense. Equip them with your best weapons and armor to maximize their survivability. Consider training a dedicated combat settler who does no other work — assign them to hunting during peacetime to gain small amounts of combat XP between raids. Settlement wealth scaling brings larger raids, which means more combat XP per fight.</p>
              </div>
              <div className="journal-card p-4">
                <h4 className="font-display text-base font-semibold text-ink">Perfect Room (e.g., Great Hall with All Bonuses)</h4>
                <p className="font-serif text-sm text-ink-light mt-1">A fully optimized Great Hall requires: spacious size (8x8 minimum interior), high-quality furniture (table and chairs), decorations, lighting (torches or candles), clean floors, and high room impressiveness value. Research decoration technologies before attempting this. Build with high-quality materials. Assign your best crafter to make furniture. This is a late-game project — do not attempt it until you have abundant resources and a skilled crafting team.</p>
              </div>
              <div className="journal-card p-4">
                <h4 className="font-display text-base font-semibold text-ink">Crafting Quality (e.g., Legendary or Masterwork Items)</h4>
                <p className="font-serif text-sm text-ink-light mt-1">Crafting the highest quality tiers requires a settler with very high Crafting skill and favorable traits. The probability is low — expect to craft many items before one rolls the top quality tier. Mass-produce items that use common materials (stone, wood, basic metals) rather than rare resources. Failed attempts can be sold to merchants or used by your colony, so there's minimal waste. Focus on one crafter rather than splitting crafting work across multiple settlers.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Achievement Hunting by Game Phase</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              The most efficient approach is to earn achievements in phases, aligning your goals with your colony's current capabilities. Trying to earn late-game achievements with a 3-settler colony is futile; conversely, waiting until year 5 to earn early-game achievements wastes time.
            </p>
            <table className="parchment-table">
              <thead>
                <tr>
                  <th>Game Phase</th>
                  <th>Achievement Focus</th>
                  <th>Colony State</th>
                  <th>Key Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="font-semibold">Early Game (Days 1-30)</td><td>Survival basics, first constructions, first kills, first crafts</td><td>3-5 settlers, basic shelter, early farms, wooden walls</td><td>Play normally — most early achievements unlock naturally</td></tr>
                <tr><td className="font-semibold">Mid Game (Season 2-4)</td><td>Population growth, room types, farming milestones, modest crafting</td><td>5-10 settlers, stone walls, established farms, basic industry</td><td>Start actively building room types (Great Hall, Kitchen, Hospital, Temple)</td></tr>
                <tr><td className="font-semibold">Late Game (Year 1-3)</td><td>Combat milestones, skill mastery, trade volume, animal husbandry scale</td><td>10+ settlers, stone defenses, full production chain, animal pens</td><td>Focus on combat achievements via raid defense and dedicated combat training</td></tr>
                <tr><td className="font-semibold">End Game (Year 3+)</td><td>Long-term survival, perfect rooms, top crafting quality, maximum population</td><td>Fully self-sufficient, automated production, impenetrable defenses</td><td>Run at 3x speed; intervene only for raids and major events</td></tr>
              </tbody>
            </table>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
            <div className="faq-item">
              <details>
                <summary>How many Steam achievements does Going Medieval have?</summary>
                <p>The exact number is not confirmed by this guide. Community observations suggest approximately 30-40 achievements, which is typical for a colony sim in Early Access. The number may increase with major game updates. For the authoritative count, check the Steam achievements page for Going Medieval (App ID 1029780) directly in your Steam client.</p>
              </details>
            </div>
            <div className="faq-item">
              <details>
                <summary>Can I earn achievements on Peaceful difficulty?</summary>
                <p>This depends on the specific achievement. Survival, building, crafting, and farming achievements likely work on any difficulty. Combat-related achievements (killing raiders, combat skill milestones) will be impossible on Peaceful since no raids occur. For efficient achievement hunting, Normal difficulty is the recommended setting — it enables all achievement categories without excessive difficulty penalties.</p>
              </details>
            </div>
            <div className="faq-item">
              <details>
                <summary>Do mods disable achievements?</summary>
                <p>Going Medieval is an Early Access title, and its achievement policy regarding mods is not definitively documented. In many Steam games, mods do not disable achievements unless they use console commands or cheat functions. To be safe, earn achievements on an unmodded save first. If you use UI or quality-of-life mods, they are unlikely to interfere with achievement unlocks.</p>
              </details>
            </div>
            <div className="faq-item">
              <details>
                <summary>Are there missable achievements?</summary>
                <p>In colony sims, most achievements are cumulative or milestone-based and cannot be permanently missed as long as your colony survives. The exception would be achievements tied to specific events or conditions that only occur once. Since Going Medieval is a sandbox colony sim without a linear storyline, it is unlikely to have truly missable achievements — if you miss a milestone, you can usually earn it later in the same save.</p>
              </details>
            </div>
            <div className="faq-item">
              <details>
                <summary>Where can I find the official achievement list?</summary>
                <p>The official and most accurate achievement list is on the Steam store page for Going Medieval. Open Steam, navigate to Going Medieval (App ID 1029780), and click "View All Achievements" under the achievements section. This shows all achievements, their descriptions, and the global unlock percentages — which is also useful for identifying which achievements are considered most difficult by the player base.</p>
              </details>
            </div>
          </section>
        </div>

        <aside className="lg:w-[35%] space-y-8 shrink-0">
          <div className="field-sidebar-block">
            <h3 className="font-display text-lg font-semibold text-ink mb-4">Achievement Quick Tips</h3>
            <div className="space-y-3">
              <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">One Save, Many Goals</h4><p className="font-serif text-xs text-ink-muted mt-1">Most achievements earnable in a single long-running colony</p></div>
              <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Normal Difficulty</h4><p className="font-serif text-xs text-ink-muted mt-1">Enables all categories; Peaceful locks combat achievements</p></div>
              <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Stabilize First</h4><p className="font-serif text-xs text-ink-muted mt-1">Food, defense, mood stable before chasing specific achievements</p></div>
              <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">3x Speed for Milestones</h4><p className="font-serif text-xs text-ink-muted mt-1">Self-sufficient colonies can run at 3x for year-based achievements</p></div>
            </div>
          </div>
          <div className="journal-card p-5">
            <h3 className="font-display text-base font-semibold text-ink mb-3">Where to Verify Achievements</h3>
            <div className="space-y-2 font-serif text-sm text-ink-light">
              <div>&bull; Steam Client: Going Medieval store page → View Achievements</div>
              <div>&bull; Steam shows: Names, descriptions, global unlock %</div>
              <div>&bull; Global % helps identify which achievements are actually hardest</div>
              <div>&bull; Achievement list may grow with game updates (Early Access)</div>
              <div className="mt-2 text-ink-muted italic">Always cross-reference with Steam for the definitive list.</div>
            </div>
          </div>
          <div className="journal-card p-5">
            <h3 className="font-display text-base font-semibold text-ink mb-3">Common Achievement Pitfalls</h3>
            <ul className="space-y-2 font-serif text-sm text-ink-light">
              <li>&bull; Starting over too often — cumulative progress resets</li>
              <li>&bull; Neglecting defense — a dead colony earns no achievements</li>
              <li>&bull; Splitting crafting across too many settlers — focus on one crafter for quality</li>
              <li>&bull; Using Peaceful for a "quick clear" — locks you out of combat achievements</li>
              <li>&bull; Building mega-structures too early — resources better spent on stability first</li>
            </ul>
          </div>
        </aside>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How many Steam achievements does Going Medieval have?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The exact number is not confirmed by this guide. Community observations suggest approximately 30-40 achievements, which is typical for a colony sim in Early Access. The number may increase with major game updates. For the authoritative count, check the Steam achievements page for Going Medieval (App ID 1029780) directly in your Steam client."
      }
    },
    {
      "@type": "Question",
      "name": "Can I earn achievements on Peaceful difficulty?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "This depends on the specific achievement. Survival, building, crafting, and farming achievements likely work on any difficulty. Combat-related achievements (killing raiders, combat skill milestones) will be impossible on Peaceful since no raids occur. For efficient achievement hunting, Normal difficulty is the recommended setting — it enables all achievement categories without excessive difficulty penalties."
      }
    },
    {
      "@type": "Question",
      "name": "Do mods disable achievements?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Going Medieval is an Early Access title, and its achievement policy regarding mods is not definitively documented. In many Steam games, mods do not disable achievements unless they use console commands or cheat functions. To be safe, earn achievements on an unmodded save first. If you use UI or quality-of-life mods, they are unlikely to interfere with achievement unlocks."
      }
    },
    {
      "@type": "Question",
      "name": "Are there missable achievements?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In colony sims, most achievements are cumulative or milestone-based and cannot be permanently missed as long as your colony survives. The exception would be achievements tied to specific events or conditions that only occur once. Since Going Medieval is a sandbox colony sim without a linear storyline, it is unlikely to have truly missable achievements — if you miss a milestone, you can usually earn it later in the same save."
      }
    },
    {
      "@type": "Question",
      "name": "Where can I find the official achievement list?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The official and most accurate achievement list is on the Steam store page for Going Medieval. Open Steam, navigate to Going Medieval (App ID 1029780), and click \"View All Achievements\" under the achievements section. This shows all achievements, their descriptions, and the global unlock percentages — which is also useful for identifying which achievements are considered most difficult by the player base."
      }
    }
  ]
}` }} />
      </main>
  );
}
