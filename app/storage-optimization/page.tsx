{/* Meta description: Learn how to design efficient storage systems in Going Medieval. Compare stockpiles vs shelves, master food spoilage prevention, optimize zone-based layouts, and configure hauling priorities for maximum colony efficiency. */}

export default function StorageOptimizationPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">

      <h1 className="chapter-heading">Going Medieval Storage Optimization Guide</h1>

      <p className="font-serif text-base text-ink-light leading-relaxed drop-cap">
        Efficient storage design is the backbone of any thriving medieval colony. In Going Medieval, poor storage planning leads to wasted villager time, accelerated food spoilage, and production bottlenecks that can devastate your settlement during harsh winters or siege conditions. This comprehensive guide draws on community-tested strategies and real game mechanics to help you design storage systems that minimize hauling distances, maximize food preservation, and keep your production chains running smoothly. Whether you&apos;re building your first cellar or optimizing a late-game fortress, understanding the nuances of stockpiles, shelves, temperature dynamics, and hauling priorities will transform your base from a cluttered mess into a well-oiled medieval machine.
      </p>

      {/* Section 1: Stockpile vs Shelves */}
      <section className="mt-8">
        <h2 className="font-display text-2xl font-semibold text-ink mb-4">Stockpile vs Shelves: Choosing the Right Storage</h2>

        <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
          Going Medieval offers two primary storage constructs: stockpiles (designated floor zones) and shelves (placed containers). Each serves distinct purposes, and understanding their differences is crucial for efficient base design. Stockpiles are zones marked on the ground where items are placed directly on the floor or ground surface. Shelves are 1×1×1 furniture items unlocked through the &quot;Preserving Food&quot; research that provide organized, elevated storage for specific item categories.
        </p>

        <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
          The most important distinction lies in protection level. Stockpiles placed outdoors expose items to weather and temperature fluctuations, causing rapid food spoilage and material degradation. Stockpiles placed indoors with roofs slow spoilage but still allow temperature effects. Shelves protect stored items from weather (rain, snow) but do <em>not</em> insulate against temperature changes—a shelf sitting in a warm room will not keep food fresh. Therefore, shelves must be placed inside temperature-controlled environments like cellars to be effective for food storage.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="parchment-table w-full">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left">Feature</th>
                <th className="px-4 py-2 text-left">Stockpile</th>
                <th className="px-4 py-2 text-left">Shelf</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2">Unlocked By</td>
                <td className="px-4 py-2">Available from start</td>
                <td className="px-4 py-2">Research: Preserving Food</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Construction Skill Required</td>
                <td className="px-4 py-2">None</td>
                <td className="px-4 py-2">Level 10</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Materials Needed</td>
                <td className="px-4 py-2">None (zone designation)</td>
                <td className="px-4 py-2">20 Wood</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Weather Protection</td>
                <td className="px-4 py-2">Only if under roof</td>
                <td className="px-4 py-2">Yes (full protection)</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Temperature Insulation</td>
                <td className="px-4 py-2">None (room temperature applies)</td>
                <td className="px-4 py-2">None (room temperature applies)</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Items Allowed</td>
                <td className="px-4 py-2">Any (configurable filters)</td>
                <td className="px-4 py-2">Food, Linen, Wool Cloth, Leather, Healing Kits</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Space Efficiency</td>
                <td className="px-4 py-2">High (uses floor area)</td>
                <td className="px-4 py-2">Very High (vertical organization)</td>
              </tr>
              <tr>
                <td className="px-4 py-2"> Haul Distance</td>
                <td className="px-4 py-2">Direct to zone</td>
                <td className="px-4 py-2">Direct to shelf</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
          Shelves excel at organizing finished goods and materials that benefit from weather protection. A well-designed sewing center, for example, should have shelves for linen, wool cloth, and leather placed directly next to the tailoring workbench. Similarly, a hospital layout benefits from shelves storing medical healing kits within easy reach of treatment areas. However, for bulk raw materials like stone, ore, or timber, stockpiles remain the superior choice due to their ability to cover large areas and accommodate high volumes.
        </p>

        <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
          A common mistake is placing shelves in uncontrolled environments. Since shelves do not provide temperature insulation, a shelf sitting in a warm summer room will spoil food just as fast as leaving it on the ground. Always pair shelves with proper room design—ideally inside a purpose-built cold storage room with high insulation walls and flooring. The synergistic combination of shelves + cold room creates the most effective long-term food storage solution in the game.
        </p>
      </section>

      {/* Section 2: Food Storage and Spoilage */}
      <section className="mt-10">
        <h2 className="font-display text-2xl font-semibold text-ink mb-4">Food Storage and Spoilage: Mastering Temperature Dynamics</h2>

        <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
          Food spoilage in Going Medieval is driven by temperature. The warmer the environment, the faster food rots. In summer, ambient temperatures can reach 30°C or higher, causing unprotected food to spoil within days. Understanding and manipulating temperature is therefore the key to building an effective food storage system. The core strategy is to create a &quot;cold storage&quot; room—essentially a cellar or underground vault—that leverages game mechanics to maintain temperatures far below surface levels.
        </p>

        <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
          Several factors influence the temperature of your storage room. <strong>Depth</strong> is the first consideration: building underground or into a hillside provides natural insulation from the overhead soil layer. Community testing suggests that each layer of soil above the room reduces temperature, though the effect diminishes beyond 2–3 layers. For practical early-game design, digging just one layer down provides noticeable benefit without excessive labor cost. <strong>Room size</strong> also matters: larger rooms hold more stable, cooler temperatures because they avoid the &quot;heat trap&quot; effect of small enclosed spaces. A spacious cellar performs noticeably better than a cramped 3×3 closet.
        </p>

        <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
          <strong>Wall and floor materials</strong> dramatically affect insulation. While dirt walls show a high insulation value on paper, using constructed walls made of clay or limestone yields better real-world results due to how the game calculates combined material bonuses. Flooring choices similarly impact temperature: clay tile flooring and limestone tile flooring (insulation value 0.8) outperform wood flooring (0.75), which in turn beats wicker grated flooring (0.05). Investing in proper flooring is one of the most cost-effective upgrades for your cold storage.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="parchment-table w-full">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left">Storage Method</th>
                <th className="px-4 py-2 text-left">Estimated Temperature</th>
                <th className="px-4 py-2 text-left">Food Spoilage Rate</th>
                <th className="px-4 py-2 text-left">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2">Outdoor / Uncovered</td>
                <td className="px-4 py-2">Ambient (up to 32°C+ in summer)</td>
                <td className="px-4 py-2">Very Fast</td>
                <td className="px-4 py-2">Avoid for any perishable food</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Indoor Room (no optimization)</td>
                <td className="px-4 py-2">Slightly below ambient</td>
                <td className="px-4 py-2">Fast</td>
                <td className="px-4 py-2">Better than outdoor, still not ideal</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Underground (1 layer soil, basic)</td>
                <td className="px-4 py-2">~5–6°C</td>
                <td className="px-4 py-2">Moderate</td>
                <td className="px-4 py-2">Good early-game solution</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Optimized Cellar (clay walls + tile floor)</td>
                <td className="px-4 py-2">~2–4°C</td>
                <td className="px-4 py-2">Slow</td>
                <td className="px-4 py-2">Best achievable without ice</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Cellar with Ice (winter-added)</td>
                <td className="px-4 py-2">Near 0°C (seasonal)</td>
                <td className="px-4 py-2">Very Slow</td>
                <td className="px-4 py-2">Ice melts, temporary benefit</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Packaged Meal (special item)</td>
                <td className="px-4 py-2">N/A (does not decay)</td>
                <td className="px-4 py-2">None</td>
                <td className="px-4 py-2">Requires clothing fabric to craft</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
          Beyond temperature control, certain food processing techniques extend shelf life. Smoking meat at a smokehouse converts raw meat into smoked meat, which keeps significantly longer than its fresh counterpart. This is an essential early-game strategy before you have the infrastructure for a proper cellar. Similarly, brewing alcohol (beer, ale, cider, mead) not only provides morale-boosting drinks but also preserves calories in a form that stores reasonably well. Once you unlock the &quot;Packaged Meal&quot; technology, you can produce meals wrapped in clothing fabric that literally never decay—the ultimate late-game food storage solution.
        </p>

        <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
          One often-overlooked detail is managing what your settlers are allowed to eat. By default, settlers may consume raw ingredients that you intended to preserve for winter. Use the <strong>Manage</strong> menu (top-left of the screen) to restrict their diet to &quot;meals only,&quot; preventing them from snacking on your carefully preserved raw food stores. This simple configuration step is as important as the physical storage design itself—a full cellar is useless if your settlers eat it all before winter arrives.
        </p>

        <div className="aged-border p-4 my-6">
          <p className="font-serif text-base text-ink-light leading-relaxed">
            <strong>Pro Tip:</strong> When designing your cold storage, avoid placing any heat-emitting objects inside the room. Braziers, torches, and candles all raise the local temperature and undermine your cooling efforts. If you need visibility, use windows or place lights outside the room. Also remember that pets cannot use ladders—if your food storage is underground, ensure pets have a separate food source at ground level.
          </p>
        </div>
      </section>

      {/* Section 3: Zone-Based Storage Layout */}
      <section className="mt-10">
        <h2 className="font-display text-2xl font-semibold text-ink mb-4">Zone-Based Storage Layout: Strategic Placement for Efficiency</h2>

        <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
          An optimized storage system in Going Medieval is not just about where items are stored, but how far villagers must travel to retrieve or deposit them. The fundamental principle is to <strong>minimize hauling distance</strong> between production stations and their associated storage. Every second a villager spends walking is time not spent crafting, farming, or building. Thoughtful zone placement is therefore a direct multiplier on your colony&apos;s productivity.
        </p>

        <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
          The most effective approach is to design storage zones around <strong>production chains</strong> rather than grouping all storage in one central location. For example, your food production chain follows the path: <em>Crops → Cellar → Kitchen → Dining Room</em>. Place your kitchen stockpile (for ingredients) adjacent to the cellar entrance, and place the cooked meal stockpile inside or immediately next to the dining area. This ensures that cooks spend minimal time walking, and diners have immediate access to served meals. The same logic applies to metalworking (ore → smelter → workshop → armory), where each step&apos;s output should be stored within a few tiles of the next step&apos;s input.
        </p>

        <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
          When laying out stockpile zones, always leave <strong>pathfinding clearance</strong> between walls and storage areas. Villagers navigate using pathfinding algorithms that can become inefficient in tight spaces. A common community-reported issue involves villagers repeatedly picking up and putting down items when stockpiles are placed too close to walls or other obstacles. The workaround is simple: maintain at least a one-tile gap between stockpile edges and walls, and ensure that stockpiles have clear, unobstructed access paths. This &quot;breathing room&quot; prevents pathfinding glitches and keeps hauling running smoothly.
        </p>

        <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
          Another powerful technique is <strong>distributed storage</strong> for high-turnover resources. Firewood, for instance, is consumed by kitchens, smelters, and braziers throughout your base. Rather than consolidating all firewood in a single remote pile, create several small stockpiles near each major consumption point. A small wood stockpile next to the kitchen, another near the smelter, and a third near the great hall&apos;s brazier ensures that refueling these stations requires only a few steps. The same principle applies to <a href="/base-layout" className="text-vermillion hover:underline">base layout design</a> more broadly—distributed resources beat centralized hoarding when frequency of access is high.
        </p>

        <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
          Floor paths deserve mention here as well. Placing flooring (wood planks, bricks, or flagstones) along major hauling routes increases villager movement speed noticeably. The investment in materials pays for itself quickly through saved time. Prioritize flooring for paths connecting your high-traffic storage zones: the route from forest to timber stockpile, from mine to smelter, and from cellar to kitchen. These few key paths have disproportionate impact on overall efficiency.
        </p>

        <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
          For players building multi-story fortresses, consider <strong>vertical storage integration</strong>. Placing storage for finished goods (armor, weapons, clothing) on the same floor as their point of use reduces inter-floor travel. Ground floors work well for heavy raw materials (stone, ore) since these are delivered from outside the base. Upper floors suit finished products and food storage, especially if you can leverage the roof layer for additional insulation in your coldest rooms. The <a href="/room-design" className="text-vermillion hover:underline">room design guide</a> covers multi-story planning in greater detail.
        </p>
      </section>

      {/* Section 4: Priority and Hauling */}
      <section className="mt-10">
        <h2 className="font-display text-2xl font-semibold text-ink mb-4">Priority and Hauling: Fine-Tuning Your Logistics</h2>

        <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
          Even with perfectly placed storage zones, your logistics can still falter if hauling priorities are not configured correctly. Going Medieval&apos;s villagers manage their own schedules, but you can influence their behavior through several mechanical levers: work priority settings, stockpile configuration, and the management menu. Mastering these systems ensures that critical supplies move where they need to go without micromanagement.
        </p>

        <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
          <strong>Stockpile configuration</strong> is the first tool. Each stockpile zone has an edit interface (accessible via the zone panel) that lets you allow or disallow specific item categories. Use this to create specialized zones: a &quot;Raw Meat Only&quot; stockpile inside your cold storage, a &quot;Bones Only&quot; pile near the butcher table, a &quot;Finished Clothing&quot; zone near your tailoring bench. When multiple stockpiles accept the same item type, villagers will typically deliver to the closest available zone. However, you can also influence this by temporarily disabling certain zones during specific production phases—for example, disabling general storage zones to force all new smelted ingots directly to the workshop zone.
        </p>

        <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
          <strong>Work priorities</strong> affect hauling indirectly. Villagers with &quot;Haul&quot; enabled in their work tab will actively move items to designated storage during work hours. Ensuring that at least 2–3 villagers have hauling enabled prevents item piles from accumulating around workstations. However, avoid assigning every villager to hauling, or you may find your entire colony standing around moving items when there are more urgent tasks (like fighting off a raid). A balanced approach assigns hauling as a secondary or tertiary priority for most villagers, with perhaps one or two villagers specializing in hauling during peacetime.
        </p>

        <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
          The <strong>Manage menu</strong> (top-left of screen) deserves special attention for storage optimization. Beyond controlling what settlers eat (discussed earlier), this menu lets you configure item usage priorities. For example, you can specify that cooks should prefer using ingredients from certain stockpiles, or that Smiths should draw ingots from specific storage zones first. While the game does not expose a full &quot;stockpile priority number&quot; system like some other colony sims, understanding the interaction between the Manage menu and stockpile placement gives you effective indirect control over item flow.
        </p>

        <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
          A known community-reported bug affects hauling behavior when stockpiles are placed <em>before</em> flooring is installed. Villagers may get stuck in a loop of picking up and dropping items repeatedly—essentially &quot;freaking out&quot; over the stockpile zone. The reliable fix is to always <strong>build the floor first, then designate the stockpile</strong> on top of it. If you encounter this bug on an existing stockpile, removing the zone, verifying the floor is complete, and re-adding the zone usually resolves the issue. This small construction sequencing rule can save hours of frustrated debugging.
        </p>

        <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
          Finally, consider the timing of hauling relative to your production schedule. If you schedule hauling-heavy cleanup for immediately after a major construction project, your villagers can organize the resulting material chaos before the next work cycle begins. Some players find it effective to have a &quot;cleanup hour&quot; in the schedule where all villagers focus on hauling and organization. Others prefer to keep hauling active continuously but at low priority. Experiment with both approaches to see what fits your playstyle and colony size. The key insight is that hauling is not a &quot;set and forget&quot; system—periodic review of your storage zones and hauling assignments prevents gradual accumulation of inefficiencies.
        </p>
      </section>

      {/* FAQ Section */}
      <section className="mt-10">
        <h2 className="font-display text-2xl font-semibold text-ink mb-6">Frequently Asked Questions</h2>

        <div className="aged-border p-5 mb-4">
          <h3 className="font-display text-xl font-semibold text-ink mb-2">How deep do I need to dig for an effective cold storage room?</h3>
          <p className="font-serif text-base text-ink-light leading-relaxed">
            For practical purposes, digging just one layer below the surface provides meaningful temperature reduction and is attainable in the early game without massive labor investment. Each additional layer of soil above the room provides diminishing returns—community testing shows roughly 0.2–0.3°C improvement per extra layer. A depth of two to three layers is ideal for late-game optimization, but don&apos;t delay building your first cellar waiting for the &quot;perfect&quot; depth. The combination of depth, proper wall/floor materials, and room size matters more than depth alone.
          </p>
        </div>

        <div className="aged-border p-5 mb-4">
          <h3 className="font-display text-xl font-semibold text-ink mb-2">Why do my villagers keep moving items back and forth between stockpiles?</h3>
          <p className="font-serif text-base text-ink-light leading-relaxed">
            This is usually caused by one of two issues. First, the &quot;floor first, then stockpile&quot; bug: if a stockpile zone is designated before flooring is built underneath it, villagers can get stuck in a hauling loop. Remove the stockpile zone, complete the flooring, then re-designate the zone. Second, overlapping stockpile filters: if two nearby stockpiles both accept the same item type, villagers may deliver to one, then another villager &quot;optimizes&quot; by moving it to the &quot;closer&quot; zone, creating a loop. Resolve this by making stockpile filters mutually exclusive (e.g., one accepts raw meat, the other accepts only cooked meals).
          </p>
        </div>

        <div className="aged-border p-5 mb-4">
          <h3 className="font-display text-xl font-semibold text-ink mb-2">What&apos;s the most space-efficient way to store large amounts of food?</h3>
          <p className="font-serif text-base text-ink-light leading-relaxed">
            Shelves are significantly more space-efficient than stockpiles for food storage. A single shelf occupies a 1×1 tile footprint but provides organized storage that stacks items vertically, whereas a stockpile requires floor area proportional to the amount stored. In a properly designed cold storage room, fill the space with shelves (unlocked via the &quot;Preserving Food&quot; research) rather than relying on floor stockpiles. Combine this with <a href="/food-preservation" className="text-vermillion hover:underline">food preservation techniques</a> like smoking and packaging to further reduce the total volume of food you need to store.
          </p>
        </div>

        <div className="aged-border p-5 mb-4">
          <h3 className="font-display text-xl font-semibold text-ink mb-2">Should I build a centralized storage area or distribute storage around my base?</h3>
          <p className="font-serif text-base text-ink-light leading-relaxed">
            The optimal approach is a hybrid. Centralized storage works well for long-term reserves (winter food, reserve clothing, spare resources) that are accessed infrequently. Distributed storage is superior for high-turnover items that are consumed continuously—firewood, cooking ingredients, and smelting fuel should be stored in small quantities near their points of use. As a rule of thumb: if an item is used multiple times per day by your production cycle, store it close to where it&apos;s used. If it&apos;s only accessed seasonally or during emergencies, central storage is fine. Review your <a href="/kitchen-design" className="text-vermillion hover:underline">kitchen workflow</a> to identify which ingredients need nearby storage versus pantry reserves.
          </p>
        </div>
      </section>

      {/* Conclusion */}
      <section className="mt-10">
        <h2 className="font-display text-2xl font-semibold text-ink mb-4">Putting It All Together: Your Storage Optimization Checklist</h2>

        <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
          Designing an efficient storage system in Going Medieval is an iterative process. As your colony grows from a handful of survivors to a thriving medieval town, your storage needs will evolve. Start with the fundamentals: build a basic underground cellar for food, create dedicated stockpiles for each production chain, and ensure your villagers have hauling enabled. Then refine: add shelves to your cold storage, optimize your floor paths, and configure your Manage menu to restrict food consumption. Each improvement compounds, creating a colony that runs smoother, grows faster, and survives longer.
        </p>

        <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
          Remember that storage optimization is not just about efficiency—it&apos;s also about resilience. A well-stocked, well-organized colony can weather sieges, harsh winters, and food shortages that would devastate a disorganized settlement. The time you invest in thoughtful storage design pays dividends in villager survival, morale, and productivity. Use the strategies in this guide as a foundation, then adapt them to your unique base layout, playstyle, and the specific challenges of your chosen biome.
        </p>

        <div className="aged-border p-4 mt-6">
          <p className="font-serif text-sm text-ink-muted leading-relaxed">
            <strong>Data source:</strong> Community testing estimates. Going Medieval&apos;s exact spoilage rate formulas and temperature calculations are not fully documented by the developer. Values provided in this guide are based on player-reported testing and may vary with game version updates. Always verify mechanics in your own game when making critical storage decisions.
          </p>
        </div>
      </section>

    </main>
  );
}
