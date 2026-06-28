{/* Meta description: Going Medieval best weapons ranked tier list — compare melee and ranged weapon stats, DPS, armor penetration, and find the optimal loadout for every raid scenario. */}

/* ── Tier badge style helpers ── */
const tierBadge = (tier: string) => {
  const style: React.CSSProperties = {
    display: 'inline-block',
    width: '2rem',
    height: '2rem',
    lineHeight: '2rem',
    textAlign: 'center',
    fontWeight: 700,
    borderRadius: '3px',
    fontSize: '0.8rem',
    fontFamily: "'Inter', sans-serif",
    color: '#fff',
  };
  switch (tier) {
    case 'S':
      return { ...style, backgroundColor: '#b8860b', boxShadow: '0 0 6px rgba(184,134,11,0.4)' };
    case 'A':
      return { ...style, backgroundColor: '#7f8c8d' };
    case 'B':
      return { ...style, backgroundColor: '#cd7f32' };
    case 'C':
      return { ...style, backgroundColor: '#8c6e4e' };
    case 'D':
      return { ...style, backgroundColor: '#9e9e9e' };
    default:
      return style;
  }
};

/* ── Table row helper ── */
const MeleeTR = ({
  tier,
  name,
  type,
  damage,
  dps,
  armorPen,
  armorDmg,
  bestUse,
}: {
  tier: string;
  name: string;
  type: string;
  damage: string;
  dps: string;
  armorPen: string;
  armorDmg: string;
  bestUse: string;
}) => (
  <tr>
    <td className="text-center" style={{ padding: '0.5rem 0.75rem' }}>
      <span style={tierBadge(tier)}>{tier}</span>
    </td>
    <td className="font-semibold text-ink">{name}</td>
    <td className="text-ink-light">{type}</td>
    <td className="text-ink-light">{damage}</td>
    <td className="text-ink-light">{dps}</td>
    <td className="text-ink-light">{armorPen}</td>
    <td className="text-ink-light">{armorDmg}</td>
    <td className="text-ink-light">{bestUse}</td>
  </tr>
);

const RangedTR = ({
  tier,
  name,
  damage,
  dps,
  range,
  armorPen,
  attackDur,
  bestUse,
}: {
  tier: string;
  name: string;
  damage: string;
  dps: string;
  range: string;
  armorPen: string;
  attackDur: string;
  bestUse: string;
}) => (
  <tr>
    <td className="text-center" style={{ padding: '0.5rem 0.75rem' }}>
      <span style={tierBadge(tier)}>{tier}</span>
    </td>
    <td className="font-semibold text-ink">{name}</td>
    <td className="text-ink-light">{damage}</td>
    <td className="text-ink-light">{dps}</td>
    <td className="text-ink-light">{range}</td>
    <td className="text-ink-light">{armorPen}</td>
    <td className="text-ink-light">{attackDur}</td>
    <td className="text-ink-light">{bestUse}</td>
  </tr>
);

const MELEE_WEAPONS = [
  { tier: 'S', name: 'Longsword (Steel)', type: 'Two-Handed', damage: '38.4–53.76', dps: '10.67–14.93', armorPen: '70%', armorDmg: '60%', bestUse: 'Best all-round melee — highest DPS, slash + pierce' },
  { tier: 'A', name: 'Two-Handed Mace (Iron)', type: 'Two-Handed', damage: '24–42', dps: '4.44–7.78', armorPen: '60%', armorDmg: '190%', bestUse: 'Best anti-armor — smashes shields, stuns raiders' },
  { tier: 'B', name: 'Short Sword (Steel)', type: 'One-Handed', damage: '15.36–26.88', dps: '4.27–7.47', armorPen: '70%', armorDmg: '60%', bestUse: 'Best one-handed — pair with shield for shield walls' },
  { tier: 'B', name: 'Mace (Steel, 1H)', type: 'One-Handed', damage: '15.36–26.88', dps: '3.79–6.64', armorPen: '60%', armorDmg: '200%', bestUse: 'Anti-armor one-handed — shield-compatible mace' },
  { tier: 'C', name: 'Wooden Spear', type: 'Two-Handed', damage: 'Low (est.)', dps: 'Low (est.)', armorPen: 'Medium (est.)', armorDmg: 'Low', bestUse: 'Early-game budget weapon — craft at Woodwork Bench' },
  { tier: 'C', name: 'Hatchet', type: 'One-Handed', damage: 'Low (est.)', dps: 'Low (est.)', armorPen: 'Low (est.)', armorDmg: 'Medium', bestUse: 'Multi-purpose tool — chopping wood and emergency combat' },
  { tier: 'C', name: 'Cudgel', type: 'One-Handed', damage: 'Low (est.)', dps: 'Low (est.)', armorPen: 'Low (est.)', armorDmg: 'High (est.)', bestUse: 'Cheapest craftable weapon — early game only' },
  { tier: 'D', name: 'Dagger', type: 'One-Handed', damage: 'Very low (est.)', dps: 'Very low (est.)', armorPen: 'Low (est.)', armorDmg: 'Low', bestUse: 'Loot only — collect from dead raiders, do not equip' },
];

const RANGED_WEAPONS = [
  { tier: 'S', name: 'Heavy Crossbow', damage: '28.8–50.4', dps: '2.60–5.41', range: '25m', armorPen: '92%', attackDur: '9.3–11.1s', bestUse: 'Highest single-shot damage and armor penetration — endgame ranged' },
  { tier: 'A', name: 'Longbow', damage: '22 (fixed)', dps: '~4.07', range: '18m', armorPen: '80%', attackDur: '5.4s', bestUse: 'Best sustainable ranged DPS — fast fire rate, good damage' },
  { tier: 'A', name: 'Crossbow', damage: '20.8–31.2', dps: '2.06–3.47', range: '25m', armorPen: '90%', attackDur: '9.0–10.1s', bestUse: 'Excellent armor penetration — 25m range, no Marksman requirement' },
  { tier: 'B', name: 'War Bow (Loot)', damage: 'High (est.)', dps: 'High (est.)', range: '18m+', armorPen: '80%+ (est.)', attackDur: '~5.4s (est.)', bestUse: 'Superior to crafted longbow — raider drop only' },
  { tier: 'C', name: 'Short Bow', damage: '12 (fixed)', dps: '~2.22', range: '18m', armorPen: '80%', attackDur: '5.4s', bestUse: 'Entry-level ranged — zero skill requirements, early game' },
  { tier: 'D', name: 'Gold Weapons (Any)', damage: 'Lowest', dps: 'Lowest', range: '—', armorPen: 'Same', attackDur: 'Slowest', bestUse: 'Decorative only — never craft for combat, sell or display' },
];
export const metadata = {
  title: "Going Medieval Best Weapons Ranked — Tier List (2026)",
  description:
    "Complete weapons tier list for Going Medieval. Best swords, bows, crossbows, and armor ranked by damage, speed, and accuracy.",
};


export default function BestWeaponsRankedPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

        {/* ===== Main content (65%) ===== */}
        <div className="flex-1 lg:max-w-[65%] space-y-10">

          {/* ── H1 + Summary ── */}
          <section>
            <h1 className="chapter-heading">Going Medieval Best Weapons Ranked</h1>
            <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
              Every raid in Going Medieval is a test of your colony's military preparedness, and the weapons your settlers carry determine whether you repel the attack or bury your dead. With over 25 weapons spanning one-handed, two-handed, ranged, and siege categories — each further modified by material (Steel, Iron, Gold) and quality tiers (Flimsy through Flawless) — the equipment landscape is complex. This guide cuts through the noise with a definitive tier list ranking every major weapon type by DPS, armor penetration, armor damage, and practical combat utility. Whether you are building an arrow tower defense line or forging a steel longsword for your champion, these rankings reflect verified wiki data and community testing as of the current game build. All stats shown are for Steel material at Good quality unless otherwise noted, providing a realistic mid-to-late game baseline.
            </p>
          </section>

          {/* ── Melee Tier Table ── */}
          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Melee Weapons Tier List</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Melee weapons in Going Medieval fall into two categories: one-handed weapons that allow a shield in the off-hand, and two-handed weapons that trade defensive capability for raw damage output. One-handed weapons all have 100% base precision, while two-handed weapons share a 95% base precision. The tier rankings below weigh DPS, armor penetration, armor damage (critical for fighting armored raiders in later waves), and whether the weapon can be paired with a shield. Stats reflect Steel material at Good-to-Flawless quality range. For a broader overview of armor and weapon crafting, see our <a href="/armor-weapons" className="text-vermillion underline">Armor & Weapons Guide</a>.
            </p>
            <table className="parchment-table">
              <thead>
                <tr>
                  <th style={{ width: '60px' }}>Tier</th>
                  <th>Weapon</th>
                  <th>Type</th>
                  <th>Damage</th>
                  <th>DPS</th>
                  <th>Armor Pen</th>
                  <th>Armor Dmg</th>
                  <th>Best Use</th>
                </tr>
              </thead>
              <tbody>
                {MELEE_WEAPONS.map((w, i) => (
                  <MeleeTR key={i} tier={w.tier} name={w.name} type={w.type} damage={w.damage} dps={w.dps} armorPen={w.armorPen} armorDmg={w.armorDmg} bestUse={w.bestUse} />
                ))}
              </tbody>
            </table>
            <p className="font-serif text-sm text-ink-muted italic mt-2">Damage and DPS ranges shown from Flimsy to Flawless quality. All melee weapons require the Blacksmith's Forge (metal weapons) or Woodwork Bench (wooden weapons) for crafting.</p>
          </section>

          {/* ── Melee Tier Analysis ── */}
          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Melee Tier Analysis</h2>

            <div className="aged-border p-5 mb-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
              <h3 className="font-display text-xl font-semibold text-ink mb-3">
                <span style={tierBadge('S')}>S</span> S-Tier: Longsword — The Colony's Finest
              </h3>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-3">
                The <strong className="text-ink">Longsword</strong> is the undisputed king of melee combat in Going Medieval. A Steel Longsword at Flawless quality delivers 53.76 damage per hit with an attack interval of 3.6 seconds, yielding approximately 14.93 DPS — the highest sustained melee damage output in the game. Its 70% armor penetration ensures that even heavily armored raiders take meaningful damage, and its 60% armor damage means it steadily degrades enemy protective gear with each strike. The longsword is a two-handed weapon, which means your settler cannot equip a shield alongside it, but the sheer offensive power compensates: most raiders die in two to three hits, minimizing the window for return attacks.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                The catch is accessibility. The Longsword requires the Blacksmithing research tree to be fully completed, a Smithing skill of 20 to craft, and a Melee skill of 15 to wield. This makes it a mid-to-late game weapon — you will not be forging longswords in your first season. The recipe costs 35 metal and 25 fuel per sword, so stockpiling iron and steel ingots is essential. Once you have a settler with the requisite melee skill wielding a Steel Longsword, they become a one-colonist raid defense force. Position them at chokepoints or behind your defensive walls, and they will hold the line against any ground assault. For more on defensive positioning, see our <a href="/defense" className="text-vermillion underline">Defense Guide</a>.
              </p>
            </div>

            <div className="aged-border p-5 mb-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
              <h3 className="font-display text-xl font-semibold text-ink mb-3">
                <span style={tierBadge('A')}>A</span> A-Tier: Two-Handed Mace — The Armor Breaker
              </h3>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-3">
                The <strong className="text-ink">Two-Handed Mace</strong> earns A-tier for one extraordinary stat: 190% armor damage. While its raw DPS (approximately 4.44–7.78 depending on material and quality) is lower than the Longsword, no weapon in the game shreds enemy armor faster. Each swing pulverizes shields, helmets, and chest plates, stripping raiders of their protection so that subsequent hits — from the mace wielder or adjacent settlers — deal full damage to unarmored bodies. The Two-Handed Mace also boasts 150% building damage, making it useful for demolishing enemy siege structures or clearing rubble.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                With a Smithing requirement of only 10 (versus the Longsword's 20), the Two-Handed Mace is accessible much earlier in the game. It costs 15 metal and 10 fuel to craft — less than half the material cost of a Longsword. The 5.4-second attack duration is slow, meaning missed swings are punishing, but when paired with a high-melee-skill settler, each connecting hit sends raiders staggering. The ideal setup is a Two-Handed Mace wielder behind a shield wall of one-handed fighters: the shield bearers absorb incoming arrows and hold the line, while the mace swings overhead to crush armor. This combination is devastating against mid-game raider waves that begin arriving with iron and steel armor.
              </p>
            </div>

            <div className="aged-border p-5 mb-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
              <h3 className="font-display text-xl font-semibold text-ink mb-3">
                <span style={tierBadge('B')}>B</span> B-Tier: Short Sword & Mace (One-Handed) — The Shield Wall
              </h3>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-3">
                <strong className="text-ink">Short Sword</strong> and <strong className="text-ink">Mace</strong> (one-handed variants) share B-tier because they fill the same critical role: shield-compatible melee weapons. In Going Medieval, a settler with a one-handed weapon and a shield gains the defensive benefits of blocking — dramatically reducing incoming damage from arrows and melee attacks — while still contributing offensive output. A Steel Short Sword at Flawless quality deals 26.88 damage per hit with 7.47 DPS, which is respectable for a one-handed weapon. Its 70% armor penetration matches the Longsword, making it effective against lightly-to-moderately armored foes.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                The one-handed <strong className="text-ink">Mace</strong> trades raw DPS (6.64 at Steel Flawless) for extraordinary armor damage: 200%, the highest of any weapon in the game. This makes the one-handed mace the premier choice for settler bodyguards who need to break through enemy armor while maintaining shield protection. Both weapons require zero Smithing skill to craft and zero Melee skill to wield, making them available from the very start of the game. Their low material cost (15 metal, 10–15 fuel) means you can outfit an entire colony quickly. For early-game defense before Longswords become available, a wall of Short Sword and shield settlers backed by archers is the gold standard. Learn more about combining melee and ranged in our <a href="/crossbow-defense" className="text-vermillion underline">Crossbow Defense Guide</a>.
              </p>
            </div>

            <div className="aged-border p-5 mb-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
              <h3 className="font-display text-xl font-semibold text-ink mb-3">
                <span style={tierBadge('C')}>C</span> C-Tier: Wooden Spear, Hatchet & Cudgel — Early Game Fillers
              </h3>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                These weapons exist for one reason: you need something sharp before you have a functioning blacksmith. The <strong className="text-ink">Wooden Spear</strong>, <strong className="text-ink">Hatchet</strong>, and <strong className="text-ink">Cudgel</strong> are all craftable at the Woodwork Bench with basic materials and no skill requirements. They deal low damage and have poor armor penetration, but they are better than sending settlers into combat unarmed. The Hatchet doubles as a woodcutting tool, making it a pragmatic early-game choice. The Cudgel is the cheapest weapon in the game to produce. Once you establish a Blacksmith's Forge and begin producing Iron Short Swords, retire these wooden weapons immediately — the damage gap is enormous.
              </p>
            </div>

            <div className="aged-border p-5" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
              <h3 className="font-display text-xl font-semibold text-ink mb-3">
                <span style={tierBadge('D')}>D</span> D-Tier: Dagger & Gold Weapons — Avoid in Combat
              </h3>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                The <strong className="text-ink">Dagger</strong> is a loot-only weapon with negligible damage and no crafting path — collect them from dead raiders and store them as trade goods, never equip them on a settler you intend to survive. <strong className="text-ink">Gold weapons</strong> of any type deserve special mention: gold is the softest weapon material in the game. A Gold Longsword at Flawless quality deals only 31.36 damage with a slower 3.96s attack interval, compared to the Steel equivalent's 53.76 damage at 3.6s. Gold weapons have the lowest durability, lowest damage, and slowest attack speed of any material tier. They exist for display on weapon racks and for trade value — never for combat. If you are spending gold ingots on weapons, you are wasting your most precious resource.
              </p>
            </div>
          </section>

          {/* ── Ranged Tier Table ── */}
          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Ranged Weapons Tier List</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Ranged weapons are the backbone of Going Medieval defense. A settler positioned on a tower three levels above ground gains significant range bonuses, allowing them to engage raiders long before they reach your walls. All ranged weapons are two-handed, meaning no shield — if enemies close to melee range, archers must switch to fists or a backup weapon. Ranged weapon precision starts at 95% (Flimsy) and improves to 100% (Good and above), with distance-based falloff that varies by weapon type. The rankings below weigh single-shot damage, DPS, armor penetration, range, and practical requirements.
            </p>
            <table className="parchment-table">
              <thead>
                <tr>
                  <th style={{ width: '60px' }}>Tier</th>
                  <th>Weapon</th>
                  <th>Damage</th>
                  <th>DPS</th>
                  <th>Range</th>
                  <th>Armor Pen</th>
                  <th>Attack Speed</th>
                  <th>Best Use</th>
                </tr>
              </thead>
              <tbody>
                {RANGED_WEAPONS.map((w, i) => (
                  <RangedTR key={i} tier={w.tier} name={w.name} damage={w.damage} dps={w.dps} range={w.range} armorPen={w.armorPen} attackDur={w.attackDur} bestUse={w.bestUse} />
                ))}
              </tbody>
            </table>
            <p className="font-serif text-sm text-ink-muted italic mt-2">Damage ranges from Flimsy to Flawless quality. All ranged weapons crafted at the Bowyer's Table. Crossbows require Mechanical Components.</p>
          </section>

          {/* ── Ranged Analysis ── */}
          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Ranged Weapon Analysis</h2>

            <div className="aged-border p-5 mb-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
              <h3 className="font-display text-xl font-semibold text-ink mb-3">
                <span style={tierBadge('S')}>S</span> Heavy Crossbow — The Siege Stopper
              </h3>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-3">
                The <strong className="text-ink">Heavy Crossbow</strong> is the most powerful ranged weapon in Going Medieval. At Flawless quality, a single bolt deals 50.4 damage — enough to kill or cripple most unarmored raiders in one shot. Its 92% armor penetration means that even steel-clad enemies absorb only 8% of the bolt's force, making it the premier counter to late-game armored raids. The 25-meter range matches the standard Crossbow, giving your marksmen maximum engagement distance from tower positions.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                The trade-off is speed: with an attack duration of 9.3–11.1 seconds depending on quality, the Heavy Crossbow has the slowest fire rate of any ranged weapon. This makes misses extremely costly. Additionally, it requires a Marksman skill of 15 to wield and Carpentry 20 plus the Crossbows II research to craft. The recipe demands 45 wood and 3 Mechanical Components — a mid-to-late game resource that requires advance preparation. The Heavy Crossbow truly shines when positioned on elevated towers where it can fire multiple shots before enemies close the distance. Pair it with Longbow archers who provide covering fire during reload windows for a devastating combined-arms defense.
              </p>
            </div>

            <div className="aged-border p-5 mb-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
              <h3 className="font-display text-xl font-semibold text-ink mb-3">
                <span style={tierBadge('A')}>A</span> Longbow & Crossbow — The Workhorses
              </h3>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-3">
                The <strong className="text-ink">Longbow</strong> delivers the best sustained ranged DPS in the game. With 22 damage per shot and a 5.4-second attack interval, it produces approximately 4.07 DPS — nearly matching the Heavy Crossbow's output while firing twice as fast. Its 80% armor penetration and 18-meter range make it effective against most raiders through the mid-game. The Longbow requires only a Marksman skill of 10 and 40 wood to craft, with no metal or mechanical components needed. This accessibility, combined with strong performance, makes the Longbow the default ranged weapon for most of the game.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                The standard <strong className="text-ink">Crossbow</strong> trades fire speed for armor penetration. Its 90% armor penetration and 50% armor damage outperform the Longbow against armored targets, and its 25-meter range gives it a 7-meter advantage in engagement distance. However, the slow 9–10 second reload and lower DPS (2.06–3.47) make it less efficient against unarmored foes. The Crossbow requires zero Marksman skill to use — any settler can pick one up and fire it — but needs Carpentry 20 and the Crossbows I research to craft, plus 35 wood and 2 Mechanical Components. The ideal ranged defense combines both: Longbows for volume of fire against light raiders, Crossbows for armor-piercing shots against heavy units.
              </p>
            </div>

            <div className="aged-border p-5" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
              <h3 className="font-display text-xl font-semibold text-ink mb-3">
                <span style={tierBadge('C')}>C</span> Short Bow — The Starter
              </h3>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                The <strong className="text-ink">Short Bow</strong> is the entry point to ranged combat. With 12 damage per shot and approximately 2.22 DPS, it is strictly inferior to the Longbow in every metric except accessibility: zero skill requirements for both crafting and wielding, and only 20 wood to produce. Every colony should craft a handful of Short Bows in the first few days to arm settlers for hunting wildlife and deterring early raids. Once you unlock the Longbow through Fletching II research, replace all Short Bows immediately. The damage difference — 12 versus 22 per shot — is almost double, and there is no reason to keep Short Bows in service once Longbows are available.
              </p>
            </div>
          </section>

          {/* ── Weapon Stats Comparison Table ── */}
          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Weapon Stats Comparison Table</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              The comprehensive table below compares the key stats of every major weapon type at Steel material, Good quality — a realistic benchmark for a colony with a functioning blacksmith and moderate resources. DPS is calculated as Damage divided by Attack Duration. Note that damage values for Gold material are approximately 60% of Iron values, and Steel values are roughly 120% of Iron values. Quality modifiers range from 0.8x (Flimsy) to 1.4x (Flawless) of the base Good-quality stats.
            </p>
            <table className="parchment-table">
              <thead>
                <tr>
                  <th>Weapon</th>
                  <th>Category</th>
                  <th>Damage</th>
                  <th>DPS</th>
                  <th>Atk Speed</th>
                  <th>Armor Pen</th>
                  <th>Armor Dmg</th>
                  <th>Range</th>
                  <th>Skill Req.</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="font-semibold text-ink">Longsword (Steel)</td><td>2H Melee</td><td>38.4</td><td>10.67</td><td>3.6s</td><td>70%</td><td>60%</td><td>0.3m</td><td>Melee 15</td></tr>
                <tr><td className="font-semibold text-ink">Two-Handed Mace (Iron)</td><td>2H Melee</td><td>30.6</td><td>5.67</td><td>5.4s</td><td>60%</td><td>190%</td><td>0.3m</td><td>Melee 0</td></tr>
                <tr><td className="font-semibold text-ink">Short Sword (Steel)</td><td>1H Melee</td><td>19.2</td><td>5.33</td><td>3.6s</td><td>70%</td><td>60%</td><td>0.3m</td><td>Melee 0</td></tr>
                <tr><td className="font-semibold text-ink">Mace 1H (Steel)</td><td>1H Melee</td><td>19.2</td><td>4.74</td><td>4.05s</td><td>60%</td><td>200%</td><td>0.3m</td><td>Melee 0</td></tr>
                <tr><td className="font-semibold text-ink">Heavy Crossbow</td><td>Ranged</td><td>36.0</td><td>3.48</td><td>10.35s</td><td>92%</td><td>40%</td><td>25m</td><td>Marksman 15</td></tr>
                <tr><td className="font-semibold text-ink">Longbow</td><td>Ranged</td><td>22.0</td><td>4.07</td><td>5.4s</td><td>80%</td><td>40%</td><td>18m</td><td>Marksman 10</td></tr>
                <tr><td className="font-semibold text-ink">Crossbow</td><td>Ranged</td><td>26.0</td><td>2.75</td><td>9.45s</td><td>90%</td><td>50%</td><td>25m</td><td>Marksman 0</td></tr>
                <tr><td className="font-semibold text-ink">Short Bow</td><td>Ranged</td><td>12.0</td><td>2.22</td><td>5.4s</td><td>80%</td><td>40%</td><td>18m</td><td>Marksman 0</td></tr>
              </tbody>
            </table>
            <p className="font-serif text-sm text-ink-muted italic mt-2">All values at Steel material, Good quality. Two-Handed Mace shown at Iron/Good as Steel wiki data appears inconsistent. DPS = Damage / Attack Duration.</p>
          </section>

          {/* ── Situational Weapon Guide ── */}
          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Situational Weapon Guide</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              No single weapon is optimal in every situation. The right choice depends on the enemy composition, your settler's skills, available resources, and your defensive layout. Below are the most common combat scenarios and the recommended weapon loadouts for each.
            </p>
            <table className="parchment-table">
              <thead>
                <tr>
                  <th>Scenario</th>
                  <th>Primary Weapon</th>
                  <th>Secondary / Support</th>
                  <th>Why This Loadout</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-semibold text-ink">Early game raids (Year 1)</td>
                  <td>Short Sword + Wooden Shield</td>
                  <td>Short Bow archers on walls</td>
                  <td>Low skill requirements, shield blocks arrows, Short Bow provides ranged support. Craftable from Day 1.</td>
                </tr>
                <tr>
                  <td className="font-semibold text-ink">Armored raider waves</td>
                  <td>Two-Handed Mace</td>
                  <td>Crossbow / Heavy Crossbow</td>
                  <td>190% armor damage shreds enemy plate. Crossbows' 90–92% armor pen picks off armored targets at range.</td>
                </tr>
                <tr>
                  <td className="font-semibold text-ink">Tower defense (elevated)</td>
                  <td>Longbow</td>
                  <td>Heavy Crossbow</td>
                  <td>Height extends effective range. Longbows for volume of fire, Heavy Crossbows for one-shot kills on priority targets.</td>
                </tr>
                <tr>
                  <td className="font-semibold text-ink">Chokepoint holding</td>
                  <td>Longsword</td>
                  <td>Short Sword + Shield wall behind</td>
                  <td>Longsword's 10.67 DPS clears chokepoints fast. Shield bearers absorb arrows from raiders behind the front line.</td>
                </tr>
                <tr>
                  <td className="font-semibold text-ink">Siege weapon destruction</td>
                  <td>Two-Handed Mace</td>
                  <td>Heavy Crossbow</td>
                  <td>150% building damage on the mace destroys siege engines fast. Heavy Crossbow bolts kill siege operators at 25m.</td>
                </tr>
                <tr>
                  <td className="font-semibold text-ink">Hunting wildlife</td>
                  <td>Short Bow / Longbow</td>
                  <td>—</td>
                  <td>Ranged kills at distance prevent animal retaliation. Short Bow for small game, Longbow for wolves and boars.</td>
                </tr>
              </tbody>
            </table>
            <p className="font-serif text-sm text-ink-muted italic mt-2">Recommendations assume Steel material at Good quality or better. Adjust based on available resources and settler skill levels.</p>
          </section>

          {/* ── Material & Quality Effects ── */}
          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Material & Quality Effects on Weapon Performance</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Every weapon in Going Medieval is modified by two independent factors: material and quality. Understanding these modifiers is essential for evaluating weapon stats and planning your smithing production pipeline. The material determines the base damage tier, while quality acts as a multiplier on top of that base. Together, they can make the same weapon type vary by over 70% in damage output.
            </p>
            <table className="parchment-table">
              <thead>
                <tr>
                  <th>Material</th>
                  <th>Damage vs Iron Base</th>
                  <th>Durability vs Iron Base</th>
                  <th>Attack Speed</th>
                  <th>Combat Verdict</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="font-semibold text-ink">Steel</td><td>~120%</td><td>~200%</td><td>Normal</td><td>Best combat material — always prioritize for weapons</td></tr>
                <tr><td className="font-semibold text-ink">Iron</td><td>100% (baseline)</td><td>100% (baseline)</td><td>Normal</td><td>Reliable mid-tier — use until steel production is established</td></tr>
                <tr><td className="font-semibold text-ink">Gold</td><td>~60%</td><td>~50%</td><td>~10% slower</td><td>Decorative only — never use in combat</td></tr>
              </tbody>
            </table>
            <p className="font-serif text-sm text-ink-muted italic mt-2">Quality multipliers apply on top of material base: Flimsy 0.8x, Sturdy 0.95x, Good 1.0x, Fine 1.1x, Superior 1.2x, Flawless 1.4x (approximate community estimates).</p>
          </section>

          {/* ── FAQ ── */}
          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Frequently Asked Questions</h2>
            <div className="faq-snippets">
              <details>
                <summary>What is the best weapon in Going Medieval overall?</summary>
                <p>
                  The Steel Longsword is the best all-around weapon, delivering approximately 10.67 DPS at Good quality and up to 14.93 DPS at Flawless. It has 70% armor penetration, making it effective against both armored and unarmored targets. However, "best" depends on context: for anti-armor duty, the Two-Handed Mace with 190% armor damage is superior. For ranged defense, the Heavy Crossbow's 50.4 damage per shot at Flawless quality is unmatched. The Longsword wins as a general-purpose weapon because it combines top-tier DPS with good armor penetration and a fast 3.6-second attack speed, making it effective in nearly every combat scenario.
                </p>
              </details>
              <details>
                <summary>Should I use a bow or a crossbow for colony defense?</summary>
                <p>
                  Use both. The Longbow offers the best sustained DPS (4.07) with a fast 5.4-second reload, making it ideal for engaging waves of lightly armored raiders. The Crossbow and Heavy Crossbow trade fire rate for armor penetration (90–92%) and range (25m vs 18m), making them essential against armored enemies. A typical defense setup places Longbow archers on towers for volume of fire, with 1–2 Heavy Crossbow marksmen targeting priority threats like armored raiders or siege weapon operators. If you must choose one, the Longbow is more versatile for most of the game due to its lower skill requirements and faster output.
                </p>
              </details>
              <details>
                <summary>Are gold weapons worth crafting?</summary>
                <p>
                  No, never for combat. Gold weapons have approximately 60% of Iron weapon damage, 50% of Iron durability, and a 10% slower attack speed. A Gold Longsword at Flawless quality (31.36 damage, 3.96s interval) is dramatically worse than a Steel Longsword at the same quality (53.76 damage, 3.6s interval). Gold weapons exist for two purposes: display on weapon racks for colony decoration, and trade value with merchants. If you have gold ingots, spend them on trade goods or save them — do not forge them into weapons. The same gold ingot used to make a decorative sword could buy iron or steel from a trader, which would produce a far superior weapon.
                </p>
              </details>
              <details>
                <summary>What weapon should I craft first in a new colony?</summary>
                <p>
                  Craft Short Swords and Short Bows immediately. Short Swords require no Smithing skill and only 15 metal + 15 fuel, giving your settlers a serviceable one-handed weapon that can pair with a Wooden Shield. Short Bows require no Carpentry skill and only 20 wood, providing basic ranged capability for hunting and early raids. Once you have a Blacksmith's Forge operational, upgrade to Iron Maces (one-handed) for anti-armor capability. Prioritize researching Fletching II to unlock Longbows as soon as possible — the jump from 12 to 22 damage per arrow is the single biggest early-game combat upgrade available. For a full early game walkthrough, see our <a href="/armor-weapons" className="text-vermillion underline">Armor & Weapons Guide</a>.
                </p>
              </details>
              <details>
                <summary>Do weapon skills affect damage, or just accuracy?</summary>
                <p>
                  In Going Medieval, the Melee skill affects a settler's ability to hit targets and dodge incoming attacks, while the Marksman skill governs ranged accuracy and effective range. Higher skill levels do not directly increase weapon damage — that is determined by the weapon's base stats, material, and quality. However, higher skills indirectly increase effective DPS by improving hit rates and reducing wasted attacks. A settler with Melee 20 wielding a Steel Longsword will land a higher percentage of swings than one with Melee 5, resulting in significantly more damage dealt over the course of a fight. Always assign your highest-skill settlers to your best weapons.
                </p>
              </details>
            </div>
          </section>

          {/* ── Verification note ── */}
          <section>
            <div className="field-divider mb-4" />
            <p className="font-serif text-xs text-ink-muted italic">
              Data source: Community testing estimates. Weapon stats verified against Going Medieval Wiki (goingmedieval.fandom.com) and cross-referenced with community guides. DPS values calculated as Damage / Attack Duration. Material and quality multiplier values are approximate community estimates and may vary with game version. Two-Handed Mace Steel data appears inconsistent on the wiki; Iron values used as reference baseline.
            </p>
          </section>

          {/* ── Back to Home ── */}
          <section>
            <div className="field-divider mb-6" />
            <a
              href="/"
              className="inline-block font-label text-sm text-ink-muted hover:text-vermillion transition-colors"
            >
              &larr; Back to Home
            </a>
          </section>
        </div>

        {/* ===== Sidebar (35%) ===== */}
        <aside className="lg:w-[35%] space-y-8 shrink-0">

          {/* Quick Summary */}
          <div className="field-sidebar-block">
            <h3 className="font-display text-lg font-semibold text-ink mb-4">Tier Summary</h3>
            <div className="space-y-3 font-serif text-sm text-ink-light">
              <div>
                <span className="font-semibold" style={{ color: '#b8860b' }}>S Tier</span>
                <span className="text-ink-muted"> — Longsword (melee), Heavy Crossbow (ranged). The best-in-slot weapons for their categories.</span>
              </div>
              <div>
                <span className="font-semibold" style={{ color: '#7f8c8d' }}>A Tier</span>
                <span className="text-ink-muted"> — Two-Handed Mace, Longbow, Crossbow. Excellent specialists for anti-armor and sustained ranged fire.</span>
              </div>
              <div>
                <span className="font-semibold" style={{ color: '#cd7f32' }}>B Tier</span>
                <span className="text-ink-muted"> — Short Sword, One-Handed Mace, War Bow. Solid shield-compatible options and loot upgrades.</span>
              </div>
              <div>
                <span className="font-semibold" style={{ color: '#8c6e4e' }}>C Tier</span>
                <span className="text-ink-muted"> — Short Bow, Wooden Spear, Hatchet, Cudgel. Early game fillers — replace as soon as possible.</span>
              </div>
              <div>
                <span className="font-semibold" style={{ color: '#9e9e9e' }}>D Tier</span>
                <span className="text-ink-muted"> — Dagger, Gold weapons. Loot-only or decorative. Never use in serious combat.</span>
              </div>
            </div>
          </div>

          {/* Top Weapons Ranked */}
          <div className="journal-card p-5">
            <h3 className="font-display text-base font-semibold text-ink mb-3">Top 5 Weapons Ranked</h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-display text-sm font-semibold text-gold">#1 Steel Longsword (S-Tier, Melee)</h4>
                <p className="font-serif text-xs text-ink-muted mt-0.5">10.67 DPS at Good, 14.93 at Flawless. 70% armor pen. Best all-round weapon in the game.</p>
              </div>
              <div>
                <h4 className="font-display text-sm font-semibold text-gold">#2 Heavy Crossbow (S-Tier, Ranged)</h4>
                <p className="font-serif text-xs text-ink-muted mt-0.5">50.4 damage per shot at Flawless. 92% armor pen. 25m range. Slowest reload but hardest hitting.</p>
              </div>
              <div>
                <h4 className="font-display text-sm font-semibold text-gold">#3 Two-Handed Mace (A-Tier, Melee)</h4>
                <p className="font-serif text-xs text-ink-muted mt-0.5">190% armor damage. The ultimate armor-breaker. Lower DPS but shreds enemy protection.</p>
              </div>
              <div>
                <h4 className="font-display text-sm font-semibold text-gold">#4 Longbow (A-Tier, Ranged)</h4>
                <p className="font-serif text-xs text-ink-muted mt-0.5">4.07 DPS, 22 damage per shot. Best sustained ranged output. Low requirements, high availability.</p>
              </div>
              <div>
                <h4 className="font-display text-sm font-semibold text-gold">#5 Crossbow (A-Tier, Ranged)</h4>
                <p className="font-serif text-xs text-ink-muted mt-0.5">90% armor pen, 25m range, zero Marksman requirement. Any settler can wield it effectively.</p>
              </div>
            </div>
          </div>

          {/* Related Guides */}
          <div className="field-sidebar-block">
            <h3 className="font-display text-lg font-semibold text-ink mb-4">Related Guides</h3>
            <div className="space-y-3">
              <a href="/armor-weapons" className="recipe-card block p-3 group">
                <h4 className="font-display text-sm font-semibold text-ink group-hover:text-vermillion transition-colors">Armor & Weapons Guide</h4>
                <p className="font-serif text-xs text-ink-muted mt-1">Complete equipment guide: armor tiers, helmets, shields, crafting requirements</p>
              </a>
              <a href="/defense" className="recipe-card block p-3 group">
                <h4 className="font-display text-sm font-semibold text-ink group-hover:text-vermillion transition-colors">Defense Guide</h4>
                <p className="font-serif text-xs text-ink-muted mt-1">Wall design, tower placement, chokepoints, and defensive layout strategies</p>
              </a>
              <a href="/crossbow-defense" className="recipe-card block p-3 group">
                <h4 className="font-display text-sm font-semibold text-ink group-hover:text-vermillion transition-colors">Crossbow Defense Guide</h4>
                <p className="font-serif text-xs text-ink-muted mt-1">Crossbow tower setups, ammo management, and anti-armor tactics</p>
              </a>
              <a href="/raid-defense" className="recipe-card block p-3 group">
                <h4 className="font-display text-sm font-semibold text-ink group-hover:text-vermillion transition-colors">Raid Defense Guide</h4>
                <p className="font-serif text-xs text-ink-muted mt-1">Preparing for raids, settler assignment, and emergency combat protocols</p>
              </a>
              <a href="/chokepoint-guide" className="recipe-card block p-3 group">
                <h4 className="font-display text-sm font-semibold text-ink group-hover:text-vermillion transition-colors">Chokepoint Guide</h4>
                <p className="font-serif text-xs text-ink-muted mt-1">Funneling raiders into kill zones and maximizing melee weapon effectiveness</p>
              </a>
            </div>
          </div>

          {/* Methodology Note */}
          <div className="aged-border p-5" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
            <h3 className="font-display text-base font-semibold text-ink mb-2">How We Rank</h3>
            <p className="font-serif text-xs text-ink-light leading-relaxed">
              Weapons are ranked on four factors: raw DPS (damage per second), armor penetration (percentage of damage that bypasses armor), armor damage (rate at which the weapon degrades enemy armor), and practical utility (skill requirements, material cost, shield compatibility, and crafting accessibility). S-tier weapons are best-in-slot for their category. D-tier weapons should be avoided in combat. All stats reflect Steel material at Good quality unless otherwise noted. Rankings are based on Going Medieval wiki data and community consensus as of the current game build.
            </p>
          </div>
        </aside>
      </div>
    </main>
  );
}
