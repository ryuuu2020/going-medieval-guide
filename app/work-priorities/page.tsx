'use client';

import { SiteHeader, SiteFooter } from '@/components/SiteHeader';

export default function WorkPrioritiesPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-parchment)' }}>
      <SiteHeader currentPage="Settlers" />
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-10">
            <section>
              <h1 className="chapter-heading">Work Priority & Schedule Guide</h1>
              <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
                The work priority and scheduling system is the invisible engine that powers your Going Medieval colony. A well-configured priority setup means settlers automatically handle tasks in the right order without constant micromanagement. A poorly configured one means crops rot in the field while your farmer hauls rocks. This guide explains the priority system in depth, teaches optimal shift scheduling, covers seasonal adjustments, and provides emergency override techniques for when things go wrong. Data below is based on community experience and is for reference only.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Priority System Explained</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Going Medieval uses a numerical priority system from 1 (highest) to 5 (lowest) for each work type per settler. The game also distinguishes between priority levels across all colonists—if two settlers can do the same task and one has it set to priority 1 while the other has it at priority 2, the priority 1 settler will take the task first if available. Understanding priority interaction between settlers is as important as individual priority settings.
              </p>
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Priority Level</th>
                    <th>Meaning</th>
                    <th>When to Use</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>1 - Critical</td><td>This task always comes first</td><td>Medical, firefighting, primary job for specialists</td></tr>
                  <tr><td>2 - High</td><td>Highly prioritized</td><td>Primary job for generalists, secondary job for specialists</td></tr>
                  <tr><td>3 - Normal</td><td>Default priority</td><td>Tertiary tasks that should get done when time permits</td></tr>
                  <tr><td>4 - Low</td><td>Only if nothing else to do</td><td>Hauling, cleaning, low-urgency tasks</td></tr>
                  <tr><td>5 - Disabled</td><td>Never perform this task</td><td>Tasks you never want this settler touching</td></tr>
                </tbody>
              </table>
              <p className="font-serif text-sm text-ink-muted italic">Data source: Community compilation</p>
              <p className="font-serif text-base text-ink-light leading-relaxed mt-4">
                The golden rule: every settler should have exactly ONE priority 1 task. This is their primary job. Spread priority 1 tasks across different settlers—never assign the same priority 1 task to multiple settlers unless the workload demands it (e.g., two farmers for a large farm). Overlapping priority 1s among settlers create confusion and inefficiency rather than speed.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Specialist vs Generalist Priority Setup</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                There are two fundamental approaches to priority configuration: the specialist model and the generalist model. Most successful colonies use a hybrid—a core of specialists supported by generalists who fill gaps.
              </p>
              <div className="space-y-3">
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Specialist Model</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">Each settler has one priority 1 task and all other work set to 3-5. The farmer only farms. The crafter only crafts. The miner only mines. Advantage: Maximum efficiency in each role as settlers gain skill quickly through focused work. Disadvantage: Fragile—if one specialist is injured or dead, their critical function stops completely.</p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Generalist Model</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">Every settler has multiple priority 2 tasks across different work types. Everyone can farm, build, and haul. Advantage: Resilient—if anyone is unavailable, others pick up the slack automatically. Disadvantage: Slower skill progression, lower peak efficiency in any single task.</p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Hybrid Model (Recommended)</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">2-3 specialists per critical function (farming, crafting, mining) with priority 1 on their specialty. Remaining settlers are generalists with priority 2 across multiple functions. This provides both efficiency and resilience. Example: 2 farmer specialists (P1 farming), 1 crafter specialist (P1 crafting), 1 miner specialist (P1 mining), 2 generalists (P2 across farming/crafting/mining).</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Shift Scheduling</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                The schedule panel lets you divide the day into work, recreation, and sleep blocks for each settler. Default schedules are serviceable, but custom scheduling unlocks significant efficiency gains. The key insight: not every settler needs identical schedules, and synchronized rest times create downtime in critical functions.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Optimal scheduling strategies: Stagger sleep shifts so at least one settler from each critical function (farming, crafting, defense) is always awake. Example: Half your farmers sleep 22:00-06:00, half sleep 02:00-10:00. This ensures crops get attention around the clock. Schedule recreation blocks adjacent to meal times—settlers naturally socialize while eating, and combining recreation with meals compresses downtime. Assign 2 hours of recreation daily minimum; less causes mood penalties, more is wasted time.
              </p>
              <div className="aged-border p-5" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                <p className="font-serif text-sm text-ink leading-relaxed">
                  <strong className="text-vermillion">&#9888; Schedule Warning:</strong>
                  Do not set work blocks longer than 8 consecutive hours. Settlers need to eat, rest, and recreate. Working past fatigue thresholds causes severe efficiency penalties—a tired settler at hour 10 of work operates at 40% speed. Eight-hour work blocks with breaks between them produce more total output than 12-hour marathon shifts.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Seasonal Adjustments</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Work priorities must shift with the seasons. What works in spring may fail catastrophically in winter. Adjusting settler priorities on a seasonal basis is one of the most impactful micro-management practices in the game.
              </p>
              <div className="space-y-3">
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Spring (Planting Season)</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">Raise Farming to priority 1 for at least 3 settlers. Reduce mining and crafting priorities temporarily. The planting window is short—miss it and you lose an entire season of food production. Construction can wait; planting cannot.</p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Summer (Growth Season)</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">Keep 2 settlers on Farming priority 1 for ongoing crop tending. Shift excess labor to construction projects and mining. This is the season for infrastructure expansion—long daylight hours, mild weather.</p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Autumn (Harvest Season)</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">Farming back to priority 1 for ALL settlers capable of harvesting. The harvest must be completed before frost kills the crops. Even your crafter and miner should help with the harvest rush. Stockpile all food before the first snow.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Emergency Override Tips</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                When emergencies strike—a raid, a fire, a food shortage—the priority system needs immediate manual override. Relying on standard priorities during emergencies leads to disaster. These override techniques can save your colony when seconds matter.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                Combat emergency: Pause, draft all settlers, and manually position them. Ignore work priorities entirely—drafted settlers follow direct orders. Fire emergency: Set Firefighting to priority 1 for all settlers, then undraft them. They'll automatically fight fires according to the new priority. Food emergency: If food reserves drop below 10 units, set Hunting and Farming to priority 1 for every settler with relevant skills, overriding all other work until food is stabilized. Medical emergency: After battles, set Medical to priority 1 for your best medic and priority 2 for all settlers—untreated wounds worsen over time and can kill settlers hours after the battle ends.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
              <div className="faq-item">
                <details>
                  <summary>Why are my settlers ignoring priority 1 tasks?</summary>
                  <p>Common reasons: 1) The task requires a material that isn't available (e.g., crafting without raw materials), 2) The settler's schedule currently says "Recreation" or "Sleep"—even if it's priority 1, schedule blocks override work priorities, 3) The task is inaccessible (blocked path, locked door, forbidden zone). Check all three before assuming it's a bug.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>How do I handle settlers with no useful skills?</summary>
                  <p>Even settlers with poor skills can serve as dedicated haulers and cleaners. Set Hauling and Cleaning to priority 1 for low-skill settlers. This frees up your skilled workers from these time-consuming but low-skill tasks, allowing them to focus on their specialties. A dedicated hauler can increase overall colony efficiency by 20-30% just by offloading hauling from skilled workers.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>Should I use the manual work tab or just priorities?</summary>
                  <p>Priorities handle 90% of work management. Use the manual work tab (direct orders) only for: 1) Emergency situations (fire, combat, critical construction), 2) One-time projects that need immediate attention, 3) Correcting priority system oversights. Overusing manual orders defeats the purpose of the priority system and leads to micromanagement fatigue.</p>
                </details>
              </div>
            </section>
          </div>

          <aside className="lg:w-[35%] space-y-8 shrink-0">
            <div className="field-sidebar-block">
              <h3 className="font-display text-lg font-semibold text-ink mb-4">8-Settler Priority Template</h3>
              <div className="space-y-3">
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Farmer 1 & 2</h4><p className="font-serif text-xs text-ink-muted mt-1">P1 Farming | P2 Hauling | P3 Everything else</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Crafter 1</h4><p className="font-serif text-xs text-ink-muted mt-1">P1 Crafting | P2 Construction | P3 Hauling</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Miner 1 & 2</h4><p className="font-serif text-xs text-ink-muted mt-1">P1 Mining | P2 Construction | P3 Hauling</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">Generalist 1 & 2</h4><p className="font-serif text-xs text-ink-muted mt-1">P2 Farm/Craft/Mine | P3 Haul/Clean</p></div>
              </div>
            </div>
            <div className="journal-card p-5">
              <h3 className="font-display text-base font-semibold text-ink mb-3">Seasonal Priority Shifts</h3>
              <div className="space-y-2 font-serif text-sm text-ink-light">
                <div><span className="field-tag vermillion text-[10px]">Spring</span> 3 settlers P1 Farming</div>
                <div><span className="field-tag gold text-[10px]">Summer</span> 2 P1 Farm, shift to Construction</div>
                <div><span className="field-tag ink text-[10px]">Autumn</span> ALL settlers P1 Harvest</div>
                <div><span className="field-tag ink text-[10px]">Winter</span> Crafting/Mining focus</div>
              </div>
            </div>
          </aside>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
