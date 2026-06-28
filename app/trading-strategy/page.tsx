import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Going Medieval Trading Strategy — Complete Guide (2026)",
  description: "Master trading in Going Medieval. Merchant types, profit optimization, best trade goods, negotiation tactics, and building a trade-based economy.",
};

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I get merchants to visit more often?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Building a Trade Beacon increases merchant visit frequency by approximately 50%. Maintaining good relations (completing trades successfully) also improves frequency. Colonies with high wealth attract more and better merchants."
        }
      },
      {
        "@type": "Question",
        "name": "What's the best thing to sell early game?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In early game, sell excess leather and meat from hunting. You'll accumulate more than you can use. Leather especially sells well to weaponsmiths. Avoid selling building materials (wood, stone) unless you have a massive surplus."
        }
      },
      {
        "@type": "Question",
        "name": "Can I rob merchants instead of trading?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you can attack merchants and take their inventory, but this has severe consequences: all future merchants stop visiting, other factions may declare war, and your settlers suffer a mood penalty. It's almost never worth it."
        }
      }
    ]
  };

  return (
    <main className="prose prose-invert max-w-none">
      <h1>Going Medieval Trading Strategy — Merchant & Economy Guide</h1>
      <p className="text-lg text-gray-300 leading-relaxed mb-8">
        Master trading in Going Medieval. Merchant types, profit optimization, best trade goods, negotiation tactics, and building a trade-based economy.
      </p>

<h2>Trading Is More Than Buying and Selling</h2>
<p>Trading in Going Medieval is a powerful strategy for acquiring rare resources, offloading excess production, and recruiting specialists. A well-managed trade economy can provide things you can't produce yourself — like steel before you've researched smelting, or rare seeds for unique crops.</p>

<h2>Merchant Types and Their Inventory</h2>
<div className="table-wrapper">
<table>
<thead><tr><th>Merchant Type</th><th>Buys</th><th>Sells</th><th>Arrival Frequency</th><th>Priority</th></tr></thead>
<tbody>
<tr><td>Bulk Goods Trader</td><td>Raw materials, food</td><td>Wood, stone, clay, basic seeds</td><td>Every 5-8 days</td><td>Medium</td></tr>
<tr><td>Weaponsmith</td><td>Metal, leather</td><td>Weapons, shields, armor</td><td>Every 10-15 days</td><td>High</td></tr>
<tr><td>Exotic Goods Trader</td><td>Alcohol, art, valuables</td><td>Rare seeds, books, jewelry</td><td>Every 15-20 days</td><td>Very High</td></tr>
<tr><td>Slave Trader</td><td>Silver, goods</td><td>New settlers with skills</td><td>Every 12-18 days</td><td>High (if recruiting)</td></tr>
<tr><td>Food Merchant</td><td>Food, crops</td><td>Exotic food, rare seeds</td><td>Every 8-12 days</td><td>Low</td></tr>
</tbody>
</table>
</div>

<h2>Best Trade Goods for Profit</h2>
<p>Alcohol (especially aged wine) is the most profitable trade good — it uses renewable resources (berries/grapes), has a long shelf life, and sells for 3-5x the value of raw ingredients. Other top earners: high-quality clothing, steel weapons, herbal medicine, and art pieces crafted by settlers with high Artistic skill.</p>

<h2>Negotiation and Speech Skill</h2>
<p>A settler's Speech skill directly affects trade prices. At Speech level 10, you get approximately 30% better buy prices and 30% better sell prices compared to Speech level 1. Always use your highest Speech settler to conduct trades. The Speech skill improves with each trade interaction.</p>

<h2>Trade Hub Design</h2>
<p>Build a dedicated trade depot near your main entrance with a trade beacon (if available), stockpiles for trade goods, and silver storage. Keep valuable trade items separate from general storage to avoid accidentally using them. Post a guard near the trade depot — raiders sometimes attack during merchant visits.</p>

      <section className="mt-12 mb-8">
        <h2>Frequently Asked Questions</h2>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: How do I get merchants to visit more often?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: Building a Trade Beacon increases merchant visit frequency by approximately 50%. Maintaining good relations (completing trades successfully) also improves frequency. Colonies with high wealth attract more and better merchants.</p>
        </div>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: What's the best thing to sell early game?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: In early game, sell excess leather and meat from hunting. You'll accumulate more than you can use. Leather especially sells well to weaponsmiths. Avoid selling building materials (wood, stone) unless you have a massive surplus.</p>
        </div>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: Can I rob merchants instead of trading?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: Yes, you can attack merchants and take their inventory, but this has severe consequences: all future merchants stop visiting, other factions may declare war, and your settlers suffer a mood penalty. It's almost never worth it.</p>
        </div>

      </section>

      <section className="mt-12 p-6 bg-gray-800/50 rounded-lg border border-gray-700">
        <h2 className="!mt-0">Related Guides</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          <a href="/beginners" className="text-blue-400 hover:text-blue-300 hover:underline text-sm">Beginner Guide</a>
          <a href="/tier-list" className="text-blue-400 hover:text-blue-300 hover:underline text-sm">Complete Tier List</a>
          <a href="/tips" className="text-blue-400 hover:text-blue-300 hover:underline text-sm">Tips & Tricks</a>
          <a href="/faq" className="text-blue-400 hover:text-blue-300 hover:underline text-sm">FAQ</a>
          <a href="/research" className="text-blue-400 hover:text-blue-300 hover:underline text-sm">Research Tree</a>
          <a href="/builds" className="text-blue-400 hover:text-blue-300 hover:underline text-sm">Best Builds</a>
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
