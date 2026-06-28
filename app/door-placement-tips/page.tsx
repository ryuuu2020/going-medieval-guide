import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Going Medieval Door Placement Tips — Complete Guide (2026)",
  description: "Master door placement in Going Medieval. Optimal layouts for traffic flow, defense, room efficiency, and settler pathfinding optimization.",
};

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Should I put doors between every room?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Rooms that settlers rarely need to enter (like dedicated storage rooms that only store overflow items) don't need dedicated doors if they're accessed through another room. Prioritize doors between high-traffic areas only."
        }
      },
      {
        "@type": "Question",
        "name": "How many doors should my main entrance have?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For defensive colonies, a single reinforced door or gate is ideal — it creates a forced chokepoint. For peaceful colonies, 2-3 doors evenly spaced along your front wall provides better settler flow without creating defensive weakness."
        }
      },
      {
        "@type": "Question",
        "name": "Do doors slow down raiders?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, raiders must break down each door they encounter, buying your defenders valuable time. However, doors don't stop raiders — they only delay them. Each door type has different HP, with iron doors providing the longest delay at 800 HP."
        }
      }
    ]
  };

  return (
    <main className="prose prose-invert max-w-none">
      <h1>Going Medieval Door Placement Tips — Optimal Layout Guide</h1>
      <p className="text-lg text-gray-300 leading-relaxed mb-8">
        Master door placement in Going Medieval. Optimal layouts for traffic flow, defense, room efficiency, and settler pathfinding optimization.
      </p>

<h2>Why Door Placement Determines Colony Efficiency</h2>
<p>Settlers spend a significant portion of their day walking between rooms. Strategic door placement can reduce travel time by 30-50%, directly increasing your colony's productivity. Poor placement creates bottlenecks and slows everything down.</p>

<h2>Door Type Comparison</h2>
<div className="table-wrapper">
<table>
<thead><tr><th>Door Type</th><th>Materials</th><th>HP</th><th>Open Speed</th><th>Best Use</th></tr></thead>
<tbody>
<tr><td>Wicker Door</td><td>5 sticks</td><td>50</td><td>Fast</td><td>Temporary, internal</td></tr>
<tr><td>Wood Door</td><td>15 wood</td><td>150</td><td>Medium</td><td>Standard internal</td></tr>
<tr><td>Iron Door</td><td>10 iron</td><td>800</td><td>Slow</td><td>Vaults, prison cells</td></tr>
<tr><td>Reinforced Door</td><td>15 wood + 5 iron</td><td>400</td><td>Medium</td><td>External defense</td></tr>
<tr><td>Gate (Double)</td><td>30 wood</td><td>300</td><td>Slow</td><td>Main entrance, courtyard</td></tr>
</tbody>
</table>
</div>

<h2>The Central Corridor Strategy</h2>
<p>Place rooms along a central corridor with doors on both sides. This minimizes the number of doors settlers must pass through to reach any destination. For multi-story buildings, align staircases with the corridor for smooth vertical flow.</p>

<h2>Defensive Door Placement</h2>
<p>Place outer doors 3-4 tiles behind your defensive line, not directly on the front wall. This creates a kill zone between the door and the enemy. Use iron doors on rooms containing valuable items (weapons, gold). Never place doors on ground-floor rooms that might be breached during raids.</p>

<h2>Common Door Placement Mistakes</h2>
<p>1. Placing doors in corners — creates pathfinding issues as settlers clip through walls. 2. Single-door chokepoints for high-traffic areas — always use double-width openings or two doors for kitchens and stockpiles. 3. Doors facing directly into enemy approach paths — raiders will target these first.</p>

      <section className="mt-12 mb-8">
        <h2>Frequently Asked Questions</h2>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: Should I put doors between every room?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: No. Rooms that settlers rarely need to enter (like dedicated storage rooms that only store overflow items) don't need dedicated doors if they're accessed through another room. Prioritize doors between high-traffic areas only.</p>
        </div>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: How many doors should my main entrance have?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: For defensive colonies, a single reinforced door or gate is ideal — it creates a forced chokepoint. For peaceful colonies, 2-3 doors evenly spaced along your front wall provides better settler flow without creating defensive weakness.</p>
        </div>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: Do doors slow down raiders?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: Yes, raiders must break down each door they encounter, buying your defenders valuable time. However, doors don't stop raiders — they only delay them. Each door type has different HP, with iron doors providing the longest delay at 800 HP.</p>
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
