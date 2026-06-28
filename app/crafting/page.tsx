export const metadata = {
  title: "Going Medieval Crafting System — Complete Guide (2026)",
  description:
    "Complete crafting guide for Going Medieval. Workbenches, crafting chains, resource requirements, and efficiency optimization.",
};


export default function CraftingPage() {
  return (
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-10">
            <section>
              <h1 className="chapter-heading">Crafting System</h1>
              <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
                The crafting system is the core mechanic in Going Medieval for converting raw resources into useful items. From simple wooden bows to fine iron armor, all equipment and tools must be produced at workbenches. This guide details every workbench type, crafting recipe, and material source to help you build an efficient production chain. Data below is based on community compilation and is for reference only.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Workbench Types</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Different items require different workbenches. Early-game you'll only need the carpentry table and stove; as research progresses, more workbenches become available. It's recommended to cluster similar workbenches together into workshop zones to reduce settler hauling time.
              </p>
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Workbench</th>
                    <th>Unlock Condition</th>
                    <th>Crafting Category</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Carpentry Table</td><td>Starting</td><td>Wooden weapons, tools, furniture</td></tr>
                  <tr><td>Stove</td><td>Starting</td><td>Food processing, cooking</td></tr>
                  <tr><td>Stonemason Table</td><td>Construction research</td><td>Stone materials, millstone</td></tr>
                  <tr><td>Blacksmith Table</td><td>Crafting research</td><td>Iron weapons, tools, armor</td></tr>
                  <tr><td>Loom</td><td>Crafting research</td><td>Cloth, clothing</td></tr>
                  <tr><td>Brewing Barrel</td><td>Agriculture research</td><td>Beer brewing</td></tr>
                  <tr><td>Apothecary Table</td><td>Medical research</td><td>Medicine crafting</td></tr>
                </tbody>
              </table>
              <p className="font-serif text-sm text-ink-muted italic">Data source: Community compilation</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Key Crafting Recipes</h2>
              <div className="space-y-4">
                <div className="journal-card p-5">
                  <h4 className="font-display text-base font-semibold text-ink mb-2">Weapons</h4>
                  <div className="space-y-2 font-serif text-sm text-ink-light">
                    <div className="flex justify-between border-b border-divider pb-1"><span>Bow</span><span className="text-ink-muted">Wood x3, Rope x1</span></div>
                    <div className="flex justify-between border-b border-divider pb-1"><span>Arrows x10</span><span className="text-ink-muted">Wood x1, Stone x1</span></div>
                    <div className="flex justify-between border-b border-divider pb-1"><span>Wooden Spear</span><span className="text-ink-muted">Wood x3</span></div>
                    <div className="flex justify-between border-b border-divider pb-1"><span>Iron Sword</span><span className="text-ink-muted">Iron Ingot x2, Leather x1</span></div>
                    <div className="flex justify-between"><span>Crossbow</span><span className="text-ink-muted">Wood x2, Iron Ingot x2, Rope x1</span></div>
                  </div>
                </div>
                <div className="journal-card p-5">
                  <h4 className="font-display text-base font-semibold text-ink mb-2">Armor</h4>
                  <div className="space-y-2 font-serif text-sm text-ink-light">
                    <div className="flex justify-between border-b border-divider pb-1"><span>Leather Armor</span><span className="text-ink-muted">Leather x3, Rope x1</span></div>
                    <div className="flex justify-between border-b border-divider pb-1"><span>Iron Armor</span><span className="text-ink-muted">Iron Ingot x4, Leather x2</span></div>
                    <div className="flex justify-between"><span>Leather Cap</span><span className="text-ink-muted">Leather x2</span></div>
                  </div>
                </div>
                <div className="journal-card p-5">
                  <h4 className="font-display text-base font-semibold text-ink mb-2">Food</h4>
                  <div className="space-y-2 font-serif text-sm text-ink-light">
                    <div className="flex justify-between border-b border-divider pb-1"><span>Bread</span><span className="text-ink-muted">Flour x1, Water x1</span></div>
                    <div className="flex justify-between border-b border-divider pb-1"><span>Stew</span><span className="text-ink-muted">Meat x1, Vegetable x1</span></div>
                    <div className="flex justify-between border-b border-divider pb-1"><span>Beer</span><span className="text-ink-muted">Barley x2, Water x1</span></div>
                    <div className="flex justify-between"><span>Smoked Meat</span><span className="text-ink-muted">Raw Meat x1, Wood x1</span></div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Material Gathering</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Materials are the foundation of crafting. Wood is gathered by chopping trees — the most basic building material. Stone comes from mining rock; limestone is the best building stone. Iron ore must be mined from deep underground and smelted into iron ingots. Leather comes from tanning animal hides, and rope can be made from flax fibers.
              </p>
              <div className="aged-border p-5" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                <p className="font-serif text-sm text-ink leading-relaxed">
                  <strong className="text-vermillion">Production Chain Tip:</strong>
                  Iron crafting requires a full production chain: Mining &rarr; Smelting &rarr; Iron Ingots &rarr; Forging. Build your smelter near iron deposits to reduce transport time. Flax &rarr; Fiber &rarr; Cloth/Rope also requires multi-step processing — plant flax early to ensure a steady supply.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
              <div className="faq-item">
                <details>
                  <summary>How do I get iron ingots?</summary>
                  <p>First mine iron ore underground, then smelt it in a furnace using wood or charcoal as fuel. 1 iron ore produces 1 iron ingot. Iron is typically found 3+ levels underground, appearing as gray speckled patches.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>Why aren't settlers crafting items?</summary>
                  <p>Check three things: 1) Is the workbench occupied? 2) Are all crafting materials available and accessible in the stockpile? 3) Is the corresponding crafting task enabled in the settler's work priorities? Settlers execute tasks in priority order.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>Does crafted item quality matter?</summary>
                  <p>Yes. The higher the settler's crafting skill, the better the resulting item quality. Higher-quality weapons deal more damage; higher-quality armor lasts longer. Assign important gear crafting to your most skilled crafters.</p>
                </details>
              </div>
            </section>
          </div>

          <aside className="lg:w-[35%] space-y-8 shrink-0">
            <div className="field-sidebar-block">
              <h3 className="font-display text-lg font-semibold text-ink mb-4">Material Quick Ref</h3>
              <div className="space-y-3">
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Wood</h4><p className="font-serif text-xs text-ink-muted mt-1">Chop trees | Basic building material</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Limestone</h4><p className="font-serif text-xs text-ink-muted mt-1">Mine rock | Advanced building material</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Iron Ingot</h4><p className="font-serif text-xs text-ink-muted mt-1">Iron ore &rarr; Smelt | Weapons & armor</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Leather</h4><p className="font-serif text-xs text-ink-muted mt-1">Animals &rarr; Tan | Armor material</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Rope</h4><p className="font-serif text-xs text-ink-muted mt-1">Flax fiber x2 | Weapon material</p></div>
              </div>
            </div>
            <div className="journal-card p-5">
              <h3 className="font-display text-base font-semibold text-ink mb-3">Workshop Layout Tips</h3>
              <ul className="space-y-2 font-serif text-sm text-ink-light">
                <li>&bull; Carpentry table near wood stockpile</li>
                <li>&bull; Stove near kitchen and granary</li>
                <li>&bull; Blacksmith table near furnace</li>
                <li>&bull; Loom near flax fields</li>
                <li>&bull; Leave 2 tiles of walkway between benches</li>
              </ul>
            </div>
          </aside>
        </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={ __html: `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I get iron ingots?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "First mine iron ore underground, then smelt it in a furnace using wood or charcoal as fuel. 1 iron ore produces 1 iron ingot. Iron is typically found 3+ levels underground, appearing as gray speckled patches."
      }
    },
    {
      "@type": "Question",
      "name": "Why aren't settlers crafting items?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Check three things: 1) Is the workbench occupied? 2) Are all crafting materials available and accessible in the stockpile? 3) Is the corresponding crafting task enabled in the settler's work priorities? Settlers execute tasks in priority order."
      }
    },
    {
      "@type": "Question",
      "name": "Does crafted item quality matter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The higher the settler's crafting skill, the better the resulting item quality. Higher-quality weapons deal more damage; higher-quality armor lasts longer. Assign important gear crafting to your most skilled crafters."
      }
    }
  ]
}` } />
      </main>
  );
}
