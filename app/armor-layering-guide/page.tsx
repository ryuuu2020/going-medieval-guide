import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Going Medieval Armor Layering Guide — Best Armor Combos (2026)",
  description: "Complete Going Medieval armor layering guide. Learn how armor pieces stack, which combinations provide the best protection, and how to optimize your settlers' defense for every threat type.",
  keywords: ["Going Medieval armor guide", "armor layering", "best armor combos", "Going Medieval defense", "plate armor vs chainmail"],
  openGraph: {
    title: "Going Medieval Armor Layering Guide — Best Combos",
    description: "Master armor layering in Going Medieval. Stack plate, chainmail, and gambeson for maximum protection.",
  },
};

export default function ArmorLayeringGuide() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-extrabold font-heading mb-2 text-parchment-light">
        Armor <span className="text-amber-600">Layering</span> Guide
      </h1>
      <p className="text-parchment-muted mb-8 max-w-2xl">
        How armor pieces stack, which combinations provide the best protection against each damage type, and how to gear your settlers for survival.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold font-heading mb-4 text-parchment-light">How Armor Layering Works</h2>
        <p className="text-parchment-muted leading-relaxed mb-3">
          Going Medieval uses a <strong className="text-parchment-light">multi-layer armor system</strong>. Each settler can wear up to three layers on their torso and two on their legs, plus a helmet. The layers are: <strong className="text-amber-600">Inner (Gambeson/Padded)</strong> → <strong className="text-amber-600">Middle (Chainmail/Brigandine)</strong> → <strong className="text-amber-600">Outer (Plate/Armor)</strong>. Each layer contributes its own protection values, and they <em>stack additively</em> — a settler in full plate over chainmail over gambeson has dramatically more protection than one in just plate armor.
        </p>
        <p className="text-parchment-muted leading-relaxed mb-3">
          The catch: <strong className="text-parchment-light">weight matters</strong>. Each armor piece has a weight value that reduces movement speed. A fully armored settler is a slow settler — they may not reach the battle in time. The art of armor layering is balancing protection against mobility for each settler's role.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold font-heading mb-4 text-parchment-light">Armor Layer Types</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border border-parchment-border text-sm">
            <thead className="bg-parchment-card">
              <tr>
                <th className="p-3 border border-parchment-border text-amber-600">Layer</th>
                <th className="p-3 border border-parchment-border text-amber-600">Slot</th>
                <th className="p-3 border border-parchment-border text-amber-600">Materials</th>
                <th className="p-3 border border-parchment-border text-amber-600">Blunt Protection</th>
                <th className="p-3 border border-parchment-border text-amber-600">Pierce Protection</th>
                <th className="p-3 border border-parchment-border text-amber-600">Slash Protection</th>
                <th className="p-3 border border-parchment-border text-amber-600">Weight</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-parchment-elevated">
                <td className="p-3 border border-parchment-border text-parchment-light font-semibold">Gambeson</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">Inner</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">Cloth/Leather</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">15%</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">10%</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">10%</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">Light</td>
              </tr>
              <tr className="hover:bg-parchment-elevated">
                <td className="p-3 border border-parchment-border text-parchment-light font-semibold">Chainmail</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">Middle</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">Iron/Steel</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">10%</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">25%</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">35%</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">Medium</td>
              </tr>
              <tr className="hover:bg-parchment-elevated">
                <td className="p-3 border border-parchment-border text-parchment-light font-semibold">Brigandine</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">Middle</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">Steel + Leather</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">15%</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">20%</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">25%</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">Medium</td>
              </tr>
              <tr className="hover:bg-parchment-elevated">
                <td className="p-3 border border-parchment-border text-parchment-light font-semibold">Plate Armor</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">Outer</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">Steel</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">30%</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">40%</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">45%</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">Heavy</td>
              </tr>
              <tr className="hover:bg-parchment-elevated">
                <td className="p-3 border border-parchment-border text-parchment-light font-semibold">Plate Helmet</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">Head</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">Steel</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">25%</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">35%</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">40%</td>
                <td className="p-3 border border-parchment-border text-parchment-muted">Medium</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold font-heading mb-4 text-parchment-light">Best Armor Combinations by Role</h2>

        <div className="space-y-6">
          <div className="border border-parchment-border bg-parchment-card p-5">
            <h3 className="text-xl font-heading font-semibold mb-2 text-amber-600">Frontline Tank (Melee Defender)</h3>
            <p className="text-parchment-muted mb-2">
              <strong>Build</strong>: Plate Helmet + Plate Armor (outer) + Chainmail (middle) + Gambeson (inner)
            </p>
            <p className="text-parchment-muted">
              Maximum protection in all three damage categories. The full three-layer torso stack provides roughly 45-55% total damage reduction against slash and pierce attacks, which are the most common raid damage types. Accept the movement penalty — your tank is meant to stand at the chokepoint, not chase enemies.
            </p>
          </div>

          <div className="border border-parchment-border bg-parchment-card p-5">
            <h3 className="text-xl font-heading font-semibold mb-2 text-amber-600">Archer / Crossbowman (Ranged DPS)</h3>
            <p className="text-parchment-muted mb-2">
              <strong>Build</strong>: Leather Helmet + Brigandine (outer) + Gambeson (inner)
            </p>
            <p className="text-parchment-muted">
              Skip Chainmail for archers — the weight penalty reduces their repositioning speed, which is critical for maintaining optimal firing angles. Brigandine provides good pierce protection against enemy archers while keeping weight manageable. If the archer is positioned behind walls and merlons, they rarely need heavy armor — prioritize mobility over protection.
            </p>
          </div>

          <div className="border border-parchment-border bg-parchment-card p-5">
            <h3 className="text-xl font-heading font-semibold mb-2 text-amber-600">Flanker / Skirmisher</h3>
            <p className="text-parchment-muted mb-2">
              <strong>Build</strong>: Plate Helmet + Chainmail (outer) + Gambeson (inner)
            </p>
            <p className="text-parchment-muted">
              Flankers need enough armor to survive getting caught but enough speed to circle behind enemies. Chainmail gives excellent slash and pierce protection without the heavy movement penalty of plate. Use Plate Helmet to protect against the most dangerous headshots, but keep the body lighter for mobility.
            </p>
          </div>

          <div className="border border-parchment-border bg-parchment-card p-5">
            <h3 className="text-xl font-heading font-semibold mb-2 text-amber-600">Civilian / Worker</h3>
            <p className="text-parchment-muted mb-2">
              <strong>Build</strong>: Gambeson only (single layer)
            </p>
            <p className="text-parchment-muted">
              Workers should wear minimal armor — just a Gambeson for basic protection against random wildlife attacks. Heavy armor on a farmer or builder drastically slows their work speed because of the movement penalty between tasks. If a raid happens, draft them to safety behind walls rather than trying to armor them for combat they should not be in.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold font-heading mb-4 text-parchment-light">Material Quality Matters</h2>
        <p className="text-parchment-muted leading-relaxed mb-3">
          Armor quality scales with crafting skill and material type. A <strong className="text-parchment-light">Steel Plate Armor</strong> crafted by a level 40+ Armorer provides roughly 40% more protection than an <strong className="text-parchment-light">Iron Plate Armor</strong> from a level 20 Armorer. Always assign your highest-skill Armorer to craft combat gear. The quality tiers are:
        </p>
        <ul className="list-disc list-inside space-y-1 text-parchment-muted ml-4">
          <li><strong className="text-parchment-light">Flawed</strong> (skill 1-10): Only 60% of base protection — avoid for combat gear</li>
          <li><strong className="text-parchment-light">Normal</strong> (skill 11-25): 100% base protection</li>
          <li><strong className="text-parchment-light">Good</strong> (skill 26-40): 120% base protection</li>
          <li><strong className="text-amber-600">Excellent</strong> (skill 41-50): 140% base protection</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold font-heading mb-4 text-parchment-light">Seasonal Armor Considerations</h2>
        <p className="text-parchment-muted leading-relaxed mb-3">
          Armor also affects <strong className="text-parchment-light">temperature management</strong>. Heavy armor (plate, chainmail) provides cold insulation but causes heat buildup in summer. During heat waves, consider swapping your defenders to lighter armor or ensure they have access to shaded positions. A settler suffering from heatstroke fights at roughly 60% effectiveness regardless of their armor quality. Winter is the ideal season for heavy armor deployment — the insulation bonus keeps fighters warm during long defensive stands on the walls.
        </p>
      </section>

      <section className="mt-10 border-t border-parchment-border pt-6">
        <h3 className="text-lg font-heading font-semibold mb-3 text-parchment-light">Related Guides</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
          <a href="/best-weapons-for-defense" className="text-amber-600 hover:underline">Best Weapons for Defense →</a>
          <a href="/armor-weapons" className="text-amber-600 hover:underline">Complete Armor & Weapons Overview →</a>
          <a href="/defense" className="text-amber-600 hover:underline">Defense Strategy Guide →</a>
          <a href="/best-defense-layout" className="text-amber-600 hover:underline">Best Defense Layout →</a>
          <a href="/temperature-control" className="text-amber-600 hover:underline">Temperature Control Guide →</a>
          <a href="/settlers" className="text-amber-600 hover:underline">Settler Management →</a>
        </div>
      </section>
    </div>
  );
}
