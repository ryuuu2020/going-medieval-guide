import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Going Medieval Structural Mechanics — Complete Guide (2026)",
  description: "Understand Going Medieval structural mechanics, stability, load-bearing walls, and collapse prevention. Master building physics with data tables and examples.",
};

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why does my roof keep collapsing in Going Medieval?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Roof collapses occur when there are insufficient walls or beams within the 4-tile support radius. Make sure every roof tile is within 4 tiles of a wall or beam, and that the wall has a direct support path to the ground."
        }
      },
      {
        "@type": "Question",
        "name": "How do beams work structurally?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Beams extend structural support horizontally. A single beam can support up to 5 tiles in each direction, effectively creating wide open rooms without interior walls. Beams must be connected to load-bearing walls at both ends."
        }
      },
      {
        "@type": "Question",
        "name": "Can I build a floating platform in Going Medieval?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, every floor/roof tile must have structural support within its stability radius. Without walls or beams within range, tiles will immediately collapse. There are no 'floating' structures in the game's physics system."
        }
      }
    ]
  };

  return (
    <main className="prose prose-invert max-w-none">
      <h1>Going Medieval Structural Mechanics — Complete Building Physics Guide</h1>
      <p className="text-lg text-gray-300 leading-relaxed mb-8">
        Understand Going Medieval structural mechanics, stability, load-bearing walls, and collapse prevention. Master building physics with data tables and examples.
      </p>

<h2>How Structural Integrity Works</h2>
<p>Going Medieval uses a realistic structural mechanics system where every building piece has weight and structural support values. Understanding these mechanics is essential to prevent catastrophic collapses that can kill settlers and destroy resources.</p>

<h2>The Stability System</h2>
<p>Every tile has a stability value ranging from 0 (unstable/collapses) to 4 (maximum stability). Walls and foundations provide stability to adjacent tiles. The further a tile is from a supporting structure, the lower its stability rating.</p>

<h2>Material Strength Comparison Table</h2>
<div className="table-wrapper">
<table>
<thead><tr><th>Material</th><th>Max Span (tiles)</th><th>Weight</th><th>Support Radius</th><th>Best Use Case</th></tr></thead>
<tbody>
<tr><td>Wood Wall</td><td>4 tiles</td><td>Light (1)</td><td>3 tiles</td><td>Early game, temporary structures</td></tr>
<tr><td>Wood Beam</td><td>6 tiles</td><td>Light (1)</td><td>5 tiles</td><td>Ceilings, bridges</td></tr>
<tr><td>Clay Wall</td><td>3 tiles</td><td>Medium (2)</td><td>3 tiles</td><td>Early reinforced walls</td></tr>
<tr><td>Clay Brick Wall</td><td>5 tiles</td><td>Heavy (3)</td><td>4 tiles</td><td>Mid-game structures</td></tr>
<tr><td>Limestone Wall</td><td>7 tiles</td><td>Very Heavy (4)</td><td>5 tiles</td><td>Fortifications, multi-story</td></tr>
<tr><td>Iron Reinforced Wall</td><td>10 tiles</td><td>Very Heavy (4)</td><td>7 tiles</td><td>Endgame mega-structures</td></tr>
<tr><td>Wood Floor</td><td>4 tiles</td><td>Light (1)</td><td>N/A</td><td>Flooring between levels</td></tr>
<tr><td>Stone Floor</td><td>6 tiles</td><td>Heavy (3)</td><td>N/A</td><td>Durable flooring</td></tr>
</tbody>
</table>
</div>

<h2>Load-Bearing Mechanics</h2>
<p>Walls directly above each other transfer weight to the foundation. A wall on the second floor must have a wall directly beneath it on the first floor, which must rest on natural ground or a foundation. Gaps in this vertical chain cause instability.</p>

<h2>Maximum Construction Heights</h2>
<p>With optimal limestone walls and proper support, structures can reach up to 6-7 floors above ground and 3-4 floors below ground. However, each additional floor increases the risk of collapse if any supporting wall is breached.</p>

<h2>Common Collapse Scenarios and Fixes</h2>
<p>The most common collapse scenario is removing a ground-floor wall in a multi-story building. Always build temporary support beams before modifying load-bearing walls. When mining underground, leave at least 2 tiles between rooms as natural pillars.</p>

<h2>Advanced Structural Techniques</h2>
<p>Use beams to create wide open spaces — a single beam can support up to 6 tiles of flooring in each direction. Combine beams with pillars for cathedral-style great halls. Underground bases benefit from natural stone pillars left in place during mining.</p>

      <section className="mt-12 mb-8">
        <h2>Frequently Asked Questions</h2>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: Why does my roof keep collapsing in Going Medieval?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: Roof collapses occur when there are insufficient walls or beams within the 4-tile support radius. Make sure every roof tile is within 4 tiles of a wall or beam, and that the wall has a direct support path to the ground.</p>
        </div>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: How do beams work structurally?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: Beams extend structural support horizontally. A single beam can support up to 5 tiles in each direction, effectively creating wide open rooms without interior walls. Beams must be connected to load-bearing walls at both ends.</p>
        </div>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: Can I build a floating platform in Going Medieval?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: No, every floor/roof tile must have structural support within its stability radius. Without walls or beams within range, tiles will immediately collapse. There are no 'floating' structures in the game's physics system.</p>
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
