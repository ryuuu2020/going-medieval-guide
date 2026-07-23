export const metadata = {
  title: "Going Medieval Best Map Seeds — How to Evaluate and Reroll (2026)",
  description:
    "Going Medieval map seed guide: how the seed input works, what terrain features a strong seed offers, evaluation criteria by playstyle, and a reroll checklist for beginners and veterans.",
  keywords: [
    "Going Medieval map seeds",
    "Going Medieval seed evaluation",
    "Going Medieval reroll",
    "Going Medieval terrain checklist",
    "Going Medieval 2026",
  ],
};

export default function BestMapSeedsPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-10">
          <section>
            <h1 className="chapter-heading">
              Going Medieval Map Seeds: How to Evaluate, Reroll, and Pick a Strong Start
            </h1>
            <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
              A map seed in Going Medieval is the single number or short string that decides
              your starting biome, terrain shape, water layout, soil fertility, and the rough
              position of stone and ore deposits. Enter the same seed twice and you get the same
              map — which is why sharing seeds matters less than learning what to look for once
              the world is generated. This page is a practical evaluation framework: how the seed
              input behaves, which terrain features actually matter for survival, and how to reroll
              quickly when a seed falls short.
            </p>
          </section>

          <figure className="mb-8">
            <img
              src="/images/best-map-seeds.png"
              alt="Grouped bar chart showing qualitative priority scores (0 = low priority, 5 = essential) for eight seed-evaluation criteria across three Going Medieval playstyles: Beginner-friendly, Castle Builder and Defense Specialist. Beginner weights water access and soil fertility highest; Castle Builder weights flat land and stone proximity; Defense Specialist weights natural chokepoints and elevation"
              className="w-full rounded-lg border border-[#3d3528]"
              loading="lazy"
            />
            <figcaption className="mt-2 text-center text-sm text-ink-light font-serif">
              Seed Evaluation Priorities by Playstyle — what a beginner, a castle builder, and a
              defense-focused player should weigh most when reading a freshly-generated map.
              Scores are qualitative rankings, not in-game statistics.
            </figcaption>
          </figure>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">
              How the Seed Input Works
            </h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              The seed field sits on the new-game creation screen. You can leave it blank for a
              fully random world, or type any value to lock the generation. Numerical seeds are
              the most reliable — short alphabetic strings are accepted by the current version but
              the engine still treats them as deterministic input. Whatever you type is read once
              at world creation and never re-rolled mid-playthrough, so changing the seed only
              works on a fresh colony.
            </p>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Three seed behaviours are worth keeping in mind. First, the same seed on different
              biome choices produces a different shape, because biome is a separate input that
              constrains the generator. Second, version updates can change the procedural rules,
              which means a seed shared before a major patch will not always match a seed shared
              after it. Third, mods that touch world generation override the seed entirely — they
              read the input but apply their own rules on top.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">
              Eight Criteria That Decide Whether a Seed Is Worth Keeping
            </h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Instead of memorising seed strings, learn the eight criteria below. Spend the first
              five in-game minutes scanning for them on the world map; if more than two are missing
              or borderline, reroll. Each row in the table below is a qualitative rule you can
              check by eye, not a hidden statistic.
            </p>
            <table className="parchment-table">
              <thead>
                <tr>
                  <th>Criterion</th>
                  <th>What to look for</th>
                  <th>Quick eyeball test</th>
                  <th>Reroll if&hellip;</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Flat buildable land</td>
                  <td>A continuous flat or near-flat patch</td>
                  <td>You can place a 20&times;20 wall ring without terraforming</td>
                  <td>The only flat strip is split by a river or cliff</td>
                </tr>
                <tr>
                  <td>Fresh water access</td>
                  <td>A river, stream, or lake within walking distance</td>
                  <td>A settler can reach water in well under a day</td>
                  <td>You are spawning in a dry inland pocket</td>
                </tr>
                <tr>
                  <td>Fertile soil</td>
                  <td>Soil tiles near the starting tile, not just in distant valleys</td>
                  <td>Several green-tinted soil clusters visible on first zoom-out</td>
                  <td>All visible soil is shallow or rocky</td>
                </tr>
                <tr>
                  <td>Stone proximity</td>
                  <td>A surface stone node or compact stone deposit near the start</td>
                  <td>You can see stone nodes from the starting tile</td>
                  <td>Stone is only deep underground and far away</td>
                </tr>
                <tr>
                  <td>Ore proximity</td>
                  <td>At least one iron or copper node within early-game reach</td>
                  <td>An ore tint is visible on the map edge or near stone</td>
                  <td>No ore tint anywhere on screen at first zoom-out</td>
                </tr>
                <tr>
                  <td>Wood availability</td>
                  <td>A tree cluster, not isolated single trees</td>
                  <td>You can mark 30+ trees without leaving the starting region</td>
                  <td>Trees are scattered one-by-one across a wide plain</td>
                </tr>
                <tr>
                  <td>Natural defense</td>
                  <td>Elevation, cliffs, or water forming a partial barrier</td>
                  <td>At least one map edge looks hard to walk through</td>
                  <td>You are standing on a pancake-flat open plain in every direction</td>
                </tr>
                <tr>
                  <td>Expansion room</td>
                  <td>Space beyond the immediate base for later castle growth</td>
                  <td>You can imagine a 40&times;40 footprint without hitting the map edge</td>
                  <td>The map edge is within one screen of the start</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">
              Priority Mix by Playstyle
            </h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              The eight criteria are not equally important to every player. A beginner values water
              and soil because early starvation is the most common loss; a castle builder cares
              first about flat land and stone because the whole plan is a permanent stone footprint;
              a defense-focused player will reroll anything that does not give a natural chokepoint
              or elevation on at least two sides. The weighting below is a starting point — adjust it
              to match what your colony actually struggles with.
            </p>
            <table className="parchment-table">
              <thead>
                <tr>
                  <th>Criterion</th>
                  <th>Beginner-friendly weight</th>
                  <th>Castle builder weight</th>
                  <th>Defense specialist weight</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Flat buildable land</td><td>High</td><td>Essential</td><td>Medium</td></tr>
                <tr><td>Fresh water access</td><td>Essential</td><td>High</td><td>Medium</td></tr>
                <tr><td>Fertile soil</td><td>Essential</td><td>Medium</td><td>Low</td></tr>
                <tr><td>Stone proximity</td><td>Medium</td><td>Essential</td><td>High</td></tr>
                <tr><td>Ore proximity</td><td>Medium</td><td>High</td><td>Medium</td></tr>
                <tr><td>Wood availability</td><td>High</td><td>Medium</td><td>Low</td></tr>
                <tr><td>Natural defense</td><td>Low</td><td>Medium</td><td>Essential</td></tr>
                <tr><td>Expansion room</td><td>Medium</td><td>High</td><td>Essential</td></tr>
              </tbody>
            </table>
            <p className="font-serif text-base text-ink-light leading-relaxed mt-4">
              Read the columns as a decision aid, not a score to add up. If two of your top-tier
              criteria fail on a generated map, reroll. If only one fails, you can usually design
              around it with early-game choices — a missing water source means digging wells
              faster; missing stone means buying it from a trade caravan until you find a node.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">
              A Two-Minute Reroll Routine
            </h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              On the world map, the seed has already decided everything before you click
              &ldquo;Start.&rdquo; Use these steps to decide quickly without committing to a slow
              colony.
            </p>
            <ol className="list-decimal pl-6 font-serif text-base text-ink-light space-y-2 mb-4">
              <li>Zoom out fully and check the map edges for water, cliffs, and forest density.</li>
              <li>Pan across the centre to find the largest continuous flat patch — this becomes your base footprint.</li>
              <li>Trace the nearest river or lake back to the flat patch and count travel days in your head.</li>
              <li>Look for soil-coloured clusters near, not far from, the flat patch.</li>
              <li>Identify any surface stone node inside the flat patch or just beyond it.</li>
              <li>Check whether at least two of the eight criteria sit in your top weighting tier; if not, reroll.</li>
            </ol>
            <p className="font-serif text-base text-ink-light leading-relaxed">
              The whole scan takes under two minutes once practised. Burning ten minutes rerolling
              up front almost always saves hours of being stuck in a bad map later — especially for
              first colonies, where an early food or stone shortage cascades into raid losses you
              cannot recover from.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-6">
              Frequently Asked Questions
            </h2>
            <div className="faq-snippets">
              <details>
                <summary>Are map seeds shareable between players?</summary>
                <p>
                  Yes, as long as both players use the same game version, the same biome choice, and
                  no world-altering mods. The seed field accepts numbers and short strings; whatever
                  you type produces the same terrain on another machine with matching inputs.
                </p>
              </details>
              <details>
                <summary>Do seeds behave the same in multiplayer as in single-player?</summary>
                <p>
                  The host&rsquo;s seed is the seed everyone plays on. World generation runs once on
                  the host before other players join, so all clients see identical terrain, water,
                  and resource placement. If a client has a mod that changes generation, the maps
                  will not match.
                </p>
              </details>
              <details>
                <summary>What is the fastest way to decide if a seed is bad?</summary>
                <p>
                  Skip detailed reading and check the two criteria most likely to kill the colony:
                  water access and stone proximity. If either is far from the starting flat patch,
                  reroll immediately. Everything else can be worked around with time and trade.
                </p>
              </details>
              <details>
                <summary>Can I evaluate a seed before committing to the colony?</summary>
                <p>
                  Yes — the world map is fully visible on the creation screen. Pan and zoom freely
                  before clicking &ldquo;Start.&rdquo; Once you confirm, the seed is locked for the
                  entire playthrough; there is no in-game way to regenerate terrain.
                </p>
              </details>
              <details>
                <summary>Do updated game versions invalidate old shared seeds?</summary>
                <p>
                  Major patches sometimes change procedural rules, so a seed that was strong on an
                  older version may look different on a newer one. Treat any shared seed as a
                  starting point: run the two-minute reroll routine before committing.
                </p>
              </details>
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-ink mb-4">Related Guides</h2>
            <div className="space-y-2">
              <a href="/biomes" className="text-accent hover:text-accent-hover underline">
                Biomes Guide &mdash; terrain types, pros and cons
              </a>
              <a href="/base-layout" className="text-accent hover:text-accent-hover underline">
                Base Layout Guide &mdash; planning the first footprint
              </a>
              <a href="/defense" className="text-accent hover:text-accent-hover underline">
                Defense Guide &mdash; reading threats before the first raid
              </a>
              <a href="/killbox-design" className="text-accent hover:text-accent-hover underline">
                Killbox Design &mdash; turning chokepoints into wins
              </a>
              <a href="/moat-design" className="text-accent hover:text-accent-hover underline">
                Moat Design &mdash; using water as a barrier
              </a>
              <a href="/winter-survival" className="text-accent hover:text-accent-hover underline">
                Winter Survival &mdash; food and heat planning from seed choice onward
              </a>
            </div>
          </section>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Are map seeds shareable between players?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, as long as both players use the same game version, the same biome choice, and no world-altering mods. The seed field accepts numbers and short strings; whatever you type produces the same terrain on another machine with matching inputs."
                }
              },
              {
                "@type": "Question",
                "name": "Do seeds behave the same in multiplayer as in single-player?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The host's seed is the seed everyone plays on. World generation runs once on the host before other players join, so all clients see identical terrain, water, and resource placement. Mods that change generation break that match."
                }
              },
              {
                "@type": "Question",
                "name": "What is the fastest way to decide if a seed is bad?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Check water access and stone proximity first. If either is far from the starting flat patch, reroll immediately. Most other gaps can be worked around with time and trade."
                }
              },
              {
                "@type": "Question",
                "name": "Can I evaluate a seed before committing to the colony?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. The world map is fully visible on the creation screen before clicking Start. Once you confirm, the seed is locked for the entire playthrough; there is no in-game way to regenerate terrain."
                }
              },
              {
                "@type": "Question",
                "name": "Do updated game versions invalidate old shared seeds?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Major patches sometimes change procedural rules, so a seed that was strong on an older version may look different on a newer one. Treat any shared seed as a starting point and run a quick reroll check before committing."
                }
              }
            ],
          }),
        }}
      />

      <p className="text-xs text-text-muted mt-12 border-t border-border-subtle pt-4">
        Last updated: July 22, 2026
      </p>
    </main>
  );
}
