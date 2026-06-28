import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Going Medieval Newcomers Skills — Complete Guide (2026)",
  description: "Evaluate Going Medieval newcomers by priority skills. Learn which skills matter most for new settlers, optimal recruitment strategy, and training guide.",
};

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Should I accept every newcomer who arrives?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Evaluate each newcomer based on skills and traits. In early game, accept anyone with Construction or Cooking above level 5. In late game, only accept settlers who fill a specific skill gap or have rare positive traits."
        }
      },
      {
        "@type": "Question",
        "name": "Can I train a settler with 0 in a skill?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all settlers can learn any skill through practice, but they start very slowly. A level 0 Construction settler builds at 50% speed and often creates lower quality results. Expect 2-3 in-game weeks of dedicated practice to reach a usable skill level."
        }
      },
      {
        "@type": "Question",
        "name": "How fast do skills improve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Skill gain is roughly linear — reaching level 10 takes about 5x longer than reaching level 5. Focus on training settlers to level 5-7 in their primary role, which provides 80% of the max benefit. Levels 8-10 are for dedicated specialists only."
        }
      }
    ]
  };

  return (
    <main className="prose prose-invert max-w-none">
      <h1>Going Medieval Newcomers Skills — Recruit Priority & Training Guide</h1>
      <p className="text-lg text-gray-300 leading-relaxed mb-8">
        Evaluate Going Medieval newcomers by priority skills. Learn which skills matter most for new settlers, optimal recruitment strategy, and training guide.
      </p>

<h2>Not All Newcomers Are Equal</h2>
<p>When a wanderer arrives or you capture a raider, you face a critical decision: accept them into your colony or turn them away. Each newcomer consumes food, requires shelter, and can either multiply your productivity or drain your resources. Skill evaluation is the key.</p>

<h2>Skill Priority Tier List for Recruits</h2>
<div className="table-wrapper">
<table>
<thead><tr><th>Tier</th><th>Skill</th><th>Importance</th><th>Why It Matters</th></tr></thead>
<tbody>
<tr><td>S</td><td>Construction</td><td>Critical</td><td>Required for all building and repairs</td></tr>
<tr><td>S</td><td>Cooking</td><td>Critical</td><td>Higher skill = less food poisoning</td></tr>
<tr><td>A</td><td>Mining</td><td>Very High</td><td>Resource extraction speed</td></tr>
<tr><td>A</td><td>Crafting</td><td>Very High</td><td>Quality of crafted items (armor, weapons)</td></tr>
<tr><td>A</td><td>Intellectual</td><td>Very High</td><td>Research speed — unlocks all tech</td></tr>
<tr><td>B</td><td>Medical</td><td>High</td><td>Healing speed and quality</td></tr>
<tr><td>B</td><td>Tailoring</td><td>High</td><td>Clothing quality and speed</td></tr>
<tr><td>B</td><td>Smithing</td><td>High</td><td>Weapon/armor quality</td></tr>
<tr><td>C</td><td>Melee</td><td>Moderate</td><td>Combat effectiveness</td></tr>
<tr><td>C</td><td>Marksman</td><td>Moderate</td><td>Ranged combat effectiveness</td></tr>
<tr><td>C</td><td>Animal Handling</td><td>Moderate</td><td>Taming and butchering efficiency</td></tr>
<tr><td>D</td><td>Speech</td><td>Low (early), High (late)</td><td>Trading and recruitment</td></tr>
</tbody>
</table>
</div>

<h2>Early Game vs Late Game Priorities</h2>
<p>In the first year, prioritize newcomers with Construction, Mining, and Cooking — these are your survival skills. By year 2-3, shift to Crafting and Intellectual for technology progression. Late game, Speech becomes valuable for recruiting rare specialists through trade and negotiation.</p>

<h2>Skill Training — How Settlers Improve</h2>
<p>Settlers gain skill experience by performing related tasks. A level 1 Construction settler will reach level 5 after building approximately 200 wall tiles. Assign low-skill settlers to repetitive tasks (hauling, cleaning) while reserving critical jobs (surgery, weapon crafting) for your highest-skill specialists.</p>

<h2>When to Reject a Newcomer</h2>
<p>Reject newcomers who have all skills below level 3, carry negative traits like Lazy or Cannibal, or arrive during winter when food is scarce. It's better to maintain a lean, efficient colony of 5-6 skilled settlers than a bloated colony of 10 unskilled mouths to feed.</p>

      <section className="mt-12 mb-8">
        <h2>Frequently Asked Questions</h2>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: Should I accept every newcomer who arrives?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: No. Evaluate each newcomer based on skills and traits. In early game, accept anyone with Construction or Cooking above level 5. In late game, only accept settlers who fill a specific skill gap or have rare positive traits.</p>
        </div>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: Can I train a settler with 0 in a skill?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: Yes, all settlers can learn any skill through practice, but they start very slowly. A level 0 Construction settler builds at 50% speed and often creates lower quality results. Expect 2-3 in-game weeks of dedicated practice to reach a usable skill level.</p>
        </div>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: How fast do skills improve?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: Skill gain is roughly linear — reaching level 10 takes about 5x longer than reaching level 5. Focus on training settlers to level 5-7 in their primary role, which provides 80% of the max benefit. Levels 8-10 are for dedicated specialists only.</p>
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
