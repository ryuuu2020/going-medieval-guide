
const TIPS = [
  { cat: 'Storage', tip: 'Temperatures 2 levels underground stay 8-12&deg;C year-round, reducing food spoilage by 70%. Excavate an underground stockpile early.' },
  { cat: 'Defense', tip: 'Multi-layered walls are more effective than a single thick wall. If the outer layer is breached, the inner layer still holds, buying you time to counterattack.' },
  { cat: 'Research', tip: 'Prioritize Agriculture tech to unlock clay brick walls, then Construction tech for stone walls. Defense upgrades are critical.' },
  { cat: 'Management', tip: 'Mood below 30 triggers negative events. Regularly supply beer and quality meals to keep mood above 50.' },
  { cat: 'Seasons', tip: 'Stockpile at least 300 units of food before winter. Once snow covers the ground, planting and hunting are impossible.' },
  { cat: 'Combat', tip: 'Archers on walls gain a height advantage bonus. Accuracy and damage increase by roughly 30%.' },
  { cat: 'Building', tip: 'Use a grid layout for underground excavation — leave 1 rock pillar every 4 tiles. It\'s safe and space-efficient.' },
  { cat: 'Farming', tip: 'Replant immediately after every harvest. An idle field is a missed day of production — maximize rotation efficiency.' },
  { cat: 'Crafting', tip: 'Iron items require a full chain: Mining &rarr; Smelting &rarr; Forging. Build your smelter near iron deposits to reduce hauling.' },
  { cat: 'Trading', tip: 'Beer is the best value-for-money commodity. Grow barley in spring, brew in autumn, and sell in winter for scarce resources.' },
  { cat: 'Settlers', tip: 'Specialists for specialties. Assign each task to the settler with the highest relevant skill for a major efficiency boost.' },
  { cat: 'Defense', tip: 'Densely pack wooden spike traps 2 tiles in front of your gates. Raiders take continuous damage while breaking the gate.' },
  { cat: 'Building', tip: 'Roofs are mandatory. Rooms without roofs count as outdoor — settlers suffer negative mood from weather exposure.' },
  { cat: 'Storage', tip: 'Processed food lasts 3x longer than raw food. Turn barley into bread, meat into smoked meat, and vegetables into pickles.' },
  { cat: 'Seasons', tip: 'During summer heat waves, pause heavy outdoor labor and assign indoor work to prevent heatstroke.' },
  { cat: 'Combat', tip: 'Prisoners can be recruited as settlers. Build a prison, hold captives, provide food regularly, then attempt recruitment.' },
  { cat: 'Management', tip: 'Individual bedrooms grant +10 mood. 4x4 tiles with a table and chair works best.' },
  { cat: 'Research', tip: 'Place a bookshelf near the research table for +10% efficiency. Assign 2 researchers simultaneously to stack points.' },
  { cat: 'Farming', tip: 'Keep fields to 10x10 tiles max. Larger fields mean delayed harvests and crops rotting in the field.' },
  { cat: 'Crafting', tip: 'Crafted item quality depends on the settler\'s skill. Assign important gear to your highest-skilled crafter.' },
  { cat: 'Defense', tip: 'Create emergency exits and hidden doors. Multiple retreat routes when besieged prevent total loss.' },
  { cat: 'Trading', tip: 'Assign your highest Social-skill settler to trading for better buy and sell prices.' },
  { cat: 'Building', tip: 'Build multi-story structures bottom-up. Upper walls must align with lower walls or pillars. Overhangs beyond 2 tiles will collapse.' },
  { cat: 'Seasons', tip: 'Underground temperature is constant. Build living quarters at -1F with a fireplace for year-round comfort.' },
  { cat: 'Settlers', tip: 'Pull wounded settlers to safety immediately. Severe injuries require bed rest; medicine speeds recovery.' },
  { cat: 'Management', tip: 'A companion\'s death drops mood by 20 points for all settlers. Try to avoid casualties in combat.' },
  { cat: 'Research', tip: 'Keep researchers\' mood at 50+ and stamina full. Fatigue and hunger interrupt research progress.' },
  { cat: 'Defense', tip: 'Crossbows deal very high damage but reload slowly — best for elite marksmen. Bows fire faster and are great for volley fire.' },
  { cat: 'Farming', tip: 'Herbs and barley are high-value crops. Once food is plentiful, switch to cash crops to boost trade income.' },
  { cat: 'Building', tip: 'A hillside is the ideal site — level ground for farming above, mountain for an underground base below. Best of both worlds.' },
];
export const metadata = {
  title: "Going Medieval: 30 Pro Tips — Advanced Strategies (2026)",
  description:
    "30 pro tips for Going Medieval. Advanced strategies for defense, farming, economy, and settler management from experienced players.",
};


export default function TipsPage() {
  return (
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-10">
            <section>
              <h1 className="chapter-heading">30 Pro Tips</h1>
              <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
                From site selection to defense, farming to trading — these 30 tips collect battle-tested knowledge from community players. Whether you've just cleared the beginner phase or already run a thriving colony, these tips will help you optimize operations and boost efficiency. Each tip is combat-verified and applies to the 1.0 full release. Data below is based on community experience and is for reference only.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-6">Complete Tip List</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {TIPS.map((item, i) => (
                  <div key={i} className="journal-card p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-display text-lg font-bold text-vermillion">{String(i + 1).padStart(2, '0')}</span>
                      <span className="field-tag ink text-[10px]">{item.cat}</span>
                    </div>
                    <p className="font-serif text-sm text-ink leading-relaxed">{item.tip}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
              <div className="faq-item">
                <details>
                  <summary>Do these tips apply to all difficulty levels?</summary>
                  <p>Most tips work across all difficulties, though some strategies need adjustment at higher difficulties. For example, raids are more frequent on higher difficulty, requiring earlier defense; food consumption is higher, requiring more farmland. Core principles stay the same, but execution tempo must be faster.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>Which tip is the most important?</summary>
                  <p>If you only remember one: store food underground. Temperature directly affects spoilage rate, and the constant temperature 2 levels below ground can extend food shelf life by 3x or more. This directly determines whether you survive your first winter.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>What if tips conflict with each other?</summary>
                  <p>Some tips have different priorities at different stages. For example, early-game "food first" is more important than "defense," but mid-game "defense" becomes critical. Adjust flexibly based on your colony's current primary threat — no strategy is one-size-fits-all.</p>
                </details>
              </div>
            </section>
          </div>

          <aside className="lg:w-[35%] space-y-8 shrink-0">
            <div className="field-sidebar-block">
              <h3 className="font-display text-lg font-semibold text-ink mb-4">Tip Categories</h3>
              <div className="flex flex-wrap gap-2">
                {['Storage', 'Defense', 'Research', 'Management', 'Seasons', 'Combat', 'Building', 'Farming', 'Crafting', 'Trading', 'Settlers'].map(cat => (
                  <span key={cat} className="field-tag gold text-[10px]">{cat}</span>
                ))}
              </div>
            </div>
            <div className="journal-card p-5">
              <h3 className="font-display text-base font-semibold text-ink mb-3">Core Principles</h3>
              <ul className="space-y-2 font-serif text-sm text-ink-light">
                <li>1. Food is priority #1</li>
                <li>2. Underground storage preserves food</li>
                <li>3. Multi-layered defense, no reckless attacks</li>
                <li>4. Specialists boost efficiency</li>
                <li>5. Mood management prevents breakdowns</li>
              </ul>
            </div>
          </aside>
        </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={ __html: `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do these tips apply to all difficulty levels?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most tips work across all difficulties, though some strategies need adjustment at higher difficulties. For example, raids are more frequent on higher difficulty, requiring earlier defense; food consumption is higher, requiring more farmland. Core principles stay the same, but execution tempo must be faster."
      }
    },
    {
      "@type": "Question",
      "name": "Which tip is the most important?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If you only remember one: store food underground. Temperature directly affects spoilage rate, and the constant temperature 2 levels below ground can extend food shelf life by 3x or more. This directly determines whether you survive your first winter."
      }
    },
    {
      "@type": "Question",
      "name": "What if tips conflict with each other?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Some tips have different priorities at different stages. For example, early-game \"food first\" is more important than \"defense,\" but mid-game \"defense\" becomes critical. Adjust flexibly based on your colony's current primary threat — no strategy is one-size-fits-all."
      }
    }
  ]
}` } />
      </main>
  );
}
