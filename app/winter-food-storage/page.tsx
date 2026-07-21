{/* Meta description: Going Medieval winter food storage — underground cold storage temperatures by construction tier, material thermal insulation values, and a 12-day winter food math plan with cellar layout. */}
export const metadata = {
  title: "Going Medieval Winter Food Storage — Cold Cellar Temps & Winter Food Math (2026)",
  description:
    "How to build winter food storage in Going Medieval. Real underground cold storage temperatures by construction tier, thermal insulation values for floors and walls, and exactly how much food each settler needs for the 12-day winter.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How cold can an underground cellar get in Going Medieval?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cellar measurements: 5.8°C under a single level of dirt, 5.5°C under three levels, 3.8°C with clay walls added, and 2.2°C in a large room combining clay walls and wood flooring. During a 32°C summer the finished storage held around 2°C. Depth alone helps little beyond the first level — wall material, flooring, and room size matter more."
      }
    },
    {
      "@type": "Question",
      "name": "How much food do I need to survive winter in Going Medieval?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Winter lasts 12 days and settlers eat one meal a day, so you need at least 12 meals per settler. A meal costs 12 raw food, which means 144 raw food per settler stored before the frost. That is roughly 16 cabbage tiles, 11 carrot tiles, or 10 beet tiles per settler at peak yield — plus a buffer for spoilage, hunting failures, and new arrivals."
      }
    },
    {
      "@type": "Question",
      "name": "Does digging deeper make food storage colder in Going Medieval?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Barely. One level of dirt overhead gives 5.8°C, two levels 5.6°C, and three levels 5.5°C — diminishing returns of a few tenths of a degree per level. You get far more from adding built walls (clay walls dropped the test room to 3.8°C), insulating floors, and making the room bigger, since heat gets trapped in small rooms."
      }
    },
    {
      "@type": "Question",
      "name": "Should I put a torch or brazier in my food cellar in Going Medieval?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Anything that produces heat — braziers, torches, candles — warms the room and speeds up decay. Light the staircase and adjacent rooms instead, and keep the storage itself dark. Haulers spend only seconds inside, so darkness is a cosmetic issue, while every degree of warmth is real spoilage."
      }
    },
    {
      "@type": "Question",
      "name": "What foods do NOT need cold storage in Going Medieval?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pickled vegetables — vegetables preserved in salt at a stove — do not need cold storage at all, and smoked meat from a smokehouse keeps far longer than raw meat. Converting part of your harvest into preserved goods shrinks the cellar space you need and hedges against a warm spell rotting your fresh stores."
      }
    }
  ]
};

export default function WinterFoodStoragePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">

      <h1 className="chapter-heading">Going Medieval Winter Food Storage</h1>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-6">
        <span className="drop-cap">W</span>inter in Going Medieval is a logistics exam you sit in autumn. Crops
        stop growing, hunting gets thin, and the colony eats through whatever you managed to put away — and
        whatever you stored badly rots before it is eaten. The fix is part architecture, part arithmetic: dig a
        cold cellar that actually stays cold (a properly finished one holds around 2°C even in a 32°C summer),
        and store enough raw food for the 12-day winter — 12 meals per settler at minimum. This guide covers
        the real temperatures each construction choice buys you, then the food math that tells you whether you
        are ready.
      </p>

      {/* Temperature Section */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Cold Storage Temperatures: What Each Upgrade Buys</h2>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        Food decay in Going Medieval is temperature-driven: the warmer the room, the faster freshness ticks
        down. Cold storage testing measured a series of cellar
        builds on the same map, and the results overturn the common instinct to just dig deeper. Depth gives
        diminishing tenths of a degree; construction gives whole degrees.
      </p>

      <table className="parchment-table mb-8">
        <thead>
          <tr>
            <th>Cellar Build</th>
            <th>Measured Temperature</th>
            <th>Gain vs. Previous Tier</th>
            <th>Verdict</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1 level of dirt overhead</td>
            <td>5.8°C</td>
            <td>—</td>
            <td>The day-one dig; better than any surface room</td>
          </tr>
          <tr>
            <td>2 levels of dirt overhead</td>
            <td>5.6°C</td>
            <td>-0.2°C</td>
            <td>Not worth the extra digging early</td>
          </tr>
          <tr>
            <td>3 levels of dirt overhead</td>
            <td>5.5°C</td>
            <td>-0.1°C</td>
            <td>Diminishing returns confirmed</td>
          </tr>
          <tr>
            <td>Clay walls added (3×3 room)</td>
            <td>3.8°C</td>
            <td>-1.7°C</td>
            <td>The single biggest upgrade — built walls insulate far better than bare dirt</td>
          </tr>
          <tr>
            <td>Larger room (28 free tiles)</td>
            <td>3.7°C</td>
            <td>-0.1°C</td>
            <td>Small rooms trap heat; size helps modestly</td>
          </tr>
          <tr>
            <td>Large room + clay walls + wood floor</td>
            <td>2.2°C</td>
            <td>-1.5°C</td>
            <td>Best-in-test; held ~2°C during a 32°C summer</td>
          </tr>
        </tbody>
      </table>

      <figure className="mb-8">
        <img
          src="/images/winter-food-storage.png"
          alt="Bar chart of Going Medieval underground storage temperatures by build: 5.8°C with one level of dirt, 5.6 with two, 5.5 with three, 3.8 with clay walls, 3.7 in a 28-tile room, and 2.2°C in a large room with clay walls and wood flooring"
          className="w-full rounded-lg border border-[#3d3528]"
          loading="lazy"
        />
        <figcaption className="mt-2 text-center text-sm text-ink-light font-serif">
          Measured cellar temperatures. Depth alone stalls around 5.5°C; built walls
          and insulation are what push a cellar toward freezing.
        </figcaption>
      </figure>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        Two material notes from the same testing. First, <strong className="text-ink">flooring now acts as
        insulation, not a heat source</strong>, so you can floor your cellar safely — wood flooring even
        nudged the room slightly colder. Second, bare dirt walls have a higher insulation value on paper
        (0.95) than clay (0.9) but deliver <em>less</em> real insulation in-game; a room surrounded by built
        walls tested about 2°C colder than the same room in raw dirt. Trust the thermometer, not the tooltip.
      </p>

      <table className="parchment-table mb-8">
        <thead>
          <tr>
            <th>Material</th>
            <th>Thermal Insulation Value</th>
            <th>Role in the Cellar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Wicker grated floor</td>
            <td>0.05</td>
            <td>Decorative; no meaningful insulation</td>
          </tr>
          <tr>
            <td>Wood flooring</td>
            <td>0.75</td>
            <td>Cheap insulated floor for storage rooms</td>
          </tr>
          <tr>
            <td>Limestone / clay tile floor</td>
            <td>0.8</td>
            <td>Best floor insulation found in testing</td>
          </tr>
          <tr>
            <td>Clay wall</td>
            <td>0.9</td>
            <td>Early-game cellar walls; big temperature gain</td>
          </tr>
          <tr>
            <td>Dirt (natural)</td>
            <td>0.95</td>
            <td>Highest listed value, but underperforms built walls in practice</td>
          </tr>
        </tbody>
      </table>

      <div className="aged-border p-4 mb-8">
        <p className="font-serif text-base text-ink-light leading-relaxed">
          <strong>Structural warning:</strong> Going Medieval simulates stability — a 7×7 dug-out room will
          cave in at the centre tile, deleting the soil (and the insulation) above it. Leave the centre tile
          undug or build support posts and beams in any wide cellar. And never place braziers, torches, or
          candles inside the storage: light the stairs, keep the larder dark.
        </p>
      </div>

      {/* Cellar Layout SVG */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Example Cold Cellar Layout (Cutaway View)</h2>
      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        The pattern the testing points to: a staircase down one level, a door to keep the cold in, clay walls
        lining the dug-out room, an insulated floor, shelves to compress storage, and a support post before
        the span gets ambitious. No heat sources anywhere below the door.
      </p>
      <figure className="my-6">
        <svg viewBox="0 0 760 430" className="w-full rounded-lg border border-gray-700" role="img"
          aria-label="Cutaway diagram of a Going Medieval underground cold storage cellar with entrance stairs, door, clay-lined walls, wood floor, shelves of food, a support post and no heat sources">
          <rect x="0" y="0" width="760" height="430" fill="#1a1510" />

          {/* sky + surface */}
          <rect x="0" y="0" width="760" height="70" fill="#201a12" />
          <text x="380" y="40" fill="#a89878" fontSize="14" textAnchor="middle" fontStyle="italic">surface — summer heat, winter frost</text>
          {/* grass line */}
          <rect x="0" y="70" width="760" height="14" fill="#3d3528" />
          <text x="700" y="81" fill="#a89878" fontSize="11" textAnchor="end">ground level</text>

          {/* dirt mass */}
          <rect x="0" y="84" width="760" height="346" fill="#241f16" />

          {/* staircase shaft */}
          <rect x="70" y="84" width="90" height="206" fill="#1a1510" stroke="#4a4132" strokeWidth="2" />
          {[0, 1, 2, 3, 4].map((i) => (
            <rect key={`st${i}`} x={78 + i * 15} y={250 - i * 34} width="30" height="10" fill="#3d3528" stroke="#241f16" />
          ))}
          <text x="115" y="120" fill="#a89878" fontSize="12" textAnchor="middle">stairs</text>
          <text x="115" y="136" fill="#a89878" fontSize="12" textAnchor="middle">down</text>

          {/* cellar room */}
          <rect x="160" y="140" width="440" height="150" fill="#1a1510" stroke="#241f16" strokeWidth="1" />
          {/* clay walls */}
          <rect x="160" y="140" width="14" height="150" fill="#8a6a4a" stroke="#5a4632" strokeWidth="1.5" />
          <rect x="586" y="140" width="14" height="150" fill="#8a6a4a" stroke="#5a4632" strokeWidth="1.5" />
          <rect x="174" y="140" width="412" height="12" fill="#8a6a4a" stroke="#5a4632" strokeWidth="1.5" />
          <text x="380" y="132" fill="#c09a70" fontSize="12" textAnchor="middle">clay walls (0.9 insulation) + 1 level dirt above</text>
          {/* wood floor */}
          <rect x="174" y="278" width="412" height="12" fill="#6a5232" stroke="#4a3a24" strokeWidth="1.5" />
          <text x="380" y="312" fill="#a89878" fontSize="12" textAnchor="middle">wood / tile floor (0.75–0.8 insulation)</text>

          {/* door */}
          <rect x="160" y="200" width="14" height="52" fill="#d4943a" stroke="#1a1510" strokeWidth="2" />
          <text x="167" y="192" fill="#d4943a" fontSize="11" textAnchor="middle">door</text>

          {/* shelves */}
          {[230, 320, 410].map((cx) => (
            <g key={`shelf${cx}`}>
              <rect x={cx - 32} y="196" width="64" height="8" fill="#4a4132" />
              <rect x={cx - 32} y="236" width="64" height="8" fill="#4a4132" />
              <rect x={cx - 34} y="196" width="4" height="82" fill="#4a4132" />
              <rect x={cx + 30} y="196" width="4" height="82" fill="#4a4132" />
              <rect x={cx - 24} y="180" width="14" height="16" fill="#d4943a" />
              <rect x={cx - 4} y="182" width="14" height="14" fill="#c05a3a" />
              <rect x={cx - 22} y="220" width="16" height="16" fill="#d4a840" />
              <rect x={cx + 2} y="222" width="14" height="14" fill="#8a9a5a" />
            </g>
          ))}
          <text x="320" y="172" fill="#e0d4c0" fontSize="13" textAnchor="middle" fontWeight="600">shelves: vegetables · smoked meat · meals</text>

          {/* support post */}
          <rect x="500" y="152" width="12" height="126" fill="#6a5232" stroke="#4a3a24" strokeWidth="1.5" />
          <rect x="486" y="146" width="40" height="8" fill="#6a5232" stroke="#4a3a24" strokeWidth="1.5" />
          <text x="506" y="330" fill="#a89878" fontSize="11" textAnchor="middle">support post — wide rooms cave in without it</text>

          {/* temperature callout */}
          <g>
            <rect x="620" y="150" width="120" height="70" fill="#242018" stroke="#d4a840" strokeWidth="1.5" rx="6" />
            <text x="680" y="176" fill="#d4a840" fontSize="22" textAnchor="middle" fontWeight="700">2–4°C</text>
            <text x="680" y="198" fill="#a89878" fontSize="11" textAnchor="middle">finished cellar</text>
          </g>

          {/* no torch symbol */}
          <g transform="translate(655, 250)">
            <circle cx="0" cy="0" r="16" fill="none" stroke="#c05a3a" strokeWidth="2.5" />
            <line x1="-11" y1="11" x2="11" y2="-11" stroke="#c05a3a" strokeWidth="2.5" />
            <path d="M -3 -6 L 0 -12 L 3 -6 L 2 4 L -2 4 Z" fill="#d4943a" />
          </g>
          <text x="655" y="290" fill="#c05a3a" fontSize="11" textAnchor="middle">no torches or braziers</text>

          {/* legend */}
          <g transform="translate(40, 396)">
            <rect x="0" y="-12" width="20" height="12" fill="#8a6a4a" />
            <text x="26" y="0" fill="#a89878" fontSize="12">clay wall</text>
            <rect x="112" y="-12" width="20" height="12" fill="#6a5232" />
            <text x="138" y="0" fill="#a89878" fontSize="12">wood / post / floor</text>
            <rect x="272" y="-12" width="12" height="12" fill="#d4943a" />
            <text x="290" y="0" fill="#a89878" fontSize="12">door &amp; stored food</text>
            <rect x="436" y="-12" width="20" height="12" fill="#241f16" stroke="#3d3528" />
            <text x="462" y="0" fill="#a89878" fontSize="12">undug dirt (insulation)</text>
          </g>
        </svg>
        <figcaption className="mt-2 text-center text-sm text-gray-400">
          One level down is enough — spend the effort on walls, floor, and span support instead of depth.
          Shelves (unlocked under Preserving Food research) store far more food per tile than bare stockpiles.
        </figcaption>
      </figure>

      {/* Food Math Section */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Winter Food Math: 12 Days, 12 Meals per Settler</h2>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        Winter lasts 12 days, and settlers eat one meal a day — so the absolute floor is 12 meals per
        settler. Since a meal costs 12 raw food, that is 144 raw food per settler in the cellar before the
        first frost. In field terms, using the peak yields from our{' '}
        <a href="/best-crops-for-each-season" className="text-vermillion hover:underline">best crops guide</a>:
      </p>

      <table className="parchment-table mb-8">
        <thead>
          <tr>
            <th>Crop</th>
            <th>Peak Yield per Tile</th>
            <th>Tiles per Settler for Winter (144 food)</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cabbage</td>
            <td>9</td>
            <td>16</td>
            <td>Fast (5 days) — the autumn gap-filler</td>
          </tr>
          <tr>
            <td>Carrot</td>
            <td>14</td>
            <td>~11</td>
            <td>Stores well; the winter staple</td>
          </tr>
          <tr>
            <td>Beet</td>
            <td>15</td>
            <td>~10</td>
            <td>Highest food yield per tile</td>
          </tr>
          <tr>
            <td>Redcurrant</td>
            <td>12 × 5 harvests</td>
            <td>~3 (across the warm year)</td>
            <td>No replanting; doubles as wine stock</td>
          </tr>
        </tbody>
      </table>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        Treat 12 meals per settler as the floor, not the target. Add margin for three things: spoilage on the
        way in (food hauled across a hot map in autumn arrives partly decayed), appetite events (new settlers
        and prisoners eat too), and the spring gap (the first cabbage harvest is still 5 days after the soil
        thaws). A 25–50% buffer — call it 16–18 meals per settler — is the comfortable line. Whatever you
        cannot grow, <a href="/hunting-strategy" className="text-vermillion hover:underline">hunting</a>{' '}
        and a smokehouse can cover; see the{' '}
        <a href="/food-preservation-guide" className="text-vermillion hover:underline">food preservation guide</a>{' '}
        for the full processing pipeline.
      </p>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-8">
        A final trick: in winter itself you can open the cellar door (or use windows) to pull
        the room below freezing, which all but pauses decay — and ice cut in winter can hold summer
        temperatures down, though ice cannot push a room below 0°C. Winter is when your cellar is cheapest
        to run; the build above is what carries you through summer and autumn.
      </p>

      {/* FAQ Section */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Frequently Asked Questions</h2>

      <div className="aged-border p-4 mb-4">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">How cold can an underground cellar get in Going Medieval?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          A finished cellar measures 5.8°C under a single level of dirt, 5.5°C under three levels, 3.8°C
          with clay walls added, and 2.2°C in a large room combining clay walls and wood flooring. During a 32°C
          summer the finished storage held around 2°C. Depth alone helps little beyond the first level —
          wall material, flooring, and room size matter more.
        </p>
      </div>

      <div className="aged-border p-4 mb-4">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">How much food do I need to survive winter in Going Medieval?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          Winter lasts 12 days and settlers eat one meal a day, so you need at least 12 meals per settler. A
          meal costs 12 raw food, which means 144 raw food per settler stored before the frost — roughly 16
          cabbage tiles, 11 carrot tiles, or 10 beet tiles per settler at peak yield, plus a buffer for
          spoilage, hunting failures, and new arrivals.
        </p>
      </div>

      <div className="aged-border p-4 mb-4">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">Does digging deeper make food storage colder in Going Medieval?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          Barely. One level of dirt overhead gives 5.8°C, two levels 5.6°C, and three levels 5.5°C —
          diminishing returns of a few tenths of a degree per level. You get far more from adding built walls
          (clay walls dropped the test room to 3.8°C), insulating floors, and making the room bigger, since
          heat gets trapped in small rooms.
        </p>
      </div>

      <div className="aged-border p-4 mb-4">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">Should I put a torch or brazier in my food cellar in Going Medieval?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          No. Anything that produces heat — braziers, torches, candles — warms the room and speeds up decay.
          Light the staircase and adjacent rooms instead, and keep the storage itself dark. Haulers spend only
          seconds inside, so darkness is a cosmetic issue, while every degree of warmth is real spoilage.
        </p>
      </div>

      <div className="aged-border p-4 mb-8">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">What foods do NOT need cold storage in Going Medieval?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          Pickled vegetables — vegetables preserved in salt at a stove — do not need cold storage at all,
          and smoked meat from a smokehouse keeps far longer than raw meat. Converting part of your harvest into preserved goods shrinks the cellar space you need and
          hedges against a warm spell rotting your fresh stores.
        </p>
      </div>

      {/* Related Guides */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Related Guides</h2>
      <ul className="list-disc pl-6 mb-8 space-y-2 font-serif text-base text-ink-light">
        <li><a href="/food-preservation-guide" className="text-vermillion hover:underline">Food Preservation Guide — smoking, pickling, and the processing pipeline</a></li>
        <li><a href="/best-crops-for-each-season" className="text-vermillion hover:underline">Best Crops for Each Season — grow the food this cellar stores</a></li>
        <li><a href="/farming-calendar" className="text-vermillion hover:underline">Farming Calendar — schedule sowing so autumn fills the larder</a></li>
        <li><a href="/root-cellar" className="text-vermillion hover:underline">Root Cellar — detailed cellar construction walkthrough</a></li>
        <li><a href="/winter-survival" className="text-vermillion hover:underline">Winter Survival — warmth, clothing, and cold-weather labour</a></li>
        <li><a href="/hunting-strategy" className="text-vermillion hover:underline">Hunting Strategy — winter protein for the smokehouse</a></li>
        <li><a href="/storage-guide" className="text-vermillion hover:underline">Storage Guide — stockpile zoning beyond food</a></li>
      </ul>

      <p className="font-serif text-sm text-ink-muted leading-relaxed mt-8 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
        Last updated: July 19, 2026. Values may shift with game updates and difficulty settings.
      </p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  );
}
