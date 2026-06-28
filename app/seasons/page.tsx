export const metadata = {
  title: "Going Medieval Seasons & Temperature — Complete Guide (2026)",
  description:
    "Complete seasons and temperature guide for Going Medieval. Seasonal crop planning, temperature management, and winter survival.",
};


export default function SeasonsPage() {
  return (
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-10">
            <section>
              <h1 className="chapter-heading">Seasons & Temperature Management</h1>
              <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
                Going Medieval's four-season system poses a serious challenge to colony survival. Each season brings different temperatures, weather, and resource yields — winter is especially deadly, with snow covering the ground, crops stopping growth, and temperatures plunging. Mastering seasonal patterns and temperature management is key to long-term colony survival. Data below is based on community testing and is for reference only.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Four Seasons Overview</h2>
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Season</th>
                    <th>Temperature</th>
                    <th>Characteristics</th>
                    <th>Priorities</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Spring</td><td>5-18&deg;C</td><td>Snow melts, crops plantable</td><td>Begin tilling immediately, repair winter damage</td></tr>
                  <tr><td>Summer</td><td>18-32&deg;C</td><td>Vigorous growth, occasional heat waves</td><td>Mass planting, stockpile food</td></tr>
                  <tr><td>Autumn</td><td>5-20&deg;C</td><td>Final harvest period</td><td>Reap and store, winter prep</td></tr>
                  <tr><td>Winter</td><td>-10-5&deg;C</td><td>Heavy snow, no planting</td><td>Consume reserves, keep warm</td></tr>
                </tbody>
              </table>
              <p className="font-serif text-sm text-ink-muted italic">Data source: Community testing estimates</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Winter Survival Guide</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Winter is your colony's most dangerous period. Once snow blankets the ground, all crops stop growing and hunting becomes difficult. If food reserves are inadequate, settlers will starve or die. Plunging temperatures can also cause frostbite — settlers need indoor activity and heating.
              </p>
              <div className="space-y-3">
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Food Reserves</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">By autumn's end, ensure your stockpile holds at least 200 units of food (for 6 settlers). Prioritize storing processed foods like bread and smoked meat, which spoil slower. Underground stockpiles stay colder and extend shelf life further.</p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Heating Facilities</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">Build fireplaces or braziers in living quarters to maintain indoor temperature. Settlers in environments below 0&deg;C suffer continuous mood and health loss. Ensure adequate fuel (wood) — chop plenty before winter.</p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Warm Clothing</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">Craft warm clothing for every settler (leather armor + cloth lining). Dressed settlers can tolerate brief outdoor activity, but prolonged exposure still causes frostbite. Schedule indoor work during winter as much as possible.</p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Winter Activities</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">Use winter for indoor work: research, crafting, cooking. You can also excavate underground to expand your base. Avoid unnecessary outdoor activities to prevent frostbite and mood loss.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Temperature Management</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Temperature affects not only settler comfort but also food preservation and crop growth. Underground spaces stay at a constant temperature year-round (approximately 8-12&deg;C), making them ideal stockpiles. Above-ground buildings are heavily affected by seasons — hot in summer, cold in winter — requiring fireplaces and ventilation for regulation.
              </p>
              <div className="aged-border p-5" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                <p className="font-serif text-sm text-ink leading-relaxed">
                  <strong className="text-vermillion">&#9888; Temperature Tip:</strong>
                  Spaces 2+ levels below ground stay at 8-12&deg;C year-round — a natural cold storage. Building food stockpiles here can reduce spoilage by 70%. Build living quarters at 1 level below ground; combined with a fireplace, they can stay above 15&deg;C even in winter.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Seasonal Events</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Different seasons trigger different events. Spring may bring wanderers seeking to join; summer is peak raid season; autumn brings frequent merchant visits; winter may cause blizzards that completely halt outdoor activity. Understanding seasonal event patterns helps you prepare in advance.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                Pay special attention to summer heat wave events — temperatures can soar above 40&deg;C, risking heatstroke. Ensure shaded areas and sufficient drinking water. During winter blizzards, all outdoor work stops and settlers must remain indoors.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
              <div className="faq-item">
                <details>
                  <summary>My settlers keep getting frostbite in winter. What do I do?</summary>
                  <p>Three measures: 1) Ensure living quarters have fireplaces with ample firewood; 2) Craft warm clothing for settlers; 3) Schedule indoor work as much as possible to reduce outdoor exposure time. If frostbite has already occurred, order bed rest and treatment.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>How much food does a winter require?</summary>
                  <p>Winter lasts about 10-15 days (in-game). 6 settlers consume roughly 12-18 food units per day, totaling 120-270 units. Plan for 300+ units to handle emergencies. Processed foods last longer.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>Does summer heat affect work efficiency?</summary>
                  <p>Yes. Above 30&deg;C, settler work efficiency drops. Above 35&deg;C, heatstroke becomes a risk. Install vents in buildings to ensure air flow. During heat waves, pause heavy outdoor labor and assign indoor work.</p>
                </details>
              </div>
            </section>
          </div>

          <aside className="lg:w-[35%] space-y-8 shrink-0">
            <div className="field-sidebar-block">
              <h3 className="font-display text-lg font-semibold text-ink mb-4">Winter Prep Checklist</h3>
              <ul className="space-y-2 font-serif text-sm text-ink-light">
                <li>&#10003; 300+ units of processed food</li>
                <li>&#10003; 100+ wood (fuel)</li>
                <li>&#10003; Warm clothing for everyone</li>
                <li>&#10003; Fireplaces/braziers built</li>
                <li>&#10003; Underground stockpile active</li>
                <li>&#10003; Walls repaired</li>
                <li>&#10003; Medical supplies stocked</li>
              </ul>
            </div>
            <div className="journal-card p-5">
              <h3 className="font-display text-base font-semibold text-ink mb-3">Temperature Reference</h3>
              <div className="space-y-2 font-serif text-sm text-ink-light">
                <div className="flex justify-between border-b border-divider pb-1"><span>Underground L2</span><span className="text-ink-muted">8-12&deg;C constant</span></div>
                <div className="flex justify-between border-b border-divider pb-1"><span>Summer surface</span><span className="text-ink-muted">18-32&deg;C</span></div>
                <div className="flex justify-between border-b border-divider pb-1"><span>Winter surface</span><span className="text-ink-muted">-10-5&deg;C</span></div>
                <div className="flex justify-between"><span>Ideal indoor</span><span className="text-ink-muted">15-22&deg;C</span></div>
              </div>
            </div>
          </aside>
        </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "My settlers keep getting frostbite in winter. What do I do?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Three measures: 1) Ensure living quarters have fireplaces with ample firewood; 2) Craft warm clothing for settlers; 3) Schedule indoor work as much as possible to reduce outdoor exposure time. If frostbite has already occurred, order bed rest and treatment."
      }
    },
    {
      "@type": "Question",
      "name": "How much food does a winter require?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Winter lasts about 10-15 days (in-game). 6 settlers consume roughly 12-18 food units per day, totaling 120-270 units. Plan for 300+ units to handle emergencies. Processed foods last longer."
      }
    },
    {
      "@type": "Question",
      "name": "Does summer heat affect work efficiency?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Above 30&deg;C, settler work efficiency drops. Above 35&deg;C, heatstroke becomes a risk. Install vents in buildings to ensure air flow. During heat waves, pause heavy outdoor labor and assign indoor work."
      }
    }
  ]
}` }} />
      </main>
  );
}
