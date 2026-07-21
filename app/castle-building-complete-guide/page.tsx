export const metadata = {
  title: "Going Medieval Castle Building Complete Guide — Design, Defense, and Construction (2026)",
  description: "Learn how to build an entire castle in Going Medieval. Complete guide covering castle design principles, wall construction, defensive features, interior layout, and fortress optimization strategies.",
};

export default function CastleBuildingCompletePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-10">
          <section>
            <h1 className="chapter-heading">Going Medieval Castle Building Complete Guide — Design, Defense, and Construction</h1>
            <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
              Building a castle in Going Medieval represents the pinnacle of defensive architecture in the game. Unlike simple palisade walls or basic stone fortifications, a true castle integrates multiple defensive layers, strategic chokepoints, overlapping fields of fire, and a self-sustaining interior that can withstand prolonged sieges. A well-designed castle doesn{''}t just protect your settlers — it projects power, controls approaching enemies, and provides a fortress that can house your entire colony comfortably behind impregnable walls. This comprehensive guide covers every aspect of castle construction, from initial site selection and foundation laying to advanced defensive features like murder holes, arrow slits, and concentric wall systems that will make your fortress nearly invulnerable to even the largest raid forces.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Castle Design Principles — Planning Your Fortress</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Before placing a single wall, you must understand the fundamental principles that separate a true castle from a mere fortified enclosure. A castle is not just a wall around your base — it is a carefully engineered defensive system where every element serves a purpose. The key principles are: concentric defense (multiple layers of walls), height advantage (walls and towers higher than enemy reach), fields of fire (clear sight lines for defenders), and compartmentalization (interior divisions to prevent total breach if one wall falls).
            </p>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Site selection is equally critical. The ideal castle location uses natural terrain features to your advantage. Building on a hill or ridge provides inherent height advantage, forcing enemies to attack uphill — a significant combat penalty. If no natural elevation exists, you can create an artificial plateau by digging into a hillside and using the excavated material to build up surrounding areas. Water features like rivers or coastal positions can create natural moats, eliminating approach vectors from those directions entirely.
            </p>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              The footprints of successful castles in Going Medieval typically range from 20×20 tiles for a compact fortress to 40×40 tiles for a sprawling citadel. Larger castles require more materials and construction time but provide superior defensive depth and interior space. For most mid-game colonies (10-15 settlers), a 30×30 footprint offers the best balance between defensibility and resource investment.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Foundation and Wall Construction — Building the Shell</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              The foundation of your castle determines its durability and the materials required. Always begin by laying a complete perimeter outline using wooden platforms or temporary markers to visualize the footprint. Once satisfied with the layout, begin excavation. For stone castles, dig foundations at least 1 tile deep and fill with stone blocks to create a level, stable base. This prevents structural issues and ensures walls can support upper floors or battlements.
            </p>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Wall thickness is a critical design decision. Single-width walls (1 tile thick) are vulnerable to siege weapons and can be compromised by focused enemy attacks. Double-width walls (2 tiles thick) provide significantly more durability and create space for interior features like staircases or storage niches within the wall structure itself. For the outermost curtain wall, double-width construction is strongly recommended. Inner bailey walls can be single-width if resources are constrained.
            </p>
            <table className="parchment-table">
              <thead>
                <tr>
                  <th>Wall Type</th>
                  <th>Thickness</th>
                  <th>Health (Stone)</th>
                  <th>Construction Cost</th>
                  <th>Recommended Use</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Single Wood</td><td>1 tile</td><td>~150</td><td>Low</td><td>Temporary/Early game only</td></tr>
                <tr><td>Single Stone</td><td>1 tile</td><td>~400</td><td>Moderate</td><td>Inner bailey walls</td></tr>
                <tr><td>Double Stone</td><td>2 tiles</td><td>~800</td><td>High</td><td>Outer curtain wall (primary)</td></tr>
                <tr><td>Double Brick</td><td>2 tiles</td><td>~1000</td><td>Very High</td><td>Main keep walls</td></tr>
                <tr><td>Double Marble</td><td>2 tiles</td><td>~1200</td><td>Extreme</td><td>Command posts, gatehouses</td></tr>
              </tbody>
            </table>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Wall height should be at least 3 tiles for the outer curtain wall. This height prevents enemies from simply climbing over and forces them to use siege equipment or find a breach point. For the inner keep, walls of 4-5 tiles create an imposing central stronghold that serves as a final redoubt if outer walls are breached. Remember that settlers can only build walls up to their current construction skill level — plan wall heights accordingly and upgrade later if needed.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Towers, Gatehouses, and Defensive Features</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Towers are the force multipliers of castle defense. Placed at corners and along wall segments every 6-8 tiles, towers provide elevated firing platforms for ranged settlers and create overlapping fields of fire that cover the entire wall face. Square towers are easier to build but round towers (constructed using clever stair-stepping techniques) eliminate blind corners and provide better coverage. Each tower should have at least 2 archers stationed during raids.
            </p>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Gatehouses are the most vulnerable points in any castle and require special attention. Never use a simple door in a castle wall — this creates a single point of failure. Instead, build a proper gatehouse: a tower-like structure spanning the entrance with a heavy door at both the inner and outer faces, creating a kill zone between them. The space between the doors should be 2-3 tiles wide to allow defenders to fire down on enemies trapped in the gateway. Reinforce gatehouse walls to double or triple thickness.
            </p>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Advanced defensive features elevate a good castle to a great one. Arrow slits — narrow vertical openings in walls — allow defenders to fire out while presenting minimal target. Murder holes in gatehouse ceilings let defenders drop stones or fire arrows on enemies in the gateway. Battlements (crenellations) along wall tops provide cover for defenders. While Going Medieval doesn{''}t have dedicated battlement blocks, you can simulate them using alternating 1-tile wall segments and openings along the wall top.
            </p>
            <table className="parchment-table">
              <thead>
                <tr>
                  <th>Defensive Feature</th>
                  <th>Defense Bonus</th>
                  <th>Construction Complexity</th>
                  <th>Priority</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Corner Towers</td><td>High</td><td>Moderate</td><td>Essential</td></tr>
                <tr><td>Interval Towers (every 6-8 tiles)</td><td>Medium-High</td><td>High</td><td>Recommended</td></tr>
                <tr><td>Double Gatehouse</td><td>Very High</td><td>High</td><td>Essential</td></tr>
                <tr><td>Arrow Slits</td><td>Medium</td><td>Moderate</td><td>Recommended</td></tr>
                <tr><td>Concentric Walls</td><td>Extreme</td><td>Very High</td><td>Late game</td></tr>
                <tr><td>Murder Holes</td><td>High</td><td>Moderate</td><td>Optional</td></tr>
              </tbody>
            </table>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Interior Layout — The Bailey and Keep</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              The interior of your castle is divided into the bailey (the open courtyard area within the outer walls) and the keep (the inner stronghold, typically a fortified building or smaller walled enclosure). The bailey should house essential production facilities that don{''}t require noise isolation: smithies, stone workshops, and outdoor livestock pens. Position these away from the keep to reduce fire risk and noise pollution affecting settler rest.
            </p>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              The keep is the castle{''}s heart — the place where your settlers live, eat, and retreat during prolonged sieges. A well-designed keep includes sleeping quarters, a great hall for communal dining and recreation, food storage (root cellar), and a infirmary. The keep should be separated from the outer bailey by its own wall (the inner curtain), creating the concentric defense pattern. Even if enemies breach the outer wall, they must overcome a second fortified line before reaching your settlers.
            </p>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Accessibility within the castle requires careful planning. Wide passages (3+ tiles) allow settlers to move efficiently and prevent bottlenecks during emergency rotations. Staircase placement is critical — wall walkways should be accessible from both the interior and from towers. Consider installing a well in the bailey for firefighting and a secondary escape tunnel (a hidden passage to the exterior) for desperate situations where the castle is about to fall.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-6">Frequently Asked Questions</h2>

            <div className="aged-border p-5 mb-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
              <h3 className="font-display text-lg font-semibold text-ink mb-2">How much stone do I need to build a complete castle?</h3>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                A 30×30 castle with double-thick stone walls (height 3) requires approximately 3,000-4,000 stone blocks for the outer walls alone. Adding towers, gatehouse, inner keep, and interior structures brings the total to 6,000-8,000 stone. Start mining operations early and consider trading for stone if your local geology is poor. A dedicated mining team of 3-4 settlers can stockpile enough stone in 2-3 in-game months.
              </p>
            </div>
            <div className="aged-border p-5 mb-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
              <h3 className="font-display text-lg font-semibold text-ink mb-2">Should I build the entire castle at once or phase the construction?</h3>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                Phased construction is strongly recommended. Phase 1: Build a compact inner keep with basic walls — this protects your settlers immediately. Phase 2: Add the outer curtain wall and gatehouse. Phase 3: Add towers and advanced features. This approach spreads resource costs over time and ensures you have defensible positions at every stage. Attempting to build everything at once often leaves you with an unfinished, vulnerable fortress when the first major raid arrives.
              </p>
            </div>
            <div className="aged-border p-5 mb-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
              <h3 className="font-display text-lg font-semibold text-ink mb-2">Can I build a castle entirely underground?</h3>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                While you can build fortified underground enclosures, a true castle requires surface-level walls to control the approach and provide fields of fire. Fully underground bases sacrifice defensive visibility and make ranged defense nearly impossible. If you prefer underground living, build a conventional castle above and connect it to your underground expansion via staircase — this gives you the defensive benefits of a castle with the comfort of subterranean living.
              </p>
            </div>
            <div className="aged-border p-5 mb-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
              <h3 className="font-display text-lg font-semibold text-ink mb-2">How do I defend the castle during the construction phase?</h3>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                Construction phases are your most vulnerable periods. Deploy temporary wooden palisades around active construction zones, even if they{''}re inside the planned castle footprint. Keep a dedicated combat patrol of 2-3 settlers equipped with bows to intercept scouts. Position your construction workers so they can quickly withdraw behind completed wall sections if raiders appear. Never leave construction unattended overnight — pause work and recall settlers to a defensible position before sunset.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-ink mb-4">Related Guides</h2>
            <div className="space-y-2">
              <a href="/defense" className="text-accent hover:text-accent-hover underline">Defense Guide</a>
              <a href="/double-wall-vs-single-wall" className="text-accent hover:text-accent-hover underline">Double Wall vs Single Wall</a>
              <a href="/killbox-design" className="text-accent hover:text-accent-hover underline">Killbox Design</a>
              <a href="/siege-weapons-guide" className="text-accent hover:text-accent-hover underline">Siege Weapons Guide</a>
              <a href="/building-material-tiers" className="text-accent hover:text-accent-hover underline">Building Material Tiers</a>
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
                "name": "How much stone do I need to build a complete castle?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A 30×30 castle with double-thick stone walls (height 3) requires approximately 3,000-4,000 stone blocks for the outer walls alone. Adding towers, gatehouse, inner keep, and interior structures brings the total to 6,000-8,000 stone. Start mining operations early and consider trading for stone if your local geology is poor."
                }
              },
              {
                "@type": "Question",
                "name": "Should I build the entire castle at once or phase the construction?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Phased construction is strongly recommended. Phase 1: Build a compact inner keep with basic walls. Phase 2: Add the outer curtain wall and gatehouse. Phase 3: Add towers and advanced features. This approach spreads resource costs over time and ensures you have defensible positions at every stage."
                }
              },
              {
                "@type": "Question",
                "name": "Can I build a castle entirely underground?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "While you can build fortified underground enclosures, a true castle requires surface-level walls to control the approach and provide fields of fire. Fully underground bases sacrifice defensive visibility. Build a conventional castle above and connect it to your underground expansion via staircase."
                }
              },
              {
                "@type": "Question",
                "name": "How do I defend the castle during the construction phase?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Construction phases are your most vulnerable periods. Deploy temporary wooden palisades around active construction zones. Keep a dedicated combat patrol of 2-3 settlers equipped with bows to intercept scouts. Never leave construction unattended overnight."
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
