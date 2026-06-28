import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Going Medieval Scenario Guide — Starting Conditions (2026)",
  description: "Complete scenario guide for Going Medieval. Compare starting scenarios, map seeds, settler compositions, and difficulty settings for optimal starts.",
};

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can I win with the Lone Explorer scenario?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, but it requires patience. Your single settler must do everything alone, which is extremely slow. Focus on food and shelter first, ignore research until you have 3+ days of food stored. Accept the first wanderer that arrives regardless of skills — any second settler doubles your productivity."
        }
      },
      {
        "@type": "Question",
        "name": "What's the hardest scenario to play?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tribal Start on Survival difficulty is widely considered the hardest. You have many mouths to feed with low starting resources and no technology. The first winter is brutal. Success requires perfect micromanagement of every settler's time."
        }
      },
      {
        "@type": "Question",
        "name": "Does the map biome affect gameplay significantly?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Forest biomes have abundant wood but less stone. Mountain biomes have the opposite. Desert biomes are extremely challenging due to food scarcity and heat. For beginners, Temperate Forest with a Valley seed provides the most balanced and forgiving experience."
        }
      }
    ]
  };

  return (
    <main className="prose prose-invert max-w-none">
      <h1>Going Medieval Scenario Guide — Best Starting Conditions</h1>
      <p className="text-lg text-gray-300 leading-relaxed mb-8">
        Complete scenario guide for Going Medieval. Compare starting scenarios, map seeds, settler compositions, and difficulty settings for optimal starts.
      </p>

<h2>Your First Decisions Shape Everything</h2>
<p>The scenario you choose at the start of Going Medieval determines your initial settlers, resources, map type, and difficulty. This guide compares every starting option so you can choose the scenario that matches your preferred playstyle and skill level.</p>

<h2>Scenario Comparison Table</h2>
<div className="table-wrapper">
<table>
<thead><tr><th>Scenario</th><th>Starting Settlers</th><th>Starting Resources</th><th>Difficulty</th><th>Best For</th></tr></thead>
<tbody>
<tr><td>Lone Explorer</td><td>1 settler, random skills</td><td>Minimal (50 wood, 20 food)</td><td>Hard</td><td>Challenge runs</td></tr>
<tr><td>Standard Start</td><td>3 settlers, balanced skills</td><td>Moderate (200 wood, 100 food)</td><td>Normal</td><td>First playthrough, learning</td></tr>
<tr><td>Rich Explorer</td><td>1 settler, high skills</td><td>Rich (400 wood, 200 food, tools)</td><td>Medium</td><td>Solo survival with advantages</td></tr>
<tr><td>Tribal Start</td><td>5 settlers, low tech</td><td>Low (100 wood, 50 food)</td><td>Hard</td><td>Population rush strategy</td></tr>
<tr><td>Custom Scenario</td><td>1-5 settlers, choose stats</td><td>Adjustable</td><td>Variable</td><td>Experienced players</td></tr>
</tbody>
</table>
</div>

<h2>Map Seed Recommendations</h2>
<p>The map seed determines terrain layout, resource distribution, and starting position. Seeds with 'Valley' in the name tend to have natural defensive chokepoints. 'Mountain' seeds offer rich mining but less farmland. 'River' seeds provide natural barriers and fishing opportunities. Save seeds you enjoy for future playthroughs.</p>

<h2>Difficulty Setting Impact</h2>
<p>Difficulty affects raid frequency and strength, resource scarcity, settler mood sensitivity, and disease/infection rates. On Peaceful, raids are disabled entirely — good for learning construction and management. On Survival, every decision matters and mistakes are severely punished.</p>

<h2>Best Start for Beginners</h2>
<p>Choose Standard Start on Peaceful or Normal difficulty with a Valley seed. Pick your 3 settlers manually: one with Construction ≥5, one with Cooking ≥5, and one with Intellectual ≥5. This gives you the ability to build, feed, and research from day one — the holy trinity of early game survival.</p>

      <section className="mt-12 mb-8">
        <h2>Frequently Asked Questions</h2>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: Can I win with the Lone Explorer scenario?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: Yes, but it requires patience. Your single settler must do everything alone, which is extremely slow. Focus on food and shelter first, ignore research until you have 3+ days of food stored. Accept the first wanderer that arrives regardless of skills — any second settler doubles your productivity.</p>
        </div>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: What's the hardest scenario to play?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: Tribal Start on Survival difficulty is widely considered the hardest. You have many mouths to feed with low starting resources and no technology. The first winter is brutal. Success requires perfect micromanagement of every settler's time.</p>
        </div>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: Does the map biome affect gameplay significantly?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: Yes. Forest biomes have abundant wood but less stone. Mountain biomes have the opposite. Desert biomes are extremely challenging due to food scarcity and heat. For beginners, Temperate Forest with a Valley seed provides the most balanced and forgiving experience.</p>
        </div>

      </section>

      <section className="mt-12 p-6 bg-gray-800/50 rounded-lg border border-gray-700">
        <h2 className="!mt-0">Related Guides</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          <a href="/beginners" className="text-blue-400 hover:text-blue-300 hover:underline text-sm">Beginner Guide</a>
          <a href="/beginner-mistakes" className="text-blue-400 hover:text-blue-300 hover:underline text-sm">Common Mistakes</a>
          <a href="/beginner-walkthrough" className="text-blue-400 hover:text-blue-300 hover:underline text-sm">Walkthrough</a>
          <a href="/tips" className="text-blue-400 hover:text-blue-300 hover:underline text-sm">Tips & Tricks</a>
          <a href="/faq" className="text-blue-400 hover:text-blue-300 hover:underline text-sm">FAQ</a>
          <a href="/base-layout" className="text-blue-400 hover:text-blue-300 hover:underline text-sm">Base Layout Guide</a>
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
