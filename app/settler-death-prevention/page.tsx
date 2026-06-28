import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Going Medieval Settler Death Prevention — Complete Guide (2026)",
  description: "Prevent settler deaths in Going Medieval. Avoid starvation, combat fatalities, structural collapses, infections, and mental breaks with proven strategies.",
};

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How many settlers should I aim for to be safe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "5-7 settlers is the sweet spot for early-to-mid game. This provides enough labor for all essential jobs while keeping food consumption manageable. Above 10 settlers, food production becomes the primary challenge and requires dedicated farmers and hunters."
        }
      },
      {
        "@type": "Question",
        "name": "What happens when a settler dies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "When a settler dies, their body remains on the ground and will decay over 2-3 days, causing a mood penalty (-3 to -8) for colonists who see it. Bury the body in a grave or cremate it at a pyre to remove the mood penalty. Losing a skilled settler can cripple your colony if they were the only one with a critical skill."
        }
      },
      {
        "@type": "Question",
        "name": "Should I reload if a settler dies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "That depends on your playstyle. Many players consider settler deaths part of the narrative and play through them. However, if the death was caused by a bug (pathfinding glitch, stuck in geometry), reloading is reasonable. For learning purposes, reloading helps you understand what went wrong."
        }
      }
    ]
  };

  return (
    <main className="prose prose-invert max-w-none">
      <h1>Going Medieval Settler Death Prevention — Survival Strategies</h1>
      <p className="text-lg text-gray-300 leading-relaxed mb-8">
        Prevent settler deaths in Going Medieval. Avoid starvation, combat fatalities, structural collapses, infections, and mental breaks with proven strategies.
      </p>

<h2>Every Death Is Preventable</h2>
<p>Settler deaths are almost always the result of a chain of preventable failures. By understanding the five main causes of death and implementing countermeasures, you can keep your entire colony alive indefinitely — even on the hardest difficulty.</p>

<h2>Top 5 Causes of Settler Death & Prevention</h2>
<div className="table-wrapper">
<table>
<thead><tr><th>Death Cause</th><th>Frequency</th><th>Prevention Priority</th><th>Countermeasures</th></tr></thead>
<tbody>
<tr><td>Starvation</td><td>#1 (most common)</td><td>Critical</td><td>Maintain 5+ days food reserve; diversify food sources</td></tr>
<tr><td>Combat</td><td>#2</td><td>High</td><td>Armor all fighters; train melee to 5+ before combat duty</td></tr>
<tr><td>Structural Collapse</td><td>#3</td><td>Medium</td><td>Use stability overlay; never remove supports blindly</td></tr>
<tr><td>Infection</td><td>#4</td><td>Medium</td><td>Stock medicine; treat wounds within 12 hours</td></tr>
<tr><td>Mental Break</td><td>#5</td><td>Low</td><td>Monitor mood; address unmet needs; banish problem settlers</td></tr>
</tbody>
</table>
</div>

<h2>Food Security — The Foundation</h2>
<p>Food is the #1 killer. A single missed harvest or extended winter can cascade into mass starvation. Always maintain a food buffer of at least 5 days (check the top bar for your food stock indicator). Diversify between farming, hunting, and gathering so one failure doesn't wipe out your food supply.</p>

<h2>Combat Safety Protocols</h2>
<p>Never send unarmored settlers into combat. Even basic leather armor reduces incoming damage by 30-50%. Train all combat settlers to at least Melee 5 before frontline duty. Keep a retreat path open — a settler with 10% HP can be saved if they withdraw, but will die if they keep fighting.</p>

<h2>Early Warning Systems</h2>
<p>Watch for warning signs: the food counter dropping below 3 days, a settler's mood below 30%, stability overlay showing orange/red tiles, or a wounded settler without treatment for 8+ hours. Address these warning signs immediately before they cascade into a death spiral.</p>

      <section className="mt-12 mb-8">
        <h2>Frequently Asked Questions</h2>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: How many settlers should I aim for to be safe?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: 5-7 settlers is the sweet spot for early-to-mid game. This provides enough labor for all essential jobs while keeping food consumption manageable. Above 10 settlers, food production becomes the primary challenge and requires dedicated farmers and hunters.</p>
        </div>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: What happens when a settler dies?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: When a settler dies, their body remains on the ground and will decay over 2-3 days, causing a mood penalty (-3 to -8) for colonists who see it. Bury the body in a grave or cremate it at a pyre to remove the mood penalty. Losing a skilled settler can cripple your colony if they were the only one with a critical skill.</p>
        </div>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: Should I reload if a settler dies?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: That depends on your playstyle. Many players consider settler deaths part of the narrative and play through them. However, if the death was caused by a bug (pathfinding glitch, stuck in geometry), reloading is reasonable. For learning purposes, reloading helps you understand what went wrong.</p>
        </div>

      </section>

      <section className="mt-12 p-6 bg-gray-800/50 rounded-lg border border-gray-700">
        <h2 className="!mt-0">Related Guides</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          <a href="/settlers" className="text-blue-400 hover:text-blue-300 hover:underline text-sm">Settlers Guide</a>
          <a href="/settler-mood-system" className="text-blue-400 hover:text-blue-300 hover:underline text-sm">Mood System</a>
          <a href="/work-priorities-setup" className="text-blue-400 hover:text-blue-300 hover:underline text-sm">Work Priorities</a>
          <a href="/specialist-training" className="text-blue-400 hover:text-blue-300 hover:underline text-sm">Specialist Training</a>
          <a href="/recreation-scheduling" className="text-blue-400 hover:text-blue-300 hover:underline text-sm">Recreation Scheduling</a>
          <a href="/maximize-settler-efficiency" className="text-blue-400 hover:text-blue-300 hover:underline text-sm">Maximize Efficiency</a>
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
