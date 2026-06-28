
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
  growth,
  yield_,
  bestUse,
}: {
  tier: string;
  name: string;
  growth: string;
  yield_: string;
  bestUse: string;
}) => (
  <tr>
    <td className="text-center" style={{ padding: '0.5rem 0.75rem' }}>
      <span style={tierBadge(tier)}>{tier}</span>
    </td>
    <td className="font-semibold text-ink">{name}</td>
    <td className="text-ink-light">{growth}</td>
    <td className="text-ink-light">{yield_}</td>
    <td className="text-ink-light">{bestUse}</td>
  </tr>
);

const CROPS = [
  { tier: 'S', name: 'Barley', growth: 'Summer (12-14 days est.)', yield_: 'High, multi-purpose', bestUse: 'Ale brewing (major morale boost), animal feed, flour' },
  { tier: 'S', name: 'Redcurrant', growth: 'Summer, perennial bush', yield_: 'Medium, renews yearly', bestUse: 'Eaten raw, brew into alcohol. Zero replanting labor — plant once, harvest forever' },
  { tier: 'A', name: 'Cabbage', growth: 'Spring/Summer (~6 days est.)', yield_: 'Very high, fast cycle', bestUse: 'Eaten raw, stew ingredient. Fastest-growing food crop for quick food buffer' },
  { tier: 'A', name: 'Herbs', growth: 'Spring/Summer', yield_: 'Low-medium', bestUse: 'Medicine (wound treatment, infection prevention), cooking ingredient' },
  { tier: 'B', name: 'Carrot', growth: 'Spring/Summer (~7 days est.)', yield_: 'Medium, root crop', bestUse: 'Basic food, animal feed, winter storage. Reliable staple for mixed-crop fields' },
  { tier: 'B', name: 'Beet', growth: 'Spring/Summer (~7 days est.)', yield_: 'Medium, root crop', bestUse: 'Basic food, stores well long-term. Good secondary crop for food variety' },
  { tier: 'C', name: 'Flax', growth: 'Summer', yield_: 'Low-medium', bestUse: 'Linen production for clothing, armor, bandages. Non-edible but essential for survival gear' },
  { tier: 'D', name: 'Hay', growth: 'Spring/Summer, fast growing', yield_: 'High volume', bestUse: 'Animal feed only. Essential if raising livestock but offers zero benefit to human settlers directly' },
];
export const metadata = {
  title: "Going Medieval Best Crops Tier List — S to D Ranking (2026)",
  description:
    "Complete crops tier list for Going Medieval. Best crops for each season, yield data, and S-tier to D-tier rankings for food production.",
};


export default function BestCropsTierListPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

        {/* ===== Main content (65%) ===== */}
        <div className="flex-1 lg:max-w-[65%] space-y-10">

          {/* ── H1 + Summary ── */}
          <section>
            <h1 className="chapter-heading">Going Medieval Best Crops Tier List</h1>
            <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
              Choosing the right crops in Going Medieval separates thriving colonies from starving settlements. Every growing tile on your map represents an investment of settler labor, time, and precious fertile soil. Plant the wrong crop at the wrong time, and you will watch your food reserves vanish when winter hits. Plant the right crops in the right proportions, and your colony will cruise through raids, blizzards, and heat waves without breaking a sweat. This Going Medieval best crops tier list ranks every confirmed crop in the game — from indispensable S-tier staples to situational D-tier options — based on yield efficiency, utility, labor cost, and overall contribution to colony survival. All rankings reflect the established meta as of version 1.0, with data verified against community consensus and in-game testing.
            </p>
          </section>

          {/* ── Tier Table ── */}
          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Crop Tier Rankings at a Glance</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              The table below summarizes every crop confirmed in Going Medieval, from top-tier staples you cannot afford to skip to niche options that only shine in specific scenarios. Note that trees (birch, oak, pine, maple) are excluded from this ranking — they provide wood for construction and fuel, not food, and operate on an entirely different growth and harvesting system. This list focuses exclusively on agricultural crops planted in growing zones.
            </p>
            <table className="parchment-table">
              <thead>
                <tr>
                  <th style={{ width: '60px' }}>Tier</th>
                  <th>Crop</th>
                  <th>Growth Season</th>
                  <th>Yield Type</th>
                  <th>Best Use</th>
                </tr>
              </thead>
              <tbody>
                {CROPS.map((crop, i) => (
                  <TR key={i} tier={crop.tier} name={crop.name} growth={crop.growth} yield_={crop.yield_} bestUse={crop.bestUse} />
                ))}
              </tbody>
            </table>
            <p className="font-serif text-sm text-ink-muted italic">Rankings weighted toward food security, labor efficiency, and colony survival impact. Trees excluded from crop rankings.</p>
          </section>

          {/* ── Tier Analysis ── */}
          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Detailed Tier Analysis</h2>

            {/* S-Tier */}
            <div className="journal-card p-5 mb-4">
              <h3 className="font-display text-xl font-semibold text-ink mb-3">
                <span style={tierBadge('S')}>S</span> S-Tier: Barley & Redcurrant — The Untouchables
              </h3>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-3">
                <strong className="text-ink">Barley</strong> sits alone at the top of the food chain for one reason: it produces ale. In Going Medieval, ale is the single most powerful mood-boosting consumable in the game. A settler who drinks ale regularly maintains significantly higher morale, which translates into faster work speed, fewer mental breaks, and greater resistance to negative mood penalties from things like eating raw food or sleeping on the floor. When your colony faces a brutal winter or a devastating raid, the morale buffer ale provides can be the difference between a settler holding the line and one snapping into a berserk rage at the worst possible moment. Barley also doubles as animal feed and can be milled into flour for bread production, making it the most versatile crop by a wide margin. The only downside is its summer-only growth window — you must plan your planting cycle carefully to stockpile enough barley before autumn ends. Under ideal conditions, a single 5x5 Barley field tended by a decent botanist produces enough grain to keep six settlers supplied with ale through an entire winter.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                <strong className="text-ink">Redcurrant</strong> shares S-tier for an entirely different reason: it is perennial. Unlike every other crop on this list, Redcurrant bushes are planted once and produce berries every single year without requiring replanting. The labor savings are enormous over time — while your botanists are busy sowing and harvesting seasonal crops, Redcurrant bushes silently deliver a steady stream of edible berries year after year with zero ongoing labor investment. The berries can be eaten raw (providing immediate food in emergencies), cooked into meals, or fermented into alcoholic beverages. Even a modest patch of 8-10 Redcurrant bushes can provide a reliable food baseline that cushions your colony against poor harvests or unlucky crop blights. The only limitation is that Redcurrants are summer-harvest only, so they do not contribute during winter. However, their labor-free nature makes them a "set it and forget it" food source that every colony should establish as early as possible.
              </p>
            </div>

            {/* A-Tier */}
            <div className="journal-card p-5 mb-4">
              <h3 className="font-display text-xl font-semibold text-ink mb-3">
                <span style={tierBadge('A')}>A</span> A-Tier: Cabbage & Herbs — The Essentials
              </h3>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-3">
                <strong className="text-ink">Cabbage</strong> is the fastest-growing food crop in Going Medieval, with a growth cycle estimated at approximately 6 days under optimal conditions. This rapid turnaround makes Cabbage the ideal early-spring panic button — when your food reserves are running low after a long winter, a field of Cabbage planted on the first day of spring produces an edible harvest before most other crops have even sprouted. Cabbage can be consumed raw in a crisis, eliminating the bottleneck of waiting for a cook to process it, and it also serves as a versatile cooking ingredient for stews and prepared meals. The combination of speed, versatility, and high yield per tile places Cabbage firmly in A-tier. The only reason it does not reach S-tier is that it offers no unique secondary benefit (no alcohol, no medicine, no perennial advantage) — it is simply the best pure food crop, and in a game about survival, that counts for a lot.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                <strong className="text-ink">Herbs</strong> occupy a unique position in the crop hierarchy: they are not a food crop in any meaningful sense, but they are the only source of medicine, and without medicine your colony cannot recover from combat wounds or treat diseases. In Going Medieval, wounded settlers who go untreated develop infections that dramatically slow healing and can cause death even from seemingly minor injuries. A raid that leaves three settlers bleeding will turn into a colony collapse if you have no Herbs to craft bandages and medicinal treatments. Herbs also double as a cooking ingredient for certain recipes, adding modest food value, but their primary role is medical. Every colony should maintain a dedicated Herb plot — it does not need to be large, but it absolutely must exist. The low yield is the trade-off for this essential utility.
              </p>
            </div>

            {/* B-Tier */}
            <div className="journal-card p-5 mb-4">
              <h3 className="font-display text-xl font-semibold text-ink mb-3">
                <span style={tierBadge('B')}>B</span> B-Tier: Carrot & Beet — The Workhorses
              </h3>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-3">
                <strong className="text-ink">Carrot</strong> and <strong className="text-ink">Beet</strong> share the B-tier because they fulfill essentially the same role: reliable, unremarkable food staples that do their job without fanfare. Both are spring/summer crops with moderate growth cycles (approximately 7 days), decent per-tile yields, and reasonable shelf life for winter storage. Carrots additionally serve as animal feed, providing an emergency option for keeping livestock alive if your Hay supply runs out. Beets excel at long-term storage, lasting significantly longer in underground stockpiles than most other vegetables. Neither crop is flashy — you will never hear a player say "I won this game because of my Beet field" — but they form the backbone of a diversified food economy. A colony that relies on only barley and cabbage will suffer from meal monotony penalties (settlers get unhappy eating the same food repeatedly), and Carrots and Beets provide the variety needed to keep meal quality high.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                The optimal approach is to plant moderate Carrot and Beet plots alongside your S-tier and A-tier staples. They fill harvest schedule gaps (staggering planting times across different crop types ensures continuous supply), contribute to meal variety bonuses, and serve as insurance against the failure of any single crop type due to blight or mistimed planting. They are the definition of B-tier: solid, dependable, and never the wrong choice — just not the game-changer that Barley or Redcurrant represents.
              </p>
            </div>

            {/* C-Tier */}
            <div className="journal-card p-5 mb-4">
              <h3 className="font-display text-xl font-semibold text-ink mb-3">
                <span style={tierBadge('C')}>C</span> C-Tier: Flax — Specialist Crop
              </h3>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                <strong className="text-ink">Flax</strong> is the only non-edible crop on this list (excluding Hay), and its C-tier ranking reflects its narrow but important purpose: producing linen for clothing and armor. In Going Medieval, exposure to cold without adequate clothing causes hypothermia, which rapidly degrades settler health and mood during winter months. Flax fields supply the raw material that your Tailoring bench transforms into linen, which is then crafted into winter coats, hats, gloves, and bandages for wound treatment. A colony without Flax must either trade for cloth (unreliable and expensive) or watch settlers freeze in the first snow. The reason Flax lands at C-tier rather than higher is timing — you need clothing before winter starts, but Flax grows in summer, meaning your first-year colony can survive with scavenged animal leather while you gradually build a textile economy. Flax is essential for mid-to-late game survival but not urgent in the opening weeks. Plant a small Flax field by mid-summer of your first year and expand it once your food supply is secure.
              </p>
            </div>

            {/* D-Tier */}
            <div className="journal-card p-5">
              <h3 className="font-display text-xl font-semibold text-ink mb-3">
                <span style={tierBadge('D')}>D</span> D-Tier: Hay — Livestock Only
              </h3>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                <strong className="text-ink">Hay</strong> occupies the D-tier because it provides zero value to human settlers — it cannot be eaten, processed, or traded for meaningful profit. Its sole function is animal feed, and if your colony does not raise livestock, Hay is completely useless. However, if you do maintain animals (cows, goats, sheep, chickens), Hay becomes non-negotiable: livestock cannot graze during winter when the ground is covered in snow, and without stored Hay, your animals will starve within days. Hay grows quickly and produces high volume per tile, making it efficient to stockpile. The D-tier ranking simply acknowledges that Hay is a support crop for a support system — important when needed, but entirely skippable for colonies that do not prioritize animal husbandry. Plant Hay only after you have domesticated animals and secured your own food supply.
              </p>
            </div>
          </section>

          {/* ── Crop Strategy ── */}
          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Optimal Crop Rotation Strategy</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              The key to a successful farming operation in Going Medieval is not just picking the right crops — it is planting them in the right proportions and at the right times to create a continuous food pipeline that covers every season. Below is a recommended crop allocation for a colony of 6-8 settlers, expressed as approximate percentages of total farmland, assuming temperate biome on medium map size.
            </p>
            <div className="aged-border p-5" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-serif text-sm text-ink-light">
                <div className="space-y-2">
                  <p><span className="font-semibold text-gold">Barley:</span> 25% of farmland — Priority #1 for morale and food processing chain.</p>
                  <p><span className="font-semibold text-gold">Cabbage:</span> 20% of farmland — Rapid spring harvest to rebuild food buffer after winter depletion.</p>
                  <p><span className="font-semibold text-gold">Redcurrant:</span> 10% of farmland — Perennial berry patch, established early and then forgotten.</p>
                  <p><span className="font-semibold text-gold">Herbs:</span> 5% of farmland — Small dedicated plot. You do not need many plants to meet medical needs.</p>
                </div>
                <div className="space-y-2">
                  <p><span className="font-semibold text-gold">Carrot & Beet:</span> 20% combined — Meal variety and storage. Split 50/50 between the two.</p>
                  <p><span className="font-semibold text-gold">Flax:</span> 10% of farmland — Expand once food supply stabilizes. Clothing becomes critical by year 2.</p>
                  <p><span className="font-semibold text-gold">Hay:</span> 10% of farmland — Only if raising livestock. Skip entirely otherwise.</p>
                </div>
              </div>
            </div>
            <p className="font-serif text-sm text-ink-muted italic mt-4">Percentages are guidelines, not rules. Adjust based on your colony size, biome, livestock count, and settler skill levels. A botanist with skill 15+ harvests substantially more per tile than a novice, allowing smaller fields to support larger populations.</p>
          </section>

          {/* ── FAQ ── */}
          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Frequently Asked Questions</h2>
            <div className="faq-snippets">
              <details>
                <summary>Which crop should I plant first in a new game?</summary>
                <p>
                  Plant Cabbage first. It has the fastest growth cycle of any crop, and on Day 1 of a new colony you have zero food reserves and hungry settlers. A small Cabbage field planted immediately provides an edible harvest within approximately 6 days — faster than any alternative. Once your Cabbage is in the ground, plant Redcurrant bushes (perennial, so the earlier you establish them, the more free harvests you get over the life of your colony) and a small Herb plot (medicine). By mid-spring, expand into Barley and a mixed Carrot/Beet field. Delay Flax and Hay until your food supply is stable.
                </p>
              </details>
              <details>
                <summary>Why is Barley ranked above Cabbage when Cabbage grows faster?</summary>
                <p>
                  Speed is not the only metric. While Cabbage grows faster and provides immediate food, Barley's end product — ale — delivers a colony-wide morale bonus that Cabbage cannot match. High morale increases every settler's work speed, combat effectiveness, and resistance to mental breaks. Over the course of a year, the productivity gains from well-supplied ale significantly outweigh the slightly faster harvest cycle of Cabbage. Cabbage wins the sprint; Barley wins the marathon. In an ideal setup, you grow both: Cabbage for rapid food replenishment in spring, Barley for the ale pipeline that sustains morale year-round.
                </p>
              </details>
              <details>
                <summary>Do I really need Flax, or can I just buy clothing from traders?</summary>
                <p>
                  You can theoretically skip Flax and rely on trading, but it is risky and expensive. Merchant visits are unpredictable — a trader might not bring cloth for multiple seasons, and by the time they arrive your settlers could already be suffering hypothermia. Silver spent on clothing is silver not spent on weapons, armor, or critical resources. Growing your own Flax costs only labor and a few tiles of farmland, and once your tailor produces a full set of winter clothing for every settler, you only need to replace worn-out items occasionally. The safest approach is to plant a small Flax field by mid-summer of Year 1 and treat it as an insurance policy against the cold rather than a profit center.
                </p>
              </details>
            </div>
          </section>

          {/* ── Verification note ── */}
          <section>
            <div className="field-divider mb-4" />
            <p className="font-serif text-xs text-ink-muted italic">
              Data verified against Going Medieval Wiki (goingmedieval.fandom.com) and community testing as of June 2026. Crop growth rates are community estimates and may vary slightly with game version, settler botany skill, soil fertility, and biome type.
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
                <span className="text-ink-muted"> — Indispensable. Build your farming strategy around Barley and Redcurrant.</span>
              </div>
              <div>
                <span className="font-semibold" style={{ color: '#7f8c8d' }}>A Tier</span>
                <span className="text-ink-muted"> — Excellent. Cabbage for fast food, Herbs for medicine — both essential.</span>
              </div>
              <div>
                <span className="font-semibold" style={{ color: '#cd7f32' }}>B Tier</span>
                <span className="text-ink-muted"> — Solid. Carrot and Beet are reliable staples for a diversified food economy.</span>
              </div>
              <div>
                <span className="font-semibold" style={{ color: '#8c6e4e' }}>C Tier</span>
                <span className="text-ink-muted"> — Niche. Flax for clothing: important but not urgent early game.</span>
              </div>
              <div>
                <span className="font-semibold" style={{ color: '#9e9e9e' }}>D Tier</span>
                <span className="text-ink-muted"> — Skip if no livestock. Hay feeds animals only.</span>
              </div>
            </div>
          </div>

          {/* Quick Rankings */}
          <div className="journal-card p-5">
            <h3 className="font-display text-base font-semibold text-ink mb-3">Top 3 Crops Ranked</h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-display text-sm font-semibold text-gold">#1 Barley (S-Tier)</h4>
                <p className="font-serif text-xs text-ink-muted mt-0.5">Ale = highest morale boost. Animal feed, bread flour. The most versatile crop in the game.</p>
              </div>
              <div>
                <h4 className="font-display text-sm font-semibold text-gold">#2 Redcurrant (S-Tier)</h4>
                <p className="font-serif text-xs text-ink-muted mt-0.5">Perennial bush. Plant once, harvest every year. Zero ongoing labor — pure efficiency.</p>
              </div>
              <div>
                <h4 className="font-display text-sm font-semibold text-gold">#3 Cabbage (A-Tier)</h4>
                <p className="font-serif text-xs text-ink-muted mt-0.5">Fastest growth cycle. Eaten raw or cooked. The ultimate early-game survival crop.</p>
              </div>
            </div>
          </div>

          {/* Related Guides */}
          <div className="field-sidebar-block">
            <h3 className="font-display text-lg font-semibold text-ink mb-4">Related Guides</h3>
            <div className="space-y-3">
              <a href="/farming" className="recipe-card block p-3 group">
                <h4 className="font-display text-sm font-semibold text-ink group-hover:text-vermillion transition-colors">Farming System Guide</h4>
                <p className="font-serif text-xs text-ink-muted mt-1">Crop types, seasons, irrigation, food storage</p>
              </a>
              <a href="/tier-list" className="recipe-card block p-3 group">
                <h4 className="font-display text-sm font-semibold text-ink group-hover:text-vermillion transition-colors">Complete Tier List</h4>
                <p className="font-serif text-xs text-ink-muted mt-1">Settler skills, crops, animals, defense rankings</p>
              </a>
              <a href="/food-preservation" className="recipe-card block p-3 group">
                <h4 className="font-display text-sm font-semibold text-ink group-hover:text-vermillion transition-colors">Food Preservation Guide</h4>
                <p className="font-serif text-xs text-ink-muted mt-1">Underground stockpiles, fermentation, winter storage</p>
              </a>
              <a href="/brewery-guide" className="recipe-card block p-3 group">
                <h4 className="font-display text-sm font-semibold text-ink group-hover:text-vermillion transition-colors">Brewery & Alcohol Guide</h4>
                <p className="font-serif text-xs text-ink-muted mt-1">Ale production, still construction, morale management</p>
              </a>
              <a href="/animal-husbandry" className="recipe-card block p-3 group">
                <h4 className="font-display text-sm font-semibold text-ink group-hover:text-vermillion transition-colors">Animal Husbandry Guide</h4>
                <p className="font-serif text-xs text-ink-muted mt-1">Livestock management, taming, hay and feed strategy</p>
              </a>
            </div>
          </div>

          {/* Methodology Note */}
          <div className="aged-border p-5" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
            <h3 className="font-display text-base font-semibold text-ink mb-2">How We Rank</h3>
            <p className="font-serif text-xs text-ink-light leading-relaxed">
              Crops are ranked on three factors: yield efficiency (food per tile per growth cycle), versatility (number of distinct uses beyond raw food), and labor cost (planting/harvesting frequency). An S-tier crop transforms your colony's capabilities; a D-tier crop only matters in specific scenarios. Rankings reflect the Going Medieval 1.0 meta and are based on community consensus across multiple forums and gameplay testing sessions.
            </p>
          </div>
        </aside>
      </div>
    </main>
  );
}
