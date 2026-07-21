{/* Meta description: Going Medieval work priorities setup — the 1-5 priority system rules, every job with its governing skill, left-to-right tie-breaking, and an example 5-settler priority matrix that covers the whole colony. */}
export const metadata = {
  title: "Going Medieval Work Priorities Setup — 1-5 System, Jobs & Template (2026)",
  description:
    "How the Going Medieval work priorities system works: what priority 1-5 and blank mean, tie-breaking rules (same number resolves left to right), all 20+ jobs with their governing skills, and a ready-to-copy example priority matrix for a five-settler colony.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do work priorities work in Going Medieval?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Every settler has a row in the Jobs panel with one box per job. Each box can be set to priority 1 (highest) through 5 (lowest), or left blank, which means the settler will never do that job. A settler always picks the highest-priority job that currently has valid work available. Right-click raises priority and left-click lowers it. If no settler has a job enabled at all, that work never gets done."
      }
    },
    {
      "@type": "Question",
      "name": "What happens when two jobs have the same priority in Going Medieval?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ties are resolved left to right. By default settlers prioritize jobs from left to right across the panel, and any two jobs set to the same number keep that left-to-right ordering. So within one priority level you can still sequence jobs by their column position — the job closer to the left edge wins the tie."
      }
    },
    {
      "@type": "Question",
      "name": "Should I set low-skill settlers to do skilled jobs in Going Medieval?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Usually no. The frame colour of each job box shows the settler's skill level for that job, and the in-game tutorial advises turning jobs off completely for settlers with very low skill — otherwise they will attempt the job and fail. The documented example is botany: a settler with a low Botany skill can ruin a harvest, yielding no resources at all, so it is better to leave Grow and Harvest to skilled farmers and let the unskilled haul instead."
      }
    },
    {
      "@type": "Question",
      "name": "What is a good work priority setup for a new Going Medieval colony?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Give every settler Firefight at priority 1 (fires must always outrank everything), then set each settler's passion jobs at 1-2, supporting jobs at 3-4, and blank out anything they are terrible at. Everyone except your most critical specialists should share Haul at priority 2-4 so stockpiles actually get cleared. A five-settler template: cook (Cooking 1), builder (Construct 1, Mine 2), farmer (Grow/Harvest 1, Cut Plants 1), smith (Smithing 1), scholar (Research 1, Tend 1), with Haul spread across priorities 2-4."
      }
    },
    {
      "@type": "Question",
      "name": "How many priority levels should I actually use in Going Medieval?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Use all five, but sparingly. Priority 1 should hold only the jobs a settler must do before anything else (their profession plus Firefight). Priority 2-3 is for regular secondary work, 4 for filler they may do when idle, and 5 for last-resort tasks. Blanking bad jobs matters more than fine-tuning numbers — a settler who can never touch a job can never ruin it."
      }
    }
  ]
};

export default function WorkPrioritiesSetupPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">

      <h1 className="chapter-heading">Going Medieval Work Priorities Setup: The 1–5 System Done Right</h1>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-6">
        <span className="drop-cap">T</span>he Jobs panel is the operating system of your colony, and most
        failed settlements die from a misconfigured one. The system itself is simple — five priority
        numbers, one blank that means &ldquo;never&rdquo;, and a left-to-right tiebreak — but the failure
        modes are subtle: harvests ruined by unskilled hands, haulers who never haul, a whole colony
        standing idle because the one job that mattered sat at priority 3 on the wrong settler. This
        guide gives the actual rules of the priority system, every job and the skill that governs it, and
        a copyable five-settler matrix that covers a working colony end to end.
      </p>

      {/* Rules */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">The Rules of the 1–5 System</h2>

      <table className="parchment-table mb-6">
        <thead>
          <tr>
            <th>Setting</th>
            <th>Meaning</th>
            <th>Behavior</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>1</td><td>Highest</td><td>Settler does this job before anything else that has valid work</td></tr>
          <tr><td>2</td><td>High</td><td>Done once no priority-1 work is available</td></tr>
          <tr><td>3</td><td>Normal</td><td>The default working level for secondary jobs</td></tr>
          <tr><td>4</td><td>Low</td><td>Filler work for idle hands</td></tr>
          <tr><td>5</td><td>Lowest</td><td>Last-resort tasks, done only when everything else is finished</td></tr>
          <tr><td>Blank</td><td>None</td><td>The settler will <em>never</em> do this job — no exceptions</td></tr>
        </tbody>
      </table>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        Four rules, straight from the game, do most of the work:
      </p>

      <ul className="list-disc pl-6 mb-4 space-y-2 font-serif text-base text-ink-light">
        <li><strong className="text-ink">Right-click raises priority, left-click lowers it.</strong> You sculpt each settler's row directly in the Jobs panel.</li>
        <li><strong className="text-ink">Settlers always take the highest-priority job with valid work.</strong> A priority-1 job with nothing to do is skipped, not waited on — the settler falls through to their next priority.</li>
        <li><strong className="text-ink">Ties break left to right.</strong> By default jobs run left to right, and jobs sharing a number keep that column order — so position inside a priority level still sequences work.</li>
        <li><strong className="text-ink">If nobody has a job enabled, it never happens.</strong> A blank box is absolute. Colonies starve with full fields when every settler has Harvest blanked.</li>
      </ul>

      {/* SVG diagram */}
      <figure className="mb-8">
        <svg viewBox="0 0 920 300" className="w-full rounded-lg" role="img"
          aria-label="Diagram of Going Medieval job priority resolution: a settler scans from priority 1 down to priority 5, ties within a level resolve left to right, and blank boxes are never done">
          <rect width="920" height="300" fill="#1a1510" rx="8"/>
          <text x="30" y="38" fill="#d4a840" fontSize="17" fontWeight="bold" fontFamily="serif">How a settler picks the next task</text>

          {/* scan arrow */}
          <path d="M 60 70 L 60 240" stroke="#a89878" strokeWidth="2" fill="none" markerEnd="url(#arr)"/>
          <defs><marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#a89878"/></marker></defs>
          <text x="42" y="160" fill="#a89878" fontSize="12" transform="rotate(-90 42 160)">scan down</text>

          {[["1 · Highest", "#d4a840"], ["2 · High", "#d4943a"], ["3 · Normal", "#c8b490"], ["4 · Low", "#a89878"], ["5 · Lowest", "#7a6c50"]].map((row, i) => (
            <g key={i}>
              <rect x="90" y={62 + i * 38} width="150" height="30" rx="4" fill="#242018" stroke={row[1]} strokeWidth={i === 0 ? 2 : 1}/>
              <text x="165" y={82 + i * 38} fill={row[1]} fontSize="13" textAnchor="middle" fontWeight={i === 0 ? "bold" : "normal"}>{row[0]}</text>
            </g>
          ))}

          {/* tie-break box */}
          <rect x="280" y="80" width="300" height="130" rx="6" fill="#242018" stroke="#3d3528"/>
          <text x="300" y="106" fill="#e0d4c0" fontSize="13.5" fontWeight="bold">Same number? Leftmost column wins.</text>
          <text x="300" y="128" fill="#a89878" fontSize="12">Construct (1) beats Mine (1) because</text>
          <text x="300" y="146" fill="#a89878" fontSize="12">Construct sits further left on the panel.</text>
          <text x="300" y="176" fill="#a89878" fontSize="12">No valid work at a level → fall through</text>
          <text x="300" y="194" fill="#a89878" fontSize="12">to the next priority below.</text>

          {/* blank box */}
          <rect x="620" y="80" width="270" height="130" rx="6" fill="#242018" stroke="#3d3528"/>
          <text x="640" y="106" fill="#e0d4c0" fontSize="13.5" fontWeight="bold">Blank = never. Absolutely.</text>
          <text x="640" y="128" fill="#a89878" fontSize="12">A blanked job is invisible to that settler.</text>
          <text x="640" y="146" fill="#a89878" fontSize="12">Blank the jobs they are bad at — a low-</text>
          <text x="640" y="164" fill="#a89878" fontSize="12">skill botanist can ruin an entire harvest.</text>
          <text x="640" y="192" fill="#d4943a" fontSize="12">Box frame colour = settler's skill level.</text>

          {/* legend */}
          <text x="90" y="278" fill="#7a6c50" fontSize="11">1-5 priority bands · gold = highest · resolution order: priority number, then column position</text>
        </svg>
        <figcaption className="mt-2 text-center text-sm text-ink-light font-serif">
          Priority resolution in one glance: scan top to bottom, break ties left to right, treat blanks as
          hard refusals, and read the box frame colour for skill before assigning anything delicate.
        </figcaption>
      </figure>

      {/* Jobs table */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Every Job and the Skill That Governs It</h2>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        The panel lists the colony's jobs; each skilled job feeds experience to one skill, and the box's
        frame colour shows the settler's level in it. Unskilled jobs (no governing skill) are safe to
        spread widely; skilled jobs should follow talent:
      </p>

      <table className="parchment-table mb-8">
        <thead>
          <tr>
            <th>Job</th>
            <th>Governing Skill</th>
            <th>What It Covers</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Firefight</td><td>—</td><td>Stomping out fires near the settlement — everyone at priority 1</td></tr>
          <tr><td>Patient / Convalesce</td><td>—</td><td>Awaiting treatment; resting while wounds heal</td></tr>
          <tr><td>Tend</td><td>Medicine</td><td>Treating wounds, carrying the unconscious to beds</td></tr>
          <tr><td>Urgent Haul / Haul</td><td>—</td><td>Moving resources to stockpiles; burying or burning bodies</td></tr>
          <tr><td>Gaoler</td><td>Speechcraft</td><td>Prisoner care, stripping new prisoners, managing release</td></tr>
          <tr><td>Hunt</td><td>Marksman</td><td>Hunting marked animals</td></tr>
          <tr><td>Construct</td><td>Construction</td><td>Building, deconstructing, repairing everything</td></tr>
          <tr><td>Fish</td><td>Animal Handling</td><td>Catching fish by angling</td></tr>
          <tr><td>Grow / Harvest</td><td>Botany</td><td>Sowing fields; harvesting crops and wild plants</td></tr>
          <tr><td>Animal Husbandry</td><td>Animal Handling</td><td>Taming, training, slaughtering, shearing, skeps</td></tr>
          <tr><td>Mine</td><td>Mining</td><td>Digging and mining marked areas</td></tr>
          <tr><td>Cut Plants</td><td>Botany</td><td>Chopping trees, clearing vegetation</td></tr>
          <tr><td>Cooking</td><td>Culinary</td><td>Meals, butchering, brewing, preserving — campfire through distillery</td></tr>
          <tr><td>Craft</td><td>—</td><td>Basic unskilled crafting: bricks, stonemason's bench, kiln, ice box</td></tr>
          <tr><td>Smithing</td><td>Smithing</td><td>Metal gear and ingots — forge, armourer's table, smelting furnace</td></tr>
          <tr><td>Carpentry</td><td>Carpentry</td><td>Wooden items and bows — woodwork bench, bowyer's table</td></tr>
          <tr><td>Tailoring</td><td>Tailoring</td><td>Clothing and leather armour — sewing station, armourer's table</td></tr>
          <tr><td>Alchemy</td><td>Intellectual</td><td>Transmutation and material isolation at the apothecary bench</td></tr>
          <tr><td>Research</td><td>Intellectual</td><td>Chronicle writing at the three research tables</td></tr>
          <tr><td>Artist</td><td>Art</td><td>Statues, paintings, tapestries — easel, sewing station, benches</td></tr>
          <tr><td>Steward</td><td>—</td><td>Locking doors, closing windows, extinguishing torches</td></tr>
          <tr><td>Train</td><td>—</td><td>Combat practice with ranged and melee weapons</td></tr>
        </tbody>
      </table>

      <div className="aged-border p-4 mb-8">
        <p className="font-serif text-base text-ink-light leading-relaxed">
          <strong>The failure rule:</strong> if a settler's skill for a job is very low, turn that job off
          completely rather than leaving it at 5. The game's own tutorial gives the example: a low-Botany
          settler allowed to harvest can <em>ruin the crop, yielding nothing</em>. A blank box is not a
          wasted settler — it is insurance that only competent hands touch fragile work.
        </p>
      </div>

      {/* Template */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">A Five-Settler Template That Covers Everything</h2>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        The pattern: Firefight at 1 for all; each settler's profession at 1–2; Haul shared at 2–4 so
        nobody important does it first but it always gets done; blanks wherever a settler would do harm.
        Numbers below are a starting matrix — adjust to your settlers' actual passions and skills:
      </p>

      <table className="parchment-table mb-6">
        <thead>
          <tr>
            <th>Job</th>
            <th>Cook</th>
            <th>Builder</th>
            <th>Farmer</th>
            <th>Smith</th>
            <th>Scholar</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Firefight</td><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td></tr>
          <tr><td>Tend</td><td>2</td><td>3</td><td>3</td><td>4</td><td>1</td></tr>
          <tr><td>Cooking</td><td>1</td><td>—</td><td>3</td><td>—</td><td>—</td></tr>
          <tr><td>Construct</td><td>4</td><td>1</td><td>3</td><td>2</td><td>—</td></tr>
          <tr><td>Mine</td><td>—</td><td>2</td><td>—</td><td>3</td><td>—</td></tr>
          <tr><td>Grow / Harvest</td><td>3</td><td>4</td><td>1</td><td>—</td><td>—</td></tr>
          <tr><td>Cut Plants</td><td>4</td><td>3</td><td>1</td><td>—</td><td>—</td></tr>
          <tr><td>Smithing</td><td>—</td><td>3</td><td>—</td><td>1</td><td>4</td></tr>
          <tr><td>Research</td><td>—</td><td>—</td><td>—</td><td>4</td><td>1</td></tr>
          <tr><td>Tailoring</td><td>3</td><td>—</td><td>4</td><td>2</td><td>—</td></tr>
          <tr><td>Haul</td><td>3</td><td>4</td><td>2</td><td>3</td><td>2</td></tr>
          <tr><td>Hunt</td><td>—</td><td>—</td><td>3</td><td>—</td><td>4</td></tr>
        </tbody>
      </table>

      <figure className="mb-8">
        <img
          src="/images/work-priorities-setup.png"
          alt="Heatmap matrix of an example five-settler Going Medieval job priority setup across twelve jobs: Firefight at priority 1 for everyone, each specialist's profession at 1, Haul shared at priorities 2 to 4, and dashes marking jobs set to never"
          className="w-full rounded-lg border border-[#3d3528]"
          loading="lazy"
        />
        <figcaption className="mt-2 text-center text-sm text-ink-light font-serif">
          The same matrix as a grid: gold 1s mark each settler's profession, dashes are hard refusals.
          Every job column has at least one settler who can do it — that, not any single number, is what
          keeps a colony running.
        </figcaption>
      </figure>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        Three properties make this template robust. First, <strong className="text-ink">coverage</strong>:
        every job appears on at least one row, so nothing silently never happens. Second,
        <strong className="text-ink"> backup depth</strong>: critical jobs (Tend, Construct, Cooking) sit
        at 2–3 on a second settler, so an injured specialist doesn't paralyze the colony. Third,
        <strong className="text-ink"> protected specialists</strong>: the scholar never hauls before
        researching and never touches a harvest they could ruin. As the colony grows past eight settlers,
        graduate haulers and builders into dedicated roles and strip secondary jobs off your specialists.
      </p>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-8">
        Priorities pair naturally with scheduling — a priority-1 farmer still needs daylight work hours,
        and leisure blocks keep mood up while the matrix runs. See{' '}
        <a href="/settler-schedule-template" className="text-vermillion hover:underline">settler schedule template</a>{' '}
        for the hours half of the equation, and{' '}
        <a href="/specialist-training" className="text-vermillion hover:underline">specialist training</a>{' '}
        for why passion-driven priority choices also level settlers fastest.
      </p>

      {/* FAQ Section */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Frequently Asked Questions</h2>

      <div className="aged-border p-4 mb-4">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">How do work priorities work in Going Medieval?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          Every settler has one box per job in the Jobs panel, settable from 1 (highest) to 5 (lowest) or
          left blank, which means never. Settlers always take the highest-priority job with valid work
          available. Right-click raises priority, left-click lowers it. If no settler has a job enabled,
          that work never gets done.
        </p>
      </div>

      <div className="aged-border p-4 mb-4">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">What happens when two jobs have the same priority?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          Ties resolve left to right: settlers default to prioritizing jobs from left to right across the
          panel, and jobs sharing a number keep that column order. Within one priority level, the job
          closer to the left edge wins.
        </p>
      </div>

      <div className="aged-border p-4 mb-4">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">Should low-skill settlers do skilled jobs?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          Usually no. The frame colour of each job box shows the settler's skill, and the in-game tutorial
          advises disabling jobs for very-low-skill settlers — a low-Botany settler can ruin a harvest,
          yielding nothing. Leave skilled work to the skilled and let everyone else haul, craft, and
          firefight.
        </p>
      </div>

      <div className="aged-border p-4 mb-4">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">What is a good priority setup for a new colony?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          Firefight at 1 for everyone; each settler's passion jobs at 1–2; support jobs at 3–4; blanks on
          anything they would ruin. Share Haul at 2–4 across the colony so stockpiles clear without
          distracting specialists. The five-settler matrix above is a complete working example.
        </p>
      </div>

      <div className="aged-border p-4 mb-8">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">How many priority levels should I actually use?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          All five, sparingly. Priority 1 is for professions plus Firefight, 2–3 for regular secondary
          work, 4 for idle-time filler, 5 for last resorts. Blanking bad jobs matters more than
          fine-tuning numbers — a settler who can never touch a job can never fail at it.
        </p>
      </div>

      {/* Related Guides */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Related Guides</h2>
      <ul className="list-disc pl-6 mb-8 space-y-2 font-serif text-base text-ink-light">
        <li><a href="/settler-job-assignment" className="text-vermillion hover:underline">Settler Job Assignment — matching settlers to roles</a></li>
        <li><a href="/work-priorities" className="text-vermillion hover:underline">Work Priorities — the companion overview</a></li>
        <li><a href="/specialist-training" className="text-vermillion hover:underline">Specialist Training — passion makes priorities level settlers faster</a></li>
        <li><a href="/settler-schedule-template" className="text-vermillion hover:underline">Settler Schedule Template — the hours behind the priorities</a></li>
        <li><a href="/maximize-settler-efficiency" className="text-vermillion hover:underline">Maximize Settler Efficiency — squeezing more out of every workday</a></li>
        <li><a href="/settler-skills" className="text-vermillion hover:underline">Settler Skills — what each skill actually unlocks</a></li>
        <li><a href="/newcomers-skills" className="text-vermillion hover:underline">Newcomers' Skills — evaluating recruits before assigning jobs</a></li>
        <li><a href="/best-workshop-layout" className="text-vermillion hover:underline">Best Workshop Layout — the +20% rooms your crafters work in</a></li>
        <li><a href="/settler-mood-system" className="text-vermillion hover:underline">Settler Mood System — why Job Satisfaction (+4) belongs in your planning</a></li>
      </ul>

      <p className="font-serif text-sm text-ink-muted leading-relaxed mt-8 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
        Last updated: July 19, 2026. The example matrix is a recommended template, not game data.
        Game mechanics may change with future updates.
      </p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  );
}
