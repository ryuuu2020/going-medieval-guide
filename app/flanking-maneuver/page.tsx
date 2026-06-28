import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Going Medieval Flanking Maneuver — Complete Guide (2026)",
  description: "Master flanking maneuvers in Going Medieval. Combat positioning tactics, surround bonuses, hit chance optimization, and battlefield control strategies.",
};

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much damage does flanking actually add?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A rear attack adds 50% damage bonus and raises critical hit chance from 5% to 25%. Against an enemy with the same stats as your settler, a rear attack turns an even fight into a 3:1 advantage. Flanking is the single most impactful combat technique in the game."
        }
      },
      {
        "@type": "Question",
        "name": "Can ranged attacks flank?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Archers and crossbow users receive the same directional bonuses as melee attackers. Positioning archers on the flanks or behind enemies dramatically increases their damage output. This is why elevated archer platforms with side-angle firing lines are so effective."
        }
      },
      {
        "@type": "Question",
        "name": "How do I flank an enemy that's already engaged in melee?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While one settler holds the enemy's attention (front attack), manually move a second settler around to the side or rear. The enemy will remain focused on the first settler, giving your flanker free high-bonus attacks. Micromanaging flanking is a high-skill technique that separates good players from great ones."
        }
      }
    ]
  };

  return (
    <main className="prose prose-invert max-w-none">
      <h1>Going Medieval Flanking Maneuver — Combat Positioning Guide</h1>
      <p className="text-lg text-gray-300 leading-relaxed mb-8">
        Master flanking maneuvers in Going Medieval. Combat positioning tactics, surround bonuses, hit chance optimization, and battlefield control strategies.
      </p>

<h2>Positioning Wins Fights</h2>
<p>Flanking — attacking an enemy from the side or rear — provides significant combat bonuses in Going Medieval. A well-executed flank can eliminate an enemy that would otherwise win a head-to-head fight. This guide covers every flanking technique used by experienced players.</p>

<h2>Flanking Bonus Table</h2>
<div className="table-wrapper">
<table>
<thead><tr><th>Attack Direction</th><th>Hit Chance Bonus</th><th>Damage Bonus</th><th>Critical Chance</th><th>Requirements</th></tr></thead>
<tbody>
<tr><td>Frontal (head-on)</td><td>Base (60%)</td><td>0%</td><td>5%</td><td>Line of sight</td></tr>
<tr><td>Side attack (flank)</td><td>+15% (75%)</td><td>+20%</td><td>10%</td><td>Attacker at 90° angle</td></tr>
<tr><td>Rear attack (backstab)</td><td>+30% (90%)</td><td>+50%</td><td>25%</td><td>Attacker directly behind</td></tr>
<tr><td>Elevated attack</td><td>+10% per level</td><td>+15% per level</td><td>+5% per level</td><td>Higher ground (stairs/walls)</td></tr>
<tr><td>Surrounded</td><td>+25% cumulative</td><td>+10% per attacker</td><td>N/A</td><td>3+ attackers on all sides</td></tr>
</tbody>
</table>
</div>

<h2>The Pincer Maneuver</h2>
<p>Send two melee settlers to engage from the front while one archer positions behind the enemy. The archer gets rear attack bonuses on every shot. Even better: have a spearman hold the front while two sword fighters circle to the sides. This creates a 3-direction surround that multiplies damage output by 2-3x.</p>

<h2>Using Terrain for Flanks</h2>
<p>Build defensive positions with intentional flanking corridors. A U-shaped killbox forces enemies into the center where archers on both sides have side-attack angles. Elevated platforms on either side of a chokepoint give your ranged units perfect flanking positions with height advantage stacked on top.</p>

<h2>Countering Enemy Flanks</h2>
<p>Enemies also benefit from flanking bonuses. Never let a settler get surrounded — if they're fighting 2+ enemies from different angles, pull them back immediately. Build defensive walls with corners to prevent enemies from approaching from multiple sides. A settler with their back against a wall can only be attacked from the front.</p>

      <section className="mt-12 mb-8">
        <h2>Frequently Asked Questions</h2>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: How much damage does flanking actually add?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: A rear attack adds 50% damage bonus and raises critical hit chance from 5% to 25%. Against an enemy with the same stats as your settler, a rear attack turns an even fight into a 3:1 advantage. Flanking is the single most impactful combat technique in the game.</p>
        </div>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: Can ranged attacks flank?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: Yes! Archers and crossbow users receive the same directional bonuses as melee attackers. Positioning archers on the flanks or behind enemies dramatically increases their damage output. This is why elevated archer platforms with side-angle firing lines are so effective.</p>
        </div>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: How do I flank an enemy that's already engaged in melee?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: While one settler holds the enemy's attention (front attack), manually move a second settler around to the side or rear. The enemy will remain focused on the first settler, giving your flanker free high-bonus attacks. Micromanaging flanking is a high-skill technique that separates good players from great ones.</p>
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
