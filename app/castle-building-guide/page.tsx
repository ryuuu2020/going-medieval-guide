import Link from "next/link";

export const metadata = {
  title: "Going Medieval Castle Building Guide — How to Build a Full Castle from Keep to Fortress | Going Medieval Guide",
  description: "Step-by-step castle building progression guide for Going Medieval. Learn how to plan, build, and defend a complete castle from wooden keep to stone fortress.",
};

const castleStages = [
  { stage: "Wooden Keep", materials: "200 Wood, 60 Labor", settlersNeeded: 3, defenseRating: "Low (250 HP walls)", buildTime: "3-5 days", keyFeature: "Basic shelter, storage, one bedroom" },
  { stage: "Stone Keep Upgrade", materials: "400 Stone, 120 Labor", settlersNeeded: 4, defenseRating: "Medium (600 HP walls)", buildTime: "5-7 days", keyFeature: "Replace wood walls with stone, add arrow slits" },
  { stage: "Inner Bailey Wall", materials: "600 Stone, 200 Labor", settlersNeeded: 5, defenseRating: "Medium-High (600 HP perimeter)", buildTime: "8-10 days", keyFeature: "Enclosed courtyard, protected farms and workshops" },
  { stage: "Gatehouse", materials: "300 Stone, 80 Iron, 100 Labor", settlersNeeded: 5, defenseRating: "High (adds choke point)", buildTime: "3-4 days", keyFeature: "Reinforced gate, murder holes, defensive platform" },
  { stage: "Corner Towers", materials: "300 Stone, 60 Iron per tower, 80 Labor each", settlersNeeded: 6, defenseRating: "High (flanking fire coverage)", buildTime: "4-5 days per tower", keyFeature: "360-degree archer coverage, elevated firing positions" },
  { stage: "Outer Curtain Wall", materials: "800 Stone, 300 Labor", settlersNeeded: 7, defenseRating: "Very High (creates kill zone)", buildTime: "10-14 days", keyFeature: "Second defense layer, kill zone between walls" },
  { stage: "Moat / Dry Ditch", materials: "200 Labor (no materials)", settlersNeeded: 8, defenseRating: "Maximum (slows all ground enemies)", buildTime: "5-7 days", keyFeature: "Uncrossable barrier, forces enemies to gate" },
  { stage: "Fortified Keep (Final)", materials: "1000 Stone, 200 Iron, 80 Steel, 500 Labor", settlersNeeded: 10, defenseRating: "Impenetrable", buildTime: "15-20 days", keyFeature: "Multi-story keep with vault, throne room, panic room" },
];

const wallComparison = [
  { material: "Wood Wall", hp: "250", resourceCost: "15 Wood per tile", buildSpeed: "Fast", bestUse: "Temporary structures, early game", upgradeTo: "Stone Wall" },
  { material: "Stone Wall", hp: "600", resourceCost: "8 Stone Blocks per tile", buildSpeed: "Medium", bestUse: "Main settlement walls, mid-game", upgradeTo: "Limestone Wall" },
  { material: "Limestone Wall", hp: "800", resourceCost: "6 Limestone Blocks per tile", buildSpeed: "Medium", bestUse: "Premium defense, aesthetic choice", upgradeTo: "Reinforced Stone" },
  { material: "Clay Brick Wall", hp: "500", resourceCost: "6 Clay Bricks per tile", buildSpeed: "Fast", bestUse: "Quick upgrades when stone is scarce", upgradeTo: "Stone Wall" },
  { material: "Reinforced Stone", hp: "1200", resourceCost: "8 Stone Blocks + 2 Iron Ingots per tile", buildSpeed: "Slow", bestUse: "Keep walls, vault, critical defense points", upgradeTo: "N/A (max tier)" },
];

const defenseLayers = [
  { layer: 1, name: "Outer Moat / Ditch", purpose: "Slows enemies, channels them to choke points", priority: "Build last — after walls are complete" },
  { layer: 2, name: "Outer Curtain Wall", purpose: "First line of defense, archer platforms", priority: "Mid-game — after inner settlement is stable" },
  { layer: 3, name: "Kill Zone", purpose: "Open ground between outer and inner walls — archers fire from both sides", priority: "Natural result of dual-wall design" },
  { layer: 4, name: "Inner Bailey Wall", purpose: "Final defensive line, protects farms and workshops", priority: "Early-mid — surround your core settlement first" },
  { layer: 5, name: "Gatehouse + Towers", purpose: "Reinforced entry point, elevated archer positions", priority: "After inner wall — gates are the weakest point" },
  { layer: 6, name: "The Keep", purpose: "Last stand position, treasure vault, settler shelter", priority: "Gradually upgrade from wooden shack to stone fortress" },
];

export default function CastleBuildingGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="chapter-heading font-display text-4xl mb-2">
        Castle Building Guide
      </h1>
      <p className="text-ink-faded text-lg mb-8 drop-cap">
        Building a castle in Going Medieval is the ultimate expression of your colony progress. It transforms your settlement from a collection of wooden shacks into an impenetrable fortress. But the gap between your first wooden keep and a fully fortified stone castle is enormous — and rushing it will break your colony. This guide walks you through every stage, using the Tower of London progression method favored by veteran players.
      </p>

      {/* Castle Building Stages */}
      <h2 className="chapter-heading font-display text-2xl mt-10 mb-4">
        Castle Building Stages — From Shack to Fortress
      </h2>
      <p className="text-ink-light mb-4">
        The community-driven Tower of London method recommends growing your castle organically. Start with a modest wooden keep, then expand outward in concentric rings. Each stage adds a layer of defense while maintaining a livable interior. Jumping straight to a massive stone fortress with 4 settlers will collapse from starvation and mental breaks.
      </p>
      <div className="overflow-x-auto">
        <table className="parchment-table w-full text-sm">
          <thead>
            <tr>
              <th>Stage</th>
              <th>Materials</th>
              <th>Settlers</th>
              <th>Defense</th>
              <th>Build Time</th>
              <th>Key Feature</th>
            </tr>
          </thead>
          <tbody>
            {castleStages.map((s, i) => (
              <tr key={i}>
                <td className="font-display text-accent">{s.stage}</td>
                <td>{s.materials}</td>
                <td className="text-center">{s.settlersNeeded}</td>
                <td>{s.defenseRating}</td>
                <td>{s.buildTime}</td>
                <td>{s.keyFeature}</td>
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
        Wall material is the single largest resource investment in your castle. Choosing the wrong material for the wrong wall wastes hundreds of stone blocks. Use this table to decide what goes where.
      </p>
      <div className="overflow-x-auto">
        <table className="parchment-table w-full text-sm">
          <thead>
            <tr>
              <th>Material</th>
              <th>HP</th>
              <th>Cost/Tile</th>
              <th>Build Speed</th>
              <th>Best Use</th>
              <th>Upgrades To</th>
            </tr>
          </thead>
          <tbody>
            {wallComparison.map((w, i) => (
              <tr key={i}>
                <td className="font-display text-accent">{w.material}</td>
                <td className="text-center">{w.hp}</td>
                <td>{w.resourceCost}</td>
                <td>{w.buildSpeed}</td>
                <td>{w.bestUse}</td>
                <td>{w.upgradeTo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Multi-Layer Defense */}
      <h2 className="chapter-heading font-display text-2xl mt-10 mb-4">
        The Six-Layer Defense System
      </h2>
      <p className="text-ink-light mb-4">
        A properly built castle uses layered defense. Each layer slows the enemy, gives your archers more time to fire, and creates fallback positions. Enemies should face resistance at every step from the outer moat to your inner keep.
      </p>
      <div className="overflow-x-auto">
        <table className="parchment-table w-full text-sm">
          <thead>
            <tr>
              <th>Layer</th>
              <th>Structure</th>
              <th>Purpose</th>
              <th>Build Priority</th>
            </tr>
          </thead>
          <tbody>
            {defenseLayers.map((d, i) => (
              <tr key={i}>
                <td className="text-center">{d.layer}</td>
                <td className="font-display text-accent">{d.name}</td>
                <td>{d.purpose}</td>
                <td>{d.priority}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Gate Defense */}
      <h2 className="chapter-heading font-display text-2xl mt-10 mb-4">
        Gate Defense — Your Weakest Point
      </h2>
      <p className="text-ink-light mb-4">
        Gates are the number one target for enemy raiders. A recent community discovery (confirmed after the latest patch) revealed that enemies pathfind to gates even when easier paths exist. This means you can predict where they will attack and concentrate defenses there. However, the latest update also introduced attacks from secondary directions — do not leave your sides completely undefended.
      </p>
      <p className="text-ink-light mb-4">
        <strong>Gate defense checklist:</strong> Reinforced gate (Iron Gate or better) → Murder holes above (floor opening with archers) → Two flanking towers for crossfire → Drawbridge over moat (optional but devastating) → Inner gate as fallback (double-gate system).
      </p>

      {/* Common Mistakes */}
      <h2 className="chapter-heading font-display text-2xl mt-10 mb-4">
        Common Castle Building Mistakes
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-ink-light mb-8">
        <li><strong>Building too big too early.</strong> A massive stone castle with 3 settlers means nobody is farming, cooking, or researching. Your castle will be beautiful and your settlers will be dead. Always match your construction ambition to your settler count.</li>
        <li><strong>Ignoring terrain.</strong> Building on flat ground wastes natural defense. Use hills, cliffs, and rivers as free walls. The best castle sites have at least two natural barriers reducing the directions enemies can approach from.</li>
        <li><strong>No storage nearby.</strong> Builders walk to the stockpile for every single stone block. If your stone stockpile is on the opposite side of the map, construction takes 3x longer. Place a small material stockpile adjacent to every active construction site.</li>
        <li><strong>One entrance only.</strong> A single gate is a single point of failure. Build at least two gates on opposite sides so settlers can evacuate or flank attackers. The secondary gate can be a simple door in a wall — it does not need to be elaborate.</li>
        <li><strong>Upgrading all walls simultaneously.</strong> Removing a load-bearing wall causes structural collapse. Upgrade walls one section at a time, always checking the stability overlay (F7) before and after each replacement.</li>
      </ul>

      {/* FAQ */}
      <h2 className="chapter-heading font-display text-2xl mt-10 mb-4">FAQ</h2>

      <div className="bg-parchment-light rounded-lg p-5 mb-4">
        <h3 className="font-display text-accent text-lg mb-2">Should I build underground or above ground?</h3>
        <p className="text-ink-light">
          Both. The ideal Going Medieval settlement combines above-ground castle walls with underground storage, workshops, and panic rooms. Underground rooms are naturally insulated (stable temperature year-round), immune to trebuchet fire, and protect your most valuable resources during raids. Above-ground walls and towers provide archer platforms and line-of-sight that underground cannot. Build your keep above ground, your vault and food storage below.
        </p>
      </div>

      <div className="bg-parchment-light rounded-lg p-5 mb-4">
        <h3 className="font-display text-accent text-lg mb-2">How many settlers do I need to build a proper castle?</h3>
        <p className="text-ink-light">
          Minimum 5 for a basic stone-walled settlement with a gatehouse. For a full castle with outer walls, towers, moat, and reinforced keep: 8 to 10 settlers. The bottleneck is not construction speed — it is the other jobs. While 3 settlers build walls, someone still needs to farm, cook, hunt, research, and haul. At 8 settlers, you can dedicate 3 to construction full-time without crippling your colony survival.
        </p>
      </div>

      <div className="bg-parchment-light rounded-lg p-5 mb-4">
        <h3 className="font-display text-accent text-lg mb-2">Can I upgrade walls without demolishing them first?</h3>
        <p className="text-ink-light">
          Yes, but with caution. You can designate a wall for deconstruction and immediately place a new wall of a different material in the same spot. However, removing a load-bearing wall — even temporarily — causes everything above it to collapse. The safe method: build a temporary support beam or pillar adjacent to the wall you want to replace, then upgrade the wall section by section. Never remove more than one connected wall segment at a time. Use the F7 stability overlay to check structural integrity before every replacement. For detailed step-by-step instructions, see our Wall Upgrade Guide.
        </p>
      </div>

      {/* Related Guides */}
      <aside className="border-l-4 border-accent pl-4 mt-10">
        <h3 className="font-display text-lg text-ink mb-2">Related Guides</h3>
        <ul className="space-y-1">
          <li><Link href="/defense" className="text-accent hover:underline">Complete Defense Guide</Link></li>
          <li><Link href="/best-defense-layout" className="text-accent hover:underline">Best Defense Layouts</Link></li>
          <li><Link href="/structural-mechanics" className="text-accent hover:underline">Structural Mechanics &amp; Stability</Link></li>
          <li><Link href="/wall-upgrade-guide" className="text-accent hover:underline">Wall Upgrade Guide — Replace Without Collapse</Link></li>
          <li><Link href="/killbox-design" className="text-accent hover:underline">Killbox Design &amp; Trap Placement</Link></li>
          <li><Link href="/entrance-design" className="text-accent hover:underline">Entrance &amp; Gatehouse Design</Link></li>
        </ul>
      </aside>

      <p className="text-ink-faded text-sm mt-10">Last updated: July 2, 2026. Castle building mechanics verified against Going Medieval experimental branch. Community strategies sourced from r/goingmedieval.</p>
    </div>
  );
}
