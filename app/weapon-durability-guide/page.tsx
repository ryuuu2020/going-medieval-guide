import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Going Medieval Weapon Durability Guide — Degradation, Repair & Replacement | Going Medieval Guide",
  description: "Complete Going Medieval weapon durability guide. Breakdown rates for all weapon types, repair vs. replace economics, quality level impact on longevity, and maintenance schedules.",
};

const WEAPON_DURABILITY = [
  { weapon: "Wooden Club", qualityMult: "1.0x", baseDurability: 80, degradePerHit: 1.2, degradePerDay: 0.3, repairMaterial: "Wood", repairCost: 3, replaceRecommendation: "Below 40 durability — club is cheap" },
  { weapon: "Short Bow", qualityMult: "1.1x", baseDurability: 100, degradePerHit: 0.8, degradePerDay: 0.4, repairMaterial: "Wood", repairCost: 5, replaceRecommendation: "Below 30 — crafting a new one costs 10 wood" },
  { weapon: "Longbow", qualityMult: "1.2x", baseDurability: 120, degradePerHit: 0.6, degradePerDay: 0.5, repairMaterial: "Wood + Cloth", repairCost: 8, replaceRecommendation: "Below 25 if you have a skilled bowyer" },
  { weapon: "Crossbow", qualityMult: "1.3x", baseDurability: 140, degradePerHit: 0.5, degradePerDay: 0.4, repairMaterial: "Wood + Iron", repairCost: 10, replaceRecommendation: "Repair until broken — iron is scarce early" },
  { weapon: "Iron Sword", qualityMult: "1.2x", baseDurability: 160, degradePerHit: 0.7, degradePerDay: 0.3, repairMaterial: "Iron Ingot", repairCost: 4, replaceRecommendation: "Repair always — iron ingots are cheaper than new sword" },
  { weapon: "Steel Sword", qualityMult: "1.4x", baseDurability: 200, degradePerHit: 0.5, degradePerDay: 0.3, repairMaterial: "Steel Ingot", repairCost: 3, replaceRecommendation: "Repair always — steel sword takes significant labor to craft" },
  { weapon: "Iron Mace", qualityMult: "1.15x", baseDurability: 180, degradePerHit: 0.6, degradePerDay: 0.2, repairMaterial: "Iron Ingot", repairCost: 3, replaceRecommendation: "Repair always — blunt weapons degrade slowly" },
  { weapon: "Great Axe", qualityMult: "1.25x", baseDurability: 150, degradePerHit: 0.9, degradePerDay: 0.4, repairMaterial: "Iron Ingot + Wood", repairCost: 6, replaceRecommendation: "Repair above 40 durability; replace below 25" },
  { weapon: "Pike / Spear", qualityMult: "1.1x", baseDurability: 130, degradePerHit: 0.8, degradePerDay: 0.3, repairMaterial: "Wood + Iron", repairCost: 5, replaceRecommendation: "Repair until broken; pikes are resource-efficient" },
];

const QUALITY_EFFECT = [
  { quality: "Awful (0-20%)", durabilityMult: "0.7x", degradeMult: "1.4x", marketValueMult: "0.5x", practicalAdvice: "Never use in combat. Scrap immediately for materials or sell to trader for anything you can get." },
  { quality: "Poor (20-40%)", durabilityMult: "0.85x", degradeMult: "1.2x", marketValueMult: "0.7x", practicalAdvice: "Training weapons only. Give to settlers practicing melee or ranged skills at archery targets." },
  { quality: "Normal (40-60%)", durabilityMult: "1.0x", degradeMult: "1.0x", marketValueMult: "1.0x", practicalAdvice: "Standard issue for militia. Acceptable for defense if you have no better option." },
  { quality: "Good (60-80%)", durabilityMult: "1.1x", degradeMult: "0.9x", marketValueMult: "1.2x", practicalAdvice: "Standard issue for dedicated soldiers. Good balance of durability and crafting effort." },
  { quality: "Excellent (80-95%)", durabilityMult: "1.3x", degradeMult: "0.7x", marketValueMult: "1.5x", practicalAdvice: "Equip your best melee and ranged fighters. Significantly longer lifespan than normal quality." },
  { quality: "Masterwork (95-100%)", durabilityMult: "1.5x", degradeMult: "0.5x", marketValueMult: "2.0x", practicalAdvice: "Reserve for your absolute best crafter. A masterwork steel sword can last an entire playthrough with minimal repairs." },
];

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2 text-ink">Going Medieval Weapon Durability Guide</h1>
      <p className="text-ink-light mb-8">Last updated: July 2026</p>

      <div className="prose prose-invert max-w-none">
        <p className="text-lg text-ink-light mb-6">
          Weapons in Going Medieval are not permanent — they degrade with every swing and every day of use. Understanding durability mechanics is the difference between having your best fighter charge into a raid with a nearly-broken sword versus a freshly repaired one. This guide covers degradation rates, repair economics, quality modifiers, and when to replace a weapon instead of repairing it.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">How Weapon Durability Works</h2>
        <p className="text-ink-light">
          Every weapon has a base durability pool that decreases through two mechanisms. <strong className="text-accent">Combat degradation</strong> occurs on every successful hit — melee weapons lose durability per swing that connects, and ranged weapons lose durability per arrow or bolt fired. <strong className="text-accent">Passive degradation</strong> is a small daily decay that affects all equipped weapons regardless of use, representing general wear from being carried and exposed to the elements.
        </p>
        <p className="text-ink-light mt-3">
          When a weapon reaches zero durability, it does not disappear — it becomes broken and can still be repaired at a workbench. However, a broken weapon deals significantly reduced damage (roughly 30 percent of normal) and has a chance to fail entirely on each swing, leaving your settler effectively unarmed in combat. The lesson is clear: repair weapons before they break.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">Weapon Durability Comparison Table</h2>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left border border-gray-700 text-sm">
            <thead className="bg-gray-800">
              <tr>
                <th className="p-3 border border-gray-700 text-ink">Weapon</th>
                <th className="p-3 border border-gray-700 text-ink">Q-Mult</th>
                <th className="p-3 border border-gray-700 text-ink">Base Durability</th>
                <th className="p-3 border border-gray-700 text-ink">Degrade/Hit</th>
                <th className="p-3 border border-gray-700 text-ink">Degrade/Day</th>
                <th className="p-3 border border-gray-700 text-ink">Repair Cost</th>
                <th className="p-3 border border-gray-700 text-ink">Replace Advice</th>
              </tr>
            </thead>
            <tbody>
              {WEAPON_DURABILITY.map((w, i) => (
                <tr key={i} className="hover:bg-gray-800/50">
                  <td className="p-3 border border-gray-700 font-semibold text-ink">{w.weapon}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{w.qualityMult}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{w.baseDurability}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{w.degradePerHit}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{w.degradePerDay}</td>
                  <td className="p-3 border border-gray-700 text-accent">{w.repairCost}</td>
                  <td className="p-3 border border-gray-700 text-ink-light text-xs">{w.replaceRecommendation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">Quality Level Impact on Durability</h2>
        <p className="text-ink-light">
          A weapon&apos;s quality level — determined by the crafter&apos;s skill at the time of creation — applies a permanent multiplier to both base durability and degradation rate. Higher quality weapons last substantially longer and degrade substantially slower. This is why investing in a skilled weaponsmith early is one of the highest-ROI decisions a colony can make.
        </p>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left border border-gray-700 text-sm">
            <thead className="bg-gray-800">
              <tr>
                <th className="p-3 border border-gray-700 text-ink">Quality</th>
                <th className="p-3 border border-gray-700 text-ink">Durability Multiplier</th>
                <th className="p-3 border border-gray-700 text-ink">Degrade Multiplier</th>
                <th className="p-3 border border-gray-700 text-ink">Market Value</th>
                <th className="p-3 border border-gray-700 text-ink">Practical Advice</th>
              </tr>
            </thead>
            <tbody>
              {QUALITY_EFFECT.map((q, i) => (
                <tr key={i} className="hover:bg-gray-800/50">
                  <td className="p-3 border border-gray-700 font-semibold text-ink">{q.quality}</td>
                  <td className="p-3 border border-gray-700 text-accent">{q.durabilityMult}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{q.degradeMult}</td>
                  <td className="p-3 border border-gray-700 text-ink-light">{q.marketValueMult}</td>
                  <td className="p-3 border border-gray-700 text-ink-light text-xs">{q.practicalAdvice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">Repair vs. Replace Decision Framework</h2>
        <p className="text-ink-light">
          The repair-versus-replace decision comes down to three factors: the material cost of repair versus crafting new, the labor cost of each option, and the quality of the existing weapon. Use this simple decision tree:
        </p>
        <ul className="list-disc pl-6 mt-3 space-y-2 text-ink-light">
          <li><strong className="text-accent">Repair if:</strong> the weapon is Good quality or higher AND repair materials cost less than 40 percent of crafting cost. The quality multiplier on a good weapon makes it worth preserving.</li>
          <li><strong className="text-accent">Replace if:</strong> the weapon is Normal quality or lower AND current durability is below 25 percent. The small remaining lifespan does not justify repair labor.</li>
          <li><strong className="text-accent">Always repair metal weapons:</strong> iron and steel ingots are limited resources. A repair costing three iron ingots is always cheaper than the eight-to-twelve ingots needed for a new weapon, plus the forging labor.</li>
          <li><strong className="text-accent">Wooden weapons are disposable:</strong> wood is abundant. If a wooden club or short bow drops below 50 percent durability, crafting a new one is often faster than assigning a settler to walk to the workbench, wait for the repair job, and walk back.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">Maintenance Schedule by Role</h2>
        <p className="text-ink-light">
          Different settler roles put different levels of wear on their weapons. A hunter who fires 40 arrows per day will degrade a bow much faster than a guard who stands watch and rarely fights. Schedule repairs accordingly:
        </p>
        <ul className="list-disc pl-6 mt-3 space-y-2 text-ink-light">
          <li><strong className="text-accent">Frontline melee fighters:</strong> Check durability after every raid. These settlers take the most combat actions and will burn through weapons fastest. Keep a spare weapon in their personal stockpile.</li>
          <li><strong className="text-accent">Ranged hunters:</strong> Check every other day. Hunters fire frequently but at wildlife, not armored enemies. Degradation is moderate but steady.</li>
          <li><strong className="text-accent">Guard-post settlers:</strong> Check weekly. Guards rarely engage unless raids breach defenses. Their weapons degrade mostly from passive daily decay.</li>
          <li><strong className="text-accent">Training settlers:</strong> Training weapons degrade fast. Use poor-quality wooden weapons for training — they are practically free and the quality does not matter for skill gain.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">FAQ</h2>
        <div className="space-y-4">
          <div className="border border-gray-700 p-4 bg-gray-800/30">
            <h3 className="font-semibold text-accent">Does weapon durability affect damage output before the weapon breaks?</h3>
            <p className="text-ink-light mt-2">No. A weapon at 10 percent durability deals the same damage per hit as a weapon at 100 percent durability. The only threshold that matters is zero — once broken, damage drops significantly. This means you can safely use a weapon down to single-digit durability as long as you repair it before it hits zero. However, the risk of it breaking mid-raid makes proactive repair the safer strategy.</p>
          </div>
          <div className="border border-gray-700 p-4 bg-gray-800/30">
            <h3 className="font-semibold text-accent">Can I repair weapons during a raid?</h3>
            <p className="text-ink-light mt-2">Technically yes, if you have a workbench accessible and a settler not actively fighting. Practically, no — the repair job takes several seconds of work time, during which your settler is vulnerable and not contributing to defense. Always repair weapons before drafting settlers for combat, never during. Keep a spare weapon stockpile near your defensive positions as a faster alternative to mid-combat repairs.</p>
          </div>
          <div className="border border-gray-700 p-4 bg-gray-800/30">
            <h3 className="font-semibold text-accent">How does rain or weather affect weapon durability?</h3>
            <p className="text-ink-light mt-2">Outdoor exposure to rain accelerates passive degradation for all items, including weapons, by approximately 1.5x to 2x. Weapons stored on outdoor stockpiles degrade visibly faster than weapons stored indoors. Always keep your weapon stockpile under a roof. Even an unroofed room without walls provides some protection. For maximum preservation, store spare weapons in a dedicated armory room with a door.</p>
          </div>
        </div>

        <p className="text-ink-light mt-10 text-sm border-t border-gray-700 pt-4">
          Last updated: July 1, 2026. Durability mechanics tested on Going Medieval stable branch. Exact degradation rates may vary slightly with game updates; always check in-game tooltips for current values.
        </p>
      </div>
    </div>
  );
}
