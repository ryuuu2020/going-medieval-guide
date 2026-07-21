{/* Meta description: Going Medieval farming calendar — season-by-season sowing and harvest schedule with real crop grow times, tiles-per-settler food math, frost deadlines, and a four-season timeline. */}
export const metadata = {
  title: "Going Medieval Farming Calendar — Sowing & Harvest Schedule by Season (2026)",
  description:
    "A full farming calendar for Going Medieval: what to sow in spring, summer, and autumn with real grow times, frost deadlines, tiles per settler for 12 food a day, and how to line the harvest up with winter storage.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What should I plant on day one of spring in Going Medieval?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cabbage and tall grass immediately. Cabbage reaches full yield in about 5 days — the fastest food crop — so a day-one sowing guarantees the earliest possible first meal from your fields. Tall grass takes about 4 days and yields 30 per tile, securing bedding, thatch, and animal fodder almost at once. Follow with carrot and beet within the first few days, and barley early only if you brew, since its 14-day cycle needs the full warm window."
      }
    },
    {
      "@type": "Question",
      "name": "When is the last safe sowing before winter in Going Medieval?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Count backwards from the first frost using each crop's days to full yield. Cabbage (5 days) can go in as little as a week before frost and still make it; carrot (7 days) and beet (9 days) need to be in the ground by mid-autumn; barley (14 days) and redcurrant (15 days to first crop) are spring-only propositions. When in doubt, harvest slightly early — an unharvested field dies when the frost hits."
      }
    },
    {
      "@type": "Question",
      "name": "How many crop tiles does each settler need in Going Medieval?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Settlers eat one meal a day and a meal costs 12 raw food. Dividing by yield per day per tile gives roughly 7 cabbage tiles, 6 carrot tiles, or 7 beet tiles per settler per cycle — and about 21 barley tiles if you foolishly tried to feed people on barley. In practice a mixed field of 8–10 tiles per settler, staggered in batches a few days apart, covers consumption with room for spoilage."
      }
    },
    {
      "@type": "Question",
      "name": "How long is winter in Going Medieval and how do I farm around it?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Winter lasts 12 days, and outdoor crops stop growing in the cold. You don't farm during winter — you farm for it. The calendar goal is to have every tile harvested before the first frost and at least 12 meals (144 raw food) per settler in the cellar, then spend the 12 winter days on hunting, smoking meat, hauling, and planning next year's layout."
      }
    },
    {
      "@type": "Question",
      "name": "Should I stagger my sowing in Going Medieval?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — staggered sowing is the single biggest farming quality-of-life habit. Every tile sown must be harvested within its ripe window, and a full field sown on one day ripens on one day, spiking labour exactly when other work piles up. Sow in batches two to three days apart so harvests (and hauling) arrive in waves you can actually clear, and so a single cold snap or heatwave never hits your entire crop at the same growth stage."
      }
    }
  ]
};

export default function FarmingCalendarPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">

      <h1 className="chapter-heading">Going Medieval Farming Calendar</h1>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-6">
        <span className="drop-cap">A</span> Going Medieval year is a conveyor belt: spring sows, summer
        doubles, autumn cashes out, and winter — 12 cold days when nothing grows — audits your work. The
        crops themselves are simple; the calendar is the game. Cabbage needs 5 days to full yield, carrot 7,
        beet 9, barley 14, and every one of those countdowns has to fit between thaw and frost. This calendar
        lays out the whole year: what goes in the ground when, how many tiles each settler actually needs,
        and where the deadlines hide.
      </p>

      {/* Crop timing table */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Crop Timing Reference</h2>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        These are the numbers the calendar is built from — days to full yield under normal temperatures and
        base yield at peak per tile. Cold snaps slow growth, heatwaves stress it, and barley cannot be sown
        below 5°C at all. Full analysis of each crop's role lives in our{' '}
        <a href="/best-crops-for-each-season" className="text-vermillion hover:underline">best crops per season guide</a>;
        this page is about <em>when</em>, not <em>which</em>.
      </p>

      <table className="parchment-table mb-8">
        <thead>
          <tr>
            <th>Crop</th>
            <th>Days to Full Yield</th>
            <th>Yield at Peak</th>
            <th>Yield per Day</th>
            <th>Sowing Window</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tall Grass</td>
            <td>4</td>
            <td>30</td>
            <td>7.50</td>
            <td>Spring, day one — fodder and bedding first</td>
          </tr>
          <tr>
            <td>Cabbage</td>
            <td>5</td>
            <td>9</td>
            <td>1.80</td>
            <td>Spring through late autumn — the only safe late sowing</td>
          </tr>
          <tr>
            <td>Carrot</td>
            <td>7</td>
            <td>14</td>
            <td>2.00</td>
            <td>Spring and summer; nothing after mid-autumn</td>
          </tr>
          <tr>
            <td>Flax</td>
            <td>8</td>
            <td>11</td>
            <td>1.38</td>
            <td>Spring, once food is stable — clothing comes second</td>
          </tr>
          <tr>
            <td>Herbs</td>
            <td>8</td>
            <td>6</td>
            <td>0.75</td>
            <td>Spring; one small plot is enough for medicine and cooking</td>
          </tr>
          <tr>
            <td>Beet</td>
            <td>9</td>
            <td>15</td>
            <td>1.67</td>
            <td>Spring and summer; mid-autumn deadline</td>
          </tr>
          <tr>
            <td>Barley</td>
            <td>14</td>
            <td>8 (+25 hay)</td>
            <td>0.57</td>
            <td>Early spring only — needs the full warm window; cannot be sown below 5°C</td>
          </tr>
          <tr>
            <td>Redcurrant</td>
            <td>15 (first crop)</td>
            <td>12</td>
            <td>0.80</td>
            <td>Spring — 5 harvests per planting repay the wait</td>
          </tr>
        </tbody>
      </table>

      {/* Four-season timeline SVG */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">The Farming Year at a Glance</h2>
      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        The whole calendar in one picture: sowing waves in spring and summer, the autumn cash-out with its
        frost deadline, and the 12-day winter where the fields lie fallow and the cellar does the farming.
      </p>
      <figure className="my-6">
        <svg viewBox="0 0 760 400" className="w-full rounded-lg border border-gray-700" role="img"
          aria-label="Timeline diagram of a Going Medieval farming year showing spring sowing of cabbage, carrot, beet and barley, summer second-cycle sowing, autumn final harvest before first frost, and a twelve-day winter with no outdoor growing">
          <rect x="0" y="0" width="760" height="400" fill="#1a1510" />

          {/* season bands */}
          <rect x="40" y="50" width="170" height="40" fill="#2d3324" />
          <rect x="210" y="50" width="170" height="40" fill="#3a3020" />
          <rect x="380" y="50" width="170" height="40" fill="#3a2818" />
          <rect x="550" y="50" width="170" height="40" fill="#26303a" />
          <text x="125" y="75" fill="#9ab86a" fontSize="15" textAnchor="middle" fontWeight="700">SPRING</text>
          <text x="295" y="75" fill="#d4a840" fontSize="15" textAnchor="middle" fontWeight="700">SUMMER</text>
          <text x="465" y="75" fill="#d4943a" fontSize="15" textAnchor="middle" fontWeight="700">AUTUMN</text>
          <text x="635" y="75" fill="#8ab4c8" fontSize="15" textAnchor="middle" fontWeight="700">WINTER (12 days)</text>

          {/* frost marker */}
          <line x1="550" y1="46" x2="550" y2="330" stroke="#8ab4c8" strokeWidth="2" strokeDasharray="6 5" />
          <text x="556" y="344" fill="#8ab4c8" fontSize="12">first frost — unharvested crops die</text>

          {/* crop bars: spring->harvest */}
          {/* tall grass */}
          <rect x="46" y="110" width="30" height="16" fill="#9ab86a" rx="3" />
          <text x="86" y="123" fill="#a89878" fontSize="12">tall grass 4d — day one, fodder &amp; thatch</text>
          {/* cabbage wave 1 */}
          <rect x="46" y="140" width="38" height="16" fill="#d4943a" rx="3" />
          <text x="94" y="153" fill="#a89878" fontSize="12">cabbage 5d — sow immediately, repeat all year</text>
          {/* carrot wave 1 */}
          <rect x="60" y="170" width="53" height="16" fill="#c05a3a" rx="3" />
          <text x="123" y="183" fill="#a89878" fontSize="12">carrot 7d — within the first days</text>
          {/* beet wave 1 */}
          <rect x="68" y="200" width="68" height="16" fill="#a85a7a" rx="3" />
          <text x="146" y="213" fill="#a89878" fontSize="12">beet 9d — bulk winter food</text>
          {/* barley */}
          <rect x="60" y="230" width="106" height="16" fill="#d4a840" rx="3" />
          <text x="176" y="243" fill="#a89878" fontSize="12">barley 14d — spring only, min 5°C to sow</text>
          {/* redcurrant */}
          <rect x="76" y="260" width="114" height="16" fill="#b04848" rx="3" />
          <text x="200" y="273" fill="#a89878" fontSize="12">redcurrant 15d to first crop, then 5 harvests</text>

          {/* summer second cycle */}
          <rect x="220" y="140" width="38" height="16" fill="#d4943a" rx="3" />
          <rect x="262" y="140" width="38" height="16" fill="#d4943a" rx="3" />
          <text x="310" y="153" fill="#a89878" fontSize="12">cabbage cycles roll on</text>
          <rect x="230" y="170" width="53" height="16" fill="#c05a3a" rx="3" />
          <text x="293" y="183" fill="#a89878" fontSize="12">second carrot cycle</text>
          <rect x="240" y="200" width="68" height="16" fill="#a85a7a" rx="3" />
          <text x="318" y="213" fill="#a89878" fontSize="12">second beet cycle</text>

          {/* autumn final sowing */}
          <rect x="392" y="140" width="38" height="16" fill="#d4943a" rx="3" />
          <text x="440" y="153" fill="#a89878" fontSize="12">last cabbage fits almost anywhere</text>
          <rect x="392" y="170" width="53" height="16" fill="#c05a3a" rx="3" opacity="0.55" />
          <text x="455" y="183" fill="#a89878" fontSize="12">mid-autumn: carrot deadline</text>
          <rect x="470" y="200" width="70" height="16" fill="#8ab4c8" rx="3" opacity="0.35" />
          <text x="470" y="228" fill="#8ab4c8" fontSize="12">too late — frost risk</text>

          {/* winter block */}
          <rect x="556" y="110" width="158" height="120" fill="#1c2630" stroke="#26303a" rx="4" />
          <text x="635" y="140" fill="#8ab4c8" fontSize="12" textAnchor="middle">fields fallow</text>
          <text x="635" y="160" fill="#a89878" fontSize="11" textAnchor="middle">hunt · smoke meat</text>
          <text x="635" y="178" fill="#a89878" fontSize="11" textAnchor="middle">haul · craft · build</text>
          <text x="635" y="196" fill="#a89878" fontSize="11" textAnchor="middle">plan next layout</text>
          <text x="635" y="218" fill="#d4a840" fontSize="11" textAnchor="middle">cellar feeds the colony</text>

          {/* labour note */}
          <text x="60" y="330" fill="#e0d4c0" fontSize="12.5">stagger every sowing 2–3 days apart → harvests land in waves, not spikes</text>

          {/* legend */}
          <g transform="translate(40, 368)">
            <rect x="0" y="-11" width="14" height="12" fill="#d4943a" rx="2" />
            <text x="20" y="0" fill="#a89878" fontSize="12">crop growing (bar length = days to full yield)</text>
            <line x1="330" y1="-5" x2="354" y2="-5" stroke="#8ab4c8" strokeWidth="2" strokeDasharray="5 4" />
            <text x="360" y="0" fill="#a89878" fontSize="12">first frost</text>
            <rect x="436" y="-11" width="14" height="12" fill="#1c2630" stroke="#26303a" rx="2" />
            <text x="456" y="0" fill="#a89878" fontSize="12">no outdoor growth</text>
          </g>
        </svg>
        <figcaption className="mt-2 text-center text-sm text-gray-400">
          Bar lengths are to scale with days to full yield. Everything right of the dashed line is gambling
          with the frost — only cabbage's 5-day cycle is a safe autumn bet.
        </figcaption>
      </figure>

      {/* Tiles per settler */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">How Many Tiles per Settler?</h2>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        The calendar needs a size. Settlers eat one meal a day and a meal costs 12 raw food, so each settler
        consumes 12 raw food daily. Divide that by each crop's yield per day and you get the field size that
        keeps one settler fed indefinitely:
      </p>

      <table className="parchment-table mb-8">
        <thead>
          <tr>
            <th>Crop</th>
            <th>Yield per Day per Tile</th>
            <th>Tiles per Settler (12 food/day)</th>
            <th>Calendar Role</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Carrot</td>
            <td>2.00</td>
            <td>6</td>
            <td>Most tile-efficient food; the backbone of the plan</td>
          </tr>
          <tr>
            <td>Cabbage</td>
            <td>1.80</td>
            <td>~7</td>
            <td>Fastest cycle; best spring starter and autumn gap-filler</td>
          </tr>
          <tr>
            <td>Beet</td>
            <td>1.67</td>
            <td>~7</td>
            <td>Highest yield per tile; best for storage-focused fields</td>
          </tr>
          <tr>
            <td>Barley</td>
            <td>0.57</td>
            <td>~21</td>
            <td>Never a food crop — grow only what the brewery needs</td>
          </tr>
        </tbody>
      </table>

      <figure className="mb-8">
        <img
          src="/images/farming-calendar.png"
          alt="Bar chart of crop tiles needed to feed one settler 12 raw food per day in Going Medieval: carrot 6 tiles, cabbage about 7, beet about 7, and barley about 21, showing barley is inefficient as food"
          className="w-full rounded-lg border border-[#3d3528]"
          loading="lazy"
        />
        <figcaption className="mt-2 text-center text-sm text-ink-light font-serif">
          Tiles per settler to produce 12 raw food per day, derived from the yield-per-day figures in the
          timing table. Barley's inefficiency as food is the whole reason it belongs to the brewery.
        </figcaption>
      </figure>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        In practice, plant a mixed 8–10 food tiles per settler — the mix hedges against a cold snap or
        heatwave hitting a single crop at a vulnerable stage — then add flax, a small herb plot, and brewing
        barley on top. And stagger everything: sow batches two to three days apart so each harvest wave is
        small enough to clear before the next one ripens. A field that ripens all at once rots all at once
        when life interrupts.
      </p>

      {/* Season schedule */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">The Season-by-Season Schedule</h2>

      <table className="parchment-table mb-8">
        <thead>
          <tr>
            <th>Season</th>
            <th>Sow</th>
            <th>Harvest / Other Work</th>
            <th>Deadline</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Spring</td>
            <td>Tall grass and cabbage day one; carrot and beet within days; barley and redcurrant early; flax and herbs once food is stable</td>
            <td>First cabbage at ~day 5; tall grass at ~day 4; expand fields as labour allows</td>
            <td>Barley must go in early — 14 days plus a possible cold snap needs the full warm runway</td>
          </tr>
          <tr>
            <td>Summer</td>
            <td>Second cycles of cabbage, carrot, beet as the spring sowings come out</td>
            <td>Continuous rolling harvest; haul everything underground the day it comes in — summer heat rots surface stockpiles fast</td>
            <td>During heatwaves, prioritise ripe fields; wilted or heat-stressed crops lose time</td>
          </tr>
          <tr>
            <td>Autumn</td>
            <td>Final cabbage cycle; carrot and beet only before mid-autumn</td>
            <td>The cash-out: everything to the cellar, surplus to the pickling stove, hunts to the smokehouse — target 12+ meals per settler stored</td>
            <td>First frost kills unharvested crops; when in doubt, harvest early</td>
          </tr>
          <tr>
            <td>Winter (12 days)</td>
            <td>Nothing — crops stop growing in the cold</td>
            <td>Hunting, smoking, hauling, construction, and next year's field plan; open the cellar to freeze it</td>
            <td>Have fields zoned and seeds of plan ready for the first thaw day</td>
          </tr>
        </tbody>
      </table>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-8">
        The autumn row is where colonies are won or lost. Winter lasts 12 days, so the storage target is at
        least 12 meals — 144 raw food — per settler in stable form before the frost. Run the exact numbers in
        our <a href="/winter-food-storage" className="text-vermillion hover:underline">winter food storage
        guide</a>, build the cellar to hold them with the{' '}
        <a href="/food-preservation-guide" className="text-vermillion hover:underline">food preservation guide</a>,
        and keep soil quality up year over year with{' '}
        <a href="/crop-rotation-guide" className="text-vermillion hover:underline">crop rotation</a>{' '}
        and <a href="/soil-fertility" className="text-vermillion hover:underline">soil fertility</a>{' '}
        management.
      </p>

      {/* FAQ Section */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Frequently Asked Questions</h2>

      <div className="aged-border p-4 mb-4">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">What should I plant on day one of spring in Going Medieval?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          Cabbage and tall grass immediately. Cabbage reaches full yield in about 5 days — the fastest food
          crop — so a day-one sowing guarantees the earliest possible first meal from your fields. Tall
          grass takes about 4 days and yields 30 per tile, securing bedding, thatch, and animal fodder almost
          at once. Follow with carrot and beet within the first few days, and barley early only if you brew,
          since its 14-day cycle needs the full warm window.
        </p>
      </div>

      <div className="aged-border p-4 mb-4">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">When is the last safe sowing before winter in Going Medieval?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          Count backwards from the first frost using each crop's days to full yield. Cabbage (5 days) can go
          in as little as a week before frost and still make it; carrot (7 days) and beet (9 days) need to be
          in the ground by mid-autumn; barley (14 days) and redcurrant (15 days to first crop) are
          spring-only propositions. When in doubt, harvest slightly early — an unharvested field dies when
          the frost hits.
        </p>
      </div>

      <div className="aged-border p-4 mb-4">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">How many crop tiles does each settler need in Going Medieval?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          Settlers eat one meal a day and a meal costs 12 raw food. Dividing by yield per day per tile gives
          roughly 7 cabbage tiles, 6 carrot tiles, or 7 beet tiles per settler per cycle — and about 21
          barley tiles if you foolishly tried to feed people on barley. In practice a mixed field of 8–10
          tiles per settler, staggered in batches a few days apart, covers consumption with room for
          spoilage.
        </p>
      </div>

      <div className="aged-border p-4 mb-4">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">How long is winter in Going Medieval and how do I farm around it?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          Winter lasts 12 days, and outdoor crops stop growing in the cold. You don't farm during winter —
          you farm for it. The calendar goal is to have every tile harvested before the first frost and at
          least 12 meals (144 raw food) per settler in the cellar, then spend the 12 winter days on hunting,
          smoking meat, hauling, and planning next year's layout.
        </p>
      </div>

      <div className="aged-border p-4 mb-8">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">Should I stagger my sowing in Going Medieval?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          Yes — staggered sowing is the single biggest farming quality-of-life habit. Every tile sown must be
          harvested within its ripe window, and a full field sown on one day ripens on one day, spiking
          labour exactly when other work piles up. Sow in batches two to three days apart so harvests (and
          hauling) arrive in waves you can actually clear, and so a single cold snap or heatwave never hits
          your entire crop at the same growth stage.
        </p>
      </div>

      {/* Related Guides */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Related Guides</h2>
      <ul className="list-disc pl-6 mb-8 space-y-2 font-serif text-base text-ink-light">
        <li><a href="/best-crops-for-each-season" className="text-vermillion hover:underline">Best Crops for Each Season — the companion crop-selection guide</a></li>
        <li><a href="/winter-food-storage" className="text-vermillion hover:underline">Winter Food Storage — cellar temps and winter food math</a></li>
        <li><a href="/food-preservation-guide" className="text-vermillion hover:underline">Food Preservation — turn the autumn harvest into stable stores</a></li>
        <li><a href="/crop-rotation-guide" className="text-vermillion hover:underline">Crop Rotation Guide — keep the calendar productive long-term</a></li>
        <li><a href="/soil-fertility" className="text-vermillion hover:underline">Soil Fertility — more yield from the same tiles</a></li>
        <li><a href="/brewery-guide" className="text-vermillion hover:underline">Brewery Guide — what your barley is actually for</a></li>
        <li><a href="/seasons" className="text-vermillion hover:underline">Seasons — weather events, temperature swings, and effects</a></li>
      </ul>

      <p className="font-serif text-sm text-ink-muted leading-relaxed mt-8 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
        Last updated: July 19, 2026. Exact season lengths beyond winter vary by map, so deadlines
        are given relative to the first frost.
      </p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  );
}
