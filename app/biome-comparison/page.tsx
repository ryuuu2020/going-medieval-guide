import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Going Medieval Biome Comparison — Best Starting Map (2026)",
  description: "Compare all Going Medieval biomes — Mountain, Valley, Hill, and Forest. Find the best starting map for defense, farming, resources, and long-term colony survival.",
  keywords: ["Going Medieval biome guide", "best starting map", "mountain vs valley", "biome comparison", "starting location"],
};

export default function BiomeComparison() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-extrabold font-heading mb-2 text-parchment-light">
        Biome <span className="text-amber-600">Comparison</span>
      </h1>
      <p className="text-parchment-muted mb-8 max-w-2xl">
        Which biome should you choose? Compare Mountain, Valley, Hill, and Forest starting locations across defense, farming, resources, and difficulty.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold font-heading mb-4 text-parchment-light">Biome Overview</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border border-parchment-border text-sm">
            <thead className="bg-parchment-card">
              <tr>
                <th className="p-3 border border-parchment-border text-amber-600">Biome</th>
                <th className="p-3 border border-parchment-border text-amber-600">Terrain</th>
                <th className="p-3 border border-parchment-border text-amber-600">Soil Quality</th>
                <th className="p-3 border border-parchment-border text-amber-600">Stone Access</th>
                <th className="p-3 border border-parchment-border text-amber-600">Natural Defense</th>
                <th className="p-3 border border-parchment-border text-amber-600">Difficulty</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-3 border border-parchment-border text-parchment-light">Mountain</td><td className="p-3 border border-parchment-border text-parchment-muted">Steep elevation, cliffs, narrow passes</td><td className="p-3 border border-parchment-border text-red-400">Poor</td><td className="p-3 border border-parchment-border text-green-400">Abundant</td><td className="p-3 border border-parchment-border text-green-400">Excellent</td><td className="p-3 border border-parchment-border text-red-400">Hard</td></tr>
              <tr><td className="p-3 border border-parchment-border text-parchment-light">Valley</td><td className="p-3 border border-parchment-border text-parchment-muted">Flat fertile land, surrounded by hills</td><td className="p-3 border border-parchment-border text-green-400">Excellent</td><td className="p-3 border border-parchment-border text-amber-400">Moderate</td><td className="p-3 border border-parchment-border text-red-400">Poor</td><td className="p-3 border border-parchment-border text-green-400">Easy</td></tr>
              <tr><td className="p-3 border border-parchment-border text-parchment-light">Hill</td><td className="p-3 border border-parchment-border text-parchment-muted">Rolling terrain, mixed elevation</td><td className="p-3 border border-parchment-border text-amber-400">Moderate</td><td className="p-3 border border-parchment-border text-amber-400">Moderate</td><td className="p-3 border border-parchment-border text-amber-400">Moderate</td><td className="p-3 border border-parchment-border text-amber-400">Medium</td></tr>
              <tr><td className="p-3 border border-parchment-border text-parchment-light">Forest</td><td className="p-3 border border-parchment-border text-parchment-muted">Dense trees, clearings, variable terrain</td><td className="p-3 border border-parchment-border text-green-400">Good</td><td className="p-3 border border-parchment-border text-red-400">Scarce</td><td className="p-3 border border-parchment-border text-amber-400">Moderate</td><td className="p-3 border border-parchment-border text-amber-400">Medium</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold font-heading mb-4 text-parchment-light">Mountain — Best for Defense, Worst for Farming</h2>
        <p className="text-parchment-muted leading-relaxed mb-3">
          Mountain maps offer <strong className="text-parchment-light">the strongest natural defense</strong> in the game. Narrow passes funnel raiders into predictable chokepoints. Steep cliffs limit enemy approach angles to 1-2 directions. You can build directly into cliff faces for near-impenetrable bases. The downside: soil is scarce and poor quality. You will depend heavily on hunting, animal husbandry, and trade caravans for food. <strong className="text-amber-600">Pick Mountain if:</strong> you want to focus on defense and mining, and are comfortable managing food scarcity.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold font-heading mb-4 text-parchment-light">Valley — Best for Farming, Worst for Defense</h2>
        <p className="text-parchment-muted leading-relaxed mb-3">
          Valley is the <strong className="text-parchment-light">easiest biome for beginners</strong>. Rich soil covers most of the map — you can farm anywhere. Flat terrain makes base layout simple. The downside: zero natural defenses. Raiders approach from all directions. You must build walls early and invest heavily in fortifications. <strong className="text-green-600">Pick Valley if:</strong> you are new to the game, want easy food security, and are willing to invest the extra labor in wall-building.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold font-heading mb-4 text-parchment-light">Hill — The Balanced Choice</h2>
        <p className="text-parchment-muted leading-relaxed mb-3">
          Hills offer <strong className="text-parchment-light">the best balance</strong> of all resources. Enough flat land for moderate farming, enough stone for construction, and enough elevation for defensive positions. Hills are the most versatile biome — you can pivot between farming-heavy and mining-heavy strategies as your colony evolves. <strong className="text-amber-600">Pick Hill if:</strong> you want flexibility and do not want to be locked into one playstyle by your biome choice.
        </p>
      </section>

      <section className="mt-10 border-t border-parchment-border pt-6">
        <h3 className="text-lg font-heading font-semibold mb-3 text-parchment-light">Related Guides</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
          <a href="/best-seed-map" className="text-amber-600 hover:underline">Best Seed Maps →</a>
          <a href="/defense" className="text-amber-600 hover:underline">Defense Strategy →</a>
          <a href="/farming" className="text-amber-600 hover:underline">Farming Guide →</a>
          <a href="/soil-fertility" className="text-amber-600 hover:underline">Soil Fertility →</a>
          <a href="/beginners" className="text-amber-600 hover:underline">Beginner&apos;s Guide →</a>
        </div>
      </section>
    </div>
  );
}
