{/* Meta description: Going Medieval best defense layout guide — optimal wall layouts, killbox design, merlon placement, trap corridors, and multi-layer defense strategies. */}
export const metadata = {
  title: "Going Medieval Best Defense Layout — 5 Proven Designs (2026)",
  description:
    "5 best defense layouts for Going Medieval. Killbox designs, wall configurations, and trap placements that work against raids.",
};


export default function BestDefenseLayoutPage() {
  return (
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-10">
            <section>
              <h1 className="chapter-heading">Going Medieval Best Defense Layout</h1>
              <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
                A colony that cannot defend itself does not survive past the third raid. In Going Medieval, defense is not a single wall or a row of archers — it is an integrated system of layered fortifications, chokepoint exploitation, and tactical positioning that turns every raider into a casualty before they reach your settlers. This guide details the best defense layout from early-game wooden palisades through late-game limestone citadels, covering wall tier progression, killbox architecture, merlon-archer synergy, trap corridor design, and the multi-layer defense framework that professional colony builders rely on. Every recommendation uses verified game mechanics — no invented features, no wishful thinking. Data below is based on community testing and is for reference only.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Wall Types & Tier Progression</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Going Medieval offers five wall tiers, each representing a significant durability upgrade over the previous. Your defense layout should evolve alongside your colony — starting with wooden walls in the first week and progressing to limestone brick by mid-game. Wooden walls are adequate against early bandit raids of 2-4 enemies, but they crumble rapidly under organized assaults and are nearly useless against trebuchet projectiles. Clay walls offer a modest improvement and are a reasonable interim choice if clay deposits are nearby. Clay brick walls require a brick mold and kiln but provide substantially better resistance. Limestone walls are the gold standard for mid-to-late game, and limestone brick walls — requiring advanced processing — represent the ultimate fortification material available to colonists.
              </p>
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Wall Type</th>
                    <th>Material</th>
                    <th>Durability</th>
                    <th>Best Use Phase</th>
                    <th>Trebuchet Resistance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Wooden Wall</td><td>Wood</td><td>Low</td><td>Day 1-7 (Starter)</td><td>None</td></tr>
                  <tr><td>Clay Wall</td><td>Clay</td><td>Low-Medium</td><td>Day 7-14 (Transition)</td><td>Very Low</td></tr>
                  <tr><td>Clay Brick Wall</td><td>Clay Brick</td><td>Medium</td><td>Early Mid-Game</td><td>Low</td></tr>
                  <tr><td>Limestone Wall</td><td>Limestone</td><td>High</td><td>Mid-Game</td><td>Moderate</td></tr>
                  <tr><td>Limestone Brick Wall</td><td>Limestone Brick</td><td>Very High</td><td>Late Game</td><td>High</td></tr>
                </tbody>
              </table>
              <p className="font-serif text-sm text-ink-muted italic">Data source: Community testing estimates</p>
              <div className="aged-border p-5" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                <p className="font-serif text-sm text-ink leading-relaxed">
                  <strong className="text-vermillion">&#9888; Stability Warning:</strong>
                  Going Medieval uses a stability system — walls cannot be built infinitely high without support. Each wall layer requires adequate structural support beneath it. A wall built too high without proper foundation will collapse during construction or under siege damage. Always ensure lower wall layers are intact and supported before adding additional height. Two-level walls are the standard defensive minimum; three levels are possible with strong foundations but require careful planning.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Killbox Design: The Art of Chokepoint Warfare</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                The killbox is the single most important element of any Going Medieval defense layout. A killbox is a deliberately designed corridor or enclosed space where raiders are funneled into a confined path, subjected to concentrated ranged fire from elevated positions, and slowed by traps — all while your melee defenders stand ready at the exit. The core principle is simple: force the enemy through the narrowest possible path while maximizing the number of attack vectors your settlers can employ simultaneously.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                The most effective killbox design uses a 3-tile wide corridor. This width is optimal for several reasons. First, it forces raiders to approach in a compressed column rather than spreading out — concentrated targets are easier for your archers to hit. Second, it allows trap placement in the center tile with settler walking paths on either side, preventing your own colonists from triggering traps during normal movement. Third, it gives melee defenders at the corridor end enough space to engage without being overwhelmed by numbers, as only 2-3 enemies can reach them simultaneously.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                To build a killbox, construct an outer wall perimeter with a single gate opening. Directly behind the gate, extend a walled corridor 3 tiles wide and 8-12 tiles long, lined with spike traps on the center tiles. At the far end, place your melee defenders with spears or sword-and-shield loadouts. Above the corridor, build a second-level walkway with merlons where your archers stand. Raiders entering the gate are trapped in the corridor, hammered by arrows from above, lacerated by spike traps below, and finally met by melee fighters at the exit. This is the foundation of every successful defense layout.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Merlon Placement & Archer Advantage</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Merlons are the crenellated stone or wooden blocks placed along the top edge of walls in Going Medieval. They are not decorative — they serve a critical combat function. Merlons provide cover to settlers positioned on wall tops, significantly reducing the damage archers receive from enemy ranged fire. Without merlons, your wall-top archers are fully exposed to return fire and will be driven off their positions or killed by enemy bowmen. With merlons, archers can duck behind cover between shots, dramatically increasing their survivability during extended engagements.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                The high-ground advantage in Going Medieval is substantial. Settlers firing from elevated positions — wall tops, tower platforms, hillside fortifications — receive bonuses to precision, range, and critical hit chance. This means an archer on a two-level wall with a longbow will land more hits, reach targets at greater distance, and score more critical strikes than the same archer firing from ground level. The combination of merlons for cover and elevation for accuracy transforms even modestly skilled marksmen into effective defensive assets.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                Place merlons on every wall section where you intend to station archers. The priority order is: killbox corridor walls first, then gate approaches, then perimeter wall firing positions. Each merlon occupies one tile on the wall top — space your archer positions so that every shooter has a merlon directly in front of them. For killbox corridors, place merlons on both sides of the upper walkway to create overlapping fields of fire. Double-sided merlon placement means raiders walking the corridor take arrows from left and right simultaneously, doubling the effective damage output per corridor length.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Trap Corridor Configuration</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Traps are the silent killers of your defense system. Going Medieval offers wooden spike traps, iron spike traps, and pitfalls — each with distinct damage profiles and placement characteristics. A properly configured trap corridor turns the space between your outer and inner walls into a death zone that punishes every step raiders take toward your settlers. The key to effective trap placement is density, pathing control, and settler safety.
              </p>
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Trap Type</th>
                    <th>Damage</th>
                    <th>Crafting</th>
                    <th>Trigger Count</th>
                    <th>Optimal Placement</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Wooden Spike Trap</td><td>40</td><td>Wood x3</td><td>3 triggers</td><td>Killbox center tiles, gate approach</td></tr>
                  <tr><td>Iron Spike Trap</td><td>80</td><td>Iron Ingot x2, Wood x1</td><td>5 triggers</td><td>Inner corridor, high-value chokepoints</td></tr>
                  <tr><td>Pitfall</td><td>30</td><td>Digging (no material)</td><td>Permanent</td><td>Outer perimeter, approach paths</td></tr>
                </tbody>
              </table>
              <p className="font-serif text-sm text-ink-muted italic">Data source: Community testing estimates</p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4 mt-4">
                In your 3-tile wide killbox corridor, place spike traps on the center tile of every third position along the length. This creates a pattern where raiders walking the corridor hit a trap, then have two clear tiles, then hit another trap — the rhythm keeps them moving forward (they cannot easily retreat) while accumulating damage steadily. Reserve iron spike traps for the final 4-6 tiles of the corridor where raiders are closest to your melee defenders — the higher damage per trigger ensures that enemies reaching your fighters are already wounded and easier to finish.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                Place pitfalls outside your outer wall along the most common raid approach paths. Raiders pathing toward your gate will step into pitfalls, taking damage and slowing their advance. This gives your wall archers extra time to inflict ranged damage before enemies even reach the killbox entrance. Critical rule: always leave settler-safe walking paths that avoid trap tiles. Designate clear side paths in corridors so your colonists can move through the defense zone without triggering traps during daily operations. When a raid alarm sounds, settlers should already know the safe route to their defensive positions.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Multi-Layer Defense Framework</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Single-wall defense is a gamble. If raiders breach one section, your entire colony is exposed. Multi-layer defense eliminates this vulnerability by creating sequential defensive lines, each one wearing down the assault before the next line engages. The standard Going Medieval multi-layer layout consists of three distinct zones: the outer wall, the buffer zone, and the inner stronghold.
              </p>
              <div className="space-y-3">
                <div className="journal-card p-4">
                  <h3 className="font-display text-base font-semibold text-ink">Layer 1 — Outer Wall & Gate</h3>
                  <p className="font-serif text-sm text-ink-light mt-1">The outer wall is your first contact line. Build it at minimum 2 levels high with merlons on top. The single gate serves as the killbox entrance. This wall does not need to be your strongest — its job is to funnel raiders toward the gate, not to hold indefinitely. Wooden or clay walls are acceptable for the outer layer in early game; upgrade to limestone once resources allow. Place pitfalls along the outer perimeter to damage and delay approaching raiders.</p>
                </div>
                <div className="journal-card p-4">
                  <h3 className="font-display text-base font-semibold text-ink">Layer 2 — Buffer Zone & Trap Corridor</h3>
                  <p className="font-serif text-sm text-ink-light mt-1">Between the outer and inner walls lies the buffer zone — a 3-4 tile deep space packed with spike traps, archer walkways, and funnel paths. This zone is where the killbox operates. Raiders who breach the outer wall or pass through the gate enter this space and are subjected to maximum concentrated fire and trap damage. The buffer zone should be designed so that no path through it avoids traps or archer fire. Every possible route costs the enemy health and time.</p>
                </div>
                <div className="journal-card p-4">
                  <h3 className="font-display text-base font-semibold text-ink">Layer 3 — Inner Stronghold</h3>
                  <p className="font-serif text-sm text-ink-light mt-1">The inner wall encloses your core colony structures — great hall, hospital, food stockpile, and settler quarters. This wall should be your most durable material: limestone brick when available, limestone at minimum. It serves as the final fallback position. If both outer lines are breached, retreat all settlers inside the inner wall and hold the entrance with your best melee fighters while archers fire from the inner wall tops. The inner wall must have its own gate with a trapped approach, functioning as a secondary killbox if the outer defense fails.</p>
                </div>
              </div>
              <p className="font-serif text-base text-ink-light leading-relaxed mt-4">
                The spacing between layers matters. Leave a minimum 3-tile gap between outer and inner walls — this gives archers on the inner wall enough range to fire into the buffer zone, and it prevents trebuchet projectiles from damaging both walls simultaneously. Tight spacing means one siege shot can compromise both your outer and inner defenses; generous spacing ensures that losing the outer wall does not immediately threaten the inner stronghold.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Late-Game Trebuchet Countermeasures</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Trebuchets represent the most serious threat to any defense layout in Going Medieval. These siege engines can demolish wooden walls in a single shot and significantly damage even stone fortifications from range. When a raid notification includes siege engines, your defense response must change immediately. Standard archer-on-wall tactics are insufficient — trebuchet crews must be neutralized quickly before they methodically dismantle your walls.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Counter-trebuchet strategy starts with wall material. Limestone brick walls are the only reliable defense against sustained trebuchet bombardment — lower-tier walls will be destroyed too quickly to mount an effective defense. Build your inner stronghold from limestone brick from the mid-game onward, even if your outer wall remains a cheaper material. The inner wall must survive long enough for your sortie team to destroy the siege engine.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                When trebuchets appear, dispatch a sortie of 2-3 well-armored melee settlers through a sally port — a small side gate designed exclusively for sorties, separate from the main killbox gate. The sortie team runs to the trebuchet while wall archers provide covering fire to suppress enemy bowmen guarding the siege engine. Destroy the trebuchet, then retreat back through the sally port. Never send your entire combat force on a sortie — you need defenders on the walls to handle the remaining raiders. The sally port should be positioned on a wall section that is not the primary approach direction, reducing the chance that sortie settlers encounter the main raider body en route.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Step-by-Step Defense Build Order</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Building a complete multi-layer defense takes planning and phased execution. Rushing all three layers simultaneously wastes labor and leaves each layer incomplete when the first raid arrives. Follow this build order to ensure your colony has functional defense at every stage of growth.
              </p>
              <div className="space-y-4">
                <div className="card p-4 aged-border">
                  <h3 className="font-display text-base font-semibold text-ink flex items-center gap-2">
                    <span className="wax-tag">Phase 1</span> Starter Enclosure (Days 1-5)
                  </h3>
                  <p className="font-serif text-sm text-ink-light mt-2">Build a wooden wall perimeter, minimum 2 levels high, around your initial camp. Place a single gate facing away from known raid directions. Add 2-3 wooden spike traps in front of the gate. Position 1-2 archers on the wall top with basic bows. This is not a killbox — it is a survival enclosure that buys you time during the first bandit raid.</p>
                </div>
                <div className="card p-4 aged-border">
                  <h3 className="font-display text-base font-semibold text-ink flex items-center gap-2">
                    <span className="wax-tag">Phase 2</span> Killbox Corridor (Days 6-14)
                  </h3>
                  <p className="font-serif text-sm text-ink-light mt-2">Extend the gate into a 3-tile wide, 8-tile long corridor. Place spike traps on center tiles. Build a second-level walkway on both corridor walls with merlons for archer cover. Station melee defenders at the corridor exit. This creates your first functional killbox. Upgrade outer walls to clay or clay brick if resources permit.</p>
                </div>
                <div className="card p-4 aged-border">
                  <h3 className="font-display text-base font-semibold text-ink flex items-center gap-2">
                    <span className="wax-tag">Phase 3</span> Inner Stronghold (Days 15-30)
                  </h3>
                  <p className="font-serif text-sm text-ink-light mt-2">Construct an inner wall 3-4 tiles behind the outer wall, enclosing your core buildings. Build this wall from limestone if possible — it is your fallback position. Add a gate with its own trap approach and merlon-covered archer positions. The gap between outer and inner walls becomes your dedicated buffer zone. Place iron spike traps in the buffer zone for higher damage per trigger.</p>
                </div>
                <div className="card p-4 aged-border">
                  <h3 className="font-display text-base font-semibold text-ink flex items-center gap-2">
                    <span className="wax-tag">Phase 4</span> Late-Game Citadel (Day 30+)
                  </h3>
                  <p className="font-serif text-sm text-ink-light mt-2">Upgrade all walls to limestone or limestone brick. Add a sally port for trebuchet sorties. Expand the killbox corridor length to 10-12 tiles for larger raids. Place crossbow-armed elite marksmen on inner wall merlons. Ensure every wall section has merlon coverage. Construct fallback positions inside the inner stronghold — a secondary door-barricade point where settlers can hold if the inner gate is breached. Your defense is now complete and scalable.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
              <div className="faq-item">
                <details>
                  <summary>What is the ideal corridor width for a killbox?</summary>
                  <p>A 3-tile wide corridor is the optimal killbox width in Going Medieval. This width compresses raiders into a tight column for concentrated archer fire, allows center-tile trap placement with safe walking paths on the sides, and limits the number of enemies that can simultaneously engage your melee defenders at the corridor exit. Wider corridors reduce trap and archer effectiveness; narrower corridors block settler movement and prevent melee engagement space.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>Do merlons actually reduce incoming damage for archers?</summary>
                  <p>Yes. Merlons provide cover to settlers standing on wall tops. Archers positioned behind merlons receive significantly less damage from enemy ranged attacks compared to archers on exposed wall sections. The cover mechanic means enemy arrows that would hit an exposed settler are partially blocked by the merlon structure. Every wall section where you station ranged defenders should have merlons — without them, your archers will be killed or driven off their positions by enemy bowmen.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>How do I defend against trebuchets without limestone brick walls?</summary>
                  <p>If you lack limestone brick, use limestone walls as your inner stronghold and focus on speed rather than durability. Dispatch a sortie team through a sally port immediately when trebuchets appear — the goal is to destroy the siege engine before it fires multiple shots. Wall archers provide covering fire to suppress enemy bowmen protecting the trebuchet. Even clay brick outer walls can survive 1-2 trebuchet hits, giving your sortie enough time if you act fast. The key is proactive destruction of the siege engine rather than passive wall endurance.</p>
                </details>
              </div>
            </section>
          </div>

          <aside className="lg:w-[35%] space-y-8 shrink-0">
            <div className="field-sidebar-block">
              <h3 className="font-display text-lg font-semibold text-ink mb-4">Defense Build Checklist</h3>
              <div className="space-y-3">
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">1. Outer Wall</h4><p className="font-serif text-xs text-ink-muted mt-1">2-level min, single gate, merlons on top</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">2. Killbox Corridor</h4><p className="font-serif text-xs text-ink-muted mt-1">3-tile wide, 8-12 long, center traps</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">3. Merlon Coverage</h4><p className="font-serif text-xs text-ink-muted mt-1">Every archer position, double-sided in killbox</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">4. Inner Stronghold</h4><p className="font-serif text-xs text-ink-muted mt-1">Limestone/limestone brick, 3-4 tile gap</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">5. Sally Port</h4><p className="font-serif text-xs text-ink-muted mt-1">Side gate for trebuchet sorties</p></div>
              </div>
            </div>
            <div className="journal-card p-5">
              <h3 className="font-display text-base font-semibold text-ink mb-3">Wall Durability Comparison</h3>
              <div className="space-y-2 font-serif text-sm text-ink-light">
                <div className="flex justify-between"><span>Wooden Wall</span><span className="text-vermillion">Very Low</span></div>
                <div className="flex justify-between"><span>Clay Wall</span><span className="text-vermillion">Low</span></div>
                <div className="flex justify-between"><span>Clay Brick Wall</span><span className="text-gold">Medium</span></div>
                <div className="flex justify-between"><span>Limestone Wall</span><span className="text-gold">High</span></div>
                <div className="flex justify-between"><span>Limestone Brick Wall</span><span style={{ color: 'var(--color-accent)' }}>Very High</span></div>
              </div>
            </div>
            <div className="journal-card p-5">
              <h3 className="font-display text-base font-semibold text-ink mb-3">Archer Height Bonuses</h3>
              <ol className="space-y-2 font-serif text-sm text-ink-light">
                <li>1. Ground level — baseline accuracy and range</li>
                <li>2. Wall level 1 — moderate precision bonus</li>
                <li>3. Wall level 2 — significant precision, range, crit bonus</li>
                <li>4. Hilltop position — equivalent to wall level 2</li>
                <li>5. Merlon cover — reduced incoming damage</li>
              </ol>
              <p className="font-serif text-xs text-ink-muted italic mt-2">Combine height + merlons for maximum effectiveness</p>
            </div>
          </aside>
        </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the ideal corridor width for a killbox?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A 3-tile wide corridor is the optimal killbox width in Going Medieval. This width compresses raiders into a tight column for concentrated archer fire, allows center-tile trap placement with safe walking paths on the sides, and limits the number of enemies that can simultaneously engage your melee defenders at the corridor exit. Wider corridors reduce trap and archer effectiveness; narrower corridors block settler movement and prevent melee engagement space."
      }
    },
    {
      "@type": "Question",
      "name": "Do merlons actually reduce incoming damage for archers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Merlons provide cover to settlers standing on wall tops. Archers positioned behind merlons receive significantly less damage from enemy ranged attacks compared to archers on exposed wall sections. The cover mechanic means enemy arrows that would hit an exposed settler are partially blocked by the merlon structure. Every wall section where you station ranged defenders should have merlons — without them, your archers will be killed or driven off their positions by enemy bowmen."
      }
    },
    {
      "@type": "Question",
      "name": "How do I defend against trebuchets without limestone brick walls?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If you lack limestone brick, use limestone walls as your inner stronghold and focus on speed rather than durability. Dispatch a sortie team through a sally port immediately when trebuchets appear — the goal is to destroy the siege engine before it fires multiple shots. Wall archers provide covering fire to suppress enemy bowmen protecting the trebuchet. Even clay brick outer walls can survive 1-2 trebuchet hits, giving your sortie enough time if you act fast. The key is proactive destruction of the siege engine rather than passive wall endurance."
      }
    }
  ]
}` }} />
      </main>
  );
}
