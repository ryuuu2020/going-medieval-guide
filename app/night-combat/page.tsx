export const metadata = {
  title: "Going Medieval Night Combat — Fighting at Night (2026)",
  description: "Night combat in Going Medieval. Visibility penalties, torch placement for defense, night raid timing, settler sleep scheduling, and night defense setup.",
};

export default function NightCombatPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-10">
          <section>
            <h1 className="chapter-heading">Going Medieval Night Combat — Nighttime Defense Guide</h1>
            <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
              Raids in Going Medieval can occur at any time of day, including at night — and night combat introduces unique challenges. Visibility is reduced, settler effectiveness may be affected, and most critically, your settlers may be asleep when a raid begins, requiring time to wake, arm, and position before they can defend. A colony that is well-defended during daylight hours can be caught completely unprepared by a night raid if no provisions have been made. This guide covers the night combat mechanics, how to maintain effective defenses through the night hours, torch placement for visibility, and how to schedule your settlers so that military-capable defenders are always available for night alerts.
            </p>
          </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">How Night Affects Combat</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                At night, the ambient light level drops significantly across the map. Settlers and enemies operating in poorly lit areas have reduced visibility, which can affect ranged attack accuracy and detection range. Defenders operating in well-lit positions (near torches, fires, sconces) maintain more of their daytime effectiveness.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Raiders operate at reduced accuracy in dark areas but are not completely ineffective. They still pathfind to your base and attack structures and settlers. The primary disadvantage of night raids for you is the response time — sleeping settlers need to be woken and moved to defensive positions.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Torch and Light Placement for Night Defense</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Place torches, fire sconces, and braziers along your outer wall, at chokepoints, and on archer platforms. Well-lit defensive positions keep your ranged defenders operating at full effectiveness during night raids. The lit zone also gives a visual advantage when raiders enter from darkness into light.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Do not place torches in the approach corridor leading to your chokepoint — you want that zone as dark as possible to disadvantage approaching raiders while your archers on the lit platform fire down on them. Asymmetric lighting (lit platforms, dark approach zone) is a tactical advantage.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Night Watch Scheduling</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Configure at least 1-2 combat-capable settlers to have a waking night schedule while other settlers sleep. These settlers serve as the night watch, available to respond immediately to raid alerts without the delay of waking from sleep.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Rotate night watch duty so no settler permanently suffers a disrupted sleep schedule. A 3-settler rotation — each settler on night watch 2 nights out of every 6 — prevents chronic fatigue while maintaining constant coverage.
              </p>
            </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-6">Frequently Asked Questions</h2>

                <div className="aged-border p-5 mb-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                  <h3 className="font-display text-lg font-semibold text-ink mb-2">Do raids happen more often at night?</h3>
                  <p className="font-serif text-base text-ink-light leading-relaxed">Raid timing in Going Medieval is not biased toward night. Raids can occur at any time. However, night raids feel more dangerous because of the response time issue. Setting up night watch rotation and pre-positioning defenders near military equipment storage reduces this vulnerability.</p>
                </div>
                <div className="aged-border p-5 mb-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                  <h3 className="font-display text-lg font-semibold text-ink mb-2">Can archers fire effectively at night?</h3>
                  <p className="font-serif text-base text-ink-light leading-relaxed">Archers operate at reduced accuracy in dark areas. Keeping your archer platforms well-lit with torches or fire sconces maintains their effectiveness. The accuracy penalty is noticeable at long range — at short-to-medium range within a lit zone, archers remain effective.</p>
                </div>
                <div className="aged-border p-5 mb-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                  <h3 className="font-display text-lg font-semibold text-ink mb-2">Should I keep the front gate locked at night?</h3>
                  <p className="font-serif text-base text-ink-light leading-relaxed">Yes — keep all gates locked at night. A settler manually unlocking a gate during a night raid is a dangerous operation. Instead, assign gate control to your night watch settler and instruct them to manage it during alerts, or leave the gate locked entirely and defend from behind the wall.</p>
                </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-ink mb-4">Related Guides</h2>
            <div className="space-y-2">
                  <a href="/defense" className="text-accent hover:text-accent-hover underline">Defense</a>
                  <a href="/combat-positioning" className="text-accent hover:text-accent-hover underline">Combat Positioning</a>
                  <a href="/chokepoint-guide" className="text-accent hover:text-accent-hover underline">Chokepoint Guide</a>
                  <a href="/best-defense-layout" className="text-accent hover:text-accent-hover underline">Best Defense Layout</a>

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
      "name": "Do raids happen more often at night?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Raid timing in Going Medieval is not biased toward night. Raids can occur at any time. However, night raids feel more dangerous because of the response time issue. Setting up night watch rotation and pre-positioning defenders near military equipment storage reduces this vulnerability."
      }
    },
    {
      "@type": "Question",
      "name": "Can archers fire effectively at night?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Archers operate at reduced accuracy in dark areas. Keeping your archer platforms well-lit with torches or fire sconces maintains their effectiveness. The accuracy penalty is noticeable at long range — at short-to-medium range within a lit zone, archers remain effective."
      }
    },
    {
      "@type": "Question",
      "name": "Should I keep the front gate locked at night?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — keep all gates locked at night. A settler manually unlocking a gate during a night raid is a dangerous operation. Instead, assign gate control to your night watch settler and instruct them to manage it during alerts, or leave the gate locked entirely and defend from behind the wall."
      }
    }
            ]
          })
        }}
      />
    </main>
  );
}
