import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Going Medieval Vertical Stacking — Complete Guide (2026)",
  description: "Master vertical stacking in Going Medieval. Optimize multi-floor building efficiency, settler pathfinding, and structural stability for max space usage.",
};

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What's the maximum number of floors I can build?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The practical maximum is 6-7 floors above ground using limestone walls with proper structural support. Beyond this, each additional floor requires exponentially more support infrastructure. Underground, you can dig 3-4 floors deep before hitting bedrock."
        }
      },
      {
        "@type": "Question",
        "name": "Do settlers move slower when going up stairs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, vertical movement is approximately 2x slower than horizontal movement. A settler climbing one floor is equivalent to walking 4-5 horizontal tiles. Plan frequent-use rooms on lower floors to minimize stair usage."
        }
      },
      {
        "@type": "Question",
        "name": "Can I build a basement under an existing structure?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Technically yes, but it's extremely risky. Mining under existing structures can collapse the entire building if you don't leave proper support pillars. Always build basements first, or add temporary support beams before digging."
        }
      }
    ]
  };

  return (
    <main className="prose prose-invert max-w-none">
      <h1>Going Medieval Vertical Stacking — Multi-Floor Efficiency Guide</h1>
      <p className="text-lg text-gray-300 leading-relaxed mb-8">
        Master vertical stacking in Going Medieval. Optimize multi-floor building efficiency, settler pathfinding, and structural stability for max space usage.
      </p>

<h2>The Case for Building Up Instead of Out</h2>
<p>Land is limited, but the sky isn't. Vertical stacking maximizes your colony's footprint efficiency, reduces settler travel distances, and concentrates defensive resources. A well-designed 4-story tower can house everything a sprawling ground-level base can in 25% of the footprint.</p>

<h2>Vertical Space Planning Table</h2>
<div className="table-wrapper">
<table>
<thead><tr><th>Floor</th><th>Recommended Use</th><th>Ceiling Height</th><th>Accessibility</th></tr></thead>
<tbody>
<tr><td>Underground (-2)</td><td>Cold storage, prison, vault</td><td>2 tiles</td><td>Stairs only</td></tr>
<tr><td>Underground (-1)</td><td>Root cellar, mushroom farm</td><td>2 tiles</td><td>Stairs or ramp</td></tr>
<tr><td>Ground (0)</td><td>Workshops, kitchen, dining</td><td>2-3 tiles</td><td>Direct access</td></tr>
<tr><td>1st Floor (+1)</td><td>Bedrooms, research, hospital</td><td>2 tiles</td><td>Stairs</td></tr>
<tr><td>2nd Floor (+2)</td><td>Barracks, storage overflow</td><td>2 tiles</td><td>Stairs</td></tr>
<tr><td>3rd Floor (+3)</td><td>Archer posts, lookout towers</td><td>1-2 tiles</td><td>Ladder or stairs</td></tr>
<tr><td>Roof (+4)</td><td>Observation, ballista platform</td><td>Open air</td><td>Ladder</td></tr>
</tbody>
</table>
</div>

<h2>Staircase Placement Golden Rules</h2>
<p>Place one staircase per floor, centrally located. Each staircase tile uses 1x2 or 2x2 space depending on type. Center-aligned staircases minimize the average distance settlers must walk on each floor. Never put staircases at corners — this doubles travel distance.</p>

<h2>Load-Bearing Column Design</h2>
<p>For structures taller than 3 floors, incorporate dedicated load-bearing columns spaced every 4-5 tiles. These columns must run continuously from the foundation to the top floor. Limestone columns provide the best weight-to-support ratio for tall structures.</p>

<h2>Vertical vs Horizontal Efficiency Analysis</h2>
<p>A 10x10 single-floor base has 100 tiles of usable space. A 5x5 four-story tower has the same 100 tiles but uses 75% less ground area. Settlers in the tower walk an average of 7 tiles to any destination vs 14 tiles in the flat base — cutting travel time in half. The trade-off is higher construction complexity and vulnerability to structural damage.</p>

      <section className="mt-12 mb-8">
        <h2>Frequently Asked Questions</h2>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: What's the maximum number of floors I can build?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: The practical maximum is 6-7 floors above ground using limestone walls with proper structural support. Beyond this, each additional floor requires exponentially more support infrastructure. Underground, you can dig 3-4 floors deep before hitting bedrock.</p>
        </div>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: Do settlers move slower when going up stairs?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: Yes, vertical movement is approximately 2x slower than horizontal movement. A settler climbing one floor is equivalent to walking 4-5 horizontal tiles. Plan frequent-use rooms on lower floors to minimize stair usage.</p>
        </div>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: Can I build a basement under an existing structure?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: Technically yes, but it's extremely risky. Mining under existing structures can collapse the entire building if you don't leave proper support pillars. Always build basements first, or add temporary support beams before digging.</p>
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
