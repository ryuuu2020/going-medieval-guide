{/* Meta description: Going Medieval food preservation guide — smokehouse smoked meat, salted pickled vegetables at the stove, cold storage cellar temperatures and insulation values, plus a harvest-to-winter processing plan. */}
export const metadata = {
  title: "Going Medieval Food Preservation Guide — Smoking, Pickling & Cold Storage (2026)",
  description:
    "Every food preservation method in Going Medieval: smokehouse smoked meat, pickled vegetables with salt at the stove, cold storage cellar temperatures and thermal insulation values, and a season-by-season processing plan.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do you preserve food in Going Medieval?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Three ways: cold, smoke, and salt. A dug-out underground cellar slows decay for everything stored in it — a finished cellar gets down to 2.2°C. A smokehouse converts raw meat into smoked meat, which keeps far longer. And a stove with salt turns vegetables into pickled vegetables, which do not need cold storage at all. A resilient colony uses all three."
      }
    },
    {
      "@type": "Question",
      "name": "Do pickled vegetables need cold storage in Going Medieval?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Pickled vegetables do not need to be placed in cold storage and do not ferment. They are made at a stove from vegetables and salt, and they cook into stews exactly like fresh vegetables — so every tile of cabbage or beet you pickle is one that frees up cellar space and survives a heatwave."
      }
    },
    {
      "@type": "Question",
      "name": "What is the best way to store meat in Going Medieval?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Smoke it. Raw meat is the most fragile food in the game and rots fast even in a cellar; a smokehouse converts it into smoked meat, a stable winter ration. Hunt heavily in autumn, run the smokehouse continuously, and store the output in your cellar as a hedge on top of your vegetable harvest. Only keep raw meat you plan to cook within a day or two."
      }
    },
    {
      "@type": "Question",
      "name": "Why is my food rotting in storage in Going Medieval?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Almost always temperature. Surface stockpiles follow outdoor weather, and summer heat accelerates decay — food effectively cooks in the sun. Move perishables underground: even a basic one-level cellar sits around 5.8°C versus summer peaks above 30°C. Also check for heat sources (torches, braziers, candles) in the room, and remember cooked meals spoil too — produce meals to demand, not in bulk."
      }
    },
    {
      "@type": "Question",
      "name": "When should I start preserving food for winter in Going Medieval?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Autumn, the moment the final harvests start coming in — and the smokehouse should already be running on autumn hunts before that. Winter lasts 12 days, so the target is at least 12 meals (144 raw food) per settler in stable form: cellar-stored vegetables, smoked meat, and pickled vegetables. Preservation done in winter is too late; the raw ingredients will already be rotting or frozen in the ground."
      }
    }
  ]
};

export default function FoodPreservationGuidePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">

      <h1 className="chapter-heading">Going Medieval Food Preservation Guide</h1>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-6">
        <span className="drop-cap">E</span>very harvest in Going Medieval starts rotting the moment it leaves
        the ground. Freshness ticks down constantly, heat makes it tick faster, and a summer stockpile is
        less a pantry than a countdown. Preservation is the art of moving food out of that countdown — into a
        cellar cold enough to slow it, into a smokehouse that converts fragile raw meat into stable rations,
        or into salt, which produces pickled vegetables that never need cold storage at
        all. This guide covers each method with the real numbers, then the seasonal workflow that ties them
        together.
      </p>

      {/* Methods Section */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">The Three Preservation Methods</h2>

      <table className="parchment-table mb-8">
        <thead>
          <tr>
            <th>Method</th>
            <th>Station / Structure</th>
            <th>Input → Output</th>
            <th>Storage Requirement</th>
            <th>Best For</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cold storage</td>
            <td>Underground cellar (dig down, add walls, floor, shelves)</td>
            <td>Any perishable → slower decay</td>
            <td>The cellar itself; finished rooms reach ~2–4°C</td>
            <td>Fresh vegetables, dairy, raw ingredients awaiting the kitchen</td>
          </tr>
          <tr>
            <td>Smoking</td>
            <td>Smokehouse (crafting station)</td>
            <td>Raw meat → smoked meat</td>
            <td>Keeps far longer than raw meat; cellar optional</td>
            <td>Autumn hunt surplus; winter protein</td>
          </tr>
          <tr>
            <td>Pickling</td>
            <td>Stove + salt</td>
            <td>Vegetables + salt → pickled vegetables</td>
            <td>None — no cold storage needed</td>
            <td>Cabbage/carrot/beet surplus; heatwave-proof stores</td>
          </tr>
        </tbody>
      </table>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        The methods stack rather than compete. <strong className="text-ink">Cold storage</strong> is the
        default for everything fresh — it buys time but never stops the clock entirely.
        <strong className="text-ink"> Smoking</strong> is a conversion, not a delay: raw meat is the most
        perishable food in the game, and smoked meat is a stable ration, so the smokehouse should run
        continuously whenever hunters are bringing in carcasses. <strong className="text-ink">Pickling</strong>{' '}
        is your insurance policy: salt is mined or traded for, and each batch of pickled vegetables is food
        that cannot be lost to a broken cellar, a heatwave, or a hauler strike. Pickled vegetables cook into
        stews just like fresh ones, so there is no kitchen penalty for converting your surplus.
      </p>

      <div className="aged-border p-4 mb-8">
        <p className="font-serif text-base text-ink-light leading-relaxed">
          <strong>Meals spoil too.</strong> Cooked meals are perishable items, so mass-cooking in autumn
          just moves the rot from the stockpile to the meal stack. Cook to demand — set meal bills with a
          small buffer — and keep the bulk of your winter reserves in stable form: cellar vegetables,
          smoked meat, pickles. Your <a href="/kitchen-design" className="text-vermillion hover:underline">kitchen</a>{' '}
          should sit next to the cellar stairs to shorten the haul.
        </p>
      </div>

      {/* Cold storage numbers */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Cold Storage: Temperatures and Insulation, Measured</h2>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        Decay speed tracks room temperature, so the quality of your cellar is a number, not a vibe. Cold storage testing measured how construction choices move that number —
        the short version is that walls and floors beat depth.
      </p>

      <table className="parchment-table mb-8">
        <thead>
          <tr>
            <th>Material / Choice</th>
            <th>Thermal Insulation</th>
            <th>Measured Effect</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Wicker grated floor</td>
            <td>0.05</td>
            <td>Room stayed at the level default (5.5°C)</td>
          </tr>
          <tr>
            <td>Wood flooring</td>
            <td>0.75</td>
            <td>Slightly colder than bare ground (5.2°C vs 5.5°C in test)</td>
          </tr>
          <tr>
            <td>Limestone / clay tile floor</td>
            <td>0.8</td>
            <td>Best floor insulation identified in testing</td>
          </tr>
          <tr>
            <td>Clay wall</td>
            <td>0.9</td>
            <td>Dropped a test room from ~5.5°C to 3.8°C</td>
          </tr>
          <tr>
            <td>Dirt (natural walls)</td>
            <td>0.95</td>
            <td>Highest listed value, but underperforms built walls — clay-lined room was ~2°C colder than the dirt equivalent</td>
          </tr>
        </tbody>
      </table>

      <figure className="mb-8">
        <img
          src="/images/food-preservation-guide.png"
          alt="Bar chart of Going Medieval thermal insulation values: wicker grated floor 0.05, wood flooring 0.75, limestone and clay tile floor 0.8, clay wall 0.9, natural dirt 0.95, with a note that built clay walls outperform bare dirt in practice"
          className="w-full rounded-lg border border-[#3d3528]"
          loading="lazy"
        />
        <figcaption className="mt-2 text-center text-sm text-ink-light font-serif">
          Listed thermal insulation values (higher = better on paper). The trap: natural dirt's 0.95
          underperforms a built 0.9 clay wall in-game — a clay-lined cellar tested about 2°C colder.
        </figcaption>
      </figure>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        Combine the lessons and the ceiling is impressive: the best build — a large room, clay walls,
        wood floor — held <strong className="text-ink">2.2°C</strong>, and stayed near 2°C through a 32°C
        summer. Two supporting rules: never put heat sources (braziers, torches, candles) in the room, and
        respect structural stability — a dug-out span wider than 7 tiles caves in without support posts. In
        winter, open the door or add a window to pull the room below freezing; ice cut in winter can then be
        used to hold summer temperatures down, though ice cannot push a room below 0°C. The full build
        walkthrough is in our <a href="/winter-food-storage" className="text-vermillion hover:underline">winter
        food storage guide</a> and <a href="/root-cellar" className="text-vermillion hover:underline">root
        cellar guide</a>.
      </p>

      {/* Seasonal workflow */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">The Seasonal Preservation Workflow</h2>

      <table className="parchment-table mb-8">
        <thead>
          <tr>
            <th>Season</th>
            <th>Preservation Work</th>
            <th>Why</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Spring</td>
            <td>Dig the cellar; research Preserving Food for shelves; smoke whatever the hunters bring in</td>
            <td>Early game meat spoils fastest; the cellar pays off from the first harvest onward</td>
          </tr>
          <tr>
            <td>Summer</td>
            <td>Haul harvests underground immediately; cook to demand only; keep the smokehouse running</td>
            <td>Summer heat (30°C+) accelerates decay — surface stockpiles are the main cause of lost food</td>
          </tr>
          <tr>
            <td>Autumn</td>
            <td>Peak processing season: smoke every carcass, pickle vegetable surplus with salt, fill the cellar</td>
            <td>Last chance to convert before winter; target 12+ meals per settler (144 raw food) in stable form</td>
          </tr>
          <tr>
            <td>Winter</td>
            <td>Open the cellar to freeze it; hunt when weather allows; ration fresh items first, preserved last</td>
            <td>Freezing all but pauses decay; eat the countdown items before the stable ones</td>
          </tr>
        </tbody>
      </table>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-8">
        The ordering principle is simple: <strong className="text-ink">eat down the perishability ladder</strong>.
        Raw meat and fresh produce first, cooked meals as made, cellar vegetables through winter, and smoked
        meat and pickles as the reserve that sees you into spring. Colonies starve in February not because
        they grew too little, but because they ate the stable food in November and watched the fresh food rot
        in December. Pair this workflow with the{' '}
        <a href="/farming-calendar" className="text-vermillion hover:underline">farming calendar</a>{' '}
        and <a href="/best-crops-for-each-season" className="text-vermillion hover:underline">seasonal crop
        choices</a> so the cellar fills on schedule, and keep hunters busy with our{' '}
        <a href="/hunting-strategy" className="text-vermillion hover:underline">hunting strategy guide</a>.
      </p>

      {/* FAQ Section */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Frequently Asked Questions</h2>

      <div className="aged-border p-4 mb-4">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">How do you preserve food in Going Medieval?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          Three ways: cold, smoke, and salt. A dug-out underground cellar slows decay for everything stored
          in it — a finished cellar gets down to 2.2°C. A smokehouse converts raw meat into
          smoked meat, which keeps far longer. And a stove with salt turns vegetables into pickled
          vegetables, which do not need cold storage at all. A resilient colony uses all
          three.
        </p>
      </div>

      <div className="aged-border p-4 mb-4">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">Do pickled vegetables need cold storage in Going Medieval?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          No. Pickled vegetables do not need to be placed in cold storage and do not
          ferment. They are made at a stove from vegetables and salt, and they cook into stews exactly
          like fresh vegetables — so every tile of cabbage or beet you pickle is one that frees up cellar
          space and survives a heatwave.
        </p>
      </div>

      <div className="aged-border p-4 mb-4">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">What is the best way to store meat in Going Medieval?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          Smoke it. Raw meat is the most fragile food in the game and rots fast even in a cellar; a
          smokehouse converts it into smoked meat, a stable winter ration. Hunt heavily in autumn, run the
          smokehouse continuously, and store the output in your cellar as a hedge on top of your vegetable
          harvest. Only keep raw meat you plan to cook within a day or two.
        </p>
      </div>

      <div className="aged-border p-4 mb-4">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">Why is my food rotting in storage in Going Medieval?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          Almost always temperature. Surface stockpiles follow outdoor weather, and summer heat accelerates
          decay — food effectively cooks in the sun. Move perishables underground: even a basic one-level
          cellar sits around 5.8°C versus summer peaks above 30°C. Also check for heat sources (torches,
          braziers, candles) in the room, and remember cooked meals spoil too — produce meals to demand, not
          in bulk.
        </p>
      </div>

      <div className="aged-border p-4 mb-8">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">When should I start preserving food for winter in Going Medieval?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          Autumn, the moment the final harvests start coming in — and the smokehouse should already be
          running on autumn hunts before that. Winter lasts 12 days, so the target is at least 12 meals
          (144 raw food) per settler in stable form: cellar-stored vegetables, smoked meat, and pickled
          vegetables. Preservation done in winter is too late; the raw ingredients will already be rotting or
          frozen in the ground.
        </p>
      </div>

      {/* Related Guides */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Related Guides</h2>
      <ul className="list-disc pl-6 mb-8 space-y-2 font-serif text-base text-ink-light">
        <li><a href="/winter-food-storage" className="text-vermillion hover:underline">Winter Food Storage — cellar builds and winter food math</a></li>
        <li><a href="/best-crops-for-each-season" className="text-vermillion hover:underline">Best Crops for Each Season — what to grow for preserving</a></li>
        <li><a href="/farming-calendar" className="text-vermillion hover:underline">Farming Calendar — time harvests to the processing window</a></li>
        <li><a href="/root-cellar" className="text-vermillion hover:underline">Root Cellar — step-by-step cold storage construction</a></li>
        <li><a href="/hunting-strategy" className="text-vermillion hover:underline">Hunting Strategy — feed the smokehouse</a></li>
        <li><a href="/kitchen-design" className="text-vermillion hover:underline">Kitchen Design — cook to demand, next to the cellar</a></li>
        <li><a href="/brewery-guide" className="text-vermillion hover:underline">Brewery Guide — barley and redcurrants into ale, beer, and wine</a></li>
      </ul>

      <p className="font-serif text-sm text-ink-muted leading-relaxed mt-8 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
        Last updated: July 19, 2026. Exact decay rates vary with temperature events and game updates,
        so per-item shelf lives are described qualitatively.
      </p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  );
}
