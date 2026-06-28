import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Going Medieval Early Game Mistakes — Complete Guide (2026)",
  description: "Avoid the most common early game mistakes in Going Medieval. Learn from veteran players' errors in base building, food management, and defense strategy.",
};

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What's the #1 mistake that kills new players?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Underestimating winter. New players often enter their first winter with 2-3 days of food and no winter clothing, assuming hunting will continue. Winter kills all crops and drives animals away. You need 15+ days of stored food and warm clothing to survive."
        }
      },
      {
        "@type": "Question",
        "name": "How do I recover if I've already made these mistakes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Prioritize: 1) Immediate food (hunt everything, gather berries), 2) Shelter (at minimum a 5x5 room with beds), 3) Defense (even wicker walls help), 4) Research table. Abandon all non-critical tasks until survival basics are secured."
        }
      },
      {
        "@type": "Question",
        "name": "Is it better to restart or try to recover a failing colony?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If you have at least 2 settlers alive, food for 2+ days, and haven't lost critical buildings to collapse or fire, recovery is possible. If you're down to 1 settler or have zero food with winter approaching, restarting is more efficient. Every failed colony teaches you something for the next one."
        }
      }
    ]
  };

  return (
    <main className="prose prose-invert max-w-none">
      <h1>Going Medieval Early Game Mistakes — 20 Errors to Avoid</h1>
      <p className="text-lg text-gray-300 leading-relaxed mb-8">
        Avoid the most common early game mistakes in Going Medieval. Learn from veteran players' errors in base building, food management, and defense strategy.
      </p>

<h2>Learn From Others' Failures</h2>
<p>Most failed colonies die in the first year from the same preventable mistakes. This guide catalogs the 20 most common early game errors and exactly how to avoid them, based on community experience from thousands of players.</p>

<h2>Top 10 Deadly Early Game Mistakes</h2>
<div className="table-wrapper">
<table>
<thead><tr><th>#</th><th>Mistake</th><th>Consequence</th><th>How to Avoid</th><th>Death Rate</th></tr></thead>
<tbody>
<tr><td>1</td><td>No food buffer before winter</td><td>Mass starvation</td><td>Stockpile 15+ days food by autumn</td><td>Very High</td></tr>
<tr><td>2</td><td>Building too large too early</td><td>Resource drain, unfinished structures</td><td>Start with 5x5 rooms, expand gradually</td><td>High</td></tr>
<tr><td>3</td><td>Ignoring settler mood</td><td>Mental breaks, abandonment</td><td>Check mood daily, address red icons</td><td>High</td></tr>
<tr><td>4</td><td>No winter clothing</td><td>Hypothermia, slow work</td><td>Research Tailoring by autumn</td><td>Medium</td></tr>
<tr><td>5</td><td>Single food source</td><td>Total collapse if one fails</td><td>Diversify: farm + hunt + gather</td><td>High</td></tr>
<tr><td>6</td><td>Accepting all newcomers</td><td>Food drain, useless settlers</td><td>Screen for skills, reject useless recruits</td><td>Medium</td></tr>
<tr><td>7</td><td>No defensive preparations</td><td>Wiped by first raid</td><td>Build walls by day 5, weapons by day 3</td><td>Very High</td></tr>
<tr><td>8</td><td>Mining under buildings</td><td>Structural collapse</td><td>Dig foundations first, build on solid ground</td><td>Medium</td></tr>
<tr><td>9</td><td>Over-hunting animals</td><td>No leather, no future meat</td><td>Hunt conservatively, leave breeding pairs</td><td>Low (cumulative)</td></tr>
<tr><td>10</td><td>No research table built</td><td>Stuck with basic tech forever</td><td>Build research table day 1-2</td><td>Very High (delayed)</td></tr>
</tbody>
</table>
</div>

<h2>The Domino Effect of Poor Planning</h2>
<p>Most colony deaths aren't caused by a single mistake but by a cascade: you run out of food → settlers get hungry → work speed drops → no one harvests crops → food runs out completely → settlers starve or go berserk. Break the chain early by addressing the first link in each potential crisis chain.</p>

<h2>Red Flags That Your Colony Is Doomed</h2>
<p>If you see these signs, take immediate corrective action: food stock below 2 days, more than 2 settlers below 30% mood, no defensive walls when raid warning appears, construction materials at zero, your only cook/doctor is injured with no backup. Each of these can be fixed if caught early, but together they spell disaster.</p>

      <section className="mt-12 mb-8">
        <h2>Frequently Asked Questions</h2>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: What's the #1 mistake that kills new players?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: Underestimating winter. New players often enter their first winter with 2-3 days of food and no winter clothing, assuming hunting will continue. Winter kills all crops and drives animals away. You need 15+ days of stored food and warm clothing to survive.</p>
        </div>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: How do I recover if I've already made these mistakes?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: Prioritize: 1) Immediate food (hunt everything, gather berries), 2) Shelter (at minimum a 5x5 room with beds), 3) Defense (even wicker walls help), 4) Research table. Abandon all non-critical tasks until survival basics are secured.</p>
        </div>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: Is it better to restart or try to recover a failing colony?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: If you have at least 2 settlers alive, food for 2+ days, and haven't lost critical buildings to collapse or fire, recovery is possible. If you're down to 1 settler or have zero food with winter approaching, restarting is more efficient. Every failed colony teaches you something for the next one.</p>
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
