import Link from "next/link";

export const metadata = {
  title: "Going Medieval Settler Social Dynamics Guide — Relationships, Marriages, Rivalries & Colony Cohesion | Going Medieval Guide",
  description: "Master settler social dynamics in Going Medieval. Learn how relationships form, how to manage rivalries, maximize marriage benefits, and prevent social breakdown in your colony.",
};

const relationshipLevels = [
  { level: "Stranger (0-20)", effect: "No social interaction bonuses or penalties. Settlers work independently.", duration: "First 2-3 days after arrival", managementStrategy: "Assign them to work near existing settlers to begin social interaction. Shared meals accelerate relationship growth." },
  { level: "Acquaintance (21-40)", effect: "Minor mood bonus from positive interactions. Begins sharing meals together.", duration: "3-7 days of regular interaction", managementStrategy: "Schedule shared recreation time. Build a great hall where settlers congregate for meals — proximity drives relationship progression." },
  { level: "Friend (41-70)", effect: "Significant mood boost when working or relaxing near each other. Will defend each other in combat.", duration: "1-2 weeks, stable once established", managementStrategy: "Keep friends assigned to adjacent workstations. Friends working within 5 tiles of each other maintain and strengthen their bond. Separate them and the friendship slowly decays." },
  { level: "Close Friend (71-90)", effect: "Strong mood buff, faster work speed when collaborating, combat synergy bonus", duration: "Long-term, decays slowly", managementStrategy: "Schedule shared leisure activities. Close friends gain an extra mood point from shared recreation. Prioritize keeping them in the same work zone." },
  { level: "Lover / Spouse (91-100)", effect: "Maximum social mood buff, shared bedroom bonus, faster healing when tending each other", duration: "Permanent once established, very slow decay", managementStrategy: "Build a double bed in a private room. Married couples sharing a bedroom get a permanent mood buff. If one spouse dies, the survivor suffers severe long-term mood penalties." },
  { level: "Rival (-40 to -100)", effect: "Mood penalty when near each other, work speed penalty if forced to collaborate, may start fights", duration: "Persistent, difficult to reverse once below -60", managementStrategy: "Physically separate rivals. Assign them to opposite ends of the settlement. Never put rivals on the same work schedule shift. If a fight breaks out, draft both settlers to cancel the social combat." },
];

const socialEvents = [
  { event: "Shared Meal", trigger: "Two settlers eat at the same table in the great hall", effect: "Plus 3-8 relationship points per meal, varies by great hall quality", frequency: "1-2 times per day", optimization: "Build one large dining table instead of multiple small ones. All settlers eating together maximizes social cross-pollination." },
  { event: "Recreation Together", trigger: "Two settlers use recreation objects in the same room during leisure hours", effect: "Plus 5-10 relationship points per session", frequency: "Once per scheduled recreation period", optimization: "Cluster all recreation objects (chess boards, dart boards) in one room. Scattered recreation rooms reduce social interaction." },
  { event: "Rescue in Combat", trigger: "One settler rescues and tends a downed ally during or after battle", effect: "Plus 15-25 relationship points (massive boost)", frequency: "Rare — only triggers on combat rescue", optimization: "Assign the colony doctor to also be a combat medic. Rescuing the same settler multiple times builds extremely strong bonds — this can create the colony core social group." },
  { event: "Insult or Argument", trigger: "Random negative interaction between settlers with incompatible traits", effect: "Minus 5-15 relationship points, may cascade if witnessed", frequency: "Unpredictable, more common with negative traits", optimization: "Check settler traits before recruitment. Cannibal, Bloodlust, and Abrasive traits cause frequent negative social events. Avoid recruiting settlers with these traits unless the colony is very small." },
  { event: "Shared Bedroom (Married)", trigger: "Married couple assigned to the same bedroom with a double bed", effect: "Permanent plus 5 mood buff, slow relationship growth over time", frequency: "Continuous while sharing bedroom", optimization: "Build a private bedroom of at least 4x4 tiles with good-quality furniture. The room quality bonus stacks with the shared bedroom bonus for maximum mood impact." },
];

const traitCompatibilities = [
  { traitPair: "Industrious + Creative", compatibility: "High — work speed synergy", outcome: "When working within 3 tiles of each other, both gain a small work speed bonus. These pairs are ideal for workshop assignments — put them in adjacent crafting stations." },
  { traitPair: "Kind + Empathetic", compatibility: "Very High — mutual mood support", outcome: "These settlers actively comfort each other when one has low mood. They become the emotional anchors of the colony. Protect them — losing one devastates the other." },
  { traitPair: "Greedy + Greedy", compatibility: "Low — resource competition", outcome: "Two greedy settlers competing for the best bedroom, best meals, and best equipment creates constant friction. Give them equal-quality everything to minimize conflict." },
  { traitPair: "Cannibal + Anyone", compatibility: "Very Low — universal disgust", outcome: "Non-cannibal settlers take a permanent relationship penalty with cannibals once they discover the trait. Isolate cannibal settlers or do not recruit them." },
  { traitPair: "Night Owl + Early Bird", compatibility: "Low — never see each other", outcome: "These settlers naturally avoid each other due to opposite schedules, which prevents conflict but also prevents friendship. This is actually a useful pairing for rival management — put rivals on opposite schedules." },
];

export default function SettlerSocialDynamicsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="chapter-heading font-display text-4xl mb-2">
        Settler Social Dynamics
      </h1>
      <p className="text-ink-faded text-lg mb-8 drop-cap">
        Your settlers are not robots — they fall in love, hold grudges, make friends, and occasionally throw punches at each other in the great hall. The social layer of Going Medieval is as important as food production or wall construction, yet most players treat it as background noise until a colony-wide mood spiral kills everyone. This guide explains how relationships work, how to engineer a socially cohesive colony, and how to prevent social breakdowns that cascade into colony failure.
      </p>

      {/* Relationship Levels */}
      <h2 className="chapter-heading font-display text-2xl mt-10 mb-4">
        Relationship Levels — From Stranger to Spouse
      </h2>
      <p className="text-ink-light mb-4">
        Every pair of settlers has a hidden relationship score ranging from -100 (mortal enemies) to 100 (soulmates). This score changes through social events, shared activities, and trait interactions. Understanding each relationship tier helps you decide who works together, who lives together, and who needs to be kept apart.
      </p>
      <div className="overflow-x-auto mb-8">
        <table className="parchment-table w-full text-left text-sm">
          <thead>
            <tr className="border-b border-ink-faded/20">
              <th className="py-2 px-3 font-display text-accent">Level</th>
              <th className="py-2 px-3 font-display text-accent">Effect</th>
              <th className="py-2 px-3 font-display text-accent">Duration</th>
              <th className="py-2 px-3 font-display text-accent">Strategy</th>
            </tr>
          </thead>
          <tbody>
            {relationshipLevels.map((r, i) => (
              <tr key={i} className="border-b border-ink-faded/10">
                <td className="py-2 px-3 font-display text-accent">{r.level}</td>
                <td className="py-2 px-3">{r.effect}</td>
                <td className="py-2 px-3">{r.duration}</td>
                <td className="py-2 px-3">{r.managementStrategy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Social Events */}
      <h2 className="chapter-heading font-display text-2xl mt-10 mb-4">
        Social Events — What Drives Relationships Up or Down
      </h2>
      <p className="text-ink-light mb-4">
        Relationships are not passive — they change through specific social events that trigger based on settler proximity, schedules, and traits. You can engineer positive social events and suppress negative ones by controlling where and when settlers interact.
      </p>
      <div className="overflow-x-auto mb-8">
        <table className="parchment-table w-full text-left text-sm">
          <thead>
            <tr className="border-b border-ink-faded/20">
              <th className="py-2 px-3 font-display text-accent">Event</th>
              <th className="py-2 px-3 font-display text-accent">Trigger</th>
              <th className="py-2 px-3 font-display text-accent">Effect</th>
              <th className="py-2 px-3 font-display text-accent">Frequency</th>
              <th className="py-2 px-3 font-display text-accent">Optimization</th>
            </tr>
          </thead>
          <tbody>
            {socialEvents.map((s, i) => (
              <tr key={i} className="border-b border-ink-faded/10">
                <td className="py-2 px-3 font-display text-accent">{s.event}</td>
                <td className="py-2 px-3">{s.trigger}</td>
                <td className="py-2 px-3">{s.effect}</td>
                <td className="py-2 px-3">{s.frequency}</td>
                <td className="py-2 px-3">{s.optimization}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Trait Compatibility */}
      <h2 className="chapter-heading font-display text-2xl mt-10 mb-4">
        Trait Compatibility — Which Settlers Get Along
      </h2>
      <p className="text-ink-light mb-4">
        Not all settlers are compatible. Traits create natural affinities and conflicts. Before recruiting a new settler, check their traits against your existing colony to predict social outcomes. A single incompatible settler can destroy a harmonious colony faster than any raid.
      </p>
      <div className="overflow-x-auto mb-8">
        <table className="parchment-table w-full text-left text-sm">
          <thead>
            <tr className="border-b border-ink-faded/20">
              <th className="py-2 px-3 font-display text-accent">Trait Pair</th>
              <th className="py-2 px-3 font-display text-accent">Compatibility</th>
              <th className="py-2 px-3 font-display text-accent">Outcome</th>
            </tr>
          </thead>
          <tbody>
            {traitCompatibilities.map((t, i) => (
              <tr key={i} className="border-b border-ink-faded/10">
                <td className="py-2 px-3 font-display text-accent">{t.traitPair}</td>
                <td className="py-2 px-3">{t.compatibility}</td>
                <td className="py-2 px-3">{t.outcome}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Social Breakdown Prevention */}
      <h2 className="chapter-heading font-display text-2xl mt-10 mb-4">
        Preventing Social Breakdown — Red Flags and Emergency Fixes
      </h2>
      <p className="text-ink-light mb-4">
        A social breakdown occurs when multiple negative mood modifiers stack across your colony, triggered by a cascade of bad social events. One death causes grief, which lowers mood, which triggers insults, which creates rivals, which leads to fights, which causes injuries, which consumes medicine, which stresses the doctor — and the colony spirals. Here is how to stop it before it starts:
      </p>
      <ol className="list-decimal pl-6 space-y-2 text-ink-light mb-8">
        <li><strong>Watch the mood panel.</strong> Check the mood tab weekly. Any settler below 30 percent mood is a ticking time bomb. Address the root cause immediately — do not wait for the crisis.</li>
        <li><strong>Isolate grieving settlers.</strong> After a death, the grieving settler gets a massive mood penalty for several days. Reduce their workload, increase recreation time, and keep them near high-relationship friends who provide comfort.</li>
        <li><strong>Separate rivals before they fight.</strong> If two settlers show a rivalry, move their beds, workstations, and recreation schedules to opposite sides of the colony. A physical fight causes injury and cascading mood penalties for everyone who witnesses it.</li>
        <li><strong>Build quality bedrooms.</strong> A private, well-furnished bedroom is the single most reliable mood buffer. Even during a crisis, a settler who sleeps in a quality bedroom wakes up with a positive mood baseline. This one investment prevents more social breakdowns than any other measure.</li>
        <li><strong>Stockpile luxury food and drink.</strong> Fine meals and alcohol provide emergency mood boosts. Keep a stockpile of the best food and drink specifically for crisis management. When a settler is close to breaking, manually direct them to consume luxury items for an immediate mood injection.</li>
      </ol>

      {/* FAQ */}
      <h2 className="chapter-heading font-display text-2xl mt-10 mb-4">FAQ</h2>

      <div className="bg-parchment-light rounded-lg p-5 mb-4">
        <h3 className="font-display text-accent text-lg mb-2">Can settlers get married and have children?</h3>
        <p className="text-ink-light">
          Settlers can form romantic relationships and get married (indicated by the Lover and Spouse relationship status), which provides significant mood benefits when they share a bedroom. However, as of the current version, settlers cannot have children. The marriage system affects mood, work efficiency when collaborating, and combat behavior (spouses fight harder to protect each other). Marriages are a powerful tool for colony stability — a married pair forms a social anchor that buffers against colony-wide mood swings.
        </p>
      </div>

      <div className="bg-parchment-light rounded-lg p-5 mb-4">
        <h3 className="font-display text-accent text-lg mb-2">How do I fix a rivalry between two important settlers?</h3>
        <p className="text-ink-light">
          Reversing a rivalry (relationship below -40) is difficult but not impossible. The strategy requires patience: separate them physically for at least a week to stop negative interactions, then carefully reintroduce them through positive shared activities (meals in a high-quality great hall, recreation together, combat rescue if possible). Assign them to tasks where they benefit each other indirectly — one produces materials the other uses, creating a passive positive association. If the rivalry is severe (below -80), permanent separation may be the only viable option. Exiling one settler is sometimes the least bad choice for colony health.
        </p>
      </div>

      <div className="bg-parchment-light rounded-lg p-5 mb-4">
        <h3 className="font-display text-accent text-lg mb-2">Does colony size affect social dynamics?</h3>
        <p className="text-ink-light">
          Yes, significantly. Small colonies of 3-6 settlers naturally develop strong social bonds because everyone interacts frequently. Large colonies of 12-plus settlers face social fragmentation — settlers form cliques, and some settlers become socially isolated, leading to mood penalties. The solution for large colonies is deliberate social engineering: build one central great hall, schedule overlapping recreation time for all settlers, and rotate work assignments periodically so different settlers interact. The goal is to prevent anyone from becoming a social outcast.
        </p>
      </div>

      <aside className="border-l-4 border-accent pl-4 mt-10">
        <h3 className="font-display text-lg text-ink mb-2">Related Guides</h3>
        <ul className="space-y-1">
          <li><Link href="/settler-mood-system" className="text-accent hover:underline">Settler Mood System</Link></li>
          <li><Link href="/relationships-system" className="text-accent hover:underline">Relationships System</Link></li>
          <li><Link href="/happiness-guide" className="text-accent hover:underline">Happiness Guide</Link></li>
          <li><Link href="/mood-management-guide" className="text-accent hover:underline">Mood Management Guide</Link></li>
          <li><Link href="/great-hall" className="text-accent hover:underline">Great Hall Design</Link></li>
        </ul>
      </aside>

      <p className="text-ink-faded text-sm mt-10">Last updated: July 3, 2026. Social dynamics mechanics sourced from community observation, trait interaction testing, and r/goingmedieval colony management discussions.</p>
    </div>
  );
}
