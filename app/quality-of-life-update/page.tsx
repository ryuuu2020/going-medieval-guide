{/* Meta description: Going Medieval Quality of Life update 1.1 — every new feature explained: structure replacing, Plan Mode, mood and merry/rebel rebalance numbers, knockout rules, raid defeat looting, animal control, item repair, stability visualizer, plus hotfixes 1.1.9 and 1.1.11. */}
export const metadata = {
  title: "Going Medieval Quality of Life Update 1.1 — Every Change Explained (2026)",
  description:
    "Full breakdown of Going Medieval's Quality of Life update (1.1.7, July 2026): structure replacing, Plan Mode, mood rebalance numbers, knockout rules, repair system, and what to do first.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the Going Medieval Quality of Life update?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Quality of Life is the first major post-1.0 update for Going Medieval, released July 9, 2026 as version 1.1.7 on Steam, Epic Games Store, and GOG. Its headline features are structure replacing (swap walls, floors, doors and more without deconstructing), Plan Mode (place forbidden blueprints that settlers ignore until you allow them), a reworked mood system with perk-driven social chemistry, item repairing at production stations, animal sleep/idle controls with new coat colors and genetics, a stability visualizer, and combat changes that make raiders knock out instead of kill settlers in small colonies."
      }
    },
    {
      "@type": "Question",
      "name": "Do raiders still kill settlers after the 1.1 update?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Far less often in the early game. Raiders now prefer to knock settlers out rather than kill them, scaled by colony population: 100% knockout chance at 1-3 settlers, 90% at 4, 80% at 5, about 30% at 10, and 0% once you reach 20 or more settlers. If a raid defeats you, enemies now loot some of your resources instead of wiping the colony — anything stored in war chests or behind walls they cannot reach is safe."
      }
    },
    {
      "@type": "Question",
      "name": "How does Plan Mode work in Going Medieval 1.1?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "When you pick a construction piece you can now place it in Plan Mode. Every blueprint placed this way is automatically forbidden, so settlers leave it alone while you lay out an entire wing, wall ring, or room redesign. Toggle the visibility of forbidden blueprints from the upper-left icon to keep the view clean, then use the Allow tool on your finished plan and settlers will start building it."
      }
    },
    {
      "@type": "Question",
      "name": "What did the 1.1 mood rebalance change?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mood now moves four times faster (8 points per hour instead of 2), new colonies start far less comfortable (comfort ~10% instead of ~50%, entertainment and religious satisfaction ~50% instead of ~75%), and early expectation penalties bite harder (uncomfortable -6, very uncomfortable -10). Rebellious states trigger below 20% mood but only last 6 hours and now take perk-specific forms like Eat Binge, Insult Spree, or Fist Fight. Merry states last a full 24 hours and can fire bonus perk effects such as Gourmet upgrading meals or GreenThumb boosting harvests."
      }
    },
    {
      "@type": "Question",
      "name": "Can I repair weapons and armor in Going Medieval now?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Update 1.1 added item repairing: wood-based gear goes to the Woodwork Bench or Bowyer's Bench, clothing to the Sewing Station, metal items to the Blacksmith's Forge, and the Armourer's Table handles everything. A repair costs 5 resources of the item's base material, restores its hitpoints without changing quality, takes longer for bigger damage and lower skill, and grants a small amount of XP. See our dedicated item repair guide for costs and station setup."
      }
    }
  ]
};

export default function QualityOfLifeUpdatePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">

      <h1 className="chapter-heading">Going Medieval Quality of Life Update: Every New Feature Explained</h1>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-6">
        <span className="drop-cap">O</span>n July 9, 2026, Going Medieval received its first major update since
        the 1.0 launch — the <strong className="text-ink">Quality of Life update (version 1.1.7)</strong>, live on
        Steam, Epic Games Store, and GOG. This is not a cosmetic patch. It reworks how you build (structure
        replacing and Plan Mode), how your settlers feel (a full mood, merry, and rebellious-state rebalance
        driven by perks), how raids end (knockouts and looting instead of colony wipes), and how your gear
        survives (a real repair system). Two hotfixes followed — 1.1.9 on July 10 and 1.1.11 on July 16 —
        cleaning up crashes and replace-tool edge cases. This guide walks through every verified change, the
        exact before/after numbers, and the strategic implications for both new and established colonies.
      </p>

      {/* At a Glance Section */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">The Update at a Glance</h2>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        Eight systems changed meaningfully in 1.1.7. The table below summarizes what each one does and why it
        matters; the sections after it go deeper on the numbers and the strategies that follow from them.
      </p>

      <table className="parchment-table mb-8">
        <thead>
          <tr>
            <th>Feature</th>
            <th>What It Does</th>
            <th>Why It Matters</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Replace Structure</td>
            <td>Swap existing walls, floors, stairs, beams, windows, doors, ladders, gates, pen fences, and merlons for a different material or type in one action</td>
            <td>Upgrading a timber fort to stone no longer means demolishing it — stability is preserved and the old piece refunds some resources</td>
          </tr>
          <tr>
            <td>Plan Mode</td>
            <td>Places blueprints as forbidden so settlers ignore them until you allow construction</td>
            <td>Design an entire base expansion up front, review it, then release it for building in one pass</td>
          </tr>
          <tr>
            <td>Mood &amp; state rebalance</td>
            <td>Faster mood movement, harsher early expectations, 6-hour typed rebellious states, 24-hour merry states with perk bonuses</td>
            <td>Early-game mood management is now a real survival layer; happy settlers actively boost production</td>
          </tr>
          <tr>
            <td>Perk chemistry &amp; affection</td>
            <td>Perks now like or dislike other perks, radiate area effects, and drive social fights or friendships</td>
            <td>Squad composition matters socially, not just for skills — some settlers will simply never get along</td>
          </tr>
          <tr>
            <td>Item repair</td>
            <td>Production stations restore equipment hitpoints for 5 resources of the base material</td>
            <td>High-quality weapons and armor become maintainable assets instead of consumables</td>
          </tr>
          <tr>
            <td>Combat refinement</td>
            <td>Raiders knock out rather than kill in small colonies; defeated colonies lose loot, not lives; walls take less damage from non-siege attacks</td>
            <td>Early colonies survive defeats; war chests and walled-off stockpiles protect your best goods</td>
          </tr>
          <tr>
            <td>Animal control &amp; colors</td>
            <td>Sleep/idle location preferences, animal beds, pet burials and pyres, butcher filters, coat colors with rarity and simple genetics</td>
            <td>Pets stay out of the butcher queue, livestock sleeps where you want, and rare colors (like albino) sell for more</td>
          </tr>
          <tr>
            <td>Stability visualizer</td>
            <td>Shows numeric stability values around the cursor while placing blueprints</td>
            <td>Roof spans and overhangs stop being guesswork — you see support values before committing materials</td>
          </tr>
        </tbody>
      </table>

      {/* Building Section */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Replace Structure &amp; Plan Mode: Building Without Demolition</h2>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        <strong className="text-ink">Replace Structure</strong> is the community's most-requested feature, and it
        changes renovation economics completely. Select a built piece — a wooden wall, a thatch roof section, a
        door — and a Replace Structure option appears in the bottom-right corner with every valid replacement.
        Swapping overwrites the old piece in place: the new construction keeps the existing support situation, so
        roofs do not collapse mid-upgrade, and the old piece drops part of its materials for your haulers to
        reclaim. Replacements that need materials you lack are shown as unavailable. You can also select many
        structures at once and replace them in bulk — an entire wooden palisade becomes limestone in one order.
      </p>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        <strong className="text-ink">Plan Mode</strong> solves the other half of the building workflow: settlers
        rushing to construct half-designed layouts. Any construction can now be placed in Plan Mode, which marks
        the blueprint as forbidden. Builders ignore it. You can hide forbidden blueprints from view with the
        toggle in the upper-left corner, keep designing, and when the layout is right, sweep the Allow tool
        across the plan to release it for construction. Combined with the new stability visualizer — which prints
        actual stability numbers around your cursor as you place pieces — you can now plan an ambitious
        multi-storey hall, verify every span, and only then commit your settlers.
      </p>

      <figure className="my-6">
        <svg viewBox="0 0 760 300" className="w-full rounded-lg border border-gray-700" role="img"
          aria-label="Flow diagram of the Plan Mode building workflow in Going Medieval update 1.1, from planning to construction release">
          <rect x="0" y="0" width="760" height="300" fill="#1a1510" />

          {/* Step boxes */}
          <g>
            <rect x="30" y="90" width="150" height="76" rx="6" fill="#242018" stroke="#d4943a" strokeWidth="2" />
            <text x="105" y="120" fill="#d4943a" fontSize="14" textAnchor="middle" fontWeight="700">1 · PLAN</text>
            <text x="105" y="142" fill="#a89878" fontSize="11" textAnchor="middle">place blueprints in</text>
            <text x="105" y="156" fill="#a89878" fontSize="11" textAnchor="middle">Plan Mode</text>
          </g>
          <g>
            <rect x="220" y="90" width="150" height="76" rx="6" fill="#242018" stroke="#d4943a" strokeWidth="2" />
            <text x="295" y="120" fill="#d4943a" fontSize="14" textAnchor="middle" fontWeight="700">2 · FORBIDDEN</text>
            <text x="295" y="142" fill="#a89878" fontSize="11" textAnchor="middle">settlers ignore the</text>
            <text x="295" y="156" fill="#a89878" fontSize="11" textAnchor="middle">ghosted blueprints</text>
          </g>
          <g>
            <rect x="410" y="90" width="150" height="76" rx="6" fill="#242018" stroke="#d4a840" strokeWidth="2" />
            <text x="485" y="120" fill="#d4a840" fontSize="14" textAnchor="middle" fontWeight="700">3 · VERIFY</text>
            <text x="485" y="142" fill="#a89878" fontSize="11" textAnchor="middle">check spans with the</text>
            <text x="485" y="156" fill="#a89878" fontSize="11" textAnchor="middle">stability visualizer</text>
          </g>
          <g>
            <rect x="600" y="90" width="140" height="76" rx="6" fill="#2d261b" stroke="#6a9f5a" strokeWidth="2" />
            <text x="670" y="120" fill="#6a9f5a" fontSize="14" textAnchor="middle" fontWeight="700">4 · ALLOW</text>
            <text x="670" y="142" fill="#a89878" fontSize="11" textAnchor="middle">release with the</text>
            <text x="670" y="156" fill="#a89878" fontSize="11" textAnchor="middle">Allow tool — build!</text>
          </g>

          {/* Arrows */}
          <defs>
            <marker id="qolArrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#e0d4c0" />
            </marker>
          </defs>
          <line x1="182" y1="128" x2="216" y2="128" stroke="#e0d4c0" strokeWidth="2.5" markerEnd="url(#qolArrow)" />
          <line x1="372" y1="128" x2="406" y2="128" stroke="#e0d4c0" strokeWidth="2.5" markerEnd="url(#qolArrow)" />
          <line x1="562" y1="128" x2="596" y2="128" stroke="#e0d4c0" strokeWidth="2.5" markerEnd="url(#qolArrow)" />

          {/* Side note: replace path */}
          <rect x="220" y="210" width="340" height="52" rx="6" fill="#221c13" stroke="#3d3528" strokeWidth="1.5" />
          <text x="390" y="232" fill="#d4943a" fontSize="12" textAnchor="middle" fontWeight="600">Already built? Use Replace Structure instead</text>
          <text x="390" y="250" fill="#a89878" fontSize="11" textAnchor="middle">swap materials in place — stability kept, old piece refunds some resources</text>

          {/* Legend */}
          <g transform="translate(30, 30)">
            <rect x="0" y="-10" width="14" height="14" fill="#242018" stroke="#d4943a" strokeWidth="1.5" />
            <text x="20" y="2" fill="#a89878" fontSize="12">planning steps</text>
            <rect x="140" y="-10" width="14" height="14" fill="#242018" stroke="#d4a840" strokeWidth="1.5" />
            <text x="160" y="2" fill="#a89878" fontSize="12">verification</text>
            <rect x="270" y="-10" width="14" height="14" fill="#2d261b" stroke="#6a9f5a" strokeWidth="1.5" />
            <text x="290" y="2" fill="#a89878" fontSize="12">construction released</text>
          </g>
        </svg>
        <figcaption className="mt-2 text-center text-sm text-gray-400">
          The 1.1 building workflow: plan the whole layout while settlers ignore it, verify stability numbers,
          then release construction with the Allow tool. For existing structures, Replace Structure swaps
          materials in place without demolition.
        </figcaption>
      </figure>

      <div className="aged-border p-4 mb-8">
        <p className="font-serif text-base text-ink-light leading-relaxed">
          <strong>Renovation Math:</strong> Before 1.1, upgrading a wall ring meant deconstructing it (losing
          time and part of the materials), risking collapsed roofs, and rebuilding from scratch. Now a bulk
          replace order handles the whole ring, keeps stability intact, and your old walls partially refund
          themselves. Pair this with our{' '}
          <a href="/wall-upgrade-guide" className="text-vermillion hover:underline">wall upgrade guide</a> and{' '}
          <a href="/renovation-guide" className="text-vermillion hover:underline">renovation guide</a> for the
          full material progression.
        </p>
      </div>

      {/* Mood Rebalance Section */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Mood, Merry &amp; Rebellious: The New Numbers</h2>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        The settler mood system received its deepest rebalance since release. The direction is clear: the early
        game is harsher, mood swings are faster, and states on both ends of the spectrum now <em>do</em> things
        instead of being passive timers. Rebellious settlers no longer just idle for 18 hours — they flip into
        typed meltdowns (Eat Binge, Insult Spree, Solitary, Drink and Entertainment, Fist Fight, Feral, and
        more) chosen from their perks, each with different behavior and collateral damage, but the episode ends
        after 6 hours. Merry settlers stay merry for a full day and can trigger positive perk effects — a Gourmet
        cook upgrading a simple meal into a lavish one, a GreenThumb farmer sowing faster and harvesting more,
        a Winsome settler improving trade deals and social outcomes.
      </p>

      <table className="parchment-table mb-8">
        <thead>
          <tr>
            <th>Modifier</th>
            <th>Before 1.1</th>
            <th>After 1.1</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Rebellious state duration</td><td>18 h</td><td>6 h</td></tr>
          <tr><td>Merry state duration</td><td>12 h</td><td>24 h</td></tr>
          <tr><td>Mood change speed</td><td>2 points / hour</td><td>8 points / hour</td></tr>
          <tr><td>Rebel activation threshold</td><td>below 15% mood</td><td>below 20% mood</td></tr>
          <tr><td>Starting comfort stat</td><td>~50%</td><td>~10%</td></tr>
          <tr><td>Starting entertainment &amp; religious satisfaction</td><td>~75%</td><td>~50%</td></tr>
          <tr><td>Expectation — uncomfortable</td><td>-2</td><td>-6</td></tr>
          <tr><td>Expectation — very uncomfortable</td><td>-4</td><td>-10</td></tr>
          <tr><td>Expectation — initial optimism</td><td>+25</td><td>+15</td></tr>
          <tr><td>Ate a nice meal</td><td>+4</td><td>+3</td></tr>
          <tr><td>Packaged food mood bonus</td><td>+4</td><td>+0 (removed)</td></tr>
          <tr><td>Food &amp; sleep mood modifier duration</td><td>~8 h</td><td>~16 h</td></tr>
          <tr><td>Slept on ground</td><td>-5</td><td>-10</td></tr>
          <tr><td>Slept outside</td><td>-7</td><td>-12</td></tr>
          <tr><td>Religious activities deprived</td><td>-8</td><td>-12</td></tr>
          <tr><td>Deprived of entertainment</td><td>-8</td><td>-12</td></tr>
          <tr><td>Together we are strong</td><td>+16</td><td>+8</td></tr>
          <tr><td>Carcass aesthetic impact</td><td>-10</td><td>-50</td></tr>
          <tr><td>Bones aesthetic impact</td><td>-30</td><td>-45</td></tr>
          <tr><td>Dung aesthetic impact</td><td>-10</td><td>-20</td></tr>
        </tbody>
      </table>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        Three practical consequences follow. First, <strong className="text-ink">bedrooms and floors matter from
        day one</strong>: with comfort starting near 10% and sleeping on the ground now costing -10 mood, an
        unpainted barracks can push a new settler toward the 20% rebel threshold within days — but mood modifiers
        from food and sleep also persist for ~16 hours, so one good meal and a real bed carry most of a day.
        Second, <strong className="text-ink">packaged survival rations no longer prop up mood</strong> — the +4
        bonus is gone, so proper meals are the only food-based mood lever. Third,
        <strong className="text-ink"> corpse and refuse hygiene is now a mood system, not a cosmetic one</strong>:
        a carcass rotting in your great hall hits nearby settlers for -50. For the underlying mechanics, see our{' '}
        <a href="/settler-mood-system" className="text-vermillion hover:underline">settler mood system guide</a>{' '}
        and <a href="/mood-management-guide" className="text-vermillion hover:underline">mood management guide</a>.
      </p>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        Perks now drive the social graph. Each settler's Social tab shows relationship history, what is
        influencing it, and how far a friendship or rivalry can go — and perk pairs actively like or dislike
        each other. Iron Stomach settlers get along with Callous and Cannibal types but clash with Gourmet,
        Dainty, Precious, and Austere settlers; Contemplative settlers grind against Outgoing ones; Infirm
        settlers warm to Benevolent caretakers. Some perks radiate area effects: Industrious settlers lift the
        mood of people working near them, while wounded, moribund settlers now emit a wound odor that drags
        neighbors down. When relations sour far enough, social fights can erupt — though a later refinement
        stops brawls between settlers with strongly positive affection. Our{' '}
        <a href="/perks-guide" className="text-vermillion hover:underline">perks guide</a> and{' '}
        <a href="/relationships-system" className="text-vermillion hover:underline">relationships system guide</a>{' '}
        cover the underlying systems.
      </p>

      {/* Combat Section */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Combat Refinement: Knockouts, Looting, and War Chests</h2>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        Raid outcomes were rebalanced around one idea: a defeated colony should suffer a setback, not an
        extinction event. Raiders now prefer to knock settlers unconscious rather than kill them, with the
        knockout preference scaled against your population — a three-person hermitage is effectively unkillable,
        while a 20-person fortress faces fully lethal raids again. Enemies attacking without siege weapons also
        deal reduced damage to structures, so defeated walls are cheaper to rebuild.
      </p>

      <table className="parchment-table mb-8">
        <thead>
          <tr>
            <th>Settlers in Colony</th>
            <th>Chance Raiders Knock Out (Instead of Kill)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>1–3</td><td>100%</td></tr>
          <tr><td>4</td><td>90%</td></tr>
          <tr><td>5</td><td>80%</td></tr>
          <tr><td>10</td><td>30%</td></tr>
          <tr><td>20+</td><td>0%</td></tr>
        </tbody>
      </table>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        Values between these anchor points are interpolated by the game — five settlers sit at 80%, ten at 30%,
        and the curve slides smoothly between them.
      </p>

      <figure className="mb-8">
        <img
          src="/images/quality-of-life-update.png"
          alt="Line chart showing raider knockout chance by colony population in Going Medieval update 1.1: 100 percent at 1 to 3 settlers, 90 percent at 4, 80 percent at 5, falling through 30 percent at 10 settlers to 0 percent at 20 and above"
          className="w-full rounded-lg border border-[#3d3528]"
          loading="lazy"
        />
        <figcaption className="mt-2 text-center text-sm text-ink-light font-serif">
          Knockout preference falls as your colony grows. Marked points are the confirmed anchor values;
          the curve between them is interpolated. Below 5 settlers, defeat almost never means death.
        </figcaption>
      </figure>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        When you do lose a raid, the punishment is now economic. Victorious raiders grab some of your resources —
        or the specific settler they came for in runaway events — and leave. Two exemptions define your defensive
        storage strategy: anything inside <strong className="text-ink">war chests</strong> is never claimed, and
        anything <strong className="text-ink">walled off beyond the raiders' reach</strong> is never claimed.
        While raiders are walking off the map after a victory, drafting is temporarily disabled, so there is no
        dishonorable parting shot in either direction. The meta shifts accordingly: keep your most valuable
        compact goods (silver, jewelry, rare components) in war chests, and treat your deepest stockpile room as
        a vault. For the defensive side of the equation, see our{' '}
        <a href="/raid-defense-strategy" className="text-vermillion hover:underline">raid defense strategy</a>{' '}
        and <a href="/killbox-design" className="text-vermillion hover:underline">killbox design guide</a>.
      </p>

      <div className="aged-border p-4 mb-8">
        <p className="font-serif text-base text-ink-light leading-relaxed">
          <strong>New-Colony Safety Net:</strong> Under roughly 5 settlers, a lost fight means knocked-out
          settlers, stolen goods, and a rebuilding bill — not a save-ending massacre. This makes risky openings
          (aggressive expansion, early caravans, harder scenarios) far more viable. By the time you pass 20
          settlers the training wheels come fully off, so scale your defenses with your population.
        </p>
      </div>

      {/* Animals Section */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Animals: Control, Colors, and Last Rites</h2>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        Livestock management grows up in 1.1. From the Overview panel you can now set where each animal sleeps —
        in its owner's quarters, inside any building, outside, or anywhere — and where it idles. New craftable
        animal beds act as designated sleeping spots. The long-running annoyance of pets being dragged to the
        butcher table is solved two ways: production buildings that use animal carcasses now have a species
        filter, and dead pets can be buried in graves or sent off on a pyre (the pyre accepts cats and dogs by
        default, editable if your colony has darker customs). Settlers will also autonomously pet animals for a
        small mood boost, and you can order it via right-click prioritization.
      </p>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        Every animal species now comes in multiple coat colors, shown in tooltips and trade windows. Colors have
        rarity — orange female cats are hard to find, albino anything is the rarest bracket — and rarity nudges
        trade prices upward. A light genetics system groups colors into hereditary brackets (all tortoiseshell
        cats share one), so breeding pairs pass their palette tendencies to offspring. Animals already in your
        saves are assigned a random color when you first load them in 1.1. For husbandry fundamentals, see our{' '}
        <a href="/animal-husbandry" className="text-vermillion hover:underline">animal husbandry guide</a>.
      </p>

      {/* Hotfixes Section */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Hotfixes 1.1.9 and 1.1.11</h2>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        Two patches landed within a week of the update. Patch 1.1.9 (July 10) shortened enter/exit loading on
        secondary maps for very large settlements, fixed a tutorial soft-lock where required resources could
        fail to spawn, and cleaned up crashes and visual glitches. Patch 1.1.11 (July 16) focused on the new
        replace tool: gates no longer shift position when replaced, walls replaced with windows or doors keep
        the correct rotation, forbidden blueprints no longer turn invisible after the Forbid/Allow tool passes
        over them, and right-click prioritization works on windows again. It also fixed settlers idly sitting in
        water or on the ghosts of destroyed chairs, mining reachability quirks around water, stockpiles randomly
        turning forbidden, and a bug where ranged enemies could fire several projectiles at once like a shotgun.
      </p>

      {/* What To Do First Section */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">What to Do First After Updating</h2>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        Whether you are mid-save or starting fresh, this order of operations extracts the most value from 1.1
        in your first in-game days:
      </p>

      <table className="parchment-table mb-8">
        <thead>
          <tr>
            <th>Priority</th>
            <th>Action</th>
            <th>Payoff</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Move compact valuables into war chests and wall off your deepest stockpile</td>
            <td>A lost raid now costs loot — make sure there is nothing worth stealing within reach</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Set butcher-table species filters and pet sleep preferences; place animal beds</td>
            <td>Pets stop appearing in the meat queue; barns and pastures stay organized</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Queue repair orders for your best weapons and armor at the right stations</td>
            <td>High-quality gear returns to full hitpoints for 5 base resources instead of a full recraft</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Bulk-replace outer wooden walls with stone using Replace Structure</td>
            <td>Perimeter upgrades without demolition, collapse risk, or lost stability</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Audit bedrooms and meal quality — comfort starts low and ground-sleeping now costs -10 mood</td>
            <td>Keeps settlers clear of the 20% rebel threshold as mood moves 4× faster</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Check the Social tab for perk clashes before pairing workers in tight workshops</td>
            <td>Avoids Insult Sprees and fist fights; stacks soothing-presence perks where people gather</td>
          </tr>
          <tr>
            <td>7</td>
            <td>Turn on the stability visualizer for your next big roof or overhang project</td>
            <td>Exact support numbers replace trial-and-error collapses</td>
          </tr>
        </tbody>
      </table>

      {/* FAQ Section */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Frequently Asked Questions</h2>

      <div className="aged-border p-4 mb-4">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">What is the Going Medieval Quality of Life update?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          The first major post-1.0 update, released July 9, 2026 as version 1.1.7 on Steam, Epic Games Store,
          and GOG. Its headline features are structure replacing, Plan Mode, a perk-driven mood and social
          overhaul, item repairing, animal sleep controls with coat-color genetics, a stability visualizer, and
          combat changes that favor knockouts over kills in small colonies. Hotfixes 1.1.9 (July 10) and 1.1.11
          (July 16) followed with crash fixes and replace-tool corrections.
        </p>
      </div>

      <div className="aged-border p-4 mb-4">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">Do raiders still kill settlers after the 1.1 update?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          Far less often in the early game. Raiders now prefer knockouts scaled by population: 100% knockout
          chance at 1–3 settlers, 90% at 4, 80% at 5, about 30% at 10, and 0% at 20 or more. Losing a raid means
          losing resources — or a pursued settler in runaway events — but war chest contents and anything walled
          off beyond reach are never taken, and drafting is disabled while victorious raiders leave the map.
        </p>
      </div>

      <div className="aged-border p-4 mb-4">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">How does Plan Mode work in Going Medieval 1.1?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          When placing any construction you can opt into Plan Mode, which marks the blueprint as forbidden so
          settlers ignore it. Lay out an entire expansion while builders carry on with existing work, hide the
          ghosted blueprints with the upper-left visibility toggle, then sweep the Allow tool across the plan to
          release it for construction. It pairs naturally with the new stability visualizer for checking spans
          before committing materials.
        </p>
      </div>

      <div className="aged-border p-4 mb-4">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">What did the 1.1 mood rebalance change?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          Mood moves four times faster (8 points per hour, up from 2), colonies start with comfort around 10%
          and entertainment/religious satisfaction around 50%, and early expectations hit harder (uncomfortable
          -6, very uncomfortable -10). Rebellious states trigger below 20% mood but end after 6 hours and take
          perk-specific forms like Eat Binge or Fist Fight. Merry states last 24 hours and can fire positive
          perk effects. Food and sleep modifiers persist about 16 hours, while sleeping on the ground now costs
          -10 and carcasses in living spaces cost -50.
        </p>
      </div>

      <div className="aged-border p-4 mb-8">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">Can I repair weapons and armor in Going Medieval now?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          Yes. Wood-based gear repairs at the Woodwork Bench or Bowyer's Bench, clothing at the Sewing Station,
          metal items at the Blacksmith's Forge, and the Armourer's Table handles all categories. Repairs cost 5
          resources of the item's base material, restore hitpoints without changing quality, scale in time with
          settler skill and damage taken, and grant a little XP. Full costs and station setup are in our{' '}
          <a href="/item-repair-guide" className="text-vermillion hover:underline">item repair guide</a>.
        </p>
      </div>

      {/* Related Guides */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Related Guides</h2>
      <ul className="list-disc pl-6 mb-8 space-y-2 font-serif text-base text-ink-light">
        <li><a href="/item-repair-guide" className="text-vermillion hover:underline">Item Repair Guide — station setup, costs, and repair-vs-replace math</a></li>
        <li><a href="/settler-mood-system" className="text-vermillion hover:underline">Settler Mood System — thresholds and modifiers in detail</a></li>
        <li><a href="/mood-management-guide" className="text-vermillion hover:underline">Mood Management — keeping colonies clear of rebel states</a></li>
        <li><a href="/raid-defense-strategy" className="text-vermillion hover:underline">Raid Defense Strategy — layered defenses for every raid type</a></li>
        <li><a href="/wall-upgrade-guide" className="text-vermillion hover:underline">Wall Upgrade Guide — put Replace Structure to work</a></li>
        <li><a href="/animal-husbandry" className="text-vermillion hover:underline">Animal Husbandry — breeding, filters, and livestock logistics</a></li>
      </ul>

      <p className="font-serif text-sm text-ink-muted leading-relaxed mt-8 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
        Last updated: July 19, 2026. Covers Going Medieval version 1.1.7 (Quality of Life update) with
        hotfixes 1.1.9 and 1.1.11. Game mechanics may change with future updates.
      </p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  );
}
