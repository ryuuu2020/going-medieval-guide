{/* Meta description: Going Medieval raid defense strategy — raid types (Mindless Assassins, Third Coming, Progeny, Violent Extortionists, Ferocious Swarm), layered defense, weapon data, merlons and elevation, wealth scaling. */}
export const metadata = {
  title: "Going Medieval Raid Defense Strategy — Survive Every Raid Type (2026)",
  description:
    "Complete raid defense strategy for Going Medieval: every raid type, layered perimeter design, merlons and elevation bonuses, weapon stats vs armour, and wealth-based raid scaling.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do raids scale in Going Medieval?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Raid size and equipment scale with your settlement's wealth and population, and with the difficulty you chose at world creation. A poor year-one camp faces small bands of unarmoured attackers, while a rich, populous fortress draws large groups wearing plate armour and carrying quality weapons. Hoarding valuable items and stockpiling trade goods raises your wealth and therefore future raid size — spend or hide value before it attracts attention you can't handle."
      }
    },
    {
      "@type": "Question",
      "name": "What is the best defense against early raids in Going Medieval?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A wood perimeter wall with a single entrance, a short corridor of wooden spike traps, and every settler armed with a Short Bow (20 wood each, no skill requirement). Draft all settlers when the raid warning appears, position archers behind the wall near the entrance, and let the traps soften attackers. This setup costs only wood and works from the first week."
      }
    },
    {
      "@type": "Question",
      "name": "Do merlons and elevation actually help my archers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — both are confirmed in-game mechanics. Merlons provide cover that protects your archers from enemy projectiles, and placing archers on higher ground grants a buff to precision, range, and critical hit chance. An archer on a merlon-topped tower outshoots the same archer on open ground in both directions: they hit more often and get hit less."
      }
    },
    {
      "@type": "Question",
      "name": "How do I deal with armoured raiders in Going Medieval?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Use crossbows. Bows (Short Bow, Longbow) have 80% armour penetration, so heavily armoured raiders shrug off most of their damage. Crossbows and Heavy Crossbows penetrate 90% and 92% of armour respectively — a Good-quality Heavy Crossbow hits for 36 damage at near-full effect through plate. Focus-fire armoured targets with crossbow marksmen while Longbow archers handle unarmoured stragglers, and let spike traps strip health from everyone first."
      }
    },
    {
      "@type": "Question",
      "name": "Should I fight raids in the open or behind walls?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Behind walls, almost always. Raiders outnumber your military settlers in most mid- and late-game raids, and open-field melee trades your trained fighters against disposable attackers. Walls, traps, merlons, and elevation multiply each settler's effectiveness several times over. The only good reason to sally out is to intercept a raid your defences genuinely can't contain — and even then, fight at the chokepoint, not in the field."
      }
    }
  ]
};

export default function RaidDefenseStrategyPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">

      <h1 className="chapter-heading">Going Medieval Raid Defense Strategy: Survive Every Raid Type</h1>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-6">
        <span className="drop-cap">R</span>aids are the pressure test of every Going Medieval colony. They arrive
        as events recorded in your Historical Records, scale with your wealth and population, and escalate from
        a handful of club-wielding bandits into armoured companies that can level an unprepared settlement. The
        colonies that survive aren't the ones with the most fighters — they're the ones with the best layers:
        a perimeter that channels attackers, traps that bleed them, elevated archers behind merlons that kill
        them, and a melee reserve that finishes whatever crawls through. This guide covers every raid type,
        the defensive layer stack, and the weapon math for each threat level.
      </p>

      {/* Raid Types Section */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Raid Types and How to Answer Them</h2>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        Going Medieval generates several distinct raid events. Standard raids are direct assaults by hostile
        factions; new-settler raids arrive when a refugee joins and their pursuers follow; animal raids are
        swarms of ferocious wildlife rather than humans. Each demands a slightly different response — the
        table below summarises what to expect and the counter that works.
      </p>

      <table className="parchment-table mb-8">
        <thead>
          <tr>
            <th>Raid Event</th>
            <th>Category</th>
            <th>What Happens</th>
            <th>Best Counter</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mindless Assassins</td>
            <td>Standard raid</td>
            <td>Hostile faction squad assaults your settlement directly</td>
            <td>Full layer stack: traps, embrasures, focused fire</td>
          </tr>
          <tr>
            <td>Third Coming Attack</td>
            <td>Standard raid</td>
            <td>Religious-faction assault; often larger than bandit raids</td>
            <td>Deep trap corridor; crossbows for armoured zealots</td>
          </tr>
          <tr>
            <td>Progeny Attack</td>
            <td>Standard raid</td>
            <td>Progeny faction war party targets your colony</td>
            <td>Elevated firing positions; melee blocker at chokepoint</td>
          </tr>
          <tr>
            <td>Violent Extortionists (Salvation, Barbarian Snack, Jailbird, Lost Property)</td>
            <td>New settler raid</td>
            <td>A refugee joins; their armed pursuers arrive demanding them back</td>
            <td>Vet refugees before accepting; standard killbox handles the follow-up</td>
          </tr>
          <tr>
            <td>Ferocious Swarm</td>
            <td>Animal raid</td>
            <td>A pack of hostile animals (e.g. wolves) attacks settlers on sight</td>
            <td>Everyone indoors; archers shoot over walls — animals can't open doors</td>
          </tr>
        </tbody>
      </table>

      <div className="aged-border p-4 mb-8">
        <p className="font-serif text-base text-ink-light leading-relaxed">
          <strong>Alignment Matters:</strong> Whether a faction raids you or trades with you depends on
          alignment. Hostile factions send raids; friendly and neutral factions send merchants. Check your
          faction standings before assuming every visitor is a threat — and before accidentally starting a
          war by attacking a neutral caravan.
        </p>
      </div>

      {/* Layered Defense Section */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">The Layered Defense Stack</h2>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        No single structure stops a raid — survival comes from stacking layers that each remove part of the
        threat before the next one engages. A raid that reaches your inner door should already be half-dead.
        Build outward in this order as your colony grows.
      </p>

      <table className="parchment-table mb-8">
        <thead>
          <tr>
            <th>Layer</th>
            <th>Structure</th>
            <th>Job</th>
            <th>Priority</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1 — Perimeter</td>
            <td>Wood wall (200 HP) → limestone (300 HP) → brick (800 HP)</td>
            <td>Deny free entry; force raiders toward your chosen entrance</td>
            <td>Day 1–3</td>
          </tr>
          <tr>
            <td>2 — Channel</td>
            <td>Single entrance + funnel walls</td>
            <td>Concentrate the raid into one predictable approach</td>
            <td>Week 1</td>
          </tr>
          <tr>
            <td>3 — Attrition</td>
            <td>Wooden spike traps in a 1–2 tile corridor</td>
            <td>Strip health from every attacker before contact; re-arm after each raid</td>
            <td>Week 1–2</td>
          </tr>
          <tr>
            <td>4 — Fire</td>
            <td>Archers behind embrasures / merlons, ideally elevated</td>
            <td>Kill channelled raiders from safety; elevation buffs precision, range, crit chance</td>
            <td>Ongoing</td>
          </tr>
          <tr>
            <td>5 — Anvil</td>
            <td>Armoured melee settler with shield at the inner chokepoint</td>
            <td>Pin wounded survivors in place for the firing line</td>
            <td>Year 2+</td>
          </tr>
          <tr>
            <td>6 — Redoubt</td>
            <td>Lockable inner keep with food and wounded-settler beds</td>
            <td>Survive a breach; non-combatants retreat here when the horn sounds</td>
            <td>Year 2+</td>
          </tr>
        </tbody>
      </table>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        The redoubt layer is the one most colonies forget. Draft control lets you order any settler anywhere —
        and that includes ordering your cook, tailor, and researcher <em className="text-ink">away</em> from the
        fighting. When a raid spawns, pause, draft non-combatants into the inner keep, then assign fighters to
        their positions. Losing your only doctor to a stray arrow hurts more than any wall repair. For
        corridor-level detail, see our{' '}
        <a href="/killbox-design" className="text-vermillion hover:underline">killbox design guide</a>.
      </p>

      {/* Weapon Data Section */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Weapon Math: Matching Firepower to Armour</h2>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        Early raids are unarmoured, and any bow works. By the mid-game, raiders arrive in armour that blunts
        ordinary arrows — and weapon choice becomes the difference between a clean defence and a breach. The
        decisive stat is armour penetration: bows penetrate 80%, crossbows 90–92%. Against a heavily armoured
        target, that gap means a Longbow's 22 damage is mostly absorbed while a Heavy Crossbow's 36 lands
        almost intact.
      </p>

      <table className="parchment-table mb-8">
        <thead>
          <tr>
            <th>Weapon</th>
            <th>Damage (Good)</th>
            <th>Armour Pen.</th>
            <th>Attack Duration</th>
            <th>Range</th>
            <th>Best Anti-Raid Use</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Short Bow</td>
            <td>12</td>
            <td>80%</td>
            <td>5.4s</td>
            <td>18m</td>
            <td>Early raids; arming untrained settlers</td>
          </tr>
          <tr>
            <td>Longbow</td>
            <td>22</td>
            <td>80%</td>
            <td>5.4s</td>
            <td>18m</td>
            <td>Unarmoured/mixed raids; highest sustained DPS (4.07)</td>
          </tr>
          <tr>
            <td>Crossbow</td>
            <td>26</td>
            <td>90%</td>
            <td>9.45s</td>
            <td>25m</td>
            <td>Armoured raiders; engaging at max range</td>
          </tr>
          <tr>
            <td>Heavy Crossbow</td>
            <td>36</td>
            <td>92%</td>
            <td>10.35s</td>
            <td>25m</td>
            <td>Plate-armoured elites and shield-bearers</td>
          </tr>
        </tbody>
      </table>

      <figure className="mb-8">
        <img
          src="/images/raid-defense-strategy.png"
          alt="Grouped bar chart showing per-hit damage at Good quality (Short Bow 12, Longbow 22, Crossbow 26, Heavy Crossbow 36) beside armour penetration percentages (80, 80, 90, 92) for Going Medieval ranged weapons against raiders"
          className="w-full rounded-lg border border-[#3d3528]"
          loading="lazy"
        />
        <figcaption className="mt-2 text-center text-sm text-ink-light font-serif">
          Per-hit damage (amber) vs. armour penetration (gold) at Good quality. Crossbows give up raw speed
          for the penetration that late-game armoured raids demand.
        </figcaption>
      </figure>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        Raid composition tells you which weapon matters in any given fight. A raid of ragged bandits is a
        Longbow problem — fast shots, targets dropping to traps and arrows in seconds. A raid fronted by
        plate-armoured veterans is a Heavy Crossbow problem — designate one marksman per elite and focus-fire
        (select all archers, then right-click the priority target). Full weapon statistics, costs, and skill
        requirements are in our{' '}
        <a href="/archer-vs-crossbow" className="text-vermillion hover:underline">archer vs crossbow data sheet</a>,
        and broader fortification options in the{' '}
        <a href="/defense" className="text-vermillion hover:underline">complete defense guide</a>.
      </p>

      {/* Raid Rhythm Section */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">The Raid Rhythm: Before, During, After</h2>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        <strong className="text-ink">Before:</strong> Wealth and population drive raid size, so manage both
        deliberately — our{' '}
        <a href="/wealth-scaling-raids" className="text-vermillion hover:underline">wealth scaling guide</a>{' '}
        explains the relationship. Keep traps armed, embrasures repaired, and at least one bow per settler
        plus a crossbow per trained marksman. Watch the calendar and event log;{' '}
        <a href="/raid-schedule-guide" className="text-vermillion hover:underline">raid timing patterns</a>{' '}
        help you anticipate busy seasons.
      </p>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        <strong className="text-ink">During:</strong> Pause the moment the raid banner appears. Forbid side
        doors, un-forbid the bait entrance, draft combat settlers into position, and send everyone else to
        the redoubt. Archers auto-engage anything in range, so positioning is 90% of the battle — reserve
        manual orders for focus-firing armoured elites and pulling wounded settlers off the wall.
      </p>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        <strong className="text-ink">After:</strong> Undraft, treat the wounded (see{' '}
        <a href="/wounded-settler-healing" className="text-vermillion hover:underline">wounded settler healing</a>),
        re-arm every trap, repair damaged wall segments, and haul loot and corpses out of the corridor.
        Raider equipment — especially armour and weapons from elite attackers — is often your best source of
        quality gear in the mid-game; check{' '}
        <a href="/raid-loot-table" className="text-vermillion hover:underline">what raids drop</a>{' '}
        before smelting anything.
      </p>

      <div className="aged-border p-4 mb-8">
        <p className="font-serif text-base text-ink-light leading-relaxed">
          <strong>The One Rule:</strong> Never let a raid find your settlers scattered across the map doing
          chores. A raid that catches three settlers alone in the fields is three funerals; the same raid
          against a manned wall is target practice. The draft-and-position routine should be muscle memory
          by the end of year one.
        </p>
      </div>

      {/* FAQ Section */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Frequently Asked Questions</h2>

      <div className="aged-border p-4 mb-4">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">How do raids scale in Going Medieval?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          Raid size and equipment scale with your settlement's wealth and population, and with the difficulty
          you chose at world creation. A poor year-one camp faces small bands of unarmoured attackers, while
          a rich, populous fortress draws large groups wearing plate armour and carrying quality weapons.
          Hoarding valuable items raises your wealth and therefore future raid size — spend or trade value
          before it attracts attention you can't handle.
        </p>
      </div>

      <div className="aged-border p-4 mb-4">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">What is the best defense against early raids in Going Medieval?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          A wood perimeter wall with a single entrance, a short corridor of wooden spike traps, and every
          settler armed with a Short Bow (20 wood each, no skill requirement). Draft all settlers when the
          raid warning appears, position archers behind the wall near the entrance, and let the traps soften
          attackers. This setup costs only wood and works from the first week.
        </p>
      </div>

      <div className="aged-border p-4 mb-4">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">Do merlons and elevation actually help my archers?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          Yes — both are confirmed in-game mechanics. Merlons provide cover that protects your archers from
          enemy projectiles, and placing archers on higher ground grants a buff to precision, range, and
          critical hit chance. An archer on a merlon-topped tower outshoots the same archer on open ground
          in both directions: they hit more often and get hit less.
        </p>
      </div>

      <div className="aged-border p-4 mb-4">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">How do I deal with armoured raiders in Going Medieval?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          Use crossbows. Bows have 80% armour penetration, so heavily armoured raiders shrug off most of
          their damage. Crossbows and Heavy Crossbows penetrate 90% and 92% respectively — a Good-quality
          Heavy Crossbow hits for 36 damage at near-full effect through plate. Focus-fire armoured targets
          with crossbow marksmen while Longbow archers handle unarmoured stragglers, and let spike traps
          strip health from everyone first.
        </p>
      </div>

      <div className="aged-border p-4 mb-8">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">Should I fight raids in the open or behind walls?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          Behind walls, almost always. Raiders outnumber your military settlers in most mid- and late-game
          raids, and open-field melee trades your trained fighters against disposable attackers. Walls,
          traps, merlons, and elevation multiply each settler's effectiveness several times over. The only
          good reason to sally out is to intercept a raid your defences genuinely can't contain — and even
          then, fight at the chokepoint, not in the field.
        </p>
      </div>

      {/* Related Guides */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Related Guides</h2>
      <ul className="list-disc pl-6 mb-8 space-y-2 font-serif text-base text-ink-light">
        <li><a href="/killbox-design" className="text-vermillion hover:underline">Killbox Design — build the corridor that wins fights for you</a></li>
        <li><a href="/wealth-scaling-raids" className="text-vermillion hover:underline">Wealth Scaling &amp; Raids — manage the raid size curve</a></li>
        <li><a href="/archer-vs-crossbow" className="text-vermillion hover:underline">Archer vs Crossbow — full weapon data sheet</a></li>
        <li><a href="/raid-loot-table" className="text-vermillion hover:underline">Raid Loot Table — what attackers drop</a></li>
        <li><a href="/best-weapons-for-defense" className="text-vermillion hover:underline">Best Weapons for Defense — arming your garrison</a></li>
        <li><a href="/double-wall-vs-single-wall" className="text-vermillion hover:underline">Double Wall vs Single Wall — perimeter hitpoint math</a></li>
      </ul>

      <p className="font-serif text-sm text-ink-muted leading-relaxed mt-8 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
        Last updated: July 19, 2026. Defence mechanics (merlon cover, elevation buffs, alignment)
        and weapon stats reflect in-game values (0.22+). Raid size scaling is described qualitatively.
        Game mechanics may change with future updates.
      </p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  );
}
