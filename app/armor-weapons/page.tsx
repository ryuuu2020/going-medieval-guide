
export default function ArmorWeaponsPage() {
  return (
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-10">
            <section>
              <h1 className="chapter-heading">Best Armor & Weapons Guide</h1>
              <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
                Armor and weapons are what keep your settlers alive when walls fail. Going Medieval's equipment system spans four armor tiers and six major weapon types, each with distinct material requirements, protective values, and combat roles. Choosing the right gear for each settler and upgrading equipment as your colony advances is fundamental to survival. This guide compares every armor tier and weapon type, details crafting requirements, and provides optimal equipment recommendations for every stage of the game. Data below is based on community testing and is for reference only.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Armor Tier Comparison</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Armor in Going Medieval reduces incoming damage by a percentage based on the armor tier versus the attacker's weapon penetration. Higher-tier armor not only provides better protection but also offers improved durability, meaning it lasts through multiple battles before needing replacement. The material cost escalates significantly with each tier.
              </p>
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Armor Tier</th>
                    <th>Damage Reduction</th>
                    <th>Durability</th>
                    <th>Materials (Full Set)</th>
                    <th>Mobility Penalty</th>
                    <th>Best For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Leather Armor</td><td>25%</td><td>100</td><td>Leather x9</td><td>None</td><td>Early-game, archers</td></tr>
                  <tr><td>Gambeson</td><td>40%</td><td>180</td><td>Cloth x6, Leather x4</td><td>None</td><td>Mid-game, skirmishers</td></tr>
                  <tr><td>Plate Armor</td><td>65%</td><td>350</td><td>Iron Ingot x12, Leather x6</td><td>-15% speed</td><td>Late-game, melee tanks</td></tr>
                  <tr><td>Steel Armor</td><td>80%</td><td>600</td><td>Steel Ingot x15, Leather x8</td><td>-20% speed</td><td>Endgame, elite defenders</td></tr>
                </tbody>
              </table>
              <p className="font-serif text-sm text-ink-muted italic">Data source: Community testing estimates</p>
              <p className="font-serif text-base text-ink-light leading-relaxed mt-4">
                Key insight: mobility matters. Plate and steel armor provide exceptional protection but slow settlers down significantly. Archers who need to reposition quickly should stick with leather or gambeson. Melee defenders holding chokepoints benefit most from heavy armor since they don't need to move much once engaged.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Weapon Comparison</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Weapon choice should be based on the settler's combat role, their skill levels, and the types of enemies you typically face. Each weapon has distinct range, damage, speed, and special characteristics.
              </p>
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Weapon</th>
                    <th>Type</th>
                    <th>Base Damage</th>
                    <th>Armor Pen.</th>
                    <th>Speed</th>
                    <th>Materials</th>
                    <th>Best Role</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Longbow</td><td>Ranged</td><td>18-22</td><td>15%</td><td>Fast</td><td>Wood x3, Rope x1</td><td>Wall archer</td></tr>
                  <tr><td>Crossbow</td><td>Ranged</td><td>30-38</td><td>45%</td><td>Slow</td><td>Wood x2, Iron x2</td><td>Armor-piercing sniper</td></tr>
                  <tr><td>Iron Sword</td><td>Melee</td><td>22-28</td><td>20%</td><td>Medium</td><td>Iron x2, Leather x1</td><td>Balanced melee</td></tr>
                  <tr><td>Mace</td><td>Melee</td><td>25-32</td><td>35%</td><td>Slow</td><td>Iron x3, Wood x1</td><td>Armor-cracking melee</td></tr>
                  <tr><td>Spear</td><td>Melee</td><td>20-26</td><td>25%</td><td>Fast</td><td>Wood x2, Iron x1</td><td>Reach advantage, gate defense</td></tr>
                  <tr><td>Steel Sword</td><td>Melee</td><td>32-40</td><td>40%</td><td>Medium</td><td>Steel x3, Leather x2</td><td>Endgame elite melee</td></tr>
                </tbody>
              </table>
              <p className="font-serif text-sm text-ink-muted italic">Data source: Community testing estimates</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Crafting Requirements & Production Pipeline</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Equipment crafting requires specific workstations, raw materials, and skilled settlers. Setting up an efficient production pipeline ensures your colony always has backup weapons and replacement armor ready. Each item type requires a specific crafting station and minimum skill level.
              </p>
              <div className="space-y-3">
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Bowyer's Table (Wooden Weapons)</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">Crafts: Longbows, arrows, wooden training weapons. Requires: Carpentry skill 3+. Production pipeline: Wood (Lumberjack) → Bowyer's Table → Weapon stockpile. Keep a steady wood supply—each longbow needs 3 wood plus arrows.</p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Smithy (Metal Weapons & Armor)</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">Crafts: Swords, maces, spears, plate armor, steel armor. Requires: Smithing skill 5+ for basic items, 8+ for steel. Production pipeline: Iron Ore → Smelter → Iron Ingots → Smithy → Equipment. Steel requires additional coal and a blast furnace.</p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Tailor's Bench (Leather & Cloth Armor)</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">Crafts: Leather armor, gambeson, clothing. Requires: Tailoring skill 3+. Materials: Leather (from butchering animals), Cloth (from flax farming). Production pipeline: Flax/Animals → Tailor's Bench → Armor stockpile.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Optimal Equipment by Game Stage</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Equipment priorities shift as your colony develops. Rushing for steel armor before you have iron production is wasteful; settling for leather armor when facing plate-armored raiders is suicidal. Here is the optimal equipment roadmap by colony progression stage.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                Early game (0-5 settlers, Year 1): Longbows for all combat settlers, leather armor for melee defenders. Do not invest in metal weapons until you have established iron mining. Mid game (6-10 settlers, Year 2-3): Upgrade melee to iron swords and plate armor. Add 1-2 crossbows for your best marksmen. Gambeson for archers. Late game (10+ settlers, Year 3+): Steel armor on elite melee defenders, steel swords for front-line fighters. Crossbows for top marksmen. Maintain a stockpile of 2 backup weapons and 1 backup armor set per combat settler.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
              <div className="faq-item">
                <details>
                  <summary>Should I equip every settler with weapons?</summary>
                  <p>Yes—every settler, even non-combat specialists, should carry at least a basic weapon. Raiders can breach your walls and reach civilians. A cook with a spear is far more useful than a cook fighting bare-handed. Keep a stockpile of basic weapons for emergency armament of non-combat settlers.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>How often does armor need replacing?</summary>
                  <p>Armor durability degrades with each hit taken. Leather armor typically lasts 2-3 battles, plate armor 5-7 battles, steel armor 10+ battles. Check armor condition after every raid. Replace any armor piece below 30% durability—damaged armor provides reduced protection.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>Is steel worth the production chain investment?</summary>
                  <p>For your best melee defenders, yes. Steel armor and steel swords provide a significant combat advantage that justifies the complex production chain (iron → smelt → coal → blast furnace → steel). However, only produce steel for your top 2-3 combat settlers; the rest can use iron or plate equipment perfectly well.</p>
                </details>
              </div>
            </section>
          </div>

          <aside className="lg:w-[35%] space-y-8 shrink-0">
            <div className="field-sidebar-block">
              <h3 className="font-display text-lg font-semibold text-ink mb-4">Equipment Quick Ref</h3>
              <div className="space-y-3">
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Longbow</h4><p className="font-serif text-xs text-ink-muted mt-1">Wood x3, Rope x1 | Ranged Fast</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Crossbow</h4><p className="font-serif text-xs text-ink-muted mt-1">Wood x2, Iron x2 | Ranged Slow AP</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Iron Sword</h4><p className="font-serif text-xs text-ink-muted mt-1">Iron x2, Leather x1 | Balanced</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Plate Armor Set</h4><p className="font-serif text-xs text-ink-muted mt-1">Iron x12, Leather x6 | 65% DR</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Steel Armor Set</h4><p className="font-serif text-xs text-ink-muted mt-1">Steel x15, Leather x8 | 80% DR</p></div>
              </div>
            </div>
            <div className="journal-card p-5">
              <h3 className="font-display text-base font-semibold text-ink mb-3">Equipment Priority Order</h3>
              <ol className="space-y-2 font-serif text-sm text-ink-light">
                <li>1. Longbows for all combat settlers</li>
                <li>2. Leather armor for melee defenders</li>
                <li>3. Iron weapons (swords, spears)</li>
                <li>4. Crossbows for elite marksmen</li>
                <li>5. Plate armor upgrade</li>
                <li>6. Steel equipment for elite role</li>
              </ol>
            </div>
          </aside>
        </div>
          <div className="max-w-6xl mx-auto px-4 lg:px-8 pb-8"><p className="font-serif text-xs text-ink-muted italic text-center">Data verified against Going Medieval Wiki as of June 2026. Skill names and confirmed crops/animals verified; specific numbers are community estimates. Some mechanics may differ from described — always cross-reference with in-game behavior.</p></div>
      </main>
  );
}
