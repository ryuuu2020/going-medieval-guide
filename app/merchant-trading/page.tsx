
export const metadata = {
  title: "Going Medieval Merchant Trading Guide — Trade Routes & Caravans (2026)",
  description:
    "Complete merchant trading guide for Going Medieval. Learn how to unlock the Cartography Table, trade with all 8 factions, maximize profits with speechcraft, and master caravan mechanics.",
  keywords: [
    "going medieval trading",
    "going medieval merchant guide",
    "going medieval cartography table",
    "going medieval trade routes",
    "going medieval caravan",
    "going medieval speechcraft",
  ],
};

export default function MerchantTradingPage() {
  return (
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-10">
            <section>
              <h1 className="chapter-heading">Merchant Trading Guide</h1>
              <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
                The trading system in Going Medieval unlocks a powerful economy layer for your colony. By building a Cartography Table and establishing diplomatic relationships with regional factions, you can acquire rare goods, offload excess resources, and gain access to exotic weapons and structures not yet researched. Whether you choose honest barter or caravan theft, mastering trade is essential for mid-to-late game colony prosperity. This guide covers every aspect of the merchant system — from unlocking trade to maximizing profit margins.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">How to Unlock Trading</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Trading is not available at the start of the game. You must progress through the research tree and construct the Cartography Table — the cornerstone building that enables all diplomatic and trade interactions with regional factions.
              </p>
              <div className="space-y-4">
                <div className="journal-card p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="step-number">1</span>
                    <h4 className="font-display text-lg font-semibold text-ink">Research Architecture</h4>
                  </div>
                  <p className="font-serif text-sm text-ink-light">Unlock the basic research prerequisite. Architecture is one of the early-game tech branches and should be prioritized early on.</p>
                </div>
                <div className="journal-card p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="step-number">2</span>
                    <h4 className="font-display text-lg font-semibold text-ink">Research Cartography (30 Chronicles)</h4>
                  </div>
                  <p className="font-serif text-sm text-ink-light">After Architecture, allocate 30 additional chronicles to unlock Cartography. This unlocks the Cartography Table build option in the furniture menu.</p>
                </div>
                <div className="journal-card p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="step-number">3</span>
                    <h4 className="font-display text-lg font-semibold text-ink">Build the Cartography Table</h4>
                  </div>
                  <p className="font-serif text-sm text-ink-light">Requires 90 wood and a settler with Construction skill of 15+. The table is 4x1x2 in size and classified as furniture — it does not degrade when placed outdoors, though it can be damaged by raids and lightning storms.</p>
                </div>
                <div className="journal-card p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="step-number">4</span>
                    <h4 className="font-display text-lg font-semibold text-ink">Access the Region Map</h4>
                  </div>
                  <p className="font-serif text-sm text-ink-light">Once the Cartography Table is built, the Region tab becomes available. This map shows nearby settlements and their basic information. From here, you can send settler caravans to trade actively or wait for merchant visits as random events.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Building a Trade Lobby</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                When merchants conclude a trade, they simply dump purchased items at their feet — items that will slowly decay if left on bare ground outdoors. Building a proper trade lobby near your settlement entrance is critical for protecting your investments.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                Design a large foyer with ample flooring and a roof. If buying food, maintain temperature-controlled storage nearby to prevent spoilage. Merchant NPCs will path towards rooms with doors located near campfires or hearths — keep the entrance simple and unobstructed. The more complex your stronghold layout, the longer merchants take to reach the trade area. Only items currently in stockpiles (including weapon racks, bookshelves, and chests) are available for outgoing trade, so maintain dedicated haulers to keep your trade goods organized.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Regional Factions & Merchant Types</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Each map spawns a selection of up to 8 possible factions, though factions sharing similar philosophies are unlikely to appear together in the same region. Each faction has unique trade preferences, favored goods, and diplomatic dispositions. Building faction alignment through profitable trades unlocks better deals and access to exclusive items.
              </p>

              <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm font-serif text-ink-light border-collapse">
                  <thead>
                    <tr className="bg-amber-950/30">
                      <th className="p-3 text-left font-display text-ink border-b-2 border-amber-800/40">Faction</th>
                      <th className="p-3 text-left font-display text-ink border-b-2 border-amber-800/40">Type</th>
                      <th className="p-3 text-left font-display text-ink border-b-2 border-amber-800/40">Trades</th>
                      <th className="p-3 text-left font-display text-ink border-b-2 border-amber-800/40">Visit Frequency</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-amber-800/20 hover:bg-amber-950/20">
                      <td className="p-3 font-semibold text-ink">Faithful Sons of England</td>
                      <td className="p-3">Royalist Loyalists</td>
                      <td className="p-3">Protection gear, combat equipment, armor</td>
                      <td className="p-3">Moderate (8-12 days)</td>
                    </tr>
                    <tr className="border-b border-amber-800/20 hover:bg-amber-950/20">
                      <td className="p-3 font-semibold text-ink">Band of the She-Wolf</td>
                      <td className="p-3">French Nobility</td>
                      <td className="p-3">Refined items, production facilities, luxury goods</td>
                      <td className="p-3">Rare (12-16 days)</td>
                    </tr>
                    <tr className="border-b border-amber-800/20 hover:bg-amber-950/20">
                      <td className="p-3 font-semibold text-ink">Kingdom of York</td>
                      <td className="p-3">Peasant Rebellion</td>
                      <td className="p-3">Everyday items, simple tools, food supplies</td>
                      <td className="p-3">Frequent (5-8 days)</td>
                    </tr>
                    <tr className="border-b border-amber-800/20 hover:bg-amber-950/20">
                      <td className="p-3 font-semibold text-ink">Heresy of the Rose</td>
                      <td className="p-3">Anti-Religion Group</td>
                      <td className="p-3">Random grab bag, mixed quality goods</td>
                      <td className="p-3">Moderate (8-12 days)</td>
                    </tr>
                    <tr className="border-b border-amber-800/20 hover:bg-amber-950/20">
                      <td className="p-3 font-semibold text-ink">Philosophers of the Natural</td>
                      <td className="p-3">Scholars</td>
                      <td className="p-3">Textbooks, research materials, chronicles</td>
                      <td className="p-3">Rare (12-16 days)</td>
                    </tr>
                    <tr className="border-b border-amber-800/20 hover:bg-amber-950/20">
                      <td className="p-3 font-semibold text-ink">Circle of Avalon</td>
                      <td className="p-3">Oak Brethren Devout</td>
                      <td className="p-3">Temple goods, religious decorations</td>
                      <td className="p-3">Moderate (8-12 days)</td>
                    </tr>
                    <tr className="border-b border-amber-800/20 hover:bg-amber-950/20">
                      <td className="p-3 font-semibold text-ink">Ancrene Disciples</td>
                      <td className="p-3">Restitution Cult</td>
                      <td className="p-3">Chapel goods, religious items, ritual materials</td>
                      <td className="p-3">Moderate (8-12 days)</td>
                    </tr>
                    <tr className="hover:bg-amber-950/20">
                      <td className="p-3 font-semibold text-ink">Church of the Third Coming</td>
                      <td className="p-3">Restitution Zealots</td>
                      <td className="p-3">Weapons, chapel decorations, rare arms</td>
                      <td className="p-3">Rare (12-16 days)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="font-serif text-xs text-ink-muted italic">Visit frequency estimates based on community data. Actual frequency varies by settlement location and faction proximity.</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Trade Value & Speechcraft</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Going Medieval uses a barter system — there is no currency. Each item's value is dynamically determined by the faction's supply and demand, item durability, and quality tier. Perceived value when buying from merchants is always higher than when selling, even if you already have a huge surplus.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                The settler conducting the trade is critical. Assign a settler with high <strong>Speechcraft</strong> to handle all merchant interactions. At baseline, merchants will only accept trades at a minimum 5% loss (you must give more value than you receive). With high enough speechcraft skill, merchants will tolerate up to a 20% loss — meaning you can effectively profit 20% per transaction. Each profitable trade increases your alignment with the associated faction, unlocking friendlier relations and eventually access to weapons and armor from neutral merchants.
              </p>
              <div className="recipe-card p-4">
                <h4 className="font-display text-sm font-semibold text-ink mb-2">Speechcraft Trade Benefits</h4>
                <ul className="space-y-1 font-serif text-xs text-ink-light">
                  <li>&bull; <strong>Low Speechcraft (0-5):</strong> 5% maximum loss tolerance — barely break even</li>
                  <li>&bull; <strong>Medium Speechcraft (6-10):</strong> 10-12% loss tolerance — moderate profit margins</li>
                  <li>&bull; <strong>High Speechcraft (11-15):</strong> 15-18% loss tolerance — strong profits</li>
                  <li>&bull; <strong>Expert Speechcraft (16+):</strong> 20% maximum loss tolerance — best possible deals</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Active vs. Passive Trading</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                The trading system operates through two distinct mechanics. <strong>Passive trading</strong> occurs when merchant caravans randomly arrive at your settlement — these are event-driven and cannot be directly controlled. Merchants arrive with armed escorts but will not attack unless provoked. Neutral parties can even walk through locked doors like settlers.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                <strong>Active trading</strong> becomes available after building the Cartography Table. You can dispatch settler caravans to nearby towns shown on the region map. This lets you choose when and where to trade, targeting specific factions for desirable goods. Use active trading to fill supply gaps when random merchant visits are infrequent, especially for factions with rare visit schedules like the Philosophers of the Natural (research materials) or the Church of the Third Coming (weapons).
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Merchant Theft: High Risk, High Reward</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                If a merchant dies, they drop all carried items — opening the door to caravan theft as an alternative acquisition strategy. Merchants do not eat or sleep, so you cannot trap them by removing doors. You must actively assault the caravan.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                Alignment loss is calculated per individual hit, not total damage. Use expert two-handed swordsmen or heavy crossbowmen to minimize the number of hits needed for a kill. Guards do not fight back unless the faction drops to hostile status. A clever strategy: gift items to raise faction standing to friendly, then assassinate the merchant while falling back to neutral. If the faction becomes hostile, guards launch an incursion identical to a raid — they'll prioritize destroying production facilities and knocking settlers unconscious before leaving.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Best Trades by Game Stage</h2>
              <div className="space-y-4">
                <div className="journal-card p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="step-number">E</span>
                    <h4 className="font-display text-lg font-semibold text-ink">Early Game: Food & Basic Tools</h4>
                  </div>
                  <p className="font-serif text-sm text-ink-light">Trade excess raw food and wood for items you haven't researched yet. The Kingdom of York offers the most frequent visits and best early-game deals on food supplies and simple tools. Use this faction to bridge resource gaps during the first year.</p>
                </div>
                <div className="journal-card p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="step-number">M</span>
                    <h4 className="font-display text-lg font-semibold text-ink">Mid Game: Production Facilities & Research</h4>
                  </div>
                  <p className="font-serif text-sm text-ink-light">Target the Band of the She-Wolf for production facilities you haven't unlocked yet, and the Philosophers of the Natural for chronicles and research materials to accelerate your tech tree. The Faithful Sons provide quality combat gear for defense.</p>
                </div>
                <div className="journal-card p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="step-number">L</span>
                    <h4 className="font-display text-lg font-semibold text-ink">Late Game: Exotic Weapons & Steel</h4>
                  </div>
                  <p className="font-serif text-sm text-ink-light">The Church of the Third Coming sells rare weapons including the falchion. The Circle of Avalon and Ancrene Disciples offer high-end decoration items for settler mood management. Trade excess iron, gold, and silver ingots for maximum profit.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
              <div className="faq-item">
                <details>
                  <summary>How do I start trading in Going Medieval?</summary>
                  <p>Research Architecture first, then allocate 30 chronicles to research Cartography. Build a Cartography Table (90 wood, Construction skill 15+). Once built, the Region tab unlocks, allowing you to send caravans to nearby settlements. Merchant caravans will also begin randomly visiting your colony as events.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>Which settler should handle trades?</summary>
                  <p>Always use a settler with the highest Speechcraft skill. Speechcraft determines how favorable the barter terms are — at low skill merchants demand a 5% value loss, while expert speechcraft (16+) allows up to 20% profit per trade. A dedicated trader with high speechcraft is one of the most valuable colonists in your settlement.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>Can I attack merchants to steal their goods?</summary>
                  <p>Yes, but with significant risk. Killing a merchant drops all carried items. Guards only fight back if the faction becomes hostile. Use heavy crossbowmen to minimize hits (alignment loss is per-hit). If hostility triggers, guards launch a raid-like incursion targeting production facilities. Gifting items to reach friendly status before assassination can mitigate diplomatic damage.</p>
                </details>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Related Guides</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a href="/research" className="recipe-card p-4 no-underline">
                  <h4 className="font-display text-sm font-semibold text-ink">Research Tech Tree</h4>
                  <p className="font-serif text-xs text-ink-muted mt-1">Unlock Cartography and other essential technologies</p>
                </a>
                <a href="/crafting" className="recipe-card p-4 no-underline">
                  <h4 className="font-display text-sm font-semibold text-ink">Crafting System</h4>
                  <p className="font-serif text-xs text-ink-muted mt-1">Produce goods to trade with merchants</p>
                </a>
                <a href="/production-chain-optimization" className="recipe-card p-4 no-underline">
                  <h4 className="font-display text-sm font-semibold text-ink">Production Chains</h4>
                  <p className="font-serif text-xs text-ink-muted mt-1">Optimize resource flow for trade surplus</p>
                </a>
                <a href="/trading" className="recipe-card p-4 no-underline">
                  <h4 className="font-display text-sm font-semibold text-ink">Trading System Overview</h4>
                  <p className="font-serif text-xs text-ink-muted mt-1">General trading mechanics and resource exchange</p>
                </a>
              </div>
            </section>
          </div>

          <aside className="lg:w-[35%] space-y-8 shrink-0">
            <div className="field-sidebar-block">
              <h3 className="font-display text-lg font-semibold text-ink mb-4">Trade Prerequisites</h3>
              <div className="space-y-3">
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Research: Architecture</h4><p className="font-serif text-xs text-ink-muted mt-1">Required before Cartography research</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Research: Cartography</h4><p className="font-serif text-xs text-ink-muted mt-1">30 chronicles — unlocks trade table</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Cartography Table</h4><p className="font-serif text-xs text-ink-muted mt-1">90 wood, Construction skill 15+</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Trade Lobby</h4><p className="font-serif text-xs text-ink-muted mt-1">Roofed foyer near entrance — protects goods</p></div>
              </div>
            </div>

            <div className="journal-card p-5">
              <h3 className="font-display text-base font-semibold text-ink mb-3">Trading Tips</h3>
              <ul className="space-y-2 font-serif text-sm text-ink-light">
                <li>&bull; Assign highest Speechcraft settler as trader</li>
                <li>&bull; Keep stockpiles organized for quick trade access</li>
                <li>&bull; Build roofed lobby to prevent item decay</li>
                <li>&bull; Gift to factions to improve relations before big trades</li>
                <li>&bull; Neutral merchants won't sell weapons — befriend them first</li>
                <li>&bull; Faction alignment improves with profitable trades</li>
                <li>&bull; Can steal from caravans — but guards may retaliate</li>
              </ul>
            </div>

            <div className="journal-card p-5">
              <h3 className="font-display text-base font-semibold text-ink mb-3">Best Merchant Factions</h3>
              <ul className="space-y-2 font-serif text-sm text-ink-light">
                <li>&bull; <strong>Kingdom of York:</strong> Most frequent visits, everyday items</li>
                <li>&bull; <strong>Faithful Sons:</strong> Best combat equipment</li>
                <li>&bull; <strong>Philosophers:</strong> Rare research chronicles</li>
                <li>&bull; <strong>Band of She-Wolf:</strong> High-end production facilities</li>
                <li>&bull; <strong>Church 3rd Coming:</strong> Exotic weapons (falchion)</li>
              </ul>
            </div>
          </aside>
        </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I start trading in Going Medieval?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Research Architecture first, then allocate 30 chronicles to research Cartography. Build a Cartography Table (90 wood, Construction skill 15+). Once built, the Region tab unlocks, allowing you to send caravans to nearby settlements. Merchant caravans will also begin randomly visiting your colony as events."
      }
    },
    {
      "@type": "Question",
      "name": "Which settler should handle trades?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Always use a settler with the highest Speechcraft skill. Speechcraft determines how favorable the barter terms are — at low skill merchants demand a 5% value loss, while expert speechcraft (16+) allows up to 20% profit per trade."
      }
    },
    {
      "@type": "Question",
      "name": "Can I attack merchants to steal their goods?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, but with significant risk. Killing a merchant drops all carried items. Guards only fight back if the faction becomes hostile. Use heavy crossbowmen to minimize hits (alignment loss is per-hit). If hostility triggers, guards launch a raid-like incursion targeting production facilities."
      }
    }
  ]
}` }} />
      </main>
  );
}
