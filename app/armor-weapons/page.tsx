export const metadata = {
  title: "Going Medieval Best Armor & Weapons — Complete Guide (2026)",
  description:
    "Complete armor and weapons guide for Going Medieval. Best gear for defense, durability, crafting requirements, and combat loadouts.",
};


export default function ArmorWeaponsPage() {
  return (
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-10">
            <section>
              <h1 className="chapter-heading">Best Armor & Weapons Guide</h1>
              <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
                Armor and weapons are what keep your settlers alive when walls fail. Going Medieval's equipment system spans multiple armor tiers from Gambeson to Steel Plate Armour, with helmets, shields, and distinct weapon categories — one-handed, two-handed, ranged, and siege. Each item has material quality tiers (Steel &gt; Iron &gt; Wood; Gold is decorative only) and specific crafting workstation requirements. Choosing the right gear for each settler and upgrading equipment as your colony advances is fundamental to survival. This guide compares every armor tier and weapon type, details crafting requirements, and provides optimal equipment recommendations for every stage of the game. Data below is based on community testing and is for reference only.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Armor Tier Comparison</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Armor in Going Medieval reduces incoming damage by a percentage based on the armor tier versus the attacker's weapon penetration. Higher-tier armor provides better protection and improved durability. Material quality follows Steel &gt; Iron &gt; Wood; Gold variants exist for Mail and Plate Armour but are decorative only — they provide identical protection to their Iron counterparts and should never be crafted for combat. All numerical values below are community estimates.
              </p>
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Armor Tier</th>
                    <th>Material</th>
                    <th>Damage Reduction</th>
                    <th>Durability</th>
                    <th>Materials (Full Set)</th>
                    <th>Mobility Penalty</th>
                    <th>Best For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Gambeson</td><td>Cloth + Leather</td><td>~30% (est.)</td><td>~150 (est.)</td><td>~Cloth x6, Leather x4 (est.)</td><td>Minimal</td><td>Early-game, archers</td></tr>
                  <tr><td>Leather Armour</td><td>Leather</td><td>~35% (est.)</td><td>~200 (est.)</td><td>~Leather x10 (est.)</td><td>Minimal</td><td>Early skirmishers</td></tr>
                  <tr><td>Mail Armour (Iron)</td><td>Iron</td><td>~50% (est.)</td><td>~350 (est.)</td><td>~Iron x10, Leather x5 (est.)</td><td>Light</td><td>Mid-game melee</td></tr>
                  <tr><td>Mail Armour (Steel)</td><td>Steel</td><td>~60% (est.)</td><td>~500 (est.)</td><td>~Steel x10, Leather x5 (est.)</td><td>Light</td><td>Mid-game elite</td></tr>
                  <tr><td>Plate Armour (Iron)</td><td>Iron</td><td>~70% (est.)</td><td>~550 (est.)</td><td>~Iron x15, Leather x6 (est.)</td><td>Moderate</td><td>Late-game tanks</td></tr>
                  <tr><td>Plate Armour (Steel)</td><td>Steel</td><td>~80% (est.)</td><td>~750 (est.)</td><td>~Steel x15, Leather x6 (est.)</td><td>Heavy</td><td>Endgame elite</td></tr>
                </tbody>
              </table>
              <p className="font-serif text-sm text-ink-muted italic mt-2">Data source: Community testing estimates. Gold Mail/Plate Armour variants exist but are decorative only — same stats as Iron.</p>

              <h3 className="font-display text-lg font-semibold text-ink mt-6 mb-3">Helmets</h3>
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Helmet</th>
                    <th>Material</th>
                    <th>Head Protection</th>
                    <th>Craftable</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Leather Helmet</td><td>Leather (Iron/Steel/Gold)</td><td>~20% (est.)</td><td>Yes</td></tr>
                  <tr><td>Mail Helmet</td><td>Iron/Steel/Gold</td><td>~40% (est.)</td><td>Yes</td></tr>
                  <tr><td>Great Helm</td><td>Iron/Steel/Gold</td><td>~55% (est.)</td><td>Yes</td></tr>
                  <tr><td>Kettle Helmet</td><td>—</td><td>~35% (est.)</td><td>No (loot)</td></tr>
                  <tr><td>Pigface Helmet</td><td>—</td><td>~50% (est.)</td><td>No (loot)</td></tr>
                  <tr><td>Horned Helmet</td><td>—</td><td>~40% (est.)</td><td>No (loot)</td></tr>
                  <tr><td>Bone Helmet</td><td>—</td><td>~25% (est.)</td><td>No (loot)</td></tr>
                  <tr><td>Mask / Horned Mask</td><td>—</td><td>~15% (est.)</td><td>No (loot)</td></tr>
                  <tr><td>Heretic Helmet</td><td>—</td><td>~30% (est.)</td><td>No (loot)</td></tr>
                </tbody>
              </table>
              <p className="font-serif text-sm text-ink-muted italic mt-2">Data source: Community testing estimates.</p>

              <h3 className="font-display text-lg font-semibold text-ink mt-6 mb-3">Shields</h3>
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Shield</th>
                    <th>Block Chance</th>
                    <th>Durability</th>
                    <th>Materials</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Wooden Buckler</td><td>~30% (est.)</td><td>~80 (est.)</td><td>~Wood x2 (est.)</td></tr>
                  <tr><td>Wooden Shield</td><td>~45% (est.)</td><td>~150 (est.)</td><td>~Wood x4 (est.)</td></tr>
                  <tr><td>Tower Shield</td><td>~60% (est.)</td><td>~300 (est.)</td><td>~Wood x4, Iron x2 (est.)</td></tr>
                </tbody>
              </table>
              <p className="font-serif text-sm text-ink-muted italic mt-2">Data source: Community testing estimates.</p>

              <h3 className="font-display text-lg font-semibold text-ink mt-6 mb-3">Non-Craftable Body Armour</h3>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                The following armour types can only be acquired as loot from raiders. They cannot be crafted at any workstation:
                <strong className="text-ink"> Wood Armour</strong>, <strong className="text-ink">Savage Plate Armour</strong>, and <strong className="text-ink">Bone Armour</strong>.
                These are generally inferior to crafted equivalents at comparable colony stages and are best used as temporary replacements while your crafting pipeline catches up.
              </p>

              <p className="font-serif text-base text-ink-light leading-relaxed mt-4">
                Key insight: mobility matters. Plate Armour provides exceptional protection but slows settlers down significantly. Archers who need to reposition should stick with Gambeson or Leather Armour. Melee defenders holding chokepoints benefit most from heavy Plate Armour since they don't need to move much once engaged. Always prioritize Steel material over Iron for your top combat settlers — the protection difference is significant.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Weapon Comparison</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Weapon choice should be based on the settler's combat role, skill levels, and enemy types. Each weapon has distinct range, damage, speed, and special characteristics. Weapons are organized below by category — one-handed, two-handed, ranged, and siege — with craftable items listed first. All numerical values are community estimates.
              </p>

              <h3 className="font-display text-lg font-semibold text-ink mt-6 mb-3">One-Handed Melee Weapons</h3>
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Weapon</th>
                    <th>Base Damage</th>
                    <th>Armor Pen.</th>
                    <th>Speed</th>
                    <th>Materials</th>
                    <th>Craftable</th>
                    <th>Best Role</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Short Sword</td><td>~18-24 (est.)</td><td>~20% (est.)</td><td>Medium</td><td>~Iron x2, Leather x1 (est.)</td><td>Yes</td><td>Balanced melee</td></tr>
                  <tr><td>Mace</td><td>~22-30 (est.)</td><td>~35% (est.)</td><td>Slow</td><td>~Iron x3, Wood x1 (est.)</td><td>Yes</td><td>Armor-cracker</td></tr>
                  <tr><td>Hatchet</td><td>~15-20 (est.)</td><td>~15% (est.)</td><td>Fast</td><td>~Iron x1, Wood x2 (est.)</td><td>Yes</td><td>Tool/weapon hybrid</td></tr>
                  <tr><td>Cudgel</td><td>~12-18 (est.)</td><td>~10% (est.)</td><td>Fast</td><td>~Wood x2 (est.)</td><td>Yes</td><td>Cheap starter</td></tr>
                  <tr><td>Wooden Flail</td><td>~14-20 (est.)</td><td>~20% (est.)</td><td>Medium</td><td>~Wood x3, Rope x1 (est.)</td><td>Yes</td><td>Early blunt</td></tr>
                  <tr><td>Falchion</td><td>~22-28 (est.)</td><td>~25% (est.)</td><td>Medium</td><td>Loot only</td><td>No</td><td>Slashing damage</td></tr>
                  <tr><td>Knightly Sword</td><td>~26-32 (est.)</td><td>~30% (est.)</td><td>Medium</td><td>Loot only</td><td>No</td><td>Elite one-handed</td></tr>
                  <tr><td>War Hammer</td><td>~28-36 (est.)</td><td>~45% (est.)</td><td>Slow</td><td>Loot only</td><td>No</td><td>Heavy armor counter</td></tr>
                  <tr><td>Dagger</td><td>~10-14 (est.)</td><td>~25% (est.)</td><td>Very Fast</td><td>Loot only</td><td>No</td><td>Finisher/backup</td></tr>
                  <tr><td>Bludgeon</td><td>~18-24 (est.)</td><td>~30% (est.)</td><td>Slow</td><td>Loot only</td><td>No</td><td>Blunt damage</td></tr>
                  <tr><td>Military Pick</td><td>~20-26 (est.)</td><td>~40% (est.)</td><td>Medium</td><td>Loot only</td><td>No</td><td>Armor-piercing</td></tr>
                  <tr><td>Reinforced Flail</td><td>~24-30 (est.)</td><td>~35% (est.)</td><td>Medium</td><td>Loot only</td><td>No</td><td>Shield bypass</td></tr>
                </tbody>
              </table>

              <h3 className="font-display text-lg font-semibold text-ink mt-6 mb-3">Two-Handed Melee Weapons</h3>
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Weapon</th>
                    <th>Base Damage</th>
                    <th>Armor Pen.</th>
                    <th>Speed</th>
                    <th>Materials</th>
                    <th>Craftable</th>
                    <th>Best Role</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Long Sword</td><td>~26-34 (est.)</td><td>~30% (est.)</td><td>Medium</td><td>~Iron x3, Leather x1 (est.)</td><td>Yes</td><td>Balanced two-handed</td></tr>
                  <tr><td>Two-Handed Mace</td><td>~30-40 (est.)</td><td>~40% (est.)</td><td>Slow</td><td>~Iron x4, Wood x2 (est.)</td><td>Yes</td><td>Heavy blunt</td></tr>
                  <tr><td>Berdiche</td><td>~32-42 (est.)</td><td>~45% (est.)</td><td>Slow</td><td>~Iron x4, Wood x2 (est.)</td><td>Yes</td><td>Sweeping attacks</td></tr>
                  <tr><td>Greataxe</td><td>~35-45 (est.)</td><td>~50% (est.)</td><td>Very Slow</td><td>~Iron x5, Wood x2 (est.)</td><td>Yes</td><td>Maximum damage</td></tr>
                  <tr><td>Wooden Spear</td><td>~16-22 (est.)</td><td>~15% (est.)</td><td>Fast</td><td>~Wood x3 (est.)</td><td>Yes</td><td>Reach advantage</td></tr>
                  <tr><td>Two-Handed Flail</td><td>~28-36 (est.)</td><td>~35% (est.)</td><td>Medium</td><td>~Iron x3, Wood x2, Rope x1 (est.)</td><td>Yes</td><td>Shield bypass</td></tr>
                  <tr><td>Greatsword</td><td>~38-48 (est.)</td><td>~40% (est.)</td><td>Slow</td><td>Loot only</td><td>No</td><td>Elite two-handed</td></tr>
                  <tr><td>Two-Handed Flanged Mace</td><td>~35-45 (est.)</td><td>~50% (est.)</td><td>Slow</td><td>Loot only</td><td>No</td><td>Armor destruction</td></tr>
                  <tr><td>Two-Handed War Hammer</td><td>~40-50 (est.)</td><td>~55% (est.)</td><td>Very Slow</td><td>Loot only</td><td>No</td><td>Maximum AP</td></tr>
                  <tr><td>Billhook</td><td>~28-36 (est.)</td><td>~35% (est.)</td><td>Medium</td><td>Loot only</td><td>No</td><td>Reach + slash</td></tr>
                  <tr><td>Warfork</td><td>~30-38 (est.)</td><td>~40% (est.)</td><td>Medium</td><td>Loot only</td><td>No</td><td>Piercing</td></tr>
                  <tr><td>Spear</td><td>~22-28 (est.)</td><td>~25% (est.)</td><td>Fast</td><td>Loot only</td><td>No</td><td>Reach, gate defense</td></tr>
                  <tr><td>Staff</td><td>~12-16 (est.)</td><td>~10% (est.)</td><td>Fast</td><td>Loot only</td><td>No</td><td>Low-tier starter</td></tr>
                </tbody>
              </table>

              <h3 className="font-display text-lg font-semibold text-ink mt-6 mb-3">Ranged Weapons</h3>
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Weapon</th>
                    <th>Base Damage</th>
                    <th>Armor Pen.</th>
                    <th>Speed</th>
                    <th>Materials</th>
                    <th>Craftable</th>
                    <th>Best Role</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Short Bow</td><td>~14-18 (est.)</td><td>~10% (est.)</td><td>Fast</td><td>~Wood x2 (est.)</td><td>Yes</td><td>Cheap ranged</td></tr>
                  <tr><td>Longbow</td><td>~18-24 (est.)</td><td>~15% (est.)</td><td>Fast</td><td>~Wood x3, Rope x1 (est.)</td><td>Yes</td><td>Wall archer</td></tr>
                  <tr><td>Crossbow</td><td>~28-36 (est.)</td><td>~40% (est.)</td><td>Slow</td><td>~Wood x2, Iron x2 (est.)</td><td>Yes</td><td>Armor-piercing sniper</td></tr>
                  <tr><td>Heavy Crossbow</td><td>~35-45 (est.)</td><td>~50% (est.)</td><td>Very Slow</td><td>~Wood x2, Iron x3 (est.)</td><td>Yes</td><td>Maximum ranged AP</td></tr>
                  <tr><td>War Bow</td><td>~22-28 (est.)</td><td>~20% (est.)</td><td>Fast</td><td>Loot only</td><td>No</td><td>Upgraded longbow</td></tr>
                  <tr><td>Masterwork Bow</td><td>~28-35 (est.)</td><td>~25% (est.)</td><td>Medium</td><td>Loot only</td><td>No</td><td>Elite archer</td></tr>
                  <tr><td>Light Crossbow</td><td>~24-32 (est.)</td><td>~35% (est.)</td><td>Medium</td><td>Loot only</td><td>No</td><td>Mobile crossbowman</td></tr>
                </tbody>
              </table>

              <h3 className="font-display text-lg font-semibold text-ink mt-6 mb-3">Siege Weapons</h3>
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Weapon</th>
                    <th>Base Damage</th>
                    <th>Structure Damage</th>
                    <th>Speed</th>
                    <th>Materials</th>
                    <th>Best Role</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Wooden Battering Ram</td><td>~50-70 (est.)</td><td>Very High</td><td>Very Slow</td><td>~Wood x8 (est.)</td><td>Gate/door destruction</td></tr>
                  <tr><td>Metal Battering Ram</td><td>~80-100 (est.)</td><td>Extreme</td><td>Very Slow</td><td>~Iron x6, Wood x4 (est.)</td><td>Endgame siege</td></tr>
                </tbody>
              </table>

              <p className="font-serif text-sm text-ink-muted italic mt-2">Data source: Community testing estimates. All numerical values are approximate.</p>

              <p className="font-serif text-base text-ink-light leading-relaxed mt-4">
                Material quality matters for weapons too: Steel &gt; Iron &gt; Wood. A Steel Short Sword will outperform an Iron Falcon. Gold weapons exist but are decorative only — they deal the same damage as Iron equivalents. When choosing between craftable and non-craftable weapons, prioritize what your colony can produce reliably. Relying on loot drops for your frontline settlers' weapons creates a fragile equipment pipeline.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Crafting Requirements & Production Pipeline</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Equipment crafting requires specific workstations, raw materials, and skilled settlers. Setting up an efficient production pipeline ensures your colony always has backup weapons and replacement armor ready. Each item type requires a specific verified crafting station and minimum skill level.
              </p>
              <div className="space-y-3">
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Bowyer's Table (Ranged Weapons)</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">Crafts: Short Bow, Longbow, Crossbow, Heavy Crossbow, arrows/bolts. Requires: Carpentry skill 3+. Production pipeline: Wood (Lumberjack) → Bowyer's Table → Ammo stockpile. Keep steady wood supply — each bow needs 2-3 wood plus ammunition.</p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Blacksmith's Forge (Metal Weapons)</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">Crafts: Short Sword, Mace, Hatchet, Long Sword, Two-Handed Mace, Berdiche, Greataxe, Two-Handed Flail, Cudgel, Wooden Flail. Requires: Smithing skill 5+ for basic items, 8+ for steel-quality items. Production pipeline: Iron Ore → Smelter → Iron Ingots → Blacksmith's Forge → Weapon stockpile. Steel weapons require additional coal and a blast furnace.</p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Armourer's Table (Metal Armour)</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">Crafts: Mail Armour, Plate Armour, Mail Helmet, Great Helm (Iron/Steel/Gold variants). Requires: Smithing skill 7+. Production pipeline: Iron Ore → Smelter → Iron Ingots → Armourer's Table → Armour stockpile. Steel variants require blast furnace processing.</p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Sewing Station (Cloth & Leather)</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">Crafts: Gambeson, Leather Armour, Leather Helmet, clothing. Requires: Tailoring skill 3+. Materials: Leather (from butchering animals), Cloth (from flax farming). Production pipeline: Flax/Animals → Sewing Station → Armour/Clothing stockpile.</p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Woodwork Bench (Shields & Wooden Items)</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">Crafts: Wooden Buckler, Wooden Shield, Tower Shield, Wooden Battering Ram, Wooden Spear, training weapons. Requires: Carpentry skill 3+. Production pipeline: Wood → Woodwork Bench → Shield stockpile. Metal Battering Ram additionally requires Blacksmith's Forge for iron components.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Optimal Equipment by Game Stage</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Equipment priorities shift as your colony develops. Rushing for Plate Armour before you have iron production is wasteful; settling for Gambeson when facing well-armed raiders is suicidal. Here is the optimal equipment roadmap by colony progression stage.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                Early game (0-5 settlers, Year 1): Short Bows or Longbows for all combat settlers, Gambeson for melee defenders. Do not invest in metal weapons until you have established iron mining. Mid game (6-10 settlers, Year 2-3): Upgrade melee to Short Swords and Mail Armour (Iron). Add 1-2 Crossbows for your best marksmen. Leather Armour for archers. Late game (10+ settlers, Year 3+): Plate Armour (Steel) on elite melee defenders, Long Swords or Two-Handed Maces for front-line fighters. Heavy Crossbows for top marksmen. Maintain a stockpile of 2 backup weapons and 1 backup armor set per combat settler.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
              <div className="faq-item">
                <details>
                  <summary>Should I equip every settler with weapons?</summary>
                  <p>Yes — every settler, even non-combat specialists, should carry at least a basic weapon. Raiders can breach your walls and reach civilians. A cook with a Cudgel or Wooden Spear is far more useful than a cook fighting bare-handed. Keep a stockpile of basic weapons for emergency armament of non-combat settlers.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>How often does armor need replacing?</summary>
                  <p>Armor durability degrades with each hit taken. Gambeson typically lasts 2-3 battles, Leather Armour 3-4 battles, Mail Armour 5-7 battles, Plate Armour (Steel) 10+ battles. Check armor condition after every raid. Replace any armor piece below 30% durability — damaged armor provides reduced protection.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>Is steel worth the production chain investment?</summary>
                  <p>For your best melee defenders, yes. Steel Plate Armour and Steel Long Swords provide a significant combat advantage that justifies the complex production chain (iron → smelt → coal → blast furnace → steel). However, only produce steel for your top 2-3 combat settlers; the rest can use Iron Mail Armour or Iron Plate Armour perfectly well. Gold variants should never be crafted for combat — they are purely decorative.</p>
                </details>
              </div>
            </section>
          </div>

          <aside className="lg:w-[35%] space-y-8 shrink-0">
            <div className="field-sidebar-block">
              <h3 className="font-display text-lg font-semibold text-ink mb-4">Equipment Quick Ref</h3>
              <div className="space-y-3">
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Short Sword</h4><p className="font-serif text-xs text-ink-muted mt-1">~Iron x2, Leather x1 (est.) | Balanced melee</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Longbow</h4><p className="font-serif text-xs text-ink-muted mt-1">~Wood x3, Rope x1 (est.) | Ranged Fast</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Crossbow</h4><p className="font-serif text-xs text-ink-muted mt-1">~Wood x2, Iron x2 (est.) | Ranged Slow AP</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Mail Armour Set (Iron)</h4><p className="font-serif text-xs text-ink-muted mt-1">~Iron x10, Leather x5 (est.) | ~50% DR (est.)</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Plate Armour Set (Steel)</h4><p className="font-serif text-xs text-ink-muted mt-1">~Steel x15, Leather x6 (est.) | ~80% DR (est.)</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Tower Shield</h4><p className="font-serif text-xs text-ink-muted mt-1">~Wood x4, Iron x2 (est.) | ~60% Block (est.)</p></div>
              </div>
            </div>
            <div className="journal-card p-5">
              <h3 className="font-display text-base font-semibold text-ink mb-3">Equipment Priority Order</h3>
              <ol className="space-y-2 font-serif text-sm text-ink-light">
                <li>1. Short Bows / Longbows for all combat settlers</li>
                <li>2. Gambeson for melee defenders</li>
                <li>3. Short Swords, Maces (Iron)</li>
                <li>4. Mail Armour (Iron) upgrade</li>
                <li>5. Crossbows for elite marksmen</li>
                <li>6. Plate Armour (Iron) upgrade</li>
                <li>7. Steel weapons & Steel Plate Armour</li>
              </ol>
            </div>
            <div className="journal-card p-5">
              <h3 className="font-display text-base font-semibold text-ink mb-3">Material Quality</h3>
              <p className="font-serif text-sm text-ink-light">
                <strong className="text-ink">Steel &gt; Iron &gt; Wood</strong> for all weapons and armor. Gold variants of Mail/Plate Armour exist but are <strong className="text-ink">decorative only</strong> — identical protection to Iron equivalents. Never craft gold gear for combat purposes.
              </p>
            </div>
          </aside>
        </div>
      </main>
  );
}
