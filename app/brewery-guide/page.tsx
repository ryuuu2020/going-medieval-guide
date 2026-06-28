export const metadata = {
  title: "Going Medieval Brewery Guide — Beer & Alcohol (2026)",
  description:
    "Complete brewery and alcohol production guide for Going Medieval. Beer economy, brewing process, and profit optimization.",
};


export default function BreweryGuidePage() {
  return (
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-10">
            <section>
              <h1 className="chapter-heading">Brewery & Alcohol Production Guide</h1>
              <div className="aged-border p-5 mb-5" style={{ backgroundColor: 'var(--color-parchment-deep)', borderColor: '#8b2500' }}>
                <p className="font-serif text-sm text-ink leading-relaxed">
                  <strong className="text-vermillion">&#9888; DISCLAIMER:</strong> Ale, Beer, Rough Wine, Cider, Mead, Dubious Booze, and Alcohol are <strong>all confirmed</strong> drink types in Going Medieval. Barley is a confirmed crop used for Ale and Beer. Honey comes from the Apiary (beekeeping) and is used for Mead — <strong>CONFIRMED</strong>. Cider uses Apples, Rough Wine uses fruit. Hops and grapes are <strong>NOT</strong> in the verified crop list and should not be referenced as ingredients. Alcohol does NOT require hops for any brewing recipe. Specific happiness buff values and production numbers below are community estimates.
                </p>
              </div>
              <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
                Alcohol is a frontline mood management tool in Going Medieval. With seven confirmed drink types — Ale, Beer, Rough Wine, Cider, Mead, Dubious Booze, and generic Alcohol — your colony has multiple brewing paths to choose from. Each drink uses specific ingredients (Barley for Ale and Beer, Apples for Cider, Honey for Mead, fruit for Rough Wine) and provides happiness buffs that offset negative mood from raids, deaths, and harsh living conditions. Brewing also creates valuable trade goods. This guide covers all confirmed alcohol types with their production chains. Data below is based on community testing and is for reference only.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Brewing Station Setup</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                The brewing station is your core alcohol production facility and requires a dedicated room or designated brewery wing. Set up a 5x5 brewery room containing the brewing station in the center, with ingredient stockpiles on adjacent tiles for barley, apples, honey, and fruit (depending on what you're brewing). The brewing station requires fuel (wood or coal) to operate, so keep a small fuel stockpile adjacent as well. Like the kitchen, minimizing your brewer's walking distance to ingredients dramatically increases output — a brewer who can reach ingredients without leaving the station will produce 40-50% more alcohol per day.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Barrel storage is the other half of the brewing equation. Produced alcohol must be stored in barrels (crafted from wood) to prevent spoilage. Each barrel holds one type of alcohol and must be placed in a temperature-controlled storage room — barrels exposed to temperature extremes (above 30&deg;C or below 0&deg;C) have their contents spoil faster. The ideal barrel storage is a dedicated underground cellar maintained at 8-12&deg;C, which extends alcohol shelf life from roughly 15 days to 45+ days.
              </p>
              <div className="aged-border p-5" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                <p className="font-serif text-sm text-ink leading-relaxed">
                  <strong className="text-vermillion">&#9888; Barrel Capacity Warning:</strong>
                  Each barrel holds a finite amount of alcohol — typically 25 servings. A colony of 8 settlers drinking daily will empty a barrel in roughly 3 days. Plan your barrel count accordingly: maintain at least 3 full barrels per alcohol type your colony consumes regularly.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Ale & Beer: The Barley Brews</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Ale and Beer are the most accessible alcohol types and should be every colony's first brewing objective. Both are made from Barley, a confirmed crop grown from spring through summer in standard field plots. Ale is the simpler brew — fermented Barley mash at the brewing station. Beer requires an additional step in the fermentation process. Both provide happiness buffs: Beer provides approximately +4 happiness for 8 hours after consumption. Settlers who drink beer during their evening recreation period carry the buff through the night and into the next morning's work shift.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                Barley-based brewing is reasonably scalable: one field produces barley, which can be brewed into ale or beer. Plant barley in early spring alongside your food crops. Barley has a growth cycle that allows it to be harvested within a single growing season if planted immediately at spring's start. A dedicated brewer with Culinary skill can manage both food and beer production. Exact yield numbers below are community estimates.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Mead: The Apiary Drink</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Mead is produced from Honey, which comes from the Apiary — a proven beekeeping structure in Going Medieval. The Apiary operates passively, with bees collecting from nearby flowering plants. Once enough honey is accumulated, it can be harvested and fermented into mead at the brewing station. Honey and the Apiary are <strong>confirmed</strong> in the game — this production chain is verified.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                Mead provides an estimated +5 happiness buff for approximately 6 hours, slightly stronger but shorter-lasting than beer. This makes mead ideal as a spot-happiness boost rather than a staple — serve mead after a raid or a settler death to immediately counteract the associated mood penalties, then fall back to beer for daily consumption. Position the Apiary near flowering crops — the bees' pollination activity may provide secondary benefits to nearby plant growth.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Cider & Rough Wine: Fruit Ferments</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Cider and Rough Wine are fruit-based alcohol options. Cider is made from Apples, while Rough Wine is made from generic fruit. Unlike Barley-based drinks, these do not require dedicated crop fields — fruit can be gathered from orchards or wild sources. Cider and Rough Wine offer an alternative brewing path when your barley fields are committed to food production or when you have surplus fruit that would otherwise spoil.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                Rough Wine serves as the premium drink in the game — it provides the strongest happiness buff of all alcohol types (estimated +8 for approximately 10 hours). This makes Rough Wine the ultimate crisis management tool: serving it after a devastating raid, a settler death, or during a prolonged winter starvation period can prevent mental breaks. Cider is a moderate-strength alternative. Both ferment from fruit at the brewing station. Specific buff values are community estimates.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Dubious Booze: The Emergency Option</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Dubious Booze is a low-quality alcohol type that can be brewed from nearly any fermentable material. It provides a modest happiness buff (estimated +2 for ~4 hours) but carries a small risk of food poisoning. Dubious Booze is your emergency alcohol — when proper ingredients run low and settlers desperately need a mood boost, brew a batch of Dubious Booze from whatever surplus organic material is available. It's unreliable but available when nothing else is.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Alcohol Happiness Comparison</h2>
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Alcohol</th>
                    <th>Main Ingredient</th>
                    <th>Happiness Buff</th>
                    <th>Duration</th>
                    <th>Labor Cost</th>
                    <th>Best Use</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Ale</td><td>Barley</td><td>~+3 (est.)</td><td>~6 hours (est.)</td><td>Low</td><td>Daily staple</td></tr>
                  <tr><td>Beer</td><td>Barley</td><td>~+4 (est.)</td><td>~8 hours (est.)</td><td>Medium</td><td>Daily staple</td></tr>
                  <tr><td>Cider</td><td>Apples</td><td>~+5 (est.)</td><td>~6 hours (est.)</td><td>Low-Medium</td><td>Fruit surplus use</td></tr>
                  <tr><td>Mead</td><td>Honey (Apiary)</td><td>~+5 (est.)</td><td>~6 hours (est.)</td><td>Low</td><td>Spot mood boost</td></tr>
                  <tr><td>Rough Wine</td><td>Fruit</td><td>~+8 (est.)</td><td>~10 hours (est.)</td><td>High</td><td>Crisis management, trade</td></tr>
                  <tr><td>Dubious Booze</td><td>Various scrap</td><td>~+2 (est.)</td><td>~4 hours (est.)</td><td>Very Low</td><td>Emergency only</td></tr>
                </tbody>
              </table>
              <p className="font-serif text-sm text-ink-muted italic">Data source: Community testing estimates</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
              <div className="faq-item">
                <details>
                  <summary>Can settlers become addicted to alcohol?</summary>
                  <p>The game tracks alcohol consumption frequency. Settlers who drink daily for multiple consecutive days may develop "alcohol tolerance," which reduces the happiness buff by 50%. Rotate alcohol with non-alcoholic recreation (music, socializing) to prevent tolerance buildup.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>How do I get honey for mead?</summary>
                  <p>Build an Apiary — this is the confirmed beekeeping structure. Place it outdoors within range of flowering crops or wild plants. The Apiary produces honey passively over time. Harvest the honey and ferment it into mead at the brewing station. Honey production is automatic — no settler interaction needed until harvest time.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>Can I sell alcohol to merchants?</summary>
                  <p>Yes, alcohol is one of the best trade goods. Rough Wine fetches the highest price, Beer/Ale are reliable mid-value commodities, and Mead trades at moderate value. Always keep 2 barrels in reserve for colony use before selling surplus alcohol to caravans.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>Do I need hops to brew beer?</summary>
                  <p>No. Hops are <strong>not</strong> a confirmed crop in Going Medieval. Beer and Ale are both brewed from Barley — hops are not required for any brewing recipe in the game. This is a common misconception carried over from other colony sim games.</p>
                </details>
              </div>
            </section>
          </div>

          <aside className="lg:w-[35%] space-y-8 shrink-0">
            <div className="field-sidebar-block">
              <h3 className="font-display text-lg font-semibold text-ink mb-4">Ingredient Quick Ref</h3>
              <div className="space-y-3">
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Barley</h4><p className="font-serif text-xs text-ink-muted mt-1">Spring-Summer field crop — Ale & Beer (confirmed)</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Honey</h4><p className="font-serif text-xs text-ink-muted mt-1">From Apiary — Mead (confirmed)</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Apples</h4><p className="font-serif text-xs text-ink-muted mt-1">From orchards — Cider (confirmed)</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Fruit</h4><p className="font-serif text-xs text-ink-muted mt-1">Generic fruit — Rough Wine (confirmed)</p></div>
              </div>
            </div>
            <div className="journal-card p-5">
              <h3 className="font-display text-base font-semibold text-ink mb-3">Brewery Build Order</h3>
              <ol className="space-y-2 font-serif text-sm text-ink-light">
                <li>1. Plant barley field (spring, 8x8)</li>
                <li>2. Build brewing station (wood + iron)</li>
                <li>3. Craft 2-3 barrels for storage</li>
                <li>4. Dig underground barrel cellar</li>
                <li>5. Build Apiary for honey → mead</li>
                <li>6. Gather fruit for cider/rough wine</li>
                <li>7. Scale production to match population</li>
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
      "name": "Can settlers become addicted to alcohol?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The game tracks alcohol consumption frequency. Settlers who drink daily for multiple consecutive days may develop \"alcohol tolerance,\" which reduces the happiness buff by 50%. Rotate alcohol with non-alcoholic recreation (music, socializing) to prevent tolerance buildup."
      }
    },
    {
      "@type": "Question",
      "name": "How do I get honey for mead?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Build an Apiary — this is the confirmed beekeeping structure. Place it outdoors within range of flowering crops or wild plants. The Apiary produces honey passively over time. Harvest the honey and ferment it into mead at the brewing station. Honey production is automatic — no settler interaction needed until harvest time."
      }
    },
    {
      "@type": "Question",
      "name": "Can I sell alcohol to merchants?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, alcohol is one of the best trade goods. Rough Wine fetches the highest price, Beer/Ale are reliable mid-value commodities, and Mead trades at moderate value. Always keep 2 barrels in reserve for colony use before selling surplus alcohol to caravans."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need hops to brew beer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Hops are not a confirmed crop in Going Medieval. Beer and Ale are both brewed from Barley — hops are not required for any brewing recipe in the game. This is a common misconception carried over from other colony sim games."
      }
    }
  ]
}` } />
      </main>
  );
}
