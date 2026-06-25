
export default function BiomesPage() {
  return (
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-10">
            <section>
              <h1 className="chapter-heading">Biomes</h1>
              <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
                Going Medieval offers multiple biomes, each with unique climates, resources, and challenges. Choosing a starting location that matches your playstyle is the first step toward colony success. This guide details the characteristics, advantages, and recommended strategies for each terrain type. Data below is based on community compilation and is for reference only.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Temperate Forest</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                The Temperate Forest is the most recommended starting terrain, ideal for beginners. It features four distinct but moderate seasons, abundant wood resources, and fertile soil for farming. Rivers provide water, and diverse wildlife makes hunting and gathering easy.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="journal-card p-4">
                  <h4 className="font-display text-sm font-semibold text-vermillion">Pros</h4>
                  <ul className="font-serif text-xs text-ink-light mt-2 space-y-1">
                    <li>Abundant wood</li>
                    <li>Fertile soil</li>
                    <li>Rich water sources</li>
                    <li>Moderate seasons</li>
                    <li>Diverse game</li>
                  </ul>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-sm font-semibold text-gold">Cons</h4>
                  <ul className="font-serif text-xs text-ink-light mt-2 space-y-1">
                    <li>No special advantages</li>
                    <li>Average ore</li>
                    <li>Medium raid frequency</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Mountain</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Mountain terrain boasts rich ore deposits, making it ideal for developing a metal industry. You can excavate large underground bases inside the mountain with superior natural defense. However, flat surface area is limited, requiring careful farming planning. Winter temperatures are even colder, demanding more heating.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="journal-card p-4">
                  <h4 className="font-display text-sm font-semibold text-vermillion">Pros</h4>
                  <ul className="font-serif text-xs text-ink-light mt-2 space-y-1">
                    <li>Rich ores</li>
                    <li>Natural defense</li>
                    <li>Large underground space</li>
                    <li>Constant-temp underground storage</li>
                  </ul>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-sm font-semibold text-gold">Cons</h4>
                  <ul className="font-serif text-xs text-ink-light mt-2 space-y-1">
                    <li>Small farming area</li>
                    <li>Colder winters</li>
                    <li>Less wood</li>
                    <li>Building restricted</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Grasslands</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Grasslands are flat and open with large areas of the most fertile soil — the most efficient terrain for farming. However, they lack natural barriers, so defense relies entirely on constructed walls. Wood and ore resources are scarcer, requiring trade to supplement. Best suited for players who excel at defense.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="journal-card p-4">
                  <h4 className="font-display text-sm font-semibold text-vermillion">Pros</h4>
                  <ul className="font-serif text-xs text-ink-light mt-2 space-y-1">
                    <li>Large farming area</li>
                    <li>Richest soil</li>
                    <li>Unrestricted building</li>
                    <li>Wide visibility</li>
                  </ul>
                </div>
                <div className="journal-card p-4">
                  <h4 className="font-display text-sm font-semibold text-gold">Cons</h4>
                  <ul className="font-serif text-xs text-ink-light mt-2 space-y-1">
                    <li>No natural defense</li>
                    <li>Scarce wood</li>
                    <li>Few ores</li>
                    <li>Needs extensive walls</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Site Selection Tips</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Beginners are strongly recommended to start with Temperate Forest — balanced resources and moderate difficulty. Advanced players can try Mountain terrain, leveraging underground spaces for a fortified base. Grasslands suit players who enjoy defense challenges and need to quickly establish walls.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                Regardless of terrain, pay attention to three factors when choosing a site: 1) Near a water source (river or lake); 2) Slightly elevated (avoid flooding); 3) Nearby trees and rocks (basic building materials). Choosing a location near the map edge reduces the number of attack directions.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
              <div className="faq-item">
                <details>
                  <summary>Which terrain is best for beginners?</summary>
                  <p>Temperate Forest is the best choice. Balanced resources, moderate seasonal variations, and natural barriers (trees) make it ideal for learning the game mechanics. Try other terrains once you're comfortable.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>How do I build a farm on Mountain terrain?</summary>
                  <p>Create farmland on flat areas at the mountain's base, or plant on terraced platforms along the slope. If flat land is truly insufficient, prioritize high-value crops (hops, herbs) and trade for low-value crops (cabbage).</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>Can I change terrain mid-game?</summary>
                  <p>No. The starting terrain is fixed for the entire playthrough. However, you can explore different areas within the same map, such as relocating from the forest to a nearby mountain. Choose your starting location carefully.</p>
                </details>
              </div>
            </section>
          </div>

          <aside className="lg:w-[35%] space-y-8 shrink-0">
            <div className="field-sidebar-block">
              <h3 className="font-display text-lg font-semibold text-ink mb-4">Terrain Comparison</h3>
              <table className="parchment-table text-sm">
                <thead>
                  <tr><th>Terrain</th><th>Difficulty</th><th>Recommended</th></tr>
                </thead>
                <tbody>
                  <tr><td>Temperate Forest</td><td>&#9733;&#9734;&#9734;</td><td>Beginners</td></tr>
                  <tr><td>Mountain</td><td>&#9733;&#9733;&#9734;</td><td>Intermediate</td></tr>
                  <tr><td>Grasslands</td><td>&#9733;&#9733;&#9733;</td><td>Experts</td></tr>
                </tbody>
              </table>
            </div>
            <div className="journal-card p-5">
              <h3 className="font-display text-base font-semibold text-ink mb-3">Site Selection Checklist</h3>
              <ul className="space-y-2 font-serif text-sm text-ink-light">
                <li>1. Near a water source</li>
                <li>2. Slightly elevated terrain</li>
                <li>3. Nearby trees and rocks</li>
              </ul>
            </div>
          </aside>
        </div>
      </main>
  );
}
