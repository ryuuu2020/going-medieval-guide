import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Going Medieval Wounded Settler Healing — Complete Guide (2026)",
  description: "Complete guide to healing wounded settlers in Going Medieval. Medical treatment, infection prevention, bed rest mechanics, and critical care strategies.",
};

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I craft medicine in Going Medieval?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Medicine is crafted at the Apothecary table (unlocked via Medical research) using Herbs. Herbs grow naturally on the map or can be farmed. Each medicine unit requires 3 herbs and a settler with Medical skill to craft."
        }
      },
      {
        "@type": "Question",
        "name": "Why won't my doctor treat wounded settlers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Check that the doctor has Medical prioritized in their job panel, that there are available medical beds, and that medicine is accessible in a stockpile. Also ensure the wounded settler is resting in a bed — they won't receive treatment while walking around."
        }
      },
      {
        "@type": "Question",
        "name": "Can settlers die from untreated wounds?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, and it's one of the most common causes of settler death for new players. A deep wound left untreated will become infected within 1-2 days, and an untreated infection kills within 5-7 days. Always tend to wounds immediately after combat."
        }
      }
    ]
  };

  return (
    <main className="prose prose-invert max-w-none">
      <h1>Going Medieval Wounded Settler Healing — Medical Treatment Guide</h1>
      <p className="text-lg text-gray-300 leading-relaxed mb-8">
        Complete guide to healing wounded settlers in Going Medieval. Medical treatment, infection prevention, bed rest mechanics, and critical care strategies.
      </p>

<h2>When Settlers Get Hurt</h2>
<p>Combat wounds, animal attacks, and workplace accidents are inevitable in Going Medieval. Without proper medical treatment, even minor injuries can become infected, leading to permanent disability or death. This guide covers the complete healing system.</p>

<h2>Injury Severity and Healing Times</h2>
<div className="table-wrapper">
<table>
<thead><tr><th>Injury Type</th><th>Severity</th><th>Healing Time (no med)</th><th>Healing Time (with med)</th><th>Infection Risk</th></tr></thead>
<tbody>
<tr><td>Bruise</td><td>Minor</td><td>0.5-1 day</td><td>0.2-0.5 day</td><td>5%</td></tr>
<tr><td>Cut</td><td>Moderate</td><td>1-2 days</td><td>0.5-1 day</td><td>15%</td></tr>
<tr><td>Deep Wound</td><td>Serious</td><td>3-5 days</td><td>1-2 days</td><td>35%</td></tr>
<tr><td>Broken Bone</td><td>Critical</td><td>7-12 days</td><td>3-5 days</td><td>10%</td></tr>
<tr><td>Infection</td><td>Life-Threatening</td><td>15+ days (may die)</td><td>5-8 days</td><td>N/A (already infected)</td></tr>
<tr><td>Organ Damage</td><td>Permanent</td><td>Never fully heals</td><td>Partial recovery</td><td>50%</td></tr>
</tbody>
</table>
</div>

<h2>The Medical Treatment Process</h2>
<p>Assign a settler with Medical skill as your colony doctor. When a settler is wounded, direct them to a medical bed (or any bed designated for patients). The doctor will automatically tend to them, using medicine from your stockpile if available. Higher Medical skill means faster treatment and lower infection risk.</p>

<h2>Infection Prevention and Treatment</h2>
<p>Wounds left untreated beyond 12 hours have a high chance of becoming infected. Infection is a spiraling condition that worsens daily and can kill within 5-7 days without treatment. Always stockpile herbal medicine (crafted at the Apothecary table from herbs) and keep at least 5 units in reserve.</p>

<h2>Setting Up a Medical Ward</h2>
<p>Designate a dedicated hospital room with at least 2-3 medical beds, a stockpile for medicine nearby, and good lighting. Keep the room clean — dirty environments increase infection risk. Place the hospital near your defensive line so wounded soldiers can reach treatment quickly during and after raids.</p>

<h2>Amputation — The Last Resort</h2>
<p>When a limb develops a critical infection that won't respond to treatment, amputation may be the only way to save the settler's life. This requires a high-Medical-skill doctor and results in permanent stat penalties for the settler. Only amputate when the alternative is certain death.</p>

      <section className="mt-12 mb-8">
        <h2>Frequently Asked Questions</h2>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: How do I craft medicine in Going Medieval?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: Medicine is crafted at the Apothecary table (unlocked via Medical research) using Herbs. Herbs grow naturally on the map or can be farmed. Each medicine unit requires 3 herbs and a settler with Medical skill to craft.</p>
        </div>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: Why won't my doctor treat wounded settlers?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: Check that the doctor has Medical prioritized in their job panel, that there are available medical beds, and that medicine is accessible in a stockpile. Also ensure the wounded settler is resting in a bed — they won't receive treatment while walking around.</p>
        </div>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: Can settlers die from untreated wounds?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: Yes, and it's one of the most common causes of settler death for new players. A deep wound left untreated will become infected within 1-2 days, and an untreated infection kills within 5-7 days. Always tend to wounds immediately after combat.</p>
        </div>

      </section>

      <section className="mt-12 p-6 bg-gray-800/50 rounded-lg border border-gray-700">
        <h2 className="!mt-0">Related Guides</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          <a href="/settlers" className="text-blue-400 hover:text-blue-300 hover:underline text-sm">Settlers Guide</a>
          <a href="/settler-mood-system" className="text-blue-400 hover:text-blue-300 hover:underline text-sm">Mood System</a>
          <a href="/work-priorities-setup" className="text-blue-400 hover:text-blue-300 hover:underline text-sm">Work Priorities</a>
          <a href="/specialist-training" className="text-blue-400 hover:text-blue-300 hover:underline text-sm">Specialist Training</a>
          <a href="/recreation-scheduling" className="text-blue-400 hover:text-blue-300 hover:underline text-sm">Recreation Scheduling</a>
          <a href="/maximize-settler-efficiency" className="text-blue-400 hover:text-blue-300 hover:underline text-sm">Maximize Efficiency</a>
        </div>
      </section>

      <p className="text-sm text-gray-500 mt-8">Last updated: June 2026</p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  );
}
