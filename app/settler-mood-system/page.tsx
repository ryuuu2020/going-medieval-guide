{/* Meta description: Going Medieval settler mood system — every documented mood modifier with values and durations, bedroom Impressiveness sleep bonuses, need-based penalties, and what actually happens at low mood. Data from the Going Medieval wiki. */}
export const metadata = {
  title: "Going Medieval Settler Mood System — Modifiers, Values & Thresholds (2026)",
  description:
    "How the Going Medieval settler mood system works: real mood modifier values and durations (Initial Optimism +25, Starving -20, Friend Died -25), bedroom Impressiveness sleep bonuses from Awful -4 to Palatial +12, need penalties, and what happens when mood hits zero.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What happens when mood gets low in Going Medieval?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A settler with low mood can rebel and refuse to follow orders, and if a settler's mood reaches 0 they leave your settlement for good. Mood is the sum of every active modifier on the settler — needs penalties like Starving (-20) and Exhausted (-20) stack with event modifiers like Friend Died (-25 for 128 hours), so several problems at once can push a settler to zero surprisingly fast."
      }
    },
    {
      "@type": "Question",
      "name": "What are the biggest positive mood modifiers in Going Medieval?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The largest documented positives are Initial Optimism (+25 for 180 hours, which is why new settlers arrive happy), Together We Are Strong (+16 for 48 hours after helping someone in need), sleeping in a Palatial private chamber (+12 for 16 hours), Beautiful Surroundings (+10), eating in a Palatial great hall (+10 for 16 hours), and an Exquisite Meal (+8 for 8 hours). Reliable everyday positives are fulfilled entertainment and religious needs (+5 each), Job Satisfaction (+4 for 12 hours), and eating at a table (+4 for 12 hours)."
      }
    },
    {
      "@type": "Question",
      "name": "How much does a good bedroom improve mood in Going Medieval?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The 16-hour sleep modifier scales directly with the bedroom's Impressiveness tier. A private chamber runs from -4 (Awful) through 0 (Uninspiring), +2 (Modest), +4 (Good), +6 (Superior), +8 (Luxurious), +10 (Opulent) up to +12 (Palatial). A shared chamber pays exactly half, from -4 up to +6. Bed comfort is a separate 12-hour modifier from -1 (uncomfortable) to +6 (very comfortable), so the room and the bed stack."
      }
    },
    {
      "@type": "Question",
      "name": "Do mood modifiers stack in Going Medieval?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — every active modifier adds to the settler's current mood, and each has its own duration. Modifiers range from short spikes like Drank Good Beer (+2, 4 hours) to marathon effects like Rival Died (+5, 128 hours) or Acquaintance Died (-10, 128 hours). Because they stack, a death in the colony can wipe out several days of good meals and nice rooms, which is why burying corpses quickly (Saw a Dead Body is -3 for 24 hours, Saw a Friend's Corpse is -4) matters so much after a raid."
      }
    },
    {
      "@type": "Question",
      "name": "How do I fix a settler whose mood is crashing in Going Medieval?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Fix the biggest negative number first, not the easiest one. Hunger and sleep penalties dominate: Ravenous is -15 and Starving -20, Exhausted is -20, so food and rest outrank everything. Then clear event penalties — bury bodies, let grieving settlers ride out the 128-hour death modifiers. Only then add positives: schedule leisure so entertainment and religious needs flip from -8 deprived to +5 fulfilled, serve cooked meals (+4 to +8 for 8 hours), and move the settler into a better bedroom, which is worth up to +12 for 16 hours every single day."
      }
    }
  ]
};

export default function SettlerMoodSystemPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">

      <h1 className="chapter-heading">Going Medieval Settler Mood System: Every Modifier, Every Number</h1>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-6">
        <span className="drop-cap">M</span>ood in Going Medieval is not a vibe — it is arithmetic. Every
        settler carries a running total of named modifiers, each with a fixed value and duration, and the
        game reads that total to decide whether your people work, rebel, or walk. A settler whose mood
        drops low enough can refuse orders entirely, and at zero they simply leave your settlement. The
        modifiers themselves are fully documented, so mood management stops being guesswork the moment
        you know which levers are worth &plusmn;2 and which are worth &plusmn;20. This guide collects the
        real numbers: the big positives, the killers, and the Impressiveness-scaled bonuses that quietly
        do most of the daily work.
      </p>

      {/* Mechanics */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">How Mood Actually Works</h2>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        Each modifier on a settler adds or subtracts points for a set duration — from 4-hour beer buzzes
        to 128-hour grief. They all stack, and the stack <em>is</em> the settler's mood. Two rules follow.
        First, <strong className="text-ink">durations matter as much as values</strong>: a +8 that lasts
        48 hours (Victorious!) is worth far more than a +8 that lasts 4. Second, the deep holes are
        need-based — a starving, exhausted settler is carrying −40 before you count a single event, and
        no amount of fine wine (+2, 4 hours) papers over that.
      </p>

      <div className="aged-border p-4 mb-8">
        <p className="font-serif text-base text-ink-light leading-relaxed">
          <strong>The floor is real:</strong> low mood can make a settler rebel and refuse orders; a mood
          of zero makes them leave the settlement permanently. New arrivals start with Initial Optimism
          (+25 for 180 hours), which is why fresh settlers seem easy to please — the bonus is temporary,
          and their real baseline shows up a week later.
        </p>
      </div>

      {/* Positive table */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">The Positive Levers, Ranked by Value</h2>

      <table className="parchment-table mb-8">
        <thead>
          <tr>
            <th>Modifier</th>
            <th>Value</th>
            <th>Duration</th>
            <th>How to Trigger It</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Initial Optimism</td><td>+25</td><td>180 h</td><td>Automatic for new settlers — spend the grace period building real comforts</td></tr>
          <tr><td>Together We Are Strong</td><td>+16</td><td>48 h</td><td>Take in someone in need (sanctuary event)</td></tr>
          <tr><td>Slept in own quarters (Palatial)</td><td>+12</td><td>16 h</td><td>Private chamber at the top Impressiveness tier</td></tr>
          <tr><td>Beautiful surroundings</td><td>+10</td><td>While present</td><td>Keep living/working areas beautiful</td></tr>
          <tr><td>Ate in great hall (Palatial)</td><td>+10</td><td>16 h</td><td>Meals in a Palatial great hall (scales down by tier)</td></tr>
          <tr><td>Victorious!</td><td>+8</td><td>48 h</td><td>Survive and win a raid</td></tr>
          <tr><td>Ate an Exquisite Meal</td><td>+8</td><td>8 h</td><td>High-quality cooked meals</td></tr>
          <tr><td>Extremely comfortable</td><td>+8</td><td>While present</td><td>Comfortable surroundings/furnishings</td></tr>
          <tr><td>Religious needs fulfilled</td><td>+5</td><td>While fulfilled</td><td>Shrine/chapel/temple of the settler's faith + leisure time</td></tr>
          <tr><td>Entertainment needs fulfilled</td><td>+5</td><td>While fulfilled</td><td>Pastimes (e.g. backgammon) + scheduled leisure</td></tr>
          <tr><td>Ate at a table</td><td>+4</td><td>12 h</td><td>Any table beats eating standing (+2) or on the move</td></tr>
          <tr><td>Job Satisfaction</td><td>+4</td><td>12 h</td><td>Work matching the settler's job preferences</td></tr>
          <tr><td>Slept in very comfortable bed</td><td>+6</td><td>12 h</td><td>Best beds; comfortable +4, nice +2, uncomfortable −1</td></tr>
          <tr><td>Wonderful/pleasant dreams</td><td>+1 to +2</td><td>6–10 h</td><td>Random overnight — free, don't plan around it</td></tr>
        </tbody>
      </table>

      {/* Negative table */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">The Killers: Biggest Negative Modifiers</h2>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        Negatives cluster in three families: <strong className="text-ink">unmet needs</strong> (fixable in
        hours), <strong className="text-ink">grief and horror</strong> (fixable only by time and burial
        detail), and <strong className="text-ink">discomfort</strong> (fixable by construction). Sorted by
        damage:
      </p>

      <table className="parchment-table mb-8">
        <thead>
          <tr>
            <th>Modifier</th>
            <th>Value</th>
            <th>Duration</th>
            <th>Prevention / Fix</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Friend Died</td><td>−25</td><td>128 h</td><td>Can't be prevented, only ridden out — pile on positives</td></tr>
          <tr><td>Butchered someone I knew</td><td>−22</td><td>48 h</td><td>Never assign human butchering to friends of the dead</td></tr>
          <tr><td>Starving / Losing HP</td><td>−20</td><td>While starving</td><td>Food security — see winter food storage</td></tr>
          <tr><td>Exhausted / Losing consciousness</td><td>−20</td><td>While exhausted</td><td>More sleep hours in the daily schedule</td></tr>
          <tr><td>Consumed human flesh</td><td>−20</td><td>48 h</td><td>Forbid human-meat meals in the manage panel</td></tr>
          <tr><td>Ravenous</td><td>−15</td><td>While ravenous</td><td>Feed before it escalates to Starving</td></tr>
          <tr><td>Banished friend</td><td>−15</td><td>48 h</td><td>Think twice before banishing settlers with friends</td></tr>
          <tr><td>Acquaintance died</td><td>−10</td><td>128 h</td><td>Colony-wide after any death</td></tr>
          <tr><td>Deprived of entertainment</td><td>−8</td><td>While deprived</td><td>Pastimes + leisure hours (lacking: −5)</td></tr>
          <tr><td>Deprived of religious activities</td><td>−8</td><td>While deprived</td><td>Shrine of the right faith + leisure (lacking: −5)</td></tr>
          <tr><td>Slept outside / in rain / in snow</td><td>−7</td><td>12 h</td><td>Any roofed bed; ground sleeping alone is −5</td></tr>
          <tr><td>Freezing / Overheated</td><td>−8</td><td>While exposed</td><td>Seasonal clothing; chilly/sweaty are only −2</td></tr>
          <tr><td>Lonely</td><td>−8</td><td>While lonely</td><td>Shared meals and social time</td></tr>
          <tr><td>Saw a dead body / friend's corpse</td><td>−3 / −4</td><td>24 h</td><td>Bury or stockpile corpses far from living areas</td></tr>
          <tr><td>Ugly apparel</td><td>−5</td><td>While worn</td><td>Tailor better clothing (elegant apparel: +5)</td></tr>
        </tbody>
      </table>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        Read the table as a triage order. Hunger (−2/−5/−15/−20 as it escalates) and tiredness
        (−2/−8/−20) out-damage everything else combined, so the schedule and the pantry are your mood
        system; rooms and recreation are multipliers on top of that foundation.
      </p>

      {/* Bedroom scaling */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Rooms Are the Daily Engine: Impressiveness-Scaled Bonuses</h2>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        Three room bonuses scale with the room's Impressiveness tier, and they repeat every day, which
        makes them the highest-leverage mood investment in the game. The sleep modifier lasts 16 hours —
        two-thirds of a settler's waking life — and a private chamber pays exactly double a shared one:
      </p>

      <table className="parchment-table mb-6">
        <thead>
          <tr>
            <th>Impressiveness Tier</th>
            <th>Private Chamber (16 h)</th>
            <th>Shared Chamber (16 h)</th>
            <th>Great Hall Meal (16 h)</th>
            <th>Temple / Chapel (12 h)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Awful</td><td>−4</td><td>−4</td><td>−2</td><td>−4</td></tr>
          <tr><td>Uninspiring</td><td>0</td><td>0</td><td>0</td><td>0</td></tr>
          <tr><td>Modest</td><td>+2</td><td>+1</td><td>+1</td><td>+2</td></tr>
          <tr><td>Good</td><td>+4</td><td>+2</td><td>+2</td><td>+3</td></tr>
          <tr><td>Superior</td><td>+6</td><td>+3</td><td>+4</td><td>+4</td></tr>
          <tr><td>Luxurious</td><td>+8</td><td>+4</td><td>+6</td><td>+5</td></tr>
          <tr><td>Opulent</td><td>+10</td><td>+5</td><td>+8</td><td>+6</td></tr>
          <tr><td>Palatial</td><td>+12</td><td>+6</td><td>+10</td><td>+7</td></tr>
        </tbody>
      </table>

      <figure className="mb-8">
        <img
          src="/images/settler-mood-system.png"
          alt="Grouped bar chart of Going Medieval 16-hour sleep mood modifiers by bedroom Impressiveness tier: private chambers rise from -4 at Awful to +12 at Palatial, shared chambers from -4 to +6, with private paying exactly double at every tier"
          className="w-full rounded-lg border border-[#3d3528]"
          loading="lazy"
        />
        <figcaption className="mt-2 text-center text-sm text-ink-light font-serif">
          Sleep modifiers by bedroom tier. Private chambers pay double shared ones at every rung, and an
          Awful room actively taxes the sleeper — the first upgrade is getting everyone to Modest or better.
        </figcaption>
      </figure>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        The tiers behind this table — Awful 0 through Palatial 6000, and the wealth/beauty/spaciousness
        formula that produces them — are laid out in{' '}
        <a href="/room-quality-system" className="text-vermillion hover:underline">room quality system</a>.
        Note the trap at the bottom: an <em>Awful</em> bedroom, great hall, or chapel is worse than no
        bonus at all, so a half-finished showpiece room can be a net negative until you finish it.
      </p>

      <div className="aged-border p-4 mb-8">
        <p className="font-serif text-base text-ink-light leading-relaxed">
          <strong>Worked example — one good day:</strong> a settler who sleeps in a Good private chamber
          (+4, 16 h), eats two meals in a Good great hall (+2 each, 16 h), sits at a table (+4, 12 h),
          works a preferred job (+4, 12 h) and has faith and fun covered (+5 each) is carrying roughly
          +24 through the working day — enough to shrug off an acquaintance's death (−10) without
          blinking. The same settler in an Awful shared room starts at −4 and has no cushion at all.
        </p>
      </div>

      {/* Traits */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Traits Bend the Curve</h2>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        Perks shift both a settler's mood target and how fast mood moves, so two settlers in identical
        conditions can sit at very different totals. Congenial settlers run a +15% mood target with 15%
        slower mood change (stable and happy); Churl settlers run −20% with faster mood swings and worse
        social interactions; Contemplative settlers take −30% but barely socialize. Content-relevant
        trait modifiers also show up directly in the modifier list — a Precious settler takes −4 for
        sleeping in shared quarters and −4 from jealousy when someone has a better bedroom, while weather
        perks flip rain and snow from penalties into +8 bonuses. The full tier list is in{' '}
        <a href="/settler-traits-tier-list" className="text-vermillion hover:underline">settler traits tier list</a>.
      </p>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-8">
        Practical takeaway: check the mood panel by <em>sorting the modifiers</em>, not by watching the
        bar. The bar tells you someone is unhappy; the modifier list tells you it is −15 from hunger and
        −4 from an ugly shirt, which is a cooking problem and a tailoring problem, not a mystery. Keep
        needs green, bury your dead, and let the rooms do the slow compounding — that is the entire
        system.
      </p>

      {/* FAQ Section */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Frequently Asked Questions</h2>

      <div className="aged-border p-4 mb-4">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">What happens when mood gets low in Going Medieval?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          A settler with low mood can rebel and refuse to follow orders, and if mood reaches 0 they leave
          your settlement for good. Mood is the sum of every active modifier — Starving (−20) and
          Exhausted (−20) stack with grief like Friend Died (−25 for 128 hours), so several problems at
          once can push a settler to zero fast.
        </p>
      </div>

      <div className="aged-border p-4 mb-4">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">What are the biggest positive mood modifiers?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          Initial Optimism (+25, 180 h) for new settlers, Together We Are Strong (+16, 48 h), a Palatial
          private chamber (+12, 16 h), Beautiful Surroundings (+10), a Palatial great hall meal (+10,
          16 h), and Exquisite Meals (+8, 8 h). The everyday workhorses are fulfilled entertainment and
          religious needs (+5 each), Job Satisfaction (+4, 12 h), and eating at a table (+4, 12 h).
        </p>
      </div>

      <div className="aged-border p-4 mb-4">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">How much does a good bedroom improve mood?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          The 16-hour sleep modifier scales with Impressiveness: private chambers run −4 (Awful) through
          +2 (Modest), +4 (Good), +8 (Luxurious) up to +12 (Palatial); shared chambers pay exactly half,
          topping out at +6. Bed comfort is a separate 12-hour modifier from −1 to +6, so the room and
          the bed stack.
        </p>
      </div>

      <div className="aged-border p-4 mb-4">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">Do mood modifiers stack?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          Yes — every active modifier adds to current mood with its own duration, from Drank Good Beer
          (+2, 4 h) to Acquaintance Died (−10, 128 h). Because they stack, one death can erase days of
          good meals and nice rooms, which is why burying corpses quickly (Saw a Dead Body is −3 for
          24 h) matters so much after a raid.
        </p>
      </div>

      <div className="aged-border p-4 mb-8">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">How do I fix a settler whose mood is crashing?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          Fix the biggest number first: hunger and sleep penalties (Ravenous −15, Starving −20, Exhausted
          −20) outrank everything, so food and rest come before luxuries. Then clear event penalties —
          bury bodies, ride out the 128-hour grief. Finally add positives: schedule leisure so
          entertainment and religion flip from −8 to +5, serve cooked meals, and upgrade the bedroom,
          worth up to +12 for 16 hours a day.
        </p>
      </div>

      {/* Related Guides */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Related Guides</h2>
      <ul className="list-disc pl-6 mb-8 space-y-2 font-serif text-base text-ink-light">
        <li><a href="/room-quality-system" className="text-vermillion hover:underline">Room Quality System — the Impressiveness tiers behind room mood bonuses</a></li>
        <li><a href="/mood-management-guide" className="text-vermillion hover:underline">Mood Management Guide — day-to-day stability routines</a></li>
        <li><a href="/happiness-guide" className="text-vermillion hover:underline">Happiness Guide — the long game on morale</a></li>
        <li><a href="/bedroom-layout" className="text-vermillion hover:underline">Bedroom Layout — private chambers worth +12 a day</a></li>
        <li><a href="/great-hall" className="text-vermillion hover:underline">Great Hall — meals that pay mood for 16 hours</a></li>
        <li><a href="/settler-schedule-template" className="text-vermillion hover:underline">Settler Schedule Template — sleep and leisure hours that prevent the −20s</a></li>
        <li><a href="/religion-guide" className="text-vermillion hover:underline">Religion Guide — turning faith from −8 deprived into +5 fulfilled</a></li>
        <li><a href="/recreation-scheduling" className="text-vermillion hover:underline">Recreation Scheduling — entertainment needs without lost work</a></li>
        <li><a href="/settler-traits-tier-list" className="text-vermillion hover:underline">Settler Traits Tier List — perks that bend the mood curve</a></li>
        <li><a href="/winter-food-storage" className="text-vermillion hover:underline">Winter Food Storage — never see Starving −20 again</a></li>
      </ul>

      <p className="font-serif text-sm text-ink-muted leading-relaxed mt-8 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
        Last updated: July 19, 2026. Game mechanics may change with future updates.
      </p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  );
}
