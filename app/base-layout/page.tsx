
export default function BaseLayoutPage() {
  return (
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-10">
            <section>
              <h1 className="chapter-heading">Best Base Layouts & Colony Design</h1>
              <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
                A well-planned base layout is the backbone of any successful Going Medieval colony. The terrain you choose, the defenses you layer, and the room adjacencies you design determine whether your settlers thrive or collapse under the weight of raids, winter starvation, and morale breakdowns. This guide breaks down the four dominant base archetypes — starter camp, mountain stronghold, hill fort, and open-field compound — with the exact pros, cons, and settler counts where each layout performs best. Data below is based on community testing and is for reference only.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Starter Base: The Surface Camp</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Every colony begins with a surface camp — a handful of sleeping spots, a campfire, and a small stockpile zone hastily laid down before the first sunset. The starter base is not meant to last forever, but rushing its upgrade before your colony is ready wastes precious labor hours. Build a single compact structure — roughly 8x12 tiles — with sleeping spots on one end, a stockpile in the middle, and a campfire near the door for cooking. Wrap it with a wooden palisade wall at least 2 tiles high, placing a single gate facing away from known raid approaches.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                The starter base should serve 3-5 settlers for the first two seasons. Do not expand too early — every wall and door you add consumes labor that should go toward food stockpiling and basic research. Once your autumn food reserve exceeds 150 units, you can begin transitioning to a permanent base layout. The key mistake new players make is building a giant wooden longhouse with no defenses, only to watch it burn down in the first raid because no one had time to craft weapons.
              </p>
              <div className="aged-border p-5" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                <p className="font-serif text-sm text-ink leading-relaxed">
                  <strong className="text-vermillion">&#9888; Starter Base Timeline:</strong>
                  Days 1-3: Sleeping spots + stockpile + campfire. Days 4-7: Wooden walls + gate + basic traps. Days 8-14: Research bench, first crop harvest. After day 14: Begin permanent base transition.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Mountain Base: The Underground Fortress</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Mining into a mountain is arguably the strongest base layout in Going Medieval. A well-executed mountain base gives you natural stone walls on three sides, a temperature-stable interior, and raid immunity against anything but direct wall breaching. Begin by carving a main horizontal entrance corridor into the mountain face, then expand into rooms branching off the main hallway. The entrance corridor becomes your kill box — line it with spike traps, archer balconies above, and embrasures for your ranged settlers to fire through.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                The biggest advantage of a mountain base is thermal stability. Rooms carved deep into rock maintain naturally stable temperatures year-round regardless of surface temperature, eliminating the need for braziers in winter and keeping food stockpiles cold in summer. Underground bases also make raiders path through predictable chokepoints — a single well-trapped corridor can defeat raids that would overrun surface walls. The trade-off is significant labor: mining rooms is slow, requiring dedicated miners with high skill, and ventilation considerations must be addressed for settlers working deep underground. Exact temperature ranges are community estimates.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                Mountain bases work best with 6+ settlers. You need 2-3 full-time miners to excavate rooms at a reasonable pace, plus builders to install floors, torches, and furniture. For colonies under 5 settlers, the mining labor drain will prevent you from maintaining adequate food and defense.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Hill Fort: The Hybrid Approach</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                The hill fort combines the defensibility of a mountain base with the accessibility of surface construction. Find a hill with at least 3 layers of natural elevation, then flatten the hilltop into a building platform roughly 12x12 tiles. One side — usually the slope side — becomes your main entrance with walls and gates, while the other three sides retain the natural cliff elevation as unbreakable walls. Hill forts give your archers height advantage against approaching raiders, conferring a damage and accuracy bonus that turns even basic bows into reliable kill weapons.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                This layout suits 4-8 settlers perfectly. The construction labor is moderate — you need enough stone blocks for the front-facing walls and gate, but you save hundreds of blocks on the cliff sides. Build your great hall and kitchen near the entrance for settler convenience, bedroom quarters deeper on the hilltop for noise insulation, and a basement-level stockpile tunneled into the hill for temperature-controlled food storage. The hill fort excels in biomes with minimal flat terrain, like mountainous or hilly maps, where open-field building is impractical.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Open Field Layout: Room to Grow</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Building on flat terrain trades natural defenses for unlimited expansion potential. The open-field base typically consists of a central great hall surrounded by concentric or grid-aligned rooms, with a perimeter wall enclosing the entire compound. The outer wall should be 2 levels high with an internal walkway for archers, and a minimum 3-tile gap between the wall and your structures inside — this prevents raiders from climbing over and immediately smashing your storage rooms.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                Open-field layouts require the most wall-building labor but reward you with completely customizable room design. Large colonies of 8-12 settlers benefit most, as you can build specialized rooms (workshops, temples, hospitals, separate noble bedrooms) that are difficult to carve neatly into a mountain. The critical vulnerability of open-field bases is their perimeter: every additional gate is another breach point. Stick to a single main gate, reinforce it with a double-gate airlock design (two gates with a trapped corridor between them), and never add secondary gates for convenience — settlers will use them and raiders will too.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
              <div className="faq-item">
                <details>
                  <summary>Which base layout is best for beginners?</summary>
                  <p>Start with a surface camp, then transition to a hill fort on your first permanent map. Hill forts provide natural defenses with manageable construction costs. Mountain bases demand too much mining labor for new players; open-field compounds require wall construction resources beginners won't have.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>How many tiles should I leave between buildings?</summary>
                  <p>Minimum 2 tiles between structures for settler pathing, 3 tiles if you plan to grow crops between them, and 4 tiles along your outer wall interior for kill box space. Cramped colonies cause settler collision slowdowns and inefficiency.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>Can I combine base layouts?</summary>
                  <p>Absolutely. Many experienced players build a hill fort great hall with mountain-base bedroom and stockpile wings tunneled into the hill. Hybrid designs let you optimize each room type for its specific function while maintaining overall defensive cohesion.</p>
                </details>
              </div>
            </section>
          </div>

          <aside className="lg:w-[35%] space-y-8 shrink-0">
            <div className="field-sidebar-block">
              <h3 className="font-display text-lg font-semibold text-ink mb-4">Layout Quick Compare</h3>
              <table className="parchment-table">
                <thead>
                  <tr><th>Layout</th><th>Defense</th><th>Labor</th><th>Best Size</th></tr>
                </thead>
                <tbody>
                  <tr><td>Surface Camp</td><td>Low</td><td>Low</td><td>3-5 settlers</td></tr>
                  <tr><td>Mountain Base</td><td>Very High</td><td>Very High</td><td>6+ settlers</td></tr>
                  <tr><td>Hill Fort</td><td>High</td><td>Medium</td><td>4-8 settlers</td></tr>
                  <tr><td>Open Field</td><td>Medium</td><td>High</td><td>8-12 settlers</td></tr>
                </tbody>
              </table>
              <p className="font-serif text-xs text-ink-muted italic mt-2">Higher settler counts may require more specialized defense</p>
            </div>
            <div className="journal-card p-5">
              <h3 className="font-display text-base font-semibold text-ink mb-3">Base Design Principles</h3>
              <ol className="space-y-2 font-serif text-sm text-ink-light">
                <li>1. Single entrance chokepoint for raids</li>
                <li>2. Food stockpile kept underground/deep</li>
                <li>3. Bedrooms away from noisy workshops</li>
                <li>4. Kitchen adjacent to food stockpile</li>
                <li>5. Great hall central for settler gathering</li>
                <li>6. Hospital near main entrance for triage</li>
                <li>7. Workshop wing with dedicated material stockpiles</li>
              </ol>
            </div>
          </aside>
        </div>
      </main>
  );
}
