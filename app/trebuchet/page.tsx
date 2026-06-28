export const metadata = {
  title: "Going Medieval Trebuchet Defense — Counter enemy siege (2026)",
  description:
    "Complete trebuchet defense guide for Going Medieval. Counter enemy siege weapons, fortification strategies, and base hardening.",
};


export default function TrebuchetPage() {
  return (
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-10">
            <section>
<h1 className="chapter-heading">How to Defend Against Enemy Trebuchets</h1>
            <div className="aged-border p-5 mb-5" style={{ backgroundColor: 'var(--color-parchment-deep)', borderColor: '#8b2500' }}>
                <p className="font-serif text-sm text-ink leading-relaxed">
                  <strong className="text-vermillion">&#9888; IMPORTANT:</strong> In Going Medieval, players <strong>cannot build, research, or operate trebuchets</strong>. Trebuchets are siege weapons used exclusively by enemy raiders. There is no trebuchet blueprint, no research unlock, and no construction recipe for them in the base game. This guide focuses entirely on identifying, defending against, and recovering from enemy trebuchet attacks.
                </p>
              </div>
            <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
                Enemy trebuchets are the single most dangerous threat your settlement will face in Going Medieval. Unlike standard raiders who must breach your gates or climb your walls, trebuchets can destroy your defenses from a distance — methodically tearing down walls, demolishing rooms, and opening gaps for the rest of the raid to pour through. A raid with trebuchets demands an entirely different defensive approach than a standard raid. This guide covers identification, counter-strategies, damage mitigation, and post-battle recovery.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">When Trebuchets Appear</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Trebuchets are not present in early-game raids. They begin appearing once your settlement wealth and population reach mid-to-late game thresholds. The exact trigger is tied to your colony's overall value — larger, richer settlements attract better-equipped raiders who bring siege equipment. If you've survived your first winter and have 6+ settlers with substantial buildings, food stockpiles, and crafted goods, expect trebuchet raids to enter the threat rotation.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                Raiders with trebuchets typically arrive alongside a larger force that includes both melee and ranged units. The trebuchet itself will be positioned some distance from your walls — typically 15-25 tiles back — and operated by enemy crew. The rest of the raid force will hang back, waiting for the trebuchet to create a breach before advancing. This gives you a critical window to act before the main assault begins.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Identifying a Trebuchet Raid Early</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                The raid notification is your first and best opportunity to prevent disaster. When a raid appears, <strong>pause the game immediately</strong> and assess the raid composition. Trebuchet raids have distinct characteristics that separate them from standard attacks:
              </p>
              <div className="space-y-3">
                <div className="recipe-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Raid Size & Composition</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">Trebuchet raids are typically larger than standard raids for your current wealth level. Look for an unusually high enemy count combined with a mix of melee and ranged units. The trebuchet itself appears as a large siege weapon icon on the raid summary, distinct from individual enemy units.</p>
                </div>
                <div className="recipe-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Arrival Angle & Positioning</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">The trebuchet deploys at a distance from your walls — typically 15-25 tiles away. Watch where the raid enters the map edge. If enemy units are spreading out with a large structure being assembled at the rear, you are facing a trebuchet raid. The trebuchet will not engage immediately; it requires setup time before it begins firing.</p>
                </div>
                <div className="recipe-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Setup Time Window</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">After the raid spawns, the trebuchet crew needs time to assemble and position the siege engine. This gives you a brief window — typically 15-30 in-game seconds at 1x speed — before the first projectile launches. This is your window to execute a sortie strike before any damage is done to your walls.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Counter-Strategy 1: Sally Out (Recommended)</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                The most effective and reliable counter to an enemy trebuchet is to sally out and destroy it before it fires, or as early as possible. This is a high-risk, high-reward tactic that requires speed and coordination — but when executed correctly, it neutralizes the trebuchet before it causes any structural damage.
              </p>
              <div className="journal-card p-5 mb-4">
                <h4 className="font-display text-base font-semibold text-ink mb-2">Sally Out Execution Steps</h4>
                <ol className="font-serif text-sm text-ink-light space-y-1 list-decimal list-inside">
                  <li><strong>Pause the game</strong> the moment the raid notification appears and you identify a trebuchet.</li>
                  <li>Select 3-4 of your best melee settlers with the highest combat skills. Equip them with your best weapons and armor.</li>
                  <li>Draft them and order them to move directly toward the trebuchet — do not engage other enemies unless they block the path.</li>
                  <li>Position your archers on walls with clear line of sight to provide covering fire. Target any enemies near the trebuchet or moving to intercept your sortie team.</li>
                  <li>Destroy the trebuchet. Once destroyed, immediately retreat your sortie team back behind your walls.</li>
                  <li>Do not chase fleeing enemies — the priority is getting your settlers back alive.</li>
                </ol>
              </div>
              <div className="aged-border p-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                <p className="font-serif text-sm text-ink leading-relaxed">
                  <strong className="text-vermillion">&#9888; Sortie Risk Warning:</strong> If your sortie team gets bogged down in prolonged combat, they may be overwhelmed by the enemy's main force before they reach the trebuchet. Use high-mobility settlers when possible, and consider equipping them with shields for survivability. If the trebuchet is 25+ tiles from your walls, the sortie risk increases — consider using Strategy 2 instead.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Counter-Strategy 2: Reinforced Roofs & Spread Out</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                If sallying out is not viable — your melee settlers are too few, too weak, or the trebuchet is too far — your next best option is to minimize the damage through structural preparation. This strategy relies on two principles: reinforcing vulnerable roof sections and ensuring no single structure's collapse cripples your colony.
              </p>
              <div className="space-y-3">
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Build Reinforced Roofs Over Critical Areas</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">Trebuchet projectiles come in a high arc and can strike the tops of buildings or land on roofs. Roof collapses can kill settlers standing underneath and destroy interior furnishings. Build stone or limestone block roofs over your great hall, kitchen, hospital, and primary stockpile. Wooden roofs offer no meaningful protection against trebuchet strikes — they will collapse on the first direct hit. Reinforced roofs absorb multiple hits and give you time to respond.</p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Spread Out Key Buildings</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">Do not cluster all critical rooms in one building. A single trebuchet hitting your only kitchen/great hall/storeroom complex can cripple your entire settlement. Spread food storage, cooking facilities, and workshops across separate buildings. If one building falls, the others remain operational. This also forces the trebuchet to re-aim at different targets, wasting enemy time.</p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Build a Secondary Inner Wall</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">Construct an inner defensive ring 5-8 tiles behind your outer wall. When the outer wall is breached by trebuchet fire, your archers gain clear line of sight on enemies advancing through the gap, and your settlers can fall back to the inner wall. This transforms a wall breach from a catastrophe into a controlled kill zone. Accept that the outer wall will take damage — that's its job.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Trebuchet Damage vs Wall Types</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Not all walls are equal against trebuchet fire. Understanding how many hits each wall type can absorb lets you predict which sections will fail first and prioritize your defense accordingly. The table below reflects community testing and observable in-game behavior.
              </p>
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Wall Type</th>
                    <th>Approx. Hits to Breach</th>
                    <th>Survival Window</th>
                    <th>Repair Cost</th>
                    <th>Recommendation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="font-semibold">Wooden Wall</td><td>1-2 hits</td><td>Very short — respond immediately</td><td>Wood only (low)</td><td className="text-vermillion">Avoid as outer wall — fails too quickly</td></tr>
                  <tr><td className="font-semibold">Stone Wall</td><td>3-5 hits</td><td>Moderate — time for a sortie or reposition</td><td>Stone blocks (moderate)</td><td className="text-gold">Minimum standard for outer defensive walls</td></tr>
                  <tr><td className="font-semibold">Reinforced Door</td><td>2-3 hits</td><td>Short — doors are weaker than solid walls</td><td>Iron + wood (moderate)</td><td className="text-ink-light">Use sparingly; protect doors with Merlons</td></tr>
                  <tr><td className="font-semibold">Palisade</td><td>1-2 hits</td><td>Very short</td><td>Wood only (low)</td><td>Early-game only; upgrade to stone ASAP</td></tr>
                </tbody>
              </table>
              <p className="font-serif text-sm text-ink-muted italic mt-2">Hit counts are community estimates based on combat testing. Actual hits to breach may vary based on trebuchet type, projectile, and game version.</p>
              <p className="font-serif text-base text-ink-light leading-relaxed mt-4">
                Stone walls are the minimum viable defense against trebuchets. If your outer wall is still wood or palisade when trebuchet raids begin appearing, prioritize upgrading to stone immediately. A wooden wall can be breached in a single volley, giving you no time to react. Merlons placed atop walls provide cover for your archers but will also take damage from trebuchet strikes — expect to lose merlons during sustained bombardment.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">After-Battle Repair Strategy</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Win or lose, a trebuchet raid leaves damage. Your walls will have holes, merlons may be destroyed, and roofs may have collapsed. The post-battle period is critical — you must repair before the next raid arrives, or the next trebuchet will breach your already-weakened defenses with even fewer shots.
              </p>
              <div className="space-y-3">
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">1. Assess All Damage Immediately</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">After the raid is defeated or retreats, scan your entire perimeter. Look for wall breaches, destroyed merlons, collapsed roof sections, and damaged doors. Every gap in your outer wall is an invitation for the next raid to walk straight in. Pause the game and mark repair orders on all damaged structures before your settlers return to normal tasks.</p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">2. Prioritize Outer Wall Repairs</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">The outer wall is priority #1. Even a single missing wall tile turns your entire perimeter into an open path for enemies. If you use the inner wall strategy, repair the outer wall first — you want both layers operational before the next raid. Assign your highest-Construction-skill settlers to wall repair; lower-skill settlers can handle merlon and roof repairs.</p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">3. Restock Ammo & Weapons</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">Check your arrow/bolt stockpiles. A trebuchet raid often involves an extended firefight. Replenish ammunition at your defensive positions. Check weapon durability — settlers with damaged weapons will be less effective in the next fight.</p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">4. Evaluate Defense Upgrade Needs</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">If the trebuchet breached your wall in 3 hits, that wall needs upgrading. If your merlons were all destroyed, build thicker merlon coverage. If the trebuchet was positioned 15 tiles from your wall and you couldn't reach it in time, consider extending your wall further out or adding a forward defensive position. Every trebuchet raid is a lesson in what your defenses lack.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
              <div className="faq-item">
                <details>
                  <summary>Can I build my own trebuchet to fight back?</summary>
                  <p>No. Going Medieval does not include player-buildable trebuchets. There is no trebuchet research, no construction recipe, and no way for settlers to operate siege weapons. The only trebuchets in the game are enemy siege weapons. Your counter-options are limited to sallying out with melee settlers or mitigating damage through structural defenses. Do not waste time searching for a trebuchet blueprint — it does not exist in the base game.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>Do moats or drawbridges stop trebuchet fire?</summary>
                  <p>Moats and drawbridges stop ground units from reaching your walls, but they do NOT stop trebuchet projectiles. Trebuchets fire in a high arc over obstacles, so a moat provides zero protection against bombardment. However, a moat combined with a drawbridge prevents enemy melee units from rushing through a trebuchet-made breach — the moat is still useful, just not against the trebuchet itself.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>Can I bait the trebuchet to target a specific wall section?</summary>
                  <p>Trebuchets appear to target the nearest or largest structure. You cannot directly control what the enemy trebuchet aims at. However, you can influence targeting by building a sacrificial outer wall or tower further out from your main base — the trebuchet may target it first, buying time for your main walls. This is expensive in materials but can be effective if your settlement layout supports it.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>What happens if I ignore the trebuchet and fight the infantry instead?</summary>
                  <p>This is almost always a losing strategy. While you fight the infantry, the trebuchet continues firing unopposed. By the time you defeat the ground troops, your outer wall will be breached and possibly your inner buildings damaged. The better approach is to destroy or distract the trebuchet crew first, then deal with the infantry. If you cannot reach the trebuchet, fight the infantry from behind your strongest remaining wall section and be prepared to retreat to inner defenses.</p>
                </details>
              </div>
            </section>
          </div>

          <aside className="lg:w-[35%] space-y-8 shrink-0">
            <div className="field-sidebar-block">
              <h3 className="font-display text-lg font-semibold text-ink mb-4">Trebuchet Defense Priority</h3>
              <div className="space-y-3">
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">1. Identify Early</h4><p className="font-serif text-xs text-ink-muted mt-1">Pause on raid alert, check for siege weapon icon and large enemy count</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">2. Sally Out</h4><p className="font-serif text-xs text-ink-muted mt-1">Send 3-4 melee settlers to destroy the trebuchet before it fires</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">3. Covering Fire</h4><p className="font-serif text-xs text-ink-muted mt-1">Archers on walls target enemies near the siege engine</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">4. Fallback Plan</h4><p className="font-serif text-xs text-ink-muted mt-1">Inner wall + reinforced roofs if sortie fails or isn't possible</p></div>
              </div>
            </div>
            <div className="journal-card p-5">
              <h3 className="font-display text-base font-semibold text-ink mb-3">Settlement Prep Checklist</h3>
              <div className="space-y-2 font-serif text-sm text-ink-light">
                <div>&bull; Outer wall: Stone (minimum), upgrade from wood/palisade before late-game</div>
                <div>&bull; Inner wall: 5-8 tiles behind outer wall as fallback line</div>
                <div>&bull; Roofs: Stone/limestone over great hall, kitchen, hospital, stockpiles</div>
                <div>&bull; Merlons: Built atop walls for archer cover (will need replacement after hits)</div>
                <div>&bull; Sortie team: 3-4 trained melee settlers with best weapons ready at all times</div>
                <div>&bull; Spreading: Separate buildings instead of one mega-structure</div>
                <div className="mt-2">A trebuchet-ready settlement survives. An unprepared one is demolished.</div>
              </div>
            </div>
            <div className="aged-border p-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
              <p className="font-serif text-xs text-ink leading-relaxed">
                <strong className="text-vermillion">Key Fact:</strong> Players cannot build trebuchets. No blueprint exists. No research unlocks them. This is not a bug or an undiscovered feature — it is how the game is designed. Trebuchets are enemy-only siege weapons. All counter-strategies must use what settlers can actually do: melee sorties, reinforced construction, and smart base layout.
              </p>
            </div>
          </aside>
        </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can I build my own trebuchet to fight back?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Going Medieval does not include player-buildable trebuchets. There is no trebuchet research, no construction recipe, and no way for settlers to operate siege weapons. The only trebuchets in the game are enemy siege weapons. Your counter-options are limited to sallying out with melee settlers or mitigating damage through structural defenses. Do not waste time searching for a trebuchet blueprint — it does not exist in the base game."
      }
    },
    {
      "@type": "Question",
      "name": "Do moats or drawbridges stop trebuchet fire?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Moats and drawbridges stop ground units from reaching your walls, but they do NOT stop trebuchet projectiles. Trebuchets fire in a high arc over obstacles, so a moat provides zero protection against bombardment. However, a moat combined with a drawbridge prevents enemy melee units from rushing through a trebuchet-made breach — the moat is still useful, just not against the trebuchet itself."
      }
    },
    {
      "@type": "Question",
      "name": "Can I bait the trebuchet to target a specific wall section?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Trebuchets appear to target the nearest or largest structure. You cannot directly control what the enemy trebuchet aims at. However, you can influence targeting by building a sacrificial outer wall or tower further out from your main base — the trebuchet may target it first, buying time for your main walls. This is expensive in materials but can be effective if your settlement layout supports it."
      }
    },
    {
      "@type": "Question",
      "name": "What happens if I ignore the trebuchet and fight the infantry instead?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "This is almost always a losing strategy. While you fight the infantry, the trebuchet continues firing unopposed. By the time you defeat the ground troops, your outer wall will be breached and possibly your inner buildings damaged. The better approach is to destroy or distract the trebuchet crew first, then deal with the infantry. If you cannot reach the trebuchet, fight the infantry from behind your strongest remaining wall section and be prepared to retreat to inner defenses."
      }
    }
  ]
}` }} />
      </main>
  );
}
