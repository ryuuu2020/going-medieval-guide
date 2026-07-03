import Link from "next/link";

export const metadata = {
  title: "Going Medieval Enemy Types Guide — All Raider Factions, Gear & Counter Strategies | Going Medieval Guide",
  description: "Complete breakdown of every enemy type in Going Medieval. Learn raider factions, their weapons, armor, attack patterns, and the best counter-strategies for each.",
};

const raiderFactions = [
  { faction: "Bandits", threatLevel: "Low (Early Game)", weaponTypes: "Clubs, Shortbows, Leather Armor", groupSize: "3-6", specialTrait: "Low morale — flee when half the group is downed", counterStrategy: "Bowmen on elevated platforms. Bandits have no shields and poor armor — archers shred them before they reach walls." },
  { faction: "Marauders", threatLevel: "Medium (Mid Game)", weaponTypes: "Swords, Crossbows, Chainmail", groupSize: "5-10", specialTrait: "Target doors and weak walls directly", counterStrategy: "Stone walls with reinforced gates. Place melee fighters at the gate as a second line behind your archer volley. Marauders bring better armor so use crossbows for armor penetration." },
  { faction: "Knights", threatLevel: "High (Late Game)", weaponTypes: "Longswords, Heavy Crossbows, Plate Armor", groupSize: "4-8", specialTrait: "High HP and armor, nearly immune to arrows from the front", counterStrategy: "Flanking crossbow fire. Attack from multiple angles so at least one shot hits the unarmored back. Traps in choke points strip away their HP before melee contact. Trebuchet fire scatters their formation." },
  { faction: "Siege Engineers", threatLevel: "Very High (Late Game)", weaponTypes: "Catapults, Trebuchets, Explosive Ammo, Heavy Armor", groupSize: "6-12 plus siege equipment", specialTrait: "Deploy and operate siege weapons against your walls", counterStrategy: "Counter-battery trebuchet fire — destroy their weapons first. Ballista snipes the crew members. Keep your own siege weapons elevated and protected behind half-walls." },
  { faction: "Wild Animals", threatLevel: "Variable", weaponTypes: "Claws, Teeth (no weapons)", groupSize: "2-8", specialTrait: "Random spawn, attack settlers and livestock", counterStrategy: "Hunting stations on settlement perimeter. Tamed war animals (wolves, bears) patrol and intercept wild animal packs. Fence off livestock pens with double-height walls." },
  { faction: "Cannibals", threatLevel: "Medium-High", weaponTypes: "Bone Weapons, Throwing Spears, Light Armor", groupSize: "6-14", specialTrait: "Fast movement, swarm tactics, ignore morale", counterStrategy: "Traps are essential — cannibal waves are large and fast. Spike traps in a long corridor thin the herd. Fire arrows create panic in their tightly packed formations. Never fight cannibals in open terrain." },
];

const enemyArchetypes = [
  { archetype: "Archer", threatTo: "Unarmored settlers, exposed workers outside walls", armor: "Light (Leather)", speed: "Medium", priorityTarget: "Yes — kill first", notes: "Enemy archers suppress your defenders. They stand at maximum range and fire continuously. Counter with your own archers on higher elevation — the height bonus gives you range advantage." },
  { archetype: "Shield Bearer", threatTo: "Your archers — shields block frontal arrows", armor: "Heavy (Plate + Shield)", speed: "Slow", priorityTarget: "No — save for last", notes: "Shield bearers absorb ranged fire while melee units advance behind them. Arrows from the front deal roughly 80 percent reduced damage. Flank them or wait until melee range where shields provide less protection." },
  { archetype: "Berserker", threatTo: "Your melee line — high damage, low defense", armor: "None or Light", speed: "Very Fast", priorityTarget: "Yes — focus fire immediately", notes: "Berserkers charge ahead of the main group with double movement speed. They deal massive damage but have no armor. A single volley from 3-4 crossbows kills them before they reach your line. Do not let them reach melee." },
  { archetype: "Sapper", threatTo: "Walls, doors, defensive structures", armor: "Medium", speed: "Slow", priorityTarget: "Yes — before they reach walls", notes: "Sappers carry tools that deal bonus damage to structures. They ignore settlers and beeline for your weakest wall section. Place a dedicated crossbow squad to intercept sappers the moment the raid begins." },
  { archetype: "Commander", threatTo: "Your defense coordination — buffs nearby enemies", armor: "Heavy", speed: "Slow", priorityTarget: "Yes — highest priority snipe target", notes: "Commanders provide an aura that increases nearby enemy damage and morale. Kill the commander first and the remaining enemies lose the buff. Ballista or trebuchet is ideal — one precise shot ends the aura." },
];

const terrainTactics = [
  { terrain: "Open Field", advantage: "Enemy — no cover, archers have clear shots both ways", yourStrategy: "Build a forward bunker or fighting position. Never engage in open field without prepared defenses. Use terrain elevation — even a 1-tile hill gives archers a range and damage bonus." },
  { terrain: "Mountain Pass", advantage: "You — natural choke point, enemies file through single file", yourStrategy: "This is the ideal defensive terrain. Place a gate with archer towers on both sides of the narrowest point. Melee fighters hold the gate. Traps in the approach path. One well-designed mountain pass defense can hold against ten times your numbers." },
  { terrain: "River Crossing", advantage: "You — enemies slowed by water, easy targets for archers", yourStrategy: "Build your wall on your side of the river. Archers on the wall shoot enemies as they slowly wade across. The river is your kill zone. Add wooden spike traps on the far bank where enemies gather before crossing." },
  { terrain: "Forest Edge", advantage: "Enemy — trees block line of sight, ambush cover", yourStrategy: "Clear-cut trees in a 15-tile radius around your walls. Trees give enemies cover from arrows and hide their approach. A forest next to your wall means you will not see the raid until they are climbing your battlements." },
];

export default function EnemyTypesGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="chapter-heading font-display text-4xl mb-2">
        Enemy Types Guide
      </h1>
      <p className="text-ink-faded text-lg mb-8 drop-cap">
        Knowing what is coming at your walls is half the battle in Going Medieval. Each raider faction brings different gear, tactics, and weaknesses — and treating them all the same is how colonies fall. This guide catalogs every enemy type, archetype, and terrain matchup so you can build the right defense before the raid horn sounds.
      </p>

      {/* Raider Factions */}
      <h2 className="chapter-heading font-display text-2xl mt-10 mb-4">
        Raider Factions — Who Attacks You and When
      </h2>
      <p className="text-ink-light mb-4">
        Raids scale with your colony wealth and settler count. Early game brings bandits; late game brings siege engineers with trebuchets. The faction type determines their equipment, group composition, and behavior — counter-strategies vary dramatically between factions.
      </p>
      <div className="overflow-x-auto mb-8">
        <table className="parchment-table w-full text-left text-sm">
          <thead>
            <tr className="border-b border-ink-faded/20">
              <th className="py-2 px-3 font-display text-accent">Faction</th>
              <th className="py-2 px-3 font-display text-accent">Threat</th>
              <th className="py-2 px-3 font-display text-accent">Weapons</th>
              <th className="py-2 px-3 font-display text-accent">Size</th>
              <th className="py-2 px-3 font-display text-accent">Special</th>
              <th className="py-2 px-3 font-display text-accent">Counter</th>
            </tr>
          </thead>
          <tbody>
            {raiderFactions.map((f, i) => (
              <tr key={i} className="border-b border-ink-faded/10">
                <td className="py-2 px-3 font-display text-accent">{f.faction}</td>
                <td className="py-2 px-3">{f.threatLevel}</td>
                <td className="py-2 px-3">{f.weaponTypes}</td>
                <td className="py-2 px-3">{f.groupSize}</td>
                <td className="py-2 px-3">{f.specialTrait}</td>
                <td className="py-2 px-3">{f.counterStrategy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Enemy Archetypes */}
      <h2 className="chapter-heading font-display text-2xl mt-10 mb-4">
        Enemy Archetypes — Unit Roles and Priority Targeting
      </h2>
      <p className="text-ink-light mb-4">
        Within any raider faction, individual enemies fill specific combat roles. Understanding these archetypes lets you assign priority targets to your archers, melee, and siege weapons. The golden rule: kill commanders and sappers first, shield bearers last.
      </p>
      <div className="overflow-x-auto mb-8">
        <table className="parchment-table w-full text-left text-sm">
          <thead>
            <tr className="border-b border-ink-faded/20">
              <th className="py-2 px-3 font-display text-accent">Archetype</th>
              <th className="py-2 px-3 font-display text-accent">Threat To</th>
              <th className="py-2 px-3 font-display text-accent">Armor</th>
              <th className="py-2 px-3 font-display text-accent">Speed</th>
              <th className="py-2 px-3 font-display text-accent">Priority</th>
              <th className="py-2 px-3 font-display text-accent">Notes</th>
            </tr>
          </thead>
          <tbody>
            {enemyArchetypes.map((e, i) => (
              <tr key={i} className="border-b border-ink-faded/10">
                <td className="py-2 px-3 font-display text-accent">{e.archetype}</td>
                <td className="py-2 px-3">{e.threatTo}</td>
                <td className="py-2 px-3">{e.armor}</td>
                <td className="py-2 px-3">{e.speed}</td>
                <td className="py-2 px-3">{e.priorityTarget}</td>
                <td className="py-2 px-3">{e.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Terrain Tactics */}
      <h2 className="chapter-heading font-display text-2xl mt-10 mb-4">
        Terrain Matchups — Where to Fight Each Enemy Type
      </h2>
      <p className="text-ink-light mb-4">
        The terrain between your walls and the map edge determines whether a raid is manageable or catastrophic. Some terrain types favor your defenders heavily; others hand the advantage to raiders. Scout your map and choose your settlement location with these matchups in mind.
      </p>
      <div className="overflow-x-auto mb-8">
        <table className="parchment-table w-full text-left text-sm">
          <thead>
            <tr className="border-b border-ink-faded/20">
              <th className="py-2 px-3 font-display text-accent">Terrain</th>
              <th className="py-2 px-3 font-display text-accent">Advantage</th>
              <th className="py-2 px-3 font-display text-accent">Your Strategy</th>
            </tr>
          </thead>
          <tbody>
            {terrainTactics.map((t, i) => (
              <tr key={i} className="border-b border-ink-faded/10">
                <td className="py-2 px-3 font-display text-accent">{t.terrain}</td>
                <td className="py-2 px-3">{t.advantage}</td>
                <td className="py-2 px-3">{t.yourStrategy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Early Warning System */}
      <h2 className="chapter-heading font-display text-2xl mt-10 mb-4">
        Raid Detection and Preparation Timeline
      </h2>
      <p className="text-ink-light mb-4">
        Every raid follows a predictable timeline. The raid notification appears in the top-right event log. You have limited time between the alert and enemy arrival — use it wisely. The exact window varies by faction: bandits give roughly 30 seconds, siege engineers give closer to 60 seconds because their equipment moves slowly.
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-ink-light mb-8">
        <li><strong>Raid Alert.</strong> The event log shows the faction name and approximate group size. Immediately draft all combat-capable settlers to their defensive positions. Non-combat settlers should retreat to the keep or safe room.</li>
        <li><strong>Enemy Spawn.</strong> Raiders appear at the map edge, typically from the direction opposite your most reinforced wall. The game deliberately spawns enemies at your weakest approach — build defenses on all sides.</li>
        <li><strong>Approach Phase.</strong> Enemies walk toward your settlement. This is your window to reposition archers, load siege weapons, and activate traps. Sappers and berserkers move faster than the main group — identify them now.</li>
        <li><strong>Engagement.</strong> The first enemy enters weapon range. Archers fire, siege weapons launch, traps trigger. The first 10 seconds of engagement determine the outcome. Focus fire on priority targets during this window.</li>
        <li><strong>Cleanup.</strong> After the main threat is neutralized, chase down fleeing enemies with fast melee settlers. Bandits and cannibals flee when their numbers drop — do not let survivors escape or they may return in a future raid.</li>
      </ol>

      {/* FAQ */}
      <h2 className="chapter-heading font-display text-2xl mt-10 mb-4">FAQ</h2>

      <div className="bg-parchment-light rounded-lg p-5 mb-4">
        <h3 className="font-display text-accent text-lg mb-2">How do I know which faction is attacking before they arrive?</h3>
        <p className="text-ink-light">
          The raid alert in the event log names the faction. Bandits, Marauders, Knights, Siege Engineers, and Cannibals are all named explicitly. Wild animal attacks say something like &quot;A pack of wolves has been spotted.&quot; If you miss the alert, zoom out and look at the approaching group: bandits wear brown leather, knights shine in metal armor, and siege engineers are accompanied by visible siege equipment icons on the map.
        </p>
      </div>

      <div className="bg-parchment-light rounded-lg p-5 mb-4">
        <h3 className="font-display text-accent text-lg mb-2">What is the most dangerous enemy type for a mid-game colony?</h3>
        <p className="text-ink-light">
          Marauders with crossbows are the mid-game colony killer. They arrive in groups of 5-10 with armor-piercing crossbow bolts that ignore your settlers leather armor. If your walls are still wood, marauders smash through in under 30 seconds. The counter is simple: upgrade to stone walls before your colony wealth triggers marauder raids, and ensure every defender has at least chainmail armor. A wooden fort with leather-clad archers against marauder crossbows is a near-certain colony wipe.
        </p>
      </div>

      <div className="bg-parchment-light rounded-lg p-5 mb-4">
        <h3 className="font-display text-accent text-lg mb-2">Do enemy types change based on my colony location or biome?</h3>
        <p className="text-ink-light">
          Faction types are determined by colony wealth and time, not biome or location. However, biome affects raid difficulty indirectly: mountain maps provide natural choke points that make any faction easier to defend against, while flat valley maps give enemies open approaches from multiple directions. Wild animal types do vary by biome — wolves and bears appear in forests, while desert biomes have different predator spawns. The raider factions themselves remain the same regardless of where you build.
        </p>
      </div>

      <aside className="border-l-4 border-accent pl-4 mt-10">
        <h3 className="font-display text-lg text-ink mb-2">Related Guides</h3>
        <ul className="space-y-1">
          <li><Link href="/defense" className="text-accent hover:underline">Complete Defense Guide</Link></li>
          <li><Link href="/combat-positioning" className="text-accent hover:underline">Combat Positioning Tactics</Link></li>
          <li><Link href="/raid-defense-strategy" className="text-accent hover:underline">Raid Defense Strategy</Link></li>
          <li><Link href="/best-weapons-for-defense" className="text-accent hover:underline">Best Weapons for Defense</Link></li>
          <li><Link href="/castle-building-guide" className="text-accent hover:underline">Castle Building Guide</Link></li>
        </ul>
      </aside>

      <p className="text-ink-faded text-sm mt-10">Last updated: July 3, 2026. Enemy faction behavior and archetype data sourced from community testing documentation and r/goingmedieval combat analysis.</p>
    </div>
  );
}
