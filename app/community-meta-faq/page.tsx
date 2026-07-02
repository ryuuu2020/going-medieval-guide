import Link from "next/link";

export const metadata = {
  title: "Going Medieval Community FAQ — What the Game Is, Roadmap & Player Expectations | Going Medieval Guide",
  description: "Community-driven FAQ answering debated questions about Going Medieval: combat focus, RimWorld comparisons, roadmap features, and what to expect from early access.",
};

const whatItIs = [
  { feature: "Colony Management", description: "Manage 3-20 settlers with individual skills, traits, moods, and relationships. Assign work priorities, schedules, and living quarters.", consensus: "Core gameplay. Deep and satisfying. Comparable to RimWorld but with 3D building." },
  { feature: "3D Base Building", description: "Build multi-story structures with structural integrity physics. Walls support floors which support roofs — remove a load-bearing wall and everything collapses.", consensus: "The standout feature. No other colony sim has this level of building depth. The physics system is both the game strength and the leading cause of rage-quits." },
  { feature: "Combat & Raids", description: "Defend against raiders, animals, and siege events. Position archers on walls, set traps, build killboxes. Combat scales with colony wealth.", consensus: "Polarizing. Some players love it and want more. Others bought the game for peaceful building and are frustrated. Combat IS a core system — it is not optional." },
  { feature: "Survival Mechanics", description: "Manage food, temperature, seasons, and settler needs. Winter kills unprepared colonies. Heat waves cause heatstroke. Cold snaps freeze crops.", consensus: "Well-implemented. Seasons create natural gameplay rhythm. Winter survival is a genuine challenge that forces planning." },
  { feature: "Research & Tech Tree", description: "Unlock new buildings, weapons, armor, and production chains through research. Three-tier research tree with branching paths.", consensus: "Functional but could be deeper. Community wants more late-game research options and unique tech paths per playthrough." },
];

const vsRimworld = [
  { aspect: "Building", goingMedieval: "True 3D with Z-levels, structural physics, multi-story castles", rimworld: "2D top-down, no vertical building, simpler construction", winner: "Going Medieval" },
  { aspect: "Colony Depth", goingMedieval: "12 skills, 4 traits per settler, mood system, relationships", rimworld: "Deeper skill system, more traits, ideology system, biotech DLC", winner: "RimWorld" },
  { aspect: "Combat", goingMedieval: "Real-time with pause, 3D positioning, siege weapons, archer platforms", rimworld: "Real-time with pause, cover system, more weapon variety, psycasts", winner: "Tie — different strengths" },
  { aspect: "Mod Support", goingMedieval: "Basic modding, growing workshop, no Steam Workshop yet", rimworld: "Massive Steam Workshop, thousands of mods, full modding API", winner: "RimWorld" },
  { aspect: "Visuals & Polish", goingMedieval: "3D voxel art, dynamic weather, day-night cycle, more immersive", rimworld: "2D stylized, functional but dated, strong artistic identity", winner: "Going Medieval" },
  { aspect: "Content Depth", goingMedieval: "Early access, growing content, core loop is complete", rimworld: "10+ years of development, 3 major DLCs, massive content depth", winner: "RimWorld (by volume)" },
];

const roadmap = [
  { feature: "Mounted Combat", status: "Confirmed — In Development", detail: "Horses and mounted knights. Community is extremely excited. Will add new combat dimension and settlement mobility.", eta: "2026 (no firm date)" },
  { feature: "Multiplayer / Co-op", status: "Planned — Long Term", detail: "Developer has expressed interest but it is a massive technical undertaking. Not in active development yet.", eta: "TBD" },
  { feature: "Steam Workshop Integration", status: "Planned", detail: "Official mod support and Steam Workshop integration confirmed on roadmap. Current modding is manual file editing.", eta: "2026" },
  { feature: "Faction Diplomacy", status: "Planned", detail: "More complex relationships with other settlements beyond simple raiding. Trade agreements, alliances, wars.", eta: "TBD" },
  { feature: "New Biomes", status: "In Development", detail: "Additional map types beyond the current four biomes. Desert, coastal, and swamp biomes mentioned by developers.", eta: "2026" },
];

export default function CommunityMetaFaqPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="chapter-heading font-display text-4xl mb-2">
        Community FAQ
      </h1>
      <p className="text-ink-faded text-lg mb-8 drop-cap">
        Going Medieval sparks strong opinions. On the subreddit, you will find passionate debates about what the game is, what it should be, and whether it delivers on its promises. This FAQ collects the community consensus — the questions that get asked every week and the answers that experienced players consistently give.
      </p>

      {/* What the Game Is */}
      <h2 className="chapter-heading font-display text-2xl mt-10 mb-4">
        What Going Medieval Actually Is
      </h2>
      <p className="text-ink-light mb-4">
        The number one source of negative reviews: players who expected a peaceful medieval city builder and got a survival game with mandatory combat. Here is what the community agrees on:
      </p>
      <div className="overflow-x-auto">
        <table className="parchment-table w-full text-sm">
          <thead>
            <tr>
              <th>Feature</th>
              <th>Description</th>
              <th>Community Consensus</th>
            </tr>
          </thead>
          <tbody>
            {whatItIs.map((w, i) => (
              <tr key={i}>
                <td className="font-display text-accent">{w.feature}</td>
                <td>{w.description}</td>
                <td>{w.consensus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* vs RimWorld */}
      <h2 className="chapter-heading font-display text-2xl mt-10 mb-4">
        Going Medieval vs RimWorld — Honest Comparison
      </h2>
      <p className="text-ink-light mb-4">
        Every colony sim gets compared to RimWorld. Here is the honest, community-vetted comparison — not the marketing version.
      </p>
      <div className="overflow-x-auto">
        <table className="parchment-table w-full text-sm">
          <thead>
            <tr>
              <th>Aspect</th>
              <th>Going Medieval</th>
              <th>RimWorld</th>
              <th>Winner</th>
            </tr>
          </thead>
          <tbody>
            {vsRimworld.map((v, i) => (
              <tr key={i}>
                <td className="font-display text-accent">{v.aspect}</td>
                <td>{v.goingMedieval}</td>
                <td>{v.rimworld}</td>
                <td className="font-medium">{v.winner}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Roadmap */}
      <h2 className="chapter-heading font-display text-2xl mt-10 mb-4">
        Development Roadmap
      </h2>
      <p className="text-ink-light mb-4">
        Going Medieval is in active early access development. Here is what the developers have confirmed:
      </p>
      <div className="overflow-x-auto">
        <table className="parchment-table w-full text-sm">
          <thead>
            <tr>
              <th>Feature</th>
              <th>Status</th>
              <th>Detail</th>
              <th>ETA</th>
            </tr>
          </thead>
          <tbody>
            {roadmap.map((r, i) => (
              <tr key={i}>
                <td className="font-display text-accent">{r.feature}</td>
                <td>{r.status}</td>
                <td>{r.detail}</td>
                <td>{r.eta}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* FAQ */}
      <h2 className="chapter-heading font-display text-2xl mt-10 mb-4">FAQ</h2>

      <div className="bg-parchment-light rounded-lg p-5 mb-4">
        <h3 className="font-display text-accent text-lg mb-2">Is this just RimWorld in 3D?</h3>
        <p className="text-ink-light">
          No. While the genre overlap is obvious, Going Medieval has a fundamentally different identity centered on 3D building physics. The Z-level building system — where structural integrity, vertical stacking, and multi-story design matter — has no equivalent in RimWorld. As one community member put it: RimWorld is a story generator, Going Medieval is a castle builder with survival mechanics. If you want deep storytelling and mod variety, RimWorld is better. If you want to build a castle that obeys real physics, Going Medieval is unmatched.
        </p>
      </div>

      <div className="bg-parchment-light rounded-lg p-5 mb-4">
        <h3 className="font-display text-accent text-lg mb-2">Is the game finished or still in early access?</h3>
        <p className="text-ink-light">
          Early access. The core gameplay loop is complete and polished — you can build a full castle, survive years, research everything, and fight endgame raids. The game is entirely playable and enjoyable in its current state. What is missing: some roadmap features (mounted combat, diplomacy), Steam Workshop integration, and content depth compared to finished games. The developers release updates regularly. If you are comfortable with early access, buy now — the game is worth its current price. If you want a fully finished product, wait for the 1.0 release.
        </p>
      </div>

      <div className="bg-parchment-light rounded-lg p-5 mb-4">
        <h3 className="font-display text-accent text-lg mb-2">Should I buy it now or wait?</h3>
        <p className="text-ink-light">
          Buy now if you enjoy colony sims, 3D building, survival mechanics, and do not mind early access quirks. The building system alone is worth the price — the structural physics create emergent gameplay that no other game in the genre offers. Wait if you need Steam Workshop mod support, multiplayer, or a completely bug-free experience. The community consensus: the game is already good enough to recommend, and it will only get better. The Steam review rating (Very Positive) reflects this — most negative reviews come from players who expected a peaceful builder without combat, not from players who found the game broken.
        </p>
      </div>

      <aside className="border-l-4 border-accent pl-4 mt-10">
        <h3 className="font-display text-lg text-ink mb-2">Related Guides</h3>
        <ul className="space-y-1">
          <li><Link href="/faq" className="text-accent hover:underline">Gameplay FAQ</Link></li>
          <li><Link href="/beginners" className="text-accent hover:underline">Beginner Guide</Link></li>
          <li><Link href="/beginner-walkthrough" className="text-accent hover:underline">Beginner Walkthrough (Day 1 to Year 1)</Link></li>
          <li><Link href="/news" className="text-accent hover:underline">Latest News &amp; Updates</Link></li>
          <li><Link href="/endgame-content" className="text-accent hover:underline">Endgame Content Guide</Link></li>
        </ul>
      </aside>

      <p className="text-ink-faded text-sm mt-10">Last updated: July 2, 2026. Community consensus sourced from r/goingmedieval discussions and Steam reviews. Roadmap information from official developer communications.</p>
    </div>
  );
}
