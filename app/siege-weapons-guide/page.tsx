export const metadata = {
  title: "Going Medieval Siege Weapons Guide — Catapults, Trebuchets & Combat Tactics (2026)",
  description: "Complete Going Medieval siege weapons guide. Learn how to unlock, build, load, and fire catapults and trebuchets. Ammo types, placement strategy, and combat tactics.",
};

export default function SiegeWeaponsGuidePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-10">
          <section>
            <h1 className="chapter-heading">Going Medieval Siege Weapons Guide — Catapults, Trebuchets & Combat Tactics</h1>
            <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
              Siege weapons are the most powerful defensive and offensive tools in Going Medieval, capable of turning the tide of battle with a single well-placed shot. Yet every week on the subreddit, players ask: "Where do I find siege weapons?" "How do I load them?" "Why is my trebuchet not firing?" This comprehensive guide answers every question about siege warfare in Going Medieval. You will learn how to research and unlock siege weapons, build and position them effectively, craft and select the right ammunition for each target, and employ advanced tactics that maximize their devastating potential. Whether you are preparing to defend your castle against a trebuchet-armed raid or planning to besiege an enemy position, this guide covers everything you need to master the art of medieval artillery.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Unlocking Siege Weapons — Research Path</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Siege weapons are not available from the start of the game. You must progress through the research tree to unlock them. The research path is: Basic Engineering (starting tech) → Advanced Construction → Siege Engineering I (unlocks Catapult and Ballista) → Siege Engineering II (unlocks Trebuchet). Each step requires the previous one to be completed, and the later research nodes require higher-tier research benches.
            </p>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Siege Engineering I requires a Research Table II and approximately 800 research points to complete. With one dedicated researcher working full-time, this takes about 5-7 in-game days. Siege Engineering II requires a Research Table III and approximately 1,500 research points, taking 10-12 days of dedicated research. Plan your research queue accordingly — you don{''}t want to be halfway through Siege Engineering II when a trebuchet-armed raid arrives.
            </p>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              After unlocking the research, you must build a Siege Workshop to construct the weapons. The Siege Workshop is a large structure (minimum 4×4 tiles) that must be placed on relatively flat ground. Once built, open its construction menu to select which siege weapon to build. Each weapon requires significant resources and labor to complete — plan ahead and stockpile materials before starting construction.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Siege Weapon Types and Comparison</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Going Medieval features three siege weapons, each with distinct roles. The Catapult is the entry-level siege weapon — relatively cheap to build and fire, moderate range and damage, effective against enemy clusters and light structures. The Trebuchet is the endgame siege weapon — expensive, long reload, but devastating damage that can breach stone walls in 2-3 hits. The Ballista is a precision weapon — very long range, fast reload, but lower damage per shot, ideal for targeting enemy siege equipment or high-value single targets.
            </p>
            <table className="parchment-table">
              <thead>
                <tr>
                  <th>Weapon</th>
                  <th>Range</th>
                  <th>Damage</th>
                  <th>Reload Time</th>
                  <th>Best Target</th>
                  <th>Resource Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Catapult</td><td>Medium (12-18 tiles)</td><td>150 (AoE)</td><td>12 seconds</td><td>Enemy clusters, light walls</td><td>200 Wood, 80 Iron</td></tr>
                <tr><td>Trebuchet</td><td>Long (20-30 tiles)</td><td>300 (AoE)</td><td>20 seconds</td><td>Walls, enemy siege equipment</td><td>300 Wood, 120 Iron</td></tr>
                <tr><td>Ballista</td><td>Very Long (25-35 tiles)</td><td>120 (single)</td><td>8 seconds</td><td>Single targets, enemy trebuchets</td><td>150 Wood, 60 Iron</td></tr>
              </tbody>
            </table>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Ammunition Types and Crafting</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Siege weapons require ammunition to fire, and different ammunition types serve different tactical purposes. Stone Shot is the default ammunition — moderate cost, standard impact damage, good all-around choice. Fire Shot adds burning damage over time and can panic enemy settlers, making it excellent against clustered enemies. Explosive Shot deals massive area-of-effect damage and is the best choice for breaching enemy walls quickly. Scatter Shot (catapult only) fires a wide spread of projectiles ideal for suppressing large enemy groups.
            </p>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Crafting ammunition requires the appropriate workbench and raw materials. Stone Shot is crafted at the Stonemason table using 5 stone per shot. Fire Shot requires the Smelter and uses 3 stone + 2 coal per shot. Explosive Shot requires the Alchemy Table and uses 3 stone + 2 sulfur per shot. Always maintain a stockpile of at least 20-30 shots per siege weapon before engaging in serious combat — you don{''}t want to run out of ammo mid-battle.
            </p>
            <table className="parchment-table">
              <thead>
                <tr>
                  <th>Ammo Type</th>
                  <th>Effect</th>
                  <th>Craft Cost</th>
                  <th>Best Use</th>
                  <th>Weapon Compatibility</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Stone Shot</td><td>Standard impact</td><td>5 Stone</td><td>General purpose</td><td>All weapons</td></tr>
                <tr><td>Fire Shot</td><td>Burning + panic</td><td>3 Stone + 2 Coal</td><td>Enemy clusters</td><td>Catapult, Trebuchet</td></tr>
                <tr><td>Explosive Shot</td><td>Massive AoE</td><td>3 Stone + 2 Sulfur</td><td>Breaching walls</td><td>Catapult, Trebuchet</td></tr>
                <tr><td>Scatter Shot</td><td>Wide spread</td><td>8 Stone</td><td>Large enemy groups</td><td>Catapult only</td></tr>
              </tbody>
            </table>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Placement Strategy and Crew Management</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Proper placement is critical for siege weapon effectiveness. Always place siege weapons on elevated positions — towers, hills, or dedicated platforms. Height increases range by approximately 20% and provides better line of sight over walls and terrain features. Ensure a clear firing arc in front of the weapon — trees, buildings, and terrain obstacles block shots and can cause the weapon to refuse to fire entirely.
            </p>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Crew management is equally important. Each siege weapon requires 1-2 crew members to operate (loader and aimer). Assign settlers with high shooting skill to siege weapon crews — their accuracy affects whether shots land on target. Keep an ammunition stockpile directly adjacent to the weapon; crew members reload from the nearest stockpile, and every tile of walking distance adds 1-2 seconds to reload time. Finally, protect your crews — siege weapon operators are vulnerable to enemy archers and should be behind cover (half-walls or battlements).
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-6">Frequently Asked Questions</h2>

            <div className="aged-border p-5 mb-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
              <h3 className="font-display text-lg font-semibold text-ink mb-2">Why won{''}t my trebuchet fire?</h3>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                The most common cause is lack of ammunition. Check that you have the correct ammunition type in a stockpile adjacent to the trebuchet. Second, ensure the firing arc is clear — trees, buildings, or terrain within the weapon{''}s arc will block firing. Third, verify that a crew member is assigned and available (not sleeping, eating, or fighting). Finally, the target must be within range — trebuchets have a minimum range of about 10 tiles as well as a maximum range.
              </p>
            </div>
            <div className="aged-border p-5 mb-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
              <h3 className="font-display text-lg font-semibold text-ink mb-2">How many siege weapons should I build?</h3>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                For a standard colony defense, 2 catapults or 1 trebuchet plus 1 ballista is sufficient. Place them on opposite sides of your gatehouse to create crossfire. For endgame defense against trebuchet-armed raids, you need at least 2 trebuchets to destroy enemy siege equipment before it destroys your walls. Always build redundancy — if your only siege weapon is destroyed, you have no heavy firepower left.
              </p>
            </div>
            <div className="aged-border p-5 mb-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
              <h3 className="font-display text-lg font-semibold text-ink mb-2">Can I move siege weapons after placing them?</h3>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                Siege weapons cannot be moved after placement — they are fixed emplacements. Choose their positions carefully before building. If you must relocate a siege weapon, the only option is to deconstruct it (recovering 50% of materials) and rebuild at the new location. This takes significant time and labor, so proper initial placement is essential.
              </p>
            </div>
            <div className="aged-border p-5 mb-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
              <h3 className="font-display text-lg font-semibold text-ink mb-2">Do siege weapons work in the rain?</h3>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                Yes, siege weapons function in all weather conditions. However, crew members may seek shelter during heavy rain if their current needs are urgent, temporarily leaving the weapon unmanned. Assign military-status crew members to siege weapons — they prioritize their combat duty over personal needs and are less likely to abandon their post during inclement weather.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-ink mb-4">Related Guides</h2>
            <div className="space-y-2">
              <a href="/defense" className="text-accent hover:text-accent-hover underline">Defense Guide</a>
              <a href="/castle-building-complete-guide" className="text-accent hover:text-accent-hover underline">Castle Building Guide</a>
              <a href="/research" className="text-accent hover:text-accent-hover underline">Research Tech Tree</a>
              <a href="/combat-formation-tactics" className="text-accent hover:text-accent-hover underline">Combat Formation Tactics</a>
              <a href="/endgame-content" className="text-accent hover:text-accent-hover underline">Endgame Content</a>
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
                "name": "Why won't my trebuchet fire?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The most common cause is lack of ammunition. Check that you have the correct ammunition type in a stockpile adjacent to the trebuchet. Ensure the firing arc is clear of obstacles. Verify that a crew member is assigned and available."
                }
              },
              {
                "@type": "Question",
                "name": "How many siege weapons should I build?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "For standard colony defense, 2 catapults or 1 trebuchet plus 1 ballista is sufficient. For endgame defense against trebuchet-armed raids, you need at least 2 trebuchets. Always build redundancy."
                }
              },
              {
                "@type": "Question",
                "name": "Can I move siege weapons after placing them?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Siege weapons cannot be moved after placement. They are fixed emplacements. If you must relocate, deconstruct (50% material recovery) and rebuild. Choose positions carefully before building."
                }
              },
              {
                "@type": "Question",
                "name": "Do siege weapons work in the rain?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, siege weapons function in all weather. However, crew members may seek shelter during heavy rain. Assign military-status crew members to siege weapons — they prioritize duty over personal needs."
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
