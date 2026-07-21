{/* Meta description: Going Medieval wound care and herbal medicine guide — the Tend, Patient and Convalesce jobs, self-tending, healing kits, herbs, tallow, honey, wound categories, and post-raid triage for 2026. */}
export const metadata = {
  title: "Going Medieval Herbal Medicine & Wound Care Guide (2026)",
  description:
    "How healing really works in Going Medieval: wound categories, the Tend/Patient/Convalesce jobs, self-tending, and healing supplies — herbs, tallow, honey, and healing kits.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do I need medicine items to heal settlers in Going Medieval?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Any settler with the Tend job enabled can treat wounds with empty hands, and wounds also lose severity naturally over time. What supplies add is a wound tending multiplier: herbs, tallow, honey, and healing kits each improve the quality of a tend when the healer uses them, so stocked colonies simply heal faster and more reliably."
      }
    },
    {
      "@type": "Question",
      "name": "Is self-tending worth enabling?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Only as an emergency fallback. Self-tending is switched on per settler in the Manage panel, and the quality of a self-tend is just 25% of what another settler would achieve, with less skill XP earned on top. It also requires the Tend job to stay enabled for that settler. Use it for isolated workers like hunters, but rely on a dedicated healer for anything serious."
      }
    },
    {
      "@type": "Question",
      "name": "Why did my settler's wound stop needing treatment at low severity?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "That is the minimum severity threshold working as intended. Serious wounds need active tending and rest through the worst of their recovery, but once a wound is roughly 90% healed it drops to a minimum severity level: the settler no longer needs bed rest or tending, keeps only minor lingering effects like slightly reduced walk speed, and the wound finishes healing on its own."
      }
    },
    {
      "@type": "Question",
      "name": "How do I save an unconscious settler?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You do not need to micromanage it. Unconscious settlers cannot walk, so other settlers will automatically carry them to a free bed — this carry-wounded behaviour fires even for settlers without the Tend job enabled, and even outside work hours. Once the casualty is in a bed, your healers take over with normal tending."
      }
    },
    {
      "@type": "Question",
      "name": "Do bruises and minor scrapes need a healer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. The lightest wound category — bruises and similar knocks — cannot be tended at all and simply heals with time. The middle category, such as scratches, benefits from tending but does not force the settler into bed, so they can keep working while it closes. Reserve bed rest and your best healer for the severe category, like broken bones."
      }
    }
  ]
};

export default function HerbalMedicineGuidePage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">

      <h1 className="chapter-heading">Going Medieval Wound Care &amp; Herbal Medicine: Keep Every Settler Alive</h1>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-6">
        <span className="drop-cap">A</span> raid ends, the last bandit flees, and then the real damage report
        arrives: the &quot;Settler wounds need tending&quot; notification. Going Medieval&apos;s health system
        is quietly one of its deepest mechanics — wounds have severity levels, tending has quality levels,
        supplies multiply the results, and the jobs behind it all (Tend, Patient, Convalesce) interact in
        ways the game never explains. Most colonies do not lose settlers to raids; they lose them to
        confusion afterwards. This guide covers how wounds actually heal, which supplies are worth stocking,
        and the exact job setup that turns a post-raid panic into a routine.
      </p>

      {/* How wounds work */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">How Wounds Actually Work</h2>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        Every injury in Going Medieval is a wound with a severity value that ticks down over time. While a
        wound is active it penalises the settler — reduced movement speed, weaker combat performance, worse
        hit chance, impaired motor function — so an untreated injury is never free, even when it is not
        lethal. Wounds fall into three behaviour categories, and knowing which one you are looking at tells
        you exactly how to respond.
      </p>

      <table className="parchment-table mb-8">
        <thead>
          <tr>
            <th>Wound Category</th>
            <th>Typical Examples</th>
            <th>Needs Tending?</th>
            <th>Needs Bed Rest?</th>
            <th>How It Resolves</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Minor knocks</td>
            <td>Bruises and similar light injuries</td>
            <td>No — cannot be tended</td>
            <td>No</td>
            <td>Fades on its own with time</td>
          </tr>
          <tr>
            <td>Moderate wounds</td>
            <td>Scratches and light cuts</td>
            <td>Yes</td>
            <td>No — settler can keep working</td>
            <td>Tending speeds recovery; bed rest optional</td>
          </tr>
          <tr>
            <td>Severe wounds</td>
            <td>Broken bones, deep combat injuries</td>
            <td>Yes</td>
            <td>Yes — days of rest</td>
            <td>Requires active tending plus rest; after roughly 90% healed it hits the minimum severity threshold and finishes on its own with only minor lingering effects</td>
          </tr>
        </tbody>
      </table>

      <div className="aged-border p-4 mb-8">
        <p className="font-serif text-base text-ink-light leading-relaxed">
          <strong>Key Insight:</strong> The minimum severity threshold is your discharge date. A settler with
          a broken leg does not need to lie in bed until the wound vanishes — once it is about 90% healed it
          stops requiring tending or rest, and the settler can return to light duty with only a small
          penalty while it finishes closing. Pulling healers off nearly-recovered patients is correct play,
          not neglect.
        </p>
      </div>

      {/* Jobs */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">The Four Jobs Behind Every Recovery</h2>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        Healing is not one job but four, split between the healer and the patient. Getting all four right is
        the difference between a colony that shrugs off raids and one that slowly bleeds population.
      </p>

      <table className="parchment-table mb-8">
        <thead>
          <tr>
            <th>Job</th>
            <th>Who Does It</th>
            <th>What It Does</th>
            <th>Recommended Setup</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tend</td>
            <td>Your healers</td>
            <td>Treat wounded settlers. Tend quality scales with the settler&apos;s Medicine skill, and tending grants Medicine XP — the same people should do it every time</td>
            <td>High priority for your best one or two Medicine settlers; enabled for everyone as a low-priority backup</td>
          </tr>
          <tr>
            <td>Patient</td>
            <td>The wounded</td>
            <td>Sends the settler to a bed to wait for treatment without fully shutting them down</td>
            <td>High priority for anyone with a severe wound</td>
          </tr>
          <tr>
            <td>Convalesce</td>
            <td>The wounded</td>
            <td>Full rest-and-recover behaviour — the settler drops other work to heal</td>
            <td>High priority for severe wounds; lower it for scratches so settlers keep working</td>
          </tr>
          <tr>
            <td>Carry wounded</td>
            <td>Everyone nearby</td>
            <td>Hauls unconscious settlers to a free bed. Fires automatically, even for settlers without Tend enabled and outside work hours</td>
            <td>Nothing to configure — just make sure a spare bed exists before the raid, not after</td>
          </tr>
        </tbody>
      </table>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        One modern convenience worth knowing: wounds can be tended anywhere. A healer can treat a hunter in
        the field without dragging them home first — bed rest still matters for the severe category, but the
        old requirement that a patient be sleeping before anyone could help them is gone.
      </p>

      <div className="aged-border p-4 mb-8">
        <p className="font-serif text-base text-ink-light leading-relaxed">
          <strong>Self-Tend — The Emergency Valve:</strong> In the Manage panel you can allow a settler to
          treat their own wounds. It is strictly a fallback: a self-tend lands at only 25% of the quality of
          a tend from another settler, earns less XP, and switches off entirely if you disable that
          settler&apos;s Tend job. Enable it for settlers who work alone far from base; never treat it as a
          substitute for a real healer.
        </p>
      </div>

      {/* Supplies */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Healing Supplies: Herbs, Tallow, Honey, Healing Kits</h2>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        Tending works bare-handed, but supplies make it better. Going Medieval recognises four healing
        items, and each carries a wound tending multiplier that improves the quality of any tend it is used
        in. The practical hierarchy is simple: herbs are your everyday supply, healing kits are the
        dedicated tool, and tallow and honey are useful stand-ins already sitting in your pantry.
      </p>

      <table className="parchment-table mb-8">
        <thead>
          <tr>
            <th>Supply</th>
            <th>What It Is</th>
            <th>Carried in a Pouch?</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Herbs</td>
            <td>Gathered medicinal plants</td>
            <td>No — fetched from storage</td>
            <td>The workhorse supply. Wild herbs grow on every map; stockpile them near the hospital so healers never walk far</td>
          </tr>
          <tr>
            <td>Healing Kit</td>
            <td>Purpose-made medical kit</td>
            <td>Yes — the only supply settlers carry on their person</td>
            <td>The dedicated tending tool. Because settlers keep kits in a pouch, they can treat casualties on the spot instead of running to a stockpile first</td>
          </tr>
          <tr>
            <td>Tallow</td>
            <td>Rendered animal fat</td>
            <td>No</td>
            <td>A by-product of butchering that doubles as a tending supply — your hunters quietly keep the infirmary stocked</td>
          </tr>
          <tr>
            <td>Honey</td>
            <td>Food with medicinal use</td>
            <td>No</td>
            <td>Dual-purpose: a long-lasting food that also serves as a healing supply. Buy it from merchants when other stocks run low</td>
          </tr>
        </tbody>
      </table>

      <figure className="mb-8">
        <img
          src="/images/herbal-medicine-guide.png"
          alt="Bar chart of relative wound-tend quality in Going Medieval: bruise-type wounds cannot be tended at zero percent, self-tending reaches only twenty-five percent, and a tend from another settler is the one hundred percent baseline"
          className="w-full rounded-lg border border-[#3d3528]"
          loading="lazy"
        />
        <figcaption className="mt-2 text-center text-sm text-ink-light font-serif">
          Relative tend quality: self-tending is a quarter as effective as a proper tend, and the lightest
          wound category cannot be tended at all. Medicine skill and healing supplies raise the effective
          quality further from the settler-tend baseline.
        </figcaption>
      </figure>

      {/* Triage */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Post-Raid Triage: The First Ten Minutes</h2>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        The minutes after a raid decide whether wounds become footnotes or funerals. Run the same sequence
        every time and it becomes automatic.
      </p>

      <table className="parchment-table mb-8">
        <thead>
          <tr>
            <th>Step</th>
            <th>Action</th>
            <th>Why It Matters</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Click the &quot;Settler wounds need tending&quot; notification to cycle through every casualty</td>
            <td>Wounded settlers do not announce themselves individually; the notification is your headcount</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Check for unconscious settlers first — they are being carried to beds automatically</td>
            <td>Unconscious colonists cannot eat or move; their recovery starts only once they reach a bed</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Set severe cases to Patient + Convalesce at high priority; leave scratches on normal duties</td>
            <td>Over-resting minor wounds costs you a workday; under-resting a fracture costs you a settler</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Confirm your highest-Medicine settler has Tend at top priority and supplies in reach</td>
            <td>Tend quality scales with Medicine skill, and supplies multiply the result — skill plus herbs is the fastest legal recovery in the game</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Restock the infirmary: herbs, kits, and a spare meal supply near the beds</td>
            <td>Patients leave bed when hungry; a nearby food stockpile gets them back under care faster</td>
          </tr>
        </tbody>
      </table>

      {/* Long-term program */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Building a Medical Program That Scales</h2>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        Early on, one settler with a passing interest in Medicine is enough. As the colony grows toward a
        dozen people and raids escalate, formalise it. Keep two settlers developing the Medicine skill so an
        injured healer never leaves the colony untreated — a Researcher-Healer pairing works well, since
        both are indoor intellectual jobs and the same settler can work the research bench in peacetime and
        the infirmary after battles. Stockpile herbs within a few tiles of the beds, issue healing kits to
        your front-line fighters so the first tend happens where they fall, and buy honey or kits from
        merchant caravans whenever your own stocks dip.
      </p>

      <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
        Skip the fantasy remedies. There are no splints, antidotes, or medicinal teas in Going Medieval —
        recovery is always time plus tend quality, multiplied by supplies. Master those three levers and the
        health system stops being a threat and becomes what it should be: a routine.
      </p>

      {/* FAQ */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Frequently Asked Questions</h2>

      <div className="aged-border p-4 mb-4">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">Do I need medicine items to heal settlers in Going Medieval?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          No. Any settler with the Tend job enabled can treat wounds with empty hands, and wounds also lose
          severity naturally over time. What supplies add is a wound tending multiplier: herbs, tallow,
          honey, and healing kits each improve the quality of a tend when the healer uses them, so stocked
          colonies simply heal faster and more reliably.
        </p>
      </div>

      <div className="aged-border p-4 mb-4">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">Is self-tending worth enabling?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          Only as an emergency fallback. Self-tending is switched on per settler in the Manage panel, and
          the quality of a self-tend is just 25% of what another settler would achieve, with less skill XP
          earned on top. It also requires the Tend job to stay enabled for that settler. Use it for isolated
          workers like hunters, but rely on a dedicated healer for anything serious.
        </p>
      </div>

      <div className="aged-border p-4 mb-4">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">Why did my settler&apos;s wound stop needing treatment at low severity?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          That is the minimum severity threshold working as intended. Serious wounds need active tending
          and rest through the worst of their recovery, but once a wound is roughly 90% healed it drops to a
          minimum severity level: the settler no longer needs bed rest or tending, keeps only minor
          lingering effects like slightly reduced walk speed, and the wound finishes healing on its own.
        </p>
      </div>

      <div className="aged-border p-4 mb-4">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">How do I save an unconscious settler?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          You do not need to micromanage it. Unconscious settlers cannot walk, so other settlers will
          automatically carry them to a free bed — this carry-wounded behaviour fires even for settlers
          without the Tend job enabled, and even outside work hours. Once the casualty is in a bed, your
          healers take over with normal tending.
        </p>
      </div>

      <div className="aged-border p-4 mb-8">
        <h3 className="font-display text-lg font-semibold text-ink mb-2">Do bruises and minor scrapes need a healer?</h3>
        <p className="font-serif text-base text-ink-light leading-relaxed">
          No. The lightest wound category — bruises and similar knocks — cannot be tended at all and simply
          heals with time. The middle category, such as scratches, benefits from tending but does not force
          the settler into bed, so they can keep working while it closes. Reserve bed rest and your best
          healer for the severe category, like broken bones.
        </p>
      </div>

      {/* Related Guides */}
      <h2 className="font-display text-2xl font-semibold text-ink mb-4">Related Guides</h2>
      <ul className="list-disc pl-6 mb-8 space-y-2 font-serif text-base text-ink-light">
        <li><a href="/wounded-settler-healing" className="text-vermillion hover:underline">Wounded Settler Healing — the recovery process in more detail</a></li>
        <li><a href="/settler-death-prevention" className="text-vermillion hover:underline">Settler Death Prevention — keeping your colony off the casualty list</a></li>
        <li><a href="/disease-plague-guide" className="text-vermillion hover:underline">Disease &amp; Plague Guide — the other half of colony health</a></li>
        <li><a href="/settler-skills" className="text-vermillion hover:underline">Settler Skills — where Medicine fits in the skill system</a></li>
        <li><a href="/winter-survival" className="text-vermillion hover:underline">Winter Survival — cold is a health problem too</a></li>
        <li><a href="/raid-defense-strategy" className="text-vermillion hover:underline">Raid Defense Strategy — the best wound is the one nobody gets</a></li>
      </ul>

      <p className="font-serif text-sm text-ink-muted leading-relaxed mt-8 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
        Last updated: July 19, 2026. Healing mechanics reflect the current release version of Going
        Medieval; exact recovery speeds vary with Medicine skill and supplies.
      </p>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  );
}
