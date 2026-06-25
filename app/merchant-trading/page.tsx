
export default function MerchantTradingPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-10">
          <section>
            <h1 className="chapter-heading">Merchant Trading Guide</h1>
            <div className="aged-border p-5 mb-5" style={{ backgroundColor: 'var(--color-parchment-deep)', borderColor: '#8b2500' }}>
                <p className="font-serif text-sm text-ink leading-relaxed">
                  <strong className="text-vermillion">&#9888; DISCLAIMER:</strong> Specific merchant type names, "trade beacon" mechanics, silver economy details, and item prices below are <strong>community estimates and NOT verified against official sources</strong>. The "trade beacon" concept is characteristic of other colony sims and may function differently (or not exist) in Going Medieval. Merchant caravan behavior and visit frequency have not been verified.
                </p>
              </div>
            <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
              Merchant trading is the primary method for acquiring resources your colony cannot produce — rare ores, exotic goods, advanced weapons, and specialty items. Understanding merchant types, trade mechanics, and how to maximize trade efficiency can transform your colony from self-sufficient to prosperous. This guide covers caravan frequency, the most profitable items to sell, and advanced trade strategies. Data below is based on community compilation and is for reference only.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Merchant Types & Their Goods</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Different merchant types visit your colony carrying specialized inventories. Identifying which merchant is arriving (visible in the notification) helps you prepare your trade goods in advance. Each merchant has buying preferences that affect trade prices for specific categories.
            </p>
            <table className="parchment-table">
              <thead>
                <tr>
                  <th>Merchant Type</th>
                  <th>Primary Goods Sold</th>
                  <th>Buys At Premium</th>
                  <th>Visit Frequency</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="font-semibold">General Merchant</td><td>Food, tools, basic materials, medicine</td><td>All goods (neutral)</td><td>Very Common (every 7-10 days)</td></tr>
                <tr><td className="font-semibold">Weaponsmith</td><td>Weapons, armor, ammunition, shields</td><td>Metal ores, ingots, gems</td><td>Common (every 10-14 days)</td></tr>
                <tr><td className="font-semibold">Materials Trader</td><td>Wood, stone blocks, cloth, leather</td><td>Food, alcohol, prepared meals</td><td>Common (every 10-14 days)</td></tr>
                <tr><td className="font-semibold">Herbalist</td><td>Herbs, medicine kits, bandages</td><td>Precious metals, animal products</td><td>Uncommon (every 14-18 days)</td></tr>
                <tr><td className="font-semibold">Exotic Goods Trader</td><td>Rare items, artifacts, decorations</td><td>High-quality crafted items</td><td>Rare (every 18-25 days)</td></tr>
                <tr><td className="font-semibold">Livestock Merchant</td><td>Domestic animals, animal feed</td><td>Leather, wool, milk products</td><td>Uncommon (every 14-18 days)</td></tr>
              </tbody>
            </table>
            <p className="font-serif text-sm text-ink-muted italic">Data source: Community compilation</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Trade Mechanics & The Silver Economy</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Trade operates on a value-based system. Every item has a base value in silver. When buying, merchants charge roughly 130-150% of base value. When selling, merchants pay roughly 60-70% of base value. This spread means you lose roughly 50% of value on every round-trip trade — making self-sufficiency always more cost-effective than relying on trade for basic goods.
            </p>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Silver coins serve as the universal currency. You earn silver by selling goods to merchants. You can also use barter mode to directly exchange your goods for the merchant's wares without silver — the trade completes when both sides' values are approximately equal. Barter is useful when you lack silver but have surplus goods. Assign a settler with high Speechcraft skill to handle all trades for better prices.
            </p>
            <div className="aged-border p-5" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
              <p className="font-serif text-sm text-ink leading-relaxed">
                <strong className="text-vermillion">Economic Insight:</strong>
                The trade spread means that buying raw materials, processing them, and selling the finished product is profitable IF your crafter's skill is high enough. For example: buy iron ore for ~30 silver, smelt into ingots, craft into a sword worth ~100 silver — net gain even after the spread. This is the foundation of a trade-based economy.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Best Items to Sell for Profit</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Not all goods are created equal for trade. The best trade goods have high value density (value per unit weight), use renewable or abundant inputs, and benefit from high-skill processing. Focus your trade production on these categories.
            </p>
            <table className="parchment-table">
              <thead>
                <tr>
                  <th>Trade Good</th>
                  <th>Inputs</th>
                  <th>Approx. Sell Value</th>
                  <th>Profitability</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="font-semibold">Beer</td><td>Barley (confirmed crop)</td><td>~40-50 silver</td><td className="text-gold">High</td><td>Highest profit per input. Grow barley in summer, brew in autumn, sell in winter. Mass-produce for a silver empire.</td></tr>
                <tr><td className="font-semibold">Iron Sword</td><td>Iron ore (mined)</td><td>~80-120 silver</td><td className="text-gold">High</td><td>High base value but requires smelting and forging chain. Needs skilled smith (Crafting 10+).</td></tr>
                <tr><td className="font-semibold">Smoked Meat</td><td>Raw meat (hunting)</td><td>~15-20 silver</td><td className="text-gold">High</td><td>Doubles meat value through processing. Hunters provide infinite raw input. Excellent early-game income.</td></tr>
                <tr><td className="font-semibold">Cloth Tunic</td><td>Flax cloth (farmed)</td><td>~20-30 silver</td><td className="text-gold">High</td><td>Flax is easy to grow in bulk. Clothing multiplies cloth value 2-3x. Good for tailors.</td></tr>
                <tr><td className="font-semibold">Bread</td><td>Wheat (farmed)</td><td>~10-15 silver</td><td>Medium</td><td>Mediocre profit but staple food. Sell surplus only — prioritize feeding settlers.</td></tr>
                <tr><td className="font-semibold">Pickled Cabbage</td><td>Cabbage (farmed)</td><td>~8-12 silver</td><td>Medium</td><td>Long shelf life makes it easy to stockpile for bulk sales. Low individual value but high volume.</td></tr>
              </tbody>
            </table>
            <p className="font-serif text-sm text-ink-muted italic">Data source: Community testing estimates</p>
          </section>

          <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Trade Beacon Placement</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                <strong className="text-vermillion">&#9888; NOTE:</strong> The "trade beacon" mechanic described below is characteristic of other colony sims and may function differently (or not exist as a distinct structure) in Going Medieval. Merchant arrival mechanics have not been verified against official sources. The guidance below is based on community reports about merchant interaction behavior.
            </p>
            <div className="space-y-3">
              <div className="journal-card p-4">
                <h4 className="font-display text-base font-semibold text-ink">Inside Outer Walls, Near Main Gate</h4>
                <p className="font-serif text-sm text-ink-light mt-1">Place the beacon in a courtyard between your outer and inner walls. Merchants enter through the main gate and trade in a secure area without accessing your inner colony. Build a small covered pavilion over the beacon so your trading settler is protected from weather and enemy fire.</p>
              </div>
              <div className="journal-card p-4">
                <h4 className="font-display text-base font-semibold text-ink">Near a Dedicated Trade Stockpile</h4>
                <p className="font-serif text-sm text-ink-light mt-1">Place a high-priority stockpile zone directly adjacent to the trade beacon, set to accept only trade goods (beer, crafted weapons, surplus food). Your haulers will pre-stage trade inventory here, minimizing the time your trading settler spends running back and forth.</p>
              </div>
              <div className="journal-card p-4">
                <h4 className="font-display text-base font-semibold text-ink">Avoid: Beacon Inside Living Quarters</h4>
                <p className="font-serif text-sm text-ink-light mt-1">NEVER place the trade beacon inside your main living area or near your bedroom wing. Merchants (and any raiders that follow them) will path through your colony's core, exposing settlers and stockpiles. Keep trade traffic at the perimeter.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Caravan Frequency & Timing</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Merchant caravans visit on a semi-random schedule. Base frequency is roughly every 10-14 in-game days, but this is modified by several factors. Building a trade post increases visit frequency by roughly 30%. The Speechcraft skill of your colony (collective) also affects how often merchants choose to stop. Caravans are more frequent in autumn than other seasons, making autumn the best time to prepare trade goods.
            </p>
            <p className="font-serif text-base text-ink-light leading-relaxed">
              Strategic timing: use the gaps between merchant visits to produce trade goods. After a trade completes, immediately queue up the next batch of production. A well-oiled trade cycle looks like: Spring — plant hops and flax; Summer — harvest and brew beer, weave cloth; Autumn — craft clothing, finalize beer batches, sell everything; Winter — use silver to buy scarce goods, prepare for spring. This annual rhythm ensures you always have something valuable when merchants arrive.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
            <div className="faq-item">
              <details>
                <summary>How do I get merchants to visit more often?</summary>
                <p>Three methods to increase merchant frequency: 1) Build a trade post (unlocked via research) — this provides a guaranteed +30% visit frequency; 2) Increase your colony's total wealth — wealthier colonies attract more merchant attention; 3) Maintain friendly relations — attacking or robbing merchants will permanently reduce visit frequency. Building a trade post is the most reliable and recommended method.</p>
              </details>
            </div>
            <div className="faq-item">
              <details>
                <summary>Can I attack merchants and steal their goods?</summary>
                <p>Technically yes, but the consequences are severe. Attacking a merchant caravan turns their faction permanently hostile — they will never trade with you again and may send raiding parties in retaliation. All other merchant types will also visit less frequently (reduced by ~50%). The short-term loot is rarely worth the permanent economic damage. Only consider this as a desperate survival measure.</p>
              </details>
            </div>
            <div className="faq-item">
              <details>
                <summary>What should I always buy from merchants?</summary>
                <p>Prioritize goods you cannot produce yourself or that are extremely scarce: medicine kits (if you lack herbs), advanced weapons (if you lack a skilled smith), rare seeds (for crop variety), and iron ore (if your mines are depleted). Avoid buying basic resources like wood, stone, or raw food — these are almost always cheaper to produce locally.</p>
              </details>
            </div>
          </section>
        </div>

        <aside className="lg:w-[35%] space-y-8 shrink-0">
          <div className="field-sidebar-block">
            <h3 className="font-display text-lg font-semibold text-ink mb-4">Trade Profit Rankings</h3>
            <div className="space-y-2 font-serif text-sm text-ink-light">
              <div className="flex justify-between"><span>1. Beer</span><span className="text-gold">High</span></div>
              <div className="flex justify-between"><span>2. Iron Sword</span><span className="text-gold">High</span></div>
              <div className="flex justify-between"><span>3. Smoked Meat</span><span className="text-gold">High</span></div>
              <div className="flex justify-between"><span>4. Cloth Tunic</span><span className="text-gold">High</span></div>
              <div className="flex justify-between"><span>5. Cheese</span><span>Medium</span></div>
              <div className="flex justify-between"><span>6. Pickled Cabbage</span><span>Medium</span></div>
            </div>
          </div>
          <div className="journal-card p-5">
            <h3 className="font-display text-base font-semibold text-ink mb-3">Annual Trade Calendar</h3>
            <div className="space-y-2 font-serif text-sm text-ink-light">
                <div><span className="field-tag vermillion text-[10px]">Spring</span> Plant barley + flax</div>
                <div><span className="field-tag gold text-[10px]">Summer</span> Harvest, brew beer, weave cloth</div>
              <div><span className="field-tag ink text-[10px]">Autumn</span> Finalize goods, major trade season</div>
              <div><span className="field-tag ink text-[10px]">Winter</span> Spend silver on scarce goods</div>
            </div>
          </div>
        </aside>
      </div>
      </main>
  );
}
