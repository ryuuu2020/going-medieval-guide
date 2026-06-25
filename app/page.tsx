import type { Metadata } from "next";
import Link from "next/link";
import { buildings, crops, animals, research, settlerSkills, biomes, seasons, defenseTips } from "@/lib/data";

export const metadata: Metadata = {
  title: "Home | Going Medieval Guide",
  description:
    "The ultimate Going Medieval colony sim guide. Master buildings, research, settlers, farming, and defense to survive the medieval frontier. Comprehensive wiki for Foxy Voxel's 1.0 release.",
};

const navCards = [
  { title: "Buildings", href: "/buildings", desc: "Complete guide to all 18 building types, from wooden walls to stone keeps. Master construction tiers and structural stability.", icon: "🏰" },
  { title: "Research", href: "/research", desc: "Full research tree breakdown with 16 technologies across 3 tiers. Learn the optimal research path for your colony.", icon: "📜" },
  { title: "Settlers", href: "/settlers", desc: "Deep dive into all 12 settler skills, the mood system, needs, traits, and how to manage your villagers effectively.", icon: "👥" },
  { title: "Farming", href: "/farming", desc: "Master all 11 crops, seasonal planting, soil fertility, food preservation, and animal husbandry for year-round food.", icon: "🌾" },
  { title: "Defense", href: "/defense", desc: "Comprehensive defense strategy: raid mechanics, wall design, traps, killboxes, archer towers, and siege tactics.", icon: "🛡️" },
  { title: "Beginner's Guide", href: "/beginners-guide", desc: "Step-by-step walkthrough from Day 1 survival to mid-game expansion and the 1.0 endgame. Everything a new player needs.", icon: "📖" },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem", lineHeight: 1.2 }}>
          Going Medieval Guide
        </h1>
        <p style={{
          fontSize: "1.25rem",
          color: "var(--color-text-muted)",
          maxWidth: "700px",
          margin: "0 auto 1.5rem",
          lineHeight: 1.7,
        }}>
          The comprehensive colony sim strategy guide for Foxy Voxel&apos;s Going Medieval 1.0. 
          Build your fortress in the wilderness, manage your settlers, research new technologies, 
          and defend against raiders in a dynamic medieval world. Everything you need to survive 
          and thrive — from your first wooden hut to a mighty stone castle.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/beginners-guide" className="btn-primary">Start: Beginner&apos;s Guide</Link>
          <Link href="/buildings" style={{
            background: "var(--color-bg-elevated)",
            color: "var(--color-accent)",
            padding: "0.75rem 1.5rem",
            borderRadius: "0.5rem",
            fontWeight: 600,
            textDecoration: "none",
            border: "1px solid var(--color-accent)",
            transition: "background 0.2s",
          }}>Browse Guides</Link>
        </div>
      </section>

      {/* Navigation Cards */}
      <section style={{ maxWidth: "1200px", margin: "3rem auto", padding: "0 2rem" }}>
        <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>Explore the Guide</h2>
        <div className="grid-cards">
          {navCards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="card"
              style={{ textDecoration: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}
            >
              <span style={{ fontSize: "2rem" }}>{card.icon}</span>
              <h3 style={{ fontSize: "1.35rem", margin: 0 }}>{card.title}</h3>
              <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0, fontSize: "0.95rem" }}>
                {card.desc}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Quick Start Section */}
      <section style={{
        maxWidth: "1200px",
        margin: "0 auto 3rem",
        padding: "2rem",
        background: "var(--color-bg-card)",
        border: "1px solid var(--color-border)",
        borderRadius: "0.75rem",
      }}>
        <h2 style={{ marginBottom: "1.5rem" }}>Quick Start Tips</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
            <span style={{
              background: "var(--color-accent)",
              color: "var(--color-bg)",
              width: "28px",
              height: "28px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              flexShrink: 0,
              fontSize: "0.9rem",
            }}>1</span>
            <div>
              <strong>Choose Valley biome for your first game.</strong>
              <p style={{ color: "var(--color-text-muted)", margin: "0.25rem 0 0", lineHeight: 1.6 }}>
                The Valley offers balanced resources, temperate climate, and plenty of fertile soil. 
                It&apos;s by far the most forgiving biome for learning core game mechanics.
              </p>
            </div>
          </div>
          <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
            <span style={{
              background: "var(--color-accent)",
              color: "var(--color-bg)",
              width: "28px",
              height: "28px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              flexShrink: 0,
              fontSize: "0.9rem",
            }}>2</span>
            <div>
              <strong>Build a roofed shelter and campfire immediately on Day 1.</strong>
              <p style={{ color: "var(--color-text-muted)", margin: "0.25rem 0 0", lineHeight: 1.6 }}>
                Settlers need protection from weather and a place to cook. A simple 5x5 room with wooden walls, 
                a roof, a door, and a campfire is all you need to survive the first night.
              </p>
            </div>
          </div>
          <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
            <span style={{
              background: "var(--color-accent)",
              color: "var(--color-bg)",
              width: "28px",
              height: "28px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              flexShrink: 0,
              fontSize: "0.9rem",
            }}>3</span>
            <div>
              <strong>Start farming before the first week ends.</strong>
              <p style={{ color: "var(--color-text-muted)", margin: "0.25rem 0 0", lineHeight: 1.6 }}>
                Plant Cabbage, Beet, and Barley in Spring. These fast-growing crops will sustain your colony. 
                A single 5x5 field per crop type is enough for 3-4 settlers. Don&apos;t wait until you&apos;re hungry.
              </p>
            </div>
          </div>
          <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
            <span style={{
              background: "var(--color-accent)",
              color: "var(--color-bg)",
              width: "28px",
              height: "28px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              flexShrink: 0,
              fontSize: "0.9rem",
            }}>4</span>
            <div>
              <strong>Build a Research Table and assign your smartest settler to it.</strong>
              <p style={{ color: "var(--color-text-muted)", margin: "0.25rem 0 0", lineHeight: 1.6 }}>
                Research is your ticket to better buildings, weapons, and food. Prioritize Stonecutting, 
                Agriculture, and Tailoring in your first tech tier. Your Intellectual settler should do 
                nothing but research until key technologies are unlocked.
              </p>
            </div>
          </div>
          <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
            <span style={{
              background: "var(--color-accent)",
              color: "var(--color-bg)",
              width: "28px",
              height: "28px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              flexShrink: 0,
              fontSize: "0.9rem",
            }}>5</span>
            <div>
              <strong>Build a perimeter wall before your first raid.</strong>
              <p style={{ color: "var(--color-text-muted)", margin: "0.25rem 0 0", lineHeight: 1.6 }}>
                Raids arrive as your colony wealth grows. A simple wooden wall with a single entrance 
                will funnel enemies and give your defenders a massive advantage. Even a basic palisade 
                can mean the difference between survival and disaster.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Going Medieval Section */}
      <section style={{ maxWidth: "1200px", margin: "0 auto 3rem", padding: "0 2rem" }}>
        <h2 style={{ marginBottom: "1.5rem" }}>About Going Medieval</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", lineHeight: 1.8 }}>
          <p style={{ color: "var(--color-text-muted)" }}>
            Going Medieval is a colony management simulator developed by Foxy Voxel, set in an
            alternate medieval period following a devastating plague that wiped out most of the
            population. You guide a small group of survivors who must build a new life from the
            ruins of the old world. The game combines deep colony management with multi-layered
            building mechanics, settler psychology, and tactical combat.
          </p>
          <p style={{ color: "var(--color-text-muted)" }}>
            What sets Going Medieval apart is its emphasis on verticality. Unlike many colony
            sims that operate on a flat plane, Going Medieval allows you to build up to 16
            levels high and dig multiple levels underground. This 3D freedom means you can
            construct towering multi-story castles with archer positions on upper floors, or
            burrow deep into mountains creating vast underground networks of mines, farms, and
            storage cellars.
          </p>
          <p style={{ color: "var(--color-text-muted)" }}>
            The 1.0 release expanded the game significantly with new endgame content, improved
            AI raid behavior, expanded research trees, additional biomes, and refined settler
            behavior systems. Whether you want to build an impenetrable mountaintop fortress,
            a sprawling underground dwarven city, or a peaceful farming village on the plains,
            Going Medieval gives you the tools and freedom to create your own medieval survival
            story.
          </p>
          <p style={{ color: "var(--color-text-muted)" }}>
            Our guide covers every system in the game. From choosing your starting biome and
            settlers, to optimizing food production chains, to designing killboxes that stop
            raids cold. We stay current with the latest game updates and community discoveries
            to ensure you always have accurate, practical information for your colony.
          </p>

          {/* Key Features Overview */}
          <div style={{
            background: "var(--color-bg-elevated)",
            border: "1px solid var(--color-border)",
            borderRadius: "0.5rem",
            padding: "1.5rem",
            marginTop: "0.5rem",
          }}>
            <h3 style={{ marginBottom: "1rem", fontSize: "1.15rem" }}>Key Game Systems We Cover</h3>
            <ul style={{ color: "var(--color-text-muted)", lineHeight: 2, paddingLeft: "1.25rem", margin: 0 }}>
              <li><strong style={{ color: "var(--color-text)" }}>Building &amp; Construction</strong> — Over {buildings.length} building types with material tiers, structural mechanics, and room quality system</li>
              <li><strong style={{ color: "var(--color-text)" }}>Research &amp; Technology</strong> — {research.length} technologies across 3 tiers with branching progression and chronicle mechanics</li>
              <li><strong style={{ color: "var(--color-text)" }}>Settler Management</strong> — {settlerSkills.length} skills, mood system, needs, traits, relationships, and work priorities</li>
              <li><strong style={{ color: "var(--color-text)" }}>Farming &amp; Food</strong> — {crops.length} crop types across {seasons.length} seasons, plus animal husbandry and food preservation</li>
              <li><strong style={{ color: "var(--color-text)" }}>Defense &amp; Combat</strong> — {defenseTips.length} core defense strategies, raid mechanics, and siege warfare</li>
            </ul>
          </div>

          <p style={{ color: "var(--color-text-muted)" }}>
            Use the navigation cards above to jump into any topic, or start with the 
            Beginner&apos;s Guide if you&apos;re new to the game. Each guide page includes 
            comprehensive data tables, strategic advice, and answers to the most common 
            questions. Bookmark this site and check back as we update for each new game patch.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ maxWidth: "1200px", margin: "0 auto 3rem", padding: "0 2rem" }}>
        <h2 style={{ marginBottom: "1.5rem" }}>Frequently Asked Questions</h2>
        <div className="faq-snippets">
          <details>
            <summary>How do I start a successful colony in Going Medieval?</summary>
            <p>
              Start on the Valley biome (easiest), pick settlers with balanced skills (prioritize 
              Construction, Intellectual, and Cooking), and immediately build a roofed shelter with 
              a campfire. Plant fast-growing crops like Cabbage in your first spring week, build a 
              Research Table for your smartest settler, and construct a perimeter wall before your 
              colony wealth triggers raids. Focus on food security first, then research 
              Stonecutting for better walls, and Tailoring for winter gear. Always prepare a full 
              season ahead — start winter prep in autumn, and expand in spring.
            </p>
          </details>
          <details>
            <summary>What is the best research order for new players?</summary>
            <p>
              Start with Stonecutting to upgrade walls to stone, then Agriculture for better crop 
              yields. Follow with Tailoring for winter clothing, then Carpentry for furniture and 
              beds. In Tier 2, rush Smithing for metal tools and weapons, then Animal Taming for 
              renewable food. Advanced Cooking comes next for better meals. The optimal order 
              depends on your biome and playstyle, but food security and basic defense should always 
              come before luxury technologies. Avoid rushing military tech unless you&apos;re on a 
              high-difficulty biome.
            </p>
          </details>
          <details>
            <summary>How do I prepare for my first winter?</summary>
            <p>
              Start winter preparation in early autumn. Plant Turnips as your winter-hardy crop and 
              Hay for livestock feed. Build an underground root cellar at least 3 levels deep for 
              cold storage — food spoils much slower underground. Craft winter coats at the Tailor 
              Workshop before temperatures drop. Stockpile firewood or coal for heating and cooking. 
              Limit outdoor work to essential tasks during winter. If you grow Mushrooms underground, 
              you can maintain food production through the coldest months. A well-prepared colony 
              treats winter as a planning season, not a survival crisis.
            </p>
          </details>
        </div>
      </section>
    </div>
  );
}
