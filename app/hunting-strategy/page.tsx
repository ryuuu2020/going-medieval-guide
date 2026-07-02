import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Going Medieval Hunting Strategy Guide — Best Weapons & Tactics (2026)",
  description: "Master hunting in Going Medieval. Best weapons, settler skill requirements, animal tracking, seasonal hunting calendar, and how to maximize meat and leather yields.",
  keywords: ["Going Medieval hunting guide", "best hunting weapons", "animal tracking", "meat farming", "leather production"],
};

export default function HuntingStrategyGuide() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-extrabold font-heading mb-2 text-parchment-light">
        Hunting <span className="text-amber-600">Strategy</span> Guide
      </h1>
      <p className="text-parchment-muted mb-8 max-w-2xl">
        Everything you need to know about hunting in Going Medieval — best weapons, skill requirements, seasonal patterns, and how to maximize meat and leather yields.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold font-heading mb-4 text-parchment-light">Hunting Basics</h2>
        <p className="text-parchment-muted leading-relaxed mb-3">
          Hunting provides <strong className="text-parchment-light">meat, leather, and bone</strong> — three critical resources for food, clothing, and crafting. Unlike farming, hunting requires active settler intervention. You must draft a settler with the <strong className="text-amber-600">Hunting job enabled</strong>, select a wild animal as a target, and wait for the kill. The settler&apos;s <strong className="text-parchment-light">Marksman skill</strong> determines accuracy and damage.
        </p>
        <p className="text-parchment-muted leading-relaxed">
          A common mistake is assigning hunting to settlers with low Marksman skill. A settler with Marksman 1-5 will miss 60-70% of shots, wasting time that could be spent on other tasks. <strong className="text-parchment-light">Only assign hunting to settlers with Marksman 15+.</strong> Below that threshold, they are more valuable doing farm work or hauling.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold font-heading mb-4 text-parchment-light">Best Weapons for Hunting</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border border-parchment-border text-sm">
            <thead className="bg-parchment-card">
              <tr>
                <th className="p-3 border border-parchment-border text-amber-600">Weapon</th>
                <th className="p-3 border border-parchment-border text-amber-600">Range</th>
                <th className="p-3 border border-parchment-border text-amber-600">Damage</th>
                <th className="p-3 border border-parchment-border text-amber-600">Best For</th>
                <th className="p-3 border border-parchment-border text-amber-600">Crafting Required</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-parchment-elevated">
                <td className="p-3 border border-parchment-border text-parchment-light font-semibold">Short Bow</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">Medium</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">Low</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">Small game (hares, squirrels)</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">Woodworking Bench</td>
              </tr>
              <tr className="hover:bg-parchment-elevated">
                <td className="p-3 border border-parchment-border text-parchment-light font-semibold">Longbow</td>
                <td className="p-3 border border-parchment-border text-amber-600">Long</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">Medium</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">Deer, wolves, medium game</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">Fletching Table</td>
              </tr>
              <tr className="hover:bg-parchment-elevated">
                <td className="p-3 border border-parchment-border text-parchment-light font-semibold">Crossbow</td>
                <td className="p-3 border border-parchment-border text-amber-600">Long</td>
                <td className="p-3 border border-parchment-border text-green-600">High</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">Bears, large game, dangerous predators</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">Smithy (Iron required)</td>
              </tr>
              <tr className="hover:bg-parchment-elevated">
                <td className="p-3 border border-parchment-border text-parchment-light font-semibold">Heavy Crossbow</td>
                <td className="p-3 border border-parchment-border text-amber-600">Long</td>
                <td className="p-3 border border-parchment-border text-green-600">Very High</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">One-shot kills on most game</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">Advanced Smithy</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold font-heading mb-4 text-parchment-light">Huntable Animals & Yields</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border border-parchment-border text-sm">
            <thead className="bg-parchment-card">
              <tr>
                <th className="p-3 border border-parchment-border text-amber-600">Animal</th>
                <th className="p-3 border border-parchment-border text-amber-600">Danger Level</th>
                <th className="p-3 border border-parchment-border text-amber-600">Meat Yield</th>
                <th className="p-3 border border-parchment-border text-amber-600">Leather Yield</th>
                <th className="p-3 border border-parchment-border text-amber-600">Best Season</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-3 border border-parchment-border text-parchment-light">Hare</td><td className="p-3 border border-parchment-border text-green-600">None</td><td className="p-3 border border-parchment-border text-parchment-muted">5-8 meat</td><td className="p-3 border border-parchment-border text-parchment-muted">2-3 light leather</td><td className="p-3 border border-parchment-border text-parchment-muted">Spring/Summer</td></tr>
              <tr><td className="p-3 border border-parchment-border text-parchment-light">Deer</td><td className="p-3 border border-parchment-border text-green-600">None (flees)</td><td className="p-3 border border-parchment-border text-parchment-muted">15-20 meat</td><td className="p-3 border border-parchment-border text-parchment-muted">5-7 leather</td><td className="p-3 border border-parchment-border text-parchment-muted">All year</td></tr>
              <tr><td className="p-3 border border-parchment-border text-parchment-light">Wolf</td><td className="p-3 border border-parchment-border text-red-600">High</td><td className="p-3 border border-parchment-border text-parchment-muted">10-15 meat</td><td className="p-3 border border-parchment-border text-parchment-muted">4-6 fur</td><td className="p-3 border border-parchment-border text-parchment-muted">Winter</td></tr>
              <tr><td className="p-3 border border-parchment-border text-parchment-light">Bear</td><td className="p-3 border border-parchment-border text-red-600">Very High</td><td className="p-3 border border-parchment-border text-parchment-muted">25-35 meat</td><td className="p-3 border border-parchment-border text-parchment-muted">8-12 heavy fur</td><td className="p-3 border border-parchment-border text-parchment-muted">Autumn</td></tr>
              <tr><td className="p-3 border border-parchment-border text-parchment-light">Boar</td><td className="p-3 border border-parchment-border text-amber-600">Medium</td><td className="p-3 border border-parchment-border text-parchment-muted">12-18 meat</td><td className="p-3 border border-parchment-border text-parchment-muted">4-5 leather</td><td className="p-3 border border-parchment-border text-parchment-muted">All year</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold font-heading mb-4 text-parchment-light">Hunting Safety Tips</h2>
        <div className="space-y-4">
          <div className="border border-parchment-border bg-parchment-card p-5">
            <h3 className="text-lg font-heading font-semibold mb-2 text-amber-600">Never Hunt Alone Against Predators</h3>
            <p className="text-parchment-muted text-sm">Wolves and bears will fight back — and they can kill an unarmored hunter in 2-3 hits. Always send at least two armed settlers when hunting predatory animals. One can draw aggro while the other deals damage from range. For bears, bring three settlers: two ranged and one melee with shield and plate armor to tank.</p>
          </div>
          <div className="border border-parchment-border bg-parchment-card p-5">
            <h3 className="text-lg font-heading font-semibold mb-2 text-amber-600">Stay Near Your Base</h3>
            <p className="text-parchment-muted text-sm">A wounded hunter far from base is a dead hunter. Animals spawn at map edges and roam inward. Hunt within 50 tiles of your walls so a wounded settler can retreat to safety. If a hunt goes wrong and your settler is bleeding, draft them immediately and run toward the nearest door — do not try to finish the kill.</p>
          </div>
          <div className="border border-parchment-border bg-parchment-card p-5">
            <h3 className="text-lg font-heading font-semibold mb-2 text-amber-600">Winter is Prime Hunting Season</h3>
            <p className="text-parchment-muted text-sm">In winter, most wild animals migrate closer to the map center (near your base) seeking warmth. This makes them easier to find and hunt. Wolf pelts harvested in winter provide better cold insulation for clothing. If you need fur for winter gear, hunt wolves specifically during early winter when their pelts are thickest.</p>
          </div>
        </div>
      </section>

      <section className="mt-10 border-t border-parchment-border pt-6">
        <h3 className="text-lg font-heading font-semibold mb-3 text-parchment-light">Related Guides</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
          <a href="/best-weapons-ranked" className="text-amber-600 hover:underline">Best Weapons Ranked →</a>
          <a href="/archer-vs-crossbow" className="text-amber-600 hover:underline">Archer vs Crossbow Guide →</a>
          <a href="/food-preservation" className="text-amber-600 hover:underline">Food Preservation →</a>
          <a href="/animal-husbandry" className="text-amber-600 hover:underline">Animal Husbandry →</a>
          <a href="/winter-survival" className="text-amber-600 hover:underline">Winter Survival →</a>
          <a href="/settler-skills" className="text-amber-600 hover:underline">Settler Skills Guide →</a>
        </div>
      </section>
    </div>
  );
}
