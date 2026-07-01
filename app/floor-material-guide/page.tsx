import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Going Medieval Floor Material Guide — All Floor Types Compared | Going Medieval Guide",
  description: "Complete Going Medieval floor material guide. Compare hay, wood, limestone, clay brick, and carpet floors for room quality, walk speed, cleanliness, and fire resistance.",
};

const FLOOR_TABLE = [
  { material: "Hay Floor", buildCost: "5 Hay", workToBuild: "3s", beauty: 2, walkSpeed: "100%", cleanliness: -1, fireResist: 0, roomQuality: "-0.5", bestUse: "Animal pens, barns, temporary shelters" },
  { material: "Wood Floor", buildCost: "5 Wood", workToBuild: "5s", beauty: 4, walkSpeed: "100%", cleanliness: 0, fireResist: 0, roomQuality: "+0", bestUse: "Early-game bedrooms, workshops" },
  { material: "Rough Stone Floor", buildCost: "5 Limestone", workToBuild: "7s", beauty: 3, walkSpeed: "95%", cleanliness: -1, fireResist: 1, roomQuality: "-0.3", bestUse: "Basements, storage areas, low-traffic rooms" },
  { material: "Limestone Brick Floor", buildCost: "5 Limestone Brick", workToBuild: "9s", beauty: 6, walkSpeed: "100%", cleanliness: 1, fireResist: 2, roomQuality: "+0.5", bestUse: "Great halls, kitchens, high-traffic corridors" },
  { material: "Clay Brick Floor", buildCost: "5 Clay Brick", workToBuild: "8s", beauty: 5, walkSpeed: "100%", cleanliness: 1, fireResist: 2, roomQuality: "+0.4", bestUse: "Bedrooms, hospitals, general living spaces" },
  { material: "Fine Carpet", buildCost: "10 Cloth", workToBuild: "12s", beauty: 10, walkSpeed: "100%", cleanliness: -2, fireResist: 0, roomQuality: "+1.0", bestUse: "Royal bedrooms, noble quarters, throne rooms" },
  { material: "No Floor (Dirt)", buildCost: "Free", workToBuild: "0s", beauty: 0, walkSpeed: "85%", cleanliness: -3, fireResist: 0, roomQuality: "-1.5", bestUse: "None — always upgrade ASAP" },
];

const ROOM_FLOOR_RECOMMENDATIONS = [
  { room: "Bedroom (Standard)", recommended: "Clay Brick Floor", reason: "Good beauty-to-cost ratio. Settlers spend significant time here sleeping, and the beauty bonus contributes to mood." },
  { room: "Bedroom (Noble)", recommended: "Fine Carpet", reason: "Maximum beauty for noble title requirements. The cleanliness penalty is manageable with a dedicated cleaner." },
  { room: "Great Hall", recommended: "Limestone Brick Floor", reason: "High beauty and fire resistance. The great hall is a gathering point and fire here is catastrophic." },
  { room: "Kitchen", recommended: "Limestone Brick Floor", reason: "Fire resistance is critical. Kitchens have heat sources and a fire can destroy your food supply." },
  { room: "Workshop", recommended: "Wood Floor", reason: "Good early-game option. Upgrade to clay brick once brick production is stable for the beauty bonus." },
  { room: "Hospital", recommended: "Clay Brick Floor", reason: "Cleanliness bonus helps wound recovery. Beauty bonus comforts recovering settlers." },
  { room: "Prison", recommended: "Rough Stone Floor", reason: "Low cost and prisoners do not benefit from beauty. Dirt floor works if you are really tight on resources." },
  { room: "Storage / Stockpile", recommended: "Rough Stone Floor", reason: "Walk speed is the only relevant stat. Rough stone handles this at minimal cost; dirt floor works early on." },
  { room: "Animal Pen", recommended: "Hay Floor", reason: "Animals track filth. Hay is disposable; beauty is irrelevant for animals. Fire risk is acceptable in outdoor pens." },
  { room: "Temple / Church", recommended: "Limestone Brick Floor", reason: "High beauty maximizes room impressiveness for ceremonies and settler mood buffs." },
  { room: "Cellar / Root Cellar", recommended: "Rough Stone Floor", reason: "No fire sources nearby, so fire resistance is not critical. Rough stone keeps costs low." },
];

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2 text-ink">Going Medieval Floor Material Guide</h1>
      <p className="text-ink-light mb-8">Last updated: July 2026</p>

      <div className="prose prose-invert max-w-none">
        <p className="text-lg text-ink-light mb-6">
          Flooring is one of the most overlooked aspects of colony design in Going Medieval. The material under your settlers&apos; feet directly impacts room quality scores, movement speed, cleanliness ratings, and fire vulnerability. This guide breaks down every floor type, then recommends the best material for each room in your settlement.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">How Floor Materials Affect Gameplay</h2>
        <p className="text-ink-light">
          Floor materials influence five core mechanics simultaneously. The <strong className="text-accent">beauty</strong> stat contributes directly to room impressiveness, which feeds into settler mood through the room quality system. A bedroom with a +0.5 floor versus a -1.5 dirt floor can be the difference between a content settler and a mental break.
        </p>
        <p className="text-ink-light mt-3">
          <strong className="text-accent">Walk speed</strong> affects how quickly settlers move through a room. While most floors provide 100 percent speed, dirt floors slow settlers by 15 percent. Over hundreds of in-game days, this adds up to significant lost work time — especially in high-traffic corridors and workshops.
        </p>
        <p className="text-ink-light mt-3">
          <strong className="text-accent">Cleanliness</strong> determines how quickly a room accumulates filth. Negative cleanliness floors act as dirt magnets, requiring more janitor labor. Positive cleanliness floors stay cleaner longer. This is critical for hospitals (where cleanliness affects infection chance) and kitchens (where it affects food poisoning risk).
        </p>
        <p className="text-ink-light mt-3">
          <strong className="text-accent">Fire resistance</strong> is the most situational but most catastrophic stat. Rooms with heat sources — kitchens, smithies, smelters — are fire hazards. A fire on a zero-resistance floor can cascade through your entire colony. Floors with fire resistance 1 or 2 contain fires to the source room.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">Complete Floor Material Comparison</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left border border-gray-700 text-sm">
            <thead className="bg-gray-800">
              <tr>
                <th className="p-3 border border-gray-700 text-ink">Floor Material</th>
                <th className="p-3 border border-gray-700 text-ink">Build Cost</th>
                <th className="p-3 border border-gray-700 text-ink">Work</th>
                <th className="p-3 border border-gray-700 text-ink">Beauty</th>
                <th className="p-3 border border-gray-700 text-ink">Speed</th>
                <th className="p-3 border border-gray-700 text-ink">Clean</th>
                <th className="p-3 border border-gray-700 text-ink">Fire</th>
                <th className="p-3 border border-gray-700 text-ink">Room Q</th>
                <th className="p-3 border border-gray-700 text-ink">Best Use</th>
              </tr>
            </thead>
            <tbody>
              {FLOOR_TABLE.map((f, i) => (
                <tr key={i} className="hover:bg-gray-800/50">
                  <td className="p-3 border border-gray-700 font-semibold text-ink">{f.material}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{f.buildCost}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{f.workToBuild}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{f.beauty}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{f.walkSpeed}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{f.cleanliness}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{f.fireResist}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{f.roomQuality}</td>
                  <td className="p-3 border border-gray-700 text-ink-light text-xs">{f.bestUse}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">Room-by-Room Floor Recommendations</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left border border-gray-700 text-sm">
            <thead className="bg-gray-800">
              <tr>
                <th className="p-3 border border-gray-700 text-ink">Room Type</th>
                <th className="p-3 border border-gray-700 text-ink">Recommended Floor</th>
                <th className="p-3 border border-gray-700 text-ink">Reasoning</th>
              </tr>
            </thead>
            <tbody>
              {ROOM_FLOOR_RECOMMENDATIONS.map((r, i) => (
                <tr key={i} className="hover:bg-gray-800/50">
                  <td className="p-3 border border-gray-700 font-semibold text-ink">{r.room}</td>
                  <td className="p-3 border border-gray-700 text-accent">{r.recommended}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{r.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">Floor Upgrade Priority Order</h2>
        <p className="text-ink-light">
          You cannot floor your entire colony on day one. Follow this priority order to get the maximum benefit from every piece of flooring you place:
        </p>
        <ol className="list-decimal pl-6 mt-3 space-y-2 text-ink-light">
          <li><strong className="text-accent">Kitchen floor</strong> — Upgrade from dirt to wood immediately. Fire resistance upgrade to brick is the single highest-ROI flooring investment in the game. A kitchen fire on a dirt or wood floor can wipe your entire food stockpile in seconds.</li>
          <li><strong className="text-accent">Hospital floor</strong> — At minimum, use wood. Upgrade to clay brick when you have brick production. The cleanliness bonus directly reduces infection chance, which is often the difference between a settler living or dying after a raid injury.</li>
          <li><strong className="text-accent">High-traffic corridors</strong> — Any path settlers walk 20-plus times per day should never be dirt. The 15 percent walk speed penalty compounds over time into massive efficiency losses. Wood is fine early; upgrade to brick in mid-game.</li>
          <li><strong className="text-accent">Great Hall floor</strong> — Your great hall is the single largest source of settler mood. Limestone brick floor pushes the room quality high enough for the impressive dining room mood buff, which lasts all day.</li>
          <li><strong className="text-accent">Bedroom floors</strong> — Individual bedrooms are lower priority because each only affects one settler at a time. Upgrade from dirt only after the four items above are complete.</li>
        </ol>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">Fire Safety: The Hidden Floor Mechanic</h2>
        <p className="text-ink-light">
          Fire mechanics in Going Medieval are binary at the floor level. A floor with zero fire resistance will catch fire and spread it to adjacent tiles within the same room almost instantly. A floor with fire resistance of 1 or higher will not spread fire beyond the initial ignition point, containing it to a single tile until the fire burns out or is extinguished.
        </p>
        <p className="text-ink-light mt-3">
          This makes fire-resistant flooring the single most important structural upgrade in any room with a heat source. The cost difference between wood floor and limestone brick floor is trivial compared to the cost of rebuilding an entire wing of your colony after a fire. Every room containing a campfire, torch, brazier, smelter, forge, or kitchen stove should have fire-resistant flooring by the end of year one.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">FAQ</h2>
        <div className="space-y-4">
          <div className="border border-gray-700 p-4 bg-gray-800/30">
            <h3 className="font-semibold text-accent">Does floor material affect settler walk speed differently based on the settler&apos;s traits?</h3>
            <p className="text-ink-light mt-2">No. Walk speed penalties from floor materials are applied uniformly to all settlers regardless of traits. A settler with the Quick trait will still move 15 percent faster than a normal settler on a dirt floor, but the dirt floor penalty applies on top of trait bonuses — Quick settler speed on dirt is effectively their base speed on normal flooring. The 85 percent dirt speed is a hard cap modifier.</p>
          </div>
          <div className="border border-gray-700 p-4 bg-gray-800/30">
            <h3 className="font-semibold text-accent">Should I floor outdoor areas or only indoor rooms?</h3>
            <p className="text-ink-light mt-2">Indoor floors are the priority. Outdoor walkways between buildings benefit from flooring if they are used very frequently, but outdoor flooring does not contribute to room quality since outdoor spaces do not count as rooms. Focus your resources on indoor flooring first. For outdoor paths, rough stone floor is the most cost-effective option — it is cheap to build and eliminates the dirt walk speed penalty.</p>
          </div>
          <div className="border border-gray-700 p-4 bg-gray-800/30">
            <h3 className="font-semibold text-accent">Can I mix different floor types in the same room?</h3>
            <p className="text-ink-light mt-2">Yes, but the game averages the stats of all floor tiles in a room when calculating room quality. If half your bedroom is fine carpet and half is dirt, the room quality will land somewhere in between. For maximum efficiency, use a single floor type per room. The only exception is placing fire-resistant flooring in a 2x2 area immediately around heat sources while keeping cheaper flooring elsewhere — this is a valid mid-game compromise for budget-conscious colonies.</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">Advanced Tips</h2>
        <ul className="list-disc pl-6 mt-4 space-y-2 text-ink-light">
          <li><strong className="text-accent">Hay is disposable.</strong> In animal pens, do not waste time cleaning hay floors — just replace them. Hay is one of the cheapest materials in the game. Let it get filthy for a season, then deconstruct and rebuild in five seconds.</li>
          <li><strong className="text-accent">Carpet is a trap early.</strong> Fine carpet has the highest beauty but requires cloth, which competes with winter clothing, bandages, and trade goods. Do not carpet anything until your textile production significantly exceeds your clothing needs. Year two is the earliest you should consider carpet.</li>
          <li><strong className="text-accent">Limestone brick is the all-round king.</strong> It has the best combination of beauty, cleanliness, and fire resistance. Once your brick production chain is running — limestone quarry plus kiln — switch all indoor floors to limestone brick as resources allow.</li>
          <li><strong className="text-accent">Dirt floors attract filth at triple the rate of clean floors.</strong> A room with dirt floor requires approximately three times more cleaning labor than the same room with a positive-cleanliness floor. Factor cleaning labor into your work priority calculations.</li>
        </ul>

        <p className="text-ink-light mt-10 text-sm border-t border-gray-700 pt-4">
          Last updated: July 1, 2026. Floor stats verified against Going Medieval experimental branch as of June 2026 patch cycle.
        </p>
      </div>
    </div>
  );
}
