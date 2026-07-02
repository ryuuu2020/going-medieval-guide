import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Going Medieval Clothing Insulation Guide — Temperature Survival (2026)",
  description: "Master Going Medieval clothing insulation. Learn how clothing layers protect against cold and heat, best materials per season, and how to dress settlers for extreme temperatures.",
  keywords: ["Going Medieval clothing guide", "insulation", "winter clothing", "summer clothing", "temperature survival"],
};

export default function ClothingInsulationGuide() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-extrabold font-heading mb-2 text-parchment-light">
        Clothing <span className="text-blue-400">Insulation</span> Guide
      </h1>
      <p className="text-parchment-muted mb-8 max-w-2xl">
        How clothing layers protect against cold and heat, which materials work best per season, and how to dress settlers for extreme temperatures.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold font-heading mb-4 text-parchment-light">How Clothing Insulation Works</h2>
        <p className="text-parchment-muted leading-relaxed mb-3">
          Each clothing item in Going Medieval has a <strong className="text-parchment-light">thermal insulation value</strong> that modifies the effective temperature a settler experiences. A settler in a -10°C winter with clothing providing +8°C insulation experiences an effective temperature of -2°C — cold but not freezing. The insulation value <strong className="text-parchment-light">stacks across clothing slots</strong>: head, torso (inner + outer), legs, and feet each contribute independently. A full winter outfit can provide +20°C or more of combined insulation.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold font-heading mb-4 text-parchment-light">Clothing Material Insulation Values</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border border-parchment-border text-sm">
            <thead className="bg-parchment-card">
              <tr>
                <th className="p-3 border border-parchment-border text-blue-400">Material</th>
                <th className="p-3 border border-parchment-border text-blue-400">Cold Insulation</th>
                <th className="p-3 border border-parchment-border text-blue-400">Heat Insulation</th>
                <th className="p-3 border border-parchment-border text-blue-400">Best Season</th>
                <th className="p-3 border border-parchment-border text-blue-400">Source</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-3 border border-parchment-border text-parchment-light">Linen</td><td className="p-3 border border-parchment-border text-parchment-muted">+2°C</td><td className="p-3 border border-parchment-border text-parchment-muted">+4°C</td><td className="p-3 border border-parchment-border text-amber-400">Summer</td><td className="p-3 border border-parchment-border text-parchment-muted">Flax farming</td></tr>
              <tr><td className="p-3 border border-parchment-border text-parchment-light">Wool</td><td className="p-3 border border-parchment-border text-blue-400">+8°C</td><td className="p-3 border border-parchment-border text-red-400">-3°C</td><td className="p-3 border border-parchment-border text-blue-400">Winter</td><td className="p-3 border border-parchment-border text-parchment-muted">Sheep shearing</td></tr>
              <tr><td className="p-3 border border-parchment-border text-parchment-light">Leather</td><td className="p-3 border border-parchment-border text-parchment-muted">+5°C</td><td className="p-3 border border-parchment-border text-parchment-muted">0°C</td><td className="p-3 border border-parchment-border text-parchment-muted">All-year</td><td className="p-3 border border-parchment-border text-parchment-muted">Animal hunting</td></tr>
              <tr><td className="p-3 border border-parchment-border text-parchment-light">Heavy Fur</td><td className="p-3 border border-parchment-border text-blue-400">+12°C</td><td className="p-3 border border-parchment-border text-red-400">-6°C</td><td className="p-3 border border-parchment-border text-blue-400">Deep Winter</td><td className="p-3 border border-parchment-border text-parchment-muted">Bear/wolf hunting</td></tr>
              <tr><td className="p-3 border border-parchment-border text-parchment-light">Cotton</td><td className="p-3 border border-parchment-border text-parchment-muted">+3°C</td><td className="p-3 border border-parchment-border text-parchment-muted">+3°C</td><td className="p-3 border border-parchment-border text-parchment-muted">Spring/Autumn</td><td className="p-3 border border-parchment-border text-parchment-muted">Cotton farming</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold font-heading mb-4 text-parchment-light">Seasonal Outfit Recommendations</h2>
        <div className="space-y-4">
          <div className="border border-parchment-border bg-parchment-card p-5">
            <h3 className="text-lg font-heading font-semibold mb-2 text-blue-400">Winter Survival Outfit (+18-22°C total)</h3>
            <p className="text-parchment-muted text-sm">
              Head: Heavy Fur Hood (+5) → Torso outer: Heavy Fur Tunic (+7) → Torso inner: Wool Shirt (+4) → Legs: Wool Trousers (+4) → Feet: Fur Boots (+3). This combination lets settlers work comfortably at -15°C. Prioritize heavy fur for outdoor workers — hunters, builders, and defenders on wall duty. Indoor workers (cooks, crafters) can use a lighter wool-only outfit if the room is heated.
            </p>
          </div>
          <div className="border border-parchment-border bg-parchment-card p-5">
            <h3 className="text-lg font-heading font-semibold mb-2 text-amber-400">Summer Work Outfit (+4-6°C heat protection)</h3>
            <p className="text-parchment-muted text-sm">
              Head: Linen Cap (+2) → Torso: Linen Shirt (+3) → Legs: Linen Trousers (+2) → Feet: Leather Sandals (+1). Linen gives positive heat insulation — it helps settlers stay cool in hot weather. During heat waves above 30°C, switch all outdoor workers to full linen. Heavy clothing in summer is worse than no clothing — a settler in fur gear during a heat wave suffers heatstroke within hours.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold font-heading mb-4 text-parchment-light">Key Strategy Tips</h2>
        <ul className="space-y-2 text-parchment-muted">
          <li><strong className="text-parchment-light">Keep seasonal wardrobes:</strong> Craft and store complete summer and winter outfits for every settler. Swap them at the start of each season.</li>
          <li><strong className="text-parchment-light">Prioritize outdoor workers:</strong> A cook in a heated kitchen does not need heavy fur. Your hunter who spends all day outside does.</li>
          <li><strong className="text-parchment-light">Heavy Fur is worth the hunt:</strong> The +12°C cold insulation from Heavy Fur is unmatched. Hunt bears in autumn when their fur is thickest.</li>
          <li><strong className="text-parchment-light">Quality matters:</strong> A Good-quality Wool Tunic provides ~15% more insulation than a Normal-quality one. Assign your best Tailor to winter gear.</li>
        </ul>
      </section>

      <section className="mt-10 border-t border-parchment-border pt-6">
        <h3 className="text-lg font-heading font-semibold mb-3 text-parchment-light">Related Guides</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
          <a href="/temperature-control" className="text-amber-600 hover:underline">Temperature Control →</a>
          <a href="/winter-survival" className="text-amber-600 hover:underline">Winter Survival →</a>
          <a href="/armor-layering-guide" className="text-amber-600 hover:underline">Armor Layering →</a>
          <a href="/tailor-guide" className="text-amber-600 hover:underline">Tailor Guide →</a>
          <a href="/hunting-strategy" className="text-amber-600 hover:underline">Hunting Strategy →</a>
        </div>
      </section>
    </div>
  );
}
