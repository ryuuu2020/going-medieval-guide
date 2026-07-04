import Link from "next/link";

export const metadata = {
  title: "Going Medieval Renovation Guide — How to Change Wall & Floor Materials Without Collapse",
  description: "Learn how to safely upgrade walls and floors in Going Medieval without causing structural collapse. Material swap technique, stability system, and step-by-step renovation methods.",
};

const wallMaterials = [
  { material: "Wood Wall", stabilityValue: "Low (contributes 20 per tile)", hitPoints: "250", insulation: "Poor (heat loss 1.5x)", bestUse: "Temporary walls, early game only", upgradeFrom: "N/A — starting material", upgradeTo: "Clay Brick Wall" },
  { material: "Clay Brick Wall", stabilityValue: "Medium (contributes 40 per tile)", hitPoints: "500", insulation: "Average (standard heat loss)", bestUse: "Quick early upgrade when stone is scarce", upgradeFrom: "Wood Wall", upgradeTo: "Stone Wall" },
  { material: "Stone Wall", stabilityValue: "High (contributes 60 per tile)", hitPoints: "600", insulation: "Good (heat loss 0.8x)", bestUse: "Main settlement walls, mid-game standard", upgradeFrom: "Clay Brick Wall", upgradeTo: "Limestone Wall" },
  { material: "Limestone Wall", stabilityValue: "Very High (contributes 80 per tile)", hitPoints: "800", insulation: "Excellent (heat loss 0.6x)", bestUse: "Premium defense and insulation", upgradeFrom: "Stone Wall", upgradeTo: "Reinforced Stone" },
  { material: "Reinforced Stone", stabilityValue: "Maximum (contributes 100 per tile)", hitPoints: "1200", insulation: "Excellent (heat loss 0.5x)", bestUse: "Keep walls, vault, critical defense", upgradeFrom: "Limestone Wall", upgradeTo: "N/A — max tier" },
  { material: "Iron Reinforced Wall", stabilityValue: "Maximum+ (contributes 120 per tile)", hitPoints: "1500", insulation: "Poor (metal conducts heat)", bestUse: "Gatehouse, military structures only", upgradeFrom: "Reinforced Stone + Iron", upgradeTo: "N/A — elite tier" },
];

const floorMaterials = [
  { material: "Thatch Floor", stabilityContribution: "None (0)", insulation: "Poor (cold transfers freely)", buildCost: "5 Thatch per tile", bestUse: "Temporary flooring, animal pens", notes: "Does not contribute to structural stability. Replace ASAP." },
  { material: "Wood Floor", stabilityContribution: "Low (5 per tile)", insulation: "Average (standard)", buildCost: "8 Wood per tile", bestUse: "Early game interiors, workshops", notes: "Easy to build but provides almost no structural support." },
  { material: "Clay Floor", stabilityContribution: "Medium (15 per tile)", insulation: "Good (retains heat)", buildCost: "6 Clay per tile", bestUse: "Mid-game living quarters", notes: "Good balance of cost and stability. Clay is abundant." },
  { material: "Stone Floor", stabilityContribution: "High (25 per tile)", insulation: "Excellent (heat retention)", buildCost: "10 Stone per tile", bestUse: "Keep interiors, storage rooms", notes: "Best overall flooring. Expensive but worth it for stability." },
  { material: "Flagstone (Premium)", stabilityContribution: "Very High (35 per tile)", insulation: "Excellent (luxury grade)", buildCost: "12 Stone + 4 Iron per tile", bestUse: "Throne room, great hall, ceremonial spaces", notes: "Purely aesthetic upgrade. No mechanical advantage over Stone Floor." },
];

const renovationSteps = [
  { step: "Step 1 — Check Stability Overlay", action: "Press F7 to enable the stability overlay. Identify all load-bearing walls (red/orange) and all supported floors (green/blue).", whyItMatters: "Removing a non-load-bearing wall is safe. Removing a load-bearing wall collapses everything above it. The overlay tells you which is which." },
  { step: "Step 2 — Build Temporary Supports", action: "Place support beams or wooden pillars adjacent to the wall section you plan to replace. Build enough supports to carry the full load of the section above.", whyItMatters: "Temporary supports transfer the structural load away from the wall you are about to remove. Without them, the moment the wall is gone, gravity takes over." },
  { step: "Step 3 — Remove One Wall Section", action: "Designate a single wall segment (1 tile) for deconstruction. Wait for it to be removed. Watch the stability overlay update.", whyItMatters: "Never remove more than 1 tile at a time. If the temporary supports are inadequate, a 1-tile collapse is repairable. A 5-tile collapse is not." },
  { step: "Step 4 — Immediately Place New Wall", action: "Place the new wall of the desired material in the exact same tile. The new wall inherits the structural load from the temporary support.", whyItMatters: "There is a brief window where the structural load is carried by the temporary support. Place the new wall before removing the next section." },
  { step: "Step 5 — Remove Temporary Support", action: "Once the new wall is fully built and verified as load-bearing in the overlay, remove the temporary support.", whyItMatters: "The temporary support is no longer needed and can be reused for the next wall section. Leaving it in place wastes building materials." },
  { step: "Step 6 — Repeat Tile by Tile", action: "Repeat steps 3-5 for each wall tile in the renovation zone. Never rush ahead.", whyItMatters: "Patience prevents collapse. A full wall renovation takes game-days, but a collapsed wall costs weeks of recovery." },
];

export default function RenovationGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="chapter-heading font-display text-4xl mb-2">
        Renovation Guide
      </h1>
      <p className="text-ink-faded text-lg mb-8 drop-cap">
        Upgrading your walls and floors in Going Medieval is one of the most satisfying progression milestones — and one of the most dangerous. The stability system means you cannot simply swap a wood wall for a stone wall. Remove the wrong wall and your entire keep collapses into a pile of rubble, killing everyone inside. This guide teaches the safe renovation method used by veteran players to upgrade every wall and floor in a multi-story castle without a single collapse.
      </p>

      {/* Why Walls Collapse */}
      <h2 className="chapter-heading font-display text-2xl mt-10 mb-4">
        Why Walls Collapse When Changing Materials
      </h2>
      <p className="text-ink-light mb-4">
        Going Medieval uses a structural stability system where every wall and floor tile contributes to or depends on structural support. Walls support the floors and walls above them. Floors transfer weight to the walls at their edges. When you remove a wall, everything above it loses its support and falls — unless there is another support nearby.
      </p>
      <p className="text-ink-light mb-4">
        The game does not have a "replace material" button. You must demolish the old wall and build the new wall manually. During the brief moment when the old wall is gone and the new wall is not yet built, the structural load transfers to... nothing. That is when collapse happens. The solution is to build a temporary support before removing the old wall, so the load always has somewhere to go.
      </p>
      <p className="text-ink-light mb-4">
        The F7 key toggles the stability overlay. Use it constantly during renovation. Red walls are under maximum load (most likely to collapse if removed). Green walls are well-supported. Blue floors are stable. Yellow floors are at risk. Never remove a wall or floor without checking F7 first.
      </p>

      {/* Step-by-Step Safe Renovation */}
      <h2 className="chapter-heading font-display text-2xl mt-10 mb-4">
        Step-by-Step Safe Renovation Method
      </h2>
      <p className="text-ink-light mb-4">
        The "temporary support" method is the only safe way to renovate. It works for walls and floors at any height. Follow these steps for every single tile you replace.
      </p>
      <div className="overflow-x-auto">
        <table className="parchment-table w-full text-sm">
          <thead>
            <tr>
              <th>Step</th>
              <th>Action</th>
              <th>Why It Matters</th>
            </tr>
          </thead>
          <tbody>
            {renovationSteps.map((s, i) => (
              <tr key={i}>
                <td className="font-display text-accent">{s.step}</td>
                <td>{s.action}</td>
                <td className="text-ink-light">{s.whyItMatters}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Wall Material Comparison */}
      <h2 className="chapter-heading font-display text-2xl mt-10 mb-4">
        Wall Material Comparison
      </h2>
      <p className="text-ink-light mb-4">
        Each wall material tier is strictly better than the previous one. There is no reason to use Wood Walls in the late game except as temporary supports during renovation. Use this table to decide which material to upgrade to at each stage of your colony.
      </p>
      <div className="overflow-x-auto">
        <table className="parchment-table w-full text-sm">
          <thead>
            <tr>
              <th>Material</th>
              <th>Stability</th>
              <th>HP</th>
              <th>Insulation</th>
              <th>Best Use</th>
              <th>Upgrades From</th>
              <th>Upgrades To</th>
            </tr>
          </thead>
          <tbody>
            {wallMaterials.map((w, i) => (
              <tr key={i}>
                <td className="font-display text-accent">{w.material}</td>
                <td>{w.stabilityValue}</td>
                <td className="text-center">{w.hitPoints}</td>
                <td>{w.insulation}</td>
                <td>{w.bestUse}</td>
                <td>{w.upgradeFrom}</td>
                <td>{w.upgradeTo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Floor Material Comparison */}
      <h2 className="chapter-heading font-display text-2xl mt-10 mb-4">
        Floor Material Comparison
      </h2>
      <p className="text-ink-light mb-4">
        Floors contribute to structural stability too. A stone floor helps support the walls above it. A thatch floor contributes nothing. When renovating floors, the same temporary support rules apply — but floor renovation is safer than wall renovation because floors rarely carry vertical loads.
      </p>
      <div className="overflow-x-auto">
        <table className="parchment-table w-full text-sm">
          <thead>
            <tr>
              <th>Material</th>
              <th>Stability Contribution</th>
              <th>Insulation</th>
              <th>Cost/Tile</th>
              <th>Best Use</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {floorMaterials.map((f, i) => (
              <tr key={i}>
                <td className="font-display text-accent">{f.material}</td>
                <td>{f.stabilityContribution}</td>
                <td>{f.insulation}</td>
                <td>{f.buildCost}</td>
                <td>{f.bestUse}</td>
                <td className="text-ink-light">{f.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Support Pillar Technique */}
      <h2 className="chapter-heading font-display text-2xl mt-10 mb-4">
        The Support Pillar Technique for Multi-Story Buildings
      </h2>
      <p className="text-ink-light mb-4">
        Multi-story buildings have a stability problem: the ground-floor walls carry the weight of every floor above them. Upgrading the ground-floor walls is therefore the riskiest renovation in the entire game. The support pillar technique solves this.
      </p>
      <p className="text-ink-light mb-4">
        Build a wooden pillar (or stone pillar in the late game) directly adjacent to the ground-floor wall, on both sides if possible. These pillars carry the structural load independently of the wall. Once the pillars are in place, you can safely remove and replace the wall tile by tile. The pillars stay in place permanently — they are not "temporary" in the long term, they become part of the building's structural system.
      </p>
      <p className="text-ink-light mb-4">
        For tall keeps (3+ stories), place support pillars at every corner and at 5-tile intervals along long walls. This distributes the load across multiple support points. A 20-tile wall with 4 support pillars (at 0, 5, 10, 15, 20 tiles) can be fully renovated without any risk of collapse.
      </p>

      {/* Underground Renovation */}
      <h2 className="chapter-heading font-display text-2xl mt-10 mb-4">
        Underground Renovation — Special Considerations
      </h2>
      <p className="text-ink-light mb-4">
        Underground rooms use the earth itself as structural support. The walls of an underground room are the mine shaft walls — they cannot be removed without causing a cave-in. However, you can upgrade the floor material and add interior partition walls safely.
      </p>
      <p className="text-ink-light mb-4">
        The main risk in underground renovation is accidentally designating the outer wall for deconstruction. Always double-check which wall you are clicking. The outer wall is the one bordering unexcavated earth. Never remove it. Only the interior partition walls (the ones you placed yourself) are safe to renovate.
      </p>
      <p className="text-ink-light mb-4">
        Underground floors have a special consideration: water seepage. Clay and stone floors block seepage. Thatch and wood floors do not. If your underground storage room has dampness problems, the fix is always to upgrade the floor material to clay or stone. This also improves the stability of any upper levels built directly above the underground room.
      </p>

      {/* Common Renovation Disasters */}
      <h2 className="chapter-heading font-display text-2xl mt-10 mb-4">
        Common Renovation Disasters and How to Avoid Them
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-ink-light mb-8">
        <li><strong>Removing all walls in a room simultaneously.</strong> This is the most common cause of total base collapse. Settlers sometimes autonomously deconstruct walls if you set a zone to "clear." Always clear deconstruction orders before they spread to load-bearing walls. Remove one tile at a time, manually.</li>
        <li><strong>Upgrading floors before walls.</strong> Floor renovation is safer than wall renovation, but upgraded floors on top of wood walls are wasted investment. Prioritize wall upgrades first. The walls determine your structural limits. Upgrade floors only after the walls are done.</li>
        <li><strong>Forgetting to check the stability overlay after each replacement.</strong> The overlay updates in real time. After placing each new wall tile, press F7 and verify the new wall is showing as load-bearing (red or orange). If it shows as unsupported (gray), something went wrong — pause and investigate before continuing.</li>
        <li><strong>Renovating during a raid.</strong> Settlers cannot path properly during a raid. If you try to renovate while enemies are attacking, your settlers may get stuck, the deconstruction may pause halfway, and the temporary support may be destroyed by enemy fire. Only renovate during peacetime.</li>
        <li><strong>Using the wrong temporary support material.</strong> Wooden supports are fine for upgrading to stone. For upgrading to reinforced stone or limestone, use stone or iron supports. A wooden support under a 3-story load will buckle and collapse before you finish placing the new wall. Match your support material to the load.</li>
      </ul>

      {/* FAQ */}
      <h2 className="chapter-heading font-display text-2xl mt-10 mb-4">FAQ</h2>

      <div className="bg-parchment-light rounded-lg p-5 mb-4">
        <h3 className="font-display text-accent text-lg mb-2">Can I skip temporary supports for single-tile wall replacements?</h3>
        <p className="text-ink-light">
          No. Even a single tile carries structural load. The game does not have "minor" structural elements — every wall tile matters. A single removed tile can propagate a collapse through an entire wall if that tile was the only support for the section above. Always use temporary supports, even for 1-tile replacements. The only exception is ground-level walls with no structure above them (a freestanding wall with open sky above).
        </p>
      </div>

      <div className="bg-parchment-light rounded-lg p-5 mb-4">
        <h3 className="font-display text-accent text-lg mb-2">How do I know if a wall is load-bearing before removing it?</h3>
        <p className="text-ink-light">
          Press F7. Red walls are under maximum load — they are definitely load-bearing. Orange walls are under high load. Yellow walls are under moderate load. Green walls are under low load and may be safe to remove (but still use a support). Gray walls are not currently supporting anything and are safe to remove without supports. However, the overlay shows current state — removing a green wall may turn walls above it red. Always place supports preemptively.
        </p>
      </div>

      <div className="bg-parchment-light rounded-lg p-5 mb-4">
        <h3 className="font-display text-accent text-lg mb-2">What is the most efficient renovation order for a full castle?</h3>
        <p className="text-ink-light">
          Phase 1: Upgrade all ground-floor walls to Stone (using support pillars). Phase 2: Upgrade all upper-floor walls to Stone. Phase 3: Upgrade all floors to Stone or Clay. Phase 4: Upgrade ground-floor walls to Limestone or Reinforced Stone. Phase 5: Upgrade upper floors to Limestone. Phase 6 (endgame): Upgrade keep walls to Reinforced Stone and Iron Reinforced. This order ensures you never have a structural mismatch where a lower floor is weaker than the floor above it.
        </p>
      </div>

      {/* Related Guides */}
      <aside className="border-l-4 border-accent pl-4 mt-10">
        <h3 className="font-display text-lg text-ink mb-2">Related Guides</h3>
        <ul className="space-y-1">
          <li><Link href="/castle-building-guide" className="text-accent hover:underline">Castle Building Guide</Link></li>
          <li><Link href="/structural-mechanics" className="text-accent hover:underline">Structural Mechanics &amp; Stability</Link></li>
          <li><Link href="/defense" className="text-accent hover:underline">Complete Defense Guide</Link></li>
          <li><Link href="/best-defense-layout" className="text-accent hover:underline">Best Defense Layouts</Link></li>
          <li><Link href="/killbox-design" className="text-accent hover:underline">Killbox Design &amp; Trap Placement</Link></li>
          <li><Link href="/entrance-design" className="text-accent hover:underline">Entrance &amp; Gatehouse Design</Link></li>
        </ul>
      </aside>

      <p className="text-ink-faded text-sm mt-10">Last updated: July 4, 2026. Renovation mechanics verified against Going Medieval experimental branch. Community strategies sourced from r/goingmedieval.</p>
    </div>
  );
}
