{/* Meta description: Learn when raids happen in Going Medieval and how to prepare. Complete guide to raid triggers, enemy types, timing patterns, and defense preparation strategies. */}
export const metadata = {
  title: "Going Medieval Raid Schedule — Timing & Preparation (2026)",
  description:
    "Complete raid schedule guide for Going Medieval. Raid timing, warning signs, and pre-raid preparation checklist.",
};


export default function RaidScheduleGuidePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <h1 className="chapter-heading">Going Medieval Raid Schedule Guide</h1>

      <p className="font-serif text-base text-ink-light leading-relaxed drop-cap">
        Understanding when raids will occur and how to prepare for them is perhaps the most critical skill in Going Medieval. Unlike some colony sims that provide clear warnings or fixed schedules, Going Medieval&apos;s raid system operates on a combination of random timing, progression-based scaling, and faction hostility. This guide compiles community testing data and observed patterns to help you predict, prepare for, and survive raids of all sizes.
      </p>

      <p className="font-serif text-base text-ink-light leading-relaxed">
        Raids in Going Medieval are not purely random—they follow underlying logic tied to your colony&apos;s wealth, population, and the game&apos;s progression timer. While the exact algorithms are not fully documented by the developers, extensive community testing has revealed consistent patterns that can help you prepare. This guide will walk you through everything we currently understand about raid timing, enemy composition, and preparation strategies.
      </p>

      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Raid Triggers and Timing Mechanics</h2>

      <p className="font-serif text-base text-ink-light leading-relaxed">
        Raids in Going Medieval are triggered by hostile factions responding to your colony&apos;s growth and actions. The game does not provide a visible &quot;raid timer&quot; or warning system, but community testing suggests several key factors influence when raids occur.
      </p>

      <h3 className="font-display text-xl font-semibold text-ink mb-3">Primary Raid Triggers</h3>

      <p className="font-serif text-base text-ink-light leading-relaxed">
        Based on community observations and testing, the following factors appear to influence raid timing and frequency:
      </p>

      <table className="parchment-table">
        <thead>
          <tr>
            <th>Trigger Factor</th>
            <th>Impact Level</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Colony Wealth</td>
            <td>High</td>
            <td>Higher total wealth (buildings, items, stored resources) correlates with more frequent and larger raids</td>
          </tr>
          <tr>
            <td>Population Size</td>
            <td>Medium</td>
            <td>Larger populations tend to trigger raids with more enemies to match your defensive capacity</td>
          </tr>
          <tr>
            <td>Days Passed</td>
            <td>Medium</td>
            <td>Later game days generally see harder raids as part of natural progression scaling</td>
          </tr>
          <tr>
            <td>Faction Hostility</td>
            <td>High</td>
            <td>Hostile factions are the ones that launch raids; diplomatic choices affect which factions become hostile</td>
          </tr>
          <tr>
            <td>Difficulty Setting</td>
            <td>High</td>
            <td>Higher difficulties increase enemy numbers, health, and wound severity</td>
          </tr>
        </tbody>
      </table>

      <h3 className="font-display text-xl font-semibold text-ink mb-3">Estimated Raid Timeline by Game Phase</h3>

      <p className="font-serif text-base text-ink-light leading-relaxed">
        While raids can occur at any time, community testing suggests the following general timeline patterns. These are estimates based on player reports and should be treated as guidelines rather than exact mechanics.
      </p>

      <table className="parchment-table">
        <thead>
          <tr>
            <th>Game Phase</th>
            <th>Typical Day Range</th>
            <th>Raid Frequency</th>
            <th>Expected Raid Size</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Early Game</td>
            <td>Days 1-15</td>
            <td>Low (first raid often around day 8-12)</td>
            <td>3-6 enemies</td>
          </tr>
          <tr>
            <td>Early Mid Game</td>
            <td>Days 16-30</td>
            <td>Moderate (every 5-8 days)</td>
            <td>5-10 enemies</td>
          </tr>
          <tr>
            <td>Mid Game</td>
            <td>Days 31-60</td>
            <td>Moderate-High (every 4-6 days)</td>
            <td>8-15 enemies</td>
          </tr>
          <tr>
            <td>Late Mid Game</td>
            <td>Days 61-100</td>
            <td>High (every 3-5 days)</td>
            <td>12-20 enemies</td>
          </tr>
          <tr>
            <td>Late Game</td>
            <td>Day 100+</td>
            <td>Very High (every 2-4 days)</td>
            <td>15-30+ enemies</td>
          </tr>
        </tbody>
      </table>

      <div className="aged-border">
        <p className="font-serif text-base text-ink-light leading-relaxed">
          <strong>Important Note:</strong> These timelines are community estimates based on standard difficulty settings. Your experience may vary significantly based on your colony&apos;s wealth accumulation rate, difficulty settings, and random variance. The &quot;first raid&quot; can sometimes occur as early as day 5 or as late as day 20 on standard settings.
        </p>
      </div>

      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Enemy Types and Raid Composition</h2>

      <p className="font-serif text-base text-ink-light leading-relaxed">
        Going Medieval features several distinct raid event types, each with different enemy compositions and objectives. Understanding what to expect from each raid type is essential for proper preparation.
      </p>

      <h3 className="font-display text-xl font-semibold text-ink mb-3">Standard Raid Events</h3>

      <table className="parchment-table">
        <thead>
          <tr>
            <th>Raid Type</th>
            <th>Enemy Composition</th>
            <th>Typical Size</th>
            <th>Key Threats</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mindless Assassins</td>
            <td>Melee-focused raiders with high mobility</td>
            <td>Small-Medium</td>
            <td>Fast melee attackers that can overwhelm poorly defended positions</td>
          </tr>
          <tr>
            <td>Third Coming Attack</td>
            <td>Mixed melee and ranged attackers</td>
            <td>Medium</td>
            <td>Balanced force requiring both melee and ranged defense</td>
          </tr>
          <tr>
            <td>Progeny Attack</td>
            <td>Larger force with varied equipment</td>
            <td>Medium-Large</td>
            <td>Sustained pressure from multiple enemy types</td>
          </tr>
          <tr>
            <td>Violent Extortionists</td>
            <td>Demanding raiders (multiple variants)</td>
            <td>Small-Medium</td>
            <td>May demand resources before attacking</td>
          </tr>
        </tbody>
      </table>

      <h3 className="font-display text-xl font-semibold text-ink mb-3">Enemy Equipment Progression</h3>

      <p className="font-serif text-base text-ink-light leading-relaxed">
        As the game progresses, raid enemies will spawn with increasingly better equipment. Early raids feature enemies with basic weapons and little armor, while late-game raids can include enemies with steel weapons, leather or better armor, and shields.
      </p>

      <table className="parchment-table">
        <thead>
          <tr>
            <th>Game Phase</th>
            <th>Typical Enemy Weapons</th>
            <th>Typical Enemy Armor</th>
            <th>Shield Usage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Early (Days 1-20)</td>
            <td>Spears, bardiches, basic melee</td>
            <td>None or cloth</td>
            <td>Rare</td>
          </tr>
          <tr>
            <td>Mid (Days 21-60)</td>
            <td>Longswords, maces, crossbows</td>
            <td>Leather armor common</td>
            <td>Some enemies</td>
          </tr>
          <tr>
            <td>Late (Days 61-100)</td>
            <td>Steel weapons, heavy crossbows</td>
            <td>Leather/Steel armor</td>
            <td>Common</td>
          </tr>
          <tr>
            <td>Endgame (Day 100+)</td>
            <td>High-quality steel weapons</td>
            <td>Steel armor possible</td>
            <td>Most melee enemies</td>
          </tr>
        </tbody>
      </table>

      <h3 className="font-display text-xl font-semibold text-ink mb-3">Animal Raids</h3>

      <p className="font-serif text-base text-ink-light leading-relaxed">
        In addition to human raiders, Going Medieval also features animal raids such as the &quot;Ferocious Swarm.&quot; These raids involve aggressive wildlife attacking your colony. Animal raids differ from human raids in several ways: they cannot be negotiated with, they don&apos;t care about your wealth, and they often arrive in larger numbers but with less equipment variety.
      </p>

      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Preparation Checklist and Defense Timing</h2>

      <p className="font-serif text-base text-ink-light leading-relaxed">
        Proper preparation is the difference between repelling a raid with minimal losses and watching your colony collapse. This section provides a comprehensive preparation checklist organized by timing windows.
      </p>

      <h3 className="font-display text-xl font-semibold text-ink mb-3">Pre-Raid Preparation Phases</h3>

      <table className="parchment-table">
        <thead>
          <tr>
            <th>Preparation Phase</th>
            <th>Timing</th>
            <th>Key Actions</th>
            <th>Priority Level</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Immediate Setup</td>
            <td>Days 1-5</td>
            <td>Build basic perimeter wall, assign ranged weapons, create fallback position</td>
            <td>Critical</td>
          </tr>
          <tr>
            <td>Early Reinforcement</td>
            <td>Days 6-15</td>
            <td>Upgrade walls, build archer positions, stock ammunition, train combat skills</td>
            <td>Critical</td>
          </tr>
          <tr>
            <td>Mid-Game Fortification</td>
            <td>Days 16-40</td>
            <td>Build dedicated kill zones, upgrade to steel weapons, establish trap corridors</td>
            <td>High</td>
          </tr>
          <tr>
            <td>Late Game Prep</td>
            <td>Days 41-80</td>
            <td>Multiple defense layers, emergency stockpiles, medical supplies, backup plans</td>
            <td>High</td>
          </tr>
          <tr>
            <td>Ongoing Maintenance</td>
            <td>Continuous</td>
            <td>Repair defenses, restock ammunition, train settlers, monitor morale</td>
            <td>Ongoing</td>
          </tr>
        </tbody>
      </table>

      <h3 className="font-display text-xl font-semibold text-ink mb-3">Defense Readiness Checklist</h3>

      <p className="font-serif text-base text-ink-light leading-relaxed">
        Use this checklist to assess your colony&apos;s raid readiness at any point in the game. Check off items as you complete them, and prioritize unfinished items based on your current game phase.
      </p>

      <table className="parchment-table">
        <thead>
          <tr>
            <th>Defense Element</th>
            <th>Early Game</th>
            <th>Mid Game</th>
            <th>Late Game</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Perimeter Wall</td>
            <td>Basic (wood/stone)</td>
            <td>Reinforced (stone/brick)</td>
            <td>Multi-layer (stone + backup)</td>
            <td>Height matters for archer advantage</td>
          </tr>
          <tr>
            <td>Ranged Positions</td>
            <td>2-3 archers</td>
            <td>4-6 archers/crossbowmen</td>
            <td>6+ with backups</td>
            <td>High ground provides accuracy bonus</td>
          </tr>
          <tr>
            <td>Melee Defenders</td>
            <td>1-2 melee</td>
            <td>2-4 melee</td>
            <td>4+ with rotation</td>
            <td>Shields critical for blocking arrows</td>
          </tr>
          <tr>
            <td>Ammunition Stock</td>
            <td>50+ arrows/bolts</td>
            <td>150+ arrows/bolts</td>
            <td>300+ arrows/bolts</td>
            <td>Running out mid-raid is catastrophic</td>
          </tr>
          <tr>
            <td>Medical Supplies</td>
            <td>Basic herbs</td>
            <td>Prepared meals + herbs</td>
            <td>Surgery table + supplies</td>
            <td>Wounded settlers need immediate care</td>
          </tr>
          <tr>
            <td>Fallback Position</td>
            <td>Simple hold point</td>
            <td>Reinforced inner fort</td>
            <td>Multiple fallback layers</td>
            <td>Essential if perimeter falls</td>
          </tr>
        </tbody>
      </table>

      <div className="aged-border">
        <p className="font-serif text-base text-ink-light leading-relaxed">
          <strong>Pro Tip:</strong> Always maintain at least one settler on &quot;standby&quot; duty with a ranged weapon and full ammunition. This settler can be quickly repositioned to respond to breaches or flank attacks during a raid. Rotation is key—don&apos;t let your combat settlers become exhausted or wounded without relief.
        </p>
      </div>

      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Defense Priorities by Raid Size</h2>

      <p className="font-serif text-base text-ink-light leading-relaxed">
        Not all raids are created equal. Small raids of 3-5 enemies require different strategies than massive assaults of 20+ attackers. This section breaks down defense priorities based on expected raid size.
      </p>

      <h3 className="font-display text-xl font-semibold text-ink mb-3">Small Raids (3-6 Enemies)</h3>

      <p className="font-serif text-base text-ink-light leading-relaxed">
        Small raids are common in the early game and occasionally appear later as &quot;nuisance&quot; attacks. These raids can often be repelled by a single well-positioned archer with high ground advantage. The key threat from small raids is not the number of enemies but the possibility of them breaking through to your unarmed settlers or livestock.
      </p>

      <p className="font-serif text-base text-ink-light leading-relaxed">
        For small raids, prioritize: (1) Early detection via open sight lines, (2) Funneling enemies into a kill zone, (3) Using terrain and structures to limit enemy movement options. A single archer on a <a href="/best-defense-layout" className="text-vermillion hover:underline">properly designed defensive wall</a> can often eliminate an entire small raid before they reach your perimeter.
      </p>

      <h3 className="font-display text-xl font-semibold text-ink mb-3">Medium Raids (7-14 Enemies)</h3>

      <p className="font-serif text-base text-ink-light leading-relaxed">
        Medium raids represent the most common mid-game threat. These raids have enough enemies to overwhelm a single defender and may include both melee and ranged attackers. You&apos;ll need at least 2-3 archers and 1-2 melee defenders to handle medium raids reliably.
      </p>

      <p className="font-serif text-base text-ink-light leading-relaxed">
        Key priorities for medium raids: (1) Multiple firing positions to distribute fire, (2) Melee blockers to protect archers if enemies breach, (3) Adequate ammunition—medium raids can consume 30-50 arrows depending on accuracy, (4) Medical preparation—expect 1-2 wounded settlers even in successful defenses.
      </p>

      <h3 className="font-display text-xl font-semibold text-ink mb-3">Large Raids (15-25 Enemies)</h3>

      <p className="font-serif text-base text-ink-light leading-relaxed">
        Large raids are late-game events that can threaten even well-established colonies. These raids often include enemies with steel equipment, shields (which block arrows), and enough numbers to attack from multiple directions simultaneously.
      </p>

      <p className="font-serif text-base text-ink-light leading-relaxed">
        Defense priorities shift dramatically for large raids. You need: (1) At least 4-6 ranged attackers with <a href="/crossbow-defense" className="text-vermillion hover:underline">crossbows for armor penetration</a>, (2) Multiple layers of defense—expect the perimeter to be breached, (3) Trap corridors to thin enemy numbers before they reach your walls, (4) Designated medical responders who are NOT on combat duty, (5) Emergency plans for settler morale collapses during prolonged combat.
      </p>

      <h3 className="font-display text-xl font-semibold text-ink mb-3">Massive Raids (25+ Enemies)</h3>

      <p className="font-serif text-base text-ink-light leading-relaxed">
        Massive raids are endgame challenges that test every aspect of your colony&apos;s preparation. These raids may include enemy siege equipment (like trebuchets in some game versions), heavily armored units, and sustained assault waves that can last for multiple in-game hours.
      </p>

      <p className="font-serif text-base text-ink-light leading-relaxed">
        At this scale, survival depends on: (1) Layered defenses with <a href="/defense" className="text-vermillion hover:underline">comprehensive trap networks</a>, (2) Enough combat-capable settlers to maintain a defense in depth, (3) Massive ammunition stockpiles (300+ rounds), (4) Multiple medical stations, (5) A clear understanding of when to retreat to your innermost fortifications versus making a stand at the perimeter.
      </p>

      <div className="aged-border">
        <p className="font-serif text-base text-ink-light leading-relaxed">
          <strong>Defense Scale Rule of Thumb:</strong> A commonly cited community guideline suggests maintaining at least 1.5 to 2 combat-capable settlers per expected raid enemy on standard difficulty. This means if you&apos;re expecting raids of 10 enemies, you should have 15-20 combat-trained settlers (or fewer very well-equipped settlers). This ratio decreases on lower difficulties and increases on higher ones.
        </p>
      </div>

      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Understanding Raid Events and Variations</h2>

      <p className="font-serif text-base text-ink-light leading-relaxed">
        Beyond standard raids, Going Medieval features special raid events that have unique behaviors and preparation requirements. Understanding these variations can prevent being caught off-guard by an unusual raid type.
      </p>

      <h3 className="font-display text-xl font-semibold text-ink mb-3">New Settler Raids</h3>

      <p className="font-serif text-base text-ink-light leading-relaxed">
        The &quot;Violent Extortionists&quot; raids come in multiple variants (Salvation, Barbarian Snack, Jailbird, Lost Property). These raids sometimes offer dialogue options or resource demands before attacking. Preparation for these raids includes deciding in advance how you&apos;ll respond to demands—sometimes paying off raiders is cheaper than fighting, especially if your military is underprepared.
      </p>

      <h3 className="font-display text-xl font-semibold text-ink mb-3">Animal Raids and Wildlife Threats</h3>

      <p className="font-serif text-base text-ink-light leading-relaxed">
        Animal raids like &quot;Ferocious Swarm&quot; bypass many human-raid defenses. Animals don&apos;t care about your walls—they will path through any accessible route and can sometimes exploit pathfinding weaknesses that human raiders don&apos;t. Animal raids also don&apos;t carry ranged weapons, making them vulnerable to archer fire but potentially overwhelming in melee if they break through.
      </p>

      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Frequently Asked Questions</h2>

      <div className="aged-border mb-4">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">Can I predict exactly when a raid will happen?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          No, Going Medieval does not provide exact raid predictions. Raids are partially random with underlying logic tied to your colony&apos;s stats. However, you can estimate increased raid likelihood based on wealth growth, population increases, and days passed. Many players report that after a raid, there&apos;s typically a brief &quot;cooldown&quot; period of a few days before the next raid trigger becomes active again, though this is not officially confirmed.
        </p>
      </div>

      <div className="aged-border mb-4">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">Do raids get harder if I accumulate more wealth?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          Community testing strongly suggests yes. Colony wealth appears to be a significant factor in both raid frequency and raid size. This creates an interesting strategic choice: expanding your colony and accumulating resources makes you more powerful but also triggers harder raids. Some players deliberately keep wealth low (by selling excess or minimizing decorative items) in the early game to reduce raid pressure while they build up their military.
        </p>
      </div>

      <div className="aged-border mb-4">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">What&apos;s the best way to prepare for my first raid?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          The most critical early preparation is establishing at least a basic perimeter with <a href="/raid-defense" className="text-vermillion hover:underline">proper defense positioning</a>. Before day 10 (when the first raid commonly occurs), ensure you have: (1) At least one archer with 20+ arrows, (2) A simple wall or trench to funnel enemies, (3) All settlers assigned to either combat or safe zones during raids, (4) A stocked food supply so settlers don&apos;t starve during prolonged combat. Don&apos;t wait until you see enemies to assign combat roles—do it proactively.
        </p>
      </div>

      <div className="aged-border mb-4">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">How does difficulty setting affect raids?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          Difficulty settings in Going Medieval adjust several raid-related parameters: enemy health (higher difficulty = tougher enemies), enemy numbers (higher difficulty = more enemies per raid), and wound severity (higher difficulty = more lethal combat). On the highest difficulties, even small raids can be deadly because individual enemies are much harder to kill and can inflict catastrophic wounds on your settlers.
        </p>
      </div>

      <div className="aged-border mb-4">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">Should I avoid expanding to prevent raids?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          While keeping wealth low can reduce raid pressure, avoiding expansion entirely is not viable—you need resources, population growth, and technology progression to ultimately survive. The better strategy is controlled growth: expand at a pace that allows you to build corresponding military strength. Rush military technology and defense infrastructure before investing heavily in luxury or excess production. A well-defended wealthy colony is far stronger than a poor one that gets overrun because it couldn&apos;t afford steel weapons and armor.
        </p>
      </div>

      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Advanced Raid Schedule Management</h2>

      <p className="font-serif text-base text-ink-light leading-relaxed">
        Once you understand the basics of raid timing and preparation, you can begin to actively manage your raid exposure through strategic choices. This advanced section covers techniques for controlling the pace and difficulty of raids.
      </p>

      <h3 className="font-display text-xl font-semibold text-ink mb-3">Wealth Management for Raid Control</h3>

      <p className="font-serif text-base text-ink-light leading-relaxed">
        Since wealth appears to influence raid difficulty, strategic wealth management can help control raid timing. This doesn&apos;t mean keeping your colony poor—it means being intentional about when you accumulate wealth. For example, delaying the construction of decorative or non-essential buildings until after you&apos;ve established a strong military can prevent early difficult raids. Similarly, selling excess resources rather than stockpiling them can keep your visible wealth lower.
      </p>

      <h3 className="font-display text-xl font-semibold text-ink mb-3">Using the Historical Records to Track Raid Patterns</h3>

      <p className="font-serif text-base text-ink-light leading-relaxed">
        Going Medieval includes a Historical Records feature (the first icon in the top right corner) that logs raid events. Reviewing this log can help you identify patterns specific to your current game. Look for: (1) Time intervals between raids, (2) Raid sizes over time, (3) Which factions are attacking you, (4) What raid types are appearing. This information can inform your preparation节奏 and help you anticipate when the next raid might arrive.
      </p>

      <h3 className="font-display text-xl font-semibold text-ink mb-3">Adapting to Your Faction Situation</h3>

      <p className="font-serif text-base text-ink-light leading-relaxed">
        The factions you encounter and your diplomatic standing with them significantly affect your raid profile. If you have multiple hostile factions, you may face more frequent but smaller raids as different groups attack independently. If you have only one hostile faction, you may face larger, less frequent raids. Managing diplomacy to keep some factions neutral or friendly can reduce your overall raid pressure, though this requires careful resource management for gifts and trade agreements.
      </p>

      <div className="aged-border">
        <p className="font-serif text-base text-ink-light leading-relaxed text-vermillion">
          <strong>Data Source Disclaimer:</strong> The raid timing estimates, enemy composition data, and preparation strategies in this guide are based on community testing and player observations. Going Medieval&apos;s raid algorithms are not fully documented by the developers, and actual raid behavior may vary based on game version, difficulty settings, and random seed. Treat the timelines and numbers in this guide as informed estimates rather than guaranteed mechanics. Always test defenses with your specific game configuration.
        </p>
        <p className="font-serif text-base text-ink-light leading-relaxed mt-2">
          <strong>Data source: Community testing estimates</strong>
        </p>
      </div>

      <p className="font-serif text-base text-ink-light leading-relaxed mt-6">
        Mastering raid timing and preparation is an ongoing process that evolves with your colony. The strategies in this guide provide a foundation, but the most valuable knowledge comes from experience in your specific game. Pay attention to how raids unfold, learn from close calls and failures, and continuously adapt your defenses. With proper preparation and understanding of the underlying mechanics, even the largest raids become manageable challenges rather than existential threats.
      </p>

    </main>
  );
}