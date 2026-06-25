import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News and Updates | Going Medieval Guide",
  description:
    "Latest Going Medieval news and updates. Coverage of the 1.0 launch in March 2026, post-launch patches, community spotlights, upcoming content, and future development plans for Foxy Voxel's medieval colony sim.",
};

export default function NewsPage() {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem" }}>
      <h1 style={{ marginBottom: "0.5rem" }}>Going Medieval News and Updates</h1>
      <p style={{ color: "var(--color-text-muted)", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: "2rem" }}>
        Stay up to date with the latest Going Medieval developments, patch notes, community
        highlights, and what&apos;s coming next from Foxy Voxel. We track all major updates and
        community news for the Going Medieval community.
      </p>

      {/* FAQ */}
      <h2 style={{ marginBottom: "1rem" }}>Quick Answers</h2>
      <div className="faq-snippets">
        <details>
          <summary>When did Going Medieval reach version 1.0?</summary>
          <p>
            Going Medieval officially launched out of Early Access as version 1.0 in March 2026,
            after several years of development and community feedback during Early Access. The 1.0
            launch marked a major milestone, bringing the full vision of the game to completion
            with all planned features, content, and polish. The launch was celebrated by the
            community and received positive reception from both long-time Early Access players
            and newcomers discovering the game for the first time.
          </p>
        </details>
        <details>
          <summary>Is Going Medieval still being updated after 1.0?</summary>
          <p>
            Yes, Foxy Voxel continues to support Going Medieval with post-launch patches and
            updates. The first post-launch patches have focused on bug fixes, balance adjustments,
            and quality-of-life improvements based on community feedback. While the pace of major
            content updates has slowed compared to Early Access development, the team remains
            committed to maintaining and improving the game. Community feedback channels remain
            open for bug reports and suggestions.
          </p>
        </details>
        <details>
          <summary>Where can I find official Going Medieval news?</summary>
          <p>
            Official Going Medieval news is published through the game&apos;s Steam page (patch notes,
            developer announcements, and community hub), the Foxy Voxel developer blog, and
            the Going Medieval Discord server where developers frequently interact with the
            community. We consolidate and summarize official news here on this page, but always
            recommend checking the official channels for the most authoritative information.
          </p>
        </details>
      </div>

      {/* News Items */}
      <h2 style={{ marginTop: "3rem", marginBottom: "1rem" }}>Recent News</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginBottom: "2rem" }}>
        <div className="card" style={{ borderLeft: "4px solid var(--color-accent)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem", flexWrap: "wrap", gap: "0.5rem" }}>
            <h3 style={{ fontSize: "1.15rem", margin: 0 }}>Going Medieval 1.0 Launch — March 2026</h3>
            <span style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", background: "var(--color-bg-elevated)", padding: "0.25rem 0.75rem", borderRadius: "0.25rem" }}>March 2026</span>
          </div>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, margin: 0 }}>
            After a successful Early Access period, Going Medieval officially launched version 1.0
            in March 2026. This milestone release marked the culmination of years of development
            by Foxy Voxel, bringing the medieval colony sim to its full envisioned state. The 1.0
            launch included all planned features: the complete research tree spanning 3 tiers,
            all biome types with full environmental simulation, the finished settler skill and
            mood system, complete building and fortification mechanics, and the full seasonal
            cycle with associated survival challenges. The launch was met with strong community
            response, with both veteran Early Access players praising the final polish and new
            players discovering the game&apos;s deep colony management systems. Foxy Voxel expressed
            gratitude to the community whose feedback shaped the game throughout Early Access
            development.
          </p>
        </div>

        <div className="card" style={{ borderLeft: "4px solid var(--color-success)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem", flexWrap: "wrap", gap: "0.5rem" }}>
            <h3 style={{ fontSize: "1.15rem", margin: 0 }}>First Post-Launch Patches Arrive</h3>
            <span style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", background: "var(--color-bg-elevated)", padding: "0.25rem 0.75rem", borderRadius: "0.25rem" }}>April-May 2026</span>
          </div>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, margin: 0 }}>
            Following the 1.0 launch, Foxy Voxel released a series of post-launch patches addressing
            community-reported issues and refining game balance. The patches focused on bug fixes
            identified during the surge of new players at launch, balance adjustments to raider
            difficulty scaling and resource availability across biomes, and quality-of-life
            improvements including UI enhancements, settler AI pathfinding improvements, and
            better information display for game mechanics like room quality and structural
            stability. The development team confirmed their commitment to ongoing support and
            indicated that while major content additions may be less frequent post-1.0, they
            will continue to maintain and improve the game based on community feedback.
          </p>
        </div>

        <div className="card" style={{ borderLeft: "4px solid var(--color-accent)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem", flexWrap: "wrap", gap: "0.5rem" }}>
            <h3 style={{ fontSize: "1.15rem", margin: 0 }}>Community Spotlight — Base Building Showcase</h3>
            <span style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", background: "var(--color-bg-elevated)", padding: "0.25rem 0.75rem", borderRadius: "0.25rem" }}>June 2026</span>
          </div>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, margin: 0 }}>
            The Going Medieval community continues to produce impressive colony builds that showcase
            the game&apos;s creative potential. Recent community highlights include elaborate multi-level
            stone castles with full Great Halls and Libraries, sprawling underground networks with
            automated resource processing, and beautifully designed settlements that balance
            aesthetics with defensive functionality. The community&apos;s creativity demonstrates the
            depth of the building system and the variety of approaches players take to solving
            the game&apos;s challenges. Community members share their builds on the official Discord
            server and Steam community hub, inspiring new players and veterans alike. If you have
            a colony you&apos;re proud of, share it with the community — your design choices might
            become the next trend in colony construction.
          </p>
        </div>

        <div className="card" style={{ borderLeft: "4px solid var(--color-text-muted)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem", flexWrap: "wrap", gap: "0.5rem" }}>
            <h3 style={{ fontSize: "1.15rem", margin: 0 }}>Looking Ahead — Future Content Possibilities</h3>
            <span style={{ fontSize: "0.85rem", color: "var(--color-text-muted)", background: "var(--color-bg-elevated)", padding: "0.25rem 0.75rem", borderRadius: "0.25rem" }}>Ongoing</span>
          </div>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, margin: 0 }}>
            While Foxy Voxel has not announced specific upcoming content expansions post-1.0,
            the community continues to discuss and hope for potential additions including new
            biome types, additional research tiers, expanded animal variety, and new building
            aesthetics. The developers have historically been responsive to community feedback,
            and many features that shipped in the 1.0 launch originated from Early Access
            community suggestions. Any official announcements about future content will be shared
            through the game&apos;s Steam page and Discord server. We&apos;ll update this page as new
            information becomes available.
          </p>
        </div>
      </div>

      {/* Check Back Message */}
      <div className="card" style={{ borderLeft: "4px solid var(--color-accent)", marginTop: "2rem" }}>
        <h3 style={{ fontSize: "1.15rem", margin: "0 0 0.5rem" }}>Check Back for Updates</h3>
        <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, margin: 0 }}>
          This news page is regularly updated as new Going Medieval developments occur. Check
          back frequently for patch notes, community highlights, and coverage of any future
          content announcements. You can also follow official Going Medieval channels on Steam
          and Discord for real-time updates directly from Foxy Voxel. Whether you&apos;re a new
          player just discovering the game or a veteran colony manager, staying informed about
          the latest changes helps you get the most out of your Going Medieval experience.
          We&apos;re committed to keeping this resource current and useful for the entire community.
        </p>
      </div>
    </div>
  );
}
