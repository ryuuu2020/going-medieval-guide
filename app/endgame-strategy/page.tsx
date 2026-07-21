import type { Metadata } from "next";
import SchemaMarkup from "@/shared/SchemaMarkup";

export const metadata: Metadata = {
  title: "Going Medieval Endgame Strategy Guide 2026 — Survive Year 5+ Raids",
  description: "Complete Going Medieval endgame guide covering defense layouts, production chains, settler specialization, and surviving massive Year 5+ raids. Tested strategies for hardest difficulty.",
};

const defenseTiers = [
  { tier: "S", name: "Killbox + Moat", strength: "Handles 30+ raiders", cost: "2,000 clay + 500 wood", description: "A 3-tile-wide killbox with a 2-tile-deep moat funneling enemies into a crossbow firing line. Unbeatable when fully built." },
  { tier: "A", name: "Double-Layer Merlons", strength: "Handles 20-25 raiders", cost: "1,200 clay", description: "Two layers of merlons with a firing step behind. Archers on the high layer, crossbows on the low layer. Excellent coverage but vulnerable to trebuchets." },
  { tier: "B", name: "Wall + Tower Combo", strength: "Handles 15-20 raiders", cost: "800 clay + 300 wood", description: "Stone walls with wooden towers at corners. Solid midgame defense that buys time but can be overwhelmed by large raids." },
  { tier: "C", name: "Single Wall Ring", strength: "Handles 10-15 raiders", cost: "500 clay", description: "Basic perimeter wall. Adequate for early years but insufficient by Year 4. Upgrade to tier A or S before Year 5." },
];

const yearScaling = [
  { year: "Year 1-2", raidSize: "3-6 raiders", weaponTier: "Clubs, basic bows", recommendedDefense: "Wooden walls, 2 archers" },
  { year: "Year 3-4", raidSize: "8-12 raiders", weaponTier: "Iron weapons, crossbows", recommendedDefense: "Stone walls, 4 crossbowmen, moat started" },
  { year: "Year 5-6", raidSize: "15-22 raiders", weaponTier: "Steel weapons, shields", recommendedDefense: "Killbox operational, 6+ crossbowmen, full moat" },
  { year: "Year 7-8", raidSize: "25-35 raiders", weaponTier: "Steel armor, trebuchets", recommendedDefense: "Double-layer defenses, 8+ ranged, dedicated melee squad" },
  { year: "Year 9+", raidSize: "35-50 raiders", weaponTier: "Full steel, siege engines", recommendedDefense: "Max defenses, 12+ ranged, emergency bunker, production lines for ammo" },
];

export default function EndgamePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-100">
      <SchemaMarkup type="article" title="Going Medieval Endgame Strategy 2026" description="Complete endgame guide for surviving Year 5+ raids" />
      
      <h1 className="text-3xl font-bold mb-3">Going Medieval Endgame Strategy Guide — Survive Year 5+ Raids</h1>
      <p className="text-gray-400 mb-8 text-lg">The game changes dramatically after Year 5. Raids grow from small skirmishes to massive sieges. If your colony isn't prepared, you lose everything. Here is exactly what you need to survive.</p>

      {/* Raid Scaling Table */}
      <h2 className="text-2xl font-semibold mt-6 mb-4">Raid Difficulty Scaling</h2>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse border border-gray-700">
          <thead>
            <tr className="bg-gray-800">
              <th className="border border-gray-600 p-2 text-left">Year</th>
              <th className="border border-gray-600 p-2 text-left">Raid Size</th>
              <th className="border border-gray-600 p-2 text-left">Enemy Gear</th>
              <th className="border border-gray-600 p-2 text-left">Recommended Defense</th>
            </tr>
          </thead>
          <tbody>
            {yearScaling.map((y) => (
              <tr key={y.year} className="hover:bg-gray-800/50">
                <td className="border border-gray-600 p-2 font-semibold text-yellow-400">{y.year}</td>
                <td className="border border-gray-600 p-2 text-red-400">{y.raidSize}</td>
                <td className="border border-gray-600 p-2">{y.weaponTier}</td>
                <td className="border border-gray-600 p-2 text-green-400">{y.recommendedDefense}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Defense Tier List */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Defense Layout Tier List</h2>
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm border-collapse border border-gray-700">
          <thead>
            <tr className="bg-gray-800">
              <th className="border border-gray-600 p-2 text-left">Tier</th>
              <th className="border border-gray-600 p-2 text-left">Layout</th>
              <th className="border border-gray-600 p-2 text-left">Strength</th>
              <th className="border border-gray-600 p-2 text-left">Cost</th>
              <th className="border border-gray-600 p-2 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            {defenseTiers.map((d) => (
              <tr key={d.tier} className="hover:bg-gray-800/50">
                <td className="border border-gray-600 p-2 font-bold text-lg">{d.tier}</td>
                <td className="border border-gray-600 p-2 font-semibold">{d.name}</td>
                <td className="border border-gray-600 p-2">{d.strength}</td>
                <td className="border border-gray-600 p-2 text-yellow-300">{d.cost}</td>
                <td className="border border-gray-600 p-2 text-xs">{d.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Endgame Production Chains</h2>
      <p className="mb-4">By Year 5, you need industrial-scale production. Here is the minimum production capacity for a colony of 12 settlers facing Year 7+ raids:</p>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Food:</strong> 2 full-time farmers + 1 cook. Your food storage should never drop below 500 units. A single bad harvest during a siege means starvation.</li>
        <li><strong>Steel:</strong> 2 smelters running continuously. Each smelter produces 1 steel ingot per 30 seconds. Arrows, bolts, armor, and weapons all need steel. Without constant production, your defenders run out of ammunition during sieges.</li>
        <li><strong>Medicine:</strong> 1 herbalist with at least 50 herbal medicine stockpiled. A Year 7 raid will wound 3-5 settlers. Without medicine, wounds become infections, and infections kill in 2-3 days.</li>
        <li><strong>Alcohol:</strong> 1 brewer producing constantly. Alcohol is not a luxury — it is a mood stabilizer. During extended sieges, settlers panic without alcohol, reducing combat effectiveness by 30%.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Settler Specialization for Endgame</h2>
      <p className="mb-4">By Year 5, every settler should have a dedicated role. Generalists die in the endgame:</p>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li><strong>6 Combat Settlers:</strong> 4 crossbowmen (long range) + 2 melee (close defense). These settlers do nothing but train and fight. Assign them a dedicated barracks near the killbox.</li>
        <li><strong>3 Production Settlers:</strong> 2 smelters/blacksmiths + 1 tailor. These maintain your weapon, armor, and clothing supply chain. Without constant production, your combat settlers eventually fight in tattered clothes with broken weapons.</li>
        <li><strong>3 Support Settlers:</strong> 1 farmer, 1 cook, 1 medic. These keep everyone alive. Never pull them from their roles during combat — their jobs are irreplaceable.</li>
      </ul>

      {/* FAQ */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">FAQ</h2>
      <div className="space-y-4 mb-8">
        <div>
          <h3 className="font-semibold text-lg">Q: When should I transition from wood to stone walls?</h3>
          <p className="text-gray-300">Year 2. Stone walls take 3x longer for raiders to break compared to wood. Waiting until Year 3 means facing Year 3 raids (8-12 raiders with iron weapons) using Year 1 defenses. The transition costs ~500 clay — start stockpiling clay by Year 1 Autumn.</p>
        </div>
        <div>
          <h3 className="font-semibold text-lg">Q: Is a killbox absolutely necessary?</h3>
          <p className="text-gray-300">By Year 6, yes. Without a killbox, raiders attack your walls at random points, spreading your defenders thin. A killbox forces all enemies into a single chokepoint where your entire force concentrates fire. This turns a 15-vs-6 fight into a 15-vs-6-at-one-chokepoint fight, which your 6 can win.</p>
        </div>
        <div>
          <h3 className="font-semibold text-lg">Q: What about underground bases?</h3>
          <p className="text-gray-300">Underground bases are immune to trebuchets and reduce raid damage but have critical weaknesses: food production requires sunlight (surface greenhouses), and settlers take a mood penalty from lack of outdoor time. Use underground for storage and emergency bunkers, not as your primary living space.</p>
        </div>
      </div>

      <div className="mt-10 p-5 border border-gray-700 rounded-lg bg-gray-900 text-center">
        <p className="text-gray-300 mb-2 text-sm">Build your ultimate medieval colony:</p>
        <a href="https://store.steampowered.com/app/1029780/?curator_clanid=46198091" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded transition-colors text-lg">
          Buy Going Medieval on Steam
        </a>
      </div>
    </div>
  );
}
