export const metadata = {
  title: "Going Medieval Wall & Floor Material Upgrade Guide — Change Without Collapse (2026)",
  description: "Learn how to change wall and floor materials in Going Medieval without causing structural collapse. Complete guide covering safe upgrade methods, demolition order, and material swapping.",
};

export default function WallFloorMaterialUpgradePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-10">
          <section>
            <h1 className="chapter-heading">Going Medieval Wall & Floor Material Upgrade Guide — Change Without Collapse</h1>
            <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
              One of the most common questions asked by Going Medieval players is: "How do I change the material of a wall or floor without the whole thing collapsing?" The fear is justified — walls and roofs in Going Medieval are structurally connected, and improper demolition or replacement can cause cascading collapses that destroy entire sections of your base. Fortunately, the game provides safe methods to upgrade materials, but they require understanding how the structural system works. This guide explains the structural mechanics, the correct order for demolishing and replacing walls or floors, how to upgrade from wood to stone without incident, and advanced techniques for large-scale material replacement. Whether you are upgrading a wooden keep to stone or replacing dirt floors with brick, the procedures below will keep your base standing.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Understanding Structural Mechanics in Going Medieval</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Before attempting any material change, you must understand how Going Medieval calculates structural integrity. Walls provide support for roofs and upper floors. A wall can bear load equal to its material{''}s strength value: wood supports less than stone, stone less than brick, and brick less than marble. When you remove a wall, any roof or floor supported by that wall may collapse if no adjacent wall can take up the load. Floors behave similarly — a floor tile is supported by the walls at its edges, and removing a supporting wall can cause floor tiles to collapse.
            </p>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              The key insight is that walls have "structural priority" based on their connection to the ground. A wall that extends from the ground up provides primary support. A wall that sits on a floor or another wall provides secondary support. When upgrading materials, you must never remove a primary-support wall before its replacement is already in place. The safe method is to build the new wall first, then remove the old one — but this requires an extra tile of space. When space is constrained, you must use a temporary support column technique described later in this guide.
            </p>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Floors have their own structural rules. A floor tile is supported by walls along its edges. A 3×3 floor room with walls on all four sides is fully supported. If you remove one wall of that room, the floor tiles adjacent to that wall may become unsupported and collapse. The solution is to temporarily reinforce the floor from below (if underground) or add a temporary support beam before removing the wall. Going Medieval does not have explicit "support beams," but you can use a 1-tile wide wall segment as a temporary support.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Safe Wall Material Upgrade — Step by Step</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              The correct procedure for upgrading a wall from one material to another without collapse is the "build-alongside" method. This works when you have space to place a new wall adjacent to the old one. Step 1: Build the new wall segment(s) in the desired material, positioned so they share a corner or edge with the old wall. Step 2: Verify the new wall is fully built and has structural connection to the ground or a supporting structure. Step 3: Deconstruct the old wall. Because the new wall is already in place, the roof or floor above remains supported and no collapse occurs.
            </p>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              When you don{''}t have space to build alongside (e.g., upgrading a wall in a tight corridor), use the "temporary pillar" method. Place a 1×1 pillar of the new material directly adjacent to the wall you want to upgrade, ensuring it touches the wall and extends from ground to roof. This pillar acts as temporary support. Then deconstruct the old wall in small sections (1-2 tiles at a time), immediately replacing each section with the new material. The temporary pillar maintains structural integrity during the swap. Once the entire wall is replaced, you can remove the temporary pillar if it is no longer needed.
            </p>
            <table className="parchment-table">
              <thead>
                <tr>
                  <th>Method</th>
                  <th>When to Use</th>
                  <th>Risk Level</th>
                  <th>Materials Needed</th>
                  <th>Time Required</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Build-alongside</td><td>Open space available</td><td>Very Low</td><td>New material for full wall</td><td>Moderate</td></tr>
                <tr><td>Temporary pillar</td><td>Tight spaces, corridors</td><td>Low</td><td>Extra material for pillar</td><td>High</td></tr>
                <tr><td>Section-by-section</td><td>Large walls, phased upgrade</td><td>Medium</td><td>New material, temporary supports</td><td>Very High</td></tr>
                <tr><td>Complete rebuild</td><td>Total base redesign</td><td>None (controlled)</td><td>Full new construction</td><td>Extreme</td></tr>
              </tbody>
            </table>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Floor Material Upgrade — Avoiding Collapse</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Upgrading floor materials presents a different challenge. Floors don{''}t "collapse" in the same way as walls, but removing a floor tile that supports furniture or a workbench can cause those items to become "unsupported" and break. More critically, if you remove a floor tile that is part of a multi-floor structure (e.g., a second-story floor), the tiles above may become unsupported. The safe approach is to upgrade floor tiles one at a time, ensuring each tile{''}s replacement is placed before removing the next.
            </p>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              For large floor areas, use the "checkerboard method": upgrade every other tile first (like a checkerboard pattern), then fill in the remaining tiles. This ensures that at no point is a settler or object standing on an unsupported tile. The checkerboard method is slower but virtually eliminates the risk of collapse. For floors above ground level (second story or higher), add temporary support by placing a wall segment directly below the floor tile you are replacing — remove it after the new floor tile is placed.
            </p>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Different floor materials also have different properties. Dirt floors are free but provide no insulation and can become muddy in rain. Wood floors provide basic insulation and are easy to construct. Stone floors provide good insulation and durability. Brick floors are the premium choice — maximum durability, excellent insulation, and visually distinctive. When upgrading, consider not just structural safety but also the functional benefits of the new material. A stone floor in a food storage area helps with temperature control, while a brick floor in the great hall improves room quality and settler mood.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Common Mistakes and How to Avoid Them</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              The most common mistake is removing an entire wall segment at once, especially in a completed room with a roof. This almost always causes roof collapse, which can chain-react to adjacent rooms. Always remove walls in 1-2 tile sections, and never remove a load-bearing wall without first installing replacement support. Another common mistake is upgrading walls while settlers are inside the room — if a collapse does occur, settlers can be injured or killed by falling debris. Clear the area before starting material upgrades.
            </p>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              A third mistake is ignoring the "planned" vs "constructed" state. In Going Medieval, you can plan a wall or floor (blueprint mode) before constructing it. Always plan your entire upgrade sequence before beginning construction. This lets you verify that the new walls or floors form a complete structural system before you start removing old materials. If the plan looks correct, then proceed with construction and demolition in the planned order.
            </p>
            <table className="parchment-table">
              <thead>
                <tr>
                  <th>Mistake</th>
                  <th>Consequence</th>
                  <th>Prevention</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Removing entire wall at once</td><td>Roof collapse, chain reaction</td><td>Remove 1-2 tiles at a time</td></tr>
                <tr><td>Upgrading with settlers present</td><td>Injury/death from debris</td><td>Clear area first</td></tr>
                <tr><td>Not planning upgrade sequence</td><td>Structural gaps, collapse</td><td>Plan all changes before starting</td></tr>
                <tr><td>Removing support before replacement</td><td>Instant collapse</td><td>Build new support first</td></tr>
                <tr><td>Ignoring roof connections</td><td>Roof collapse after upgrade</td><td>Verify roof support after each wall change</td></tr>
              </tbody>
            </table>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-6">Frequently Asked Questions</h2>

            <div className="aged-border p-5 mb-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
              <h3 className="font-display text-lg font-semibold text-ink mb-2">Can I directly "replace" a wall without building a new one?</h3>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                No, Going Medieval does not have a "replace material" function. You must deconstruct the old wall and build a new one in the desired material. The "build-alongside" or "temporary pillar" methods described above are the safest ways to do this without collapse. Plan carefully and never remove a supporting wall before its replacement is ready.
              </p>
            </div>
            <div className="aged-border p-5 mb-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
              <h3 className="font-display text-lg font-semibold text-ink mb-2">What happens if a collapse does occur — can I recover?</h3>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                If a collapse occurs, any walls or floors that lost structural support will be destroyed and drop their materials (partial recovery). Settlers in the area may be injured by falling debris. Immediately pause the game, rescue any injured settlers, and assess the damage. You can rebuild the collapsed sections using the recovered materials. To prevent future collapses, install redundant support (extra walls or pillars) in critical areas.
              </p>
            </div>
            <div className="aged-border p-5 mb-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
              <h3 className="font-display text-lg font-semibold text-ink mb-2">Is it worth upgrading from wood to stone, or should I just rebuild?</h3>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                Upgrading from wood to stone is almost always worth it — stone walls have roughly 3× the health of wood and provide better insulation. If your base layout is good, upgrade in place using the methods in this guide. If your base layout is poor (inefficient room shapes, bad defender sight lines), consider a full rebuild at a new location. The investment in stone upgrade pays off in reduced maintenance and better defense.
              </p>
            </div>
            <div className="aged-border p-5 mb-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
              <h3 className="font-display text-lg font-semibold text-ink mb-2">Do floors need to be upgraded for structural reasons, or just for insulation?</h3>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                Floors don{''}t have structural load-bearing properties in the same way as walls — upgrading floors is primarily for insulation, room quality, and aesthetics. However, if you have a second-story floor, the material does affect how much weight (furniture, settlers) it can support. Stone or brick floors on upper levels are safer than wood if you plan to place heavy furniture or lots of items.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-ink mb-4">Related Guides</h2>
            <div className="space-y-2">
              <a href="/building-material-tiers" className="text-accent hover:text-accent-hover underline">Building Material Tiers</a>
              <a href="/structural-mechanics" className="text-accent hover:text-accent-hover underline">Structural Mechanics</a>
              <a href="/renovation-guide" className="text-accent hover:text-accent-hover underline">Renovation Guide</a>
              <a href="/floor-material-guide" className="text-accent hover:text-accent-hover underline">Floor Material Guide</a>
              <a href="/defensive-construction" className="text-accent hover:text-accent-hover underline">Defensive Construction</a>
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
                "name": "Can I directly replace a wall without building a new one?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No, Going Medieval does not have a replace material function. You must deconstruct the old wall and build a new one. Use the build-alongside or temporary pillar methods to avoid collapse."
                }
              },
              {
                "@type": "Question",
                "name": "What happens if a collapse does occur — can I recover?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "If a collapse occurs, walls or floors lose structural support and drop partial materials. Immediately pause, rescue injured settlers, and assess damage. Rebuild using recovered materials. Install redundant support in critical areas."
                }
              },
              {
                "@type": "Question",
                "name": "Is it worth upgrading from wood to stone, or should I just rebuild?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Upgrading from wood to stone is almost always worth it — stone walls have 3× the health of wood and provide better insulation. If your base layout is good, upgrade in place. If layout is poor, consider a full rebuild."
                }
              },
              {
                "@type": "Question",
                "name": "Do floors need to be upgraded for structural reasons, or just for insulation?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Floors don't have structural load-bearing properties like walls. Upgrading is primarily for insulation, room quality, and aesthetics. However, stone or brick upper-level floors are safer if placing heavy furniture."
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
