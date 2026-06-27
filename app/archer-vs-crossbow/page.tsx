{/* Meta description: Going Medieval archer vs crossbow — complete comparison of bow (short bow, longbow) and crossbow (light, heavy) stats, damage, range, accuracy, resource costs, and best tactical use cases for ranged combat defense. */}

export default function ArcherVsCrossbowPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">

      <h1 className="chapter-heading">Going Medieval Archer vs Crossbow: Complete Comparison</h1>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-6">
        <span className="drop-cap">I</span>n Going Medieval, your settlement's survival depends on effective
        ranged defense. Whether fending off raiders from your castle walls or hunting game to feed your villagers
        through winter, choosing between bows and crossbows is a decision that shapes your entire combat strategy.
        Each weapon category serves distinct tactical purposes: bows offer rapid fire rates that punish lightly
        armoured enemies, while crossbows deliver devastating armour-piercing shots capable of dropping
        heavily armoured raiders in fewer volleys. This guide breaks down every relevant stat, production
        requirement, and tactical consideration across Short Bows, Longbows, Crossbows, and Heavy Crossbows,
        giving you the data needed to equip your marksmen for any threat that storms your gates.
      </p>

      {/* Damage Comparison Section */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Damage Comparison</h2>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        Damage output is the most visible differentiator between bow and crossbow weapon families. Bows
        (Short Bow and Longbow) have fixed damage values across all quality tiers, meaning a Flimsy Longbow
        hits just as hard as a Flawless one. The quality tier of a bow instead improves precision, durability,
        and distance accuracy — a Flawless bow simply lands shots more reliably rather than dealing more
        damage per hit. Crossbows and Heavy Crossbows work differently: their damage scales significantly
        with quality, rewarding skilled craftsmen and late-game production chains. A Flawless Heavy Crossbow
        can output over four times the per-shot damage of a Short Bow, making it the undisputed king of
        single-hit stopping power.
      </p>

      <table className="parchment-table mb-8">
        <thead>
          <tr>
            <th>Weapon</th>
            <th>Damage (Flimsy)</th>
            <th>Damage (Good)</th>
            <th>Damage (Flawless)</th>
            <th>Armour Pen.</th>
            <th>Armour Dmg.</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Short Bow</td>
            <td>12</td>
            <td>12</td>
            <td>12</td>
            <td>80%</td>
            <td>40%</td>
          </tr>
          <tr>
            <td>Longbow</td>
            <td>22</td>
            <td>22</td>
            <td>22</td>
            <td>80%</td>
            <td>40%</td>
          </tr>
          <tr>
            <td>Crossbow</td>
            <td>20.8</td>
            <td>26</td>
            <td>31.2</td>
            <td>90%</td>
            <td>50%</td>
          </tr>
          <tr>
            <td>Heavy Crossbow</td>
            <td>28.8</td>
            <td>36</td>
            <td>50.4</td>
            <td>92%</td>
            <td>40%</td>
          </tr>
        </tbody>
      </table>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        The Short Bow's 12 damage makes it a starter weapon for new colonies and basic hunting. The Longbow
        nearly doubles that at 22 damage while maintaining the same attack speed — an enormous early-to-mid-game
        upgrade. The Crossbow at Good quality (26 damage) edges ahead of the Longbow in per-hit power, but the
        real story is armour penetration. Crossbows pierce 90% of enemy armour compared to 80% for bows. Against
        a raider wearing steel plate armour, the Longbow's effective damage drops by 80%, while the Crossbow
        retains 90% of its punch. For late-game raids featuring fully armoured enemies, the Heavy Crossbow's 92%
        armour penetration combined with 50.4 Flawless damage makes it the clear winner — one well-placed bolt
        can shatter a shielded raider in a single volley.
      </p>

      <div className="aged-border p-4 mb-8">
        <p className="font-serif text-base text-ink-light leading-relaxed">
          <strong>Key Insight:</strong> Bows deal fixed damage unaffected by quality — a Flimsy Longbow hits for
          22 just like a Flawless one. Crossbows scale damage with quality, making them a stronger long-term
          investment as your settlement advances through the tech tree. Early game, quantity (bow fire rate)
          matters. Late game, quality (crossbow penetration) dominates.
        </p>
      </div>

      {/* Range and Accuracy Section */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Range and Accuracy</h2>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        Range is where crossbows gain their most decisive advantage. All bow variants — Short Bow and Longbow
        — cap at 18 metres, while Crossbows and Heavy Crossbows reach 25 metres regardless of quality. That extra
        7 metres translates to roughly one additional volley before melee enemies close distance, which can mean
        the difference between a clean kill and a desperate hand-to-hand brawl. When positioned on elevated
        battlements or behind merlons, the height advantage further amplifies this range bonus, letting crossbow
        marksmen engage raiders before they even reach your outer walls.
      </p>

      <table className="parchment-table mb-8">
        <thead>
          <tr>
            <th>Weapon</th>
            <th>Max Range</th>
            <th>Precision (Good)</th>
            <th>Dist. Decay /m (Good)</th>
            <th>Attack Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Short Bow</td>
            <td>18m</td>
            <td>100%</td>
            <td>0.015%</td>
            <td>5.4s</td>
          </tr>
          <tr>
            <td>Longbow</td>
            <td>18m</td>
            <td>100%</td>
            <td>0.01%</td>
            <td>5.4s</td>
          </tr>
          <tr>
            <td>Crossbow</td>
            <td>25m</td>
            <td>100%</td>
            <td>0.012%</td>
            <td>9.45s</td>
          </tr>
          <tr>
            <td>Heavy Crossbow</td>
            <td>25m</td>
            <td>100%</td>
            <td>0.012%</td>
            <td>10.35s</td>
          </tr>
        </tbody>
      </table>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        All ranged weapons share a base precision of 95% at Flimsy quality, reaching 100% at Good quality or higher.
        Where they differ is distance accuracy decay — the rate at which accuracy falls off per metre from the target.
        The Longbow boasts the lowest decay at 0.01% per metre (Good quality), making it the most reliable precision
        weapon over distance within its 18m range. Crossbows at 0.012% per metre are close behind, and their extra
        7 metres of range compensates for the slightly higher decay rate. The Short Bow's 0.015% decay means shots
        at the edge of its range become noticeably less accurate.
      </p>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        Attack duration — the time between shots — is where bows shine. Both Short Bow and Longbow fire every 5.4
        seconds, nearly twice as fast as the Crossbow (9.45s) and Heavy Crossbow (10.35s) at Good quality. This
        fire rate advantage means bow-wielding marksmen can engage multiple targets in rapid succession, thinning
        out waves of lightly armoured raiders before they scale your walls. Crossbows trade that rate of fire for
        raw per-shot impact — fewer bolts land, but each one counts dramatically more. Against a raid of 12
        unarmoured bandits, six Longbow archers can loose two volleys each in the time six Crossbow marksmen fire
        once, making the bow the clear choice for wave-clearing.
      </p>

      {/* Resource Cost and Production Section */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Resource Cost and Production</h2>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        Equipping a squad of ranged defenders requires careful resource planning. Bows are fundamentally simpler
        to produce — they require only wood and access to a Bowyer's Table — while crossbows demand mechanical
        components and, for Heavy Crossbows, refined metal. The tech tree path also differs: bow upgrades flow
        through the Wooden Weaponry and Fletching lines, while crossbows require dedicated Crossbows I and II
        research nodes. Your settlement's access to steel and mechanical components — typically requiring a
        functioning Smithy and advanced workshops — directly determines when you can field crossbow marksmen.
      </p>

      <table className="parchment-table mb-8">
        <thead>
          <tr>
            <th>Weapon</th>
            <th>Wood</th>
            <th>Metal / Comp.</th>
            <th>Tech Required</th>
            <th>Carpentry</th>
            <th>Marksman Req.</th>
            <th>Station</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Short Bow</td>
            <td>20</td>
            <td>0</td>
            <td>Wooden Weaponry</td>
            <td>0</td>
            <td>0</td>
            <td>Bowyer's Table</td>
          </tr>
          <tr>
            <td>Longbow</td>
            <td>40</td>
            <td>0</td>
            <td>Fletching II</td>
            <td>0</td>
            <td>10</td>
            <td>Bowyer's Table</td>
          </tr>
          <tr>
            <td>Crossbow</td>
            <td>35</td>
            <td>2 Mech Comp</td>
            <td>Crossbows I</td>
            <td>20</td>
            <td>0</td>
            <td>Bowyer's Table</td>
          </tr>
          <tr>
            <td>Heavy Crossbow</td>
            <td>45</td>
            <td>3 Metal + 3 Mech Comp</td>
            <td>Crossbows II</td>
            <td>20</td>
            <td>15</td>
            <td>Bowyer's Table</td>
          </tr>
        </tbody>
      </table>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        The Short Bow is deliberately cheap at 20 wood, letting you arm every new settler on day one with
        zero skill requirements. The Longbow doubles the wood cost to 40 but remains a wood-only recipe —
        a bargain for the damage upgrade. The Crossbow introduces the first real production gate: 35 wood plus
        2 mechanical components, which require dismantling enemy gear or trade. Heavy Crossbows are the most
        resource-intensive, demanding 45 wood, 3 metal ingots, and 3 mechanical components per weapon. For a
        squad of six, that means committing 270 wood, 18 metal, and 18 mechanical components — a serious
        mid-to-late-game investment.
      </p>

      <div className="aged-border p-4 mb-8">
        <p className="font-serif text-base text-ink-light leading-relaxed">
          <strong>Production Tip:</strong> Mechanical components are scarce in the early game. Save them for
          Crossbows first, then upgrade to Heavy Crossbows once your metal supply stabilizes. A common mistake is
          burning components on too many mid-tier crossbows before securing a reliable source — leaving your
          colony unable to field critical infrastructure like trebuchet countermeasures or advanced workstations.
          Vet your markmen candidates first; only craft crossbows for settlers with high Marksman skill.
        </p>
      </div>

      {/* Tactical Use Cases Section */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Tactical Use Cases</h2>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        Understanding the game's combat rhythm is essential to weapon selection. Raiders arrive in waves —
        first lightly armoured scouts, then armoured infantry, sometimes backed by trebuchets. Your ranged
        strategy must adapt across these phases, and mixing bow and crossbow marksmen on different
        defensive layers provides the most flexible response. The table below maps each weapon to its
        optimal combat scenario.
      </p>

      <table className="parchment-table mb-8">
        <thead>
          <tr>
            <th>Combat Scenario</th>
            <th>Best Weapon</th>
            <th>Tactical Reasoning</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Early Game / Day 1 Defense</td>
            <td>Short Bow</td>
            <td>Zero skill requirement, 20 wood per unit, arms everyone immediately</td>
          </tr>
          <tr>
            <td>Hunting Wildlife</td>
            <td>Short Bow / Longbow</td>
            <td>5.4s fire rate maximizes shots on moving targets; damage per hit matters less vs unarmoured game</td>
          </tr>
          <tr>
            <td>Mid-Game Skirmish Waves</td>
            <td>Longbow</td>
            <td>22 damage with fast fire rate clears mixed-armour raider waves efficiently</td>
          </tr>
          <tr>
            <td>Armoured Knight Raids</td>
            <td>Crossbow</td>
            <td>90% armour pen bypasses heavy plate; 50% armour damage degrades enemy gear over sustained fire</td>
          </tr>
          <tr>
            <td>Late-Game Siege Defense</td>
            <td>Heavy Crossbow</td>
            <td>92% penetration + 50.4 (Flawless) damage deletes priority targets; 25m range engages trebuchet crews early</td>
          </tr>
          <tr>
            <td>High Wall / Tower Defense</td>
            <td>Crossbow / Heavy Crossbow</td>
            <td>25m base range plus height advantage bonus outranges enemy archers; ideal for merlon-covered battlements</td>
          </tr>
        </tbody>
      </table>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        A mixed defensive layout yields the best results. Position Longbow marksmen on forward battlements where
        their fast fire rate can thin out the initial wave of lightly-armoured scouts and ladder carriers. Place
        Crossbow and Heavy Crossbow marksmen on elevated rear towers — their 25m range combined with height
        advantage ensures they can pick off armoured priority targets like shield-bearing knights and sappers
        before those threats reach your gate. This layered approach is described in detail in our
        {' '}<a href="/crossbow-defense" className="text-vermillion hover:underline">crossbow defense guide</a>
        {' '}and{' '}
        <a href="/longbow-defense" className="text-vermillion hover:underline">longbow defense layout</a>.
      </p>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        Marksman skill requirements also dictate your upgrade path. New settlers with zero Marksman skill can
        equip Short Bows and Crossbows immediately, but cannot use Longbows (requires skill 10) or Heavy
        Crossbows (requires skill 15). A practical progression is to start recruits on Short Bows for hunting
        and basic defense, craft them a Crossbow once Marksman skill reaches 5–7 through regular use, and
        reserve Longbows for settlers who joined with existing combat aptitude. This staggered approach ensures
        you never have an expensive weapon sitting idle because the wielder lacks the skill to use it.
      </p>

      <div className="aged-border p-4 mb-8">
        <p className="font-serif text-base text-ink-light leading-relaxed">
          <strong>Height Advantage:</strong> Placing archers on higher ground — towers, elevated battlements, or
          multi-storey fortress walls — grants bonuses to precision, effective range, and critical hit chance.
          Crossbows benefit disproportionately from this mechanic because their base 25m range reaches farther
          when amplified by elevation, letting them outrange enemy archers who would otherwise trade shots.
          Combined with merlon cover, elevated crossbow positions are the backbone of any endgame
          {' '}<a href="/defense" className="text-vermillion hover:underline">defense strategy</a>.
        </p>
      </div>

      {/* Bows vs Crossbows: Summary Section */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Bows vs Crossbows: When to Choose Each</h2>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        Choose <strong className="text-ink">bows (Short Bow / Longbow)</strong> when you need sustained fire
        against large numbers of unarmoured or lightly armoured enemies. The 5.4-second attack duration means
        bow marksmen can suppress entire waves, and the zero-resource-cost of ammunition (arrows are unlimited
        in Going Medieval) makes them the most economical ranged option. Short Bows arm fresh recruits, while
        Longbows give established marksmen a meaningful damage upgrade without sacrificing fire rate. Use bows
        for hunting, early-game defense, and wave-clearing duty on forward walls.
      </p>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        Choose <strong className="text-ink">crossbows (Crossbow / Heavy Crossbow)</strong> when facing armoured
        raiders, knights, or siege engines. The 90–92% armour penetration ensures your shots connect for near-full
        damage even through steel plate, and the 25-metre base range lets you engage threats before they reach
        your walls. The slow fire rate is a meaningful trade-off — crossbow marksmen must make every bolt count
        — but the per-shot damage of a Flawless Heavy Crossbow (50.4) combined with height advantage and critical
        hits can one-shot mid-tier enemies. Crossbows are the late-game weapon of choice for tower defense and
        siege-breaking.
      </p>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        For a complete tier ranking of all weapon types, see our
        {' '}<a href="/best-weapons-ranked" className="text-vermillion hover:underline">best weapons ranked guide</a>.
      </p>

      {/* FAQ Section */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Frequently Asked Questions</h2>

      <div className="aged-border p-4 mb-4">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">Which is better for a new colony: Short Bow or Crossbow?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          Short Bow wins decisively for new colonies. It requires only Wooden Weaponry tech (very early in the
          research tree), costs just 20 wood, and has zero skill requirements for both crafting and use. You can
          arm every settler on day one. Crossbows require Crossbows I research, Carpentry 20, and 2 mechanical
          components per unit — resources and infrastructure you won't have until well into the mid-game. Start
          with Short Bows, upgrade to Longbows once your marksmen hit skill 10, and transition to Crossbows only
          after you've secured a steady mechanical component supply and face increasingly armoured raiders.
        </p>
      </div>

      <div className="aged-border p-4 mb-4">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">Does bow quality affect damage in Going Medieval?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          No. Short Bow and Longbow damage is fixed at 12 and 22 respectively across all quality tiers from
          Flimsy to Flawless. Bow quality only improves precision (95% at Flimsy → 100% at Good+), distance
          accuracy decay, hitpoints/durability, and item value. This means a Flimsy Longbow hits as hard as a
          Flawless one — you're paying for reliability, not raw damage. Crossbows, by contrast, scale damage
          significantly with quality: a Flimsy Crossbow deals 20.8, while a Flawless one deals 31.2. Heavy
          Crossbows scale even more dramatically from 28.8 (Flimsy) to 50.4 (Flawless). If you invest in
          crossbow production, always aim for Good quality or higher.
        </p>
      </div>

      <div className="aged-border p-4 mb-4">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">Can I mix bows and crossbows in my defense?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          Yes, and it is strongly recommended. A layered defense using both weapon types exploits their
          complementary strengths: Longbow marksmen on forward merlons spam fast shots to suppress waves of
          unarmoured raiders, while Crossbow marksmen in elevated rear positions focus-fire armoured knights
          and sappers. This setup ensures your fast-firing bow archers keep the melee flood under control while
          your heavy crossbow bolts eliminate priority threats before they breach your walls. See our
          {' '}<a href="/defense" className="text-vermillion hover:underline">complete defense guide</a> for
          detailed multi-layer tower and battlement layouts.
        </p>
      </div>

      <div className="aged-border p-4 mb-8">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">Why does my crossbow marksman fire so slowly?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          The slow fire rate is by design — crossbows trade attack speed for raw stopping power and armour
          penetration. At Good quality, a Crossbow fires every 9.45 seconds compared to 5.4 seconds for a
          Longbow. The Heavy Crossbow is even slower at 10.35 seconds. This isn't a bug; it's the core
          trade-off of the crossbow weapon family. To mitigate this, position crossbow marksmen where each
          shot counts — on towers with height advantage, targeting armoured enemies. For wave-clearing against
          unarmoured targets, rely on bow marksmen with their faster fire rate.
        </p>
      </div>

      <p className="font-serif text-sm text-ink-muted leading-relaxed mt-8 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
        Data source: Community testing estimates based on Going Medieval game files (version 0.22+).
        Weapon stats reflect in-game values; tactical recommendations are derived from player experience.
        Game mechanics may change with future updates. Cross-referenced from the Going Medieval Community Wiki
        and Foxy Voxel developer patch notes.
      </p>

    </main>
  );
}
