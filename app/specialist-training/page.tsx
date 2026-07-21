{/* Meta description: Going Medieval specialist training — all 14 skills, skill cap 50, XP costs from 350 (level 1) to 8000 (level 50), job preference XP multipliers from 0.2x resentful to 4x passionate, and perk XP modifiers. */}
export const metadata = {
  title: "Going Medieval Specialist Training — Skills, XP & Passion Multipliers (2026)",
  description:
    "How skill training works in Going Medieval: all 14 settler skills, the 0-50 level cap with XP costs from 350 (level 1) to 8000 (level 50), job preference XP multipliers (Resentful 0.2x to Passionate 4x), perk XP modifiers like Erudite +30%, and how to build true specialists.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do settlers level up skills in Going Medieval?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Settlers earn skill XP by doing jobs governed by that skill — cooking levels Culinary, mining levels Mining, research levels Intellectual. Skills run from level 0 to a cap of 50. Reaching level 1 takes 350 XP, and the per-level cost rises steadily until level 50 costs 8000 XP. A settler's job preference for that skill multiplies every point of XP earned, from 0.2x (Resentful) up to 4x (Passionate)."
      }
    },
    {
      "@type": "Question",
      "name": "What is the maximum skill level in Going Medieval?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The base game caps every skill at level 50. The XP curve runs from 350 XP for level 1 up to 8000 XP for level 50. Because the top levels each cost more than twenty times the first, a settler realistically maxes only one or two skills in a playthrough — which is exactly why specialisation matters."
      }
    },
    {
      "@type": "Question",
      "name": "How much does passion affect skill gain in Going Medieval?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enormously. Job preferences multiply XP gain: Resentful 0.2x, Unwilling 0.5x, Eager 2.5x, and Passionate 4x. A Passionate settler therefore learns twenty times faster than a Resentful one doing the same work. Preferences also add positive or negative mood modifiers when performing the associated tasks, so passion is both a training-speed stat and a mood stat."
      }
    },
    {
      "@type": "Question",
      "name": "Which skills should I specialize first in Going Medieval?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Follow the survival chain: Botany (growing and harvesting food — low skill can ruin harvests), Culinary (better meals that carry mood bonuses), Construction (all building speed), and Intellectual (research, the tech tree gate). Combat skills (Melee, Marksman) follow once raiders scale up. Medicine is worth one dedicated settler from the first winter onward."
      }
    },
    {
      "@type": "Question",
      "name": "Do perks affect skill training in Going Medieval?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Perks can raise or lower both starting skill and XP gain. Documented examples: Erudite grants +5 Intellectual and +30% XP gain, while Dullard imposes -5 Intellectual, -3 Speechcraft, and -25% XP gain with +10% clumsiness. Many backstories also bundle starting skill levels with job preferences — an Erudite, Passionate scholar is the best research engine the game offers, while a Dullard settler should be steered toward simple labour."
      }
    }
  ]
};

export default function SpecialistTrainingPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">

      <h1 className="chapter-heading">Going Medieval Specialist Training: Skills, XP, and the Passion Multiplier</h1>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-6">
        <span className="drop-cap">E</span>very settler in Going Medieval is a bundle of fourteen skills,
        each running from level 0 to 50, and every hour of work is also an hour of training. The catch is
        that the game's XP math punishes generalists: the first level costs 350 XP, the fiftieth costs
        8000, and a settler's attitude toward the work multiplies everything they earn — from a miserable
        0.2&times; for the Resentful to a roaring 4&times; for the Passionate. Train a settler against
        their preferences and you pay twenty times the time for the same level. Train with the grain and
        a single Passionate specialist will out-produce three dabblers. Here is the full system: the
        skills, the XP curve, and the training setups that work.
      </p>

      {/* Skills table */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">The Fourteen Skills and What They Feed</h2>

      <table className="parchment-table mb-8">
        <thead>
          <tr>
            <th>Skill</th>
            <th>What It Governs</th>
            <th>Jobs That Train It</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Animal Handling</td><td>Taming, feeding, training and hunting animals</td><td>Fish, Animal Husbandry</td></tr>
          <tr><td>Art</td><td>Statues, paintings, tapestries</td><td>Artist</td></tr>
          <tr><td>Botany</td><td>Sowing, growing, harvesting and gathering plants</td><td>Grow, Harvest, Cut Plants</td></tr>
          <tr><td>Carpentry</td><td>Wooden items and bows</td><td>Carpentry (woodwork bench, bowyer's table)</td></tr>
          <tr><td>Construction</td><td>Bricks, chiseling rock, overall construction speed</td><td>Construct</td></tr>
          <tr><td>Culinary</td><td>Cooking and butchering</td><td>Cooking</td></tr>
          <tr><td>Intellectual</td><td>Research speed; brewing spirits and medicinal drugs</td><td>Research, Alchemy</td></tr>
          <tr><td>Marksman</td><td>Ranged weapons — bows and crossbows</td><td>Hunt, combat, training</td></tr>
          <tr><td>Medicine</td><td>Healing others and self-healing</td><td>Tend</td></tr>
          <tr><td>Melee</td><td>Weapon damage; higher levels unlock advanced weapons, dodge, crit</td><td>Melee combat, training</td></tr>
          <tr><td>Mining</td><td>Mining and digging</td><td>Mine</td></tr>
          <tr><td>Smithing</td><td>Metal weapons and armour; faster ingot production</td><td>Smithing</td></tr>
          <tr><td>Speechcraft</td><td>Bargaining, cheering up settlers, turning enemies to allies</td><td>Bartering, Gaoler, Bard, Prison Warden</td></tr>
          <tr><td>Tailoring</td><td>Clothing and leather armour</td><td>Tailoring</td></tr>
        </tbody>
      </table>

      {/* XP table */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">The XP Curve: 350 to 8000, Cap 50</h2>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        Two anchor numbers define the whole curve: <strong className="text-ink">
        level 1 costs 350 XP; level 50 costs 8000 XP</strong>, with the per-level requirement rising all
        the way. Everything else is multipliers:
      </p>

      <table className="parchment-table mb-6">
        <thead>
          <tr>
            <th>Factor</th>
            <th>Effect on XP Gain</th>
            <th>Source</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Level 1 requirement</td><td>350 XP</td><td>Game data</td></tr>
          <tr><td>Level 50 requirement (the cap)</td><td>8000 XP</td><td>Game data</td></tr>
          <tr><td>Job preference: Resentful</td><td>0.2× XP</td><td>Game data</td></tr>
          <tr><td>Job preference: Unwilling</td><td>0.5× XP</td><td>Game data</td></tr>
          <tr><td>Job preference: Eager</td><td>2.5× XP</td><td>Game data</td></tr>
          <tr><td>Job preference: Passionate</td><td>4× XP</td><td>Game data</td></tr>
          <tr><td>Perk: Erudite</td><td>+30% XP gain (and +5 Intellectual)</td><td>Game data</td></tr>
          <tr><td>Perk: Dullard</td><td>−25% XP gain (and −5 Intellectual, −3 Speechcraft, +10% clumsiness)</td><td>Game data</td></tr>
        </tbody>
      </table>

      <figure className="mb-8">
        <img
          src="/images/specialist-training.png"
          alt="Bar chart of Going Medieval job preference XP multipliers: Resentful 0.2x, Unwilling 0.5x, neutral 1.0x, Eager 2.5x and Passionate 4.0x, showing a Passionate settler learns twenty times faster than a Resentful one"
          className="w-full rounded-lg border border-[#3d3528]"
          loading="lazy"
        />
        <figcaption className="mt-2 text-center text-sm text-ink-light font-serif">
          Job preference is the single biggest training variable in the game: 4× versus 0.2× is a
          twenty-fold gap. Assign professions by passion first, skill second — skill follows passion.
        </figcaption>
      </figure>

      {/* SVG ladder */}
      <figure className="mb-8">
        <svg viewBox="0 0 920 260" className="w-full rounded-lg" role="img"
          aria-label="Going Medieval training ladder: passion plus work equals XP; XP costs rise from 350 at level 1 to 8000 at level 50, with perks like Erudite and Dullard shifting the rate">
          <rect width="920" height="260" fill="#1a1510" rx="8"/>
          <text x="30" y="38" fill="#d4a840" fontSize="17" fontWeight="bold" fontFamily="serif">The specialist ladder — what one level costs at each stage</text>

          {/* ladder */}
          {([["Level 1", "350 XP", 110, "#a89878"], ["Mid levels", "rising per level", 160, "#d4943a"], ["Level 50 (cap)", "8000 XP", 210, "#d4a840"]] as [string, string, number, string][]).map((s, i) => (
            <g key={i}>
              <rect x="60" y={s[2] - 26} width="220" height="34" rx="4" fill="#242018" stroke={s[3]} strokeWidth={i === 2 ? 2 : 1}/>
              <text x="76" y={s[2] - 4} fill={s[3]} fontSize="13.5" fontWeight={i === 2 ? "bold" : "normal"}>{s[0]}</text>
              <text x="270" y={s[2] - 4} fill="#e0d4c0" fontSize="13" textAnchor="end">{s[1]}</text>
            </g>
          ))}
          <path d="M 300 84 L 300 184" stroke="#a89878" strokeWidth="2" fill="none" markerEnd="url(#arr2)"/>
          <defs><marker id="arr2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#a89878"/></marker></defs>

          {/* multiplier stack */}
          <rect x="360" y="70" width="250" height="150" rx="6" fill="#242018" stroke="#3d3528"/>
          <text x="380" y="96" fill="#e0d4c0" fontSize="13.5" fontWeight="bold">XP rate = work × preference × perks</text>
          <text x="380" y="122" fill="#a89878" fontSize="12">Passionate 4× · Eager 2.5× · neutral 1×</text>
          <text x="380" y="140" fill="#a89878" fontSize="12">Unwilling 0.5× · Resentful 0.2×</text>
          <text x="380" y="166" fill="#a89878" fontSize="12">Erudite +30% XP · Dullard −25% XP</text>
          <text x="380" y="192" fill="#d4943a" fontSize="12">→ level with passion, retrain the rest</text>

          {/* note */}
          <rect x="650" y="70" width="240" height="150" rx="6" fill="#242018" stroke="#3d3528"/>
          <text x="670" y="96" fill="#e0d4c0" fontSize="13.5" fontWeight="bold">Why specialise</text>
          <text x="670" y="122" fill="#a89878" fontSize="12">One Passionate specialist at 4×</text>
          <text x="670" y="140" fill="#a89878" fontSize="12">out-trains three neutral dabblers.</text>
          <text x="670" y="166" fill="#a89878" fontSize="12">Cap is 50 — nobody maxes</text>
          <text x="670" y="184" fill="#a89878" fontSize="12">everything. Pick their craft early.</text>

          <text x="60" y="248" fill="#7a6c50" fontSize="11">XP figures: in-game settler data · multiplier figures: job preference and perk tables</text>
        </svg>
        <figcaption className="mt-2 text-center text-sm text-ink-light font-serif">
          The ladder: steepening XP costs meet multiplicative preference and perk bonuses. Training with
          the grain is worth more than any schedule trick.
        </figcaption>
      </figure>

      {/* How to train */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Building a Specialist: The Working Rules</h2>

      <table className="parchment-table mb-8">
        <thead>
          <tr>
            <th>Rule</th>
            <th>Why It Works</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Recruit and assign by passion, not by current level</td>
            <td>4× XP closes any level gap in weeks; a level-15 Resentful miner trains at 0.2× forever</td>
          </tr>
          <tr>
            <td>One profession per settler, protected by the Jobs panel</td>
            <td>Every hour on a side job is an hour not training the main skill — blank the rest</td>
          </tr>
          <tr>
            <td>Keep specialists on the job daily, even in small doses</td>
            <td>XP comes from doing the work; a smith who forges one item a day still climbs the curve</td>
          </tr>
          <tr>
            <td>Use the Train job for combat skills before raids force the issue</td>
            <td>Training builds Melee and Marksman safely; higher Melee levels unlock advanced weapons, dodge, crit and precision</td>
          </tr>
          <tr>
            <td>Protect your low-skill colony from itself</td>
            <td>Failed work can destroy output — a low-Botany settler can ruin a harvest outright, so gate delicate jobs behind skill</td>
          </tr>
          <tr>
            <td>Let Speechcraft specialists work people, not benches</td>
            <td>Bartering, gaoler and bard duties train the skill no workshop touches — and better traders pay for themselves</td>
          </tr>
        </tbody>
      </table>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        The priority setup that makes all of this automatic — profession at priority 1, everything harmful
        blanked — is in{' '}
        <a href="/work-priorities-setup" className="text-vermillion hover:underline">work priorities setup</a>.
        And the mood payoff is real: working a preferred job grants Job Satisfaction (+4 mood for
        12 hours), so passion assignments train faster <em>and</em> keep settlers happier — the numbers
        are in <a href="/settler-mood-system" className="text-vermillion hover:underline">settler mood system</a>.
      </p>

      <div className="aged-border p-4 mb-8">
        <p className="font-serif text-base text-ink-light leading-relaxed">
          <strong>The math of one great hire:</strong> a Passionate (4×) Erudite (+30%) scholar earns
          XP at roughly 5.2× the neutral rate. Against the 350→8000 XP curve, that settler reaches
          useful mid-levels before a neutral scholar finishes the early ones — and research is the
          colony's tech gate. When choosing between recruits, a passion match beats five starting levels.
        </p>
      </div>

      {/* FAQ Section */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Frequently Asked Questions</h2>

      <div className="aged-border p-4 mb-4">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">How do settlers level up skills in Going Medieval?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          By doing jobs governed by the skill — cooking levels Culinary, mining levels Mining, research
          levels Intellectual. Skills run 0–50; level 1 costs 350 XP and level 50 costs 8000 XP, with the
          per-level cost rising throughout. Job preferences multiply all XP earned, from 0.2× (Resentful)
          to 4× (Passionate).
        </p>
      </div>

      <div className="aged-border p-4 mb-4">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">What is the maximum skill level in Going Medieval?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          Level 50 for every skill in the base game. The XP curve runs from 350 XP for
          level 1 to 8000 XP for level 50 — the top level alone costs more than twenty times the first,
          so a settler realistically maxes only one or two skills per playthrough.
        </p>
      </div>

      <div className="aged-border p-4 mb-4">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">How much does passion affect skill gain?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          Enormously: Resentful 0.2×, Unwilling 0.5×, Eager 2.5×, Passionate 4× XP — a twenty-fold gap
          between best and worst. Preferences also apply positive or negative mood modifiers when doing
          the associated work, so passion is a training stat and a mood stat at once.
        </p>
      </div>

      <div className="aged-border p-4 mb-4">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">Which skills should I specialize first?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          Follow the survival chain: Botany (food — low skill can ruin harvests), Culinary (better meals
          with mood bonuses), Construction (all building speed), and Intellectual (the research gate).
          Melee and Marksman follow as raids scale, and Medicine deserves one dedicated settler from the
          first winter.
        </p>
      </div>

      <div className="aged-border p-4 mb-8">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">Do perks affect skill training?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          Yes. Erudite gives +5 Intellectual and +30% XP gain; Dullard gives −5 Intellectual, −3
          Speechcraft, −25% XP gain and +10% clumsiness. Backstories also bundle starting levels with
          preferences — an Erudite, Passionate scholar is the best research engine available, while a
          Dullard settler belongs on simple labour.
        </p>
      </div>

      {/* Related Guides */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Related Guides</h2>
      <ul className="list-disc pl-6 mb-8 space-y-2 font-serif text-base text-ink-light">
        <li><a href="/work-priorities-setup" className="text-vermillion hover:underline">Work Priorities Setup — protect specialists with the Jobs panel</a></li>
        <li><a href="/settler-skills" className="text-vermillion hover:underline">Settler Skills — deeper detail on each skill's unlocks</a></li>
        <li><a href="/newcomers-skills" className="text-vermillion hover:underline">Newcomers' Skills — reading recruits before you commit</a></li>
        <li><a href="/settler-mood-system" className="text-vermillion hover:underline">Settler Mood System — Job Satisfaction and preference mood effects</a></li>
        <li><a href="/settler-job-assignment" className="text-vermillion hover:underline">Settler Job Assignment — matching passions to roles</a></li>
        <li><a href="/maximize-settler-efficiency" className="text-vermillion hover:underline">Maximize Settler Efficiency — schedules that multiply training time</a></li>
        <li><a href="/perks-guide" className="text-vermillion hover:underline">Perks Guide — Erudite, Dullard, and the rest of the perk table</a></li>
        <li><a href="/research" className="text-vermillion hover:underline">Research — where your Intellectual specialist spends those levels</a></li>
        <li><a href="/settlers" className="text-vermillion hover:underline">Settlers — backstories, traits, and starting levels</a></li>
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
