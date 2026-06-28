import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Going Medieval Berry Bush Conservation — Complete Guide (2026)",
  description: "Master berry bush conservation in Going Medieval. Learn sustainable harvesting, replanting strategies, and how to maintain food supply through all seasons.",
};

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do berry bushes regrow after being harvested?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, berry bushes naturally regrow berries every 3-5 days during spring, summer, and autumn. They do not regrow during winter. The bush itself remains intact unless destroyed by building or mining."
        }
      },
      {
        "@type": "Question",
        "name": "Can you plant new berry bushes in Going Medieval?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, you cannot plant berry bushes. They are a natural resource that spawns randomly on the map. You must conserve existing bushes rather than creating new ones."
        }
      },
      {
        "@type": "Question",
        "name": "How many berry bushes do I need to survive the first year?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A colony of 3-5 settlers will need approximately 15-20 berry bushes within harvesting range, supplemented by hunting. For larger colonies, you'll need correspondingly more or must transition to agriculture faster."
        }
      }
    ]
  };

  return (
    <main className="prose prose-invert max-w-none">
      <h1>Going Medieval Berry Bush Conservation — Sustainable Food Guide</h1>
      <p className="text-lg text-gray-300 leading-relaxed mb-8">
        Master berry bush conservation in Going Medieval. Learn sustainable harvesting, replanting strategies, and how to maintain food supply through all seasons.
      </p>

<h2>Why Berry Bushes Are Critical Early Game</h2>
<p>Berry bushes are one of the few food sources available from day one in Going Medieval. They require no research, no planting, and produce food through spring, summer, and autumn. Conserving them properly can mean the difference between a thriving colony and winter starvation.</p>

<h2>Berry Bush Mechanics</h2>
<p>Berry bushes spawn naturally across the map and regrow berries every few days during growing seasons. Each bush yields approximately 8-12 berries per harvest. Settlers can be assigned to harvest them automatically via the Harvest command.</p>

<h2>Sustainable Harvesting Strategy</h2>
<p>The key to berry bush conservation is selective harvesting. Never harvest all bushes at once — leave at least 30% of bushes unharvested at any time to ensure continuous regrowth. Rotate your harvesting zones to prevent depletion.</p>

<h2>Berry Bush Production Table</h2>
<div className="table-wrapper">
<table>
<thead><tr><th>Season</th><th>Growth Rate</th><th>Yield per Harvest</th><th>Harvests per Season</th><th>Total per Bush</th></tr></thead>
<tbody>
<tr><td>Spring</td><td>Fast (3 days)</td><td>10-12 berries</td><td>3-4</td><td>30-48 berries</td></tr>
<tr><td>Summer</td><td>Normal (4 days)</td><td>8-10 berries</td><td>2-3</td><td>16-30 berries</td></tr>
<tr><td>Autumn</td><td>Slow (5 days)</td><td>6-8 berries</td><td>1-2</td><td>6-16 berries</td></tr>
<tr><td>Winter</td><td>None</td><td>0</td><td>0</td><td>0</td></tr>
</tbody>
</table>
</div>

<h2>Preventing Accidental Bush Destruction</h2>
<p>One of the biggest mistakes new players make is accidentally destroying berry bushes when building or mining. Always survey the area for berry bushes before placing blueprints. Use the Harvest Zone tool to mark protected areas.</p>

<h2>Transitioning from Berries to Agriculture</h2>
<p>Berries alone won't sustain a colony past the first winter. Plan to transition to agriculture by autumn of year one. Research Farming early, and plant fast-growing crops like cabbages and beets as soon as possible to supplement your berry reserves.</p>

<h2>Berry Storage and Preservation</h2>
<p>Berries spoil relatively quickly (3-5 days at room temperature). Store harvested berries in a dedicated root cellar or cold storage room to extend shelf life. Process excess berries into alcohol at a brewery station for long-term preservation.</p>

      <section className="mt-12 mb-8">
        <h2>Frequently Asked Questions</h2>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: Do berry bushes regrow after being harvested?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: Yes, berry bushes naturally regrow berries every 3-5 days during spring, summer, and autumn. They do not regrow during winter. The bush itself remains intact unless destroyed by building or mining.</p>
        </div>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: Can you plant new berry bushes in Going Medieval?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: No, you cannot plant berry bushes. They are a natural resource that spawns randomly on the map. You must conserve existing bushes rather than creating new ones.</p>
        </div>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: How many berry bushes do I need to survive the first year?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: A colony of 3-5 settlers will need approximately 15-20 berry bushes within harvesting range, supplemented by hunting. For larger colonies, you'll need correspondingly more or must transition to agriculture faster.</p>
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
