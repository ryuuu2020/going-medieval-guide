export const metadata = {
  title: "Going Medieval Bedroom Layout — Comfort & Mood Guide (2026)",
  description:
    "Complete bedroom layout guide for Going Medieval. Maximize settler comfort, mood bonuses, and room quality for better productivity.",
};


export default function BedroomLayoutPage() {
  return (
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-10">
            <section>
              <h1 className="chapter-heading">Bedroom Layout Guide: Settler Comfort</h1>
              <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
                Bedrooms are where your settlers spend roughly one-third of their lives, and the quality of those bedrooms dictates the mood they carry into every waking hour. A comfortable, well-furnished bedroom generates positive mood bonuses that compound over the full day; a cramped, dark, dirty sleeping spot creates negative mood that can push a settler into a mental break before breakfast. This guide covers solo versus shared bedrooms, optimal dimensions, furniture progression, temperature impact on sleep quality, and the special requirements for noble settlers who demand luxury quarters. Data below is based on community testing and is for reference only.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Solo vs Shared Bedrooms</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                The first major bedroom decision every colony faces is whether to build individual bedrooms or dormitory-style shared sleeping quarters. Solo bedrooms are the optimal choice and should be your goal from the mid-game onward. Each settler assigned their own room receives personalized comfort bonuses, avoids the "disturbed sleep" penalty from roommates waking at different times, and can have their room customized to their personal preferences (nobles need luxury, aesthetic-minded settlers want decoration, ascetics prefer simplicity).
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Shared bedrooms (dormitories) are a valid early-game solution when resources are scarce. A 6x8 dormitory with 4-6 sleeping spots can house your entire starting population for the cost of a single room's walls and roof. However, shared sleeping generates stackable penalties: "disturbed sleep" (-2 mood per night), "cramped sleeping" if the room has too few tiles per settler, and "annoying roommate" if incompatible settlers share quarters. Transition to solo bedrooms as soon as you have the stone or wood to construct individual 5x5 rooms for each settler.
              </p>
              <div className="aged-border p-5" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                <p className="font-serif text-sm text-ink leading-relaxed">
                  <strong className="text-vermillion">&#9888; Bedroom Transition Rule:</strong>
                  Build one new solo bedroom at a time, moving your highest-comfort-need settlers first (nobles, then high-skill workers, then regular settlers). Don't demolish the dormitory until everyone has their own room — having a bedroom is always better than sleeping on the ground outside.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Optimal Bedroom Sizes & Quality Tiers</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Bedroom size directly determines the maximum comfort rating achievable. The game calculates a "spaciousness" modifier that applies to room quality:
              </p>
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Size (interior tiles)</th>
                    <th>Spaciousness Rating</th>
                    <th>Mood Modifier</th>
                    <th>Best Use</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>2x2</td><td>Cramped</td><td>~-2 mood (est.)</td><td>Emergency only — avoid</td></tr>
                  <tr><td>3x3</td><td>Tight</td><td>~+0 (est.)</td><td>Bare minimum, ascetic settlers</td></tr>
                  <tr><td>4x4</td><td>Adequate</td><td>~+1 (est.)</td><td>Standard settler bedroom</td></tr>
                  <tr><td>5x5</td><td>Comfortable</td><td>~+3 (est.)</td><td>Good standard, most common build</td></tr>
                  <tr><td>6x6</td><td>Spacious</td><td>~+4 (est.)</td><td>Skilled workers and artisans</td></tr>
                  <tr><td>7x7</td><td>Luxurious</td><td>~+5 (est.)</td><td>Noble bedroom minimum (unverified if nobles exist)</td></tr>
                </tbody>
              </table>
              <p className="font-serif text-sm text-ink-muted italic">Data source: Community testing estimates</p>
              <p className="font-serif text-base text-ink-light leading-relaxed mt-4">
                The 5x5 bedroom is the sweet spot for cost-effectiveness. It fits a bed, bedside table, torch, brazier, and one decoration (banner or rug) while triggering the "comfortable" size bonus. Upgrading to 6x6 adds room for a second decoration and improved ventilation but costs 11 additional wall segments and floor tiles per room — a significant resource commitment for colonies of 8+ settlers.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Furniture for Maximum Comfort</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                The furniture inside a bedroom contributes to the room's overall comfort rating, which is calculated separately from spaciousness and applied as a combined mood modifier. Here's the furniture progression from basic to premium:
              </p>
              <div className="space-y-3">
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Sleeping Spot (Tier 1, No Bonus)</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">A bedroll on the floor. Zero comfort contribution. May generate "slept on the ground" penalty. Only use as an emergency measure or in prisons. Always replace with a constructed bed within the first week.</p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Wooden Bed (Tier 2, Basic Comfort)</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">The standard early-game bed. Crafted from wood. Provides adequate comfort for regular settlers. Pair with a torch for full lighting and a bedside table for improved comfort.</p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Single Bed (Tier 3, Improved Comfort)</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">Improved bed with mattress. Significant comfort upgrade over the wooden bed. Ideal for skilled workers whose mood matters more.</p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Canopy Bed (Tier 4, Premium Comfort)</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">Premium bed requiring advanced materials and research. Generates the highest sleep comfort of any bed type. Essential for noble bedrooms if nobles exist in your game version — nobles may receive a significant mood penalty without premium beds.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Temperature Impact on Sleep</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Bedroom temperature directly affects sleep quality. Settlers sleeping in rooms below 5&deg;C suffer the "slept in cold" penalty (-3 mood on waking), while rooms above 35&deg;C cause "slept in heat" (-3 mood). The ideal bedroom temperature range is 15-25&deg;C, which generates a "slept in comfort" bonus (+2 mood). Temperature management requires different strategies by season and biome.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                For winter heating, place one brazier per 5x5 bedroom. Braziers burn wood or coal and radiate heat in a radius of about 5 tiles, comfortably warming standard-sized bedrooms. In extremely cold biomes, you may need two braziers per room or stone walls (which insulate better than wood). For summer cooling, underground bedrooms provide natural temperature regulation, and ventilation shafts to the surface create passive airflow. Never place a bedroom directly adjacent to a forge, stove, or brazier in an adjacent room — heat bleeds through shared walls and can overheat sleepers.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Noble Bedrooms: Special Requirements</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Nobles represent a gameplay challenge — they provide powerful colony bonuses but demand luxury living conditions. A noble's bedroom must meet minimum thresholds or they suffer a permanent -8 mood penalty. Requirements: minimum 7x7 room size, canopy bed (not just a bed), at least two decorations (banners, rugs, or artwork), a brazier for consistent temperature, full lighting coverage (zero dark tiles), and a dedicated bedside table. The floor must be at least wood plank quality — dirt or stone floors trigger the "uncivilized quarters" penalty.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                Noble bedrooms should be placed in a quiet wing of your base, far from workshops and high-traffic corridors. Noise from adjacent rooms reduces sleep quality even if the room itself is perfect. Build noble quarters with a 1-tile air gap or storage closet between the noble's bedroom and any busy room to create a noise buffer. If you have multiple nobles, their bedrooms should not share walls — each deserves a completely standalone room with all four walls exclusive to their quarters.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
              <div className="faq-item">
                <details>
                  <summary>Can couples share a bedroom?</summary>
                  <p>Yes, and they should. Settlers in romantic relationships receive a positive "slept with partner" mood buff when sharing a bedroom. Build a double-sized room (6x6 or larger) with a double bed (research unlock) for couples — this combines the best of both solo and shared sleeping.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>How important are bedroom floors?</summary>
                  <p>Very. Dirt floors reduce cleanliness and comfort scores. Stone is the bare minimum, wood planks are the standard, and tile floors boost comfort significantly. Floor quality is one of the cheapest ways to improve bedroom ratings — upgrade floors before adding premium furniture.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>Should I give my best bedroom to the cook or the crafter?</summary>
                  <p>Prioritize settlers who contribute the most value to the colony and who have mood-sensitive traits. A cook with the "gourmand" trait who experiences mood breaks stops feeding everyone. Generally: nobles first, then cook, then high-skill crafters, then regular workers.</p>
                </details>
              </div>
            </section>
          </div>

          <aside className="lg:w-[35%] space-y-8 shrink-0">
            <div className="field-sidebar-block">
              <h3 className="font-display text-lg font-semibold text-ink mb-4">Bed Type Quick Ref</h3>
              <div className="space-y-3">
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Sleeping Spot</h4><p className="font-serif text-xs text-ink-muted mt-1">Free | No comfort | May cause mood penalty</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Wooden Bed</h4><p className="font-serif text-xs text-ink-muted mt-1">~Wood x5 | Basic comfort | Standard</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Single Bed</h4><p className="font-serif text-xs text-ink-muted mt-1">~Wood x5, Cloth x3 | Improved comfort</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Canopy Bed</h4><p className="font-serif text-xs text-ink-muted mt-1">~Wood x8, Cloth x5, Iron x2 | Premium comfort | Noble req.</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Double Bed</h4><p className="font-serif text-xs text-ink-muted mt-1">~Wood x10, Cloth x6 | Couples only</p></div>
              </div>
            </div>
            <div className="journal-card p-5">
              <h3 className="font-display text-base font-semibold text-ink mb-3">Bedroom Upgrade Priority</h3>
              <ol className="space-y-2 font-serif text-sm text-ink-light">
                <li>1. Replace sleeping spots with wooden beds</li>
                <li>2. Add torches to all bedrooms</li>
                <li>3. Upgrade floors to wood planks</li>
                <li>4. Add bedside tables + braziers</li>
                <li>5. Build noble bedroom (7x7 + canopy)</li>
                <li>6. Upgrade remaining beds to single beds</li>
                <li>7. Add decorations: banners, rugs, art</li>
              </ol>
            </div>
          </aside>
        </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={ __html: `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can couples share a bedroom?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, and they should. Settlers in romantic relationships receive a positive \"slept with partner\" mood buff when sharing a bedroom. Build a double-sized room (6x6 or larger) with a double bed (research unlock) for couples — this combines the best of both solo and shared sleeping."
      }
    },
    {
      "@type": "Question",
      "name": "How important are bedroom floors?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Very. Dirt floors reduce cleanliness and comfort scores. Stone is the bare minimum, wood planks are the standard, and tile floors boost comfort significantly. Floor quality is one of the cheapest ways to improve bedroom ratings — upgrade floors before adding premium furniture."
      }
    },
    {
      "@type": "Question",
      "name": "Should I give my best bedroom to the cook or the crafter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Prioritize settlers who contribute the most value to the colony and who have mood-sensitive traits. A cook with the \"gourmand\" trait who experiences mood breaks stops feeding everyone. Generally: nobles first, then cook, then high-skill crafters, then regular workers."
      }
    }
  ]
}` } />
      </main>
  );
}
