
export default function AnimalHusbandryPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-10">
          <section>
            <h1 className="chapter-heading">Animal Husbandry Guide</h1>
            <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
              Animals are a vital component of a thriving colony in Going Medieval. Livestock provides a renewable source of milk, wool, eggs, and meat, while dogs and cats offer unique utility benefits from hauling to vermin control. Understanding taming mechanics, pen size requirements, feeding needs, and breeding rates is essential to building a sustainable animal economy. This guide covers all domestic animals, their care requirements, and the optimal strategies for integrating them into your colony. Data below is based on community testing and is for reference only.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">All Domestic Animals Overview</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Going Medieval features seven domestic animal species, each with distinct resource yields, space requirements, and utility. Understanding their differences is key to deciding which animals to prioritize for your colony.
            </p>
            <table className="parchment-table">
              <thead>
                <tr>
                  <th>Animal</th>
                  <th>Feed</th>
                  <th>Products</th>
                  <th>Pen Size</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="font-semibold">Cow</td><td>Hay, Grass</td><td>Milk (daily), Beef (slaughter), Leather</td><td>12 tiles</td><td className="text-gold font-semibold">★★★★★</td></tr>
                <tr><td className="font-semibold">Goat</td><td>Hay, Grass</td><td>Milk (daily), Meat (slaughter), Leather</td><td>8 tiles</td><td className="text-gold font-semibold">★★★★☆</td></tr>
                <tr><td className="font-semibold">Sheep</td><td>Hay, Grass</td><td>Wool (seasonal), Mutton (slaughter), Leather</td><td>10 tiles</td><td className="text-gold font-semibold">★★★★☆</td></tr>
                <tr><td className="font-semibold">Pig</td><td>Hay, Food scraps</td><td>Meat (slaughter), Leather</td><td>8 tiles</td><td className="text-gold font-semibold">★★★☆☆</td></tr>
                <tr><td className="font-semibold">Chicken</td><td>Seeds, Grain</td><td>Eggs (daily), Meat (slaughter), Feathers</td><td>4 tiles</td><td className="text-gold font-semibold">★★★☆☆</td></tr>
                <tr><td className="font-semibold">Cat</td><td>Meat, Fish</td><td>Vermin control, Mood bonus</td><td>None (free roam)</td><td className="text-gold font-semibold">★★☆☆☆</td></tr>
                <tr><td className="font-semibold">Dog</td><td>Meat, Food scraps</td><td>Hauling, Combat support, Mood bonus</td><td>None (free roam)</td><td className="text-gold font-semibold">★★★★★</td></tr>
              </tbody>
            </table>
            <p className="font-serif text-sm text-ink-muted italic">Data source: Community testing estimates</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Taming Mechanics</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Wild animals can be tamed by settlers with sufficient Animal Handling skill. The taming process requires building a pen first, then marking a wild animal for taming. A settler will approach the animal and attempt to tame it — success is influenced by the settler's Animal Handling skill level and the animal's wildness rating. Failed attempts may cause the animal to flee or become aggressive.
            </p>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Key taming rules: livestock (cows, goats, sheep, pigs, chickens) appear as wild spawns on the map or arrive via merchant caravans. Cats are available from merchants. Dogs can be tamed from wild wolves — this is the most challenging tame and requires high Animal Handling skill (10+ recommended). Once tamed, animals remain permanently domesticated and will not revert to the wild.
            </p>
            <div className="aged-border p-5" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
              <p className="font-serif text-sm text-ink leading-relaxed">
                <strong className="text-vermillion">Taming Tip:</strong>
                Always build the pen before attempting to tame. A tamed animal without an assigned pen will wander and may leave the map entirely. Assign the animal to its pen immediately after successful taming through the animal management panel.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Feeding & Nutrition</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              All grazing animals (cows, goats, sheep) can feed on grass within their pen — no additional food required as long as the pen contains grass tiles. During winter when grass stops growing, you must supply hay stored in a stockpile within the pen or a nearby animal feeder. Pigs are omnivorous and eat food scraps in addition to hay, making them excellent waste-disposal units. Chickens require seeds or grain, which competes directly with crop planting reserves.
            </p>
            <p className="font-serif text-base text-ink-light leading-relaxed">
              Dogs and cats require meat or prepared meals placed in their designated feeding zone. Unlike livestock, they do not graze and will starve if not fed. A single dog consumes roughly the same food as 0.5 settlers — factor this into your winter food calculations. Dogs can also hunt small animals on their own if allowed to roam, partially supplementing their diet.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Pen Size & Space Requirements</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Each animal requires a minimum pen space measured in tiles. Cramped animals stop producing (no milk, no eggs, no wool) and suffer mood penalties that slow breeding. Overcrowding also increases the risk of disease spreading through your livestock. Recommended minimums per animal:
            </p>
            <div className="space-y-3">
              <div className="journal-card p-4">
                <h4 className="font-display text-base font-semibold text-ink">Cow: 12 tiles</h4>
                <p className="font-serif text-sm text-ink-light mt-1">Largest space requirement. Produces the most valuable daily resource (milk). Plan a 6x4 pen per cow as the bare minimum — 8x6 is comfortable for breeding pairs.</p>
              </div>
              <div className="journal-card p-4">
                <h4 className="font-display text-base font-semibold text-ink">Goat: 8 tiles | Sheep: 10 tiles</h4>
                <p className="font-serif text-sm text-ink-light mt-1">Goats are the most space-efficient milk source. Sheep need slightly more room but provide wool for tailoring. Both can share a combined pen if sized appropriately.</p>
              </div>
              <div className="journal-card p-4">
                <h4 className="font-display text-base font-semibold text-ink">Pig: 8 tiles | Chicken: 4 tiles</h4>
                <p className="font-serif text-sm text-ink-light mt-1">Pigs are compact meat producers. Chickens need the least space — a 2x2 coop can house a chicken. Stack chicken coops vertically (multi-floor) to maximize egg production per footprint.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Breeding Mechanics</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Animals breed automatically when a male and female of the same species occupy the same pen. Breeding speed depends on animal type: chickens breed fastest (every 3-5 days), pigs and goats are moderate (every 7-10 days), cows and sheep are slowest (every 12-15 days). Well-fed, spacious, and healthy animals breed faster. Animals that are malnourished, cramped, or sick will not breed.
            </p>
            <p className="font-serif text-base text-ink-light leading-relaxed">
              Strategy: start with 1 male + 2-3 females of each species for rapid herd growth. Maintain at least 2 males as backup — if your sole male dies, breeding stops entirely until you acquire a replacement. Slaughter excess males for meat once the herd reaches desired size, keeping the optimal ratio of 1 male per 3-4 females. Use the animal management panel to auto-designate excess animals for slaughter.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Animal Product Yields</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Daily product yields vary by species and are affected by animal health, space comfort, and settler handling skill. A dedicated handler with high Animal Handling skill increases milk and wool yields.
            </p>
            <table className="parchment-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Source</th>
                  <th>Daily Yield</th>
                  <th>Use</th>
                  <th>Processing</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Milk</td><td>Cow, Goat</td><td>1-2 units</td><td>Direct consumption, cheese</td><td>Cheese press extends shelf life 3x</td></tr>
                <tr><td>Wool</td><td>Sheep</td><td>0.3 units (every 3 days)</td><td>Cloth, winter clothing</td><td>Loom processes wool into cloth</td></tr>
                <tr><td>Eggs</td><td>Chicken</td><td>1 unit</td><td>Cooking ingredient</td><td>Used in advanced meal recipes</td></tr>
                <tr><td>Leather</td><td>All livestock</td><td>On slaughter</td><td>Armor, clothing</td><td>Tanning rack processes hide</td></tr>
                <tr><td>Meat</td><td>Pig, Chicken, Cow</td><td>On slaughter</td><td>Food, smoked meat</td><td>Smokehouse preserves 3x longer</td></tr>
              </tbody>
            </table>
            <p className="font-serif text-sm text-ink-muted italic">Data source: Community compilation</p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">Dogs: The Most Valuable Animal</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
              Dogs are arguably the most valuable animal in Going Medieval because they can be trained to haul items. A trained dog functions as an automated hauler, moving resources between stockpiles without consuming settler labor. This frees your settlers to focus on skilled work instead of running back and forth carrying materials. Dogs can also assist in combat by attacking raiders — though they are fragile and best kept behind defensive lines.
            </p>
            <p className="font-serif text-base text-ink-light leading-relaxed">
              To get dogs, tame wild wolves using a settler with Animal Handling 10+. Wolf packs spawn periodically on most maps. Once tamed, a wolf becomes a dog and can be trained for hauling. A colony with 4-6 dogs can effectively eliminate the need for dedicated hauler settlers, dramatically improving overall productivity. Keep dogs well-fed and they will repay you tenfold in labor savings.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
            <div className="faq-item">
              <details>
                <summary>My animals are not producing milk/eggs/wool. Why?</summary>
                <p>Check three conditions: 1) Pen is too small — animals need minimum space to produce; 2) Animal is hungry — grass tiles depleted or no hay in feeder; 3) Animal is sick or injured — check health tab. Also note that animals only produce when a settler with Animal Handling is assigned to tend them.</p>
              </details>
            </div>
            <div className="faq-item">
              <details>
                <summary>How do I get my animals to breed?</summary>
                <p>You need at least one male and one female of the same species in the same pen. Ensure both are well-fed, healthy, and have adequate pen space. Breeding is automatic — no settler action required. Chickens breed fastest; cows and sheep are slowest. Expect first offspring within 7-15 days after pairing, depending on species.</p>
              </details>
            </div>
            <div className="faq-item">
              <details>
                <summary>How many animals do I need for a colony of 8 settlers?</summary>
                <p>Recommended herd for 8 settlers: 2 cows (for milk), 1 bull, 3-4 sheep (for wool), 3-4 chickens (for eggs), 2 pigs (for meat), and 3-4 dogs (for hauling). This provides a steady supply of animal products without over-investing in feed. Scale up proportionally for larger colonies.</p>
              </details>
            </div>
          </section>
        </div>

        <aside className="lg:w-[35%] space-y-8 shrink-0">
          <div className="field-sidebar-block">
            <h3 className="font-display text-lg font-semibold text-ink mb-4">Animal Priority Tier</h3>
            <div className="space-y-2 font-serif text-sm text-ink-light">
              <div className="flex justify-between"><span>S-Tier</span><span className="text-gold">Dog, Cow</span></div>
              <div className="flex justify-between"><span>A-Tier</span><span className="text-ink-light">Sheep, Goat</span></div>
              <div className="flex justify-between"><span>B-Tier</span><span className="text-ink-muted">Chicken, Pig</span></div>
              <div className="flex justify-between"><span>C-Tier</span><span className="text-ink-muted">Cat</span></div>
            </div>
          </div>
          <div className="journal-card p-5">
            <h3 className="font-display text-base font-semibold text-ink mb-3">Quick Tips</h3>
            <ul className="space-y-2 font-serif text-sm text-ink-light">
              <li>&bull; Build pen before taming</li>
              <li>&bull; Grass feeds grazers except in winter</li>
              <li>&bull; Stock hay for winter feeding</li>
              <li>&bull; Maintain 1 male per 3-4 females</li>
              <li>&bull; Train dogs for hauling ASAP</li>
              <li>&bull; Pen size affects production speed</li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}
