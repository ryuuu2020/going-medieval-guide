import Link from "next/link";

export const metadata = {
  title: "Going Medieval Wall Upgrade Guide — How to Replace Walls Without Collapse | Going Medieval Guide",
  description: "Step-by-step guide to upgrading walls in Going Medieval without structural collapse. Learn the safe method, temporary supports, upgrade order, and multi-floor considerations.",
};

const upgradeSteps = [
  { step: 1, action: "Check Stability (F7)", detail: "Press F7 to view the stability overlay. Green is stable, yellow is borderline, red will collapse if anything changes. Identify all walls that are load-bearing (supporting floors or roofs above).", risk: "None" },
  { step: 2, action: "Place Temporary Supports", detail: "Build Wood Beams or Stone Pillars adjacent to the wall you plan to replace. Supports must touch the ground and the ceiling above the wall. Without supports, removing a load-bearing wall causes instant collapse.", risk: "Low" },
  { step: 3, action: "Deconstruct One Wall Segment", detail: "Designate ONE wall segment for deconstruction. Never deconstruct multiple connected segments simultaneously. Wait for the settler to finish before proceeding.", risk: "Medium" },
  { step: 4, action: "Build New Wall Immediately", detail: "As soon as the old wall is gone, place the new wall material in the exact same spot. The gap should exist for only a few seconds. Having a builder with high Construction skill ready nearby reduces the gap time.", risk: "Medium" },
  { step: 5, action: "Verify Stability Before Next Segment", detail: "Press F7 again. If the new wall shows green stability, proceed to the next segment. If yellow or red, add more supports before continuing. Never skip this check.", risk: "Low" },
  { step: 6, action: "Remove Temporary Supports", detail: "Once the entire wall section is upgraded and all segments show green stability, deconstruct the temporary supports. Recover the materials for future upgrades.", risk: "None" },
];

const supportTypes = [
  { type: "Wood Beam", materials: "10 Wood per beam", loadCapacity: "Supports 1 floor + 1 wall above", buildTime: "Fast", bestUse: "Temporary support during quick single-wall upgrades" },
  { type: "Stone Pillar", materials: "6 Stone Blocks per pillar", loadCapacity: "Supports 2 floors + walls above", buildTime: "Medium", bestUse: "Permanent structural support, multi-floor buildings" },
  { type: "Reinforced Pillar", materials: "6 Stone + 2 Iron per pillar", loadCapacity: "Supports 3+ floors", buildTime: "Slow", bestUse: "Tall towers, keeps, heavy roof loads" },
  { type: "Scaffolding (Temp)", materials: "5 Wood per section", loadCapacity: "Supports 1 floor during construction only", buildTime: "Very Fast", bestUse: "Emergency support during wall replacement — deconstruct immediately after" },
];

const upgradePriority = [
  { priority: 1, wallType: "Outer Defense Walls", reason: "These take the most damage during raids. Upgrading from wood to stone doubles their HP (250 to 600) and is the single biggest defense improvement you can make.", materialPath: "Wood → Stone → Reinforced Stone" },
  { priority: 2, wallType: "Inner Keep Walls", reason: "Your last line of defense. If outer walls fall, the keep walls must hold. Upgrade these to Limestone or Reinforced Stone as soon as outer walls are stone.", materialPath: "Stone → Limestone → Reinforced Stone" },
  { priority: 3, wallType: "Load-Bearing Interior Walls", reason: "These walls hold up your roofs and upper floors. If they collapse, you lose everything above. Upgrade them before cosmetic walls to prevent catastrophic failures.", materialPath: "Wood → Stone (Clay Brick acceptable as interim)" },
  { priority: 4, wallType: "Room Dividers (Non-Load-Bearing)", reason: "Purely cosmetic and functional — no structural danger if they break. Upgrade last, or use cheaper materials like Clay Brick to save stone for defense walls.", materialPath: "Wood → Clay Brick or Stone (optional)" },
];

export default function WallUpgradeGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="chapter-heading font-display text-4xl mb-2">
        Wall Upgrade Guide
      </h1>
      <p className="text-ink-faded text-lg mb-8 drop-cap">
        The number one cause of catastrophic colony collapse in Going Medieval is not a raid — it is a player removing a load-bearing wall to upgrade it. Your entire great hall crashes down, killing three settlers and destroying your grand throne room, all because you wanted stone walls instead of wood. This guide shows you exactly how to upgrade every wall in your settlement without a single collapse.
      </p>

      {/* Step-by-Step */}
      <h2 className="chapter-heading font-display text-2xl mt-10 mb-4">
        Safe Wall Replacement — 6 Steps
      </h2>
      <div className="overflow-x-auto">
        <table className="parchment-table w-full text-sm">
          <thead>
            <tr>
              <th>Step</th>
              <th>Action</th>
              <th>Detail</th>
              <th>Risk</th>
            </tr>
          </thead>
          <tbody>
            {upgradeSteps.map((s, i) => (
              <tr key={i}>
                <td className="text-center font-display text-accent">{s.step}</td>
                <td className="font-medium">{s.action}</td>
                <td>{s.detail}</td>
                <td className="text-center">{s.risk}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Support Types */}
      <h2 className="chapter-heading font-display text-2xl mt-10 mb-4">
        Temporary Support Types
      </h2>
      <p className="text-ink-light mb-4">
        Temporary supports are the difference between a safe upgrade and a disaster. Always place supports before removing any wall you are unsure about.
      </p>
      <div className="overflow-x-auto">
        <table className="parchment-table w-full text-sm">
          <thead>
            <tr>
              <th>Type</th>
              <th>Materials</th>
              <th>Load Capacity</th>
              <th>Speed</th>
              <th>Best Use</th>
            </tr>
          </thead>
          <tbody>
            {supportTypes.map((s, i) => (
              <tr key={i}>
                <td className="font-display text-accent">{s.type}</td>
                <td>{s.materials}</td>
                <td>{s.loadCapacity}</td>
                <td>{s.buildTime}</td>
                <td>{s.bestUse}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Upgrade Priority */}
      <h2 className="chapter-heading font-display text-2xl mt-10 mb-4">
        Wall Upgrade Priority Order
      </h2>
      <p className="text-ink-light mb-4">
        Do not upgrade walls randomly. Follow this priority order to maximize defense gains while minimizing collapse risk.
      </p>
      <div className="overflow-x-auto">
        <table className="parchment-table w-full text-sm">
          <thead>
            <tr>
              <th>Priority</th>
              <th>Wall Type</th>
              <th>Reason</th>
              <th>Upgrade Path</th>
            </tr>
          </thead>
          <tbody>
            {upgradePriority.map((p, i) => (
              <tr key={i}>
                <td className="text-center font-display text-accent">{p.priority}</td>
                <td className="font-medium">{p.wallType}</td>
                <td>{p.reason}</td>
                <td className="text-xs">{p.materialPath}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Multi-Floor */}
      <h2 className="chapter-heading font-display text-2xl mt-10 mb-4">
        Multi-Floor Buildings — Special Considerations
      </h2>
      <p className="text-ink-light mb-4">
        Upgrading walls in multi-floor buildings multiplies the danger. A ground-floor wall supports every floor above it. Before touching any wall in a 3-story building, check: does this wall support the ceiling above, which supports the floor above that, which supports the roof? If yes, every floor above will collapse.
      </p>
      <p className="text-ink-light mb-4">
        The safe multi-floor approach: upgrade from top to bottom. Replace roof-level walls first (no load above them), then move down one floor at a time. For the ground floor walls — the most dangerous upgrade — place supports on EVERY floor above the wall, not just the adjacent one. A stone pillar running from the ground to the roof, placed next to the wall you are replacing, is the safest method.
      </p>

      {/* FAQ */}
      <h2 className="chapter-heading font-display text-2xl mt-10 mb-4">FAQ</h2>

      <div className="bg-parchment-light rounded-lg p-5 mb-4">
        <h3 className="font-display text-accent text-lg mb-2">Can I upgrade an entire building at once?</h3>
        <p className="text-ink-light">
          No. Never designate more than one connected wall segment for deconstruction at a time. If you queue up an entire wall for replacement, settlers will tear down all the old walls before building any new ones — and your building will collapse in the gap. Upgrade walls one segment at a time, completing each replacement fully before starting the next.
        </p>
      </div>

      <div className="bg-parchment-light rounded-lg p-5 mb-4">
        <h3 className="font-display text-accent text-lg mb-2">What happens if I upgrade walls during a raid?</h3>
        <p className="text-ink-light">
          Disastrous. During a raid, your builders will not prioritize construction — they will flee or fight. Half-deconstructed walls provide zero defense. Enemies will walk through the gaps. If a raid notification appears while you are mid-upgrade, immediately cancel all deconstruction orders and draft your settlers. The partial wall will have reduced HP, but a partial wall is better than no wall. Resume upgrades only after the raid is fully repelled and all enemies are dead.
        </p>
      </div>

      <div className="bg-parchment-light rounded-lg p-5 mb-4">
        <h3 className="font-display text-accent text-lg mb-2">Is it worth upgrading floors too, or just walls?</h3>
        <p className="text-ink-light">
          Floors matter less for defense but more for room quality. Wood floors are flammable and reduce room impressiveness. Stone or clay brick floors add a small room quality bonus and do not burn. Upgrade floors only after all walls in that room are upgraded, and only if you have surplus materials. Defense walls are always the priority — a stone wall with a wood floor protects you better than a wood wall with a stone floor.
        </p>
      </div>

      <aside className="border-l-4 border-accent pl-4 mt-10">
        <h3 className="font-display text-lg text-ink mb-2">Related Guides</h3>
        <ul className="space-y-1">
          <li><Link href="/structural-mechanics" className="text-accent hover:underline">Structural Mechanics &amp; Stability</Link></li>
          <li><Link href="/building-material-tiers" className="text-accent hover:underline">Building Material Tiers</Link></li>
          <li><Link href="/castle-building-guide" className="text-accent hover:underline">Castle Building Guide</Link></li>
          <li><Link href="/defective-building-fix" className="text-accent hover:underline">Defective Building Fix Guide</Link></li>
          <li><Link href="/building-cost-guide" className="text-accent hover:underline">Building Cost Guide</Link></li>
        </ul>
      </aside>

      <p className="text-ink-faded text-sm mt-10">Last updated: July 2, 2026. Upgrade mechanics verified against Going Medieval current build. Safe method confirmed by r/goingmedieval community testing.</p>
    </div>
  );
}
