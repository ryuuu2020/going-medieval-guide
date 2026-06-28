import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Going Medieval Colony Design Philosophy — Complete Guide (2026)",
  description: "Master Going Medieval colony design with proven layout principles. Traffic flow, room relationships, defense integration, and aesthetics for efficient colonies.",
};

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Should I build inside a mountain or on open ground?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mountain bases offer natural defense (one entrance to guard) and temperature stability but are harder to expand and suffer from darkness penalties. Open ground bases offer flexibility and natural light but require more defensive walls. Both are viable; choose based on your preferred playstyle."
        }
      },
      {
        "@type": "Question",
        "name": "How much space should I leave between buildings?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Leave 3-tile wide corridors between major building clusters. This allows for future expansion pathways, defensive chokepoints, and prevents fire from spreading between buildings. Underground bases should leave 2-tile thick natural stone walls between rooms as support pillars."
        }
      },
      {
        "@type": "Question",
        "name": "What's the optimal colony size for 6 settlers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A 30x30 tile footprint is comfortable for 6 settlers with room to expand. This gives you space for 6 bedrooms, a great hall, kitchen, workshop, storage, and defensive perimeter. If building vertically, you can fit the same functions in a 15x15 footprint across 3 floors."
        }
      }
    ]
  };

  return (
    <main className="prose prose-invert max-w-none">
      <h1>Going Medieval Colony Design Philosophy — Layout Principles</h1>
      <p className="text-lg text-gray-300 leading-relaxed mb-8">
        Master Going Medieval colony design with proven layout principles. Traffic flow, room relationships, defense integration, and aesthetics for efficient colonies.
      </p>

<h2>Design Is Destiny</h2>
<p>Your colony layout determines everything: settler efficiency, defensive strength, expansion potential, and aesthetic satisfaction. A well-designed colony is a joy to manage; a poorly-designed one is a constant struggle against pathfinding, bottlenecks, and inefficiency.</p>

<h2>Core Design Principles</h2>
<div className="table-wrapper">
<table>
<thead><tr><th>Principle</th><th>Description</th><th>Implementation</th><th>Impact</th></tr></thead>
<tbody>
<tr><td>Hub and Spoke</td><td>Central hub with radiating wings</td><td>Dining/rec room as center, all rooms branch off</td><td>Minimizes travel time</td></tr>
<tr><td>Vertical Zoning</td><td>Different functions on different floors</td><td>Ground: work, Floor 1: sleep, Floor 2+: defense</td><td>Logical separation, efficient</td></tr>
<tr><td>Ring Defense</td><td>Layered defensive perimeter</td><td>Outer wall → kill zone → inner wall → safe zone</td><td>Maximum defense depth</td></tr>
<tr><td>Dirty/Clean Split</td><td>Separate clean and dirty zones</td><td>Kitchen/hospital far from butcher/smithy</td><td>Reduces infection, food poisoning</td></tr>
<tr><td>Modular Expansion</td><td>Design for future growth</td><td>Leave 2-3 tile gaps between building clusters</td><td>Easy expansion without demolition</td></tr>
<tr><td>Gravity Flow</td><td>Exploit natural hillside</td><td>Build into hillside, top exits for defense</td><td>Free defense advantage</td></tr>
</tbody>
</table>
</div>

<h2>The Hub-and-Spoke Model in Detail</h2>
<p>Place your Great Hall (dining + recreation) at the exact center of your colony. Bedrooms branch off in one direction, workshops in another, storage in a third, and the defensive line in the fourth. Every settler passes through the center hub multiple times per day, making it the natural social and functional heart of the colony.</p>

<h2>Defense-First vs Efficiency-First Philosophy</h2>
<p>On lower difficulties, prioritize efficiency — place everything for minimum travel time. On higher difficulties (Survival and above), design for defense first, then optimize efficiency within the defensive shell. A beautiful, efficient colony that falls to the first raid was never efficient at all.</p>

<h2>Aesthetics and Settler Mood</h2>
<p>A well-designed colony with clear pathways, decorated rooms, and logical flow provides inherent mood bonuses through the Beauty and Impressiveness mechanics. Symmetry matters — settlers get a +2 mood bonus from 'Harmonious Environment' when buildings are arranged in balanced layouts.</p>

      <section className="mt-12 mb-8">
        <h2>Frequently Asked Questions</h2>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: Should I build inside a mountain or on open ground?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: Mountain bases offer natural defense (one entrance to guard) and temperature stability but are harder to expand and suffer from darkness penalties. Open ground bases offer flexibility and natural light but require more defensive walls. Both are viable; choose based on your preferred playstyle.</p>
        </div>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: How much space should I leave between buildings?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: Leave 3-tile wide corridors between major building clusters. This allows for future expansion pathways, defensive chokepoints, and prevents fire from spreading between buildings. Underground bases should leave 2-tile thick natural stone walls between rooms as support pillars.</p>
        </div>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: What's the optimal colony size for 6 settlers?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: A 30x30 tile footprint is comfortable for 6 settlers with room to expand. This gives you space for 6 bedrooms, a great hall, kitchen, workshop, storage, and defensive perimeter. If building vertically, you can fit the same functions in a 15x15 footprint across 3 floors.</p>
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
