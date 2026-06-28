import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Going Medieval Best Perk Combinations — Complete Guide (2026)",
  description: "Discover the best perk combinations in Going Medieval. Optimize settler builds for combat, crafting, farming, mining, and research with synergistic perk pairings.",
};

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can settlers gain new perks over time?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, perks are fixed at settler generation and never change. This makes initial settler selection and recruitment decisions permanent. A settler with bad perks will always have those bad perks."
        }
      },
      {
        "@type": "Question",
        "name": "Which single perk is the best in the game?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Industrious (+30% global work speed) is widely considered the best single perk because it affects everything a settler does. It's useful in every role and has no drawbacks. Fast Learner is a close second for long-term colonies."
        }
      },
      {
        "@type": "Question",
        "name": "How do I know which perks a potential recruit has?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For wanderers who arrive at your colony, perks are displayed in their character panel before you accept them. For slave traders, hover over the slave in the trade menu to see their full stats including perks. Never buy a slave without checking their traits and perks first."
        }
      }
    ]
  };

  return (
    <main className="prose prose-invert max-w-none">
      <h1>Going Medieval Best Perk Combinations — Settler Build Guide</h1>
      <p className="text-lg text-gray-300 leading-relaxed mb-8">
        Discover the best perk combinations in Going Medieval. Optimize settler builds for combat, crafting, farming, mining, and research with synergistic perk pairings.
      </p>

<h2>Perks Make the Settler</h2>
<p>Each settler in Going Medieval can have up to 3 perks (background traits) that define their strengths and weaknesses. The right combination of perks can create a super-settler who outperforms average colonists by 200% in their specialized role. This guide covers every optimal perk combination by role.</p>

<h2>Ultimate Role Builds Table</h2>
<div className="table-wrapper">
<table>
<thead><tr><th>Role</th><th>Perk 1</th><th>Perk 2</th><th>Perk 3</th><th>Total Bonus</th><th>Rating</th></tr></thead>
<tbody>
<tr><td>Master Crafter</td><td>Industrious (+30% speed)</td><td>Perfectionist (+quality)</td><td>Night Owl (+20% at night)</td><td>+50% speed, max quality</td><td>⭐⭐⭐⭐⭐</td></tr>
<tr><td>Combat God</td><td>Brawler (+melee)</td><td>Tough (+HP)</td><td>Bloodlust (+dmg when low HP)</td><td>+25% damage, +30% HP</td><td>⭐⭐⭐⭐⭐</td></tr>
<tr><td>Sniper Elite</td><td>Eagle Eye (+accuracy)</td><td>Steady Hands (+ranged)</td><td>Patient (+aim time)</td><td>+35% accuracy, +20% damage</td><td>⭐⭐⭐⭐⭐</td></tr>
<tr><td>Farm King</td><td>Green Thumb (+harvest)</td><td>Industrious (+30% speed)</td><td>Iron Stomach (no food poisoning)</td><td>+45% farming output</td><td>⭐⭐⭐⭐</td></tr>
<tr><td>Mining Machine</td><td>Strong Back (+carry)</td><td>Industrious (+30% speed)</td><td>Undergrounder (+mining)</td><td>+40% mining, +50% carry</td><td>⭐⭐⭐⭐</td></tr>
<tr><td>Mad Scientist</td><td>Fast Learner (+XP)</td><td>Night Owl (+20% at night)</td><td>Introvert (+focus alone)</td><td>+45% research speed</td><td>⭐⭐⭐⭐</td></tr>
<tr><td>Trade Baron</td><td>Silver Tongue (+speech)</td><td>Gregarious (+social)</td><td>Optimist (+mood)</td><td>+35% trade prices, +recruitment</td><td>⭐⭐⭐⭐</td></tr>
</tbody>
</table>
</div>

<h2>How Perks Stack</h2>
<p>Perk bonuses are additive, not multiplicative. Industrious (+30% speed) plus Night Owl (+20% at night) gives your settler +50% work speed when working at night — not +56%. Plan perk combinations that provide bonuses to different aspects of a role rather than stacking the same bonus type.</p>

<h2>Bad Perk Combinations to Avoid</h2>
<p>Night Owl + Lazy on the same settler is a disaster — they're already slow and only work well at night when they should be sleeping. Perfectionist + Lazy means they work extremely slowly and waste time on quality. Bloodlust without combat skills makes a settler dangerous to your own colony during mental breaks.</p>

<h2>Rerolling for Perfect Perks</h2>
<p>When a wanderer arrives with good base stats but bad perks, accept them anyway — you can't reroll perks. When recruiting from slave traders, you can see the slave's perks before purchasing. Wait for a merchant who's selling a settler with your desired perk combination. This can take several merchant visits but is worth the patience.</p>

      <section className="mt-12 mb-8">
        <h2>Frequently Asked Questions</h2>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: Can settlers gain new perks over time?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: No, perks are fixed at settler generation and never change. This makes initial settler selection and recruitment decisions permanent. A settler with bad perks will always have those bad perks.</p>
        </div>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: Which single perk is the best in the game?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: Industrious (+30% global work speed) is widely considered the best single perk because it affects everything a settler does. It's useful in every role and has no drawbacks. Fast Learner is a close second for long-term colonies.</p>
        </div>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: How do I know which perks a potential recruit has?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: For wanderers who arrive at your colony, perks are displayed in their character panel before you accept them. For slave traders, hover over the slave in the trade menu to see their full stats including perks. Never buy a slave without checking their traits and perks first.</p>
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
