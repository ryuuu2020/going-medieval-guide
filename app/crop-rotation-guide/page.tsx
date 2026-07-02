import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Going Medieval Crop Rotation Guide — Year-Round Food Strategy (2026)",
  description: "Master Going Medieval crop rotation with our seasonal planting calendar. Maximize food yield, prevent soil depletion, and survive every winter with optimized crop rotation strategies.",
  keywords: ["Going Medieval crop rotation", "farming calendar", "seasonal planting", "best crops per season", "Going Medieval food strategy"],
  openGraph: {
    title: "Going Medieval Crop Rotation Guide — Year-Round Food Strategy",
    description: "Seasonal crop rotation calendar for Going Medieval. Plant the right crops at the right time for maximum food production.",
  },
};

export default function CropRotationGuide() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-extrabold font-heading mb-2 text-parchment-light">
        Crop <span className="text-green-600">Rotation</span> Guide
      </h1>
      <p className="text-parchment-muted mb-8 max-w-2xl">
        A seasonal planting calendar to maximize food yield, prevent soil depletion, and keep your colony fed through every winter.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold font-heading mb-4 text-parchment-light">Why Crop Rotation Matters</h2>
        <p className="text-parchment-muted leading-relaxed mb-3">
          In Going Medieval, <strong className="text-parchment-light">soil fertility degrades</strong> when the same crop is planted repeatedly in the same tile. Each harvest reduces fertility by a small percentage, and once fertility drops below a crop&apos;s minimum threshold, that crop will no longer grow there. Rotating between different crop types — especially alternating between <strong className="text-green-600">heavy feeders</strong> (cabbage, beet, barley) and <strong className="text-green-600">light feeders</strong> (herbs, flax, redcurrant) — lets soil recover naturally.
        </p>
        <p className="text-parchment-muted leading-relaxed">
          Without rotation, you will notice declining yields starting around year two. By year three, entire fields may become barren. A good rotation schedule maintains <strong className="text-parchment-light">80-90% of optimal fertility</strong> indefinitely.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold font-heading mb-4 text-parchment-light">Seasonal Planting Calendar</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border border-parchment-border text-sm">
            <thead className="bg-parchment-card">
              <tr>
                <th className="p-3 border border-parchment-border text-green-600">Season</th>
                <th className="p-3 border border-parchment-border text-green-600">Best Crops</th>
                <th className="p-3 border border-parchment-border text-green-600">Days to Harvest</th>
                <th className="p-3 border border-parchment-border text-green-600">Yield per Tile</th>
                <th className="p-3 border border-parchment-border text-green-600">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-parchment-elevated">
                <td className="p-3 border border-parchment-border text-parchment-light font-semibold">Spring 🌱</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">Cabbage, Beet, Barley</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">5-8 days</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">High</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">Start with cabbage — fastest growth, highest early yield. Follow with beet for variety. Plant barley last for brewing stock.</td>
              </tr>
              <tr className="hover:bg-parchment-elevated">
                <td className="p-3 border border-parchment-border text-parchment-light font-semibold">Summer ☀️</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">Carrot, Herbs, Flax</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">4-7 days</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">Medium</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">Summer is your recovery season. Plant light feeders (herbs, flax) on fields that grew heavy feeders in spring. Carrots grow fast in heat.</td>
              </tr>
              <tr className="hover:bg-parchment-elevated">
                <td className="p-3 border border-parchment-border text-parchment-light font-semibold">Autumn 🍂</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">Redcurrant, Beet, Barley</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">6-10 days</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">Medium-High</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">Critical season — this is your last chance to stockpile before winter. Redcurrant stores well and provides food variety. Harvest everything by day 3 of autumn.</td>
              </tr>
              <tr className="hover:bg-parchment-elevated">
                <td className="p-3 border border-parchment-border text-parchment-light font-semibold">Winter ❄️</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">Nothing grows outdoors</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">—</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">0</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">Fields freeze. Rely entirely on stored food. Research underground growing for winter production.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold font-heading mb-4 text-parchment-light">The 3-Field Rotation System</h2>
        <p className="text-parchment-muted leading-relaxed mb-3">
          Divide your farmland into <strong className="text-parchment-light">three equal zones</strong> and rotate annually:
        </p>

        <div className="overflow-x-auto mb-4">
          <table className="w-full text-left border border-parchment-border text-sm">
            <thead className="bg-parchment-card">
              <tr>
                <th className="p-3 border border-parchment-border text-green-600">Year</th>
                <th className="p-3 border border-parchment-border text-green-600">Field A</th>
                <th className="p-3 border border-parchment-border text-green-600">Field B</th>
                <th className="p-3 border border-parchment-border text-green-600">Field C</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-parchment-elevated">
                <td className="p-3 border border-parchment-border text-parchment-light font-semibold">Year 1</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">Heavy Feeders (Cabbage/Beet)</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">Medium Feeders (Barley/Carrot)</td>
                <td className="p-3 border border-parchment-border text-green-600">Fallow (Recovery)</td>
              </tr>
              <tr className="hover:bg-parchment-elevated">
                <td className="p-3 border border-parchment-border text-parchment-light font-semibold">Year 2</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">Medium Feeders (Barley/Carrot)</td>
                <td className="p-3 border border-parchment-border text-green-600">Fallow (Recovery)</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">Heavy Feeders (Cabbage/Beet)</td>
              </tr>
              <tr className="hover:bg-parchment-elevated">
                <td className="p-3 border border-parchment-border text-parchment-light font-semibold">Year 3</td>
                <td className="p-3 border border-parchment-border text-green-600">Fallow (Recovery)</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">Heavy Feeders (Cabbage/Beet)</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">Medium Feeders (Barley/Carrot)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-parchment-muted leading-relaxed">
          A fallow field does not mean unused — plant <strong className="text-parchment-light">herbs or flax</strong> on fallow fields. These light feeders pull minimal nutrients while still producing useful resources. Alternatively, use fallow fields for grazing animals to naturally fertilize the soil.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold font-heading mb-4 text-parchment-light">Soil Fertility Management</h2>
        <div className="space-y-4">
          <div className="border border-parchment-border bg-parchment-card p-5">
            <h3 className="text-lg font-heading font-semibold mb-2 text-green-600">How Fertility Works</h3>
            <p className="text-parchment-muted text-sm">
              Each soil tile has a fertility value from 0-100%. Heavy feeders consume ~5% per harvest. Medium feeders consume ~3%. Light feeders consume ~1%. Fallow tiles recover ~2% per season. Rich soil (dark brown patches on the map) starts at 90% and is your most valuable farmland — protect it carefully.
            </p>
          </div>
          <div className="border border-parchment-border bg-parchment-card p-5">
            <h3 className="text-lg font-heading font-semibold mb-2 text-green-600">Fertilizer Options</h3>
            <p className="text-parchment-muted text-sm">
              Animal manure from tamed livestock (pigs, cows, goats) passively fertilizes nearby soil tiles. Place animal pens adjacent to or overlapping with your farmland for passive fertility regeneration. Composting spoiled food and plant matter at a Compost Bin (unlocked in research) produces fertilizer that restores 15-20% fertility to a targeted tile.
            </p>
          </div>
          <div className="border border-parchment-border bg-parchment-card p-5">
            <h3 className="text-lg font-heading font-semibold mb-2 text-green-600">Emergency Recovery</h3>
            <p className="text-parchment-muted text-sm">
              If a field drops below 30% fertility, do not attempt to recover it with rotation alone — it will take 2+ years. Instead, convert that field to an animal pen for one year, then compost heavily before replanting. A season of heavy composting (3-4 applications) restores a depleted field faster than any other method.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold font-heading mb-4 text-parchment-light">Winter Preparation Checklist</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border border-parchment-border text-sm">
            <thead className="bg-parchment-card">
              <tr>
                <th className="p-3 border border-parchment-border text-green-600">Task</th>
                <th className="p-3 border border-parchment-border text-green-600">Deadline</th>
                <th className="p-3 border border-parchment-border text-green-600">Minimum Stockpile</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-3 border border-parchment-border text-parchment-light font-semibold">Harvest all fields</td><td className="p-3 border border-parchment-border text-parchment-muted">Autumn Day 3</td><td className="p-3 border border-parchment-border text-parchment-muted">Everything</td></tr>
              <tr><td className="p-3 border border-parchment-border text-parchment-light font-semibold">Raw food stockpile</td><td className="p-3 border border-parchment-border text-parchment-muted">Autumn Day 4</td><td className="p-3 border border-parchment-border text-parchment-muted">25 meals per settler</td></tr>
              <tr><td className="p-3 border border-parchment-border text-parchment-light font-semibold">Preserved meals</td><td className="p-3 border border-parchment-border text-parchment-muted">Autumn Day 5</td><td className="p-3 border border-parchment-border text-parchment-muted">10 pickled/preserved per settler</td></tr>
              <tr><td className="p-3 border border-parchment-border text-parchment-light font-semibold">Animal feed</td><td className="p-3 border border-parchment-border text-parchment-muted">Autumn Day 5</td><td className="p-3 border border-parchment-border text-parchment-muted">20 hay per animal</td></tr>
              <tr><td className="p-3 border border-parchment-border text-parchment-light font-semibold">Root cellar built</td><td className="p-3 border border-parchment-border text-parchment-muted">Before first frost</td><td className="p-3 border border-parchment-border text-parchment-muted">Underground, insulated</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-10 border-t border-parchment-border pt-6">
        <h3 className="text-lg font-heading font-semibold mb-3 text-parchment-light">Related Guides</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
          <a href="/farming" className="text-green-600 hover:underline">Farming Fundamentals →</a>
          <a href="/best-crops-for-each-season" className="text-green-600 hover:underline">Best Crops Per Season →</a>
          <a href="/soil-fertility" className="text-green-600 hover:underline">Soil Fertility Guide →</a>
          <a href="/food-preservation" className="text-green-600 hover:underline">Food Preservation Guide →</a>
          <a href="/winter-food-storage" className="text-green-600 hover:underline">Winter Food Storage →</a>
          <a href="/root-cellar" className="text-green-600 hover:underline">Root Cellar Design →</a>
        </div>
      </section>
    </div>
  );
}
