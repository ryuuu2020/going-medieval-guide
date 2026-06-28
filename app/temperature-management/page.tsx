import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Going Medieval Temperature Management — Complete Guide (2026)",
  description: "Master temperature management in Going Medieval. Keep settlers warm in winter, cool in summer, and optimize food storage with insulation and ventilation.",
};

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I keep my food from spoiling without electricity?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Underground cold storage is the best pre-electric solution. Dig a room 2+ levels underground, line it with stone walls (which conduct cold naturally), and keep the room size small (3x3 or 4x4) to concentrate the cooling effect. Food stored this way lasts 2-3x longer than surface storage."
        }
      },
      {
        "@type": "Question",
        "name": "Do clothes provide temperature protection?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, clothing has an insulation stat. Leather and fur clothing provides +10-15°C cold tolerance. Linen and cloth clothing provides +5-10°C heat tolerance. Equip settlers with appropriate seasonal clothing — fur in winter, linen in summer."
        }
      },
      {
        "@type": "Question",
        "name": "Why does my underground base feel warm in summer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Underground bases maintain a relatively stable temperature but can warm up if they're too shallow (less than 2 levels deep) or if you've placed too many heat sources (torches, braziers) in enclosed spaces. Dig deeper and space out your light/heat sources for better temperature control."
        }
      }
    ]
  };

  return (
    <main className="prose prose-invert max-w-none">
      <h1>Going Medieval Temperature Management — Heat & Cold Survival</h1>
      <p className="text-lg text-gray-300 leading-relaxed mb-8">
        Master temperature management in Going Medieval. Keep settlers warm in winter, cool in summer, and optimize food storage with insulation and ventilation.
      </p>

<h2>Temperature: The Invisible Killer</h2>
<p>Temperature is one of the most overlooked mechanics in Going Medieval, yet it's responsible for more colony failures than combat. Settlers suffer hypothermia in winter and heatstroke in summer, food rots faster in warm rooms, and underground bases have their own thermal dynamics. Mastering temperature control is essential.</p>

<h2>Temperature Effects Table</h2>
<div className="table-wrapper">
<table>
<thead><tr><th>Temperature Range</th><th>Settler Effect</th><th>Food Spoilage Rate</th><th>Work Speed</th></tr></thead>
<tbody>
<tr><td>Below -10°C</td><td>Severe hypothermia, -30% speed, health loss</td><td>Frozen (no spoilage)</td><td>-50%</td></tr>
<tr><td>-10°C to 0°C</td><td>Cold, -15% speed without warm clothes</td><td>Very slow (0.25x)</td><td>-20%</td></tr>
<tr><td>0°C to 5°C</td><td>Chilly but manageable with clothes</td><td>Slow (0.5x)</td><td>-5%</td></tr>
<tr><td>5°C to 15°C</td><td>Ideal for food storage</td><td>Normal (1x)</td><td>100%</td></tr>
<tr><td>15°C to 25°C</td><td>Comfortable — optimal work range</td><td>Normal (1x)</td><td>100%</td></tr>
<tr><td>25°C to 35°C</td><td>Warm, slight discomfort</td><td>Fast (1.5x)</td><td>-10%</td></tr>
<tr><td>35°C+</td><td>Heatstroke risk, -25% speed</td><td>Very fast (2x)</td><td>-30%</td></tr>
</tbody>
</table>
</div>

<h2>Insulation and Building Materials</h2>
<p>Different wall materials have different insulation values. Wood walls (R-value 2) provide the best insulation for heated rooms. Stone walls (R-value 1) conduct temperature more readily, making stone rooms naturally cooler — ideal for food storage. Double-thick walls add approximately 50% insulation value.</p>

<h2>Heating Systems</h2>
<p>Campfires, braziers, and hearths provide localized heating. Each heat source has an effective radius of 3-5 tiles. For large rooms, place heat sources every 5-6 tiles for even coverage. Underground rooms naturally maintain stable temperatures year-round (around 10-15°C) regardless of surface conditions.</p>

<h2>Summer Cooling Strategies</h2>
<p>Dig underground rooms for natural cooling during heatwaves. Place workstations in shaded areas or underground. Use leather or cloth awnings (if modded) to create covered outdoor work areas. Settlers working in direct sunlight during a heatwave suffer double the heat penalty compared to those in shade.</p>

      <section className="mt-12 mb-8">
        <h2>Frequently Asked Questions</h2>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: How do I keep my food from spoiling without electricity?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: Underground cold storage is the best pre-electric solution. Dig a room 2+ levels underground, line it with stone walls (which conduct cold naturally), and keep the room size small (3x3 or 4x4) to concentrate the cooling effect. Food stored this way lasts 2-3x longer than surface storage.</p>
        </div>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: Do clothes provide temperature protection?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: Yes, clothing has an insulation stat. Leather and fur clothing provides +10-15°C cold tolerance. Linen and cloth clothing provides +5-10°C heat tolerance. Equip settlers with appropriate seasonal clothing — fur in winter, linen in summer.</p>
        </div>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: Why does my underground base feel warm in summer?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: Underground bases maintain a relatively stable temperature but can warm up if they're too shallow (less than 2 levels deep) or if you've placed too many heat sources (torches, braziers) in enclosed spaces. Dig deeper and space out your light/heat sources for better temperature control.</p>
        </div>

      </section>

      <section className="mt-12 p-6 bg-gray-800/50 rounded-lg border border-gray-700">
        <h2 className="!mt-0">Related Guides</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          <a href="/buildings" className="text-blue-400 hover:text-blue-300 hover:underline text-sm">Buildings Guide</a>
          <a href="/building-material-tiers" className="text-blue-400 hover:text-blue-300 hover:underline text-sm">Material Tiers</a>
          <a href="/best-workshop-layout" className="text-blue-400 hover:text-blue-300 hover:underline text-sm">Workshop Layout</a>
          <a href="/room-quality-system" className="text-blue-400 hover:text-blue-300 hover:underline text-sm">Room Quality System</a>
          <a href="/stockpile-optimization" className="text-blue-400 hover:text-blue-300 hover:underline text-sm">Stockpile Optimization</a>
          <a href="/vertical-stacking" className="text-blue-400 hover:text-blue-300 hover:underline text-sm">Vertical Stacking</a>
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
