import type { Metadata } from "next";
import { defenseTips } from "@/lib/data";

export const metadata: Metadata = {
  title: "Defense | Going Medieval Guide",
  description:
    "Complete defense and combat guide for Going Medieval. Master raid mechanics, wall design, traps, killboxes, archer towers, weapons and armor, and siege defense strategies to protect your medieval colony.",
};

export default function DefensePage() {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem" }}>
      <h1 style={{ marginBottom: "0.5rem" }}>Defense &amp; Combat Guide</h1>
      <p style={{ color: "var(--color-text-muted)", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: "2rem" }}>
        Protect your colony from raiders, wild animals, and siege attacks. Going Medieval&apos;s
        combat system rewards smart base design, layered defenses, and tactical positioning.
        Learn every defensive strategy from basic walls to advanced killbox engineering.
      </p>

      {/* FAQ */}
      <h2 style={{ marginBottom: "1rem" }}>Quick Answers</h2>
      <div className="faq-snippets">
        <details>
          <summary>When do raids start in Going Medieval?</summary>
          <p>
            Raids are triggered by your colony&apos;s wealth value, which increases as you build 
            structures, craft items, and accumulate resources. Your first raid typically arrives 
            within 5-10 days on standard difficulty. Early raids consist of 2-3 lightly armed 
            raiders with wooden weapons. As your wealth grows, raid size, frequency, and equipment 
            quality increase. By mid-game, you&apos;ll face 6-8 raiders with metal weapons and armor. 
            End-game raids can include 12+ raiders with siege weapons like trebuchets. The key 
            is building defenses before your wealth triggers a raid you can&apos;t handle.
          </p>
        </details>
        <details>
          <summary>What is the best early-game defense strategy?</summary>
          <p>
            Build a single-layer wooden perimeter wall with one door as the only entrance. Raiders 
            will path to the nearest entrance rather than breaking walls (unless they have siege 
            weapons). Place a 2-tile-wide corridor inside the entrance and line it with spike traps. 
            Position 2-3 archers on platforms behind the wall. Early raiders with no armor will die 
            to traps or be picked off by archers before they reach your settlers. Upgrade to stone 
            walls as soon as Stonecutting is researched — wood walls eventually collapse under 
            sustained attack. This basic setup handles the first 3-4 raids reliably.
          </p>
        </details>
        <details>
          <summary>How do I deal with sieges and siege weapons?</summary>
          <p>
            Siege weapons (catapults, trebuchets) appear in mid-to-late game raids. They attack 
            from range and can destroy walls without entering your base. Counter them with your 
            own siege weapons (ballistae, catapults unlocked via Engineering research). Position 
            your siege weapons on elevated platforms for range advantage. Alternatively, send a 
            fast settler to flank and melee-attack the siege crew — siege weapons are defenseless 
            without their operators. Reinforced walls (Masonry research) resist siege damage much 
            better than regular stone. Build a second defensive line behind your outer wall so 
            you can fall back if the outer wall is breached.
          </p>
        </details>
      </div>

      {/* Raid Mechanics */}
      <h2 style={{ marginTop: "3rem", marginBottom: "1rem" }}>Raid Mechanics Explained</h2>
      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
        Understanding how raids work is the first step to building effective defenses. Raids 
        scale with your colony&apos;s wealth, use AI pathfinding to reach your settlers, and 
        become more sophisticated as the game progresses.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2rem" }}>
        <div className="card">
          <h3 style={{ fontSize: "1.05rem", margin: "0 0 0.5rem" }}>Wealth-Based Scaling</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            Your colony has a hidden wealth score calculated from all buildings, items in 
            stockpiles, equipped gear, and research progress. When wealth crosses certain 
            thresholds, the game escalates raids. This means building a massive stone castle 
            before you have weapons and armor is actually dangerous — it triggers harder raids 
            you may not be ready for. Balance expansion with military preparation. A smart 
            strategy is to research defense technologies (Fortifications, Armor Crafting) 
            before significantly increasing your colony&apos;s visible wealth through large 
            construction projects or high-value item crafting.
          </p>
        </div>
        <div className="card">
          <h3 style={{ fontSize: "1.05rem", margin: "0 0 0.5rem" }}>Raid Frequency &amp; Types</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            Early game: 1 raid every 8-15 days, 2-4 raiders with wooden weapons. Mid game: 1 raid 
            every 6-10 days, 4-8 raiders with iron weapons and light armor. Late game: 1 raid 
            every 4-7 days, 8-15 raiders with steel weapons, plate armor, and siege equipment. 
            Raid types include standard attacks (melee + ranged raiders), siege attacks (with 
            catapults or trebuchets), and sapper raids (raiders who tunnel under walls). Some 
            biomes have unique raid types — Mountain biome gets more heavily armored raiders, 
            while Marsh biome gets more ranged attackers.
          </p>
        </div>
        <div className="card">
          <h3 style={{ fontSize: "1.05rem", margin: "0 0 0.5rem" }}>Enemy Pathfinding</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            Raiders use pathfinding to reach your settlers. They prefer open paths and doors over 
            breaking walls. A wall with an open door funnels all enemies through that entrance, 
            letting you concentrate defenses at a single point. This is the foundation of trap 
            corridors and killbox designs. Raiders will break walls if no open path exists, but 
            only after searching extensively for an entrance. A maze-like entrance corridor 
            significantly delays enemies, giving your archers more time to fire. Raiders ignore 
            walls that are more than 2 tiles away from their path — build thick walls (2+ tiles) 
            at your chokepoint.
          </p>
        </div>
      </div>

      {/* Defense Strategies Table */}
      <h2 style={{ marginTop: "3rem", marginBottom: "1rem" }}>Core Defense Strategies — All {defenseTips.length} Tips</h2>
      <div style={{ overflowX: "auto", marginBottom: "2rem" }}>
        <table>
          <thead>
            <tr>
              <th>Strategy</th>
              <th>Category</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {defenseTips.map((tip) => (
              <tr key={tip.title}>
                <td style={{ fontWeight: 600, whiteSpace: "nowrap" }}>{tip.title}</td>
                <td style={{ whiteSpace: "nowrap" }}>
                  <span style={{
                    padding: "0.2rem 0.6rem",
                    borderRadius: "0.25rem",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    background: tip.category === "Advanced" ? "rgba(196, 75, 60, 0.2)" :
                      tip.category === "Tactics" ? "rgba(201, 144, 58, 0.2)" :
                      "rgba(107, 142, 78, 0.2)",
                    color: tip.category === "Advanced" ? "var(--color-danger)" :
                      tip.category === "Tactics" ? "var(--color-accent)" :
                      "var(--color-success)",
                  }}>{tip.category}</span>
                </td>
                <td style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", lineHeight: 1.5 }}>{tip.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Wall Design */}
      <h2 style={{ marginTop: "3rem", marginBottom: "1rem" }}>Wall Design Principles</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2rem" }}>
        <div className="card">
          <h3 style={{ fontSize: "1.05rem", margin: "0 0 0.5rem" }}>Single vs Double Layer Walls</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            Single-layer walls: Cheap and fast to build, enough for early game. Raiders with 
            wooden weapons take time to break through, but iron weapons breach single walls 
            quickly. Double-layer walls: The gold standard for mid-game defense. Two parallel 
            stone walls with a 2-3 tile gap between them create a protected walkway where 
            your defenders can move and fire from cover. If the outer wall is breached, the 
            inner wall serves as a fallback position. The gap between walls can be trapped 
            to punish enemies who breach the outer layer. Triple-layer walls are overkill 
            and waste resources unless you&apos;re on the highest difficulty.
          </p>
        </div>
        <div className="card">
          <h3 style={{ fontSize: "1.05rem", margin: "0 0 0.5rem" }}>Entrance Design</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            Your entrance is the most important defensive feature. Keep it narrow (1-2 tiles wide) 
            and create a zigzag corridor inside. The zigzag pattern forces enemies to turn 
            corners, slowing their advance and preventing them from shooting through the entrance. 
            Each turn in the corridor is a trap placement opportunity. Build a fortified gate 
            (Fortifications research) that takes longer to destroy than a standard door. Place 
            archer positions on elevated platforms overlooking the entrance corridor — enemies 
            funneled through a narrow passage are easy targets for ranged fire. Add a roof over 
            the corridor entrance so enemies can&apos;t shoot your defenders from outside.
          </p>
        </div>
        <div className="card">
          <h3 style={{ fontSize: "1.05rem", margin: "0 0 0.5rem" }}>Corner Towers</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            Towers at wall corners provide flanking fire along two wall sections simultaneously. 
            A tower at each corner of a rectangular base covers all four approach directions. 
            Build towers 2-3 levels high with merlons (Fortifications research) for cover. 
            Each tower should hold 2 archers minimum. Towers also serve as early warning — 
            settlers in towers spot approaching enemies sooner, giving you time to position 
            defenders. Connect towers with roofed wall walkways so defenders can reposition 
            without being exposed to enemy fire.
          </p>
        </div>
      </div>

      {/* Traps and Killboxes */}
      <h2 style={{ marginTop: "3rem", marginBottom: "1rem" }}>Traps, Killboxes &amp; Advanced Defense</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2rem" }}>
        <div className="card">
          <h3 style={{ fontSize: "1.05rem", margin: "0 0 0.5rem" }}>Trap Types</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            Spike traps: Basic damage, cheap (wood + metal scrap). Place in entrance corridors. 
            Deadfall traps: Higher damage, triggered when enemies step under them (place on 
            ceilings of corridors). Mechanical traps (Engineering research): Advanced, re-armable 
            traps that deal heavy damage. Traps are most effective in confined spaces — a 1-tile 
            wide corridor forces every enemy to step on every trap. Traps deal damage based on 
            the crafting skill of the settler who built them, so have your best crafter construct 
            your traps. Re-arm traps after each raid so they&apos;re ready for the next one.
          </p>
        </div>
        <div className="card">
          <h3 style={{ fontSize: "1.05rem", margin: "0 0 0.5rem" }}>Killbox Design</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            A killbox is an open area behind your entrance where enemies emerge from the corridor 
            into a killing field surrounded by archer positions. Design elements: The corridor 
            entrance opens into a wide room (at least 8x8 tiles). Archer platforms ring the room 
            on all sides at elevated heights (2-3 levels up). Stone pillars in the center provide 
            cover for your melee fighters if enemies push in. Clear lines of sight from every 
            archer position to the entrance point. Place a fallback door at the back of the 
            killbox in case it&apos;s overrun. A well-designed killbox can defeat 10+ raiders 
            with minimal settler casualties.
          </p>
        </div>
        <div className="card">
          <h3 style={{ fontSize: "1.05rem", margin: "0 0 0.5rem" }}>Underground Safe Room</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            An underground bunker serves as a last-resort retreat. Dig 3+ levels down and build 
            a room with beds, food stockpile, medicine, and spare weapons. Access it via a long 
            1-tile-wide corridor that you can trap. If your defenses are overrun, order all 
            settlers to retreat underground. Raiders rarely follow into trapped underground 
            corridors. The safe room buys you time to heal, re-arm, and either wait out the 
            raid or launch a counter-attack. It&apos;s also useful if a fire sweeps through your 
            surface structures — underground rooms are fireproof.
          </p>
        </div>
      </div>

      {/* Weapons and Armor */}
      <h2 style={{ marginTop: "3rem", marginBottom: "1rem" }}>Weapons &amp; Armor Overview</h2>
      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
        Equipping your settlers properly is as important as wall placement. A settlers with 
        good gear can hold a chokepoint against multiple inferior enemies.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2rem" }}>
        <div className="card">
          <h3 style={{ fontSize: "1.05rem", margin: "0 0 0.5rem" }}>Melee Weapons</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            Swords (balanced damage and speed), Axes (higher damage, slower), Maces (armor-piercing 
            damage good against plate armor), and Spears (longer reach, can attack from behind 
            allies). Iron weapons are roughly 2x damage of wooden equivalents. Steel weapons 
            (end-game) deal 3x. Equip your melee fighters with the best available — a sword 
            crafted by a smith with 15+ skill can have &quot;Excellent&quot; quality for bonus damage. 
            Melee settlers need high Melee skill to parry and block effectively.
          </p>
        </div>
        <div className="card">
          <h3 style={{ fontSize: "1.05rem", margin: "0 0 0.5rem" }}>Ranged Weapons</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            Shortbow (basic, low damage), Longbow (increased range and damage), Crossbow (higher 
            damage, slower fire rate, armor-piercing), Ballista (siege weapon, massive damage 
            but slow). Archers should always have height advantage — each level of elevation 
            above the target provides a damage and accuracy bonus. Marksman skill determines 
            accuracy — a low-skill archer misses frequently. Equip archers with the best bows 
            you can craft and station them in positions where they have clear sightlines.
          </p>
        </div>
        <div className="card">
          <h3 style={{ fontSize: "1.05rem", margin: "0 0 0.5rem" }}>Armor Types</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            Leather armor (Tailoring): Basic protection, light, doesn&apos;t slow movement. Good for 
            archers. Chainmail (Smithing): Medium protection, heavier. Good all-around armor. 
            Plate armor (Armor Crafting): Maximum protection, heavy, slows movement. Best for 
            frontline melee fighters. Helmets protect against headshots which deal extra damage. 
            Shields block incoming ranged attacks and provide a chance to deflect melee strikes. 
            Armor quality depends on crafter skill — &quot;Masterwork&quot; plate armor can make a settler 
            nearly immune to basic wooden weapons.
          </p>
        </div>
      </div>

      {/* Combat Tactics */}
      <h2 style={{ marginTop: "3rem", marginBottom: "1rem" }}>Combat Tactics &amp; Positioning</h2>
      <div className="card" style={{ marginBottom: "2rem" }}>
        <ul style={{ color: "var(--color-text-muted)", lineHeight: 2, margin: 0, paddingLeft: "1.25rem" }}>
          <li><strong style={{ color: "var(--color-text)" }}>Melee front, ranged back.</strong> Place melee fighters at chokepoints and archers behind them on elevated positions. This creates a killing field where enemies must fight through your melee line while under constant ranged fire.</li>
          <li><strong style={{ color: "var(--color-text)" }}>Focus fire.</strong> Have all archers target the same enemy. Eliminating one raider reduces incoming damage more than wounding several.</li>
          <li><strong style={{ color: "var(--color-text)" }}>Flanking.</strong> If enemies bunch up at your entrance, send a melee settler through a side door to attack from behind. Flanked enemies take extra damage and have reduced defense.</li>
          <li><strong style={{ color: "var(--color-text)" }}>Retreat and heal.</strong> A wounded settler fights poorly and can die in one hit. Pull them back, have your medic heal them, then send them back. Rotate wounded fighters to keep your defensive line fresh.</li>
          <li><strong style={{ color: "var(--color-text)" }}>Night attacks.</strong> Raiders have reduced vision at night. If you&apos;re outnumbered, wait until dark and use ranged attacks from maximum distance. Enemies struggle to find your settlers in darkness.</li>
          <li><strong style={{ color: "var(--color-text)" }}>Weather advantage.</strong> Rain and fog reduce visibility and ranged accuracy. Use melee-focused defense during bad weather. Snow slows enemy movement, giving your archers more time to fire.</li>
        </ul>
      </div>

      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7 }}>
        Defense in Going Medieval is a continuous process. Each raid teaches you something new — 
        a weak point in your wall, a blind spot in your archer coverage, a trap placement that 
        could be better. Iterate on your defenses after every fight. Reinforce where enemies 
        broke through. Add traps where they bunched up. Expand your killbox as raid sizes grow. 
        A colony that learns from each attack becomes an unbreakable fortress by end-game.
      </p>
    </div>
  );
}
