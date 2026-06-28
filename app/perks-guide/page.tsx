export const metadata = {
  title: "Going Medieval Settler Traits & Perks — Complete Guide (2026)",
  description:
    "Complete settler traits and perks guide for Going Medieval. Best traits for each role, trait synergy, and recruitment strategies.",
};


export default function PerksGuidePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-10">
          <section>
            <h1 className="chapter-heading">Settler Traits & Perks Guide</h1>
            <div className="aged-border p-5 mb-5" style={{ backgroundColor: 'var(--color-parchment-deep)', borderColor: 'var(--color-accent)' }}>
                <p className="font-serif text-sm text-ink leading-relaxed">
                  <strong className="text-vermillion">&#9888; IMPORTANT:</strong> Going Medieval settlers possess traits and perks that affect their skills, mood, and work efficiency. However, <strong>specific trait names, exact numerical bonuses, and complete trait lists are community-documented</strong> and may vary between game versions. This guide focuses on general trait categories and evaluation strategies confirmed through the Going Medieval Wiki (goingmedieval.fandom.com) and community observation. Do not assume traits from other colony sims (e.g., RimWorld) exist in Going Medieval — the trait systems are different games with different designs.
                </p>
              </div>
            <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
              Every settler who arrives at your colony comes with a personality defined by their traits. These traits influence how quickly they work, how well they learn, how they respond to hardship, and how other settlers perceive them. A settler's traits are just as important as their skill levels — sometimes more so, because skills can be trained while traits are permanent. Understanding the trait system is essential for building a colony where each settler thrives in their assigned role.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">How Traits Work in Going Medieval</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              When settlers generate — whether as your starting group, new arrivals seeking to join, or prisoners you hope to recruit — they are assigned a set of traits. Traits appear in the settler's character panel and affect various aspects of gameplay:
            </p>
            <div className="space-y-3">
              <div className="journal-card p-4">
                <h4 className="font-display text-base font-semibold text-ink">Work Speed & Efficiency</h4>
                <p className="font-serif text-sm text-ink-light mt-1">Some traits boost or reduce how quickly a settler completes tasks. A positive work-speed trait makes the settler more productive across all activities — mining, building, crafting, cooking, farming, researching. Conversely, a negative work-speed trait means they take longer to complete the same tasks, effectively making them less valuable regardless of their skill levels.</p>
              </div>
              <div className="journal-card p-4">
                <h4 className="font-display text-base font-semibold text-ink">Skill Learning Rate</h4>
                <p className="font-serif text-sm text-ink-light mt-1">Traits can accelerate or slow how quickly a settler gains XP in their skills. A fast-learning settler will reach high skill levels much sooner than an average settler, making them ideal for roles you want to specialize. A slow learner will lag behind — they may never reach the highest skill tiers even after years of dedicated work.</p>
              </div>
              <div className="journal-card p-4">
                <h4 className="font-display text-base font-semibold text-ink">Mood & Mental Resilience</h4>
                <p className="font-serif text-sm text-ink-light mt-1">Some traits affect baseline mood, how strongly a settler reacts to negative events, and their resistance to mental breaks. A settler with strong mental resilience can endure corpse-filled battlefields, cramped quarters, and food shortages without breaking. A settler with fragile morale may break from relatively minor setbacks, becoming useless (or dangerous) at critical moments.</p>
              </div>
              <div className="journal-card p-4">
                <h4 className="font-display text-base font-semibold text-ink">Physical Attributes</h4>
                <p className="font-serif text-sm text-ink-light mt-1">Traits can affect carry capacity (how much a settler hauls per trip), movement speed, and combat durability. Haulers and miners benefit enormously from carry-capacity boosts. Combat settlers need durability traits to survive extended fights. Stationary workers (researchers, crafters) are less dependent on physical traits.</p>
              </div>
              <div className="journal-card p-4">
                <h4 className="font-display text-base font-semibold text-ink">Social & Specialized Traits</h4>
                <p className="font-serif text-sm text-ink-light mt-1">Social traits affect how other settlers perceive this character, influencing relationship formation and colony-wide mood. Specialized traits may provide bonuses to specific activities — crafting quality, trade prices, crop yields, or research speed. These traits are powerful when matched to the right job but offer no benefit if the settler works in an unrelated role.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Trait Categories to Look For</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              While specific trait names are community-documented and subject to change, the trait system in Going Medieval follows predictable categories. When evaluating a new settler, ask yourself which of these categories their traits fall into — this tells you whether they'll be an asset or a liability.
            </p>
            <table className="parchment-table">
              <thead>
                <tr>
                  <th>Trait Category</th>
                  <th>What It Affects</th>
                  <th>Ideal Settler Role</th>
                  <th>Recruitment Value</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="font-semibold">Work Speed Boost</td><td>Faster completion of all tasks</td><td>Any role — universally valuable</td><td className="text-gold font-semibold">High — always recruit</td></tr>
                <tr><td className="font-semibold">Fast Learning</td><td>Accelerated skill XP gain</td><td>Specialists you want to train long-term</td><td className="text-gold font-semibold">High — compounding value</td></tr>
                <tr><td className="font-semibold">Mental Resilience</td><td>Better mood management, fewer breaks</td><td>Combat, medical, high-stress roles</td><td className="text-gold font-semibold">High — prevents catastrophe</td></tr>
                <tr><td className="font-semibold">Physical Strength</td><td>Carry capacity, hauling efficiency</td><td>Miners, builders, haulers</td><td>Moderate — role-dependent</td></tr>
                <tr><td className="font-semibold">Crafting Quality</td><td>Higher-quality crafted goods</td><td>Crafters, tailors, cooks, smiths</td><td>Moderate — role-dependent</td></tr>
                <tr><td className="font-semibold">Social / Trade</td><td>Better prices, faster recruitment</td><td>Merchant traders, recruiters</td><td>Low-Moderate — situational</td></tr>
                <tr><td className="font-semibold">Specialized Activity</td><td>Bonuses to specific work types</td><td>Match trait to job type exactly</td><td>Variable — check match quality</td></tr>
              </tbody>
            </table>
            <p className="font-serif text-sm text-ink-muted italic mt-2">Categories are inferred from community observation. Actual trait names, exact bonus values, and availability may vary by game version. Always check settler traits in-game before making recruitment decisions.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Evaluating a New Settler Before Recruiting</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              When a new settler appears — whether as a wanderer seeking to join, a prisoner you've captured, or a starting character — take time to evaluate them thoroughly before committing. A bad recruit consumes food, occupies a bedroom, and can drag down colony mood for months. A great recruit pays for themselves within a season.
            </p>
            <div className="space-y-3">
              <div className="journal-card p-4" style={{ borderLeft: '4px solid var(--color-accent-gold)' }}>
                <h4 className="font-display text-base font-semibold text-ink">Step 1: Read Every Trait</h4>
                <p className="font-serif text-sm text-ink-light mt-1">Open the settler's character panel and read each trait description. Hover over traits for tooltip details if the game provides them. Note which are positive and which are negative. Count the ratio — a settler with 2 positive and 0 negative traits is a strong candidate. A settler with 1 positive and 2 negative traits needs careful scrutiny before accepting.</p>
              </div>
              <div className="journal-card p-4" style={{ borderLeft: '4px solid var(--color-accent)' }}>
                <h4 className="font-display text-base font-semibold text-ink">Step 2: Check Skill Levels Against Traits</h4>
                <p className="font-serif text-sm text-ink-light mt-1">Match their starting skill levels to their traits. A settler with crafting-related traits and high Crafting skill is a ready-made specialist. A settler with combat traits but low combat skills can be trained. A settler with no traits relevant to their high skills is less valuable than they appear — they have the skill but no bonus to make them exceptional.</p>
              </div>
              <div className="journal-card p-4" style={{ borderLeft: '4px solid var(--color-border)' }}>
                <h4 className="font-display text-base font-semibold text-ink">Step 3: Assess Your Colony's Needs</h4>
                <p className="font-serif text-sm text-ink-light mt-1">An average settler who fills an urgent gap (you have no cook and they have Cooking 6+) may be worth recruiting despite mediocre traits. A great settler who duplicates a role you already have filled is a luxury — recruit them if you can support the extra mouth, but don't feel obligated. Match the settler to your colony's current bottleneck.</p>
              </div>
              <div className="journal-card p-4" style={{ borderLeft: '4px solid var(--color-accent)' }}>
                <h4 className="font-display text-base font-semibold text-ink">Step 4: Look for Red-Flag Negative Traits</h4>
                <p className="font-serif text-sm text-ink-light mt-1">Watch for negative traits that are difficult to manage. A significant work-speed penalty affects everything the settler does. A severe learning penalty means they'll never improve meaningfully. Traits that cause dangerous behavior (if any exist in the current version) should make you reject the settler outright. One mild negative trait balanced by two strong positives is usually acceptable.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Matching Traits to Job Assignments</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              The most efficient colonies match each settler's traits to their daily work. A settler working a job that aligns with their traits is dramatically more productive than one working against their nature. Use the 14 skills in Going Medieval as a framework for job matching:
            </p>
            <table className="parchment-table">
              <thead>
                <tr>
                  <th>Skill / Role</th>
                  <th>Best Trait Categories</th>
                  <th>Traits to Avoid</th>
                  <th>Assignment Priority</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="font-semibold">Construction</td><td>Work speed, physical strength</td><td>Significant work speed penalty</td><td>Match trait to role exactly</td></tr>
                <tr><td className="font-semibold">Mining</td><td>Work speed, physical strength, carry capacity</td><td>Physical weakness, slow work</td><td>Physical traits matter most</td></tr>
                <tr><td className="font-semibold">Crafting / Smithing / Tailoring</td><td>Crafting quality, work speed, fast learning</td><td>Crafting penalties, slow learning</td><td>Quality traits are premium</td></tr>
                <tr><td className="font-semibold">Cooking / Brewing</td><td>Crafting quality, work speed</td><td>Work speed penalties</td><td>Speed matters for volume</td></tr>
                <tr><td className="font-semibold">Farming / Harvesting</td><td>Work speed, specialized farming bonuses</td><td>Work speed penalties</td><td>Volume workers; traits help but aren't critical</td></tr>
                <tr><td className="font-semibold">Research</td><td>Research speed, fast learning</td><td>Slow learning (makes research crawl)</td><td>Fast learning is heavily preferred</td></tr>
                <tr><td className="font-semibold">Combat (Melee/Marksman)</td><td>Mental resilience, physical durability, combat bonuses</td><td>Fragile morale, physical weakness</td><td>Resilience is non-negotiable for frontline</td></tr>
                <tr><td className="font-semibold">Hauling / Cleaning</td><td>Carry capacity, movement speed</td><td>Physical weakness</td><td>Low-priority role; assign weaker settlers elsewhere</td></tr>
              </tbody>
            </table>
            <p className="font-serif text-sm text-ink-muted italic mt-2">Skill-to-job matching is based on the 14 confirmed skills in Going Medieval. Specific trait interactions with each skill may vary by game version.</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Managing Settlers with Negative Traits</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              You cannot remove negative traits from a settler. Once a settler joins with a negative trait, it is permanent. Your options are to manage it, work around it, or replace the settler. Here's how to handle each category of negative trait.
            </p>
            <div className="space-y-3">
              <div className="journal-card p-4">
                <h4 className="font-display text-base font-semibold text-ink">Work Speed Penalties</h4>
                <p className="font-serif text-sm text-ink-light mt-1">Assign these settlers to low-priority or non-critical tasks. A slow cook causes food shortages; a slow researcher delays your entire tech tree. Instead, make them a secondary farmer, hauler, or cleaner — roles where speed matters less and quantity fills the gap. If the penalty is severe and the settler has no compensating positive traits, consider replacing them at the next recruitment opportunity.</p>
              </div>
              <div className="journal-card p-4">
                <h4 className="font-display text-base font-semibold text-ink">Slow Learning</h4>
                <p className="font-serif text-sm text-ink-light mt-1">Only recruit slow learners if their starting skills are already high. A slow learner with Construction 12 is still a skilled builder — they just won't improve much. A slow learner with all skills at 2-3 will never become useful. Never assign a slow learner to a role you need to develop from scratch. They work best in maintenance roles where their existing skills are sufficient and no further growth is needed.</p>
              </div>
              <div className="journal-card p-4">
                <h4 className="font-display text-base font-semibold text-ink">Mood / Morale Penalties</h4>
                <p className="font-serif text-sm text-ink-light mt-1">Give these settlers extra attention to their needs. A private bedroom (even a small one) goes a long way. Ensure they have access to beer, mead, or Rough Wine if your colony produces it. Keep them away from corpses, filth, and other mood-draining environments. Do NOT assign them to combat roles — a settler with fragile morale on a battlefield is a mental break waiting to happen at the worst possible moment.</p>
              </div>
              <div className="journal-card p-4">
                <h4 className="font-display text-base font-semibold text-ink">Physical Weakness</h4>
                <p className="font-serif text-sm text-ink-light mt-1">Assign physically weak settlers exclusively to stationary jobs — research tables, crafting stations, cooking fires, and tailoring benches. Never make them miners (they'll carry too little per trip), builders (slow construction), or haulers (inefficient transport). A physically weak researcher with fast learning is still an excellent researcher because physical traits don't matter at a research table.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Starting Settler Selection Strategy</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Your three starting settlers set the foundation for your entire colony. Reroll them until you have a balanced team with complementary traits. Here's a framework for a strong starting trio:
            </p>
            <div className="space-y-3">
              <div className="journal-card p-4">
                <h4 className="font-display text-base font-semibold text-ink">Settler 1: The Builder/Miner</h4>
                <p className="font-serif text-sm text-ink-light mt-1">Prioritize Construction and Mining skills. Look for physical-strength traits and work-speed bonuses. This settler will build your first shelter, dig your first underground rooms, and construct your walls. They're your most active settler in the first 10 days. A work-speed penalty on this settler is particularly painful because early-game construction speed directly determines how fast you get shelter and defenses up.</p>
              </div>
              <div className="journal-card p-4">
                <h4 className="font-display text-base font-semibold text-ink">Settler 2: The Crafter/Cook</h4>
                <p className="font-serif text-sm text-ink-light mt-1">Prioritize Crafting and Cooking skills. Quality and work-speed traits are ideal. This settler produces your weapons, armor, tools, and meals. Once the initial construction rush ends, this settler becomes your most economically valuable colonist. Fast learning is excellent here because crafting skills scale dramatically — a level 15 crafter produces vastly better equipment than a level 5 crafter.</p>
              </div>
              <div className="journal-card p-4">
                <h4 className="font-display text-base font-semibold text-ink">Settler 3: The Researcher/Support</h4>
                <p className="font-serif text-sm text-ink-light mt-1">Prioritize Intellectual (research) skill. Fast learning is the best trait for this role because research takes the longest to level up. This settler can also handle farming, hauling, and medical duties early on. Mental resilience is valuable — a researcher who breaks from stress halts your entire tech progression. Consider giving them a secondary role as a backup combat settler since they'll spend most of their time at the research table and will be available for emergencies.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
            <div className="faq-item">
              <details>
                <summary>Can negative traits be removed or changed?</summary>
                <p>No. Traits in Going Medieval are permanent. There is no in-game mechanic to remove a negative trait, add a positive one, or change a settler's traits after they are generated. The only way to replace a bad settler is to recruit a better one and either exile the problematic settler or accept their limitations. This is why trait evaluation at recruitment is so critical — a bad decision now affects your colony for the rest of that save.</p>
              </details>
            </div>
            <div className="faq-item">
              <details>
                <summary>Are traits more important than skills?</summary>
                <p>It depends on your colony's stage. For a new colony (first 10 days): skills matter slightly more because you need immediate productivity to survive. For an established colony (after the first winter): traits matter more because skills can be trained but traits are permanent. A settler with great traits and mediocre skills will eventually surpass a settler with great skills and mediocre traits — it just takes time. The ideal recruit has both.</p>
              </details>
            </div>
            <div className="faq-item">
              <details>
                <summary>How many traits does each settler have?</summary>
                <p>Settlers in Going Medieval typically have 2-4 traits, with a mix of positive and negative. The exact number and distribution depend on the game version. Early Access games frequently adjust trait generation balance. Observe your settlers' trait panels to understand the current version's system. Community documentation on the Going Medieval Wiki (goingmedieval.fandom.com) tracks known traits and their effects across versions.</p>
              </details>
            </div>
            <div className="faq-item">
              <details>
                <summary>Do traits affect combat performance?</summary>
                <p>Yes. Physical traits affect durability and damage output. Mental resilience traits affect whether a settler breaks morale during extended combat. A settler with strong combat-related traits is significantly more effective than one without, even at the same skill level. For your primary defenders, prioritize combat-relevant traits alongside high Melee or Marksman skill. A skilled archer with fragile morale is less reliable than an average archer with iron nerves.</p>
              </details>
            </div>
            <div className="faq-item">
              <details>
                <summary>Where can I find a complete list of Going Medieval traits?</summary>
                <p>The Going Medieval Wiki (goingmedieval.fandom.com) maintains a community-documented list of known traits, their effects, and which game versions they appear in. Keep in mind that Going Medieval is in Early Access — traits may be added, removed, rebalanced, or renamed between updates. For the most current information, check the wiki and cross-reference with what you see in your own game. Steam community guides may also contain up-to-date trait documentation.</p>
              </details>
            </div>
          </section>
        </div>

        <aside className="lg:w-[35%] space-y-8 shrink-0">
          <div className="field-sidebar-block">
            <h3 className="font-display text-lg font-semibold text-ink mb-4">Recruitment Priority</h3>
            <div className="space-y-3">
              <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Always Recruit</h4><p className="font-serif text-xs text-ink-muted mt-1">Work-speed boost + any other positive trait. Fast learner with relevant skills. Two strong positives, no negatives.</p></div>
              <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Strongly Consider</h4><p className="font-serif text-xs text-ink-muted mt-1">One strong positive trait + fills a colony need. Mental resilience for combat roles. High skills despite average traits.</p></div>
              <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Conditional</h4><p className="font-serif text-xs text-ink-muted mt-1">Fills urgent skill gap. One minor positive, no severe negatives. Late-game luxury recruit.</p></div>
              <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink" style={{"color": "var(--color-accent)"}}>Reject</h4><p className="font-serif text-xs text-ink-muted mt-1">Severe work-speed + slow-learning combo. Dangerous behavioral traits. Multiple severe negatives without compensation.</p></div>
            </div>
          </div>
          <div className="journal-card p-5">
            <h3 className="font-display text-base font-semibold text-ink mb-3">Starting Trio Checklist</h3>
            <div className="space-y-2 font-serif text-sm text-ink-light">
              <div>&bull; One strong builder/miner (Construction + physical traits)</div>
              <div>&bull; One crafter/cook (Crafting + quality traits)</div>
              <div>&bull; One researcher/support (Intellectual + fast learning)</div>
              <div>&bull; At least one settler with combat-relevant traits</div>
              <div>&bull; Cover all 14 skills across the trio</div>
              <div>&bull; Avoid any settler with severe work-speed + learning penalty combo</div>
              <div className="mt-2">Reroll until all three settlers have at least one useful positive trait each.</div>
            </div>
          </div>
          <div className="aged-border p-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
            <p className="font-serif text-xs text-ink leading-relaxed">
              <strong className="text-vermillion">Version Note:</strong> Going Medieval is in Early Access. Trait names, exact numerical effects, and trait availability change between game versions. Traits documented on the Going Medieval Wiki (goingmedieval.fandom.com) reflect community observation and may not match the current live version. Always check settler traits in-game before making decisions. Do not assume traits from other games exist in Going Medieval.
            </p>
          </div>
        </aside>
      </div>
      </main>
  );
}
