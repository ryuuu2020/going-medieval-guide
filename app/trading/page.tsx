
export default function TradingPage() {
  return (
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-10">
            <section>
              <h1 className="chapter-heading">Trading System</h1>
              <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
                Trade is an important avenue in Going Medieval for acquiring scarce resources and offloading surplus goods. Periodically visiting merchants carry various wares — you can trade with them using silver coins or via barter. Mastering trade techniques can be a lifeline when resources are scarce and a way to monetize surplus when you're flush. Data below is based on community compilation and is for reference only.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Merchant Types</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Different merchant types carry different categories of goods. Understanding each type helps you target specific resources when needed.
              </p>
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Merchant Type</th>
                    <th>Primary Goods</th>
                    <th>Buying Preferences</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>General Merchant</td><td>Food, tools, sundries</td><td>Various goods</td></tr>
                  <tr><td>Weaponsmith</td><td>Weapons, armor, ammunition</td><td>Ore, metal</td></tr>
                  <tr><td>Materials Trader</td><td>Wood, stone, cloth</td><td>Food, alcohol</td></tr>
                  <tr><td>Herbalist</td><td>Herbs, medicine, medical supplies</td><td>Precious metals, gems</td></tr>
                </tbody>
              </table>
              <p className="font-serif text-sm text-ink-muted italic">Data source: Community compilation</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Trade Mechanics</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Trade can use silver coins or barter. Silver is the universal currency, earned by selling goods. Barter means directly exchanging your goods for the merchant's wares — the deal goes through when both sides' items are of equal value. Settlers with high Speechcraft skill get better trade prices.
              </p>
              <div className="aged-border p-5" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                <p className="font-serif text-sm text-ink leading-relaxed">
                  <strong className="text-vermillion">Trade Tip:</strong>
                  Merchants buy at roughly 60-70% of an item's base value and sell at roughly 130-150% — meaning there's about a 50% spread. Therefore, self-sufficiency is always more cost-effective than trading. Use trade primarily to acquire goods you can't produce.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">High-Value Trade Goods</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                To make money efficiently, focus on producing high value-density goods. The following items offer the best value and are ideal for mass production and sale:
              </p>
              <div className="space-y-3">
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Beer</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">Hops cost little to grow, and beer sells for a high price — one of the most profitable commodities. Plant hops heavily in summer, brew in autumn, and sell in winter.</p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Smoked Meat</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">Raw meat has low value; processing it into smoked meat doubles its worth. Hunters provide a steady supply of raw meat, and the smokehouse processes it in batches.</p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Iron Weapons</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">High-tier weapons fetch very high prices. If you have ample iron ore and a skilled blacksmith, mass-producing iron swords for sale is highly profitable.</p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Cloth Clothing</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">Processing flax cloth into clothing multiplies its value. Settlers with high Tailoring skill can mass-produce items for a stable income stream.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Trading Strategy</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                The most efficient trade strategy is "specialized production, complementary trade." Pick 1-2 high-value goods for mass production, then trade for everything else you need. Example: focus on brewing and trade beer for weapons, medicine, and building materials.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                Building a trade post attracts more merchant visits and improves trade efficiency. Place the trade post inside your walls but near the entrance — convenient for merchants while maintaining security. During each merchant visit, prioritize buying scarce goods you can't produce (e.g., medicine, special ores).
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
              <div className="faq-item">
                <details>
                  <summary>How often do merchants visit?</summary>
                  <p>Merchants visit roughly every 7-14 days (in-game), with random type each time. Building a trade post increases visit frequency. Autumn sees the most merchant visits — the best time for concentrated trading.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>I'm short on silver coins. What can I do?</summary>
                  <p>Use barter mode to directly trade your goods for needed items. Sell surplus food, alcohol, or weapons for silver. Beer is the most efficient money-maker — mass-produce it.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>How do I get better trade prices?</summary>
                  <p>Assign the settler with the highest Speechcraft skill to handle trading — higher skill means better discounts. Keeping the merchant happy (offering food and drink) can also slightly improve prices. Bulk trading often yields better unit prices.</p>
                </details>
              </div>
            </section>
          </div>

          <aside className="lg:w-[35%] space-y-8 shrink-0">
            <div className="field-sidebar-block">
              <h3 className="font-display text-lg font-semibold text-ink mb-4">Profit Rankings</h3>
              <div className="space-y-2 font-serif text-sm text-ink-light">
                <div className="flex justify-between"><span>1. Beer</span><span className="text-gold">&#9733;&#9733;&#9733;</span></div>
                <div className="flex justify-between"><span>2. Iron Sword</span><span className="text-gold">&#9733;&#9733;&#9733;</span></div>
                <div className="flex justify-between"><span>3. Smoked Meat</span><span className="text-gold">&#9733;&#9733;&#9734;</span></div>
                <div className="flex justify-between"><span>4. Cloth Clothing</span><span className="text-gold">&#9733;&#9733;&#9734;</span></div>
                <div className="flex justify-between"><span>5. Bread</span><span className="text-gold">&#9733;&#9734;&#9734;</span></div>
              </div>
            </div>
            <div className="journal-card p-5">
              <h3 className="font-display text-base font-semibold text-ink mb-3">Trade Tips</h3>
              <ul className="space-y-2 font-serif text-sm text-ink-light">
                <li>&bull; Speechcraft skill affects prices</li>
                <li>&bull; Prioritize buying scarce goods</li>
                <li>&bull; Concentrate trading in autumn</li>
                <li>&bull; Build a trade post to increase visits</li>
                <li>&bull; Bulk trades get better unit prices</li>
              </ul>
            </div>
          </aside>
        </div>
      </main>
  );
}
