import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Going Medieval Complete Research Tree — Technology Guide (2026)",
  description: "Complete Going Medieval research tree guide. Optimal unlock order, tech prerequisites, research speed optimization, and must-have technologies for every stage.",
};

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long does it take to research everything?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "With a dedicated level 10 Intellectual researcher working full-time, completing the entire research tree takes approximately 2-3 in-game years. With multiple researchers, you can cut this to 1-1.5 years. Most colonies don't need every technology — focus on 15-20 core techs."
        }
      },
      {
        "@type": "Question",
        "name": "Can I research without a research table?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, a research table is required. Build one as soon as you have a shelter. Place it in a clean, well-lit room with a chair for comfort bonus. The quality of the room affects research speed — an impressive laboratory boosts research by up to 15%."
        }
      },
      {
        "@type": "Question",
        "name": "What's the single most impactful technology to rush?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Farming must be your first research — without it, you're dependent on gathering and hunting, which are unsustainable past the first season. After Farming, Architecture is the most transformative, unlocking stone construction that won't burn down during raids."
        }
      }
    ]
  };

  return (
    <main className="prose prose-invert max-w-none">
      <h1>Going Medieval Complete Research Tree — Technology Progression Guide</h1>
      <p className="text-lg text-gray-300 leading-relaxed mb-8">
        Complete Going Medieval research tree guide. Optimal unlock order, tech prerequisites, research speed optimization, and must-have technologies for every stage.
      </p>

<h2>Research Is Your Path to Power</h2>
<p>The research tree in Going Medieval contains over 40 technologies that unlock new buildings, weapons, armor, and capabilities. Choosing the right research order can accelerate your colony's development by weeks, while poor choices can leave you vulnerable when raids escalate.</p>

<h2>Optimal Research Order by Phase</h2>
<div className="table-wrapper">
<table>
<thead><tr><th>Phase</th><th>Research Priority</th><th>Unlocks</th><th>Research Cost</th><th>Why First</th></tr></thead>
<tbody>
<tr><td>Day 1</td><td>Farming</td><td>Crop plots, basic plants</td><td>400</td><td>Food sustainability</td></tr>
<tr><td>Day 3</td><td>Tailoring</td><td>Tailor bench, basic clothes</td><td>300</td><td>Winter clothing</td></tr>
<tr><td>Day 5</td><td>Preserving Food</td><td>Smokehouse, food preservation</td><td>500</td><td>Long-term food storage</td></tr>
<tr><td>Week 2</td><td>Architecture</td><td>Stone walls, beams, arches</td><td>600</td><td>Sturdy buildings</td></tr>
<tr><td>Week 2</td><td>Smithing</td><td>Smithy, iron tools, weapons</td><td>700</td><td>Better equipment</td></tr>
<tr><td>Week 3</td><td>Medicine</td><td>Apothecary, herbal medicine</td><td>500</td><td>Survive injuries</td></tr>
<tr><td>Week 4</td><td>Advanced Smithing</td><td>Steel production, better arms</td><td>1000</td><td>Military superiority</td></tr>
<tr><td>Month 2</td><td>Defensive Structures</td><td>Traps, reinforced walls, merlons</td><td>800</td><td>Raid defense</td></tr>
<tr><td>Month 3</td><td>Brewing</td><td>Brewery, alcohol production</td><td>400</td><td>Mood management, trade</td></tr>
<tr><td>Month 4+</td><td>Advanced Techs</td><td>Firearms mod support, etc.</td><td>Varies</td><td>Endgame optimization</td></tr>
</tbody>
</table>
</div>

<h2>Research Speed Optimization</h2>
<p>Research speed depends on the Intellectual skill of the settler assigned to the research table. A level 10 Intellectual settler researches approximately 3x faster than level 1. Always have your highest Intellectual settler on dedicated research duty with a research table in a well-lit, comfortable room.</p>

<h2>Must-Have vs Skip Technologies</h2>
<p>Must-have: Farming, Tailoring, Architecture, Smithing, Medicine, Defensive Structures. These are non-negotiable for survival. Nice-to-have: Brewing (alcohol for mood/trade), Carpentry (better furniture). Skip early: Luxury Decorations (pure aesthetics, no survival benefit), Advanced Brewing (only needed for trade-focused colonies).</p>

      <section className="mt-12 mb-8">
        <h2>Frequently Asked Questions</h2>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: How long does it take to research everything?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: With a dedicated level 10 Intellectual researcher working full-time, completing the entire research tree takes approximately 2-3 in-game years. With multiple researchers, you can cut this to 1-1.5 years. Most colonies don't need every technology — focus on 15-20 core techs.</p>
        </div>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: Can I research without a research table?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: No, a research table is required. Build one as soon as you have a shelter. Place it in a clean, well-lit room with a chair for comfort bonus. The quality of the room affects research speed — an impressive laboratory boosts research by up to 15%.</p>
        </div>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: What's the single most impactful technology to rush?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: Farming must be your first research — without it, you're dependent on gathering and hunting, which are unsustainable past the first season. After Farming, Architecture is the most transformative, unlocking stone construction that won't burn down during raids.</p>
        </div>

      </section>

      <section className="mt-12 p-6 bg-gray-800/50 rounded-lg border border-gray-700">
        <h2 className="!mt-0">Related Guides</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          <a href="/beginners" className="text-blue-400 hover:text-blue-300 hover:underline text-sm">Beginner Guide</a>
          <a href="/tier-list" className="text-blue-400 hover:text-blue-300 hover:underline text-sm">Complete Tier List</a>
          <a href="/tips" className="text-blue-400 hover:text-blue-300 hover:underline text-sm">Tips & Tricks</a>
          <a href="/faq" className="text-blue-400 hover:text-blue-300 hover:underline text-sm">FAQ</a>
          <a href="/research" className="text-blue-400 hover:text-blue-300 hover:underline text-sm">Research Tree</a>
          <a href="/builds" className="text-blue-400 hover:text-blue-300 hover:underline text-sm">Best Builds</a>
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
