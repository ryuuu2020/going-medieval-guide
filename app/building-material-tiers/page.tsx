{/* Meta description: Going Medieval building material tiers — real wall hitpoints (clay 150, wood 200, limestone 300, brick 800), thermal insulation values for walls and floors, material costs, and which tier to build at each colony stage. */}
export const metadata = {
  title: "Going Medieval Building Material Tiers — HP, Insulation & Cost Data (2026)",
  description:
    "Every building material in Going Medieval ranked with real numbers: wall hitpoints (clay 150 to brick 800), thermal insulation values for walls and floors, cost per segment, and which tier your colony should build at each stage.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the best building material in Going Medieval?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Brick — either clay brick or limestone brick — is the strongest material at 800 hitpoints per wall segment, four times a wood wall (200 HP) and over five times a clay wall (150 HP). But 'best' depends on the job: clay has the highest thermal insulation of any wall (0.90), making it the best choice for bedrooms and cold storage, while wood is the fastest and cheapest to raise in year one. Use brick for fortifications, clay for temperature-critical interiors."
      }
    },
    {
      "@type": "Question",
      "name": "Which material insulates best in Going Medieval?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Clay walls have the highest thermal insulation of any buildable wall at 0.90, ahead of limestone (0.87), brick (0.85), and wood (0.80). For floors, limestone and clay tile floors insulate at 0.8, wood flooring at 0.75, and wicker grated floors at just 0.05. Community cold storage testing found built clay walls outperform even bare dirt (listed at 0.95) in practice, keeping a finished cellar around 2-4°C."
      }
    },
    {
      "@type": "Question",
      "name": "How much do walls cost in Going Medieval?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Every wall segment costs 5 units of its material: 5 wood, 5 clay, 5 limestone, 5 clay bricks, or 5 limestone bricks. The hidden cost is processing — clay bricks must be fired in a kiln and limestone bricks cut at a stonemason's bench, so a brick wall carries the labour of the whole brick production chain on top of the construction job itself."
      }
    },
    {
      "@type": "Question",
      "name": "Is clay or wood better for a first base in Going Medieval?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Wood for the perimeter, clay for the rooms. Wood walls (200 HP) are tougher than clay (150 HP) and trees are everywhere, so your first defensive ring should be wood. But clay's 0.90 insulation beats wood's 0.80, and clay is dug rather than chopped, so interior walls of bedrooms, workshops, and especially food cellars should be clay as soon as you find a deposit."
      }
    },
    {
      "@type": "Question",
      "name": "When should I upgrade from wood to stone or brick in Going Medieval?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Upgrade the perimeter to raw limestone (300 HP) in year two once mining is running, and rebuild the entrance ring, gatehouse, and keep in brick (800 HP) from year three onward. A single brick wall outlasts even a doubled limestone wall (600 HP effective) on one tile of frontage. Do not rebuild everything at once — prioritize the wall segments raiders actually attack, plus the granary and any structure whose loss would end the colony."
      }
    }
  ]
};

export default function BuildingMaterialTiersPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">

      <h1 className="chapter-heading">Going Medieval Building Material Tiers: Every Material Ranked</h1>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-6">
        <span className="drop-cap">G</span>oing Medieval gives you five wall materials and a handful of floor
        materials, and the differences between them are not cosmetic — they are the difference between a
        gatehouse that holds and one that folds, between a cellar at 2°C and one at 6°C, between bedrooms that
        keep settlers comfortable through a heat wave and ones that cook them. Each tier trades three things:
        hitpoints, thermal insulation, and the labour it takes to produce the material in the first place.
        This guide lays out the real numbers for every tier, then tells you which material belongs where.
      </p>

      {/* Wall Materials */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Wall Tiers: Hitpoints, Insulation, and Cost</h2>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        Every wall segment costs 5 units of its material, so raw cost is identical across tiers — what changes
        is how you get the material and what the finished wall can take. Clay is the weakest wall in the game
        at 150 hitpoints but the best insulator. Wood is the year-one workhorse. Raw limestone triples clay's
        durability straight out of the mine. And both brick types top out at 800 hitpoints — but only after a
        production chain turns raw clay or limestone into bricks first.
      </p>

      <table className="parchment-table mb-8">
        <thead>
          <tr>
            <th>Wall Material</th>
            <th>Hitpoints</th>
            <th>Thermal Insulation</th>
            <th>Cost per Segment</th>
            <th>Production Chain</th>
            <th>Best Use</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Clay Wall</td>
            <td>150</td>
            <td>0.90</td>
            <td>5 Clay</td>
            <td>Dig a clay deposit</td>
            <td>Bedroom, cellar, and workshop interiors</td>
          </tr>
          <tr>
            <td>Wood Wall</td>
            <td>200</td>
            <td>0.80</td>
            <td>5 Wood</td>
            <td>Chop trees</td>
            <td>Year-one perimeter, scaffolding, fast expansion</td>
          </tr>
          <tr>
            <td>Limestone Wall</td>
            <td>300</td>
            <td>0.87</td>
            <td>5 Limestone</td>
            <td>Mine a limestone deposit</td>
            <td>Mid-game perimeter and outer buildings</td>
          </tr>
          <tr>
            <td>Clay Brick Wall</td>
            <td>800</td>
            <td>0.85</td>
            <td>5 Clay Bricks</td>
            <td>Fire clay in a kiln</td>
            <td>Keep, gatehouse, granary armour</td>
          </tr>
          <tr>
            <td>Limestone Brick Wall</td>
            <td>800</td>
            <td>0.85</td>
            <td>5 Limestone Bricks</td>
            <td>Cut at a stonemason's bench</td>
            <td>Keep, gatehouse, granary armour</td>
          </tr>
        </tbody>
      </table>

      <figure className="mb-8">
        <img
          src="/images/building-material-tiers.png"
          alt="Bar chart of Going Medieval wall hitpoints per segment — clay 150, wood 200, limestone 300, clay brick 800, limestone brick 800 — with each bar annotated with its thermal insulation value from 0.80 to 0.90"
          className="w-full rounded-lg border border-[#3d3528]"
          loading="lazy"
        />
        <figcaption className="mt-2 text-center text-sm text-ink-light font-serif">
          Hitpoints per wall segment with thermal insulation annotated. The two brick tiers dominate on
          durability, but humble clay still wins the insulation crown — different walls for different jobs.
        </figcaption>
      </figure>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        The two brick tiers are statistically identical — 800 hitpoints, 0.85 insulation, 5 bricks per
        segment — so choose by geography, not stats. Clay deposits give you clay bricks via the kiln;
        limestone mountains give you limestone bricks via the stonemason's bench. Most maps favour one
        chain heavily, and doubling up on the wrong one wastes a workstation. For how these walls stack
        up when raiders actually start swinging, see{' '}
        <a href="/double-wall-vs-single-wall" className="text-vermillion hover:underline">double wall vs single wall</a>{' '}
        and the <a href="/wall-upgrade-guide" className="text-vermillion hover:underline">wall upgrade guide</a>.
      </p>

      {/* Floor Materials */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Floor Tiers: Insulation Is the Whole Game</h2>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        Floors do not take demolition damage the way walls do, so their tiers are about temperature and
        comfort rather than hitpoints. Flooring acts as insulation — a floored cellar holds the cold better
        than bare ground, and a floored bedroom loses less heat in winter. The values below come from the
        same community cold storage testing used in our{' '}
        <a href="/winter-food-storage" className="text-vermillion hover:underline">winter food storage guide</a>.
      </p>

      <table className="parchment-table mb-8">
        <thead>
          <tr>
            <th>Floor Material</th>
            <th>Thermal Insulation</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Wicker grated floor</td>
            <td>0.05</td>
            <td>Decorative / airflow; no meaningful insulation</td>
          </tr>
          <tr>
            <td>Wood flooring</td>
            <td>0.75</td>
            <td>Cheap insulated floor for living and storage rooms</td>
          </tr>
          <tr>
            <td>Limestone / clay tile floor</td>
            <td>0.80</td>
            <td>Best floor insulation; the finished-interior standard</td>
          </tr>
          <tr>
            <td>Dirt (natural, unbuilt)</td>
            <td>0.95 listed</td>
            <td>Highest listed value, but testing shows built walls and floors outperform raw dirt in practice</td>
          </tr>
        </tbody>
      </table>

      <div className="aged-border p-4 mb-8">
        <p className="font-serif text-base text-ink-light leading-relaxed">
          <strong>The dirt trap:</strong> natural dirt lists a 0.95 insulation value — higher than any built
          material — yet rooms surrounded by built clay walls run about 2°C colder
          than the same room left as raw dirt. Trust the thermometer, not the tooltip: build your
          walls and floors, even underground.
        </p>
      </div>

      {/* Which tier when */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">The Right Tier for Each Colony Stage</h2>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        Because every wall costs the same 5 units, your material choice is really a labour choice. Chopping
        wood is instant; mining limestone takes a pickaxe and a shaft; bricks take a mine <em>plus</em> a
        kiln or stonemason's bench <em>plus</em> a hauling chain. Sequence your upgrades so each tier pays
        for the next:
      </p>

      <table className="parchment-table mb-8">
        <thead>
          <tr>
            <th>Colony Stage</th>
            <th>Perimeter</th>
            <th>Interiors</th>
            <th>Why</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Year 1</td>
            <td>Wood (200 HP)</td>
            <td>Wood / clay as found</td>
            <td>Speed is everything; spend labour on food, not masonry</td>
          </tr>
          <tr>
            <td>Year 2</td>
            <td>Limestone (300 HP)</td>
            <td>Clay (0.90 insulation)</td>
            <td>Mining comes online; clay interiors fix winter comfort</td>
          </tr>
          <tr>
            <td>Year 3+</td>
            <td>Brick at the entrance ring (800 HP)</td>
            <td>Clay + tile floors (0.80)</td>
            <td>Brick production chain feeds fortifications first</td>
          </tr>
          <tr>
            <td>Endgame</td>
            <td>Double brick around the core</td>
            <td>Fully floored and decorated</td>
            <td>Surplus brick armours the keep; comfort work follows</td>
          </tr>
        </tbody>
      </table>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        Two placement rules fall out of the numbers. First, <strong className="text-ink">insulation materials
        go inside, hitpoint materials go outside</strong> — clay's 150 HP makes it a liability on any wall a
        raider can reach, while brick's mediocre 0.85 insulation is wasted on a bedroom. Second,{' '}
        <strong className="text-ink">temperature-critical rooms earn their walls first</strong>: the food
        cellar, the bedrooms, and the workshop. A cold cellar built from clay with a wood floor holds roughly
        2–4°C, which is the difference between your harvest lasting winter and rotting in November — the
        numbers are in our{' '}
        <a href="/food-preservation-guide" className="text-vermillion hover:underline">food preservation guide</a>.
      </p>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-8">
        Don't forget the structures between the walls. Stability is simulated: wide dug-out rooms cave in
        without support posts and beams, and roofs need walls or beams close enough to bear them. The
        material you choose for those supports follows the same tier logic — wood early, stone where fire
        or raiders are a threat. See{' '}
        <a href="/structural-mechanics" className="text-vermillion hover:underline">structural mechanics</a>{' '}
        for the support rules, and{' '}
        <a href="/temperature-management" className="text-vermillion hover:underline">temperature management</a>{' '}
        for putting insulation to work room by room.
      </p>

      {/* FAQ Section */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Frequently Asked Questions</h2>

      <div className="aged-border p-4 mb-4">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">What is the best building material in Going Medieval?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          Brick — either clay brick or limestone brick — is the strongest material at 800 hitpoints per wall
          segment, four times a wood wall (200 HP) and over five times a clay wall (150 HP). But "best"
          depends on the job: clay has the highest thermal insulation of any wall (0.90), making it the best
          choice for bedrooms and cold storage, while wood is the fastest and cheapest to raise in year one.
          Use brick for fortifications, clay for temperature-critical interiors.
        </p>
      </div>

      <div className="aged-border p-4 mb-4">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">Which material insulates best in Going Medieval?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          Clay walls have the highest thermal insulation of any buildable wall at 0.90, ahead of limestone
          (0.87), brick (0.85), and wood (0.80). For floors, limestone and clay tile floors insulate at 0.8,
          wood flooring at 0.75, and wicker grated floors at just 0.05. Community cold storage testing found
          built clay walls outperform even bare dirt (listed at 0.95) in practice, keeping a finished cellar
          around 2–4°C.
        </p>
      </div>

      <div className="aged-border p-4 mb-4">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">How much do walls cost in Going Medieval?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          Every wall segment costs 5 units of its material: 5 wood, 5 clay, 5 limestone, 5 clay bricks, or 5
          limestone bricks. The hidden cost is processing — clay bricks must be fired in a kiln and limestone
          bricks cut at a stonemason's bench, so a brick wall carries the labour of the whole brick production
          chain on top of the construction job itself.
        </p>
      </div>

      <div className="aged-border p-4 mb-4">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">Is clay or wood better for a first base in Going Medieval?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          Wood for the perimeter, clay for the rooms. Wood walls (200 HP) are tougher than clay (150 HP) and
          trees are everywhere, so your first defensive ring should be wood. But clay's 0.90 insulation beats
          wood's 0.80, and clay is dug rather than chopped, so interior walls of bedrooms, workshops, and
          especially food cellars should be clay as soon as you find a deposit.
        </p>
      </div>

      <div className="aged-border p-4 mb-8">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">When should I upgrade from wood to stone or brick in Going Medieval?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          Upgrade the perimeter to raw limestone (300 HP) in year two once mining is running, and rebuild the
          entrance ring, gatehouse, and keep in brick (800 HP) from year three onward. A single brick wall
          outlasts even a doubled limestone wall (600 HP effective) on one tile of frontage. Do not rebuild
          everything at once — prioritize the wall segments raiders actually attack, plus the granary and any
          structure whose loss would end the colony.
        </p>
      </div>

      {/* Related Guides */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Related Guides</h2>
      <ul className="list-disc pl-6 mb-8 space-y-2 font-serif text-base text-ink-light">
        <li><a href="/double-wall-vs-single-wall" className="text-vermillion hover:underline">Double Wall vs Single Wall — the hitpoint math for fortifications</a></li>
        <li><a href="/winter-food-storage" className="text-vermillion hover:underline">Winter Food Storage — insulation materials in the cold cellar</a></li>
        <li><a href="/food-preservation-guide" className="text-vermillion hover:underline">Food Preservation Guide — where insulation values pay off</a></li>
        <li><a href="/wall-upgrade-guide" className="text-vermillion hover:underline">Wall Upgrade Guide — sequencing the material progression</a></li>
        <li><a href="/wall-floor-material-upgrade" className="text-vermillion hover:underline">Wall &amp; Floor Material Upgrades — when to rebuild vs repair</a></li>
        <li><a href="/floor-material-guide" className="text-vermillion hover:underline">Floor Material Guide — room-by-room flooring choices</a></li>
        <li><a href="/structural-mechanics" className="text-vermillion hover:underline">Structural Mechanics — stability, supports, and cave-ins</a></li>
        <li><a href="/temperature-management" className="text-vermillion hover:underline">Temperature Management — putting insulation to work</a></li>
      </ul>

      <p className="font-serif text-sm text-ink-muted leading-relaxed mt-8 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
        Last updated: July 19, 2026. Wall hitpoints span clay 150, wood 200, limestone 300, and brick 800,
        at 5 material per segment. Game mechanics may change with future updates.
      </p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  );
}
