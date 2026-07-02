import Link from "next/link";

export const metadata = {
  title: "Going Medieval Siege Weapons Guide — Catapults, Trebuchets & How to Use Them | Going Medieval Guide",
  description: "Complete Going Medieval siege weapons guide. Learn how to unlock, build, load, and fire catapults and trebuchets. Ammo types, placement strategy, and combat tactics.",
};

const siegeWeapons = [
  { weapon: "Catapult", range: "Medium (12-18 tiles)", damage: "150 per hit (AoE)", reloadTime: "12 seconds", bestTarget: "Enemy clusters, walls (medium damage)", resourceCost: "200 Wood, 80 Iron, 60 Labor, Research: Siege Engineering I" },
  { weapon: "Trebuchet", range: "Long (20-30 tiles)", damage: "300 per hit (AoE)", reloadTime: "20 seconds", bestTarget: "Walls (high damage), enemy siege equipment", resourceCost: "300 Wood, 120 Iron, 100 Labor, Research: Siege Engineering II" },
  { weapon: "Ballista", range: "Very Long (25-35 tiles)", damage: "120 per hit (single target)", reloadTime: "8 seconds", bestTarget: "High-value single targets, enemy trebuchets", resourceCost: "150 Wood, 60 Iron, 40 Labor, Research: Siege Engineering I" },
];

const ammoTypes = [
  { ammo: "Stone Shot", effect: "Standard impact damage, moderate wall damage", craftCost: "5 Stone per shot, Crafting Station", bestUse: "General purpose — good against both units and structures" },
  { ammo: "Fire Shot", effect: "Sets target area on fire, damage over time, panics enemies", craftCost: "3 Stone + 2 Coal per shot, Smelter", bestUse: "Enemy clusters, wooden structures, creates area denial" },
  { ammo: "Explosive Shot", effect: "Massive AoE damage, destroys walls quickly", craftCost: "3 Stone + 2 Sulfur per shot, Alchemy Table", bestUse: "Breaching walls, destroying enemy siege equipment instantly" },
  { ammo: "Scatter Shot", effect: "Wide spread of small projectiles, hits multiple targets in arc", craftCost: "8 Stone per shot (catapult only)", bestUse: "Large enemy groups, suppressing raider waves" },
];

const placementTips = [
  { tip: "Elevated Position", detail: "Place siege weapons on raised platforms, towers, or hills. Height bonus increases range by roughly 20 percent and gives better line of sight over walls.", priority: "Critical" },
  { tip: "Clear Firing Arc", detail: "Remove trees, buildings, and terrain obstacles in front of the weapon. A blocked firing arc means the weapon cannot fire at all — wasted resources.", priority: "Critical" },
  { tip: "Ammo Stockpile Adjacent", detail: "Place an ammo stockpile directly next to the weapon. Crew members reload from the nearest stockpile — every tile of walking distance adds 1-2 seconds to reload time.", priority: "High" },
  { tip: "Cover for Crew", detail: "Siege weapon crews are vulnerable to enemy archers. Build a half-wall or battlement in front of the crew position. The weapon itself provides partial cover.", priority: "High" },
  { tip: "Multiple Weapons", detail: "Two catapults on opposite sides of your gate create a crossfire that no enemy formation can survive. Redundancy also matters — if one weapon is destroyed, the other keeps firing.", priority: "Medium" },
  { tip: "Inner Courtyard Backup", detail: "Place one trebuchet inside your inner bailey aimed at the gate. If the outer defense falls, this becomes your last line of heavy firepower — enemies funnel through the gate into your kill zone.", priority: "Medium" },
];

export default function SiegeWeaponsGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="chapter-heading font-display text-4xl mb-2">
        Siege Weapons Guide
      </h1>
      <p className="text-ink-faded text-lg mb-8 drop-cap">
        Siege weapons are the most powerful defensive tools in Going Medieval — and the most misunderstood. Every week on the subreddit, players ask where to find them, how to load them, and why their trebuchet seems to do nothing. This guide answers every question, from unlocking the research to landing the killing shot.
      </p>

      {/* Siege Weapons Overview */}
      <h2 className="chapter-heading font-display text-2xl mt-10 mb-4">
        Siege Weapons Comparison
      </h2>
      <p className="text-ink-light mb-4">
        There are three siege weapons in Going Medieval. Each has a distinct role, and using the wrong one for the wrong target wastes ammunition and time.
      </p>
      <div className="overflow-x-auto">
        <table className="parchment-table w-full text-sm">
          <thead>
            <tr>
              <th>Weapon</th>
              <th>Range</th>
              <th>Damage</th>
              <th>Reload</th>
              <th>Best Target</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            {siegeWeapons.map((w, i) => (
              <tr key={i}>
                <td className="font-display text-accent">{w.weapon}</td>
                <td>{w.range}</td>
                <td className="text-center">{w.damage}</td>
                <td className="text-center">{w.reloadTime}</td>
                <td>{w.bestTarget}</td>
                <td className="text-xs">{w.resourceCost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* How to Unlock */}
      <h2 className="chapter-heading font-display text-2xl mt-10 mb-4">
        How to Unlock Siege Weapons
      </h2>
      <p className="text-ink-light mb-4">
        Siege weapons require research. The path is: <strong>Basic Engineering → Advanced Construction → Siege Engineering I (unlocks Catapult + Ballista) → Siege Engineering II (unlocks Trebuchet)</strong>. You will need a Research Table II for Siege Engineering I and Research Table III for Siege Engineering II. Total research time from Basic Engineering to Trebuchet is approximately 12-15 research days with one dedicated researcher.
      </p>
      <p className="text-ink-light mb-4">
        After unlocking the research, build the weapon at a Siege Workshop (constructed separately from regular workshops, requires a large open area). Craft ammunition at the appropriate workstation — stone shot at the Stonemason table, fire shot at the Smelter, and explosive shot at the Alchemy Table.
      </p>

      {/* Ammo Types */}
      <h2 className="chapter-heading font-display text-2xl mt-10 mb-4">
        Ammunition Types
      </h2>
      <div className="overflow-x-auto">
        <table className="parchment-table w-full text-sm">
          <thead>
            <tr>
              <th>Ammo</th>
              <th>Effect</th>
              <th>Craft Cost</th>
              <th>Best Use</th>
            </tr>
          </thead>
          <tbody>
            {ammoTypes.map((a, i) => (
              <tr key={i}>
                <td className="font-display text-accent">{a.ammo}</td>
                <td>{a.effect}</td>
                <td>{a.craftCost}</td>
                <td>{a.bestUse}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Placement */}
      <h2 className="chapter-heading font-display text-2xl mt-10 mb-4">
        Placement Strategy
      </h2>
      <p className="text-ink-light mb-4">
        Where you place your siege weapons matters as much as what you build. A trebuchet behind a hill is a trebuchet that fires into dirt. Follow these rules:
      </p>
      <div className="overflow-x-auto">
        <table className="parchment-table w-full text-sm">
          <thead>
            <tr>
              <th>Tip</th>
              <th>Detail</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>
            {placementTips.map((p, i) => (
              <tr key={i}>
                <td className="font-display text-accent">{p.tip}</td>
                <td>{p.detail}</td>
                <td>{p.priority}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* How to Operate */}
      <h2 className="chapter-heading font-display text-2xl mt-10 mb-4">
        How to Operate Siege Weapons
      </h2>
      <p className="text-ink-light mb-4">
        This is the most common point of confusion. After building a siege weapon, it does not fire automatically. You must:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-ink-light mb-8">
        <li><strong>Assign a settler to operate it.</strong> Select the weapon, click the Operate button, then right-click a settler. The settler will walk to the weapon and man it. They will not leave this post unless you manually release them or they are downed.</li>
        <li><strong>Stock ammunition nearby.</strong> The crew member will walk to the nearest ammo stockpile to reload. If the stockpile is 20 tiles away, your fire rate drops dramatically. Keep ammo within 3 tiles of the weapon.</li>
        <li><strong>Target manually.</strong> Select the weapon, then right-click an enemy or structure to designate a target. The crew will fire, reload, and fire again at the same target until it is destroyed or you change targets. Without a target order, the weapon sits idle.</li>
        <li><strong>Watch the reload bar.</strong> Each shot has a reload timer shown above the weapon. During reload, the crew is vulnerable and the weapon cannot fire. Time your shots — do not waste a trebuchet volley on a nearly-dead enemy.</li>
      </ol>

      {/* FAQ */}
      <h2 className="chapter-heading font-display text-2xl mt-10 mb-4">FAQ</h2>

      <div className="bg-parchment-light rounded-lg p-5 mb-4">
        <h3 className="font-display text-accent text-lg mb-2">Do siege weapons work against raiders?</h3>
        <p className="text-ink-light">
          Yes, but with one critical caveat: they are slow. A catapult takes 12 seconds to reload and fire one shot. Against 15 raiders running toward your gate, you might get 2-3 shots before melee begins. Siege weapons excel against slow-moving threats (siege engines, large clustered groups) and are weak against fast, spread-out enemies. Pair siege weapons with archers — archers handle the fast movers while siege weapons delete the heavy targets.
        </p>
      </div>

      <div className="bg-parchment-light rounded-lg p-5 mb-4">
        <h3 className="font-display text-accent text-lg mb-2">How many trebuchets do I need?</h3>
        <p className="text-ink-light">
          One well-placed trebuchet with explosive shot can handle most raids. For late-game siege events where enemies bring their own trebuchets, two are recommended — one to counter-battery the enemy siege equipment, one to suppress the infantry. Each trebuchet requires one dedicated crew member, so factor that into your settler allocation. Three trebuchets is overkill for defense but useful if you plan to siege enemy settlements in future updates.
        </p>
      </div>

      <div className="bg-parchment-light rounded-lg p-5 mb-4">
        <h3 className="font-display text-accent text-lg mb-2">Can enemies use my siege weapons against me?</h3>
        <p className="text-ink-light">
          No, enemies cannot operate your siege weapons. However, enemy trebuchets will target and destroy your siege equipment if it is within their range. This is why counter-battery fire (targeting their siege weapons with yours) is the first priority in any siege battle. Destroy their trebuchets before they destroy yours. If your siege weapon is destroyed, you lose the weapon and all loaded ammunition — but the crew member survives if they are not standing directly on the weapon.
        </p>
      </div>

      <aside className="border-l-4 border-accent pl-4 mt-10">
        <h3 className="font-display text-lg text-ink mb-2">Related Guides</h3>
        <ul className="space-y-1">
          <li><Link href="/defense" className="text-accent hover:underline">Complete Defense Guide</Link></li>
          <li><Link href="/trebuchet" className="text-accent hover:underline">Trebuchet In-Depth</Link></li>
          <li><Link href="/raid-defense" className="text-accent hover:underline">Raid Defense Strategy</Link></li>
          <li><Link href="/best-weapons-for-defense" className="text-accent hover:underline">Best Weapons for Defense</Link></li>
          <li><Link href="/castle-building-guide" className="text-accent hover:underline">Castle Building Guide</Link></li>
        </ul>
      </aside>

      <p className="text-ink-faded text-sm mt-10">Last updated: July 2, 2026. Siege weapon mechanics sourced from community testing and r/goingmedieval Q&amp;A threads.</p>
    </div>
  );
}
