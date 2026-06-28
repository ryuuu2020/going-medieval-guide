
export const metadata = {
  title: "Going Medieval Research Tech Tree — Complete Guide (2026)",
  description:
    "Complete research guide. Tech tree, unlock order, research points, branch recommendations.",
  keywords: [
    "going medieval research",
    "going medieval tech tree",
    "going medieval research guide",
    "going medieval unlock order",
  ],
};

export default function ResearchPage() {
  return (
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-10">
            <section>
              <h1 className="chapter-heading">Research Tech Tree</h1>
              <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
                The research system is the key pathway to unlocking advanced buildings, weapons, and facilities in Going Medieval. Using research tables, you spend research points to progressively unlock technologies on the tech tree. A smart research order maximizes colony development efficiency with limited resources. This guide provides recommended unlock routes and detailed breakdowns of each tech branch. Data below is based on community compilation and is for reference only.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Research Basics</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Research requires building a research table and assigning settlers with high Intelligence to work at it. Research points accumulate through settler work at the table, with speed determined by the settler's Intelligence and the table's tier. The basic research table is slow; upgrading dramatically boosts research speed.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                Research is divided into multiple branches: Construction Tech, Agriculture Tech, Military Tech, Crafting Tech, and Medical Tech. Each branch has its own tech tree, and some advanced technologies require unlocking prerequisites first. Choose research directions based on your colony's current needs rather than blindly unlocking everything.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Recommended Unlock Order</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Below is a community-validated efficient research route, ordered by priority. Early-game focuses on survival; mid-game strengthens defense; late-game pursues comprehensive development.
              </p>
              <div className="space-y-4">
                <div className="journal-card p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="step-number">1</span>
                    <h4 className="font-display text-lg font-semibold text-ink">Agriculture Tech (Priority)</h4>
                  </div>
                  <p className="font-serif text-sm text-ink-light">Unlocks clay brick walls, advanced crop planting, and irrigation systems. Food is the foundation of colony survival — secure food first. Clay brick walls are stronger than wood and are the best early upgrade choice.</p>
                </div>
                <div className="journal-card p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="step-number">2</span>
                    <h4 className="font-display text-lg font-semibold text-ink">Construction Tech</h4>
                  </div>
                  <p className="font-serif text-sm text-ink-light">Unlocks stone walls, stone gates, and brick construction. Stone walls have over 3x the durability of wood — essential for mid-game defense. Also unlocks food processing facilities like the smokehouse.</p>
                </div>
                <div className="journal-card p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="step-number">3</span>
                    <h4 className="font-display text-lg font-semibold text-ink">Military Tech</h4>
                  </div>
                  <p className="font-serif text-sm text-ink-light">Unlocks crossbows, iron weapons, and leather armor. Mid-to-late game raids increase in scale, requiring stronger military response. The crossbow is a devastating wall defense weapon.</p>
                </div>
                <div className="journal-card p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="step-number">4</span>
                    <h4 className="font-display text-lg font-semibold text-ink">Crafting Tech</h4>
                  </div>
                  <p className="font-serif text-sm text-ink-light">Unlocks the blacksmith table, loom, and advanced crafting recipes. Iron tools and cloth clothing boost settler work efficiency and mood.</p>
                </div>
                <div className="journal-card p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="step-number">5</span>
                    <h4 className="font-display text-lg font-semibold text-ink">Medical Tech</h4>
                  </div>
                  <p className="font-serif text-sm text-ink-light">Unlocks herb gardens, apothecary tables, and advanced medicine. Combat casualties are inevitable — a solid medical system sustains your fighting strength.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Optimizing Research Speed</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Research speed is affected by multiple factors. First is settler Intelligence — settlers with 15+ Intelligence research about 1.5x faster than average. Second is the research table tier; upgrading the table requires stone and iron ingots but the efficiency gain is substantial.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                Practical tips: Assign 2 settlers to research simultaneously to stack research points. Place bookshelves near the research table (+10% research efficiency). Keep settler mood above 50 — low mood reduces work efficiency. Provide adequate food and rest for researchers; fatigue and hunger interrupt research.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
              <div className="faq-item">
                <details>
                  <summary>How do I earn research points?</summary>
                  <p>Research points accumulate automatically through settler work at the research table. There are no shortcuts, so building a research table early and assigning dedicated researchers is key. Higher Intelligence settlers produce points faster.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>What should I research first?</summary>
                  <p>It's strongly recommended to research Agriculture Tech first to unlock clay brick walls and advanced crops, followed by Construction Tech to unlock stone walls. These two branches directly boost your colony's survivability and defense — the best early-game investments.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>How many research tables do I need?</summary>
                  <p>One research table is enough early on. Mid-game, build 2 and assign 2 researchers to work simultaneously. Upgraded research tables are dramatically more efficient but costly — upgrade when resources are plentiful.</p>
                </details>
              </div>
            </section>
          </div>

          <aside className="lg:w-[35%] space-y-8 shrink-0">
            <div className="field-sidebar-block">
              <h3 className="font-display text-lg font-semibold text-ink mb-4">Tech Branches</h3>
              <div className="space-y-3">
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Agriculture</h4><p className="font-serif text-xs text-ink-muted mt-1">Clay bricks, irrigation, advanced crops</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Construction</h4><p className="font-serif text-xs text-ink-muted mt-1">Stone walls, brick walls, smokehouse</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Military</h4><p className="font-serif text-xs text-ink-muted mt-1">Crossbow, iron sword, leather armor</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Crafting</h4><p className="font-serif text-xs text-ink-muted mt-1">Blacksmith table, loom</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Medical</h4><p className="font-serif text-xs text-ink-muted mt-1">Herb garden, apothecary table</p></div>
              </div>
            </div>
            <div className="journal-card p-5">
              <h3 className="font-display text-base font-semibold text-ink mb-3">Research Tips</h3>
              <ul className="space-y-2 font-serif text-sm text-ink-light">
                <li>&bull; Assign settlers with 15+ Intelligence to research</li>
                <li>&bull; Bookshelves near research table: +10% efficiency</li>
                <li>&bull; 2 simultaneous researchers stack points</li>
                <li>&bull; Keep mood 50+ to avoid efficiency loss</li>
                <li>&bull; Priority: Agriculture &rarr; Construction &rarr; Military</li>
              </ul>
            </div>
          </aside>
        </div>
      </main>
  );
}
