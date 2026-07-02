import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Going Medieval Heating System Guide — Campfires, Braziers & Fire Risk | Going Medieval Guide",
  description: "Complete Going Medieval heating system guide. Campfires, braziers, torches, and chimneys — room warmth math, fuel costs, and fire prevention strategy.",
};

const HEAT_SOURCES = [
  { source: "Campfire", warmth: "+8 C", radius: "3 tiles", fuelPerDay: "8 Wood", fireRisk: "High", buildCost: "10 Wood", bestUse: "Bedrooms, common rooms" },
  { source: "Brazier", warmth: "+12 C", radius: "4 tiles", fuelPerDay: "5 Wood + 1 Coal", fireRisk: "Medium", buildCost: "20 Wood + 5 Iron", bestUse: "Great hall, workshops" },
  { source: "Torch", warmth: "+2 C", radius: "1 tile", fuelPerDay: "0 (passive)", fireRisk: "Low", buildCost: "3 Wood", bestUse: "Hallways, light only" },
  { source: "Fireplace", warmth: "+15 C", radius: "5 tiles", fuelPerDay: "10 Wood", fireRisk: "Low (with chimney)", buildCost: "30 Stone + 15 Wood", bestUse: "Noble bedrooms, libraries" },
  { source: "Forge", warmth: "+20 C", radius: "6 tiles", fuelPerDay: "12 Coal", fireRisk: "Medium", buildCost: "40 Stone + 20 Iron", bestUse: "Smithy only" },
  { source: "Smelter", warmth: "+25 C", radius: "5 tiles", fuelPerDay: "15 Coal", fireRisk: "High", buildCost: "60 Stone + 30 Iron", bestUse: "Smelting only" },
  { source: "Oven (Kitchen)", warmth: "+10 C", radius: "3 tiles", fuelPerDay: "6 Wood", fireRisk: "High", buildCost: "25 Stone + 10 Clay", bestUse: "Kitchen only" },
];

const ROOM_TEMPS = [
  { season: "Spring", outdoorAvg: 12, roomNoHeat: 9, roomWithCampfire: 17, roomWithFireplace: 22, settlerComfort: "Mild chill" },
  { season: "Summer", outdoorAvg: 22, roomNoHeat: 21, roomWithCampfire: 29, roomWithFireplace: 32, settlerComfort: "Hot — risk of heatstroke" },
  { season: "Autumn", outdoorAvg: 10, roomNoHeat: 7, roomWithCampfire: 15, roomWithFireplace: 20, settlerComfort: "Cold at night" },
  { season: "Winter (Mild)", outdoorAvg: -2, roomNoHeat: -5, roomWithCampfire: 3, roomWithFireplace: 9, settlerComfort: "Cold — mood penalty" },
  { season: "Winter (Severe)", outdoorAvg: -18, roomNoHeat: -22, roomWithCampfire: -10, roomWithFireplace: -2, settlerComfort: "Lethal without heat" },
  { season: "Snowmelt", outdoorAvg: 3, roomNoHeat: 1, roomWithCampfire: 9, roomWithFireplace: 14, settlerComfort: "Wet cold" },
];

const FUEL_COSTS = [
  { fuel: "Wood Log", warmthPerUnit: "0.8 C", burnTimePerUnit: "1.2 hours", cost: "1 wood = 1 fuel unit", source: "Forestry, chopping" },
  { fuel: "Charcoal", warmthPerUnit: "2.0 C", burnTimePerUnit: "1.5 hours", cost: "1 charcoal = 2 fuel units", source: "Charcoal kiln (5 wood = 1 charcoal)" },
  { fuel: "Coal", warmthPerUnit: "3.0 C", burnTimePerUnit: "2.0 hours", cost: "1 coal = 3 fuel units", source: "Underground mining" },
  { fuel: "Peat", warmthPerUnit: "1.0 C", burnTimePerUnit: "1.0 hours", cost: "1 peat = 1 fuel unit", source: "Swamp biomes" },
];

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2 text-ink">Going Medieval Heating System Guide</h1>
      <p className="text-ink-light mb-8">Last updated: July 2, 2026</p>

      <div className="prose prose-invert max-w-none">
        <p className="text-lg text-ink-light mb-6">
          Temperature is one of the most punishing mechanics in Going Medieval. A single cold snap can freeze settlers, ruin crops, and shut down your smithy for an entire season. Mastering the heating system — what to build, where to place it, and how much fuel to stockpile — is the difference between a colony that thrives through winter and one that loses half its population to frostbite.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">How Temperature Works in Going Medieval</h2>
        <p className="text-ink-light">
          Every settler has a comfort range from 12 C to 28 C. Below 12 C, settlers suffer progressive cold penalties: at 8 C they move slower and work efficiency drops by 20 percent. At 4 C, mood starts to crash. At 0 C, frostbite sets in and they will eventually die if not warmed. Above 28 C, the same penalties apply in reverse — heatstroke at 35 C, heat death at 40 C.
        </p>
        <p className="text-ink-light mt-3">
          Room temperature is calculated as the average of outdoor temperature plus the warmth bonus of any heat source in the room, minus the cooling effect of walls (stone walls insulate 1.5x better than wood walls) and weather (rain reduces indoor temp by 2 C, snow by 4 C).
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">All Heat Sources Compared</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left border border-gray-700 text-sm">
            <thead className="bg-gray-800">
              <tr>
                <th className="p-3 border border-gray-700 text-ink">Source</th>
                <th className="p-3 border border-gray-700 text-ink">Warmth</th>
                <th className="p-3 border border-gray-700 text-ink">Radius</th>
                <th className="p-3 border border-gray-700 text-ink">Fuel/Day</th>
                <th className="p-3 border border-gray-700 text-ink">Fire Risk</th>
                <th className="p-3 border border-gray-700 text-ink">Build Cost</th>
                <th className="p-3 border border-gray-700 text-ink">Best Use</th>
              </tr>
            </thead>
            <tbody>
              {HEAT_SOURCES.map((h, i) => (
                <tr key={i} className="hover:bg-gray-800/50">
                  <td className="p-3 border border-gray-700 font-semibold text-ink">{h.source}</td>
                  <td className="p-3 border border-gray-700 text-accent">{h.warmth}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{h.radius}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{h.fuelPerDay}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{h.fireRisk}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{h.buildCost}</td>
                  <td className="p-3 border border-gray-700 text-ink-light text-xs">{h.bestUse}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">Room Temperature by Season</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left border border-gray-700 text-sm">
            <thead className="bg-gray-800">
              <tr>
                <th className="p-3 border border-gray-700 text-ink">Season</th>
                <th className="p-3 border border-gray-700 text-ink">Outdoor Avg</th>
                <th className="p-3 border border-gray-700 text-ink">No Heat</th>
                <th className="p-3 border border-gray-700 text-ink">+ Campfire</th>
                <th className="p-3 border border-gray-700 text-ink">+ Fireplace</th>
                <th className="p-3 border border-gray-700 text-ink">Comfort</th>
              </tr>
            </thead>
            <tbody>
              {ROOM_TEMPS.map((t, i) => (
                <tr key={i} className="hover:bg-gray-800/50">
                  <td className="p-3 border border-gray-700 font-semibold text-ink">{t.season}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{t.outdoorAvg} C</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{t.roomNoHeat} C</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{t.roomWithCampfire} C</td>
                  <td className="p-3 border border-gray-700 text-accent">{t.roomWithFireplace} C</td>
                  <td className="p-3 border border-gray-700 text-ink-light text-xs">{t.settlerComfort}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">Fuel Cost & Efficiency</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left border border-gray-700 text-sm">
            <thead className="bg-gray-800">
              <tr>
                <th className="p-3 border border-gray-700 text-ink">Fuel</th>
                <th className="p-3 border border-gray-700 text-ink">Warmth/Unit</th>
                <th className="p-3 border border-gray-700 text-ink">Burn Time</th>
                <th className="p-3 border border-gray-700 text-ink">Cost Ratio</th>
                <th className="p-3 border border-gray-700 text-ink">Source</th>
              </tr>
            </thead>
            <tbody>
              {FUEL_COSTS.map((f, i) => (
                <tr key={i} className="hover:bg-gray-800/50">
                  <td className="p-3 border border-gray-700 font-semibold text-ink">{f.fuel}</td>
                  <td className="p-3 border border-gray-700 text-accent">{f.warmthPerUnit}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{f.burnTimePerUnit}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{f.cost}</td>
                  <td className="p-3 border border-gray-700 text-ink-light text-xs">{f.source}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">Fire Risk and Prevention</h2>
        <p className="text-ink-light">
          Every heat source has a built-in fire ignition chance per in-game hour. The base chance is 0.05 percent per hour for a campfire on a wood floor, 0.02 percent on a stone floor, and 0.01 percent on a brick floor. Braziers are 0.03 percent on wood, 0.01 percent on stone. Fireplaces with chimneys drop to 0.005 percent. The math sounds small but compounds: a campfire running 16 hours a day has a 1 percent daily fire chance, which over a 30-day winter means a 26 percent chance of burning down your colony.
        </p>
        <p className="text-ink-light mt-3">
          Fire prevention strategy is layered. First, never place a heat source on a wood floor — the fire spreads across wood four times faster than across stone. Second, always place heat sources in rooms with at least one door to outside so settlers can flee. Third, keep a firefighting settler on standby with work priority 1 during winter. Fourth, build a chimney adjacent to any fireplace — chimneys vent smoke (and most fire risk) outside.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">Winter Heating Blueprint</h2>
        <p className="text-ink-light">
          A standard 12-settler colony needs roughly 4 active heat sources in winter to stay alive. The minimum viable setup:
        </p>
        <ol className="list-decimal pl-6 mt-3 space-y-2 text-ink-light">
          <li><strong className="text-accent">One fireplace in the great hall</strong> — covers dining and socializing (16 C target).</li>
          <li><strong className="text-accent">One brazier per 4 bedrooms</strong> — cluster bedrooms near each other to share heat radius (12 C target).</li>
          <li><strong className="text-accent">One campfire in the workshop</strong> — keeps crafting efficient (10 C target, settlers can wear coats for the rest).</li>
          <li><strong className="text-accent">Zero heat in storage rooms</strong> — food spoils faster in warm rooms, store perishables in unheated root cellars.</li>
        </ol>
        <p className="text-ink-light mt-3">
          Total fuel cost for this setup: 30 wood + 5 coal per day. A colony needs roughly 1,500 wood and 250 coal stockpiled before winter to survive a 60-day cold season. Build your stockpile by mid-autumn — caravans in late autumn sometimes sell coal at premium prices.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">FAQ</h2>
        <div className="space-y-4">
          <div className="border border-gray-700 p-4 bg-gray-800/30">
            <h3 className="font-semibold text-accent">Does settler clothing stack with room heating?</h3>
            <p className="text-ink-light mt-2">Yes. Coats add +4 C of personal warmth, separate from room temperature. A settler in a coat in a 4 C room has effective comfort of 8 C. This is why workshops can run cooler than bedrooms — settlers working in the smithy are typically wearing leather aprons or work clothes that add warmth. Reserve your best heating for bedrooms and the great hall where settlers are often in lighter clothing.</p>
          </div>
          <div className="border border-gray-700 p-4 bg-gray-800/30">
            <h3 className="font-semibold text-accent">Can settlers freeze to death in their sleep?</h3>
            <p className="text-ink-light mt-2">Yes, if the bedroom temperature drops below -5 C for more than 6 in-game hours. The death is a slow process — they get frostbite first (visible debuff), then mood crashes, then they collapse. You will see warning icons in the health tab. Always keep bedroom temperature above freezing, even if it means reducing the great hall heat. A dead settler is irreplaceable; a sad settler will recover in spring.</p>
          </div>
          <div className="border border-gray-700 p-4 bg-gray-800/30">
            <h3 className="font-semibold text-accent">What is the best way to heat a large great hall efficiently?</h3>
            <p className="text-ink-light mt-2">Two fireplaces on opposite walls, both vented through chimneys, provide even heat distribution and redundant fire safety. A single central brazier looks efficient but creates a hot-cold gradient that leaves corners freezing. Stone walls around the great hall improve insulation by 50 percent, reducing total fuel needs. For a 12x12 great hall in winter, expect 25 wood + 8 coal per day for the dual-fireplace setup.</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">Advanced Tips</h2>
        <ul className="list-disc pl-6 mt-4 space-y-2 text-ink-light">
          <li><strong className="text-accent">Cluster heat-using rooms.</strong> Build bedrooms, the great hall, and workshops adjacent to each other so heat radius overlaps. A 2x2 grid of rooms shares wall heat, reducing total fuel needs by 30 percent.</li>
          <li><strong className="text-accent">Insulation matters more than fuel.</strong> A stone-walled, roofed room loses heat 60 percent slower than a wood-walled, open-roof room. Spend resources on stone construction before spending silver on more fuel.</li>
          <li><strong className="text-accent">Charcoal is the mid-game cheat code.</strong> Five wood becomes one charcoal in a kiln, and one charcoal produces twice the warmth of one wood. By year two, your entire colony should be running on charcoal, not raw wood.</li>
        </ul>

        <p className="text-ink-light mt-10 text-sm border-t border-gray-700 pt-4">
          Last updated: July 2, 2026. Temperature mechanics verified against Going Medieval main branch as of June 2026 patch cycle.
        </p>
      </div>
    </div>
  );
}
