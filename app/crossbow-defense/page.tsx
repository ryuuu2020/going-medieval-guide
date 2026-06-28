export const metadata = {
  title: "Going Medieval Crossbow Defense Guide — Setup & Tips (2026)",
  description:
    "Complete crossbow defense guide for Going Medieval. Crossbowman positioning, load time management, and elite marksman strategies.",
};


export default function CrossbowDefensePage() {
  return (
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-10">
            <section>
              <h1 className="chapter-heading">Crossbow Defense Guide</h1>
              <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
                The crossbow is the armor-piercing powerhouse of Going Medieval's ranged arsenal. Where the longbow relies on volume of fire, the crossbow delivers single devastating shots that punch through plate armor and drop heavily armored raiders in one or two hits. This guide compares crossbow and longbow performance, explains armor penetration mechanics, details close-range defense with crossbows, and provides optimal settler assignment strategies. Data below is based on community combat testing and is for reference only.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Crossbow vs Longbow: Full Comparison</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Choosing between crossbow and longbow is a fundamental defense decision. Each weapon excels in different scenarios—the smart commander uses both, assigning each to the right settler and tactical situation. The comparison below highlights the key trade-offs.
              </p>
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Attribute</th>
                    <th>Longbow</th>
                    <th>Crossbow</th>
                    <th>Winner</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Base Damage</td><td>~18-22</td><td>~30-38</td><td>Crossbow</td></tr>
                  <tr><td>Armor Penetration</td><td>~15%</td><td>~45%</td><td>Crossbow</td></tr>
                  <tr><td>Fire Rate</td><td>~3 sec/shot</td><td>~6 sec/shot</td><td>Longbow</td></tr>
                  <tr><td>Max Range</td><td>~25 tiles</td><td>~22 tiles</td><td>Longbow</td></tr>
                  <tr><td>Accuracy</td><td>Good</td><td>Very Good</td><td>Crossbow</td></tr>
                  <tr><td>Research Required</td><td>No</td><td>Yes</td><td>Longbow</td></tr>
                  <tr><td>Crafting Cost</td><td>Wood x3, Rope x1</td><td>Wood x2, Iron Ingot x2</td><td>Longbow</td></tr>
                  <tr><td>Best Against</td><td>Light/unarmored enemies</td><td>Heavily armored enemies</td><td>Depends</td></tr>
                </tbody>
              </table>
              <p className="font-serif text-sm text-ink-muted italic">Data source: Community testing estimates</p>
              <p className="font-serif text-base text-ink-light leading-relaxed mt-4">
                The takeaway: longbows dominate against lightly-armored bandits and animal raids through sustained fire. Crossbows shine against the late-game heavily-armored opponents that longbow arrows simply bounce off. A mixed squad of 4 longbow archers and 2 crossbow marksmen covers all threat types.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Armor Penetration Mechanics</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Armor penetration is the crossbow's defining advantage. In Going Medieval, armor reduces incoming damage by a percentage based on the armor's rating versus the weapon's penetration value. Crossbows ignore 45% of target armor, meaning a steel-plate enemy with 80% damage reduction effectively only blocks 44% against crossbow bolts. A longbow, with only 15% penetration, would face 68% effective reduction against the same target.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                This math explains why late-game raids demand crossbows. A longbow dealing 20 base damage against 80% armor deals just 4 effective damage—it would take 25+ hits to down one armored raider. A crossbow dealing 34 base damage against 44% effective armor deals 19 effective damage—three times more lethal per hit. The difference is even more dramatic against steel-armored enemies.
              </p>
              <div className="aged-border p-5" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                <p className="font-serif text-sm text-ink leading-relaxed">
                  <strong className="text-vermillion">&#9888; Armor Penetration Priority:</strong>
                  Once your colony wealth passes the 15K threshold, raiders start appearing in plate and steel armor. If you haven't researched crossbows by this point, your longbow archers will be nearly useless against armored targets. Prioritize crossbow research as soon as you see your first armored raider.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Close-Range Crossbow Defense</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                While crossbows are most commonly used from wall positions, they also excel at close-range defense in specific scenarios. The crossbow's high single-shot damage makes it ideal for gate defense—one well-placed bolt can neutralize a raider the moment they breach the gate, giving your melee defenders a numbers advantage instantly.
              </p>
              <div className="space-y-3">
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Gate Breach Defense</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">Position 1-2 crossbow settlers 3 tiles behind the gate. When the gate breaks, pause, target the lead raider with both crossbows simultaneously. The combined 60-76 damage often kills the breach leader instantly, buying time for melee defenders to re-form.</p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Indoor Ambush Point</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">Design interior corridors with a sharp 90-degree turn. Station a crossbow settler just around the corner. Enemies rounding the corner enter point-blank range with no cover—crossbow bolts at this range are nearly guaranteed hits.</p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Fallback Room Defense</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">In worst-case scenarios where walls are breached, retreat crossbow users to a fortified room. Block the door with furniture and fire through chokepoints. Crossbows at close range against enemies forced through a 1-tile door are devastating.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Best Settler Assignments</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Crossbow assignment strategy differs from longbow assignment. Because crossbows fire slower but hit harder, you want your higher-Marksmanship settlers using them — the accuracy bonus ensures those precious bolts don't miss. A missed crossbow shot is a much bigger DPS loss than a missed longbow arrow. Exact skill thresholds are community guidance.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                Priority assignment: Settlers with Marksmanship 8+ get crossbows first. Settlers with Marksmanship 5-7 use longbows. Settlers below 5 should use whatever is available or focus on melee. For a colony with 2 crossbows available, assign them to your two best marksmen and station them on the wall towers with the best sightlines. Never give a crossbow to a low-skill settler—the slow fire rate combined with poor accuracy wastes the weapon's potential entirely. Crossbow users should also have a melee sidearm; when enemies close to point-blank, switch to melee rather than trying to reload under pressure.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
              <div className="faq-item">
                <details>
                  <summary>Is crossbow worth the research cost?</summary>
                  <p>Absolutely, for mid-to-late game. The research cost is moderate compared to the defensive power gain. Crossbows transform your ability to handle armored raiders. If you're consistently seeing raiders in plate or steel armor, the crossbow research is the highest-priority tech on your tree.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>How many crossbows should I craft?</summary>
                  <p>For a 8-10 settler colony, craft 2-3 crossbows. You want enough to handle armored priority targets but not so many that your overall fire rate suffers. The ideal ranged squad is 60% longbow, 40% crossbow. More than 3 crossbows typically leads to fire rate problems unless you have 8+ archers total.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>Crossbow vs trebuchet—can crossbows destroy siege engines?</summary>
                  <p>Crossbows deal moderate damage to siege engines but are not the ideal counter. Trebuchets have high structure HP and crossbow bolts do reduced damage against structures. Send melee settlers on a sortie to destroy trebuchets; use crossbows to pick off the engineers operating the siege equipment rather than targeting the engine itself.</p>
                </details>
              </div>
            </section>
          </div>

          <aside className="lg:w-[35%] space-y-8 shrink-0">
            <div className="field-sidebar-block">
              <h3 className="font-display text-lg font-semibold text-ink mb-4">Crossbow Quick Stats</h3>
              <div className="space-y-3">
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Base Damage</h4><p className="font-serif text-xs text-ink-muted mt-1">30-38 per hit</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Armor Penetration</h4><p className="font-serif text-xs text-ink-muted mt-1">45% (ignores nearly half armor)</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Fire Rate</h4><p className="font-serif text-xs text-ink-muted mt-1">~6 seconds per shot (slow)</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Crafting Cost</h4><p className="font-serif text-xs text-ink-muted mt-1">Wood x2, Iron Ingot x2</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Research Required</h4><p className="font-serif text-xs text-ink-muted mt-1">Crossbow technology (mid-tier)</p></div>
              </div>
            </div>
            <div className="journal-card p-5">
              <h3 className="font-display text-base font-semibold text-ink mb-3">Ideal Ranged Squad Loadout</h3>
              <div className="space-y-2 font-serif text-sm text-ink-light">
                <div className="flex justify-between"><span>6 Archers Total:</span></div>
                <div>&bull; 4 Longbow (Marksmanship 5-7)</div>
                <div>&bull; 2 Crossbow (Marksmanship 8+)</div>
                <div className="mt-2">Ratio: 2 longbow : 1 crossbow for sustained DPS with armor-piercing capability.</div>
              </div>
            </div>
          </aside>
        </div>
      </main>
  );
}
