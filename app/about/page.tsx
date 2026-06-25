import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Going Medieval Guide",
  description:
    "About the Going Medieval Guide — a fan-made resource and strategy wiki for Foxy Voxel's Going Medieval colony sim. Learn what we cover, our mission, and our disclaimer about not being officially affiliated.",
};

export default function AboutPage() {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem" }}>
      <h1 style={{ marginBottom: "0.5rem" }}>About the Going Medieval Guide</h1>
      <p style={{ color: "var(--color-text-muted)", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: "2rem" }}>
        A comprehensive fan-made resource dedicated to helping players master Foxy Voxel&apos;s
        medieval colony simulation game, Going Medieval. Everything we cover, why we built
        this guide, and what makes it different.
      </p>

      {/* FAQ */}
      <h2 style={{ marginBottom: "1rem" }}>Quick Answers</h2>
      <div className="faq-snippets">
        <details>
          <summary>Who made this Going Medieval guide?</summary>
          <p>
            This guide was created by passionate Going Medieval players who wanted to share their
            knowledge with the community. We&apos;re not game developers or professional guide
            writers — we&apos;re colony managers who spent countless hours in the medieval wilds and
            wanted to create the resource we wished we had when we started playing. Every guide
            on this site is based on direct gameplay experience, community research, and careful
            testing of game mechanics.
          </p>
        </details>
        <details>
          <summary>Is this guide officially affiliated with the game?</summary>
          <p>
            No. The Going Medieval Guide is an independent fan project and is not affiliated
            with, endorsed by, sponsored by, or connected to Foxy Voxel or Irregular Corporation
            in any official capacity. Going Medieval and all related game content, trademarks,
            copyrights, artwork, and intellectual property are the property of their respective
            owners, including Foxy Voxel and Irregular Corporation. This site exists solely to
            help the Going Medieval player community.
          </p>
        </details>
        <details>
          <summary>How accurate is the information on this site?</summary>
          <p>
            We strive for accuracy and update our guides whenever game patches change mechanics
            or values. All information is based on the 1.0 release of Going Medieval as of
            March 2026 and subsequent post-launch patches. However, game balance can change with
            updates, and we recommend checking official patch notes for the most current
            information. If you spot an error or outdated information, we welcome corrections.
          </p>
        </details>
      </div>

      {/* What We Cover */}
      <h2 style={{ marginTop: "3rem", marginBottom: "1rem" }}>What We Cover</h2>
      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "1rem" }}>
        The Going Medieval Guide covers every major system in the game through detailed,
        practical guides designed to help you build better colonies. Our content includes:
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1rem", marginBottom: "1.5rem" }}>
        {[
          { title: "Buildings Guide", desc: "All 18 building types, construction tiers, structural stability mechanics, and room quality systems." },
          { title: "Research Guide", desc: "Complete 20-technology research tree with tier breakdowns, prerequisites, and unlock priorities." },
          { title: "Settlers Guide", desc: "Settler skills, mood system, work priorities, and optimal settler combinations for colony roles." },
          { title: "Farming Guide", desc: "All 11 crops, seasonal planting strategies, crop rotation, and food sustainability planning." },
          { title: "Defense Guide", desc: "Fortification design, combat tactics, trap systems, and raid defense strategies." },
          { title: "Seasons Guide", desc: "In-depth coverage of all 4 seasons with temperature management and survival checklists." },
          { title: "Biomes Guide", desc: "Biome comparisons, map seed recommendations, and choosing the right environment." },
          { title: "Animals Guide", desc: "All 13 animals, hunting vs. taming strategies, and livestock management." },
          { title: "Trade Guide", desc: "Merchant types, what to buy and sell, Speechcraft optimization, and economic planning." },
          { title: "Underground Guide", desc: "Root cellars, mining for iron and coal, underground farming, and subterranean base design." },
          { title: "Tips and Tricks", desc: "15+ advanced strategies across building, food, combat, settlers, and winter survival." },
          { title: "FAQ", desc: "Answers to the most common questions from new and experienced players." },
        ].map((item) => (
          <div key={item.title} className="card" style={{ padding: "1rem" }}>
            <h3 style={{ fontSize: "1rem", margin: "0 0 0.5rem" }}>{item.title}</h3>
            <p style={{ color: "var(--color-text-muted)", lineHeight: 1.5, margin: 0, fontSize: "0.9rem" }}>{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Our Mission */}
      <h2 style={{ marginTop: "3rem", marginBottom: "1rem" }}>Our Mission</h2>
      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "1rem" }}>
        We built the Going Medieval Guide with a simple mission: create the most helpful,
        accessible, and comprehensive resource for Going Medieval players anywhere. Whether
        you&apos;re a new player struggling to survive your first Winter, an intermediate colony
        manager optimizing your production chains, or a veteran seeking advanced defensive
        strategies, we want the Going Medieval Guide to be your first stop for answers.
      </p>
      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "1rem" }}>
        Our guides emphasize practical, actionable advice. We don&apos;t just tell you what something
        does — we tell you why it matters, when to use it, and how it fits into your overall
        colony strategy. Every guide includes specific numbers, concrete examples, and clear
        recommendations based on tested gameplay experience. We believe the best game guides
        don&apos;t just explain mechanics — they help you understand the reasoning behind strategic
        decisions so you can adapt to your specific colony&apos;s situation.
      </p>

      <h2 style={{ marginTop: "3rem", marginBottom: "1rem" }}>Disclaimer</h2>
      <div className="card" style={{ borderLeft: "4px solid var(--color-accent)", marginBottom: "1.5rem" }}>
        <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, margin: 0, marginBottom: "1rem" }}>
          <strong style={{ color: "var(--color-accent)" }}>Important:</strong> The Going Medieval Guide is a
          fan-made website created by players for players. We are not affiliated with, endorsed by,
          sponsored by, or connected to Foxy Voxel or Irregular Corporation in any official
          capacity whatsoever. All game-related content, including but not limited to game
          mechanics, artwork, names, logos, trademarks, copyrights, and intellectual property
          referenced on this site, are the exclusive property of Foxy Voxel and/or Irregular
          Corporation.
        </p>
        <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, margin: 0 }}>
          This website is an independent fan project intended solely to provide helpful information
          and strategy guidance to the Going Medieval player community. We do not claim ownership
          of any game content, and our guides are created purely as a community resource. No
          endorsement or official relationship with the game&apos;s developers or publishers is
          expressed or implied. For official Going Medieval information, announcements, and
          support, please visit the game&apos;s official Steam page, the Foxy Voxel website, and
          the official Going Medieval Discord server.
        </p>
      </div>

      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7 }}>
        Thank you for using the Going Medieval Guide. We&apos;re honored to be part of your colony
        management journey, and we hope our guides help you build settlements that stand the
        test of time — through Winter, through raids, and through the countless challenges the
        medieval world throws at you. May your walls hold strong, your harvests be plentiful,
        and your settlers happy.
      </p>
    </div>
  );
}
