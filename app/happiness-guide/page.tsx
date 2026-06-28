export const metadata = {
  title: "Going Medieval Happiness & Mood Guide — Complete (2026)",
  description:
    "Complete settler happiness and mood guide for Going Medieval. Mood system, needs, bonuses, and preventing mental breaks.",
};


export default function HappinessGuidePage() {
  return (
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-10">
            <section>
<h1 className="chapter-heading">Settler Happiness & Mood Guide</h1>
            <div className="aged-border p-5 mb-5" style={{ backgroundColor: 'var(--color-parchment-deep)', borderColor: '#8b2500' }}>
                <p className="font-serif text-sm text-ink leading-relaxed">
                  <strong className="text-vermillion">&#9888; DISCLAIMER:</strong> The specific mood modifiers, threshold ranges (0-100 scale), and "mental break" states listed below are <strong>community-estimated and may borrow mechanics from similar games</strong>. Several listed mood factors (e.g., "Ate without table", "Stale air") are characteristic of other colony sims and may not exist in Going Medieval with the exact names or values described. Use this as a general framework — always verify mood effects against the in-game Needs panel.
                </p>
              </div>
            <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
                Settler happiness is the invisible economy that underlies every other system in Going Medieval. A colony with eight fully content settlers outproduces a colony of twelve miserable colonists by a wide margin — happy settlers work faster and fight harder. An unhappy settler is a liability: they refuse work, start fights, destroy furniture, and in extreme cases may abandon the colony entirely. This guide maps mood factors in the game, explains how low mood triggers different behaviors, and provides a diagnostic framework for maintaining colony morale. Data below is based on community testing and is for reference only.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Happiness Thresholds & Mental States</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Happiness in Going Medieval operates on a 0-100 scale (community estimate — exact range and thresholds not officially confirmed). The values below represent community-observed patterns and may not match the game's internal calculations precisely:
              </p>
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Happiness Range</th>
                    <th>Mental State</th>
                    <th>Effects</th>
                    <th>Risk</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>~80-100</td><td>Joyful</td><td>Work/move speed bonus (est.)</td><td>None — ideal state</td></tr>
                  <tr><td>~60-79</td><td>Content</td><td>Mild work speed bonus (est.)</td><td>None — healthy baseline</td></tr>
                  <tr><td>~40-59</td><td>Neutral</td><td>Standard behavior</td><td>Low — monitor for downward trend</td></tr>
                  <tr><td>~25-39</td><td>Unhappy</td><td>Work speed penalty (est.)</td><td>Moderate — intervene soon</td></tr>
                  <tr><td>~10-24</td><td>Miserable</td><td>Severe penalty, possible negative behaviors</td><td>High — mental break imminent</td></tr>
                  <tr><td>~0-9</td><td>Broken</td><td>Mental break: berserk, catatonic, or desertion</td><td>Critical — may abandon colony</td></tr>
                </tbody>
              </table>
              <p className="font-serif text-sm text-ink-muted italic">Data source: Community testing estimates</p>
              <p className="font-serif text-base text-ink-light leading-relaxed mt-4">
                The danger zone begins at happiness 25. Below this threshold, settlers begin random negative behaviors: insulting other settlers (causing chain reaction mood hits), destroying furniture, refusing work assignments, or entering a "wandering" state where they accomplish nothing. Below 10, a full mental break triggers — the settler becomes uncontrollable for several hours and may go berserk (attacking random targets), catatonic (unresponsive on the ground), or attempt to desert (walking off the map edge permanently). A single desertion in a small colony can cascade into a death spiral if that settler was your only cook or builder.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">All Mood Factors: Positive Sources</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Happiness is calculated as the sum of all active mood modifiers — positive sources add to the score, negative sources subtract. Understanding which sources you can reliably generate is key to maintaining stable colony morale.
              </p>
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Positive Mood Source</th>
                    <th>Value</th>
                    <th>Duration</th>
                    <th>How to Obtain</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Ate stew</td><td>~+4</td><td>~4 hours</td><td>Cook stew (stove, requires skill)</td></tr>
                  <tr><td>Ate lavish meal</td><td>~+6</td><td>~6 hours</td><td>Cook lavish meal (stove, higher skill)</td></tr>
                  <tr><td>Drank alcohol</td><td>~+4 to +8</td><td>~6-10 hours</td><td>Ale/Beer/Mead/Rough Wine consumption</td></tr>
                  <tr><td>Impressive Great Hall</td><td>~+2 to +6</td><td>While eating there</td><td>Build decorated Great Hall</td></tr>
                  <tr><td>Comfortable bedroom</td><td>~+2 to +5</td><td>On waking, lasts hours</td><td>Quality bedroom with furniture</td></tr>
                  <tr><td>Recreation fulfilled</td><td>~+3 to +8</td><td>Varies by activity</td><td>Recreation buildings, instruments</td></tr>
                  <tr><td>Spiritual fulfillment</td><td>~+2 to +6</td><td>Varies by piety level</td><td>Temple (unverified if exists) with altar</td></tr>
                  <tr><td>Social interaction</td><td>~+2 to +4</td><td>After chatting</td><td>Settlers gathering in Great Hall</td></tr>
                  <tr><td>Beautiful environment</td><td>~+1 to +4</td><td>While in area</td><td>Decorations, banners, flower gardens</td></tr>
                  <tr><td>Romance</td><td>~+5</td><td>Days</td><td>Settlers forming romantic relationships</td></tr>
                </tbody>
              </table>
              <p className="font-serif text-sm text-ink-muted italic">Data source: Community testing estimates</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">All Mood Factors: Negative Sources</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Negative mood sources often stack multiplicatively — a settler who is hungry, cold, and grieving can accumulate -15 to -20 mood from three separate sources simultaneously. Identifying and removing negative sources is always more efficient than trying to pile on positive buffs.
              </p>
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Negative Mood Source</th>
                    <th>Value</th>
                    <th>Condition</th>
                    <th>How to Fix</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Hunger (starving)</td><td>~-4 to -12</td><td>No food available or inaccessible</td><td>Ensure adequate food stockpile</td></tr>
                  <tr><td>Ate without table</td><td>~-3</td><td>No chair+table in eating area</td><td>Build Great Hall with seating</td></tr>
                  <tr><td>Ate raw food</td><td>~-3</td><td>Eating uncooked ingredients</td><td>Assign dedicated cook, stove</td></tr>
                  <tr><td>Slept on ground</td><td>~-3</td><td>No bed/sleeping spot</td><td>Build beds for all settlers</td></tr>
                  <tr><td>Slept in cold/heat</td><td>~-3</td><td>Bedroom outside comfort temp range</td><td>Brazier for heat, ventilation for cool</td></tr>
                  <tr><td>Darkness</td><td>~-2 to -5</td><td>Standing or working in dark tiles</td><td>Place torches/braziers in all rooms</td></tr>
                  <tr><td>Stale air</td><td>~-2 to -4</td><td>Underground without ventilation (community observation — may not exist as named mechanic)</td><td>Build ventilation shafts</td></tr>
                  <tr><td>Naked</td><td>~-4</td><td>No clothing worn</td><td>Craft cloth tunics for everyone</td></tr>
                  <tr><td>Witnessed death</td><td>~-5</td><td>Seeing ally die in combat</td><td>Time heals; alcohol softens</td></tr>
                  <tr><td>Grieving (friend died)</td><td>~-8</td><td>Close relationship loss</td><td>Time heals; recreation helps</td></tr>
                  <tr><td>Insulted</td><td>~-3</td><td>Negative social interaction</td><td>Separate incompatible settlers</td></tr>
                </tbody>
              </table>
              <p className="font-serif text-sm text-ink-muted italic">Data source: Community testing estimates</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Room Quality & Its Impact on Happiness</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Room quality is calculated from four factors: spaciousness (room size), wealth (furniture quality/value), beauty (decorations and artwork), and cleanliness (dirt accumulation). Together these produce a room quality rating that applies mood modifiers when settlers interact with the room. A magnificent Great Hall (+6 mood when eating) + a comfortable bedroom (+3 mood on waking) + a beautiful temple (+4 spiritual fulfillment) can generate +13 passive mood without consuming any consumable resources — this is the foundation of sustainable colony happiness.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                Cleanliness is the most overlooked room quality factor. Rooms accumulate dirt when settlers walk through them with dirty feet (tracking in mud, blood, or animal waste). Settlement cleaners will automatically sweep floors, but you must assign a dedicated cleaner with Cleaning as priority #1, and place doormats at building entrances to reduce dirt tracked inside. A room that drops below a cleanliness threshold loses its room quality bonus entirely — a dirty Great Hall provides zero mood buff even if it's fully furnished with banners and instruments.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Food Variety & Dietary Happiness</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Beyond meal quality tiers, the game tracks food variety — settlers who eat the same meal type repeatedly develop food boredom, reducing the happiness value of each subsequent identical meal. Rotating between 2-3 different meal types (e.g., stew one day, lavish meal the next, roasted meat on the third day) prevents the boredom penalty. This requires a well-organized kitchen with diverse ingredient stockpiles and a cook who can produce multiple recipe types.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                Raw food variety matters too: settlers who subsist entirely on cabbage develop nutritional deficiencies in addition to the raw food penalty. Maintain at least three crop types (barley for bread, cabbage for stews, carrots for raw snacking) and supplement with hunted meat for protein. A varied diet combined with cooked meals is the difference between a settler hovering at happiness 40 and one cruising at happiness 70+ without any alcohol or recreation boosts.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Recreation: The Neglected Happiness Engine</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Recreation is one of the most powerful but most commonly overlooked happiness sources. Settlers with unmet recreation needs accumulate a "recreation-starved" penalty (-5 mood), while those who regularly recreate receive stacking positive buffs. Recreation buildings and items include: chess tables, musical instruments (drum, lute, harp), gambling tables, and even simple campfire gatherings. Place 2-3 recreation items in or adjacent to your Great Hall, where settlers naturally gather during evening hours.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                Recreation scheduling is as important as recreation availability. Settlers will not automatically recreate if their work priorities leave no free time. Designate 1-2 hours per day (typically the final hours before bedtime) as recreation time by adjusting work schedules — this ensures settlers actually use the recreation items you've built. A 1-hour evening recreation period in a well-furnished Great Hall with an instrument and chess table generates +5 to +8 mood reliably, making it the strongest single daily happiness source after food.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
              <div className="faq-item">
                <details>
                  <summary>How do I diagnose why a settler is unhappy?</summary>
                  <p>Click the settler, open their Needs/Mood panel. All active positive (green) and negative (red) mood modifiers are listed with their values. Start by fixing the largest red numbers first — address hunger, cold, and darkness before investing in luxury items.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>Can I prevent mental breaks?</summary>
                  <p>Once a settler drops below happiness 10, a mental break is nearly guaranteed — prevention must happen earlier. Monitor happiness scores weekly (click through settlers during evening hours) and intervene at happiness 25 or below with emergency measures: alcohol, recreation time, or temporary work relief.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>What's the fastest way to boost happiness in a crisis?</summary>
                  <p>Rough Wine (+8 happiness, 10 hours) followed by assigning the settler to 2 hours of recreation in a high-quality Great Hall (+5-8 happiness). Together these can push a settler from misery (20) to contentment (60+) within a single day. Keep emergency Rough Wine barrels in your Great Hall for this exact scenario.</p>
                </details>
              </div>
            </section>
          </div>

          <aside className="lg:w-[35%] space-y-8 shrink-0">
            <div className="field-sidebar-block">
              <h3 className="font-display text-lg font-semibold text-ink mb-4">Happiness Priority Stack</h3>
              <div className="space-y-3">
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">1. Basic Needs</h4><p className="font-serif text-xs text-ink-muted mt-1">Food + Bed + Temperature | Fix first, always</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">2. Comfort</h4><p className="font-serif text-xs text-ink-muted mt-1">Quality bedroom + Great Hall | Stable passive mood</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">3. Consumables</h4><p className="font-serif text-xs text-ink-muted mt-1">Stew/Lavish meals + Alcohol | Active mood boosts</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">4. Lifestyle</h4><p className="font-serif text-xs text-ink-muted mt-1">Recreation + Temple (unverified room type) + Social | Sustained buffs</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">5. Luxury</h4><p className="font-serif text-xs text-ink-muted mt-1">Noble quarters + Art + Romance | Endgame ceiling</p></div>
              </div>
            </div>
            <div className="journal-card p-5">
              <h3 className="font-display text-base font-semibold text-ink mb-3">Emergency Mood Rescue</h3>
              <ol className="space-y-2 font-serif text-sm text-ink-light">
                <li>1. Serve Rough Wine (~+8 community est., immediate)</li>
                <li>2. Assign 2hr recreation in Great Hall (~+5-8)</li>
                <li>3. Cook stew/lavish meal for next eating window (~+4-6)</li>
                <li>4. Check bedroom: heat, light, cleanliness</li>
                <li>5. Separate from incompatible settlers</li>
                <li>6. Reduce work hours temporarily</li>
                <li>7. If noble: check all noble requirements met</li>
              </ol>
            </div>
          </aside>
        </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I diagnose why a settler is unhappy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Click the settler, open their Needs/Mood panel. All active positive (green) and negative (red) mood modifiers are listed with their values. Start by fixing the largest red numbers first — address hunger, cold, and darkness before investing in luxury items."
      }
    },
    {
      "@type": "Question",
      "name": "Can I prevent mental breaks?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Once a settler drops below happiness 10, a mental break is nearly guaranteed — prevention must happen earlier. Monitor happiness scores weekly (click through settlers during evening hours) and intervene at happiness 25 or below with emergency measures: alcohol, recreation time, or temporary work relief."
      }
    },
    {
      "@type": "Question",
      "name": "What's the fastest way to boost happiness in a crisis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Rough Wine (+8 happiness, 10 hours) followed by assigning the settler to 2 hours of recreation in a high-quality Great Hall (+5-8 happiness). Together these can push a settler from misery (20) to contentment (60+) within a single day. Keep emergency Rough Wine barrels in your Great Hall for this exact scenario."
      }
    }
  ]
}` }} />
      </main>
  );
}
