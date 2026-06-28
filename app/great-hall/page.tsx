export const metadata = {
  title: "Going Medieval Great Hall Guide — Maximize Happiness (2026)",
  description:
    "Complete great hall guide for Going Medieval. Room design, decoration, mood bonuses, and maximizing settler happiness.",
};


export default function GreatHallPage() {
  return (
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-10">
            <section>
              <h1 className="chapter-heading">Great Hall Guide: Maximize Happiness</h1>
              <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
                The Great Hall is the heart of your colony — the single room that provides more mood bonuses than any other structure in Going Medieval. When properly designed, a Great Hall transforms every meal into a happiness-increasing event, provides recreation during idle hours, and serves as the social hub where settlers gather to chat, celebrate, and recover from the stresses of colony life. A poorly designed Great Hall, on the other hand, compounds negative mood: settlers eating in the dark on the floor will spiral into mental breakdowns faster than any raid can inflict. This guide covers dimensions, furniture, lighting, and the mechanics behind settler gathering. Data below is based on community testing and is for reference only.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Optimal Dimensions and Room Size</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                The Great Hall's size directly determines its quality tier. The game calculates room quality based on a combination of size, cleanliness, furniture count, and decoration value. The minimum functional size is roughly 5x5 interior tiles, which accommodates a table, four chairs, and a torch — community reports suggest this may produce a "basic" Great Hall bonus. Larger sizes produce progressively better quality tiers. The ideal size for a late-game Great Hall is spacious enough for a large table cluster, multiple braziers, wall decorations, musical instruments, and a dedicated sideboard area for meal pickup. Exact size thresholds and mood bonuses are community estimates.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Wall material and flooring both contribute to Great Hall quality. Stone walls provide a base quality bonus over wood walls. The floor should be upgraded progressively: dirt floor → stone floor → wood plank floor → tile floor, with each upgrade contributing significantly to room quality calculations. A carpeted Great Hall (research unlock) with tile walls is the ceiling-tier build that generates the maximum possible room happiness bonus. Pillar placement matters in larger halls — for anything wider than 7 tiles, place a row of decorative stone pillars down the center, which doubles as torch-mounting infrastructure.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Furniture Checklist for a Complete Great Hall</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                A functional Great Hall requires specific furniture to activate its room type and maximize its bonus. The absolute minimum setup is one table and one chair per settler you expect to eat simultaneously (usually 4-6 settlers eat at the same time). Beyond the minimum, each additional furniture item contributes to room quality.
              </p>
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Furniture Item</th>
                    <th>Quantity</th>
                    <th>Purpose</th>
                    <th>Quality Contribution</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Table (long)</td><td>2-4</td><td>Eating surface</td><td>Medium</td></tr>
                  <tr><td>Chair / Stool</td><td>4-12</td><td>Seating per settler</td><td>Low per unit</td></tr>
                  <tr><td>Brazier</td><td>2-4</td><td>Light + heat</td><td>Medium</td></tr>
                  <tr><td>Banner</td><td>2-4</td><td>Decoration, faction pride</td><td>High</td></tr>
                  <tr><td>Rug</td><td>1-2</td><td>Floor decoration</td><td>Medium</td></tr>
                  <tr><td>Musical Instrument</td><td>1-2</td><td>Recreation</td><td>High</td></tr>
                  <tr><td>Candle / Candelabra</td><td>2-4</td><td>Ambient light</td><td>Low</td></tr>
                  <tr><td>Sideboard / Shelf</td><td>1-2</td><td>Meal staging area</td><td>Low</td></tr>
                </tbody>
              </table>
              <p className="font-serif text-sm text-ink-muted italic">Data source: Community testing estimates</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Lighting & Torch Placement Strategy</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Lighting is the single most important factor in Great Hall mood generation. A dark Great Hall not only fails to generate positive mood but actively generates negative mood through the "ate in darkness" penalty, which stacks with the existing darkness penalty. Your Great Hall must be completely illuminated — zero dark tiles in the entire room. A 7x7 room requires at minimum 4 torches (one per wall, centered) or 2 braziers (placed in opposite corners or on central pillars). Larger halls of 10x10 or more should use a combination of 2-3 braziers for ambient light and 4-6 wall torches to fill corner shadows.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                The brazier-versus-torch trade-off: braziers provide both light and heat in a larger radius but consume iron and wood to build, while torches are cheap (wood only) but illuminate a smaller area and produce negligible heat. For winter maps, prioritize braziers — they keep settlers warm while eating, which prevents a separate cold-based mood penalty. For temperate biomes, torches are sufficient for lighting alone. Always place light sources so the entire room floor shows as lit in the lighting overlay — check this by night to ensure no settler ever eats in shadow.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Banner Bonuses & Faction Pride</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Banners are the most efficient decoration for boosting Great Hall quality. Each banner contributes a significant quality value to the room while only costing cloth or leather to craft, and they occupy wall space — which is abundant in any room. Banners also provide a faction pride bonus: settlers who share the same faction as the banner design receive an additional mood boost. Place banners on every available wall segment, spacing them evenly — a 9x9 Great Hall can fit 8-10 banners on its perimeter walls.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                Beyond banners, rugs and candles contribute meaningfully to room quality at relatively low cost. A single large rug placed under the main dining table creates a visual focal point and generates a high decoration score for its tile footprint. Musical instruments (drums, lutes) are late-game additions that serve dual purposes: they boost room quality passively and provide active recreation when idle settlers interact with them. One instrument per 5 settlers ensures everyone gets recreation time.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Settler Gathering Mechanics</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Settlers naturally gravitate to the Great Hall during meal times and designated recreation hours. The game's AI schedules meals in two windows: a morning meal (roughly hour 6-8) and an evening meal (roughly hour 16-18). During these windows, every awake settler will stop work and path to the nearest available table and chair. If insufficient seating exists, settlers will eat standing up — which generates a -3 mood penalty even in a beautiful Great Hall. Always maintain one chair per expected concurrent eater, plus one extra for guests or new recruits.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                The Great Hall's location matters for settler pathing. If the hall is placed on the opposite side of the colony from the food stockpile or kitchen, settlers spend excessive travel time carrying meals and eating late — cutting into work hours. The ideal layout places the kitchen adjacent to the Great Hall with a shared wall and a door, so the cook can produce meals steps from where they'll be eaten. A sideboard or shelf placed near the kitchen door serves as a dedicated meal drop-off point, ensuring meals are always within reach.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
              <div className="faq-item">
                <details>
                  <summary>How many chairs do I really need per settler?</summary>
                  <p>One chair per settler who might eat simultaneously — typically 60-80% of your population, since not everyone eats at exactly the same moment. For 10 settlers, 7-8 chairs is safe. Having extra chairs generates no penalty, but insufficient seating causes mood loss.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>Can I have multiple Great Halls?</summary>
                  <p>No. The game only recognizes one Great Hall per colony. If you build a second room with tables and chairs, it registers as a "dining room" instead and may produce reduced mood bonuses. Focus all decoration and furniture investment into a single Great Hall. This behavior is based on community observation and may vary by game version.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>What's the best floor material for Great Halls?</summary>
                  <p>Tile floors are the highest-quality flooring and significantly boost room quality scores. Wood plank floors are a good mid-game option. Stone is an acceptable budget choice. Dirt floors should never be used in a Great Hall — they generate negative cleanliness penalties.</p>
                </details>
              </div>
            </section>
          </div>

          <aside className="lg:w-[35%] space-y-8 shrink-0">
            <div className="field-sidebar-block">
              <h3 className="font-display text-lg font-semibold text-ink mb-4">Great Hall Size Reference</h3>
              <div className="space-y-3">
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Basic (5x5)</h4><p className="font-serif text-xs text-ink-muted mt-1">Table + 4 chairs + 1 torch | Community est. mood bonus</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Impressive (7x7)</h4><p className="font-serif text-xs text-ink-muted mt-1">2 tables + 8 chairs + brazier + banners | Est. higher bonus</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Magnificent (9x9+)</h4><p className="font-serif text-xs text-ink-muted mt-1">Full furniture + tile floor + instruments | Est. highest bonus</p></div>
              </div>
            </div>
            <div className="journal-card p-5">
              <h3 className="font-display text-base font-semibold text-ink mb-3">Great Hall Upgrade Path</h3>
              <ol className="space-y-2 font-serif text-sm text-ink-light">
                <li>1. 5x5 dirt room, 1 table, 4 stools, 1 torch</li>
                <li>2. Upgrade floors to stone, add 2nd table</li>
                <li>3. Enlarge to 7x7, add brazier + 2 banners</li>
                <li>4. Install tile floor, add rug + candelabra</li>
                <li>5. Expand to 9x9+, add musical instrument</li>
                <li>6. Premium banners, carpet, premium chairs</li>
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
      "name": "How many chairs do I really need per settler?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "One chair per settler who might eat simultaneously — typically 60-80% of your population, since not everyone eats at exactly the same moment. For 10 settlers, 7-8 chairs is safe. Having extra chairs generates no penalty, but insufficient seating causes mood loss."
      }
    },
    {
      "@type": "Question",
      "name": "Can I have multiple Great Halls?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. The game only recognizes one Great Hall per colony. If you build a second room with tables and chairs, it registers as a \"dining room\" instead and may produce reduced mood bonuses. Focus all decoration and furniture investment into a single Great Hall. This behavior is based on community observation and may vary by game version."
      }
    },
    {
      "@type": "Question",
      "name": "What's the best floor material for Great Halls?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tile floors are the highest-quality flooring and significantly boost room quality scores. Wood plank floors are a good mid-game option. Stone is an acceptable budget choice. Dirt floors should never be used in a Great Hall — they generate negative cleanliness penalties."
      }
    }
  ]
}` }} />
      </main>
  );
}
