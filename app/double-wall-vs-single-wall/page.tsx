{/* Meta description: Going Medieval double wall vs single wall — wall hitpoints by material (clay 150, wood 200, limestone 300, brick 800), cost, insulation, and when doubling your perimeter is worth it. */}
export const metadata = {
  title: "Going Medieval Double Wall vs Single Wall — Hitpoint Math (2026)",
  description:
    "Double wall or single wall in Going Medieval? Real hitpoint data for every wall material (wood 200, limestone 300, brick 800), cost analysis, and when a double perimeter pays off.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is a double wall worth it in Going Medieval?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes in the mid-to-late game, no in week one. Doubling a wall literally doubles the hitpoints raiders must chew through — two limestone walls absorb 600 HP of demolition instead of 300. But doubling also doubles material and labour, and early raids are stopped more cheaply by a single wall plus spike traps and archers. Double the wall segments that face your killbox entrance and known approach angles first; single walls are fine behind natural barriers."
      }
    },
    {
      "@type": "Question",
      "name": "Which wall material has the most hitpoints in Going Medieval?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Brick walls. Both Clay Brick and Limestone Brick walls have 800 hitpoints per segment — four times a wood wall (200 HP) and over five times a clay wall (150 HP). Raw limestone walls sit in the middle at 300 HP. Brick requires a production chain (clay or limestone processed at a stonemason's bench / kiln), so most colonies run wood or raw limestone first and upgrade to brick for the keep and gatehouse."
      }
    },
    {
      "@type": "Question",
      "name": "How much does each wall type cost in Going Medieval?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Every wall segment costs 5 units of its material: 5 wood for a wood wall, 5 clay for a clay wall, 5 limestone for a limestone wall, and 5 clay bricks or 5 limestone bricks for a brick wall. The true cost difference is processing — bricks must be crafted from raw clay or limestone first, so a brick wall carries the labour of brick production on top of the wall-building job itself."
      }
    },
    {
      "@type": "Question",
      "name": "Should I upgrade to brick or build a second stone wall?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Upgrade to brick first. A single limestone brick wall (800 HP) beats a double raw-limestone wall (600 HP total) while consuming half the footprint and fewer total materials (5 bricks vs 10 limestone per doubled segment). Double walls become the answer only after your outer ring is already brick, or where you want an air gap as a fire and sapper buffer around critical structures."
      }
    }
  ]
};

export default function DoubleWallVsSingleWallPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">

      <h1 className="chapter-heading">Going Medieval Double Wall vs Single Wall: The Hitpoint Math</h1>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-6">
        <span className="drop-cap">E</span>very Going Medieval colony eventually asks the same question: is it
        better to build one thick perimeter or two thin ones? The answer lives in the hitpoint table. Walls are
        the only thing standing between raiders and your granary, and each material tier multiplies the
        punishment a wall segment can absorb — from a clay wall's modest 150 hitpoints to a brick wall's
        formidable 800. Doubling a wall doubles its effective hitpoints but also its cost and footprint, so
        the real decision is <em className="text-ink">where</em> doubling beats upgrading, and where it's
        wasted labour. This guide runs the numbers.
      </p>

      {/* Wall Material Data */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Wall Materials: Hitpoints, Cost, and Insulation</h2>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        Every wall segment in Going Medieval costs 5 units of its material — the tiers differ in hitpoints,
        thermal insulation, and how much processing the material needs first. Clay is the weakest structural
        material but insulates best; wood is the year-one workhorse; raw limestone triples clay's durability
        straight out of the ground; and processed bricks are the endgame standard at 800 hitpoints per segment.
      </p>

      <table className="parchment-table mb-8">
        <thead>
          <tr>
            <th>Wall Type</th>
            <th>Hitpoints</th>
            <th>Cost per Segment</th>
            <th>Thermal Insulation</th>
            <th>Processing Needed</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Clay Wall</td>
            <td>150</td>
            <td>5 Clay</td>
            <td>0.90</td>
            <td>Dig clay</td>
            <td>Interior walls, insulation-first rooms</td>
          </tr>
          <tr>
            <td>Wood Wall</td>
            <td>200</td>
            <td>5 Wood</td>
            <td>0.80</td>
            <td>Chop trees</td>
            <td>Year-one perimeter, fast expansion</td>
          </tr>
          <tr>
            <td>Limestone Wall</td>
            <td>300</td>
            <td>5 Limestone</td>
            <td>0.87</td>
            <td>Mine limestone</td>
            <td>Mid-game perimeter upgrade</td>
          </tr>
          <tr>
            <td>Clay Brick Wall</td>
            <td>800</td>
            <td>5 Clay Bricks</td>
            <td>0.85</td>
            <td>Fire clay into bricks</td>
            <td>Fortifications, gatehouse, keep</td>
          </tr>
          <tr>
            <td>Limestone Brick Wall</td>
            <td>800</td>
            <td>5 Limestone Bricks</td>
            <td>0.85</td>
            <td>Cut at stonemason's bench</td>
            <td>Fortifications, gatehouse, keep</td>
          </tr>
        </tbody>
      </table>

      <div className="aged-border p-4 mb-8">
        <p className="font-serif text-base text-ink-light leading-relaxed">
          <strong>Insulation Note:</strong> Thermal insulation matters for living spaces, not fortifications.
          Clay's 0.90 insulation makes it the best choice for bedroom and workshop walls where temperature
          control saves fuel and prevents mood penalties — see our{' '}
          <a href="/temperature-management" className="text-vermillion hover:underline">temperature management guide</a>.
          For the outer perimeter, hitpoints are the only stat that counts.
        </p>
      </div>

      {/* Single vs Double */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Single vs Double: When Each Wins</h2>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        Doubling a wall means building a second parallel row with (ideally) a one-tile gap between. Raiders
        must demolish both rows to get through, so effective hitpoints double — but so do material and labour
        costs, and you lose the tiles between the walls. Compare that against simply upgrading one wall to a
        better material, and a clear ordering emerges.
      </p>

      <table className="parchment-table mb-8">
        <thead>
          <tr>
            <th>Configuration</th>
            <th>Effective HP</th>
            <th>Material per 2 Segments of Frontage</th>
            <th>Footprint</th>
            <th>Verdict</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Single wood wall</td>
            <td>200</td>
            <td>10 wood</td>
            <td>1 tile</td>
            <td>Year one only — raiders chew through fast</td>
          </tr>
          <tr>
            <td>Double wood wall</td>
            <td>400</td>
            <td>20 wood</td>
            <td>3 tiles</td>
            <td>Trap: upgrading to limestone beats it for less</td>
          </tr>
          <tr>
            <td>Single limestone wall</td>
            <td>300</td>
            <td>10 limestone</td>
            <td>1 tile</td>
            <td>Solid mid-game default</td>
          </tr>
          <tr>
            <td>Double limestone wall</td>
            <td>600</td>
            <td>20 limestone</td>
            <td>3 tiles</td>
            <td>Strong, but brick still wins per tile</td>
          </tr>
          <tr>
            <td>Single brick wall</td>
            <td>800</td>
            <td>10 bricks (plus processing)</td>
            <td>1 tile</td>
            <td>Best HP per tile and per raw material</td>
          </tr>
          <tr>
            <td>Double brick wall</td>
            <td>1600</td>
            <td>20 bricks (plus processing)</td>
            <td>3 tiles</td>
            <td>Endgame gatehouse and keep armour</td>
          </tr>
        </tbody>
      </table>

      <figure className="mb-8">
        <img
          src="/images/double-wall-vs-single-wall.png"
          alt="Bar chart of wall hitpoints per segment in Going Medieval for clay (150), wood (200), limestone (300), clay brick (800) and limestone brick (800), showing single-wall hitpoints versus doubled values up to 1600"
          className="w-full rounded-lg border border-[#3d3528]"
          loading="lazy"
        />
        <figcaption className="mt-2 text-center text-sm text-ink-light font-serif">
          Hitpoints per wall segment, single vs double layer. Note the crossover: one brick wall (800 HP)
          already beats a doubled limestone wall (600 HP) — upgrade material before adding rows.
        </figcaption>
      </figure>

      {/* SVG cross-section diagram */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Cross-Section: What a Raider Must Break</h2>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        Side view of the three perimeter tiers. Demolition damage applies to one segment at a time, so each
        additional row is a separate hitpoint pool the raider must empty — while your archers shoot the whole
        time from behind the inner line.
      </p>

      <figure className="my-6">
        <svg viewBox="0 0 760 340" className="w-full rounded-lg border border-[#3d3528]" role="img"
          aria-label="Cross-section diagram comparing single wood wall, single limestone wall, and double limestone wall with merlons and an archer in Going Medieval, showing hitpoint pools raiders must destroy">
          <rect x="0" y="0" width="760" height="340" fill="#1a1510" />

          {/* ground line */}
          <line x1="20" y1="270" x2="740" y2="270" stroke="#3d3528" strokeWidth="3" />

          {/* Panel 1: single wood */}
          <text x="130" y="36" fill="#d4a840" fontSize="15" textAnchor="middle" fontWeight="600">Single Wood · 200 HP</text>
          <rect x="112" y="120" width="36" height="150" fill="#6b4f2e" stroke="#3d3528" strokeWidth="2" />
          <line x1="112" y1="150" x2="148" y2="150" stroke="#3d3528" strokeWidth="1.5" />
          <line x1="112" y1="185" x2="148" y2="185" stroke="#3d3528" strokeWidth="1.5" />
          <line x1="112" y1="220" x2="148" y2="220" stroke="#3d3528" strokeWidth="1.5" />
          {/* raider */}
          <circle cx="62" cy="216" r="11" fill="#e05a4e" stroke="#1a1510" strokeWidth="2" />
          <line x1="62" y1="227" x2="62" y2="256" stroke="#e05a4e" strokeWidth="4" />
          <line x1="74" y1="236" x2="96" y2="226" stroke="#e05a4e" strokeWidth="3.5" />
          <text x="62" y="292" fill="#e05a4e" fontSize="12" textAnchor="middle">raider</text>
          <text x="130" y="110" fill="#a89878" fontSize="12" textAnchor="middle">1 pool</text>

          {/* Panel 2: single limestone */}
          <text x="330" y="36" fill="#d4a840" fontSize="15" textAnchor="middle" fontWeight="600">Single Limestone · 300 HP</text>
          <rect x="306" y="100" width="48" height="170" fill="#8a8578" stroke="#3d3528" strokeWidth="2" />
          <line x1="306" y1="142" x2="354" y2="142" stroke="#5a564c" strokeWidth="1.5" />
          <line x1="306" y1="186" x2="354" y2="186" stroke="#5a564c" strokeWidth="1.5" />
          <line x1="306" y1="228" x2="354" y2="228" stroke="#5a564c" strokeWidth="1.5" />
          <circle cx="256" cy="216" r="11" fill="#e05a4e" stroke="#1a1510" strokeWidth="2" />
          <line x1="256" y1="227" x2="256" y2="256" stroke="#e05a4e" strokeWidth="4" />
          <line x1="268" y1="236" x2="290" y2="226" stroke="#e05a4e" strokeWidth="3.5" />
          <text x="256" y="292" fill="#e05a4e" fontSize="12" textAnchor="middle">raider</text>
          <text x="330" y="90" fill="#a89878" fontSize="12" textAnchor="middle">1 pool</text>

          {/* Panel 3: double limestone + merlon + archer */}
          <text x="580" y="36" fill="#d4a840" fontSize="15" textAnchor="middle" fontWeight="600">Double Limestone · 600 HP</text>
          <rect x="500" y="100" width="44" height="170" fill="#8a8578" stroke="#3d3528" strokeWidth="2" />
          <line x1="500" y1="142" x2="544" y2="142" stroke="#5a564c" strokeWidth="1.5" />
          <line x1="500" y1="186" x2="544" y2="186" stroke="#5a564c" strokeWidth="1.5" />
          <line x1="500" y1="228" x2="544" y2="228" stroke="#5a564c" strokeWidth="1.5" />
          <rect x="588" y="100" width="44" height="170" fill="#8a8578" stroke="#3d3528" strokeWidth="2" />
          <line x1="588" y1="142" x2="632" y2="142" stroke="#5a564c" strokeWidth="1.5" />
          <line x1="588" y1="186" x2="632" y2="186" stroke="#5a564c" strokeWidth="1.5" />
          <line x1="588" y1="228" x2="632" y2="228" stroke="#5a564c" strokeWidth="1.5" />
          {/* merlons on inner wall */}
          <rect x="588" y="80" width="12" height="20" fill="#8a8578" stroke="#3d3528" strokeWidth="2" />
          <rect x="608" y="80" width="12" height="20" fill="#8a8578" stroke="#3d3528" strokeWidth="2" />
          {/* archer behind inner wall */}
          <circle cx="668" cy="216" r="10" fill="#d4a840" stroke="#1a1510" strokeWidth="2" />
          <line x1="668" y1="226" x2="668" y2="256" stroke="#d4a840" strokeWidth="4" />
          <path d="M 656 208 A 14 14 0 0 1 656 236" fill="none" stroke="#d4a840" strokeWidth="2.5" />
          <text x="668" y="292" fill="#d4a840" fontSize="12" textAnchor="middle">archer</text>
          {/* raider at outer wall */}
          <circle cx="452" cy="216" r="11" fill="#e05a4e" stroke="#1a1510" strokeWidth="2" />
          <line x1="452" y1="227" x2="452" y2="256" stroke="#e05a4e" strokeWidth="4" />
          <line x1="464" y1="236" x2="486" y2="226" stroke="#e05a4e" strokeWidth="3.5" />
          <text x="452" y="292" fill="#e05a4e" fontSize="12" textAnchor="middle">raider</text>
          <text x="522" y="90" fill="#a89878" fontSize="12" textAnchor="middle">pool 1</text>
          <text x="610" y="72" fill="#a89878" fontSize="12" textAnchor="middle">pool 2 + merlons</text>
          {/* arrow */}
          <line x1="656" y1="222" x2="636" y2="222" stroke="#e0d4c0" strokeWidth="2" strokeDasharray="5 4" />
          <line x1="494" y1="222" x2="470" y2="222" stroke="#e0d4c0" strokeWidth="2" strokeDasharray="5 4" />

          {/* legend */}
          <g transform="translate(40, 316)">
            <rect x="0" y="-11" width="16" height="12" fill="#6b4f2e" stroke="#3d3528" />
            <text x="22" y="0" fill="#a89878" fontSize="12">wood wall</text>
            <rect x="108" y="-11" width="16" height="12" fill="#8a8578" stroke="#3d3528" />
            <text x="130" y="0" fill="#a89878" fontSize="12">limestone wall</text>
            <circle cx="238" cy="-5" r="6" fill="#e05a4e" />
            <text x="250" y="0" fill="#a89878" fontSize="12">raider (demolishing)</text>
            <circle cx="392" cy="-5" r="6" fill="#d4a840" />
            <text x="404" y="0" fill="#a89878" fontSize="12">archer (shooting through merlon gap)</text>
            <line x1="600" y1="-5" x2="630" y2="-5" stroke="#e0d4c0" strokeWidth="2" strokeDasharray="5 4" />
            <text x="636" y="0" fill="#a89878" fontSize="12">arrow fire</text>
          </g>
        </svg>
        <figcaption className="mt-2 text-center text-sm text-ink-light font-serif">
          Demolition hits one segment at a time. A doubled wall presents two separate hitpoint pools — and
          every second spent breaking them is a second under archer fire from the merlon-topped inner line.
        </figcaption>
      </figure>

      {/* Strategy Section */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">The Upgrade Order That Actually Works</h2>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        The math above produces a simple rule: <strong className="text-ink">upgrade material before adding
        rows</strong>. A single brick wall (800 HP) outlasts a doubled limestone wall (600 HP) on one tile
        of frontage, using half the raw stone. Double walls only become efficient in two situations: when
        your outer ring is already brick and you want a second pool of hitpoints anyway, and when you want
        the gap itself — a one-tile buffer between rows keeps fire from spreading wall-to-wall and gives
        sappers a longer, trap-fillable route.
      </p>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        A practical progression by colony stage:
      </p>

      <ul className="list-disc pl-6 mb-4 space-y-2 font-serif text-base text-ink-light">
        <li><strong className="text-ink">Year 1:</strong> Single wood perimeter (200 HP) with a trap corridor at the one entrance. Wood is free and fast; spend saved labour on food and traps.</li>
        <li><strong className="text-ink">Year 2:</strong> Replace the perimeter with single limestone (300 HP) as mining comes online. Double <em>only</em> the gatehouse and the wall segments flanking your killbox entrance — the tiles raiders actually attack.</li>
        <li><strong className="text-ink">Year 3+:</strong> Rebuild the entrance ring, keep, and granary in brick (800 HP). Now consider a true double wall around the core: two brick rows (1600 HP effective) with the gap filled with spike traps is functionally a second killbox.</li>
      </ul>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        Don't double everything. A doubled perimeter around your entire base triples the build labour of an
        already expensive project, and most of those segments will never be attacked — raiders path to your
        bait entrance, not to a random stretch of rear wall backed by a hillside. Invest the surplus in
        merlons, a second archer tower, or the{' '}
        <a href="/wall-upgrade-guide" className="text-vermillion hover:underline">wall upgrade path</a>{' '}
        instead. For whole-base placement, see{' '}
        <a href="/best-defense-layout" className="text-vermillion hover:underline">best defense layout</a>{' '}
        and{' '}
        <a href="/corner-tower" className="text-vermillion hover:underline">corner tower design</a>.
      </p>

      <div className="aged-border p-4 mb-8">
        <p className="font-serif text-base text-ink-light leading-relaxed">
          <strong>Repair Discipline:</strong> Damaged walls keep their remaining hitpoints but do not
          regenerate. After every raid, check segments that took demolition damage and queue repairs —
          a brick wall at 200 of 800 HP is now weaker than a fresh limestone wall. Repairs cost no new
          materials, only labour, so there is no excuse for a crumbling gatehouse.
        </p>
      </div>

      {/* FAQ Section */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Frequently Asked Questions</h2>

      <div className="aged-border p-4 mb-4">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">Is a double wall worth it in Going Medieval?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          Yes in the mid-to-late game, no in week one. Doubling a wall literally doubles the hitpoints raiders
          must chew through — two limestone walls absorb 600 HP of demolition instead of 300. But doubling
          also doubles material and labour, and early raids are stopped more cheaply by a single wall plus
          spike traps and archers. Double the wall segments that face your killbox entrance and known
          approach angles first; single walls are fine behind natural barriers.
        </p>
      </div>

      <div className="aged-border p-4 mb-4">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">Which wall material has the most hitpoints in Going Medieval?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          Brick walls. Both Clay Brick and Limestone Brick walls have 800 hitpoints per segment — four times
          a wood wall (200 HP) and over five times a clay wall (150 HP). Raw limestone walls sit in the
          middle at 300 HP. Brick requires a production chain, so most colonies run wood or raw limestone
          first and upgrade to brick for the keep and gatehouse.
        </p>
      </div>

      <div className="aged-border p-4 mb-4">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">How much does each wall type cost in Going Medieval?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          Every wall segment costs 5 units of its material: 5 wood for a wood wall, 5 clay for a clay wall,
          5 limestone for a limestone wall, and 5 clay bricks or 5 limestone bricks for a brick wall. The
          true cost difference is processing — bricks must be crafted from raw clay or limestone first, so a
          brick wall carries the labour of brick production on top of the wall-building job itself.
        </p>
      </div>

      <div className="aged-border p-4 mb-8">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">Should I upgrade to brick or build a second stone wall?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          Upgrade to brick first. A single limestone brick wall (800 HP) beats a double raw-limestone wall
          (600 HP total) while consuming half the footprint and fewer total materials (5 bricks vs 10
          limestone per doubled segment). Double walls become the answer only after your outer ring is
          already brick, or where you want an air gap as a fire and sapper buffer around critical structures.
        </p>
      </div>

      {/* Related Guides */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Related Guides</h2>
      <ul className="list-disc pl-6 mb-8 space-y-2 font-serif text-base text-ink-light">
        <li><a href="/wall-upgrade-guide" className="text-vermillion hover:underline">Wall Upgrade Guide — the full material progression</a></li>
        <li><a href="/wall-floor-material-upgrade" className="text-vermillion hover:underline">Wall &amp; Floor Material Upgrades — when to rebuild vs repair</a></li>
        <li><a href="/building-material-tiers" className="text-vermillion hover:underline">Building Material Tiers — every construction material ranked</a></li>
        <li><a href="/killbox-design" className="text-vermillion hover:underline">Killbox Design — make raiders never reach your walls</a></li>
        <li><a href="/best-defense-layout" className="text-vermillion hover:underline">Best Defense Layout — whole-base fortification planning</a></li>
        <li><a href="/structural-mechanics" className="text-vermillion hover:underline">Structural Mechanics — how walls, floors, and roofs interact</a></li>
      </ul>

      <p className="font-serif text-sm text-ink-muted leading-relaxed mt-8 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
        Last updated: July 19, 2026. Wall hitpoints span clay 150, wood 200, limestone 300,
        and brick 800, at 5 material per segment. Game mechanics may change with future updates.
      </p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  );
}
