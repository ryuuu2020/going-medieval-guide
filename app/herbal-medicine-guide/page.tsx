import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Going Medieval Herbal Medicine Guide — Healing Without Medics (2026)",
  description: "Complete Going Medieval herbal medicine guide. Learn how to heal settlers without high Medical skill using herbs, bandages, and natural remedies for wounds, infections, and diseases.",
  keywords: ["Going Medieval healing guide", "herbal medicine", "heal without medic", "wound treatment", "infection prevention"],
};

export default function HerbalMedicineGuide() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-extrabold font-heading mb-2 text-parchment-light">
        Herbal <span className="text-green-600">Medicine</span> Guide
      </h1>
      <p className="text-parchment-muted mb-8 max-w-2xl">
        How to treat wounds, prevent infections, and keep settlers alive when you do not have a high-level medic — using herbs, bandages, and natural remedies.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold font-heading mb-4 text-parchment-light">The Problem: No Medic, Bleeding Settler</h2>
        <p className="text-parchment-muted leading-relaxed mb-3">
          Every colony eventually faces this crisis: a raid leaves a settler bleeding with 4 hours to live, and your best medic has Medical skill 3. The standard advice — "train a medic" — is useless in the moment. <strong className="text-parchment-light">Herbal medicine is your emergency backup system.</strong> It uses common plants, crafted items, and environmental resources to stabilize settlers until a proper medic can treat them, or to heal minor wounds without a medic at all.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold font-heading mb-4 text-parchment-light">Herbal Remedies & Medical Items</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border border-parchment-border text-sm">
            <thead className="bg-parchment-card">
              <tr>
                <th className="p-3 border border-parchment-border text-green-600">Item</th>
                <th className="p-3 border border-parchment-border text-green-600">Crafting Requirements</th>
                <th className="p-3 border border-parchment-border text-green-600">Healing Effect</th>
                <th className="p-3 border border-parchment-border text-green-600">Best For</th>
                <th className="p-3 border border-parchment-border text-green-600">Min Medical Skill</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="p-3 border border-parchment-border text-parchment-light">Basic Bandage</td><td className="p-3 border border-parchment-border text-parchment-muted">Cloth × 2</td><td className="p-3 border border-parchment-border text-parchment-muted">Stops bleeding, +15 HP</td><td className="p-3 border border-parchment-border text-parchment-muted">Emergency bleeding</td><td className="p-3 border border-parchment-border text-parchment-muted">0</td></tr>
              <tr><td className="p-3 border border-parchment-border text-parchment-light">Herbal Poultice</td><td className="p-3 border border-parchment-border text-parchment-muted">Herbs × 3 + Cloth × 1</td><td className="p-3 border border-parchment-border text-parchment-muted">+25 HP, prevents infection</td><td className="p-3 border border-parchment-border text-parchment-muted">Post-combat healing</td><td className="p-3 border border-parchment-border text-parchment-muted">3</td></tr>
              <tr><td className="p-3 border border-parchment-border text-parchment-light">Healing Salve</td><td className="p-3 border border-parchment-border text-parchment-muted">Herbs × 5 + Animal Fat × 2</td><td className="p-3 border border-parchment-border text-parchment-muted">+40 HP over time</td><td className="p-3 border border-parchment-border text-parchment-muted">Deep wounds, burns</td><td className="p-3 border border-parchment-border text-parchment-muted">8</td></tr>
              <tr><td className="p-3 border border-parchment-border text-parchment-light">Medicinal Tea</td><td className="p-3 border border-parchment-border text-parchment-muted">Herbs × 2 + Water</td><td className="p-3 border border-parchment-border text-parchment-muted">+10 HP, +mood, -infection risk</td><td className="p-3 border border-parchment-border text-parchment-muted">Preventative care</td><td className="p-3 border border-parchment-border text-parchment-muted">0</td></tr>
              <tr><td className="p-3 border border-parchment-border text-parchment-light">Antidote</td><td className="p-3 border border-parchment-border text-parchment-muted">Herbs × 4 + Charcoal × 1</td><td className="p-3 border border-parchment-border text-parchment-muted">Cures poison</td><td className="p-3 border border-parchment-border text-parchment-muted">Spider/snake bites</td><td className="p-3 border border-parchment-border text-parchment-muted">10</td></tr>
              <tr><td className="p-3 border border-parchment-border text-parchment-light">Splint</td><td className="p-3 border border-parchment-border text-parchment-muted">Wood × 3 + Cloth × 1</td><td className="p-3 border border-parchment-border text-parchment-muted">Fixes broken bones</td><td className="p-3 border border-parchment-border text-parchment-muted">Fall damage, combat fractures</td><td className="p-3 border border-parchment-border text-parchment-muted">5</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold font-heading mb-4 text-parchment-light">Emergency Protocol: Settler is Bleeding Out</h2>
        <div className="space-y-3">
          <div className="border border-parchment-border bg-parchment-card p-4">
            <h3 className="font-heading font-semibold text-red-400 mb-1">Step 1: Apply Basic Bandage Immediately</h3>
            <p className="text-parchment-muted text-sm">Basic Bandages require Medical skill 0. Every settler can use them. Keep 5+ bandages in a stockpile near your defensive positions — the seconds spent running to storage can be fatal. A bandage stops the bleeding timer, buying you time.</p>
          </div>
          <div className="border border-parchment-border bg-parchment-card p-4">
            <h3 className="font-heading font-semibold text-amber-400 mb-1">Step 2: Move to a Clean, Warm Room</h3>
            <p className="text-parchment-muted text-sm">Wounds treated in dirty rooms have a 30% higher infection chance. Move the wounded settler to a room with a quality rating of at least Decent. A clean floor, a torch or candle, and a bed are the minimum. The room does not need to be a dedicated hospital — any decent-quality bedroom works in an emergency.</p>
          </div>
          <div className="border border-parchment-border bg-parchment-card p-4">
            <h3 className="font-heading font-semibold text-green-400 mb-1">Step 3: Apply Herbal Poultice</h3>
            <p className="text-parchment-muted text-sm">Once the bleeding is stopped, apply a Herbal Poultice. The healing-over-time effect works while the settler rests. Assign the settler to bed rest (draft off, restrict to the room) for at least 24 in-game hours. A poultice applied without rest heals only 40% as effectively.</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold font-heading mb-4 text-parchment-light">Where to Find Herbs</h2>
        <ul className="space-y-2 text-parchment-muted">
          <li><strong className="text-parchment-light">Wild harvesting:</strong> Herbs grow naturally in forest and grassland biomes. Look for small green plants with distinct leaves. Mark herb patches on the map with a zone so settlers auto-harvest them.</li>
          <li><strong className="text-parchment-light">Farming:</strong> Assign a growing zone to Herbs in spring. One 5×5 herb plot produces enough for 15+ poultices per season.</li>
          <li><strong className="text-parchment-light">Trading:</strong> Merchants frequently carry herbs at low prices. Buy in bulk during summer when prices are lowest.</li>
          <li><strong className="text-parchment-light">Stockpile rule:</strong> Always maintain 20+ herbs in storage. A single major raid can consume 15 herbs in poultices and teas.</li>
        </ul>
      </section>

      <section className="mt-10 border-t border-parchment-border pt-6">
        <h3 className="text-lg font-heading font-semibold mb-3 text-parchment-light">Related Guides</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
          <a href="/wounded-settler-healing" className="text-amber-600 hover:underline">Wounded Settler Healing →</a>
          <a href="/settler-death-prevention" className="text-amber-600 hover:underline">Settler Death Prevention →</a>
          <a href="/farming" className="text-amber-600 hover:underline">Farming Fundamentals →</a>
          <a href="/temperature-control" className="text-amber-600 hover:underline">Temperature Control →</a>
          <a href="/defense" className="text-amber-600 hover:underline">Defense Strategy →</a>
        </div>
      </section>
    </div>
  );
}
