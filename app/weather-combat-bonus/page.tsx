import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Going Medieval Weather Combat Bonus — Complete Guide (2026)",
  description: "Exploit weather combat bonuses in Going Medieval. Rain, snow, fog, and darkness effects on combat, visibility, movement, and optimal engagement timing.",
};

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Does weather affect raider accuracy too?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, weather effects apply equally to all units on the map. This means heavy rain actually helps you defend against enemy archer raids, while fog helps you against enemy longbowmen by limiting their engagement range."
        }
      },
      {
        "@type": "Question",
        "name": "Can I predict weather to plan combat timing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "There's no in-game weather forecast, but weather patterns follow seasonal trends. Rain is most common in spring and autumn, snow in winter, and clear skies in summer. Plan major offensives for summer when weather is most reliable."
        }
      },
      {
        "@type": "Question",
        "name": "Does roof cover negate weather effects?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Partially. Settlers under a roof are protected from direct rain and snow, but visibility penalties from fog and darkness still apply. Build covered archer platforms to maintain ranged effectiveness during light rain."
        }
      }
    ]
  };

  return (
    <main className="prose prose-invert max-w-none">
      <h1>Going Medieval Weather Combat Bonus — Environmental Tactics Guide</h1>
      <p className="text-lg text-gray-300 leading-relaxed mb-8">
        Exploit weather combat bonuses in Going Medieval. Rain, snow, fog, and darkness effects on combat, visibility, movement, and optimal engagement timing.
      </p>

<h2>Weather Changes Everything</h2>
<p>Going Medieval's weather system isn't just atmospheric — it directly affects combat. Rain reduces ranged accuracy, snow slows movement, fog decreases visibility, and darkness gives stealth bonuses. Smart commanders time their engagements around weather conditions for maximum advantage.</p>

<h2>Weather Combat Effects Table</h2>
<div className="table-wrapper">
<table>
<thead><tr><th>Weather</th><th>Ranged Accuracy</th><th>Movement Speed</th><th>Visibility</th><th>Melee Damage</th><th>Best Strategy</th></tr></thead>
<tbody>
<tr><td>Clear/Sunny</td><td>100% (normal)</td><td>100%</td><td>Full (20 tiles)</td><td>100%</td><td>Balanced engagement</td></tr>
<tr><td>Rain</td><td>-25%</td><td>-10%</td><td>Full</td><td>-5%</td><td>Favor melee combat</td></tr>
<tr><td>Heavy Rain</td><td>-40%</td><td>-15%</td><td>Reduced (14 tiles)</td><td>-5%</td><td>Close quarters only</td></tr>
<tr><td>Snow</td><td>-20%</td><td>-25%</td><td>Full</td><td>-10%</td><td>Defensive, hold position</td></tr>
<tr><td>Fog</td><td>-30%</td><td>100%</td><td>Severe (8 tiles)</td><td>100%</td><td>Ambush tactics</td></tr>
<tr><td>Night/Darkness</td><td>-35%</td><td>100%</td><td>Reduced (10 tiles)</td><td>100%</td><td>Stealth attack</td></tr>
<tr><td>Thunderstorm</td><td>-45%</td><td>-15%</td><td>Severe (8 tiles)</td><td>-5%</td><td>Avoid combat entirely</td></tr>
</tbody>
</table>
</div>

<h2>Weather-Based Engagement Timing</h2>
<p>The best time to launch an offensive is during clear weather at midday when your archers have maximum accuracy and visibility. The worst time is during a thunderstorm — severe ranged penalties make your archers nearly useless. If raiders attack during bad weather, pull your archers back and engage with melee in chokepoints.</p>

<h2>Exploiting Fog and Night for Stealth</h2>
<p>Fog and darkness reduce enemy visibility to 8-10 tiles, which is shorter than longbow range (20 tiles). Use this to set up short-range ambushes: position melee fighters just outside the enemy's visibility range and charge when they get close. Night raids on enemy camps become viable with this tactic.</p>

<h2>Winter Warfare</h2>
<p>Winter snow penalizes movement for both sides, but raiders are affected more severely because they must cross the map to reach you. Use this to your advantage: build your defenses deep in your territory so raiders exhaust themselves trudging through snow, arriving at your walls tired and slowed.</p>

      <section className="mt-12 mb-8">
        <h2>Frequently Asked Questions</h2>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: Does weather affect raider accuracy too?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: Yes, weather effects apply equally to all units on the map. This means heavy rain actually helps you defend against enemy archer raids, while fog helps you against enemy longbowmen by limiting their engagement range.</p>
        </div>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: Can I predict weather to plan combat timing?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: There's no in-game weather forecast, but weather patterns follow seasonal trends. Rain is most common in spring and autumn, snow in winter, and clear skies in summer. Plan major offensives for summer when weather is most reliable.</p>
        </div>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: Does roof cover negate weather effects?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: Partially. Settlers under a roof are protected from direct rain and snow, but visibility penalties from fog and darkness still apply. Build covered archer platforms to maintain ranged effectiveness during light rain.</p>
        </div>

      </section>

      <section className="mt-12 p-6 bg-gray-800/50 rounded-lg border border-gray-700">
        <h2 className="!mt-0">Related Guides</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          <a href="/defense" className="text-blue-400 hover:text-blue-300 hover:underline text-sm">Defense Guide</a>
          <a href="/best-weapons-ranked" className="text-blue-400 hover:text-blue-300 hover:underline text-sm">Best Weapons Ranked</a>
          <a href="/combat-positioning" className="text-blue-400 hover:text-blue-300 hover:underline text-sm">Combat Positioning</a>
          <a href="/best-defense-layout" className="text-blue-400 hover:text-blue-300 hover:underline text-sm">Best Defense Layout</a>
          <a href="/raid-defense-strategy" className="text-blue-400 hover:text-blue-300 hover:underline text-sm">Raid Defense</a>
          <a href="/killbox-design" className="text-blue-400 hover:text-blue-300 hover:underline text-sm">Killbox Design</a>
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
