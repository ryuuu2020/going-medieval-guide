/* ── Tier badge style helpers ── */
const tierBadge = (tier: string) => {
  const style: React.CSSProperties = {
    display: 'inline-block',
    width: '2rem',
    height: '2rem',
    lineHeight: '2rem',
    textAlign: 'center',
    fontWeight: 700,
    borderRadius: '3px',
    fontSize: '0.8rem',
    fontFamily: "'Inter', sans-serif",
    color: '#fff',
  };
  switch (tier) {
    case 'S':
      return { ...style, backgroundColor: '#b8860b', boxShadow: '0 0 6px rgba(184,134,11,0.4)' };
    case 'A':
      return { ...style, backgroundColor: '#7f8c8d' };
    case 'B':
      return { ...style, backgroundColor: '#cd7f32' };
    case 'C':
      return { ...style, backgroundColor: '#8c6e4e' };
    case 'D':
      return { ...style, backgroundColor: '#9e9e9e' };
    default:
      return style;
  }
};

const costBadge = (cost: number) => {
  const color = cost >= 0 ? 'var(--color-accent)' : '#c0392b';
  return (
    <span
      className="inline-block px-2 py-0.5 rounded text-xs font-semibold"
      style={{ backgroundColor: 'var(--color-bg-card)', color, border: `1px solid ${color}` }}
    >
      {cost >= 0 ? `+${cost}` : cost}
    </span>
  );
};

/* ── Table row helper ── */
const TR = ({
  tier,
  name,
  effect,
  cost,
  conflicts,
}: {
  tier: string;
  name: string;
  effect: string;
  cost?: number;
  conflicts?: string;
}) => (
  <tr>
    <td className="text-center" style={{ padding: '0.5rem 0.75rem' }}>
      <span style={tierBadge(tier)}>{tier}</span>
    </td>
    <td className="font-semibold text-ink">{name}</td>
    <td className="text-ink-light">{effect}</td>
    <td className="text-ink-light text-center">{cost !== undefined ? costBadge(cost) : '—'}</td>
    <td className="text-ink-light">{conflicts || '—'}</td>
  </tr>
);

export default function SettlerTraitsTierListPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

        {/* ===== Main content (65%) ===== */}
        <div className="flex-1 lg:max-w-[65%] space-y-10">

          {/* ── H1 + Summary ── */}
          <section>
            <h1 className="chapter-heading">Going Medieval Settler Traits Tier List</h1>
            <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
              Settler traits in <em>Going Medieval</em> are random personality perks that can make a colonist indispensable or turn them into a liability. This tier list ranks all 48 verified traits from the game wiki, using cost, combat utility, productivity, and colony impact. Because traits are assigned randomly, always evaluate the <strong>full package</strong> — a terrible trait on a specialist you never need is less painful than a great trait on a settler with no matching skills.
            </p>
          </section>

          {/* ═══════════════════════ S-Tier ═══════════════════════ */}
          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">
              S-Tier: Game-Changing Traits
            </h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              S-tier traits reshape how a settler functions. These are the perks you actively hunt for when recruiting prisoners or choosing starting colonists. <strong>Green Thumb</strong> is the single best farming trait in the game: a flat +35% harvest speed and +3 Botany means one settler can feed far more mouths than a normal farmer. <strong>Brawny</strong> is equally dominant for labor and combat, stacking speed, work efficiency, and melee damage into one package. <strong>Robust</strong> turns any settler into a durable survivor, improving healing, wound recovery, and motor skills. Finally, <strong>Gobbler</strong> is deceptively powerful — eating in half the time means more work cycles per day and less scheduling stress around meals.
            </p>
            <table className="parchment-table">
              <thead>
                <tr>
                  <th style={{ width: '60px' }}>Tier</th>
                  <th>Trait</th>
                  <th>Effect Summary</th>
                  <th style={{ width: '80px' }}>Cost</th>
                  <th>Conflicts</th>
                </tr>
              </thead>
              <tbody>
                <TR tier="S" name="Green Thumb" effect="Botany +3, Harvest +35%, Harvest fail -50%" cost={20} />
                <TR tier="S" name="Brawny" effect="Mining +3, Speed +25%, Work +25%, Melee +5%" cost={15} />
                <TR tier="S" name="Robust" effect="Healing +25%, Motor +25%, Wound +25%" cost={15} />
                <TR tier="S" name="Gobbler" effect="Eat time -50%" cost={10} />
              </tbody>
            </table>
            <p className="font-serif text-sm text-ink-muted italic mt-2">S-tier traits are worth building entire roles around. Green Thumb and Brawny are especially valuable on your primary farmer and miner.</p>
          </section>

          {/* ═══════════════════════ A-Tier ═══════════════════════ */}
          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">
              A-Tier: Strong, Reliable Picks
            </h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              A-tier traits are strong enough to influence recruitment decisions but slightly narrower than S-tier. <strong>Erudite</strong> and <strong>Industrious</strong> are productivity monsters for researchers and general workers, respectively. <strong>Vigorous</strong> is a cheaper alternative to Robust that still dramatically improves survival. For trade and social roles, <strong>Ravishing</strong>, <strong>Fair</strong>, and <strong>Winsome</strong> provide stacking Speech, Beauty, and Trade bonuses that make merchants and jailers far more effective. Mobility perks like <strong>Whirlwind</strong> and <strong>Fleet Footed</strong> reduce idle walking time across the colony, which compounds into huge efficiency gains over seasons.
            </p>
            <table className="parchment-table">
              <thead>
                <tr>
                  <th style={{ width: '60px' }}>Tier</th>
                  <th>Trait</th>
                  <th>Effect Summary</th>
                  <th style={{ width: '80px' }}>Cost</th>
                  <th>Conflicts</th>
                </tr>
              </thead>
              <tbody>
                <TR tier="A" name="Vigorous" effect="Healing +30%, Wound +20%" cost={10} />
                <TR tier="A" name="Erudite" effect="Intellectual +5, XP +30%" cost={11} />
                <TR tier="A" name="Iron Stomach" effect="Eat time -40%" cost={8} />
                <TR tier="A" name="Whirlwind" effect="Speed +30%, Motor +10%" cost={8} />
                <TR tier="A" name="Night Owl" effect="Sleep recovery +25%, Sleep consume -15%" cost={8} />
                <TR tier="A" name="Ravishing" effect="Speech +5, Trade +30%, Beauty +20%, Social +35%" cost={11} />
                <TR tier="A" name="Fair" effect="Speech +5, Art +3, Trade +20%, Beauty +10%, Social +35%" cost={9} />
                <TR tier="A" name="Industrious" effect="Global work speed +15%" cost={5} />
                <TR tier="A" name="Fleet Footed" effect="Speed +20%, Motor +15%" cost={7} />
              </tbody>
            </table>
          </section>

          {/* ═══════════════════════ B-Tier ═══════════════════════ */}
          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">
              B-Tier: Situational and Solid
            </h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              B-tier traits are useful in specific colonies or roles. <strong>Cold Hardy</strong> and <strong>Heat Resistant</strong> remove temperature morale penalties entirely, making them excellent in extreme biomes but mediocre in temperate maps. <strong>Brawler</strong> and <strong>Hefty</strong> turn settlers into melee specialists, though melee combat is generally riskier than ranged defense. Social perks like <strong>Congenial</strong>, <strong>Outgoing</strong>, and <strong>Lord of Misrule</strong> stabilize mood in large colonies but matter less in small, tight groups. Alcohol-related traits (<strong>Hedonist</strong>, <strong>Swigger</strong>, <strong>Lightweight</strong>) are fun but require a working brewery economy to justify their cost. Traits like <strong>Snow White</strong> or <strong>Sun Seeker</strong> are free morale boosts if the map cooperates.
            </p>
            <table className="parchment-table">
              <thead>
                <tr>
                  <th style={{ width: '60px' }}>Tier</th>
                  <th>Trait</th>
                  <th>Effect Summary</th>
                  <th style={{ width: '80px' }}>Cost</th>
                  <th>Conflicts</th>
                </tr>
              </thead>
              <tbody>
                <TR tier="B" name="Cold Hardy" effect="Immune to cold" />
                <TR tier="B" name="Heat Resistant" effect="Immune to heat" />
                <TR tier="B" name="Bloodlust" effect="Morale bonus from kills" />
                <TR tier="B" name="Brawler" effect="Melee +3, Unarmed +30%" cost={4} />
                <TR tier="B" name="Hefty" effect="Speed -10%, Melee +20%, Mining +25%" cost={11} />
                <TR tier="B" name="Austere" effect="Appetite -35%, Eat +35%" cost={4} />
                <TR tier="B" name="Gourmet" effect="Cooking +5, Appetite +5%, Eat -15%" cost={6} />
                <TR tier="B" name="Congenial" effect="Mood target +15%, Mood change -15%" cost={6} />
                <TR tier="B" name="Outgoing" effect="Mood target +10%, Mood change -5%, Social +35%" cost={3} />
                <TR tier="B" name="Early Bird" effect="Sleep recovery +45%, consume +25%" cost={0} />
                <TR tier="B" name="Forty Winks" effect="Sleep recovery +20%, consume -10%" cost={6} />
                <TR tier="B" name="Snow White" effect="Morale bonus from snow" />
                <TR tier="B" name="Sun Seeker" effect="Morale bonus from sun" />
                <TR tier="B" name="Wicche" effect="Animal +3, Tame +10%, Train +10%" cost={3} />
                <TR tier="B" name="Wise" effect="Intellectual +3, XP +20%" cost={6} />
                <TR tier="B" name="Strapping" effect="Melee +3" />
                <TR tier="B" name="Winsome" effect="Speech +3, Trade +10%, Beauty +5%, Social +35%" cost={5} />
                <TR tier="B" name="Lord of Misrule" effect="Social +20%, Social chance +5%" />
                <TR tier="B" name="Hedonist" effect="Likes drinking" cost={6} />
                <TR tier="B" name="Swigger" effect="Work speed +10% after drinking" />
                <TR tier="B" name="Lightweight" effect="Less alcohol needed" cost={6} />
                <TR tier="B" name="Cannibal" effect="Morale bonus from human meat" />
              </tbody>
            </table>
          </section>

          {/* ═══════════════════════ C-Tier ═══════════════════════ */}
          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">
              C-Tier: Minor or Niche
            </h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              C-tier traits provide small benefits but come with trade-offs or extremely narrow use cases. Art-focused perks like <strong>Dainty</strong> and <strong>Precious</strong> only matter if you plan to dedicate a settler to sculpting and decorating, and their mood penalties for combat make them awkward on a small colony where everyone fights. <strong>Benevolent</strong> is a strong social boost but conflicts with Bloodlust and Brawler, limiting its flexibility. <strong>Callous</strong> is useful for butchers and grave diggers who spend all day near corpses, but most colonies can simply rotate tasks. <strong>Punch Drunk</strong> is actively annoying — the work speed bonus from drinking is not worth the risk of aggressive outbursts.
            </p>
            <table className="parchment-table">
              <thead>
                <tr>
                  <th style={{ width: '60px' }}>Tier</th>
                  <th>Trait</th>
                  <th>Effect Summary</th>
                  <th style={{ width: '80px' }}>Cost</th>
                  <th>Conflicts</th>
                </tr>
              </thead>
              <tbody>
                <TR tier="C" name="Dainty" effect="Art +10, dislikes fighting" />
                <TR tier="C" name="Precious" effect="Art +5, dislikes killing" />
                <TR tier="C" name="Benevolent" effect="Speech +5, Art +5, Social +35%, conflicts with Bloodlust/Brawler" />
                <TR tier="C" name="Callous" effect="Ignores corpses" />
                <TR tier="C" name="Punch Drunk" effect="Likes drinking, aggressive when drunk (-8)" />
              </tbody>
            </table>
          </section>

          {/* ═══════════════════════ D-Tier ═══════════════════════ */}
          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">
              D-Tier: Avoid or Reconsider
            </h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              D-tier traits are negative or actively harmful. <strong>Moribund</strong> is the worst trait in the game: a massive -35% healing and wound recovery, plus -20% motor, means the settler will spend more time injured and less time moving. <strong>Dullard</strong> cripples research and learning, making the settler useless in any intellectual role. <strong>Laggardly</strong> and <strong>Sluggardly</strong> tank work speed and movement, which are death sentences for a colony dependent on tight labor. Some negative traits like <strong>Ruthless</strong> or <strong>Gluttonous</strong> have tiny upsides, but the downsides almost always outweigh them. Consider banishing, imprisoning, or recruiting only as a last resort these settlers.
            </p>
            <table className="parchment-table">
              <thead>
                <tr>
                  <th style={{ width: '60px' }}>Tier</th>
                  <th>Trait</th>
                  <th>Effect Summary</th>
                  <th style={{ width: '80px' }}>Cost</th>
                  <th>Conflicts</th>
                </tr>
              </thead>
              <tbody>
                <TR tier="D" name="Moribund" effect="Healing -35%, Motor -20%, Wound -35%" cost={-18} />
                <TR tier="D" name="Dullard" effect="Intellectual -5, Speech -3, XP -25%" cost={-15} />
                <TR tier="D" name="Laggardly" effect="Speed -15%, Work -30%" cost={-9} />
                <TR tier="D" name="Sluggardly" effect="Speed -15%, Work -20%" cost={-7} />
                <TR tier="D" name="Infirm" effect="Healing -30%, Motor -10%, Wound -10%" cost={-10} />
                <TR tier="D" name="Vulnerable" effect="Wound -25%, Motor -5%" cost={-6} />
                <TR tier="D" name="Churl" effect="Mood -20%, Mood change +10%, Negative social +35%" cost={-6} />
                <TR tier="D" name="Contemplative" effect="Mood -30%, Social interval +100%, Social chance -50%" cost={-7} />
                <TR tier="D" name="Disfigured" effect="Speech -5, Beauty -10%, Negative social +10%" cost={-5} />
                <TR tier="D" name="Ill-Favoured" effect="Speech -3, Beauty -10%, Negative social +10%" cost={-3} />
                <TR tier="D" name="Listless" effect="Speech -5, Negative social +5%" cost={-5} />
                <TR tier="D" name="Stout" effect="Appetite +20%, Eat -15%, Speed -5%" cost={-4} />
                <TR tier="D" name="Elf Shot" effect="Motor -15% (back pain)" cost={-3} />
                <TR tier="D" name="Washout" effect="Loses morale in rain" />
                <TR tier="D" name="Hot-Blooded" effect="Constantly overheated" />
                <TR tier="D" name="Chilly" effect="Loses morale in cold" />
                <TR tier="D" name="Ruthless" effect="Speech -3, Trade +20%, Negative social +35%" cost={1} />
                <TR tier="D" name="Gluttonous" effect="Appetite +15%, Eat -30%" />
                <TR tier="D" name="Somnolent" effect="Sleep recovery +50%, consume +30% (needs more sleep)" />
              </tbody>
            </table>
          </section>

          {/* ═══════════════════════ How to Use This List ═══════════════════════ */}
          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">
              How to Use This Tier List
            </h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Traits are randomly assigned during settler generation, so you rarely get a perfect build. The key is matching the trait to the role. A <strong>Gobbler</strong> settler is great anywhere; a <strong>Brawler</strong> is only great if you also have decent melee skill and armor. Similarly, <strong>Dullard</strong> is devastating on a researcher but irrelevant on a hauler. When choosing starting settlers or converting prisoners, look at the whole package: skill levels, passions, traits, and health conditions. A single negative trait can be manageable if the settler's skills cover a critical gap.
            </p>
            <div className="aged-border p-5" style={{ backgroundColor: 'var(--color-bg-card)' }}>
              <h3 className="font-display text-lg font-semibold text-ink mb-2">Key Takeaway</h3>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                Evaluate the <strong>full package</strong>, not individual traits. A settler with one D-tier trait but high Mining and Construction is still valuable. A settler with three S-tier traits but zero useful skills is just a morale drain.
              </p>
            </div>
          </section>

          {/* ═══════════════════════ FAQ ═══════════════════════ */}
          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">
              Frequently Asked Questions
            </h2>
            <div className="faq-snippets space-y-4">
              <details className="card p-4">
                <summary className="font-display font-semibold text-ink cursor-pointer">
                  Can I remove or replace bad traits?
                </summary>
                <p className="font-serif text-base text-ink-light leading-relaxed mt-3">
                  No, traits are permanent once assigned. If a settler has a severe D-tier trait like Moribund or Dullard, your best options are limiting them to low-skill tasks, banishing them, or using them as a temporary laborer until you can replace them. Plan your colony composition around traits rather than trying to fix them.
                </p>
              </details>
              <details className="card p-4">
                <summary className="font-display font-semibold text-ink cursor-pointer">
                  Do positive traits stack with high skills?
                </summary>
                <p className="font-serif text-base text-ink-light leading-relaxed mt-3">
                  Yes, and this is why traits matter. A settler with 15 Botany and <strong>Green Thumb</strong> will massively outproduce a normal farmer. A fast walker with <strong>Whirlwind</strong> and <strong>Fleet Footed</strong> spends far less time idle. Always pair traits with matching roles to maximize their impact.
                </p>
              </details>
              <details className="card p-4">
                <summary className="font-display font-semibold text-ink cursor-pointer">
                  Should I reject every settler with a D-tier trait?
                </summary>
                <p className="font-serif text-base text-ink-light leading-relaxed mt-3">
                  Not necessarily. Early-game manpower is scarce, and even a flawed settler can haul, cut wood, or grow simple crops. However, avoid putting D-tier trait carriers in critical roles like doctor, miner, builder, or researcher. Use them as expendable general labor until you have better replacements.
                </p>
              </details>
            </div>
          </section>

          {/* ── Verification note ── */}
          <section>
            <div className="field-divider mb-4" />
            <p className="font-serif text-xs text-ink-muted italic">
              Trait data verified against the Going Medieval Wiki (goingmedieval.fandom.com) as of June 2026. Costs and effects may change with patches.
            </p>
          </section>

          {/* ── Back to Home ── */}
          <section>
            <div className="field-divider mb-6" />
            <a
              href="/"
              className="inline-block font-label text-sm text-ink-muted hover:text-vermillion transition-colors"
            >
              &larr; Back to Home
            </a>
          </section>

        </div>

        {/* ===== Sidebar (35%) ===== */}
        <aside className="lg:w-[35%] space-y-8 shrink-0">

          {/* Quick Summary */}
          <div className="field-sidebar-block">
            <h3 className="font-display text-lg font-semibold text-ink mb-4">Trait Tier Summary</h3>
            <div className="space-y-3 font-serif text-sm text-ink-light">
              <div>
                <span className="font-semibold" style={{ color: '#b8860b' }}>S Tier</span>
                <span className="text-ink-muted"> — Build entire roles around these traits.</span>
              </div>
              <div>
                <span className="font-semibold" style={{ color: '#7f8c8d' }}>A Tier</span>
                <span className="text-ink-muted"> — Strong, reliable picks for most colonies.</span>
              </div>
              <div>
                <span className="font-semibold" style={{ color: '#cd7f32' }}>B Tier</span>
                <span className="text-ink-muted"> — Situational; excellent in the right context.</span>
              </div>
              <div>
                <span className="font-semibold" style={{ color: '#8c6e4e' }}>C Tier</span>
                <span className="text-ink-muted"> — Niche or minor impact.</span>
              </div>
              <div>
                <span className="font-semibold" style={{ color: '#9e9e9e' }}>D Tier</span>
                <span className="text-ink-muted"> — Avoid or relegate to non-critical roles.</span>
              </div>
            </div>
          </div>

          {/* Top Picks */}
          <div className="journal-card p-5">
            <h3 className="font-display text-base font-semibold text-ink mb-3">Best Traits to Hunt For</h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-display text-sm font-semibold text-gold">Farmers</h4>
                <p className="font-serif text-xs text-ink-muted mt-0.5">Green Thumb &gt; Vigorous &gt; Industrious</p>
              </div>
              <div>
                <h4 className="font-display text-sm font-semibold text-gold">Miners / Builders</h4>
                <p className="font-serif text-xs text-ink-muted mt-0.5">Brawny &gt; Industrious &gt; Fleet Footed</p>
              </div>
              <div>
                <h4 className="font-display text-sm font-semibold text-gold">Researchers</h4>
                <p className="font-serif text-xs text-ink-muted mt-0.5">Erudite &gt; Wise &gt; Industrious</p>
              </div>
              <div>
                <h4 className="font-display text-sm font-semibold text-gold">Traders / Jailers</h4>
                <p className="font-serif text-xs text-ink-muted mt-0.5">Ravishing &gt; Fair &gt; Winsome</p>
              </div>
            </div>
          </div>

          {/* Related Guides */}
          <div className="field-sidebar-block">
            <h3 className="font-display text-lg font-semibold text-ink mb-4">Related Guides</h3>
            <div className="space-y-3">
              <a href="/settlers" className="recipe-card block p-3 group">
                <h4 className="font-display text-sm font-semibold text-ink group-hover:text-vermillion transition-colors">Settler Management</h4>
                <p className="font-serif text-xs text-ink-muted mt-1">Skills, mood, needs, and role assignments</p>
              </a>
              <a href="/settler-skills" className="recipe-card block p-3 group">
                <h4 className="font-display text-sm font-semibold text-ink group-hover:text-vermillion transition-colors">Settler Skills Guide</h4>
                <p className="font-serif text-xs text-ink-muted mt-1">Detailed breakdown of every skill and its use</p>
              </a>
              <a href="/perks-guide" className="recipe-card block p-3 group">
                <h4 className="font-display text-sm font-semibold text-ink group-hover:text-vermillion transition-colors">Perks Guide</h4>
                <p className="font-serif text-xs text-ink-muted mt-1">How traits, passions, and backgrounds interact</p>
              </a>
              <a href="/tier-list" className="recipe-card block p-3 group">
                <h4 className="font-display text-sm font-semibold text-ink group-hover:text-vermillion transition-colors">Main Tier List</h4>
                <p className="font-serif text-xs text-ink-muted mt-1">Skills, crops, animals, and defenses ranked</p>
              </a>
            </div>
          </div>

          {/* Methodology Note */}
          <div className="aged-border p-5" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
            <h3 className="font-display text-base font-semibold text-ink mb-2">How We Rank</h3>
            <p className="font-serif text-xs text-ink-light leading-relaxed">
              Tiers are based on trait cost, versatility, and impact on colony survival across all game stages. S-tier traits are universally powerful; D-tier traits are negative or severely limiting. Because traits are random, always consider the settler's complete skill and health package before deciding their fate.
            </p>
          </div>

        </aside>
      </div>
    </main>
  );
}
