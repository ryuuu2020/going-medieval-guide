
export default function BeginnerWalkthroughPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-10">
          <section>
            <h1 className="chapter-heading">Complete Beginner Walkthrough: Day 1 to Year 1</h1>
            <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
              Your first year in Going Medieval is the most critical period of your entire colony. Starting with three settlers, bare earth, and no supplies, you must build shelter, secure food, research technologies, and prepare defenses — all before winter arrives to test your preparation. This step-by-step walkthrough guides you from the moment your settlers arrive through four distinct phases: Spring Setup, Summer Growth, Autumn Prepare, and Winter Survive. Follow this guide and your colony will enter Year 2 with a solid foundation, food reserves, and walls that can repel the first raids. Data below is based on community experience and is for reference only.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Phase 1: Spring Setup (Days 1-3)</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Your settlers arrive with nothing but the clothes on their backs. The first 72 hours are about establishing the absolute basics: shelter, food supply, and a stockpile. Every action in this phase should serve one of these three goals. Do not build decorative items, do not plan extensive layouts — survive first, plan later.
            </p>
            <div className="space-y-3">
              <div className="journal-card p-4">
                <h4 className="font-display text-base font-semibold text-ink">Step 1: Scout the Map (Hour 1)</h4>
                <p className="font-serif text-sm text-ink-light mt-1">Pause the game immediately. Survey the map and identify: nearest water source, fertile soil patches (dark brown earth), a hillside or elevated area for the base, and any visible wild animals or berry bushes. Your ideal base location is within 30 tiles of both water and fertile soil, preferably against a hillside for future underground expansion.</p>
              </div>
              <div className="journal-card p-4">
                <h4 className="font-display text-base font-semibold text-ink">Step 2: Build the First Structure (Hours 1-4)</h4>
                <p className="font-serif text-sm text-ink-light mt-1">Build a 6x6 wooden room with walls, a door, and a roof. This is your temporary Everything Room — sleeping, eating, storage, and work all happen here for the first few days. Place 3 sleeping spots (simple bedrolls on the floor — real beds come later). Add a campfire just outside the door for cooking. This structure should take roughly 2-3 hours to complete with all three settlers working.</p>
              </div>
              <div className="journal-card p-4">
                <h4 className="font-display text-base font-semibold text-ink">Step 3: Plant First Crops (Hours 4-8)</h4>
                <p className="font-serif text-sm text-ink-light mt-1">Designate a 8x8 field zone on fertile soil near your base. Plant 50% cabbage (fast growth, eat raw) and 50% wheat (longer growth, process into bread). Cabbage will be ready in 6 days — this is your first harvest. Assign your highest Farming-skill settler to prioritize planting. While waiting, harvest any visible berry bushes for immediate food.</p>
              </div>
              <div className="journal-card p-4">
                <h4 className="font-display text-base font-semibold text-ink">Step 4: Dig Underground Stockpile (Hours 8-16)</h4>
                <p className="font-serif text-sm text-ink-light mt-1">Dig a 4x4 stockpile room at -1F directly below your temporary structure. This is your first cellar — food stored here will last 2-3x longer than above ground. Dig a staircase connecting it to the surface. Place a stockpile zone inside set to accept only food and raw ingredients. This is cheap to build (just digging) and provides immediate preservation benefits.</p>
              </div>
            </div>
            <div className="aged-border p-5 mt-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
              <p className="font-serif text-sm text-ink leading-relaxed">
                <strong className="text-vermillion">Day 1 Priority:</strong>
                Your first day should end with: a roofed room (with sleeping spots), a campfire, crops planted, and at least 20 units of foraged food in a stockpile. If you have not achieved this, keep working through the night — settlers can work in darkness, albeit slowly. Food is non-negotiable on Day 1.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Phase 2: Summer Growth (Days 4-15)</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              With survival basics established, summer is the time to expand production and prepare infrastructure. The weather is warm, crops grow quickly, and you have a window of safety before raids intensify. This is the busiest phase — manage your settlers carefully to maximize output.
            </p>
            <div className="space-y-3">
              <div className="journal-card p-4">
                <h4 className="font-display text-base font-semibold text-ink">Step 5: Harvest Cabbage & Replant (Day 6-7)</h4>
                <p className="font-serif text-sm text-ink-light mt-1">Your first cabbage harvest should yield roughly 40-60 units of food. Replant the cabbage field immediately — never leave a field empty. This harvest is proof that your farming setup works. Store all harvested food in the underground cellar you dug in Phase 1.</p>
              </div>
              <div className="journal-card p-4">
                <h4 className="font-display text-base font-semibold text-ink">Step 6: Expand to Permanent Housing (Day 7-12)</h4>
                <p className="font-serif text-sm text-ink-light mt-1">Your settlers need individual bedrooms for mood management. Dig three 4x4 rooms at -1F (underground for temperature control). Furnish each with a wooden bed, a table, and a chair. Individual bedrooms grant +10 mood per settler — this is one of the most cost-effective mood investments. Build a small common room nearby with a table for shared meals.</p>
              </div>
              <div className="journal-card p-4">
                <h4 className="font-display text-base font-semibold text-ink">Step 7: Research Station & First Tech (Day 10-14)</h4>
                <p className="font-serif text-sm text-ink-light mt-1">Build a research table and assign one settler to research full-time. Your first research priority: Agriculture (unlocks clay brick walls, better farming tools). Second: Construction (stone walls for defense). Do not waste early research on decoration or advanced crafting — survival techs first. Place a bookshelf (crafted from wood) next to the research table for +10% speed.</p>
              </div>
              <div className="journal-card p-4">
                <h4 className="font-display text-base font-semibold text-ink">Step 8: Defensive Walls (Day 12-15)</h4>
                <p className="font-serif text-sm text-ink-light mt-1">Your first raid typically arrives around Day 15-20. Build wooden walls around your base perimeter — a single layer is sufficient early on. Leave one gate (door) facing open ground for settlers to exit. Place 6-8 wooden spike traps in a row 2 tiles in front of the gate. If you have stone from mining, use stone walls near the gate — they are harder to breach.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Phase 3: Autumn Prepare (Days 16-27)</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Autumn is a race against time. Winter is approaching, and everything you do now determines whether your colony survives it. This phase has one overriding objective: accumulate enough food to last 15 days of winter with zero production. Everything else is secondary.
            </p>
            <div className="space-y-3">
              <div className="journal-card p-4">
                <h4 className="font-display text-base font-semibold text-ink">Step 9: Harvest Everything & Stockpile (Day 16-20)</h4>
                <p className="font-serif text-sm text-ink-light mt-1">Harvest all remaining summer crops. Your wheat should be ready around Day 16-18. Process wheat into flour at a mill (build one if you haven't already), then bake flour into bread at a campfire or oven. Bread has 3x the shelf life of raw wheat. You need roughly 200 units of food stockpiled for three settlers — count your reserves carefully.</p>
              </div>
              <div className="journal-card p-4">
                <h4 className="font-display text-base font-semibold text-ink">Step 10: Last Planting & Hunting Push (Day 18-24)</h4>
                <p className="font-serif text-sm text-ink-light mt-1">Plant one final round of carrots — they have the shortest growth cycle (5-6 days) and can still be harvested before the first frost. Send your best hunter to kill any wild animals on the map. Process all meat into smoked meat at a smokehouse (build one now if available). Raw meat spoils in 3 days; smoked meat lasts 15 days in a cellar.</p>
              </div>
              <div className="journal-card p-4">
                <h4 className="font-display text-base font-semibold text-ink">Step 11: Winterize the Base (Day 22-27)</h4>
                <p className="font-serif text-sm text-ink-light mt-1">Check all roofs are intact. Walls without roofs count as outdoors — settlers will freeze. Ensure a campfire or hearth is placed in the common room for warmth. Move all food stockpiles to the -1F or -2F cellar. Build a second layer of defensive walls if you have resources. Craft winter clothing (cloth tunics) if tailors are available. Double-check food count one last time.</p>
              </div>
            </div>
            <div className="aged-border p-5 mt-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
              <p className="font-serif text-sm text-ink leading-relaxed">
                <strong className="text-vermillion">Winter Food Check:</strong>
                Before the first snow falls, count your total food units. For 3 settlers, you need at least 100 units if all food is preserved in a cellar, or 200+ units if any food is raw or stored above ground. If you are short, stop all other work and focus every settler on food production — hunting, harvesting, and processing. No other project matters if your colony starves.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Phase 4: Winter Survive (Day 28-42)</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Winter is the ultimate test. Crops stop growing, animals migrate away, and temperatures drop below freezing. Your colony survives on stockpiles alone. This is also the most dangerous period for mood — settlers confined indoors with limited activities are prone to mental breaks. Manage carefully.
            </p>
            <div className="space-y-3">
              <div className="journal-card p-4">
                <h4 className="font-display text-base font-semibold text-ink">Step 12: Ration Food & Monitor Stockpiles</h4>
                <p className="font-serif text-sm text-ink-light mt-1">Winter lasts 12-15 days. Check your food stockpile every 3 days. If reserves are depleting faster than expected, immediately reduce consumption by: 1) Slaughter any excess livestock (pigs, chickens); 2) Cancel any food-processing jobs (they consume ingredients); 3) Have settlers eat raw food if necessary — it lowers mood but prevents starvation.</p>
              </div>
              <div className="journal-card p-4">
                <h4 className="font-display text-base font-semibold text-ink">Step 13: Defend Against Winter Raids</h4>
                <p className="font-serif text-sm text-ink-light mt-1">Raids continue during winter. Enemies move slower in snow, giving you more time to position defenders. Station your best combat settler at the gate with a ranged weapon (bow or crossbow). Repair any wall damage immediately. Winter raids are less frequent but can be more dangerous because your settlers are already stressed from confinement and potential food shortages.</p>
              </div>
              <div className="journal-card p-4">
                <h4 className="font-display text-base font-semibold text-ink">Step 14: Maintain Mood & Mental Health</h4>
                <p className="font-serif text-sm text-ink-light mt-1">Winter confinement causes mood drain. Countermeasures: ensure individual bedrooms are warm (place torches or campfires nearby), provide variety in meals (alternate bread, smoked meat, pickles), schedule recreation time (build a chessboard if you have spare wood). If any settler drops below 20 mood, order them to rest immediately and consume the best food available — a mental break during winter can be catastrophic.</p>
              </div>
              <div className="journal-card p-4">
                <h4 className="font-display text-base font-semibold text-ink">Step 15: Prepare for Spring (Day 40-42)</h4>
                <p className="font-serif text-sm text-ink-light mt-1">As winter ends, prepare for the spring planting rush. Pre-designate field zones so settlers start planting the moment snow melts. Reserve at least 20% of your remaining food as seed stock — do not eat your seed supply. Plan your next year's expansion: where will the great hall go? Where will you dig deeper? Year 2 is about scaling everything you built in Year 1.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">First Raid Victory Strategy</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Your first raid typically arrives between Day 15-25 with 2-4 enemies. Here is the reliable strategy for victory with zero losses:
            </p>
            <p className="font-serif text-base text-ink-light leading-relaxed">
              1) When the raid alert sounds, draft all three settlers to combat mode. 2) Position your best ranged settler on the wall or behind the gate (height advantage gives accuracy bonus). 3) Position melee settlers just behind the gate. 4) Let raiders approach the gate — they will be damaged by your spike traps. 5) When raiders start attacking the gate, open fire with ranged weapons. 6) If the gate breaks, engage with melee — focus fire on one raider at a time. 7) After victory, immediately treat wounded settlers and repair the gate. Prisoner capture is optional — prioritize survival over recruitment in Year 1.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
            <div className="faq-item">
              <details>
                <summary>What if I run out of food mid-winter?</summary>
                <p>Emergency options in order: 1) Check if any wild animals spawned near the map edge — winter animals can still be hunted; 2) Slaughter domestic animals — every livestock animal provides meat; 3) Trade with any passing merchant — buy food at any price, silver is worthless if your colony is dead; 4) Dig into deeper underground levels — rare underground mushrooms may be harvestable. Prevention is always better: never enter winter with fewer than 100 food units per settler.</p>
              </details>
            </div>
            <div className="faq-item">
              <details>
                <summary>Should I accept wanderers in Year 1?</summary>
                <p>Generally, no. An additional settler means another mouth to feed through winter. Only accept a wanderer in Year 1 if: 1) You have at least 250+ food units stockpiled (well above the 200 minimum); 2) The wanderer has exceptional skills or perks (Industrious, Fast Learner, or Construction/Mining 8+); 3) It is still early autumn and you have time to produce extra food. Reject all others — they will come back in Year 2.</p>
              </details>
            </div>
            <div className="faq-item">
              <details>
                <summary>What if a settler dies in Year 1?</summary>
                <p>Losing a settler in Year 1 is a major setback but not necessarily fatal. Immediately reassign the dead settler's responsibilities to survivors. The biggest loss is usually your dedicated farmer or builder — if your farmer dies, every surviving settler must pitch in on farming. If a builder dies, construction projects will slow dramatically. Prioritize recruiting a replacement as soon as possible via wanderer acceptance or prisoner recruitment, but only if food supplies allow.</p>
              </details>
            </div>
          </section>
        </div>

        <aside className="lg:w-[35%] space-y-8 shrink-0">
          <div className="field-sidebar-block">
            <h3 className="font-display text-lg font-semibold text-ink mb-4">Year 1 Quick Checklist</h3>
            <div className="space-y-2 font-serif text-sm text-ink-light">
              <div className="flex justify-between"><span>Day 1 Roofed Room</span><span className="text-gold">Done</span></div>
              <div className="flex justify-between"><span>Day 1 Crops Planted</span><span className="text-gold">Done</span></div>
              <div className="flex justify-between"><span>Day 3 Cellar -1F</span><span className="text-gold">Done</span></div>
              <div className="flex justify-between"><span>Day 7 Individual Rooms</span><span className="text-gold">Done</span></div>
              <div className="flex justify-between"><span>Day 10 Research Station</span><span className="text-gold">Done</span></div>
              <div className="flex justify-between"><span>Day 15 Defensive Walls</span><span className="text-gold">Done</span></div>
              <div className="flex justify-between"><span>Day 20 200+ Food Stored</span><span className="text-gold">Done</span></div>
              <div className="flex justify-between"><span>Day 28 Winter Ready</span><span className="text-gold">Done</span></div>
            </div>
          </div>
          <div className="journal-card p-5">
            <h3 className="font-display text-base font-semibold text-ink mb-3">Season Summary</h3>
            <div className="space-y-2 font-serif text-sm text-ink-light">
              <div><span className="field-tag vermillion text-[10px]">Spring</span> Shelter, crops, cellar, survival basics</div>
              <div><span className="field-tag gold text-[10px]">Summer</span> Expand housing, research, walls, harvest</div>
              <div><span className="field-tag ink text-[10px]">Autumn</span> Mass harvest, preserve food, winterize base</div>
              <div><span className="field-tag ink text-[10px]">Winter</span> Ration food, maintain mood, prepare spring</div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
