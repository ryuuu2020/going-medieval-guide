export const metadata = {
  title: "Going Medieval Tailoring & Clothing — Complete Guide (2026)",
  description:
    "Complete tailoring and clothing guide for Going Medieval. Clothing quality, warmth bonuses, and tailor workshop setup.",
};


export default function TailorGuidePage() {
  return (
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-10">
            <section>
              <h1 className="chapter-heading">Tailoring & Clothing Guide</h1>
              <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
                Clothing in Going Medieval is not cosmetic — it's a survival necessity that directly impacts settler temperature tolerance, combat survivability, and social standing. A settler wearing inappropriate clothing for the season will suffer hypothermia in winter or heatstroke in summer, while a poorly armored settler caught in melee is as good as dead. This guide covers every clothing item, their material requirements, seasonal layering strategies, the armor and clothing layer system, and how your tailor's skill level influences quality. Data below is based on community testing and is for reference only.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">The Tailoring Bench & Production Setup</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                All clothing production starts at the tailoring bench, crafted from wood and placed in a dedicated tailor's workshop. A standard tailor workshop (5x5) houses one tailoring bench and adjacent stockpile zones for raw materials: leather (from tanning animal hides), cloth (from processing flax at a loom), and wool (from shearing livestock). The full production chain for cloth involves: flax farming → flax harvesting → flax processing at the loom → cloth → tailoring bench → finished garment. This multi-step chain is labor-intensive, so a dedicated tailor with Tailoring as their top work priority maximizes throughput.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                For leather-based clothing and armor, the chain is shorter but requires slaughtering animals or hunting wildlife: hunt or butcher → raw hide → tanning rack → leather → tailoring bench. Leather clothing provides better physical protection than cloth but worse temperature insulation. The ideal workshop setup places the tailoring bench adjacent to stockpiles for both cloth and leather, allowing the tailor to switch between material types without walking to distant storage. Add a dedicated finished clothing stockpile (1-2 tiles next to the bench) so the tailor deposits completed garments immediately and continues working.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Clothing Item Reference Table</h2>
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Clothing Item</th>
                    <th>Materials</th>
                    <th>Layer Slot</th>
                    <th>Temperature Mod</th>
                    <th>Armor Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Cloth Tunic</td><td>~Cloth x3</td><td>Middle (skin)</td><td>~+5°C warmth</td><td>~5%</td></tr>
                  <tr><td>Cloth Pants</td><td>~Cloth x2</td><td>Middle (skin)</td><td>~+4°C warmth</td><td>~3%</td></tr>
                  <tr><td>Leather Tunic</td><td>~Leather x3</td><td>Middle (skin)</td><td>~+8°C warmth</td><td>~15%</td></tr>
                  <tr><td>Leather Helmet</td><td>~Leather x2</td><td>Head</td><td>~+2°C warmth</td><td>~10%</td></tr>
                  <tr><td>Winter Coat</td><td>~Leather/Cloth x5</td><td>Outer</td><td>~+20°C warmth</td><td>~12%</td></tr>
                  <tr><td>Plate Armor</td><td>~Iron Ingot x8</td><td>Outer</td><td>~-5°C cooling</td><td>~40%</td></tr>
                  <tr><td>Chainmail</td><td>~Iron Ingot x5</td><td>Middle (over skin)</td><td>~-2°C cooling</td><td>~28%</td></tr>
                  <tr><td>Boots</td><td>~Leather x2</td><td>Feet</td><td>~+3°C warmth</td><td>~8%</td></tr>
                  <tr><td>Noble Robes</td><td>~Cloth x5, Gold Thread x1</td><td>Outer</td><td>~+10°C warmth</td><td>~0%</td></tr>
                </tbody>
              </table>
              <p className="font-serif text-sm text-ink-muted italic">Data source: Community testing estimates</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">The Layer System: Clothing + Armor</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Going Medieval uses a multi-layer equipment system where settlers can wear items across four distinct slots: Head, Outer, Middle (over skin), and Feet. The Middle layer can hold two items — one worn directly against the skin (e.g., cloth tunic) and one worn on top (e.g., chainmail). This means a fully equipped combat settler wears: a helmet (head), plate armor or winter coat (outer), cloth tunic + chainmail (middle dual slot), and boots (feet) — for a total of five wearing items simultaneously.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Layer compatibility matters. You cannot wear two outer-layer items simultaneously — a plate armor and a winter coat occupy the same outer slot, so you must choose between protection and warmth. Similarly, the middle layer's two sub-slots have restrictions: chainmail goes over cloth, not under it, so you must equip the cloth tunic first, then add chainmail on top. The game automatically resolves incompatible combinations by unequipping the invalid item.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Seasonal Clothing Strategy</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Temperature management through clothing is the most important use case for tailoring. Each settler has a comfortable temperature range (typically 10-30&deg;C), and clothing items add or subtract from the temperature they feel — not the ambient air temperature. A settler wearing a winter coat (+20&deg;C warmth) can work comfortably in -5&deg;C outdoor winter conditions that would give an undressed settler severe hypothermia within hours. Conversely, plate armor (-5&deg;C cooling) helps settlers work near hot forges or in summer heat waves without heatstroke.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                Seasonal clothing management requires preparation before seasons change:
              </p>
              <div className="space-y-3">
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Winter Preparation (Complete by Late Autumn)</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">Craft one winter coat or leather tunic per settler who works outdoors (farmers, hunters, miners accessing surface resources). Settlers who remain indoors in heated rooms can manage with cloth tunics + leather pants. Prioritize outdoor workers first — hypothermia kills faster than hunger.</p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Summer Preparation (Complete by Late Spring)</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">Remove winter coats and heavy leather tunics from settlers assigned to outdoor labor. Replace with light cloth tunics and cloth pants. Settlers working near heat sources (kitchens, forges) should wear minimal layers — heatstroke inflicts a stacking mood and health penalty that's dangerous during long work shifts.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Tailor Skill & Crafting Quality</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                The Tailoring skill level of your dedicated crafter directly impacts three aspects of every garment produced: crafting speed, material efficiency, and item quality tier. Garments crafted by a high-skill tailor may receive bonuses including additional durability, improved temperature modifiers, and slightly increased armor values. A high-skill tailor can stretch limited leather and cloth supplies further than a low-skill crafter. Exact skill multipliers are community estimates.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                Train your tailor deliberately: assign them to produce large quantities of simple items (cloth tunics, cloth pants) early on to build skill, then transition to crafting high-value items (leather armor, winter coats) once their skill improves. A dedicated tailor can produce enough clothing for a colony working alone; beyond that, consider a second tailor. Never assign your highest-Tailoring settler to multiple labor types — keep them at the bench producing constantly.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
              <div className="faq-item">
                <details>
                  <summary>What happens if settlers have no clothing?</summary>
                  <p>Nude settlers suffer a "naked" mood penalty (-4 mood) and have zero temperature protection. In winter this is lethal within 1-2 days outdoors. Even in mild weather, the mood penalty alone justifies crafting basic cloth tunics for everyone by the end of the first week.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>Which is better: leather or cloth clothing?</summary>
                  <p>Leather provides better physical protection (armor %) and moderate warmth. Cloth is lighter, provides less warmth but no movement penalty, and is easier to mass-produce. Use leather for combat settlers and winter outdoor workers; cloth for indoor crafters and cooks.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>How do I get more leather for crafting?</summary>
                  <p>Hunting wildlife (deer, boar) and slaughtering domesticated livestock (cattle, sheep, goats) both produce raw hides. Process raw hides at a tanning rack into leather. Each large animal yields 3-5 leather. Maintain a herd of 4-6 cattle or sheep for sustained leather production.</p>
                </details>
              </div>
            </section>
          </div>

          <aside className="lg:w-[35%] space-y-8 shrink-0">
            <div className="field-sidebar-block">
              <h3 className="font-display text-lg font-semibold text-ink mb-4">Material Chain Quick Ref</h3>
              <div className="space-y-3">
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Cloth</h4><p className="font-serif text-xs text-ink-muted mt-1">Flax field → Loom → Cloth → Tailor Bench</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Leather</h4><p className="font-serif text-xs text-ink-muted mt-1">Hunt/Butcher → Raw Hide → Tanning Rack → Leather</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Wool</h4><p className="font-serif text-xs text-ink-muted mt-1">Shear Sheep → Raw Wool → Loom → Wool Cloth</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Iron Armor</h4><p className="font-serif text-xs text-ink-muted mt-1">Iron Ore → Smelter → Iron Ingot → Forge → Armor</p></div>
              </div>
            </div>
            <div className="journal-card p-5">
              <h3 className="font-display text-base font-semibold text-ink mb-3">Clothing Priority By Season</h3>
              <ol className="space-y-2 font-serif text-sm text-ink-light">
                <li><span className="field-tag ink text-[10px]">Winter</span> Winter coats for outdoor workers</li>
                <li><span className="field-tag ink text-[10px]">Winter</span> Leather tunics for remaining settlers</li>
                <li><span className="field-tag ink text-[10px]">Spring</span> Cloth tunics for indoor workers</li>
                <li><span className="field-tag ink text-[10px]">Summer</span> Light cloth for all settlers</li>
                <li><span className="field-tag vermillion text-[10px]">Always</span> Boots for all combat settlers</li>
                <li><span className="field-tag vermillion text-[10px]">Always</span> Armor pieces for guard force</li>
              </ol>
            </div>
          </aside>
        </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={ __html: `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What happens if settlers have no clothing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nude settlers suffer a \"naked\" mood penalty (-4 mood) and have zero temperature protection. In winter this is lethal within 1-2 days outdoors. Even in mild weather, the mood penalty alone justifies crafting basic cloth tunics for everyone by the end of the first week."
      }
    },
    {
      "@type": "Question",
      "name": "Which is better: leather or cloth clothing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Leather provides better physical protection (armor %) and moderate warmth. Cloth is lighter, provides less warmth but no movement penalty, and is easier to mass-produce. Use leather for combat settlers and winter outdoor workers; cloth for indoor crafters and cooks."
      }
    },
    {
      "@type": "Question",
      "name": "How do I get more leather for crafting?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hunting wildlife (deer, boar) and slaughtering domesticated livestock (cattle, sheep, goats) both produce raw hides. Process raw hides at a tanning rack into leather. Each large animal yields 3-5 leather. Maintain a herd of 4-6 cattle or sheep for sustained leather production."
      }
    }
  ]
}` } />
      </main>
  );
}
