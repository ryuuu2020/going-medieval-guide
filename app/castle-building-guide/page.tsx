import Link from "next/link";

export const metadata = {
  title: "Going Medieval Castle Building Guide — Full Fortress Construction",
  description: "Learn how to plan and build an entire castle from scratch in Going Medieval. Keep layout, curtain walls, towers, gatehouses, bailey, living quarters, multi-story construction, stability, and defensive layers explained.",
};

const castleZones = [
  { zone: "The Keep", purpose: "Last-resort stronghold, treasury, and settler shelter", location: "Center of the castle, highest ground", minStories: "3 stories", wallMaterial: "Reinforced Stone or Limestone", notes: "Must survive even if outer walls fall. Include a panic room and food stockpile inside." },
  { zone: "Inner Bailey", purpose: "Protected courtyard for workshops, kitchens, and barracks", location: "Surrounding the keep, inside the inner curtain wall", minStories: "1-2 stories", wallMaterial: "Stone Wall", notes: "The daily life of your colony happens here. Keep it walkable and organized." },
  { zone: "Outer Bailey", purpose: "Farms, pastures, and bulk storage", location: "Between inner and outer curtain walls", minStories: "Open ground", wallMaterial: "Stone Wall or Clay Brick", notes: "Acts as a kill zone during raids. Do not place irreplaceable structures here." },
  { zone: "Gatehouse", purpose: "Controlled entry point with murder holes and fallback gate", location: "Single opening in the outer curtain wall", minStories: "2 stories", wallMaterial: "Reinforced Stone", notes: "The most attacked tile in the entire game. Layer it with a drawbridge if possible." },
  { zone: "Corner Towers", purpose: "360-degree archer fire and flanking coverage", location: "Each corner of the outer curtain wall", minStories: "3 stories", wallMaterial: "Stone or Limestone", notes: "Build at least four. Each tower should hold 2-3 archers during a raid." },
  { zone: "Curtain Walls", purpose: "Continuous defensive perimeter with walkable parapet", location: "Connecting towers and gatehouse", minStories: "2 stories (walkable top)", wallMaterial: "Stone Wall minimum", notes: "The parapet floor is where archers stand. Never leave gaps in a curtain wall." },
];

const constructionPhases = [
  { phase: "Phase 1 — Wooden Keep", settlersRequired: "3-4", primaryMaterials: "Wood, Thatch", buildTime: "3-5 days", defenseLevel: "Low", keyGoal: "Establish shelter, storage, and a single bedroom. Survive the first winter." },
  { phase: "Phase 2 — Stone Keep", settlersRequired: "4-5", primaryMaterials: "Stone Blocks", buildTime: "5-7 days", defenseLevel: "Medium", keyGoal: "Replace wood walls with stone. Add arrow slits. Dig underground food storage." },
  { phase: "Phase 3 — Inner Curtain Wall", settlersRequired: "5-6", primaryMaterials: "Stone Blocks, Wood", buildTime: "8-10 days", defenseLevel: "Medium-High", keyGoal: "Enclose your core settlement. Protect workshops and bedrooms from raids." },
  { phase: "Phase 4 — Gatehouse and Towers", settlersRequired: "6-7", primaryMaterials: "Stone Blocks, Iron", buildTime: "6-8 days", defenseLevel: "High", keyGoal: "Build the gatehouse with murder holes. Erect corner towers for archer coverage." },
  { phase: "Phase 5 — Outer Curtain Wall", settlersRequired: "7-8", primaryMaterials: "Stone Blocks, Limestone", buildTime: "10-14 days", defenseLevel: "Very High", keyGoal: "Add the second wall layer. The gap between walls becomes a kill zone." },
  { phase: "Phase 6 — Moat and Final Keep", settlersRequired: "8-10", primaryMaterials: "Reinforced Stone, Iron, Steel", buildTime: "15-20 days", defenseLevel: "Impenetrable", keyGoal: "Dig the moat. Upgrade the keep to maximum tier. Your fortress is complete." },
];

export default function CastleBuildingGuidePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="chapter-heading font-display text-4xl mb-2">
        Castle Building Guide — Full Fortress Construction
      </h1>
      <p className="text-ink-faded text-lg mb-8 drop-cap">
        A player on r/goingmedivial recently asked the question every colony leader eventually faces: "How do you build an entire castle?" The answer is not a single blueprint. It is a phased construction project that spans in-game years, demands careful material planning, and tests your understanding of the stability system at every step. This guide breaks down the full fortress construction process from a wooden keep to a multi-story stone castle with curtain walls, towers, a gatehouse, bailey, and living quarters.
      </p>

      {/* Planning the Castle Layout */}
      <h2 className="chapter-heading font-display text-2xl mt-10 mb-4">
        Planning the Castle Layout
      </h2>
      <p className="text-ink-light mb-4">
        Before placing a single wall, survey your terrain. The best castle sites sit on elevated ground with at least two natural barriers — a cliff, a river, or dense forest — reducing the directions enemies can approach from. Flat open ground is the worst choice because it forces you to defend all four sides equally. Mark your build zone with stockpile areas first so settlers do not plant farms on your future gatehouse.
      </p>
      <p className="text-ink-light mb-4">
        A proper castle has six functional zones: the keep, the inner bailey, the outer bailey, the gatehouse, corner towers, and the curtain walls connecting them. Plan the footprint of each zone before construction begins. A common mistake is building the keep too small and being unable to expand it later because the inner bailey has grown around it. Allocate at least a 7x7 tile area for the keep foundation even if you only build a 3x3 wooden shack initially.
      </p>
      <p className="text-ink-light mb-4">
        Plan for multi-story construction from day one. The keep should reach three stories: ground floor for storage and the vault, second floor for living quarters and the great hall, third floor for archer positions and a panic room. Staircases must be placed inside the keep footprint so they remain protected. Every upper floor depends on the walls below it for structural support, so ground-floor walls must be the strongest material you can afford.
      </p>

      {/* Castle Zones Table */}
      <h2 className="chapter-heading font-display text-2xl mt-10 mb-4">
        Castle Zones and Their Purpose
      </h2>
      <p className="text-ink-light mb-4">
        Each zone of the castle serves a specific defensive and economic function. Understanding these roles prevents the most common layout mistake: mixing military and civilian structures in the same space, which creates pathfinding chaos during raids.
      </p>
      <div className="overflow-x-auto">
        <table className="parchment-table w-full text-sm">
          <thead>
            <tr>
              <th>Zone</th>
              <th>Purpose</th>
              <th>Location</th>
              <th>Min. Stories</th>
              <th>Wall Material</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {castleZones.map((z, i) => (
              <tr key={i}>
                <td className="font-display text-accent">{z.zone}</td>
                <td>{z.purpose}</td>
                <td>{z.location}</td>
                <td className="text-center">{z.minStories}</td>
                <td>{z.wallMaterial}</td>
                <td className="text-ink-light">{z.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Construction Phases */}
      <h2 className="chapter-heading font-display text-2xl mt-10 mb-4">
        Construction Phases — From Wooden Keep to Stone Fortress
      </h2>
      <p className="text-ink-light mb-4">
        The biggest mistake new castle builders make is attempting the full fortress with only three or four settlers. While your builders haul stone, nobody farms, cooks, or researches. The result is a beautiful castle full of starving, miserable settlers. Build in phases, matching construction ambition to your settler count and economic capacity.
      </p>
      <div className="overflow-x-auto">
        <table className="parchment-table w-full text-sm">
          <thead>
            <tr>
              <th>Phase</th>
              <th>Settlers</th>
              <th>Materials</th>
              <th>Build Time</th>
              <th>Defense</th>
              <th>Key Goal</th>
            </tr>
          </thead>
          <tbody>
            {constructionPhases.map((p, i) => (
              <tr key={i}>
                <td className="font-display text-accent">{p.phase}</td>
                <td className="text-center">{p.settlersRequired}</td>
                <td>{p.primaryMaterials}</td>
                <td>{p.buildTime}</td>
                <td>{p.defenseLevel}</td>
                <td className="text-ink-light">{p.keyGoal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Multi-Story Construction and Stability */}
      <h2 className="chapter-heading font-display text-2xl mt-10 mb-4">
        Multi-Story Construction and Stability
      </h2>
      <p className="text-ink-light mb-4">
        Multi-story construction is what separates a shack from a castle. Going Medieval allows vertical stacking up to several stories, but every upper floor transfers its weight to the walls below. The stability overlay (toggled with F7) is your most important tool. Red walls are under maximum load. Green walls are well-supported. Gray means no load at all. Never place an upper floor on walls that show yellow or worse in the overlay.
      </p>
      <p className="text-ink-light mb-4">
        The ground-floor walls of your keep carry the weight of everything above them. They must be the highest-tier material you can produce. A common failure pattern: a player builds a three-story keep with wood walls on the ground floor, then wonders why the second floor collapses during a raid when a single arrow-slit wall tile is destroyed. Use stone walls minimum for any structure reaching two stories, and reinforced stone for three stories and above.
      </p>
      <p className="text-ink-light mb-4">
        Support pillars are mandatory for spans wider than 6 tiles. A curtain wall stretching 20 tiles between two towers needs pillars at intervals of no more than 5 tiles, or the wall will sag and collapse under its own weight. Pillars also serve as renovation insurance: when you upgrade wall materials later, the pillars hold the load while you swap tiles one at a time. See our Renovation Guide for the full tile-by-tile upgrade method.
      </p>

      {/* Defensive Layers */}
      <h2 className="chapter-heading font-display text-2xl mt-10 mb-4">
        Defensive Layers — The Onion Principle
      </h2>
      <p className="text-ink-light mb-4">
        A castle is not a single wall. It is an onion of defensive layers, each one slowing the enemy and giving your archers more time to fire. From outside in: moat, outer curtain wall, kill zone, inner curtain wall, gatehouse with murder holes, corner towers providing flanking fire, and finally the keep as the last stand position. Enemies should face resistance at every step.
      </p>
      <p className="text-ink-light mb-4">
        The gatehouse is your weakest point and the enemy knows it. Raiders pathfind toward gates even when easier routes exist. Concentrate your strongest defenses here: a reinforced iron gate, murder holes in the ceiling above, two flanking towers for crossfire, and a drawbridge over the moat if you can afford the iron. A double-gate system — where enemies break through the outer gate only to find a second gate in a kill zone — is devastating.
      </p>
      <p className="text-ink-light mb-4">
        Corner towers give 360-degree archer coverage and eliminate blind spots along the curtain wall. Build them at least three stories tall so archers can fire over the parapet. Each tower should hold two to three archers with crossbows and a stockpile of bolts. During a raid, pull all archers into the towers and let the walls and moat do the slowing.
      </p>

      {/* Living Quarters and Bailey Economy */}
      <h2 className="chapter-heading font-display text-2xl mt-10 mb-4">
        Living Quarters and the Bailey Economy
      </h2>
      <p className="text-ink-light mb-4">
        The inner bailey is where your colony actually lives. Place bedrooms, the kitchen, the workshop, and the great hall inside the inner curtain wall. Bedrooms should be at least 3x3 tiles with a bed, a lamp, and a chest for personal storage. The great hall doubles as a dining area and a morale booster — a well-decorated great hall with flagstone flooring and a fireplace significantly improves settler mood.
      </p>
      <p className="text-ink-light mb-4">
        The outer bailey holds farms, pastures, and bulk storage. These are economically essential but militarily expendable. If raiders breach the outer wall, they should find only crops and cheap storage — never your armory or treasury. Place the armory and vault inside the keep, behind the inner curtain wall, where they survive even a full breach.
      </p>
      <p className="text-ink-light mb-4">
        A well-planned bailey keeps walk distances short. Settlers walk to the stockpile for every material. If your stone stockpile is on the far side of the outer bailey, construction of the inner keep takes three times longer. Place small material stockpiles adjacent to every active construction site, and relocate them as the project moves.
      </p>

      {/* FAQ */}
      <h2 className="chapter-heading font-display text-2xl mt-10 mb-4">FAQ</h2>

      <div className="bg-parchment-light rounded-lg p-5 mb-4">
        <h3 className="font-display text-accent text-lg mb-2">How long does it take to build a full castle in Going Medieval?</h3>
        <p className="text-ink-light">
          A full fortress with keep, curtain walls, towers, gatehouse, and moat takes roughly 40-60 in-game days spread across multiple construction phases. With 8-10 settlers and steady material supply, you can complete the outer curtain wall by the end of year two and the final reinforced keep by year three. Rushing the project with too few settlers is the number one cause of colony collapse during castle construction.
        </p>
      </div>

      <div className="bg-parchment-light rounded-lg p-5 mb-4">
        <h3 className="font-display text-accent text-lg mb-2">What is the minimum number of settlers needed for castle construction?</h3>
        <p className="text-ink-light">
          Five settlers is the minimum for a basic stone-walled settlement with a gatehouse. Eight to ten settlers is the sweet spot for a full castle with outer walls, towers, and a reinforced keep. The bottleneck is not construction speed — it is the survival economy. While three settlers build walls, someone must farm, cook, hunt, research, and haul. Below five settlers, do not attempt anything larger than a single-story stone keep.
        </p>
      </div>

      <div className="bg-parchment-light rounded-lg p-5 mb-4">
        <h3 className="font-display text-accent text-lg mb-2">Should I build the keep above ground or underground?</h3>
        <p className="text-ink-light">
          Both. The ideal castle combines an above-ground keep for defense and archer positions with underground vaults for food storage, workshops, and a panic room. Underground rooms maintain stable temperature year-round, are immune to trebuchet fire, and protect valuables during raids. Build the keep above ground for military advantage and dig beneath it for economic security. The underground entrance should be inside the keep so it is only accessible after breaching every defensive layer.
        </p>
      </div>

      {/* Related Guides */}
      <aside className="border-l-4 border-accent pl-4 mt-10">
        <h3 className="font-display text-lg text-ink mb-2">Related Guides</h3>
        <ul className="space-y-1">
          <li><Link href="/defense" className="text-accent hover:underline">Complete Defense Guide</Link></li>
          <li><Link href="/best-defense-layout" className="text-accent hover:underline">Best Defense Layouts</Link></li>
          <li><Link href="/structural-mechanics" className="text-accent hover:underline">Structural Mechanics &amp; Stability</Link></li>
          <li><Link href="/renovation-guide" className="text-accent hover:underline">Renovation Guide — Safe Material Upgrades</Link></li>
          <li><Link href="/killbox-design" className="text-accent hover:underline">Killbox Design &amp; Trap Placement</Link></li>
          <li><Link href="/entrance-design" className="text-accent hover:underline">Entrance &amp; Gatehouse Design</Link></li>
          <li><Link href="/base-layout" className="text-accent hover:underline">Base Layout Principles</Link></li>
          <li><Link href="/vertical-stacking" className="text-accent hover:underline">Vertical Stacking &amp; Multi-Story Building</Link></li>
        </ul>
      </aside>

      <p className="text-ink-faded text-sm mt-10">Last updated: July 5, 2026</p>
    </div>
  );
}
