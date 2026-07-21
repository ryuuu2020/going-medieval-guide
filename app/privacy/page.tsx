export const metadata = {
  title: "Privacy Policy — Going Medieval Guide",
  description:
    "Privacy policy for Going Medieval Guide website. Information about data collection and usage.",
  robots: {
    index: false,
    follow: true,
  },
};


export default function PrivacyPage() {
  return (
      <div className="max-w-4xl mx-auto px-4 lg:px-8 py-8">
        <div className="space-y-6">
          <h1 className="chapter-heading">Privacy Policy</h1>
          <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
            Last updated: July 2026. Going Medieval Guide does not require account creation, direct
            checkout, or on-site comments. We do not intentionally collect legal names, mailing
            addresses, or payment details through normal browsing.
          </p>
          <section>
            <h2 className="font-display text-xl font-semibold text-ink mb-3">Information Collection</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed">
              We do receive standard aggregate analytics and ad-delivery signals such as page views,
              visit duration, referral source, approximate region, and device type. We use that data
              to understand which colony, defense, and production guides are actually useful and
              which pages need revision or removal.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-semibold text-ink mb-3">Cookie Usage</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed">
              We use cookies or similar technologies through Google Analytics 4 and Google AdSense to
              measure traffic and serve advertising. You can disable cookies in your browser settings,
              though some analytics and ad-delivery behavior may become less accurate.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-semibold text-ink mb-3">Third-Party Links</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed">
              This site links to third-party destinations such as Steam, UniFans, and other
              GameGuideHub properties. Once you leave this site, those destinations operate under
              their own privacy policies.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-semibold text-ink mb-3">Contact</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed">
              We do not sell personal identity data. For privacy-related inquiries, contact us
              through <a href="https://app.unifans.io/c/ryu2020" className="text-vermillion hover:underline">UniFans</a>.
            </p>
          </section>
        </div>
      </div>
  );
}
