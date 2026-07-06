import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Going Medieval Weather Impact Guide — Rain, Snow & Storms on Gameplay (2026)",
  description: "Complete Going Medieval weather impact guide — how rain, snow, and storms affect crops, combat, building, and settler mood. Season-specific survival tips and disaster preparation.",
};

const weatherTypes = [
  { type: 'Clear', tempMod: '0°C', duration: 'Most common', effects: 'No gameplay modifiers. Optimal for outdoor work and crop growth.', bestFor: 'Construction, farming, expeditions' },
  { type: 'Light Rain', tempMod: '-2°C', duration: '1-2 days', effects: 'Slightly reduces fire risk. Slightly slows settler movement outdoors. Crops get bonus water.', bestFor: 'Crop irrigation (no manual watering needed)' },
  { type: 'Heavy Rain', tempMod: '-4°C', duration: '1-3 days', effects: 'Significantly slows outdoor work. Fire risk reduced to zero. Lightning may strike tall structures.', bestFor: 'Fire prevention training days' },
  { type: 'Thunderstorm', tempMod: '-5°C', duration: '1 day', effects: 'Lightning can ignite wooden structures. Settlers panic outdoors. Avoid raider attacks during storms.', bestFor: 'Indoor activities, defense prep' },
  { type: 'Light Snow', tempMod: '-8°C', duration: '2-4 days', effects: 'Visibility reduced. Movement speed -10% outdoors. Tracks visible (hunting bonus).', bestFor: 'Tracking animals for hunting' },
  { type: 'Heavy Snow', tempMod: '-15°C', duration: '3-5 days', effects: 'Settlers need winter clothing. Crops freeze if unharvested. Roads become impassable.', bestFor: 'Indoor industry focus' },
  { type: 'Blizzard', tempMod: '-25°C', duration: '1-2 days', effects: 'All outdoor work halted. Raids still occur. Settlers left outdoors take cold damage.', bestFor: 'Stockpiling food and firewood in advance' },
  { type: 'Fog', tempMod: '-1°C', duration: '1 day', effects: 'Visibility reduced to 5 tiles. Raiders harder to spot. Hunters have bonus.', bestFor: 'Defensive advantage vs. raids' },
];

const seasonalImpacts = [
  { season: 'Spring', weather: 'Rain dominant', cropImpact: 'High positive — rain waters crops automatically, prevents drought', combatImpact: 'Neutral', buildingImpact: 'High positive — wet soil easier to dig for foundations', settlerMood: 'Positive — spring festivals give mood bonus' },
  { season: 'Summer', weather: 'Clear, occasional thunderstorms', cropImpact: 'High negative — drought risk, manual watering required', combatImpact: 'Neutral', buildingImpact: 'Neutral — heat slows settler work speed', settlerMood: 'Neutral — heat complaints in southern biomes' },
  { season: 'Autumn', weather: 'Mix of clear and rain', cropImpact: 'High positive — final harvest window', combatImpact: 'Slightly negative — early fog reduces visibility', buildingImpact: 'High positive — preparing for winter', settlerMood: 'Positive — harvest festival' },
  { season: 'Winter', weather: 'Snow and blizzards dominant', cropImpact: 'Critical negative — all outdoor crops die, must rely on stored food', combatImpact: 'High negative — blizzards during raids are devastating', buildingImpact: 'High negative — most construction halted', settlerMood: 'High negative — cold exposure, dark days, indoor crowding' },
];

const weatherPreparation = [
  { event: 'Incoming blizzard', warning: 'Settler reports "heavy snow" forecast 1 day before', prep: 'Stockpile firewood (20+ logs), ensure all settlers have wool/fur clothing, double-check food stores' },
  { event: 'Thunderstorm', warning: 'Forecast 1 day before, often preceded by heavy clouds', prep: 'Move flammable materials indoors, check lightning rods on tall structures' },
  { event: 'Long drought', warning: 'No rain for 5+ days during summer', prep: 'Build emergency water storage tanks, prioritize indoor crops, reduce non-essential water use' },
  { event: 'Heavy rain period', warning: '3+ days of heavy rain forecast', prep: 'Check drainage around buildings, clear debris from gutters, reinforce outdoor storage' },
  { event: 'Fog during raid season', warning: 'Fog + raid proximity = -50% defender accuracy', prep: 'Pre-position archers in known raider paths, light signal fires to mark positions' },
];

const weatherFaqs = [
  { q: 'Can settlers die from cold exposure?', a: 'Yes. Settlers left outdoors in blizzards or heavy snow without proper winter clothing will accumulate cold damage and eventually die. The death is permanent — there is no revival mechanic. Always ensure your settlers have appropriate clothing before winter storms.' },
  { q: 'Do crops die in winter automatically?', a: 'Yes, all outdoor crops die when the temperature drops below 0°C for more than one in-game day. Indoor crops (grown in heated greenhouses) survive winter. Plan your harvest calendar around the first frost date in autumn.' },
  { q: 'How do I protect my colony from lightning strikes?', a: 'Build lightning rods on top of all tall structures (3+ tiles high). Lightning rods are cheap (3 iron + 1 wood) and provide full lightning protection to the structure they are attached to. Without them, wooden structures can catch fire from lightning strikes during thunderstorms.' },
  { q: 'Does weather affect raider attacks?', a: 'Yes. Raiders attack in all weather conditions, but they suffer the same weather penalties as your settlers. A raid during a blizzard will have slower-moving raiders with reduced accuracy, giving your defenses a significant advantage. Plan your defense layouts to exploit this.' },
];

const relatedGuides = [
  { href: '/clothing-insulation-guide', label: 'Clothing Insulation Guide' },
  { href: '/winter-survival', label: 'Winter Survival Guide' },
  { href: '/winter-food-storage', label: 'Winter Food Storage' },
  { href: '/best-crops-for-each-season', label: 'Best Crops Per Season' },
  { href: '/raid-schedule-guide', label: 'Raid Schedule Guide' },
];

export default function WeatherImpactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-extrabold font-heading mb-2 text-parchment-light">
        Weather <span className="text-blue-400">Impact</span> Guide
      </h1>
      <p className="text-parchment-muted mb-8 max-w-3xl">
        Weather in Going Medieval is not cosmetic — it directly affects crop yields, combat accuracy,
        building integrity, and settler mood. This guide covers all 8 weather types, season-specific
        impacts, preparation checklists for major weather events, and answers the most common weather
        questions from new players. The most critical takeaway: winter blizzards can kill un-clothed
        settlers and freeze unharvested crops in a single in-game day.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold font-heading mb-4 text-parchment-light">All 8 Weather Types</h2>
        <p className="text-parchment-muted leading-relaxed mb-3">
          Going Medieval has 8 distinct weather conditions, each with specific temperature modifiers,
          duration ranges, and gameplay effects. Most weather types have a 1-day warning via settler
          reports — listen to these warnings and adjust your colony's priorities accordingly.
          Blizzards are the most dangerous weather event and require the most preparation.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left border border-parchment-border text-sm">
            <thead className="bg-parchment-card">
              <tr>
                <th className="p-3 border border-parchment-border text-blue-400">Weather</th>
                <th className="p-3 border border-parchment-border text-blue-400">Temp Mod</th>
                <th className="p-3 border border-parchment-border text-blue-400">Duration</th>
                <th className="p-3 border border-parchment-border text-blue-400">Effects</th>
                <th className="p-3 border border-parchment-border text-blue-400">Best For</th>
              </tr>
            </thead>
            <tbody>
              {weatherTypes.map((row, i) => (
                <tr key={i} className="even:bg-parchment-card/30">
                  <td className="p-3 border border-parchment-border text-parchment-light font-semibold">{row.type}</td>
                  <td className="p-3 border border-parchment-border text-parchment-muted">{row.tempMod}</td>
                  <td className="p-3 border border-parchment-border text-parchment-muted">{row.duration}</td>
                  <td className="p-3 border border-parchment-border text-parchment-muted">{row.effects}</td>
                  <td className="p-3 border border-parchment-border text-parchment-muted">{row.bestFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold font-heading mb-4 text-parchment-light">Seasonal Weather Patterns</h2>
        <p className="text-parchment-muted leading-relaxed mb-3">
          Each season has a dominant weather pattern that shapes colony priorities. Spring is the
          best season for crop growth and construction. Summer brings drought risk. Autumn is the
          critical harvest window. Winter is the most dangerous season, with blizzards that can
          kill settlers and destroy unprotected crops. Plan your year around the season transitions.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left border border-parchment-border text-sm">
            <thead className="bg-parchment-card">
              <tr>
                <th className="p-3 border border-parchment-border text-blue-400">Season</th>
                <th className="p-3 border border-parchment-border text-blue-400">Weather</th>
                <th className="p-3 border border-parchment-border text-blue-400">Crop Impact</th>
                <th className="p-3 border border-parchment-border text-blue-400">Combat Impact</th>
                <th className="p-3 border border-parchment-border text-blue-400">Building Impact</th>
                <th className="p-3 border border-parchment-border text-blue-400">Settler Mood</th>
              </tr>
            </thead>
            <tbody>
              {seasonalImpacts.map((row, i) => (
                <tr key={i} className="even:bg-parchment-card/30">
                  <td className="p-3 border border-parchment-border text-parchment-light font-semibold">{row.season}</td>
                  <td className="p-3 border border-parchment-border text-parchment-muted">{row.weather}</td>
                  <td className="p-3 border border-parchment-border text-parchment-muted">{row.cropImpact}</td>
                  <td className="p-3 border border-parchment-border text-parchment-muted">{row.combatImpact}</td>
                  <td className="p-3 border border-parchment-border text-parchment-muted">{row.buildingImpact}</td>
                  <td className="p-3 border border-parchment-border text-parchment-muted">{row.settlerMood}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold font-heading mb-4 text-parchment-light">Weather Preparation Checklists</h2>
        <p className="text-parchment-muted leading-relaxed mb-3">
          Major weather events give you 1 day of warning via settler reports. Use that day to
          complete the preparation checklists below. Failing to prepare for blizzards is the most
          common cause of colony-wide settler death events. Failing to prepare for thunderstorms
          is the most common cause of structure fires.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left border border-parchment-border text-sm">
            <thead className="bg-parchment-card">
              <tr>
                <th className="p-3 border border-parchment-border text-blue-400">Event</th>
                <th className="p-3 border border-parchment-border text-blue-400">Warning</th>
                <th className="p-3 border border-parchment-border text-blue-400">Preparation</th>
              </tr>
            </thead>
            <tbody>
              {weatherPreparation.map((row, i) => (
                <tr key={i} className="even:bg-parchment-card/30">
                  <td className="p-3 border border-parchment-border text-parchment-light font-semibold">{row.event}</td>
                  <td className="p-3 border border-parchment-border text-parchment-muted">{row.warning}</td>
                  <td className="p-3 border border-parchment-border text-parchment-muted">{row.prep}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold font-heading mb-6 text-parchment-light">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {weatherFaqs.map((faq, i) => (
            <div key={i} className="bg-parchment-card/50 border border-parchment-border rounded-lg p-5">
              <h3 className="font-heading text-lg text-blue-400 mb-2">{faq.q}</h3>
              <p className="text-parchment-muted text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold font-heading mb-4 text-parchment-light">Related Guides</h2>
        <ul className="space-y-2">
          {relatedGuides.map((r, i) => (
            <li key={i}>
              <a href={r.href} className="text-blue-400 hover:text-blue-300 underline underline-offset-2">
                {r.label}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <p className="text-xs text-parchment-muted mt-12 border-t border-parchment-border pt-4">
        Last updated: July 6, 2026
      </p>
    </div>
  );
}
