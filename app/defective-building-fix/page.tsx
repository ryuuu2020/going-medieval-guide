import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Going Medieval Defective Building Fix — Complete Guide (2026)",
  description: "Fix defective buildings in Going Medieval. Troubleshoot stability issues, missing materials, and construction bugs with step-by-step solutions.",
};

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why do my settlers ignore a construction blueprint?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Settlers ignore blueprints if they lack the required skill level or if Construction isn't prioritized in their job panel. Check each settler's Construction priority (at least 3 or higher) and ensure they're not stuck on higher-priority tasks."
        }
      },
      {
        "@type": "Question",
        "name": "How do I fix a building that says 'Inaccessible'?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The 'Inaccessible' error means no settler can physically reach the construction site. Check for blocked doors, missing staircases, or closed gates. Build temporary ramps or scaffolding if the site is at an elevated position."
        }
      },
      {
        "@type": "Question",
        "name": "What causes random structural collapses after a building completes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Post-completion collapses usually happen when the building was at the edge of its stability range, and a minor change (like removing an adjacent wall or floor) pushes it over the threshold. Add reinforcement beams as a safety margin."
        }
      }
    ]
  };

  return (
    <main className="prose prose-invert max-w-none">
      <h1>Going Medieval Defective Building Fix — Troubleshooting Guide</h1>
      <p className="text-lg text-gray-300 leading-relaxed mb-8">
        Fix defective buildings in Going Medieval. Troubleshoot stability issues, missing materials, and construction bugs with step-by-step solutions.
      </p>

<h2>Understanding Defective Buildings</h2>
<p>When a building shows the 'Defective' status in Going Medieval, it means something is preventing construction from completing or the structure lacks stability. This guide covers every type of defective status and how to fix it.</p>

<h2>Common Defective Status Causes</h2>
<p>Defective buildings typically occur for five reasons: missing construction materials, no settler assigned with required skill, structural instability, blocked access paths, or the blueprint was placed in an invalid location (overlapping terrain or other objects).</p>

<h2>Fix Priority Table</h2>
<div className="table-wrapper">
<table>
<thead><tr><th>Defect Type</th><th>Common Cause</th><th>Fix Priority</th><th>Time to Fix</th></tr></thead>
<tbody>
<tr><td>Missing Materials</td><td>No resources in stockpile</td><td>High (blocks all construction)</td><td>~1 in-game day</td></tr>
<tr><td>No Skilled Worker</td><td>Construction priority not assigned</td><td>High</td><td>Immediate (reassign job)</td></tr>
<tr><td>Structural Instability</td><td>Too far from support</td><td>Medium</td><td>~0.5-2 days (add beams/walls)</td></tr>
<tr><td>Blocked Access</td><td>No path to build location</td><td>Medium</td><td>~0.5 days (clear path)</td></tr>
<tr><td>Invalid Placement</td><td>Overlapping terrain/objects</td><td>Low</td><td>~1 day (deconstruct and retry)</td></tr>
<tr><td>Settler Priority Conflict</td><td>Other jobs take precedence</td><td>Low</td><td>Immediate (adjust work priorities)</td></tr>
</tbody>
</table>
</div>

<h2>Step-by-Step Defective Building Fix</h2>
<p>1. Click the defective building and read the error message in the info panel. 2. Check your stockpiles for required materials. 3. Verify at least one settler has Construction enabled in their job priorities. 4. Ensure a clear walking path exists from stockpile to build site. 5. Check structural stability — if the tile shows red in stability overlay, add temporary support beams.</p>

<h2>Preventing Future Defects</h2>
<p>Always build from the ground up. Place foundations first, then walls, then roofs. Never remove a supporting wall without first placing a replacement beam or pillar. Keep construction material stockpiles near active build sites to minimize travel time.</p>

      <section className="mt-12 mb-8">
        <h2>Frequently Asked Questions</h2>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: Why do my settlers ignore a construction blueprint?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: Settlers ignore blueprints if they lack the required skill level or if Construction isn't prioritized in their job panel. Check each settler's Construction priority (at least 3 or higher) and ensure they're not stuck on higher-priority tasks.</p>
        </div>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: How do I fix a building that says 'Inaccessible'?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: The 'Inaccessible' error means no settler can physically reach the construction site. Check for blocked doors, missing staircases, or closed gates. Build temporary ramps or scaffolding if the site is at an elevated position.</p>
        </div>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: What causes random structural collapses after a building completes?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: Post-completion collapses usually happen when the building was at the edge of its stability range, and a minor change (like removing an adjacent wall or floor) pushes it over the threshold. Add reinforcement beams as a safety margin.</p>
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
