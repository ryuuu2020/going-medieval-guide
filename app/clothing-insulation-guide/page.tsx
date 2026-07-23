export const metadata = {
  title: "Going Medieval Clothing Insulation Guide — Dress Settlers for Every Season (2026)",
  description:
    "How Going Medieval's clothing and insulation system actually works. Material warmth comparisons, slot-by-slot layering, and seasonal outfit strategies that keep colonists alive through winter and summer.",
};

export default function ClothingInsulationGuidePage() {
  return (
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-10">
            <section>
              <h1 className="chapter-heading">Clothing &amp; Insulation</h1>
              <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
                In Going Medieval, clothing is a survival system, not a vanity toggle. Every garment your colonists wear contributes insulation against the air temperature their body actually feels. A fully dressed winter settler and a half-dressed one standing in the same blizzard experience two completely different climates. This guide walks through how insulation stacks across body slots, how each material compares for warmth and protection, and which outfits hold up through the coldest nights and the hottest summer days.
              </p>
            </section>

            <figure className="mb-8">
              <img
                src="/images/clothing-insulation-guide.png"
                alt="Grouped bar chart comparing four Going Medieval clothing materials — linen, wool, leather, and fur — across four qualitative axes: warmth, armor protection, summer suitability, and winter suitability"
                className="w-full rounded-lg border border-[#3d3528]"
                loading="lazy"
              />
              <figcaption className="mt-2 text-center text-sm text-ink-light font-serif">
                Material Profile — fur dominates warmth, leather dominates armor, wool sits in the middle, linen is the breathable summer pick. Scores are qualitative rankings, not in-game stat values.
              </figcaption>
            </figure>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">How Insulation Actually Works</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Going Medieval tracks insulation separately for each body part the settler is wearing clothing on. The garment in each slot adds its own warmth value to that body part, and the body's felt temperature is the air temperature plus the sum of whatever the settler is wearing on it. Stack a fur hat, a wool tunic, a wool jacket, fur-lined leggings and fur boots on a settler in a -10&deg;C blizzard, and the body part that gets covered by all of them can end up feeling closer to a mild autumn afternoon than to freezing.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                This is why &ldquo;dress warm&rdquo; advice in this game is more specific than it sounds: leaving the head bare or the boots thin on a cold settler means that body part still freezes even if the torso is bundled. Materials also have a hidden toughness stat that determines armor rating — a separate property from warmth — so the best combat outfit is not always the warmest one.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                Each settler has a personal comfort range roughly between 10&deg;C and 30&deg;C. Cross below the lower bound and hypothermia starts ticking down health; cross above the upper bound and heatstroke does the same. Clothing is the single biggest lever you have for keeping the felt temperature inside that window without spending fuel on heating.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Material Warmth Comparison</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Going Medieval uses four primary clothing materials at the tailor bench, each produced by a different supply chain. Linen comes from flax processed at a loom. Wool comes from sheep sheared and processed at a loom. Leather comes from raw hides tanned at a tanning rack. Fur comes from hunted wildlife and goes through the same tanning step.
              </p>
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Material</th>
                    <th>Warmth Rank</th>
                    <th>Armor Rank</th>
                    <th>Source Chain</th>
                    <th>Best Season</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Linen (cloth)</td><td>Low</td><td>Very low</td><td>Flax &rarr; loom &rarr; tailor bench</td><td>Summer</td></tr>
                  <tr><td>Wool</td><td>Medium-high</td><td>Low</td><td>Sheep &rarr; loom &rarr; tailor bench</td><td>Winter / shoulder seasons</td></tr>
                  <tr><td>Leather</td><td>Medium</td><td>High</td><td>Hunt or slaughter &rarr; tanning rack &rarr; tailor bench</td><td>All-year (combat pick)</td></tr>
                  <tr><td>Fur</td><td>Highest</td><td>Medium</td><td>Hunt predators / large game &rarr; tanning rack &rarr; tailor bench</td><td>Deep winter</td></tr>
                </tbody>
              </table>
              <p className="font-serif text-sm text-ink-light leading-relaxed mt-3">
                Fur outperforms every other material for raw warmth, which is why fur pieces are the bottleneck item for surviving the deepest freezes. Leather is the inverse pick — it gives the best protection per slot but only middling warmth, making it the combat settler&rsquo;s default. Wool is the workhorse mid-tier option that covers both shoulder seasons without specialising.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Slots, Layers &amp; What Goes Where</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                The clothing system is layered, not flat. Going Medieval groups worn items into a small number of slot categories — Head, Outer, Middle (the layer against the skin), Middle (the layer worn over the skin layer), and Feet — plus Hands for gloves. Two pieces can coexist on the Middle tier: an inner tunic against the skin and a piece of light armour over it. The Outer slot is single-occupancy, so a settler cannot wear a winter coat and plate armour at the same time.
              </p>
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Slot</th>
                    <th>Common Items</th>
                    <th>Insulation Role</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Head</td><td>Cloth cap, wool hat, fur hood</td><td>Covers a body part that bleeds heat fast in winter</td></tr>
                  <tr><td>Outer (over everything)</td><td>Winter coat, noble robes, plate armour</td><td>Single big-warmth or single big-cooling slot; choose one</td></tr>
                  <tr><td>Middle — skin layer</td><td>Cloth tunic, cloth pants</td><td>Base layer; linen here is fine for indoor / summer workers</td></tr>
                  <tr><td>Middle — over skin</td><td>Leather tunic, chainmail, wool jacket</td><td>Where the bulk of torso warmth and protection stacks</td></tr>
                  <tr><td>Feet</td><td>Cloth wraps, leather boots, fur boots</td><td>Often the coldest body part outdoors; do not skip</td></tr>
                  <tr><td>Hands</td><td>Cloth gloves, leather gloves</td><td>Smaller contribution than torso, but free warmth when it is cold</td></tr>
                </tbody>
              </table>
              <p className="font-serif text-sm text-ink-light leading-relaxed mt-3">
                Because the Outer slot is exclusive, every outdoor cold-weather outfit has to make a choice: warmth (winter coat) or protection (plate armour). Most colonies solve this with role separation — combat guards wear the armour, everyone else wears the coat.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Seasonal Outfit Recipes</h2>
              <div className="space-y-3">
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Deep Winter Loadout (outdoor workers)</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">
                    Fur hood on the head, fur or wool winter coat in the Outer slot, wool tunic on the skin layer, wool or leather tunic on the over-skin layer, wool or leather pants, fur boots. This is the outfit that lets a hunter, woodcutter, or wall-duty guard keep working through the coldest nights. The fur coat is the load-bearing piece; everything else is reinforcement.
                  </p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Mild Winter / Shoulder Season Loadout</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">
                    Wool hat, wool tunic on the skin layer, leather tunic over it, wool or leather pants, leather boots. Skip the fur coat for settlers who only spend short bursts outside. Indoors with a heated room this is already comfortable; outdoors it stretches the warm half of the calendar year without burning through fur stockpiles.
                  </p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Summer Loadout (outdoor workers)</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">
                    Cloth cap or bare head, cloth tunic against the skin, no Outer-layer piece, cloth pants, leather or cloth footwear. Linen breathes and is the right default when the felt temperature is climbing. Keep a wool change of clothes at the stockpile so you can swap fast when the season flips.
                  </p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Combat Loadout (any season)</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">
                    Leather or fur hat on the head, plate armour in the Outer slot, cloth tunic on the skin layer, chainmail over it, leather pants, leather boots. Plate armour actively cools the wearer, which is a feature in summer and a bug in winter — pair it with an extra fur layer underneath when guards go on winter wall duty.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Practical Strategy Notes</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-3">
                Stockpile seasonal sets, not loose pieces. A complete winter outfit per outdoor worker is easier to swap than hunting for a matching pair of wool pants at the start of every cold snap. A finished-clothing stockpile next to the tailor bench makes the swap fast.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-3">
                Prioritise fur for outdoor workers first. Indoor crafters, cooks, and storeroom workers do not need a fur coat if their building is heated; the same fur coat on a hunter who spends ten hours outside is the difference between a productive day and a hypothermia death.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-3">
                Quality matters at the tailor bench. Higher-quality garments give more insulation and more armor per slot than the same item at lower quality, so dedicating your best tailor to the winter-coat queue is a real payoff rather than flavour.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                Do not let anyone run naked. An undressed settler has zero insulation, picks up a mood penalty, and will die in winter within a day or two outdoors. The cheapest insurance policy in the game is a cloth tunic on every colonist by the end of the first week.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
              <div className="faq-item">
                <details>
                  <summary>Which material is the warmest in Going Medieval?</summary>
                  <p>Fur is the warmest clothing material in the game. Garments made from fur outperform wool, leather, and linen on every insulating slot, which is why fur pieces are the bottleneck for surviving deep-winter blizzards. Fur is harvested by hunting wildlife and then run through a tanning rack.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>Do settlers need different clothes in summer and winter?</summary>
                  <p>Yes. The same outfit that keeps a settler comfortable in winter will give them heatstroke in summer. Linen cloth pieces are the right default for warm weather because they breathe and shed warmth, while fur and wool pieces should be stored and swapped back in once temperatures drop. A finished-clothing stockpile next to the tailor bench makes the seasonal swap quick.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>Can a settler wear a winter coat and plate armour at the same time?</summary>
                  <p>No. The Outer slot only holds one piece at a time, so a winter coat and plate armour compete for the same slot and your settler can only equip one. Most colonies split roles — combat guards wear plate armour and accept the cooling effect, while every other colonist wears the warm coat in winter.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>Which body part matters most for staying warm?</summary>
                  <p>Insulation is tracked per body part, so leaving any single part bare is a real weakness — a settler in a full fur outfit with a bare head still loses a lot of heat through the head in deep winter. The most overlooked slot in practice is Feet: thin footwear on an outdoor worker in a cold snap is a frequent cause of slow hypothermia.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>Does clothing quality change insulation?</summary>
                  <p>Higher-quality garments produced by a skilled tailor carry more insulation and more armor per slot than the same item at a lower quality tier. The difference is noticeable but not extreme, so the bigger payoff is keeping your best tailor assigned to the cold-weather garment queue rather than spreading them across every workbench.</p>
                </details>
              </div>
            </section>

            <section className="mt-10 border-t border-[#3d3528] pt-6">
              <h3 className="font-display text-lg font-semibold text-ink mb-3">Related Guides</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-serif">
                <a href="/tailor-guide" className="text-vermillion hover:underline">Tailoring &amp; Clothing Guide &rarr;</a>
                <a href="/temperature-control" className="text-vermillion hover:underline">Temperature Control &rarr;</a>
                <a href="/winter-survival" className="text-vermillion hover:underline">Winter Survival &rarr;</a>
                <a href="/armor-layering-guide" className="text-vermillion hover:underline">Armor Layering &rarr;</a>
                <a href="/heating-system-guide" className="text-vermillion hover:underline">Heating System &rarr;</a>
                <a href="/hunting-strategy" className="text-vermillion hover:underline">Hunting Strategy &rarr;</a>
              </div>
              <p className="font-serif text-xs text-ink-muted mt-4">Last updated: July 22, 2026</p>
            </section>
          </div>

          <aside className="lg:w-[35%] space-y-8 shrink-0">
            <div className="field-sidebar-block">
              <h3 className="font-display text-lg font-semibold text-ink mb-4">Slot Coverage Cheatsheet</h3>
              <table className="parchment-table text-sm">
                <thead>
                  <tr><th>Body Part</th><th>Min Warm Slot</th></tr>
                </thead>
                <tbody>
                  <tr><td>Head</td><td>Cloth cap</td></tr>
                  <tr><td>Outer</td><td>Winter coat</td></tr>
                  <tr><td>Skin layer</td><td>Cloth tunic</td></tr>
                  <tr><td>Over-skin</td><td>Wool / leather tunic</td></tr>
                  <tr><td>Feet</td><td>Leather boots</td></tr>
                  <tr><td>Hands</td><td>Cloth gloves</td></tr>
                </tbody>
              </table>
            </div>
            <div className="journal-card p-5">
              <h3 className="font-display text-base font-semibold text-ink mb-3">Dressing Priority By Role</h3>
              <ol className="space-y-2 font-serif text-sm text-ink-light">
                <li><span className="field-tag ink text-[10px]">Winter</span> Fur coat on every outdoor worker first</li>
                <li><span className="field-tag ink text-[10px]">Winter</span> Wool hat and boots on everyone else</li>
                <li><span className="field-tag ink text-[10px]">Spring</span> Wool over-skin layer, cloth underneath</li>
                <li><span className="field-tag ink text-[10px]">Summer</span> Cloth tunic and pants for outdoor work</li>
                <li><span className="field-tag vermmillion text-[10px]">Always</span> Boots and gloves on combat guards</li>
                <li><span className="field-tag vermmillion text-[10px]">Always</span> Fur layer under plate armour for winter guard shifts</li>
              </ol>
            </div>
          </aside>
        </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Which material is the warmest in Going Medieval?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Fur is the warmest clothing material in the game. Garments made from fur outperform wool, leather, and linen on every insulating slot, which is why fur pieces are the bottleneck for surviving deep-winter blizzards. Fur is harvested by hunting wildlife and then run through a tanning rack."
      }
    },
    {
      "@type": "Question",
      "name": "Do settlers need different clothes in summer and winter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The same outfit that keeps a settler comfortable in winter will give them heatstroke in summer. Linen cloth pieces are the right default for warm weather because they breathe and shed warmth, while fur and wool pieces should be stored and swapped back in once temperatures drop. A finished-clothing stockpile next to the tailor bench makes the seasonal swap quick."
      }
    },
    {
      "@type": "Question",
      "name": "Can a settler wear a winter coat and plate armour at the same time?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. The Outer slot only holds one piece at a time, so a winter coat and plate armour compete for the same slot and your settler can only equip one. Most colonies split roles — combat guards wear plate armour and accept the cooling effect, while every other colonist wears the warm coat in winter."
      }
    },
    {
      "@type": "Question",
      "name": "Which body part matters most for staying warm?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Insulation is tracked per body part, so leaving any single part bare is a real weakness — a settler in a full fur outfit with a bare head still loses a lot of heat through the head in deep winter. The most overlooked slot in practice is Feet: thin footwear on an outdoor worker in a cold snap is a frequent cause of slow hypothermia."
      }
    },
    {
      "@type": "Question",
      "name": "Does clothing quality change insulation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Higher-quality garments produced by a skilled tailor carry more insulation and more armor per slot than the same item at a lower quality tier. The difference is noticeable but not extreme, so the bigger payoff is keeping your best tailor assigned to the cold-weather garment queue rather than spreading them across every workbench."
      }
    }
  ]
}` }} />
      </main>
  );
}