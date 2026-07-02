import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Going Medieval Settler Job Assignment Guide — Optimize Workflow (2026)",
  description: "Master settler job assignment in Going Medieval. Learn skill-based job priority, seasonal rotation, which jobs complement each other, and how to build efficient work schedules.",
  keywords: ["Going Medieval job assignment", "settler jobs", "work priority", "job optimization", "skill specialization"],
};

export default function SettlerJobAssignment() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-extrabold font-heading mb-2 text-parchment-light">
        Settler <span className="text-amber-600">Job Assignment</span> Guide
      </h1>
      <p className="text-parchment-muted mb-8 max-w-2xl">
        How to assign jobs efficiently, avoid task conflicts, rotate seasonal workloads, and build the most productive colony possible.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold font-heading mb-4 text-parchment-light">The Priority System: How Jobs Get Done</h2>
        <p className="text-parchment-muted leading-relaxed mb-3">
          Each settler has a <strong className="text-parchment-light">job priority panel</strong> (1-5 scale) where you assign which tasks they will perform. Priority 1 tasks are done first, priority 5 last. A settler with Cooking at priority 1 and Hauling at priority 5 will cook until there are no cooking tasks, then haul. The key insight: <strong className="text-amber-600">focus each settler on 2-3 core jobs with the same priority level</strong> rather than giving them 10 jobs at varying priorities.
        </p>
        <p className="text-parchment-muted leading-relaxed">
          A settler assigned 8 different jobs will spend too much time walking between task types — the <strong className="text-parchment-light">walking time tax</strong> can eat 30-40% of their productive hours. Specialize. A dedicated cook, a dedicated farmer, a dedicated builder. Each should have 2-3 complementary jobs that share the same work zone.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold font-heading mb-4 text-parchment-light">Job Types & Best Skill Pairings</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border border-parchment-border text-sm">
            <thead className="bg-parchment-card">
              <tr>
                <th className="p-3 border border-parchment-border text-amber-600">Role</th>
                <th className="p-3 border border-parchment-border text-amber-600">Primary Job</th>
                <th className="p-3 border border-parchment-border text-amber-600">Secondary Jobs</th>
                <th className="p-3 border border-parchment-border text-amber-600">Key Skill</th>
                <th className="p-3 border border-parchment-border text-amber-600">Settlers Needed (8-pop colony)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-3 border border-parchment-border text-parchment-light">Cook</td><td className="p-3 border border-parchment-border text-parchment-muted">Cooking</td><td className="p-3 border border-parchment-border text-parchment-muted">Hauling, Plant Cutting</td><td className="p-3 border border-parchment-border text-parchment-muted">Culinary</td><td className="p-3 border border-parchment-border text-parchment-muted">1-2</td></tr>
              <tr><td className="p-3 border border-parchment-border text-parchment-light">Farmer</td><td className="p-3 border border-parchment-border text-parchment-muted">Growing, Harvesting</td><td className="p-3 border border-parchment-border text-parchment-muted">Hauling, Plant Cutting</td><td className="p-3 border border-parchment-border text-parchment-muted">Botany</td><td className="p-3 border border-parchment-border text-parchment-muted">2-3</td></tr>
              <tr><td className="p-3 border border-parchment-border text-parchment-light">Builder</td><td className="p-3 border border-parchment-border text-parchment-muted">Construction</td><td className="p-3 border border-parchment-border text-parchment-muted">Mining, Hauling</td><td className="p-3 border border-parchment-border text-parchment-muted">Construction</td><td className="p-3 border border-parchment-border text-parchment-muted">1-2</td></tr>
              <tr><td className="p-3 border border-parchment-border text-parchment-light">Miner</td><td className="p-3 border border-parchment-border text-parchment-muted">Mining</td><td className="p-3 border border-parchment-border text-parchment-muted">Hauling, Construction</td><td className="p-3 border border-parchment-border text-parchment-muted">Mining</td><td className="p-3 border border-parchment-border text-parchment-muted">1</td></tr>
              <tr><td className="p-3 border border-parchment-border text-parchment-light">Crafter</td><td className="p-3 border border-parchment-border text-parchment-muted">Tailoring, Smithing</td><td className="p-3 border border-parchment-border text-parchment-muted">Hauling</td><td className="p-3 border border-parchment-border text-parchment-muted">Crafting</td><td className="p-3 border border-parchment-border text-parchment-muted">1</td></tr>
              <tr><td className="p-3 border border-parchment-border text-parchment-light">Hunter</td><td className="p-3 border border-parchment-border text-parchment-muted">Hunting</td><td className="p-3 border border-parchment-border text-parchment-muted">Hauling, Animal Handling</td><td className="p-3 border border-parchment-border text-parchment-muted">Marksman</td><td className="p-3 border border-parchment-border text-parchment-muted">1</td></tr>
              <tr><td className="p-3 border border-parchment-border text-parchment-light">Hauler</td><td className="p-3 border border-parchment-border text-parchment-muted">Hauling</td><td className="p-3 border border-parchment-border text-parchment-muted">Cleaning, Plant Cutting</td><td className="p-3 border border-parchment-border text-parchment-muted">Any</td><td className="p-3 border border-parchment-border text-parchment-muted">1-2</td></tr>
              <tr><td className="p-3 border border-parchment-border text-parchment-light">Researcher</td><td className="p-3 border border-parchment-border text-parchment-muted">Research</td><td className="p-3 border border-parchment-border text-parchment-muted">Hauling</td><td className="p-3 border border-parchment-border text-parchment-muted">Intellectual</td><td className="p-3 border border-parchment-border text-parchment-muted">1 (early), 0 (late)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold font-heading mb-4 text-parchment-light">Jobs That Conflict — Avoid These Combinations</h2>
        <div className="space-y-3">
          <div className="border border-parchment-border bg-parchment-card p-4">
            <h3 className="font-heading font-semibold text-red-400 mb-1">❌ Cooking + Hunting on the same settler</h3>
            <p className="text-parchment-muted text-sm">These jobs happen in completely different zones. Your cook will walk halfway across the map to hunt a hare, walk back to cook one meal, then walk out again. The walking time tax here is extreme — this settler will be 60% less productive than two specialists.</p>
          </div>
          <div className="border border-parchment-border bg-parchment-card p-4">
            <h3 className="font-heading font-semibold text-red-400 mb-1">❌ Construction + Farming at equal priority</h3>
            <p className="text-parchment-muted text-sm">Both jobs have urgent timers (plants spoil, construction needs completion before raids). At equal priority, the settler bounces between the two, finishing neither quickly. Give one clear priority advantage over the other.</p>
          </div>
          <div className="border border-parchment-border bg-parchment-card p-4">
            <h3 className="font-heading font-semibold text-red-400 mb-1">❌ Research + any high-walking job</h3>
            <p className="text-parchment-muted text-sm">Research requires staying at the research table. Any secondary job that pulls the researcher away from the table (mining, hunting, farming) destroys research throughput. Researchers should have only Hauling at priority 3+ as a secondary.</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold font-heading mb-4 text-parchment-light">Seasonal Job Rotation</h2>
        <p className="text-parchment-muted leading-relaxed mb-3">
          Your job assignments should shift with the seasons. During <strong className="text-parchment-light">spring planting</strong>, temporarily reassign your builder and miner to Farming at priority 1 — get every seed in the ground within 3 days. During <strong className="text-parchment-light">summer</strong>, return to normal assignments. During <strong className="text-parchment-light">autumn harvest</strong>, all hands on deck — every settler except the cook should have Harvesting at priority 1 for 2-3 days. During <strong className="text-parchment-light">winter</strong>, shift focus to construction, crafting, and research — the jobs you could not do while farming.
        </p>
      </section>

      <section className="mt-10 border-t border-parchment-border pt-6">
        <h3 className="text-lg font-heading font-semibold mb-3 text-parchment-light">Related Guides</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
          <a href="/settlers" className="text-amber-600 hover:underline">Settler Management →</a>
          <a href="/settler-skills" className="text-amber-600 hover:underline">Settler Skills Guide →</a>
          <a href="/work-priorities" className="text-amber-600 hover:underline">Work Priorities Setup →</a>
          <a href="/maximize-settler-efficiency" className="text-amber-600 hover:underline">Maximize Efficiency →</a>
          <a href="/specialist-training" className="text-amber-600 hover:underline">Specialist Training →</a>
        </div>
      </section>
    </div>
  );
}
