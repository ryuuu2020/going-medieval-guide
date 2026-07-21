{/* Meta description: Going Medieval killbox design — funnel corridors, spike trap placement, embrasure walls, bait doors, and layered archer positions explained with real weapon data and a top-down layout diagram. */}
export const metadata = {
  title: "Going Medieval Killbox Design — Trap Corridors & Archer Layers (2026)",
  description:
    "How to build a killbox in Going Medieval: funnel walls, spike trap corridors, embrasures, bait doors, and the ranged weapon data behind every design choice.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How wide should a killbox corridor be in Going Medieval?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "One to two tiles wide. A 1-tile corridor forces raiders into single file so every spike trap triggers on a fresh target and your archers only ever face one enemy at the embrasure. Wider corridors let raiders spread out, bypass traps, and swamp your firing line. Keep the corridor 8–15 tiles long so enemies spend several seconds under fire crossing it."
      }
    },
    {
      "@type": "Question",
      "name": "Do spike traps need to be re-armed in Going Medieval?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. A spike trap triggers on the enemy that steps on it and then must be re-armed by a settler before it can trigger again. During long raids some traps will fire early and sit inert, which is why deep corridors stack multiple trap rows — later raiders still hit armed traps further down the channel. After each raid, check the corridor and queue re-arms before the next attack."
      }
    },
    {
      "@type": "Question",
      "name": "What is a bait door and why does my killbox need one?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A bait door is a door left accessible (not forbidden) at the inner end of your killbox corridor. Raiders in Going Medieval path toward the easiest reachable target inside your base; if the only open path runs through your trap corridor, they commit to it instead of attacking your walls. If every entrance is sealed, raiders switch to breaking down the nearest wall segment and your killbox never sees them."
      }
    },
    {
      "@type": "Question",
      "name": "Which weapon is best for killbox archers in Going Medieval?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For raw sustained damage, the Longbow leads at roughly 4.07 DPS (22 damage every 5.4 seconds) and shreds unarmoured raiders. For armoured targets, the Heavy Crossbow at Good quality hits for 36 with 92% armour penetration and 25m range — fewer shots, but each one lands at near-full power through plate. The strongest killboxes mix both: Longbow marksmen thin the wave, Heavy Crossbow marksmen delete the armoured survivors."
      }
    },
    {
      "@type": "Question",
      "name": "Why do raiders ignore my killbox and attack my walls?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Three common causes: (1) every door is forbidden or blocked, so the corridor isn't a valid path — un-forbid the bait door; (2) the corridor route is longer or more obstructed than simply smashing a wall — widen the funnel approach and clear debris; (3) the raid is a special event type (such as siege-style attacks) that behaves differently. Watch the dashed pathing lines when a raid spawns and adjust your funnel walls to catch the most common approach angles."
      }
    }
  ]
};

export default function KillboxDesignPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">

      <h1 className="chapter-heading">Going Medieval Killbox Design: Trap Corridors That Actually Work</h1>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-6">
        <span className="drop-cap">A</span> killbox is the single most efficient defensive structure in Going
        Medieval: a deliberately engineered path that forces raiders through a gauntlet of spike traps while your
        archers shoot them from positions of complete safety. Done well, a killbox lets a handful of settlers
        annihilate raids that would overwhelm an open-field defence, with zero injuries and minimal ammunition of
        time. Done poorly, raiders path around it, smash your perimeter walls, and your trap corridor becomes
        expensive decoration. This guide covers the four components every working killbox needs — funnel, trap
        corridor, embrasure firing line, and bait door — plus the weapon math that determines how many archers
        you actually need.
      </p>

      {/* Core Components Section */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">The Four Components of a Working Killbox</h2>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        Every functional killbox in Going Medieval combines the same four elements. Miss any one of them and
        the design degrades: without a funnel, raiders arrive spread out; without traps, your archers carry the
        entire damage load; without embrasures or merlons, enemy archers trade shots back; without a bait door,
        raiders simply attack your walls instead of entering the corridor at all.
      </p>

      <table className="parchment-table mb-8">
        <thead>
          <tr>
            <th>Component</th>
            <th>Purpose</th>
            <th>Build Spec</th>
            <th>Common Failure</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Funnel walls</td>
            <td>Gather raiders from any approach angle into the corridor mouth</td>
            <td>Angled wall segments fanning 20–30 tiles out from the entrance</td>
            <td>Gaps between funnel and terrain let raiders slip past</td>
          </tr>
          <tr>
            <td>Trap corridor</td>
            <td>Damage and thin the raid before contact</td>
            <td>1–2 tiles wide, 8–15 tiles long, spike traps on every floor tile</td>
            <td>Too short — raiders cross before traps + arrows do enough work</td>
          </tr>
          <tr>
            <td>Embrasure firing line</td>
            <td>Let archers shoot into the corridor while protected</td>
            <td>Embrasure or merlon segments every 2–3 wall tiles, one archer each</td>
            <td>Archers standing on open ground get shot back or flanked</td>
          </tr>
          <tr>
            <td>Bait door</td>
            <td>Give raiders a valid pathing target so they commit to the corridor</td>
            <td>One un-forbidden door at the corridor's inner end; all other doors forbidden during raids</td>
            <td>All doors sealed — raiders switch to demolishing your walls</td>
          </tr>
        </tbody>
      </table>

      <div className="aged-border p-4 mb-8">
        <p className="font-serif text-base text-ink-light leading-relaxed">
          <strong>Pathing Rule:</strong> Raiders take the shortest <em>valid</em> path to something they can
          attack or steal. "Valid" means reachable without breaking anything. A killbox exploits this: your
          trap corridor is the only reachable route, so the AI willingly walks into it. If you wall off your
          base completely, raiders stop pathing and start demolishing — which is why the bait door stays open
          until the last second.
        </p>
      </div>

      {/* Traps Section */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Spike Traps: Placement and Re-Arming</h2>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        Going Medieval's wooden spike trap is built from the defence menu and is available from the very first
        day — no research required, only wood. A trap triggers when an enemy walks onto its tile, dealing
        damage, and then sits inert until a settler re-arms it. Two design consequences follow. First, traps
        belong inside the corridor, never scattered around your perimeter: an isolated trap in a field might
        clip one raider, while the same trap inside a 1-tile channel is guaranteed a target. Second, depth
        beats width — because triggered traps go inert mid-raid, a long corridor with traps on every tile
        keeps dealing damage to the 5th, 10th, and 15th raider long after the first row has fired.
      </p>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        Keep your own settlers off the trap line. Mark corridor tiles as restricted (or simply never zone
        anything inside the corridor) so haulers and farmers don't wander across armed traps during daily
        work. After every raid, open the defence menu and check each trap's state — re-arming is a job like
        any other, and a colony that forgets it fields an empty corridor when the next raid arrives. For
        dedicated trap tactics, see our{' '}
        <a href="/trap-placement" className="text-vermillion hover:underline">trap placement guide</a>.
      </p>

      <div className="aged-border p-4 mb-8">
        <p className="font-serif text-base text-ink-light leading-relaxed">
          <strong>Budget Tip:</strong> Spike traps cost only wood, and wood is the one resource every map has
          in abundance. In year one, a 10-tile corridor of traps is cheaper than equipping a single additional
          archer with a longbow (40 wood) — and it works while your settlers sleep. Expand the corridor before
          you expand the garrison.
        </p>
      </div>

      {/* Firing Line Section */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">The Firing Line: Embrasures, Elevation, and Weapon Choice</h2>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        Your archers' survival depends on cover. Embrasure wall segments (and merlons on elevated walkways)
        shield your marksmen from return fire while leaving them free to shoot into the corridor — the game's
        own defence tips call out merlons as cover for archers against enemy projectiles, and placing archers
        on higher ground grants a buff to precision, range, and critical hit chance. A raised walkway behind
        the embrasure wall combines both bonuses and should be your default mid-game upgrade.
      </p>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        Weapon choice determines how much corridor each raider survives. The table below uses the verified
        weapon stats from our{' '}
        <a href="/archer-vs-crossbow" className="text-vermillion hover:underline">archer vs crossbow comparison</a>:
        Longbows deliver the highest sustained DPS and mulch unarmoured raiders, while crossbows trade fire
        rate for armour penetration and 25m range — letting them engage raiders at the funnel mouth, before
        they even enter the corridor.
      </p>

      <table className="parchment-table mb-8">
        <thead>
          <tr>
            <th>Weapon</th>
            <th>Damage (Good)</th>
            <th>Attack Duration</th>
            <th>Sustained DPS</th>
            <th>Max Range</th>
            <th>Armour Pen.</th>
            <th>Killbox Role</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Short Bow</td>
            <td>12</td>
            <td>5.4s</td>
            <td>2.22</td>
            <td>18m</td>
            <td>80%</td>
            <td>Day-one filler; arm every recruit</td>
          </tr>
          <tr>
            <td>Longbow</td>
            <td>22</td>
            <td>5.4s</td>
            <td>4.07</td>
            <td>18m</td>
            <td>80%</td>
            <td>Wave-clearing core vs. unarmoured raiders</td>
          </tr>
          <tr>
            <td>Crossbow</td>
            <td>26</td>
            <td>9.45s</td>
            <td>2.76</td>
            <td>25m</td>
            <td>90%</td>
            <td>Anti-armour; opens fire at the funnel mouth</td>
          </tr>
          <tr>
            <td>Heavy Crossbow</td>
            <td>36</td>
            <td>10.35s</td>
            <td>3.48</td>
            <td>25m</td>
            <td>92%</td>
            <td>Priority-target deletion (knights, shield-bearers)</td>
          </tr>
        </tbody>
      </table>

      <figure className="mb-8">
        <img
          src="/images/killbox-design.png"
          alt="Bar and line chart comparing sustained DPS at Good quality (Short Bow 2.22, Longbow 4.07, Crossbow 2.76, Heavy Crossbow 3.48) against maximum range in metres (18, 18, 25, 25) for Going Medieval ranged weapons used in a killbox"
          className="w-full rounded-lg border border-[#3d3528]"
          loading="lazy"
        />
        <figcaption className="mt-2 text-center text-sm text-ink-light font-serif">
          Sustained DPS (bars) vs. max range (line) at Good quality. The Longbow wins on raw damage output
          inside the corridor; crossbows win on reach, engaging raiders at the funnel before traps even fire.
        </figcaption>
      </figure>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        Practical staffing: three to four Longbow marksmen behind embrasures handle most year-one and
        year-two raids once traps have done their work. Add one Crossbow or Heavy Crossbow marksman per
        firing position as armoured raiders become common — their 90–92% armour penetration means plate
        armour barely reduces their impact, while a Longbow loses most of its 22 damage against the same
        target. Mix weapons per embrasure rather than segregating them, so every stretch of corridor gets
        both fast and heavy fire.
      </p>

      {/* Example Killbox Layout (Top-Down View) — SVG section preserved from 2026-07-19 addition */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Example Killbox Layout (Top-Down View)</h2>
      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        The classic funnel-and-corridor design: raiders are forced through a single trap-filled
        channel while your archers fire safely from behind an embrasure wall. A bait door at the
        far end gives raiders a pathing target so they commit to the corridor.
      </p>
      <figure className="my-6">
        <svg viewBox="0 0 760 460" className="w-full rounded-lg border border-gray-700" role="img"
          aria-label="Top-down diagram of a Going Medieval killbox layout with funnel, trap corridor, embrasure wall, archers and bait door">
          {/* 背景 */}
          <rect x="0" y="0" width="760" height="460" fill="#1a1510" />
          {/* 网格 */}
          {Array.from({ length: 18 }, (_, i) => (
            <line key={`gv${i}`} x1={40 + i * 40} y1="30" x2={40 + i * 40} y2="380" stroke="#2d261b" strokeWidth="1" />
          ))}
          {Array.from({ length: 9 }, (_, i) => (
            <line key={`gh${i}`} x1="40" y1={30 + i * 40} x2="720" y2={30 + i * 40} stroke="#2d261b" strokeWidth="1" />
          ))}

          {/* 基地房间 */}
          <rect x="40" y="94" width="120" height="208" fill="#242018" stroke="#4a4132" strokeWidth="3" />
          <text x="100" y="205" fill="#a89878" fontSize="15" textAnchor="middle" fontWeight="600">BASE</text>

          {/* 诱饵门 */}
          <rect x="160" y="120" width="26" height="52" fill="#d4943a" stroke="#1a1510" strokeWidth="2" />
          <text x="173" y="112" fill="#d4943a" fontSize="12" textAnchor="middle">bait door</text>

          {/* 走廊顶部墙 */}
          <rect x="186" y="94" width="374" height="26" fill="#3d3528" stroke="#241f16" strokeWidth="1.5" />
          {/* 走廊底部墙（带射击孔缺口） */}
          <rect x="186" y="172" width="74" height="26" fill="#3d3528" stroke="#241f16" strokeWidth="1.5" />
          <rect x="286" y="172" width="78" height="26" fill="#3d3528" stroke="#241f16" strokeWidth="1.5" />
          <rect x="390" y="172" width="78" height="26" fill="#3d3528" stroke="#241f16" strokeWidth="1.5" />
          <rect x="494" y="172" width="66" height="26" fill="#3d3528" stroke="#241f16" strokeWidth="1.5" />
          {/* 射击孔标记 */}
          {[273, 377, 481].map((cx) => (
            <g key={`emb${cx}`}>
              <rect x={cx - 13} y="172" width="26" height="10" fill="#1a1510" />
              <text x={cx} y="216" fill="#a89878" fontSize="11" textAnchor="middle">embrasure</text>
            </g>
          ))}

          {/* 走廊地面 */}
          <rect x="186" y="120" width="374" height="52" fill="#221c13" />
          {/* 陷阱 */}
          {[220, 272, 324, 376, 428, 480, 532].map((cx) => (
            <path key={`trap${cx}`} d={`M ${cx - 10} 158 L ${cx} 134 L ${cx + 10} 158 Z`}
              fill="#c05a3a" stroke="#8a3d24" strokeWidth="1.5" />
          ))}
          <text x="373" y="86" fill="#c05a3a" fontSize="13" textAnchor="middle" fontWeight="600">spike trap corridor</text>

          {/* 漏斗墙 */}
          <line x1="560" y1="94" x2="710" y2="40" stroke="#4a4132" strokeWidth="14" strokeLinecap="round" />
          <line x1="560" y1="198" x2="710" y2="300" stroke="#4a4132" strokeWidth="14" strokeLinecap="round" />
          <text x="648" y="222" fill="#a89878" fontSize="13" fontStyle="italic">funnel</text>

          {/* 袭击者出生点与路径 */}
          <path d="M 696 44 l 6 14 14 2 -10 10 2 14 -12 -7 -12 7 2 -14 -10 -10 14 -2 Z" fill="#e05a4e" />
          <text x="650" y="42" fill="#e05a4e" fontSize="13" fontWeight="600">raider spawn</text>
          <path d="M 690 78 C 690 110 660 130 620 140 L 210 146" fill="none" stroke="#e0d4c0"
            strokeWidth="2.5" strokeDasharray="8 6" markerEnd="url(#arrow)" />
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#e0d4c0" />
            </marker>
          </defs>

          {/* 弓箭手 */}
          {[273, 377, 481].map((cx) => (
            <g key={`archer${cx}`}>
              <circle cx={cx} cy="248" r="9" fill="#d4a840" stroke="#1a1510" strokeWidth="2" />
              <path d={`M ${cx + 6} 240 A 12 12 0 0 1 ${cx + 6} 256`} fill="none" stroke="#d4a840" strokeWidth="2" />
            </g>
          ))}
          <text x="377" y="284" fill="#d4a840" fontSize="13" textAnchor="middle" fontWeight="600">archers (safe behind wall)</text>

          {/* 图例 */}
          <g transform="translate(40, 410)">
            <rect x="0" y="-12" width="22" height="14" fill="#3d3528" stroke="#241f16" />
            <text x="28" y="0" fill="#a89878" fontSize="12">wall</text>
            <path d="M 92 -12 L 100 2 L 108 -12 Z" fill="#c05a3a" />
            <text x="114" y="0" fill="#a89878" fontSize="12">spike trap</text>
            <circle cx="216" cy="-5" r="7" fill="#d4a840" />
            <text x="228" y="0" fill="#a89878" fontSize="12">archer</text>
            <rect x="292" y="-12" width="12" height="14" fill="#d4943a" />
            <text x="310" y="0" fill="#a89878" fontSize="12">bait door</text>
            <line x1="396" y1="-5" x2="436" y2="-5" stroke="#e0d4c0" strokeWidth="2.5" strokeDasharray="6 5" />
            <text x="442" y="0" fill="#a89878" fontSize="12">raider path</text>
            <rect x="552" y="-12" width="22" height="10" fill="#1a1510" stroke="#a89878" strokeWidth="0.8" />
            <text x="580" y="0" fill="#a89878" fontSize="12">embrasure</text>
          </g>
        </svg>
        <figcaption className="mt-2 text-center text-sm text-gray-400">
          Raiders path toward the bait door, crossing seven spike traps under constant fire from three
          embrasure positions. Extend the corridor and add more traps as raid sizes grow.
        </figcaption>
      </figure>

      {/* Scaling Section */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Scaling the Killbox as Raids Grow</h2>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        Raid size in Going Medieval grows with your settlement's wealth and population — a prosperous colony
        attracts proportionally larger and better-armoured attacks (see our{' '}
        <a href="/wealth-scaling-raids" className="text-vermillion hover:underline">wealth scaling and raids guide</a>).
        A killbox that trivialised year-one bandits will leak in year three unless you extend it. The
        progression below keeps the design ahead of the curve without rebuilding from scratch.
      </p>

      <table className="parchment-table mb-8">
        <thead>
          <tr>
            <th>Colony Stage</th>
            <th>Corridor Length</th>
            <th>Trap Rows</th>
            <th>Firing Positions</th>
            <th>Upgrade Priority</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Year 1 (3–6 settlers)</td>
            <td>6–8 tiles</td>
            <td>Single line, every tile</td>
            <td>2–3 (ground level)</td>
            <td>Short Bows for everyone; funnel walls up</td>
          </tr>
          <tr>
            <td>Year 2 (7–12 settlers)</td>
            <td>10–12 tiles</td>
            <td>Full corridor floor coverage</td>
            <td>4–5 (add merlon walkway)</td>
            <td>Longbows; forbidden side doors; bait door discipline</td>
          </tr>
          <tr>
            <td>Year 3+ (13+ settlers)</td>
            <td>12–15+ tiles</td>
            <td>Double-depth on approach half</td>
            <td>6+ (elevated tower behind)</td>
            <td>Crossbows/Heavy Crossbows; stone walls; melee blocker at inner door</td>
          </tr>
        </tbody>
      </table>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        The final late-game refinement is a <strong className="text-ink">melee blocker</strong>: one heavily
        armoured settler with a shield standing in the corridor's inner doorway. Anything that survives the
        traps and arrows arrives wounded and gets held in place by the blocker while the firing line finishes
        it. Keep a second door behind the blocker forbidden during peace so daily traffic never uses the
        corridor, and un-forbid it only if the line collapses and you need a retreat path.
      </p>

      <div className="aged-border p-4 mb-8">
        <p className="font-serif text-base text-ink-light leading-relaxed">
          <strong>Maintenance Checklist:</strong> After each raid — re-arm every triggered trap, repair
          embrasure segments damaged by enemy archers, haul raider corpses and loot out of the corridor
          (debris can obstruct the pathing that makes the bait door attractive), and re-forbid any door a
          settler opened during the fight. A killbox is a machine; it only works when reset.
        </p>
      </div>

      {/* FAQ Section */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Frequently Asked Questions</h2>

      <div className="aged-border p-4 mb-4">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">How wide should a killbox corridor be in Going Medieval?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          One to two tiles wide. A 1-tile corridor forces raiders into single file so every spike trap triggers
          on a fresh target and your archers only ever face one enemy at the embrasure. Wider corridors let
          raiders spread out, bypass traps, and swamp your firing line. Keep the corridor 8–15 tiles long so
          enemies spend several seconds under fire crossing it.
        </p>
      </div>

      <div className="aged-border p-4 mb-4">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">Do spike traps need to be re-armed in Going Medieval?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          Yes. A spike trap triggers on the enemy that steps on it and then must be re-armed by a settler
          before it can trigger again. During long raids some traps will fire early and sit inert, which is
          why deep corridors stack multiple trap rows — later raiders still hit armed traps further down the
          channel. After each raid, check the corridor and queue re-arms before the next attack.
        </p>
      </div>

      <div className="aged-border p-4 mb-4">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">What is a bait door and why does my killbox need one?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          A bait door is a door left accessible (not forbidden) at the inner end of your killbox corridor.
          Raiders path toward the easiest reachable target inside your base; if the only open path runs
          through your trap corridor, they commit to it instead of attacking your walls. If every entrance
          is sealed, raiders switch to breaking down the nearest wall segment and your killbox never sees them.
        </p>
      </div>

      <div className="aged-border p-4 mb-4">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">Which weapon is best for killbox archers in Going Medieval?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          For raw sustained damage, the Longbow leads at roughly 4.07 DPS (22 damage every 5.4 seconds) and
          shreds unarmoured raiders. For armoured targets, the Heavy Crossbow at Good quality hits for 36
          with 92% armour penetration and 25m range — fewer shots, but each one lands at near-full power
          through plate. The strongest killboxes mix both: Longbow marksmen thin the wave, Heavy Crossbow
          marksmen delete the armoured survivors.
        </p>
      </div>

      <div className="aged-border p-4 mb-8">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">Why do raiders ignore my killbox and attack my walls?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          Three common causes: (1) every door is forbidden or blocked, so the corridor isn't a valid path —
          un-forbid the bait door; (2) the corridor route is longer or more obstructed than simply smashing a
          wall — widen the funnel approach and clear debris; (3) the raid is a special event type that behaves
          differently. Watch the pathing when a raid spawns and adjust your funnel walls to catch the most
          common approach angles.
        </p>
      </div>

      {/* Related Guides */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Related Guides</h2>
      <ul className="list-disc pl-6 mb-8 space-y-2 font-serif text-base text-ink-light">
        <li><a href="/raid-defense-strategy" className="text-vermillion hover:underline">Raid Defense Strategy — layered defences for every raid type</a></li>
        <li><a href="/archer-vs-crossbow" className="text-vermillion hover:underline">Archer vs Crossbow — the weapon data behind your firing line</a></li>
        <li><a href="/trap-placement" className="text-vermillion hover:underline">Trap Placement — where traps earn their keep</a></li>
        <li><a href="/double-wall-vs-single-wall" className="text-vermillion hover:underline">Double Wall vs Single Wall — perimeter hitpoint math</a></li>
        <li><a href="/best-defense-layout" className="text-vermillion hover:underline">Best Defense Layout — whole-base defensive planning</a></li>
        <li><a href="/wealth-scaling-raids" className="text-vermillion hover:underline">Wealth Scaling &amp; Raids — why your killbox must keep growing</a></li>
      </ul>

      <p className="font-serif text-sm text-ink-muted leading-relaxed mt-8 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
        Last updated: July 19, 2026. Weapon stats reflect in-game values (Going Medieval 0.22+);
        trap and pathing mechanics are described qualitatively. Game mechanics may change with future updates.
      </p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  );
}
