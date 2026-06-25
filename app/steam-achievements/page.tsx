
const ACHIEVEMENTS = [
  // Survival & Milestones (8)
  { cat: 'Survival', name: 'First Night', desc: 'Survive your first night.', diff: 'Easy', time: '10 min' },
  { cat: 'Survival', name: 'First Winter', desc: 'Survive your first winter season.', diff: 'Easy', time: '1-2 hrs' },
  { cat: 'Survival', name: 'First Year', desc: 'Survive a full in-game year.', diff: 'Easy', time: '3-5 hrs' },
  { cat: 'Survival', name: 'Five Years', desc: 'Survive five in-game years with one colony.', diff: 'Medium', time: '15-25 hrs' },
  { cat: 'Survival', name: 'Ten Years', desc: 'Survive ten in-game years with one colony.', diff: 'Hard', time: '30-50 hrs' },
  { cat: 'Survival', name: 'Century Colony', desc: 'Survive 100 in-game years.', diff: 'Very Hard', time: '100+ hrs' },
  { cat: 'Survival', name: 'Happy Colony', desc: 'Maintain 80+ average mood for 30 consecutive days.', diff: 'Medium', time: '8-12 hrs' },
  { cat: 'Survival', name: 'Ghost Town', desc: 'Have no settlers alive at any point after the first year.', diff: 'N/A', time: 'N/A' },
  // Population & Recruitment (5)
  { cat: 'Population', name: 'The More the Merrier', desc: 'Reach 5 settlers in your colony.', diff: 'Easy', time: '2-4 hrs' },
  { cat: 'Population', name: 'Growing Community', desc: 'Reach 10 settlers in your colony.', diff: 'Medium', time: '8-12 hrs' },
  { cat: 'Population', name: 'Thriving Colony', desc: 'Reach 20 settlers in your colony.', diff: 'Hard', time: '20-30 hrs' },
  { cat: 'Population', name: 'Prison Break', desc: 'Successfully recruit a prisoner.', diff: 'Easy', time: '5-8 hrs' },
  { cat: 'Population', name: 'Natural Growth', desc: 'Have a settler give birth.', diff: 'Medium', time: '15-25 hrs' },
  // Building & Construction (6)
  { cat: 'Building', name: 'Home Sweet Home', desc: 'Build your first room with four walls and a roof.', diff: 'Easy', time: '5 min' },
  { cat: 'Building', name: 'Master Builder', desc: 'Build 500 structures in a single colony.', diff: 'Medium', time: '10-15 hrs' },
  { cat: 'Building', name: 'Underground City', desc: 'Excavate 1,000 tiles.', diff: 'Medium', time: '15-20 hrs' },
  { cat: 'Building', name: 'Sky High', desc: 'Build a structure 5 levels high.', diff: 'Medium', time: '8-12 hrs' },
  { cat: 'Building', name: 'Fortress', desc: 'Build 100 defensive structures (walls, traps, barricades).', diff: 'Medium', time: '12-18 hrs' },
  { cat: 'Building', name: 'Grand Design', desc: 'Build a Great Hall with all possible room bonuses active.', diff: 'Hard', time: '20-30 hrs' },
  // Combat & Defense (5)
  { cat: 'Combat', name: 'First Blood', desc: 'Kill your first enemy raider.', diff: 'Easy', time: '1-3 hrs' },
  { cat: 'Combat', name: 'Veteran', desc: 'Kill 100 enemies total.', diff: 'Medium', time: '15-25 hrs' },
  { cat: 'Combat', name: 'Legendary Warrior', desc: 'Have a settler reach Melee skill 20.', diff: 'Hard', time: '20-30 hrs' },
  { cat: 'Combat', name: 'Sharpshooter', desc: 'Have a settler reach Ranged skill 20.', diff: 'Hard', time: '20-30 hrs' },
  { cat: 'Combat', name: 'Untouchable', desc: 'Complete an entire year without any settler dying.', diff: 'Medium', time: '5-10 hrs' },
  // Crafting & Economy (5)
  { cat: 'Crafting', name: 'Blacksmith', desc: 'Craft your first iron weapon.', diff: 'Easy', time: '5-8 hrs' },
  { cat: 'Crafting', name: 'Master Craftsman', desc: 'Craft a Legendary quality item.', diff: 'Hard', time: '25-35 hrs' },
  { cat: 'Crafting', name: 'Brewmaster', desc: 'Brew 100 units of beer.', diff: 'Medium', time: '10-15 hrs' },
  { cat: 'Crafting', name: 'Trader', desc: 'Complete 50 trade deals.', diff: 'Medium', time: '15-20 hrs' },
  { cat: 'Crafting', name: 'Silver Tycoon', desc: 'Accumulate 10,000 silver.', diff: 'Hard', time: '25-35 hrs' },
  // Farming & Animals (5)
  { cat: 'Farming', name: 'Green Thumb', desc: 'Harvest 1,000 crops total.', diff: 'Medium', time: '10-15 hrs' },
  { cat: 'Farming', name: 'Animal Farm', desc: 'Own 20 domestic animals simultaneously.', diff: 'Medium', time: '12-18 hrs' },
  { cat: 'Farming', name: 'Dog Person', desc: 'Tame a wolf into a dog.', diff: 'Medium', time: '5-10 hrs' },
  { cat: 'Farming', name: 'Milk Bar', desc: 'Produce 500 units of milk total.', diff: 'Hard', time: '20-30 hrs' },
  { cat: 'Farming', name: 'Egg Basket', desc: 'Collect 500 eggs total.', diff: 'Hard', time: '20-30 hrs' },
  // Research & Tech (4)
  { cat: 'Research', name: 'Bookworm', desc: 'Research 10 technologies.', diff: 'Easy', time: '5-8 hrs' },
  { cat: 'Research', name: 'Scholar', desc: 'Research all available technologies.', diff: 'Hard', time: '30-40 hrs' },
  { cat: 'Research', name: 'Speed Reader', desc: 'Research a technology in under 1 in-game day.', diff: 'Medium', time: '8-12 hrs' },
  { cat: 'Research', name: 'Triple Threat', desc: 'Have 3 researchers working simultaneously.', diff: 'Medium', time: '5-10 hrs' },
];

const CAT_COLORS: Record<string, string> = {
  Survival: 'var(--color-accent)',
  Population: 'var(--color-accent-gold)',
  Building: '#4a7c3f',
  Combat: '#8b2500',
  Crafting: '#6b5b3a',
  Farming: '#5a8a3c',
  Research: '#4a6fa5',
};

export default function SteamAchievementsPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-10">
          <section>
            <h1 className="chapter-heading">All Achievements Guide</h1>
            <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
              Going Medieval features 38 Steam achievements spanning survival milestones, population growth, building feats, combat victories, crafting mastery, farming production, and research progression. This guide organizes all achievements by category, provides difficulty ratings, estimated completion times, and specific tips for the hardest achievements. Whether you are aiming for 100% completion or just want to know what to work toward, this is your comprehensive reference. Data below is based on community compilation and is for reference only.
            </p>
          </section>

          {['Survival', 'Population', 'Building', 'Combat', 'Crafting', 'Farming', 'Research'].map(cat => (
            <section key={cat}>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">
                <span style={{ 
                  display: 'inline-block', 
                  width: '12px', 
                  height: '12px', 
                  backgroundColor: CAT_COLORS[cat], 
                  borderRadius: '2px',
                  marginRight: '8px',
                  verticalAlign: 'middle'
                }}></span>
                {cat} Achievements ({ACHIEVEMENTS.filter(a => a.cat === cat).length})
              </h2>
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Achievement</th>
                    <th>Description</th>
                    <th>Difficulty</th>
                    <th>Est. Time</th>
                  </tr>
                </thead>
                <tbody>
                  {ACHIEVEMENTS.filter(a => a.cat === cat).map((a, i) => (
                    <tr key={i}>
                      <td className="font-semibold">{a.name}</td>
                      <td className="text-ink-light">{a.desc}</td>
                      <td>
                        <span className="field-tag ink text-[10px]" style={{
                          backgroundColor: a.diff === 'Easy' ? '#4a7c3f' : a.diff === 'Medium' ? 'var(--color-accent-gold)' : a.diff === 'Hard' ? 'var(--color-accent)' : a.diff === 'Very Hard' ? '#8b2500' : 'var(--color-border)',
                          color: a.diff === 'N/A' ? 'var(--color-text-muted)' : '#f5ecd7',
                          padding: '2px 6px',
                        }}>{a.diff}</span>
                      </td>
                      <td className="text-ink-muted text-sm">{a.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          ))}

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Hardest Achievements & Tips</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Several achievements require significant dedication, careful planning, or specific strategies. Here are the most challenging ones and how to approach them.
            </p>
            <div className="space-y-3">
              <div className="journal-card p-4">
                <h4 className="font-display text-base font-semibold text-ink">Century Colony (100 Years)</h4>
                <p className="font-serif text-sm text-ink-light mt-1">The most time-consuming achievement. Run the game at 3x speed in a fully self-sufficient colony (food, defense, mood all stable) and let it run overnight or over multiple sessions. Build an impenetrable defense setup first — you cannot afford to lose settlers to late-game raids while AFK. A mountain base with layered traps and auto-turrets (crossbows on walls) is ideal. Expect 100+ real-time hours.</p>
              </div>
              <div className="journal-card p-4">
                <h4 className="font-display text-base font-semibold text-ink">Scholar (All Technologies)</h4>
                <p className="font-serif text-sm text-ink-light mt-1">Requires researching every single technology node. This demands a dedicated researcher (or two) running continuously for multiple in-game years. Prioritize research speed bonuses: assign an Intellectual settler with Research passion, place bookshelves near the research table, and keep the researcher's mood above 50 at all times. Never interrupt research except for combat emergencies.</p>
              </div>
              <div className="journal-card p-4">
                <h4 className="font-display text-base font-semibold text-ink">Master Craftsman (Legendary Quality Item)</h4>
                <p className="font-serif text-sm text-ink-light mt-1">Crafting a Legendary quality item requires a settler with Crafting 18+ AND the Perfectionist trait AND a high-quality workstation. The probability is still under 5% per craft. Mass-produce iron swords — each attempt takes similar time, but swords have high base value making failed attempts still sellable. Expect to craft 30-50 swords before a Legendary pops.</p>
              </div>
              <div className="journal-card p-4">
                <h4 className="font-display text-base font-semibold text-ink">Silver Tycoon (10,000 Silver)</h4>
                <p className="font-serif text-sm text-ink-light mt-1">Requires a fully optimized trade economy. Focus exclusively on beer production — plant massive hops fields (at least 20x20 tiles total), build 3-4 breweries, and sell beer to every merchant that visits. Trade surplus food and crafted items for additional silver. Do not spend silver except on absolutely necessary goods (medicine, rare ores). Accumulate over 5-8 in-game years.</p>
              </div>
              <div className="journal-card p-4">
                <h4 className="font-display text-base font-semibold text-ink">Grand Design (Perfect Great Hall)</h4>
                <p className="font-serif text-sm text-ink-light mt-1">A Great Hall with all room bonuses requires: spacious size (8x8+), high-quality furniture (table, chairs, decorations), clean floors, lighting (torches or candles), art objects, and high room impressiveness. Research all decoration technologies first. Build the hall at ground level with high ceilings. This is a late-game achievement — do not attempt until you have master crafters and abundant resources.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Estimated 100% Completion Time</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Achieving 100% completion (all 38 achievements) requires roughly 100-150 hours of gameplay for an experienced player who specifically targets achievements. The breakdown by time investment:
            </p>
            <table className="parchment-table">
              <thead>
                <tr>
                  <th>Phase</th>
                  <th>Achievements</th>
                  <th>Playtime</th>
                  <th>Strategy</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="font-semibold">Phase 1: Early Game</td><td>Survival basics, First constructions, First kills</td><td>0-10 hrs</td><td>Play normally — most will unlock naturally</td></tr>
                <tr><td className="font-semibold">Phase 2: Mid Game</td><td>Population growth, Crafting, Mid research</td><td>10-30 hrs</td><td>Start targeting specific achievements consciously</td></tr>
                <tr><td className="font-semibold">Phase 3: Late Game</td><td>Master skills, Silver, Military feats</td><td>30-60 hrs</td><td>Dedicated grinding for hard achievements</td></tr>
                <tr><td className="font-semibold">Phase 4: End Game</td><td>Century Colony, Scholar, Grand Design</td><td>60-100+ hrs</td><td>Optimize colony for AFK longevity</td></tr>
              </tbody>
            </table>
            <p className="font-serif text-sm text-ink-muted italic">Data source: Community estimates based on experienced players</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
            <div className="faq-item">
              <details>
                <summary>Can I earn achievements on any difficulty?</summary>
                <p>Yes, all achievements can be earned on any difficulty setting including Peaceful mode. Playing on Peaceful disables raids, making survival and construction achievements significantly easier but also removing combat-related achievement opportunities. For efficient achievement hunting, Normal difficulty is recommended — it provides enough challenge to make the game engaging without excessive setbacks.</p>
              </details>
            </div>
            <div className="faq-item">
              <details>
                <summary>Do mods disable achievements?</summary>
                <p>Going Medieval does not have an achievement-blocking system for mods. You can use quality-of-life mods (UI improvements, planning tools) without affecting achievement eligibility. However, mods that alter game mechanics may affect balance and your perceived accomplishment — the community generally considers unmodded achievements more legitimate.</p>
              </details>
            </div>
            <div className="faq-item">
              <details>
                <summary>What's the fastest achievement to get?</summary>
                <p>'First Night' unlocks after surviving a single in-game night (approximately 10 minutes of play). 'Home Sweet Home' (build first room) can be achieved within the first 5 minutes. These are the two fastest achievements and are guaranteed for any player who plays for more than 15 minutes.</p>
              </details>
            </div>
          </section>
        </div>

        <aside className="lg:w-[35%] space-y-8 shrink-0">
          <div className="field-sidebar-block">
            <h3 className="font-display text-lg font-semibold text-ink mb-4">By Difficulty</h3>
            <div className="space-y-2 font-serif text-sm text-ink-light">
              <div className="flex justify-between"><span>Easy (8)</span><span className="text-gold">Quick unlocks</span></div>
              <div className="flex justify-between"><span>Medium (14)</span><span className="text-ink-light">Natural progression</span></div>
              <div className="flex justify-between"><span>Hard (7)</span><span className="text-vermillion">Requires focus</span></div>
              <div className="flex justify-between"><span>Very Hard (1)</span><span className="text-vermillion">100+ hours</span></div>
            </div>
          </div>
          <div className="journal-card p-5">
            <h3 className="font-display text-base font-semibold text-ink mb-3">Achievement Tips</h3>
            <ul className="space-y-2 font-serif text-sm text-ink-light">
              <li>&bull; Play on Normal difficulty for balance</li>
              <li>&bull; Target multiple achievements per run</li>
              <li>&bull; Century Colony: use 3x speed AFK colony</li>
              <li>&bull; Scholar: never interrupt research</li>
              <li>&bull; Master Craftsman: craft 30-50 swords</li>
              <li>&bull; Grand Design: save for late-game</li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
