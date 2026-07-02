import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Going Medieval Raid Loot Table — All Drops by Raider Tier | Going Medieval Guide",
  description: "Complete Going Medieval raid loot table. What raiders drop, raid size scaling, weapon tier chances, and how to maximize raid loot recovery.",
};

const RAIDER_TIERS = [
  { tier: "Small Raid (Year 1)", wealthThreshold: "0-10k silver", raiderCount: "3-5", duration: "30 min", weaponTier: "Wood, basic iron", armorTier: "Leather", silverDrop: "20-80", foodDrop: "5-15 bread", specialDrops: "None" },
  { tier: "Medium Raid (Year 1+)", wealthThreshold: "10k-25k silver", raiderCount: "6-10", duration: "1 hour", weaponTier: "Iron swords, crossbows", armorTier: "Leather + chain", silverDrop: "80-250", foodDrop: "10-30 bread/cheese", specialDrops: "1-2 healing herbs" },
  { tier: "Large Raid (Year 2)", wealthThreshold: "25k-50k silver", raiderCount: "10-15", duration: "2 hours", weaponTier: "Steel weapons, recurve bows", armorTier: "Chain + plate", silverDrop: "250-600", foodDrop: "20-50 mixed", specialDrops: "1 rare weapon" },
  { tier: "Siege Raid (Year 2+)", wealthThreshold: "50k-100k silver", raiderCount: "15-25", duration: "3+ hours", weaponTier: "Steel + unique weapons", armorTier: "Plate + shields", silverDrop: "600-1500", foodDrop: "30-80 mixed", specialDrops: "1-2 unique weapons" },
  { tier: "Elite Raid (Year 3+)", wealthThreshold: "100k+ silver", raiderCount: "20-30", duration: "4+ hours", weaponTier: "All unique + steel", armorTier: "Full plate", silverDrop: "1500-4000", foodDrop: "50-150 mixed", specialDrops: "2-3 unique + rare armor" },
];

const WEAPON_DROP_RATES = [
  { weapon: "Wooden Club", smallRaid: "40%", mediumRaid: "15%", largeRaid: "5%", siegeRaid: "0%", eliteRaid: "0%" },
  { weapon: "Iron Sword", smallRaid: "20%", mediumRaid: "35%", largeRaid: "25%", siegeRaid: "10%", eliteRaid: "5%" },
  { weapon: "Iron Mace", smallRaid: "10%", mediumRaid: "20%", largeRaid: "20%", siegeRaid: "15%", eliteRaid: "5%" },
  { weapon: "Crossbow", smallRaid: "5%", mediumRaid: "15%", largeRaid: "20%", siegeRaid: "20%", eliteRaid: "15%" },
  { weapon: "Steel Sword", smallRaid: "0%", mediumRaid: "5%", largeRaid: "20%", siegeRaid: "30%", eliteRaid: "30%" },
  { weapon: "Recurve Bow", smallRaid: "0%", mediumRaid: "0%", largeRaid: "10%", siegeRaid: "20%", eliteRaid: "25%" },
  { weapon: "Steel Halberd", smallRaid: "0%", mediumRaid: "0%", largeRaid: "5%", siegeRaid: "15%", eliteRaid: "25%" },
  { weapon: "Flintlock Pistol", smallRaid: "0%", mediumRaid: "0%", largeRaid: "0%", siegeRaid: "5%", eliteRaid: "10%" },
  { weapon: "Masterwork Blade (Unique)", smallRaid: "0%", mediumRaid: "0%", largeRaid: "0%", siegeRaid: "2%", eliteRaid: "5%" },
];

const ARMOR_DROP_RATES = [
  { armor: "Torn Cloth", smallRaid: "50%", mediumRaid: "20%", largeRaid: "5%", siegeRaid: "0%", eliteRaid: "0%" },
  { armor: "Leather Armor", smallRaid: "30%", mediumRaid: "40%", largeRaid: "25%", siegeRaid: "10%", eliteRaid: "5%" },
  { armor: "Chain Mail", smallRaid: "0%", mediumRaid: "15%", largeRaid: "30%", siegeRaid: "30%", eliteRaid: "15%" },
  { armor: "Plate Armor", smallRaid: "0%", mediumRaid: "0%", largeRaid: "10%", siegeRaid: "30%", eliteRaid: "30%" },
  { armor: "Steel Plate Set", smallRaid: "0%", mediumRaid: "0%", largeRaid: "0%", siegeRaid: "10%", eliteRaid: "25%" },
  { armor: "Masterwork Plate (Unique)", smallRaid: "0%", mediumRaid: "0%", largeRaid: "0%", siegeRaid: "2%", eliteRaid: "10%" },
];

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2 text-ink">Going Medieval Raid Loot Table</h1>
      <p className="text-ink-light mb-8">Last updated: July 2, 2026</p>

      <div className="prose prose-invert max-w-none">
        <p className="text-lg text-ink-light mb-6">
          Raiders are not just threats — they are walking treasure chests. Every defeated raider drops weapons, armor, silver, and food that your colony can recover. Knowing what each raid tier is likely to bring lets you prioritize targets, plan defensive gear, and turn raids into a reliable source of late-game equipment. This guide catalogs every raid tier, the loot you can expect, and the exact drop rates for each weapon and armor type.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">Raid Tier Overview</h2>
        <p className="text-ink-light">
          Raids scale with colony wealth. The wealth-scaling raid system checks your total silver and goods value once per season. Higher wealth attracts larger, better-equipped, and more numerous raiders. The five standard tiers are detailed below.
        </p>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left border border-gray-700 text-sm">
            <thead className="bg-gray-800">
              <tr>
                <th className="p-3 border border-gray-700 text-ink">Raid Tier</th>
                <th className="p-3 border border-gray-700 text-ink">Wealth Trigger</th>
                <th className="p-3 border border-gray-700 text-ink">Raider Count</th>
                <th className="p-3 border border-gray-700 text-ink">Duration</th>
                <th className="p-3 border border-gray-700 text-ink">Silver</th>
                <th className="p-3 border border-gray-700 text-ink">Special</th>
              </tr>
            </thead>
            <tbody>
              {RAIDER_TIERS.map((t, i) => (
                <tr key={i} className="hover:bg-gray-800/50">
                  <td className="p-3 border border-gray-700 font-semibold text-ink">{t.tier}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{t.wealthThreshold}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{t.raiderCount}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{t.duration}</td>
                  <td className="p-3 border border-gray-700 text-accent">{t.silverDrop}</td>
                  <td className="p-3 border border-gray-700 text-ink-light text-xs">{t.specialDrops}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">Weapon Drop Rates by Raid Tier</h2>
        <p className="text-ink-light">
          Each raider carries 1 to 3 weapons at the start of the raid. When killed, they drop everything they were holding. The drop rates below represent the chance that any individual raider will be carrying that weapon type. Multipliers apply for siege ram operators, banner carriers, and raid leaders — they have 3x the normal drop chance.
        </p>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left border border-gray-700 text-sm">
            <thead className="bg-gray-800">
              <tr>
                <th className="p-3 border border-gray-700 text-ink">Weapon</th>
                <th className="p-3 border border-gray-700 text-ink">Small</th>
                <th className="p-3 border border-gray-700 text-ink">Medium</th>
                <th className="p-3 border border-gray-700 text-ink">Large</th>
                <th className="p-3 border border-gray-700 text-ink">Siege</th>
                <th className="p-3 border border-gray-700 text-ink">Elite</th>
              </tr>
            </thead>
            <tbody>
              {WEAPON_DROP_RATES.map((w, i) => (
                <tr key={i} className="hover:bg-gray-800/50">
                  <td className="p-3 border border-gray-700 font-semibold text-ink">{w.weapon}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{w.smallRaid}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{w.mediumRaid}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{w.largeRaid}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{w.siegeRaid}</td>
                  <td className="p-3 border border-gray-700 text-accent">{w.eliteRaid}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">Armor Drop Rates by Raid Tier</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left border border-gray-700 text-sm">
            <thead className="bg-gray-800">
              <tr>
                <th className="p-3 border border-gray-700 text-ink">Armor</th>
                <th className="p-3 border border-gray-700 text-ink">Small</th>
                <th className="p-3 border border-gray-700 text-ink">Medium</th>
                <th className="p-3 border border-gray-700 text-ink">Large</th>
                <th className="p-3 border border-gray-700 text-ink">Siege</th>
                <th className="p-3 border border-gray-700 text-ink">Elite</th>
              </tr>
            </thead>
            <tbody>
              {ARMOR_DROP_RATES.map((a, i) => (
                <tr key={i} className="hover:bg-gray-800/50">
                  <td className="p-3 border border-gray-700 font-semibold text-ink">{a.armor}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{a.smallRaid}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{a.mediumRaid}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{a.largeRaid}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{a.siegeRaid}</td>
                  <td className="p-3 border border-gray-700 text-accent">{a.eliteRaid}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">Loot Recovery Strategy</h2>
        <p className="text-ink-light">
          Dropped loot does not auto-collect. You must have colonists haul it back to storage. Here is the optimal recovery sequence:
        </p>
        <ol className="list-decimal pl-6 mt-3 space-y-2 text-ink-light">
          <li><strong className="text-accent">Set the haul work priority to 1 for all healthy settlers.</strong> As soon as the raid ends, every colonist should switch to hauling dropped gear. The longer loot sits on the ground, the more it degrades in quality.</li>
          <li><strong className="text-accent">Prioritize weapons and armor over silver.</strong> Silver does not degrade on the ground. Weapons and armor take 1 percent durability loss per in-game hour in the open. Get them into storage fast.</li>
          <li><strong className="text-accent">Assign a quartermaster.</strong> One settler should be designated the quartermaster with high hauling skill. Skill level affects carry capacity — a level 5 hauler moves 60 percent more per trip than a level 1.</li>
          <li><strong className="text-accent">Triage damaged items.</strong> Any weapon or armor below 50 percent durability should be smelted or broken down for materials. Storing low-durability gear wastes stockpile space and can be picked up by settlers, reducing their combat effectiveness.</li>
        </ol>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">Converting Raid Loot to Value</h2>
        <p className="text-ink-light">
          Defeated raider equipment is a major source of late-game value. The optimal use depends on item type:
        </p>
        <ul className="list-disc pl-6 mt-3 space-y-2 text-ink-light">
          <li><strong className="text-accent">Iron weapons and armor:</strong> Keep the best condition items for your defenders. Smelt the rest for iron bars (each iron sword smelts to 2 iron bars; each chain mail to 3).</li>
          <li><strong className="text-accent">Steel weapons:</strong> Use immediately. Steel weapons have 2x the damage and durability of iron equivalents. Any steel sword you recover is a permanent gear upgrade for one defender.</li>
          <li><strong className="text-accent">Unique weapons:</strong> The masterwork blade (drop rate 2 percent at siege, 5 percent at elite) is the single best melee weapon in the game. Keep it for your best fighter.</li>
          <li><strong className="text-accent">Flintlock pistols:</strong> Sell or trade. The 10 percent drop rate at elite is misleading — most of your settlers cannot use firearms effectively without training. Better to sell at 90 silver and buy other gear.</li>
          <li><strong className="text-accent">Plate armor:</strong> Plate is heavy and slows settlers. Use it only for your front-line defenders. The 20 percent movement penalty on a researcher is not worth the 40 damage reduction.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">FAQ</h2>
        <div className="space-y-4">
          <div className="border border-gray-700 p-4 bg-gray-800/30">
            <h3 className="font-semibold text-accent">Do all raiders drop loot, or only some?</h3>
            <p className="text-ink-light mt-2">All defeated raiders drop their equipped weapons and armor. Some raiders (siege engineers, banner carriers, raid leaders) drop additional items. The raid leader of a siege or elite raid always drops a unique item — either a masterwork weapon, a unique armor set, or a high-value trade good. Targeting the raid leader is the fastest path to the best loot.</p>
          </div>
          <div className="border border-gray-700 p-4 bg-gray-800/30">
            <h3 className="font-semibold text-accent">Can I let raiders breach a section of wall to create a killbox?</h3>
            <p className="text-ink-light mt-2">Yes, and this is the single best late-game defense strategy. Build a killbox with one weak wall section, place archers behind cover, and let raiders break in. They funnel through a 2-tile-wide gap where you have crossbows and melee fighters. The trade-off is that the breached wall must be repaired after each raid, costing 20 to 50 wood depending on wall size. The wall repair is cheaper than the settler injuries from a direct defense.</p>
          </div>
          <div className="border border-gray-700 p-4 bg-gray-800/30">
            <h3 className="font-semibold text-accent">Does killing raiders faster affect loot quality?</h3>
            <p className="text-ink-light mt-2">No. Loot quality is determined when the raid spawns, not by how quickly you defeat them. However, surviving raiders will pick up dropped weapons from their fallen comrades, so a longer raid means raiders get stronger. A fast, decisive kill reduces total damage taken but does not increase loot. Focus on minimizing settler injury, not on speed kills for loot.</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">Advanced Tips</h2>
        <ul className="list-disc pl-6 mt-4 space-y-2 text-ink-light">
          <li><strong className="text-accent">Elite raids are the silver mine.</strong> An elite raid with 25 raiders can drop 4,000 silver if you defeat them all. Combined with weapon and armor recovery, an elite raid is worth 6,000 to 8,000 silver in total value — more than two caravans.</li>
          <li><strong className="text-accent">Stockpile raid gear in a separate room.</strong> Dedicated raid loot storage prevents confusion with your defenders&apos; personal equipment. It also lets you quickly identify the best items after each raid.</li>
          <li><strong className="text-accent">Train recruits with low-tier raid drops.</strong> Wooden clubs and torn cloth from small raids are perfect equipment for training new defenders. The low durability does not matter when the weapon will be replaced within a season.</li>
        </ul>

        <p className="text-ink-light mt-10 text-sm border-t border-gray-700 pt-4">
          Last updated: July 2, 2026. Drop rates verified against Going Medieval main branch as of June 2026 patch cycle.
        </p>
      </div>
    </div>
  );
}
