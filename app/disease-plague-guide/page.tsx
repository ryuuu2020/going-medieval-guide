export const metadata = {
  title: "Going Medieval Disease & Plague Guide — Preventing and Treating Sickness (2026)",
  description: "Complete Going Medieval disease and plague guide. Learn how to prevent infections, treat food poisoning, manage sanitation, and keep your colony healthy through winter and beyond.",
};

const diseaseTypes = [
  { name: "Wound Infection", cause: "Untreated wounds in dirty rooms", symptoms: "Wound turns yellow, settler develops fever", severity: "High", treatment: "Herbal Poultice and clean bed rest", prevention: "Treat wounds in Decent-or-higher quality rooms; keep floors clean" },
  { name: "Food Poisoning", cause: "Eating spoiled or raw food", symptoms: "Vomiting, mood drop, reduced work speed", severity: "Medium", treatment: "Rest, clean water, and Medicinal Tea", prevention: "Always cook food before eating; discard spoiled meals" },
  { name: "Cold / Hypothermia", cause: "Prolonged cold exposure without warm clothing", symptoms: "Reduced movement speed, shivering, potential death", severity: "High in winter", treatment: "Move indoors near a heat source; equip warm clothing", prevention: "Assign wool or leather clothing before winter; heat all living quarters" },
  { name: "Heat Exhaustion", cause: "Working near furnaces in summer without breaks", symptoms: "Mood drop, occasional fainting, reduced work speed", severity: "Medium", treatment: "Rest in a cool room; provide ale or tea", prevention: "Rotate furnace workers; build ventilation in forge areas" },
  { name: "Plague (Outbreak)", cause: "Rat infestation near food stockpiles", symptoms: "Spreads between settlers; rapid mood collapse", severity: "Critical", treatment: "Isolate infected; apply Antidote; burn contaminated food", prevention: "Keep food in raised storage; maintain distance between kitchen and refuse" },
];

const sanitationChecks = [
  { area: "Kitchen", risk: "Food contamination", requirement: "Floor must be paved; no blood or vomit nearby", tip: "Build kitchen at least 5 tiles from refuse pile" },
  { area: "Hospital / Recovery Room", risk: "Wound infection", requirement: "Room quality Decent or higher", tip: "Add a window and rug for quality boost; keep separate from living quarters" },
  { area: "Food Stockpile", risk: "Spoilage and rat infestation", requirement: "Enclosed room with door; preferably underground", tip: "Build a root cellar for winter storage; spoilage is slower underground" },
  { area: "Refuse / Corpse Pile", risk: "Plague, mood penalty", requirement: "At least 15 tiles from any living space", tip: "Build a dedicated dump zone downwind; assign haulers to clean daily" },
  { area: "Well / Water Source", risk: "Contamination from nearby waste", requirement: "No refuse within 10 tiles", tip: "Build wells on natural terrain, not on paved floors, to maintain water flow" },
];

const diseaseFaqs = [
  { q: "Can diseases spread between settlers?", a: "Yes. Plague outbreaks can spread from settler to settler if they share living spaces or food stockpiles. Isolate infected settlers immediately by drafting them and moving them to a separate room with their own food supply. Assign a dedicated caretaker with Medical skill 5 or higher to treat them." },
  { q: "How do I know if food is spoiled?", a: "Hover over the food item in the stockpile. Spoiled food shows a red icon and a spoilage timer. Food stored in a root cellar or underground room spoils significantly slower than food in an above-ground stockpile. Cooked meals spoil faster than raw ingredients, so cook only what you need." },
  { q: "What is the best room quality for preventing infections?", a: "Rooms rated Decent or higher significantly reduce infection risk. A Decent room requires a clean floor, at least one light source, a bed, and a door. Adding a window, rug, or paintings can push the quality to Good or Fine, further reducing infection chance to near zero." },
];

const related = [
  { href: "/herbal-medicine-guide", label: "Herbal Medicine Guide" },
  { href: "/wounded-settler-healing", label: "Wounded Settler Healing" },
  { href: "/food-preservation", label: "Food Preservation" },
  { href: "/winter-survival", label: "Winter Survival" },
  { href: "/temperature-control", label: "Temperature Control" },
  { href: "/water-well-placement", label: "Water Well Placement" },
];

export default function DiseasePlagueGuidePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">

      <h1 className="font-display text-3xl lg:text-4xl font-bold text-ink mb-2">
        Disease &amp; <span className="text-vermillion">Plague</span> Guide
      </h1>
      <p className="font-serif text-base text-ink-light leading-relaxed mb-8 max-w-2xl">
        How to prevent infections, treat food poisoning, manage sanitation, and keep your colony healthy through winter and beyond. A single plague outbreak can wipe out half your settlers if you are unprepared.
      </p>

      {/* Intro */}
      <section className="mb-8">
        <p className="font-serif text-base text-ink-light leading-relaxed drop-cap">
          Diseases in Going Medieval are not random bad luck. They are the direct result of poor colony management. Every disease has a cause, and every cause has a prevention. Understanding the disease types and their triggers is the first step toward a self-sustaining colony that never loses a settler to sickness. This guide covers every disease type in the game, sanitation best practices, a step-by-step plague response protocol, and a winter disease prevention checklist. For related topics, see our <a href="/herbal-medicine-guide" className="text-vermillion hover:underline">Herbal Medicine Guide</a> and <a href="/wounded-settler-healing" className="text-vermillion hover:underline">Wounded Settler Healing</a> guide.
        </p>
      </section>

      {/* Disease Types Table */}
      <section className="mt-8">
        <h2 className="font-display text-2xl font-semibold text-ink mb-4">Common Diseases in Going Medieval</h2>
        <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
          Going Medieval simulates several disease types, each tied to a specific cause. Wound infections arise when injuries are left untreated in dirty environments. Food poisoning strikes when settlers consume spoiled or raw meals. Hypothermia and heat exhaustion are temperature-related conditions that reflect poor clothing or ventilation planning. The plague is the most dangerous: it spreads between settlers and can decimate a colony within days if left unchecked. The table below summarizes every disease type, its cause, symptoms, severity, treatment, and prevention strategy.
        </p>
        <div className="overflow-x-auto">
          <table className="parchment-table w-full">
            <thead>
              <tr>
                <th className="px-4 py-3 text-left font-display text-lg text-ink">Disease</th>
                <th className="px-4 py-3 text-left font-display text-lg text-ink">Cause</th>
                <th className="px-4 py-3 text-left font-display text-lg text-ink">Symptoms</th>
                <th className="px-4 py-3 text-left font-display text-lg text-ink">Severity</th>
                <th className="px-4 py-3 text-left font-display text-lg text-ink">Treatment</th>
                <th className="px-4 py-3 text-left font-display text-lg text-ink">Prevention</th>
              </tr>
            </thead>
            <tbody>
              {diseaseTypes.map((d) => (
                <tr key={d.name}>
                  <td className="px-4 py-3 font-serif text-base text-ink-light font-semibold">{d.name}</td>
                  <td className="px-4 py-3 font-serif text-base text-ink-light">{d.cause}</td>
                  <td className="px-4 py-3 font-serif text-base text-ink-light">{d.symptoms}</td>
                  <td className="px-4 py-3 font-serif text-base text-ink-light">{d.severity}</td>
                  <td className="px-4 py-3 font-serif text-base text-ink-light">{d.treatment}</td>
                  <td className="px-4 py-3 font-serif text-base text-ink-light">{d.prevention}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Sanitation Audit Table */}
      <section className="mt-8">
        <h2 className="font-display text-2xl font-semibold text-ink mb-4">Sanitation Audit: Is Your Colony Safe?</h2>
        <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
          Most disease outbreaks trace back to one of five sanitation failures. Run this checklist on your colony after the first winter to catch problems before they become deadly. The most common mistake is placing the refuse pile too close to the kitchen. Wind carries contamination particles, and settlers walking through refuse track germs into food preparation areas. The second most common failure is leaving blood and vomit on floors, which dramatically increases wound infection risk for any settler treated in that room.
        </p>
        <div className="overflow-x-auto">
          <table className="parchment-table w-full">
            <thead>
              <tr>
                <th className="px-4 py-3 text-left font-display text-lg text-ink">Area</th>
                <th className="px-4 py-3 text-left font-display text-lg text-ink">Risk</th>
                <th className="px-4 py-3 text-left font-display text-lg text-ink">Minimum Requirement</th>
                <th className="px-4 py-3 text-left font-display text-lg text-ink">Pro Tip</th>
              </tr>
            </thead>
            <tbody>
              {sanitationChecks.map((s) => (
                <tr key={s.area}>
                  <td className="px-4 py-3 font-serif text-base text-ink-light font-semibold">{s.area}</td>
                  <td className="px-4 py-3 font-serif text-base text-ink-light">{s.risk}</td>
                  <td className="px-4 py-3 font-serif text-base text-ink-light">{s.requirement}</td>
                  <td className="px-4 py-3 font-serif text-base text-ink-light">{s.tip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Plague Protocol */}
      <section className="mt-8">
        <h2 className="font-display text-2xl font-semibold text-ink mb-4">The Plague Protocol: Step-by-Step Response</h2>
        <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
          If a settler shows plague symptoms (fever, vomiting, rapid mood collapse, and a disease icon on their portrait), you have approximately two in-game days before it spreads. Follow this protocol immediately. Hesitation is the leading cause of plague deaths in Going Medieval colonies.
        </p>
        <div className="space-y-3">
          <div className="aged-border p-4 rounded">
            <h3 className="font-display text-lg font-semibold text-vermillion mb-1">Step 1: Isolate Immediately</h3>
            <p className="font-serif text-base text-ink-light leading-relaxed">Draft the infected settler and move them to a room at least 10 tiles from any other living space. Assign a separate food stockpile with 10 or more cooked meals. Build a door and forbid other settlers from entering.</p>
          </div>
          <div className="aged-border p-4 rounded">
            <h3 className="font-display text-lg font-semibold text-accent mb-1">Step 2: Assign a Dedicated Caretaker</h3>
            <p className="font-serif text-base text-ink-light leading-relaxed">Select a settler with Medical skill 5 or higher. Set their work priority to only Medical and Hauling. This settler will bring food, apply poultices, and monitor the patient. Keep the caretaker away from the main food stockpile when possible.</p>
          </div>
          <div className="aged-border p-4 rounded">
            <h3 className="font-display text-lg font-semibold text-accent mb-1">Step 3: Treat with Antidote or Poultice</h3>
            <p className="font-serif text-base text-ink-light leading-relaxed">If you have an Antidote (requires Medical skill 10, Herbs x4, and Charcoal x1), apply it immediately. If not, apply a Herbal Poultice every 12 in-game hours. Keep the patient on bed rest until the disease icon disappears. This typically takes several days.</p>
          </div>
          <div className="aged-border p-4 rounded">
            <h3 className="font-display text-lg font-semibold text-accent mb-1">Step 4: Sterilize the Source</h3>
            <p className="font-serif text-base text-ink-light leading-relaxed">Find the contamination source, which is usually the food stockpile near the refuse pile. Burn all contaminated food by selecting it and choosing the Dump option, then assign a settler to haul it to the refuse zone. Clean blood and vomit from floors using the Clean area command.</p>
          </div>
          <div className="aged-border p-4 rounded">
            <h3 className="font-display text-lg font-semibold text-accent mb-1">Step 5: Prevent Recurrence</h3>
            <p className="font-serif text-base text-ink-light leading-relaxed">Move the refuse pile at least 15 tiles from any building. Build a dedicated food storage room with a door and walls. Assign a daily cleaning schedule: select the Kitchen and Hospital zones and use the Clean command every morning.</p>
          </div>
        </div>
      </section>

      {/* Winter Prevention */}
      <section className="mt-8">
        <h2 className="font-display text-2xl font-semibold text-ink mb-4">Winter Disease Prevention Checklist</h2>
        <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
          Winter is the deadliest season for disease in Going Medieval. Settlers spend more time indoors, ventilation is poor, and food spoilage increases due to longer storage times. Use this checklist before the first snow falls to ensure your colony survives the cold months without a single disease outbreak.
        </p>
        <ul className="space-y-2 font-serif text-base text-ink-light leading-relaxed list-disc pl-6">
          <li><strong className="text-ink">Stockpile 30 or more herbs:</strong> Winter diseases consume herbs faster than any other resource. A 5x5 herb plot harvested in autumn should cover your needs.</li>
          <li><strong className="text-ink">Build a dedicated recovery room:</strong> A 3x3 room with a bed, table, and window. Room quality Decent or higher. This is your hospital.</li>
          <li><strong className="text-ink">Heat all living quarters:</strong> Place a brazier or fireplace in every bedroom. Cold settlers get sick; warm settlers do not.</li>
          <li><strong className="text-ink">Verify food freshness:</strong> Check every food item in your stockpile. Move anything with low freshness to a root cellar. Spoiled food causes food poisoning, which weakens the immune system and makes other diseases more likely.</li>
          <li><strong className="text-ink">Assign cleaning duties:</strong> Set one settler with Hauling priority to clean blood and vomit daily. Filthy floors significantly increase infection risk.</li>
          <li><strong className="text-ink">Keep 10 or more bandages ready:</strong> Winter raids still happen. Untreated wounds in cold, dirty rooms almost always lead to infections.</li>
        </ul>
      </section>

      {/* FAQ */}
      <section className="mt-12">
        <h2 className="font-display text-2xl font-semibold text-ink mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {diseaseFaqs.map((faq) => (
            <div key={faq.q}>
              <h3 className="font-display text-xl font-semibold text-ink mb-2">{faq.q}</h3>
              <p className="font-serif text-base text-ink-light leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Related Guides */}
      <section className="mt-12 p-6 aged-border rounded">
        <h2 className="font-display text-2xl font-semibold text-ink mb-4">Related Guides</h2>
        <ul className="list-disc list-inside font-serif text-base text-ink-light leading-relaxed space-y-2">
          {related.map((r) => (
            <li key={r.href}>
              <a href={r.href} className="text-vermillion hover:underline">{r.label}</a>
            </li>
          ))}
        </ul>
      </section>

      {/* Last Updated */}
      <p className="font-serif text-sm text-ink-muted mt-8">
        Last updated: July 12, 2026
      </p>

    </main>
  );
}
