export const metadata = {
  title: "Going Medieval Stockpile Optimization — Storage Layout Guide (2026)",
  description: "Optimize stockpiles in Going Medieval. Zone placement, category filtering, haul distance reduction, and efficient storage room design for maximum colony productivity.",
};

export default function StockpileOptimizationPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-10">
          <section>
            <h1 className="chapter-heading">Going Medieval Stockpile Optimization — Complete Storage Guide</h1>
            <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
              Inefficient stockpile management is one of the most common sources of productivity loss in Going Medieval. When settlers spend excessive time hauling goods across the map, they have less time for skilled work like crafting, building, farming, and research. Every haul task is a time cost. Optimizing your stockpile layout — placing storage zones close to where materials are consumed, using stockpile filtering to prevent category mixing, and designing efficient pathways between production and storage areas — can dramatically increase your colony's effective output without adding a single new settler. This guide covers zone placement principles, category filtering strategy, haul distance optimization, and practical storage room layouts.
            </p>
          </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Haul Distance — The Core Problem</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Every item in Going Medieval needs to be hauled from where it is produced or gathered to where it is consumed or stored. A settler hauling logs from a distant forest to a stockpile on the other side of the base is not farming, crafting, researching, or building during that time. The cumulative haul time across your entire colony represents a significant fraction of total labor hours.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                The solution is co-location: place stockpiles as close as possible to the production and consumption points they serve. A wood stockpile immediately adjacent to the woodworking workshop eliminates the long haul from the stockpile to the bench. A food stockpile directly connected to the kitchen cuts meal preparation time.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Stockpile Category Filtering</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Use stockpile zone filters to prevent category mixing. By default, stockpile zones accept all item types. Without filtering, your food stockpile may fill up with building materials, your lumber yard may contain metal ingots, and your kitchen supply zone may hold clothing. This mixing forces settlers to search further for the items they need.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Set each stockpile zone to accept only the specific categories it serves. Recommended dedicated zones:
              </p>
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Zone Name</th>
                    <th>Accept Categories</th>
                    <th>Location</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Food Storage</td><td>Food only</td><td>Adjacent to kitchen + root cellar</td></tr>
                  <tr><td>Lumber Yard</td><td>Logs, planks only</td><td>Near woodcutting zone + carpenter bench</td></tr>
                  <tr><td>Stone Yard</td><td>Stone, clay only</td><td>Near quarry + mason bench</td></tr>
                  <tr><td>Metal Stores</td><td>Ore, ingots, metal goods only</td><td>Near smelter + blacksmith bench</td></tr>
                  <tr><td>Clothing/Gear</td><td>Clothing, armor, weapons only</td><td>Near tailor/armorer + settler access</td></tr>
                  <tr><td>Medicine</td><td>Medical supplies only</td><td>Near hospital/treatment area</td></tr>
                </tbody>
              </table>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Production Cluster Layout</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Organize your base into production clusters — groups of related workshops, stockpiles, and work zones positioned together to minimize haul distances within each production chain. A well-organized base has distinct clusters for food production, material processing, crafting, and defense storage.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Example food cluster: farm fields → food stockpile → kitchen → prepared meal storage → dining hall. Each step in the chain is physically adjacent to the next, so food moves from field to table with minimal total haul distance.
              </p>
            </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-6">Frequently Asked Questions</h2>

                <div className="aged-border p-5 mb-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                  <h3 className="font-display text-lg font-semibold text-ink mb-2">How many stockpile zones should I have?</h3>
                  <p className="font-serif text-base text-ink-light leading-relaxed">Plan for 6-8 dedicated category zones in a mid-game base. More zones increase filtering precision but also add management complexity. The most important zones to separate early are: food, lumber, stone, and metal. Additional categories can be split out as your colony grows.</p>
                </div>
                <div className="aged-border p-5 mb-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                  <h3 className="font-display text-lg font-semibold text-ink mb-2">Does stockpile zone size matter?</h3>
                  <p className="font-serif text-base text-ink-light leading-relaxed">Yes — larger zones hold more items before becoming full, reducing the frequency of haul overflow. However, oversized zones spread items across a large area, increasing the average haul distance to retrieve items within the zone. Optimal zone size is large enough to hold a full season's production of the relevant category without being so large that items are spread across half your base.</p>
                </div>
                <div className="aged-border p-5 mb-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                  <h3 className="font-display text-lg font-semibold text-ink mb-2">Can I set a zone to output items to specific workshops automatically?</h3>
                  <p className="font-serif text-base text-ink-light leading-relaxed">Settlers automatically haul items to the nearest available stockpile that accepts the item category. You cannot set direct item routing between zones. The closest-available-zone routing means that co-location of production and storage achieves the same practical result as explicit routing — the settler naturally hauls to the adjacent stockpile rather than a distant one.</p>
                </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-ink mb-4">Related Guides</h2>
            <div className="space-y-2">
                  <a href="/buildings" className="text-accent hover:text-accent-hover underline">Buildings</a>
                  <a href="/storage-guide" className="text-accent hover:text-accent-hover underline">Storage Guide</a>
                  <a href="/workshop-efficiency" className="text-accent hover:text-accent-hover underline">Workshop Efficiency</a>
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
      "name": "How many stockpile zones should I have?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Plan for 6-8 dedicated category zones in a mid-game base. More zones increase filtering precision but also add management complexity. The most important zones to separate early are: food, lumber, stone, and metal. Additional categories can be split out as your colony grows."
      }
    },
    {
      "@type": "Question",
      "name": "Does stockpile zone size matter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — larger zones hold more items before becoming full, reducing the frequency of haul overflow. However, oversized zones spread items across a large area, increasing the average haul distance to retrieve items within the zone. Optimal zone size is large enough to hold a full season's production of the relevant category without being so large that items are spread across half your base."
      }
    },
    {
      "@type": "Question",
      "name": "Can I set a zone to output items to specific workshops automatically?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Settlers automatically haul items to the nearest available stockpile that accepts the item category. You cannot set direct item routing between zones. The closest-available-zone routing means that co-location of production and storage achieves the same practical result as explicit routing — the settler naturally hauls to the adjacent stockpile rather than a distant one."
      }
    }
            ]
          })
        }}
      />
    </main>
  );
}
