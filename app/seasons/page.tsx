import type { Metadata } from "next";
import { seasons } from "@/lib/data";

export const metadata: Metadata = {
  title: "Seasons Guide | Going Medieval Guide",
  description:
    "Complete guide to all 4 seasons in Going Medieval. Master Spring planting, Summer growth, Autumn harvest, and Winter survival. Learn temperature management, crop rotation, and food storage strategies for year-round colony success.",
};

export default function SeasonsPage() {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem" }}>
      <h1 style={{ marginBottom: "0.5rem" }}>Seasons Guide</h1>
      <p style={{ color: "var(--color-text-muted)", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: "2rem" }}>
        Seasons are the heartbeat of Going Medieval. Each of the four seasons brings distinct
        challenges and opportunities — from the planting frenzy of Spring to the desperate
        survival of Winter. Understanding and preparing for seasonal shifts is the difference
        between a thriving colony and a frozen grave.
      </p>

      {/* FAQ */}
      <h2 style={{ marginBottom: "1rem" }}>Quick Answers</h2>
      <div className="faq-snippets">
        <details>
          <summary>How long is each season in Going Medieval?</summary>
          <p>
            Each season lasts 12 days by default (configurable in game settings). This gives you
            roughly 48 days per in-game year. The days per season can be adjusted when starting a
            new game — longer seasons give you more time to prepare but also extend the duration
            of harsh conditions like Winter. New players should stick with the default 12-day
            seasons until they&apos;re comfortable with the seasonal rhythm.
          </p>
        </details>
        <details>
          <summary>How do I prepare for Winter in Going Medieval?</summary>
          <p>
            Winter preparation starts in Autumn. Harvest all crops before the first frost, build
            underground root cellars for food storage, stockpile at least 100 meals per settler,
            craft winter coats and warm hats at the Tailor Workshop, plant Turnips (the only
            outdoor winter crop), and set up an underground mushroom farm. Ensure you have enough
            firewood or coal stockpiled for campfires and cooking throughout the season.
          </p>
        </details>
        <details>
          <summary>What crops grow in each season?</summary>
          <p>
            Spring supports the widest variety: Cabbage, Beet, Barley, Herbs, Redcurrant, Flax,
            and Carrot. Summer narrows to Beet, Barley, Herbs, and Carrot. Autumn brings Cabbage,
            Herbs, Hay, Mushrooms (underground), Turnips, and Carrot. Winter limits outdoor
            planting to Turnips only, with Mushrooms growing exclusively in underground cellars.
            Plan your fields so you always have something growing — stagger planting times for
            continuous harvests.
          </p>
        </details>
      </div>

      {/* Spring */}
      <h2 style={{ marginTop: "3rem", marginBottom: "1rem" }}>Spring — The Season of New Beginnings</h2>
      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "1rem" }}>
        Spring is the most critical season for establishing your colony&apos;s food supply. With
        temperatures ranging from 5°C to 18°C, conditions are mild enough for settlers to work
        comfortably outdoors but not so hot that crops wilt from heat stress. This is your
        planting window — the decisions you make in Spring will determine whether your colony
        eats well through Autumn or starves in Winter.
      </p>

      <div className="card" style={{ borderLeft: "4px solid var(--color-success)", marginBottom: "1.5rem" }}>
        <h3 style={{ fontSize: "1.15rem", margin: "0 0 0.5rem" }}>Spring Priorities</h3>
        <ul style={{ color: "var(--color-text-muted)", lineHeight: 1.8, margin: 0, paddingLeft: "1.25rem" }}>
          <li><strong style={{ color: "var(--color-accent)" }}>Plant immediately:</strong> Designate crop fields on Day 1 of Spring. Cabbage and Carrot are fast-growing staples. Barley is essential for long-term food sustainability and brewing.</li>
          <li><strong style={{ color: "var(--color-accent)" }}>Gather wild resources:</strong> Wild berries, herbs, and mushrooms spawn in Spring. Send gatherers out early before these resources despawn or get eaten by wildlife.</li>
          <li><strong style={{ color: "var(--color-accent)" }}>Expand your colony:</strong> Spring&apos;s mild weather makes it ideal for construction projects. Expand your sleeping quarters, build new production buildings, and lay out new crop fields while the weather cooperates.</li>
          <li><strong style={{ color: "var(--color-accent)" }}>Plant Flax and Redcurrant:</strong> These Spring-only crops have specific uses. Flax becomes cloth for clothing, and Redcurrant provides mood-boosting fruits and brewing ingredients. Miss the Spring window and you wait a full year.</li>
        </ul>
      </div>

      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "1rem" }}>
        Spring also brings threats in the form of rain storms and occasional flooding. Build
        roofs over your stockpiles and ensure your food storage areas have proper drainage.
        Settlers working in the rain without adequate roof coverage will suffer mood penalties
        and are more susceptible to illness. Spring is also when wild animals emerge from their
        Winter dormancy — take the opportunity to hunt deer and rabbits for early-game meat and leather.
      </p>

      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
        Research during Spring should focus on Agriculture for improved crop yields and Herbalism
        to unlock medicinal herb farming. These two technologies pay dividends throughout the
        year and should be your first research priorities if you haven&apos;t already unlocked them.
        If you&apos;re starting a new colony in Spring, build a Research Table as your second
        structure after basic shelter — the sooner you start researching, the faster you unlock
        critical technologies.
      </p>

      {/* Summer */}
      <h2 style={{ marginTop: "3rem", marginBottom: "1rem" }}>Summer — Growth and Heat Management</h2>
      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "1rem" }}>
        Summer brings hot temperatures of 18°C to 32°C that accelerate crop growth but introduce
        new challenges through heat waves, crop withering, and increased raider activity. Summer
        is prime growing season — Beet, Barley, Herbs, and Carrot all thrive in the heat, and
        your Spring-planted crops should be reaching harvest maturity by early Summer. However,
        extreme heat waves can cause crops to wither if they aren&apos;t harvested in time, so
        monitor your fields closely.
      </p>

      <div className="card" style={{ borderLeft: "4px solid var(--color-accent)", marginBottom: "1.5rem" }}>
        <h3 style={{ fontSize: "1.15rem", margin: "0 0 0.5rem" }}>Summer Heat Management</h3>
        <ul style={{ color: "var(--color-text-muted)", lineHeight: 1.8, margin: 0, paddingLeft: "1.25rem" }}>
          <li><strong style={{ color: "var(--color-accent)" }}>Provide shade:</strong> Build roofed areas where settlers can work — outdoor workstations under open sky cause heat stress. Covered production areas let settlers work through heat waves.</li>
          <li><strong style={{ color: "var(--color-accent)" }}>Stockpile water:</strong> Dehydration risk increases dramatically in Summer. Ensure water barrels are filled and placed near work areas and defensive positions.</li>
          <li><strong style={{ color: "var(--color-accent)" }}>Harvest aggressively:</strong> Crops mature faster in Summer heat but also wither faster if left unharvested. Set harvest jobs as high priority and assign extra settlers to farming during heat waves.</li>
          <li><strong style={{ color: "var(--color-accent)" }}>Prepare for raiders:</strong> Summer is peak raiding season. Enemy forces are larger and more aggressive. Reinforce walls, train settlers in combat skills, and stockpile weapons and armor before the temperature peaks.</li>
        </ul>
      </div>

      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "1rem" }}>
        Summer is also the best time for construction projects involving stone and heavy labor.
        Settlers work faster in good weather, and the long daylight hours mean more working time
        per day. If you&apos;re expanding your defensive walls or building a Stone Keep, Summer is
        the ideal season — but keep defenders on alert since raiders take advantage of the
        favorable weather too. Position archers on elevated platforms and ensure your trap
        corridors are maintained and fully armed.
      </p>

      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
        Food stockpile management becomes crucial in Summer. Your Spring harvest should fill your
        pantries, but Summer heat accelerates food spoilage for items stored above ground. Build
        underground cold storage cellars now if you haven&apos;t already — the temperature difference
        between above-ground and underground storage can mean the difference between fresh food
        and rotten waste. Prioritize the Advanced Cooking research so you can start preserving
        food into long-lasting stews and preserved meals before Autumn.
      </p>

      {/* Autumn */}
      <h2 style={{ marginTop: "3rem", marginBottom: "1rem" }}>Autumn — Harvest and Preparation</h2>
      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "1rem" }}>
        Autumn is the season of reckoning. Temperatures begin cooling from Summer highs down to
        5-18°C, and the looming threat of Winter creates urgency across every aspect of colony
        management. This is your final opportunity to harvest, stockpile, and fortify before the
        freeze sets in. Every decision in Autumn should be measured by one question: does this
        help my colony survive Winter?
      </p>

      <div className="card" style={{ borderLeft: "4px solid var(--color-warning, #c9903a)", marginBottom: "1.5rem" }}>
        <h3 style={{ fontSize: "1.15rem", margin: "0 0 0.5rem" }}>The Autumn Checklist</h3>
        <ul style={{ color: "var(--color-text-muted)", lineHeight: 1.8, margin: 0, paddingLeft: "1.25rem" }}>
          <li><strong style={{ color: "var(--color-accent)" }}>Harvest everything:</strong> Any crop still in the field when the first frost hits is lost. Harvest Cabbage, Herbs, Hay, Carrots, and Turnips before temperatures drop below freezing. Hay is especially important — it feeds your tamed animals through Winter.</li>
          <li><strong style={{ color: "var(--color-accent)" }}>Plant Winter crops:</strong> Turnips are the only crop that can survive and grow in Winter outdoor temperatures. Plant Turnip fields in early-to-mid Autumn so they have time to mature before the deepest freeze.</li>
          <li><strong style={{ color: "var(--color-accent)" }}>Build underground cellars:</strong> If you haven&apos;t already, dig root cellars at least 3 levels underground. Transfer all harvested food into cold storage. Use double doors or airlocks at cellar entrances to maintain low temperatures.</li>
          <li><strong style={{ color: "var(--color-accent)" }}>Craft Winter clothing:</strong> Use the Tailor Workshop to produce winter coats, wool hats, and warm boots for every settler. Settlers without proper winter gear suffer hypothermia and frostbite — conditions that can be fatal without medical treatment.</li>
        </ul>
      </div>

      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "1rem" }}>
        Autumn is also the season for Mushroom farming. Set up underground farming rooms where
        Mushrooms can grow year-round, independent of surface weather. Mushrooms thrive in
        underground environments and provide a critical food source when surface crops are
        dormant. Combine Mushroom farms with root cellars for a self-contained subterranean
        food system that operates through the harshest Winter.
      </p>

      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "1rem" }}>
        Cold snaps and early frost are the primary Autumn threats. A sudden temperature drop can
        kill unharvested crops overnight. Watch the temperature gauge carefully and don&apos;t gamble
        on getting &quot;one more day&quot; before harvesting — frost doesn&apos;t wait. Keep settlers working
        through the night if necessary to bring in the last crops before temperature readings
        approach zero. Stockpile Hay for livestock — tamed animals that run out of feed in Winter
        will starve or need to be slaughtered for emergency meat.
      </p>

      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
        Raider activity doesn&apos;t stop in Autumn, and the stakes are higher — losing defensive
        settlers to injuries before Winter means reduced labor during the survival season.
        Inspect and repair outer walls, refill trap corridors with fresh spike traps, and
        ensure your field hospital has adequate medicine and beds. A raid that breaches your
        defenses in late Autumn can be catastrophic when you need every settler healthy and
        working to finish Winter preparations.
      </p>

      {/* Winter */}
      <h2 style={{ marginTop: "3rem", marginBottom: "1rem" }}>Winter Survival — The Ultimate Test</h2>
      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "1rem" }}>
        Winter is unforgiving. Temperatures plummet to -15°C with extreme lows possible during
        blizzards, and the world outside your walls becomes a frozen wasteland. Outdoor crops
        stop growing entirely except Turnips. Hypothermia, starvation, and food spoilage dominate
        your concerns. Winter separates the prepared from the dead — colonies that stockpiled food,
        crafted warm clothing, and built proper shelters will emerge stronger in Spring.
        Colonies that didn&apos;t prepare will lose settlers.
      </p>

      <div className="card" style={{ borderLeft: "4px solid var(--color-danger)", marginBottom: "1.5rem" }}>
        <h3 style={{ fontSize: "1.15rem", margin: "0 0 0.5rem" }}>Winter Survival Essentials</h3>
        <ul style={{ color: "var(--color-text-muted)", lineHeight: 1.8, margin: 0, paddingLeft: "1.25rem" }}>
          <li><strong style={{ color: "var(--color-accent)" }}>Winter clothing is mandatory:</strong> Every settler needs a winter coat, warm hat, and warm footwear. Tailor these before Winter starts. Settlers without proper clothing will develop hypothermia within hours of outdoor exposure. Check the clothing tab on each settler to see their cold protection rating.</li>
          <li><strong style={{ color: "var(--color-accent)" }}>Heat sources everywhere:</strong> Place campfires or braziers in sleeping quarters, workrooms, dining areas, and defensive positions. Settlers will gravitate toward heat when cold. A warm settler is a productive settler.</li>
          <li><strong style={{ color: "var(--color-accent)" }}>Underground farms are life-saving:</strong> Mushroom farms in underground cellars produce food through Winter without regard for surface temperatures. This is your only reliable source of fresh food during deep Winter.</li>
          <li><strong style={{ color: "var(--color-accent)" }}>Limit outdoor work:</strong> Prioritize indoor tasks — crafting, cooking, research, brewing. Only send settlers outside for essential tasks like harvesting Turnips or repairing blizzard-damaged structures.</li>
          <li><strong style={{ color: "var(--color-accent)" }}>Monitor food stocks daily:</strong> Food spoilage slows in Winter cold but doesn&apos;t stop completely. Keep a buffer of at least 7 days of food per settler at all times. Preserved meals from the Cooking Station last longest.</li>
        </ul>
      </div>

      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "1rem" }}>
        Food storage during Winter requires careful attention. While cold temperatures slow
        spoilage, they don&apos;t eliminate it. The most effective food storage strategy combines
        three elements: underground root cellars (natural cold insulation), preserved meals
        (significantly extended shelf life from the Cooking Station), and strategic consumption
        (eat perishable foods first, save preserved foods for late Winter when fresh options
        are exhausted). A well-managed food stockpile can see a colony through even the longest
        Winter without a single starvation event.
      </p>

      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "1rem" }}>
        Winter also brings blizzards — severe weather events that drastically reduce visibility,
        increase hypothermia risk, and can damage wooden structures. Settlers caught outdoors
        during a blizzard take rapid cold damage and can die within minutes if they can&apos;t reach
        shelter. When a blizzard warning appears, immediately draft all outdoor settlers and
        move them to heated indoor spaces. Blizzards typically last 1-3 days; use that time for
        indoor crafting and research that might have been neglected during busier seasons.
      </p>

      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "1rem" }}>
        Despite the harsh conditions, Winter has strategic advantages. Raider attacks are less
        frequent because travel is difficult for enemy forces in extreme cold. This makes Winter
        an excellent time for indoor expansion — dig deeper cellars, expand underground farming
        rooms, or add new crafting stations that don&apos;t require outdoor access. Use coal for
        heating if you&apos;ve stockpiled it; coal burns longer and hotter than wood and is more
        efficient for maintaining building temperatures through the long Winter nights.
      </p>

      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
        As Winter draws to a close, start planning your Spring planting strategy. Review your
        seed stockpiles — did you save enough seeds from the Autumn harvest? Do you have Barley
        and Flax seeds for Spring planting? Seeds stored in underground cellars survive Winter
        better than seeds left in above-ground storage. A colony that conserved its seeds and
        planned its Spring fields during the Winter downtime will hit the ground running when
        the snow finally melts and the first green shoots appear.
      </p>

      {/* Seasonal Overview Table */}
      <h2 style={{ marginTop: "3rem", marginBottom: "1rem" }}>Seasonal Overview</h2>
      <div style={{ overflowX: "auto" }}>
        <table>
          <thead>
            <tr>
              <th>Season</th>
              <th>Temperature</th>
              <th>Crops</th>
              <th>Threats</th>
              <th>Key Tips</th>
            </tr>
          </thead>
          <tbody>
            {seasons.map((s) => (
              <tr key={s.name}>
                <td style={{ fontWeight: 600, whiteSpace: "nowrap" }}>{s.name}</td>
                <td style={{ fontSize: "0.9rem" }}>{s.temperature}</td>
                <td style={{ fontSize: "0.9rem" }}>{s.crops}</td>
                <td style={{ fontSize: "0.9rem", color: "var(--color-danger)" }}>{s.threats}</td>
                <td style={{ fontSize: "0.9rem", color: "var(--color-text-muted)" }}>{s.tips}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7 }}>
        Mastering the seasonal rhythm of Going Medieval transforms the game from a desperate
        struggle into a satisfying cycle of growth, harvest, and survival. Plan one season
        ahead at all times — what you do in Spring determines your Summer strength, Summer
        preparation dictates Autumn harvests, and Autumn stockpiling decides whether you
        celebrate or mourn come Winter&apos;s end. Respect the seasons, and your colony will
        flourish through year after year in the medieval world.
      </p>
    </div>
  );
}
