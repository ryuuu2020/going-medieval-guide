import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Going Medieval Animal Taming Guide — Complete Husbandry (2026)",
  description: "Complete Going Medieval animal taming guide. Learn which animals to tame, skill requirements, domestication progression, pen design, feeding, and how to maximize meat, milk, eggs, wool, and leather production.",
  keywords: ["Going Medieval animal taming", "animal husbandry", "domestication guide", "best animals to tame", "livestock management"],
};

export default function AnimalTamingGuide() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-extrabold font-heading mb-2 text-parchment-light">
        Animal <span className="text-amber-600">Taming</span> Guide
      </h1>
      <p className="text-parchment-muted mb-8 max-w-2xl">
        From wild capture to full domestication — everything you need to build a thriving livestock operation in Going Medieval.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold font-heading mb-4 text-parchment-light">Taming Progression: Wild → Tamed → Domesticated</h2>
        <p className="text-parchment-muted leading-relaxed mb-3">
          Animals in Going Medieval progress through three stages. <strong className="text-parchment-light">Wild</strong> animals roam the map and must be captured or lured. Assign a settler with the <strong className="text-amber-600">Animal Handling</strong> job enabled to attempt taming. Once tamed, the animal becomes <strong className="text-parchment-light">Tamed</strong> — it stays near your base and can be assigned to a pen. Further training advances it to <strong className="text-amber-600">Domesticated</strong> status, which unlocks breeding, milking, shearing, and other production abilities.
        </p>
        <p className="text-parchment-muted leading-relaxed">
          Each training attempt consumes time and has a success chance based on the settler's <strong className="text-parchment-light">Animal Handling skill</strong>. At skill level 1-5, expect 30-40% success rate per attempt. At level 20+, success rate rises to 70-80%. Higher-tier animals (bears, boars) require higher skill minimums to even attempt taming.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold font-heading mb-4 text-parchment-light">All Tamable Animals</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border border-parchment-border text-sm">
            <thead className="bg-parchment-card">
              <tr>
                <th className="p-3 border border-parchment-border text-amber-600">Animal</th>
                <th className="p-3 border border-parchment-border text-amber-600">Min Skill</th>
                <th className="p-3 border border-parchment-border text-amber-600">Products</th>
                <th className="p-3 border border-parchment-border text-amber-600">Feed Type</th>
                <th className="p-3 border border-parchment-border text-amber-600">Space/Tile</th>
                <th className="p-3 border border-parchment-border text-amber-600">Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-parchment-elevated">
                <td className="p-3 border border-parchment-border text-parchment-light">Chicken</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">3</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">Eggs, meat</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">Grains, seeds</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">2</td>
                <td className="p-3 border border-parchment-border text-green-600">Early food stability</td>
              </tr>
              <tr className="hover:bg-parchment-elevated">
                <td className="p-3 border border-parchment-border text-parchment-light">Goat</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">5</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">Milk, meat, leather</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">Hay, grass</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">3</td>
                <td className="p-3 border border-parchment-border text-amber-600">Milk + meat combo</td>
              </tr>
              <tr className="hover:bg-parchment-elevated">
                <td className="p-3 border border-parchment-border text-parchment-light">Sheep</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">5</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">Wool, meat</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">Hay, grass</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">3</td>
                <td className="p-3 border border-parchment-border text-amber-600">Clothing production</td>
              </tr>
              <tr className="hover:bg-parchment-elevated">
                <td className="p-3 border border-parchment-border text-parchment-light">Pig</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">7</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">Meat, leather</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">Food scraps, grains</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">4</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">High meat yield</td>
              </tr>
              <tr className="hover:bg-parchment-elevated">
                <td className="p-3 border border-parchment-border text-parchment-light">Cow</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">10</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">Milk, meat, heavy leather</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">Hay, grass</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">6</td>
                <td className="p-3 border border-parchment-border text-green-600">Best milk producer</td>
              </tr>
              <tr className="hover:bg-parchment-elevated">
                <td className="p-3 border border-parchment-border text-parchment-light">Donkey</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">12</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">Hauling, caravan</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">Hay, grass</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">5</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">Trade caravans</td>
              </tr>
              <tr className="hover:bg-parchment-elevated">
                <td className="p-3 border border-parchment-border text-parchment-light">Boar</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">15</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">Meat, leather</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">Food scraps, forage</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">4</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">Self-feeding livestock</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold font-heading mb-4 text-parchment-light">Early Game Priority: Chickens First</h2>
        <p className="text-parchment-muted leading-relaxed mb-3">
          <strong className="text-parchment-light">Chickens are the most impactful first tame.</strong> They require only Animal Handling 3 — achievable by any settler within a few days of focused training. A single chicken produces 1 egg every 1-2 days. At 3 chickens, that is roughly 2 eggs per day, providing a steady food source that requires no cooking, no preservation, and no crops. Eggs also count as a meat substitute in meal recipes.
        </p>
        <p className="text-parchment-muted leading-relaxed">
          Your second priority should be <strong className="text-parchment-light">goats or cows</strong> for milk. Milk converts to cheese at a preservation station, and cheese lasts far longer than raw food. A single cow produces enough milk daily to make 2-3 cheese portions — enough to feed one settler indefinitely from milk alone.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold font-heading mb-4 text-parchment-light">Pen Design & Management</h2>
        <div className="space-y-4">
          <p className="text-parchment-muted">Each animal needs <strong className="text-parchment-light">space per tile</strong> (see table above). A pen that is too small causes animals to become stressed, reducing production rates by up to 50%. Build pens at least 50% larger than the minimum — animals breed and you do not want to rebuild enclosures mid-season.</p>
          <p className="text-parchment-muted">Place a <strong className="text-amber-600">feeding trough</strong> inside each pen filled with the animal's preferred feed type. Without a trough, animals forage on grass tiles within their pen — fine in spring/summer, but grass dies in winter. Stockpile hay in autumn for winter feeding.</p>
          <p className="text-parchment-muted">Separate <strong className="text-parchment-light">predators from prey</strong>. Boars and wolves will attack chickens and goats if housed in the same pen. Use at minimum a wooden fence between predator and prey pens. Walls are even better.</p>
        </div>
      </section>

      <section className="mt-10 border-t border-parchment-border pt-6">
        <h3 className="text-lg font-heading font-semibold mb-3 text-parchment-light">Related Guides</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
          <a href="/hunting-strategy" className="text-amber-600 hover:underline">Hunting Strategy →</a>
          <a href="/food-preservation" className="text-amber-600 hover:underline">Food Preservation →</a>
          <a href="/farming" className="text-amber-600 hover:underline">Farming Fundamentals →</a>
          <a href="/winter-survival" className="text-amber-600 hover:underline">Winter Survival →</a>
          <a href="/settlers" className="text-amber-600 hover:underline">Settler Management →</a>
        </div>
      </section>
    </div>
  );
}
