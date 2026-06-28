import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Going Medieval Building Cost Guide — Complete Resource Calculator (2026)",
  description: "Complete building cost guide for Going Medieval. Resource requirements for every wall, floor, roof, and furniture type with cost optimization tips.",
};

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What's the cheapest way to build a defensive wall?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wicker walls are cheapest at 2 sticks per tile but only 50 HP. For actual defense, wood palisades are the best cost-to-defense ratio at 6 wood per tile for 250 HP. Limestone becomes cost-effective once you have a dedicated miner."
        }
      },
      {
        "@type": "Question",
        "name": "How many resources do I need for a basic 10x10 room?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A basic 10x10 room needs approximately 120 wood: 40 wood walls (4 wood x 40 wall tiles = 160 wood) plus 100 wood floors (2 wood x 100 floor tiles = 200 wood). Total: ~360 wood for walls, floor, and roof. Budget 400-500 to be safe."
        }
      },
      {
        "@type": "Question",
        "name": "Is clay brick worth the extra processing cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Clay bricks offer double the HP of clay walls for only one extra processing step (firing clay into bricks at a kiln). Yes, clay bricks are worth it for any permanent structure, especially defensive buildings."
        }
      }
    ]
  };

  return (
    <main className="prose prose-invert max-w-none">
      <h1>Going Medieval Building Cost Guide — Complete Resource Calculator</h1>
      <p className="text-lg text-gray-300 leading-relaxed mb-8">
        Complete building cost guide for Going Medieval. Resource requirements for every wall, floor, roof, and furniture type with cost optimization tips.
      </p>

<h2>Planning Your Building Budget</h2>
<p>Every structure in Going Medieval costs resources — and in the early game, every piece of wood and clay counts. This guide catalogs the exact material costs for every building type so you can plan your colony expansion efficiently.</p>

<h2>Wall Material Cost Comparison</h2>
<div className="table-wrapper">
<table>
<thead><tr><th>Wall Type</th><th>Primary Material</th><th>Cost per Tile</th><th>Work to Build (ticks)</th><th>HP</th></tr></thead>
<tbody>
<tr><td>Wood Wall</td><td>Wood (x4)</td><td>4 wood</td><td>200</td><td>150</td></tr>
<tr><td>Clay Wall</td><td>Clay (x4)</td><td>4 clay</td><td>250</td><td>200</td></tr>
<tr><td>Clay Brick Wall</td><td>Clay Brick (x4)</td><td>4 clay bricks</td><td>400</td><td>400</td></tr>
<tr><td>Limestone Wall</td><td>Limestone Block (x4)</td><td>4 limestone blocks</td><td>600</td><td>800</td></tr>
<tr><td>Limestone Brick Wall</td><td>Limestone Brick (x4)</td><td>4 limestone bricks</td><td>800</td><td>1200</td></tr>
<tr><td>Iron Reinforced Wall</td><td>Limestone (x2) + Iron (x2)</td><td>2 each</td><td>1000</td><td>2000</td></tr>
<tr><td>Wicker Wall</td><td>Sticks (x2)</td><td>2 sticks</td><td>100</td><td>50</td></tr>
<tr><td>Wooden Palisade</td><td>Wood (x6)</td><td>6 wood</td><td>300</td><td>250</td></tr>
</tbody>
</table>
</div>

<h2>Floor and Roof Costs</h2>
<p>Floors and roofs use fewer resources per tile than walls but cover larger areas. A 10x10 room needs 40 wall tiles (10 per side, minus corners) plus 100 floor/roof tiles. Plan for at least 200 units of material for a basic medium room.</p>

<h2>Furniture and Workstation Costs</h2>
<p>Workstations like the Research Table (20 wood), Stove (15 clay + 5 wood), and Smithy (10 limestone + 5 wood) have fixed costs. Plan to reserve about 50-80 wood and 30-50 clay for essential workstations in your first year.</p>

<h2>Cost Optimization Strategies</h2>
<p>Use wicker walls for temporary structures (storage sheds, animal pens) to save wood. Upgrade gradually — a clay wall base with limestone reinforcement on the outer layer provides good defense at lower cost than full limestone. Always have a dedicated lumberjack and miner to maintain material flow.</p>

      <section className="mt-12 mb-8">
        <h2>Frequently Asked Questions</h2>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: What's the cheapest way to build a defensive wall?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: Wicker walls are cheapest at 2 sticks per tile but only 50 HP. For actual defense, wood palisades are the best cost-to-defense ratio at 6 wood per tile for 250 HP. Limestone becomes cost-effective once you have a dedicated miner.</p>
        </div>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: How many resources do I need for a basic 10x10 room?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: A basic 10x10 room needs approximately 120 wood: 40 wood walls (4 wood x 40 wall tiles = 160 wood) plus 100 wood floors (2 wood x 100 floor tiles = 200 wood). Total: ~360 wood for walls, floor, and roof. Budget 400-500 to be safe.</p>
        </div>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: Is clay brick worth the extra processing cost?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: Clay bricks offer double the HP of clay walls for only one extra processing step (firing clay into bricks at a kiln). Yes, clay bricks are worth it for any permanent structure, especially defensive buildings.</p>
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
