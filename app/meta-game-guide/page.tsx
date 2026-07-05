import Link from "next/link";

export const metadata = {
  title: "Going Medieval Meta Game Guide — Progression, Combat & Endgame",
  description: "Understand the Going Medieval meta game: colony milestones, research priorities, military vs economy balance, endgame threats, and the shift from survival to empire management.",
};

const colonyMilestones = [
  { milestone: "Day 1-3", phase: "Survival", primaryGoal: "Shelter, water, basic food", keyRisk: "Starvation, exposure", settlerCount: "3-4", militaryFocus: "None — hide from raids", economicFocus: "Foraging, wood cutting" },
  { milestone: "Day 4-10", phase: "Establishment", primaryGoal: "Wooden walls, farm plots, beds", keyRisk: "First raid, disease", settlerCount: "4-5", militaryFocus: "Bows for 1-2 settlers", economicFocus: "Farming, cooking, tailoring" },
  { milestone: "Day 10-20", phase: "Expansion", primaryGoal: "Stone walls, research bench, workshops", keyRisk: "Raider scaling, mood breaks", settlerCount: "5-6", militaryFocus: "Crossbows, armor for all", economicFocus: "Stone cutting, iron smelting, brewing" },
  { milestone: "Day 20-40", phase: "Fortification", primaryGoal: "Castle walls, gatehouse, multi-story keep", keyRisk: "Large raids, siege weapons", settlerCount: "6-8", militaryFocus: "Dedicated archer squad, melee defenders", economicFocus: "Steel production, advanced crafting" },
  { milestone: "Day 40+", phase: "Empire", primaryGoal: "Trade empire, max-tier keep, endgame threats", keyRisk: "Trebuchet raids, wealth-scaled attacks", settlerCount: "8-12", militaryFocus: "Full military with trebuchet counter", economicFocus: "Trade routes, surplus production, luxuries" },
];

const researchPriorities = [
  { tech: "Stone Cutting", tier: "Basic", researchCost: "Low", unlocks: "Stone blocks, stone walls", priority: "Essential — enables Phase 2 construction", impactOnMeta: "Unlocks the transition from wood to stone, the single biggest survival upgrade." },
  { tech: "Agriculture", tier: "Basic", researchCost: "Low", unlocks: "Crop rotation, irrigation", priority: "Essential — food security", impactOnMeta: "Eliminates winter starvation, the number one colony killer." },
  { tech: "Blacksmithing", tier: "Intermediate", researchCost: "Medium", unlocks: "Iron tools, iron weapons, armor", priority: "High — military and economic multiplier", impactOnMeta: "Iron tools double production speed. Iron weapons double combat effectiveness." },
  { tech: "Masonry", tier: "Intermediate", researchCost: "Medium", unlocks: "Reinforced stone, limestone walls", priority: "High — defensive multiplier", impactOnMeta: "Reinforced stone walls have 1200 HP. Raids cannot breach them without siege weapons." },
  { tech: "Crossbows", tier: "Advanced", researchCost: "High", unlocks: "Crossbow, steel bolts", priority: "Critical for endgame combat", impactOnMeta: "Crossbows are the meta weapon. They outclass bows at every range and pierce armor." },
  { tech: "Steel Production", tier: "Advanced", researchCost: "High", unlocks: "Steel, steel weapons, steel armor", priority: "Critical for late-game military", impactOnMeta: "Steel gear is the endgame standard. Without it, endgame raids are unwinnable." },
  { tech: "Trade and Diplomacy", tier: "Advanced", researchCost: "Medium", unlocks: "Trade routes, merchant contracts", priority: "Medium — economic accelerator", impactOnMeta: "Lets you convert surplus into scarce resources, accelerating military upgrades." },
  { tech: "Siege Countermeasures", tier: "Expert", researchCost: "Very High", unlocks: "Trebuchet, defensive fortifications", priority: "Essential for endgame survival", impactOnMeta: "Without counter-siege capability, late-game trebuchet raids destroy your castle." },
];

export default function MetaGameGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="chapter-heading font-display text-4xl mb-2">
        Meta Game Guide — Progression, Combat &amp; Endgame
      </h1>
      <p className="text-ink-faded text-lg mb-8 drop-cap">
        A Reddit user recently asked: "What does the meta game look like in Going Medieval?" The answer is that Going Medieval has two distinct phases that feel like entirely different games. The first phase is survival — scraping together food, hiding from raids, and praying your settlers make it through winter. The second phase is empire management — running a fortified castle with a trade economy, a standing army, and endgame threats that can level your walls in minutes. This guide explains the full meta progression and how to navigate the transition.
      </p>

      {/* Colony Milestones */}
      <h2 className="chapter-heading font-display text-2xl mt-10 mb-4">
        Colony Milestones — The Five Phases of Progression
      </h2>
      <p className="text-ink-light mb-4">
        Every successful Going Medieval colony passes through five milestones. Each milestone has a primary goal, a dominant risk, and a specific balance between military and economic investment. Knowing which phase you are in prevents the most common meta mistake: over-investing in military during the survival phase, or neglecting military during the expansion phase.
      </p>
      <div className="overflow-x-auto">
        <table className="parchment-table w-full text-sm">
          <thead>
            <tr>
              <th>Timeline</th>
              <th>Phase</th>
              <th>Primary Goal</th>
              <th>Key Risk</th>
              <th>Settlers</th>
              <th>Military Focus</th>
              <th>Economic Focus</th>
            </tr>
          </thead>
          <tbody>
            {colonyMilestones.map((m, i) => (
              <tr key={i}>
                <td className="font-display text-accent">{m.milestone}</td>
                <td>{m.phase}</td>
                <td>{m.primaryGoal}</td>
                <td>{m.keyRisk}</td>
                <td className="text-center">{m.settlerCount}</td>
                <td>{m.militaryFocus}</td>
                <td className="text-ink-light">{m.economicFocus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Research Priorities */}
      <h2 className="chapter-heading font-display text-2xl mt-10 mb-4">
        Research Priorities — The Tech Tree Meta
      </h2>
      <p className="text-ink-light mb-4">
        Research is the engine of the meta game. Every technology you unlock shifts the balance of power between your colony and the raiding parties. The meta research order prioritizes survival tech first (stone cutting, agriculture), then economic multipliers (blacksmithing, masonry), then military tech (crossbows, steel), and finally endgame tools (siege countermeasures, trade). Deviating from this order is possible but risky — skipping agriculture to rush crossbows means your settlers starve before they can fire a shot.
      </p>
      <div className="overflow-x-auto">
        <table className="parchment-table w-full text-sm">
          <thead>
            <tr>
              <th>Tech</th>
              <th>Tier</th>
              <th>Cost</th>
              <th>Unlocks</th>
              <th>Priority</th>
              <th>Meta Impact</th>
            </tr>
          </thead>
          <tbody>
            {researchPriorities.map((r, i) => (
              <tr key={i}>
                <td className="font-display text-accent">{r.tech}</td>
                <td>{r.tier}</td>
                <td className="text-center">{r.researchCost}</td>
                <td>{r.unlocks}</td>
                <td>{r.priority}</td>
                <td className="text-ink-light">{r.impactOnMeta}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Military vs Economy Balance */}
      <h2 className="chapter-heading font-display text-2xl mt-10 mb-4">
        Military vs Economy — The Core Meta Tension
      </h2>
      <p className="text-ink-light mb-4">
        The central tension of the Going Medieval meta is the allocation of settler labor between military preparation and economic development. Every settler assigned to training, patrolling, or standing guard is a settler not farming, smelting, or researching. The meta answer is timing: invest purely in economy during the survival phase, begin military investment during the expansion phase, and reach a 60/40 economy/military split by the fortification phase.
      </p>
      <p className="text-ink-light mb-4">
        The trap many players fall into is the "arms race spiral." Raids scale with colony wealth. If you build expensive walls and stockpile steel weapons, your wealth rises, and the next raid is larger. If you then build more military to counter the larger raid, your wealth rises again, and the next raid is even larger. The way out of the spiral is to cap visible wealth: store valuables underground, avoid unnecessary luxury construction, and keep your military efficient rather than bloated. A squad of 4 crossbowmen in towers is more effective than 12 unarmored archers on open ground.
      </p>
      <p className="text-ink-light mb-4">
        The meta military composition is crossbow-heavy with a small melee reserve. Crossbows outrange bows, pierce armor, and benefit from elevated positions (towers and walls). Melee fighters are only needed for gate defense and pursuit. The old meta of melee walls with archer support has been replaced by the current meta of crossbow towers with a melee rapid-response team. See our Archer vs Crossbow Guide for the full comparison.
      </p>

      {/* Endgame Threats */}
      <h2 className="chapter-heading font-display text-2xl mt-10 mb-4">
        Endgame Threats — What Comes After the Castle
      </h2>
      <p className="text-ink-light mb-4">
        Once your castle is built and your military is equipped, the endgame threats begin. These are not just bigger raids — they are mechanically different challenges that require specific countermeasures. The three major endgame threats are trebuchet sieges, wealth-scaled mega-raids, and multi-direction assaults.
      </p>
      <p className="text-ink-light mb-4">
        Trebuchet sieges are the most dangerous endgame threat. A trebuchet can destroy a stone wall tile in 2-3 hits, bypassing your gatehouse entirely. The only counter is your own trebuchet or a sortie of melee fighters to destroy the enemy siege engine before it breaks through. Build a trebuchet platform inside your keep and keep it loaded. See our Siege Weapons Guide for detailed counter-siege tactics.
      </p>
      <p className="text-ink-light mb-4">
        Wealth-scaled mega-raids scale with your total colony wealth. A colony with 10,000 wealth value can face raids of 30+ enemies. The key insight is that wealth includes stockpiled weapons and armor — not just structures. Store excess military gear in an underground vault to reduce visible wealth without reducing your actual military readiness. Our Wealth Scaling Raids Guide breaks down the exact thresholds.
      </p>
      <p className="text-ink-light mb-4">
        Multi-direction assaults split the enemy force and attack from two or more sides simultaneously. This defeats the single-gatehouse defense because your archers cannot cover all directions at once. The counter is a symmetric castle with towers on all four corners and a mobile reserve force that can reposition quickly. Never leave any curtain wall section undefended, even if it has never been attacked before.
      </p>

      {/* The Shift to Empire Management */}
      <h2 className="chapter-heading font-display text-2xl mt-10 mb-4">
        The Shift from Survival to Empire Management
      </h2>
      <p className="text-ink-light mb-4">
        Around day 30-40, the game fundamentally changes. You are no longer fighting to survive — you are managing an empire. The challenges shift from "do we have enough food" to "how do we optimize production chains, manage settler schedules, and maintain morale across a large colony." This is where many players quit, because the gameplay loop changes entirely.
      </p>
      <p className="text-ink-light mb-4">
        Empire management requires systems thinking. You need production chains that convert raw materials to finished goods without bottlenecks. You need work priority schedules that keep settlers productive without burning them out. You need a trade economy that converts surplus into scarce resources. And you need a military doctrine that scales with raid difficulty without consuming your entire labor force.
      </p>
      <p className="text-ink-light mb-4">
        The meta for empire management is specialization. Assign each settler a primary role — farmer, smith, cook, archer, builder — and minimize context switching. Use the work priorities system to create clear job hierarchies. A colony where every settler does everything is 40% less efficient than a colony with defined roles. See our Work Priorities Setup Guide and Settler Job Assignment Guide for detailed role templates.
      </p>
      <p className="text-ink-light mb-4">
        The final meta challenge is pacing. Going Medieval has no hard win condition — the endgame is open-ended. Set your own goals: a full castle, a trade empire, a population of 15, or simply surviving year five. The game rewards long-term planning and punishes short-term greed. The players who enjoy the endgame most are those who treat it as a medieval city-builder rather than a survival game.
      </p>

      {/* FAQ */}
      <h2 className="chapter-heading font-display text-2xl mt-10 mb-4">FAQ</h2>

      <div className="bg-parchment-light rounded-lg p-5 mb-4">
        <h3 className="font-display text-accent text-lg mb-2">What is the strongest meta build for endgame combat?</h3>
        <p className="text-ink-light">
          The current meta is a crossbow-heavy defense force stationed in corner towers, supported by 2-3 melee fighters with steel armor stationed at the gatehouse. Crossbows benefit from elevation (towers multiply their range and damage), pierce armor, and require minimal micromanagement. A squad of 6 crossbowmen in four towers can defeat a 30-enemy raid without melee engagement. See our Best Weapons Ranked Guide for the full tier list.
        </p>
      </div>

      <div className="bg-parchment-light rounded-lg p-5 mb-4">
        <h3 className="font-display text-accent text-lg mb-2">Does raid difficulty scale with wealth or with time?</h3>
        <p className="text-ink-light">
          Both, but wealth is the dominant factor. Raids scale primarily with total colony wealth (structures, stockpiles, and equipment) and secondarily with elapsed time. This means a colony that stockpiles steel weapons and builds luxury rooms will face larger raids sooner than a minimalist colony at the same time stamp. The meta implication is that visible wealth should be managed — store valuables underground and avoid unnecessary construction. See our Wealth Scaling Raids Guide for the exact numbers.
        </p>
      </div>

      <div className="bg-parchment-light rounded-lg p-5 mb-4">
        <h3 className="font-display text-accent text-lg mb-2">Is there an actual endgame or win condition?</h3>
        <p className="text-ink-light">
          Going Medieval has no hard win condition. The endgame is open-ended sandbox play where you set your own goals: a fully reinforced castle, a population milestone, a self-sustaining trade empire, or simply surviving to year five and beyond. The meta challenge of the endgame is not "winning" but maintaining efficiency and morale across a large, complex colony while fending off escalating raids. Players who enjoy the endgame treat it as a medieval city-builder with a military dimension.
        </p>
      </div>

      {/* Related Guides */}
      <aside className="border-l-4 border-accent pl-4 mt-10">
        <h3 className="font-display text-lg text-ink mb-2">Related Guides</h3>
        <ul className="space-y-1">
          <li><Link href="/beginners" className="text-accent hover:underline">Beginner&apos;s Guide</Link></li>
          <li><Link href="/research" className="text-accent hover:underline">Research Tech Tree</Link></li>
          <li><Link href="/endgame-content" className="text-accent hover:underline">Endgame Content</Link></li>
          <li><Link href="/wealth-scaling-raids" className="text-accent hover:underline">Wealth Scaling Raids</Link></li>
          <li><Link href="/best-weapons-ranked" className="text-accent hover:underline">Best Weapons Ranked</Link></li>
          <li><Link href="/archer-vs-crossbow" className="text-accent hover:underline">Archer vs Crossbow Comparison</Link></li>
          <li><Link href="/siege-weapons-guide" className="text-accent hover:underline">Siege Weapons Guide</Link></li>
          <li><Link href="/work-priorities-setup" className="text-accent hover:underline">Work Priorities Setup</Link></li>
          <li><Link href="/production-chain-optimization" className="text-accent hover:underline">Production Chain Optimization</Link></li>
        </ul>
      </aside>

      <p className="text-ink-faded text-sm mt-10">Last updated: July 5, 2026</p>
    </div>
  );
}
