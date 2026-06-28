import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Going Medieval Relationships System — Complete Guide (2026)",
  description: "Master the relationships system in Going Medieval. Understand settler social dynamics, rivalries, romance, and how relationships affect colony morale and productivity.",
};

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can settlers get married in Going Medieval?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "There is no formal marriage mechanic, but the Lover relationship status provides the same benefits. Two lovers will share a bed if one is assigned, and they receive mood bonuses from proximity. Their relationship can also produce a mood penalty if they're separated for too long."
        }
      },
      {
        "@type": "Question",
        "name": "What happens when rivals fight?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "When rivals' relationship drops below 15, they may engage in social fights — a non-lethal brawl that causes bruises and cuts to both settlers. This wastes medical resources and reduces productivity. Separate them immediately."
        }
      },
      {
        "@type": "Question",
        "name": "Do relationships affect loyalty during raids?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Indirectly, yes. A settler with strong friendships and a lover in the colony is far less likely to suffer a mental break during stressful events like raids. Conversely, a settler with only rivals is more likely to break and flee or turn on the colony when stress peaks."
        }
      }
    ]
  };

  return (
    <main className="prose prose-invert max-w-none">
      <h1>Going Medieval Relationships System — Social Dynamics Guide</h1>
      <p className="text-lg text-gray-300 leading-relaxed mb-8">
        Master the relationships system in Going Medieval. Understand settler social dynamics, rivalries, romance, and how relationships affect colony morale and productivity.
      </p>

<h2>Settlers Are Social Beings</h2>
<p>Going Medieval features a dynamic relationships system where settlers form opinions of each other based on interactions, proximity, and shared experiences. Relationships affect mood, work efficiency, and can even determine whether settlers stay with your colony or abandon it.</p>

<h2>Relationship Types and Effects</h2>
<div className="table-wrapper">
<table>
<thead><tr><th>Relationship</th><th>Range</th><th>Mood Effect</th><th>Work Effect</th><th>How to Develop</th></tr></thead>
<tbody>
<tr><td>Stranger</td><td>0-20</td><td>None</td><td>None</td><td>Initial state</td></tr>
<tr><td>Acquaintance</td><td>21-40</td><td>±0</td><td>None</td><td>Work in same room 3+ days</td></tr>
<tr><td>Friend</td><td>41-70</td><td>+3 mood near them</td><td>+5% speed when cooperating</td><td>Spend recreation time together</td></tr>
<tr><td>Close Friend</td><td>71-90</td><td>+5 mood near them</td><td>+10% speed when cooperating</td><td>Share meals, fight together</td></tr>
<tr><td>Lover</td><td>91-100</td><td>+10 mood near them</td><td>+15% speed when cooperating</td><td>Romance event triggered</td></tr>
<tr><td>Rival</td><td>0-30</td><td>-5 mood near them</td><td>-10% speed</td><td>Negative interactions, fights</td></tr>
<tr><td>Enemy</td><td>0-10</td><td>-10 mood near them</td><td>-20% speed; may fight</td><td>Sustained rivalry, betrayal</td></tr>
</tbody>
</table>
</div>

<h2>Romance and Partnerships</h2>
<p>When two settlers reach a high relationship value (70+), a romance event can trigger. Lovers gain significant mood bonuses when working or relaxing near each other. However, if one lover dies, the surviving partner suffers a severe, long-lasting mood penalty (-15 for 10+ days).</p>

<h2>Managing Rivalries and Conflicts</h2>
<p>Rivalries form when settlers have incompatible traits or negative interactions. Assign rivals to different work zones and sleeping quarters to minimize contact. If a rivalry escalates to the point of physical fights, you may need to banish one of them — the colony can't afford two settlers constantly injuring each other.</p>

<h2>Optimizing Social Dynamics</h2>
<p>Schedule shared recreation time (1-2 hours daily) for settlers to build friendships. Place workstations of compatible settlers near each other. Avoid assigning a Cannibal and a regular settler to the same kitchen — negative interactions are almost guaranteed. Pair Optimists with Pessimists; the optimist's mood buff partially offsets the pessimist's penalty.</p>

      <section className="mt-12 mb-8">
        <h2>Frequently Asked Questions</h2>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: Can settlers get married in Going Medieval?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: There is no formal marriage mechanic, but the Lover relationship status provides the same benefits. Two lovers will share a bed if one is assigned, and they receive mood bonuses from proximity. Their relationship can also produce a mood penalty if they're separated for too long.</p>
        </div>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: What happens when rivals fight?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: When rivals' relationship drops below 15, they may engage in social fights — a non-lethal brawl that causes bruises and cuts to both settlers. This wastes medical resources and reduces productivity. Separate them immediately.</p>
        </div>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: Do relationships affect loyalty during raids?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: Indirectly, yes. A settler with strong friendships and a lover in the colony is far less likely to suffer a mental break during stressful events like raids. Conversely, a settler with only rivals is more likely to break and flee or turn on the colony when stress peaks.</p>
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
