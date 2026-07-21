{/* Meta description: Going Medieval map types compared — Valley vs Hillside vs Mountain terrain, resources, defense, seeds, map size, and starting conditions explained for 2026. */}
export const metadata = {
  title: "Going Medieval Map Types Compared — Valley vs Hillside vs Mountain (2026)",
  description:
    "Valley, Hillside, or Mountain? Compare Going Medieval map types on farmland, minerals, natural defense, and build space — plus seeds, map size, and starting condition advice.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Which map type should a beginner pick in Going Medieval?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Valley. It gives the largest continuous flat areas, the widest stretches of fertile soil for farming, and the simplest base layouts, so food production comes online fast. The trade-off is defense: raiders can walk in from any direction, so budget wood and labour for a perimeter palisade earlier than you would on other map types."
      }
    },
    {
      "@type": "Question",
      "name": "Does the map type change the weather or seasons?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. All three map types share the same temperate climate with the same four-season cycle, winter freezes, and heat waves. What changes between Valley, Hillside, and Mountain is the shape of the terrain and how resources are distributed — not the weather you will face."
      }
    },
    {
      "@type": "Question",
      "name": "Do map seeds still work after game updates?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A seed always regenerates the same map within the same game version, and the seed field accepts both letters and numbers. However, the map generation algorithm has changed between major versions, so a seed shared from an older version may produce a different layout in the current build. Treat community seed lists as version-specific."
      }
    },
    {
      "@type": "Question",
      "name": "Can I still get iron on a Valley map?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, but expect to work for it. Valley maps can generate with few or no near-surface iron deposits, so you may need to dig deep mine shafts to reach ore veins. Hillside and Mountain maps expose metal far more readily. On a metal-poor Valley seed, cover the gap by trading with merchant caravans and melting down raider equipment."
      }
    },
    {
      "@type": "Question",
      "name": "Which map type is best for defense?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mountain, by a wide margin. Steep slopes and cliffs cut the number of approach angles down to one or two, which means a single short wall line and one killbox can cover the whole colony. Hillside is a solid second — high ground for archers and partial natural funnels — while Valley offers no natural protection at all and must be fully walled."
      }
    }
  ]
};

export default function BiomeComparisonPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">

      <h1 className="chapter-heading">Going Medieval Map Types Compared: Valley, Hillside, or Mountain?</h1>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-6">
        <span className="drop-cap">E</span>very new colony in Going Medieval starts with the same deceptively
        simple choice on the setup screen: Valley, Hillside, or Mountain. These three map types are the only
        terrain options in the game, and the one you pick shapes everything that follows — how much flat
        ground you have for a castle, how far your farmers walk to fertile soil, how quickly your miners hit
        iron, and how many directions a raid can come from. There is no wrong answer, but there is a wrong
        answer <em>for your playstyle</em>. This guide compares all three map types on the factors that
        actually matter, then covers seeds, map size, and starting conditions so you can make the choice
        with full information instead of regenerating five times and hoping.
      </p>

      {/* Comparison table */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">The Three Map Types at a Glance</h2>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        All three map types share the same temperate climate, the same four-season cycle, and the same pool
        of surface life — trees for wood, berry bushes, and wild animals to hunt. What separates them is
        terrain shape and resource distribution. Valley trades safety for comfort, Mountain trades comfort
        for safety, and Hillside sits deliberately in between.
      </p>

      <table className="parchment-table mb-8">
        <thead>
          <tr>
            <th>Factor</th>
            <th>Valley</th>
            <th>Hillside</th>
            <th>Mountain</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Terrain</td>
            <td>Broad flat lowland</td>
            <td>Rolling hills, ridges, canyons</td>
            <td>Steep peaks, cliffs, small plateaus</td>
          </tr>
          <tr>
            <td>Flat building space</td>
            <td>Abundant</td>
            <td>Moderate, broken into pockets</td>
            <td>Scarce — expect to terrace or dig in</td>
          </tr>
          <tr>
            <td>Fertile farmland</td>
            <td>Largest continuous stretches</td>
            <td>Decent patches between slopes</td>
            <td>Small, scattered pockets</td>
          </tr>
          <tr>
            <td>Near-surface iron &amp; ore</td>
            <td>Often scarce or deep-buried</td>
            <td>Frequently rich and close</td>
            <td>Abundant, exposed in rock faces</td>
          </tr>
          <tr>
            <td>Stone for construction</td>
            <td>Must be mined underground</td>
            <td>Good access</td>
            <td>Effectively unlimited</td>
          </tr>
          <tr>
            <td>Natural defense</td>
            <td>None — open on every side</td>
            <td>Partial — high ground and funnels</td>
            <td>Excellent — one or two approach angles</td>
          </tr>
          <tr>
            <td>Best for</td>
            <td>Beginners, megabases, farming</td>
            <td>Balanced play, all-rounders</td>
            <td>Defense-first, industry, veterans</td>
          </tr>
        </tbody>
      </table>

      <div className="aged-border p-4 mb-8">
        <p className="font-serif text-base text-ink-light leading-relaxed">
          <strong>Key Insight:</strong> No map type is &quot;harder&quot; because of weather — the seasons
          are identical everywhere. Difficulty comes from two things: how early you can reach iron, and how
          many directions you must defend. A Valley colony eats well but fights on open ground; a Mountain
          colony barely fights at all but scrambles for food. Pick the problem you would rather have.
        </p>
      </div>

      <figure className="mb-8">
        <img
          src="/images/biome-comparison.png"
          alt="Grouped bar chart rating Going Medieval's three map types — Valley, Hillside, and Mountain — from one to five on flat building space, fertile farmland, mineral wealth, natural defense, and beginner friendliness"
          className="w-full rounded-lg border border-[#3d3528]"
          loading="lazy"
        />
        <figcaption className="mt-2 text-center text-sm text-ink-light font-serif">
          Editorial ratings (1–5) summarizing the comparison table: Valley dominates comfort stats, Mountain
          dominates defense and minerals, Hillside never loses — and never wins.
        </figcaption>
      </figure>

      {/* Valley */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Valley — The Farming Powerhouse</h2>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        Valley maps are wide, flat lowland: the most buildable terrain in the game. Continuous stretches of
        fertile soil let you lay out huge fields in any shape you want, and clay deposits for brickmaking
        are commonly found close to the surface. If your goal is a sprawling walled town with symmetrical
        districts, Valley is the only map type where the terrain never fights your floor plan.
      </p>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        The weaknesses are real, though. Iron can be scarce or buried deep enough that your first metal
        tools arrive late, and stone for construction has to be mined rather than gathered from exposed
        rock. More importantly, the map is open on every side — raiders walk in from any compass direction,
        so a perimeter wall is not optional, it is a first-season project. Budget the wood and labour for a
        full palisade early, and plan a{' '}
        <a href="/killbox-design" className="text-vermillion hover:underline">killbox</a>
        {' '}on the busiest approach.
      </p>

      {/* Hillside */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Hillside — The Balanced All-Rounder</h2>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        Hillside maps roll: ridges, knolls, and canyons break the terrain into pockets of flat ground
        separated by slopes. It is the most resource-balanced of the three types — community-documented
        Hillside seeds are frequently rich in near-surface iron, with clay, coal, and even silver appearing
        in the same hillsides. Fertile soil shows up in usable patches rather than endless fields, which
        nudges you toward several mid-sized farms instead of one mega-field.
      </p>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        Defensively, Hillside rewards players who read terrain. A colony built on a plateau with steep
        slopes on two or three sides only needs walls on the gaps, and elevated ground gives your archers
        the height advantage that extends their effective range. If you have played a map or two and want a
        colony that can pivot between farming, mining, and military without the terrain locking you in,
        Hillside is the pick.
      </p>

      {/* Mountain */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Mountain — The Natural Fortress</h2>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        Mountain maps are dominated by steep peaks and cliff faces, with limited flat land between them.
        That scarcity is the point: rock is effectively unlimited, ore is exposed in the mountainsides, and
        the terrain itself does most of your defensive work. Many Mountain seeds funnel all raider traffic
        through one or two valleys or passes, which means a single short wall line and one well-built
        killbox can hold off raids that would flatten an open colony. Digging rooms straight into the rock
        also gives you naturally insulated storage that stays cold deep underground — a genuine advantage
        for food preservation.
      </p>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        The price is food. Flat, fertile pockets are small and scattered, so crop farming alone rarely
        carries a Mountain colony through winter. Successful Mountain runs lean on hunting, animal
        husbandry, preserved rations, and trading surplus metal goods to merchant caravans for bulk food.
        Pick Mountain when defense and industry are the fantasy you want, and you are comfortable solving
        the food problem with something other than wheat fields.
      </p>

      {/* Setup settings */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Seeds, Map Size, and Starting Conditions</h2>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        The map type is only one of several levers on the new-game screen. The rest are easy to overlook
        and just as important to how the first year plays out.
      </p>

      <table className="parchment-table mb-8">
        <thead>
          <tr>
            <th>Setting</th>
            <th>Options</th>
            <th>What It Actually Changes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Map type</td>
            <td>Valley / Hillside / Mountain</td>
            <td>Terrain shape and resource distribution — the subject of this guide</td>
          </tr>
          <tr>
            <td>Map size</td>
            <td>Small through Large</td>
            <td>Bigger maps mean more total resources and elbow room, but longer walking distances — settlers burn work hours travelling, so do not default to Large for a small colony</td>
          </tr>
          <tr>
            <td>Seed</td>
            <td>Any letters or numbers</td>
            <td>The exact layout. The same seed regenerates the same map within the same game version, which is how players share finds; major updates can change the generation algorithm and alter results</td>
          </tr>
          <tr>
            <td>Starting conditions</td>
            <td>A New Life / Lone Wolf</td>
            <td>A New Life starts you with three settlers and a stock of supplies; Lone Wolf drops a single settler on the map for a much harder opening</td>
          </tr>
          <tr>
            <td>Difficulty</td>
            <td>Presets (e.g. Normal) plus custom raid settings</td>
            <td>Raid size, frequency, and scaling. Terrain difficulty from your map type stacks on top of this</td>
          </tr>
        </tbody>
      </table>

      {/* Seeds */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Community-Favourite Seeds by Map Type</h2>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        Because seeds are shareable, the community has spent years cataloguing good ones. These documented
        examples show what each map type can produce at its best — note that seeds are version-specific, so
        a seed shared from an older build may generate differently after a map-generation update.
      </p>

      <table className="parchment-table mb-8">
        <thead>
          <tr>
            <th>Seed</th>
            <th>Map Type</th>
            <th>What Makes It Notable</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>12345</td>
            <td>Valley</td>
            <td>Extremely flat middle ground with large clay deposits — a builder&apos;s dream, but iron is absent near the surface</td>
          </tr>
          <tr>
            <td>777</td>
            <td>Hillside</td>
            <td>A high hill in the corner of the map with a large flat top — a ready-made fortress plateau</td>
          </tr>
          <tr>
            <td>679130838</td>
            <td>Hillside</td>
            <td>Rich in resources, especially iron, with dramatic topography of hills and canyons</td>
          </tr>
          <tr>
            <td>b</td>
            <td>Hillside</td>
            <td>One giant hill carrying iron, clay, coal, and silver — yes, a single letter is a valid seed</td>
          </tr>
          <tr>
            <td>1278876402</td>
            <td>Mountain</td>
            <td>A wide central hill ideal for building, backed by larger mountains in the corners</td>
          </tr>
          <tr>
            <td>1562457994</td>
            <td>Mountain</td>
            <td>Very high mountains ringing a sheltered central valley — one natural entrance to defend</td>
          </tr>
        </tbody>
      </table>

      {/* Verdict */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">The Verdict: Match the Map to the Colony You Want</h2>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        Pick <strong className="text-ink">Valley</strong> if this is your first colony or your dream is a
        huge symmetrical castle town. You will eat well from day one, and the wall-building workload is a
        fair price for it. Pick <strong className="text-ink">Hillside</strong> if you want options — it is
        the only map type where farming, mining, and defense are all genuinely viable at once, which is why
        so many shared seeds come from Hillside generation. Pick{' '}
        <strong className="text-ink">Mountain</strong> when raids are the problem you want solved and food
        is the puzzle you find fun: nothing else in the game lets a ten-settler colony shrug off late-game
        sieges the way a one-entrance Mountain holdfast does.
      </p>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        Whichever you choose, commit before you invest in permanent structures — relocating a colony is not
        a thing in Going Medieval. If you want to browse more pre-vetted starts before deciding, our{' '}
        <a href="/best-map-seeds" className="text-vermillion hover:underline">best map seeds list</a>
        {' '}keeps an updated shortlist for the current version.
      </p>

      {/* FAQ */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Frequently Asked Questions</h2>

      <div className="aged-border p-4 mb-4">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">Which map type should a beginner pick in Going Medieval?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          Valley. It gives the largest continuous flat areas, the widest stretches of fertile soil for
          farming, and the simplest base layouts, so food production comes online fast. The trade-off is
          defense: raiders can walk in from any direction, so budget wood and labour for a perimeter
          palisade earlier than you would on other map types.
        </p>
      </div>

      <div className="aged-border p-4 mb-4">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">Does the map type change the weather or seasons?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          No. All three map types share the same temperate climate with the same four-season cycle, winter
          freezes, and heat waves. What changes between Valley, Hillside, and Mountain is the shape of the
          terrain and how resources are distributed — not the weather you will face.
        </p>
      </div>

      <div className="aged-border p-4 mb-4">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">Do map seeds still work after game updates?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          A seed always regenerates the same map within the same game version, and the seed field accepts
          both letters and numbers. However, the map generation algorithm has changed between major
          versions, so a seed shared from an older version may produce a different layout in the current
          build. Treat community seed lists as version-specific.
        </p>
      </div>

      <div className="aged-border p-4 mb-4">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">Can I still get iron on a Valley map?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          Yes, but expect to work for it. Valley maps can generate with few or no near-surface iron
          deposits, so you may need to dig deep mine shafts to reach ore veins. Hillside and Mountain maps
          expose metal far more readily. On a metal-poor Valley seed, cover the gap by trading with
          merchant caravans and melting down raider equipment.
        </p>
      </div>

      <div className="aged-border p-4 mb-8">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">Which map type is best for defense?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          Mountain, by a wide margin. Steep slopes and cliffs cut the number of approach angles down to one
          or two, which means a single short wall line and one killbox can cover the whole colony. Hillside
          is a solid second — high ground for archers and partial natural funnels — while Valley offers no
          natural protection at all and must be fully walled.
        </p>
      </div>

      {/* Related Guides */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Related Guides</h2>
      <ul className="list-disc pl-6 mb-8 space-y-2 font-serif text-base text-ink-light">
        <li><a href="/best-map-seeds" className="text-vermillion hover:underline">Best Map Seeds — pre-vetted starts for every playstyle</a></li>
        <li><a href="/iron-mining" className="text-vermillion hover:underline">Iron Mining — finding and extracting ore on any map type</a></li>
        <li><a href="/killbox-design" className="text-vermillion hover:underline">Killbox Design — turn your one good approach into a meat grinder</a></li>
        <li><a href="/defense" className="text-vermillion hover:underline">Defense Strategy — perimeter planning for open and fortified terrain</a></li>
        <li><a href="/farming" className="text-vermillion hover:underline">Farming Fundamentals — making the most of your soil, wherever it is</a></li>
        <li><a href="/beginners" className="text-vermillion hover:underline">Beginner&apos;s Guide — your first season, step by step</a></li>
      </ul>

      <p className="font-serif text-sm text-ink-muted leading-relaxed mt-8 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
        Last updated: July 19, 2026. Map type behaviour reflects the current release version of Going
        Medieval; shared seeds are version-specific and may generate differently after map-generation
        updates.
      </p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  );
}
