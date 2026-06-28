import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Going Medieval Armor Types Comparison — Complete Guide (2026)",
  description: "Complete armor types comparison for Going Medieval. Stats, protection values, material tiers, and best armor combinations for every combat role and budget.",
};

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Does armor protect against all damage types equally?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, armor is most effective against cutting and piercing damage (swords, arrows). Blunt damage (maces, hammers) bypasses a portion of armor protection. This is why heavily armored enemies are vulnerable to mace-wielding settlers."
        }
      },
      {
        "@type": "Question",
        "name": "Can settlers wear armor while doing non-combat work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, but the movement penalty applies at all times. A settler in full steel plate will work significantly slower. Consider having combat armor stored near your defensive line and switching settlers into it only when a raid warning appears."
        }
      },
      {
        "@type": "Question",
        "name": "Is leather armor worth crafting or should I skip straight to iron?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Leather armor is absolutely worth crafting early. The difference between zero protection and 15-20% protection is life-saving in early raids. Craft leather armor for all settlers as soon as you have a tailor bench, then upgrade to iron piece by piece as resources allow."
        }
      }
    ]
  };

  return (
    <main className="prose prose-invert max-w-none">
      <h1>Going Medieval Armor Types Comparison — Defense & Protection Guide</h1>
      <p className="text-lg text-gray-300 leading-relaxed mb-8">
        Complete armor types comparison for Going Medieval. Stats, protection values, material tiers, and best armor combinations for every combat role and budget.
      </p>

<h2>Armor Saves Lives</h2>
<p>Going Medieval's armor system uses layered protection across four body zones: head, torso, legs, and optionally a shield. Each piece reduces incoming damage by a percentage based on its material and type. Unarmored settlers die in 2-3 hits; fully armored settlers can tank 15+ hits.</p>

<h2>Complete Armor Protection Table</h2>
<div className="table-wrapper">
<table>
<thead><tr><th>Armor Piece</th><th>Material Tier</th><th>Protection %</th><th>Movement Penalty</th><th>Coverage</th><th>Cost (Resources)</th></tr></thead>
<tbody>
<tr><td>Leather Cap</td><td>Basic (Leather)</td><td>15%</td><td>0%</td><td>Head only</td><td>10 leather</td></tr>
<tr><td>Leather Armor</td><td>Basic (Leather)</td><td>20%</td><td>-5%</td><td>Torso</td><td>25 leather</td></tr>
<tr><td>Leather Pants</td><td>Basic (Leather)</td><td>12%</td><td>0%</td><td>Legs</td><td>15 leather</td></tr>
<tr><td>Iron Helmet</td><td>Standard (Iron)</td><td>35%</td><td>-3%</td><td>Head only</td><td>20 iron</td></tr>
<tr><td>Iron Chestplate</td><td>Standard (Iron)</td><td>45%</td><td>-10%</td><td>Torso</td><td>50 iron</td></tr>
<tr><td>Iron Greaves</td><td>Standard (Iron)</td><td>30%</td><td>-5%</td><td>Legs</td><td>30 iron</td></tr>
<tr><td>Steel Helmet</td><td>Advanced (Steel)</td><td>50%</td><td>-3%</td><td>Head only</td><td>25 steel</td></tr>
<tr><td>Steel Plate Armor</td><td>Advanced (Steel)</td><td>65%</td><td>-15%</td><td>Torso</td><td>70 steel</td></tr>
<tr><td>Steel Greaves</td><td>Advanced (Steel)</td><td>45%</td><td>-5%</td><td>Legs</td><td>40 steel</td></tr>
<tr><td>Wooden Shield</td><td>Basic</td><td>25% block</td><td>-8%</td><td>Active blocking</td><td>15 wood</td></tr>
<tr><td>Iron Shield</td><td>Standard</td><td>40% block</td><td>-10%</td><td>Active blocking</td><td>25 iron</td></tr>
<tr><td>Steel Shield</td><td>Advanced</td><td>55% block</td><td>-12%</td><td>Active blocking</td><td>30 steel</td></tr>
</tbody>
</table>
</div>

<h2>Full Set Protection Calculation</h2>
<p>Protection stacks multiplicatively, not additively. A full steel set (helmet 50% + plate 65% + greaves 45%) doesn't give 160% protection. Instead, each piece reduces the remaining damage: an incoming 100 damage hit becomes 50 after helmet, then ~17.5 after plate, then ~9.6 after greaves — approximately 90% total damage reduction from a full steel set.</p>

<h2>Budget Armor Priorities</h2>
<p>If you can only afford partial armor, prioritize in this order: 1) Helmet (headshots are most lethal), 2) Chestplate (largest hitbox, most frequent target), 3) Shield (for melee fighters), 4) Greaves (legs are hit less often). A leather cap + iron chestplate provides good protection at low cost.</p>

<h2>Archer Armor Strategy</h2>
<p>Archers benefit most from helmets and light torso armor. They should avoid heavy plate armor — the movement penalty reduces repositioning speed, which is critical for ranged units. A steel helmet + leather armor provides good head protection without sacrificing mobility.</p>

      <section className="mt-12 mb-8">
        <h2>Frequently Asked Questions</h2>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: Does armor protect against all damage types equally?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: No, armor is most effective against cutting and piercing damage (swords, arrows). Blunt damage (maces, hammers) bypasses a portion of armor protection. This is why heavily armored enemies are vulnerable to mace-wielding settlers.</p>
        </div>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: Can settlers wear armor while doing non-combat work?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: Yes, but the movement penalty applies at all times. A settler in full steel plate will work significantly slower. Consider having combat armor stored near your defensive line and switching settlers into it only when a raid warning appears.</p>
        </div>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: Is leather armor worth crafting or should I skip straight to iron?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: Leather armor is absolutely worth crafting early. The difference between zero protection and 15-20% protection is life-saving in early raids. Craft leather armor for all settlers as soon as you have a tailor bench, then upgrade to iron piece by piece as resources allow.</p>
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
