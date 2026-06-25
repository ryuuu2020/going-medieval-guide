'use client';

import { SiteHeader, SiteFooter } from '@/components/SiteHeader';

export default function UndergroundPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-parchment)' }}>
      <SiteHeader currentPage="Underground" />
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-10">
            <section>
              <h1 className="chapter-heading">Underground Base Building</h1>
              <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
                Underground bases are one of the most efficient building approaches in Going Medieval. By carving into mountainsides, you gain naturally temperature-stable stockpiles, heavily fortified living quarters, and secure hidden workshops. This guide covers excavation techniques, structural support, ventilation and lighting, and functional zoning plans. Data below is based on community combat experience and is for reference only.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Excavation Basics</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Underground space is created by having settlers dig through natural rock. Excavation is time-consuming — assign settlers with high Construction skill as dedicated miners. The rubble produced can be used for building or paving. Underground space is layered by depth; the deeper you go, the more constant the temperature.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                Pay attention to structural stability while digging. Natural rock can support a maximum 4x4 tile space; beyond that, you must leave rock pillars. The recommended grid layout: leave a 1-tile-wide rock pillar every 4 tiles, creating a checkerboard pattern of spaces. This layout is safe, neat, and easy to organize into functional zones later.
              </p>
              <div className="aged-border p-5 mt-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                <p className="font-serif text-sm text-ink leading-relaxed">
                  <strong className="text-vermillion">&#9888; Cave-in Warning:</strong>
                  If you see crack textures appear while digging, the area is about to collapse. Immediately evacuate settlers below and build support pillars or backfill the space. A cave-in can injure or kill settlers below and destroy items in the area.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Zoning Plans</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                An ideal underground base spans multiple levels, each serving different functions. Temperature decreases from top to bottom — use this property for scientific zoning.
              </p>
              <div className="space-y-3">
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Underground Level 1 (-1F)</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">Living quarters and common areas. Temperature roughly 12-15&deg;C; with a fireplace, it can exceed 18&deg;C. Close to the surface for easy access while enjoying rock insulation. Place bedrooms, dining room, and kitchen here.</p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Underground Level 2 (-2F)</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">Stockpiles and workshops. Temperature roughly 8-12&deg;C — ideal for food storage. Place granary, armory, and crafting workshops here. Workshops near stockpiles reduce hauling time.</p>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Underground Level 3 (-3F)</h4>
                  <p className="font-serif text-sm text-ink-light mt-1">Deep mining zone and emergency shelter. Temperature roughly 5-8&deg;C. Iron ore and gems are typically found at this level. Also serves as a final stand position during raids — set up hidden doors and emergency supplies.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Structural Support & Safety</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Underground space safety depends on structural support. Beyond leaving natural rock pillars, you can build artificial support columns. Support columns are made from wood or stone — each column supports a 3x3 tile area around it. Place columns every 4 tiles in the center of halls and along long corridors.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                Ventilation is equally important. Underground spaces without ventilation shafts suffer declining air quality, affecting settler health. Every 5x5 tile area needs at least one ventilation shaft reaching the surface. Shafts also double as light sources but are defensive weak points — install iron grates on them.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Underground Defense Advantages</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Underground bases have natural defensive advantages. Raiders can only enter through limited access points, and narrow corridors packed with traps and barricades are easily defended. Design the main entrance as a single-file corridor with flanking arrow slits, creating a "kill box" effect.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                Create multiple hidden doors and emergency exits to ensure settlers have retreat routes when besieged. Emergency exits lead to positions far from the main entrance — keep them walled off during normal times and demolish in emergencies. Set up a final stand position deep underground with food, water, and weapons stockpiled for extreme situations.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
              <div className="faq-item">
                <details>
                  <summary>How do I light an underground base?</summary>
                  <p>Underground spaces need artificial lighting. The most basic is torches (wood + tallow), which have limited light range. After research unlocks, you can build oil lamps and candles with better lighting. Ventilation shafts also provide natural light. Dark environments lower settler mood and work efficiency.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>Excavation is too slow. What can I do?</summary>
                  <p>Three ways to speed up excavation: 1) Assign settlers with the highest Construction skill as dedicated miners; 2) Craft iron pickaxes (50% faster than stone); 3) Have multiple settlers excavate different zones simultaneously. Mining is physically demanding — keep workers well-fed.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>What are the dangers of an underground base?</summary>
                  <p>Three main dangers: 1) Cave-ins — watch your structural supports; 2) Underground creatures — caves may harbor bats and other creatures that can occasionally attack settlers; 3) Poor ventilation — without ventilation shafts, air quality declines. With proper precautions, underground bases are safe to use.</p>
                </details>
              </div>
            </section>
          </div>

          <aside className="lg:w-[35%] space-y-8 shrink-0">
            <div className="field-sidebar-block">
              <h3 className="font-display text-lg font-semibold text-ink mb-4">Level Planning</h3>
              <div className="space-y-3">
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">-1F Living</h4><p className="font-serif text-xs text-ink-muted mt-1">12-15&deg;C | Bedrooms & dining</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">-2F Storage</h4><p className="font-serif text-xs text-ink-muted mt-1">8-12&deg;C | Granary & workshops</p></div>
                <div className="recipe-card"><h4 className="font-display text-sm font-semibold text-ink">-3F Mining</h4><p className="font-serif text-xs text-ink-muted mt-1">5-8&deg;C | Mining & shelter</p></div>
              </div>
            </div>
            <div className="journal-card p-5">
              <h3 className="font-display text-base font-semibold text-ink mb-3">Excavation Safety Rules</h3>
              <ul className="space-y-2 font-serif text-sm text-ink-light">
                <li>&bull; Leave 1 rock pillar every 4 tiles</li>
                <li>&bull; Watch for crack warning signs</li>
                <li>&bull; 1 ventilation shaft per 5x5 area</li>
                <li>&bull; Support columns every 4 tiles in corridors</li>
                <li>&bull; Maintain multiple escape routes</li>
              </ul>
            </div>
          </aside>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
