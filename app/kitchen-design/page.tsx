
export default function KitchenDesignPage() {
  return (
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-10">
            <section>
              <h1 className="chapter-heading">Kitchen Design & Food Production Guide</h1>
              <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
                The kitchen is your colony's engine of survival — without efficient food production, even the most well-defended fortress will collapse from within. Kitchen design in Going Medieval is about more than plunking down a campfire; it requires careful planning of stove placement, ingredient stockpile proximity, cook movement paths, and meal quality optimization. A well-designed kitchen doubles your cook's output per day, drastically reduces food spoilage, and elevates meal quality from basic survival rations to fine meals that generate active mood bonuses. Data below is based on community testing and is for reference only.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Kitchen Layout Fundamentals</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                The optimal kitchen layout follows a simple principle: minimize the distance your cook must travel between the ingredient stockpile and the cooking station. The ideal arrangement places a stove (or campfire) in the center of a 5x5 room, with ingredient stockpile zones filling the surrounding tiles. This creates a zero-walkworkflow — the cook stands at the stove, reaches to adjacent tiles for ingredients, and deposits cooked meals into a designated output stockpile zone also within arm's reach. Every tile of walking distance you eliminate per cooking cycle adds up to dozens of saved minutes per day, translating directly into more meals produced.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Kitchen size matters both for efficiency and room bonuses. A 5x5 kitchen provides enough space for a stove, ingredient stockpiles on three sides, and an output stockpile zone near the door. A 6x6 kitchen can accommodate two cooking stations (stove + campfire or stove + butcher table), which becomes important when your colony exceeds 8 settlers and one cook cannot keep up with demand. Beyond 7x7, the extra space adds negligible benefit — the cook's walking distance to stockpiles increases, reducing efficiency.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Stove vs Campfire: When to Upgrade</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                The campfire is your starting cooking station — it requires only wood for fuel and stone for construction, making it available from day one. However, campfires are inefficient: they produce only basic meals (stew, grilled meat), cook 30% slower than stoves, consume more fuel per meal, and generate smoke that can cause breathing problems in enclosed kitchens. The campfire should be placed outdoors or in a well-ventilated room with at least one open wall or a chimney shaft, otherwise settlers suffer the "filled room with smoke" mood penalty.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                The stove is a research-unlocked upgrade that represents a major leap in food production capability. Stoves cook 30% faster, consume fuel more efficiently (2 wood per 3 meals vs 1 wood per meal for campfires), and crucially unlock advanced meal recipes: fine meals (+4 mood when eaten), lavish meals (+6 mood), and specialty dishes. A stove requires iron ingots and stone to construct, so it's an early-mid game investment. Transition to a stove as soon as your colony reaches 5+ settlers — the efficiency gains pay back the iron cost within a single season.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Ingredient Stockpile Proximity</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                A cook's work cycle breaks down into four actions: walk to ingredient stockpile → grab ingredients → walk to stove → cook. The walking portions account for 40-60% of total cooking time in poorly designed kitchens. To optimize, create three distinct stockpile zones within the kitchen itself:
              </p>
              <div className="space-y-3">
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Raw Ingredient Stockpile</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">Designate the tiles immediately adjacent to the stove for raw ingredients only: vegetables (cabbage, carrots), raw meat, wheat, barley, and hops. This stockpile should be set to high priority to ensure it's always stocked. Assign a dedicated hauler to keep it filled from main storage.</p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Intermediate Stockpile</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">For processed intermediates like flour (milled from wheat) and dough. Placing a millstone or kneading table directly in or adjacent to the kitchen eliminates intermediate hauling. Flour stored next to the stove allows seamless bread production without the cook leaving the room.</p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Finished Meal Stockpile</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">A 1-2 tile stockpile zone near the kitchen door for completed meals. Set this to low priority — once full, excess meals are moved to the main food storage. This buffer ensures the cook is never blocked by a full output zone and settlers eating nearby have immediate access.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Cook Skill & Efficiency</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                A settler's Cooking skill directly impacts meal output in three ways: cook speed (higher skill = faster cooking animations), meal quality tier (higher skill unlocks better recipes even with the same stove), and food poisoning chance (lower skill increases the risk of spoiled or contaminated meals that cause illness). Assign your highest Cooking skill settler as the dedicated cook and set cooking as their top work priority. A dedicated cook with Cooking 10+ produces 2-3x the meals of a rotating-duty cook with Cooking 3.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                Avoid task-switching penalties. A common mistake is assigning the cook to also haul, farm, or construct — every time they switch tasks, they lose productive cooking time moving between zones. Set your dedicated cook's work priorities so that Cooking is #1 and all other tasks are #4 or lower. This keeps them in the kitchen producing meals continuously. Supplement with a dedicated hauler who moves ingredients from main storage to the kitchen stockpile, so the cook never has to fetch supplies from the warehouse.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Meal Quality Tiers & Their Effects</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Meal quality ranges from survival rations to lavish feasts, and each tier impacts settler mood differently:
              </p>
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Meal Type</th>
                    <th>Skill Req.</th>
                    <th>Stove Req.</th>
                    <th>Mood Effect</th>
                    <th>Ingredients</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Raw food</td><td>None</td><td>No</td><td>-3 Ate raw food</td><td>Any edible raw</td></tr>
                  <tr><td>Simple Meal</td><td>0</td><td>No (campfire)</td><td>No bonus</td><td>Vegetable or meat x1</td></tr>
                  <tr><td>Fine Meal</td><td>3</td><td>Yes</td><td>+4 mood</td><td>Meat x1 + vegetable x1</td></tr>
                  <tr><td>Lavish Meal</td><td>7</td><td>Yes</td><td>+6 mood</td><td>Meat x1 + vegetable x2</td></tr>
                  <tr><td>Gourmet Meal</td><td>12</td><td>Yes</td><td>+8 mood</td><td>Various premium ingredients</td></tr>
                </tbody>
              </table>
              <p className="font-serif text-sm text-ink-muted italic">Data source: Community testing estimates</p>
              <p className="font-serif text-base text-ink-light leading-relaxed mt-4">
                The jump from Simple to Fine Meals is the most impactful upgrade in food production — it provides a reliable +4 mood buff to every settler who eats. Since settlers eat twice daily, this is the equivalent of a permanent +4 mood buff, which often makes the difference between a settler hovering at neutral versus positive mood. Target Fine Meals as soon as you research and build your first stove.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
              <div className="faq-item">
                <details>
                  <summary>How many stoves do I need for my colony?</summary>
                  <p>One stove per 6 settlers for basic meal production. If you're cooking Fine or Lavish meals (which have longer cook times), plan for one stove per 4-5 settlers. Two stoves with a dedicated cook can feed a colony of 10-12 settlers comfortably.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>Should I build the kitchen above or below ground?</summary>
                  <p>Above ground with good ventilation eliminates smoke issues from campfires. If building underground, you must construct a dedicated chimney shaft (1x1 vertical tunnel to surface) directly above the cooking station to vent smoke, plus a grate at the top to prevent rain.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>What's the best fuel source for cooking?</summary>
                  <p>Wood is the standard early-game fuel. Coal (processed from raw coal deposits) burns 3x longer per unit, reducing refueling interruptions for your cook. Charcoal (crafted in a charcoal kiln) is more labor-intensive but renewable. Prioritize coal once you discover deposits.</p>
                </details>
              </div>
            </section>
          </div>

          <aside className="lg:w-[35%] space-y-8 shrink-0">
            <div className="field-sidebar-block">
              <h3 className="font-display text-lg font-semibold text-ink mb-4">Cooking Station Quick Ref</h3>
              <div className="space-y-3">
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Campfire</h4><p className="font-serif text-xs text-ink-muted mt-1">Stone x3 | Simple meals only | Needs ventilation</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Stove</h4><p className="font-serif text-xs text-ink-muted mt-1">Iron x5, Stone x8 | Fine+ meals | Research unlock</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Butcher Table</h4><p className="font-serif text-xs text-ink-muted mt-1">Wood x5 | Process carcasses | No fuel needed</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Millstone</h4><p className="font-serif text-xs text-ink-muted mt-1">Stone x10 | Wheat→Flour | Slow, assign skilled settler</p></div>
              </div>
            </div>
            <div className="journal-card p-5">
              <h3 className="font-display text-base font-semibold text-ink mb-3">Kitchen Efficiency Checklist</h3>
              <ol className="space-y-2 font-serif text-sm text-ink-light">
                <li>1. Ingredient stockpile adjacent to stove</li>
                <li>2. Output stockpile within 2 tiles of stove</li>
                <li>3. Dedicated cook (Cooking priority #1)</li>
                <li>4. Dedicated hauler for kitchen resupply</li>
                <li>5. Ventilation (chimney or open wall)</li>
                <li>6. Lighting — at least 2 torches</li>
                <li>7. Floor: stone/tile (cleanliness matters)</li>
              </ol>
            </div>
          </aside>
        </div>
      </main>
  );
}
