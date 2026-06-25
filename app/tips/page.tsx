import type { Metadata } from "next";
import { defenseTips } from "@/lib/data";

export const metadata: Metadata = {
  title: "Advanced Tips and Tricks | Going Medieval Guide",
  description:
    "Advanced tips and tricks for Going Medieval. Master building efficiency, food management, combat tactics, settler management, winter survival, and underground mining with 15+ expert strategies for your colony.",
};

export default function TipsPage() {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem" }}>
      <h1 style={{ marginBottom: "0.5rem" }}>Advanced Tips and Tricks</h1>
      <p style={{ color: "var(--color-text-muted)", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: "2rem" }}>
        Beyond the basics, Going Medieval hides layers of depth that experienced players exploit
        to build hyper-efficient colonies that laugh at raiders and thrive through the harshest
        winters. These advanced tips come from hundreds of hours of colony management and cover
        every system in the game.
      </p>

      {/* FAQ */}
      <h2 style={{ marginBottom: "1rem" }}>Quick Answers</h2>
      <div className="faq-snippets">
        <details>
          <summary>What is the single most important tip for Going Medieval?</summary>
          <p>
            Always plan one season ahead. Whatever you&apos;re doing right now, ask yourself: what does
            my colony need next season? If it&apos;s Summer, you should be building Winter clothing and
            underground cellars. If it&apos;s Autumn, you should have already stockpiled food and
            prepared heating. Reacting to seasonal problems after they arrive is how colonies die.
            Proactive planning is how colonies thrive. This mindset alone will improve your
            survival rate more than any specific tip or strategy.
          </p>
        </details>
        <details>
          <summary>How do I make my settlers work faster?</summary>
          <p>
            Settler work speed scales with the relevant skill level and is boosted by: high room
            quality (build proper floors and keep rooms clean), adequate lighting (torches or
            braziers in workrooms), comfortable temperature (16-25°C is optimal), and good mood
            (ensure recreation time, quality meals, and decorated spaces). A settler working in
            a high-quality room with 15+ relevant skill will produce 3-4 times faster than a
            settler with 1 skill in a dirty, dark room. Invest in your work environments — the
            productivity returns compound over time.
          </p>
        </details>
        <details>
          <summary>What&apos;s the most overlooked game mechanic?</summary>
          <p>
            Room quality is the most overlooked and powerful mechanic in Going Medieval. A room&apos;s
            quality rating (determined by floor type, wall material, cleanliness, furniture,
            temperature, and space) directly affects research speed in Libraries, mood bonuses
            in Great Halls, healing speed in hospitals, and settler mood in bedrooms. Players
            who invest in upgrading floors from dirt to wood to stone and adding decorations
            see exponential improvements in every aspect of colony efficiency. Don&apos;t underestimate
            the power of a well-furnished room.
          </p>
        </details>
      </div>

      {/* Building Efficiency */}
      <h2 style={{ marginTop: "3rem", marginBottom: "1rem" }}>Building Efficiency Tips</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2rem" }}>
        <div className="card">
          <h3 style={{ fontSize: "1.1rem", margin: "0 0 0.5rem" }}>1. Stockpile Placement Optimization</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            Place stockpiles for raw materials directly adjacent to the production buildings that
            consume them. Put a stone stockpile next to your Stonecutter, a wood stockpile next
            to your Carpenter Bench, and a food stockpile next to your Cooking Station. Every
            tile a settler walks between stockpile and workstation is wasted labor time.
            Well-placed stockpiles can reduce production time by 30-40% through reduced hauling.
          </p>
        </div>
        <div className="card">
          <h3 style={{ fontSize: "1.1rem", margin: "0 0 0.5rem" }}>2. Staggered Door Placement</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            Don&apos;t place doors in a straight line through your colony — settlers walking through
            multiple doors slow down at each threshold. Use offset door placements or create
            corridors that minimize the number of doors settlers must pass through on common
            paths (e.g., bedroom to kitchen, kitchen to Great Hall, stockpile to workshop).
          </p>
        </div>
        <div className="card">
          <h3 style={{ fontSize: "1.1rem", margin: "0 0 0.5rem" }}>3. Vertical Stacking for Efficiency</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            Build vertically, not horizontally. A multi-story building has shorter walking
            distances than a sprawling single-story compound. Stack bedrooms above production
            rooms, and production rooms above stockpiles. Use staircases strategically —
            settlers climb stairs at nearly the same speed as walking on flat ground, making
            vertical layouts surprisingly efficient compared to walking long horizontal distances.
          </p>
        </div>
      </div>

      {/* Food Management */}
      <h2 style={{ marginTop: "3rem", marginBottom: "1rem" }}>Food Management Tips</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2rem" }}>
        <div className="card">
          <h3 style={{ fontSize: "1.1rem", margin: "0 0 0.5rem" }}>4. Staggered Planting Schedules</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            Never plant all your crops on the same day. Divide your fields into 3-4 sections and
            plant each section 2-3 days apart. This creates a continuous harvest cycle — crops
            mature at different times, preventing the feast-or-famine cycle where all your food
            spoils at once or you have nothing to harvest for a week. Staggered planting is
            particularly important for fast-growing crops like Cabbage and Carrot.
          </p>
        </div>
        <div className="card">
          <h3 style={{ fontSize: "1.1rem", margin: "0 0 0.5rem" }}>5. Food Rotation Strategy</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            Eat perishable foods first and save preserved foods for emergencies or late Winter.
            Set up separate stockpiles with different priorities: a &quot;eat first&quot; stockpile near
            the kitchen for fresh food nearing spoilage, and a &quot;long-term storage&quot; stockpile in
            the deep cellar for preserved meals and non-perishable items. Monitor spoilage timers
            and move items between stockpiles as needed. A settler eating a nearly-spoiled meal
            still gets full nutrition — use food before it rots.
          </p>
        </div>
        <div className="card">
          <h3 style={{ fontSize: "1.1rem", margin: "0 0 0.5rem" }}>6. Berry Bush Conservation</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            Wild berry bushes on your map are a renewable food source — don&apos;t destroy them when
            clearing land for construction. Berries regrow every season and provide free food
            with zero labor investment. Mark berry bush clusters on your map and protect them
            from construction projects. In early-game, berry gathering can supplement your food
            supply while your first crops are growing, reducing reliance on hunting.
          </p>
        </div>
      </div>

      {/* Combat Tactics */}
      <h2 style={{ marginTop: "3rem", marginBottom: "1rem" }}>Combat Tactics</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2rem" }}>
        {defenseTips.map((tip) => (
          <div className="card" key={tip.title}>
            <h3 style={{ fontSize: "1.1rem", margin: "0 0 0.5rem" }}>
              {tip.title} <span style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", fontWeight: 400 }}>— {tip.category}</span>
            </h3>
            <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>{tip.description}</p>
          </div>
        ))}
      </div>

      {/* Settler Management */}
      <h2 style={{ marginTop: "3rem", marginBottom: "1rem" }}>Settler Management Tips</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2rem" }}>
        <div className="card">
          <h3 style={{ fontSize: "1.1rem", margin: "0 0 0.5rem" }}>7. Specialize, Don&apos;t Generalize</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            Assign each settler 2-3 specialized tasks based on their highest skills rather than
            having everyone do everything. A settler with 10 Intellectual and 5 Cooking should
            research full-time and cook only when research is unavailable. A settler with 8 Mining
            and 6 Construction should mine and build, never farm. Skill levels compound — a
            specialized settler gains skill faster, and higher skill means dramatically better
            output. Spreading settlers thin across 5+ tasks wastes their potential.
          </p>
        </div>
        <div className="card">
          <h3 style={{ fontSize: "1.1rem", margin: "0 0 0.5rem" }}>8. Recreation Scheduling</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            Schedule recreation time for all settlers at the same time each day. When settlers
            socialize together during recreation, they build relationships and gain mood bonuses
            from social interaction. Build your Great Hall with multiple recreation items
            (tables, chairs, decorations) so settlers can socialize while recreating. A daily
            1-hour recreation block in the evening after work hours keeps settler mood high
            and prevents mental breaks during critical operations.
          </p>
        </div>
        <div className="card">
          <h3 style={{ fontSize: "1.1rem", margin: "0 0 0.5rem" }}>9. New Settler Priorities</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            When a new settler joins your colony, immediately review their skills and assign work
            priorities before they start wandering around looking for work. New settlers default
            to all tasks enabled, which means they&apos;ll waste time doing jobs your specialists
            should handle. Pause the game as soon as the new settler notification appears, check
            their stats, and assign them to the 2-3 tasks that best match their skill profile.
            Also check their clothing — new settlers may arrive without winter gear, which is
            deadly if they joined in Autumn.
          </p>
        </div>
      </div>

      {/* Winter Survival */}
      <h2 style={{ marginTop: "3rem", marginBottom: "1rem" }}>Winter Survival Tips</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2rem" }}>
        <div className="card">
          <h3 style={{ fontSize: "1.1rem", margin: "0 0 0.5rem" }}>10. Pre-Winter Stockpile Math</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            Calculate your Winter food needs before Autumn ends. Each settler eats approximately
            2 meals per day, and Winter lasts 12 days by default. A colony of 5 settlers needs
            roughly 120 meals to survive Winter without starvation. Add a 50% safety buffer for
            spoilage, raider disruptions, and unexpected events. If you don&apos;t have enough food
            stockpiled by mid-Autumn, slaughter excess livestock for emergency meat and prioritize
            harvesting every remaining crop regardless of maturity.
          </p>
        </div>
        <div className="card">
          <h3 style={{ fontSize: "1.1rem", margin: "0 0 0.5rem" }}>11. Dual-Heating Systems</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            Never rely on a single heat source for your colony during Winter. Place campfires
            or braziers in multiple rooms and ensure at least two separate fuel stockpiles. If
            a blizzard knocks out one heating system or a raider destroys a campfire, settlers
            can retreat to a heated backup room. The most dangerous Winter scenario is a blizzard
            hitting while your only heat source is extinguished — hypothermia can kill settlers
            in minutes with no backup heating available.
          </p>
        </div>
        <div className="card">
          <h3 style={{ fontSize: "1.1rem", margin: "0 0 0.5rem" }}>12. Hibernation Mode</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            If your Winter food supply is critically low, switch your colony to &quot;hibernation
            mode.&quot; Reduce all work priorities to essential tasks only — cooking, heating fuel
            gathering, and defense. Cancel construction projects, stop research, and halt
            crafting that doesn&apos;t directly contribute to survival. Settlers in hibernation mode
            burn fewer calories because they do less work. Focus purely on staying alive until
            Spring. A colony that survives Winter with zero food remaining is still a successful
            colony — you can rebuild food stocks in Spring.
          </p>
        </div>
      </div>

      {/* Underground Mining */}
      <h2 style={{ marginTop: "3rem", marginBottom: "1rem" }}>Underground Mining Tips</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2rem" }}>
        <div className="card">
          <h3 style={{ fontSize: "1.1rem", margin: "0 0 0.5rem" }}>13. Spiral Mining Method</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            When mining deep underground, use a spiral staircase design rather than vertical
            shafts. A 2x2 spiral staircase (digging down in a rotating pattern) provides the
            shortest walking distance between depths while maintaining structural stability at
            every level. Vertical shafts require ladders (which don&apos;t exist in Going Medieval)
            and create long detours. A well-designed spiral mine lets miners descend from surface
            to depth 10 in seconds, dramatically increasing mining efficiency.
          </p>
        </div>
        <div className="card">
          <h3 style={{ fontSize: "1.1rem", margin: "0 0 0.5rem" }}>14. Support Pillar Grid</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            When mining large underground rooms, leave a support pillar (a single unmined tile)
            every 4 tiles in both directions. This creates a grid pattern that prevents ceiling
            collapse while still giving you plenty of open space for farming and storage. You
            can later replace natural support pillars with crafted stone pillars (from the
            Stonecutter) if you want a more aesthetic look or need to free up that specific tile.
          </p>
        </div>
        <div className="card">
          <h3 style={{ fontSize: "1.1rem", margin: "0 0 0.5rem" }}>15. Resource Vein Mapping</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            Iron and coal veins have visual indicators on the rock face before you start mining
            — iron shows as reddish-brown discoloration and coal as black patches. Scout for
            veins by digging 1-tile-wide exploratory tunnels at each depth level horizontally.
            When you spot a vein, expand to 2 tiles wide and follow it until it ends. Veins are
            typically 5-15 tiles long and 1-3 tiles wide. Map your discovered veins mentally or
            with screen markers so you can return to partially mined veins later without
            re-exploring the entire mine level.
          </p>
        </div>
      </div>

      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7 }}>
        Going Medieval rewards knowledge and preparation above all else. These advanced tips
        represent the accumulated wisdom of experienced colony managers — but the best tip of
        all is to experiment and find what works for your playstyle. Every failed colony teaches
        you something new. Every raid that breaches your walls shows you where your defenses
        need improvement. Every Winter that kills settlers reveals gaps in your preparation.
        Learn from failure, adapt your strategies, and return stronger. That&apos;s the medieval way.
      </p>
    </div>
  );
}
