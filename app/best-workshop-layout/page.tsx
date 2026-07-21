{/* Meta description: Going Medieval best workshop layout — real room bonuses (Workshop +20% production speed, Library +20% research writing), exact room requirements, workstation list, and an efficient workshop cluster floor plan. */}
export const metadata = {
  title: "Going Medieval Best Workshop Layout — +20% Room Bonus & Floor Plan (2026)",
  description:
    "The best workshop layout in Going Medieval: how the Workshop room's +20% production speed bonus works, exact furniture requirements (2 wall tool shelves), Library and Kitchen bonuses, and a proven workshop cluster floor plan with stockpile placement.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do you get the +20% production speed bonus in Going Medieval?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enclose your crafting stations in a room the game recognizes as a Workshop. A Workshop requires a fully enclosed, roofed room containing at least one crafting workstation (Armourer's Table, Bowyer's Table, Blacksmith's Forge, Woodwork Bench, Stonemason's Bench, or Sewing Station) and two Wall Tool Shelves. Once the room is recognized, every workstation inside produces 20% faster — a job that took one hour finishes in fifty minutes. Shrines and entertainment structures in the room disqualify it."
      }
    },
    {
      "@type": "Question",
      "name": "Does the research table get a speed bonus in Going Medieval?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, but not in a Workshop. Research tables belong in a Library: an enclosed room with one Basic, standard, or Advanced Research Table plus two Wall Bookshelves or Bookshelves. A Library gives a +20% speed bonus for writing books (Chronicles, Handbooks, and Theses). The Library excludes other workstations, so build it as its own quiet room next to the workshop block rather than mixing the two."
      }
    },
    {
      "@type": "Question",
      "name": "Can I put multiple workstations in one Workshop room in Going Medieval?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — a single Workshop can hold as many of the six qualifying stations as you can fit, and every one of them gets the +20% production speed bonus as long as the room keeps its two Wall Tool Shelves and stays fully enclosed. The limit is practical, not mechanical: cramming stations together creates traffic jams around shared input stockpiles, so most colonies group related stations (smithing together, tailoring together) with a small dedicated stockpile a few tiles from each bench."
      }
    },
    {
      "@type": "Question",
      "name": "Should the kitchen be inside the workshop in Going Medieval?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. The Kitchen is its own room type requiring one Stove, two Wall Pottery Shelves, and one Butchering Table, and it boosts production speed for stoves and butchering tables specifically. A Workshop excludes nothing that a kitchen needs, but a Kitchen excludes shrines and entertainment structures, and neither room's bonus covers the other's stations. Build them as neighbouring rooms with the food cellar and meal stockpile between them."
      }
    },
    {
      "@type": "Question",
      "name": "Why isn't my Workshop room being recognized in Going Medieval?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Check three things. First, the room must be fully enclosed — four complete walls, at least one door, and a roof; a single missing wall or roof tile turns it back into a non-room. Second, it needs the right furniture: at least one qualifying workstation and two Wall Tool Shelves specifically (regular shelves do not count). Third, remove disqualified items — shrines and entertainment structures cancel the Workshop designation. Turn on the room overlay to see exactly which room type the game detects."
      }
    }
  ]
};

export default function BestWorkshopLayoutPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">

      <h1 className="chapter-heading">Going Medieval Best Workshop Layout: Room Bonuses and Floor Plans</h1>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-6">
        <span className="drop-cap">M</span>ost colonies build their first crafting stations wherever there is
        floor space — a smithy in the hallway, a sewing kit in the barracks, a research desk in the rain.
        Every one of those stations is running slower than it should. Going Medieval recognizes proper room
        types, and a correctly built <strong className="text-ink">Workshop gives every workstation inside it
        +20% production speed</strong>, while a Library does the same for research writing and a Kitchen for
        cooking. That bonus costs you two wall shelves and a roof. This guide covers the exact room
        requirements, the station list, and a floor plan that puts the whole production block together
        without traffic jams.
      </p>

      {/* Room requirements */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">The Room Bonuses: Exact Requirements</h2>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        A room in Going Medieval starts as a "spare room" — four walls, a door, and a roof — and only becomes
        a functional room when the right furniture goes in. The three production rooms and their exact
        requirements:
      </p>

      <table className="parchment-table mb-8">
        <thead>
          <tr>
            <th>Room Type</th>
            <th>Required Furniture</th>
            <th>Bonus</th>
            <th>Disqualified By</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Workshop</td>
            <td>1 crafting workstation + 2 Wall Tool Shelves</td>
            <td>+20% production speed at all stations inside</td>
            <td>Shrines, entertainment structures</td>
          </tr>
          <tr>
            <td>Library</td>
            <td>1 Research Table (any tier) + 2 Bookshelves / Wall Bookshelves</td>
            <td>+20% speed for writing books</td>
            <td>Shrines, entertainment, other workstations</td>
          </tr>
          <tr>
            <td>Kitchen</td>
            <td>1 Stove + 2 Wall Pottery Shelves + 1 Butchering Table</td>
            <td>Faster production at stoves and butchering tables</td>
            <td>Shrines, entertainment structures</td>
          </tr>
        </tbody>
      </table>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        Six stations qualify a room as a Workshop: the <strong className="text-ink">Armourer's Table,
        Bowyer's Table, Blacksmith's Forge, Woodwork Bench, Stonemason's Bench, and Sewing
        Station</strong>. Any one of them plus two Wall Tool Shelves flips the room type, and once flipped,
        <em>every</em> station in the room crafts faster — so the efficient move is one shared workshop hall
        rather than six tiny sheds. Note that the Library is stricter: other workstations disqualify it, so
        the research desk always gets its own room.
      </p>

      <figure className="mb-8">
        <img
          src="/images/best-workshop-layout.png"
          alt="Bar chart comparing crafting times in Going Medieval with and without the Workshop room bonus: a 10 minute job drops to 8 minutes 20 seconds, a 1 hour job to 50 minutes, a 6 hour job to 5 hours, and a 24 hour job to 20 hours at +20 percent production speed"
          className="w-full rounded-lg border border-[#3d3528]"
          loading="lazy"
        />
        <figcaption className="mt-2 text-center text-sm text-ink-light font-serif">
          What +20% production speed actually saves. Long jobs — steel tools, plate armour, advanced research
          books — are where the room bonus pays for its two wall shelves many times over.
        </figcaption>
      </figure>

      {/* Station list */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Which Stations Belong in the Workshop Hall</h2>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        Group stations by the materials they eat, because hauling time — not crafting time — is what actually
        bottlenecks a mid-game colony. A smith standing idle while a hauler walks forty tiles for iron
        ingots loses more than any room bonus can recover.
      </p>

      <table className="parchment-table mb-8">
        <thead>
          <tr>
            <th>Cluster</th>
            <th>Stations</th>
            <th>Stockpile Within ~5 Tiles</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Metalworking</td>
            <td>Blacksmith's Forge, Armourer's Table, Smelting Furnace</td>
            <td>Iron nuggets, ingots, coal</td>
            <td>Smelter beside the forge keeps fuel trips short</td>
          </tr>
          <tr>
            <td>Woodworking</td>
            <td>Woodwork Bench, Bowyer's Table</td>
            <td>Wood, sticks</td>
            <td>Near the treeline early; near the wood stockpile later</td>
          </tr>
          <tr>
            <td>Masonry</td>
            <td>Stonemason's Bench, Kiln</td>
            <td>Limestone, clay, bricks</td>
            <td>Next to the mine entrance — bricks are heavy</td>
          </tr>
          <tr>
            <td>Tailoring</td>
            <td>Sewing Station</td>
            <td>Linen, wool, leather</td>
            <td>Pair with the clothing shelf in the barracks wing</td>
          </tr>
          <tr>
            <td>Research (own room)</td>
            <td>Research Tables, Apothecary Bench</td>
            <td>Books, herbs</td>
            <td>Library rules exclude other workstations</td>
          </tr>
        </tbody>
      </table>

      <div className="aged-border p-4 mb-8">
        <p className="font-serif text-base text-ink-light leading-relaxed">
          <strong>Stockpile discipline:</strong> a small dedicated stockpile (5–10 tiles, filtered to one
          input) next to each cluster beats one giant warehouse across the map. Delete the general stockpile
          zone for those materials so haulers stop double-handling. See{' '}
          <a href="/stockpile-optimization" className="text-vermillion hover:underline">stockpile optimization</a>{' '}
          for the full zoning method and{' '}
          <a href="/production-chain-optimization" className="text-vermillion hover:underline">production chain optimization</a>{' '}
          for station-to-station throughput.
        </p>
      </div>

      {/* SVG floor plan */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Floor Plan: A Compact Production Block</h2>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        The pattern that works: one rectangular Workshop hall holding two clusters at opposite ends with
        filtered stockpiles along the shared wall, a separate Library through its own door (it cannot share
        space with workstations), and the Kitchen across the corridor near the food cellar. Doors on the
        corridor side only — every exterior doorway is heat loss in winter and a breach point in a raid.
      </p>

      <figure className="my-6">
        <svg viewBox="0 0 760 400" className="w-full rounded-lg border border-[#3d3528]" role="img"
          aria-label="Top-down floor plan of a Going Medieval production block showing a large Workshop room with blacksmith and woodworking clusters, two wall tool shelves, filtered stockpiles along the wall, a separate Library room with bookshelves, and a Kitchen across the corridor">
          <rect x="0" y="0" width="760" height="400" fill="#1a1510" />

          {/* Workshop room */}
          <rect x="40" y="40" width="460" height="220" fill="#242018" stroke="#d4a840" strokeWidth="3" />
          <text x="270" y="64" fill="#d4a840" fontSize="15" textAnchor="middle" fontWeight="600">WORKSHOP (+20% speed)</text>

          {/* metalworking cluster */}
          <rect x="60" y="84" width="52" height="36" fill="#8a6a4a" stroke="#3d3528" strokeWidth="1.5" />
          <text x="86" y="106" fill="#e0d4c0" fontSize="10" textAnchor="middle">forge</text>
          <rect x="60" y="132" width="52" height="36" fill="#8a6a4a" stroke="#3d3528" strokeWidth="1.5" />
          <text x="86" y="154" fill="#e0d4c0" fontSize="10" textAnchor="middle">armourer</text>
          <rect x="60" y="180" width="52" height="36" fill="#6a5232" stroke="#3d3528" strokeWidth="1.5" />
          <text x="86" y="202" fill="#e0d4c0" fontSize="10" textAnchor="middle">smelter</text>

          {/* metal stockpile */}
          <rect x="128" y="100" width="60" height="100" fill="none" stroke="#d4943a" strokeWidth="2" strokeDasharray="6 4" />
          <text x="158" y="146" fill="#d4943a" fontSize="10" textAnchor="middle">ingots</text>
          <text x="158" y="160" fill="#d4943a" fontSize="10" textAnchor="middle">+ coal</text>

          {/* woodworking cluster */}
          <rect x="388" y="84" width="52" height="36" fill="#6a5232" stroke="#3d3528" strokeWidth="1.5" />
          <text x="414" y="106" fill="#e0d4c0" fontSize="10" textAnchor="middle">wood</text>
          <text x="414" y="117" fill="#e0d4c0" fontSize="10" textAnchor="middle">bench</text>
          <rect x="388" y="132" width="52" height="36" fill="#6a5232" stroke="#3d3528" strokeWidth="1.5" />
          <text x="414" y="154" fill="#e0d4c0" fontSize="10" textAnchor="middle">bowyer</text>
          <rect x="388" y="180" width="52" height="36" fill="#8a6a4a" stroke="#3d3528" strokeWidth="1.5" />
          <text x="414" y="202" fill="#e0d4c0" fontSize="10" textAnchor="middle">sewing</text>

          {/* wood stockpile */}
          <rect x="312" y="100" width="60" height="100" fill="none" stroke="#d4943a" strokeWidth="2" strokeDasharray="6 4" />
          <text x="342" y="146" fill="#d4943a" fontSize="10" textAnchor="middle">wood</text>
          <text x="342" y="160" fill="#d4943a" fontSize="10" textAnchor="middle">+ linen</text>

          {/* wall tool shelves */}
          <rect x="200" y="44" width="30" height="8" fill="#d4a840" />
          <rect x="260" y="44" width="30" height="8" fill="#d4a840" />
          <text x="245" y="84" fill="#d4a840" fontSize="10" textAnchor="middle">2 wall tool shelves (required)</text>

          {/* workshop door */}
          <rect x="240" y="256" width="40" height="8" fill="#1a1510" stroke="#d4a840" strokeWidth="2" />
          <text x="260" y="252" fill="#d4a840" fontSize="10" textAnchor="middle">door</text>

          {/* Library room */}
          <rect x="540" y="40" width="180" height="220" fill="#242018" stroke="#8ab4c8" strokeWidth="3" />
          <text x="630" y="64" fill="#8ab4c8" fontSize="15" textAnchor="middle" fontWeight="600">LIBRARY</text>
          <rect x="560" y="84" width="60" height="36" fill="#4a4132" stroke="#3d3528" strokeWidth="1.5" />
          <text x="590" y="106" fill="#e0d4c0" fontSize="10" textAnchor="middle">research</text>
          <rect x="560" y="132" width="24" height="80" fill="#8ab4c8" stroke="#3d3528" strokeWidth="1" opacity="0.7" />
          <rect x="592" y="132" width="24" height="80" fill="#8ab4c8" stroke="#3d3528" strokeWidth="1" opacity="0.7" />
          <text x="630" y="232" fill="#8ab4c8" fontSize="10" textAnchor="middle">2 bookshelves — no other</text>
          <text x="630" y="245" fill="#8ab4c8" fontSize="10" textAnchor="middle">workstations allowed</text>
          <rect x="610" y="256" width="40" height="8" fill="#1a1510" stroke="#8ab4c8" strokeWidth="2" />
          <text x="630" y="252" fill="#8ab4c8" fontSize="10" textAnchor="middle">door</text>

          {/* corridor */}
          <rect x="40" y="264" width="680" height="56" fill="#201a12" stroke="#3d3528" strokeWidth="2" />
          <text x="380" y="298" fill="#a89878" fontSize="12" textAnchor="middle" fontStyle="italic">corridor — internal doors only, no exterior openings</text>

          {/* Kitchen room */}
          <rect x="240" y="324" width="280" height="60" fill="#242018" stroke="#d4943a" strokeWidth="3" />
          <text x="300" y="348" fill="#d4943a" fontSize="13" fontWeight="600">KITCHEN</text>
          <rect x="360" y="336" width="40" height="24" fill="#c05a3a" stroke="#3d3528" strokeWidth="1.5" />
          <text x="380" y="352" fill="#e0d4c0" fontSize="10" textAnchor="middle">stove</text>
          <rect x="410" y="336" width="52" height="24" fill="#8a6a4a" stroke="#3d3528" strokeWidth="1.5" />
          <text x="436" y="352" fill="#e0d4c0" fontSize="10" textAnchor="middle">butcher</text>
          <text x="300" y="370" fill="#d4943a" fontSize="9">+ 2 wall pottery shelves</text>

          {/* cellar hint */}
          <rect x="540" y="324" width="180" height="60" fill="#1a1510" stroke="#8ab4c8" strokeWidth="2" strokeDasharray="6 4" />
          <text x="630" y="350" fill="#8ab4c8" fontSize="11" textAnchor="middle">food cellar below</text>
          <text x="630" y="366" fill="#8ab4c8" fontSize="11" textAnchor="middle">(clay walls, ~2–4°C)</text>

          {/* legend */}
          <g transform="translate(50, 22)">
            <rect x="0" y="-11" width="14" height="11" fill="#8a6a4a" stroke="#3d3528" />
            <text x="20" y="0" fill="#a89878" fontSize="11">workstation</text>
            <rect x="108" y="-11" width="14" height="11" fill="none" stroke="#d4943a" strokeDasharray="3 2" />
            <text x="128" y="0" fill="#a89878" fontSize="11">filtered stockpile</text>
            <rect x="248" y="-11" width="14" height="8" fill="#d4a840" />
            <text x="268" y="0" fill="#a89878" fontSize="11">required wall shelf</text>
            <rect x="396" y="-11" width="14" height="11" fill="#8ab4c8" opacity="0.7" />
            <text x="416" y="0" fill="#a89878" fontSize="11">bookshelf</text>
            <rect x="496" y="-11" width="14" height="11" fill="#c05a3a" />
            <text x="516" y="0" fill="#a89878" fontSize="11">heat source</text>
          </g>
        </svg>
        <figcaption className="mt-2 text-center text-sm text-ink-light font-serif">
          One Workshop hall, two material clusters, stockpiles on the shared wall; the Library stays separate
          because other workstations disqualify it. The Kitchen sits by the cellar stairs, not in the workshop.
        </figcaption>
      </figure>

      {/* Layout rules */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Layout Rules That Survive Contact With the Game</h2>

      <ul className="list-disc pl-6 mb-4 space-y-2 font-serif text-base text-ink-light">
        <li><strong className="text-ink">Roof and enclose everything.</strong> A single missing roof tile or wall gap turns your Workshop back into a spare room and silently deletes the +20% bonus. Use the room overlay to confirm the designation after every raid or renovation.</li>
        <li><strong className="text-ink">Wall shelves, not floor shelves.</strong> The Workshop needs two <em>Wall</em> Tool Shelves; the Library needs two <em>Wall</em> Bookshelves or Bookshelves. Regular storage shelves do not flip the room type.</li>
        <li><strong className="text-ink">Keep shrines and entertainment out.</strong> Both disqualify the Workshop, Kitchen, and Library. Give the chapel and the gaming tables their own rooms — which they need anyway for their own mood bonuses (see <a href="/room-quality-system" className="text-vermillion hover:underline">room quality system</a>).</li>
        <li><strong className="text-ink">Heat the hall, not the stations.</strong> A brazier in the corner keeps workers' hands warm in winter; workbenches themselves do not need heat. Workshops also benefit from clay walls' 0.90 insulation — material values in <a href="/building-material-tiers" className="text-vermillion hover:underline">building material tiers</a>.</li>
        <li><strong className="text-ink">Put the smelter and kiln at the edge.</strong> Fuel-hungry stations belong beside the mine entrance or wood stockpile so haulers feed them in a few steps, and their output stockpile feeds the forge next door.</li>
      </ul>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-8">
        Finally, scale by headcount, not by blueprint. One of each station is enough until you have dedicated
        specialists; a second forge before you have a second smith is a waste of bricks and floor tiles. When
        you do expand, extend the hall lengthwise and mirror the stockpile wall — the layout above doubles
        cleanly. Job assignments that keep the right settler at the right bench are covered in{' '}
        <a href="/settler-job-assignment" className="text-vermillion hover:underline">settler job assignment</a>{' '}
        and <a href="/work-priorities-setup" className="text-vermillion hover:underline">work priorities setup</a>.
      </p>

      {/* FAQ Section */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Frequently Asked Questions</h2>

      <div className="aged-border p-4 mb-4">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">How do you get the +20% production speed bonus in Going Medieval?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          Enclose your crafting stations in a room the game recognizes as a Workshop: a fully enclosed,
          roofed room with at least one crafting workstation (Armourer's Table, Bowyer's Table, Blacksmith's
          Forge, Woodwork Bench, Stonemason's Bench, or Sewing Station) and two Wall Tool Shelves. Every
          station inside then produces 20% faster — a one-hour job finishes in fifty minutes. Shrines and
          entertainment structures disqualify the room.
        </p>
      </div>

      <div className="aged-border p-4 mb-4">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">Does the research table get a speed bonus in Going Medieval?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          Yes, but in a Library, not a Workshop: an enclosed room with one research table of any tier plus two
          bookshelves or wall bookshelves gives +20% speed for writing books (Chronicles, Handbooks, Theses).
          Libraries exclude other workstations, so the research desk always gets its own room next to the
          workshop block.
        </p>
      </div>

      <div className="aged-border p-4 mb-4">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">Can I put multiple workstations in one Workshop room in Going Medieval?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          Yes — one Workshop can hold as many of the six qualifying stations as you can fit, and every one
          gets the +20% bonus as long as the room keeps its two Wall Tool Shelves and stays enclosed. The
          limit is practical: group related stations (smithing, woodworking, tailoring) with a small filtered
          stockpile a few tiles from each bench so haulers don't create traffic jams.
        </p>
      </div>

      <div className="aged-border p-4 mb-4">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">Should the kitchen be inside the workshop in Going Medieval?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          No. The Kitchen is its own room type — one Stove, two Wall Pottery Shelves, one Butchering Table —
          boosting stoves and butchering tables specifically. Neither room's bonus covers the other's
          stations. Build them as neighbouring rooms with the food cellar and meal stockpile between them.
        </p>
      </div>

      <div className="aged-border p-4 mb-8">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">Why isn't my Workshop room being recognized in Going Medieval?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          Check three things: the room must be fully enclosed with a roof (one missing tile reverts it to a
          spare room); it needs at least one qualifying workstation and two Wall Tool Shelves specifically —
          regular shelves don't count; and shrines or entertainment structures inside cancel the designation.
          Turn on the room overlay to see exactly what the game detects.
        </p>
      </div>

      {/* Related Guides */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Related Guides</h2>
      <ul className="list-disc pl-6 mb-8 space-y-2 font-serif text-base text-ink-light">
        <li><a href="/room-quality-system" className="text-vermillion hover:underline">Room Quality System — Impressiveness, mood, and room requirements</a></li>
        <li><a href="/workshop-efficiency" className="text-vermillion hover:underline">Workshop Efficiency — throughput beyond the room bonus</a></li>
        <li><a href="/production-chain-optimization" className="text-vermillion hover:underline">Production Chain Optimization — station-to-station flow</a></li>
        <li><a href="/stockpile-optimization" className="text-vermillion hover:underline">Stockpile Optimization — kill the hauling bottleneck</a></li>
        <li><a href="/kitchen-design" className="text-vermillion hover:underline">Kitchen Design — the food production room</a></li>
        <li><a href="/building-material-tiers" className="text-vermillion hover:underline">Building Material Tiers — what to build the hall from</a></li>
        <li><a href="/research" className="text-vermillion hover:underline">Research — what the Library unlocks and when</a></li>
        <li><a href="/base-layout" className="text-vermillion hover:underline">Base Layout — where the production block sits in the colony</a></li>
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
