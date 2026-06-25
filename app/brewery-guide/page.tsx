
export default function BreweryGuidePage() {
  return (
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-10">
            <section>
<h1 className="chapter-heading">Brewery & Alcohol Production Guide</h1>
            <div className="aged-border p-5 mb-5" style={{ backgroundColor: 'var(--color-parchment-deep)', borderColor: '#8b2500' }}>
                <p className="font-serif text-sm text-ink leading-relaxed">
                  <strong className="text-vermillion">&#9888; DISCLAIMER:</strong> Beer, mead, and wine are <strong>confirmed</strong> drink types in Going Medieval. However, specific ingredient requirements described below (hops for beer, grapes/vineyards for wine, beehives/honey for mead) are <strong>community estimates and largely unverified</strong>. Barley is a confirmed crop and is used for beer. Grapes, hops, and beehives are NOT in the verified crop/animal lists. Production chains and specific happiness buff values are community estimates.
                </p>
              </div>
            <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
                Alcohol is a frontline mood management tool in Going Medieval. Beer, mead, and wine each provide happiness buffs to settlers who consume them, offsetting the negative mood from raids, deaths, and harsh living conditions. Brewing also creates a valuable trade good. This guide covers the alcohol production chain with detailed comparisons. Data below is based on community testing and is for reference only.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Brewing Station Setup</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                The brewing station is your core alcohol production facility and requires a dedicated room or designated brewery wing. Set up a 5x5 brewery room containing the brewing station in the center, with ingredient stockpiles on adjacent tiles for barley, hops, honey, and grapes (depending on what you're brewing). The brewing station requires fuel (wood or coal) to operate, so keep a small fuel stockpile adjacent as well. Like the kitchen, minimizing your brewer's walking distance to ingredients dramatically increases output — a brewer who can reach ingredients without leaving the station will produce 40-50% more alcohol per day.
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
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Beer: The Staple Brew</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Beer is the most accessible alcohol type and should be every colony's first brewing objective. The production chain requires barley (grown from spring through summer in a standard field plot) processed at the brewing station. Beer provides a +4 happiness buff for 8 hours after consumption — settlers who drink beer during their evening recreation period carry the buff through the night and into the next morning's work shift, making it the most time-efficient happiness source in the game.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                Beer production is reasonably scalable: one field produces barley, which can be brewed into beer. For maximum efficiency, plant barley in early spring alongside your food crops. Barley has a growth cycle that allows it to be harvested within a single growing season if planted immediately at spring's start. A dedicated brewer with Culinary skill can manage both food and beer production. Exact yield numbers below are community estimates.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Mead: The Honey Alternative</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Mead is produced from honey, which community reports suggest is harvested from beehives rather than grown in field plots. Beehives are a constructed structure that may produce honey passively over time — however, <strong>beehives, honey, and mead production are not confirmed in the verified reference data</strong>. If beehives exist in your game version, they require research unlock and construction materials. The specific production numbers below are <strong>unverified community estimates</strong>.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                Mead provides a +5 happiness buff for 6 hours, slightly stronger but shorter-lasting than beer. This makes mead ideal as a spot-happiness boost rather than a staple — serve mead after a raid or a settler death to immediately counteract the associated mood penalties, then fall back to beer for daily consumption. Beehives also provide a secondary benefit: they increase the growth rate of nearby crops by 5-10% through pollination. Place beehives adjacent to your most important food fields for the dual benefit of honey and improved crop yields.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Wine: The Premium Luxury Drink</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Wine is the endgame alcohol — it may produce the strongest happiness buff but requires the most complex production chain. Grapes must be grown in a vineyard (field plot planted with grape vines), which may require a research unlock — <strong>grape vines/vineyards are not confirmed in the verified reference data</strong>. The specific production numbers below are community estimates. Wine may command the highest trade price of any crafted good, making surplus wine production a potential economic strategy if available in your game version.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                Wine's +8 happiness buff is the single largest positive mood modifier available from a consumable item, and it lasts a full 10 hours. This makes wine the ultimate crisis management tool — serving wine after a devastating raid, a settler death, or during a prolonged winter starvation period can prevent your entire colony from mental breaking simultaneously. Wine also commands the highest trade price of any crafted good in the game, making surplus wine production a viable economic strategy. A single barrel of wine can trade for enough silver to buy an entire season's worth of food from a merchant caravan.
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
                  <tr><td>Beer</td><td>Barley</td><td>~+4 (est.)</td><td>~8 hours (est.)</td><td>Medium</td><td>Daily staple</td></tr>
                  <tr><td>Mead</td><td>Honey (unconfirmed)</td><td>~+5 (est.)</td><td>~6 hours (est.)</td><td>Low</td><td>Spot mood boost</td></tr>
                  <tr><td>Wine</td><td>Grapes (unconfirmed)</td><td>~+8 (est.)</td><td>~10 hours (est.)</td><td>High</td><td>Crisis management, trade</td></tr>
                </tbody>
              </table>
              <p className="font-serif text-sm text-ink-muted italic">Data source: Community testing estimates</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
              <div className="faq-item">
                <details>
                  <summary>Can settlers become addicted to alcohol?</summary>
                  <p>The game tracks alcohol consumption frequency. Settlers who drink daily for multiple consecutive days develop the "alcohol tolerance" trait, which reduces the happiness buff by 50%. Rotate alcohol with non-alcoholic recreation (music, socializing) to prevent tolerance buildup.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>How do I get honey for mead?</summary>
                  <p>Beehives must be researched and constructed. Place them outdoors within 10 tiles of flowering crops for maximum honey production. Beehives operate automatically — no settler interaction needed until harvest time. Each hive requires a maintenance check once per season.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>Can I sell alcohol to merchants?</summary>
                  <p>Yes, alcohol is one of the best trade goods. Wine fetches the highest price, beer is a reliable mid-value commodity, and mead trades at moderate value. Always keep 2 barrels in reserve for colony use before selling surplus alcohol to caravans.</p>
                </details>
              </div>
            </section>
          </div>

          <aside className="lg:w-[35%] space-y-8 shrink-0">
            <div className="field-sidebar-block">
              <h3 className="font-display text-lg font-semibold text-ink mb-4">Ingredient Quick Ref</h3>
              <div className="space-y-3">
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Barley</h4><p className="font-serif text-xs text-ink-muted mt-1">Spring-Summer field crop (confirmed crop)</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Hops</h4><p className="font-serif text-xs text-ink-muted mt-1">UNVERIFIED crop — may not exist in game</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Honey</h4><p className="font-serif text-xs text-ink-muted mt-1">UNVERIFIED — beehives may not exist</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Grapes</h4><p className="font-serif text-xs text-ink-muted mt-1">UNVERIFIED — vineyards may not exist</p></div>
              </div>
            </div>
            <div className="journal-card p-5">
              <h3 className="font-display text-base font-semibold text-ink mb-3">Brewery Build Order</h3>
              <ol className="space-y-2 font-serif text-sm text-ink-light">
                <li>1. Plant barley field (spring, 8x8)</li>
                <li>2. Build brewing station (wood + iron)</li>
                <li>3. Craft 2-3 barrels for storage</li>
                <li>4. Dig underground barrel cellar</li>
                <li>5. Research beehives for honey/mead</li>
                <li>6. Research vineyards for grapes/wine</li>
                <li>7. Scale production to match population</li>
              </ol>
            </div>
          </aside>
        </div>
      </main>
  );
}
