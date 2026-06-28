export const metadata = {
  title: "Going Medieval Corner Tower Design — Best Archer Platforms (2026)",
  description: "Build effective corner towers in Going Medieval. Archer platform height, merlon placement, overlapping fire zones, and corner tower construction guide.",
};

export default function CornerTowerPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-10">
          <section>
            <h1 className="chapter-heading">Going Medieval Corner Tower Design — Archer Platform Guide</h1>
            <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
              Corner towers are the single highest-value defensive structure in Going Medieval. Positioned at the corners of your outer wall, a well-designed tower gives archers overlapping fields of fire covering two wall faces simultaneously, elevated shooting advantage over enemies on the ground, and merlon cover that makes them nearly invulnerable to return fire. A standard 3×3 corner tower with a height-2 platform and merlon perimeter can hold off raids far above your colony's current military strength. This guide covers dimensions, construction order, material requirements, archer capacity, fire coverage angles, and upgrade paths from early wood to late-game stone towers.
            </p>
          </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Corner Tower Dimensions and Structural Requirements</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                The optimal corner tower footprint is 3×3 tiles at the base. This provides enough internal floor space for 2-3 archer positions while keeping construction material costs manageable. Larger towers (4×4 or 5×5) provide more capacity but require significantly more material and offer diminishing tactical returns.
              </p>
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Specification</th>
                    <th>Recommended Value</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Footprint</td><td>3×3 tiles</td><td>Balance between space and material cost</td></tr>
                  <tr><td>Platform Height</td><td>Level 2 (1 floor above walls)</td><td>Height 3 for extra range advantage</td></tr>
                  <tr><td>Archer Capacity</td><td>2-3 per tower</td><td>3×3 floor fits 3 archers with merlon cover</td></tr>
                  <tr><td>Merlon Coverage</td><td>Full perimeter, 3 exposed faces</td><td>Leave the inner face open for access stairs</td></tr>
                  <tr><td>Stair Placement</td><td>Interior base (inner face)</td><td>Keep stairs inside walls, not exposed to raids</td></tr>
                  <tr><td>Material (Early)</td><td>Wood frame + wooden floor</td><td>Upgrade to stone ASAP</td></tr>
                  <tr><td>Material (Late)</td><td>Stone/brick walls + stone floor</td><td>High durability, raid-resistant</td></tr>
                </tbody>
              </table>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Overlapping Fire Zones — Maximizing Coverage</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                The primary advantage of corner placement is the ability to cover two wall faces from a single structure. An archer at a corner tower can fire along both the north and west wall faces (for example) from a single elevated position. This means raiders approaching either wall are under fire without you needing two separate archer towers.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                For a rectangular base, four corner towers provide overlapping coverage of all four walls. Each wall face is covered by the towers at both ends. The overlapping fire from two towers means raiders attacking any wall segment are engaged by archers from two elevated positions simultaneously.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                For very long walls (20+ tiles), add mid-wall towers between the corners to ensure no wall segment is beyond effective archer range. Archer range in Going Medieval is approximately 12-15 tiles depending on skill level and bow type.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Merlon Design for Archer Protection</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Merlons are the raised blocks around the perimeter of your tower platform. They provide crucial cover for your archers — without merlons, archers on elevated platforms are exposed to return fire from enemy archers, which can quickly incapacitate your best ranged defenders.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Place merlons on all three outward-facing edges of your 3×3 tower. Leave the inward-facing edge (connecting to your walls) open for settlers to access the tower. The merlon pattern should be alternating — one merlon, one gap, one merlon — allowing your archers to fire from the gaps while ducking behind the merlons between shots.
              </p>
              <div className="aged-border p-5" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                <p className="font-serif text-sm text-ink leading-relaxed">
                  <strong className="text-vermillion">&#9888; Construction Note:</strong> Build the tower base and walls first, then the floor platform, then merlons last. Settlers prioritize construction tasks from the ground up, and trying to build merlons before the floor is in place causes pathing errors. Always complete lower levels before upper ones.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Upgrade Path: Wood to Stone Towers</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Early corner towers should be built quickly from wood to establish defensive coverage as soon as possible. Wood towers are vulnerable to fire attacks in later game stages. Plan to upgrade to stone construction in the mid-game before raids scale to the point where fire is a consistent threat.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Upgrade sequence: (1) Build wooden framework tower immediately in early game. (2) Once your mason is trained and stone quarry is operational, rebuild the walls and floor in cut stone. (3) Replace wooden merlons with stone merlons last — they can be demolished and rebuilt in place without losing the tower structure. (4) Late game: upgrade to brick construction for maximum durability.
              </p>
            </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-6">Frequently Asked Questions</h2>

                <div className="aged-border p-5 mb-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                  <h3 className="font-display text-lg font-semibold text-ink mb-2">How many archers should I put in each tower?</h3>
                  <p className="font-serif text-base text-ink-light leading-relaxed">2-3 archers per 3×3 tower is the practical maximum. More than 3 archers in a 3×3 space leads to pathing conflicts and reduced firing efficiency. If you need more ranged capacity, build additional towers rather than overcrowding existing ones.</p>
                </div>
                <div className="aged-border p-5 mb-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                  <h3 className="font-display text-lg font-semibold text-ink mb-2">Should towers be higher than the walls?</h3>
                  <p className="font-serif text-base text-ink-light leading-relaxed">Yes — towers should be at least 1 level higher than your outer walls. The elevation advantage means tower archers fire over the wall parapet, covering the ground beyond, while wall-level archers only cover the immediate wall perimeter. Height 2 towers on height 1 walls is the standard mid-game setup.</p>
                </div>
                <div className="aged-border p-5 mb-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                  <h3 className="font-display text-lg font-semibold text-ink mb-2">Can enemies destroy my tower directly?</h3>
                  <p className="font-serif text-base text-ink-light leading-relaxed">Yes — enemy siege weapons in late-game raids can target structures including towers. Build towers in stone or brick before you reach the late-game raid tiers. Wood towers are acceptable early but should be upgraded before year 2-3 of gameplay.</p>
                </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-ink mb-4">Related Guides</h2>
            <div className="space-y-2">
                  <a href="/best-defense-layout" className="text-accent hover:text-accent-hover underline">Best Defense Layout</a>
                  <a href="/chokepoint-guide" className="text-accent hover:text-accent-hover underline">Chokepoint Guide</a>
                  <a href="/double-wall-vs-single-wall" className="text-accent hover:text-accent-hover underline">Double Wall Vs Single Wall</a>
                  <a href="/entrance-design" className="text-accent hover:text-accent-hover underline">Entrance Design</a>

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
      "name": "How many archers should I put in each tower?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "2-3 archers per 3×3 tower is the practical maximum. More than 3 archers in a 3×3 space leads to pathing conflicts and reduced firing efficiency. If you need more ranged capacity, build additional towers rather than overcrowding existing ones."
      }
    },
    {
      "@type": "Question",
      "name": "Should towers be higher than the walls?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — towers should be at least 1 level higher than your outer walls. The elevation advantage means tower archers fire over the wall parapet, covering the ground beyond, while wall-level archers only cover the immediate wall perimeter. Height 2 towers on height 1 walls is the standard mid-game setup."
      }
    },
    {
      "@type": "Question",
      "name": "Can enemies destroy my tower directly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — enemy siege weapons in late-game raids can target structures including towers. Build towers in stone or brick before you reach the late-game raid tiers. Wood towers are acceptable early but should be upgraded before year 2-3 of gameplay."
      }
    }
            ]
          })
        }}
      />
    </main>
  );
}
