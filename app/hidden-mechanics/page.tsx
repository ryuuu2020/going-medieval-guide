import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Going Medieval Hidden Mechanics — Complete Guide (2026)",
  description: "Discover Going Medieval hidden mechanics the game never explains. Temperature conductivity, light levels, work speed modifiers, and undocumented features.",
};

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is there a hidden difficulty scaling mechanic?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, raid difficulty scales with your colony's total wealth value, not the number of settlers. Hoarding unnecessary items makes raids harder. Keep only what you need and trade away excess to maintain manageable raid difficulty while building wealth that matters (weapons, armor, food)."
        }
      },
      {
        "@type": "Question",
        "name": "Do room sizes affect anything beyond the displayed stats?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Very large rooms (over 100 tiles) have diminishing returns on beauty and impressiveness bonuses because the required decoration count scales with room size. A compact 4x4 bedroom with one high-quality statue is more impressive than a 10x10 room with the same statue."
        }
      },
      {
        "@type": "Question",
        "name": "What's the most overlooked mechanic new players miss?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Schedule system. Most new players leave settlers on 'Anything' 24/7. Setting dedicated sleep time (8 hours), recreation time (2 hours), and work time (14 hours) dramatically improves mood and productivity. Well-rested and entertained settlers work faster and rarely have mental breaks."
        }
      }
    ]
  };

  return (
    <main className="prose prose-invert max-w-none">
      <h1>Going Medieval Hidden Mechanics — What the Game Doesn't Tell You</h1>
      <p className="text-lg text-gray-300 leading-relaxed mb-8">
        Discover Going Medieval hidden mechanics the game never explains. Temperature conductivity, light levels, work speed modifiers, and undocumented features.
      </p>

<h2>Beyond the Tutorial</h2>
<p>Going Medieval's tutorial covers the basics, but many critical mechanics are never explained. Veteran players have discovered these through testing and community collaboration. Mastering these hidden mechanics can double your colony's efficiency.</p>

<h2>Undocumented Mechanics Table</h2>
<div className="table-wrapper">
<table>
<thead><tr><th>Hidden Mechanic</th><th>Effect</th><th>How to Discover</th><th>Impact on Gameplay</th></tr></thead>
<tbody>
<tr><td>Temperature Conductivity</td><td>Materials conduct heat differently — stone rooms stay cooler, wood rooms warmer</td><td>Observe temperature tooltip differences</td><td>Critical for food storage design</td></tr>
<tr><td>Light Level Modifier</td><td>Work speed reduced by 20% in darkness, +10% near torches</td><td>Watch work speed change at night</td><td>Always light workstations</td></tr>
<tr><td>Beauty Stacking</td><td>Room beauty bonuses stack up to +10, but only the highest item counts per tile</td><td>Check room stats with different decorations</td><td>One high-quality decoration per room</td></tr>
<tr><td>Floor Material Speed</td><td>Settlers walk 10% faster on paved floors vs dirt</td><td>Time settler movements</td><td>Pave high-traffic corridors</td></tr>
<tr><td>Proximity Breeding</td><td>Animals breed faster when kept in pens of 3+ of the same species</td><td>Monitor birth rates in different pen sizes</td><td>Keep minimum 3 of each livestock</td></tr>
<tr><td>Stack Limit Overflow</td><td>Stockpile stacks can exceed the displayed limit when settlers deliver extra items</td><td>Check actual vs displayed counts</td><td>Minor but consistent resource gain</td></tr>
<tr><td>Starvation Priority</td><td>Starving settlers will eat raw food even if cooking is available, bypassing job priorities</td><td>Observe during food shortages</td><td>Keep cooked meals stocked or risk food poisoning</td></tr>
</tbody>
</table>
</div>

<h2>Temperature Conductivity Deep Dive</h2>
<p>Stone walls and floors naturally conduct cold from underground, making stone rooms 3-5°C cooler than wood rooms in summer. This is why underground food storage works so well — the surrounding stone acts as natural refrigeration. Wood walls insulate better, keeping rooms warmer in winter.</p>

<h2>Light Level Productivity</h2>
<p>Settlers working in darkness (night, unlit interiors) suffer a 20% work speed penalty. Torches, braziers, and candles eliminate this penalty. Place light sources every 4-5 tiles in work areas. Natural sunlight through windows also counts — position workstations near windows when possible.</p>

      <section className="mt-12 mb-8">
        <h2>Frequently Asked Questions</h2>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: Is there a hidden difficulty scaling mechanic?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: Yes, raid difficulty scales with your colony's total wealth value, not the number of settlers. Hoarding unnecessary items makes raids harder. Keep only what you need and trade away excess to maintain manageable raid difficulty while building wealth that matters (weapons, armor, food).</p>
        </div>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: Do room sizes affect anything beyond the displayed stats?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: Very large rooms (over 100 tiles) have diminishing returns on beauty and impressiveness bonuses because the required decoration count scales with room size. A compact 4x4 bedroom with one high-quality statue is more impressive than a 10x10 room with the same statue.</p>
        </div>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: What's the most overlooked mechanic new players miss?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: The Schedule system. Most new players leave settlers on 'Anything' 24/7. Setting dedicated sleep time (8 hours), recreation time (2 hours), and work time (14 hours) dramatically improves mood and productivity. Well-rested and entertained settlers work faster and rarely have mental breaks.</p>
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
