{/* Meta description: Going Medieval room quality system — Impressiveness tiers (Awful 0 to Palatial 6000), the wealth/beauty/spaciousness multiplier tables, room type mood effects (Chamber 16h, chapel 24h), and how to raise room quality efficiently. */}
export const metadata = {
  title: "Going Medieval Room Quality System — Impressiveness Tiers & Mood Data (2026)",
  description:
    "How the Going Medieval room quality system works: all 8 Impressiveness tiers with score thresholds (0 to 6000), the wealth, beauty, and spaciousness multiplier tables, which rooms give mood bonuses and for how long, and the cheapest ways to raise room quality.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does room quality work in Going Medieval?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Every enclosed room has an Impressiveness score computed from three stats: the room's total wealth, its average aesthetic (beauty) value, and its spaciousness (free tiles). Each stat is converted to a multiplier using tiered lookup tables, and the three multipliers are multiplied together to give the final score, which maps to eight tiers from Awful (0) through Modest (15), Good (65), Superior (300), and Luxurious (750) up to Palatial (6000). Higher-tier bedrooms, dining rooms, and chapels grant stronger mood bonuses to settlers who use them."
      }
    },
    {
      "@type": "Question",
      "name": "What are the Impressiveness tiers in Going Medieval?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "There are eight tiers with these score thresholds: Awful at 0, Uninspiring at 10, Modest at 15, Good at 65, Superior at 300, Luxurious at 750, Opulent at 2500, and Palatial at 6000. Because the score is a product of three multipliers, neglecting any single stat caps the whole room — a wealthy but cramped room with ugly floors will stall far below its potential."
      }
    },
    {
      "@type": "Question",
      "name": "Does a private bedroom matter in Going Medieval?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. A settler sleeping in a private Chamber (exactly one bed) gets a positive mood modifier for 16 hours at double the strength of a Shared Chamber's bonus, scaled by the room's Impressiveness. Shared Chambers (2+ beds) still grant a small positive modifier and are the efficient early-game choice — a 15-tile shared room with hay sleeping spots and a window already counts as Modest. Upgrade settlers to private chambers as wealth allows, starting with dainty or precious settlers who get jealous of nicer rooms."
      }
    },
    {
      "@type": "Question",
      "name": "What is the cheapest way to raise room quality in Going Medieval?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Raise the weakest of the three multipliers first, because the score is a product. The usual cheapest wins: lay a real floor (tile or wood instead of dirt) to lift average beauty, add a window and wall decorations (banners, trophy racks) for cheap wealth and beauty, and remove junk to free up tiles for spaciousness. A room with 30 free tiles already earns a 3.5 spaciousness multiplier, and pushing average aesthetic value from 20 to 30 doubles the beauty multiplier from 8 to 16."
      }
    },
    {
      "@type": "Question",
      "name": "Do workshops and kitchens use Impressiveness in Going Medieval?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Production rooms care about their room type, not their Impressiveness tier — a Workshop grants +20% production speed whether it is Awful or Palatial, as long as it has the required workstation and two wall tool shelves. Impressiveness matters for the rooms settlers relax in: bedrooms (16-hour sleep modifiers), the great hall (a positive modifier after each meal), and chapels and temples (24-hour modifiers for the matching religion). Spend decoration effort there first."
      }
    }
  ]
};

export default function RoomQualitySystemPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">

      <h1 className="chapter-heading">Going Medieval Room Quality System: Impressiveness, Tiers, and Mood</h1>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-6">
        <span className="drop-cap">E</span>very room in Going Medieval has a hidden report card. The game
        scores each enclosed space on three stats — wealth, beauty, and spaciousness — multiplies them
        together, and stamps the room with an Impressiveness tier from Awful to Palatial. That stamp is not
        decorative: it scales the mood bonuses settlers get for sleeping, eating, and praying in the room,
        and mood is the difference between a colony that works and one that breaks. The good news is that
        the formula is fully known, and its multiplicative shape tells you exactly where to spend your
        first decorations. This guide gives the real tier thresholds, the multiplier tables, and the upgrade
        order that raises quality cheapest.
      </p>

      {/* Tiers */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">The Eight Impressiveness Tiers</h2>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        Impressiveness is a single score with eight named tiers. The early tiers come almost free — a
        floored room with a window clears Modest — while the top tiers demand real wealth and space. The
        thresholds:
      </p>

      <table className="parchment-table mb-8">
        <thead>
          <tr>
            <th>Tier</th>
            <th>Score Threshold</th>
            <th>What It Takes in Practice</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Awful</td>
            <td>0</td>
            <td>Dirt floor, no light, no decoration</td>
          </tr>
          <tr>
            <td>Uninspiring</td>
            <td>10</td>
            <td>A floor and a bed, nothing more</td>
          </tr>
          <tr>
            <td>Modest</td>
            <td>15</td>
            <td>Floor + window + a little space — the year-one target</td>
          </tr>
          <tr>
            <td>Good</td>
            <td>65</td>
            <td>Tile floors, wall banners, uncluttered room</td>
          </tr>
          <tr>
            <td>Superior</td>
            <td>300</td>
            <td>Real furniture, decorations, generous floor space</td>
          </tr>
          <tr>
            <td>Luxurious</td>
            <td>750</td>
            <td>High-value furnishings across a large room</td>
          </tr>
          <tr>
            <td>Opulent</td>
            <td>2500</td>
            <td>Endgame wealth on display</td>
          </tr>
          <tr>
            <td>Palatial</td>
            <td>6000</td>
            <td>The showpiece great hall or noble chamber</td>
          </tr>
        </tbody>
      </table>

      <figure className="mb-8">
        <img
          src="/images/room-quality-system.png"
          alt="Bar chart on a logarithmic scale of Going Medieval Impressiveness tier thresholds: Awful 0, Uninspiring 10, Modest 15, Good 65, Superior 300, Luxurious 750, Opulent 2500, and Palatial 6000, showing the steep score jumps between upper tiers"
          className="w-full rounded-lg border border-[#3d3528]"
          loading="lazy"
        />
        <figcaption className="mt-2 text-center text-sm text-ink-light font-serif">
          Tier thresholds on a log scale. Modest (15) to Good (65) is a small step any colony can afford;
          Luxurious (750) and beyond is a deliberate wealth project, not an accident.
        </figcaption>
      </figure>

      {/* Formula */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">The Formula: Three Multipliers, One Product</h2>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        The score is a product: <strong className="text-ink">beauty multiplier × wealth multiplier ×
        spaciousness multiplier</strong> (rounded down). Each multiplier comes from a tiered lookup table,
        interpolated linearly between breakpoints. The tables:
      </p>

      <table className="parchment-table mb-8">
        <thead>
          <tr>
            <th>Average Aesthetic Value</th>
            <th>Beauty Multiplier</th>
            <th>Total Wealth</th>
            <th>Wealth Multiplier</th>
            <th>Free Tiles</th>
            <th>Spaciousness Multiplier</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>-50</td><td>0.0</td><td>0</td><td>0.0</td><td>0</td><td>0.0</td></tr>
          <tr><td>-30</td><td>0.5</td><td>90</td><td>2.5</td><td>16</td><td>3.0</td></tr>
          <tr><td>-20</td><td>1.0</td><td>230</td><td>3.0</td><td>30</td><td>3.5</td></tr>
          <tr><td>-5</td><td>3.0</td><td>500</td><td>4.0</td><td>60</td><td>4.0</td></tr>
          <tr><td>0</td><td>3.5</td><td>2,000</td><td>8.0</td><td>120</td><td>7.0</td></tr>
          <tr><td>10</td><td>4.5</td><td>4,000</td><td>16.0</td><td>200</td><td>12.0</td></tr>
          <tr><td>20</td><td>8.0</td><td>10,000</td><td>32.0</td><td>—</td><td>—</td></tr>
          <tr><td>30</td><td>16.0</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
          <tr><td>40</td><td>32.0</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
          <tr><td>50</td><td>64.0</td><td>—</td><td>—</td><td>—</td><td>—</td></tr>
        </tbody>
      </table>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        A worked example shows the interpolation in action: a room with 45 spaciousness, 11,000
        wealth, and 25 average aesthetic value gets multipliers of 3.75 (spaciousness, interpolated between
        the 30- and 60-tile rows), 32 (wealth, just past the 10,000 row), and 12 (beauty, halfway between the
        20 and 30 rows). Their product is 1,800 — a <strong className="text-ink">Luxurious</strong> room.
      </p>

      <div className="aged-border p-4 mb-8">
        <p className="font-serif text-base text-ink-light leading-relaxed">
          <strong>Multiplicative means weakest-link:</strong> a zero anywhere zeroes the room. A palace
          stuffed with treasure but floored in ugly dirt (−50 aesthetic → 0.0 multiplier) scores exactly
          zero. Always fix the worst stat first — it is almost always beauty, and the fix is usually just a
          proper floor.
        </p>
      </div>

      {/* Room effects */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Where Impressiveness Actually Pays: Room Mood Effects</h2>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        Not every room spends its Impressiveness. Production rooms (Workshop, Library, Kitchen) grant speed
        bonuses that ignore the tier entirely — the mood payoff lives in the rooms where settlers rest,
        eat, and pray:
      </p>

      <table className="parchment-table mb-8">
        <thead>
          <tr>
            <th>Room</th>
            <th>Mood Effect</th>
            <th>Duration</th>
            <th>Scales With Impressiveness?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Chamber (private, 1 bed)</td>
            <td>Positive modifier for the sleeper — double the Shared Chamber bonus</td>
            <td>16 h</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Shared Chamber (2+ beds)</td>
            <td>Small positive modifier for each sleeper</td>
            <td>16 h</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Great Hall</td>
            <td>Positive modifier after each meal eaten there</td>
            <td>Per meal</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Chapel / Temple (matching religion)</td>
            <td>Positive modifier for time spent there</td>
            <td>24 h</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Workshop / Library / Kitchen</td>
            <td>Production speed bonuses instead of mood</td>
            <td>—</td>
            <td>No</td>
          </tr>
        </tbody>
      </table>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        Two practical consequences. First, <strong className="text-ink">a private chamber is a real mood
        item, not a luxury</strong>: it doubles the sleep modifier of a shared room for 16 hours a day, so
        your most stressed settlers should get their own rooms first. Second, watch the jealousy perks —
        settlers with dainty or precious traits take mood penalties when someone else has a nicer room
        than they do, so upgrade rooms in waves rather than building one showpiece while the rest sleep in
        squalor. For the mood system as a whole, see{' '}
        <a href="/settler-mood-system" className="text-vermillion hover:underline">settler mood system</a>{' '}
        and <a href="/mood-management-guide" className="text-vermillion hover:underline">mood management</a>.
      </p>

      {/* Upgrade order */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Raising Room Quality: The Cheap-to-Dear Order</h2>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        Because the formula multiplies, the efficient path is to lift whichever multiplier is lowest —
        and for most colonies that follows the same sequence:
      </p>

      <table className="parchment-table mb-8">
        <thead>
          <tr>
            <th>Step</th>
            <th>Upgrade</th>
            <th>Multiplier Moved</th>
            <th>Typical Gain</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Lay wood or tile floor over dirt</td>
            <td>Beauty: negative → positive</td>
            <td>Saves the room from a 0–1.0 beauty multiplier</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Add a window and clear clutter for free tiles</td>
            <td>Spaciousness toward 3.0–3.5 (16–30 tiles)</td>
            <td>~3× over a cramped room</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Wall banners, trophy racks, better bed</td>
            <td>Beauty + wealth together</td>
            <td>Pushes Modest rooms to Good (65)</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Quality furniture, decorative racks, rugs of value</td>
            <td>Wealth toward 500–2,000 (×4–8)</td>
            <td>Good to Superior (300) territory</td>
          </tr>
        </tbody>
      </table>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-8">
        Floors do double duty: they raise beauty for Impressiveness <em>and</em> add thermal insulation —
        a tile floor insulates at 0.8 versus 0.75 for wood — so one build job improves both the room's
        comfort and its score. Material values are in{' '}
        <a href="/building-material-tiers" className="text-vermillion hover:underline">building material tiers</a>,
        and the rooms worth building first (Workshop +20% speed, Great Hall, chambers) are detailed in{' '}
        <a href="/best-workshop-layout" className="text-vermillion hover:underline">best workshop layout</a>{' '}
        and <a href="/bedroom-layout" className="text-vermillion hover:underline">bedroom layout</a>.
      </p>

      {/* FAQ Section */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Frequently Asked Questions</h2>

      <div className="aged-border p-4 mb-4">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">How does room quality work in Going Medieval?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          Every enclosed room has an Impressiveness score computed from three stats — total wealth, average
          aesthetic value, and spaciousness (free tiles). Each stat converts to a multiplier via tiered
          tables, and the three multiply together into a score mapping to eight tiers from Awful (0) through
          Modest (15), Good (65), Superior (300), Luxurious (750) up to Palatial (6000). Higher-tier bedrooms,
          dining halls, and chapels grant stronger mood bonuses.
        </p>
      </div>

      <div className="aged-border p-4 mb-4">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">What are the Impressiveness tiers in Going Medieval?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          Eight tiers: Awful at 0, Uninspiring at 10, Modest at 15, Good at 65, Superior at 300, Luxurious at
          750, Opulent at 2500, and Palatial at 6000. Because the score is a product of three multipliers,
          neglecting any single stat caps the whole room — a wealthy but cramped room with ugly floors stalls
          far below its potential.
        </p>
      </div>

      <div className="aged-border p-4 mb-4">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">Does a private bedroom matter in Going Medieval?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          Yes. A settler sleeping in a private Chamber (exactly one bed) gets a positive mood modifier for 16
          hours at double the strength of a Shared Chamber's bonus, scaled by Impressiveness. Shared Chambers
          are the efficient early-game choice — a 15-tile shared room with hay sleeping spots and a window
          already counts as Modest — but upgrade stressed settlers to private chambers as wealth allows,
          starting with dainty or precious settlers who get jealous of nicer rooms.
        </p>
      </div>

      <div className="aged-border p-4 mb-4">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">What is the cheapest way to raise room quality in Going Medieval?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          Raise the weakest of the three multipliers first, because the score is a product. The usual cheapest
          wins: lay a real floor (tile or wood instead of dirt) to lift average beauty, add a window and wall
          decorations (banners, trophy racks) for cheap wealth and beauty, and remove junk to free up tiles.
          A room with 30 free tiles already earns a 3.5 spaciousness multiplier, and pushing average aesthetic
          value from 20 to 30 doubles the beauty multiplier from 8 to 16.
        </p>
      </div>

      <div className="aged-border p-4 mb-8">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">Do workshops and kitchens use Impressiveness in Going Medieval?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          No — production rooms care about room type, not tier. A Workshop grants +20% production speed
          whether it is Awful or Palatial, as long as it has the required workstation and two wall tool
          shelves. Impressiveness matters where settlers relax: bedrooms (16-hour sleep modifiers), the great
          hall (a positive modifier after each meal), and chapels (24-hour modifiers). Decorate those first.
        </p>
      </div>

      {/* Related Guides */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Related Guides</h2>
      <ul className="list-disc pl-6 mb-8 space-y-2 font-serif text-base text-ink-light">
        <li><a href="/best-workshop-layout" className="text-vermillion hover:underline">Best Workshop Layout — room type bonuses and floor plans</a></li>
        <li><a href="/bedroom-layout" className="text-vermillion hover:underline">Bedroom Layout — private chambers that actually raise mood</a></li>
        <li><a href="/great-hall" className="text-vermillion hover:underline">Great Hall — the dining room mood engine</a></li>
        <li><a href="/settler-mood-system" className="text-vermillion hover:underline">Settler Mood System — every modifier that moves the needle</a></li>
        <li><a href="/mood-management-guide" className="text-vermillion hover:underline">Mood Management Guide — keeping the colony stable</a></li>
        <li><a href="/building-material-tiers" className="text-vermillion hover:underline">Building Material Tiers — floors that raise beauty and insulation</a></li>
        <li><a href="/room-design" className="text-vermillion hover:underline">Room Design — shapes and sizes that work</a></li>
        <li><a href="/happiness-guide" className="text-vermillion hover:underline">Happiness Guide — the long game on settler morale</a></li>
      </ul>

      <p className="font-serif text-sm text-ink-muted leading-relaxed mt-8 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
        Last updated: July 19, 2026. Game mechanics may change with future updates.
      </p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  );
}
