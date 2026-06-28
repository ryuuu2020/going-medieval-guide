{/* Meta description: Going Medieval drawbridge defense guide — destroyable bridge chokepoints, moat integration, kill zone design, and tactical bridge removal for raid defense. */}
export const metadata = {
  title: "Going Medieval Drawbridge Defense — Gate Design (2026)",
  description:
    "Complete drawbridge defense guide for Going Medieval. Gate design, retraction mechanics, and fortification strategies.",
};


export default function DrawbridgeDefensePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-10">

          {/* ── H1 + Intro ── */}
          <section>
            <h1 className="chapter-heading">Going Medieval Drawbridge Defense Guide</h1>
            <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
              A drawbridge is not a single building in Going Medieval — it is a tactical concept. The game does not feature an animated, chain-raised bridge structure, but it does allow settlers to construct bridges over moats and ditches, and those bridges can be deconstructed or destroyed mid-raid. This destroyable crossing is the closest equivalent to a historical drawbridge, and it is one of the most powerful defensive levers in the game. By building exactly one bridge across your moat and removing it at the right moment, you convert a vulnerability into a killing field. Raiders stranded on a broken bridge are sitting targets for your archers; raiders on the far side must path around the entire moat, funneling directly into your trap corridors and killbox. This guide covers every verified drawbridge mechanic — bridge construction, destroyable segments, moat integration, kill zone design, and the tactical timing of bridge removal during raids. Every recommendation is based on real game mechanics. Data below is based on community testing and is for reference only.
            </p>
          </section>

          {/* ── How Drawbridges Work ── */}
          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">How Drawbridges Work in Going Medieval</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Going Medieval does not have a dedicated "drawbridge" building in the construction menu. Instead, the drawbridge concept is implemented through the interaction of three game systems: bridge construction over terrain gaps, the deconstruction and destruction of built structures, and enemy pathing AI that cannot jump across gaps of 2 or more tiles. When you combine these systems, you get a fully functional drawbridge — a bridge that exists when you need settlers to cross, and ceases to exist when you need enemies to be stopped.
            </p>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              The core mechanic is simple: settlers can build wooden or stone floor tiles across a moat to create a bridge. These floor tiles are structures like any other — they can be designated for deconstruction, and they can be destroyed by enemy attack. When a bridge tile is removed, the gap reverts to an impassable moat. Enemies standing on a bridge tile when it is destroyed or deconstructed will fall into the moat below, becoming stranded and highly vulnerable. This is the drawbridge principle: a destroyable path segment that converts a defensive vulnerability (a hole in your moat) into a tactical weapon.
            </p>
            <p className="font-serif text-base text-ink-light leading-relaxed">
              The critical design rule is that your drawbridge should be the only crossing point over your moat. If enemies have alternative paths, destroying the bridge accomplishes nothing — they simply reroute. But if the bridge is the sole connection between the outside world and your settlement, removing it during a raid forces the entire attacking force to either retreat or path around the full perimeter of the moat, walking directly into your prepared kill zones. For a deeper look at moat construction, see our <a href="/moat-design">moat design guide</a>.
            </p>
            <div className="aged-border p-5" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
              <p className="font-serif text-sm text-ink leading-relaxed">
                <strong className="text-vermillion">Key Concept:</strong>
                {" "}A drawbridge in Going Medieval is a wooden or stone bridge built as the sole crossing over your moat. It is not a mechanical gate — it is a destroyable structure that you remove (via deconstruction or enemy destruction) to break the enemy's only path into your settlement. The "draw" happens through deletion, not animation.
              </p>
            </div>
          </section>

          {/* ── Bridge Materials & Durability ── */}
          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Bridge Materials & Durability</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Bridge tiles in Going Medieval are constructed floor tiles spanning a moat gap. The material you choose for your bridge affects its durability, cost, and tactical behavior. Wooden bridges are cheap and fast to build — ideal for the drawbridge concept because you want a bridge that is easy to both construct and deconstruct. Stone bridges (limestone or limestone brick floor tiles) are more durable but take longer to remove and cost more resources. For a pure drawbridge defense, wood is the preferred material: low cost, quick to rebuild after a raid, and easy to designate for deconstruction when the alarm sounds.
            </p>
            <table className="parchment-table">
              <thead>
                <tr>
                  <th>Bridge Material</th>
                  <th>Durability</th>
                  <th>Construction Cost</th>
                  <th>Deconstruct Time</th>
                  <th>Best Use</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Wooden Floor</td><td>Low</td><td>Wood x1</td><td>Fast</td><td>Drawbridge — easy to remove and rebuild</td></tr>
                <tr><td>Wicker Floor</td><td>Very Low</td><td>Wood x1</td><td>Fast</td><td>Cheapest bridge; emergency crossings</td></tr>
                <tr><td>Limestone Floor</td><td>High</td><td>Limestone x1</td><td>Slow</td><td>Permanent bridges outside raid paths</td></tr>
                <tr><td>Limestone Brick Floor</td><td>Very High</td><td>Limestone Brick x1</td><td>Slow</td><td>Inner settlement bridges, non-combat crossings</td></tr>
                <tr><td>Clay Brick Floor</td><td>Medium</td><td>Clay Brick x1</td><td>Medium</td><td>Transitional bridges, early-mid game</td></tr>
              </tbody>
            </table>
            <p className="font-serif text-sm text-ink-muted italic">Data source: Community testing estimates</p>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4 mt-4">
              The choice of bridge material has tactical implications beyond durability. A wooden bridge can be destroyed by a single settler with a melee weapon in seconds during a raid — you do not even need to wait for the full deconstruction action. Stone bridges require significantly more time and effort to remove, which can be fatal if you need to cut the bridge mid-combat. Always use wood for your drawbridge crossing. If you need a permanent, non-tactical bridge for settler logistics, build it elsewhere — never on your defensive perimeter.
            </p>
          </section>

          {/* ── Moat Integration ── */}
          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Moat Integration: The Foundation of Drawbridge Defense</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              A drawbridge without a moat is just a bridge. The moat is what makes the drawbridge tactically meaningful — it is the impassable barrier that the bridge temporarily breaches. Without the moat, destroying the bridge does nothing; enemies simply walk across the flat ground. The moat must be at least 2 tiles wide to be impassable, as enemy AI cannot jump across gaps of 2 or more tiles. A 3-tile width provides additional safety margin against edge erosion or partial cave-ins.
            </p>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              The bridge should span the narrowest point of your moat, ideally at a single designated gate location. This creates a single chokepoint — the only path from the outside world into your settlement. When a raid is announced, your first action should be to designate the bridge for deconstruction. Settlers with high Construction skill will remove the wooden tiles quickly, and the moat becomes a complete barrier again. Raiders who were mid-crossing are now trapped on bridge remnants or fallen into the moat; the main force on the far side must path around the entire moat perimeter, funneling into your killbox entrance or exposed firing lanes.
            </p>
            <p className="font-serif text-base text-ink-light leading-relaxed">
              If you have a water moat, the drawbridge tactic becomes even more potent. Raiders who fall into a water-filled moat when the bridge is destroyed are not just stranded — they are slowed, taking additional time to wade out (if they can find a climbable edge). This gives your archers extended firing time against stationary or slow-moving targets. For comprehensive moat construction details, including dry vs water moats and winter freezing behavior, see our <a href="/moat-design">moat design guide</a>. For broader defense layouts, see our <a href="/best-defense-layout">best defense layout guide</a>.
            </p>
            <table className="parchment-table">
              <thead>
                <tr>
                  <th>Moat Type</th>
                  <th>Bridge Removal Effect</th>
                  <th>Enemy Behavior</th>
                  <th>Archer Advantage</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Dry Moat (2+ tiles)</td><td>Creates impassable gap; enemies cannot cross</td><td>Paths around moat toward killbox</td><td>Standard — targets moving at normal speed</td></tr>
                <tr><td>Water Moat (warm biome)</td><td>Creates water barrier; fallen enemies are slowed</td><td>Paths around or wades slowly if trapped</td><td>High — slowed targets are easy hits</td></tr>
                <tr><td>Water Moat (cold biome, frozen)</td><td>Frozen water becomes traversable — bridge removal less effective</td><td>Walks across ice if moat is frozen</td><td>Reduced — winter vulnerability</td></tr>
                <tr><td>Dry Moat (3+ tiles)</td><td>Wider gap, maximum safety margin</td><td>Forced to long detour around perimeter</td><td>Extended — longer exposure time</td></tr>
              </tbody>
            </table>
            <p className="font-serif text-sm text-ink-muted italic">Data source: Community testing estimates</p>
          </section>

          {/* ── Kill Zone Design ── */}
          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Kill Zone Design: Where the Drawbridge Delivers</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              The drawbridge is not a standalone defense — it is the gate valve of a larger kill zone system. When the bridge is removed, enemies are funneled around the moat and into your prepared killing fields. The kill zone is the area where you concentrate all your defensive firepower: archer positions, trap corridors, and melee chokepoints. The standard drawbridge kill zone places the bridge at the end of a walled corridor leading directly into a 3-tile wide killbox. When the bridge is intact, it is the only way in. When the bridge is removed, enemies path around the moat and enter through the outer killbox gate — the same destination, but a longer and more dangerous route.
            </p>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Position your archer battlements to cover both the bridge approach and the killbox corridor. When the bridge is still standing (early in the raid, before deconstruction completes), archers fire at raiders clustered at the bridge entrance. When the bridge is removed, archers shift fire to the killbox corridor where enemies are now funneling in. Merlons on the battlement protect archers from return fire. The elevated position provides precision, range, and critical hit bonuses — settlers on 2-level walls with crossbows can devastate an entire raiding party before they reach the first trap. For more on chokepoint warfare, see our <a href="/chokepoint-guide">chokepoint guide</a>.
            </p>
            <p className="font-serif text-base text-ink-light leading-relaxed">
              The kill zone should incorporate multiple layers of delay and damage. Line the corridor with wooden spike traps on center tiles, leaving side paths clear for settler movement. Place iron spike traps in the final 4-6 tiles before the melee defenders — enemies reaching this point are already wounded and easier to finish. Stagger doors along the corridor to force enemies to stop and attack each door, creating prolonged exposure to archer fire. The combination of bridge removal (funneling), traps (damage), doors (delay), and archers (ranged kill) creates a defense that can annihilate raids of 15-20 enemies without a single settler taking damage.
            </p>
            <div className="aged-border p-5" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
              <p className="font-serif text-sm text-ink leading-relaxed">
                <strong className="text-vermillion">Tactical Sequence:</strong>
                {" "}1) Raid announced — designate bridge for deconstruction. 2) Archers take positions on battlements covering bridge approach. 3) Bridge removed — raiders path around moat into killbox. 4) Archers shift fire to killbox corridor. 5) Traps and doors slow raiders in the corridor. 6) Melee defenders hold the corridor exit. 7) After raid, rebuild wooden bridge — cost is minimal.
              </p>
            </div>
          </section>

          {/* ── Tactical Bridge Removal ── */}
          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Tactical Bridge Removal: Timing & Execution</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              The timing of bridge removal is the single most critical decision in drawbridge defense. Remove the bridge too early, and enemies never attempt to cross — they path around from the start, which is fine but less advantageous. Remove it too late, and a significant enemy force may already be across, inside your killbox, and engaging your defenders. The optimal window is when the vanguard of the raiding party has committed to the bridge crossing — the first 2-3 enemies are on or approaching the bridge, with the main force behind them.
            </p>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              To execute the removal, pause the game when the raid announcement appears. Designate all bridge tiles for deconstruction using the cancel/deconstruct tool. Assign your fastest builder (highest Construction skill) to the task by prioritizing the deconstruction order. Resume the game at normal speed. If the builder cannot reach the bridge in time (enemies are too close), you can draft a military settler to destroy the bridge tiles with melee weapons — this is faster than deconstruction but risks the settler being caught on the wrong side. Always have a fallback plan: if the bridge cannot be removed, your killbox must be strong enough to handle the full raiding force coming through the corridor.
            </p>
            <p className="font-serif text-base text-ink-light leading-relaxed">
              An alternative to deconstruction is letting enemies destroy the bridge themselves. If your bridge is made of wood and leads into a dead-end trap corridor, enemies will path across it, enter the corridor, and become trapped. Your archers and melee defenders eliminate them inside the corridor. The bridge remains intact for the next wave, but the dead-end design means enemies who cross are guaranteed to die in your killbox. This is riskier than active bridge removal — it relies on your killbox being lethal enough to handle the full force — but it requires less micro-management and no builder time during the raid.
            </p>
          </section>

          {/* ── Multi-Layer Defense with Drawbridge ── */}
          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Multi-Layer Defense: Drawbridge in the Compound System</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              The drawbridge achieves its full potential when integrated into a multi-layer defense system. A single moat with a single bridge is good; a moat-plus-wall-plus-killbox with a drawbridge gate is devastating. The standard compound layout consists of three sequential obstacles: the moat with drawbridge (outer layer), the walled killbox corridor (middle layer), and the inner stronghold wall (final layer). Each layer wears down the assault independently, and the drawbridge controls which layer the enemy reaches first.
            </p>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              In the standard configuration, the drawbridge spans the moat and leads directly to the killbox gate. When the bridge is removed, enemies must path around the moat — but the only other approach leads to the same killbox gate, just from a longer angle. The moat-to-wall gap (3-4 tiles) is filled with spike traps and exposed firing lanes. Archers on the 2-level wall with merlons fire down into this gap as enemies traverse it. By the time raiders reach the killbox gate, they have already taken trap damage and sustained archer fire. Inside the killbox, the layered defense continues with more traps, doors, and melee defenders.
            </p>
            <p className="font-serif text-base text-ink-light leading-relaxed">
              The inner stronghold serves as the fallback position. If the outer layers fail — the killbox is breached, the gate is destroyed, and enemies pour in — all settlers retreat behind the inner wall. The inner wall should be limestone or limestone brick, the most durable materials available. The inner gate has its own trap approach and archer positions. The drawbridge concept can be repeated here: if the inner stronghold has its own mini-moat or ditch segment with a wooden bridge, that bridge can also be removed to create a final barrier. For the complete multi-layer framework, see our <a href="/best-defense-layout">best defense layout guide</a> and our <a href="/defense">general defense guide</a>.
            </p>
          </section>

          {/* ── FAQ ── */}
          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
            <div className="faq-snippets">
              <details>
                <summary>Does Going Medieval have an actual drawbridge building?</summary>
                <p>No. Going Medieval does not have a dedicated animated drawbridge structure in the construction menu. The drawbridge concept is achieved by building a wooden bridge (floor tiles) across a moat and then deconstructing or destroying those tiles during a raid. The game's construction system includes floor tiles, doors, and gates — but no mechanical bridge that raises or lowers. The "drawbridge" is a player-created tactic using destroyable structures, not a built-in game mechanic. This guide uses the term "drawbridge" to describe this destroyable bridge concept, which is the standard community terminology.</p>
              </details>
              <details>
                <summary>What happens to enemies on the bridge when it is destroyed?</summary>
                <p>When bridge tiles are deconstructed or destroyed while enemies are standing on them, the enemies fall into the moat below. In a dry moat, they are stranded at the bottom and must find a climbable edge to exit — which, if you have stone-lined the inner wall, may be impossible. In a water moat, they are further slowed by the water and become easy targets for archers. Enemies on bridge tiles that are removed are effectively removed from the fight, either permanently trapped or forced to spend significant time escaping. This is one of the strongest tactical advantages of the drawbridge concept.</p>
              </details>
              <details>
                <summary>Should I use wood or stone for my drawbridge?</summary>
                <p>Always use wood for your drawbridge crossing. Wooden floor tiles are cheap (1 wood each), fast to build, and fast to deconstruct — all critical properties for a structure you intend to remove and rebuild repeatedly. Stone bridges (limestone, limestone brick) are far more durable but take significantly longer to deconstruct, which can be fatal if you need to cut the bridge mid-raid. The whole point of a drawbridge is that it is easy to remove; stone defeats that purpose. If you need a permanent bridge for settler logistics, build it in a non-defensive location away from your moat perimeter.</p>
              </details>
              <details>
                <summary>Can enemies destroy my bridge before I do?</summary>
                <p>Yes. Enemies can attack and destroy any built structure, including bridge floor tiles. If raiders reach your bridge before you deconstruct it, they may destroy it themselves while trying to cross — but this actually works in your favor, as it breaks the crossing and strands any enemies already on the bridge. The risk is that enemies destroy the bridge and then path around to your killbox, which is the same outcome as if you had removed it yourself. The main concern is enemies getting across before the bridge is destroyed, which is why timing your deconstruction early in the raid is important.</p>
              </details>
              <details>
                <summary>Does the drawbridge work against trebuchet raids?</summary>
                <p>The drawbridge is effective against standard raider attacks but has limited impact against trebuchet siege raids. Trebuchets attack from range and do not need to cross your moat — they bombard your walls from a distance. Bridge removal does not stop siege weapons. Against trebuchets, you must dispatch a sortie team through a sally port to destroy the siege engine directly. However, the drawbridge still helps against the infantry escort accompanying the trebuchet — removing the bridge prevents the ground force from reaching your walls while your sortie handles the siege weapon. Use the drawbridge as one layer of a broader anti-siege strategy.</p>
              </details>
            </div>
          </section>

          {/* ── Last Updated ── */}
          <section>
            <p className="font-serif text-sm text-ink-muted italic">
              Last updated: June 2026. Data source: Community testing estimates. Game mechanics verified against Going Medieval 1.0. Strategies may change with future patches.
            </p>
          </section>

        </div>

        {/* ── Sidebar ── */}
        <aside className="lg:w-[35%] space-y-8 shrink-0">
          <div className="sidebar-block">
            <h3 className="font-display text-lg font-semibold text-ink mb-4">Drawbridge Build Checklist</h3>
            <div className="space-y-3">
              <div className="card p-4">
                <h4 className="font-display text-sm font-semibold text-ink">1. Moat Perimeter</h4>
                <p className="font-serif text-xs text-ink-muted mt-1">2-3 tiles wide, 2 tiles deep, encircling settlement</p>
              </div>
              <div className="card p-4">
                <h4 className="font-display text-sm font-semibold text-ink">2. Wooden Bridge</h4>
                <p className="font-serif text-xs text-ink-muted mt-1">Single crossing, wood floor tiles, easy to deconstruct</p>
              </div>
              <div className="card p-4">
                <h4 className="font-display text-sm font-semibold text-ink">3. Killbox Corridor</h4>
                <p className="font-serif text-xs text-ink-muted mt-1">3-tile wide, 8-12 long, traps on center tiles</p>
              </div>
              <div className="card p-4">
                <h4 className="font-display text-sm font-semibold text-ink">4. Archer Battlements</h4>
                <p className="font-serif text-xs text-ink-muted mt-1">2-level walls, merlons for cover, covers bridge + corridor</p>
              </div>
              <div className="card p-4">
                <h4 className="font-display text-sm font-semibold text-ink">5. Deconstruction Plan</h4>
                <p className="font-serif text-xs text-ink-muted mt-1">Pre-designate bridge for removal; assign fast builder</p>
              </div>
              <div className="card p-4">
                <h4 className="font-display text-sm font-semibold text-ink">6. Fallback Defense</h4>
                <p className="font-serif text-xs text-ink-muted mt-1">Inner stronghold wall in case killbox is breached</p>
              </div>
            </div>
          </div>

          <div className="card p-5">
            <h3 className="font-display text-base font-semibold text-ink mb-3">Bridge Material Comparison</h3>
            <div className="space-y-2 font-serif text-sm text-ink-light">
              <div className="flex justify-between"><span>Wooden Floor</span><span className="text-vermillion">Best for Drawbridge</span></div>
              <div className="flex justify-between"><span>Wicker Floor</span><span className="text-ink-muted">Emergency Only</span></div>
              <div className="flex justify-between"><span>Clay Brick Floor</span><span className="text-ink-muted">Not Recommended</span></div>
              <div className="flex justify-between"><span>Limestone Floor</span><span className="text-ink-muted">Too Slow to Remove</span></div>
              <div className="flex justify-between"><span>Limestone Brick Floor</span><span className="text-ink-muted">Permanent Only</span></div>
            </div>
            <p className="font-serif text-xs text-ink-muted italic mt-3">Wood is optimal: cheap, fast to build, fast to destroy.</p>
          </div>

          <div className="card p-5">
            <h3 className="font-display text-base font-semibold text-ink mb-3">Raid Response Sequence</h3>
            <ol className="space-y-2 font-serif text-sm text-ink-light">
              <li>1. Pause game on raid alert</li>
              <li>2. Designate bridge for deconstruction</li>
              <li>3. Draft settlers to battlements</li>
              <li>4. Assign archers to bridge-cover positions</li>
              <li>5. Resume game — bridge removes as raiders approach</li>
              <li>6. Archers shift fire to killbox corridor</li>
              <li>7. Melee holds corridor exit</li>
              <li>8. Post-raid: rebuild wooden bridge</li>
            </ol>
          </div>

          <div className="card p-5">
            <h3 className="font-display text-base font-semibold text-ink mb-3">Related Guides</h3>
            <div className="flex flex-col gap-2">
              <a href="/defense" className="btn-primary text-center text-sm py-2 px-4">General Defense Guide</a>
              <a href="/moat-design" className="btn-primary text-center text-sm py-2 px-4">Moat Design Guide</a>
              <a href="/chokepoint-guide" className="btn-primary text-center text-sm py-2 px-4">Chokepoint Guide</a>
              <a href="/best-defense-layout" className="btn-primary text-center text-sm py-2 px-4">Best Defense Layout</a>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
