
export default function FoodPreservationPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-10">
          <section>
            <h1 className="chapter-heading">Food Preservation & Storage Guide</h1>
            <div className="aged-border p-5 mb-5" style={{ backgroundColor: 'var(--color-parchment-deep)', borderColor: '#8b2500' }}>
                <p className="font-serif text-sm text-ink leading-relaxed">
                  <strong className="text-vermillion">&#9888; DISCLAIMER:</strong> Pickled food and smoked meat are <strong>confirmed</strong> preservation methods. However, bread/baking (requires wheat — NOT a confirmed crop), cheese (requires milk), and dried fish are <strong>unverified preservation chains</strong>. Hops is NOT a confirmed crop. Wheat, baking ovens, cheese presses, and drying racks may not exist as described. Only pickling and smoking are verified in reference data.
                </p>
              </div>
            <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
              Food spoilage is one of the most punishing mechanics in Going Medieval — a full harvest can rot within days if stored improperly. Mastering food preservation means understanding temperature mechanics, processing chains (pickling, smoking), and building an efficient root cellar. This guide explains preservation methods, optimal storage temperatures, and food requirements per settler for winter survival. Data below is based on community testing and is for reference only.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Food Spoilage Mechanics</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Every food item in Going Medieval has a base shelf life (in days) that is modified by two factors: temperature and processing state. Warmer temperatures accelerate spoilage; cooler temperatures slow it. Processed foods (bread, smoked meat, pickles) spoil at 1/3 the rate of their raw counterparts. The optimal storage temperature for all food is 1-5°C, achievable by building stockpiles 2+ levels underground.
            </p>
            <p className="font-serif text-base text-ink-light leading-relaxed">
              Spoilage rate is calculated per-item per-day. At outdoor summer temperatures (25-35°C), raw vegetables spoil in 3-4 days. In a proper underground cellar (2-8°C), the same vegetables last 12-15 days. Processed and stored underground, they can last 30+ days — easily spanning an entire winter. Understanding this chain is the difference between starvation and abundance.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Root Cellar Design</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              The root cellar is your most important storage structure. The ideal root cellar is dug at least 2 levels below ground (-2F), measures 8x8 to 10x10 tiles, and is lined with wooden shelves on all walls. The underground temperature stays 2-8°C year-round regardless of surface weather, providing ideal preservation conditions.
            </p>
            <div className="space-y-3">
              <div className="journal-card p-4">
                <h4 className="font-display text-base font-semibold text-ink">Level -1F Cellar (6-12°C)</h4>
                <p className="font-serif text-sm text-ink-light mt-1">Acceptable for short-term storage (5-8 days). Suitable for vegetables awaiting processing. Not cold enough for long-term winter stockpiles. Build here early-game before you have time to dig deeper.</p>
              </div>
              <div className="journal-card p-4">
                <h4 className="font-display text-base font-semibold text-ink">Level -2F Cellar (2-8°C)</h4>
                <p className="font-serif text-sm text-ink-light mt-1">Ideal storage temperature for all food types. Raw food lasts 12-15 days, processed food lasts 30-45 days. This is your primary long-term stockpile. Line walls with wooden shelves for maximum density.</p>
              </div>
              <div className="journal-card p-4">
                <h4 className="font-display text-base font-semibold text-ink">Level -3F Cellar (0-5°C)</h4>
                <p className="font-serif text-sm text-ink-light mt-1">Maximum preservation — raw food lasts 18-20 days, processed food 50+ days. However, this depth requires significant excavation labor. Worth building once your colony is established and you have surplus mining capacity.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Temperature Mechanics for Storage</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Temperature in Going Medieval is influenced by several environmental factors. Outdoor temperature follows seasonal patterns: Spring 10-20°C, Summer 20-35°C (heat waves up to 40°C), Autumn 10-20°C, Winter -5 to 5°C. Underground temperature is significantly more stable, dropping roughly 5-8°C per level below the surface. Rooms with roofs and walls provide minor insulation (2-3°C reduction from outdoor), but underground is the only reliable method for consistent cold storage.
            </p>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Critical rule: never place food stockpiles above ground or near heat sources (campfires, kitchens, smelters). A stockpile next to a campfire can be 5-10°C warmer, cutting shelf life by half. Kitchens should be on the ground floor with a stairway leading directly down to the root cellar for efficient hauling without temperature contamination.
            </p>
            <div className="aged-border p-5" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
              <p className="font-serif text-sm text-ink leading-relaxed">
                <strong className="text-vermillion">Temperature Warning:</strong>
                Heat waves in summer can warm even underground cellars by 2-3°C. During extended heat waves, check your cellar temperature daily. If it rises above 10°C, consider processing raw food immediately rather than risking spoilage.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Preservation Processing Chains</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Processing raw food through preservation stations dramatically extends shelf life. Each method has different input requirements, processing time, and output shelf life. The best strategy is to chain multiple methods — for example, harvest wheat, mill into flour, bake into bread, store in a -2F cellar for maximum preservation.
            </p>
            <table className="parchment-table">
              <thead>
                <tr>
                  <th>Method</th>
                  <th>Input</th>
                  <th>Output</th>
                  <th>Raw Shelf Life</th>
                  <th>Preserved Shelf Life</th>
                  <th>Station Required</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="font-semibold">Smoking</td><td>Raw Meat</td><td>Smoked Meat</td><td>3 days</td><td>15 days</td><td>Smokehouse</td></tr>
                <tr><td className="font-semibold">Pickling</td><td>Cabbage</td><td>Pickled Cabbage</td><td>5 days</td><td>25 days</td><td>Pickling Barrel</td></tr>
                <tr><td className="font-semibold">Baking</td><td>Wheat Flour</td><td>Bread</td><td>3 days (flour)</td><td>12 days</td><td>Oven</td></tr>
                <tr><td className="font-semibold">Drying</td><td>Meat, Fish</td><td>Dried Meat</td><td>3 days</td><td>20 days</td><td>Drying Rack</td></tr>
                <tr><td className="font-semibold">Cheese</td><td>Milk</td><td>Cheese</td><td>2 days (milk)</td><td>30 days</td><td>Cheese Press</td></tr>
                <tr><td className="font-semibold">Brewing</td><td>Hops</td><td>Beer</td><td>5 days (hops)</td><td>60 days</td><td>Brewery</td></tr>
              </tbody>
            </table>
            <p className="font-serif text-sm text-ink-muted italic">Data source: Community testing estimates</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Winter Food Calculation</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              The most critical calculation in Going Medieval: how much food do you need to survive winter? Each settler consumes approximately 2 units of food per day. Winter lasts roughly 12-15 days depending on the biome. Therefore, a colony of N settlers needs a minimum of N x 2 x 15 = 30N units of food stockpiled before winter.
            </p>
            <table className="parchment-table">
              <thead>
                <tr>
                  <th>Colony Size</th>
                  <th>Daily Consumption</th>
                  <th>Winter (15 days)</th>
                  <th>Safety Buffer (+30%)</th>
                  <th>Total Stockpile Target</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>3 settlers</td><td>6 units/day</td><td>90 units</td><td>117 units</td><td className="font-semibold">~120 units</td></tr>
                <tr><td>5 settlers</td><td>10 units/day</td><td>150 units</td><td>195 units</td><td className="font-semibold">~200 units</td></tr>
                <tr><td>8 settlers</td><td>16 units/day</td><td>240 units</td><td>312 units</td><td className="font-semibold">~320 units</td></tr>
                <tr><td>12 settlers</td><td>24 units/day</td><td>360 units</td><td>468 units</td><td className="font-semibold">~480 units</td></tr>
              </tbody>
            </table>
            <div className="aged-border p-5 mt-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
              <p className="font-serif text-sm text-ink leading-relaxed">
                <strong className="text-vermillion">Important:</strong>
                These numbers assume all food is preserved (processed + underground storage). If you store raw food above ground, multiply the target by 3x — raw food spoils during winter even above ground if temperatures rise above freezing. Always process your food before storing for winter.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
            <div className="faq-item">
              <details>
                <summary>What's the best preservation method overall?</summary>
                <p>The optimal chain is baking bread + smoking meat + pickling vegetables. Bread from wheat is the most efficient calorie source (high yield per tile, long shelf life). Smoked meat preserves your hunting surplus. Pickling turns excess cabbage into a long-lasting winter food. Combine all three for a diversified food stockpile that covers all nutritional needs.</p>
              </details>
            </div>
            <div className="faq-item">
              <details>
                <summary>Can I store food outside in winter?</summary>
                <p>During the coldest winter days when surface temperature drops below 0°C, outdoor storage is temporarily viable. However, winter temperatures fluctuate — a warm day can spike above 5°C and trigger rapid spoilage. Never rely on outdoor winter storage as your primary preservation method. Always build an underground cellar.</p>
              </details>
            </div>
            <div className="faq-item">
              <details>
                <summary>How do I prioritize which food to eat first?</summary>
                <p>Set up stockpile priorities: place high-spoil-rate foods (raw meat, raw vegetables) on the closest shelves with highest priority for settlers to eat. Place long-lasting preserved foods (pickles, bread, cheese) on lower-priority shelves deeper in the cellar. Settlers will consume the most perishable items first if they are the most accessible.</p>
              </details>
            </div>
          </section>
        </div>

        <aside className="lg:w-[35%] space-y-8 shrink-0">
          <div className="field-sidebar-block">
            <h3 className="font-display text-lg font-semibold text-ink mb-4">Shelf Life Comparison</h3>
            <div className="space-y-3">
              <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Raw Vegetables</h4><p className="font-serif text-xs text-ink-muted mt-1">Above ground: 3-4 days | Cellar: 12-15 days</p></div>
              <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Raw Meat</h4><p className="font-serif text-xs text-ink-muted mt-1">Above ground: 2-3 days | Cellar: 8-10 days</p></div>
              <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Bread</h4><p className="font-serif text-xs text-ink-muted mt-1">Above ground: 5 days | Cellar: 15-20 days</p></div>
              <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Smoked Meat</h4><p className="font-serif text-xs text-ink-muted mt-1">Above ground: 8 days | Cellar: 25-30 days</p></div>
              <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Pickled Cabbage</h4><p className="font-serif text-xs text-ink-muted mt-1">Above ground: 12 days | Cellar: 35-40 days</p></div>
              <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Cheese</h4><p className="font-serif text-xs text-ink-muted mt-1">Above ground: 15 days | Cellar: 45-50 days</p></div>
            </div>
          </div>
          <div className="journal-card p-5">
            <h3 className="font-display text-base font-semibold text-ink mb-3">Preservation Priority</h3>
            <ul className="space-y-2 font-serif text-sm text-ink-light">
              <li>1. Build -2F root cellar ASAP</li>
              <li>2. Process raw meat into smoked meat</li>
              <li>3. Mill wheat into flour, bake bread</li>
              <li>4. Pickle excess cabbage</li>
              <li>5. Make cheese from milk</li>
              <li>6. Install wooden shelves in cellar</li>
            </ul>
          </div>
        </aside>
      </div>
      </main>
  );
}
