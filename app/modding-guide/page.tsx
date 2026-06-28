import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Going Medieval Modding Guide — Best Mods Complete List (2026)",
  description: "Complete Going Medieval modding guide. Best mods for quality of life, gameplay, visuals, and performance. Installation instructions and mod compatibility tips.",
};

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do mods disable Steam achievements?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, Going Medieval does not disable achievements when mods are active, unlike many other games. You can earn all achievements while running mods — one of the community's favorite features of the game."
        }
      },
      {
        "@type": "Question",
        "name": "Will mods break when the game updates?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, major game updates can break mods. After a patch, check the mod's Steam Workshop page for updates. Most active mod authors update within a few days. If a mod hasn't been updated in 6+ months, it's likely abandoned and may not work with the current game version."
        }
      },
      {
        "@type": "Question",
        "name": "What's the one mod every player should install?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Numbers Trait is universally recommended. It replaces vague stat bars with exact numeric values, letting you see precisely how much food you have, exactly how injured a settler is, and the exact mood value. The base game's non-numeric display hides critical information."
        }
      }
    ]
  };

  return (
    <main className="prose prose-invert max-w-none">
      <h1>Going Medieval Modding Guide — Best Mods & Installation</h1>
      <p className="text-lg text-gray-300 leading-relaxed mb-8">
        Complete Going Medieval modding guide. Best mods for quality of life, gameplay, visuals, and performance. Installation instructions and mod compatibility tips.
      </p>

<h2>Enhance Your Medieval Experience</h2>
<p>Going Medieval has an active modding community that creates quality-of-life improvements, visual enhancements, and gameplay expansions. This guide covers the most impactful mods that enhance the game without breaking balance or causing performance issues.</p>

<h2>Essential Mods by Category</h2>
<div className="table-wrapper">
<table>
<thead><tr><th>Category</th><th>Top Mod</th><th>What It Does</th><th>Must-Have?</th></tr></thead>
<tbody>
<tr><td>UI/QoL</td><td>Better Work Priorities</td><td>Enhanced priority system with sub-priorities</td><td>Yes</td></tr>
<tr><td>UI/QoL</td><td>Numbers Trait</td><td>Shows exact stat numbers instead of bars</td><td>Yes</td></tr>
<tr><td>Building</td><td>More Floors</td><td>Additional floor types and patterns</td><td>Recommended</td></tr>
<tr><td>Combat</td><td>Smart Medicine</td><td>Auto-assign best medicine to worst wounds</td><td>Recommended</td></tr>
<tr><td>Visual</td><td>HD Texture Pack</td><td>Higher resolution textures</td><td>Optional</td></tr>
<tr><td>Gameplay</td><td>More Events</td><td>Additional random events and scenarios</td><td>Optional</td></tr>
<tr><td>Performance</td><td>RocketMan</td><td>Performance optimization for large colonies</td><td>Large colonies only</td></tr>
<tr><td>Storage</td><td>Stack Size Changer</td><td>Adjustable stack limits</td><td>Optional</td></tr>
</tbody>
</table>
</div>

<h2>Mod Installation Guide</h2>
<p>Most Going Medieval mods are installed through the Steam Workshop. Subscribe to the mod on Steam, enable it in the game's Mods menu, and restart. Load order matters — place core framework mods first, then content mods, then visual mods. Check each mod's description for specific load order requirements.</p>

<h2>Mod Compatibility Tips</h2>
<p>Not all mods work together. Mods that modify the same game system (e.g., two different work priority mods) will conflict. Always read the mod description for known incompatibilities. When adding multiple mods, enable them one at a time and test each one before adding the next — this makes it easy to identify which mod causes problems.</p>

      <section className="mt-12 mb-8">
        <h2>Frequently Asked Questions</h2>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: Do mods disable Steam achievements?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: No, Going Medieval does not disable achievements when mods are active, unlike many other games. You can earn all achievements while running mods — one of the community's favorite features of the game.</p>
        </div>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: Will mods break when the game updates?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: Yes, major game updates can break mods. After a patch, check the mod's Steam Workshop page for updates. Most active mod authors update within a few days. If a mod hasn't been updated in 6+ months, it's likely abandoned and may not work with the current game version.</p>
        </div>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: What's the one mod every player should install?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: Numbers Trait is universally recommended. It replaces vague stat bars with exact numeric values, letting you see precisely how much food you have, exactly how injured a settler is, and the exact mood value. The base game's non-numeric display hides critical information.</p>
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
