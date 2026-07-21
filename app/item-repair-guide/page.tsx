{/* Meta description: Going Medieval item repair guide — how the update 1.1 repair system works: repair stations (Woodwork Bench, Bowyer's Bench, Sewing Station, Blacksmith's Forge, Armourer's Table), the 5-resource cost, repair vs replace economics, order filters, and XP. */}
export const metadata = {
  title: "Going Medieval Item Repair Guide — Repair Weapons, Armor & Clothes (2026)",
  description:
    "How repairing works in Going Medieval update 1.1: which station repairs what, the 5-resource cost, repair vs replace math, order filters, and the best repair strategy for every gear tier.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do you repair items in Going Medieval?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Since the Quality of Life update (1.1.7, July 2026), damaged equipment is repaired at production stations matched to its material: wood-based gear at the Woodwork Bench or Bowyer's Bench, clothing at the Sewing Station, metal weapons and armor at the Blacksmith's Forge, and anything at the Armourer's Table. Queue a repair order like any other production job, and a settler with the right skill will restore the item's hitpoints for 5 units of its base material."
      }
    },
    {
      "@type": "Question",
      "name": "How much does repairing cost in Going Medieval?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A repair costs 5 resources of the material the item is made from — 5 wood for a bow, 5 metal for a steel weapon, 5 cloth for a garment. That is a fraction of the crafting cost: a Longbow costs 40 wood to craft but only 5 wood to repair, an 87.5% saving. Repair time scales with the settler's skill and how many hitpoints the item has lost, and the worker gains a small amount of XP."
      }
    },
    {
      "@type": "Question",
      "name": "Does repairing change item quality in Going Medieval?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Repairing restores an item's hitpoints but never alters its quality tier — a Flimsy sword stays Flimsy and a Flawless one stays Flawless. This cuts both ways: repair is perfect for maintaining high-quality gear you could never afford to recraft, but for low-quality items, crafting a replacement may be the better long-term move since a new craft rolls a fresh chance at higher quality."
      }
    },
    {
      "@type": "Question",
      "name": "Which station should I use for repairs in Going Medieval?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Use the specialist station when you have it — Woodwork Bench or Bowyer's Bench for wooden equipment, Sewing Station for apparel, Blacksmith's Forge for metal gear — because those stations already sit in your production flow with the right workers assigned. The Armourer's Table is the universal option that handles every repair type, making it the best single-station setup for smaller colonies that do not want repair orders spread across four buildings."
      }
    },
    {
      "@type": "Question",
      "name": "Can you automate repairs in Going Medieval?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Repair orders support control filters: you set which equipment hitpoint threshold should be considered for repair, which quality tiers are eligible, and how damaged the raw repair materials are allowed to be. A practical setup is to repair only Good quality or better items once they fall below roughly half their hitpoints — settlers then maintain your armory automatically without wasting work on throwaway Flimsy gear."
      }
    }
  ]
};

export default function ItemRepairGuidePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">

      <h1 className="chapter-heading">Going Medieval Item Repair Guide: Fix Your Gear for 5 Resources</h1>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-6">
        <span className="drop-cap">B</span>efore the Quality of Life update (version 1.1.7, July 2026), every
        weapon, tool, and armor piece in Going Medieval was a consumable: hitpoints ticked down with use, and
        when they ran out your only option was to craft a replacement. The update added a full
        <strong className="text-ink"> repair system</strong> — production stations can now restore damaged
        equipment for a flat 5 units of its base material. That single change rewrites equipment economics:
        a Flawless heavy crossbow or a masterwork set of plate armor is no longer a ticking clock but a
        maintainable asset. This guide covers exactly how repairing works — stations, costs, timing, order
        filters, and the repair-versus-replace decisions that separate a thriving armory from a resource sink.
      </p>

      {/* How Repair Works */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">How Repairing Works</h2>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        Repairs run through the same production-order system you already use for crafting. Open a compatible
        station, queue a repair order, and a settler with the relevant skill hauls the damaged item and the
        materials over, works the station, and returns the item with its hitpoints restored. The rules are
        simple and consistent across every item type:
      </p>

      <table className="parchment-table mb-8">
        <thead>
          <tr>
            <th>Rule</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Repair cost</td>
            <td>5 resources of the item's base material (wood for bows, metal for steel gear, cloth for garments)</td>
          </tr>
          <tr>
            <td>Effect</td>
            <td>Restores the item's hitpoints</td>
          </tr>
          <tr>
            <td>Quality</td>
            <td>Unchanged — repairing never upgrades or downgrades the quality tier</td>
          </tr>
          <tr>
            <td>Repair time</td>
            <td>Scales with the worker's skill and how many hitpoints the item is missing</td>
          </tr>
          <tr>
            <td>Skill XP</td>
            <td>Repairing grants a small amount of XP to the settler doing the work</td>
          </tr>
          <tr>
            <td>Order filters</td>
            <td>Set the hitpoint threshold that qualifies items for repair, eligible quality tiers, and how worn the repair materials may be</td>
          </tr>
        </tbody>
      </table>

      <div className="aged-border p-4 mb-8">
        <p className="font-serif text-base text-ink-light leading-relaxed">
          <strong>Durability Basics:</strong> Equipment loses hitpoints through combat, work, and wear until it
          finally breaks. If you are new to the durability system itself — degradation rates, quality effects,
          and when items actually shatter — start with our{' '}
          <a href="/weapon-durability-guide" className="text-vermillion hover:underline">weapon durability guide</a>,
          then come back here for the maintenance side.
        </p>
      </div>

      {/* Repair Stations */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Repair Stations: What Goes Where</h2>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        Each station repairs the items matching its material or craft. Four stations cover the whole equipment
        catalogue, and one of them — the Armourer's Table — covers everything by itself:
      </p>

      <table className="parchment-table mb-8">
        <thead>
          <tr>
            <th>Station</th>
            <th>Repairs</th>
            <th>Typical Items</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Woodwork Bench</td>
            <td>Wood-based equipment</td>
            <td>Wooden tools, clubs, wooden shields and bucklers</td>
          </tr>
          <tr>
            <td>Bowyer's Bench</td>
            <td>Wood-based equipment</td>
            <td>Short bows, longbows, crossbows, heavy crossbows</td>
          </tr>
          <tr>
            <td>Sewing Station</td>
            <td>Clothing and apparel</td>
            <td>Shirts, gambesons, winter clothes, caps</td>
          </tr>
          <tr>
            <td>Blacksmith's Forge</td>
            <td>Metal items</td>
            <td>Swords, axes, maces, metal armor, metal helmets</td>
          </tr>
          <tr>
            <td>Armourer's Table</td>
            <td>All of the above</td>
            <td>Any repairable equipment regardless of material</td>
          </tr>
        </tbody>
      </table>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        For most colonies the practical setup is one repair-capable station per production line plus an
        Armourer's Table once your armory diversifies. The specialist benches keep repair labor inside the
        workshops where the relevant crafters already work — your bowyer repairs bows, your tailor mends
        clothes — while the Armourer's Table acts as the universal fallback for metal gear if your smith is
        busy smelting. Station placement still matters: repair jobs generate hauling trips for both the damaged
        item and the materials, so keep repair stations next to the armory or equipment rack. Layout advice is
        in our <a href="/best-workshop-layout" className="text-vermillion hover:underline">workshop layout guide</a>{' '}
        and <a href="/workshop-efficiency" className="text-vermillion hover:underline">workshop efficiency guide</a>.
      </p>

      {/* Repair vs Replace */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Repair vs Replace: The Economics</h2>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        The 5-resource flat cost makes repairing dramatically cheaper than recrafting for anything beyond
        starter gear. Using the ranged weapon line as a reference — the numbers come straight from the crafting
        recipes in our <a href="/archer-vs-crossbow" className="text-vermillion hover:underline">archer vs crossbow
        comparison</a>:
      </p>

      <table className="parchment-table mb-8">
        <thead>
          <tr>
            <th>Item</th>
            <th>Craft-New Cost</th>
            <th>Repair Cost</th>
            <th>Material Saved</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Short Bow</td>
            <td>20 wood</td>
            <td>5 wood</td>
            <td>75%</td>
          </tr>
          <tr>
            <td>Longbow</td>
            <td>40 wood</td>
            <td>5 wood</td>
            <td>87.5%</td>
          </tr>
          <tr>
            <td>Crossbow</td>
            <td>35 wood + 2 mechanical components</td>
            <td>5 wood</td>
            <td>~86% wood, 100% of components</td>
          </tr>
          <tr>
            <td>Heavy Crossbow</td>
            <td>45 wood + 3 metal + 3 mechanical components</td>
            <td>5 wood</td>
            <td>~89% wood, 100% of metal &amp; components</td>
          </tr>
        </tbody>
      </table>

      <figure className="mb-8">
        <img
          src="/images/item-repair-guide.png"
          alt="Grouped bar chart comparing craft-new cost versus repair cost in wood for four Going Medieval ranged weapons: Short Bow 20 vs 5, Longbow 40 vs 5, Crossbow 35 vs 5, Heavy Crossbow 45 vs 5, with crossbows also requiring mechanical components and metal only when crafting new"
          className="w-full rounded-lg border border-[#3d3528]"
          loading="lazy"
        />
        <figcaption className="mt-2 text-center text-sm text-ink-light font-serif">
          Craft-new wood cost (amber) versus repair cost (gold) for the ranged weapon line. Repairs never
          consume mechanical components or metal — the savings grow with item complexity.
        </figcaption>
      </figure>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        The pattern sharpens as gear gets more advanced. A crossbow's real bottleneck is its 2 mechanical
        components; a heavy crossbow burns 3 metal and 3 components on top of the wood. Repairing costs none of
        those — just 5 base material — so every repair of a component-based item effectively refunds its rare
        ingredients. For metal weapons and armor the logic is identical: recrafting means fresh ingots from the
        smelting chain, while a repair at the forge spends 5 metal. The one thing repairs never restore is
        quality, which brings us to the real decision framework.
      </p>

      <div className="aged-border p-4 mb-8">
        <p className="font-serif text-base text-ink-light leading-relaxed">
          <strong>Quality Cut-Off Rule:</strong> Repair Good quality and better without thinking — the material
          savings are enormous and a high-quality replacement roll is never guaranteed. Think twice about
          repairing Flimsy gear: a fresh craft costs more materials but rolls a new quality outcome, so for
          bottom-tier items, replacement doubles as a quality lottery ticket. Exception: if the Flimsy item is
          made from something scarce (early mechanical components, your first steel), repair it anyway.
        </p>
      </div>

      {/* Setting Up Repair Orders */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Setting Up Repair Orders</h2>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        Repair orders live in the station's production panel and support the same standing-order logic as
        crafting. Three filters control what gets repaired and with what: the <strong className="text-ink">
        hitpoint threshold</strong> (only items worn below this point qualify), the <strong className="text-ink">
        quality filter</strong> (which quality tiers are eligible), and the <strong className="text-ink">
        material condition filter</strong> (how damaged the raw materials used for repairs may be). Set them
        once and your crafters maintain the armory in the background.
      </p>

      <figure className="my-6">
        <svg viewBox="0 0 760 340" className="w-full rounded-lg border border-gray-700" role="img"
          aria-label="Flowchart of the item repair process in Going Medieval: damaged item is checked against order filters, routed to the matching station by material, repaired by a settler for five base resources, and returned to the armory with hitpoints restored and quality unchanged">
          <rect x="0" y="0" width="760" height="340" fill="#1a1510" />

          {/* Start node */}
          <rect x="30" y="130" width="140" height="70" rx="8" fill="#242018" stroke="#d4943a" strokeWidth="2" />
          <text x="100" y="158" fill="#d4943a" fontSize="13" textAnchor="middle" fontWeight="700">DAMAGED ITEM</text>
          <text x="100" y="178" fill="#a89878" fontSize="11" textAnchor="middle">hitpoints worn down</text>

          {/* Filter diamond */}
          <path d="M 255 105 L 330 165 L 255 225 L 180 165 Z" fill="#242018" stroke="#d4a840" strokeWidth="2" />
          <text x="255" y="156" fill="#d4a840" fontSize="12" textAnchor="middle" fontWeight="700">ORDER FILTER</text>
          <text x="255" y="172" fill="#a89878" fontSize="10" textAnchor="middle">HP % · quality · material</text>

          {/* Station nodes */}
          <rect x="370" y="30" width="170" height="52" rx="6" fill="#242018" stroke="#a89878" strokeWidth="1.5" />
          <text x="455" y="51" fill="#e0d4c0" fontSize="12" textAnchor="middle" fontWeight="600">Woodwork / Bowyer's Bench</text>
          <text x="455" y="68" fill="#a89878" fontSize="10" textAnchor="middle">wood-based gear — 5 wood</text>

          <rect x="370" y="100" width="170" height="52" rx="6" fill="#242018" stroke="#a89878" strokeWidth="1.5" />
          <text x="455" y="121" fill="#e0d4c0" fontSize="12" textAnchor="middle" fontWeight="600">Sewing Station</text>
          <text x="455" y="138" fill="#a89878" fontSize="10" textAnchor="middle">clothing — 5 cloth</text>

          <rect x="370" y="170" width="170" height="52" rx="6" fill="#242018" stroke="#a89878" strokeWidth="1.5" />
          <text x="455" y="191" fill="#e0d4c0" fontSize="12" textAnchor="middle" fontWeight="600">Blacksmith's Forge</text>
          <text x="455" y="208" fill="#a89878" fontSize="10" textAnchor="middle">metal gear — 5 metal</text>

          <rect x="370" y="240" width="170" height="52" rx="6" fill="#242018" stroke="#d4a840" strokeWidth="2" />
          <text x="455" y="261" fill="#d4a840" fontSize="12" textAnchor="middle" fontWeight="600">Armourer's Table</text>
          <text x="455" y="278" fill="#a89878" fontSize="10" textAnchor="middle">universal — any item, 5 of its material</text>

          {/* Result node */}
          <rect x="590" y="130" width="150" height="70" rx="8" fill="#2d261b" stroke="#6a9f5a" strokeWidth="2" />
          <text x="665" y="155" fill="#6a9f5a" fontSize="13" textAnchor="middle" fontWeight="700">ITEM RESTORED</text>
          <text x="665" y="173" fill="#a89878" fontSize="10" textAnchor="middle">full hitpoints</text>
          <text x="665" y="187" fill="#a89878" fontSize="10" textAnchor="middle">quality unchanged · small XP</text>

          {/* Arrows */}
          <defs>
            <marker id="repArrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#e0d4c0" />
            </marker>
          </defs>
          <line x1="170" y1="165" x2="178" y2="165" stroke="#e0d4c0" strokeWidth="2.5" markerEnd="url(#repArrow)" />
          <path d="M 330 165 C 350 165 350 56 366 56" fill="none" stroke="#e0d4c0" strokeWidth="2" markerEnd="url(#repArrow)" />
          <path d="M 330 165 L 366 126" fill="none" stroke="#e0d4c0" strokeWidth="2" markerEnd="url(#repArrow)" />
          <path d="M 330 165 L 366 196" fill="none" stroke="#e0d4c0" strokeWidth="2" markerEnd="url(#repArrow)" />
          <path d="M 330 165 C 350 165 350 266 366 266" fill="none" stroke="#e0d4c0" strokeWidth="2" markerEnd="url(#repArrow)" />
          <path d="M 540 56 C 580 56 620 90 640 126" fill="none" stroke="#a89878" strokeWidth="1.6" strokeDasharray="5 4" markerEnd="url(#repArrow)" />
          <path d="M 540 126 L 586 158" fill="none" stroke="#a89878" strokeWidth="1.6" strokeDasharray="5 4" markerEnd="url(#repArrow)" />
          <path d="M 540 196 L 586 172" fill="none" stroke="#a89878" strokeWidth="1.6" strokeDasharray="5 4" markerEnd="url(#repArrow)" />
          <path d="M 540 266 C 585 266 620 230 645 202" fill="none" stroke="#a89878" strokeWidth="1.6" strokeDasharray="5 4" markerEnd="url(#repArrow)" />

          {/* Legend */}
          <g transform="translate(30, 312)">
            <rect x="0" y="-10" width="14" height="14" fill="#242018" stroke="#d4943a" strokeWidth="1.5" />
            <text x="20" y="2" fill="#a89878" fontSize="12">item state</text>
            <path d="M 118 -10 L 132 -3 L 118 4 L 104 -3 Z" fill="#242018" stroke="#d4a840" strokeWidth="1.5" />
            <text x="140" y="2" fill="#a89878" fontSize="12">filter check</text>
            <rect x="232" y="-10" width="14" height="14" fill="#242018" stroke="#a89878" strokeWidth="1.5" />
            <text x="252" y="2" fill="#a89878" fontSize="12">repair station</text>
            <rect x="356" y="-10" width="14" height="14" fill="#2d261b" stroke="#6a9f5a" strokeWidth="1.5" />
            <text x="376" y="2" fill="#a89878" fontSize="12">result</text>
            <line x1="430" y1="-3" x2="462" y2="-3" stroke="#a89878" strokeWidth="1.6" strokeDasharray="5 4" />
            <text x="468" y="2" fill="#a89878" fontSize="12">repair job (settler + 5 resources)</text>
          </g>
        </svg>
        <figcaption className="mt-2 text-center text-sm text-gray-400">
          The repair pipeline: worn items are matched against your order filters, routed to the station that
          handles their material, and restored to full hitpoints for 5 base resources — quality never changes.
        </figcaption>
      </figure>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        A standing setup that works for most colonies: threshold at roughly half hitpoints, quality filter set
        to Good and above, material condition left permissive. Anything worn past the halfway mark and worth
        keeping flows into the repair queue automatically; cheap Flimsy gear is ignored and left to be replaced.
        Because repair time scales with missing hitpoints, catching items at half durability is also faster
        than rescuing them at 5% — and it avoids the awkward moment when a defender's sword shatters mid-raid.
      </p>

      {/* Strategy by Tier */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Repair Strategy by Gear Tier</h2>

      <table className="parchment-table mb-8">
        <thead>
          <tr>
            <th>Gear Tier</th>
            <th>Examples</th>
            <th>Policy</th>
            <th>Reasoning</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Starter / Flimsy</td>
            <td>Short bows, wooden shields, rough clothes</td>
            <td>Replace, don't repair (unless materials are scarce)</td>
            <td>Recrafting is cheap and re-rolls quality; repairs only make sense when wood or cloth is tight</td>
          </tr>
          <tr>
            <td>Mid / Good</td>
            <td>Longbows, crossbows, iron weapons, gambesons</td>
            <td>Repair at ~50% hitpoints</td>
            <td>5 resources beats 35–45 wood plus components every time; keeps the squad field-ready</td>
          </tr>
          <tr>
            <td>High / Superior–Flawless</td>
            <td>Heavy crossbows, steel weapons, plate armor</td>
            <td>Repair early and always</td>
            <td>Replacement costs rare materials and a lucky quality roll; a repair restores full durability for 5 metal</td>
          </tr>
          <tr>
            <td>Raid loot</td>
            <td>Captured enemy weapons and armor</td>
            <td>Repair only what your colony actually fields</td>
            <td>Repairs cost labor as well as materials; merchant-bound loot is better sold worn than fixed</td>
          </tr>
        </tbody>
      </table>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        Two colony-wide habits multiply the system's value. First, consolidate storage: one armory stockpile or
        rack near the repair stations keeps hauling time short, and settlers swap damaged gear for fresh spares
        faster when everything lives in one room — see our{' '}
        <a href="/storage-optimization" className="text-vermillion hover:underline">storage optimization guide</a>.
        Second, protect your repair-capable crafters' time: repairs compete with crafting, smelting, and
        tailoring in the same skill pools, so schedule them through{' '}
        <a href="/work-priorities-setup" className="text-vermillion hover:underline">work priorities</a> rather
        than letting repair orders bury new production. The small XP trickle from repair jobs also makes them
        decent low-risk training for apprentice crafters between bigger projects.
      </p>

      {/* FAQ Section */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Frequently Asked Questions</h2>

      <div className="aged-border p-4 mb-4">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">How do you repair items in Going Medieval?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          Since the Quality of Life update (1.1.7, July 2026), damaged equipment is repaired at production
          stations matched to its material: wood-based gear at the Woodwork Bench or Bowyer's Bench, clothing
          at the Sewing Station, metal weapons and armor at the Blacksmith's Forge, and anything at the
          Armourer's Table. Queue a repair order like any other production job, and a settler with the right
          skill will restore the item's hitpoints for 5 units of its base material.
        </p>
      </div>

      <div className="aged-border p-4 mb-4">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">How much does repairing cost in Going Medieval?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          A flat 5 resources of the item's base material — 5 wood for a bow, 5 metal for a steel weapon, 5
          cloth for a garment. That is a fraction of crafting cost: a Longbow needs 40 wood to craft but only
          5 wood to repair (87.5% saved), and repairs never consume mechanical components or other secondary
          materials. Repair time scales with the worker's skill and the hitpoints missing, and the job grants
          a small amount of XP.
        </p>
      </div>

      <div className="aged-border p-4 mb-4">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">Does repairing change item quality in Going Medieval?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          No. Repairing restores hitpoints but never touches the quality tier — a Flimsy sword stays Flimsy, a
          Flawless stays Flawless. Repair is ideal for maintaining high-quality gear you could not guarantee
          recrafting; for low-quality items, a fresh craft doubles as a new roll at a better tier, which is why
          most colonies replace Flimsy gear and repair Good-or-better gear.
        </p>
      </div>

      <div className="aged-border p-4 mb-4">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">Which station should I use for repairs in Going Medieval?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          Prefer the specialist stations — Woodwork Bench or Bowyer's Bench for wooden equipment, Sewing
          Station for apparel, Blacksmith's Forge for metal gear — because they sit inside your existing
          production lines with the right workers assigned. The Armourer's Table is the universal option that
          accepts every repair type, which makes it the best single-station answer for smaller colonies that
          do not want repair orders scattered across four buildings.
        </p>
      </div>

      <div className="aged-border p-4 mb-8">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">Can you automate repairs in Going Medieval?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          Yes. Repair orders support standing filters: set the hitpoint threshold that qualifies an item for
          repair, the quality tiers you will bother fixing, and how worn the repair materials may be. A proven
          default is Good quality and above at roughly half hitpoints — settlers then keep the armory topped up
          on their own, without wasting labor on throwaway Flimsy gear or waiting until items are about to
          break.
        </p>
      </div>

      {/* Related Guides */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Related Guides</h2>
      <ul className="list-disc pl-6 mb-8 space-y-2 font-serif text-base text-ink-light">
        <li><a href="/quality-of-life-update" className="text-vermillion hover:underline">Quality of Life Update — every change in version 1.1 explained</a></li>
        <li><a href="/weapon-durability-guide" className="text-vermillion hover:underline">Weapon Durability Guide — degradation and breakage mechanics</a></li>
        <li><a href="/archer-vs-crossbow" className="text-vermillion hover:underline">Archer vs Crossbow — crafting costs behind the repair math</a></li>
        <li><a href="/armor-layering-guide" className="text-vermillion hover:underline">Armor Layering Guide — keep your best sets worth repairing</a></li>
        <li><a href="/best-workshop-layout" className="text-vermillion hover:underline">Best Workshop Layout — station placement that shortens repair trips</a></li>
        <li><a href="/work-priorities-setup" className="text-vermillion hover:underline">Work Priorities Setup — balance repairs against new production</a></li>
      </ul>

      <p className="font-serif text-sm text-ink-muted leading-relaxed mt-8 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
        Last updated: July 19, 2026. Reflects the repair system as introduced in Going Medieval version
        1.1.7 (Quality of Life update). Game mechanics may change with future updates.
      </p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  );
}
