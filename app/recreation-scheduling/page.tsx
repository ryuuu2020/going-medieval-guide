export const metadata = {
  title: "Going Medieval Recreation Scheduling — Settler Happiness Guide (2026)",
  description: "Manage recreation in Going Medieval. Schedule leisure time, build recreation rooms, satisfy social needs, and prevent unhappiness from unmet recreation needs.",
};

export default function RecreationSchedulingPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-10">
          <section>
            <h1 className="chapter-heading">Going Medieval Recreation Scheduling — Keep Settlers Happy</h1>
            <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
              Recreation is one of the most overlooked mood systems in early Going Medieval playthroughs. New players focus on food, shelter, and defense — but fail to notice that settlers have recreation and social needs that, when unmet, create significant ongoing mood penalties. A settler who never has free time, never socializes, and never rests becomes unhappy regardless of how good their bedroom or food quality is. This guide covers how the recreation and rest need systems work, how to schedule leisure time in the work priority panel, which recreation facilities provide the best mood return, and how to design a recreation space that satisfies multiple settler needs simultaneously.
            </p>
          </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Recreation and Rest Needs — How They Work</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Settlers in Going Medieval have need bars for recreation, social interaction, rest, and other activities. These bars deplete over time as settlers work. When a bar reaches a low threshold, the game generates a negative mood modifier. When the need is satisfied (the settler engages in the relevant activity), the bar refills and a positive mood modifier is applied.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Recreation needs are satisfied when a settler uses recreation furniture: game boards, musical instruments, crafting hobbies, or simply sitting in an enjoyable room. Social needs are satisfied by interactions with other settlers — most commonly during shared meal times or in recreational spaces.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Scheduling Free Time in the Work Priority Panel</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Access the settler's schedule via their character panel. You can assign specific hour blocks to different activity types: work, rest, recreation, eat, social. A balanced schedule should include 6-8 hours of sleep, 8-10 hours of productive work, 2-3 hours of recreation/social time, and meal times.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Do not assign 100% of waking hours to work tasks. Settlers need free time in their schedule to autonomously pursue recreation and social activities. A completely packed work schedule leaves no hours for need satisfaction, causing accelerating mood decline over time.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Recreation Space Design — Best Facilities</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Build a dedicated recreation/great hall that serves as the social hub for your colony. The goal is a high-quality room (for the room quality mood bonus) that contains multiple types of recreation furniture.
              </p>
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Recreation Item</th>
                    <th>Need Satisfied</th>
                    <th>Quality Impact</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Chess / Draughts Board</td><td>Recreation + Social</td><td>High — doubles as social interaction</td></tr>
                  <tr><td>Musical Instrument</td><td>Recreation + Artistic</td><td>High for artistic trait settlers</td></tr>
                  <tr><td>Comfortable Chairs</td><td>Rest + Social</td><td>Medium</td></tr>
                  <tr><td>Long Dining Table</td><td>Social (during meals)</td><td>High — communal dining key to social needs</td></tr>
                  <tr><td>Paintings/Art</td><td>None directly (room quality)</td><td>High room quality boost</td></tr>
                </tbody>
              </table>
            </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-6">Frequently Asked Questions</h2>

                <div className="aged-border p-5 mb-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                  <h3 className="font-display text-lg font-semibold text-ink mb-2">How many hours of free time do settlers need per day?</h3>
                  <p className="font-serif text-base text-ink-light leading-relaxed">2-4 hours per day is the practical target. This is enough time to satisfy recreation and social needs without significantly cutting into productive work hours. During low-threat periods, extending free time to 4-5 hours gives settlers time to pursue hobby activities that provide additional mood boosts.</p>
                </div>
                <div className="aged-border p-5 mb-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                  <h3 className="font-display text-lg font-semibold text-ink mb-2">What if I need settlers to work during their scheduled recreation time?</h3>
                  <p className="font-serif text-base text-ink-light leading-relaxed">Emergency work assignments override schedules temporarily, but sustained overriding of recreation time causes mounting mood penalties. After an emergency (raid repair, urgent harvest), restore normal recreation scheduling as soon as the crisis is resolved. Chronic schedule override is a major cause of colony-wide mood collapse in difficult playthroughs.</p>
                </div>
                <div className="aged-border p-5 mb-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                  <h3 className="font-display text-lg font-semibold text-ink mb-2">Do different settler traits prefer different recreation activities?</h3>
                  <p className="font-serif text-base text-ink-light leading-relaxed">Yes — settler traits heavily influence which recreation activities provide mood bonuses. Artistic settlers benefit most from instruments and art creation. Intellectual settlers prefer chess and reading. Physical/outdoorsy settlers need outdoor exercise time. Check trait descriptions and match your recreation investments to your actual settler roster's trait composition.</p>
                </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-ink mb-4">Related Guides</h2>
            <div className="space-y-2">
                  <a href="/settlers" className="text-accent hover:text-accent-hover underline">Settlers</a>
                  <a href="/settler-mood-system" className="text-accent hover:text-accent-hover underline">Settler Mood System</a>
                  <a href="/happiness-guide" className="text-accent hover:text-accent-hover underline">Happiness Guide</a>
                  <a href="/room-quality" className="text-accent hover:text-accent-hover underline">Room Quality</a>

            </div>
          </section>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
    {
      "@type": "Question",
      "name": "How many hours of free time do settlers need per day?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "2-4 hours per day is the practical target. This is enough time to satisfy recreation and social needs without significantly cutting into productive work hours. During low-threat periods, extending free time to 4-5 hours gives settlers time to pursue hobby activities that provide additional mood boosts."
      }
    },
    {
      "@type": "Question",
      "name": "What if I need settlers to work during their scheduled recreation time?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Emergency work assignments override schedules temporarily, but sustained overriding of recreation time causes mounting mood penalties. After an emergency (raid repair, urgent harvest), restore normal recreation scheduling as soon as the crisis is resolved. Chronic schedule override is a major cause of colony-wide mood collapse in difficult playthroughs."
      }
    },
    {
      "@type": "Question",
      "name": "Do different settler traits prefer different recreation activities?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — settler traits heavily influence which recreation activities provide mood bonuses. Artistic settlers benefit most from instruments and art creation. Intellectual settlers prefer chess and reading. Physical/outdoorsy settlers need outdoor exercise time. Check trait descriptions and match your recreation investments to your actual settler roster's trait composition."
      }
    }
            ]
          })
        }}
      />
    </main>
  );
}
