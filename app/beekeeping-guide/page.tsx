import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Going Medieval Beekeeping Guide — Honey & Wax Production (2026)",
  description: "Complete Going Medieval beekeeping guide. Learn skep placement, honey production rates, wax crafting, seasonal management, and how to maximize bee output for food and trade.",
};

export default function BeekeepingGuide() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-extrabold font-heading mb-2 text-parchment-light">
        Beekeeping <span className="text-amber-400">Guide</span>
      </h1>
      <p className="text-parchment-muted mb-8 max-w-2xl">
        How to set up and manage beehives for honey and wax production — one of the most profitable and sustainable food sources in Going Medieval.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold font-heading mb-4 text-parchment-light">Why Beekeeping?</h2>
        <p className="text-parchment-muted leading-relaxed mb-3">
          Beekeeping is one of the <strong className="text-parchment-light">most overlooked food sources</strong> in Going Medieval. Skeps (traditional beehives) produce both <strong className="text-amber-400">honey</strong> (a long-lasting food that never spoils) and <strong className="text-amber-400">beeswax</strong> (used for candles and high-value trade goods). Unlike crops, skeps require no soil fertility, no watering, no seasonal replanting, and minimal settler labor — just an initial setup and periodic harvesting.
        </p>
        <p className="text-parchment-muted leading-relaxed">
          A single skep produces roughly 8-12 honey per season with optimal placement. At 5 skeps, that is 40-60 honey per season — enough to feed a settler for an entire winter without touching your grain reserves. Honey also provides a mood bonus when eaten, making it doubly valuable.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold font-heading mb-4 text-parchment-light">Skep Placement Requirements</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border border-parchment-border text-sm">
            <thead className="bg-parchment-card">
              <tr>
                <th className="p-3 border border-parchment-border text-amber-400">Requirement</th>
                <th className="p-3 border border-parchment-border text-amber-400">Ideal</th>
                <th className="p-3 border border-parchment-border text-amber-400">Minimum</th>
                <th className="p-3 border border-parchment-border text-amber-400">Penalty if Below</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-3 border border-parchment-border text-parchment-light">Temperature</td><td className="p-3 border border-parchment-border text-parchment-muted">15-25°C</td><td className="p-3 border border-parchment-border text-parchment-muted">5°C</td><td className="p-3 border border-parchment-border text-parchment-muted">Production drops 50% below 5°C, stops at 0°C</td></tr>
              <tr><td className="p-3 border border-parchment-border text-parchment-light">Sunlight</td><td className="p-3 border border-parchment-border text-parchment-muted">Full sun (6+ hrs)</td><td className="p-3 border border-parchment-border text-parchment-muted">Partial shade</td><td className="p-3 border border-parchment-border text-parchment-muted">-30% production in heavy shade</td></tr>
              <tr><td className="p-3 border border-parchment-border text-parchment-light">Flowers Nearby</td><td className="p-3 border border-parchment-border text-amber-400">Within 10 tiles</td><td className="p-3 border border-parchment-border text-parchment-muted">Within 20 tiles</td><td className="p-3 border border-parchment-border text-parchment-muted">-40% production without flowers</td></tr>
              <tr><td className="p-3 border border-parchment-border text-parchment-light">Roof</td><td className="p-3 border border-parchment-border text-parchment-muted">No roof (outdoor)</td><td className="p-3 border border-parchment-border text-parchment-muted">Outdoor only</td><td className="p-3 border border-parchment-border text-parchment-muted">Cannot function indoors</td></tr>
              <tr><td className="p-3 border border-parchment-border text-parchment-light">Protection</td><td className="p-3 border border-parchment-border text-parchment-muted">Walled garden</td><td className="p-3 border border-parchment-border text-parchment-muted">Fenced area</td><td className="p-3 border border-parchment-border text-parchment-muted">Animals may destroy unsecured skeps</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold font-heading mb-4 text-parchment-light">Production & Harvest Rates</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border border-parchment-border text-sm">
            <thead className="bg-parchment-card">
              <tr>
                <th className="p-3 border border-parchment-border text-amber-400">Product</th>
                <th className="p-3 border border-parchment-border text-amber-400">Harvest Cycle</th>
                <th className="p-3 border border-parchment-border text-amber-400">Yield per Skep</th>
                <th className="p-3 border border-parchment-border text-amber-400">Uses</th>
                <th className="p-3 border border-parchment-border text-amber-400">Storage</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-3 border border-parchment-border text-parchment-light font-semibold">Honey</td><td className="p-3 border border-parchment-border text-parchment-muted">Every 8-12 days</td><td className="p-3 border border-parchment-border text-parchment-muted">8-12 units</td><td className="p-3 border border-parchment-border text-parchment-muted">Food (never spoils), brewing (mead), cooking recipes</td><td className="p-3 border border-parchment-border text-parchment-muted">Stockpile (indefinite shelf life)</td></tr>
              <tr><td className="p-3 border border-parchment-border text-parchment-light font-semibold">Beeswax</td><td className="p-3 border border-parchment-border text-parchment-muted">Same as honey</td><td className="p-3 border border-parchment-border text-parchment-muted">3-5 units</td><td className="p-3 border border-parchment-border text-parchment-muted">Candles (lighting), trade good, sealing</td><td className="p-3 border border-parchment-border text-parchment-muted">Stockpile</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold font-heading mb-4 text-parchment-light">Optimal Skep Layout</h2>
        <p className="text-parchment-muted leading-relaxed mb-3">
          Build a <strong className="text-parchment-light">3x3 flower garden</strong> with skeps placed on the outer edge, leaving the center for flowers. Each skep should have at least 2 flower tiles within 10 tiles. The best flowers to plant are <strong className="text-amber-400">redcurrant bushes</strong> (they count as flowers AND produce food) and <strong className="text-amber-400">dandelions</strong> (grow wild, no maintenance).
        </p>
        <p className="text-parchment-muted leading-relaxed">
          Surround the skep garden with a <strong className="text-parchment-light">low fence or wall</strong> to prevent wild animals and raiders from destroying skeps. Raiders will prioritize burning skeps if they are unguarded — a stone wall with a door is sufficient protection. Place the beekeeping area near your kitchen for efficient honey-to-meal conversion.
        </p>
      </section>

      <section className="mt-10 border-t border-parchment-border pt-6">
        <h3 className="text-lg font-heading font-semibold mb-3 text-parchment-light">Related Guides</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
          <a href="/farming" className="text-amber-600 hover:underline">Farming Fundamentals →</a>
          <a href="/food-preservation" className="text-amber-600 hover:underline">Food Preservation →</a>
          <a href="/brewery-guide" className="text-amber-600 hover:underline">Brewery & Mead Guide →</a>
          <a href="/best-crops-tier-list" className="text-amber-600 hover:underline">Best Crops Tier List →</a>
          <a href="/winter-survival" className="text-amber-600 hover:underline">Winter Survival →</a>
        </div>
      </section>
    </div>
  );
}
