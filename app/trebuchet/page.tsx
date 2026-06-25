
export default function TrebuchetPage() {
  return (
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-10">
            <section>
              <h1 className="chapter-heading">Trebuchet Guide: Build & Counter</h1>
              <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
                The trebuchet is Going Medieval's ultimate siege weapon—a long-range artillery piece that can demolish walls, towers, and enemy fortifications from a safe distance. Whether you're building your own to break enemy defenses or desperately trying to counter trebuchets targeting your colony, understanding trebuchet mechanics is essential late-game knowledge. This guide covers construction requirements, optimal placement, ammunition types, firing tactics, and proven counter-strategies. Data below is based on community combat testing and is for reference only.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Building Your Own Trebuchet</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Trebuchets require significant research investment and substantial material resources, but the payoff in offensive capability is enormous. A single trebuchet can clear an entire enemy defensive line without exposing a single settler to return fire. Construction requires a settler with high Construction skill (7+ recommended for reasonable build speed) and access to the trebuchet blueprint unlocked via research.
              </p>
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Component</th>
                    <th>Materials Required</th>
                    <th>Build Time</th>
                    <th>Skill Requirement</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Trebuchet Frame</td><td>Wood x15, Iron Ingot x4</td><td>~4 hours</td><td>Construction 5</td></tr>
                  <tr><td>Counterweight</td><td>Stone Block x8</td><td>~2 hours</td><td>Construction 5</td></tr>
                  <tr><td>Sling Assembly</td><td>Rope x3, Leather x2</td><td>~1.5 hours</td><td>Crafting 4</td></tr>
                  <tr><td>Total (Complete)</td><td>Wood x15, Iron x4, Stone x8, Rope x3, Leather x2</td><td>~7.5 hours</td><td>Construction 7+</td></tr>
                </tbody>
              </table>
              <p className="font-serif text-sm text-ink-muted italic">Data source: Community testing estimates</p>
              <p className="font-serif text-base text-ink-light leading-relaxed mt-4">
                The trebuchet is built in stages like other large structures. Place it on a flat surface with clear line of sight to the target. The firing arc requires open sky above—building under a roof or overhang will prevent operation. Once assembled, assign a settler to operate it; the operator's Construction skill affects reload speed.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Ammo Types & Damage</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Trebuchets accept different ammunition types, each suited to different tactical situations. Choosing the right ammo for the target dramatically affects efficiency. Standard stone ammunition is your workhorse, while specialized ammo types provide unique advantages.
              </p>
              <div className="space-y-3">
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Stone Boulders (Standard)</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">Damage: 120 vs structures. Materials: Stone Block x1 per shot. Effect: High structural damage, area impact within 2 tiles. Best for wall demolition and general siege work. Stockpile 30+ boulders for a sustained bombardment.</p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Flaming Boulders</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">Damage: 80 vs structures + fire spread. Materials: Stone Block x1, Oil x1. Effect: Sets target area on fire, damage over time. Best for wooden structures and creating panic. Fire spreads 3-5 tiles from impact point.</p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Explosive Shells (Late-Game)</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">Damage: 200 vs structures + 80 splash. Materials: Iron Ingot x1, Gunpowder x1. Effect: Massive area destruction. Best for concentrated enemy formations and critical wall sections. Requires advanced research.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Optimal Placement for Offense</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Trebuchet placement determines its effectiveness. The weapon has a minimum range of approximately 15 tiles—targets closer than this cannot be hit. Maximum range extends to roughly 50 tiles, with accuracy falling off after 35 tiles. The sweet spot is 20-30 tiles from the target, where accuracy and safety balance perfectly.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                When sieging an enemy settlement, place the trebuchet on elevated terrain when possible—height adds 5-10% accuracy. Protect the trebuchet with a forward defensive line of melee settlers to intercept counter-sorties. Never leave a trebuchet undefended; enemy archers can and will target your operator if they get in range. For maximum efficiency, build 2 trebuchets and stagger their fire—while one reloads, the other fires, maintaining constant pressure.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Countering Enemy Trebuchets</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                When enemy trebuchets appear in a raid, immediate action is required. A trebuchet left unchecked will methodically demolish your walls, bypassing your entire defense setup. There are three proven counter-strategies, listed in order of effectiveness.
              </p>
              <div className="space-y-3">
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Strategy 1: Sortie Strike (Recommended)</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">Send 3-4 melee settlers on a fast attack run directly to the trebuchet. Use wall archers to provide covering fire, targeting any enemies near the siege engine. Destroy the trebuchet first, then retreat your sortie team. Best when the trebuchet is within 20 tiles of your walls.</p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Strategy 2: Counter-Trebuchet</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">If you have your own trebuchet, engage in artillery duel. Target the enemy trebuchet directly. Your trebuchet should be positioned behind walls with your operator protected. This is slower but safer than a sortie. Accuracy is moderate—expect to fire 5-8 shots to destroy one enemy trebuchet.</p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Strategy 3: Bait & Tank</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">If sortie and counter-fire aren't options, reinforce the wall sections being targeted. Build a secondary wall 5 tiles behind the outer wall. When the outer wall falls, your archers on the inner wall have clear shots at the trebuchet crew. Accept that you'll lose the outer wall and budget for repairs.</p>
                </div>
              </div>
              <div className="aged-border p-5 mt-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                <p className="font-serif text-sm text-ink leading-relaxed">
                  <strong className="text-vermillion">&#9888; Trebuchet Warning:</strong>
                  Never ignore an enemy trebuchet. Walls take approximately 4-5 direct hits to breach from a trebuchet. Even a stone wall collapses in under 2 minutes of sustained trebuchet fire. The moment you see a trebuchet on the raid notification, it becomes your #1 priority target.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
              <div className="faq-item">
                <details>
                  <summary>Can trebuchets target moving enemies?</summary>
                  <p>Trebuchets are primarily anti-structure weapons. They can target ground tiles but have very poor accuracy against moving targets. Do not rely on trebuchets to hit individual enemy settlers—they're for demolishing walls, towers, and stationary siege equipment. Archers are your anti-personnel solution.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>How many trebuchets should I build?</summary>
                  <p>One is sufficient for most colonies. A second trebuchet doubles your bombardment speed but requires double the materials, ammo, and operator manpower. Build a second only if you're frequently facing enemy trebuchets and need faster counter-fire, or if you're actively sieging enemy settlements on the offensive.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>Does rain or weather affect trebuchet accuracy?</summary>
                  <p>Yes. Rain, fog, and night conditions reduce trebuchet accuracy by 10-20%. Heavy storms can drop accuracy by up to 30%. If you're planning a trebuchet attack, check weather conditions. Clear daytime weather provides optimal firing conditions.</p>
                </details>
              </div>
            </section>
          </div>

          <aside className="lg:w-[35%] space-y-8 shrink-0">
            <div className="field-sidebar-block">
              <h3 className="font-display text-lg font-semibold text-ink mb-4">Trebuchet Quick Stats</h3>
              <div className="space-y-3">
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Range</h4><p className="font-serif text-xs text-ink-muted mt-1">15-50 tiles (optimal 20-30)</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Structure Damage</h4><p className="font-serif text-xs text-ink-muted mt-1">120 per hit (stone boulder)</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Reload Time</h4><p className="font-serif text-xs text-ink-muted mt-1">~15-20 seconds</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Total Material Cost</h4><p className="font-serif text-xs text-ink-muted mt-1">Wood 15, Iron 4, Stone 8, Rope 3, Leather 2</p></div>
              </div>
            </div>
            <div className="journal-card p-5">
              <h3 className="font-display text-base font-semibold text-ink mb-3">Ammo Storage Guide</h3>
              <div className="space-y-2 font-serif text-sm text-ink-light">
                <div>&bull; Stone Boulders: Stock 30+ for sustained siege</div>
                <div>&bull; Flaming Boulders: Stock 10+ for wooden targets</div>
                <div>&bull; Explosive Shells: Stock 5+ for critical strikes</div>
                <div className="mt-2">Store ammo in a stockpile near the trebuchet to minimize operator walking time during reloads.</div>
              </div>
            </div>
          </aside>
        </div>
      </main>
  );
}
