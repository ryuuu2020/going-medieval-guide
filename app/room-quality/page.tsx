export const metadata = {
  title: "Going Medieval Room Quality System — Settler Mood Guide (2026)",
  description: "Understand Going Medieval room quality. How rooms are scored, furniture requirements, beauty value, settler mood impact, and building high-quality rooms.",
};

export default function RoomQualityPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
        <div className="flex-1 lg:max-w-[65%] space-y-10">
          <section>
            <h1 className="chapter-heading">Going Medieval Room Quality System — Complete Guide</h1>
            <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
              Settler happiness in Going Medieval is significantly affected by the quality of rooms they use — particularly their bedrooms, dining halls, and great halls. The game's room quality system evaluates each enclosed space based on its furniture content, decoration, wall material, floor material, size, and lighting. High-quality rooms grant powerful mood bonuses that keep settlers working efficiently and prevent the debuff spiral that leads to colony collapse. This guide explains every factor that contributes to room quality score, the mood bonuses each room type provides at different quality tiers, and the most efficient ways to increase room quality without excessive material cost.
            </p>
          </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Room Quality Score — What Counts</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                A room's quality score is calculated from multiple factors. Each factor contributes a value, and the total determines the room's quality tier (Poor → Basic → Comfortable → Good → Great → Excellent). Higher tiers provide stronger mood bonuses.
              </p>
              <table className="parchment-table">
                <thead>
                  <tr>
                    <th>Factor</th>
                    <th>Quality Impact</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Room Size</td><td>Medium</td><td>Larger rooms score better up to a ceiling</td></tr>
                  <tr><td>Wall Material</td><td>High</td><td>Cut stone &gt; clay brick &gt; rough stone &gt; wood</td></tr>
                  <tr><td>Floor Material</td><td>Medium</td><td>Wooden planks &gt; dirt; stone tile high value</td></tr>
                  <tr><td>Furniture Count</td><td>High</td><td>More furnishings = higher score</td></tr>
                  <tr><td>Furniture Quality</td><td>Very High</td><td>Higher skill construction = better furniture</td></tr>
                  <tr><td>Lighting</td><td>Medium</td><td>Candles, torches, sconces all contribute</td></tr>
                  <tr><td>Decorations</td><td>Medium-High</td><td>Paintings, tapestries, carvings add beauty</td></tr>
                  <tr><td>Cleanliness</td><td>Low-Medium</td><td>Clean rooms score better than dirty rooms</td></tr>
                </tbody>
              </table>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Bedroom Quality — Most Important Room</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Bedrooms have the highest mood impact of any room type because settlers spend 6-8 hours per day sleeping. A settler sleeping in an Excellent bedroom gains a significant sustained mood boost; a settler in a Poor bedroom gets a penalty every single night.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Minimum Comfortable bedroom setup: 3×3 room, wooden plank floor, clay brick walls, one high-quality bed (made by a skilled carpenter), one table, one chair, one candle. This combination reliably reaches the Comfortable tier. For Good or Great tier: add a shelf, painting, and upgrade the bed to masterwork quality.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Dining Hall and Great Hall Quality</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                The dining hall quality affects the meal mood bonus settlers receive when eating. A high-quality dining hall turns each meal into a significant mood boost rather than just restoring hunger. Prioritize: large size (minimum 5×7), long tables, multiple chairs, stone floor, plenty of candle and sconce lighting.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                A Great Hall (for recreation and social activities) contributes to settler social needs satisfaction. Furnish it with chairs, tables, game boards, instrument corners, and decorations. A well-built Great Hall eliminates the social need deficit that often causes settler unhappiness in mid-game colonies.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Fastest Way to Increase Room Quality</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                The fastest quality gains come from furniture quality rather than room size or materials. A carpenter with high skill building furniture produces Exceptional or Masterwork quality items that dramatically increase room scores. Train your best carpenter to Building 8-10 before furnishing important rooms.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Second priority: paintings and decorations. Art created by settlers with high Artistry skill adds significant beauty value to rooms. Dedicate one settler to art production in the mid-game — the mood bonuses from decorated rooms return far more happiness per labor hour than most other investments.
              </p>
            </section>

          <section>
            <h2 className="font-display text-2xl font-semibold text-ink mb-6">Frequently Asked Questions</h2>

                <div className="aged-border p-5 mb-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                  <h3 className="font-display text-lg font-semibold text-ink mb-2">Does room quality affect all settlers equally?</h3>
                  <p className="font-serif text-base text-ink-light leading-relaxed">Room quality provides the same base bonus to all settlers, but settler traits can modify how much they care about room quality. Some traits make settlers more or less sensitive to their environment. Check settler trait descriptions to identify which settlers most need high-quality rooms versus which are less affected.</p>
                </div>
                <div className="aged-border p-5 mb-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                  <h3 className="font-display text-lg font-semibold text-ink mb-2">How large does a room need to be for maximum quality?</h3>
                  <p className="font-serif text-base text-ink-light leading-relaxed">Room size contributes to quality up to approximately 6×6 tiles for most room types. Beyond this size, adding more floor space provides diminishing quality returns. Focus on furniture density and quality in a well-sized room rather than building oversized spaces.</p>
                </div>
                <div className="aged-border p-5 mb-4" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                  <h3 className="font-display text-lg font-semibold text-ink mb-2">Can I share a bedroom between multiple settlers?</h3>
                  <p className="font-serif text-base text-ink-light leading-relaxed">Settlers can be assigned to any bed, and multiple settlers can be in the same room. However, private bedrooms (1 bed per room) provide an additional privacy bonus. Shared rooms eliminate this bonus. In early game, shared rooms are acceptable — in mid-to-late game, private bedrooms for all settlers is worth the construction investment.</p>
                </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-ink mb-4">Related Guides</h2>
            <div className="space-y-2">
                  <a href="/settlers" className="text-accent hover:text-accent-hover underline">Settlers</a>
                  <a href="/happiness-guide" className="text-accent hover:text-accent-hover underline">Happiness Guide</a>
                  <a href="/buildings" className="text-accent hover:text-accent-hover underline">Buildings</a>
                  <a href="/great-hall" className="text-accent hover:text-accent-hover underline">Great Hall</a>

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
      "name": "Does room quality affect all settlers equally?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Room quality provides the same base bonus to all settlers, but settler traits can modify how much they care about room quality. Some traits make settlers more or less sensitive to their environment. Check settler trait descriptions to identify which settlers most need high-quality rooms versus which are less affected."
      }
    },
    {
      "@type": "Question",
      "name": "How large does a room need to be for maximum quality?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Room size contributes to quality up to approximately 6×6 tiles for most room types. Beyond this size, adding more floor space provides diminishing quality returns. Focus on furniture density and quality in a well-sized room rather than building oversized spaces."
      }
    },
    {
      "@type": "Question",
      "name": "Can I share a bedroom between multiple settlers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Settlers can be assigned to any bed, and multiple settlers can be in the same room. However, private bedrooms (1 bed per room) provide an additional privacy bonus. Shared rooms eliminate this bonus. In early game, shared rooms are acceptable — in mid-to-late game, private bedrooms for all settlers is worth the construction investment."
      }
    }
            ]
          })
        }}
      />
    </main>
  );
}
