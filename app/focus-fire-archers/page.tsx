import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Going Medieval Focus Fire Archers — Complete Guide (2026)",
  description: "Master focus fire archer tactics in Going Medieval. Target priority, volley coordination, archer positioning, and how to eliminate threats one by one.",
};

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How many archers do I need for focus fire to be effective?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Minimum 3 archers for focus fire to be worthwhile. With 2 archers, the time to kill is too long. With 3 longbow archers focus-firing, you can eliminate a lightly armored enemy in 1-2 salvos. With 5+ archers, you can kill most enemies before they reach your walls."
        }
      },
      {
        "@type": "Question",
        "name": "Should I focus fire on the closest enemy or the most dangerous one?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Always the most dangerous, not the closest. Enemy archers and trebuchet operators can damage your colony from outside your melee range — eliminate them first. Your melee defenders can handle the close-range enemies that reach your walls."
        }
      },
      {
        "@type": "Question",
        "name": "Do enemies use focus fire against my settlers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, enemy AI spreads attacks randomly among available targets rather than focus-firing. This is a significant advantage for the player. Use it — while enemies spread their damage, you concentrate yours and eliminate them one by one."
        }
      }
    ]
  };

  return (
    <main className="prose prose-invert max-w-none">
      <h1>Going Medieval Focus Fire Archers — Ranged Combat Tactics</h1>
      <p className="text-lg text-gray-300 leading-relaxed mb-8">
        Master focus fire archer tactics in Going Medieval. Target priority, volley coordination, archer positioning, and how to eliminate threats one by one.
      </p>

<h2>One Dead Enemy Is Better Than Five Wounded Ones</h2>
<p>Focus fire — concentrating all archers on a single target — is the most effective ranged combat tactic in Going Medieval. By eliminating enemies one by one instead of spreading damage, you remove threats from the battlefield faster, reducing the total damage your settlers receive.</p>

<h2>Target Priority Order</h2>
<div className="table-wrapper">
<table>
<thead><tr><th>Priority</th><th>Target Type</th><th>Reason</th><th>Shots to Kill (3 archers)</th></tr></thead>
<tbody>
<tr><td>1 (Highest)</td><td>Enemy Archers</td><td>They damage your settlers from range</td><td>2-4 volleys</td></tr>
<tr><td>2</td><td>Enemy Trebuchets</td><td>Destroy walls and structures</td><td>Volley + melee rush</td></tr>
<tr><td>3</td><td>Heavy Armor Units</td><td>Tank your damage, threaten breaches</td><td>5-8 volleys</td></tr>
<tr><td>4</td><td>Shield Bearers</td><td>Block archer shots</td><td>Flank to bypass shield</td></tr>
<tr><td>5</td><td>Light Melee</td><td>Easy kills, but low threat</td><td>1-2 volleys</td></tr>
<tr><td>6 (Lowest)</td><td>Non-combat Raiders</td><td>Looters, minimal threat</td><td>1 volley</td></tr>
</tbody>
</table>
</div>

<h2>How to Execute Focus Fire</h2>
<p>Select all your archers, right-click on the priority target. All selected archers will fire at that target simultaneously. A volley from 3 longbow archers deals approximately 54-66 damage in one salvo — enough to kill or severely wound most lightly armored enemies. Re-target after each kill.</p>

<h2>Crossbow vs Longbow Focus Fire</h2>
<p>Crossbows are superior for focus fire against armored targets due to higher per-shot damage and armor penetration. Longbows are better against groups of light enemies due to faster fire rate. Ideally, use crossbows for focus fire on priority targets while longbows suppress the remaining enemies.</p>

<h2>Archer Platform Design for Focus Fire</h2>
<p>Build archer platforms 2-3 levels above ground with overlapping fields of fire. All archers on the platform should have a clear line of sight to the main approach path. Stagger the platform elevations so archers in the back row can shoot over those in the front row — maximizing the number of archers that can focus fire on any single target.</p>

      <section className="mt-12 mb-8">
        <h2>Frequently Asked Questions</h2>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: How many archers do I need for focus fire to be effective?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: Minimum 3 archers for focus fire to be worthwhile. With 2 archers, the time to kill is too long. With 3 longbow archers focus-firing, you can eliminate a lightly armored enemy in 1-2 salvos. With 5+ archers, you can kill most enemies before they reach your walls.</p>
        </div>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: Should I focus fire on the closest enemy or the most dangerous one?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: Always the most dangerous, not the closest. Enemy archers and trebuchet operators can damage your colony from outside your melee range — eliminate them first. Your melee defenders can handle the close-range enemies that reach your walls.</p>
        </div>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: Do enemies use focus fire against my settlers?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: No, enemy AI spreads attacks randomly among available targets rather than focus-firing. This is a significant advantage for the player. Use it — while enemies spread their damage, you concentrate yours and eliminate them one by one.</p>
        </div>

      </section>

      <section className="mt-12 p-6 bg-gray-800/50 rounded-lg border border-gray-700">
        <h2 className="!mt-0">Related Guides</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          <a href="/defense" className="text-blue-400 hover:text-blue-300 hover:underline text-sm">Defense Guide</a>
          <a href="/best-weapons-ranked" className="text-blue-400 hover:text-blue-300 hover:underline text-sm">Best Weapons Ranked</a>
          <a href="/combat-positioning" className="text-blue-400 hover:text-blue-300 hover:underline text-sm">Combat Positioning</a>
          <a href="/best-defense-layout" className="text-blue-400 hover:text-blue-300 hover:underline text-sm">Best Defense Layout</a>
          <a href="/raid-defense-strategy" className="text-blue-400 hover:text-blue-300 hover:underline text-sm">Raid Defense</a>
          <a href="/killbox-design" className="text-blue-400 hover:text-blue-300 hover:underline text-sm">Killbox Design</a>
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
