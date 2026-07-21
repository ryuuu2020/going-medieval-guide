export const metadata = {
  title: "Going Medieval Religion Guide — Faiths, Shrines & Temples (2026)",
  description:
    "Complete Going Medieval religion guide: settler faiths, shrine and temple construction, prayer schedules, piety mood bonuses, and managing mixed-faith colonies.",
};

const related = [
  { href: "/happiness-guide", label: "Settler Happiness & Mood Guide" },
  { href: "/needs-and-traits", label: "Settler Needs & Traits Explained" },
  { href: "/room-quality-system", label: "Room Quality System Guide" },
  { href: "/great-hall", label: "Great Hall Design Guide" },
  { href: "/recreation-scheduling", label: "Recreation Scheduling Guide" },
  { href: "/beginner-mistakes", label: "Beginner Mistakes to Avoid" },
];

export default function ReligionGuidePage() {
  return (
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-10">
            <section>
              <h1 className="chapter-heading">Religion Guide: Faiths, Shrines & Temples</h1>
              <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
                Religion is one of the quietest systems in Going Medieval — easy to ignore for an entire playthrough, right up until a pious settler's mood collapses because there is nowhere to pray. Every settler arrives with a faith and a personal devotion level, and religious need behaves like hunger or rest: meet it and you earn a steady, passive mood bonus; neglect it and devout settlers slowly sour no matter how good your food and bedrooms are. This guide covers how faith works, what to build, how to schedule prayer, and how to keep a mixed-faith colony stable.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">How Faith Works</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Each settler follows one of the medieval faiths present in the game — most commonly a Christian denomination or the pagan Old Faith — and each has a devotion rating that determines how strongly religion affects their mood. A settler with low devotion barely notices religion at all; a highly devout settler treats prayer as a daily need on par with eating. You can see both values on the settler's character panel, and you should check them for every new recruit before assigning jobs.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                Faith matters mechanically in three ways. First, prayer: devout settlers periodically want to pray at a shrine of their own faith, and fulfilling that want grants a positive mood modifier while denying it stacks a growing negative one. Second, religious surroundings: an impressive temple or church room grants mood bonuses to settlers of the matching faith who spend time in it, scaling with room quality just like a Great Hall. Third, life events: deaths, burials, and raids hit harder when the colony has no consecrated ground or proper rites — a graveyard and a place of worship soften grief across the whole settlement.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Faiths & Their Buildings</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                The core divide is between Christian settlers and Old Faith (pagan) settlers. Each faith uses its own shrine type, and a settler gains nothing from praying at the wrong faith's shrine — a devout Christian standing in front of a pagan shrine is just a settler standing in front of a statue.
              </p>
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Faith</th>
                    <th>Shrine / Worship Building</th>
                    <th>Typical Materials</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Christianity</td><td>Christian shrine; later a full church</td><td>Wood or stone, plus decorations</td><td>Most common settler faith; plan for it from day one</td></tr>
                  <tr><td>Old Faith (pagan)</td><td>Pagan shrine; ritual site</td><td>Wood, stone, natural materials</td><td>Common among recruits from wilderness backgrounds</td></tr>
                  <tr><td>Mixed colony</td><td>One shrine of each faith</td><td>Varies</td><td>Standard end-state for most colonies — build both early</td></tr>
                </tbody>
              </table>
              <p className="font-serif text-sm text-ink-muted italic">Note: building names and requirements can shift between versions — check the in-game Religion/Structures menu for your current build.</p>
              <p className="font-serif text-base text-ink-light leading-relaxed mt-4">
                Shrines are cheap — a handful of wood and a few minutes of construction — so the only real mistake is not building them. Place the first shrine as soon as your second or third settler arrives with visible devotion. A dedicated temple room comes later: enclose the shrine in a proper room, add decorations, lighting, and quality flooring, and the room quality system converts it into a meaningful mood engine for everyone who prays there.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Devotion Tiers & What They Demand</h2>
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Devotion Level</th>
                    <th>Prayer Frequency</th>
                    <th>Mood Impact if Unmet</th>
                    <th>How to Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Indifferent</td><td>Rarely or never</td><td>Negligible</td><td>Ignore religion for this settler entirely</td></tr>
                  <tr><td>Moderate</td><td>Every few days</td><td>Small stacking penalty</td><td>One accessible shrine is enough</td></tr>
                  <tr><td>Devout</td><td>Daily</td><td>Significant penalty over time</td><td>Shrine plus scheduled prayer window</td></tr>
                  <tr><td>Zealous</td><td>Multiple times per day</td><td>Severe — rivals starvation</td><td>Quality temple, generous schedule, never recruit into a shrineless colony</td></tr>
                </tbody>
              </table>
              <p className="font-serif text-base text-ink-light leading-relaxed mt-4">
                The practical takeaway: before accepting a new settler, open their panel and check devotion. A zealous settler is a commitment — they are fantastic workers when their faith is supported, but they will drag colony mood down single-handedly if you recruit them before your shrines and temple are ready. Indifferent and moderate settlers are always safe picks.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Temple Design & Room Quality</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                A worship room follows the same four room-quality factors as any other: spaciousness, wealth, beauty, and cleanliness. A bare shrine in a cramped dirt-floored closet technically works, but an impressive temple multiplies the mood value of every prayer. Target a room at least 6x8 tiles, stone flooring, wall decorations, and braziers or candles for light — darkness penalties apply while praying just as they do anywhere else.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                Placement matters too. Put shrines on natural traffic paths between the Great Hall and the sleeping quarters so prayer slots into existing daily routes instead of competing with them. In mixed colonies, one shared worship hall with a shrine of each faith at opposite ends is far more efficient than two separate temples — settlers path to their own shrine, and the single large room is easier to push to a high quality rating than two small ones.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Scheduling Prayer Like a Need</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Devout settlers will try to pray on their own, but work priorities routinely starve them of the free time to do it — the same failure mode as recreation. The fix is the same, too: carve a dedicated window into the daily schedule. One hour after waking and one hour before bed covers most devotion levels, and grouping prayer time with the evening recreation block in or near the Great Hall lets social, recreation, and spiritual mood bonuses stack in the same window.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                During crunch periods — harvest rushes, siege preparation — it is tempting to delete prayer hours first. Do it for indifferent settlers freely, but keep at least one daily window for the devout and zealous. A settler whose religious need has been unmet for a week arrives at the raid already carrying a mood penalty, which is exactly when you can least afford a mental break.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Managing a Mixed-Faith Colony</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Mixed faiths are the norm, not the exception, and the system is gentler than it looks: settlers of different faiths do not fight over religion by default. The real risks are logistical — forgetting to build the minority faith's shrine, or seating arrangements and schedules that leave one faith's members without access during prayer hours.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                Keep both shrines built and both faiths' prayer windows open, and check the Needs panel of new recruits during their first week to confirm they are actually using the shrine. If a settler's religious mood modifier never turns green, the usual causes are pathing (shrine too far from their job zone), scheduling (no free hours), or the wrong shrine type for their faith. Fix the logistics before reaching for alcohol and lavish meals — religious deficits do not respond to generic mood boosts for long.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
              <div className="faq-item">
                <details>
                  <summary>Do I need religion at all, or can I ignore it?</summary>
                  <p>You can ignore it only if every settler is indifferent — which almost never happens in practice. Any devout or zealous settler makes at least one shrine mandatory. Since shrines cost a few pieces of wood, there is no good reason to skip them.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>Can settlers convert between faiths?</summary>
                  <p>Faith is generally fixed per settler — plan around what recruits bring rather than trying to change it. This is why screening new settlers for devotion level before accepting them matters so much.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>Is one shared temple with two shrines really enough?</summary>
                  <p>Yes, for most colonies. Settlers only interact with their own faith's shrine, so a shared hall serves both faiths simultaneously. Upgrade to separate temples only when room quality or traffic congestion becomes a problem in a large colony.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>Why is my devout settler still unhappy even with a shrine?</summary>
                  <p>Check three things: the shrine matches their faith, their schedule actually contains free hours to use it, and the worship room is not dark, filthy, or freezing. Room conditions apply during prayer — a shrine in an unlit cellar solves nothing.</p>
                </details>
              </div>
            </section>

            {/* Related Guides */}
            <section className="mt-12 p-6 aged-border rounded">
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Related Guides</h2>
              <ul className="list-disc list-inside font-serif text-base text-ink-light leading-relaxed space-y-2">
                {related.map((r) => (
                  <li key={r.href}>
                    <a href={r.href} className="text-vermillion hover:underline">{r.label}</a>
                  </li>
                ))}
              </ul>
            </section>

            {/* Last Updated */}
            <p className="font-serif text-sm text-ink-muted mt-8">
              Last updated: July 18, 2026
            </p>
          </div>

          <aside className="lg:w-[35%] space-y-8 shrink-0">
            <div className="field-sidebar-block">
              <h3 className="font-display text-lg font-semibold text-ink mb-4">Religion Priority Stack</h3>
              <div className="space-y-3">
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">1. Shrine Access</h4><p className="font-serif text-xs text-ink-muted mt-1">One shrine per faith present | Cheap, non-negotiable</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">2. Schedule Windows</h4><p className="font-serif text-xs text-ink-muted mt-1">Morning + evening prayer hours | Needs free time to matter</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">3. Room Quality</h4><p className="font-serif text-xs text-ink-muted mt-1">Light, floor, decorations, space | Multiplies prayer mood value</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">4. Recruit Screening</h4><p className="font-serif text-xs text-ink-muted mt-1">Check devotion before accepting | Zealous = commitment</p></div>
              </div>
            </div>
            <div className="journal-card p-5">
              <h3 className="font-display text-base font-semibold text-ink mb-3">Temple Setup Checklist</h3>
              <ol className="space-y-2 font-serif text-sm text-ink-light">
                <li>1. Check faiths + devotion of all settlers</li>
                <li>2. Build one shrine per faith present</li>
                <li>3. Enclose in 6x8+ room, stone floor</li>
                <li>4. Add lighting + wall decorations</li>
                <li>5. Schedule daily prayer windows</li>
                <li>6. Verify green prayer modifier in week one</li>
                <li>7. Screen new recruits for zealotry</li>
              </ol>
            </div>
          </aside>
        </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do I need religion at all, or can I ignore it?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can ignore it only if every settler is indifferent — which almost never happens in practice. Any devout or zealous settler makes at least one shrine mandatory. Since shrines cost a few pieces of wood, there is no good reason to skip them."
      }
    },
    {
      "@type": "Question",
      "name": "Can settlers convert between faiths?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Faith is generally fixed per settler — plan around what recruits bring rather than trying to change it. This is why screening new settlers for devotion level before accepting them matters so much."
      }
    },
    {
      "@type": "Question",
      "name": "Is one shared temple with two shrines really enough?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, for most colonies. Settlers only interact with their own faith's shrine, so a shared hall serves both faiths simultaneously. Upgrade to separate temples only when room quality or traffic congestion becomes a problem in a large colony."
      }
    },
    {
      "@type": "Question",
      "name": "Why is my devout settler still unhappy even with a shrine?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Check three things: the shrine matches their faith, their schedule actually contains free hours to use it, and the worship room is not dark, filthy, or freezing. Room conditions apply during prayer — a shrine in an unlit cellar solves nothing."
      }
    }
  ]
}` }} />
      </main>
  );
}
