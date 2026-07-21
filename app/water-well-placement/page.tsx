export const metadata = {
  title: "Going Medieval Water Well Placement Guide — Access, Purity & Frozen Sources (2026)",
  description: "Complete Going Medieval water well placement guide. Learn optimal well locations, how to prevent contamination, manage frozen water sources in winter, and plan colony water infrastructure.",
};

const wellTypes = [
  { type: "Basic Well", cost: "Stone x15 and Wood x10", waterOutput: "Low", depth: "Shallow", requirement: "Natural terrain, near water table", notes: "Cheapest option. Sufficient for colonies under 8 settlers." },
  { type: "Deep Well", cost: "Stone x30 and Iron x5", waterOutput: "Medium", depth: "Deep", requirement: "Any terrain type", notes: "Reliable year-round. Does not freeze in winter. Best for mid-game colonies." },
  { type: "Natural Spring", cost: "Free (map-dependent)", waterOutput: "High", depth: "Surface", requirement: "Map must have a spring tile", notes: "Cannot be constructed. If your map has one, build the colony around it." },
  { type: "Rain Collector", cost: "Wood x8 and Cloth x4", waterOutput: "Variable", depth: "Surface", requirement: "Must be placed outdoors", notes: "Fills slowly during rain. Good supplementary source but unreliable as primary." },
];

const placementFactors = [
  { factor: "Distance to Kitchen", ideal: "3 to 5 tiles", reasoning: "Close enough for efficient hauling, far enough to avoid refuse contamination from cooking waste." },
  { factor: "Distance to Refuse Pile", ideal: "15+ tiles", reasoning: "Contamination from refuse can seep into groundwater. This is the leading cause of waterborne disease outbreaks." },
  { factor: "Distance to Crop Fields", ideal: "5 to 10 tiles", reasoning: "Settlers hauling water to crops should not walk through the kitchen or living quarters." },
  { factor: "Terrain Type", ideal: "Natural soil (not paved)", reasoning: "Wells on paved stone have reduced water flow. Build on grassland or dirt for maximum output." },
  { factor: "Elevation", ideal: "Lower than buildings", reasoning: "Water naturally flows downhill. Placing wells at the lowest point of your settlement maximizes the water table access." },
  { factor: "Winter Access", ideal: "Indoor or covered", reasoning: "Exposed wells freeze in heavy snow. Build a small roof structure over the well to prevent freezing." },
];

const waterFaqs = [
  { q: "Do wells freeze in winter?", a: "Basic wells placed outdoors will freeze during heavy snow and blizzards, rendering them unusable. Deep wells do not freeze. You can also build a roof over a basic well to prevent freezing, though this requires additional building materials and planning. Always have a backup water source before the first snow." },
  { q: "How much water does each settler need?", a: "Each settler consumes approximately 2 to 3 units of water per day for drinking alone. Cooking, brewing ale, and farming increase this demand significantly. A colony of 8 settlers with a brewery and active crop irrigation needs roughly 40 to 50 water units per day, which a single Deep Well can supply." },
  { q: "Can water become contaminated?", a: "Yes. Wells placed within 10 tiles of a refuse pile, corpse dump, or latrine area can become contaminated. Contaminated water causes food poisoning when used for cooking or brewing. There is no visual indicator. You must rely on proper placement and distance from contamination sources to prevent it." },
];

const related = [
  { href: "/brewery-guide", label: "Brewery Guide" },
  { href: "/winter-survival", label: "Winter Survival" },
  { href: "/base-layout", label: "Base Layout" },
  { href: "/farming", label: "Farming Fundamentals" },
  { href: "/disease-plague-guide", label: "Disease & Plague Guide" },
  { href: "/food-preservation", label: "Food Preservation" },
];

export default function WaterWellPlacementGuidePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">

      <h1 className="font-display text-3xl lg:text-4xl font-bold text-ink mb-2">
        Water Well <span className="text-vermillion">Placement</span> Guide
      </h1>
      <p className="font-serif text-base text-ink-light leading-relaxed mb-8 max-w-2xl">
        Optimal well locations, contamination prevention, frozen water management, and colony water infrastructure planning. A well-placed water source saves hundreds of hauling hours and prevents winter crises.
      </p>

      {/* Intro */}
      <section className="mb-8">
        <p className="font-serif text-base text-ink-light leading-relaxed drop-cap">
          Water is one of the most overlooked resources in Going Medieval. New players often build a single well near their kitchen and never think about it again, until the first winter freezes it solid or a plague outbreak traces back to contaminated groundwater. Proper well placement is a decision that affects every aspect of colony life, from cooking and brewing to farming and disease prevention. This guide covers water source types, placement factors, winter preparation, and a tested infrastructure layout for mid-game colonies. For related topics, see our <a href="/brewery-guide" className="text-vermillion hover:underline">Brewery Guide</a> and <a href="/base-layout" className="text-vermillion hover:underline">Base Layout</a> guide.
        </p>
      </section>

      {/* Water Source Types Table */}
      <section className="mt-8">
        <h2 className="font-display text-2xl font-semibold text-ink mb-4">Water Source Types</h2>
        <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
          Going Medieval offers several water sources, each with different costs, outputs, and requirements. The right choice depends on your colony size, map terrain, and available resources. Most colonies start with a Basic Well and upgrade to a Deep Well by year two. If your map spawns with a Natural Spring, consider yourself lucky and build your settlement around it, as it provides the highest water output at no construction cost.
        </p>
        <div className="overflow-x-auto">
          <table className="parchment-table w-full">
            <thead>
              <tr>
                <th className="px-4 py-3 text-left font-display text-lg text-ink">Type</th>
                <th className="px-4 py-3 text-left font-display text-lg text-ink">Cost</th>
                <th className="px-4 py-3 text-left font-display text-lg text-ink">Output</th>
                <th className="px-4 py-3 text-left font-display text-lg text-ink">Depth</th>
                <th className="px-4 py-3 text-left font-display text-lg text-ink">Requirement</th>
                <th className="px-4 py-3 text-left font-display text-lg text-ink">Notes</th>
              </tr>
            </thead>
            <tbody>
              {wellTypes.map((w) => (
                <tr key={w.type}>
                  <td className="px-4 py-3 font-serif text-base text-ink-light font-semibold">{w.type}</td>
                  <td className="px-4 py-3 font-serif text-base text-ink-light">{w.cost}</td>
                  <td className="px-4 py-3 font-serif text-base text-ink-light">{w.waterOutput}</td>
                  <td className="px-4 py-3 font-serif text-base text-ink-light">{w.depth}</td>
                  <td className="px-4 py-3 font-serif text-base text-ink-light">{w.requirement}</td>
                  <td className="px-4 py-3 font-serif text-base text-ink-light">{w.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Placement Factors Table */}
      <section className="mt-8">
        <h2 className="font-display text-2xl font-semibold text-ink mb-4">Placement Factors: Where to Build Your Well</h2>
        <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
          Well placement is one of the few decisions in Going Medieval that cannot be easily undone. Moving a well means demolishing it, losing all materials, and rebuilding from scratch. Before placing your first well, consider these six factors carefully. The most critical factor is distance from the refuse pile. Groundwater contamination flows downhill and through soil, so a well placed too close to waste will silently poison your colony through contaminated cooking water.
        </p>
        <div className="overflow-x-auto">
          <table className="parchment-table w-full">
            <thead>
              <tr>
                <th className="px-4 py-3 text-left font-display text-lg text-ink">Factor</th>
                <th className="px-4 py-3 text-left font-display text-lg text-ink">Ideal</th>
                <th className="px-4 py-3 text-left font-display text-lg text-ink">Reasoning</th>
              </tr>
            </thead>
            <tbody>
              {placementFactors.map((p) => (
                <tr key={p.factor}>
                  <td className="px-4 py-3 font-serif text-base text-ink-light font-semibold">{p.factor}</td>
                  <td className="px-4 py-3 font-serif text-base text-ink-light">{p.ideal}</td>
                  <td className="px-4 py-3 font-serif text-base text-ink-light">{p.reasoning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Winter Water Crisis */}
      <section className="mt-8">
        <h2 className="font-display text-2xl font-semibold text-ink mb-4">Winter Water Crisis: Planning Ahead</h2>
        <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
          The most common water-related disaster in Going Medieval is a winter freeze. When your only well freezes solid, settlers cannot drink, cannot cook, and cannot brew ale. This leads to rapid mood collapse and potential death from dehydration. Every colony should have a winter water plan before the first snowfall. There are three viable options, and you should implement at least two of them for redundancy.
        </p>
        <div className="space-y-3">
          <div className="aged-border p-4 rounded">
            <h3 className="font-display text-lg font-semibold text-accent mb-1">Option A: Build a Deep Well (Recommended)</h3>
            <p className="font-serif text-base text-ink-light leading-relaxed">Deep Wells tap into groundwater below the frost line and never freeze. The stone and iron cost is higher, but the reliability is worth it. Build one before your first winter. If you do not have iron yet, smelt 5 iron bars. The investment pays for itself in one winter.</p>
          </div>
          <div className="aged-border p-4 rounded">
            <h3 className="font-display text-lg font-semibold text-accent mb-1">Option B: Roof Over a Basic Well</h3>
            <p className="font-serif text-base text-ink-light leading-relaxed">A roof structure over a Basic Well prevents freezing in all but the most extreme blizzards. Build walls and a roof around the well tile. This costs additional wood and stone but is cheaper than a Deep Well if iron is scarce.</p>
          </div>
          <div className="aged-border p-4 rounded">
            <h3 className="font-display text-lg font-semibold text-accent mb-1">Option C: Stockpile Water Before Winter</h3>
            <p className="font-serif text-base text-ink-light leading-relaxed">Fill 20 or more waterskins or barrels before the first snow. This is a temporary solution. Stockpiled water runs out in 5 to 7 days for a colony of 8. Use this only as a backup while you construct a more permanent solution.</p>
          </div>
        </div>
      </section>

      {/* Water Infrastructure Layout */}
      <section className="mt-8">
        <h2 className="font-display text-2xl font-semibold text-ink mb-4">Water Infrastructure Layout</h2>
        <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
          For a colony of 10 or more settlers, a single water source is rarely enough. The ideal layout places the primary well near the kitchen and brewery, with a secondary source near the crop fields. Here is a tested layout for a mid-game colony of 12 settlers with a brewery and 3 crop fields. This layout minimizes hauling distance for the highest water consumers while keeping contamination risks near zero.
        </p>
        <ul className="space-y-2 font-serif text-base text-ink-light leading-relaxed list-disc pl-6">
          <li><strong className="text-ink">Primary Well (Deep):</strong> 3 tiles from the kitchen, 5 tiles from the brewery. This minimizes hauling distance for the two highest water consumers.</li>
          <li><strong className="text-ink">Secondary Well (Basic):</strong> Near the crop fields, 5 tiles from the nearest field edge. Used for irrigation only.</li>
          <li><strong className="text-ink">Rain Collector:</strong> Placed on the roof of the main building. Feeds directly into a barrel stockpile inside the kitchen. Supplementary source during summer rains.</li>
          <li><strong className="text-ink">Refuse Pile:</strong> 15 tiles downwind from the nearest well. Never uphill from a well, as groundwater contamination flows downhill.</li>
          <li><strong className="text-ink">Brewery:</strong> Between the well and the kitchen. Ale production is the second-largest water consumer after cooking. A brewery placed 5 tiles from the well reduces hauling trips significantly.</li>
        </ul>
      </section>

      {/* FAQ */}
      <section className="mt-12">
        <h2 className="font-display text-2xl font-semibold text-ink mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {waterFaqs.map((faq) => (
            <div key={faq.q}>
              <h3 className="font-display text-xl font-semibold text-ink mb-2">{faq.q}</h3>
              <p className="font-serif text-base text-ink-light leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Related Guides */}
      <section className="mt-12 p-6 aged-border rounded">
        <h2 className="font-display text-2xl font-semibold text-ink mb-4">Related Guides</h2>
        <ul className="list-disc list-inside font-serif text-base text-ink-light leading-relaxed space-y-2">
          {related.map((r) => (
            <li key={r.href}>
              <a href={r.href} className="text-vermillion hover:underline">{r.label}</a>
            </li>
          ))}
        </ul>
      </section>

      {/* Last Updated */}
      <p className="font-serif text-sm text-ink-muted mt-8">
        Last updated: July 12, 2026
      </p>

    </main>
  );
}
