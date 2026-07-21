export const metadata = {
  title: "Going Medieval Meta Game Guide — Progression, Combat & Endgame (2026)",
  description: "Understand the Going Medieval meta game: colony milestones, research priorities, military vs economy balance, endgame threats, and the shift from survival to empire management.",
};

export default function MetaGameGuidePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-10">
          <section>
            <h1 className="chapter-heading">Going Medieval Meta Game Guide — Progression, Combat & Endgame</h1>
            <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
              A Reddit user recently asked: "What does the meta game look like in Going Medieval?" The answer is that Going Medieval has two distinct phases that feel like entirely different games. The first phase is survival — scraping together food, hiding from raids, and praying your settlers make it through winter. The second phase is empire management — running a fortified castle with a trade economy, a standing army, and endgame threats that can level your walls in minutes. Understanding the meta game means understanding how to navigate the transition between these phases, how to allocate settler labor between military and economic development, and how to prepare for endgame threats that require completely different strategies from early-game survival tactics.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Colony Milestones — The Five Phases of Progression</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Every successful Going Medieval colony passes through five milestones. Each milestone has a primary goal, a dominant risk, and a specific balance between military and economic investment. Knowing which phase you are in prevents the most common meta mistake: over-investing in military during the survival phase, or neglecting military during the expansion phase. The phases are: Survival (Day 1-3), Establishment (Day 4-10), Expansion (Day 10-20), Fortification (Day 20-40), and Empire (Day 40+).
            </p>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              During the Survival phase, your only goal is keeping settlers alive. Build a basic shelter, secure a water source, and forage for food. Do not build walls or train military — you don{''}t have the labor or resources. During Establishment, build wooden walls to deter small raids, start farming, and assign 1-2 settlers to bow training. Expansion is where the meta game真正 begins: invest in stone cutting, iron smelting, and a dedicated military squad.
            </p>
            <table className="parchment-table">
              <thead>
                <tr>
                  <th>Timeline</th>
                  <th>Phase</th>
                  <th>Primary Goal</th>
                  <th>Settler Count</th>
                  <th>Military Focus</th>
                  <th>Economic Focus</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Day 1-3</td><td>Survival</td><td>Shelter, water, food</td><td>3-4</td><td>None — hide</td><td>Foraging, wood</td></tr>
                <tr><td>Day 4-10</td><td>Establishment</td><td>Wooden walls, farm plots</td><td>4-5</td><td>Bows for 1-2 settlers</td><td>Farming, cooking</td></tr>
                <tr><td>Day 10-20</td><td>Expansion</td><td>Stone walls, research bench</td><td>5-6</td><td>Crossbows, armor for all</td><td>Stone cutting, iron</td></tr>
                <tr><td>Day 20-40</td><td>Fortification</td><td>Castle walls, gatehouse</td><td>6-8</td><td>Archer squad, melee reserve</td><td>Steel production</td></tr>
                <tr><td>Day 40+</td><td>Empire</td><td>Trade empire, max keep</td><td>8-12</td><td>Full military, trebuchet</td><td>Trade routes, luxuries</td></tr>
              </tbody>
            </table>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Research Priorities — The Tech Tree Meta</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Research is the engine of the meta game. Every technology you unlock shifts the balance of power between your colony and the raiding parties. The meta research order prioritizes survival tech first (stone cutting, agriculture), then economic multipliers (blacksmithing, masonry), then military tech (crossbows, steel), and finally endgame tools (siege countermeasures, trade). Deviating from this order is possible but risky — skipping agriculture to rush crossbows means your settlers starve before they can fire a shot.
            </p>
            <table className="parchment-table">
              <thead>
                <tr>
                  <th>Tech</th>
                  <th>Tier</th>
                  <th>Unlocks</th>
                  <th>Priority</th>
                  <th>Meta Impact</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Stone Cutting</td><td>Basic</td><td>Stone blocks, stone walls</td><td>Essential</td><td>Enables wood-to-stone transition</td></tr>
                <tr><td>Agriculture</td><td>Basic</td><td>Crop rotation, irrigation</td><td>Essential</td><td>Eliminates winter starvation</td></tr>
                <tr><td>Blacksmithing</td><td>Intermediate</td><td>Iron tools, weapons, armor</td><td>High</td><td>Doubles production and combat</td></tr>
                <tr><td>Masonry</td><td>Intermediate</td><td>Reinforced stone walls</td><td>High</td><td>Walls reach 1200 HP</td></tr>
                <tr><td>Crossbows</td><td>Advanced</td><td>Crossbow, steel bolts</td><td>Critical</td><td>Meta weapon — outclasses bows</td></tr>
                <tr><td>Steel Production</td><td>Advanced</td><td>Steel gear</td><td>Critical</td><td>Endgame military standard</td></tr>
                <tr><td>Trade and Diplomacy</td><td>Advanced</td><td>Trade routes</td><td>Medium</td><td>Accelerates military upgrades</td></tr>
              </tbody>
            </table>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Military vs Economy — The Core Meta Tension</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              The central tension of the Going Medieval meta is the allocation of settler labor between military preparation and economic development. Every settler assigned to training, patrolling, or standing guard is a settler not farming, smelting, or researching. The meta answer is timing: invest purely in economy during the survival phase, begin military investment during the expansion phase, and reach a 60/40 economy/military split by the fortification phase.
            </p>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              The trap many players fall into is the "arms race spiral." Raids scale with colony wealth. If you build expensive walls and stockpile steel weapons, your wealth rises, and the next raid is larger. If you then build more military to counter the larger raid, your wealth rises again, and the next raid is even larger. The way out of the spiral is to cap visible wealth: store valuables underground, avoid unnecessary luxury construction, and keep your military efficient rather than bloated. A squad of 4 crossbowmen in towers is more effective than 12 unarmored archers on open ground.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Endgame Threats — Trebuchet Sieges and Mega-Raids</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Once your castle is built and your military is equipped, the endgame threats begin. These are not just bigger raids — they are mechanically different challenges that require specific countermeasures. The three major endgame threats are trebuchet sieges, wealth-scaled mega-raids, and multi-direction assaults. Trebuchet sieges are the most dangerous — a trebuchet can destroy a stone wall tile in 2-3 hits, bypassing your gatehouse entirely.
            </p>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Wealth-scaled mega-raids scale with your total colony wealth. A colony with 10,000 wealth value can face raids of 30+ enemies. The key insight is that wealth includes stockpiled weapons and armor — not just structures. Store excess military gear in an underground vault to reduce visible wealth without reducing your actual military readiness. Multi-direction assaults split the enemy force and attack from two or more sides simultaneously, defeating single-gatehouse defenses.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-6">Frequently Asked Questions</h2>

            <div className="aged-border p-5 mb-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
              <h3 className="font-display text-lg font-semibold text-ink mb-2">What is the strongest meta build for endgame combat?</h3>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                The current meta is a crossbow-heavy defense force stationed in corner towers, supported by 2-3 melee fighters with steel armor stationed at the gatehouse. Crossbows benefit from elevation (towers multiply their range and damage), pierce armor, and require minimal micromanagement. A squad of 6 crossbowmen in four towers can defeat a 30-enemy raid without melee engagement.
              </p>
            </div>
            <div className="aged-border p-5 mb-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
              <h3 className="font-display text-lg font-semibold text-ink mb-2">Does raid difficulty scale with wealth or with time?</h3>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                Both, but wealth is the dominant factor. Raids scale primarily with total colony wealth (structures, stockpiles, and equipment) and secondarily with elapsed time. This means a colony that stockpiles steel weapons and builds luxury rooms will face larger raids sooner than a minimalist colony at the same time stamp. The meta implication is that visible wealth should be managed — store valuables underground and avoid unnecessary construction.
              </p>
            </div>
            <div className="aged-border p-5 mb-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
              <h3 className="font-display text-lg font-semibold text-ink mb-2">Is there an actual endgame or win condition?</h3>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                Going Medieval has no hard win condition. The endgame is open-ended sandbox play where you set your own goals: a fully reinforced castle, a population milestone, a self-sustaining trade empire, or simply surviving year five and beyond. The meta challenge of the endgame is not "winning" but maintaining efficiency and morale across a large, complex colony while fending off escalating raids.
              </p>
            </div>
            <div className="aged-border p-5 mb-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
              <h3 className="font-display text-lg font-semibold text-ink mb-2">How do I avoid the arms race spiral?</h3>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                Cap your visible wealth by storing valuables underground, avoid luxury construction that doesn{''}t serve a defensive purpose, and focus on military quality over quantity. A small, well-equipped, well-positioned military is more effective than a large, poorly equipped force. Store excess steel weapons and armor in an underground vault — they still exist for use but don{''}t count toward raid scaling.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-ink mb-4">Related Guides</h2>
            <div className="space-y-2">
              <a href="/research" className="text-accent hover:text-accent-hover underline">Research Tech Tree</a>
              <a href="/endgame-content" className="text-accent hover:text-accent-hover underline">Endgame Content</a>
              <a href="/wealth-scaling-raids" className="text-accent hover:text-accent-hover underline">Wealth Scaling Raids</a>
              <a href="/best-weapons-ranked" className="text-accent hover:text-accent-hover underline">Best Weapons Ranked</a>
              <a href="/archer-vs-crossbow" className="text-accent hover:text-accent-hover underline">Archer vs Crossbow</a>
              <a href="/siege-weapons-guide" className="text-accent hover:text-accent-hover underline">Siege Weapons Guide</a>
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
                "name": "What is the strongest meta build for endgame combat?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The current meta is a crossbow-heavy defense force stationed in corner towers, supported by 2-3 melee fighters with steel armor. Crossbows benefit from elevation and pierce armor. A squad of 6 crossbowmen in four towers can defeat a 30-enemy raid without melee engagement."
                }
              },
              {
                "@type": "Question",
                "name": "Does raid difficulty scale with wealth or with time?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Both, but wealth is the dominant factor. Raids scale primarily with total colony wealth and secondarily with elapsed time. The meta implication is that visible wealth should be managed — store valuables underground and avoid unnecessary construction."
                }
              },
              {
                "@type": "Question",
                "name": "Is there an actual endgame or win condition?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Going Medieval has no hard win condition. The endgame is open-ended sandbox play where you set your own goals. The meta challenge is maintaining efficiency and morale across a large colony while fending off escalating raids."
                }
              },
              {
                "@type": "Question",
                "name": "How do I avoid the arms race spiral?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Cap your visible wealth by storing valuables underground, avoid luxury construction, and focus on military quality over quantity. Store excess weapons and armor in an underground vault — they still exist for use but don't count toward raid scaling."
                }
              }
            ]
          })
        }}
      />

      <p className="text-xs text-text-muted mt-12 border-t border-border-subtle pt-4">Last updated: July 7, 2026</p>
    </main>
  );
}
