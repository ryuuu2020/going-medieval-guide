import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Going Medieval Tier List — Skills, Crops, Animals & Defense (2026)",
  description:
    "Complete Going Medieval tier list ranking settler skills, crops, livestock, and defensive structures from S to C tier. Find the best picks for your colony with community-verified rankings and detailed explanations.",
  keywords: [
    "Going Medieval tier list",
    "Going Medieval best skills",
    "Going Medieval best crops",
    "Going Medieval best animals",
    "Going Medieval defense tier",
    "Going Medieval rankings",
  ],
  openGraph: {
    title: "Going Medieval Tier List — Skills, Crops, Animals & Defense",
    description:
      "Rank every skill, crop, animal, and defense structure in Going Medieval from S to C tier.",
  },
  robots: { index: true, follow: true },
};

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
const TR = ({
  tier,
  name,
  col2,
  col3,
  extra,
}: {
  tier: string;
  name: string;
  col2: string;
  col3: string;
  extra?: string;
}) => (
  <tr>
    <td className="text-center" style={{ padding: '0.5rem 0.75rem' }}>
      <span style={tierBadge(tier)}>{tier}</span>
    </td>
    <td className="font-semibold text-ink">{name}</td>
    <td className="text-ink-light">{col2}</td>
    <td className="text-ink-light">{col3}</td>
    {extra !== undefined && <td className="text-ink-light">{extra}</td>}
  </tr>
);

export default function TierListPage() {
  return (

      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

          {/* ===== Main content (65%) ===== */}
          <div className="flex-1 lg:max-w-[65%] space-y-10">

            {/* ── H1 + Summary ── */}
            <section>
              <h1 className="chapter-heading">Going Medieval Tier List</h1>
              <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
                Every decision in Going Medieval carries weight — assign the wrong settler to a critical task, plant the wrong crop before winter, or skimp on your walls, and your colony could collapse in a single season. This tier list ranks settler skills, crops, livestock, and defensive structures from S-tier (indispensable) down to C-tier (niche or situational), so you can focus your limited time and resources on what actually matters. All rankings are based on community consensus and reflect established meta strategies — data is for reference only.
              </p>
            </section>

            {/* ═══════════════════════ 1. Settler Skills ═══════════════════════ */}
            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">
                1. Settler Skill Tier List
              </h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Skills define what your settlers can do and how fast they do it. A settler with 20 Mining will strip out an entire room in the time it takes a novice to dig a 3x3 pit. When choosing starting settlers or recruiting prisoners, skill values are the single most important metric — more than traits, more than background, more than age. Construction and Mining are the two skills you absolutely cannot compromise on, because literally everything in your colony starts with digging and building. Without a competent builder, your walls will take days to go up; without a miner, you'll be stuck scratching at rock while your food reserves rot in the open.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Botany and Culinary form the second tier of critical skills. A skilled botanist doesn't just plant faster — they harvest more per tile, which compounds over multiple growing seasons into a massive food surplus. A skilled cook turns that raw produce into meals that don't spoil after two days and actually boost settler mood. Smithing rounds out the A-tier because weapons and armor are the only thing standing between your colony and a raider's axe. You can limp by with wooden clubs for a while, but by mid-game you need iron gear, and that requires a smith who won't take all day to craft a single sword.
              </p>
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th style={{ width: '60px' }}>Tier</th>
                    <th>Skill</th>
                    <th>Why</th>
                    <th>Best For</th>
                  </tr>
                </thead>
                <tbody>
                  <TR tier="S" name="Mining" col2="Core resource gathering; literally everything requires mined stone, iron, and coal. A high-skill miner also digs tunnels and rooms 3-4x faster." col3="Early-game expansion, underground bases, resource stockpiling" />
                  <TR tier="S" name="Construction" col2="Walls, floors, roofs, doors, workstations — every structure. Build speed and quality scale directly with skill. Low-skill builders waste days." col3="All phases of the game, especially before winter and after raids" />
                  <TR tier="A" name="Botany" col2="Planting speed and harvest yield both scale with skill. A skilled botanist effectively multiplies your farmland output without needing more fields." col3="Farming, food security, herbal medicine production" />
                  <TR tier="A" name="Culinary" col2="Processed meals spoil slower and boost settler mood. High Culinary means more meals from the same raw ingredients and faster prep time." col3="Winter food stockpiles, mood management, colony morale" />
                  <TR tier="A" name="Smithing" col2="Weapons, armor, tools, and metal components all require Smithing. Mid-game combat viability depends entirely on having iron gear." col3="Combat preparation, tool crafting, mid-to-late game defense" />
                  <TR tier="B" name="Tailoring" col2="Clothing and armor from leather/cloth. Important for winter survival and basic protection, but can be outsourced to traders." col3="Winter clothing, light armor, trading goods" />
                  <TR tier="B" name="Medicine" col2="Faster wound treatment and better recovery outcomes. Critical after raids, but most of the time sits idle if you manage defense well." col3="Post-raid recovery, disease treatment, keeping wounded settlers alive" />
                  <TR tier="B" name="Intellectual" col2="Research speed, alchemy, brewing, medicine-making. Unlocking the tech tree matters, but research is passive — you just need one competent researcher." col3="Tech tree progression, unlocking advanced workbenches and recipes" />
                  <TR tier="B" name="Carpentry" col2="Crafting wooden items, furniture, and bows. Essential for early-game ranged weapons and mid-game infrastructure. Your carpenter is also your bowyer." col3="Early-game weapon crafting, bow production for marksmen, wooden furniture" />
                  <TR tier="C" name="Speechcraft" col2="Influences trade prices, prisoner recruitment, bard performances, and prison management. Situational — traders visit periodically and prisoners can be recruited by other means." col3="Trading discounts, prisoner conversion, bard entertainment, prison warden duties" />
                  <TR tier="C" name="Art" col2="Purely for mood-boosting decorations via statues, paintings, and tapestries. Aesthetic, not essential. Settlers don't starve because there's no statue in the dining hall." col3="Late-game colony beautification, squeezing out extra mood bonuses" />
                  <TR tier="C" name="Marksman" col2="Ranged combat skill for bows and crossbows. Directly affects accuracy and damage. Important for defense and hunting, but serves no economic function." col3="Hunting animals, defending walls during raids, ranged combat" />
                  <TR tier="C" name="Melee" col2="Melee combat skill affecting damage %, dodge, crit chance, and precision. Pure combat with no associated job. Useful for last-line defenders." col3="Emergency defense, melee chokepoint fighting, protecting ranged settlers" />
                  <TR tier="C" name="Animal Handling" col2="Taming wild animals, feeding/training livestock, and fishing. Valuable once you have domesticated animals, but early colonies can survive without it." col3="Animal taming, livestock management, fishing for food variety" />
                </tbody>
              </table>
              <p className="font-serif text-sm text-ink-muted italic">Rankings reflect overall impact on colony survival and efficiency across all game stages.</p>
            </section>

            {/* ═══════════════════════ 2. Crop Tier List ═══════════════════════ */}
            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">
                2. Crop Tier List
              </h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Not all crops are created equal. The difference between a field of Barley and a field of Carrots is the difference between a thriving colony and a struggling settlement. Crop rankings consider three factors: yield per tile per growth cycle, versatility of use, and how well the crop integrates into a sustainable food economy. Barley earns its S-tier crown because it feeds into both the food chain (brewing beer, baking bread) and the animal chain (livestock feed). Redcurrant bushes are uniquely powerful because they're perennial — plant them once and they produce berries every year without replanting, providing a reliable baseline food source that requires zero ongoing labor.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Cabbage and Herbs fill the A-tier for entirely different reasons. Cabbage grows fast, yields high, and can be eaten raw in an emergency — it's the ultimate early-game survival crop and remains useful throughout. Herbs are the only source of medicine, and without medicine your wounded settlers recover slowly or not at all. The B-tier crops are solid contributors: Beet and Carrots are reliable food staples with decent shelf life, Hay is essential for winter livestock feeding, and Flax provides cloth for winter clothing and bandages. Every crop here has a clear role in keeping your colony fed, clothed, and healthy.
              </p>
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th style={{ width: '60px' }}>Tier</th>
                    <th>Crop</th>
                    <th>Yield</th>
                    <th>Use</th>
                  </tr>
                </thead>
                <tbody>
                  <TR tier="S" name="Barley" col2="High, multi-purpose" col3="Brewing beer (major mood source), animal feed, flour for bread. The most versatile crop in the game." />
                  <TR tier="S" name="Redcurrant" col2="Medium, perennial" col3="Plant once, harvest yearly. Zero replanting labor. Perfect baseline food that keeps producing while you focus on other tasks." />
                  <TR tier="A" name="Cabbage" col2="Very high, 6-day cycle" col3="Fastest-growing food crop. Can be eaten raw. Plant in spring for an immediate food buffer before your long-cycle crops mature." />
                  <TR tier="A" name="Herbs" col2="Low-medium" col3="The only source of medicine. No herbs means wounded settlers die from infections. Plant at least a small plot by mid-spring." />
                  <TR tier="B" name="Beet" col2="Medium, 7-day cycle" col3="Decent backup food with moderate shelf life. Not exciting but reliable — plant when you want diversity, not as your staple." />
                  <TR tier="B" name="Carrots" col2="Medium, 7-day cycle" col3="Reliable root vegetable with decent shelf life and good meal variety contribution. Stores well through winter alongside beet." />
                  <TR tier="B" name="Hay" col2="High volume" col3="Essential winter livestock feed. If you're raising animals, hay is non-negotiable. Without it, your animals starve when snow falls." />
                  <TR tier="B" name="Flax" col2="Low-medium" col3="Produces cloth for winter clothing and bandages. Important once cold seasons start killing unprepared settlers." />
                </tbody>
              </table>
              <p className="font-serif text-sm text-ink-muted italic">Rankings weighted toward food security, labor efficiency, and contribution to colony survival over aesthetics.</p>
            </section>

            {/* ═══════════════════════ 3. Animal Tier List ═══════════════════════ */}
            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">
                3. Animal Tier List
              </h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Livestock transforms a subsistence colony into a thriving settlement. Animals provide renewable resources — milk, wool, eggs, and meat — that don't require replanting or mining. The Cow and Ass/Donkey share S-tier for fundamentally different reasons. A single cow generates a steady supply of milk (drinkable, cookable, tradable), and when slaughtered yields a massive amount of meat and leather — one cow effectively covers the protein needs of 3-4 settlers indefinitely. The donkey is the only pack animal in the game, making caravan trade and bulk supply hauling possible. Without a donkey, your trading operations are limited to what settlers can carry on their backs.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Goats and Sheep share A-tier for similar reasons — goats produce milk reliably with lower food consumption than cows, while sheep generate wool for clothing, which becomes critically important during harsh winters. Boars and Chickens sit at B-tier as solid but not transformative livestock. Boars provide good meat from hunting or farming and breed decently fast, but are better tamed from the wild than bought. Chickens lay eggs daily, which is nice, but they're fragile and die easily to predators or cold snaps. Cats at C-tier serve a singular purpose — hunting vermin in food stockpiles to reduce spoilage — but a well-built underground cellar makes them nearly redundant. Dogs deserve a special mention: tamed from wolves, they have no productive output, but for defensive combat a trained war dog is S-tier, capable of pinning raiders and buying your archers critical seconds.
              </p>
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th style={{ width: '60px' }}>Tier</th>
                    <th>Animal</th>
                    <th>Products</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <TR tier="S" name="Cow" col2="Milk, Beef, Leather" col3="Best value-per-food-investment in the game. Milk daily, massive butchering payout. The cornerstone of any livestock operation." />
                  <TR tier="S" name="Ass / Donkey" col2="Pack animal, Meat, Leather" col3="The only pack animal for caravans. Essential for trading large quantities and hauling supplies between settlements. Far more valuable alive than slaughtered." />
                  <TR tier="A" name="Goat" col2="Milk, Meat, Leather" col3="More efficient than cows in cold biomes. Lower food consumption, breeds faster. Excellent starter livestock before scaling to cows." />
                  <TR tier="A" name="Sheep" col2="Wool, Meat, Leather" col3="Wool is essential for winter clothing at scale. A small flock of 3-4 sheep can outfit an entire colony for freezing temperatures." />
                  <TR tier="B" name="Boar" col2="Meat, Leather" col3="Tame from the wild rather than buy from traders. Decent meat yield and breeds at a reasonable pace. Hunt wild boars for food before domesticating." />
                  <TR tier="B" name="Chicken" col2="Eggs, Meat" col3="Eggs are a reliable daily food source. Chickens require almost no space. Downside: extremely fragile, one fox can wipe out a flock." />
                  <TR tier="C" name="Cat" col2="Pest control" col3="Reduces food spoilage from vermin. Useful if your food storage isn't fully underground. Otherwise, a luxury pet with minimal impact." />
                  <TR tier="S*" name="Dog" col2="Combat support" col3="Special tier: S for defense, D for resources. Tamed from wolves. War dogs fight alongside settlers, distract raiders, and can turn losing battles. Zero economic output." />
                </tbody>
              </table>
              <p className="font-serif text-sm text-ink-muted italic">Dog ranked S* for combat utility; baseline economic tier would be D. Choose based on whether your colony needs fighters or farmers.</p>
            </section>

            {/* ═══════════════════════ 4. Defense Tier List ═══════════════════════ */}
            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">
                4. Defense Tier List
              </h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Defense isn't optional in Going Medieval. Raiders scale with your colony's wealth and population — the stronger you get, the harder they hit. The Reinforced Door shares S-tier with Moat + Drawbridge because they solve fundamentally different problems. A Reinforced Door is your last line of defense: placed at your inner gate, it buys time while archers reposition and traps do their work. A Moat with Drawbridge is your map-level defense — raiders cannot path across a moat when the drawbridge is raised, making it the only structure that can completely prevent melee enemies from reaching your walls. Combined, these two S-tier picks create a defense that raiders literally cannot breach without ranged siege weapons.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Stone Walls and Spike Traps dominate A-tier for their reliability and cost-effectiveness. A double-layered stone wall with a 3-tile gap filled with spike traps will shred most raiding parties before they even touch your inner gate. Merlons (crenellations atop walls) give your archers cover while shooting down, significantly increasing their survivability during prolonged engagements. Wooden Walls and Traps at B-tier are your early-game workhorses — cheap, fast to build, and sufficient for the first few raids. Palisades round out B-tier as a quick perimeter fence that slows enemies but won't stop a determined assault. Upgrade everything to stone as soon as your mining operation can support it.
              </p>
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th style={{ width: '60px' }}>Tier</th>
                    <th>Defense</th>
                    <th>Durability</th>
                    <th>Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <TR tier="S" name="Reinforced Door" col2="Extremely high (3x standard door)" col3="Mid-game iron investment. The single most efficient defensive upgrade — place at your inner gate and raiders will exhaust themselves breaking through." />
                  <TR tier="S" name="Moat + Drawbridge" col2="Map-scale, permanent" col3="High labor cost to dig, but requires zero maintenance. Raisable drawbridge creates an impassable barrier. Essential for late-game defense against large raids." />
                  <TR tier="A" name="Stone Wall" col2="Very high" col3="Moderate stone cost. Significant upgrade over wood. Doesn't burn, resists multiple hits. The standard for any colony past the first year." />
                  <TR tier="A" name="Spike Trap" col2="5 triggers (iron), 3 (wood)" col3="Iron ingots + wood. Devastating in chokepoints. Pack them 2 tiles deep in front of gates — enemies trigger them repeatedly while trying to break the door." />
                  <TR tier="A" name="Merlon" col2="Wall-mounted, permanent" col3="Simple stone blocks. Gives archers cover while shooting from wall tops. In a ranged-focused defense, merlons double your archers' effective combat uptime." />
                  <TR tier="B" name="Wooden Wall" col2="Moderate, flammable" col3="Cheapest wall option. Quick to build, adequate for early raids. Replace with stone before mid-game when raiders start carrying fire arrows." />
                  <TR tier="B" name="Wooden Trap" col2="3 triggers" col3="Wood only, extremely cheap. Spam these in buffer zones. They wear down early raiders effectively, but become obsolete once enemies have armor." />
                  <TR tier="B" name="Palisade" col2="Low-moderate" col3="Very cheap wood stakes. Slows enemy movement, provides minor damage. Best used as an outer perimeter to delay, not as a primary defense line." />
                </tbody>
              </table>
              <p className="font-serif text-sm text-ink-muted italic">Rankings consider cost-to-durability ratio, tactical versatility, and how well each defense scales into late-game scenarios.</p>
            </section>

            {/* ── Verification note ── */}
            <section>
              <div className="field-divider mb-4" />
              <p className="font-serif text-xs text-ink-muted italic">
                Data verified against Going Medieval Wiki (goingmedieval.fandom.com) as of June 2026.
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
                  <span className="text-ink-muted"> — Indispensable. Build your strategy around these.</span>
                </div>
                <div>
                  <span className="font-semibold" style={{ color: '#7f8c8d' }}>A Tier</span>
                  <span className="text-ink-muted"> — Excellent. Strong in most situations, rarely a wrong pick.</span>
                </div>
                <div>
                  <span className="font-semibold" style={{ color: '#cd7f32' }}>B Tier</span>
                  <span className="text-ink-muted"> — Solid. Useful in specific contexts but replaceable.</span>
                </div>
                <div>
                  <span className="font-semibold" style={{ color: '#8c6e4e' }}>C Tier</span>
                  <span className="text-ink-muted"> — Niche. Only worth it in specialized scenarios.</span>
                </div>
                <div>
                  <span className="font-semibold" style={{ color: '#9e9e9e' }}>D Tier</span>
                  <span className="text-ink-muted"> — Skip. Almost never the optimal choice.</span>
                </div>
              </div>
            </div>

            {/* Quick Rankings */}
            <div className="journal-card p-5">
              <h3 className="font-display text-base font-semibold text-ink mb-3">Top 3 Per Category</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-display text-sm font-semibold text-gold">Skills</h4>
                  <p className="font-serif text-xs text-ink-muted mt-0.5">1. Mining &nbsp; 2. Construction &nbsp; 3. Botany</p>
                </div>
                <div>
                  <h4 className="font-display text-sm font-semibold text-gold">Crops</h4>
                  <p className="font-serif text-xs text-ink-muted mt-0.5">1. Barley &nbsp; 2. Redcurrant &nbsp; 3. Cabbage</p>
                </div>
                <div>
                  <h4 className="font-display text-sm font-semibold text-gold">Animals</h4>
                  <p className="font-serif text-xs text-ink-muted mt-0.5">1. Cow &nbsp; 2. Donkey &nbsp; 3. Goat</p>
                </div>
                <div>
                  <h4 className="font-display text-sm font-semibold text-gold">Defense</h4>
                  <p className="font-serif text-xs text-ink-muted mt-0.5">1. Reinforced Door &nbsp; 2. Moat &nbsp; 3. Stone Wall</p>
                </div>
              </div>
            </div>

            {/* Related Guides */}
            <div className="field-sidebar-block">
              <h3 className="font-display text-lg font-semibold text-ink mb-4">Related Guides</h3>
              <div className="space-y-3">
                <a href="/settlers" className="recipe-card block p-3 group">
                  <h4 className="font-display text-sm font-semibold text-ink group-hover:text-vermillion transition-colors">Settler Management</h4>
                  <p className="font-serif text-xs text-ink-muted mt-1">Skill system, mood management, needs &amp; roles</p>
                </a>
                <a href="/farming" className="recipe-card block p-3 group">
                  <h4 className="font-display text-sm font-semibold text-ink group-hover:text-vermillion transition-colors">Farming System Guide</h4>
                  <p className="font-serif text-xs text-ink-muted mt-1">Crop types, seasons, irrigation &amp; food storage</p>
                </a>
                <a href="/defense" className="recipe-card block p-3 group">
                  <h4 className="font-display text-sm font-semibold text-ink group-hover:text-vermillion transition-colors">Defense Strategy Guide</h4>
                  <p className="font-serif text-xs text-ink-muted mt-1">Walls, traps, weapons &amp; raid response tactics</p>
                </a>
                <a href="/research" className="recipe-card block p-3 group">
                  <h4 className="font-display text-sm font-semibold text-ink group-hover:text-vermillion transition-colors">Research Tech Tree</h4>
                  <p className="font-serif text-xs text-ink-muted mt-1">Optimal unlock order for tech progression</p>
                </a>
              </div>
            </div>

            {/* Methodology Note */}
            <div className="aged-border p-5" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
              <h3 className="font-display text-base font-semibold text-ink mb-2">How We Rank</h3>
              <p className="font-serif text-xs text-ink-light leading-relaxed">
                Tiers are based on overall contribution to colony survival across all game stages — early, mid, and late game. We weigh versatility, resource efficiency, and how badly missing something hurts you. An S-tier item is something you feel the absence of immediately and constantly. A C-tier item is something you can happily skip in most playthroughs. Rankings reflect community consensus and current meta strategies.
              </p>
            </div>

          </aside>
        </div>
      </main>

  );
}
