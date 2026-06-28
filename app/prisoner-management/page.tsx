import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Going Medieval Prisoner Management — Complete Guide (2026)",
  description: "Master prisoner management in Going Medieval. Capture raiders, build prison cells, recruit prisoners, and handle prison breaks with proven strategies.",
};

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I stop prisoners from escaping?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Prison escapes happen when the prison door is weak (use iron doors), the prisoner's mood drops too low, or there are weapons nearby. Place a 1-tile stockpile zone for clubs near the guard post so your warden has a non-lethal weapon ready for subduing escapees."
        }
      },
      {
        "@type": "Question",
        "name": "Can I execute prisoners I don't want?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, but executions cause significant mood penalties (-8 to -15) for all settlers who witness it. It's better to release unwanted prisoners, which provides a small Speech XP gain and a neutral or slightly positive mood effect. Banishing is the least damaging way to remove unwanted people."
        }
      },
      {
        "@type": "Question",
        "name": "How many prisoners can I manage at once?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "One dedicated warden can manage 2-3 prisoners effectively. Beyond that, recruitment speed drops because the warden spreads their time thin. If you capture more prisoners than you can manage, prioritize the best candidates and release the rest."
        }
      }
    ]
  };

  return (
    <main className="prose prose-invert max-w-none">
      <h1>Going Medieval Prisoner Management — Recruitment & Containment</h1>
      <p className="text-lg text-gray-300 leading-relaxed mb-8">
        Master prisoner management in Going Medieval. Capture raiders, build prison cells, recruit prisoners, and handle prison breaks with proven strategies.
      </p>

<h2>Turn Enemies Into Allies</h2>
<p>Capturing and recruiting prisoners is one of the most efficient ways to grow your colony in Going Medieval. A well-managed prison system can provide a steady stream of new settlers with combat skills, saving you from relying on random wanderers or expensive slave traders.</p>

<h2>Prisoner Management Overview</h2>
<div className="table-wrapper">
<table>
<thead><tr><th>Phase</th><th>Action</th><th>Requirements</th><th>Duration</th><th>Success Factors</th></tr></thead>
<tbody>
<tr><td>Capture</td><td>Down enemy without killing</td><td>Blunt weapons, reduced lethality</td><td>Instant (combat)</td><td>Mace/club users, low damage weapons</td></tr>
<tr><td>Contain</td><td>Move to prison cell</td><td>Designated prison room with bed</td><td>0.5-1 day</td><td>Guarded path to prison</td></tr>
<tr><td>Convert</td><td>Reduce resistance through interaction</td><td>Warden with Speech skill</td><td>3-10 days</td><td>High Speech, good prison conditions</td></tr>
<tr><td>Recruit</td><td>Convince to join colony</td><td>Warden, good prison mood</td><td>2-5 days</td><td>Prisoner mood &gt;30%, Speech skill</td></tr>
</tbody>
</table>
</div>

<h2>Prison Design Best Practices</h2>
<p>Build prison cells underground or in a secure wing of your base. Each cell should be 2x2 minimum with a bed. Keep prisons away from weapon stockpiles and your main entrance — escaping prisoners will grab weapons and fight their way out. Install strong doors (iron or reinforced) and place a guard post nearby.</p>

<h2>Prisoner Mood Management</h2>
<p>Unhappy prisoners resist recruitment and may attempt escape. Provide decent food (not raw meat), a bed, and a torch for light. Keep the cell clean. Avoid torturing prisoners — it lowers resistance faster but creates lasting negative mood effects that make recruitment nearly impossible afterward.</p>

<h2>Which Prisoners to Prioritize</h2>
<p>Prioritize prisoners with high Melee/Marksman skills (future soldiers), Crafting (future crafters), or rare traits like Industrious. Avoid recruiting prisoners with Cannibal, Psychopath, or Lazy traits — they'll cause more problems than they solve. You can see a prisoner's full stats by clicking on them before deciding to recruit.</p>

      <section className="mt-12 mb-8">
        <h2>Frequently Asked Questions</h2>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: How do I stop prisoners from escaping?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: Prison escapes happen when the prison door is weak (use iron doors), the prisoner's mood drops too low, or there are weapons nearby. Place a 1-tile stockpile zone for clubs near the guard post so your warden has a non-lethal weapon ready for subduing escapees.</p>
        </div>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: Can I execute prisoners I don't want?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: Yes, but executions cause significant mood penalties (-8 to -15) for all settlers who witness it. It's better to release unwanted prisoners, which provides a small Speech XP gain and a neutral or slightly positive mood effect. Banishing is the least damaging way to remove unwanted people.</p>
        </div>
        <div className="mb-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
          <h3 className="!text-base !mt-0 font-semibold">Q: How many prisoners can I manage at once?</h3>
          <p className="text-sm text-gray-300 !mb-0">A: One dedicated warden can manage 2-3 prisoners effectively. Beyond that, recruitment speed drops because the warden spreads their time thin. If you capture more prisoners than you can manage, prioritize the best candidates and release the rest.</p>
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
