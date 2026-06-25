
export default function BeginnersPage() {
  return (
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-10">
            <section>
              <h1 className="chapter-heading">Beginner's Guide</h1>
              <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
                Welcome to Going Medieval! This is a medieval colony simulation game where you lead a group of settlers building a settlement in the wilderness. This tutorial will take you from zero and walk you through the first 10 days — the most critical opening phase. Following this guide, you'll have a fully functional starting colony. Data below is based on community experience and is for reference only.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Day 1: Site Selection & Camp</h2>
              <div className="flex gap-5 items-start mb-4">
                <span className="step-number">1</span>
                <div>
                  <p className="font-serif text-sm text-ink-light leading-relaxed">
                    When the game starts, first survey the map. Look for a spot near a river, on elevated ground, with trees and rocks nearby. Press Z to view terrain height — a hillside is ideal, allowing both above-ground building and underground excavation.
                  </p>
                </div>
              </div>
              <div className="flex gap-5 items-start mb-4">
                <span className="step-number">2</span>
                <div>
                  <p className="font-serif text-sm text-ink-light leading-relaxed">
                    Once a site is chosen, immediately order tree chopping (select trees and designate for removal). Simultaneously have settlers gather sticks and stones from the ground. The first batch of wood goes toward a temporary shelter — a 4x4 tile wood-walled enclosure with one wooden door and 3 beds inside.
                  </p>
                </div>
              </div>
              <div className="flex gap-5 items-start">
                <span className="step-number">3</span>
                <div>
                  <p className="font-serif text-sm text-ink-light leading-relaxed">
                    Designate a stockpile zone next to the shelter (create a zone and set it to stockpile) and move initial supplies inside. By the end of Day 1, make sure every settler has a bed to sleep in and the stockpile is established.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Day 2-3: Farming & Water</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Day 2 prioritizes farmland. Near your shelter and close to water, designate an 8x8 planting zone and choose cabbage (fast growing, 6 days to harvest). Also designate a second 6x6 barley field. Ensure the fields have water for irrigation — being near a river provides automatic irrigation.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                Build a stove (requires stone) and begin processing food. Early on, you can eat cabbage raw, but research bread-making as soon as possible — bread from barley has a longer shelf life and better mood bonuses. Assign one settler as the dedicated cook.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Day 4-5: Research Table & Defense</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                On Day 4, build a research table (requires wood and stone). Assign your highest-Intelligence settler to begin researching — prioritize unlocking Agriculture tech (clay brick walls) and Construction tech (stone walls). Research is a long-term investment; the earlier you start, the better.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                Simultaneously, begin building perimeter defenses. Enclose the core colony area (shelter + fields + stockpile) with wooden walls, at least 2 levels high. Place wooden spike traps 2 tiles in front of the gate. Craft 2-3 bows with sufficient arrows and have your highest-Combat-skill settler practice shooting.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Day 6-8: Expansion & Optimization</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                At this stage, the colony is starting to stabilize. Begin expanding underground — excavate a stockpile area (4x6 tiles) below your shelter and move food underground for storage. Build a carpentry table and start crafting furniture to improve living quality. Add a table and chair to each bedroom.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                If any settlers are idle, send them hunting to gather leather and meat. Leather is used for armor; meat gets processed into smoked meat. If a merchant visits, trade surplus food for iron ore or medicine.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Day 9-10: Facing Your First Challenge</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Within the first 10 days, you may face your first small-scale raid (2-3 enemies). By now you should have wooden walls, bows, and traps. When a raid hits: recall all settlers inside the walls, archers take wall positions, melee fighters hold the gate. Use traps to wear enemies down — avoid reckless sorties.
              </p>
              <div className="aged-border p-5" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                <p className="font-serif text-sm text-ink leading-relaxed">
                  <strong className="text-vermillion">First 10 Days Goal Checklist:</strong>
                  &#10003; Wood-walled shelter (3 beds) &#10003; 8x8 farm field &#10003; Research table &#10003; Perimeter wall + traps
                  &#10003; Bows x3 &#10003; Underground stockpile &#10003; Stove &#10003; Carpentry table &#10003; 300+ food reserves
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
              <div className="faq-item">
                <details>
                  <summary>How many settlers should I start with?</summary>
                  <p>3-4 settlers is the recommended start. With 3, you can cover basic work (building, farming, cooking). With 4, you have one extra for dedicated research or combat. Too few settlers means low efficiency; too many means high food consumption and complex management. Expand through recruitment once the colony stabilizes.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>What should I research first?</summary>
                  <p>Prioritize Agriculture tech to unlock clay brick walls. Clay bricks are much stronger than wood, and the material (mud) is easy to obtain. Next, Construction tech to unlock stone walls for further defense upgrades.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>My settlers are always unhappy. What should I do?</summary>
                  <p>A common beginner issue. Three quick improvements: 1) Ensure food is processed (bread/stew) — raw food lowers mood; 2) Give each settler an individual bedroom with a table and chair; 3) Plant barley and brew beer ASAP — beer is the best mood booster.</p>
                </details>
              </div>
            </section>
          </div>

          <aside className="lg:w-[35%] space-y-8 shrink-0">
            <div className="field-sidebar-block">
              <h3 className="font-display text-lg font-semibold text-ink mb-4">10-Day Milestones</h3>
              <ul className="space-y-2 font-serif text-sm text-ink-light">
                <li>&#10003; Wood shelter + 3 beds</li>
                <li>&#10003; 8x8 cabbage field</li>
                <li>&#10003; 6x6 barley field</li>
                <li>&#10003; Research table active</li>
                <li>&#10003; Perimeter wall (2 levels high)</li>
                <li>&#10003; Spike traps x5</li>
                <li>&#10003; Bows x3 + arrows</li>
                <li>&#10003; Underground stockpile</li>
                <li>&#10003; Stove + carpentry table</li>
                <li>&#10003; 300+ food</li>
              </ul>
            </div>
            <div className="journal-card p-5">
              <h3 className="font-display text-base font-semibold text-ink mb-3">Beginner Mistakes to Avoid</h3>
              <ul className="space-y-2 font-serif text-sm text-ink-light">
                <li>&bull; Don't build too big — enough is enough</li>
                <li>&bull; Food first, defense second</li>
                <li>&bull; Start researching as early as possible</li>
                <li>&bull; Underground storage is key</li>
                <li>&bull; Don't sally out during raids</li>
              </ul>
            </div>
          </aside>
        </div>
      </main>
  );
}
