{/* Meta description: Going Medieval moat design guide — dry moats, water moats, digging strategies, bridge chokepoints, and combining moats with walls for compound defense. */}
export const metadata = {
  title: "Going Medieval Moat Design — Water Defense (2026)",
  description:
    "Complete moat design guide for Going Medieval. Water defenses, drawbridge integration, and fortification strategies.",
};


export default function MoatDesignPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-10">

          {/* ── H1 + Intro ── */}
          <section>
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--color-accent)", fontSize: "3rem", fontWeight: 700, lineHeight: 1.15, marginBottom: "1.5rem" }}>
              Going Medieval Moat Design Guide
            </h1>
            <p className="drop-cap" style={{ fontFamily: "'Lora', serif", color: "var(--color-text)", lineHeight: 1.7, fontSize: "1rem", marginBottom: "1.5rem" }}>
              Moats are one of the most underutilized yet devastatingly effective defensive tools in Going Medieval. While new players often rush to build towering walls, experienced colony architects know that a properly excavated trench can halt a raid before the enemy ever reaches your stone perimeter. The terrain and digging system in Going Medieval allows you to reshape the earth itself — carving dry moats that act as impassable barriers, channeling river water into flooded ditches that slow raiders to a crawl, and combining both with walls to create compound fortifications that multiply your defensive strength. This guide covers every verified moat mechanic in the game: gap widths, water physics, winter freezing, cave-in stability, bridge chokepoints, and multi-layer defensive integration. No speculative mechanics — only what actually works in Foxy Voxel’s colony sim.
            </p>
            <div className="aged-border" style={{ backgroundColor: "var(--color-bg-card)", padding: "1.25rem", borderRadius: "3px 16px 3px 16px", border: "1px solid var(--color-border)", boxShadow: "1px 2px 6px rgba(0,0,0,0.2)" }}>
              <p style={{ fontFamily: "'Lora', serif", color: "var(--color-text-muted)", fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>
                <strong style={{ color: "var(--color-accent)" }}>Key Insight:</strong> A 2-tile wide dry moat is an impassable barrier. Enemies cannot cross gaps 2 or more tiles wide — they must path around or break through, forcing them into predictable chokepoints you control.
              </p>
            </div>
          </section>

          {/* ── Dry vs Water Moat Comparison ── */}
          <section>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--color-accent)", fontSize: "2rem", fontWeight: 600, marginBottom: "1rem" }}>
              Dry Moats vs Water Moats — Dimensions & Behavior
            </h2>
            <p style={{ fontFamily: "'Lora', serif", color: "var(--color-text)", lineHeight: 1.7, fontSize: "1rem", marginBottom: "1.25rem" }}>
              Choosing between a dry moat and a water moat depends on your biome, proximity to water sources, and the seasonal conditions you face. Dry moats are simpler to construct and function as absolute barriers regardless of temperature. Water moats introduce additional complexity — they slow enemy movement when traversable, but require active water sources and become vulnerable to freezing in cold biomes during winter. Both types can be combined with walls, bridges, and archer positions for layered defense.
            </p>
            <table className="parchment-table" style={{ width: "100%", borderCollapse: "collapse", margin: "1.5rem 0" }}>
              <thead>
                <tr>
                  <th style={{ background: "var(--color-bg-card)", color: "var(--color-accent)", padding: "0.75rem 1rem", textAlign: "left", fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, borderBottom: "2px solid var(--color-accent-gold)" }}>Property</th>
                  <th style={{ background: "var(--color-bg-card)", color: "var(--color-accent)", padding: "0.75rem 1rem", textAlign: "left", fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, borderBottom: "2px solid var(--color-accent-gold)" }}>Dry Moat</th>
                  <th style={{ background: "var(--color-bg-card)", color: "var(--color-accent)", padding: "0.75rem 1rem", textAlign: "left", fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, borderBottom: "2px solid var(--color-accent-gold)" }}>Water Moat</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: "0.75rem 1rem", borderBottom: "1px solid var(--color-divider)", fontFamily: "'Lora', serif", color: "var(--color-text)" }}>Minimum Width</td>
                  <td style={{ padding: "0.75rem 1rem", borderBottom: "1px solid var(--color-divider)", fontFamily: "'Lora', serif", color: "var(--color-text)" }}>2 tiles (impassable)</td>
                  <td style={{ padding: "0.75rem 1rem", borderBottom: "1px solid var(--color-divider)", fontFamily: "'Lora', serif", color: "var(--color-text)" }}>1 tile (traversable but slowed)</td>
                </tr>
                <tr>
                  <td style={{ padding: "0.75rem 1rem", borderBottom: "1px solid var(--color-divider)", fontFamily: "'Lora', serif", color: "var(--color-text)" }}>Optimal Width</td>
                  <td style={{ padding: "0.75rem 1rem", borderBottom: "1px solid var(--color-divider)", fontFamily: "'Lora', serif", color: "var(--color-text)" }}>2-3 tiles wide, 2+ tiles deep</td>
                  <td style={{ padding: "0.75rem 1rem", borderBottom: "1px solid var(--color-divider)", fontFamily: "'Lora', serif", color: "var(--color-text)" }}>2-3 tiles wide, connected to water source</td>
                </tr>
                <tr>
                  <td style={{ padding: "0.75rem 1rem", borderBottom: "1px solid var(--color-divider)", fontFamily: "'Lora', serif", color: "var(--color-text)" }}>Enemy Effect</td>
                  <td style={{ padding: "0.75rem 1rem", borderBottom: "1px solid var(--color-divider)", fontFamily: "'Lora', serif", color: "var(--color-text)" }}>Forces pathing around; cannot cross</td>
                  <td style={{ padding: "0.75rem 1rem", borderBottom: "1px solid var(--color-divider)", fontFamily: "'Lora', serif", color: "var(--color-text)" }}>Slows movement if traversable; impassable at 2+ tiles</td>
                </tr>
                <tr>
                  <td style={{ padding: "0.75rem 1rem", borderBottom: "1px solid var(--color-divider)", fontFamily: "'Lora', serif", color: "var(--color-text)" }}>Winter Vulnerability</td>
                  <td style={{ padding: "0.75rem 1rem", borderBottom: "1px solid var(--color-divider)", fontFamily: "'Lora', serif", color: "var(--color-text)" }}>None — always functional</td>
                  <td style={{ padding: "0.75rem 1rem", borderBottom: "1px solid var(--color-divider)", fontFamily: "'Lora', serif", color: "var(--color-text)" }}>Water freezes in cold biomes; moat becomes passable</td>
                </tr>
                <tr>
                  <td style={{ padding: "0.75rem 1rem", borderBottom: "1px solid var(--color-divider)", fontFamily: "'Lora', serif", color: "var(--color-text)" }}>Construction Cost</td>
                  <td style={{ padding: "0.75rem 1rem", borderBottom: "1px solid var(--color-divider)", fontFamily: "'Lora', serif", color: "var(--color-text)" }}>Labor only (digging)</td>
                  <td style={{ padding: "0.75rem 1rem", borderBottom: "1px solid var(--color-divider)", fontFamily: "'Lora', serif", color: "var(--color-text)" }}>Labor + water source channeling</td>
                </tr>
                <tr>
                  <td style={{ padding: "0.75rem 1rem", borderBottom: "1px solid var(--color-divider)", fontFamily: "'Lora', serif", color: "var(--color-text)" }}>Bridge Interaction</td>
                  <td style={{ padding: "0.75rem 1rem", borderBottom: "1px solid var(--color-divider)", fontFamily: "'Lora', serif", color: "var(--color-text)" }}>Bridges can span; destroyable</td>
                  <td style={{ padding: "0.75rem 1rem", borderBottom: "1px solid var(--color-divider)", fontFamily: "'Lora', serif", color: "var(--color-text)" }}>Bridges can span; destroyable</td>
                </tr>
                <tr>
                  <td style={{ padding: "0.75rem 1rem", borderBottom: "1px solid var(--color-divider)", fontFamily: "'Lora', serif", color: "var(--color-text)" }}>Stability Risk</td>
                  <td style={{ padding: "0.75rem 1rem", borderBottom: "1px solid var(--color-divider)", fontFamily: "'Lora', serif", color: "var(--color-text)" }}>Deep digging can trigger cave-ins</td>
                  <td style={{ padding: "0.75rem 1rem", borderBottom: "1px solid var(--color-divider)", fontFamily: "'Lora', serif", color: "var(--color-text)" }}>Deep digging + water weight increases risk</td>
                </tr>
              </tbody>
            </table>
            <p style={{ fontFamily: "'Lora', serif", color: "var(--color-text-muted)", fontSize: "0.85rem", fontStyle: "italic" }}>Data source: Verified in-game mechanics and community testing.</p>
          </section>

          {/* ── Core Mechanics ── */}
          <section>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--color-accent)", fontSize: "2rem", fontWeight: 600, marginBottom: "1rem" }}>
              Core Moat Mechanics
            </h2>

            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--color-accent)", fontSize: "1.4rem", fontWeight: 600, marginTop: "1.5rem", marginBottom: "0.75rem" }}>
              Gap Width & Impassability
            </h3>
            <p style={{ fontFamily: "'Lora', serif", color: "var(--color-text)", lineHeight: 1.7, fontSize: "1rem", marginBottom: "1.25rem" }}>
              The most important moat mechanic in Going Medieval is gap width. Enemies are physically unable to jump across gaps that are 2 or more tiles wide. This is not a debuff or a slowdown — it is a hard pathing block. Raiders encountering a 2-tile dry moat will stop, evaluate alternate routes, and path around it. If you fully encircle your settlement with a 2-3 tile wide dry moat, the only way enemies can reach your walls is through the entry points you deliberately create. This is the foundation of moat-based defense: you are not merely slowing the enemy; you are erasing their freedom of approach and forcing them to walk exactly where you want them to go.
            </p>

            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--color-accent)", fontSize: "1.4rem", fontWeight: 600, marginTop: "1.5rem", marginBottom: "0.75rem" }}>
              Water Physics & Flooding
            </h3>
            <p style={{ fontFamily: "'Lora', serif", color: "var(--color-text)", lineHeight: 1.7, fontSize: "1rem", marginBottom: "1.25rem" }}>
              Water in Going Medieval follows basic fluid physics. When you dig a trench that connects to a river, lake, or other water source, water will flow into the excavated area and fill it to the level of the source. This means you can create artificial water moats by channeling natural water into your defensive perimeter. The key consideration is controlling the flow — if you dig too aggressively or connect too many channels, water can flood areas you did not intend to saturate, potentially damaging underground storage or destabilizing foundations. Plan your water moat channels carefully, using 1-tile wide connector trenches that you can easily block with walls or floors if flooding becomes uncontrolled.
            </p>

            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--color-accent)", fontSize: "1.4rem", fontWeight: 600, marginTop: "1.5rem", marginBottom: "0.75rem" }}>
              Winter Freezing in Cold Biomes
            </h3>
            <p style={{ fontFamily: "'Lora', serif", color: "var(--color-text)", lineHeight: 1.7, fontSize: "1rem", marginBottom: "1.25rem" }}>
              Water moats in cold biomes carry a seasonal vulnerability that can catastrophically undermine your defense. When winter arrives and temperatures drop, standing water in moats will freeze solid. Frozen water becomes a traversable surface — raiders can simply walk across what was previously a water-filled barrier. If your entire defense plan relied on a water moat without an alternative, a mid-winter raid will march straight across the ice and into your settlement. This is not a bug; it is a deliberate seasonal mechanic that forces cold-biome players to either build dry moats instead, maintain secondary defensive lines, or prepare to respond differently during frozen months. Always plan an alternative defense for winter if you use water moats in a cold climate.
            </p>

            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--color-accent)", fontSize: "1.4rem", fontWeight: 600, marginTop: "1.5rem", marginBottom: "0.75rem" }}>
              Cave-In Stability Risk
            </h3>
            <p style={{ fontFamily: "'Lora', serif", color: "var(--color-text)", lineHeight: 1.7, fontSize: "1rem", marginBottom: "1.25rem" }}>
              Going Medieval uses a stability system for terrain and structures. Digging too deep — especially in areas with overhead soil or rock — can cause cave-ins that collapse the moat walls and potentially injure settlers working nearby. A moat that is 2 tiles deep is generally safe in most soil types. Pushing to 3 or more tiles deep increases stability risk significantly, particularly if the moat runs adjacent to buildings or under steep terrain. If you need a deep moat, consider reinforcing the edges with constructed walls or floors to provide structural support. A collapsed moat is worse than no moat at all: it creates an irregular pit that may be partially traversable and leaves a breach in your defensive line.
            </p>
          </section>

          {/* ── Step-by-Step Construction ── */}
          <section>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--color-accent)", fontSize: "2rem", fontWeight: 600, marginBottom: "1rem" }}>
              Step-by-Step Moat Construction
            </h2>
            <p style={{ fontFamily: "'Lora', serif", color: "var(--color-text)", lineHeight: 1.7, fontSize: "1rem", marginBottom: "1.25rem" }}>
              Building an effective moat requires preparation, correct area marking, and staged excavation. Follow this sequence to ensure your moat is functional, safe, and integrated with your broader defense layout.
            </p>

            <div className="space-y-4">
              <div className="card aged-border" style={{ backgroundColor: "var(--color-bg-elevated)", padding: "1.5rem", borderRadius: "4px 14px 4px 14px", border: "1px solid var(--color-border)", boxShadow: "1px 1px 4px rgba(0,0,0,0.2)" }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--color-accent)", fontSize: "1.2rem", fontWeight: 600, marginBottom: "0.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span className="wax-tag" style={{ display: "inline-block", fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", padding: "0.2rem 0.6rem", borderRadius: "2px 6px 2px 6px", background: "var(--color-accent)", color: "var(--color-bg)" }}>Step 1</span>
                  Survey & Mark the Perimeter
                </h3>
                <p style={{ fontFamily: "'Lora', serif", color: "var(--color-text)", lineHeight: 1.7, fontSize: "0.95rem", margin: 0 }}>
                  Choose a perimeter line 4-6 tiles outside your outer wall. This spacing ensures that trebuchet projectiles aimed at your wall will not land in the moat, and it gives archers on the wall enough range to fire over the moat at approaching enemies. Use the terrain designation tool to mark the moat area for digging. Mark a continuous line with uniform width — 2 tiles minimum for impassability, 3 tiles for maximum safety margin.
                </p>
              </div>

              <div className="card aged-border" style={{ backgroundColor: "var(--color-bg-elevated)", padding: "1.5rem", borderRadius: "4px 14px 4px 14px", border: "1px solid var(--color-border)", boxShadow: "1px 1px 4px rgba(0,0,0,0.2)" }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--color-accent)", fontSize: "1.2rem", fontWeight: 600, marginBottom: "0.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span className="wax-tag" style={{ display: "inline-block", fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", padding: "0.2rem 0.6rem", borderRadius: "2px 6px 2px 6px", background: "var(--color-accent)", color: "var(--color-bg)" }}>Step 2</span>
                  Assign Digging Priority
                </h3>
                <p style={{ fontFamily: "'Lora', serif", color: "var(--color-text)", lineHeight: 1.7, fontSize: "0.95rem", margin: 0 }}>
                  Open the Work menu and ensure Digging is prioritized for at least 2-3 settlers with high Construction or Mining skills. Set the moat zone to high priority so settlers work on it before non-essential hauling or crafting tasks. Large moats require significant labor — a 3-tile wide moat encircling a medium-sized colony can take multiple in-game days to complete. Do not let digging languish at default priority while raids approach.
                </p>
              </div>

              <div className="card aged-border" style={{ backgroundColor: "var(--color-bg-elevated)", padding: "1.5rem", borderRadius: "4px 14px 4px 14px", border: "1px solid var(--color-border)", boxShadow: "1px 1px 4px rgba(0,0,0,0.2)" }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--color-accent)", fontSize: "1.2rem", fontWeight: 600, marginBottom: "0.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span className="wax-tag" style={{ display: "inline-block", fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", padding: "0.2rem 0.6rem", borderRadius: "2px 6px 2px 6px", background: "var(--color-accent)", color: "var(--color-bg)" }}>Step 3</span>
                  Excavate to Depth
                </h3>
                <p style={{ fontFamily: "'Lora', serif", color: "var(--color-text)", lineHeight: 1.7, fontSize: "0.95rem", margin: 0 }}>
                  Dig the moat 2 tiles deep for a safe, stable barrier. A depth of 2 tiles ensures that even if the edges partially collapse, the center remains an impassable trench. Do not exceed 3 tiles deep unless you have reinforced the surrounding terrain with constructed walls or floors. Monitor the stability overlay during deep excavation — if you see red stability warnings, stop digging and reinforce before continuing.
                </p>
              </div>

              <div className="card aged-border" style={{ backgroundColor: "var(--color-bg-elevated)", padding: "1.5rem", borderRadius: "4px 14px 4px 14px", border: "1px solid var(--color-border)", boxShadow: "1px 1px 4px rgba(0,0,0,0.2)" }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--color-accent)", fontSize: "1.2rem", fontWeight: 600, marginBottom: "0.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span className="wax-tag" style={{ display: "inline-block", fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", padding: "0.2rem 0.6rem", borderRadius: "2px 6px 2px 6px", background: "var(--color-accent)", color: "var(--color-bg)" }}>Step 4</span>
                  Channel Water (Optional)
                </h3>
                <p style={{ fontFamily: "'Lora', serif", color: "var(--color-text)", lineHeight: 1.7, fontSize: "0.95rem", margin: 0 }}>
                  If building a water moat, dig a 1-tile wide connecting channel from the nearest river or lake to your moat perimeter. Remove the final dirt block separating the moat from the water source — water will flow in and fill the trench to source level. Once the moat is filled, you can wall up the connector channel to prevent uncontrolled flooding. In cold biomes, plan a backup dry moat segment or maintain a secondary inner wall for winter defense.
                </p>
              </div>

              <div className="card aged-border" style={{ backgroundColor: "var(--color-bg-elevated)", padding: "1.5rem", borderRadius: "4px 14px 4px 14px", border: "1px solid var(--color-border)", boxShadow: "1px 1px 4px rgba(0,0,0,0.2)" }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--color-accent)", fontSize: "1.2rem", fontWeight: 600, marginBottom: "0.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span className="wax-tag" style={{ display: "inline-block", fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", padding: "0.2rem 0.6rem", borderRadius: "2px 6px 2px 6px", background: "var(--color-accent)", color: "var(--color-bg)" }}>Step 5</span>
                  Reinforce with Stone Lining
                </h3>
                <p style={{ fontFamily: "'Lora', serif", color: "var(--color-text)", lineHeight: 1.7, fontSize: "0.95rem", margin: 0 }}>
                  Build stone walls or floors along the inner edge of the moat, facing your settlement. Stone lining prevents enemy raiders from climbing out of the moat if they somehow enter it, and it improves the stability of the moat edge against cave-ins. In the outer edge facing the wilderness, stone lining is optional but recommended for sections near your gate or bridge — any point where enemies will concentrate.
                </p>
              </div>
            </div>
          </section>

          {/* ── Advanced Strategies ── */}
          <section>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--color-accent)", fontSize: "2rem", fontWeight: 600, marginBottom: "1rem" }}>
              Advanced Moat Defense Strategies
            </h2>

            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--color-accent)", fontSize: "1.4rem", fontWeight: 600, marginTop: "1.5rem", marginBottom: "0.75rem" }}>
              Bridge Chokepoint — Controlled Entry
            </h3>
            <p style={{ fontFamily: "'Lora', serif", color: "var(--color-text)", lineHeight: 1.7, fontSize: "1rem", marginBottom: "1.25rem" }}>
              A moat is only as strong as its weakest point — and that point is wherever you need a bridge. Rather than viewing bridges as a vulnerability, treat them as a design feature. Build exactly one bridge across your moat, positioned to lead directly into your killbox corridor. Because enemies cannot cross the moat elsewhere, the entire raider force must funnel across this single bridge. Station melee defenders at the bridge exit and archers on the walls above. If the raid turns desperate, you can deconstruct or destroy the bridge mid-fight, cutting off enemy reinforcements and trapping the vanguard inside your killbox. This is the drawbridge concept in practice: a destroyable path segment that converts a vulnerability into a tactical lever.
            </p>

            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--color-accent)", fontSize: "1.4rem", fontWeight: 600, marginTop: "1.5rem", marginBottom: "0.75rem" }}>
              Double-Layer Defense: Moat → Wall → Settlement
            </h3>
            <p style={{ fontFamily: "'Lora', serif", color: "var(--color-text)", lineHeight: 1.7, fontSize: "1rem", marginBottom: "1.25rem" }}>
              The most robust defensive layout in Going Medieval combines moat and wall into a sequential obstacle chain. Raiders must first cross or circumvent the moat, then breach the wall, and only then enter your settlement. Each layer buys time for your archers to fire and your melee defenders to reposition. The standard double-layer configuration places a 2-3 tile wide dry moat 4-6 tiles outside a 2-level limestone wall. The gap between moat and wall is your buffer zone — fill it with spike traps, pitfalls, or open ground where archers have clear sight lines. Raiders who reach the wall must stop to attack it, and during that pause they are exposed to sustained fire from above.
            </p>

            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--color-accent)", fontSize: "1.4rem", fontWeight: 600, marginTop: "1.5rem", marginBottom: "0.75rem" }}>
              Moat + Archer Towers — Vertical Kill Zones
            </h3>
            <p style={{ fontFamily: "'Lora', serif", color: "var(--color-text)", lineHeight: 1.7, fontSize: "1rem", marginBottom: "1.25rem" }}>
              Build archer towers or wall walkways directly overlooking the moat. When raiders cluster at the moat edge, attempting to path around or waiting to cross a bridge, they are packed into a dense group with limited movement options. Archers firing from elevated positions receive precision and range bonuses, and their arrows rain down into a target-rich environment. If the moat is filled with water, enemies who enter it move slowly — making them even easier targets. The combination of a movement obstacle and elevated ranged fire is one of the highest damage-output defensive configurations in the game. Place merlons on your tower tops to protect archers from enemy return fire during extended engagements.
            </p>

            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--color-accent)", fontSize: "1.4rem", fontWeight: 600, marginTop: "1.5rem", marginBottom: "0.75rem" }}>
              Drawbridge Concept — Destroyable Bridge Segments
            </h3>
            <p style={{ fontFamily: "'Lora', serif", color: "var(--color-text)", lineHeight: 1.7, fontSize: "1rem", marginBottom: "1.25rem" }}>
              Settlers can construct wooden or stone bridges over moats, and these bridges can be deconstructed or destroyed during a raid. A drawbridge is simply a bridge segment built from cheap wood, positioned as the sole crossing over your moat. When a raid begins, your settlers can deconstruct the drawbridge, breaking the path. Raiders already on the bridge are stranded and can be picked off by archers; raiders on the far side must find another route — often pathing around the moat into additional traps or exposed firing lanes. After the raid, rebuild the bridge from the inexpensive material cost. This tactic is particularly effective against early-game raids where enemy numbers are small and pathing alternatives are limited.
            </p>
          </section>

          {/* ── Digging Prioritization & Stone Lining ── */}
          <section>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--color-accent)", fontSize: "2rem", fontWeight: 600, marginBottom: "1rem" }}>
              Digging Prioritization & Stone Lining
            </h2>
            <p style={{ fontFamily: "'Lora', serif", color: "var(--color-text)", lineHeight: 1.7, fontSize: "1rem", marginBottom: "1.25rem" }}>
              Moat construction is labor-intensive, and poor work allocation can leave your defense half-finished when the first raid arrives. In the Work tab, raise Digging to a high priority for settlers with strong Construction or Mining skills. Assign at least two dedicated diggers to the moat project until the perimeter is complete. Avoid assigning your only medic or your only cook to digging duty during this phase — the defensive gain is not worth losing essential colony functions.
            </p>
            <p style={{ fontFamily: "'Lora', serif", color: "var(--color-text)", lineHeight: 1.7, fontSize: "1rem", marginBottom: "1.25rem" }}>
              Stone lining reinforces the moat edge and prevents enemy climbing. In Going Medieval, raiders can sometimes navigate rough terrain or partial slopes, and a sheer dirt wall may be traversable in unexpected ways. A constructed stone wall along the inner moat edge creates a vertical surface that enemies cannot climb. Stone lining also prevents the moat edge from eroding during rain or collapsing from stability failures. Use limestone or clay brick for the lining if available; wooden retaining walls are acceptable in early game but will degrade over time and require replacement.
            </p>
            <div className="aged-border" style={{ backgroundColor: "var(--color-bg-card)", padding: "1.25rem", borderRadius: "3px 16px 3px 16px", border: "1px solid var(--color-border)", boxShadow: "1px 2px 6px rgba(0,0,0,0.2)" }}>
              <p style={{ fontFamily: "'Lora', serif", color: "var(--color-text-muted)", fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>
                <strong style={{ color: "var(--color-danger)" }}>&#9888; Pro Tip:</strong> Do not line the outer edge of the moat with climbable structures. A stone wall facing outward can inadvertently give enemies a foothold to descend into the moat and potentially climb out on the inner side. Keep the outer edge raw dirt or, if lining is necessary, use inward-facing retaining walls that present a smooth outer face.
              </p>
            </div>
          </section>

          {/* ── FAQ ── */}
          <section>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--color-accent)", fontSize: "2rem", fontWeight: 600, marginBottom: "1rem" }}>
              FAQ
            </h2>
            <div className="faq-snippets" style={{ margin: "2rem 0" }}>
              <details style={{ background: "var(--color-bg-elevated)", border: "1px solid var(--color-border)", borderRadius: "3px 12px 3px 12px", padding: "1.25rem", marginBottom: "0.75rem", cursor: "pointer" }}>
                <summary style={{ fontWeight: 600, color: "var(--color-accent)", fontFamily: "'Cormorant Garamond', serif", fontSize: "1.05rem", padding: "0.25rem 0" }}>
                  How wide should my moat be?
                </summary>
                <p style={{ marginTop: "0.75rem", color: "var(--color-text-muted)", lineHeight: 1.7, fontFamily: "'Lora', serif" }}>
                  A dry moat should be 2-3 tiles wide to be impassable. Enemies cannot cross gaps of 2 or more tiles, so 2 tiles is the functional minimum. A 3-tile width provides a safety margin against partial cave-ins or edge degradation. For water moats, 2-3 tiles wide is also ideal — a 1-tile water moat is traversable and only slows enemies, while a 2-tile water moat becomes an impassable barrier when filled. Always match your moat width to your defensive goal: 2+ tiles for absolute barriers, 1 tile for slowdown zones.
                </p>
              </details>
              <details style={{ background: "var(--color-bg-elevated)", border: "1px solid var(--color-border)", borderRadius: "3px 12px 3px 12px", padding: "1.25rem", marginBottom: "0.75rem", cursor: "pointer" }}>
                <summary style={{ fontWeight: 600, color: "var(--color-accent)", fontFamily: "'Cormorant Garamond', serif", fontSize: "1.05rem", padding: "0.25rem 0" }}>
                  Do moats freeze in winter?
                </summary>
                <p style={{ marginTop: "0.75rem", color: "var(--color-text-muted)", lineHeight: 1.7, fontFamily: "'Lora', serif" }}>
                  Water moats freeze in cold biomes during winter. When water freezes, it becomes a solid, traversable surface — enemies can walk across it as if it were ground. This makes water moats unreliable as standalone defenses in cold climates during winter months. Dry moats do not freeze and remain impassable year-round. If you build water moats in a cold biome, always maintain a secondary defensive layer (inner walls, trap corridors, or additional dry moat segments) for winter raid seasons. Alternatively, use dry moats exclusively in cold biomes to avoid seasonal vulnerability entirely.
                </p>
              </details>
              <details style={{ background: "var(--color-bg-elevated)", border: "1px solid var(--color-border)", borderRadius: "3px 12px 3px 12px", padding: "1.25rem", marginBottom: "0.75rem", cursor: "pointer" }}>
                <summary style={{ fontWeight: 600, color: "var(--color-accent)", fontFamily: "'Cormorant Garamond', serif", fontSize: "1.05rem", padding: "0.25rem 0" }}>
                  Can I combine moats with walls?
                </summary>
                <p style={{ marginTop: "0.75rem", color: "var(--color-text-muted)", lineHeight: 1.7, fontFamily: "'Lora', serif" }}>
                  Yes — combining moats with walls is the most effective defensive approach in Going Medieval. The standard configuration is a 2-3 tile wide dry moat placed 4-6 tiles outside a 2-level wall with merlons and archer positions. Raiders must cross the moat (or path around it into your trap zones), then breach the wall, all while taking fire from above. This double-layer system exponentially increases the time and damage required to reach your settlers. You can also add a bridge chokepoint over the moat leading directly into a killbox corridor, turning the combined moat-wall system into a funnel of concentrated death. Every successful late-game colony uses some form of moat-wall compound defense.
                </p>
              </details>
            </div>
          </section>

        </div>

        {/* ── Sidebar ── */}
        <aside className="lg:w-[35%] space-y-8 shrink-0">
          <div className="sidebar-block" style={{ borderLeft: "2px solid var(--color-accent-gold)", paddingLeft: "1.25rem", marginBottom: "2rem" }}>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--color-accent)", fontSize: "1.1rem", fontWeight: 600, marginBottom: "1rem" }}>
              Moat Build Checklist
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <div className="card" style={{ background: "var(--color-bg-elevated)", border: "1px solid var(--color-border)", borderRadius: "4px 14px 4px 14px", padding: "1rem", boxShadow: "1px 1px 4px rgba(0,0,0,0.2)" }}>
                <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.95rem", fontWeight: 600, color: "var(--color-accent)", marginBottom: "0.25rem" }}>1. Perimeter Width</h4>
                <p style={{ fontFamily: "'Lora', serif", fontSize: "0.8rem", color: "var(--color-text-muted)", margin: 0 }}>2 tiles minimum (impassable); 3 tiles recommended</p>
              </div>
              <div className="card" style={{ background: "var(--color-bg-elevated)", border: "1px solid var(--color-border)", borderRadius: "4px 14px 4px 14px", padding: "1rem", boxShadow: "1px 1px 4px rgba(0,0,0,0.2)" }}>
                <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.95rem", fontWeight: 600, color: "var(--color-accent)", marginBottom: "0.25rem" }}>2. Excavation Depth</h4>
                <p style={{ fontFamily: "'Lora', serif", fontSize: "0.8rem", color: "var(--color-text-muted)", margin: 0 }}>2 tiles deep for safety; reinforce if going deeper</p>
              </div>
              <div className="card" style={{ background: "var(--color-bg-elevated)", border: "1px solid var(--color-border)", borderRadius: "4px 14px 4px 14px", padding: "1rem", boxShadow: "1px 1px 4px rgba(0,0,0,0.2)" }}>
                <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.95rem", fontWeight: 600, color: "var(--color-accent)", marginBottom: "0.25rem" }}>3. Water Source</h4>
                <p style={{ fontFamily: "'Lora', serif", fontSize: "0.8rem", color: "var(--color-text-muted)", margin: 0 }}>Channel from river/lake; block connector after fill</p>
              </div>
              <div className="card" style={{ background: "var(--color-bg-elevated)", border: "1px solid var(--color-border)", borderRadius: "4px 14px 4px 14px", padding: "1rem", boxShadow: "1px 1px 4px rgba(0,0,0,0.2)" }}>
                <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.95rem", fontWeight: 600, color: "var(--color-accent)", marginBottom: "0.25rem" }}>4. Bridge Chokepoint</h4>
                <p style={{ fontFamily: "'Lora', serif", fontSize: "0.8rem", color: "var(--color-text-muted)", margin: 0 }}>Single bridge into killbox; destroyable in raids</p>
              </div>
              <div className="card" style={{ background: "var(--color-bg-elevated)", border: "1px solid var(--color-border)", borderRadius: "4px 14px 4px 14px", padding: "1rem", boxShadow: "1px 1px 4px rgba(0,0,0,0.2)" }}>
                <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.95rem", fontWeight: 600, color: "var(--color-accent)", marginBottom: "0.25rem" }}>5. Stone Lining</h4>
                <p style={{ fontFamily: "'Lora', serif", fontSize: "0.8rem", color: "var(--color-text-muted)", margin: 0 }}>Inner edge walls to prevent climbing and cave-ins</p>
              </div>
              <div className="card" style={{ background: "var(--color-bg-elevated)", border: "1px solid var(--color-border)", borderRadius: "4px 14px 4px 14px", padding: "1rem", boxShadow: "1px 1px 4px rgba(0,0,0,0.2)" }}>
                <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.95rem", fontWeight: 600, color: "var(--color-accent)", marginBottom: "0.25rem" }}>6. Winter Backup</h4>
                <p style={{ fontFamily: "'Lora', serif", fontSize: "0.8rem", color: "var(--color-text-muted)", margin: 0 }}>Dry moat segment or inner wall for frozen water moats</p>
              </div>
            </div>
          </div>

          <div className="card" style={{ background: "var(--color-bg-elevated)", border: "1px solid var(--color-border)", borderRadius: "4px 14px 4px 14px", padding: "1.5rem", boxShadow: "1px 1px 4px rgba(0,0,0,0.2)" }}>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--color-accent)", fontSize: "1.1rem", fontWeight: 600, marginBottom: "1rem" }}>
              Moat Defense Tier List
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", fontFamily: "'Lora', serif", fontSize: "0.9rem", color: "var(--color-text)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <span>Dry Moat (2-3 wide)</span>
                <span style={{ color: "var(--color-accent)", fontWeight: 600 }}>S-Tier</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <span>Double-Layer Moat + Wall</span>
                <span style={{ color: "var(--color-accent)", fontWeight: 600 }}>S-Tier</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <span>Bridge Chokepoint</span>
                <span style={{ color: "var(--color-accent-gold)", fontWeight: 600 }}>A-Tier</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <span>Water Moat (Warm Biome)</span>
                <span style={{ color: "var(--color-accent-gold)", fontWeight: 600 }}>A-Tier</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <span>Water Moat (Cold Biome)</span>
                <span style={{ color: "var(--color-danger)", fontWeight: 600 }}>C-Tier</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <span>1-Tile Trench (No Water)</span>
                <span style={{ color: "var(--color-text-muted)", fontWeight: 600 }}>D-Tier</span>
              </div>
            </div>
            <p style={{ fontFamily: "'Lora', serif", fontSize: "0.75rem", color: "var(--color-text-muted)", marginTop: "1rem", fontStyle: "italic" }}>Ranking based on verified impassability, reliability, and integration with compound defense.</p>
          </div>

          <div className="card" style={{ background: "var(--color-bg-elevated)", border: "1px solid var(--color-border)", borderRadius: "4px 14px 4px 14px", padding: "1.5rem", boxShadow: "1px 1px 4px rgba(0,0,0,0.2)" }}>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", color: "var(--color-accent)", fontSize: "1.1rem", fontWeight: 600, marginBottom: "1rem" }}>
              Related Guides
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              <a href="/best-defense-layout" className="btn-primary" style={{ display: "inline-block", textAlign: "center", fontSize: "0.9rem", padding: "0.6rem 1.2rem", textDecoration: "none" }}>Best Defense Layout</a>
              <a href="/crossbow-defense" className="btn-primary" style={{ display: "inline-block", textAlign: "center", fontSize: "0.9rem", padding: "0.6rem 1.2rem", textDecoration: "none" }}>Crossbow Defense</a>
              <a href="/longbow-defense" className="btn-primary" style={{ display: "inline-block", textAlign: "center", fontSize: "0.9rem", padding: "0.6rem 1.2rem", textDecoration: "none" }}>Longbow Defense</a>
              <a href="/raid-defense" className="btn-primary" style={{ display: "inline-block", textAlign: "center", fontSize: "0.9rem", padding: "0.6rem 1.2rem", textDecoration: "none" }}>Raid Defense Guide</a>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
