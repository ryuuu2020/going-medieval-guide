export const metadata = {
  title: "Going Medieval Raid Defense — Survive Every Attack (2026)",
  description:
    "Complete raid defense guide for Going Medieval. Raid types, defense preparations, and strategies to survive every attack.",
};


export default function RaidDefensePage() {
  return (
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-10">
            <section>
              <h1 className="chapter-heading">Raid Defense Guide: Survive Every Attack</h1>
              <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
                Raids are the pulse-pounding combat encounters that test everything you've built in Going Medieval. From early-game bandit skirmishes to late-game siege-engine assaults, understanding raid mechanics, enemy types, and response tactics is the difference between a thriving colony and a smoking ruin. This guide breaks down every raid type, how raid scaling works, settler loadout optimization, alarm response systems, and after-battle cleanup procedures. Data below is based on community combat testing and is for reference only.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Raid Types & Enemy Composition</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Going Medieval features several distinct raid types, each demanding different defensive responses. As your colony wealth and population grow, the raid difficulty escalates—early attacks of 2-3 bandits with clubs give way to organized warbands with siege equipment and coordinated assault tactics.
              </p>
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Raid Type</th>
                    <th>Enemy Count</th>
                    <th>Key Threats</th>
                    <th>Recommended Response</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Bandit Raid</td><td>~2-6 (est.)</td><td>Clubs, bows, leather armor</td><td>Wall archers, spike traps</td></tr>
                  <tr><td>Siege Raid (Trebuchet)</td><td>~3-8 + siege engine</td><td>Ranged wall destruction</td><td>Counter-siege, sorties</td></tr>
                  <tr><td>Animal Stampede</td><td>~5-15 animals (est.)</td><td>Overwhelms via numbers</td><td>Chokepoints, spike traps, elevated archers</td></tr>
                </tbody>
              </table>
              <p className="font-serif text-sm text-ink-muted italic">Data source: Community testing estimates</p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Raid Scaling Mechanics</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Raid difficulty scales with three primary factors: colony wealth, population size, and elapsed time. Wealth is the most impactful—every stored item, crafted building, and stockpiled resource contributes to your colony's "threat value." A colony with 20,000 silver in stored goods will face dramatically larger raids than a minimal settlement, even with the same population.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Population-based scaling is secondary but significant. Each settler beyond your first handful adds to raid size. The game typically sends raiders in groups sized to your settler count plus 1-3 extras. A 10-settler colony can expect raiding parties of 12-15 enemies in the late game. Season and biome also play a role—winter raids are less frequent but raiders may carry better gear to survive the cold journey.
              </p>
              <div className="aged-border p-5" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                <p className="font-serif text-sm text-ink leading-relaxed">
                  <strong className="text-vermillion">&#9888; Wealth Management Warning:</strong>
                  Hoarding excessive wealth without matching defense upgrades invites disaster. Consider converting excess resources into defensive structures rather than stockpiling. A colony with stone walls and 5,000 silver in reserves will survive longer than one with wooden walls and 50,000 silver hoarded.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Settler Combat Loadouts</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Every settler in your colony should have a combat loadout assignment. The standard setup is a primary weapon, a secondary backup weapon, and armor appropriate to their combat role. Assign loadouts through the equipment panel so settlers automatically equip gear when a raid alarm sounds.
              </p>
              <div className="space-y-3">
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Ranged Specialist</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">Primary: Longbow or Crossbow. Armor: Leather or Gambeson (mobility priority). Position: Wall tops, towers. Best for settlers with Marksmanship skill 6+. Carry 30+ arrows minimum.</p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Melee Defender</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">Primary: Spear or Sword+Shield. Armor: Plate or Steel (survivability priority). Position: Gate chokepoints, breach interception. Best for settlers with Melee skill 8+.</p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Hybrid Skirmisher</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">Primary: Bow, Secondary: Sword. Armor: Gambeson. Position: Flexible—shoot from walls, then switch to melee if walls are breached. Best for settlers with balanced combat skills.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Alarm System & Response Protocol</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                When a raid notification appears, pause immediately. Sound the retreat by drafting all outdoor settlers and directing them inside the walls. Settlers far from the base should run to the nearest gate—do not engage raiders in open field unless you have overwhelming numbers. Assign wall positions to ranged settlers and gate defense to melee fighters.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                For trebuchet raids, send a 2-3 settler sortie to destroy the siege engine while wall archers provide covering fire. Against sappers, identify which wall section is being targeted and station melee defenders behind it—when the wall breaches, they'll engage immediately. For siege towers, focus all ranged fire on the tower itself; destroying it before it touches your walls neutralizes the threat entirely.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">After-Battle Cleanup & Recovery</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Victory is only half the battle. Immediate after-action steps are critical: prioritize medical treatment for injured settlers, haul wounded to hospital beds, and assign your best medic. Triage—treat settlers below 50% health first, and those with bleeding wounds before non-bleeding injuries. Unattended bleeding can kill a settler within minutes.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                Collect all dropped enemy weapons and armor—they can be smelted for raw materials or stored as backup equipment. Re-arm and reset all traps that were triggered. Repair damaged walls immediately; a follow-up raid can arrive within days, and a breached wall section is an open invitation. Strip enemy corpses and dispose of bodies (burying or cremating) to prevent settler mood penalties from seeing dead bodies. Restock arrow supplies, check armor durability, and ensure your next raid alarm system is ready.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
              <div className="faq-item">
                <details>
                  <summary>How do I know what type of raid is coming?</summary>
                  <p>The raid notification tells you the faction and sometimes hints at equipment. Pay attention to the enemy count displayed. If the notification mentions "siege engines" or "heavy equipment," prepare for trebuchets or siege towers. Animal stampedes have distinct notification text mentioning "beasts" or specific animal types.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>Can I avoid raids entirely?</summary>
                  <p>No—raids are a core mechanic and cannot be disabled in standard game settings. However, you can reduce raid frequency by keeping colony wealth modest, avoiding rapid expansion, and choosing mountain maps where attackers have fewer approach paths. Custom difficulty settings allow raid frequency adjustment.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>What happens if all my combat settlers are wounded?</summary>
                  <p>Non-combat settlers will still attempt to defend themselves with bare fists or whatever they're carrying, but they'll be extremely ineffective. If your combat force is wiped out, consider retreating everyone to the deepest room and barricading doors with furniture. Better preparation is always the answer—never send your entire combat force into one engagement without reserves.</p>
                </details>
              </div>
            </section>
          </div>

          <aside className="lg:w-[35%] space-y-8 shrink-0">
            <div className="field-sidebar-block">
              <h3 className="font-display text-lg font-semibold text-ink mb-4">Raid Response Checklist</h3>
              <div className="space-y-3">
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">1. Pause Game</h4><p className="font-serif text-xs text-ink-muted mt-1">Stop all actions immediately</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">2. Draft Settlers</h4><p className="font-serif text-xs text-ink-muted mt-1">Recall all outdoor workers</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">3. Positions</h4><p className="font-serif text-xs text-ink-muted mt-1">Archers on walls, melee at gates</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">4. Triage Post-Battle</h4><p className="font-serif text-xs text-ink-muted mt-1">Treat wounded, repair, re-arm traps</p></div>
              </div>
            </div>
            <div className="journal-card p-5">
              <h3 className="font-display text-base font-semibold text-ink mb-3">Raid Threat by Colony Wealth</h3>
              <div className="space-y-2 font-serif text-sm text-ink-light">
                <div className="flex justify-between"><span>0-5K Wealth</span><span className="text-gold">~2-4 Raiders (est.)</span></div>
                <div className="flex justify-between"><span>5-15K Wealth</span><span className="text-gold">~4-8 Raiders (est.)</span></div>
                <div className="flex justify-between"><span>15-30K Wealth</span><span className="text-vermillion">~8-12+ Raiders (est.)</span></div>
                <div className="flex justify-between"><span>30K+ Wealth</span><span className="text-vermillion">~12-20+ with siege (est.)</span></div>
              </div>
            </div>
          </aside>
        </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={ __html: `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I know what type of raid is coming?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The raid notification tells you the faction and sometimes hints at equipment. Pay attention to the enemy count displayed. If the notification mentions \"siege engines\" or \"heavy equipment,\" prepare for trebuchets or siege towers. Animal stampedes have distinct notification text mentioning \"beasts\" or specific animal types."
      }
    },
    {
      "@type": "Question",
      "name": "Can I avoid raids entirely?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No—raids are a core mechanic and cannot be disabled in standard game settings. However, you can reduce raid frequency by keeping colony wealth modest, avoiding rapid expansion, and choosing mountain maps where attackers have fewer approach paths. Custom difficulty settings allow raid frequency adjustment."
      }
    },
    {
      "@type": "Question",
      "name": "What happens if all my combat settlers are wounded?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Non-combat settlers will still attempt to defend themselves with bare fists or whatever they're carrying, but they'll be extremely ineffective. If your combat force is wiped out, consider retreating everyone to the deepest room and barricading doors with furniture. Better preparation is always the answer—never send your entire combat force into one engagement without reserves."
      }
    }
  ]
}` } />
      </main>
  );
}
