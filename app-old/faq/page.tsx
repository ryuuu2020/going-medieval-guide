import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Going Medieval Guide",
  description:
    "Frequently asked questions about Going Medieval. Get answers about game basics, difficulty settings, beginner tips, best biome and settlers, winter survival, raid defense, 1.0 features, game length, and mod support.",
};

export default function FaqPage() {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem" }}>
      <h1 style={{ marginBottom: "0.5rem" }}>Frequently Asked Questions</h1>
      <p style={{ color: "var(--color-text-muted)", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: "2rem" }}>
        Common questions about Going Medieval, answered by experienced colony managers. Whether
        you&apos;re just starting your first settlement or looking to master advanced mechanics,
        this FAQ covers the questions we hear most often from the community.
      </p>

      {/* FAQ */}
      <h2 style={{ marginBottom: "1rem" }}>Quick Answers</h2>
      <div className="faq-snippets">
        <details>
          <summary>Is Going Medieval like RimWorld?</summary>
          <p>
            Going Medieval shares DNA with RimWorld — both are colony management simulators with
            settler skill systems, mood mechanics, raid-based combat, and base building — but
            Going Medieval carves its own identity through its medieval setting, 3D voxel-based
            construction, vertical building mechanics, and seasonal survival focus. If you enjoy
            RimWorld, you&apos;ll likely enjoy Going Medieval, but expect different challenges:
            structural stability physics, underground construction, and seasonal food management
            replace RimWorld&apos;s sci-fi technology progression and storyteller-driven events.
          </p>
        </details>
        <details>
          <summary>What difficulty should I start on?</summary>
          <p>
            Start on the default difficulty with Valley biome for your first colony. Going
            Medieval has a learning curve, and the default settings give you room to learn
            mechanics without being punished excessively for mistakes. Once you&apos;ve survived a
            full year (all four seasons), graduated to stone construction, and successfully
            defended against multiple raids, you can increase difficulty or try harder biomes.
            Difficulty affects raider frequency, enemy strength, resource scarcity, and settler
            mood thresholds. Don&apos;t be afraid to lower difficulty if you&apos;re struggling — the goal
            is to learn and have fun.
          </p>
        </details>
        <details>
          <summary>How long does a typical game last?</summary>
          <p>
            Going Medieval is an open-ended colony sim with no fixed endpoint. A typical
            playthrough to &quot;established colony&quot; status (stone fortifications, tier 2 research
            completed, stable food supply through all seasons) takes 2-3 in-game years, which
            translates to roughly 15-25 hours of gameplay depending on game speed and difficulty.
            However, the game doesn&apos;t end when your colony is stable — many players continue for
            multiple in-game years, expanding their settlements, researching tier 3 technologies,
            and facing escalating raid challenges. Some dedicated players have colonies running
            for 10+ in-game years.
          </p>
        </details>
      </div>

      {/* Full FAQ */}
      <h2 style={{ marginTop: "3rem", marginBottom: "1.5rem" }}>All Frequently Asked Questions</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2rem" }}>
        <div className="card">
          <h3 style={{ fontSize: "1.1rem", margin: "0 0 0.5rem" }}>1. What is Going Medieval about?</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, margin: 0 }}>
            Going Medieval is a colony management simulator set in an alternate medieval history
            where society is rebuilding after a devastating plague. You guide a group of settlers
            as they build a settlement from nothing — constructing buildings, farming crops,
            researching technology, defending against raiders, and surviving harsh seasonal
            weather. The game features a 3D voxel-based building system that allows multi-story
            construction and underground excavation, a detailed settler skill and mood system,
            and a research tree that progresses your colony from wooden huts to stone castles
            with advanced production and siege warfare.
          </p>
        </div>

        <div className="card">
          <h3 style={{ fontSize: "1.1rem", margin: "0 0 0.5rem" }}>2. What difficulty settings are available?</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, margin: 0 }}>
            Going Medieval offers multiple difficulty levels that affect raider frequency and
            strength, settler mood thresholds, resource availability, and environmental hazards.
            You can also customize individual settings: raider difficulty, resource scarcity,
            season length, and starting conditions. The game supports both story-focused peaceful
            modes with minimal combat and hardcore survival modes where every decision matters.
            Custom difficulty settings let you tailor the experience to your preferred balance
            of challenge and relaxation.
          </p>
        </div>

        <div className="card">
          <h3 style={{ fontSize: "1.1rem", margin: "0 0 0.5rem" }}>3. What are the best tips for beginners?</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, margin: 0 }}>
            Start in Valley biome on default difficulty. On Day 1, build a 5x5 wooden shelter
            with a roof, door, campfire, and sleeping spots. Build a Research Table as your
            second structure. Hunt deer for meat and leather. Plant Cabbage and Carrot in Spring
            for fast food. Research Stonecutting first to upgrade from wood to stone walls.
            Build underground root cellars for food storage before Autumn. Craft winter clothing
            before Winter arrives. Always keep at least a week&apos;s worth of food in storage. Never
            send settlers outside alone when predators are nearby. The full Beginner&apos;s Guide on
            this site covers these topics in detail with step-by-step instructions.
          </p>
        </div>

        <div className="card">
          <h3 style={{ fontSize: "1.1rem", margin: "0 0 0.5rem" }}>4. Which biome should I choose?</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, margin: 0 }}>
            Valley is the best biome for beginners — balanced resources, temperate climate, and
            manageable threats. Hillside is the next step up, offering abundant wood and clay
            but requiring more careful metal management. Marsh challenges experienced players
            with scarce stone and iron, rewarding creative trading and resource conservation.
            Mountain is the hardest biome, with year-round cold, limited farmland, and dangerous
            predators — recommended only for veterans who have mastered all game systems. See
            our complete Biomes and Map Seeds Guide for detailed comparisons of all four biomes.
          </p>
        </div>

        <div className="card">
          <h3 style={{ fontSize: "1.1rem", margin: "0 0 0.5rem" }}>5. What are the best starting settlers?</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, margin: 0 }}>
            Prioritize settlers with high Intellectual skill (for research speed), high
            Construction (for building), and high Cooking (for food preparation and better meals).
            A balanced starting trio might include: one Intellectual specialist (also decent at
            Medicine or Speechcraft), one Construction and Mining specialist (your builder and
            resource gatherer), and one Cooking and Farming specialist (your food production
            engine). Avoid settlers with negative traits that severely impact work speed or
            cause frequent mental breaks — a settler with 10 skill but a crippling mood penalty
            is worse than a 5-skill settler who works consistently.
          </p>
        </div>

        <div className="card">
          <h3 style={{ fontSize: "1.1rem", margin: "0 0 0.5rem" }}>6. How do I survive Winter?</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, margin: 0 }}>
            Winter survival requires preparation across all three preceding seasons. In Spring,
            plant crops to build food reserves. In Summer, expand storage and research preserved
            food at the Cooking Station. In Autumn, harvest everything, build underground root
            cellars, craft winter clothing for every settler, stockpile hay for livestock, and
            plant Turnips (the only outdoor Winter crop). During Winter itself: keep settlers
            indoors near heat sources whenever possible, maintain underground Mushroom farms
            for fresh food, and conserve stored food by eating perishables first. Our Seasons
            Guide provides a complete Winter survival strategy with detailed checklists.
          </p>
        </div>

        <div className="card">
          <h3 style={{ fontSize: "1.1rem", margin: "0 0 0.5rem" }}>7. How do I defend against raids?</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, margin: 0 }}>
            Defense starts with good base design. Build stone perimeter walls with a controlled
            entrance, place archer towers at corners and along long wall sections, create trap
            corridors at choke points, and maintain weapon and armor stockpiles near defensive
            positions. Train settlers in Marksman and Melee skills before raids occur — assign
            them hunting duties for Marksman practice and equip them with weapons early. During
            raids, position archers on elevated platforms behind merlon cover, funnel enemies
            through trapped corridors, and keep melee fighters behind chokepoints to engage
            enemies one at a time. The Defense Guide covers all defensive strategies in detail.
          </p>
        </div>

        <div className="card">
          <h3 style={{ fontSize: "1.1rem", margin: "0 0 0.5rem" }}>8. What new features came with the 1.0 launch?</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, margin: 0 }}>
            The 1.0 launch in March 2026 brought Going Medieval out of Early Access with all
            planned features complete. This included the full 3-tier research tree (20
            technologies), all 4 biomes with complete environmental simulation, the complete
            settler skill and mood system, finished construction mechanics including reinforced
            walls and siege weapons, the full seasonal cycle with all weather effects, and
            comprehensive trading with 6 merchant types. The launch version represents the
            complete vision of the game as designed by Foxy Voxel, polished and balanced based
            on years of Early Access community feedback.
          </p>
        </div>

        <div className="card">
          <h3 style={{ fontSize: "1.1rem", margin: "0 0 0.5rem" }}>9. Does Going Medieval have an ending?</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, margin: 0 }}>
            Going Medieval is an open-ended sandbox game without a scripted ending or victory
            condition. Your colony continues indefinitely as long as at least one settler
            survives. The game&apos;s &quot;ending&quot; is whatever goal you set for yourself: complete all
            research tiers, build a stone castle with a functioning Great Hall and Library,
            survive 10 in-game years, reach a population of 15 settlers, or simply build the
            most impressive medieval settlement you can imagine. The open-ended design encourages
            long-term play and creative colony building without the pressure of a final objective.
            Some players consider their colony &quot;won&quot; when they&apos;ve researched all technologies
            and built a self-sustaining settlement that can survive any threat.
          </p>
        </div>

        <div className="card">
          <h3 style={{ fontSize: "1.1rem", margin: "0 0 0.5rem" }}>10. Does Going Medieval support mods?</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, margin: 0 }}>
            Going Medieval has a growing modding community with community-created mods available
            through the Steam Workshop. Mods range from quality-of-life improvements and UI
            enhancements to new content including additional building types, crop varieties,
            and gameplay tweaks. Foxy Voxel has expressed support for the modding community and
            designed the game with modding accessibility in mind. However, official modding
            tools and full workshop integration are community-driven rather than officially
            supported. Check the Going Medieval Steam Workshop for available mods, and always
            read mod descriptions carefully — mods created for earlier versions of the game
            may not be compatible with the 1.0 release. Verify mod compatibility before
            applying them to your save files.
          </p>
        </div>
      </div>

      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7 }}>
        Didn&apos;t find your question? Check our detailed guides on specific game systems —
        Buildings, Research, Settlers, Farming, Defense, Trade, Biomes, Seasons, and Underground
        construction are all covered in depth on this site. For questions about specific
        mechanics not addressed here, the Going Medieval community on Discord and Steam forums
        is active and helpful. And remember: every colony manager started where you are now.
        Keep building, keep learning, and your settlement will thrive.
      </p>
    </div>
  );
}
