export const metadata = {
  title: "Going Medieval Settler Skills — Specialization Guide (2026)",
  description:
    "Complete settler skills guide for Going Medieval. Skill training, specialization strategies, and optimal skill assignments.",
};


export default function SettlerSkillsPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-10">
          <section>
            <h1 className="chapter-heading">Settler Skills & Specialization Guide</h1>
            <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
              Your settlers' skills are the engine that powers your entire colony. Every task — from mining stone to baking bread, from researching technology to fending off raiders — scales with the relevant skill level. Understanding the 14 core skills, how they level up, and how to specialize settlers into effective roles is the single most impactful strategic decision you can make. This guide covers every skill in detail, the passion and interest system, dual-specialization strategies, and how to prevent skill decay. Data below is based on community compilation and is for reference only.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">All 14 Skills Explained</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Going Medieval features 14 distinct skills, each governing a set of related jobs. A settler's skill level directly affects work speed, output quality, and success rate for the associated tasks. Skills range from 0 (incompetent) to 20 (master). Most settlers start with skills between 2-10 depending on their background.
            </p>
            <table className="parchment-table">
              <thead>
                <tr>
                  <th>Skill</th>
                  <th>Jobs</th>
                  <th>Best Traits</th>
                  <th>Priority</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="font-semibold">Mining</td><td>Digging tunnels, mining stone/iron/coal, excavating rooms (Job: Mine)</td><td>Industrious, Strong</td><td className="text-vermillion font-semibold">Critical</td></tr>
                <tr><td className="font-semibold">Construction</td><td>Building walls, floors, roofs, doors, stairs, furniture, brick-making, stone-cutting (Job: Construct)</td><td>Industrious, Perfectionist</td><td className="text-vermillion font-semibold">Critical</td></tr>
                <tr><td className="font-semibold">Culinary</td><td>Preparing meals, baking bread, brewing beer, smoking meat, butchering animals (Job: Cooking)</td><td>Creative, Fast Learner</td><td className="text-gold font-semibold">High</td></tr>
                <tr><td className="font-semibold">Botany</td><td>Planting crops, sowing seeds, growing, harvesting plants, cutting grass (Jobs: Grow, Harvest, Cut plants)</td><td>Industrious, Strong</td><td className="text-gold font-semibold">High</td></tr>
                <tr><td className="font-semibold">Intellectual</td><td>Operating research table, alchemy, brewing, medicine-making (Jobs: Research, Alchemy)</td><td>Intellectual, Fast Learner</td><td className="text-gold font-semibold">High</td></tr>
                <tr><td className="font-semibold">Smithing</td><td>Smelting ingots, crafting metal weapons, armor, and tools (Job: Smithing)</td><td>Perfectionist, Creative</td><td className="text-gold font-semibold">High</td></tr>
                <tr><td className="font-semibold">Tailoring</td><td>Sewing clothing, leather/cloth armor, bandages (Job: Tailoring)</td><td>Creative, Fast Learner</td><td>Medium</td></tr>
                <tr><td className="font-semibold">Medicine</td><td>Treating wounds, healing settlers, performing surgery (Job: Tend)</td><td>Intellectual, Calm</td><td>Medium</td></tr>
                <tr><td className="font-semibold">Carpentry</td><td>Crafting wooden items, furniture, bows (Job: Carpentry)</td><td>Creative, Industrious</td><td>Medium</td></tr>
                <tr><td className="font-semibold">Speechcraft</td><td>Trading/bartering, recruiting prisoners, bard performances, prison warden (Jobs: Bartering, Gaoler, Bard, Prison Warden)</td><td>Charismatic, Optimistic</td><td>Medium</td></tr>
                <tr><td className="font-semibold">Art</td><td>Creating statues, paintings, tapestries for colony mood (Job: Artist)</td><td>Creative, Perfectionist</td><td>Low</td></tr>
                <tr><td className="font-semibold">Marksman</td><td>Ranged combat with bows and crossbows, hunting animals (Job: Hunt)</td><td>Calm, Fast Learner</td><td>Low</td></tr>
                <tr><td className="font-semibold">Melee</td><td>Melee combat: damage %, dodge, crit chance, precision (no specific job, pure combat)</td><td>Strong, Calm</td><td>Low</td></tr>
                <tr><td className="font-semibold">Animal Handling</td><td>Taming wild animals, feeding, training, fishing (Job: Fish)</td><td>Calm, Optimistic</td><td>Low</td></tr>
              </tbody>
            </table>
            <p className="font-serif text-sm text-ink-muted italic">Data source: Community compilation</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Skill Leveling Mechanics</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Skills improve through practice — every time a settler completes a task, they gain experience toward the associated skill. The amount of XP gained per task is influenced by the task's complexity (crafting a sword gives more XP than crafting a wooden club) and the settler's learning rate multiplier from traits. Skill leveling is logarithmic: advancing from level 0 to 5 is fast, from 5 to 10 is moderate, from 10 to 15 is slow, and from 15 to 20 is very slow.
            </p>
            <div className="space-y-3">
              <div className="journal-card p-4">
                <h4 className="font-display text-base font-semibold text-ink">Levels 0-5: Apprentice</h4>
                <p className="font-serif text-sm text-ink-light mt-1">Rapid leveling. Each task grants significant visible progress. A settler can reach level 5 in any skill within 2-3 days of dedicated work. Basic competency for all tasks.</p>
              </div>
              <div className="journal-card p-4">
                <h4 className="font-display text-base font-semibold text-ink">Levels 5-10: Journeyman</h4>
                <p className="font-serif text-sm text-ink-light mt-1">Moderate leveling speed. Settlers at this range are solid contributors. Work speed is noticeably faster than apprentices. This is the minimum you want for critical roles (cook, smith).</p>
              </div>
              <div className="journal-card p-4">
                <h4 className="font-display text-base font-semibold text-ink">Levels 10-15: Expert</h4>
                <p className="font-serif text-sm text-ink-light mt-1">Slow leveling but high efficiency. Expert settlers complete jobs 2-3x faster than apprentices and produce higher-quality output. Most colonies will have 2-3 settlers at this tier.</p>
              </div>
              <div className="journal-card p-4">
                <h4 className="font-display text-base font-semibold text-ink">Levels 15-20: Master</h4>
                <p className="font-serif text-sm text-ink-light mt-1">Very slow leveling. Master settlers are exceptional — 4x faster work speed, near-perfect quality output. Only achievable with long-term dedication and favorable traits. A single master smith can supply an entire colony.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Passion & Interest System</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Each settler has hidden "interests" (sometimes called passions) for certain skills. A settler with an interest in a skill gains XP at roughly 150% the normal rate and enjoys a mood boost when performing that type of work. Conversely, a settler may have a disliking for certain skills, gaining XP at only 50% the normal rate and suffering a mood penalty. You can identify passions by observing XP gain speed — interested settlers will visibly level faster when assigned to a particular task.
            </p>
            <p className="font-serif text-base text-ink-light leading-relaxed">
              Strategy: when evaluating new settlers, assign them to various tasks for 1-2 days and monitor skill gain speed. A settler who rapidly advances in Mining probably has a passion for it. Prioritize assigning passions over raw starting skill — a level 3 settler with a passion will outperform a level 7 settler without one over the long term. The mood bonus from passionate work also helps maintain high colony morale.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Dual-Specialization Recommendations</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Most settlers should be dual-specialized — one primary skill for their main role and one secondary skill for when their primary task is unavailable. This prevents idle time and maximizes total colony output. The following pairings are the most efficient combinations based on task synergy and complementary work rhythms.
            </p>
            <table className="parchment-table">
              <thead>
                <tr>
                  <th>Specialization</th>
                  <th>Primary Skill</th>
                  <th>Secondary Skill</th>
                  <th>Why This Combo Works</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="font-semibold">Builder-Miner</td><td>Construction</td><td>Mining</td><td>Mine stone, then build walls — no idle time. Natural synergy: the materials you mine become the structures you build.</td></tr>
                <tr><td className="font-semibold">Botanist-Cook</td><td>Botany</td><td>Culinary</td><td>Grow food then cook it. Farm work is seasonal (intense planting/harvesting), cooking is daily — complementary rhythms.</td></tr>
                <tr><td className="font-semibold">Carpenter-Smith</td><td>Carpentry</td><td>Smithing</td><td>Both use workstation crafting. Make wooden items and bows when wood is abundant, smith metal gear when ingots are ready.</td></tr>
                <tr><td className="font-semibold">Researcher-Healer</td><td>Intellectual</td><td>Medicine</td><td>Both are intellectual indoor jobs. Researcher works the bench during peacetime, switches to tending wounded after battles.</td></tr>
                <tr><td className="font-semibold">Handler-Trader</td><td>Animal Handling</td><td>Speechcraft</td><td>Tame and tend animals between merchant visits, handle trades and prisoner recruitment when caravans arrive.</td></tr>
              </tbody>
            </table>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Skill Decay Prevention</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Skills above level 10 will slowly decay if the settler does not practice them regularly. The decay rate is approximately 0.5-1% of XP per day of inactivity. This means a specialized settler who is injured, imprisoned, or reassigned to other work for extended periods will lose hard-earned skill levels. Skill decay only affects levels above 10 — skills at level 10 or below do not decay.
            </p>
            <p className="font-serif text-base text-ink-light leading-relaxed">
              Prevention strategy: ensure specialists practice their core skill at least once every 2-3 days. For a smith, this means crafting at least one item every few days even during quiet periods. For a researcher, keep the research table running continuously — even at slow speed, it prevents decay. If a specialist is recovering from injury, have them perform light versions of their skill (craft simple items, research slowly) as soon as they can walk. Never reassign a high-level specialist to entirely different work for more than a few days.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
            <div className="faq-item">
              <details>
                <summary>What skill should I prioritize first for new colonies?</summary>
                <p>Mining and Construction are non-negotiable from Day 1. You need to dig out your base and build walls immediately. Aim for at least one settler with Mining 6+ and Construction 6+ in your starting group. Without these, you will spend days just on basic infrastructure while food spoils and raiders approach.</p>
              </details>
            </div>
            <div className="faq-item">
              <details>
                <summary>Is it better to specialize settlers or make everyone a generalist?</summary>
                <p>Specialization is vastly superior. A level 15 specialist works 3-4x faster than a level 5 generalist and produces higher quality output. Five specialists each doing one job well will outperform ten generalists doing everything poorly. The only exception is the first 3-5 days when you have too few settlers to fully specialize — in that case, everyone pitches in on critical tasks.</p>
              </details>
            </div>
            <div className="faq-item">
              <details>
                <summary>How do I recruit settlers with the specific skills I need?</summary>
                <p>When wanderers or prisoners become available, inspect their skills before committing. Prioritize candidates who fill gaps in your colony. If you lack a cook, accept a settler with Culinary 5+ even if their other stats are poor. If all skills are well-covered, accept settlers with high potential (multiple passions, good traits) who can grow into specialists over time.</p>
              </details>
            </div>
          </section>

          {/* Verification note */}
          <section>
            <div className="field-divider mb-4" />
            <p className="font-serif text-xs text-ink-muted italic">
              Data verified against Going Medieval Wiki (goingmedieval.fandom.com) as of June 2026.
            </p>
          </section>
        </div>

        <aside className="lg:w-[35%] space-y-8 shrink-0">
          <div className="field-sidebar-block">
            <h3 className="font-display text-lg font-semibold text-ink mb-4">Skill Priority Ranking</h3>
            <div className="space-y-2 font-serif text-sm text-ink-light">
              <div className="flex justify-between"><span>1. Mining</span><span className="text-vermillion font-semibold">S-Tier</span></div>
              <div className="flex justify-between"><span>2. Construction</span><span className="text-vermillion font-semibold">S-Tier</span></div>
              <div className="flex justify-between"><span>3. Culinary</span><span className="text-gold font-semibold">A-Tier</span></div>
              <div className="flex justify-between"><span>4. Botany</span><span className="text-gold font-semibold">A-Tier</span></div>
              <div className="flex justify-between"><span>5. Intellectual</span><span className="text-gold font-semibold">A-Tier</span></div>
              <div className="flex justify-between"><span>6. Smithing</span><span className="text-gold font-semibold">A-Tier</span></div>
              <div className="flex justify-between"><span>7. Tailoring</span><span>B-Tier</span></div>
              <div className="flex justify-between"><span>8. Medicine</span><span>B-Tier</span></div>
              <div className="flex justify-between"><span>9. Carpentry</span><span>B-Tier</span></div>
              <div className="flex justify-between"><span>10. Speechcraft</span><span>B-Tier</span></div>
              <div className="flex justify-between"><span>11. Art</span><span>C-Tier</span></div>
              <div className="flex justify-between"><span>12. Marksman</span><span>C-Tier</span></div>
              <div className="flex justify-between"><span>13. Melee</span><span>C-Tier</span></div>
              <div className="flex justify-between"><span>14. Animal Handling</span><span>C-Tier</span></div>
            </div>
          </div>
          <div className="journal-card p-5">
            <h3 className="font-display text-base font-semibold text-ink mb-3">Ideal 5-Settler Setup</h3>
            <ul className="space-y-2 font-serif text-sm text-ink-light">
              <li>&bull; Builder-Miner (Construction + Mining)</li>
              <li>&bull; Botanist-Cook (Botany + Culinary)</li>
              <li>&bull; Carpenter-Smith (Carpentry + Smithing)</li>
              <li>&bull; Researcher-Healer (Intellectual + Medicine)</li>
              <li>&bull; Handler-Trader (Animal Handling + Speechcraft)</li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
