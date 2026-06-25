import type { Metadata } from "next";
import { buildings } from "@/lib/data";

export const metadata: Metadata = {
  title: "Buildings | Going Medieval Guide",
  description:
    "Complete guide to all 18 buildings in Going Medieval. Learn construction tiers (wood, stone, reinforced), structural stability mechanics, support beams, and optimal building strategies for your medieval colony.",
};

const buildingCategories = ["Structures", "Floors", "Roofs", "Doors", "Production", "Recreation", "Defense"];

export default function BuildingsPage() {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem" }}>
      <h1 style={{ marginBottom: "0.5rem" }}>Buildings Guide</h1>
      <p style={{ color: "var(--color-text-muted)", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: "2rem" }}>
        Master the construction system in Going Medieval. From your first wooden hut to
        a mighty stone castle, learn every building type, material tier, and the structural
        mechanics that determine whether your walls stand or collapse.
      </p>

      {/* FAQ */}
      <h2 style={{ marginBottom: "1rem" }}>Quick Answers</h2>
      <div className="faq-snippets">
        <details>
          <summary>What&apos;s the best building material in Going Medieval?</summary>
          <p>
            Stone is the best all-around material for defensive structures — it&apos;s fireproof, has
            high hit points, and resists siege damage. Wood is cheap and fast to build but burns
            easily and has low durability. Reinforced walls (unlocked via Masonry research) are the
            ultimate defensive upgrade, offering the highest structural integrity. Use wood for
            interior walls and furniture, stone for outer walls and defensive structures, and
            reinforced walls at critical chokepoints and your keep.
          </p>
        </details>
        <details>
          <summary>How do support beams and structural stability work?</summary>
          <p>
            Every tile has a stability value that decreases as you build higher or span wider gaps.
            Walls provide vertical support — each wall tile supports up to 4 tiles of roof or floor
            directly above it. Support beams can extend this range horizontally. Without proper
            support, structures will collapse. For multi-story buildings, stack walls vertically
            and add support beams every 4-5 tiles. Underground rooms need support pillars every
            4 tiles to prevent ceiling collapse.
          </p>
        </details>
        <details>
          <summary>What should I build first in Going Medieval?</summary>
          <p>
            Build a 5x5 wooden shelter with a thatched roof, a wooden door, a campfire, and
            sleeping spots (upgrade to beds later) on Day 1. This gives your settlers protection
            from weather, a place to cook, and a rest area. Next, build a Research Table, then
            a Butcher Table for processing hunted animals. Transition to stone walls and proper
            floors once you unlock Stonecutting. Your first construction priority is always
            shelter and food preparation, not fortifications.
          </p>
        </details>
      </div>

      {/* Building Tiers */}
      <h2 style={{ marginTop: "3rem", marginBottom: "1rem" }}>Building Material Tiers</h2>
      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
        Going Medieval features three distinct building material tiers that determine 
        structural integrity, fire resistance, and combat durability. Upgrading your walls 
        and floors is one of the most impactful progression paths in the game.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2rem" }}>
        <div className="card" style={{ borderLeft: "4px solid var(--color-success)" }}>
          <h3 style={{ margin: "0 0 0.5rem", fontSize: "1.15rem" }}>
            Tier 1: Wood <span style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", fontWeight: 400 }}>— Default</span>
          </h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            Wood is your starting material. It&apos;s cheap (5 wood per wall), fast to build, and 
            available everywhere. However, wood walls have low hit points and are highly flammable. 
            Enemy raiders can break through wooden walls quickly, and fire spreads through wood 
            structures. Use wood for your first shelter, then upgrade to stone as soon as 
            Stonecutting is researched. Wood floors provide modest movement bonuses but should 
            be replaced with stone floors for better room quality.
          </p>
        </div>
        <div className="card" style={{ borderLeft: "4px solid var(--color-accent)" }}>
          <h3 style={{ margin: "0 0 0.5rem", fontSize: "1.15rem" }}>
            Tier 2: Stone <span style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", fontWeight: 400 }}>— Requires Stonecutting</span>
          </h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            Stone walls are the workhorse of Going Medieval construction. They&apos;re completely 
            fireproof, have substantially more hit points than wood, and resist siege weapon damage. 
            Stone blocks require mining stone and crafting at a Stonecutter workshop, adding a 
            production step. Build all external walls, defensive structures, and critical buildings 
            from stone. The investment in mining and crafting is repaid many times over when raiders 
            fail to breach your walls. Stone floors also improve room quality and movement speed.
          </p>
        </div>
        <div className="card" style={{ borderLeft: "4px solid var(--color-danger)" }}>
          <h3 style={{ margin: "0 0 0.5rem", fontSize: "1.15rem" }}>
            Tier 3: Reinforced <span style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", fontWeight: 400 }}>— Requires Masonry</span>
          </h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            Reinforced walls represent the pinnacle of defensive construction. Unlocked through the 
            Masonry research (Tier 2), reinforced walls add metal reinforcement to stone construction 
            for maximum hit points and structural integrity. They&apos;re expensive — requiring both 
            stone blocks and metal scrap — so reserve them for critical defensive positions like 
            your keep, main gate walls, and the walls facing the expected enemy approach direction. 
            A fully reinforced keep is nearly impenetrable even against end-game trebuchet attacks.
          </p>
        </div>
      </div>

      {/* Full Building Table */}
      <h2 style={{ marginTop: "3rem", marginBottom: "1rem" }}>Complete Building List</h2>
      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
        There are {buildings.length} building types across {buildingCategories.length} categories. 
        Each building serves a specific purpose in your colony&apos;s development — from basic shelter 
        to advanced production and recreation.
      </p>

      <div style={{ overflowX: "auto" }}>
        <table>
          <thead>
            <tr>
              <th>Building</th>
              <th>Category</th>
              <th>Materials</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {buildings.map((b) => (
              <tr key={b.name}>
                <td style={{ fontWeight: 600, whiteSpace: "nowrap" }}>{b.name}</td>
                <td style={{ whiteSpace: "nowrap" }}>{b.category}</td>
                <td style={{ fontSize: "0.9rem", whiteSpace: "nowrap" }}>{b.materials}</td>
                <td style={{ fontSize: "0.9rem", color: "var(--color-text-muted)" }}>{b.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Structural Stability */}
      <h2 style={{ marginTop: "3rem", marginBottom: "1rem" }}>Structural Stability Mechanics</h2>
      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "1rem" }}>
        Structural stability is the hidden mechanic that determines whether your buildings 
        stand or collapse. Understanding stability lets you build taller castles, wider 
        rooms, and deeper underground networks without risking catastrophic failure.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2rem" }}>
        <div>
          <h3 style={{ fontSize: "1.15rem", margin: "0 0 0.5rem" }}>Vertical Support</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            Every wall tile provides vertical support that extends up to 4 tiles above it. 
            This means a ground-floor wall supports up to 3 additional floors (4 total levels). 
            To build taller than 4 levels, you need to widen your base — outer walls at lower 
            levels provide support to upper levels. The maximum build height is 16 levels 
            above ground, achievable by stacking support structures in a pyramid shape.
          </p>
        </div>
        <div>
          <h3 style={{ fontSize: "1.15rem", margin: "0 0 0.5rem" }}>Horizontal Spans</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            Floors and roofs can span up to 4 tiles between support points (walls or beams). 
            To create a 5-tile or wider room, you need intermediate support pillars or support 
            beams. Support beams are crafted from wood and can extend support range by 1-2 
            tiles depending on placement. A good rule of thumb: place a support pillar or 
            beam every 4 tiles when building large interior spaces.
          </p>
        </div>
        <div>
          <h3 style={{ fontSize: "1.15rem", margin: "0 0 0.5rem" }}>Underground Stability</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            Underground rooms follow the same rules but reversed — instead of supporting 
            floors above, you need to prevent ceiling collapse. Any underground room wider 
            than 4 tiles in any direction needs support pillars. Without pillars, the ceiling 
            collapses, destroying everything below and potentially damaging structures above. 
            Plan underground layouts with support pillars spaced every 4 tiles for safe mining 
            and room construction.
          </p>
        </div>
        <div className="card">
          <h3 style={{ fontSize: "1.15rem", margin: "0 0 0.5rem" }}>Stability Tips</h3>
          <ul style={{ color: "var(--color-text-muted)", lineHeight: 1.8, margin: 0, paddingLeft: "1.25rem" }}>
            <li>Check tile stability by hovering over it — a red indicator means collapse risk</li>
            <li>Build walls directly above each other for maximum vertical stability</li>
            <li>Use stone pillars as decorative support beams in Great Halls and large rooms</li>
            <li>Add a roof over wall walkways to protect archers during combat</li>
            <li>Underground structures are immune to siege damage but require careful support planning</li>
            <li>Remove supporting walls from bottom to top — never demolish the ground floor of a multi-story structure first</li>
          </ul>
        </div>
      </div>

      {/* Room Quality */}
      <h2 style={{ marginTop: "3rem", marginBottom: "1rem" }}>Room Quality System</h2>
      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
        Room quality affects settler mood, research speed, and building functionality. 
        Quality is determined by floor type, wall material, room size, furniture, 
        cleanliness, and temperature. A Library needs high-quality surroundings to 
        provide its full research bonus. A Great Hall requires tables, chairs, decorations, 
        and sufficient space. Improved floors (stone over wood, fine floors over stone) 
        and decorated walls significantly boost room quality. Keep rooms clean by 
        assigning settlers to cleaning tasks and building floors that prevent dirt accumulation.
      </p>

      {/* Building Priority */}
      <h2 style={{ marginTop: "3rem", marginBottom: "1rem" }}>Building Priority Order</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
        <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
          <span style={{ background: "var(--color-accent)", color: "var(--color-bg)", padding: "0.25rem 0.75rem", borderRadius: "0.25rem", fontWeight: 700, flexShrink: 0, fontSize: "0.9rem" }}>Day 1</span>
          <p style={{ color: "var(--color-text-muted)", margin: 0, lineHeight: 1.6 }}>
            Wooden Wall, Thatched Roof, Wooden Door, Campfire, Wooden Floor — basic shelter and cooking.
          </p>
        </div>
        <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
          <span style={{ background: "var(--color-accent)", color: "var(--color-bg)", padding: "0.25rem 0.75rem", borderRadius: "0.25rem", fontWeight: 700, flexShrink: 0, fontSize: "0.9rem" }}>Week 1</span>
          <p style={{ color: "var(--color-text-muted)", margin: 0, lineHeight: 1.6 }}>
            Research Table, Butcher Table, Carpenter Bench — production and progression begins.
          </p>
        </div>
        <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
          <span style={{ background: "var(--color-accent)", color: "var(--color-bg)", padding: "0.25rem 0.75rem", borderRadius: "0.25rem", fontWeight: 700, flexShrink: 0, fontSize: "0.9rem" }}>Month 1</span>
          <p style={{ color: "var(--color-text-muted)", margin: 0, lineHeight: 1.6 }}>
            Stone Wall, Stone Floor, Tailor Workshop, Cooking Station — upgrade from wood to stone, start crafting.
          </p>
        </div>
        <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
          <span style={{ background: "var(--color-accent)", color: "var(--color-bg)", padding: "0.25rem 0.75rem", borderRadius: "0.25rem", fontWeight: 700, flexShrink: 0, fontSize: "0.9rem" }}>Mid-Game</span>
          <p style={{ color: "var(--color-text-muted)", margin: 0, lineHeight: 1.6 }}>
            Smithy, Armorer, Brewing Station, Library, Great Hall — advanced production, recreation, morale.
          </p>
        </div>
        <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
          <span style={{ background: "var(--color-accent)", color: "var(--color-bg)", padding: "0.25rem 0.75rem", borderRadius: "0.25rem", fontWeight: 700, flexShrink: 0, fontSize: "0.9rem" }}>End-Game</span>
          <p style={{ color: "var(--color-text-muted)", margin: 0, lineHeight: 1.6 }}>
            Stone Keep, Alchemy Lab, Reinforced Walls — fortifications and specialized production.
          </p>
        </div>
      </div>

      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7 }}>
        Going Medieval rewards thoughtful construction planning. A well-designed colony 
        with proper material choices, adequate support structures, and optimized room 
        layouts will weather raids, survive harsh seasons, and keep settlers happy. 
        Always plan your building layout before placing walls — rebuilding is expensive 
        in both materials and time. Leave room for expansion, keep production buildings 
        near stockpiles, and position defensive structures where they provide the best 
        field of fire against approaching enemies.
      </p>
    </div>
  );
}
