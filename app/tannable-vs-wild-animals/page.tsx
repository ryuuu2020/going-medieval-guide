import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Going Medieval Tannable vs Wild Animals — Complete Guide (2026)",
  description: "Complete comparison of tannable vs wild animals in Going Medieval. Covers taming mechanics, resource yields, best animals with data tables and tips.",
};

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can you tame wild animals in Going Medieval?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, you cannot tame wild animals. Only specific tannable species like sheep, cows, goats, and chickens can be tamed. Wild animals must be hunted for their resources."
        }
      },
      {
        "@type": "Question",
        "name": "Which tannable animal is best for food production?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cows provide the highest overall food yield with both meat (50-60) and milk (15-20 per season). However, chickens are more space-efficient, producing 20-30 eggs per season with minimal feed requirements."
        }
      },
      {
        "@type": "Question",
        "name": "Do tannable animals fight back during raids?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, domesticated animals do not fight. However, tamed dogs (if available in modded versions) and certain combat animals can be trained for defense. Standard livestock will flee from raiders."
        }
      }
    ]
  };

  return (
    <main className="prose prose-invert max-w-none">
      <h1>Going Medieval Tannable vs Wild Animals — Complete Comparison</h1>
      <p className="text-lg text-gray-300 leading-relaxed mb-8">
        Complete comparison of tannable vs wild animals in Going Medieval. Covers taming mechanics, resource yields, best animals with data tables and tips.
      </p>

<h2>Why Animal Choice Matters</h2>
<p>Choosing between tannable (domesticated) and wild animals in Going Medieval affects your colony's food chain, leather production, and defensive capabilities. This guide breaks down every animal type with yield tables and optimal strategies.</p>

<h2>Tannable Animals — Domesticated Livestock</h2>
<p>Tannable animals are those your settlers can tame and breed within your colony walls. Once tamed, they produce consistent resources without requiring hunting expeditions.</p>

<h2>Wild Animals — Hunting Targets</h2>
<p>Wild animals spawn naturally on the map and must be hunted for their resources. They don't reproduce within your colony and require active settler management for harvesting.</p>

<h2>Resource Yield Comparison Table</h2>
<div className="table-wrapper">
<table>
<thead><tr><th>Animal</th><th>Type</th><th>Meat</th><th>Leather</th><th>Milk/Wool</th><th>Combat Value</th></tr></thead>
<tbody>
<tr><td>Deer</td><td>Wild</td><td>High (45-55)</td><td>Medium (12-18)</td><td>None</td><td>Low</td></tr>
<tr><td>Boar</td><td>Wild</td><td>Medium (30-40)</td><td>High (20-25)</td><td>None</td><td>Medium</td></tr>
<tr><td>Sheep</td><td>Tannable</td><td>Low (20-25)</td><td>Medium (10-15)</td><td>Wool (8-12/season)</td><td>None</td></tr>
<tr><td>Cow</td><td>Tannable</td><td>High (50-60)</td><td>High (20-28)</td><td>Milk (15-20/season)</td><td>None</td></tr>
<tr><td>Goat</td><td>Tannable</td><td>Medium (25-35)</td><td>Medium (8-12)</td><td>Milk (10-15/season)</td><td>Low</td></tr>
<tr><td>Wolf</td><td>Wild</td><td>Low (15-20)</td><td>Low (5-8)</td><td>None</td><td>High</td></tr>
<tr><td>Bear</td><td>Wild</td><td>Very High (60-80)</td><td>Very High (25-35)</td><td>None</td><td>Very High</td></tr>
<tr><td>Chicken</td><td>Tannable</td><td>Very Low (5-10)</td><td>None</td><td>Eggs (20-30/season)</td><td>None</td></tr>
<tr><td>Rabbit</td><td>Wild</td><td>Very Low (2-5)</td><td>Low (2-4)</td><td>None</td><td>None</td></tr>
<tr><td>Rat</td><td>Wild</td><td>Minimal (1-3)</td><td>Minimal (1-2)</td><td>None</td><td>None</td></tr>
</tbody>
</table>
</div>

<h2>Taming Mechanics Deep Dive</h2>
<p>To tame an animal, assign a settler with the Animal Handling skill. Higher skill levels increase taming chance and speed. Each animal species has a base taming difficulty that affects success rate.</p>

<h2>Breeding and Population Management</h2>
<p>Once you have at least one male and one female of a tannable species, they will begin breeding automatically. Manage population by setting auto-slaughter thresholds in the Animals panel. Overpopulation can drain your food reserves rapidly.</p>

<h2>Strategic Recommendations</h2>
<p>For early game, focus on hunting wild deer and boar for immediate meat and leather. For mid-game, tame cows for efficient milk + meat production and sheep for wool. Chickens provide the best food-to-space ratio for underground colonies.</p>

      <section className="mt-12 mb-8">
        <h2>Frequently Asked Questions</h2>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: Can you tame wild animals in Going Medieval?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: No, you cannot tame wild animals. Only specific tannable species like sheep, cows, goats, and chickens can be tamed. Wild animals must be hunted for their resources.</p>
        </div>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: Which tannable animal is best for food production?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: Cows provide the highest overall food yield with both meat (50-60) and milk (15-20 per season). However, chickens are more space-efficient, producing 20-30 eggs per season with minimal feed requirements.</p>
        </div>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: Do tannable animals fight back during raids?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: No, domesticated animals do not fight. However, tamed dogs (if available in modded versions) and certain combat animals can be trained for defense. Standard livestock will flee from raiders.</p>
        </div>

      </section>

      <section className="mt-12 p-6 bg-gray-800/50 rounded-lg border border-gray-700">
        <h2 className="!mt-0">Related Guides</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          <a href="/best-crops-for-each-season" className="text-blue-400 hover:text-blue-300 hover:underline text-sm">Best Crops by Season</a>
          <a href="/farming" className="text-blue-400 hover:text-blue-300 hover:underline text-sm">Farming Guide</a>
          <a href="/food-preservation" className="text-blue-400 hover:text-blue-300 hover:underline text-sm">Food Preservation</a>
          <a href="/root-cellar" className="text-blue-400 hover:text-blue-300 hover:underline text-sm">Root Cellar Design</a>
          <a href="/irrigation-system" className="text-blue-400 hover:text-blue-300 hover:underline text-sm">Irrigation System</a>
          <a href="/soil-fertility" className="text-blue-400 hover:text-blue-300 hover:underline text-sm">Soil Fertility Guide</a>
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
