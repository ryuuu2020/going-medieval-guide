import type { Metadata } from "next";
import { tradeData } from "@/lib/data";

export const metadata: Metadata = {
  title: "Trade and Economy Guide | Going Medieval Guide",
  description:
    "Master the trade and economy system in Going Medieval. Learn what to sell, what to buy, merchant types, trade frequencies, and how to maximize profits using Speechcraft skill for your medieval colony.",
};

export default function TradePage() {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem" }}>
      <h1 style={{ marginBottom: "0.5rem" }}>Trade and Economy Guide</h1>
      <p style={{ color: "var(--color-text-muted)", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: "2rem" }}>
        Trade is Going Medieval&apos;s economic backbone — it&apos;s how you acquire resources your biome
        lacks, sell surplus goods you produce in abundance, and access rare items and equipment
        that are otherwise uncraftable. A colony with strong trade relations can overcome resource
        scarcity and fund rapid expansion.
      </p>

      {/* FAQ */}
      <h2 style={{ marginBottom: "1rem" }}>Quick Answers</h2>
      <div className="faq-snippets">
        <details>
          <summary>How often do merchants arrive in Going Medieval?</summary>
          <p>
            Merchant arrival frequency varies by type: General Merchants arrive every 8-12 days,
            Farmers arrive every 7-10 days, Trader Caravans every 12-15 days, Armorers every
            15-20 days, Alchemists every 18-22 days, and Weaponsmiths are the rarest at every
            20-25 days. Arrival times are not fixed — they fluctuate within these ranges. After
            the 1.0 launch, merchant frequency was adjusted to ensure more consistent trading
            opportunities. You&apos;ll typically see 2-3 different merchant types visit per season.
          </p>
        </details>
        <details>
          <summary>What are the best items to sell for profit?</summary>
          <p>
            Crafted items sell for significantly more than raw materials. The most profitable
            trade goods are: Alcohol (Ale and Mead from the Brewing Station) — high value, low
            material cost; Preserved Meals (Cooking Station) — high trade value and long shelf
            life; Masterwork weapons and armor (Smithy and Armorer) — exceptional value from
            high-skill crafters; Leather and surplus clothing (Tailor Workshop) — renewable
            through hunting and animal husbandry. Never sell raw materials like stone or wood
            unless absolutely desperate — their trade value is a fraction of what they&apos;re worth
            as crafted goods.
          </p>
        </details>
        <details>
          <summary>How does Speechcraft affect trade prices?</summary>
          <p>
            Speechcraft is the most underrated skill in Going Medieval and directly affects
            trade prices. A settler with 10+ Speechcraft can buy items for 30-40% less and sell
            items for 30-40% more compared to a settler with no Speechcraft skill. Always use
            your highest Speechcraft settler to conduct trades. The skill levels up each time
            a trade transaction is completed, so assign your designated trader to handle all
            merchant interactions. For maximum efficiency, have one settler specialize in
            Speechcraft from the start of your colony.
          </p>
        </details>
      </div>

      {/* Merchant Types Table */}
      <h2 style={{ marginTop: "3rem", marginBottom: "1rem" }}>Merchant Types and Trade Table</h2>
      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
        There are {tradeData.length} distinct merchant types in Going Medieval, each with unique
        inventory, pricing, and arrival schedules. Understanding what each merchant buys and sells
        lets you plan your production around profitable trade opportunities.
      </p>
      <div style={{ overflowX: "auto" }}>
        <table>
          <thead>
            <tr>
              <th>Merchant</th>
              <th>Buys</th>
              <th>Sells</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {tradeData.map((t) => (
              <tr key={t.merchant}>
                <td style={{ fontWeight: 600, whiteSpace: "nowrap" }}>{t.merchant}</td>
                <td style={{ fontSize: "0.9rem" }}>{t.buys}</td>
                <td style={{ fontSize: "0.9rem" }}>{t.sells}</td>
                <td style={{ fontSize: "0.9rem", color: "var(--color-text-muted)" }}>{t.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* What to Sell */}
      <h2 style={{ marginTop: "3rem", marginBottom: "1rem" }}>What to Sell — Maximizing Your Exports</h2>
      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "1rem" }}>
        Building a profitable trade economy requires producing goods with high trade value from
        renewable or abundant resources. Focus your production on items that merchants actually
        want to buy, and avoid wasting crafting time on goods with poor trade returns.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "1.5rem" }}>
        <div className="card" style={{ borderLeft: "4px solid var(--color-accent)" }}>
          <h3 style={{ fontSize: "1.15rem", margin: "0 0 0.5rem" }}>Tier 1 Exports — Crafted Alcohol</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            Ale and Mead from the Brewing Station are the most consistently profitable trade
            goods in Going Medieval. Barley (for Ale) is a high-yield crop that grows in Spring
            and Summer, and Herbs (for Mead) grow across three seasons. Both beverages have
            excellent trade value per unit of raw material invested. A single Brewing Station
            staffed by a skilled brewer can generate enough trade value to buy out an entire
            merchant&apos;s inventory. General Merchants and Trader Caravans always buy alcohol,
            and the markup is substantial. Brewing should be one of your first Tier 1 research
            unlocks specifically for its trade potential, not just for settler mood bonuses.
          </p>
        </div>
        <div className="card" style={{ borderLeft: "4px solid var(--color-success)" }}>
          <h3 style={{ fontSize: "1.15rem", margin: "0 0 0.5rem" }}>Tier 2 Exports — Preserved Food and Leather Goods</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            Preserved meals from the Cooking Station have long shelf lives and good trade value,
            making them ideal export goods. When your food stockpile is overflowing and spoilage
            is a concern, convert excess raw food into preserved meals for trade. Leather goods
            — clothing, armor, and raw leather — sell well to Armorers and Weaponsmiths. Hunting
            provides a steady leather supply, and Tailor Workshop products add crafting value on
            top. Surplus leather from deer and boar hunting can be turned into trade goods rather
            than sitting in storage. Sheep wool turned into cloth at the Tailor Workshop also
            carries decent trade value.
          </p>
        </div>
        <div className="card" style={{ borderLeft: "4px solid var(--color-warning, #c9903a)" }}>
          <h3 style={{ fontSize: "1.15rem", margin: "0 0 0.5rem" }}>Tier 3 Exports — Masterwork Items</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            Once you unlock Master Crafting (Tier 3), settlers with high Smithing, Tailoring, or
            Carpentry skill can produce masterwork and legendary quality items. These items have
            massive trade value — a single legendary sword can be worth more than an entire
            merchant&apos;s inventory combined. Keep masterwork items that benefit your combat settlers
            and sell legendary duplicates. Masterwork decorative furniture from the Carpenter
            Bench also commands exceptional prices. This is your late-game economic engine —
            produce masterwork goods, sell them for rare materials, and use the profits to fund
            colony expansion and defensive upgrades.
          </p>
        </div>
      </div>

      {/* What to Buy */}
      <h2 style={{ marginTop: "3rem", marginBottom: "1rem" }}>What to Buy — Smart Purchasing</h2>
      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
        Knowing what to buy is as important as knowing what to sell. Prioritize items that are
        scarce in your biome, unlock new production capabilities, or provide immediate survival
        benefits that justify their cost.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "1.5rem" }}>
        <div>
          <h3 style={{ fontSize: "1.15rem", margin: "0 0 0.5rem" }}>Priority Purchases</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            <strong style={{ color: "var(--color-accent)" }}>Iron ingots and metal scrap:</strong> Essential for smithing and armor crafting. Always buy iron when available if you&apos;re in a Marsh or wood-rich biome with limited mining. <strong style={{ color: "var(--color-accent)" }}>Seeds and livestock:</strong> The Farmer merchant sells crop seeds you may not have and tamable animals. Buy Apple Tree seeds for long-term food investment and livestock species you haven&apos;t found in the wild. <strong style={{ color: "var(--color-accent)" }}>Rare components:</strong> Alchemists sell potions and medicine that are difficult or impossible to craft early-game. Buy healing salves before major raids. <strong style={{ color: "var(--color-accent)" }}>High-quality weapons and armor:</strong> The Weaponsmith and Armorer occasionally sell items with stats better than what you can craft — worth the premium price for your frontline defenders.
          </p>
        </div>
        <div>
          <h3 style={{ fontSize: "1.15rem", margin: "0 0 0.5rem" }}>What NOT to Buy</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            Avoid buying raw materials you can produce yourself — wood, stone, basic food, and
            common clothing are almost never worth their trade cost. Don&apos;t buy basic tools if
            you have a Smithy — crafting them yourself costs a fraction of the materials. Be
            wary of Trader Caravan prices — they offer convenience (everything in one place) but
            at significantly worse exchange rates than specialized merchants. Only use the
            Trader Caravan for emergency purchases when you desperately need something and the
            specialized merchant who would normally sell it hasn&apos;t arrived.
          </p>
        </div>
      </div>

      {/* Trade Strategy */}
      <h2 style={{ marginTop: "3rem", marginBottom: "1rem" }}>Trade Strategy and Economic Planning</h2>
      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "1rem" }}>
        Strategic trading isn&apos;t about individual transactions — it&apos;s about building a production
        pipeline that converts your colony&apos;s surplus into the resources you lack. Here&apos;s how to
        build an effective trade economy.
      </p>

      <div className="card" style={{ borderLeft: "4px solid var(--color-accent)", marginBottom: "1.5rem" }}>
        <h3 style={{ fontSize: "1.15rem", margin: "0 0 0.5rem" }}>The Trade Pipeline</h3>
        <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
          Step 1: Identify what your biome produces in excess. In Valley, it&apos;s food; in Hillside,
          it&apos;s wood products; in Marsh, it&apos;s herbs and clay products. Step 2: Convert that excess
          into crafted goods — raw materials have low base value, crafted goods multiply that value
          substantially. Step 3: Stockpile crafted goods and wait for the right merchant. Don&apos;t
          sell to the first merchant who arrives unless they offer good prices — the Weaponsmith
          pays more for metal goods than the General Merchant. Step 4: Use your highest Speechcraft
          settler for every trade. Step 5: Reinvest trade profits into items that improve your
          production capacity — better tools, new seeds, additional livestock — creating a virtuous
          cycle of increasing production and trade volume.
        </p>
      </div>

      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7 }}>
        A well-managed trade economy transforms Going Medieval from a survival game into a
        thriving economic simulation. Colonies that trade effectively can overcome any resource
        shortage, access technology beyond their research tier, and build wealth that funds
        grand construction projects. Designate a trader settler early, invest in Speechcraft,
        and build production chains that turn surplus into prosperity. Your merchants will
        arrive — make sure you have goods worth selling when they do.
      </p>
    </div>
  );
}
