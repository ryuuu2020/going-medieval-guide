{/* Meta description: Top 10 beginner mistakes in Going Medieval and how to fix them. Learn about food spoilage, defense errors, research priorities, and more. */}
export const metadata = {
  title: "Going Medieval: 10 Beginner Mistakes to Avoid (2026)",
  description:
    "Avoid these 10 common beginner mistakes in Going Medieval. Base building errors, defense flaws, and how to fix them early.",
};


export default function BeginnerMistakesPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">

      <h1 className="chapter-heading">Going Medieval: 10 Beginner Mistakes and How to Fix Them</h1>

      <p className="font-serif text-base text-ink-light leading-relaxed drop-cap">
        Going Medieval is a challenging colony simulation set in a plague-ravaged medieval world. As you rebuild civilization with a small band of survivors, the margin for error is slim. New players often find their settlements collapsing within the first few seasons—not because the game is unfair, but because they've fallen into common traps that veteran players have learned to avoid. This guide outlines the ten most frequent beginner mistakes, explains why they happen, and shows you exactly how to fix them. Whether you're struggling with food spoilage, confused by the defense system, or wondering why your settlers are unhappy, you'll find practical solutions here. For a complete introduction to the game, also see our <a href="/beginner-walkthrough" className="text-vermillion hover:underline">Beginner Walkthrough</a> and <a href="/tips" className="text-vermillion hover:underline">Tips for Beginners</a>.
      </p>

      {/* Mistake 1 */}
      <section className="mt-8">
        <h2 className="font-display text-2xl font-semibold text-ink mb-4">1. Leaving the Research Queue Empty</h2>
        <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
          <strong>What goes wrong:</strong> Many new players assign a scholar to the research table and then forget about it. In Going Medieval, research is not automatic—you must manually select what to research next. Worse, the "books" produced by research are physical items stored in your stockpile. If those books are destroyed by fire, raiders, or decay, you permanently lose that research progress.
        </p>
        <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
          <strong>How to fix it:</strong> Always keep at least two research topics queued. Assign your highest Intellectual stat settler to research and check the queue regularly. Protect your books by storing them in a secure, roofed stockpile zone away from flammable materials. Building a dedicated library room with stone flooring reduces fire risk. Prioritize Agriculture first, then Brewing, then Tailoring—this order ensures your settlement survives the early game.
        </p>
        <div className="aged-border p-4 rounded mb-4">
          <p className="font-serif text-base text-ink-light leading-relaxed">
            <strong>Pro tip:</strong> Research speed depends on the settler's Intellectual skill and whether they have a dedicated research table. Upgrading to a high-quality research table significantly boosts progress. Never leave your scholar idle—if research is complete, give them another task or queue the next tech immediately.
          </p>
        </div>
      </section>

      {/* Mistake 2 */}
      <section className="mt-8">
        <h2 className="font-display text-2xl font-semibold text-ink mb-4">2. Forgetting That Settlers Need Beer, Not Water</h2>
        <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
          <strong>What goes wrong:</strong> This is perhaps the most confusing mechanic for new players. In Going Medieval, settlers cannot drink water—they can only drink beer. If you don't provide ale or beer, your settlers get the "Thirsty" debuff, which rapidly tanks their mood. Many players waste time building wells or looking for water sources, not realizing that brewing is the only solution.
        </p>
        <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
          <strong>How to fix it:</strong> Research Brewing as your second priority after Agriculture. Build a brewing station and assign a settler with high Cooking skill to produce ale. Each settler needs a steady supply of alcohol—plan for at least one beer per day per adult settler. In the medieval setting, weak ale was the safe drink because alcohol killed bacteria that contaminated water sources. The game faithfully replicates this historical reality.
        </p>
      </section>

      {/* Mistake 3 */}
      <section className="mt-8">
        <h2 className="font-display text-2xl font-semibold text-ink mb-4">3. Feeding Settlers Raw Food Instead of Cooked Meals</h2>
        <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
          <strong>What goes wrong:</strong> In the early game, it's tempting to let settlers eat foraged berries and raw hunted meat. While this prevents starvation, raw food provides minimal nutrition and no mood bonus. Settlers eating raw food frequently will develop negative moodlets, making them more likely to have a mental break.
        </p>
        <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
          <strong>How to fix it:</strong> Build a campfire or clay oven as soon as you have the resources. Cooked meals provide significantly more nutrition and grant mood buffs that keep your settlement stable. A simple cooked meal made from foraged ingredients is far better than the finest raw food. Prioritize getting at least one cooked meal per settler per day. For advanced food strategies, see our <a href="/farming" className="text-vermillion hover:underline">Farming Guide</a>.
        </p>
      </section>

      {/* Mistake 4 */}
      <section className="mt-8">
        <h2 className="font-display text-2xl font-semibold text-ink mb-4">4. Storing Food at Ground Level in Summer</h2>
        <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
          <strong>What goes wrong:</strong> Food spoils rapidly in Going Medieval, especially during summer when temperatures are high. New players often store all their food in ground-level stockpiles, only to discover that their entire winter supply has rotted away. This mistake can lead to colony collapse when the cold weather arrives and no preserved food remains.
        </p>
        <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
          <strong>How to fix it:</strong> Dig a basement or cellar for food storage. Underground areas stay significantly cooler than surface stockpiles, dramatically slowing spoilage. Start by mining down two levels, then carve out a storage room and build a staircase for access. In winter, the opposite is true—outdoor cold acts as natural refrigeration, but beware of wild animals getting into unprotected food stores. For a detailed walkthrough on basement construction, check our <a href="/beginner-walkthrough" className="text-vermillion hover:underline">Beginner Walkthrough</a>.
        </p>
        <div className="aged-border p-4 rounded mb-4">
          <p className="font-serif text-base text-ink-light leading-relaxed">
            <strong>Data source:</strong> Community testing estimates indicate that underground storage can extend food shelf life by 300-400% compared to surface storage during summer months. Actual results may vary based on biome and depth of storage.
          </p>
        </div>
      </section>

      {/* Mistake 5 */}
      <section className="mt-8">
        <h2 className="font-display text-2xl font-semibold text-ink mb-4">5. Confusing Merlons With Walls in Defense Setup</h2>
        <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
          <strong>What goes wrong:</strong> This is one of the most devastating mistakes a new player can make. Merlons (also called crenellations) are the gaps-and-covers on top of castle walls—they are NOT solid walls themselves. Enemies will walk right through merlons as if they don't exist. New players often build a ring of merlons expecting a defensive perimeter, only to watch enemies stroll through their "defense" and slaughter their unarmed settlers.
        </p>
        <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
          <strong>How to fix it:</strong> Build solid walls first, then place merlons on top of those walls. Merlons are meant to provide cover for your archers while giving them a firing position. The historical design allowed defenders to fire through the gaps (crenels) while being protected by the raised sections (merlons). Place your archers behind merlons on high walls to get accuracy, range, and critical hit bonuses. For comprehensive defense strategies, see our <a href="/defense" className="text-vermillion hover:underline">Defense Guide</a>.
        </p>
      </section>

      {/* Mistake 6 */}
      <section className="mt-8">
        <h2 className="font-display text-2xl font-semibold text-ink mb-4">6. Deforesting the Map Instead of Using Tree Nurseries</h2>
        <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
          <strong>What goes wrong:</strong> Wood is essential in Going Medieval—you need it for construction, fuel, and crafting. New players often harvest every tree in sight to get a quick wood supply. This causes two problems: it creates an ugly, barren landscape, and it eliminates your long-term wood sustainability. Trees take a long time to grow back, and by the time you need large amounts of wood for late-game construction, you've destroyed your renewable source.
        </p>
        <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
          <strong>How to fix it:</strong> Research Agriculture to unlock the tree nursery zone. Designate a dedicated area for growing trees and assign settlers with high Botany skill to manage it. Harvest trees only when they are fully mature to get maximum yield. A well-managed tree nursery provides a sustainable wood supply indefinitely. If you must harvest mature trees from the map, replant immediately to maintain forest cover.
        </p>
      </section>

      {/* Mistake 7 */}
      <section className="mt-8">
        <h2 className="font-display text-2xl font-semibold text-ink mb-4">7. Not Preparing Winter Clothing and Heating</h2>
        <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
          <strong>What goes wrong:</strong> Winter in Going Medieval can be lethal. Settlers caught outside without proper winter clothing will suffer freezing damage and potentially die. Even indoors, unheated rooms cause discomfort and health penalties. New players often focus entirely on food and defense, then get hit by the first winter with settlers wearing summer clothes and no heat sources.
        </p>
        <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
          <strong>How to fix it:</strong> Research Tailoring before winter arrives. Craft winter cloaks and hats for every settler—check the temperature overlay to see what clothing threshold is needed for the coming season. Place braziers in every room where settlers spend time: bedrooms, kitchens, workshops, and gathering areas. Braziers require wood and clay to operate, so stockpile these resources before the snow falls. Enclose rooms with walls and doors to trap heat efficiently.
        </p>
      </section>

      {/* Mistake 8 */}
      <section className="mt-8">
        <h2 className="font-display text-2xl font-semibold text-ink mb-4">8. Ignoring Settler Mood and Leisure Needs</h2>
        <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
          <strong>What goes wrong:</strong> Going Medieval uses a RimWorld-inspired mood system. Settlers have breaking points, and unhappy settlers will have mental breaks—refusing to work, wandering off, or even turning violent. New players often schedule settlers to work from sunrise to sunset with no breaks, causing mood to plummet. The "Hideous Clothing" debuff from low-quality garments and the lack of leisure time are silent colony killers.
        </p>
        <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
          <strong>How to fix it:</strong> Schedule at least 2-3 hours of leisure time per day for every settler. During leisure, settlers will play Backgammon or pray at shrines, both of which provide mood boosts. Build shrines for both available religions (building both is cheap and covers all settlers). Improve clothing quality by setting up a Tailoring station and assigning a skilled crafter—good quality clothes remove the "Hideous Clothing" debuff entirely. Monitor the mood tab regularly to catch problems before they cause a breakdown.
        </p>
      </section>

      {/* Mistake 9 */}
      <section className="mt-8">
        <h2 className="font-display text-2xl font-semibold text-ink mb-4">9. Planting Crops Too Late in the Season</h2>
        <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
          <strong>What goes wrong:</strong> Crops in Going Medieval have specific growing seasons. Planting wheat or cabbage too late in the season means the plants won't mature before winter arrives, wasting the seeds and the labor. New players often delay setting up their farm because they're focused on building or defense, then realize too late that they have no mature crops for the winter.
        </p>
        <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
          <strong>How to fix it:</strong> Research Agriculture immediately and designate a farm plot on level ground with fertile soil. Plant your first crops in early spring to maximize growing time. Cabbages are an excellent early-game crop—they grow relatively quickly and provide good nutrition. Wheat is valuable for bread but takes longer to mature. Always check the crop info panel to see growing season dates, and plan your planting so crops have time to fully mature before the first frost. For crop rotation and advanced farming techniques, see our <a href="/advanced-tips" className="text-vermillion hover:underline">Advanced Tips</a> guide.
        </p>
        <div className="aged-border p-4 rounded mb-4">
          <p className="font-serif text-base text-ink-light leading-relaxed">
            <strong>Data source:</strong> Community testing estimates suggest that crops planted at least 15 days before the end of the growing season have an 80%+ chance of reaching harvestable maturity. Planting within 10 days of season end carries significant failure risk.
          </p>
        </div>
      </section>

      {/* Mistake 10 */}
      <section className="mt-8">
        <h2 className="font-display text-2xl font-semibold text-ink mb-4">10. Declining New Settler Events</h2>
        <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
          <strong>What goes wrong:</strong> New settlers arrive through random events, especially when your Region Influence is growing. New players often decline these events because they're worried about feeding more mouths or because the new settler has undesirable traits. This is almost always a mistake—extra hands are precious in the early game, and you can always manage a difficult trait or exile the settler later.
        </p>
        <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
          <strong>How to fix it:</strong> Always accept your first few newcomer events. A settler with suboptimal traits is still better than no settler at all—they can haul, mine, or clean even if they're not ideal for skilled work. As your colony grows, you can be more selective, but in the first few seasons, population growth is critical. More settlers means faster construction, better defense, and the ability to specialize labor. Region Influence affects event frequency, so building more structures actively helps you get more settlers.
        </p>
      </section>

      {/* Summary Table */}
      <section className="mt-12">
        <h2 className="font-display text-2xl font-semibold text-ink mb-6">Summary: 10 Mistakes and Their Solutions</h2>
        <div className="overflow-x-auto">
          <table className="parchment-table w-full">
            <thead>
              <tr>
                <th className="px-4 py-3 text-left font-display text-lg text-ink">Mistake</th>
                <th className="px-4 py-3 text-left font-display text-lg text-ink">Problem</th>
                <th className="px-4 py-3 text-left font-display text-lg text-ink">Solution</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-3 font-serif text-base text-ink-light">Empty research queue</td>
                <td className="px-4 py-3 font-serif text-base text-ink-light">Progress stops; books can be lost</td>
                <td className="px-4 py-3 font-serif text-base text-ink-light">Always queue 2+ research topics; protect books</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-serif text-base text-ink-light">No beer for settlers</td>
                <td className="px-4 py-3 font-serif text-base text-ink-light">"Thirsty" debuff tanks mood</td>
                <td className="px-4 py-3 font-serif text-base text-ink-light">Research Brewing; build brewing station</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-serif text-base text-ink-light">Feeding raw food</td>
                <td className="px-4 py-3 font-serif text-base text-ink-light">Low nutrition; no mood bonus</td>
                <td className="px-4 py-3 font-serif text-base text-ink-light">Build campfire/oven; cook all meals</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-serif text-base text-ink-light">Poor food storage</td>
                <td className="px-4 py-3 font-serif text-base text-ink-light">Food spoils in summer heat</td>
                <td className="px-4 py-3 font-serif text-base text-ink-light">Dig basement cellar for cool storage</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-serif text-base text-ink-light">Merlons as walls</td>
                <td className="px-4 py-3 font-serif text-base text-ink-light">Enemies walk through defenses</td>
                <td className="px-4 py-3 font-serif text-base text-ink-light">Build solid walls first; place merlons on top</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-serif text-base text-ink-light">Deforesting map</td>
                <td className="px-4 py-3 font-serif text-base text-ink-light">No sustainable wood source</td>
                <td className="px-4 py-3 font-serif text-base text-ink-light">Build tree nurseries; harvest only mature trees</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-serif text-base text-ink-light">No winter prep</td>
                <td className="px-4 py-3 font-serif text-base text-ink-light">Freezing damage; settler death</td>
                <td className="px-4 py-3 font-serif text-base text-ink-light">Research Tailoring; craft winter clothes; place braziers</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-serif text-base text-ink-light">Ignoring mood</td>
                <td className="px-4 py-3 font-serif text-base text-ink-light">Mental breaks; colony collapse</td>
                <td className="px-4 py-3 font-serif text-base text-ink-light">Schedule leisure; build shrines; improve clothes</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-serif text-base text-ink-light">Late crop planting</td>
                <td className="px-4 py-3 font-serif text-base text-ink-light">Crops don't mature; winter starvation</td>
                <td className="px-4 py-3 font-serif text-base text-ink-light">Plant in early spring; check growing season dates</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-serif text-base text-ink-light">Declining new settlers</td>
                <td className="px-4 py-3 font-serif text-base text-ink-light">Slow growth; labor shortage</td>
                <td className="px-4 py-3 font-serif text-base text-ink-light">Always accept early newcomer events</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="font-serif text-base text-ink-muted leading-relaxed mt-4">
          <strong>Data source:</strong> Information compiled from community testing, developer patch notes, and player reports. Specific values such as mood penalties and crop growing times may vary based on game version and difficulty settings.
        </p>
      </section>

      {/* FAQ Section */}
      <section className="mt-12">
        <h2 className="font-display text-2xl font-semibold text-ink mb-6">Frequently Asked Questions</h2>

        <div className="mb-6">
          <h3 className="font-display text-xl font-semibold text-ink mb-2">Why do my settlers keep getting "Thirsty" even though I have a well?</h3>
          <p className="font-serif text-base text-ink-light leading-relaxed">
            In Going Medieval, settlers cannot drink water—they can only drink beer or ale. This reflects the historical reality of medieval Europe, where alcoholic drinks were safer than contaminated water sources. Build a brewing station and assign a settler to produce alcohol. Each adult settler needs roughly one beer per day. The "Thirsty" debuff will disappear once beer is available in your settlement's food stockpile.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="font-display text-xl font-semibold text-ink mb-2">How do I stop enemies from walking through my merlons?</h3>
          <p className="font-serif text-base text-ink-light leading-relaxed">
            Merlons are not walls—they are the alternating solid and open sections on top of a castle wall. Enemies will walk right through the open gaps in merlons. To build a proper defensive wall: first build a solid wall (palisade or stone wall), then place merlons on top of that wall. Your archers stand behind the merlons on the wall walkway, firing through the gaps while being protected by the solid sections. This design gives your archers accuracy and damage bonuses from the elevated position.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="font-display text-xl font-semibold text-ink mb-2">What should I research first in Going Medieval?</h3>
          <p className="font-serif text-base text-ink-light leading-relaxed">
            The optimal early research order is: Architecture (available immediately) → Agriculture → Brewing → Tailoring → Military Tech. Agriculture unlocks farming, which is essential for sustainable food. Brewing allows you to produce beer, solving the settler thirst problem. Tailoring lets you craft better clothing and winter gear. Military Tech gives you access to better weapons for defense. Always keep at least two research topics queued so your researcher never has downtime. For more on research priorities, see our <a href="/tips" className="text-vermillion hover:underline">Tips for Beginners</a> guide.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="font-display text-xl font-semibold text-ink mb-2">How do I prevent food from spoiling in summer?</h3>
          <p className="font-serif text-base text-ink-light leading-relaxed">
            The most effective method is to build an underground cellar or basement. Dig down two levels, carve out a storage room, and build a staircase for access. The underground temperature stays much cooler than the surface, dramatically slowing food spoilage. Make sure the storage room has a roof and walls to maintain the temperature difference. During winter, you can use outdoor stockpiles as natural refrigeration, but be cautious of wild animals and raiders accessing unprotected food stores.
          </p>
        </div>
      </section>

      {/* Related Links */}
      <section className="mt-12 p-6 aged-border rounded">
        <h2 className="font-display text-2xl font-semibold text-ink mb-4">Related Guides</h2>
        <ul className="list-disc list-inside font-serif text-base text-ink-light leading-relaxed space-y-2">
          <li><a href="/beginner-walkthrough" className="text-vermillion hover:underline">Beginner Walkthrough</a> — Step-by-step guide to your first days</li>
          <li><a href="/tips" className="text-vermillion hover:underline">Tips for Beginners</a> — Essential strategies for new players</li>
          <li><a href="/advanced-tips" className="text-vermillion hover:underline">Advanced Tips</a> — Take your settlement to the next level</li>
          <li><a href="/farming" className="text-vermillion hover:underline">Farming Guide</a> — Maximize your crop yields</li>
          <li><a href="/defense" className="text-vermillion hover:underline">Defense Guide</a> — Build impenetrable fortifications</li>
        </ul>
      </section>

      {/* Disclaimer */}
      <section className="mt-8 mb-8">
        <p className="font-serif text-sm text-ink-muted leading-relaxed italic">
          <strong>Data source disclaimer:</strong> The gameplay mechanics, mood modifiers, and strategy recommendations in this guide are based on community testing estimates, player reports, and publicly available information. Values such as mood penalties, crop growing times, and defense bonuses may vary based on game version, difficulty settings, and individual playthrough RNG. Always verify critical information in-game, as patches may change mechanics. This guide reflects the game state as of 2026.
        </p>
      </section>

    </main>
  );
}