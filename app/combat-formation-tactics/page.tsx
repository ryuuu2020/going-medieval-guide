import Link from "next/link";

export const metadata = {
  title: "Going Medieval Combat Formation Tactics — Archer Lines, Melee Walls & Kill Zone Design | Going Medieval Guide",
  description: "Master combat formations in Going Medieval. Learn archer line setups, melee wall positioning, flanking maneuvers, and kill zone design for maximum defensive efficiency.",
};

const formations = [
  { formation: "Archer Line (Elevated)", strength: "Maximum ranged DPS, height bonus, clear sight lines", weakness: "Vulnerable to flanking, no melee protection", bestFor: "Open field defense, wall-top defense", setup: "Line 6-8 archers on a raised platform 3 tiles high. Space them 1 tile apart for full coverage. Place a half-wall in front for cover." },
  { formation: "V-Shape Ambush", strength: "Crossfire kills anything in the center, no escape", weakness: "Requires pre-built flanking positions, vulnerable at the open end", bestFor: "Gate defense, canyon traps", setup: "Two archer squads positioned at 45-degree angles on either side of the expected enemy path. Melee fighters close the V at the base once enemies are inside." },
  { formation: "Melee Wall (3-Deep)", strength: "Unbreakable front line, protects archers behind", weakness: "Slow to reposition, weak to explosives", bestFor: "Gate defense, bridge defense, narrow corridors", setup: "Three rows: Row 1 (shield + sword), Row 2 (polearm/long reach), Row 3 (reserve). Rotate wounded Row 1 fighters to Row 3 for healing mid-combat." },
  { formation: "Checkerboard Defense", strength: "Flexible, covers wide area, mutual support", weakness: "Requires high settler count (8-plus), individual squads can be overwhelmed", bestFor: "Multi-angle raids, open settlement defense", setup: "Place 4 squads of 2 settlers each in a checkerboard pattern with 4-5 tiles between squads. Each squad covers the gaps between adjacent squads. Archers in the back row." },
  { formation: "Kill Box Funnel", strength: "Maximum enemy concentration, all firepower hits one point", weakness: "Catastrophic if the funnel wall breaks", bestFor: "Endgame defense, siege engineer raids", setup: "Build a narrowing corridor of stone walls leading to your gate. The corridor starts 8 tiles wide and narrows to 2 tiles. Place archer towers on both sides of the narrow point. Traps fill the corridor floor." },
];

const positioningRules = [
  { rule: "Always fight from high ground", explanation: "Height advantage provides roughly 20 percent range increase and damage bonus. Even a 1-tile elevation difference matters. Build all defensive positions on raised platforms.", impact: "High — the single most impactful positioning rule" },
  { rule: "Never put melee behind archers", explanation: "Archers in front means they get swarmed and cannot fire. Melee in front means archers have a protected firing line. This sounds obvious but players do it wrong constantly during the stress of a raid.", impact: "Critical — reversed formation loses battles instantly" },
  { rule: "Leave 1-tile gaps between archers", explanation: "Archers packed shoulder-to-shoulder block each other firing arcs. A 1-tile gap gives each archer a wide cone of fire without friendly fire risk.", impact: "Medium — packed archers lose roughly 30 percent fire coverage" },
  { rule: "Flank at 90 degrees minimum", explanation: "A flanking attack needs to hit the enemy side or rear, not just slightly off-center. Position flanking squads at a true 90-degree angle from your main line for maximum effect.", impact: "High — partial flanks waste the positioning advantage" },
  { rule: "Reserve one fast melee settler", explanation: "Keep one lightly-armored, fast-moving melee fighter out of the main formation. Their job is to chase down fleeing enemies, intercept sappers who broke through, and plug unexpected gaps.", impact: "Medium — saves colonies from unexpected breakthroughs" },
];

const killZoneDesigns = [
  { design: "Gate Funnel", layout: "Narrowing stone corridor ending at reinforced gate", trapTypes: "Spike traps, caltrops", archerPositions: "4 towers (2 per side) overlooking the funnel", effectiveness: "Very High — forces single-file entry into concentrated fire" },
  { design: "Crossfire Courtyard", layout: "Open courtyard between outer and inner walls", trapTypes: "Pit traps (center), fire traps (edges)", archerPositions: "Archers on both wall tops firing inward", effectiveness: "High — enemies caught in 360-degree fire, no cover" },
  { design: "Bridge Bottleneck", layout: "Single-tile bridge over a moat or ravine", trapTypes: "Collapsing floor trap (center of bridge)", archerPositions: "Archer towers at both ends of the bridge", effectiveness: "Maximum — one-tile-wide choke point is nearly impenetrable" },
];

export default function CombatFormationTacticsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="chapter-heading font-display text-4xl mb-2">
        Combat Formation Tactics
      </h1>
      <p className="text-ink-faded text-lg mb-8 drop-cap">
        Building a stone wall and placing archers on top is not a combat formation — it is a suggestion. Real defensive tactics in Going Medieval require deliberate positioning, coordinated squad movement, and terrain exploitation. A well-formed defense of 6 settlers can defeat raids that would overwhelm a disorganized garrison of 12. This guide covers every formation, positioning rule, and kill zone design that veteran players use to turn raids into target practice.
      </p>

      {/* Core Formations */}
      <h2 className="chapter-heading font-display text-2xl mt-10 mb-4">
        Core Combat Formations — When and How to Use Each
      </h2>
      <p className="text-ink-light mb-4">
        Formations are not one-size-fits-all. The right formation depends on terrain, enemy faction, your settler count, and whether you are defending a gate or fighting in open terrain. Switch formations mid-battle as the situation changes.
      </p>
      <div className="overflow-x-auto mb-8">
        <table className="parchment-table w-full text-left text-sm">
          <thead>
            <tr className="border-b border-ink-faded/20">
              <th className="py-2 px-3 font-display text-accent">Formation</th>
              <th className="py-2 px-3 font-display text-accent">Strength</th>
              <th className="py-2 px-3 font-display text-accent">Weakness</th>
              <th className="py-2 px-3 font-display text-accent">Best For</th>
              <th className="py-2 px-3 font-display text-accent">Setup</th>
            </tr>
          </thead>
          <tbody>
            {formations.map((f, i) => (
              <tr key={i} className="border-b border-ink-faded/10">
                <td className="py-2 px-3 font-display text-accent">{f.formation}</td>
                <td className="py-2 px-3">{f.strength}</td>
                <td className="py-2 px-3">{f.weakness}</td>
                <td className="py-2 px-3">{f.bestFor}</td>
                <td className="py-2 px-3">{f.setup}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Positioning Rules */}
      <h2 className="chapter-heading font-display text-2xl mt-10 mb-4">
        Positioning Rules — Non-Negotiable Tactical Principles
      </h2>
      <p className="text-ink-light mb-4">
        These five positioning rules separate successful defenses from catastrophic losses. Break any of them and you are fighting with a self-imposed handicap. Follow all five and even outnumbered fights become winnable.
      </p>
      <div className="overflow-x-auto mb-8">
        <table className="parchment-table w-full text-left text-sm">
          <thead>
            <tr className="border-b border-ink-faded/20">
              <th className="py-2 px-3 font-display text-accent">Rule</th>
              <th className="py-2 px-3 font-display text-accent">Explanation</th>
              <th className="py-2 px-3 font-display text-accent">Impact</th>
            </tr>
          </thead>
          <tbody>
            {positioningRules.map((r, i) => (
              <tr key={i} className="border-b border-ink-faded/10">
                <td className="py-2 px-3 font-display text-accent">{r.rule}</td>
                <td className="py-2 px-3">{r.explanation}</td>
                <td className="py-2 px-3">{r.impact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Kill Zone Designs */}
      <h2 className="chapter-heading font-display text-2xl mt-10 mb-4">
        Kill Zone Designs — Where Enemies Go to Die
      </h2>
      <p className="text-ink-light mb-4">
        A kill zone is a deliberately designed area where enemies are forced into a disadvantageous position while all your firepower converges on them. The three designs below represent the most effective kill zone archetypes used in the community. Each can be adapted to your specific terrain.
      </p>
      <div className="overflow-x-auto mb-8">
        <table className="parchment-table w-full text-left text-sm">
          <thead>
            <tr className="border-b border-ink-faded/20">
              <th className="py-2 px-3 font-display text-accent">Design</th>
              <th className="py-2 px-3 font-display text-accent">Layout</th>
              <th className="py-2 px-3 font-display text-accent">Traps</th>
              <th className="py-2 px-3 font-display text-accent">Archer Positions</th>
              <th className="py-2 px-3 font-display text-accent">Effectiveness</th>
            </tr>
          </thead>
          <tbody>
            {killZoneDesigns.map((k, i) => (
              <tr key={i} className="border-b border-ink-faded/10">
                <td className="py-2 px-3 font-display text-accent">{k.design}</td>
                <td className="py-2 px-3">{k.layout}</td>
                <td className="py-2 px-3">{k.trapTypes}</td>
                <td className="py-2 px-3">{k.archerPositions}</td>
                <td className="py-2 px-3">{k.effectiveness}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Squad Control */}
      <h2 className="chapter-heading font-display text-2xl mt-10 mb-4">
        Squad Control During Battle
      </h2>
      <p className="text-ink-light mb-4">
        The tactical interface in Going Medieval requires manual control — there is no auto-formation or group AI. Managing multiple squads during a chaotic raid is the hardest skill to master. Here is the workflow used by experienced players:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-ink-light mb-8">
        <li><strong>Pre-assign combat groups.</strong> Before the raid, draft settlers into numbered squads. Squad 1: archers (hold position on wall). Squad 2: melee (hold gate area). Squad 3: reserve (center courtyard). Use the draft system to toggle combat mode for entire squads at once.</li>
        <li><strong>Pause on raid alert.</strong> Immediately pause the game when the raid notification appears. This gives you unlimited time to position every settler perfectly. Unpause only when all squads are in formation.</li>
        <li><strong>Focus fire manually.</strong> Select all archers and right-click one priority target (commander, berserker, sapper). When that target dies, select the next priority. Do not let archers auto-target — they waste shots on shield bearers.</li>
        <li><strong>Rotate wounded melee.</strong> When a front-line melee settler drops below 50 percent HP, select them and move them to the reserve position behind the line. Move a fresh reserve fighter forward to fill the gap. This rotation keeps your wall intact.</li>
        <li><strong>Unpause and micro-manage.</strong> Play at normal speed during combat. Fast-forward causes you to miss wounded settlers, flanking enemies, and siege weapon reload windows. Normal speed gives you time to react to everything.</li>
      </ol>

      {/* FAQ */}
      <h2 className="chapter-heading font-display text-2xl mt-10 mb-4">FAQ</h2>

      <div className="bg-parchment-light rounded-lg p-5 mb-4">
        <h3 className="font-display text-accent text-lg mb-2">How many settlers do I need for an effective combat formation?</h3>
        <p className="text-ink-light">
          A minimum combat formation requires 4 settlers: 2 archers on elevated positions and 2 melee fighters at the gate or choke point. This handles early-game bandit raids reliably. For mid-game marauder raids, aim for 6-8 settlers (4 archers, 3 melee, 1 reserve). Late-game siege engineer raids demand 10-plus combat-ready settlers with at least 2 dedicated siege weapon operators. Prioritize armor and weapon quality over raw settler count — 6 well-equipped settlers outperform 10 poorly-equipped ones.
        </p>
      </div>

      <div className="bg-parchment-light rounded-lg p-5 mb-4">
        <h3 className="font-display text-accent text-lg mb-2">Should I let enemies come to me or sally out to meet them?</h3>
        <p className="text-ink-light">
          Always let enemies come to you. The defensive advantage of walls, elevation, and prepared positions is too large to give up. The only exception is when enemies bring siege weapons — in that case, you may need to send a fast melee squad to destroy the siege equipment before it sets up. But even then, keep your archers on the walls providing covering fire. Sallying out with your entire force is almost always a mistake that throws away your defensive advantage.
        </p>
      </div>

      <div className="bg-parchment-light rounded-lg p-5 mb-4">
        <h3 className="font-display text-accent text-lg mb-2">How do I handle raids that attack from multiple directions?</h3>
        <p className="text-ink-light">
          Multi-direction raids are the hardest combat scenario. The game will occasionally send two raider groups from opposite sides of the map. Your response depends on settlement design: if you have a fully walled perimeter with defensive positions on all sides, split your forces proportionally to each threat. If you only have one reinforced wall, abandon the undefended side — move all settlers and valuables to the fortified area and fight a defensive battle there. Do not try to hold two fronts with an under-strength force. Better to lose some outer buildings than your entire colony.
        </p>
      </div>

      <aside className="border-l-4 border-accent pl-4 mt-10">
        <h3 className="font-display text-lg text-ink mb-2">Related Guides</h3>
        <ul className="space-y-1">
          <li><Link href="/defense" className="text-accent hover:underline">Complete Defense Guide</Link></li>
          <li><Link href="/enemy-types-guide" className="text-accent hover:underline">Enemy Types Guide</Link></li>
          <li><Link href="/combat-positioning" className="text-accent hover:underline">Combat Positioning</Link></li>
          <li><Link href="/killbox-design" className="text-accent hover:underline">Killbox Design</Link></li>
          <li><Link href="/trap-placement" className="text-accent hover:underline">Trap Placement Guide</Link></li>
        </ul>
      </aside>

      <p className="text-ink-faded text-sm mt-10">Last updated: July 3, 2026. Formation tactics sourced from community combat testing and r/goingmedieval defensive strategy discussions.</p>
    </div>
  );
}
