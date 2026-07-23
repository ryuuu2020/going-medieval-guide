export const metadata = {
  title: "Going Medieval Settler Job Assignment Guide — Work Priorities (2026)",
  description:
    "How the settler Work tab, priority 1-9 scale, and skill-passion stars shape Going Medieval job assignment. Job categories, specialisation tips, and seasonal rotation.",
  keywords: [
    "Going Medieval job assignment",
    "settler work priorities",
    "work tab priority",
    "skill passion stars",
    "settler specialisation",
  ],
};

const roleTable = [
  ["Settler role", "Primary job (P1)", "Complementary jobs", "Best-fit skill", "Head-count @ 8 pop"],
  ["Cook", "Cooking", "Hauling, Plant Cutting", "Culinary", "1"],
  ["Farmer", "Growing, Harvesting", "Sowing, Hauling, Plant Cutting", "Botany", "2"],
  ["Builder", "Construction", "Repairing, Hauling", "Construction", "1-2"],
  ["Miner", "Mining", "Hauling, Construction", "Mining", "1"],
  ["Crafter", "Smithing, Tailoring", "Hauling, Repairing", "Crafting", "1"],
  ["Hunter", "Hunting", "Hauling, Animal Taming", "Marksman", "1"],
  ["Healer", "Doctoring, Tending", "Hauling", "Medical", "1"],
  ["Hauler", "Hauling", "Cleaning, Plant Cutting", "Any", "1-2"],
  ["Researcher", "Researching", "Hauling", "Intellectual", "1"],
];

const priorityTable = [
  ["Priority", "Meaning", "Recommended slot"],
  ["1", "Highest — task always picked when eligible", "Primary craft / production job"],
  ["2-3", "High — strong secondaries tied to the same work zone", "Complementary jobs (e.g. Hauling + Cooking)"],
  ["4-5", "Medium — fill-in work, idle-time tasks", "Hauling, Cleaning, Plant Cutting"],
  ["6-7", "Low — only when no higher-priority work exists", "Optional jobs (Recreation, Tending idle beds)"],
  ["8-9", "Disabled / off — settler will never take this task", "Jobs you want to suspend this colonist from"],
];

const faqItems = [
  {
    q: "How do settler priorities actually work in Going Medieval?",
    a: "Each settler has a Work tab with one slot per job type. You set a number from 1 to 9. Priority 1 is picked first; 9 means the settler will not take that work. With nothing higher available, the settler drops to the next lowest number on their own tab. The queue is read per settler, not globally.",
  },
  {
    q: "Should I assign many jobs or few jobs per settler?",
    a: "Few jobs, well-chosen. A settler set to Cooking at 1 and Hauling at 4 stays mostly at the kitchen and only hauls in slack moments. A settler set to Cooking, Hunting, Smithing, Mining and Researching at mixed numbers will walk between far zones and finish little. Two or three complementary jobs per settler is the realistic cap.",
  },
  {
    q: "How do skill and passion stars change the picture?",
    a: "Each job a settler performs levels the linked skill. A settler with the right passion (the flame icons next to the job on the Work tab) works that job faster, and gains XP faster, than a settler with no passion. Early on, it is stronger to lean on passion than on raw skill numbers — you can train skill, but you cannot change a passion.",
  },
  {
    q: "Do disabled jobs (priority 9) matter at all?",
    a: "Yes. Priority 9 is the off-switch on the Work tab. Use it to keep a wounded settler out of combat or to keep a noble from Cleaning. Be aware that no settler set to a job is still allowed to react to emergencies (Doctoring for downed colonists, Firefighting for active fires) regardless of the priority you set.",
  },
  {
    q: "How should I rotate jobs across seasons?",
    a: "Spring and autumn are the planting and harvest windows — temporarily bump Growing, Sowing and Harvesting to priority 1 for your non-cook settlers, then drop them back. Winter shifts the colony indoors: bump Construction, Smithing, Tailoring and Researching up, and lower Farming to a maintenance number so colonists still haul snow but do not freeze outside.",
  },
];

const related = [
  ["/settlers", "Settler Management"],
  ["/settler-skills", "Settler Skills Guide"],
  ["/work-priorities", "Work Priorities Setup"],
  ["/maximize-settler-efficiency", "Maximise Settler Efficiency"],
  ["/specialist-training", "Specialist Training"],
  ["/settler-schedule-template", "Settler Schedule Template"],
  ["/newcomers-skills", "Newcomer Skill Picks"],
  ["/work-priorities-setup", "Work Priorities — Step by Step"],
];

export default function SettlerJobAssignment() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-10">
          <section>
            <h1 className="chapter-heading">Settler Job Assignment</h1>
            <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
              Every settler in Going Medieval carries a Work tab. The numbers you type into that tab — from 1 to 9 — decide what they do all day. Get the priorities wrong and your colony starves with full granaries; get them right and the same settlers, doing the same jobs, keep the place alive through winter. This guide walks through how the priority queue actually reads, how skills and passion stars bend it, and how to build a roster that survives each season.
            </p>
          </section>

          <figure className="mb-8">
            <img
              src="/images/settler-job-assignment.png"
              alt="Grouped bar chart comparing the priority shares of six common settler roles (Cook, Farmer, Builder, Hunter, Researcher, Hauler) across five priority bands, illustrating that production roles dominate slots 1-2 while Hauler work concentrates in slots 4-5"
              className="w-full rounded-lg border border-[#3d3528]"
              loading="lazy"
            />
            <figcaption className="mt-2 text-center text-sm text-ink-light font-serif">
              Priority-band share by role — production roles (Cook, Farmer, Builder) consume slots 1-2; Hauler work concentrates in 4-5; only the Researcher takes slot 3 as a true secondary. Values are illustrative distribution scores from the page's own priority table, not in-game statistics.
            </figcaption>
          </figure>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">How the Work Tab Reads</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              The Work tab lists every job your settler can perform. Beside each job sits a single number you can set. When a settler finishes one task, the AI scans their list top-down: the lowest number that has any eligible task gets picked next. Two consequences follow from this design.
            </p>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              First, priorities are per-settler. A global "1" on Cook for one settler and a "5" on Cook for another is exactly what it says — the first will cook at every opportunity, the second only when they have nothing better to do. Second, an empty or disabled slot is respected: leaving a job out of the list is the same as setting it to 9.
            </p>
            <p className="font-serif text-base text-ink-light leading-relaxed">
              The result is that you build the colony one settler at a time. There is no central job manager that says "today, everyone farms" — every priority change is a small bet on what an individual colonist should be doing.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Priority Bands and What They Mean</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr>
                    {priorityTable[0].map((h) => (
                      <th key={h}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {priorityTable.slice(1).map((row) => (
                    <tr key={row[0]}>
                      {row.map((cell, i) => (
                        <td key={i}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="font-serif text-base text-ink-light leading-relaxed mt-3">
              A useful working pattern: pick one production job per settler at priority 1, one or two complementaries at 2-3, then set Hauling to 4 for everyone who is not your pure haulers. Researchers and healers usually run with their craft at 1 and Hauling at 4 — a 2 or 3 in this slot pulls them away from the bench or bed.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Job Categories and Skill Pairings</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr>
                    {roleTable[0].map((h) => (
                      <th key={h}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {roleTable.slice(1).map((row) => (
                    <tr key={row[0]}>
                      {row.map((cell, i) => (
                        <td key={i}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="font-serif text-base text-ink-light leading-relaxed mt-3">
              Pairing matters more than headcount. A cook with Culinary passion and Botany skill at 1 will out-produce a settler with the inverse setup, and a builder who also Hauls Construction debris will keep the site cleaner than two specialists who keep crossing paths.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Skills and Passion Stars</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Each settler starts with a skill score in every job and a passion indicator — flame icons beside the job on the Work tab. Passions come in three flavours, commonly labelled burning (two flames), normal (one flame), and none. A burning passion gives a substantial speed and XP bonus, a normal passion a smaller bonus, and none means the settler gains skill at the base rate.
            </p>
            <p className="font-serif text-base text-ink-light leading-relaxed">
              The trap is reading skill as a hard cap. It is not. A settler without a passion but with a high skill will still beat a passionate novice, but the gap closes as the passionate one trains. Use the first season to read each colonist's flame icons and queue them into roles that lean on those flames — that is how you build a roster that levels itself while it works.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Seasonal Rotation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="journal-card p-4">
                <h4 className="font-display text-sm font-semibold text-vermillion">Spring &amp; autumn windows</h4>
                <p className="font-serif text-xs text-ink-light mt-2 leading-relaxed">
                  Bump Growing, Sowing and Harvesting to 1 for every settler except the cook and the researcher. Get seeds in the ground within a few in-game days, then return everyone to their regular slots.
                </p>
              </div>
              <div className="journal-card p-4">
                <h4 className="font-display text-sm font-semibold text-vermillion">Summer</h4>
                <p className="font-serif text-xs text-ink-light mt-2 leading-relaxed">
                  Return to baseline priorities. Construction, Smithing and Researching stay productive while crops grow. Hauling at 4 keeps the colony tidy without pulling specialists off their benches.
                </p>
              </div>
              <div className="journal-card p-4">
                <h4 className="font-display text-sm font-semibold text-vermillion">Winter</h4>
                <p className="font-serif text-xs text-ink-light mt-2 leading-relaxed">
                  Push Construction, Smithing, Tailoring and Researching to 1 for the relevant specialists. Drop Farming to 4-5 — colonists still haul and clear snow but do not waste warmth walking to distant fields.
                </p>
              </div>
              <div className="journal-card p-4">
                <h4 className="font-display text-sm font-semibold text-vermillion">Raids &amp; emergencies</h4>
                <p className="font-serif text-xs text-ink-light mt-2 leading-relaxed">
                  Combat-capable settlers shift to Defending at 1. Doctoring and Tending are emergency jobs — most settlers will respond to a downed colonist regardless of the number in their slot.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
            {faqItems.map((item) => (
              <div key={item.q} className="faq-item">
                <details>
                  <summary>{item.q}</summary>
                  <p>{item.a}</p>
                </details>
              </div>
            ))}
          </section>
        </div>

        <aside className="lg:w-[35%] space-y-8 shrink-0">
          <div className="field-sidebar-block">
            <h3 className="font-display text-lg font-semibold text-ink mb-4">Quick Priority Map</h3>
            <table className="parchment-table text-sm">
              <thead>
                <tr><th>Slot</th><th>Assign to</th></tr>
              </thead>
              <tbody>
                <tr><td>1</td><td>One craft per settler</td></tr>
                <tr><td>2</td><td>Complementary in same zone</td></tr>
                <tr><td>3</td><td>Hauling for researchers</td></tr>
                <tr><td>4</td><td>Hauling for everyone else</td></tr>
                <tr><td>5-9</td><td>Empty / disabled</td></tr>
              </tbody>
            </table>
          </div>

          <div className="journal-card p-5">
            <h3 className="font-display text-base font-semibold text-ink mb-3">Passion Reading Cheatsheet</h3>
            <ul className="space-y-2 font-serif text-sm text-ink-light">
              <li><span className="text-gold">🔥🔥</span> Burning passion — large speed &amp; XP bonus</li>
              <li><span className="text-gold">🔥</span> Normal passion — moderate bonus</li>
              <li><span className="text-muted">○</span> None — base rate</li>
              <li className="pt-2 border-t border-[#3d3528] mt-2">Match settlers to roles that lean on their strongest flames.</li>
            </ul>
          </div>

          <div className="journal-card p-5">
            <h3 className="font-display text-base font-semibold text-ink mb-3">Two-Job Cap</h3>
            <p className="font-serif text-sm text-ink-light leading-relaxed">
              The realistic cap is two to three jobs per settler: one production job at 1, one or two complementaries at 2-3, then Hauling at 4. Anything beyond that turns your colony into a relay race.
            </p>
          </div>
        </aside>
      </div>

      <section className="mt-12 border-t border-[#3d3528] pt-6">
        <h3 className="font-display text-lg font-semibold text-ink mb-3">Related Guides</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-sm font-serif">
          {related.map(([href, label]) => (
            <a key={href} href={href} className="text-amber-600 hover:underline">
              {label} →
            </a>
          ))}
        </div>
        <p className="font-serif text-xs text-ink-light mt-6">Last updated: July 22, 2026</p>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqItems.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          }),
        }}
      />
    </main>
  );
}