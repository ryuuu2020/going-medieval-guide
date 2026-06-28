
export const metadata = {
  title: "Going Medieval Settler Management — Skills, Mood & Needs (2026)",
  description:
    "Complete settler management guide. Skills system, mood management, needs, traits, work priorities.",
  keywords: [
    "going medieval settlers",
    "going medieval settler management",
    "going medieval skills",
    "going medieval mood",
  ],
};

export default function SettlersPage() {
  return (
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-10">
            <section>
              <h1 className="chapter-heading">Settler Management</h1>
              <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
                Settlers are your colony's core asset. Each settler has unique skills, personality traits, and needs. Properly assigning work, managing mood, and meeting basic needs are the keys to running an efficient colony. This guide covers the skill system, mood management, and needs system in detail to help you build a high-performing settler team. Data below is based on community compilation and is for reference only.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Skill System</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Each settler has a set of skills that determine their efficiency in different work areas. Higher skill values mean faster work speed and better output quality. Settlers gain experience through continued work in a given area, gradually leveling up the corresponding skill.
              </p>
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Skill</th>
                    <th>Affected Work</th>
                    <th>Key Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Construction</td><td>Building, Repairing</td><td>Affects build speed and quality</td></tr>
                  <tr><td>Farming</td><td>Planting, Harvesting</td><td>Affects crop growth speed and yield</td></tr>
                  <tr><td>Cooking</td><td>Food Processing</td><td>Affects food quality and prep speed</td></tr>
                  <tr><td>Crafting</td><td>Weapons, Tools, Clothing</td><td>Affects crafting speed and item quality</td></tr>
                  <tr><td>Research</td><td>Research Table</td><td>Affects research point generation speed</td></tr>
                  <tr><td>Combat (Melee)</td><td>Close-quarters combat</td><td>Affects hit chance and damage</td></tr>
                  <tr><td>Combat (Ranged)</td><td>Bow/Crossbow shooting</td><td>Affects accuracy and damage</td></tr>
                  <tr><td>Medical</td><td>Treating wounded</td><td>Affects treatment efficiency and recovery speed</td></tr>
                  <tr><td>Social</td><td>Trading, Recruiting</td><td>Affects trade prices and recruitment success rate</td></tr>
                </tbody>
              </table>
              <p className="font-serif text-sm text-ink-muted italic">Data source: Community compilation</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Mood Management</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Mood measures a settler's mental state on a scale of 0-100. Above 50, settlers work normally. Below 30, negative events may trigger — refusing to work, destroying property, even attacking companions. Maintaining mood is fundamental to stable colony operation.
              </p>
              <div className="space-y-3">
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Factors That Boost Mood</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">Individual spacious room (+10), quality meals (+5), beer supply (+8), clean environment (+5), social interaction (+3), art decorations (+5), religious faith (+5).</p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Factors That Lower Mood</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">Hunger (-15), sleep deprivation (-10), injury (-10), companion death (-20), dirty room (-8), raw food (-5), no alcohol (-3), rain exposure (-2).</p>
                </div>
              </div>
              <div className="aged-border p-5 mt-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                <p className="font-serif text-sm text-ink leading-relaxed">
                  <strong className="text-vermillion">&#9888; Mood Crisis:</strong>
                  When a settler's mood drops below 20, they enter a breakdown state and may attack companions or self-harm. Immediately provide beer and quality food, and order rest. If multiple settlers are low-mood simultaneously, it can trigger a chain breakdown leading to colony collapse.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Needs System</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Settlers have four basic needs: Hunger, Rest, Social, and Recreation. Any need falling too low reduces mood and work efficiency, requiring constant attention.
              </p>
              <div className="space-y-3">
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Hunger</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">Regular meals are essential. Keep the kitchen stocked — settlers will automatically grab food. Raw food lowers mood; prioritize processed foods (bread, stews).</p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Rest</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">Each settler needs 6-8 hours of sleep daily. Provide beds and individual rooms. Fatigue reduces work efficiency and hurts mood.</p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Social</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">Settlers need to interact with others. Set up a common dining room or activity area so settlers naturally socialize during meals. Low social needs create loneliness.</p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Recreation</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">Build recreational facilities (chessboard, musical instruments) to meet entertainment needs. Settlers without recreation work less efficiently and have lower mood.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Work Assignment Strategy</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Smart work assignments maximize colony efficiency. The principle is "specialists for specialties" — assign each task to the settler with the highest relevant skill. Use the work panel to fine-tune each settler's task priorities.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                Recommended setup for a 6-settler colony: 2 dedicated builders/miners, 1 dedicated farmer, 1 dedicated cook/crafter, 1 dedicated researcher, 1 flex settler handling combat and odd jobs. High-combat-skill settlers can do other work during peacetime and switch to combat roles when raids hit.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
              <div className="faq-item">
                <details>
                  <summary>What if I don't have enough settlers?</summary>
                  <p>Three ways to expand population: 1) Recruit prisoners — build a prison, hold captives, provide food regularly, and attempt recruitment after some time; 2) Accept wanderers — occasionally wanderers will ask to join; boost their opinion through social interaction to recruit; 3) Birth — settler couples may have children, but they take a long time to grow up.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>How do I handle injured settlers?</summary>
                  <p>Assign settlers with high Medical skill to treat the wounded. Severe injuries require bed rest; medicine accelerates recovery. Pull combat-injured settlers to a safe zone immediately to avoid worsening their condition. Build a medical room with hospital beds.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>How do I level up settler skills?</summary>
                  <p>Skills improve through continued use. Have settlers repeatedly perform a task to gain experience. You can also build training facilities (e.g., target dummies to train Marksman skill). Skill gain speed is influenced by the settler's learning attribute.</p>
                </details>
              </div>
            </section>
          </div>

          <aside className="lg:w-[35%] space-y-8 shrink-0">
            <div className="field-sidebar-block">
              <h3 className="font-display text-lg font-semibold text-ink mb-4">Mood Quick Ref</h3>
              <div className="space-y-2 font-serif text-sm text-ink-light">
                <div className="flex justify-between"><span>80-100 Excellent</span><span className="text-gold">+20% Efficiency</span></div>
                <div className="flex justify-between"><span>50-80 Normal</span><span className="text-ink-muted">Normal</span></div>
                <div className="flex justify-between"><span>30-50 Low</span><span className="text-vermillion">-10% Efficiency</span></div>
                <div className="flex justify-between"><span>0-30 Danger</span><span className="text-vermillion">Breakdown risk</span></div>
              </div>
            </div>
            <div className="journal-card p-5">
              <h3 className="font-display text-base font-semibold text-ink mb-3">6-Settler Role Setup</h3>
              <ul className="space-y-2 font-serif text-sm text-ink-light">
                <li>&bull; Construction/Mining x2</li>
                <li>&bull; Farming x1</li>
                <li>&bull; Cooking/Crafting x1</li>
                <li>&bull; Research x1</li>
                <li>&bull; Combat/Odd Jobs x1</li>
              </ul>
            </div>
          </aside>
        </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What if I don't have enough settlers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Three ways to expand population: 1) Recruit prisoners — build a prison, hold captives, provide food regularly, and attempt recruitment after some time; 2) Accept wanderers — occasionally wanderers will ask to join; boost their opinion through social interaction to recruit; 3) Birth — settler couples may have children, but they take a long time to grow up."
      }
    },
    {
      "@type": "Question",
      "name": "How do I handle injured settlers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Assign settlers with high Medical skill to treat the wounded. Severe injuries require bed rest; medicine accelerates recovery. Pull combat-injured settlers to a safe zone immediately to avoid worsening their condition. Build a medical room with hospital beds."
      }
    },
    {
      "@type": "Question",
      "name": "How do I level up settler skills?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Skills improve through continued use. Have settlers repeatedly perform a task to gain experience. You can also build training facilities (e.g., target dummies to train Marksman skill). Skill gain speed is influenced by the settler's learning attribute."
      }
    }
  ]
}` }} />
      </main>
  );
}
