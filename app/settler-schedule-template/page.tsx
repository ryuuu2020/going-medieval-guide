import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Going Medieval Settler Schedule Template — Optimal Daily Routines by Role | Going Medieval Guide",
  description: "Complete Going Medieval settler schedule guide. Optimal daily routines for crafters, farmers, haulers, soldiers, builders, and researchers — maximize productivity with role-based scheduling.",
};

const ROLE_SCHEDULES = [
  {
    role: "Farmer / Grower",
    scheduleName: "Sun Cycle",
    slots: [
      { time: "4h - 8h", activity: "Work (Harvest & Sow)", notes: "Early morning is the best time for harvesting — crops are fully grown from overnight ticks and temperatures are mild." },
      { time: "8h - 12h", activity: "Work (Farm Maintenance)", notes: "Tilling, fertilizing, and replanting. Bulk of farm labor happens in this block while settler energy is high." },
      { time: "12h - 14h", activity: "Anything (Flex)", notes: "Flex time. If harvest is done, this becomes free time. If behind on planting, continue working. Adapt to season." },
      { time: "14h - 18h", activity: "Recreation", notes: "Long recreation block during the hottest part of the day. Prevents heatstroke during summer months." },
      { time: "18h - 22h", activity: "Work (Light Farm Tasks)", notes: "Evening is for low-priority tasks: hauling harvested crops to storage, checking crop health, minor replanting." },
      { time: "22h - 4h", activity: "Sleep", notes: "Six-hour sleep block. Farmers work physically — they need the full rest cycle." },
    ],
    keyPrinciple: "Align work with the crop growth cycle. Harvest at dawn when crops mature. Avoid heavy labor during peak heat in summer.",
  },
  {
    role: "Crafter / Artisan",
    scheduleName: "Indoor Efficiency",
    slots: [
      { time: "4h - 10h", activity: "Sleep", notes: "Crafters can sleep later than farmers. Their work is not tied to daylight or crop cycles." },
      { time: "10h - 14h", activity: "Work (Crafting)", notes: "Prime crafting block. Workshop is warm by midday. Settler energy is at maximum after sleep." },
      { time: "14h - 16h", activity: "Recreation", notes: "Two-hour recreation break at midday. Short enough to stay productive but long enough to maintain mood." },
      { time: "16h - 20h", activity: "Work (Crafting)", notes: "Second crafting block. Focus on lower-priority orders or bulk production that does not require constant attention." },
      { time: "20h - 22h", activity: "Anything (Flex)", notes: "Flex time. Crafters can haul raw materials to their workshop, eat, or socialize based on current needs." },
      { time: "22h - 4h", activity: "Work (Night Crafting)", notes: "Advanced crafters can work through the night on complex recipes. Keep a brazier lit in the workshop for light." },
    ],
    keyPrinciple: "Two focused work blocks with a midday break. Night crafting is optional and should only be used when production demands exceed daytime capacity.",
  },
  {
    role: "Hauler / General Labor",
    scheduleName: "Always Moving",
    slots: [
      { time: "0h - 6h", activity: "Sleep", notes: "Midnight sleep block. Haulers do not need to align with sun cycles — they work when there are items to move." },
      { time: "6h - 10h", activity: "Work (Priority Hauling)", notes: "Morning haul: move freshly harvested crops from fields to storage, deliver raw materials to workshops." },
      { time: "10h - 12h", activity: "Recreation", notes: "Short recreation after the morning haul rush. Haulers burn energy fast — keep recreation frequent." },
      { time: "12h - 16h", activity: "Work (General Hauling)", notes: "Midday haul: move crafted items from workshops to stockpiles, deliver building materials to construction sites." },
      { time: "16h - 18h", activity: "Anything (Flex)", notes: "Flex time. If hauling queue is empty, haulers can eat, socialize, or assist with low-skill tasks." },
      { time: "18h - 24h", activity: "Work (Cleanup Hauling)", notes: "Evening haul: clear battlefields after raids, move trade goods, redistribute items between stockpiles." },
    ],
    keyPrinciple: "Short, frequent recreation breaks are essential. Hauling is the most physically demanding job — exhausted haulers move slowly and eat more food.",
  },
  {
    role: "Soldier / Guard",
    scheduleName: "Always Ready",
    slots: [
      { time: "0h - 6h", activity: "Sleep", notes: "Night sleep. Guards should be well-rested to fight effectively. Sleep deprivation penalties apply to combat stats." },
      { time: "6h - 8h", activity: "Work (Equipment Check)", notes: "Morning routine: repair damaged armor, sharpen weapons, craft arrows. Soldiers should maintain their own gear." },
      { time: "8h - 12h", activity: "Work (Training)", notes: "Training block: practice at archery targets or melee dummies. Consistent training builds skill even during peaceful periods." },
      { time: "12h - 14h", activity: "Recreation", notes: "Midday recreation. Soldiers with low mood suffer combat penalties — keep them happy." },
      { time: "14h - 18h", activity: "Work (Light Labor)", notes: "Afternoon labor: soldiers can haul, build, or craft when not needed for combat. Keeps them productive during peace." },
      { time: "18h - 24h", activity: "Anything (Standby)", notes: "Evening standby. Most raids arrive during daylight but having at least one guard alert at night is insurance." },
    ],
    keyPrinciple: "Soldiers should be productive settlers first, fighters second. The schedule must accommodate both roles — training in the morning, labor in the afternoon.",
  },
  {
    role: "Builder / Miner",
    scheduleName: "Dawn to Dusk",
    slots: [
      { time: "4h - 10h", activity: "Work (Mining & Building)", notes: "Dawn start. Miners should reach the mining site before the sun is fully up to maximize working hours underground." },
      { time: "10h - 12h", activity: "Recreation", notes: "Late morning break. Mining and building are heavy labor — two hours of rest prevents exhaustion." },
      { time: "12h - 16h", activity: "Work (Construction)", notes: "Afternoon construction block. Above-ground building benefits from daylight. Underground mining can continue regardless." },
      { time: "16h - 18h", activity: "Anything (Flex)", notes: "Flex time. Use for hauling construction materials or scouting new building sites." },
      { time: "18h - 22h", activity: "Recreation + Social", notes: "Long evening recreation. Builders and miners work the hardest jobs — generous recreation prevents mental breaks." },
      { time: "22h - 4h", activity: "Sleep", notes: "Six-hour sleep. Physical laborers need full rest cycles to maintain work speed the next day." },
    ],
    keyPrinciple: "Maximize daylight hours for outdoor construction. Underground miners are not constrained by the sun — they can work any time of day.",
  },
  {
    role: "Researcher / Scholar",
    scheduleName: "Night Owl",
    slots: [
      { time: "6h - 12h", activity: "Sleep", notes: "Late sleep schedule. Researchers can work at night since research stations rely on candlelight or braziers, not the sun." },
      { time: "12h - 16h", activity: "Work (Research)", notes: "Afternoon research block. The research station is usually warm by this time. Settler is fresh from sleep." },
      { time: "16h - 18h", activity: "Recreation", notes: "Short recreation. Researchers do light work — they need less recovery time than physical laborers." },
      { time: "18h - 24h", activity: "Work (Research)", notes: "Evening and night research. A researcher working through the night generates research progress while other settlers sleep." },
      { time: "0h - 2h", activity: "Anything (Flex)", notes: "Late-night flex time. Can eat, socialize with night-owl settlers, or continue research if close to a breakthrough." },
      { time: "2h - 6h", activity: "Recreation", notes: "Pre-sleep recreation. Winding down before a late-morning sleep ensures the researcher starts the next cycle with full mood." },
    ],
    keyPrinciple: "Stagger the researcher's schedule to be offset from the rest of the colony. This ensures someone is always at the research station pushing progress.",
  },
];

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2 text-ink">Going Medieval Settler Schedule Template</h1>
      <p className="text-ink-light mb-8">Last updated: July 2026</p>

      <div className="prose prose-invert max-w-none">
        <p className="text-lg text-ink-light mb-6">
          The schedule panel is one of Going Medieval&apos;s most powerful but underused tools. Most players set a single schedule for all settlers and never touch it again. But different roles have fundamentally different needs — a farmer should be awake at dawn to harvest, while a researcher gains nothing from daylight and can work through the night. This guide provides optimized schedule templates for every major settler role.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">How the Schedule System Works</h2>
        <p className="text-ink-light">
          Each settler has a 24-hour schedule divided into hour-long blocks. You can assign each block to one of four modes: <strong className="text-accent">Work</strong> (settler prioritizes assigned jobs), <strong className="text-accent">Recreation</strong> (settler pursues joy activities and socializes), <strong className="text-accent">Sleep</strong> (settler rests in an assigned bed), or <strong className="text-accent">Anything</strong> (settler chooses freely between work, recreation, and eating based on current needs).
        </p>
        <p className="text-ink-light mt-3">
          The Anything block is the secret weapon of efficient scheduling. It lets settlers self-regulate — a hungry settler will eat, a tired settler will nap, and a bored settler will recreate. Use Anything blocks as buffers between structured blocks to prevent settlers from hitting critical needs mid-shift.
        </p>
        <p className="text-ink-light mt-3">
          A settler who is exhausted, starving, or miserable during a Work block will still attempt to work — but at severely reduced efficiency. A settler with zero rest works at roughly 40 percent speed. The goal of role-based scheduling is to prevent needs from ever reaching critical levels during work periods.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">Role-Based Schedule Templates</h2>

        {ROLE_SCHEDULES.map((r, i) => (
          <div key={i} className="mt-8">
            <h3 className="text-xl font-semibold text-accent mb-3">{r.role} — &ldquo;{r.scheduleName}&rdquo;</h3>
            <p className="text-ink-light mb-3 italic">{r.keyPrinciple}</p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border border-gray-700 text-sm">
                <thead className="bg-gray-800">
                  <tr>
                    <th className="p-3 border border-gray-700 text-ink w-32">Time Block</th>
                    <th className="p-3 border border-gray-700 text-ink w-32">Activity</th>
                    <th className="p-3 border border-gray-700 text-ink">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {r.slots.map((s, j) => (
                    <tr key={j} className="hover:bg-gray-800/50">
                      <td className="p-3 border border-gray-700 font-mono text-xs text-accent">{s.time}</td>
                      <td className="p-3 border border-gray-700 font-semibold text-ink text-sm">{s.activity}</td>
                      <td className="p-3 border border-gray-700 text-ink-light text-xs">{s.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">Seasonal Schedule Adjustments</h2>
        <p className="text-ink-light">
          The above templates assume temperate conditions. Seasons require adjustments:
        </p>
        <ul className="list-disc pl-6 mt-3 space-y-2 text-ink-light">
          <li><strong className="text-accent">Summer:</strong> Add extra Recreation blocks during the hottest hours (12h–16h). Settlers working outdoors in summer heat gain the Heatstroke debuff quickly. Move outdoor work to early morning (4h–8h) and evening (18h–22h).</li>
          <li><strong className="text-accent">Winter:</strong> Shorten outdoor work blocks and extend indoor work. Farmers should switch to indoor crafting or hauling — there is nothing to harvest. All settlers need 7–8 hours of sleep in winter versus 6 in summer due to cold stress.</li>
          <li><strong className="text-accent">Spring / Autumn:</strong> The template schedules above are designed for these seasons. Spring is planting season — farmers need extended Work blocks. Autumn is harvest season — add extra Work blocks for farmers and haulers during the 4h–8h window.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">FAQ</h2>
        <div className="space-y-4">
          <div className="border border-gray-700 p-4 bg-gray-800/30">
            <h3 className="font-semibold text-accent">Should I stagger sleep schedules across the colony?</h3>
            <p className="text-ink-light mt-2">Yes, but not for every settler. The main benefit of staggered sleep is that someone is always awake to respond to emergencies — raids, fires, mental breaks. A practical approach: split your colony into two sleep groups. Group A (guards, night researchers) sleeps 0h–6h. Group B (farmers, builders, crafters) sleeps 22h–4h. This creates a two-hour overlap where everyone is awake for meals and socializing, while ensuring coverage 24 hours a day.</p>
          </div>
          <div className="border border-gray-700 p-4 bg-gray-800/30">
            <h3 className="font-semibold text-accent">How do I handle settlers with the Night Owl or Early Bird traits?</h3>
            <p className="text-ink-light mt-2">Night Owl settlers gain a mood buff when awake at night and a penalty during the day. Assign them to the Researcher schedule immediately — it naturally aligns with their trait. Early Bird settlers gain a mood buff in the morning. Assign them to Farmer or Builder schedules, which start work at dawn. Do not fight trait-based preferences — lean into them for free mood buffs.</p>
          </div>
          <div className="border border-gray-700 p-4 bg-gray-800/30">
            <h3 className="font-semibold text-accent">How many Recreation hours does a settler actually need per day?</h3>
            <p className="text-ink-light mt-2">The minimum is 2 hours of dedicated Recreation for a settler with normal mood and standard needs. Settlers with negative mood traits (Pessimist, Neurotic) need 3–4 hours. Settlers with positive mood traits (Optimist, Iron-Willed) can function on 1 hour. However, Recreation is also when settlers socialize and build relationships — and strong relationships provide powerful mood buffs. A generous 3–4 hour Recreation block pays dividends in colony-wide mood stability and relationship formation, even if it appears to reduce productive hours.</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-4 text-ink">Implementation Tips</h2>
        <ul className="list-disc pl-6 mt-3 space-y-2 text-ink-light">
          <li><strong className="text-accent">Start simple.</strong> Create three schedules on day one — Farmer, Crafter, and General — and assign settlers roughly based on their skills. Refine into the six role templates above once your colony has 8-plus settlers and roles are clearly defined.</li>
          <li><strong className="text-accent">Name your schedules clearly.</strong> The game lets you rename schedules. Use descriptive names like &ldquo;Farmer — Harvest Season&rdquo; and &ldquo;Crafter — Night Shift&rdquo; so you can switch schedules with one click per settler when seasons change.</li>
          <li><strong className="text-accent">Watch for the &ldquo;Exhausted&rdquo; status.</strong> If a settler frequently shows Exhausted during work blocks, they need more Sleep or more Anything time to self-regulate. Do not ignore exhaustion — it cascades into slower work, worse mood, and eventually mental breaks.</li>
          <li><strong className="text-accent">Raids override schedules.</strong> When a raid appears, draft all combat-capable settlers immediately. The schedule system respects the drafted state — drafted settlers will fight regardless of what their schedule says. After the raid, return them to their normal schedule.</li>
        </ul>

        <p className="text-ink-light mt-10 text-sm border-t border-gray-700 pt-4">
          Last updated: July 1, 2026. Schedule mechanics verified against Going Medieval experimental branch. Schedule system has been stable across recent updates; no major changes expected.
        </p>
      </div>
    </div>
  );
}
