{/* Meta description: Going Medieval chokepoint guide — how to build funnel corridors, kill corridors, trap placement, and manipulate enemy pathing for maximum defense. */}
export const metadata = {
  title: "Going Medieval Chokepoint Guide — Trap Corridor Design (2026)",
  description:
    "Complete chokepoint guide for Going Medieval. Design trap corridors, force enemy pathfinding, and maximize killzone efficiency.",
};


export default function ChokepointGuidePage() {
  return (
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-10">
            <section>
              <h1 className="chapter-heading">Going Medieval Chokepoint Guide</h1>
              <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
                In Going Medieval, victory is not about outnumbering the enemy — it is about out-positioning them. The game's enemy AI uses deterministic pathfinding: raiders take the shortest available route to your settlers or beds. This means the layout of your walls, corridors, and gates directly controls where enemies walk and where they fight. A well-engineered chokepoint transforms chaotic raid encounters into controlled, repeatable kill sequences. This guide covers funnel corridor design, enemy path manipulation, trap placement strategy, killbox dimensions, archer platform positioning, melee blocking formations, and late-game trebuchet countermeasures. Every recommendation is based on verified game mechanics — no invented features, no filler. Data below is based on community testing and is for reference only.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Why Chokepoints Work: Understanding Enemy AI Pathing</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                The foundation of every chokepoint strategy is understanding how the game's pathfinding works. Enemy raiders do not wander randomly — they calculate the shortest unobstructed path from their spawn point to a target within your base. The default target is your settlers' assigned beds. If beds are inaccessible (behind walls with no open path), raiders target the nearest accessible settler or building.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                This deterministic behavior is exploitable. By controlling which paths are open and which are blocked, you can force raiders to approach from a single predictable direction. Walls, doors, and deliberately placed gaps determine which routes the pathfinding algorithm considers valid. Raiders will walk through an elaborate, trap-packed corridor if it is the only open route to their target — they do not evaluate whether a path is dangerous, only whether it is the shortest available.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Raiders also evaluate doors as valid breach points. If a door leads to a settler or bed and represents a shorter path than going around your walls, raiders will attack and destroy that door. This behavior can be weaponized by placing bait doors — doors that serve no function except to draw enemies into a prepared kill zone — while your real entrance is elsewhere, protected by a more robust defense.
              </p>
              <div className="aged-border p-5" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                <p className="font-serif text-sm text-ink leading-relaxed">
                  <strong className="text-vermillion">&#9888; Pathing Rule:</strong>
                  Raiders always take the shortest available route to settlers or beds. If you leave only one open path, that path is where every raid will arrive. Close all other approaches and the enemy has no choice but to enter your designed corridor. A wall with no gaps forces pathfinding to go around it — use this to funnel raiders into your chokepoint.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Chokepoint Dimensions & Design Reference</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Getting the dimensions right is critical. Too narrow and your settlers cannot maneuver; too wide and the chokepoint loses its tactical advantage. The table below summarizes the verified optimal dimensions for each chokepoint element.
              </p>
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Element</th>
                    <th>Recommended Size</th>
                    <th>Purpose</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Funnel Entrance</td><td>5-7 tiles wide</td><td>Draw raiders inward</td><td>Wider opening reduces pathing resistance</td></tr>
                  <tr><td>Funnel Corridor</td><td>3 tiles wide</td><td>Compress enemy column</td><td>Optimal for 3 melee settlers side-by-side</td></tr>
                  <tr><td>Corridor Length</td><td>8-16 tiles</td><td>Trap + archer engagement zone</td><td>Longer = more trap triggers and ranged damage</td></tr>
                  <tr><td>Killbox Interior</td><td>5x7 tiles or larger</td><td>Final engagement arena</td><td>Room for melee blockers and archer sightlines</td></tr>
                  <tr><td>S-Bend Segment</td><td>2-3 tile turns</td><td>Break line of sight</td><td>Prevents enemy archers from shooting down corridor</td></tr>
                  <tr><td>Archer Platform</td><td>2 levels above killbox floor</td><td>Elevated firing position</td><td>Merlon cover required; double-sided in killbox</td></tr>
                </tbody>
              </table>
              <p className="font-serif text-sm text-ink-muted italic">Data source: Community testing estimates</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Funnel Corridor Design: Wide to Narrow</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                The funnel corridor is the most fundamental chokepoint pattern in Going Medieval. The concept is simple: create a wide opening that narrows into a tight corridor, forcing raiders to compress their formation as they advance. A wide entrance (5-7 tiles) at your outer wall ensures raiders do not path around your walls to find alternative routes — the wide opening registers as the shortest path and every enemy unit funnels into it.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                As the corridor narrows to 3 tiles, the raider formation compresses from a loose spread into a tight column. This compression has three tactical benefits. First, ranged attacks from your archers hit more consistently because targets are concentrated. Second, only 1-2 raiders can walk through the narrowest point at a time, preventing a simultaneous rush. Third, at the corridor exit, your 3 melee settlers can fight side-by-side while the enemy can only engage them with an equal or smaller number of fighters at the front.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                The transition from wide to narrow should not be abrupt. Taper the walls inward over 2-3 tiles to create a smooth narrowing — this prevents raiders from getting stuck on corners or repathing mid-advance. A smooth funnel keeps the enemy column moving forward, which means they spend more time walking through trap tiles and archer fire zones.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">S-Bend & Snake Corridors: Breaking Line of Sight</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                A straight corridor exposes your defenders to enemy ranged fire. If raider archers can see your settlers from the corridor entrance, they will shoot from range — and enemy arrows hurt, especially against lightly armored archer settlers on your wall walkways. The solution is the S-bend, or snake corridor: a corridor that zigzags with 2-3 tile turns, breaking line of sight between the entrance and the killbox.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Build your corridor with alternating 90-degree turns. After the initial funnel narrows to 3 tiles, have the corridor turn left for 3-4 tiles, then right for 3-4 tiles, then left again before reaching the killbox. Each turn blocks line of sight from the previous segment — enemy archers at the entrance cannot fire on your settlers at the killbox end because walls physically obstruct the shot.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                S-bends also increase the effective walking distance through your trapped corridor. A raider navigating multiple turns covers more ground — and triggers more spike traps — than one walking a straight line. Place spike traps on the center tile of each straight segment in the snake. Raiders walking the turns will step on traps at every straightaway, accumulating damage before they even see your melee fighters.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Trap Placement in Forced Paths</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Traps are most effective when the enemy has no alternative but to walk over them. In Going Medieval, raiders do not avoid traps — they path directly over trapped tiles if those tiles are on the shortest route to their target. This makes forced-path trap placement the single most reliable source of pre-combat damage in the game.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                In your 3-tile wide kill corridor, place wooden spike traps on the center tile at intervals of every 2-3 tiles. The center-tile placement is crucial: it ensures raiders trigger the trap while walking through the corridor, but your settlers can use the side tiles to move through without triggering them. This creates a settler-safe path while the corridor remains lethal to enemies. Reserve iron spike traps (80 damage, 5 triggers) for the final approach within 4 tiles of your melee defenders — enemies reaching your fighters should already be wounded from accumulated trap damage.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                Pitfalls are best placed outside your funnel entrance. Raiders approaching your walls will step into pitfalls before they even enter the corridor, taking initial damage and slowing their advance. This buys your archers extra time to inflict ranged damage from the wall tops. After each raid, replace all triggered traps and re-arm those that exhausted their trigger count. A corridor with empty trap slots is just a corridor.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Door Strategy: Bait Doors vs Real Entrances</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Doors play a psychological role in enemy pathfinding. Raiders see doors as weak points — a door that leads to a shorter path will draw their attention. This can be exploited with bait doors. Place a door on an exterior wall that leads into a trapped killbox corridor. Raiders evaluating paths will see the door as a valid, shorter route and will attack it to break through — walking directly into your prepared defense zone.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                Your real entrance can be positioned elsewhere, behind additional walls, so raiders do not prioritize it. Alternatively, use no doors at all on your outer wall — just a permanent gap that leads into the funnel. Gaps are always considered valid paths by the AI and do not require the time-consuming door-attack behavior. The choice between a door and an open gap depends on your map biome: doors help retain indoor temperature in cold climates, while open gaps provide faster enemy pathing into your kill zone.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Killbox Configuration: Melee Block + Archer Overwatch</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                The killbox is the terminal section of your chokepoint — the enclosed space where the enemy column meets your combined melee and ranged forces. A minimum killbox interior of 5x7 tiles provides enough room for melee settlers to engage without crowding, while giving elevated archers clear sightlines to the entire engagement area.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Position your melee blocking squad at the far end of the killbox, directly opposite the corridor exit. Three melee settlers standing shoulder-to-shoulder in a 3-tile line is the optimal formation. They will engage the first raiders emerging from the corridor, and because only 2-3 enemies can reach the front line at once, your melee squad fights at numerical parity even when outnumbered overall. Equip your melee blockers with spears (for reach and first-strike advantage) or sword-and-shield (for survivability against ranged return fire).
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                Above the killbox, build a second-level walkway with merlons for your archers. This elevated platform should wrap around at least two sides (preferably three) of the killbox so archers have overlapping fields of fire. Settlers firing from a 2-level elevation gain significant bonuses to precision, range, and critical hit chance. With merlon cover, your archers are protected from enemy return fire — merlons provide cover that reduces incoming ranged damage, keeping your marksmen alive during extended engagements.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Sally Ports & Trebuchet Countermeasures</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Chokepoints work against raider infantry, but trebuchets change the equation entirely. These enemy siege engines do not walk into your corridor — they sit at range and demolish your walls. When the raid notification includes trebuchets, your chokepoint defense alone is insufficient. You must neutralize the siege engine before it undoes your wall infrastructure.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                The sally port is your countermeasure. A sally port is a small, dedicated side gate on your wall perimeter — separate from your main funnel entrance — designed exclusively for sortie missions. When trebuchets appear, dispatch 2-3 armored melee settlers through the sally port on a direct path to the siege engine. The sally port should be placed on a wall section facing away from the main raider approach to minimize the chance your sortie team encounters the bulk of the raid while en route to the trebuchet.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                While your sortie team runs to the trebuchet, keep your wall archers in position to provide covering fire. They can suppress enemy bowmen guarding the siege engine and distract raider melee units. Destroy the trebuchet, then retreat the sortie team back through the sally port. Never send your entire combat force — you need defenders at the chokepoint to handle any raiders that press the main approach during the sortie.
              </p>
              <div className="aged-border p-5" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                <p className="font-serif text-sm text-ink leading-relaxed">
                  <strong className="text-vermillion">&#9888; Stability Warning:</strong>
                  Trebuchet projectiles can cause structural collapse. If a wall section loses its foundation support — either through direct damage or destruction of the tiles beneath it — the unsupported section will collapse. Always maintain adequate foundation beneath multi-level wall sections, especially near your killbox where trebuchets are likely to target. A collapse in your corridor walls can create an unintended breach for raiders to exploit.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Step-by-Step Chokepoint Build Order</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Building a chokepoint defense is a phased process. Rushing all elements at once wastes labor and leaves critical gaps. Follow this order to have functional defense at every stage.
              </p>
              <div className="space-y-4">
                <div className="card p-4 aged-border">
                  <h3 className="font-display text-base font-semibold text-ink flex items-center gap-2">
                    <span className="wax-tag">Phase 1</span> Perimeter & Single Entry (Days 1-5)
                  </h3>
                  <p className="font-serif text-sm text-ink-light mt-2">Build a wooden wall enclosure around your camp with exactly one opening — your future funnel entrance. Close all other gaps. The single opening becomes the only path raiders can use. Place 2-3 wooden spike traps in front of the opening. This basic setup buys time during the first raid.</p>
                </div>
                <div className="card p-4 aged-border">
                  <h3 className="font-display text-base font-semibold text-ink flex items-center gap-2">
                    <span className="wax-tag">Phase 2</span> Funnel Corridor (Days 6-14)
                  </h3>
                  <p className="font-serif text-sm text-ink-light mt-2">Extend walls outward from your opening to create a 3-tile wide, 8-tile long corridor. Taper the entrance from 5 tiles down to 3 tiles over 2-3 tiles of length. Place spike traps on center tiles at 2-tile intervals. Position 1-2 melee settlers at the corridor exit. This creates your first functional controlled engagement zone.</p>
                </div>
                <div className="card p-4 aged-border">
                  <h3 className="font-display text-base font-semibold text-ink flex items-center gap-2">
                    <span className="wax-tag">Phase 3</span> Archer Platforms & Killbox (Days 15-25)
                  </h3>
                  <p className="font-serif text-sm text-ink-light mt-2">Build second-level walkways with merlons along both corridor walls and around the killbox interior. Expand the corridor end into a 5x7 killbox. Station archers on the elevated platforms. Deploy 3 melee settlers as a blocking line at the killbox exit. Replace wooden outer walls with clay or limestone as resources allow. Add an S-bend to the corridor if facing raids with enemy archers.</p>
                </div>
                <div className="card p-4 aged-border">
                  <h3 className="font-display text-base font-semibold text-ink flex items-center gap-2">
                    <span className="wax-tag">Phase 4</span> Sally Port & Late-Game Hardening (Day 25+)
                  </h3>
                  <p className="font-serif text-sm text-ink-light mt-2">Construct a sally port on a wall section away from the main funnel approach. Upgrade all chokepoint walls to limestone or limestone brick. Extend the corridor to 12-16 tiles for increased trap damage zone. Add iron spike traps in the final approach. Double your merlon coverage so every archer position has cover on both sides. Your chokepoint is now complete and scalable.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
              <div className="faq-item">
                <details>
                  <summary>How wide should my chokepoint corridor be?</summary>
                  <p>A 3-tile wide corridor is the optimal width for a Going Medieval chokepoint. This width compresses raiders into a tight column for concentrated archer fire, allows center-tile trap placement with settler-safe walking paths on the sides, and permits exactly 3 melee settlers to fight side-by-side at the exit — the maximum that can simultaneously engage. Wider corridors (4+ tiles) reduce trap density and let more enemies reach your melee line at once. Narrower corridors (2 tiles) block settler movement and reduce your melee engagement frontage.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>Do chokepoints work against trebuchets?</summary>
                  <p>Chokepoints are designed for infantry control — trebuchets bypass them entirely by attacking your walls from range. When facing trebuchet raids, your chokepoint handles the raider infantry but cannot stop the siege engine. Use a sally port to dispatch a sortie team of 2-3 armored melee settlers directly to the trebuchet while your wall archers and chokepoint defenders handle the raider force. Limestone brick walls are essential for surviving trebuchet bombardment long enough to mount a successful sortie. Wooden and clay walls collapse too quickly against siege projectiles.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>Can enemies break through walls instead of using my chokepoint?</summary>
                  <p>Yes. Raiders will attack and destroy wall sections if they are significantly shorter paths than walking around to your chokepoint entrance. The AI evaluates path length — not path safety. If your chokepoint forces a long walk-around, raiders may decide that breaking through a nearby wall is the shorter route. Mitigate this by keeping your perimeter walls consistent in strength (avoid weak sections near the chokepoint) and keeping the funnel entrance prominent and unobstructed so pathfinding consistently prefers it. Additionally, raiders with trebuchets will target wall sections regardless of path length — material upgrades (limestone brick) and proactive sortie strikes are the only reliable counter.</p>
                </details>
              </div>
            </section>
          </div>

          <aside className="lg:w-[35%] space-y-8 shrink-0">
            <div className="field-sidebar-block">
              <h3 className="font-display text-lg font-semibold text-ink mb-4">Chokepoint Build Checklist</h3>
              <div className="space-y-3">
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">1. Single Entry Point</h4><p className="font-serif text-xs text-ink-muted mt-1">Close all other wall gaps; one funnel entrance only</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">2. Funnel Corridor</h4><p className="font-serif text-xs text-ink-muted mt-1">5-7 tiles wide entrance, narrow to 3-tile corridor</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">3. S-Bend Turns</h4><p className="font-serif text-xs text-ink-muted mt-1">Break line of sight for enemy archers</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">4. Center-Tile Traps</h4><p className="font-serif text-xs text-ink-muted mt-1">Settler-safe side paths, 2-tile intervals</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">5. Killbox (5x7+)</h4><p className="font-serif text-xs text-ink-muted mt-1">Melee line + elevated archer platforms</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">6. Merlon Coverage</h4><p className="font-serif text-xs text-ink-muted mt-1">Every archer position, double-sided in killbox</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">7. Sally Port</h4><p className="font-serif text-xs text-ink-muted mt-1">Side gate for trebuchet sorties</p></div>
              </div>
            </div>
            <div className="journal-card p-5">
              <h3 className="font-display text-base font-semibold text-ink mb-3">Pathfinding Priority</h3>
              <ol className="space-y-2 font-serif text-sm text-ink-light">
                <li>1. Shortest path to settler beds</li>
                <li>2. Shortest path to accessible settlers</li>
                <li>3. Attack doors if they shorten path</li>
                <li>4. Destroy walls if walk-around is too long</li>
                <li>5. Trebuchets target walls, not settlers</li>
              </ol>
              <p className="font-serif text-xs text-ink-muted italic mt-2">Raiders do not consider trap danger when pathing</p>
            </div>
            <div className="journal-card p-5">
              <h3 className="font-display text-base font-semibold text-ink mb-3">Archer Elevation Bonuses</h3>
              <div className="space-y-2 font-serif text-sm text-ink-light">
                <div className="flex justify-between"><span>Ground Level</span><span className="text-vermillion">Baseline</span></div>
                <div className="flex justify-between"><span>Wall Level 1</span><span className="text-gold">Moderate Bonus</span></div>
                <div className="flex justify-between"><span>Wall Level 2</span><span style={{ color: 'var(--color-accent)' }}>Significant Bonus</span></div>
                <div className="flex justify-between"><span>Merlon Cover</span><span style={{ color: 'var(--color-accent)' }}>Reduces Incoming Damage</span></div>
                <div className="flex justify-between"><span>Height + Merlons</span><span style={{ color: 'var(--color-accent)' }}>Maximum Effectiveness</span></div>
              </div>
              <p className="font-serif text-xs text-ink-muted italic mt-2">Combine 2-level elevation with merlon cover for best results</p>
            </div>
          </aside>
        </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={ __html: `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How wide should my chokepoint corridor be?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A 3-tile wide corridor is the optimal width for a Going Medieval chokepoint. This width compresses raiders into a tight column for concentrated archer fire, allows center-tile trap placement with settler-safe walking paths on the sides, and permits exactly 3 melee settlers to fight side-by-side at the exit — the maximum that can simultaneously engage. Wider corridors (4+ tiles) reduce trap density and let more enemies reach your melee line at once. Narrower corridors (2 tiles) block settler movement and reduce your melee engagement frontage."
      }
    },
    {
      "@type": "Question",
      "name": "Do chokepoints work against trebuchets?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Chokepoints are designed for infantry control — trebuchets bypass them entirely by attacking your walls from range. When facing trebuchet raids, your chokepoint handles the raider infantry but cannot stop the siege engine. Use a sally port to dispatch a sortie team of 2-3 armored melee settlers directly to the trebuchet while your wall archers and chokepoint defenders handle the raider force. Limestone brick walls are essential for surviving trebuchet bombardment long enough to mount a successful sortie. Wooden and clay walls collapse too quickly against siege projectiles."
      }
    },
    {
      "@type": "Question",
      "name": "Can enemies break through walls instead of using my chokepoint?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Raiders will attack and destroy wall sections if they are significantly shorter paths than walking around to your chokepoint entrance. The AI evaluates path length — not path safety. If your chokepoint forces a long walk-around, raiders may decide that breaking through a nearby wall is the shorter route. Mitigate this by keeping your perimeter walls consistent in strength (avoid weak sections near the chokepoint) and keeping the funnel entrance prominent and unobstructed so pathfinding consistently prefers it. Additionally, raiders with trebuchets will target wall sections regardless of path length — material upgrades (limestone brick) and proactive sortie strikes are the only reliable counter."
      }
    }
  ]
}` } />
      </main>
  );
}
