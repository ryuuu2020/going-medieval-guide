export const metadata = {
  title: "Going Medieval Tips and Tricks — Community Guide (2026)",
  description: "Best Going Medieval tips and tricks from the community. Advanced strategies, hidden mechanics, quality of life improvements, and expert advice.",
};

export default function CommunityTipsPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-10">
          <section>
            <h1 className="chapter-heading">Going Medieval Tips & Tricks — Community Expert Guide</h1>
            <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
              Going Medieval has dozens of non-obvious mechanics that experienced players use to dramatically improve colony performance. Many of these are never explained in tutorials or tooltips — they come from the community's collective experimentation and testing. This guide compiles the most impactful tips and tricks across every major game system: base design shortcuts, farming tricks that double your yields, combat exploits the AI can't counter, settler management hacks that prevent mood spirals, and quality-of-life workflow improvements that save hours of micromanagement. These are the things experienced players wish they knew in their first playthrough.
            </p>
          </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Base Design Tips</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                <strong className="text-ink">Tip 1 — Build outward, not upward early:</strong> In the first year, prioritize expanding your outer wall perimeter before building tall structures. A large, well-defended ground footprint is more valuable than a tall base with minimal interior space.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                <strong className="text-ink">Tip 2 — Use the map edges:</strong> Build your base corner flush against the map edge or a cliff face. Raiders cannot spawn or approach from map boundaries, eliminating one or two full approach directions and reducing the perimeter you need to defend.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                <strong className="text-ink">Tip 3 — Pre-plan your layout before building:</strong> Use the foundation tool to mark out your planned rooms and walls before construction starts. This reveals conflicts between planned structures and lets you adjust the design without wasted construction.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                <strong className="text-ink">Tip 4 — Zone-restrict your chokepoint:</strong> Set a restricted movement zone over your trap corridor and chokepoint area during peacetime. This prevents settlers from wandering through the corridor and triggering their own traps.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Farming and Food Tips</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                <strong className="text-ink">Tip 5 — Harvest before first frost:</strong> Watch the seasonal indicator. In late Autumn, queue harvest orders on all crop zones before frost arrives. Unharvested crops freeze and are lost. A failed harvest can starve a colony during winter.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                <strong className="text-ink">Tip 6 — Stockpile 2× winter food before year 1 ends:</strong> Your colony eats approximately 2-3 food units per settler per day. For 10 settlers, a 90-day winter requires 1800-2700 food units. Build reserves well above this minimum — illness, raid damage to food stores, and spoilage all reduce your actual available food.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                <strong className="text-ink">Tip 7 — Grow varied crops for meal bonuses:</strong> Meals made with multiple ingredients provide better mood bonuses than single-ingredient meals. Grow a mix of grains, vegetables, and produce even if grain is your primary calorie crop.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Combat and Defense Tips</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                <strong className="text-ink">Tip 8 — Check raid size before each defense:</strong> When a raid warning appears, check the raid size in the event log. Compare it to your current military strength. If the raid is notably larger than your previous encounters, do not send settlers out to meet it in the open — pull everyone behind your walls and fight at the chokepoint.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                <strong className="text-ink">Tip 9 — Armor your melee settlers before archers:</strong> Archers should never be in direct melee combat. Melee defenders take all the hits. Every piece of armor on a melee settler saves healing time and prevents the permanent stat penalties from severe wounds. Prioritize armoring your melee line over any other equipment investment.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                <strong className="text-ink">Tip 10 — Let wounded settlers heal before the next raid:</strong> A settler at 50% health fighting the next raid will likely die or take permanent injury. After a difficult raid, dedicate time to healing before the next wave. Assign a healer, keep medicine stocked, and delay expansion plans until your military is at full strength.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Settler Management Tips</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                <strong className="text-ink">Tip 11 — Check settler traits before assigning roles:</strong> Never assign roles randomly. Check each settler's trait list and skill scores. Assign them to roles that match their passions and starting skills. A Farming-passion settler in a farming role levels 2× faster than one with no passion.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                <strong className="text-ink">Tip 12 — Schedule shared mealtimes:</strong> When all settlers eat at the same time, they socialize naturally during the meal. This satisfies social needs without dedicated social time. A synchronized meal schedule is the most efficient way to maintain social need fulfillment.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                <strong className="text-ink">Tip 13 — Track settler mood daily in early game:</strong> Check the colonist panel every in-game morning in your first year. Catch mood problems before they spiral. A settler at 35 mood today is a mental break risk next week — intervene with better meals or room upgrades while there's time.
              </p>
            </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-6">Frequently Asked Questions</h2>

                <div className="aged-border p-5 mb-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                  <h3 className="font-display text-lg font-semibold text-ink mb-2">What is the single most impactful thing I can do to improve my colony?</h3>
                  <p className="font-serif text-base text-ink-light leading-relaxed">Build a proper chokepoint defense before your colony generates enough wealth to attract serious raids. A well-designed single chokepoint with archer coverage eliminates most raid threats without relying on settler combat skill. Defense infrastructure scales better than individual settler power.</p>
                </div>
                <div className="aged-border p-5 mb-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                  <h3 className="font-display text-lg font-semibold text-ink mb-2">What should I research first?</h3>
                  <p className="font-serif text-base text-ink-light leading-relaxed">Prioritize Iron Smelting as your first major research target if you have not unlocked it. Iron weapons and tools are significantly better than stone-tier equivalents across every metric. Once iron production is running, research Advanced Construction for stone cutting. These two techs unlock the highest-impact upgrades in the mid-game.</p>
                </div>
                <div className="aged-border p-5 mb-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                  <h3 className="font-display text-lg font-semibold text-ink mb-2">Is there a good way to handle the food shortage in year 1 winter?</h3>
                  <p className="font-serif text-base text-ink-light leading-relaxed">Three pre-winter actions prevent most food shortages: (1) Plant your largest grain crop in late spring, (2) build a root cellar before autumn harvest, (3) send hunters out during early autumn before snow reduces animal movement. Foraging (berries, mushrooms) provides supplemental calories in autumn. If you still run short, reduce portions via the food policy panel.</p>
                </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-ink mb-4">Related Guides</h2>
            <div className="space-y-2">
                  <a href="/beginners" className="text-accent hover:text-accent-hover underline">Beginners</a>
                  <a href="/defense" className="text-accent hover:text-accent-hover underline">Defense</a>
                  <a href="/farming" className="text-accent hover:text-accent-hover underline">Farming</a>
                  <a href="/settlers" className="text-accent hover:text-accent-hover underline">Settlers</a>

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
      "name": "What is the single most impactful thing I can do to improve my colony?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Build a proper chokepoint defense before your colony generates enough wealth to attract serious raids. A well-designed single chokepoint with archer coverage eliminates most raid threats without relying on settler combat skill. Defense infrastructure scales better than individual settler power."
      }
    },
    {
      "@type": "Question",
      "name": "What should I research first?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Prioritize Iron Smelting as your first major research target if you have not unlocked it. Iron weapons and tools are significantly better than stone-tier equivalents across every metric. Once iron production is running, research Advanced Construction for stone cutting. These two techs unlock the highest-impact upgrades in the mid-game."
      }
    },
    {
      "@type": "Question",
      "name": "Is there a good way to handle the food shortage in year 1 winter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Three pre-winter actions prevent most food shortages: (1) Plant your largest grain crop in late spring, (2) build a root cellar before autumn harvest, (3) send hunters out during early autumn before snow reduces animal movement. Foraging (berries, mushrooms) provides supplemental calories in autumn. If you still run short, reduce portions via the food policy panel."
      }
    }
            ]
          })
        }}
      />
    </main>
  );
}
