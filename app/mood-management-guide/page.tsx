{/* Meta description: Going Medieval mood management guide — learn how settler happiness works, the most impactful positive and negative mood modifiers, room impressiveness tiers, and how to prevent mental breaks and desertion. */}

export default function MoodManagementGuidePage() {
  return (
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-10">
            <section>
              <h1 className="chapter-heading">Going Medieval Mood Management Guide</h1>
              <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
                Mood is the single most important stat in Going Medieval. It represents your settlers&apos; happiness, and unlike skills or attributes it shifts every waking minute — every meal eaten, every night slept, every corpse stumbled past pushes the number up or down. The game does not use a fixed base mood: a settler&apos;s current mood is the live sum of every active modifier, positive and negative, stacked on top of each other. Keep that sum high and your colony hums along with productive, cooperative workers. Let it slide toward zero and the same settlers will rebel, refuse orders, and — at mood zero — walk off the map forever. This guide breaks down the real mood mechanics, the highest-value positive modifiers, the threats that drag morale into the dirt, and the scheduling and design habits that prevent mental breaks. Data below is based on community testing estimates cross-referenced with the Going Medieval wiki.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Mood Mechanics: How Happiness Is Calculated</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                There is no hidden &quot;base mood&quot; number in Going Medieval. The value you see in a settler&apos;s Needs panel is the arithmetic sum of every currently-active modifier — from the +8 of &quot;initial optimism&quot; that carries a fresh settler through their first 180 hours, down to the -20 of &quot;starving.&quot; Modifiers have durations: some are permanent while a condition holds (wearing ugly clothes, sleeping on the ground), others tick down over a set number of in-game hours after an event (a good dream lasts 6 hours, a friend&apos;s death stains mood for 128 hours). Because everything stacks additively, a colony that consistently generates small positive modifiers — a comfortable bed, a cooked meal, a shared meal in a decent hall — builds a wide safety margin that absorbs the inevitable negative spikes from raids, injuries, and bereavement.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Expectations act as a global modifier on top of everything else. Settlers with very low expectations grant a flat +16 to mood (&quot;lucky to be alive&quot;), while those with extremely high expectations subtract -2 — a small number on paper, but on a settler already sitting at mood 8 from hunger and exhaustion, that -2 is the difference between a productive worker and a deserter. Expectations rise as your colony grows wealthier, so a settlement that looked after a handful of peasants easily can suddenly struggle to keep a dozen well-fed, well-housed settlers content. Plan your infrastructure ahead of your population.
              </p>
              <div className="aged-border p-5" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                <p className="font-serif text-sm text-ink leading-relaxed">
                  <strong className="text-vermillion">&#9888; Key Rule:</strong> Mood is a live total, not a slow-averaging stat. A settler at mood 40 who eats a lavish meal (+8 for 8 hours) and sleeps in a palatial solo bedroom (+12 for 16 hours) does not gradually drift upward — they jump to 60 the moment those modifiers apply. Conversely, the instant a starvation modifier kicks in, the penalty hits the total immediately. Read the Needs panel reactively, not on a schedule.
                </p>
              </div>
              <p className="font-serif text-base text-ink-light leading-relaxed mt-4 mb-4">
                The table below summarizes the documented consequence thresholds. The exact numeric breakpoints are community estimates, but the behaviors — refusing orders, rebelling, and desertion at zero — are confirmed game mechanics.
              </p>
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Approx. Mood Range</th>
                    <th>State</th>
                    <th>Documented Behavior</th>
                    <th>Intervention</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>High (positive margin)</td><td>Content / Joyful</td><td>Follows orders, full work speed</td><td>Maintain — no action needed</td></tr>
                  <tr><td>Moderate</td><td>Stable</td><td>Normal behavior, minor penalties absorbed</td><td>Monitor trending modifiers</td></tr>
                  <tr><td>Low</td><td>Unhappy</td><td>Work slowdown, beginning to resist</td><td>Address top negative modifier now</td></tr>
                  <tr><td>Very low</td><td>Rebellious</td><td>Refuses orders, may rebel against the colony</td><td>Force rest, food, and comfort immediately</td></tr>
                  <tr><td>0</td><td>Desertion</td><td>Settler leaves the settlement permanently</td><td>Too late — settler is gone</td></tr>
                </tbody>
              </table>
              <p className="font-serif text-sm text-ink-muted italic">Data source: Community testing estimates</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Mood Boosting Strategies: The Highest-Value Positive Modifiers</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Not all positive modifiers are created equal. Some are cheap and renewable; others require research and materials but pay off every single day. The table below ranks the most impactful positive mood sources by value and uptime so you know where to invest your first resources. A full guide to settler morale lives on our <a href="/happiness-guide">happiness guide</a>, and the social-gathering side of mood is covered in depth on the <a href="/great-hall">Great Hall guide</a>.
              </p>
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Positive Modifier</th>
                    <th>Value</th>
                    <th>Duration</th>
                    <th>How to Secure It</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Sleeping in own room (Palatial)</td><td>+12</td><td>16 hrs</td><td>Large, wealthy, beautiful solo bedroom</td></tr>
                  <tr><td>Great Hall (Palatial) while eating</td><td>+10</td><td>16 hrs</td><td>High-impressiveness hall, eat meals there</td></tr>
                  <tr><td>Ate lavish meal</td><td>+8</td><td>8 hrs</td><td>Cooked at stove with good ingredients</td></tr>
                  <tr><td>Sleeping in own room (general)</td><td>+8</td><td>16 hrs</td><td>Any solo bedroom with a bed</td></tr>
                  <tr><td>Very comfortable bed</td><td>+6</td><td>12 hrs</td><td>Upgrade bed material/quality</td></tr>
                  <tr><td>Beautiful environment</td><td>+10</td><td>While present</td><td>Decorations, banners, clean floors</td></tr>
                  <tr><td>Great Hall (Good) while eating</td><td>+2</td><td>16 hrs</td><td>Basic functional hall with table/chairs</td></tr>
                  <tr><td>Drank good beer / wine</td><td>+2</td><td>4 hrs</td><td>Brew at brewery — see <a href="/brewery-guide">brewery guide</a></td></tr>
                  <tr><td>Spiritual need fulfilled</td><td>+5</td><td>Ongoing</td><td>Shrine/church + leisure time to pray</td></tr>
                  <tr><td>Entertainment fulfilled</td><td>+5</td><td>Ongoing</td><td>Backgammon table, scheduled recreation</td></tr>
                  <tr><td>Ate at a table (seated)</td><td>+4 (+2 seated)</td><td>12 hrs</td><td>Table and chairs in dining area</td></tr>
                  <tr><td>Job satisfaction</td><td>+4</td><td>12 hrs</td><td>Assign settlers to skills they excel at</td></tr>
                </tbody>
              </table>
              <p className="font-serif text-sm text-ink-muted italic">Data source: Community testing estimates</p>
              <p className="font-serif text-base text-ink-light leading-relaxed mt-4 mb-4">
                The strategy that pays the largest dividend is the <strong>bedroom + Great Hall + cooked meal</strong> triangle. A settler who sleeps in a palatial solo bedroom (+12), eats a lavish meal in a palatial Great Hall (+10 +8), and sits down to do it (+4) banks roughly +34 mood before any other modifier is counted. That margin survives a raid, an injury, even a bereavement. By contrast, a settler who sleeps on the ground outside (-7), eats raw food (-3), and has no entertainment (-8) is already at -18 before anything goes wrong — the first corpse they see (-3) pushes them into the rebellious range.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Room impressiveness is the engine behind the bedroom and hall bonuses. It is calculated as the product of three multipliers — wealth, average beauty, and spaciousness (free tiles) — each looked up on its own curve and linearly interpolated. A room needs all three to score well: a huge empty room has spaciousness but no wealth or beauty; a cramped room full of gold has wealth but no space. The impressiveness tiers run Awful (0) through Uninspiring (10), Modest (15), Good (65), Superior (300), Luxurious (750), Opulent (2500), up to Palatial (6000). Early-game shared bedrooms can comfortably reach Modest with a few straw beds and a window; pushing past Good requires stone walls, flooring, and dedicated decoration. Manage your <a href="/settlers">settlers</a>&apos; assignments so that your best builder and tailor are always upgrading rooms toward the next tier.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Mood Threats and Mitigation</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Negative modifiers fall into three categories: neglected needs, environmental hazards, and traumatic events. Needs-based penalties are the most common and the most preventable — they exist purely because you failed to provide food, sleep, shelter, or clothing. Environmental hazards (corpses, ugliness, temperature extremes) are side effects of combat and poor base design. Traumatic events (bereavement, cannibalism, being shackled) are severe but rare if you manage your colony sanely. The table below lists the most damaging negative modifiers and their mitigation.
              </p>
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Negative Modifier</th>
                    <th>Value</th>
                    <th>Duration</th>
                    <th>Mitigation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Friend died</td><td>-25</td><td>128 hrs</td><td>Unavoidable once it happens — keep a mood buffer</td></tr>
                  <tr><td>Being shackled</td><td>-16</td><td>While held</td><td>Release prisoners; avoid chaining settlers</td></tr>
                  <tr><td>Butchering an acquaintance</td><td>-22</td><td>48 hrs</td><td>Never butcher fallen settlers</td></tr>
                  <tr><td>Butchering a human</td><td>-14</td><td>48 hrs</td><td>Bury the dead instead</td></tr>
                  <tr><td>Starving (blood loss stage)</td><td>-20</td><td>While starving</td><td>Keep food reserves above zero year-round</td></tr>
                  <tr><td>Exhausted / about to collapse</td><td>-20</td><td>While exhausted</td><td>Lengthen sleep blocks in the schedule</td></tr>
                  <tr><td>Sleeping outside / in rain / in snow</td><td>-7</td><td>12 hrs</td><td>Build a roofed room with beds before night one</td></tr>
                  <tr><td>Sleeping on the ground</td><td>-5</td><td>12 hrs</td><td>Always place a bed, even a straw one</td></tr>
                  <tr><td>Wearing ugly clothes</td><td>-5</td><td>Permanent</td><td>Research tailoring, craft better clothing</td></tr>
                  <tr><td>Seeing a friend&apos;s corpse</td><td>-4</td><td>24 hrs</td><td>Bury corpses far from living areas immediately</td></tr>
                  <tr><td>Ate rotten food</td><td>-8</td><td>12 hrs</td><td>Use a cellar; rotate stock; preserve food</td></tr>
                  <tr><td>Extreme cold / overheating</td><td>-8</td><td>While exposed</td><td>Sew seasonal clothing; heat/cool rooms</td></tr>
                  <tr><td>Entertainment deprived</td><td>-8</td><td>Ongoing</td><td>Build a backgammon table; schedule leisure</td></tr>
                  <tr><td>Religious practice deprived</td><td>-8</td><td>Ongoing</td><td>Build a shrine; allow prayer in free time</td></tr>
                  <tr><td>Lonely (social need)</td><td>-8</td><td>Ongoing</td><td>Let settlers gather in the Great Hall</td></tr>
                </tbody>
              </table>
              <p className="font-serif text-sm text-ink-muted italic">Data source: Community testing estimates</p>
              <div className="aged-border p-5" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                <p className="font-serif text-sm text-ink leading-relaxed">
                  <strong className="text-vermillion">&#9888; Cannibalism Trap:</strong> Eating cooked human meat gives +8 to a cannibal-believer but -10 (or -20 for raw) to a settler who realizes what they ate. If you must cook human meat to survive, open the Management panel and forbid it for everyone except settlers whose faith explicitly endorses it — otherwise a single meal can trigger a multi-settler mood collapse.
                </p>
              </div>
              <p className="font-serif text-base text-ink-light leading-relaxed mt-4 mb-4">
                The cheapest threat to neutralize is corpses. A single unburied body applies -3 to -4 per settler per sighting, stacking across everyone who walks past it. Designate a graveyard or dumping zone well away from your base within the first hour of a new colony, and set a dedicated hauler to clear bodies after every raid. The second-cheapest fix is clothing: every settler starts in &quot;flimsy clothes&quot; that count as ugly (-5). Research tailoring early and outfit everyone in at least &quot;decent&quot; garments — it is a permanent +5 swing for the cost of one sewing station and some cloth.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Mental Break Prevention: Scheduling and Early Warning</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Going Medieval does not feature a randomized &quot;mental break&quot; event the way some colony sims do — instead, the consequence of sustained low mood is concrete and documented: settlers rebel, refuse orders, and at mood zero permanently desert. This means mental breaks are entirely preventable through scheduling and monitoring. The goal is to never let the live mood total approach zero, because once a settler is refusing orders they will not cook the meal or build the bed that would have saved them.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                The schedule is your primary tool. Divide each 24-hour day into blocks: a long sleep block (roughly 8 hours) placed so settlers wake around dawn, two work blocks separated by a meal, and a dedicated leisure block in the evening. The leisure block is not optional — it is the window in which settlers fulfill entertainment, religious, and social needs. A schedule with no free time leaves those needs perpetually deprived (-8 each), and the mood penalty compounds every hour. Settlers who go to bed on a full stomach after an evening of recreation wake with their positive modifiers refreshed and their negative need-penalties cleared.
              </p>
              <div className="aged-border p-5" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                <p className="font-serif text-sm text-ink leading-relaxed">
                  <strong className="text-vermillion">&#9888; Desertion Cascade:</strong> Losing one settler to desertion at mood zero is bad; losing two is catastrophic. The departed settler was often the only cook or builder, so food production stalls and bedrooms go unfinished, driving the remaining settlers&apos; mood down with them. If anyone drops below mood 10, drop everything — pause construction, cancel hauling — and force that settler to eat a cooked meal, sleep in a real bed, and drink ale until the total recovers.
                </p>
              </div>
              <p className="font-serif text-base text-ink-light leading-relaxed mt-4 mb-4">
                Build a mood buffer by stacking permanent positive modifiers before you need them. A colony where every settler has a solo bedroom (+8 to +12), eats cooked meals at a table in a Good-tier hall (+4 to +10), and has fulfilled entertainment and spiritual needs (+10 combined) sits at a baseline of roughly +30 to +40 above zero. That buffer absorbs a bereavement (-25 for 128 hours) without anyone rebelling. A colony with no bedrooms, raw food, and no recreation sits near zero before the first arrow is fired — the first casualty will tip the survivors into desertion.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Finally, watch the expectations modifier as your colony grows. Wealth drives expectations upward, and a settler who was content at +16 (very low expectations) may slide to +4 (medium) or even -2 (extremely high) as you accumulate gold, weapons, and fine furniture. The fix is not to stay poor — it is to make sure your mood infrastructure (bedrooms, hall, kitchen, brewery, shrine) scales with your wealth so that the positive modifiers outpace the rising expectations penalty.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Frequently Asked Questions</h2>
              <div className="faq-snippets">
                <details>
                  <summary>What happens when a settler&apos;s mood reaches zero?</summary>
                  <p className="font-serif text-base text-ink-light leading-relaxed">
                    The settler permanently leaves your settlement. Before reaching zero, low mood causes settlers to rebel and refuse to follow orders. Because mood is the live sum of all active modifiers, hitting zero means every positive source has been overwhelmed by stacked negative ones — typically a combination of starvation, exhaustion, bereavement, and deprived needs. There is no &quot;mental break&quot; recovery event; prevention through scheduling and infrastructure is the only reliable strategy.
                  </p>
                </details>
                <details>
                  <summary>Is it better to build solo bedrooms or a shared dormitory?</summary>
                  <p className="font-serif text-base text-ink-light leading-relaxed">
                    Solo bedrooms are strongly preferred. Sleeping in your own room grants +8 (general) up to +12 (Palatial tier) for 16 hours, while a shared room grants only +4 to +6 at the same tiers. Some settlers with the &quot;Precious&quot; trait actually take a -4 penalty in shared rooms. Early on, a small shared room reaching Modest tier is an acceptable stopgap, but transition to individual bedrooms as soon as resources allow. See our bedroom layout guide for optimal dimensions and furniture progression.
                  </p>
                </details>
                <details>
                  <summary>How much does alcohol actually help with mood?</summary>
                  <p className="font-serif text-base text-ink-light leading-relaxed">
                    Alcohol satisfies a dedicated thirst need: a settler who is &quot;very thirsty&quot; for a drink suffers -3, and &quot;extremely thirsty&quot; suffers -6. Drinking grants additional positive modifiers ranging from +2 (tipsy) up to +16 (wasted), and settlers with the &quot;Swigger&quot; perk even gain work efficiency bonuses while drunk. The catch is that the strongest bonuses are short-lived (a few hours) and over-serving risks reduced productivity. A steady supply of beer or wine keeps the thirst penalty cleared and adds a small, renewable positive buffer. Our <a href="/brewery-guide">brewery guide</a> covers the full production chain.
                  </p>
                </details>
                <details>
                  <summary>Do settler personality traits and perks change mood strategy?</summary>
                  <p className="font-serif text-base text-ink-light leading-relaxed">
                    Yes, significantly. Perks like &quot;Sun Seeker&quot; (+8 in sunlight) and &quot;Snow White&quot; (+8 in snow) are free positive modifiers if you schedule outdoor work in the right conditions. Conversely, &quot;Washout&quot; (-4 in rain) and &quot;Precious&quot; (-4 in shared rooms) impose permanent penalties you must design around. The &quot;Dainty&quot; and &quot;Precious&quot; traits also trigger jealousy: if another settler has a nicer room, the jealous one takes a -4 penalty. Assign bedrooms so that no envious settler is outclassed by a neighbor, and match settlers to jobs and environments that suit their perks.
                  </p>
                </details>
              </div>
            </section>

            <section>
              <p className="font-serif text-sm text-ink-muted italic">
                Data source: Community testing estimates. Mood modifier values and durations are drawn from the Going Medieval wiki and cross-checked against community reports; exact thresholds and the precise impressiveness scoring curves may change between game updates. Always verify current behavior against the in-game Needs panel and room Stats tab.
              </p>
            </section>
          </div>
        </div>
      </main>
  );
}
