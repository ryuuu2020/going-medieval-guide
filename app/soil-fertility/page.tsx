export const metadata = {
  title: "Going Medieval Soil Fertility Guide — Keep Fields Productive (2026)",
  description: "Manage soil fertility in Going Medieval. Crop rotation, compost, fallow seasons, and how fertility affects yield over time.",
};

export default function SoilFertilityPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-10">
          <section>
            <h1 className="chapter-heading">Going Medieval Soil Fertility — Complete Farming Management Guide</h1>
            <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
              Long-term farming success in Going Medieval depends on understanding soil fertility — the hidden value that determines how productive each farm tile is over multiple growing seasons. A new field tile starts at high fertility and produces excellent yields. Without active management, repeated cropping on the same tile depletes fertility and yields decline. Experienced players monitor fertility levels, implement crop rotation schedules, use composting to restore depleted soils, and plan seasonal fallow periods to keep their fields at peak productivity. This guide explains how fertility works, what depletes it, what restores it, and how to design a sustainable multi-year farming system.
            </p>
          </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">How Soil Fertility Works</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Soil fertility in Going Medieval is a per-tile value that affects crop yield and growth speed. High-fertility soil produces more food per harvest cycle. Low-fertility soil produces less, even if the tile is irrigated and the growing conditions are otherwise optimal.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Fertility decreases when a tile is actively used for crop growth. Heavy-feeding crops (grains, root vegetables) deplete fertility faster than light-feeding crops (herbs, berries). Fertility does not regenerate on its own during active cultivation — you must intervene with fallow periods or composting to restore it.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Crop Rotation Strategy</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Crop rotation is the practice of alternating which crops you plant in a given field zone each season. Different crops have different fertility impacts, and pairing heavy-feeder crops with fertility-restoring crops maintains long-term field productivity.
              </p>
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Crop Type</th>
                    <th>Fertility Impact</th>
                    <th>Rotation Role</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Wheat / Rye / Barley</td><td>High depletion</td><td>Primary crop; rotate with legumes</td></tr>
                  <tr><td>Peas / Beans</td><td>Fertility restoring</td><td>Rotation crop; plant after grain seasons</td></tr>
                  <tr><td>Root Vegetables</td><td>Moderate depletion</td><td>Middle tier; good between grains and legumes</td></tr>
                  <tr><td>Hemp / Flax</td><td>Low depletion</td><td>Material crop; safe in outer fields</td></tr>
                  <tr><td>Herbs / Berries</td><td>Minimal depletion</td><td>Perennial; low maintenance</td></tr>
                </tbody>
              </table>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Composting for Fertility Restoration</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Compost is produced at a composting bin from organic waste materials. Applying compost to farm tiles directly restores their fertility value. This allows you to maintain high-productivity soil in irrigated prime zones without needing to leave them fallow.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Build at least one composting bin in your mid-game farm complex. Input materials include food scraps, butchered animal byproducts, fallen leaves, and other organic waste. The output is compost that farmers can apply to crop tiles during non-growing periods.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Fallow Season Management</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Leaving a field zone unplanted for one full season (fallow) allows partial natural fertility recovery. For heavily depleted fields, a fallow + compost application combination restores fertility faster than either method alone.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Build a farm layout large enough that you can rotate one-third of your fields into fallow each year while still producing enough food from the remaining two-thirds. A 15% oversized farm footprint provides enough buffer to maintain this rotation without food shortages.
              </p>
            </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-6">Frequently Asked Questions</h2>

                <div className="aged-border p-5 mb-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                  <h3 className="font-display text-lg font-semibold text-ink mb-2">How do I know when my soil fertility is getting low?</h3>
                  <p className="font-serif text-base text-ink-light leading-relaxed">The game displays a soil fertility indicator when you select a farm tile. Check tiles that are producing noticeably lower yields than adjacent tiles — this usually indicates depleted fertility. Set up a habit of checking your oldest farm tiles each season before the growing period starts.</p>
                </div>
                <div className="aged-border p-5 mb-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                  <h3 className="font-display text-lg font-semibold text-ink mb-2">Does soil fertility recover on its own over winter?</h3>
                  <p className="font-serif text-base text-ink-light leading-relaxed">Yes, but slowly. Unplanted tiles recover a small amount of fertility naturally over a fallow period, including winter. Active composting accelerates this recovery significantly. For critical high-value tiles, apply compost during the fall or winter to ensure full fertility by spring planting.</p>
                </div>
                <div className="aged-border p-5 mb-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                  <h3 className="font-display text-lg font-semibold text-ink mb-2">Is soil fertility the same as soil quality shown on the map?</h3>
                  <p className="font-serif text-base text-ink-light leading-relaxed">No — soil quality (shown at map selection and when placing farm zones) represents the baseline fertility potential of a tile. Higher-quality soil tiles start at higher fertility and deplete more slowly. Soil fertility is the current value, which changes based on usage and management. Always place farms on high-quality soil tiles when possible.</p>
                </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-ink mb-4">Related Guides</h2>
            <div className="space-y-2">
                  <a href="/farming" className="text-accent hover:text-accent-hover underline">Farming</a>
                  <a href="/irrigation-system" className="text-accent hover:text-accent-hover underline">Irrigation System</a>
                  <a href="/seasons" className="text-accent hover:text-accent-hover underline">Seasons</a>
                  <a href="/food-preservation" className="text-accent hover:text-accent-hover underline">Food Preservation</a>

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
      "name": "How do I know when my soil fertility is getting low?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The game displays a soil fertility indicator when you select a farm tile. Check tiles that are producing noticeably lower yields than adjacent tiles — this usually indicates depleted fertility. Set up a habit of checking your oldest farm tiles each season before the growing period starts."
      }
    },
    {
      "@type": "Question",
      "name": "Does soil fertility recover on its own over winter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, but slowly. Unplanted tiles recover a small amount of fertility naturally over a fallow period, including winter. Active composting accelerates this recovery significantly. For critical high-value tiles, apply compost during the fall or winter to ensure full fertility by spring planting."
      }
    },
    {
      "@type": "Question",
      "name": "Is soil fertility the same as soil quality shown on the map?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No — soil quality (shown at map selection and when placing farm zones) represents the baseline fertility potential of a tile. Higher-quality soil tiles start at higher fertility and deplete more slowly. Soil fertility is the current value, which changes based on usage and management. Always place farms on high-quality soil tiles when possible."
      }
    }
            ]
          })
        }}
      />
    </main>
  );
}
