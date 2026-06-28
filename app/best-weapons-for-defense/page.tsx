import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Going Medieval Best Weapons for Defense — Complete Guide (2026)",
  description: "Discover the best weapons for defense in Going Medieval. Complete tier list with damage stats, range comparisons, and optimal weapon loadouts for every combat role.",
};

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Longbow or crossbow — which is better for defense?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Longbows are better for sustained fire from walls due to faster reload speed. Crossbows excel at eliminating heavily armored enemies and enemy archers due to higher per-shot damage. Best practice: use both — longbows for volume fire, crossbows for priority targets."
        }
      },
      {
        "@type": "Question",
        "name": "Should all settlers carry weapons?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, every adult settler should have at least a basic weapon (shortbow or club) in their inventory. During emergencies, any settler can fight. Keep a weapon rack near your defensive line stocked with spare weapons for non-combat settlers to grab during raids."
        }
      },
      {
        "@type": "Question",
        "name": "Do weapons degrade or break?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, weapons do not degrade or break over time in the current version of Going Medieval. Once crafted, a weapon lasts forever. This makes investing in high-quality weapons for all settlers a one-time cost that pays dividends forever."
        }
      }
    ]
  };

  return (
    <main className="prose prose-invert max-w-none">
      <h1>Going Medieval Best Weapons for Defense — Combat Effectiveness Guide</h1>
      <p className="text-lg text-gray-300 leading-relaxed mb-8">
        Discover the best weapons for defense in Going Medieval. Complete tier list with damage stats, range comparisons, and optimal weapon loadouts for every combat role.
      </p>

<h2>Weapon Choice Decides Battles</h2>
<p>In Going Medieval, the right weapon can turn a desperate defense into a decisive victory. Each weapon type has unique strengths, and knowing which to equip your settlers with is essential for surviving increasingly difficult raids.</p>

<h2>Weapon Tier List for Defense</h2>
<div className="table-wrapper">
<table>
<thead><tr><th>Tier</th><th>Weapon</th><th>Type</th><th>Damage</th><th>Range</th><th>Attack Speed</th><th>Best Role</th></tr></thead>
<tbody>
<tr><td>S</td><td>Longbow</td><td>Ranged</td><td>18-22</td><td>20 tiles</td><td>Slow</td><td>Wall archer</td></tr>
<tr><td>S</td><td>Crossbow</td><td>Ranged</td><td>22-28</td><td>16 tiles</td><td>Very Slow</td><td>Armor-piercing support</td></tr>
<tr><td>A</td><td>Longsword</td><td>Melee</td><td>15-20</td><td>1 tile</td><td>Medium</td><td>Frontline fighter</td></tr>
<tr><td>A</td><td>Spear</td><td>Melee</td><td>12-16</td><td>2 tiles</td><td>Fast</td><td>Chokepoint defense</td></tr>
<tr><td>A</td><td>Recurve Bow</td><td>Ranged</td><td>14-18</td><td>18 tiles</td><td>Medium-Fast</td><td>Mobile skirmisher</td></tr>
<tr><td>B</td><td>Mace</td><td>Melee</td><td>14-18</td><td>1 tile</td><td>Medium</td><td>Armor crusher</td></tr>
<tr><td>B</td><td>Battle Axe</td><td>Melee</td><td>18-24</td><td>1 tile</td><td>Slow</td><td>High damage dealer</td></tr>
<tr><td>B</td><td>Shortbow</td><td>Ranged</td><td>10-14</td><td>14 tiles</td><td>Fast</td><td>Early game defense</td></tr>
<tr><td>C</td><td>Club</td><td>Melee</td><td>8-12</td><td>1 tile</td><td>Fast</td><td>Emergency weapon</td></tr>
<tr><td>C</td><td>Knife</td><td>Melee</td><td>5-8</td><td>1 tile</td><td>Very Fast</td><td>Last resort</td></tr>
</tbody>
</table>
</div>

<h2>Ranged vs Melee for Defense</h2>
<p>Ranged weapons are superior for defense because they allow your settlers to damage enemies from behind walls and elevated positions before raiders reach your gates. A colony with 3 archers on elevated platforms can eliminate half of an incoming raid before the melee phase even begins.</p>

<h2>Optimal Defense Loadout</h2>
<p>For an average colony of 6 settlers: equip 3 with longbows (wall archers), 2 with spears (chokepoint holders), and 1 with a crossbow (priority target eliminator). The archers thin the herd, spearmen hold the gate, and the crossbowman targets enemy archers and heavy armor units.</p>

<h2>Weapon Quality and Material Effects</h2>
<p>Weapons crafted from steel deal approximately 30% more damage than iron equivalents, and 50% more than bronze. Always upgrade your defenders' weapons before upgrading armor — dead enemies deal zero damage. A steel longbow in the hands of a Marksman 10+ settler can one-shot lightly armored raiders.</p>

      <section className="mt-12 mb-8">
        <h2>Frequently Asked Questions</h2>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: Longbow or crossbow — which is better for defense?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: Longbows are better for sustained fire from walls due to faster reload speed. Crossbows excel at eliminating heavily armored enemies and enemy archers due to higher per-shot damage. Best practice: use both — longbows for volume fire, crossbows for priority targets.</p>
        </div>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: Should all settlers carry weapons?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: Yes, every adult settler should have at least a basic weapon (shortbow or club) in their inventory. During emergencies, any settler can fight. Keep a weapon rack near your defensive line stocked with spare weapons for non-combat settlers to grab during raids.</p>
        </div>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: Do weapons degrade or break?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: No, weapons do not degrade or break over time in the current version of Going Medieval. Once crafted, a weapon lasts forever. This makes investing in high-quality weapons for all settlers a one-time cost that pays dividends forever.</p>
        </div>

      </section>

      <section className="mt-12 p-6 bg-gray-800/50 rounded-lg border border-gray-700">
        <h2 className="!mt-0">Related Guides</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          <a href="/defense" className="text-blue-400 hover:text-blue-300 hover:underline text-sm">Defense Guide</a>
          <a href="/best-weapons-ranked" className="text-blue-400 hover:text-blue-300 hover:underline text-sm">Best Weapons Ranked</a>
          <a href="/combat-positioning" className="text-blue-400 hover:text-blue-300 hover:underline text-sm">Combat Positioning</a>
          <a href="/best-defense-layout" className="text-blue-400 hover:text-blue-300 hover:underline text-sm">Best Defense Layout</a>
          <a href="/raid-defense-strategy" className="text-blue-400 hover:text-blue-300 hover:underline text-sm">Raid Defense</a>
          <a href="/killbox-design" className="text-blue-400 hover:text-blue-300 hover:underline text-sm">Killbox Design</a>
        </div>
      </section>

      <p className="text-sm text-gray-500 mt-8">Last updated: June 2026</p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  );
}
