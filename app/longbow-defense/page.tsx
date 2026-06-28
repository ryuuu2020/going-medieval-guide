export const metadata = {
  title: "Going Medieval Longbow Defense — Archer Guide (2026)",
  description:
    "Complete longbow defense guide for Going Medieval. Archer positioning, range advantage, and ranged combat strategies.",
};


export default function LongbowDefensePage() {
  return (
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-10">
            <section>
              <h1 className="chapter-heading">Longbow Defense Strategy Guide</h1>
              <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
                The longbow is the backbone of ranged defense in Going Medieval. When placed correctly on elevated positions behind well-designed kill zones, a squad of longbow archers can thin an enemy attack wave before it ever reaches your walls. This guide covers optimal longbow placement patterns, kill-zone engineering, the mathematics of elevation bonuses, and how settler marksmanship skill translates into battlefield effectiveness. Data below is based on community combat testing and is for reference only.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Optimal Longbow Placement</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Longbow placement is the single most impactful decision in your ranged defense strategy. The longbow has a maximum effective range of approximately 25 tiles, but accuracy falls off sharply beyond 15 tiles. Your goal is to position archers so enemies spend the maximum amount of time inside the 10-15 tile "sweet spot" where accuracy and damage converge at their best ratio.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                The optimal placement pattern is the staggered wall tower: build 2-3 tile wide tower platforms that protrude from your main wall every 10-12 tiles. Each tower holds 2 archers, providing overlapping fields of fire. This arrangement means no approaching enemy can escape from at least two archers' crossfire. Towers should be 2-3 levels above ground—each level of height adds roughly 10% to both accuracy and damage.
              </p>
              <div className="aged-border p-5" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                <p className="font-serif text-sm text-ink leading-relaxed">
                  <strong className="text-vermillion">&#9888; Placement Rule of Thumb:</strong>
                  For a wall segment 30 tiles long, place 3 wall towers evenly spaced (at tile 5, 15, and 25). Each tower holds 2 archers. This gives you 6 archers covering the entire frontage with overlapping kill zones and no blind spots.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Kill-Zone Design</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                A kill zone is the area where enemies are funneled into concentrated fire. The most effective kill-zone design is the "funnel-and-bowl" approach: use walls and terrain to channel attackers into a narrow approach corridor, then position archers in a concave arc around the corridor's end. This creates a situation where archers shoot at enemies from multiple angles, and enemies cannot spread out to reduce incoming fire density.
              </p>
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Kill-Zone Type</th>
                    <th>Archers Needed</th>
                    <th>Effectiveness</th>
                    <th>Best Against</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Linear Wall</td><td>4-6</td><td>Medium</td><td>Bandit raids, animal stampedes</td></tr>
                  <tr><td>Concave Arc</td><td>6-8</td><td>High</td><td>All raid types</td></tr>
                  <tr><td>Double-Layer Funnel</td><td>8-12</td><td>Very High</td><td>Large warbands, siege towers</td></tr>
                  <tr><td>Kill-Box (Enclosed)</td><td>12+</td><td>Maximum</td><td>Endgame massive raids</td></tr>
                </tbody>
              </table>
              <p className="font-serif text-sm text-ink-muted italic">Data source: Community testing estimates</p>
              <p className="font-serif text-base text-ink-light leading-relaxed mt-4">
                The double-layer funnel is the sweet spot for mid-to-late game colonies. Construct outer walls that narrow from 8 tiles wide to 3 tiles wide over a 15-tile approach. Inside this funnel, place wooden spike traps every 2 tiles—raiders hit traps while also absorbing arrow fire. At the funnel's narrow end, station 2-3 melee defenders as the final line.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Elevation Bonuses</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Elevation is a force multiplier for longbow effectiveness. Each level of height above the target provides cumulative bonuses. The exact numbers vary slightly between game versions, but community testing consistently shows significant improvements with height advantages.
              </p>
              <div className="space-y-3">
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Level 1 Height (2 tiles above)</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">Accuracy +10%, Damage +8%, Range +2 tiles. Achievable with a simple 2-level wall. Ideal for early-game defense.</p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Level 2 Height (4 tiles above)</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">Accuracy +22%, Damage +18%, Range +4 tiles. Requires dedicated wall towers. Standard for mid-game colonies.</p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Level 3 Height (6+ tiles above)</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">Accuracy +35%, Damage +30%, Range +7 tiles. Built on natural cliffs or tall towers. Archers become devastating snipers.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Marksmanship Skill Impact</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                A settler's Marksmanship skill directly governs longbow performance. The skill affects three separate combat parameters: base accuracy, critical hit chance, and reload speed. Exact skill-to-stat mappings are community estimates — the game's internal calculations have not been verified against official data. In general, higher Marksmanship means significantly better performance.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                Priority rule: always assign your highest-Marksmanship settlers to longbow positions. A skill 10 archer on a low wall outperforms a skill 5 archer on a high tower. Train marksmanship through regular combat encounters and archery targets. Do not waste high-Marksmanship settlers on melee roles—their skill is too valuable on the walls. For a 6-archer defense line, aim to have at least 2 settlers with Marksmanship 8+, with the remaining 4 at 5+.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
              <div className="faq-item">
                <details>
                  <summary>Should I use longbow or short bow for defense?</summary>
                  <p>Longbow is strictly superior for defense. The short bow has a slightly faster fire rate but significantly less range and damage. The extra range of the longbow means you start damaging enemies sooner, getting 2-3 extra volleys before they reach your walls. Short bows are better suited for hunting animals.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>How many arrows per archer should I stock?</summary>
                  <p>A minimum of 40 arrows per archer for a standard raid, 60+ for large raids. Archers consume ammunition rapidly—a 6-archer squad can fire 100+ arrows in a prolonged engagement. Always have a backup arrow stockpile near your wall positions so archers can rearm quickly.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>Can I use longbows at night or in bad weather?</summary>
                  <p>Night and weather (rain, fog) reduce accuracy by 15-25%. Lighting near wall positions (torches, braziers) mitigates night penalties. For critical raids, try to schedule combat during daylight if possible. Bad weather penalties affect both your archers and enemy ranged attackers equally.</p>
                </details>
              </div>
            </section>
          </div>

          <aside className="lg:w-[35%] space-y-8 shrink-0">
            <div className="field-sidebar-block">
              <h3 className="font-display text-lg font-semibold text-ink mb-4">Longbow Quick Stats</h3>
              <div className="space-y-3">
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Max Range</h4><p className="font-serif text-xs text-ink-muted mt-1">~25 tiles (effective ~15 tiles, community est.)</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Base Damage</h4><p className="font-serif text-xs text-ink-muted mt-1">~18-22 per hit (unarmored, community est.)</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Fire Rate</h4><p className="font-serif text-xs text-ink-muted mt-1">~3 seconds per shot (community est.)</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Crafting Cost</h4><p className="font-serif text-xs text-ink-muted mt-1">Wood x3, Rope x1</p></div>
              </div>
            </div>
            <div className="journal-card p-5">
              <h3 className="font-display text-base font-semibold text-ink mb-3">Marksmanship Skill Tiers</h3>
              <div className="space-y-2 font-serif text-sm text-ink-light">
                <div className="flex justify-between"><span>1-3 Novice</span><span className="text-vermillion">Low accuracy, slow reload</span></div>
                <div className="flex justify-between"><span>4-6 Competent</span><span className="text-gold">Reliable for basic defense</span></div>
                <div className="flex justify-between"><span>7-9 Expert</span><span className="text-ink">Strong damage, fast reload</span></div>
                <div className="flex justify-between"><span>10+ Master</span><span className="text-gold">Devastating sniper-tier</span></div>
              </div>
            </div>
          </aside>
        </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={ __html: `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Should I use longbow or short bow for defense?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Longbow is strictly superior for defense. The short bow has a slightly faster fire rate but significantly less range and damage. The extra range of the longbow means you start damaging enemies sooner, getting 2-3 extra volleys before they reach your walls. Short bows are better suited for hunting animals."
      }
    },
    {
      "@type": "Question",
      "name": "How many arrows per archer should I stock?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A minimum of 40 arrows per archer for a standard raid, 60+ for large raids. Archers consume ammunition rapidly—a 6-archer squad can fire 100+ arrows in a prolonged engagement. Always have a backup arrow stockpile near your wall positions so archers can rearm quickly."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use longbows at night or in bad weather?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Night and weather (rain, fog) reduce accuracy by 15-25%. Lighting near wall positions (torches, braziers) mitigates night penalties. For critical raids, try to schedule combat during daylight if possible. Bad weather penalties affect both your archers and enemy ranged attackers equally."
      }
    }
  ]
}` } />
      </main>
  );
}
