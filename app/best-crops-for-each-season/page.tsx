{/* Meta description: Going Medieval best crops for each season — cabbage, carrot, beet, barley, flax, herbs, redcurrant and tall grass with real grow times and yields, plus a spring/summer/autumn/winter planting plan. */}
export const metadata = {
  title: "Going Medieval Best Crops for Each Season — Grow Times & Yields (2026)",
  description:
    "The best crops to plant each season in Going Medieval. Real grow times and yields for cabbage, carrot, beet, barley, flax, herbs, redcurrant, and tall grass, plus a full seasonal planting plan.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the best food crop in Going Medieval?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cabbage for speed, carrot and beet for bulk. Cabbage reaches full yield in about 5 days — the fastest food crop — making it the best spring starter and the best recovery crop after a failed harvest. Carrot (~7 days, 14 yield) and beet (~9 days, 15 yield) produce more food per tile per cycle, so they win for established fields. Barley is a poor food crop (14 days, 8 yield) and should be grown for brewing instead."
      }
    },
    {
      "@type": "Question",
      "name": "Can crops grow in winter in Going Medieval?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Outdoor crops stop growing in winter cold, and unharvested plants in the field will die back. Winter farming is about what you stored: harvested vegetables in a cold cellar or underground stockpile keep far longer than they would above ground. Plan your autumn sowing so everything is harvested before the first frost, and use winter labour for hunting, smoking meat, and processing rather than planting."
      }
    },
    {
      "@type": "Question",
      "name": "When should I plant barley in Going Medieval?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Early spring, as soon as the soil thaws. Barley needs about 14 days to reach full yield and has a minimum sowing temperature of 5°C, so it must go in early to ripen before autumn — and a spring cold snap can still set it back. Because barley is inefficient as food (8 yield versus 14–15 for carrot and beet), plant only what your brewery needs for ale and beer production."
      }
    },
    {
      "@type": "Question",
      "name": "How much farmland does each settler need in Going Medieval?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Roughly 10 cabbage-equivalent tiles per settler per cycle covers one meal a day: a meal costs 12 raw food, cabbage yields about 9 per tile at peak, and settlers eat daily. In practice, plant a mix — about 6–8 tiles of carrot/beet plus 2–4 tiles of cabbage per settler — then adjust after your first harvest. Add extra tiles for brewing (barley), clothing (flax), and medicine (herbs) on top of food."
      }
    },
    {
      "@type": "Question",
      "name": "What should I plant first in spring in Going Medieval?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cabbage and tall grass on day one of spring, then carrot and beet within the first few days. Cabbage's ~5-day cycle guarantees the earliest possible first harvest, tall grass (~4 days, 30 yield) secures bedding and animal fodder almost immediately, and carrot/beet follow as your bulk food. Add flax and a small herb plot once food is stable, and sow barley only if you plan to brew."
      }
    }
  ]
};

export default function BestCropsForEachSeasonPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">

      <h1 className="chapter-heading">Going Medieval Best Crops for Each Season</h1>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-6">
        <span className="drop-cap">F</span>arming in Going Medieval is a race against the calendar. Every crop
        has a fixed growth cycle, and the seasons do not wait: sow too late and the frost takes your fields
        before the harvest does; sow the wrong crop and your settlers spend autumn watching barley ripen while
        the larder empties. The good news is that the numbers are small and knowable — cabbage ripens in about
        5 days, barley needs 14, tall grass just 4 — so a few minutes of planning each spring feeds your colony
        all year. This guide gives you the real grow times and yields for every crop, then turns them into a
        season-by-season planting plan.
      </p>

      {/* Crop Data Section */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Crop Data: Grow Times, Yields, and Uses</h2>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        Nine plantable crops cover every farming need: four food staples, two industrial crops, one brewing
        grain, one medicinal, and redcurrant — the only multi-harvest crop, which keeps producing without
        replanting. Yield figures are base yield at peak per field tile; grow times are approximate days to
        full yield under normal temperatures.
      </p>

      <table className="parchment-table mb-8">
        <thead>
          <tr>
            <th>Crop</th>
            <th>Days to Full Yield</th>
            <th>Base Yield at Peak</th>
            <th>Harvests</th>
            <th>Yield per Day</th>
            <th>Primary Use</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tall Grass</td>
            <td>4</td>
            <td>30</td>
            <td>1</td>
            <td>7.50</td>
            <td>Animal fodder, bedding, thatch</td>
          </tr>
          <tr>
            <td>Cabbage</td>
            <td>5</td>
            <td>9</td>
            <td>1</td>
            <td>1.80</td>
            <td>Fast early food</td>
          </tr>
          <tr>
            <td>Carrot</td>
            <td>7</td>
            <td>14</td>
            <td>1</td>
            <td>2.00</td>
            <td>Bulk food; stores well</td>
          </tr>
          <tr>
            <td>Flax</td>
            <td>8</td>
            <td>11</td>
            <td>1</td>
            <td>1.38</td>
            <td>Linen for clothing</td>
          </tr>
          <tr>
            <td>Herbs</td>
            <td>8</td>
            <td>6</td>
            <td>1</td>
            <td>0.75</td>
            <td>Medicine, cooking</td>
          </tr>
          <tr>
            <td>Beet</td>
            <td>9</td>
            <td>15</td>
            <td>1</td>
            <td>1.67</td>
            <td>Bulk food; highest food yield per tile</td>
          </tr>
          <tr>
            <td>Barley</td>
            <td>14</td>
            <td>8 (+25 hay)</td>
            <td>1</td>
            <td>0.57</td>
            <td>Brewing ale/beer; hay byproduct</td>
          </tr>
          <tr>
            <td>Redcurrant</td>
            <td>15 (first crop)</td>
            <td>12</td>
            <td>5</td>
            <td>0.80</td>
            <td>Food, wine; no replanting</td>
          </tr>
        </tbody>
      </table>

      <figure className="mb-8">
        <img
          src="/images/best-crops-for-each-season.png"
          alt="Chart of Going Medieval crops comparing days to full yield (tall grass 4, cabbage 5, carrot 7, flax and herbs 8, beet 9, barley 14, redcurrant 15) with base yield at peak (30, 9, 14, 11, 6, 15, 8, 12) and a yield-per-day trend line"
          className="w-full rounded-lg border border-[#3d3528]"
          loading="lazy"
        />
        <figcaption className="mt-2 text-center text-sm text-ink-light font-serif">
          Days to full yield (grey) and base yield at peak (amber) per tile, with yield-per-day efficiency
          (gold line). Carrot and beet are the food-crop sweet spot; tall grass is in a league of its own.
        </figcaption>
      </figure>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        Read the table by role, not by raw numbers. <strong className="text-ink">Cabbage</strong> is your
        sprinter — nothing edible ripens faster, which makes it the right answer to "we need food now."
        <strong className="text-ink"> Carrot and beet</strong> are your marathoners — the best food per tile
        per day once fields are established, and both store well for winter.{' '}
        <strong className="text-ink">Barley</strong> looks weak as food because it is:
        beet, carrot, and cabbage all out-yield it on a shorter cycle. Grow barley for the brewery, not the
        kitchen — its real output is ale and beer for settler mood, plus 25 hay per tile as a fodder
        byproduct. <strong className="text-ink">Redcurrant</strong> is the long game: slow to first harvest,
        but five harvests without replanting make it the lowest-labour food source in the game.
      </p>

      <div className="aged-border p-4 mb-8">
        <p className="font-serif text-base text-ink-light leading-relaxed">
          <strong>Food Math:</strong> A meal costs 12 raw food and settlers eat daily. Ten peak cabbage
          tiles yield ~90 food — about 7.5 settler-days of meals every 5 days, comfortably ahead of
          consumption. Carrot and beet tiles do better still. If your cooks are falling behind, the
          bottleneck is usually the kitchen, not the field — check our{' '}
          <a href="/kitchen-design" className="text-vermillion hover:underline">kitchen design guide</a>{' '}
          before expanding farmland.
        </p>
      </div>

      {/* Seasonal Plan Section */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Season-by-Season Planting Plan</h2>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        Temperature gates everything. Barley, for example, cannot be sown below 5°C, and every crop halts in
        winter cold. The plan below assumes a temperate map and staggers plantings so harvests (and the
        labour spikes that come with them) don't collide.
      </p>

      <table className="parchment-table mb-8">
        <thead>
          <tr>
            <th>Season</th>
            <th>Plant</th>
            <th>Why</th>
            <th>Watch Out For</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Spring</td>
            <td>Cabbage + tall grass immediately; carrot, beet within days; flax and a small herb plot once food is stable; barley only if brewing</td>
            <td>Longest runway before frost; cabbage guarantees an early first harvest; barley needs the full warm window (14 days + ripening)</td>
            <td>Late cold snaps can kill young seedlings — stagger sowing over several days instead of one giant planting day</td>
          </tr>
          <tr>
            <td>Summer</td>
            <td>Second cycle of cabbage/carrot/beet; redcurrant if not planted in spring</td>
            <td>Fast crops complete a full second cycle; heat keeps growth steady</td>
            <td>Heatwaves wilt crops — prioritise harvesting ripe fields during extreme heat and keep water-heavy tasks for cooler hours</td>
          </tr>
          <tr>
            <td>Autumn</td>
            <td>Final cabbage cycle (5 days fits almost anywhere); nothing slower than carrot after mid-autumn</td>
            <td>Everything must be harvested before the first frost; cabbage's short cycle is the only safe late sowing</td>
            <td>First frost kills unharvested crops — when in doubt, harvest slightly early rather than lose the whole tile</td>
          </tr>
          <tr>
            <td>Winter</td>
            <td>Nothing outdoors. Plan next year's field layout instead</td>
            <td>Crops stop growing in the cold; fields lie fallow</td>
            <td>Winter is a storage test, not a farming season — your autumn harvest, cold cellar, and smoked meat carry the colony until spring</td>
          </tr>
        </tbody>
      </table>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        The single most common farming failure is over-planting in spring. Every tile sown is a tile that
        must be harvested within its ripe window, and a colony of eight settlers cannot bring in forty tiles
        of simultaneous beet. Stagger sowing in batches a few days apart — the grow times above tell you
        exactly how far apart your harvests will land. Pair this with{' '}
        <a href="/crop-rotation-guide" className="text-vermillion hover:underline">crop rotation</a>{' '}
        and{' '}
        <a href="/soil-fertility" className="text-vermillion hover:underline">soil fertility</a>{' '}
        management for long-term yields, and see the{' '}
        <a href="/farming-calendar" className="text-vermillion hover:underline">farming calendar</a>{' '}
        for a day-by-day schedule.
      </p>

      {/* Storage Section */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">From Field to Winter: Storage Is Half the Crop</h2>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        A crop only counts if it's still edible in February. Raw vegetables decay, and decay accelerates in
        warmth — the same summer heat that grows your beet also rots it in the stockpile. Move harvests
        underground as fast as your haulers allow: a cold{' '}
        <a href="/root-cellar" className="text-vermillion hover:underline">root cellar</a>{' '}
        or dug-in stockpile dramatically extends freshness, and pickled vegetables and smoked meat convert
        perishables into near-permanent stores. The full system is covered in our{' '}
        <a href="/food-preservation-guide" className="text-vermillion hover:underline">food preservation guide</a>{' '}
        and{' '}
        <a href="/winter-food-storage" className="text-vermillion hover:underline">winter food storage guide</a>.
      </p>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        Redcurrant deserves a final mention here: its five harvests per planting span most of the warm year,
        and the berries double as wine stock for mood management. One healthy redcurrant patch planted in
        spring quietly feeds a tavern all by itself — pair it with a{' '}
        <a href="/brewery-guide" className="text-vermillion hover:underline">brewery</a>{' '}
        and your barley fields can stay small.
      </p>

      {/* FAQ Section */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Frequently Asked Questions</h2>

      <div className="aged-border p-4 mb-4">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">What is the best food crop in Going Medieval?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          Cabbage for speed, carrot and beet for bulk. Cabbage reaches full yield in about 5 days — the
          fastest food crop — making it the best spring starter and the best recovery crop after a failed
          harvest. Carrot (~7 days, 14 yield) and beet (~9 days, 15 yield) produce more food per tile per
          cycle, so they win for established fields. Barley is a poor food crop (14 days, 8 yield) and
          should be grown for brewing instead.
        </p>
      </div>

      <div className="aged-border p-4 mb-4">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">Can crops grow in winter in Going Medieval?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          No. Outdoor crops stop growing in winter cold, and unharvested plants in the field will die back.
          Winter farming is about what you stored: harvested vegetables in a cold cellar or underground
          stockpile keep far longer than they would above ground. Plan your autumn sowing so everything is
          harvested before the first frost, and use winter labour for hunting, smoking meat, and processing
          rather than planting.
        </p>
      </div>

      <div className="aged-border p-4 mb-4">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">When should I plant barley in Going Medieval?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          Early spring, as soon as the soil thaws. Barley needs about 14 days to reach full yield and has a
          minimum sowing temperature of 5°C, so it must go in early to ripen before autumn — and a spring
          cold snap can still set it back. Because barley is inefficient as food (8 yield versus 14–15 for
          carrot and beet), plant only what your brewery needs for ale and beer production.
        </p>
      </div>

      <div className="aged-border p-4 mb-4">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">How much farmland does each settler need in Going Medieval?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          Roughly 10 cabbage-equivalent tiles per settler per cycle covers one meal a day: a meal costs 12
          raw food, cabbage yields about 9 per tile at peak, and settlers eat daily. In practice, plant a
          mix — about 6–8 tiles of carrot/beet plus 2–4 tiles of cabbage per settler — then adjust after
          your first harvest. Add extra tiles for brewing (barley), clothing (flax), and medicine (herbs)
          on top of food.
        </p>
      </div>

      <div className="aged-border p-4 mb-8">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">What should I plant first in spring in Going Medieval?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          Cabbage and tall grass on day one of spring, then carrot and beet within the first few days.
          Cabbage's ~5-day cycle guarantees the earliest possible first harvest, tall grass (~4 days, 30
          yield) secures bedding and animal fodder almost immediately, and carrot/beet follow as your bulk
          food. Add flax and a small herb plot once food is stable, and sow barley only if you plan to brew.
        </p>
      </div>

      {/* Related Guides */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Related Guides</h2>
      <ul className="list-disc pl-6 mb-8 space-y-2 font-serif text-base text-ink-light">
        <li><a href="/farming-calendar" className="text-vermillion hover:underline">Farming Calendar — day-by-day sowing schedule</a></li>
        <li><a href="/crop-rotation-guide" className="text-vermillion hover:underline">Crop Rotation Guide — keep fields productive year after year</a></li>
        <li><a href="/soil-fertility" className="text-vermillion hover:underline">Soil Fertility — get more from every tile</a></li>
        <li><a href="/food-preservation-guide" className="text-vermillion hover:underline">Food Preservation — turn harvests into winter-proof stores</a></li>
        <li><a href="/winter-food-storage" className="text-vermillion hover:underline">Winter Food Storage — survive the cold months</a></li>
        <li><a href="/brewery-guide" className="text-vermillion hover:underline">Brewery Guide — put your barley and redcurrants to work</a></li>
      </ul>

      <p className="font-serif text-sm text-ink-muted leading-relaxed mt-8 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
        Last updated: July 19, 2026. Values are approximate and may vary with temperature events
        and game updates.
      </p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  );
}
