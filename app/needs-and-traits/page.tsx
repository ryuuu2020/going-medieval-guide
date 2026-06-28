import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Going Medieval Needs and Traits — Complete Guide (2026)",
  description: "Complete guide to Going Medieval settler needs and traits. Understand mood mechanics, personality types, and how to keep settlers happy and productive.",
};

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can settler traits change over time?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, traits are permanent and do not change. This is why selecting settlers with good traits during recruitment is crucial. A lazy pessimist will always be a burden, while an industrious optimist is a permanent asset."
        }
      },
      {
        "@type": "Question",
        "name": "What's the most dangerous negative trait?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cannibal combined with Bloodlust is extremely dangerous, as these settlers may attack others when mood drops too low. Greedy settlers in colonies with limited resources can also become problematic if they feel underappreciated."
        }
      },
      {
        "@type": "Question",
        "name": "How do I know what my settlers need?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Click on any settler and check the Needs tab in their info panel. Each unmet need shows as a red icon with a negative mood value. Hover over the icon to see exactly what's missing and how much mood penalty it causes."
        }
      }
    ]
  };

  return (
    <main className="prose prose-invert max-w-none">
      <h1>Going Medieval Needs and Traits — Complete Settler Psychology Guide</h1>
      <p className="text-lg text-gray-300 leading-relaxed mb-8">
        Complete guide to Going Medieval settler needs and traits. Understand mood mechanics, personality types, and how to keep settlers happy and productive.
      </p>

<h2>Understanding Your Settlers</h2>
<p>Every settler in Going Medieval comes with a unique combination of needs and traits that determine their behavior, mood, and productivity. Ignoring these psychological factors leads to mental breaks, fights, and settlers abandoning your colony.</p>

<h2>Core Needs Hierarchy</h2>
<p>Settlers have five core needs that must be met: Food (hunger), Rest (sleep), Comfort (furniture quality), Recreation (leisure activities), and Safety (feeling secure from raids). Each unmet need accumulates negative mood modifiers that can spiral into severe depression or violent outbursts.</p>

<h2>All Traits and Their Effects Table</h2>
<div className="table-wrapper">
<table>
<thead><tr><th>Trait</th><th>Type</th><th>Effect</th><th>Management Strategy</th></tr></thead>
<tbody>
<tr><td>Cannibal</td><td>Negative</td><td>+20 mood when eating human meat</td><td>Isolate from butchering</td></tr>
<tr><td>Bloodlust</td><td>Negative</td><td>+15 mood from witnessing death</td><td>Assign to combat roles</td></tr>
<tr><td>Ascetic</td><td>Positive</td><td>No mood penalty for poor rooms</td><td>Perfect for mining/outpost duty</td></tr>
<tr><td>Greedy</td><td>Negative</td><td>-10 mood if room isn't impressive</td><td>Give them the best bedroom</td></tr>
<tr><td>Industrious</td><td>Positive</td><td>+30% work speed</td><td>Assign to crafting, construction</td></tr>
<tr><td>Lazy</td><td>Negative</td><td>-20% work speed, needs more recreation</td><td>Simple jobs (hauling, cleaning)</td></tr>
<tr><td>Psychopath</td><td>Mixed</td><td>No mood from social interactions</td><td>Night shift, isolated jobs</td></tr>
<tr><td>Optimist</td><td>Positive</td><td>Permanent +5 mood boost</td><td>Any role — just keep alive!</td></tr>
<tr><td>Pessimist</td><td>Negative</td><td>Permanent -5 mood penalty</td><td>Give extra recreation time</td></tr>
<tr><td>Teetotaler</td><td>Mixed</td><td>Refuses alcohol</td><td>Provide alternative recreation</td></tr>
</tbody>
</table>
</div>

<h2>Mood Management Strategies</h2>
<p>Stack positive mood buffs to offset negative traits: impressive bedrooms (+5), fine meals (+3), comfortable furniture (+2), recreation time (+3), and beautiful surroundings (+2). A settler with 3+ positive buffs can overcome even a pessimistic trait.</p>

<h2>Dealing with Bad Trait Combinations</h2>
<p>The worst combinations (like Greedy + Pessimist) require dedicated management. Give these settlers the best rooms, ensure they never go hungry, and assign them to low-stress jobs away from combat. If a settler becomes unmanageable, consider banishing them — the colony survives without toxic members.</p>

      <section className="mt-12 mb-8">
        <h2>Frequently Asked Questions</h2>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: Can settler traits change over time?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: No, traits are permanent and do not change. This is why selecting settlers with good traits during recruitment is crucial. A lazy pessimist will always be a burden, while an industrious optimist is a permanent asset.</p>
        </div>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: What's the most dangerous negative trait?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: Cannibal combined with Bloodlust is extremely dangerous, as these settlers may attack others when mood drops too low. Greedy settlers in colonies with limited resources can also become problematic if they feel underappreciated.</p>
        </div>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: How do I know what my settlers need?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: Click on any settler and check the Needs tab in their info panel. Each unmet need shows as a red icon with a negative mood value. Hover over the icon to see exactly what's missing and how much mood penalty it causes.</p>
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
