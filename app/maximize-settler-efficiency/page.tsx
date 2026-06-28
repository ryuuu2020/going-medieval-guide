import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Going Medieval Maximize Settler Efficiency — Complete Guide (2026)",
  description: "Maximize settler efficiency in Going Medieval. Optimize work priorities, pathfinding, workstation placement, and schedules for peak colony productivity.",
};

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I stop settlers from walking across the entire map for one item?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Create localized stockpiles near each workstation containing only the materials that workstation needs. Set the stockpile priority to 'Preferred' so haulers keep it stocked. The workstation settler will grab from the nearby stockpile instead of walking to the main storage."
        }
      },
      {
        "@type": "Question",
        "name": "What's the ideal work schedule for maximum efficiency?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Set 8 hours sleep, 2 hours recreation, and 14 hours 'Anything' with work priorities properly configured. The 'Anything' block lets settlers self-manage — they'll work when there's work and recreate when tired. Avoid forcing work for all waking hours; exhausted settlers work at severely reduced speed."
        }
      },
      {
        "@type": "Question",
        "name": "Should I specialize settlers or make everyone a jack-of-all-trades?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Specialize. A settler with 15 points in one skill is worth 3 settlers with 5 points each. Have 1-2 specialists each for cooking, crafting, construction, and mining, with the remaining settlers as flexible support. Specialists gain skill faster and produce higher quality results."
        }
      }
    ]
  };

  return (
    <main className="prose prose-invert max-w-none">
      <h1>Going Medieval Maximize Settler Efficiency — Productivity Optimization</h1>
      <p className="text-lg text-gray-300 leading-relaxed mb-8">
        Maximize settler efficiency in Going Medieval. Optimize work priorities, pathfinding, workstation placement, and schedules for peak colony productivity.
      </p>

<h2>Efficiency Is Survival</h2>
<p>In Going Medieval, every second a settler spends walking, waiting, or idle is a second not spent producing resources. A colony of 5 optimized settlers can outproduce a colony of 8 poorly-managed ones. This guide covers every efficiency technique that veteran players use.</p>

<h2>Efficiency Optimization Table</h2>
<div className="table-wrapper">
<table>
<thead><tr><th>Optimization</th><th>Time Saved (per day)</th><th>Difficulty</th><th>Impact Score</th></tr></thead>
<tbody>
<tr><td>Stockpile near workstations</td><td>2-3 hours</td><td>Easy</td><td>⭐⭐⭐⭐⭐</td></tr>
<tr><td>Sleep near workplace</td><td>1-2 hours</td><td>Easy</td><td>⭐⭐⭐⭐</td></tr>
<tr><td>Remove unnecessary doors</td><td>0.5-1 hour</td><td>Easy</td><td>⭐⭐⭐</td></tr>
<tr><td>Central dining/recreation hub</td><td>1-1.5 hours</td><td>Medium</td><td>⭐⭐⭐⭐</td></tr>
<tr><td>Smart work priorities</td><td>3-5 hours</td><td>Medium</td><td>⭐⭐⭐⭐⭐</td></tr>
<tr><td>Zone-based work assignment</td><td>2-4 hours</td><td>Hard</td><td>⭐⭐⭐⭐⭐</td></tr>
<tr><td>Scheduled batch production</td><td>1-2 hours</td><td>Hard</td><td>⭐⭐⭐</td></tr>
<tr><td>Underground shortcuts</td><td>1-3 hours</td><td>Hard</td><td>⭐⭐⭐⭐</td></tr>
</tbody>
</table>
</div>

<h2>The Stockpile-Proximity Rule</h2>
<p>Place input stockpiles directly adjacent to workstations. A cook needs raw food within 2 tiles of the stove, a smith needs iron ingots next to the smithy, and a tailor needs leather next to the tailor bench. Every tile of distance is about 0.5 seconds of walking — which adds up to hours of wasted time over a season.</p>

<h2>Work Priority Mastery</h2>
<p>Use numeric priorities (1-5) rather than just checkmarks. Set critical jobs (doctor, firefighting, bed rest) at priority 1 for all settlers. Set primary job skills at 2-3 for specialists. Never assign priority 1 to hauling or cleaning — these fill time when nothing else is needed, so they should sit at priority 4-5.</p>

<h2>Zone-Based Work Assignment</h2>
<p>Assign settlers to specific work zones rather than allowing them to roam the entire map. A miner assigned only to the mine zone won't waste time walking to the farm. A farmer restricted to fields and the kitchen won't wander off to haul rocks. Use the Zone tool to create efficient work bubbles.</p>

<h2>The 80/20 Rule for Going Medieval</h2>
<p>80% of your colony's output comes from 20% of the tasks. Identify your bottleneck activities (usually cooking, construction, and mining) and ensure your most efficient settlers are assigned to these. Don't waste your best crafter on hauling duty or your best miner on cleaning floors.</p>

      <section className="mt-12 mb-8">
        <h2>Frequently Asked Questions</h2>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: How do I stop settlers from walking across the entire map for one item?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: Create localized stockpiles near each workstation containing only the materials that workstation needs. Set the stockpile priority to 'Preferred' so haulers keep it stocked. The workstation settler will grab from the nearby stockpile instead of walking to the main storage.</p>
        </div>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: What's the ideal work schedule for maximum efficiency?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: Set 8 hours sleep, 2 hours recreation, and 14 hours 'Anything' with work priorities properly configured. The 'Anything' block lets settlers self-manage — they'll work when there's work and recreate when tired. Avoid forcing work for all waking hours; exhausted settlers work at severely reduced speed.</p>
        </div>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: Should I specialize settlers or make everyone a jack-of-all-trades?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: Specialize. A settler with 15 points in one skill is worth 3 settlers with 5 points each. Have 1-2 specialists each for cooking, crafting, construction, and mining, with the remaining settlers as flexible support. Specialists gain skill faster and produce higher quality results.</p>
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
