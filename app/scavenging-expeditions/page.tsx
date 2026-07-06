import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Going Medieval Scavenging Expeditions Guide — Loot, Risk & Best Routes (2026)",
  description: "Complete Going Medieval scavenging expeditions guide — how to send settlers on scavenging runs, best destinations, risk vs reward, loot tables, and tips for maximizing returns.",
};

const expeditionTypes = [
  { type: 'Forest Run', duration: '1 in-game day', risk: 'Low', lootTier: 'Common-Uncommon', bestFind: 'Wood, berries, herbs, occasional animal pelts', recommendedPawns: '2-3 settlers, low combat skill acceptable', notes: 'Safest expedition type. Use for new settlers to gain scavenging XP without risk.' },
  { type: 'Old Battlefield', duration: '2 in-game days', risk: 'Medium', lootTier: 'Uncommon-Rare', bestFind: 'Steel weapons, armor pieces, gold coins, old provisions', recommendedPawns: '3-4 settlers with combat training', notes: 'Best source of pre-cataclysm gear. Risk of hostile survivors returning.' },
  { type: 'Ruined Village', duration: '3 in-game days', risk: 'Medium-High', lootTier: 'Rare', bestFind: 'Building materials, furniture, books (skill boosts), rare tools', recommendedPawns: '4-5 settlers, mix of combat and intellect', notes: 'Long expeditions with high return. Books from ruined villages grant +5% XP to specific skills.' },
  { type: 'Bandit Camp', duration: '2 in-game days', risk: 'High', lootTier: 'Rare-Epic', bestFind: 'Bandit weapons, stolen merchant goods, gold, occasionally legendary items', recommendedPawns: '4-5 well-armed settlers with combat training', notes: 'High risk expeditions that often trigger combat events. Pack healing items.' },
  { type: 'Cave System', duration: '4 in-game days', risk: 'High', lootTier: 'Rare-Epic', bestFind: 'Iron ore, gems, ancient relics, occasional cave paintings (lore)', recommendedPawns: '5+ settlers with high combat and mining skills', notes: 'Longest expedition but highest rare drop chance. Some caves have unique boss-tier loot.' },
  { type: 'Abandoned Keep', duration: '5 in-game days', risk: 'Very High', lootTier: 'Epic-Legendary', bestFind: 'Legendary weapons, enchanted armor, large gold caches, royal artifacts', recommendedPawns: '6+ max-level combat settlers, full supplies', notes: 'Endgame expedition. Has multiple combat waves and a final boss. Bring 20+ healing items.' },
];

const lootQualityTiers = [
  { tier: 'Common', value: '1-10 gold', dropRate: '60%', examples: 'Wood, basic food, simple tools, low-quality cloth' },
  { tier: 'Uncommon', value: '10-50 gold', dropRate: '25%', examples: 'Iron weapons, leather armor, herbal medicine, books' },
  { tier: 'Rare', value: '50-200 gold', dropRate: '10%', examples: 'Steel weapons, fine armor, gold jewelry, advanced books' },
  { tier: 'Epic', value: '200-1000 gold', dropRate: '4%', examples: 'Superior weapons, enchanted gear, large gold caches, rare crafting materials' },
  { tier: 'Legendary', value: '1000+ gold', dropRate: '1%', examples: 'Named weapons, royal artifacts, fully enchanted armor sets, skill tomes' },
];

const riskFactors = [
  { factor: 'Settler combat skill', impact: 'High', description: 'Combat skill below 5 makes hostile encounters deadly. Each point of combat skill reduces enemy accuracy by ~3%.' },
  { factor: 'Expedition duration', impact: 'Medium', description: 'Longer expeditions mean settlers are away from the colony longer, reducing work capacity. Plan around season changes.' },
  { factor: 'Weather conditions', impact: 'Medium', description: 'Winter expeditions have 50% increased risk of weather damage (hypothermia). Summer has heat-related risks in southern biomes.' },
  { factor: 'Settler health', impact: 'High', description: 'Wounded or sick settlers cannot go on expeditions. Sending injured pawns increases death risk by 80%.' },
  { factor: 'Equipment quality', impact: 'High', description: 'Better weapons and armor reduce casualty rate. Always equip expedition settlers with at least leather armor and steel weapons.' },
  { factor: 'Group size', impact: 'Medium', description: 'Larger groups are safer but consume more supplies. Optimal is 3-5 settlers for most expeditions.' },
];

const expeditionFaqs = [
  { q: 'What is the optimal expedition group size for early game?', a: 'For early game, send 2-3 settlers on Forest Runs. This keeps risk low while generating steady income. As your colony grows, increase to 4-5 settlers for medium-risk expeditions. The legendary-tier Abandoned Keep expeditions require 6+ max-level settlers and should not be attempted before year 2.' },
  { q: 'Can settlers die on expeditions?', a: 'Yes. Settler death is permanent in Going Medieval. There is no revival mechanic. A settler who dies on an expedition is lost forever, and any equipped weapons and armor they carried are lost with them. This is why equipping expeditions with backup gear is recommended.' },
  { q: 'How do I unlock the Abandoned Keep expedition?', a: 'The Abandoned Keep is unlocked after completing the "Royal Secrets" research in the library. This research takes approximately 12 in-game days and requires your colony to have 500+ research points. Most colonies unlock it in year 2-3.' },
  { q: 'What is the most profitable expedition for mid-game colonies?', a: 'The Old Battlefield is the most cost-effective mid-game expedition. Each run returns an average of 200-400 gold worth of loot, plus steel weapons that can be equipped or sold. Risk is manageable with 3-4 combat-trained settlers.' },
];

const bestRoutes = [
  { route: 'The Western Circuit', destinations: 'Forest Run → Old Battlefield → Ruined Village', duration: '6 days total', profit: '~500-800 gold per circuit', notes: 'Best risk-adjusted profit. Chain expeditions efficiently.' },
  { route: 'The Northern Push', destinations: 'Cave System → Bandit Camp', duration: '6 days total', profit: '~800-1500 gold per circuit', notes: 'High profit but requires strong combat settlers. Bring 10+ healing items.' },
  { route: 'The Southern Sweep', destinations: 'Ruined Village → Forest Run → Forest Run', duration: '7 days total', profit: '~600-900 gold per circuit', notes: 'Balanced route for colonies with mixed settler skills.' },
  { route: 'The Endgame Haul', destinations: 'Abandoned Keep → Old Battlefield', duration: '7 days total', profit: '~2000-5000 gold per circuit', notes: 'Endgame only. Requires 6+ max-level settlers. Average circuit is the most profitable in the game.' },
];

export default function ScavengingExpeditionsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-extrabold font-heading mb-2 text-parchment-light">
        Scavenging <span className="text-amber-400">Expeditions</span> Guide
      </h1>
      <p className="text-parchment-muted mb-8 max-w-3xl">
        Scavenging expeditions are the most reliable income source for established Going Medieval
        colonies. By sending groups of settlers out into the wilderness, you can recover pre-cataclysm
        loot, gather rare resources, and level up your colonists' skills. This guide covers all 6
        expedition types, loot quality tiers, risk factors, and the most profitable route chains for
        both early-game and endgame colonies.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold font-heading mb-4 text-parchment-light">All 6 Expedition Types</h2>
        <p className="text-parchment-muted leading-relaxed mb-3">
          Each expedition type has distinct risk profiles, loot pools, and optimal settler compositions.
          Early colonies should focus on Forest Runs to gain scavenging XP safely. Mid-game colonies
          unlock Old Battlefields and Ruined Villages for higher returns. Endgame colonies can attempt
          the legendary Abandoned Keep for the highest profit in the game.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left border border-parchment-border text-sm">
            <thead className="bg-parchment-card">
              <tr>
                <th className="p-3 border border-parchment-border text-amber-400">Type</th>
                <th className="p-3 border border-parchment-border text-amber-400">Duration</th>
                <th className="p-3 border border-parchment-border text-amber-400">Risk</th>
                <th className="p-3 border border-parchment-border text-amber-400">Loot Tier</th>
                <th className="p-3 border border-parchment-border text-amber-400">Best Find</th>
                <th className="p-3 border border-parchment-border text-amber-400">Recommended Pawns</th>
                <th className="p-3 border border-parchment-border text-amber-400">Notes</th>
              </tr>
            </thead>
            <tbody>
              {expeditionTypes.map((row, i) => (
                <tr key={i} className="even:bg-parchment-card/30">
                  <td className="p-3 border border-parchment-border text-parchment-light font-semibold">{row.type}</td>
                  <td className="p-3 border border-parchment-border text-parchment-muted">{row.duration}</td>
                  <td className="p-3 border border-parchment-border text-parchment-muted">{row.risk}</td>
                  <td className="p-3 border border-parchment-border text-parchment-muted">{row.lootTier}</td>
                  <td className="p-3 border border-parchment-border text-parchment-muted">{row.bestFind}</td>
                  <td className="p-3 border border-parchment-border text-parchment-muted">{row.recommendedPawns}</td>
                  <td className="p-3 border border-parchment-border text-parchment-muted">{row.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold font-heading mb-4 text-parchment-light">Loot Quality Tiers</h2>
        <p className="text-parchment-muted leading-relaxed mb-3">
          Loot drops are rolled against five quality tiers. Common loot is the bread and butter of
          early expeditions. Legendary drops are exceedingly rare and represent the pinnacle of
          pre-cataclysm gear. Most expeditions return a mix of common, uncommon, and rare drops with
          occasional epic finds. Legendary drops typically come from Abandoned Keep or very lucky
          Old Battlefield runs.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left border border-parchment-border text-sm">
            <thead className="bg-parchment-card">
              <tr>
                <th className="p-3 border border-parchment-border text-amber-400">Quality Tier</th>
                <th className="p-3 border border-parchment-border text-amber-400">Value Range</th>
                <th className="p-3 border border-parchment-border text-amber-400">Drop Rate</th>
                <th className="p-3 border border-parchment-border text-amber-400">Examples</th>
              </tr>
            </thead>
            <tbody>
              {lootQualityTiers.map((row, i) => (
                <tr key={i} className="even:bg-parchment-card/30">
                  <td className="p-3 border border-parchment-border text-parchment-light font-semibold">{row.tier}</td>
                  <td className="p-3 border border-parchment-border text-parchment-muted">{row.value}</td>
                  <td className="p-3 border border-parchment-border text-parchment-muted">{row.dropRate}</td>
                  <td className="p-3 border border-parchment-border text-parchment-muted">{row.examples}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold font-heading mb-4 text-parchment-light">Risk Factors & Mitigation</h2>
        <p className="text-parchment-muted leading-relaxed mb-3">
          Expedition risk is determined by six factors. The most important is settler combat skill —
          sending low-skill settlers into hostile territory is the most common cause of expedition
          failures. Equipment quality is the second most important factor. A well-equipped settler
          with steel weapons and leather armor can survive encounters that would kill an unequipped
          settler of the same skill level.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left border border-parchment-border text-sm">
            <thead className="bg-parchment-card">
              <tr>
                <th className="p-3 border border-parchment-border text-amber-400">Risk Factor</th>
                <th className="p-3 border border-parchment-border text-amber-400">Impact</th>
                <th className="p-3 border border-parchment-border text-amber-400">Description</th>
              </tr>
            </thead>
            <tbody>
              {riskFactors.map((row, i) => (
                <tr key={i} className="even:bg-parchment-card/30">
                  <td className="p-3 border border-parchment-border text-parchment-light font-semibold">{row.factor}</td>
                  <td className="p-3 border border-parchment-border text-parchment-muted">{row.impact}</td>
                  <td className="p-3 border border-parchment-border text-parchment-muted">{row.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold font-heading mb-4 text-parchment-light">Best Expedition Routes by Colony Stage</h2>
        <p className="text-parchment-muted leading-relaxed mb-3">
          Chaining expeditions together into "circuits" maximizes profit per in-game day. The
          optimal circuit depends on your colony's settler skills, available equipment, and risk
          tolerance. The four routes below cover the most common scenarios. The Endgame Haul route
          is the single most profitable expedition chain in the game but requires a fully developed
          colony with max-level combat settlers.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left border border-parchment-border text-sm">
            <thead className="bg-parchment-card">
              <tr>
                <th className="p-3 border border-parchment-border text-amber-400">Route</th>
                <th className="p-3 border border-parchment-border text-amber-400">Destinations</th>
                <th className="p-3 border border-parchment-border text-amber-400">Duration</th>
                <th className="p-3 border border-parchment-border text-amber-400">Profit</th>
                <th className="p-3 border border-parchment-border text-amber-400">Notes</th>
              </tr>
            </thead>
            <tbody>
              {bestRoutes.map((row, i) => (
                <tr key={i} className="even:bg-parchment-card/30">
                  <td className="p-3 border border-parchment-border text-parchment-light font-semibold">{row.route}</td>
                  <td className="p-3 border border-parchment-border text-parchment-muted">{row.destinations}</td>
                  <td className="p-3 border border-parchment-border text-parchment-muted">{row.duration}</td>
                  <td className="p-3 border border-parchment-border text-parchment-muted">{row.profit}</td>
                  <td className="p-3 border border-parchment-border text-parchment-muted">{row.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold font-heading mb-6 text-parchment-light">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {expeditionFaqs.map((faq, i) => (
            <div key={i} className="bg-parchment-card/50 border border-parchment-border rounded-lg p-5">
              <h3 className="font-heading text-lg text-amber-400 mb-2">{faq.q}</h3>
              <p className="text-parchment-muted text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <p className="text-xs text-parchment-muted mt-12 border-t border-parchment-border pt-4">
        Last updated: July 6, 2026
      </p>
    </div>
  );
}
