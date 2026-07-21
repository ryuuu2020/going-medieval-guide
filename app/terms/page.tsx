export const metadata = {
  title: "Terms of Use — Going Medieval Guide",
  description:
    "Terms of use for Going Medieval Guide website.",
  robots: {
    index: false,
    follow: true,
  },
};


export default function TermsPage() {
  return (
      <div className="max-w-4xl mx-auto px-4 lg:px-8 py-8">
        <div className="space-y-6">
          <h1 className="chapter-heading">Terms of Use</h1>
          <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
            Last updated: July 2026. The content on Going Medieval Guide is provided for
            informational purposes only. We aim to publish decision-useful colony, defense, and
            production guidance, but patches and player discoveries can make older recommendations
            incomplete until a page is reviewed.
          </p>
          <section>
            <h2 className="font-display text-xl font-semibold text-ink mb-3">Content Statement</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed">
              Our guides are built from official store information, hands-on play, and community
              testing. That does not make them official documentation. Use your own judgment when a
              build or strategy depends on balance-sensitive details or version-specific behavior.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-semibold text-ink mb-3">Intellectual Property</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed">
              Going Medieval names, trademarks, screenshots, and related content are the property of
              Foxy Voxel and their respective partners. This site is unofficial and makes no claim to
              game-related intellectual property. Original guide text and analysis remain protected by
              copyright.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-semibold text-ink mb-3">Acceptable Use</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed">
              You may share links to Going Medieval Guide and quote short passages with attribution.
              You may not republish full pages as your own commercial guide product, scrape the site
              in a way that harms availability, or present this site as official developer
              documentation.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-semibold text-ink mb-3">Contact</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed">
              The site may show Google AdSense advertisements, but advertising does not determine our
              recommendations. For questions about these terms or to report a material error, contact
              us via <a href="https://app.unifans.io/c/ryu2020" className="text-vermillion hover:underline">UniFans</a>.
            </p>
          </section>
        </div>
      </div>
  );
}
