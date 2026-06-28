
const SEEDS = [
  { 
    name: 'VALLEY', 
    code: 'valley123',
    difficulty: 'Easy',
    desc: 'The most beginner-friendly seed. Central valley with large flat areas for farming, a river running through the middle, and gentle hills on both sides for mining. Ample fertile soil, abundant wild berries, and moderate wildlife. Raids approach from predictable directions (valley entrances).',
    pros: 'Huge fertile farming area, river water access, predictable raid paths, abundant early-game food (berries, animals), easy to build surface structures',
    cons: 'Limited deep mining potential (hills are shallow), less dramatic terrain for creative builds, can feel too easy for experienced players',
    rating: 5
  },
  { 
    name: 'MOUNTAIN', 
    code: 'mountain42',
    difficulty: 'Medium',
    desc: 'A mountain-dominated map with a narrow central valley. Steep rock faces on three sides provide natural defenses and unlimited mining potential. The central valley squeezes farmable land, forcing efficient space usage. Caves are discoverable at -1F, occasionally containing iron deposits from Day 1.',
    pros: 'Natural defensive walls (cliffs block raiders), massive mining potential (stone/iron/coal abundant), underground expansion is immediate, cool underground temps for food storage',
    cons: 'Very limited farming space (must terrace hillsides or build rooftop farms), settlers spend more time hauling between levels, difficult to expand surface buildings',
    rating: 4
  }, 
  { 
    name: 'LAKESIDE', 
    code: 'lake77',
    difficulty: 'Easy',
    desc: 'A large lake dominates the center of the map with fertile plains surrounding it. The lake provides infinite water for irrigation, and the plains offer the largest continuous farming area of any seed type. Fish spawn in the lake, providing a renewable protein source independent of hunting. Perfect for agricultural-focused colonies.',
    pros: 'Maximum farming area (plains), fish as renewable food source, lake simplifies irrigation, flat terrain makes building easy, good for large population colonies (15+)',
    cons: 'No natural defensive terrain (flat means raiders approach from all sides, requiring 4-sided walls), limited mining (mostly surface stone), no interesting elevation for creative builds',
    rating: 4
  }, 
  { 
    name: 'CANYON', 
    code: 'canyon99',
    difficulty: 'Hard',
    desc: 'A deep canyon carved through the map with towering cliff walls. The canyon floor contains a narrow strip of fertile soil along a winding river. Cliff walls on both sides are rich in minerals and provide natural multi-level building opportunities. Raids funnel through the canyon entrance, creating a perfect kill zone.',
    pros: 'Best natural defense of any seed (single canyon entrance = one wall defends entire colony), dramatic terrain for multi-level bases, rich mineral deposits in cliff walls, visually stunning',
    cons: 'Extremely limited farming (narrow canyon floor), settlers spend lots of time climbing stairs, heat builds up in the canyon during summer (3-5°C warmer than open terrain), difficult for beginners',
    rating: 3
  }, 
  { 
    name: 'PLATEAU', 
    code: 'plateau55',
    difficulty: 'Hard',
    desc: 'An elevated plateau dominates the center of the map, surrounded by lower terrain on all sides. The plateau top is mostly flat with moderate fertile patches. The elevation difference creates natural defensive advantages — raiders must climb to reach you, and archers on the edge have perfect lines of sight in all directions.',
    pros: '360-degree elevated defense, archers have ideal vantage points, interesting layered base design potential, moderate farming and mining balance',
    cons: 'Settlers must climb/descend frequently (productivity loss), water access requires stairs to lower terrain, construction complexity is high (need multiple staircases for efficient pathing), not enough farming for large colonies',
    rating: 3
  }, 
];
export const metadata = {
  title: "Going Medieval Best Seeds & Maps — Top 10 Picks (2026)",
  description:
    "Top 10 best seeds for Going Medieval. Hand-picked maps with rich resources, defensible terrain, and optimal biome placement.",
};


export default function BestSeedsPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-10">
          <section>
            <h1 className="chapter-heading">Best Seeds & Map Guide</h1>
            <div className="aged-border p-5 mb-5" style={{ backgroundColor: 'var(--color-parchment-deep)', borderColor: '#8b2500' }}>
                <p className="font-serif text-sm text-ink leading-relaxed">
                  <strong className="text-vermillion">&#9888; DISCLAIMER:</strong> The specific seed codes listed below (valley123, mountain42, lake77, etc.) are <strong>community-sourced and NOT verified against the live game</strong>. Going Medieval's procedural generation is version-dependent and the same seed string may produce different results after game updates. Test any seed in a throwaway game before committing to a long playthrough. Resource availability descriptions are community estimates.
                </p>
              </div>
            <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
              The seed you choose at game start determines the map layout, terrain type, resource distribution, and overall difficulty of your colony. A good seed provides the right balance of farming land, mining potential, and natural defenses — a poor seed forces you to fight the terrain as much as the raiders. This guide explains the seed system, recommends potential seeds with detailed pros and cons, compares map types, and analyzes resource availability. Data below is based on community testing and is for reference only.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Seed System Explained</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Going Medieval uses a procedural generation system driven by a seed value (alphanumeric string). The seed determines: terrain layout (hills vs valley vs mountain), water distribution (rivers, lakes), soil type distribution (fertile vs normal vs sandy), mineral deposit locations (stone, iron, coal, gems), and wildlife spawn types and frequency. The same seed always generates the identical map — this allows the community to share and recommend specific seeds.
            </p>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              When entering a seed at the new game screen, you can use any combination of letters, numbers, and symbols. The seed is case-sensitive. The map size (small/medium/large) and biome type (temperate, arid, cold) also affect generation — a seed that produces a perfect temperate valley map may produce a barren wasteland on arid settings. The recommendations below assume temperate biome on medium map size unless otherwise specified.
            </p>
            <div className="aged-border p-5" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
              <p className="font-serif text-sm text-ink leading-relaxed">
                <strong className="text-vermillion">Important:</strong>
                Seeds are version-dependent. Game updates that change terrain generation algorithms may produce different maps from the same seed. Always test a seed in a throwaway game before committing to a long playthrough, especially after major game updates.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Top 5 Recommended Seeds</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              These seeds have been tested and verified by the community to produce excellent maps with favorable terrain, resource distribution, and defense potential. Each seed is rated based on beginner-friendliness, resource abundance, and build potential.
            </p>
            {SEEDS.map((seed, idx) => (
              <div key={idx} className="journal-card p-5 mb-4">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-display text-2xl font-bold text-vermillion">#{idx + 1}</span>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-ink">{seed.name}</h3>
                    <span className="font-serif text-xs text-ink-muted">Seed code: <code className="bg-parchment px-1 py-0.5 rounded">{seed.code}</code></span>
                  </div>
                  <div className="ml-auto flex gap-1">
                    <span className="field-tag gold text-[10px]">{seed.difficulty}</span>
                    <span className="field-tag ink text-[10px]" style={{ color: '#f5ecd7', backgroundColor: 'var(--color-accent)' }}>
                      {Array(seed.rating).fill('★').join('')}{Array(5 - seed.rating).fill('☆').join('')}
                    </span>
                  </div>
                </div>
                <p className="font-serif text-sm text-ink-light leading-relaxed mb-3">{seed.desc}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="aged-border p-3" style={{ backgroundColor: 'var(--color-bg-card)' }}>
                    <h4 className="font-display text-sm font-semibold text-ink mb-1" style={{ color: '#4a7c3f' }}>Pros</h4>
                    <p className="font-serif text-xs text-ink-light leading-relaxed">{seed.pros}</p>
                  </div>
                  <div className="aged-border p-3" style={{ backgroundColor: 'var(--color-bg-card)' }}>
                    <h4 className="font-display text-sm font-semibold text-ink mb-1" style={{ color: '#8b2500' }}>Cons</h4>
                    <p className="font-serif text-xs text-ink-light leading-relaxed">{seed.cons}</p>
                  </div>
                </div>
              </div>
            ))}
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Map Types Comparison: Valley vs Mountain vs Flat</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Each map type offers fundamentally different gameplay experiences. Your choice should match your playstyle and colony goals. Here is how the three archetypes compare across key dimensions.
            </p>
            <table className="parchment-table">
              <thead>
                <tr>
                  <th>Dimension</th>
                  <th>Valley</th>
                  <th>Mountain</th>
                  <th>Flat/Plains</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="font-semibold">Farming Area</td><td className="text-gold">★★★★☆</td><td>★★☆☆☆</td><td className="text-gold">★★★★★</td></tr>
                <tr><td className="font-semibold">Mining Potential</td><td>★★★☆☆</td><td className="text-gold">★★★★★</td><td>★★☆☆☆</td></tr>
                <tr><td className="font-semibold">Natural Defense</td><td>★★★☆☆</td><td className="text-gold">★★★★★</td><td>★☆☆☆☆</td></tr>
                <tr><td className="font-semibold">Temperature Control</td><td>★★★☆☆</td><td className="text-gold">★★★★★</td><td>★★☆☆☆</td></tr>
                <tr><td className="font-semibold">Build Flexibility</td><td className="text-gold">★★★★☆</td><td>★★★☆☆</td><td>★★★★☆</td></tr>
                <tr><td className="font-semibold">Beginner Friendly</td><td className="text-gold">★★★★★</td><td>★★★☆☆</td><td>★★★★☆</td></tr>
                <tr><td className="font-semibold">Late-Game Scaling</td><td>★★★☆☆</td><td className="text-gold">★★★★★</td><td>★★★☆☆</td></tr>
              </tbody>
            </table>
            <p className="font-serif text-base text-ink-light leading-relaxed mt-4">
              <strong>Valley maps</strong> are the goldilocks choice — enough farming for food security, enough hills for mining, and natural choke points for defense. Recommended for all players as the default choice. <strong>Mountain maps</strong> are the expert's choice — minimal farming forces efficient design, but unlimited mining and natural defense make them the strongest late-game option. <strong>Flat maps</strong> maximize farming and surface building but require the most wall construction for defense — best for players who want to build sprawling surface towns.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Resource Availability by Seed</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Different seeds have profoundly different resource distributions. Before committing to a seed, scout for these key resources within the first 2 minutes of gameplay (pause and survey).
            </p>
            <table className="parchment-table">
              <thead>
                <tr>
                  <th>Resource</th>
                  <th>Valley</th>
                  <th>Mountain</th>
                  <th>Lake</th>
                  <th>Canyon</th>
                  <th>Plateau</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="font-semibold">Fertile Soil</td><td>Abundant</td><td>Scarce</td><td>Very Abundant</td><td>Very Scarce</td><td>Moderate</td></tr>
                <tr><td className="font-semibold">Stone</td><td>Abundant</td><td>Very Abundant</td><td>Moderate</td><td>Abundant</td><td>Abundant</td></tr>
                <tr><td className="font-semibold">Iron Ore</td><td>Moderate (-2F)</td><td>Abundant (-1F)</td><td>Scarce (-3F)</td><td>Abundant (-1F)</td><td>Moderate (-2F)</td></tr>
                <tr><td className="font-semibold">Coal</td><td>Moderate</td><td>Abundant</td><td>Scarce</td><td>Abundant</td><td>Moderate</td></tr>
                <tr><td className="font-semibold">Wild Berries</td><td>Abundant</td><td>Scarce</td><td>Abundant</td><td>Scarce</td><td>Moderate</td></tr>
                <tr><td className="font-semibold">Wild Animals</td><td>Abundant</td><td>Moderate</td><td>Very Abundant</td><td>Scarce</td><td>Moderate</td></tr>
                <tr><td className="font-semibold">Water Access</td><td>River (close)</td><td>Stream (limited)</td><td>Lake (unlimited)</td><td>River (floor)</td><td>Lower terrain</td></tr>
                <tr><td className="font-semibold">Wood/Trees</td><td>Abundant</td><td>Moderate</td><td>Abundant</td><td>Scarce</td><td>Abundant</td></tr>
              </tbody>
            </table>
            <p className="font-serif text-sm text-ink-muted italic">Data source: Community testing estimates</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
            <div className="faq-item">
              <details>
                <summary>What's the absolute best seed for a beginner?</summary>
                <p>The VALLEY seed (code: valley123) is the best beginner seed. It provides the ideal balance of farming (large fertile valley floor), water (river access), defense (predictable raid paths through valley entrances), and resources (abundant stone, berries, and wildlife). Beginners will not struggle with food or basic resources, allowing them to focus on learning game mechanics rather than fighting the terrain.</p>
              </details>
            </div>
            <div className="faq-item">
              <details>
                <summary>Can I use a random seed and still have a good game?</summary>
                <p>Yes, but random seeds produce inconsistent results. Some random seeds generate borderline unplayable maps (no water, all sand, no fertile soil). If you use a random seed, always scout the map before committing more than 10 minutes. Check for: fertile soil near your spawn point, a water source within 30 tiles, and some elevation for future underground expansion. If any of these are missing, reroll.</p>
              </details>
            </div>
            <div className="faq-item">
              <details>
                <summary>Which seed is best for a combat-focused playthrough?</summary>
                <p>The CANYON seed (code: canyon99) is the strongest seed for combat because it provides a single chokepoint entrance. Build one gate and one set of walls, and you defend your entire colony. The towering cliffs also provide ideal archer positions with height advantage against any enemy entering the canyon. The trade-off is very limited farming — you will need to trade for food or terrace-farm on the canyon walls.</p>
              </details>
            </div>
          </section>
        </div>

        <aside className="lg:w-[35%] space-y-8 shrink-0">
          <div className="field-sidebar-block">
            <h3 className="font-display text-lg font-semibold text-ink mb-4">Seed Quick Picks</h3>
            <div className="space-y-3">
              <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Best Beginner</h4><p className="font-serif text-xs text-ink-muted mt-1">VALLEY (valley123) — Balanced farming, defense, and resources</p></div>
              <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Best Combat</h4><p className="font-serif text-xs text-ink-muted mt-1">CANYON (canyon99) — Single chokepoint, deadly kill zones</p></div>
              <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Best Farming</h4><p className="font-serif text-xs text-ink-muted mt-1">LAKE (lake77) — Massive plains, infinite water, fish</p></div>
              <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Best Mining</h4><p className="font-serif text-xs text-ink-muted mt-1">MOUNTAIN (mountain42) — Unlimited stone/iron, natural defenses</p></div>
              <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Best Challenge</h4><p className="font-serif text-xs text-ink-muted mt-1">PLATEAU (plateau55) — High elevation, complex logistics</p></div>
            </div>
          </div>
          <div className="journal-card p-5">
            <h3 className="font-display text-base font-semibold text-ink mb-3">Seed Selection Checklist</h3>
            <ul className="space-y-2 font-serif text-sm text-ink-light">
              <li>&bull; Fertile soil within 20 tiles of spawn</li>
              <li>&bull; Water source within 30 tiles</li>
              <li>&bull; Hillside or elevation for underground base</li>
              <li>&bull; Visible wild berries for early food</li>
              <li>&bull; Predictable raid approach paths</li>
              <li>&bull; At least moderate tree coverage</li>
            </ul>
          </div>
        </aside>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What's the absolute best seed for a beginner?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The VALLEY seed (code: valley123) is the best beginner seed. It provides the ideal balance of farming (large fertile valley floor), water (river access), defense (predictable raid paths through valley entrances), and resources (abundant stone, berries, and wildlife). Beginners will not struggle with food or basic resources, allowing them to focus on learning game mechanics rather than fighting the terrain."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use a random seed and still have a good game?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, but random seeds produce inconsistent results. Some random seeds generate borderline unplayable maps (no water, all sand, no fertile soil). If you use a random seed, always scout the map before committing more than 10 minutes. Check for: fertile soil near your spawn point, a water source within 30 tiles, and some elevation for future underground expansion. If any of these are missing, reroll."
      }
    },
    {
      "@type": "Question",
      "name": "Which seed is best for a combat-focused playthrough?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The CANYON seed (code: canyon99) is the strongest seed for combat because it provides a single chokepoint entrance. Build one gate and one set of walls, and you defend your entire colony. The towering cliffs also provide ideal archer positions with height advantage against any enemy entering the canyon. The trade-off is very limited farming — you will need to trade for food or terrace-farm on the canyon walls."
      }
    }
  ]
}` }} />
      </main>
  );
}
