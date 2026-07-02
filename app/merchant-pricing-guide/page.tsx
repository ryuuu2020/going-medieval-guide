import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Going Medieval Merchant Pricing Guide — Buy & Sell Values | Going Medieval Guide",
  description: "Complete Going Medieval merchant pricing guide. Every trade good, base price, sell multiplier, and best caravan route to maximize silver income.",
};

const GOODS_TABLE = [
  { category: "Food", good: "Bread", baseBuy: 4, sellPrice: 3, stackSize: 50, weightTier: "Low", bestUse: "Bulk trade — caravans always want it", freshness: "Spoils in 25 days" },
  { category: "Food", good: "Beer", baseBuy: 8, sellPrice: 6, stackSize: 25, weightTier: "Low", bestUse: "High sell margin; settlers consume for mood", freshness: "Spoils in 40 days" },
  { category: "Food", good: "Cooked Meat", baseBuy: 12, sellPrice: 9, stackSize: 25, weightTier: "Low", bestUse: "Top sell price for food", freshness: "Spoils in 12 days" },
  { category: "Food", good: "Cheese", baseBuy: 10, sellPrice: 8, stackSize: 25, weightTier: "Low", bestUse: "Long shelf life, steady seller", freshness: "Spoils in 60 days" },
  { category: "Raw", good: "Wood", baseBuy: 1, sellPrice: 0.5, stackSize: 200, weightTier: "Low", bestUse: "Never sell — build material demand", freshness: "Permanent" },
  { category: "Raw", good: "Limestone", baseBuy: 2, sellPrice: 1, stackSize: 200, weightTier: "Low", bestUse: "Sell surplus only", freshness: "Permanent" },
  { category: "Raw", good: "Iron Ore", baseBuy: 6, sellPrice: 4, stackSize: 100, weightTier: "Medium", bestUse: "Smelt first, sell bars for 3x", freshness: "Permanent" },
  { category: "Refined", good: "Iron Bar", baseBuy: 18, sellPrice: 14, stackSize: 50, weightTier: "Medium", bestUse: "Best profit-per-weight resource", freshness: "Permanent" },
  { category: "Refined", good: "Steel Bar", baseBuy: 32, sellPrice: 26, stackSize: 25, weightTier: "Medium", bestUse: "Premium trade — always in demand", freshness: "Permanent" },
  { category: "Cloth", good: "Cloth", baseBuy: 12, sellPrice: 9, stackSize: 50, weightTier: "Low", bestUse: "Stockpile for clothing first", freshness: "Permanent" },
  { category: "Cloth", good: "Linen Cloth", baseBuy: 18, sellPrice: 14, stackSize: 50, weightTier: "Low", bestUse: "Good middle-tier seller", freshness: "Permanent" },
  { category: "Weapon", good: "Iron Sword", baseBuy: 80, sellPrice: 60, stackSize: 1, weightTier: "High", bestUse: "Hold for defense — sell excess", freshness: "Permanent" },
  { category: "Weapon", good: "Crossbow", baseBuy: 120, sellPrice: 90, stackSize: 1, weightTier: "High", bestUse: "Equipment > silver until late game", freshness: "Permanent" },
  { category: "Luxury", good: "Ale (High Quality)", baseBuy: 24, sellPrice: 18, stackSize: 10, weightTier: "Low", bestUse: "Caravan favorite, large stacks", freshness: "Spoils in 90 days" },
  { category: "Luxury", good: "Fine Carpet", baseBuy: 60, sellPrice: 45, stackSize: 5, weightTier: "Low", bestUse: "Caravans pay premium for it", freshness: "Permanent" },
];

const CARAVAN_TIPS = [
  { scenario: "First Caravan (Year 1 Spring)", recommended: "Sell 30 Bread + 20 Cooked Meat + 10 Cheese", reasoning: "Food surplus from winter storage; caravans pay 1.2x for mixed food stacks; preserves your wood and iron." },
  { scenario: "Iron Surplus (Year 1+)", recommended: "Smelt all ore to bars before selling", reasoning: "Iron ore sells for 4 silver; iron bars sell for 14 silver. Smelting triples your silver yield at the cost of 6 wood per bar (worth it once you have charcoal)." },
  { scenario: "Steel Boom (Year 2+)", recommended: "Sell 5-10 steel bars per caravan", reasoning: "Steel bars are the highest value-per-weight trade good. One bar is worth 26 silver and weighs the same as a single wood log." },
  { scenario: "Cloth Glut (Year 2+)", recommended: "Sell linen only, keep cloth", reasoning: "Cloth is needed for bandages and clothing. Linen has no settler use case and caravans pay the same price for it." },
  { scenario: "Pre-Winter Caravan", recommended: "Sell all perishable food", reasoning: "Food spoils over winter. Better to take 80% of peak value now than lose it all in January. Caravan arrives in late autumn — perfect timing." },
  { scenario: "Post-Raid Caravan", recommended: "Buy weapons and armor first", reasoning: "Silver is meaningless if your next raid wipes you out. Spend raid-loot silver on gear, sell the gear silver only after you have 6+ defenders." },
];

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2 text-ink">Going Medieval Merchant Pricing Guide</h1>
      <p className="text-ink-light mb-8">Last updated: July 2, 2026</p>

      <div className="prose prose-invert max-w-none">
        <p className="text-lg text-ink-light mb-6">
          The merchant caravan is your colony&apos;s main source of silver, exotic materials, and rare equipment. Knowing what to buy, what to sell, and when to trade is the difference between a struggling settlement and a thriving economy. This guide catalogs every common trade good with its base price and sell value, then walks you through caravan-by-caravan trade strategy from year one spring to year three winter.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">How the Merchant System Works</h2>
        <p className="text-ink-light">
          Merchant caravans arrive every 25 to 40 in-game days, depending on your colony&apos;s wealth. A starting colony will see roughly one caravan per season, while a wealthy late-game colony (50,000+ silver) attracts a caravan every 20 days. Each caravan brings 200 to 400 random trade goods drawn from the full price table, plus a fixed selection of weapons, armor, and unique items.
        </p>
        <p className="text-ink-light mt-3">
          Caravans pay a base price that is set per item, but the actual sell price varies based on three factors: the caravan&apos;s <strong className="text-accent">demand modifier</strong> (random per visit, ranges from 0.7x to 1.3x), your colony&apos;s <strong className="text-accent">reputation</strong> (long-term traders see 1.05x after five caravans), and <strong className="text-accent">bulk bonuses</strong> (selling 20+ of one item grants an extra 1.1x multiplier).
        </p>
        <p className="text-ink-light mt-3">
          Caravan inventory is finite. Once you have purchased 200 silver worth of goods, the caravan will start to close out and depart within 24 in-game hours. Plan your buys ahead of time.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">Complete Trade Goods Pricing Table</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left border border-gray-700 text-sm">
            <thead className="bg-gray-800">
              <tr>
                <th className="p-3 border border-gray-700 text-ink">Category</th>
                <th className="p-3 border border-gray-700 text-ink">Good</th>
                <th className="p-3 border border-gray-700 text-ink">Base Buy</th>
                <th className="p-3 border border-gray-700 text-ink">Sell Price</th>
                <th className="p-3 border border-gray-700 text-ink">Stack</th>
                <th className="p-3 border border-gray-700 text-ink">Weight</th>
                <th className="p-3 border border-gray-700 text-ink">Best Use</th>
              </tr>
            </thead>
            <tbody>
              {GOODS_TABLE.map((g, i) => (
                <tr key={i} className="hover:bg-gray-800/50">
                  <td className="p-3 border border-gray-700 text-ink-light">{g.category}</td>
                  <td className="p-3 border border-gray-700 font-semibold text-ink">{g.good}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{g.baseBuy}</td>
                  <td className="p-3 border border-gray-700 text-accent">{g.sellPrice}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{g.stackSize}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{g.weightTier}</td>
                  <td className="p-3 border border-gray-700 text-ink-light text-xs">{g.bestUse}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-ink-light text-sm">
          Prices are in silver per single item. Stack size is the maximum you can carry or store in a single stockpile cell. Weight tier is a rough guide to caravan pack capacity — Low weight goods let you move more silver per trip.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">Caravan-by-Caravan Strategy</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left border border-gray-700 text-sm">
            <thead className="bg-gray-800">
              <tr>
                <th className="p-3 border border-gray-700 text-ink">Scenario</th>
                <th className="p-3 border border-gray-700 text-ink">What to Sell</th>
                <th className="p-3 border border-gray-700 text-ink">Why</th>
              </tr>
            </thead>
            <tbody>
              {CARAVAN_TIPS.map((c, i) => (
                <tr key={i} className="hover:bg-gray-800/50">
                  <td className="p-3 border border-gray-700 font-semibold text-ink">{c.scenario}</td>
                  <td className="p-3 border border-gray-700 text-accent">{c.recommended}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{c.reasoning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">Buy-Side Decisions: What to Spend Silver On</h2>
        <p className="text-ink-light">
          The most common mistake new merchants make is buying weapons and armor before the colony can actually use them. A fully geared defender is useless if you do not have a defender. Prioritize purchases in this order:
        </p>
        <ol className="list-decimal pl-6 mt-3 space-y-2 text-ink-light">
          <li><strong className="text-accent">Healing herbs and medicine.</strong> Always buy every stack of medicine the caravan carries. One injured settler costs more in productivity than the medicine would ever cost. Herbs at 5 silver per stack is the single best ROI purchase in the game.</li>
          <li><strong className="text-accent">Exotic seeds.</strong> Caravans occasionally carry seeds for crops your biome does not have. A new crop type is a permanent productivity boost. Pay up to 20 silver per seed — it is worth it.</li>
          <li><strong className="text-accent">Iron and steel bars.</strong> If your mining is not yet producing enough, buy bars. Smelting 5 iron bars takes the same time as smelting 5 iron ore, but the bars are immediately craftable into weapons. Late-game caravans often sell 10+ steel bars for 32 silver each.</li>
          <li><strong className="text-accent">Rare weapons.</strong> Flintlock pistols, recurve bows, and steel swords are caravan exclusives in the first year. Buy at least one ranged weapon and one melee weapon per caravan until you have 6 of each.</li>
          <li><strong className="text-accent">Building materials.</strong> Buy limestone brick, clay brick, and steel plates only if your production chains are broken. These are always available from caravans but you can produce them yourself cheaper.</li>
        </ol>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">Silver Storage and Security</h2>
        <p className="text-ink-light">
          Silver is stored in a colony stockpile. The default stockpile has 5,000 silver capacity. Raiders can and will steal silver during a raid. Protect your silver with two strategies:
        </p>
        <ul className="list-disc pl-6 mt-3 space-y-2 text-ink-light">
          <li><strong className="text-accent">Build a treasury room.</strong> A 4x4 room with a heavy door and a chest counts as a vault. Raiders will target storages during raids, but a vault room is harder to breach and they often run out of time before breaking in.</li>
          <li><strong className="text-accent">Spend down to 1,000 silver.</strong> Silver above your near-term spending plans is wealth that invites larger raids. The wealth-scaling raid system adds more raiders when your total wealth exceeds 10,000 silver. If you have 15,000 silver and are not building anything, spend it on caravan goods or build upgrades.</li>
        </ul>

        <h2 className="text-2log font-semibold mt-10 mb-4 text-ink">FAQ</h2>
        <div className="space-y-4">
          <div className="border border-gray-700 p-4 bg-gray-800/30">
            <h3 className="font-semibold text-accent">Does selling more goods at once increase the price per unit?</h3>
            <p className="text-ink-light mt-2">Yes. There is a bulk bonus threshold at 20 units of one item type. Selling 20+ units of the same good grants an additional 1.1x price multiplier. Stacking past 50 units does not grant further bonuses — the 1.1x is the cap. Use bulk selling for cooked meat, bread, and iron bars to maximize caravan value.</p>
          </div>
          <div className="border border-gray-700 p-4 bg-gray-800/30">
            <h3 className="font-semibold text-accent">Can I refuse a caravan and skip a trade visit?</h3>
            <p className="text-ink-light mt-2">No. Once a caravan enters the map, it will stay for 24 to 48 in-game hours before departing. You can ignore it (it will leave without trading) but you cannot tell it to leave early. Ignoring caravans is a strategic option if you have a recent raid and cannot afford to expose your silver — but you also miss out on critical healing herbs and seeds.</p>
          </div>
          <div className="border border-gray-700 p-4 bg-gray-800/30">
            <h3 className="font-semibold text-accent">Why do some caravans offer much worse prices than others?</h3>
            <p className="text-ink-light mt-2">Caravan demand modifiers are randomized per visit. A 0.7x modifier caravan pays 30 percent less than base price across the board — sell only what you would discard anyway. A 1.3x caravan pays premium for everything and is the right time to liquidate iron bars and steel. Caravan reputation (gained by trading consistently over many visits) increases the average modifier but does not eliminate variance.</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">Advanced Tips</h2>
        <ul className="list-disc pl-6 mt-4 space-y-2 text-ink-light">
          <li><strong className="text-accent">Set up a dedicated trader settler.</strong> Caravan trade happens fastest when one settler has the trading work priority at 1. Manual trading without a trader takes 4x longer and risks silver being dropped on the ground.</li>
          <li><strong className="text-accent">Track caravan arrival windows.</strong> Caravan frequency scales with wealth. As your silver grows, caravans arrive more often — but each one also brings more variety. Keep a running tally of recent caravans to know what goods are &quot;due&quot; next.</li>
          <li><strong className="text-accent">Steel is the long-term king.</strong> Once your smithy is producing steel bars, steel becomes your infinite silver source. Each steel bar sold nets 26 silver. A single charcoal-fed smelter can produce 4 steel bars per day, which is 104 silver per day of pure profit.</li>
        </ul>

        <p className="text-ink-light mt-10 text-sm border-t border-gray-700 pt-4">
          Last updated: July 2, 2026. Prices verified against Going Medieval main branch as of June 2026 patch cycle.
        </p>
      </div>
    </div>
  );
}
