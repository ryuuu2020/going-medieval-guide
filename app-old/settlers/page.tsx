import type { Metadata } from "next";
import { settlerSkills } from "@/lib/data";

export const metadata: Metadata = {
  title: "Settlers | Going Medieval Guide",
  description:
    "Complete guide to settlers and villagers in Going Medieval. Master all 12 skills, the mood system, needs (food, sleep, comfort, safety), traits, relationships, and work assignment strategies.",
};

const skillCategories = ["Crafting", "Labor", "Research", "Support", "Combat", "Social"];

export default function SettlersPage() {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem" }}>
      <h1 style={{ marginBottom: "0.5rem" }}>Settlers &amp; Villagers Guide</h1>
      <p style={{ color: "var(--color-text-muted)", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: "2rem" }}>
        Your settlers are the heart of your colony. Learn how to manage their 12 skills,
        keep them happy through the mood system, fulfill their needs, handle traits and
        relationships, and optimize work assignments for a thriving medieval community.
      </p>

      {/* FAQ */}
      <h2 style={{ marginBottom: "1rem" }}>Quick Answers</h2>
      <div className="faq-snippets">
        <details>
          <summary>How do I keep my settlers happy in Going Medieval?</summary>
          <p>
            Settler happiness is governed by the mood system. Fulfill their basic needs first:
            provide regular meals (cooked meals give better mood than raw food), comfortable beds
            in private rooms, a warm and safe shelter, and recreation time. The Great Hall provides
            massive mood bonuses when properly furnished. Avoid overworking settlers — give them
            designated recreation hours. Settlers with positive moods work faster, get into fewer
            fights, and are less likely to have mental breaks. A single unhappy settler can drag
            down the whole colony through social fights and work slowdowns.
          </p>
        </details>
        <details>
          <summary>What settlers should I choose when starting a new game?</summary>
          <p>
            Prioritize settlers with high Intellectual skill (for fast research), Construction
            (for fast building), and Cooking (for good meals). A balanced starting trio should
            cover these roles: one researcher/crafter (high Intellectual, Smithing, or Tailoring),
            one builder/laborer (high Construction, Mining), and one cook/farmer (high Cooking,
            Farming). Avoid settlers with negative traits like Pyromaniac or Bloodlust on higher
            difficulties. Check each settler&apos;s backstory — some provide hidden bonuses like
            faster movement or higher carrying capacity.
          </p>
        </details>
        <details>
          <summary>How does the settler mood system work exactly?</summary>
          <p>
            Mood is calculated from positive and negative modifiers that accumulate throughout 
            the day. Major positive sources: eating a good meal (+5 to +15), sleeping in a 
            comfortable bed (+5), recreation in a Great Hall (+10), and having a bond with a pet
            (+5). Major negative sources: eating raw food (-10), sleeping on the ground (-8), 
            being cold (-5 to -15), seeing a corpse (-10), and being injured (-5 to -20). Mood 
            below 25% triggers mental breaks (berserk, dazed, or fleeing). Keep mood above 70% 
            for optimal performance. The mood threshold for breaks is visible in the settler UI.
          </p>
        </details>
      </div>

      {/* Skills Table */}
      <h2 style={{ marginTop: "3rem", marginBottom: "1rem" }}>All {settlerSkills.length} Settler Skills</h2>
      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
        Settlers have skills across {skillCategories.length} categories. Each skill affects 
        specific activities — assign settlers to tasks matching their highest skills for 
        maximum efficiency. Skills improve through use, so a settler who cooks regularly 
        will see their Cooking skill increase over time.
      </p>

      <div style={{ overflowX: "auto" }}>
        <table>
          <thead>
            <tr>
              <th>Skill</th>
              <th>Category</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {settlerSkills.map((s) => (
              <tr key={s.name}>
                <td style={{ fontWeight: 600, whiteSpace: "nowrap" }}>{s.name}</td>
                <td style={{ whiteSpace: "nowrap" }}>
                  <span style={{
                    padding: "0.2rem 0.6rem",
                    borderRadius: "0.25rem",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    background:
                      s.category === "Combat" ? "rgba(196, 75, 60, 0.2)" :
                      s.category === "Crafting" ? "rgba(201, 144, 58, 0.2)" :
                      s.category === "Labor" ? "rgba(107, 142, 78, 0.2)" :
                      s.category === "Research" ? "rgba(122, 92, 58, 0.3)" :
                      s.category === "Support" ? "rgba(107, 142, 78, 0.2)" :
                      "rgba(168, 152, 128, 0.2)",
                    color:
                      s.category === "Combat" ? "var(--color-danger)" :
                      s.category === "Crafting" ? "var(--color-accent)" :
                      s.category === "Labor" ? "var(--color-success)" :
                      s.category === "Research" ? "var(--color-accent-secondary)" :
                      s.category === "Support" ? "var(--color-success)" :
                      "var(--color-text-muted)",
                  }}>
                    {s.category}
                  </span>
                </td>
                <td style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", lineHeight: 1.5 }}>{s.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mood System */}
      <h2 style={{ marginTop: "3rem", marginBottom: "1rem" }}>Understanding the Mood System</h2>
      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
        The mood system is the core mechanic governing settler behavior. Mood ranges from 
        0% (miserable) to 100% (ecstatic) and determines work efficiency, social behavior, 
        and the likelihood of mental breakdowns. Managing mood is as important as managing 
        food or defense.
      </p>

      <h3 style={{ fontSize: "1.15rem", marginBottom: "0.75rem" }}>Core Needs</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
        <div className="card">
          <h3 style={{ margin: "0 0 0.5rem", fontSize: "1.05rem" }}>Food</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            Settlers need to eat roughly once per day. Raw food provides minimal nutrition 
            and a mood penalty. Cooked meals at a Campfire give a small mood bonus. Advanced 
            meals from a Cooking Station provide significant mood bonuses and better nutrition. 
            Food variety also matters — settlers eating the same meal type repeatedly get 
            diminishing mood returns. Build food stockpiles near your kitchen and dining area, 
            and ensure at least 3 days of food reserve for emergencies. Starvation rapidly 
            decreases mood and can kill settlers within 2-3 days without food.
          </p>
        </div>
        <div className="card">
          <h3 style={{ margin: "0 0 0.5rem", fontSize: "1.05rem" }}>Sleep</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            Settlers need 6-8 hours of sleep per day. Sleeping on the ground (no bed) causes 
            a severe mood penalty and back pain. Basic beds provide neutral comfort. Improved 
            beds (crafted at the Carpenter Bench) give comfort bonuses. Private bedrooms with 
            doors provide additional mood benefits over dormitory-style sleeping arrangements. 
            Assign sleeping schedules in the Settlers tab — night owls can work while others 
            sleep, keeping production running around the clock. A well-rested settler works 
            faster and is less prone to social conflicts.
          </p>
        </div>
        <div className="card">
          <h3 style={{ margin: "0 0 0.5rem", fontSize: "1.05rem" }}>Comfort &amp; Temperature</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            Settlers are affected by ambient temperature. Too hot or too cold causes mood 
            penalties and can lead to heatstroke or hypothermia. Winter clothing (crafted at 
            the Tailor Workshop) provides cold protection. Campfires, braziers, and indoor 
            spaces retain heat. During heat waves in summer, keep settlers indoors or in 
            shaded areas. Dress settlers appropriately for each season — swap winter coats 
            for lighter clothing during summer months. A temperature between 15°C and 25°C 
            is the comfort sweet spot.
          </p>
        </div>
        <div className="card">
          <h3 style={{ margin: "0 0 0.5rem", fontSize: "1.05rem" }}>Safety</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            Settlers feel unsafe when exposed to danger — being near enemies, seeing corpses, 
            or being outside during a raid all generate safety-related mood penalties. Corpses 
            must be buried or cremated quickly; a corpse left in a common area can tank colony 
            mood for days. The Stone Keep and reinforced walls provide safety mood bonuses 
            during raids. Settlers with the Brave trait are less affected by danger, while 
            those with Cowardly trait suffer amplified fear penalties.
          </p>
        </div>
      </div>

      {/* Traits and Relationships */}
      <h2 style={{ marginTop: "3rem", marginBottom: "1rem" }}>Traits &amp; Relationships</h2>
      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
        Every settler has traits that modify their behavior, skills, and mood responses. 
        Traits are assigned at character creation and cannot be changed. Settlers also 
        form relationships with each other over time — positive relationships boost mood 
        when settlers are near each other, while negative relationships can lead to fights.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2rem" }}>
        <div>
          <h3 style={{ fontSize: "1.15rem", margin: "0 0 0.5rem" }}>Positive Traits</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            <strong style={{ color: "var(--color-success)" }}>Hard Worker</strong> — Increased work speed. 
            <strong style={{ color: "var(--color-success)" }}> Fast Learner</strong> — Skills level up faster. 
            <strong style={{ color: "var(--color-success)" }}> Iron-Willed</strong> — Resistant to mental breaks. 
            <strong style={{ color: "var(--color-success)" }}> Night Owl</strong> — Works well at night, no darkness penalty. 
            <strong style={{ color: "var(--color-success)" }}> Beautiful</strong> — Positive social interactions with other settlers.
          </p>
        </div>
        <div>
          <h3 style={{ fontSize: "1.15rem", margin: "0 0 0.5rem" }}>Negative Traits</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            <strong style={{ color: "var(--color-danger)" }}>Pyromaniac</strong> — May start fires when unhappy. 
            <strong style={{ color: "var(--color-danger)" }}> Bloodlust</strong> — Gets mood boosts from violence, but may attack others. 
            <strong style={{ color: "var(--color-danger)" }}> Gourmand</strong> — Eats more food than normal settlers. 
            <strong style={{ color: "var(--color-danger)" }}> Nervous</strong> — More easily frightened, lower mental break threshold. 
            <strong style={{ color: "var(--color-danger)" }}> Abrasive</strong> — Causes negative social interactions with others.
          </p>
        </div>
        <div>
          <h3 style={{ fontSize: "1.15rem", margin: "0 0 0.5rem" }}>Relationships</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            Settlers who work together, share meals, or spend recreation time together build 
            relationships. Positive relationships (friends, lovers, spouses) provide mood 
            boosts when settlers are near each other. Negative relationships (rivals, enemies) 
            can trigger fights that cause injuries and further mood penalties. Assign 
            incompatible settlers to different work zones and sleep areas to minimize conflict. 
            A settler whose spouse dies suffers a massive long-term mood penalty that can 
            take a full season to recover from.
          </p>
        </div>
      </div>

      {/* Managing Assignments */}
      <h2 style={{ marginTop: "3rem", marginBottom: "1rem" }}>Managing Settler Work Assignments</h2>
      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
        The work tab lets you assign settlers to specific tasks and set their daily schedule. 
        Proper assignment management is the difference between a smooth-running colony and 
        one where nothing gets done on time.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
        <div className="card">
          <h3 style={{ fontSize: "1.05rem", margin: "0 0 0.5rem" }}>Role Specialization</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            Don&apos;t make every settler do everything. Assign 1-2 primary roles per settler 
            based on their highest skills. Your researcher should do nothing but research until 
            key techs are unlocked. Your cook should focus on cooking and butchering. Dedicated 
            farmers keep food production steady. Specialization means each settler spends more 
            time doing what they&apos;re best at, resulting in faster work and higher quality output. 
            As your colony grows past 5-6 settlers, you can afford to dedicate one settler 
            exclusively to hauling and cleaning.
          </p>
        </div>
        <div className="card">
          <h3 style={{ fontSize: "1.05rem", margin: "0 0 0.5rem" }}>Schedule Management</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            Set work hours, recreation hours, and sleep hours for each settler in the schedule 
            tab. A typical healthy schedule: 8 hours sleep, 2 hours recreation, 14 hours work. 
            When mood is low, increase recreation time. During harvest season or post-raid 
            cleanup, temporarily extend work hours. Night-shift workers (settlers with Night Owl 
            trait) can keep production running while others sleep, effectively doubling your 
            colony&apos;s productive hours. Be careful not to overwork settlers — extended work 
            hours without adequate recreation will tank mood.
          </p>
        </div>
        <div className="card">
          <h3 style={{ fontSize: "1.05rem", margin: "0 0 0.5rem" }}>Work Priorities</h3>
          <p style={{ color: "var(--color-text-muted)", lineHeight: 1.6, margin: 0 }}>
            Use the priority system (1-4) in the work tab to control which tasks settlers do 
            first. Priority 1 tasks are handled before anything else. Set firefighting, patient 
            treatment, and basic needs to Priority 1 for all settlers. Set specialized tasks to 
            Priority 1 only for the settler assigned to that role. Construction and hauling can 
            be Priority 2-3. Crafting for trade goods can be Priority 4. Revisit priorities 
            when your colony&apos;s needs change — during a raid, everyone should have combat tasks 
            at high priority.
          </p>
        </div>
      </div>

      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7 }}>
        A happy, well-managed settler is the most valuable resource in Going Medieval. 
        Invest time in understanding each settler&apos;s strengths and weaknesses. Assign 
        compatible roommates, respect their needs, and give them purpose through meaningful 
        work. A colony of 6 content settlers will outproduce a colony of 10 miserable ones 
        every time. Remember that settler deaths have lasting consequences — protect your 
        best settlers in combat and prioritize medical care for the wounded.
      </p>
    </div>
  );
}
