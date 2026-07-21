{/* Meta description: Going Medieval stockpile optimization — exact shelf and rack capacities, stockpile priority mechanics, decay protection by storage type, and a workshop-adjacent zoning layout. */}
export const metadata = {
  title: "Going Medieval Stockpile Optimization — Shelf Capacity, Priority & Decay (2026)",
  description:
    "Optimize stockpiles in Going Medieval with real numbers: exact shelf, rack, chest and bookshelf capacities from the Shelves & Racks update, how stockpile priority actually moves items, decay protection by storage type, and a hauling-efficient zone layout.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does stockpile priority work in Going Medieval?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Every stockpile, shelf, and rack has a priority drop-down added in the Shelves & Racks update. Settlers always haul resources to the highest-priority valid stockpile first, and they will actively move resources from lower-priority storage to higher-priority storage — including onto shelves and racks. Set a rack to very high priority and settlers will constantly keep it stacked. The setting changes which stockpile is chosen, not the hauling job's own priority."
      }
    },
    {
      "@type": "Question",
      "name": "Do items decay on stockpiles in Going Medieval?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Resources left on bare ground outdoors decay, and the official in-game tutorial advises placing stockpiles under roofs or inside to slow decay. Putting a floor under the pile helps as well. Food goes further: decay is temperature-driven, so an underground cellar measured at 2.2°C preserves food far longer than any surface room, while pickled vegetables need no cold storage at all."
      }
    },
    {
      "@type": "Question",
      "name": "Are shelves better than stockpiles in Going Medieval?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For dense storage, yes. A shelf holds 3 piles of food, textiles, or medicine on a single floor tile — triple the compression of a ground stockpile tile. Shelves are unlocked by the Preserving Food research, bookshelves and weapon racks by Furniture, and armour racks and chests by Furniture II. Settlers also prioritize taking production inputs from shelves, so a shelf next to a workshop doubles as a feed buffer."
      }
    },
    {
      "@type": "Question",
      "name": "Why won't my settlers move items off a stockpile in Going Medieval?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The most common cause is that no other stockpile accepts that item category — settlers will not relocate goods unless a valid destination exists. Create or reconfigure a second stockpile that allows the item, and settlers will transfer it. Also check that the item isn't forbidden (marked with the hand-and-X icon), which blocks hauling entirely."
      }
    },
    {
      "@type": "Question",
      "name": "Where should I place stockpiles in Going Medieval?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Adjacent to the workshops that consume the goods, with one tile of clearance from walls, since leaving a space between walls and stockpiles avoids pathfinding problems. Keep raw-material piles near their source (a wood pile by the treeline, a limestone pile by the quarry face), a small input shelf within a few tiles of each workstation, and food storage underground where temperatures run coldest."
      }
    }
  ]
};

export default function StockpileOptimizationPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">

      <h1 className="chapter-heading">Going Medieval Stockpile Optimization</h1>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-6">
        <span className="drop-cap">H</span>auling is the invisible tax on every colony in Going Medieval. A
        settler who walks thirty tiles to fetch clay, thirty back to a stockpile, and twenty more to the kiln
        has spent most of the job walking — and the default 6×6 "everything pile" from the tutorial guarantees
        that outcome at scale. The fix is three mechanics the game gives you but never explains together:
        <strong className="text-ink"> stockpile priority</strong> (which silently reshuffles goods between
        storage), <strong className="text-ink">shelves and racks</strong> (which triple your storage density),
        and <strong className="text-ink">decay control</strong> (roofs, floors, and cold cellars). This guide
        uses the exact shelf and rack capacities plus measured cold storage temperatures to build a
        storage network that runs itself.
      </p>

      {/* Storage furniture */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Shelves and Racks: Exact Capacities</h2>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        Update #1 (Shelves &amp; Racks, version 0.5.31.8) added purpose-built storage furniture, and the patch
        notes state exact pile counts for every piece. A ground stockpile tile holds one pile per tile; every
        entry below beats that density — and settlers prefer pulling production inputs from shelves, which
        makes a shelf next to a workstation a self-feeding buffer.
      </p>

      <table className="parchment-table mb-8">
        <thead>
          <tr>
            <th>Storage Furniture</th>
            <th>Capacity</th>
            <th>Holds</th>
            <th>Research Required</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Shelf</td>
            <td>3 piles</td>
            <td>Food, textiles, medicine</td>
            <td>Preserving Food</td>
          </tr>
          <tr>
            <td>Bookshelf</td>
            <td>4 piles</td>
            <td>Books (Chronicles, Textbooks, Theses)</td>
            <td>Furniture</td>
          </tr>
          <tr>
            <td>Wall Bookshelf</td>
            <td>3 piles</td>
            <td>Books; attaches to a wall</td>
            <td>Furniture</td>
          </tr>
          <tr>
            <td>Weapon Rack</td>
            <td>3 weapons / shields</td>
            <td>Weapons and shields</td>
            <td>Furniture</td>
          </tr>
          <tr>
            <td>Armour Rack</td>
            <td>1 head + 1 body item</td>
            <td>Armour and apparel</td>
            <td>Furniture II</td>
          </tr>
          <tr>
            <td>Chest</td>
            <td>2 items</td>
            <td>Clothing, hats, armour, weapons</td>
            <td>Furniture II</td>
          </tr>
          <tr>
            <td>Ground stockpile tile</td>
            <td>1 pile</td>
            <td>Anything you allow in its settings</td>
            <td>None (Zone menu, F7)</td>
          </tr>
        </tbody>
      </table>

      <figure className="mb-8">
        <img
          src="/images/stockpile-optimization.png"
          alt="Bar chart of Going Medieval storage capacity per tile: ground stockpile 1 pile, chest 2, armour rack 2, shelf 3, wall bookshelf 3, weapon rack 3, bookshelf 4 piles"
          className="w-full rounded-lg border border-[#3d3528]"
          loading="lazy"
        />
        <figcaption className="mt-2 text-center text-sm text-ink-light font-serif">
          Piles stored per tile of floor space. Even the humble
          shelf triples ground-stockpile density; the bookshelf quadruples it.
        </figcaption>
      </figure>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        Two quality-of-life mechanics shipped in the same update and belong in every storage plan. First,
        <strong className="text-ink"> copy/paste settings</strong>: copying a stockpile now copies its filter
        settings too, and you can paste settings onto shelves and racks — anything the target cannot hold is
        automatically dismissed, so a meat filter pasted onto a bookshelf simply drops the meat. Second, the
        <strong className="text-ink"> priority drop-down</strong> on every stockpile, shelf, and rack — which
        deserves its own section, because it changes hauling behaviour colony-wide.
      </p>

      {/* Priority mechanics */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Stockpile Priority: The Silent Conveyor Belt</h2>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        The priority rules are precise: settlers always haul to the
        <strong className="text-ink"> highest-priority valid stockpile first</strong>, and — this is the part
        most players miss — they will <strong className="text-ink">move resources from lower-priority storage
        to higher-priority storage on their own</strong>, including onto shelves and racks. Set a weapon rack
        to very high priority and your haulers will keep it perpetually stacked. Priority picks the
        <em>destination</em>; it does not reorder the hauling job itself.
      </p>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        That auto-transfer behaviour lets you build a two-tier storage network with zero micromanagement:
        big, low-priority bulk yards near the resource sources, and small, high-priority buffer shelves beside
        the workshops. Settlers top up the buffers from the yards as part of normal hauling, so your cook,
        smith, and tailor almost never leave their stations:
      </p>

      <table className="parchment-table mb-8">
        <thead>
          <tr>
            <th>Tier</th>
            <th>Priority Setting</th>
            <th>Location</th>
            <th>What It Holds</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bulk yard</td>
            <td>Low / Normal</td>
            <td>Next to the source — treeline, quarry face, fields</td>
            <td>Raw logs, limestone, clay, harvested crops in volume</td>
          </tr>
          <tr>
            <td>Workshop buffer</td>
            <td>High / Very High</td>
            <td>Shelf or 2–4 tile stockpile a few steps from the workstation</td>
            <td>Only that station's inputs — a kiln shelf gets clay, nothing else</td>
          </tr>
          <tr>
            <td>Finished goods</td>
            <td>Normal</td>
            <td>Beside the producing workshop or near the trading spot</td>
            <td>Bricks, planks, meals, armour — ready to build with or sell</td>
          </tr>
          <tr>
            <td>Cold cellar</td>
            <td>High</td>
            <td>One level underground, clay-walled</td>
            <td>Fresh food only; see the decay table below</td>
          </tr>
        </tbody>
      </table>

      <div className="aged-border p-4 mb-8">
        <p className="font-serif text-base text-ink-light leading-relaxed">
          <strong>Two gotchas.</strong> One: settlers will not move an item off a
          stockpile unless a <em>second</em> stockpile accepts that category — if bones keep landing in your
          food pile, the fix is a corpse-and-bones yard, not more filtering on the food pile. Two: leave a
          one-tile gap between walls and stockpiles; piles flush against walls cause pathfinding problems for
          settlers working around them.
        </p>
      </div>

      {/* Decay */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Decay: What Each Storage Type Actually Buys You</h2>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        Everything on a stockpile is racing a decay timer, and the timer runs at different speeds depending on
        where the pile sits. The in-game tutorial itself tells you to place stockpiles under roofs or inside
        to slow decay; measured cellar temperatures anchor the underground end of the
        spectrum:
      </p>

      <table className="parchment-table mb-8">
        <thead>
          <tr>
            <th>Storage Situation</th>
            <th>Decay Protection</th>
            <th>Best For</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bare ground, open sky</td>
            <td>None — full decay speed</td>
            <td>Stone, ore, and other materials you barely care about</td>
          </tr>
          <tr>
            <td>Floor under the pile</td>
            <td>Slows decay versus bare ground</td>
            <td>Day-one stockpiles; build the floor first, then zone the pile (avoids a relocating-piles bug)</td>
          </tr>
          <tr>
            <td>Roofed or indoors</td>
            <td>Slows decay further (official tutorial advice)</td>
            <td>Textiles, weapons, tools, furniture</td>
          </tr>
          <tr>
            <td>Underground, 1 level dirt overhead</td>
            <td>5.8°C measured — cold slows food decay</td>
            <td>The day-one larder; better than any surface room</td>
          </tr>
          <tr>
            <td>Finished cold cellar (clay walls, wood floor, large room)</td>
            <td>2.2°C measured; ~2°C held during a 32°C summer</td>
            <td>The colony's fresh-food reserve</td>
          </tr>
          <tr>
            <td>Pickled vegetables (salt + stove)</td>
            <td>Needs no cold storage at all</td>
            <td>Overflow harvests; cellar-space relief</td>
          </tr>
        </tbody>
      </table>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        The full construction walkthrough — wall insulation values, room size, and support spans — lives in
        our <a href="/winter-food-storage" className="text-vermillion hover:underline">winter food storage
        guide</a>, and the preservation pipeline is in the{' '}
        <a href="/food-preservation-guide" className="text-vermillion hover:underline">food preservation
        guide</a>. The stockpile-side lesson is simply: <em>perishables earn the expensive real estate</em>.
        A limestone block can sit in the rain all year; a cabbage cannot.
      </p>

      {/* SVG layout */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">An Efficient Storage Layout, Top-Down</h2>
      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        The pattern that falls out of the mechanics: bulk yards sit against the map's resource edges, the
        workshop block occupies the centre with a buffer shelf per station, and the food chain runs downward
        into a cold cellar. Every arrow below is a hauling trip that the priority system handles automatically
        once the tiers are set.
      </p>
      <figure className="my-6">
        <svg viewBox="0 0 760 440" className="w-full rounded-lg border border-gray-700" role="img"
          aria-label="Top-down diagram of an efficient Going Medieval storage layout with bulk yards at the resource edges, a central workshop block with buffer shelves, a food cellar underground, and hauling flow arrows between them">
          <rect x="0" y="0" width="760" height="440" fill="#1a1510" />

          {/* workshop block */}
          <rect x="280" y="120" width="200" height="180" fill="#242018" stroke="#3d3528" strokeWidth="2" />
          <text x="380" y="142" fill="#e0d4c0" fontSize="13" textAnchor="middle" fontWeight="600">workshop block</text>
          {[0, 1].map((r) => [0, 1, 2].map((c) => (
            <g key={`ws${r}${c}`}>
              <rect x={296 + c * 58} y={156 + r * 62} width="46" height="26" fill="#3d3528" stroke="#241f16" />
              <rect x={296 + c * 58} y={186 + r * 62} width="46" height="16" fill="#d4943a" opacity="0.85" />
            </g>
          )))}
          <text x="380" y="322" fill="#a89878" fontSize="11" textAnchor="middle">stations (grey) + buffer shelves (amber, high priority)</text>

          {/* bulk yards */}
          <rect x="40" y="60" width="150" height="80" fill="#241f16" stroke="#3d3528" strokeWidth="2" />
          <text x="115" y="96" fill="#a89878" fontSize="12" textAnchor="middle">wood yard</text>
          <text x="115" y="112" fill="#5f8a5a" fontSize="11" textAnchor="middle">← treeline</text>
          <rect x="40" y="300" width="150" height="80" fill="#241f16" stroke="#3d3528" strokeWidth="2" />
          <text x="115" y="336" fill="#a89878" fontSize="12" textAnchor="middle">stone &amp; clay yard</text>
          <text x="115" y="352" fill="#8a7a5a" fontSize="11" textAnchor="middle">← quarry face</text>
          <rect x="570" y="60" width="150" height="80" fill="#241f16" stroke="#3d3528" strokeWidth="2" />
          <text x="645" y="96" fill="#a89878" fontSize="12" textAnchor="middle">crop yard</text>
          <text x="645" y="112" fill="#8a9a5a" fontSize="11" textAnchor="middle">fields →</text>
          <rect x="570" y="300" width="150" height="80" fill="#241f16" stroke="#3d3528" strokeWidth="2" />
          <text x="645" y="336" fill="#a89878" fontSize="12" textAnchor="middle">corpse &amp; bones</text>
          <text x="645" y="352" fill="#b05c3f" fontSize="11" textAnchor="middle">downwind, far from food</text>

          {/* cellar */}
          <rect x="300" y="360" width="160" height="56" fill="#1a1510" stroke="#d4a840" strokeWidth="2" strokeDasharray="6 4" />
          <text x="380" y="384" fill="#d4a840" fontSize="12" textAnchor="middle" fontWeight="600">cold cellar (one level down)</text>
          <text x="380" y="402" fill="#a89878" fontSize="11" textAnchor="middle">fresh food · 2–6°C · high priority</text>

          {/* arrows: yards -> workshop */}
          <path d="M 190 100 C 240 110 250 140 280 165" fill="none" stroke="#a89878" strokeWidth="2" strokeDasharray="5 4" />
          <path d="M 190 340 C 240 330 250 300 280 265" fill="none" stroke="#a89878" strokeWidth="2" strokeDasharray="5 4" />
          <path d="M 570 100 C 520 110 510 140 480 165" fill="none" stroke="#a89878" strokeWidth="2" strokeDasharray="5 4" />
          {/* arrow: crop yard -> cellar */}
          <path d="M 620 140 C 580 240 500 330 460 375" fill="none" stroke="#d4a840" strokeWidth="2" strokeDasharray="5 4" />
          {/* arrow: workshop -> cellar (meals) */}
          <path d="M 380 300 L 380 355" fill="none" stroke="#d4a840" strokeWidth="2" strokeDasharray="5 4" />

          {/* legend */}
          <g transform="translate(40, 424)">
            <rect x="0" y="-11" width="20" height="11" fill="#241f16" stroke="#3d3528" />
            <text x="26" y="0" fill="#a89878" fontSize="11">bulk yard (low priority)</text>
            <rect x="180" y="-11" width="20" height="11" fill="#d4943a" />
            <text x="206" y="0" fill="#a89878" fontSize="11">buffer shelf (high priority)</text>
            <rect x="392" y="-11" width="20" height="11" fill="#1a1510" stroke="#d4a840" strokeDasharray="4 3" />
            <text x="418" y="0" fill="#a89878" fontSize="11">cold cellar (underground)</text>
            <line x1="588" y1="-6" x2="612" y2="-6" stroke="#a89878" strokeWidth="2" strokeDasharray="5 4" />
            <text x="618" y="0" fill="#a89878" fontSize="11">auto hauling flow</text>
          </g>
        </svg>
        <figcaption className="mt-2 text-center text-sm text-gray-400">
          Distance does the work: bulk yards touch the sources, buffers touch the stations, and the priority
          system shuffles goods between the tiers without a single manual order.
        </figcaption>
      </figure>

      {/* Daily operation */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Running the Network Day to Day</h2>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        Three habits keep the system clean. <strong className="text-ink">Filter aggressively:</strong> a
        stockpile that accepts everything attracts everything, including the bones and carcasses that belong
        in the downwind yard — and remember settlers need a valid second destination before they will
        relocate anything. <strong className="text-ink">Un-forbid your starting supplies:</strong> the
        scenario spawn goods are forbidden by default (the hand-and-X icon), and settlers will ignore them
        until you allow each pile — double-click selects every pile of that type at once. And
        <strong className="text-ink"> build floors before stockpiles</strong>: laying floor under an existing
        pile can trigger the relocating-piles bug where settlers loop loading and unloading; floor first,
        zone second.
      </p>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-8">
        Scale the network with the job system, not with more piles. One settler on high-priority hauling keeps
        a two-tier network topped up for a mid-size colony; if buffers run dry while the yards are full, the
        answer is another hauler or a shorter yard-to-workshop distance, not a bigger buffer. Pair this layout
        with the <a href="/work-priorities-setup" className="text-vermillion hover:underline">work priorities
        guide</a> and the <a href="/best-workshop-layout" className="text-vermillion hover:underline">workshop
        layout guide</a> — the +20% Workshop room bonus matters far more when the crafter never leaves the room.
      </p>

      {/* FAQ */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Frequently Asked Questions</h2>

      <div className="aged-border p-4 mb-4">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">How does stockpile priority work in Going Medieval?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          Every stockpile, shelf, and rack has a priority drop-down added in the Shelves &amp; Racks update.
          Settlers always haul to the highest-priority valid stockpile first, and they actively move resources
          from lower-priority storage to higher-priority storage — including onto shelves and racks. A rack
          set to very high priority stays perpetually stacked. Priority chooses the destination, not the
          hauling job's urgency.
        </p>
      </div>

      <div className="aged-border p-4 mb-4">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">Do items decay on stockpiles in Going Medieval?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          Yes. Resources on bare ground outdoors decay, and the official tutorial advises roofing stockpiles
          or moving them inside to slow decay; a floor under the pile helps too. Food is temperature-driven:
          an underground cellar measured at 2.2°C preserves food far longer than any surface
          room, while pickled vegetables need no cold storage at all.
        </p>
      </div>

      <div className="aged-border p-4 mb-4">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">Are shelves better than stockpiles in Going Medieval?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          For dense storage, yes — a shelf holds 3 piles of food, textiles, or medicine on one tile, triple a
          ground tile's density. Shelves come from Preserving Food research; bookshelves (4 piles) and weapon
          racks (3 weapons) from Furniture; armour racks and chests from Furniture II. Settlers also
          prioritize shelf goods for production, so a shelf beside a workstation acts as a self-feeding
          buffer.
        </p>
      </div>

      <div className="aged-border p-4 mb-4">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">Why won't my settlers move items off a stockpile in Going Medieval?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          Usually because no other stockpile accepts that item category — settlers will not
          relocate goods without a valid destination. Create a second stockpile that allows the item and the
          transfer happens on its own. Also check the item isn't forbidden (hand-and-X icon), which blocks
          hauling entirely.
        </p>
      </div>

      <div className="aged-border p-4 mb-8">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">Where should I place stockpiles in Going Medieval?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          Adjacent to the workshops that consume the goods, with one tile of clearance from walls — piles
          flush against walls cause pathfinding problems. Keep bulk yards near
          their sources, a small high-priority buffer shelf within a few tiles of each workstation, and food
          storage one level underground where measured temperatures run 2–6°C.
        </p>
      </div>

      {/* Related Guides */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Related Guides</h2>
      <ul className="list-disc pl-6 mb-8 space-y-2 font-serif text-base text-ink-light">
        <li><a href="/winter-food-storage" className="text-vermillion hover:underline">Winter Food Storage — cold cellar temperatures and winter food math</a></li>
        <li><a href="/food-preservation-guide" className="text-vermillion hover:underline">Food Preservation Guide — smoking, pickling, and shelf-stable food</a></li>
        <li><a href="/best-workshop-layout" className="text-vermillion hover:underline">Best Workshop Layout — the +20% room bonus your buffers feed</a></li>
        <li><a href="/work-priorities-setup" className="text-vermillion hover:underline">Work Priorities Setup — staffing the hauling tier</a></li>
        <li><a href="/production-chain-optimization" className="text-vermillion hover:underline">Production Chain Optimization — the full raw-to-finished pipeline</a></li>
        <li><a href="/storage-guide" className="text-vermillion hover:underline">Storage Guide — stockpile fundamentals and zoning basics</a></li>
        <li><a href="/root-cellar" className="text-vermillion hover:underline">Root Cellar — detailed cellar construction walkthrough</a></li>
      </ul>

      <p className="font-serif text-sm text-ink-muted leading-relaxed mt-8 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
        Last updated: July 19, 2026. Values may shift with game updates.
      </p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  );
}
