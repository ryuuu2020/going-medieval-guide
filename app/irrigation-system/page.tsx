export const metadata = {
  title: "Going Medieval Irrigation System — Farming Water Guide (2026)",
  description: "Set up irrigation for maximum crop yields in Going Medieval. Water source placement, irrigation range, optimal field layout, and soil fertility interaction.",
};

export default function IrrigationSystemPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-10">
          <section>
            <h1 className="chapter-heading">Going Medieval Irrigation System — Complete Farming Water Guide</h1>
            <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
              Water access is the single biggest factor determining crop yield potential in Going Medieval. An unirrigated field produces crops at reduced efficiency, while a properly irrigated field near a water source grows crops faster and with higher yield per tile. Understanding how the game's irrigation system works — specifically how water proximity is calculated, which tiles count as irrigated, and how to lay out your fields to maximize irrigated tile coverage — is essential for any player aiming to produce enough food to survive later years. This guide covers water source types, irrigation radius mechanics, optimal field placement relative to water, and how soil fertility interacts with irrigation.
            </p>
          </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">How Irrigation Works in Going Medieval</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Irrigation in Going Medieval is proximity-based. Crop tiles within a certain radius of a natural water source (river, lake, stream) receive an irrigation bonus that increases growth speed and yield. There is no player-built irrigation channel system — the game uses natural water proximity as the irrigation mechanic.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                This means your base's proximity to a water source during map selection directly determines your farming potential. Maps with rivers running through or adjacent to the starting area have far more irrigable farm tiles than maps with water sources far from the buildable area.
              </p>
              <div className="aged-border p-5" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                <p className="font-serif text-sm text-ink leading-relaxed">
                  <strong className="text-vermillion">&#9888; Map Selection Tip:</strong> When selecting a starting map, prioritize proximity to a river or large water body. A map with a river running through the playable area provides more high-quality farm tiles than a map where the nearest water is at the edge. This decision at map start has lasting consequences for all future food production.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Irrigation Radius and Field Placement</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                The exact irrigation radius depends on the water source size. Rivers provide a wider radius than streams or small ponds. In general, tiles within approximately 4-8 tiles of a water source edge receive the full irrigation bonus. Tiles beyond this range receive partial or no bonus.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                When planning your farm layout, place crop zones as close to the water source as possible. The first rows of fields adjacent to the water have the highest irrigation value. If your base requires distance from water due to defensive positioning, prioritize your highest-value crops (grains, vegetables) in the closest fields to water.
              </p>
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Distance from Water</th>
                    <th>Irrigation Status</th>
                    <th>Recommended Crops</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>0-4 tiles</td><td>Fully Irrigated</td><td>High-value grains, vegetables</td></tr>
                  <tr><td>5-8 tiles</td><td>Partially Irrigated</td><td>Root vegetables, herbs</td></tr>
                  <tr><td>9+ tiles</td><td>Unirrigated</td><td>Drought-tolerant crops; hemp, flax</td></tr>
                </tbody>
              </table>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Optimal Field Layout for Irrigated Maps</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                On a river map, run your farm fields in strips parallel to the river, starting from the bank. This layout maximizes the number of tiles within full irrigation range. A strip layout also makes it easy for your farmers to work systematically along rows without long travel distances between harvest points.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Reserve the fully irrigated tiles (closest to water) for your highest-yield crops: wheat, rye, and barley for food production; flax for fiber. Place crops that tolerate drier conditions (berries, herbs, medicine plants) in the partially irrigated or outer zones.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Soil Fertility and Long-Term Farm Management</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Irrigation interacts with soil fertility. Continuously farming the same tile reduces its fertility over time, decreasing yield even in irrigated zones. Restore fertility by leaving tiles fallow (unplanted) for a season, or by applying compost if you have a composting system.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Implement crop rotation: alternate between grain crops (which deplete fertility) and legume crops (which restore nitrogen) on the same tiles across seasons. This maintains fertility in your irrigated zones over multiple years without needing to expand the farm footprint.
              </p>
            </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-6">Frequently Asked Questions</h2>

                <div className="aged-border p-5 mb-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                  <h3 className="font-display text-lg font-semibold text-ink mb-2">Can I build artificial irrigation channels to reach distant fields?</h3>
                  <p className="font-serif text-base text-ink-light leading-relaxed">As of the current game version, there is no player-built irrigation channel mechanic. Irrigation is determined entirely by natural water source proximity. To increase irrigated farm area, you must position farms closer to existing water sources, not route water to distant fields.</p>
                </div>
                <div className="aged-border p-5 mb-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                  <h3 className="font-display text-lg font-semibold text-ink mb-2">Does rain count as irrigation?</h3>
                  <p className="font-serif text-base text-ink-light leading-relaxed">Rainfall provides temporary moisture to all surface tiles regardless of water source proximity, but it does not replace the permanent irrigation bonus from water proximity. Fields near a river maintain their irrigation advantage even during dry spells, while fields far from water depend on rainfall for any moisture benefits.</p>
                </div>
                <div className="aged-border p-5 mb-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                  <h3 className="font-display text-lg font-semibold text-ink mb-2">What if my map has no water nearby?</h3>
                  <p className="font-serif text-base text-ink-light leading-relaxed">If your starting map has poor water access, focus on drought-tolerant crops for base nutrition and supplement with hunting and fishing rather than crop farming. Alternatively, restart with a water-rich map if farming is central to your colony strategy — water access is a fundamental constraint that cannot be worked around in the current game version.</p>
                </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-ink mb-4">Related Guides</h2>
            <div className="space-y-2">
                  <a href="/farming" className="text-accent hover:text-accent-hover underline">Farming</a>
                  <a href="/seasons" className="text-accent hover:text-accent-hover underline">Seasons</a>
                  <a href="/soil-fertility" className="text-accent hover:text-accent-hover underline">Soil Fertility</a>
                  <a href="/root-cellar" className="text-accent hover:text-accent-hover underline">Root Cellar</a>

            </div>
          </section>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
    {
      "@type": "Question",
      "name": "Can I build artificial irrigation channels to reach distant fields?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "As of the current game version, there is no player-built irrigation channel mechanic. Irrigation is determined entirely by natural water source proximity. To increase irrigated farm area, you must position farms closer to existing water sources, not route water to distant fields."
      }
    },
    {
      "@type": "Question",
      "name": "Does rain count as irrigation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Rainfall provides temporary moisture to all surface tiles regardless of water source proximity, but it does not replace the permanent irrigation bonus from water proximity. Fields near a river maintain their irrigation advantage even during dry spells, while fields far from water depend on rainfall for any moisture benefits."
      }
    },
    {
      "@type": "Question",
      "name": "What if my map has no water nearby?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If your starting map has poor water access, focus on drought-tolerant crops for base nutrition and supplement with hunting and fishing rather than crop farming. Alternatively, restart with a water-rich map if farming is central to your colony strategy — water access is a fundamental constraint that cannot be worked around in the current game version."
      }
    }
            ]
          })
        }}
      />
    </main>
  );
}
