export const metadata = {
  title: "About Going Medieval Guide — Colony Sim Wiki",
  description:
    "Learn about the Going Medieval Guide project. Comprehensive colony sim strategies, guides, and wiki for Foxy Voxel's medieval survival game.",
};


export default function AboutPage() {
  return (
      <main className="max-w-6xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="flex-1 lg:max-w-[65%] space-y-10">
            <section>
              <h1 className="chapter-heading">About This Site</h1>
              <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
                The Going Medieval Guide is an unofficial fan-made guide site created and maintained by community players. Our goal is to provide comprehensive, accurate, and free Going Medieval game guides to help every lord build a thriving colony in the medieval wilderness.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Our Mission</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                This site was founded in 2026, coinciding with the Going Medieval 1.0 full release. We noticed a lack of systematic guide resources in the community, with many new players giving up after hitting early challenges. So we decided to build this site, organizing community experience into structured, readable guides.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                All guide content is free and open — no registration or payment required. We are committed to having no paywalls and no intrusive ads. If our guides help you, consider supporting us via Afdian to help us keep updating.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Content Sources</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed mb-4">
                Our guide content comes from multiple channels: 1) Community players' hands-on experience; 2) Official information released by the development team; 3) In-game testing and verification. All data notes its source, with some data being community estimates that may change with game updates.
              </p>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                We continuously update guide content to keep pace with game version changes. If you find outdated or incorrect information in our guides, please let us know through community channels — we'll correct it promptly.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Disclaimer</h2>
              <div className="aged-border p-5" style={{ backgroundColor: 'var(--color-parchment-deep)' }}>
                <p className="font-serif text-sm text-ink leading-relaxed">
                  This site is an unofficial, non-profit community fan site with no affiliation to Going Medieval developer Foxy Voxel or its publisher. All game names, trademarks, and copyrights belong to their respective owners. Site content is for informational and educational purposes only and is not intended for commercial use. Guide data is based on community testing estimates and is for reference only; actual effects may differ from in-game values.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">Contact Us</h2>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                If you have guide suggestions, content feedback, or collaboration ideas, you can reach us through:
              </p>
              <div className="space-y-3 mt-4">
                <a href="https://afdian.com/a/gameguidehub" target="_blank" rel="noopener noreferrer" className="block journal-card p-4">
                  <h4 className="font-display text-base font-semibold text-ink">Afdian Support</h4>
                  <p className="font-serif text-sm text-ink-muted mt-1">Support ongoing site updates and access more guide content</p>
                </a>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-ink mb-4">FAQ</h2>
              <div className="faq-item">
                <details>
                  <summary>Is this guide site official?</summary>
                  <p>No. This site is entirely a community-created unofficial guide site with no affiliation with the game developer. All content is based on community experience and testing and is for reference only.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>Can I repost content from this site?</summary>
                  <p>You're welcome to share our guide content, but please credit the source and include a link. Commercial use requires prior contact for authorization. Game screenshots and trademarks are the property of their respective owners.</p>
                </details>
              </div>
              <div className="faq-item">
                <details>
                  <summary>Is the guide data accurate?</summary>
                  <p>We do our best to ensure data accuracy, but the game is continuously updated and some data may change with versions. All data notes "community estimate" or "community testing." If discrepancies exist, refer to actual in-game values.</p>
                </details>
              </div>
            </section>
          </div>

          <aside className="lg:w-[35%] space-y-8 shrink-0">
            <div className="field-sidebar-block">
              <h3 className="font-display text-lg font-semibold text-ink mb-4">Site Info</h3>
              <div className="space-y-2 font-serif text-sm text-ink-light">
                <div className="flex justify-between border-b border-divider pb-1"><span>Founded</span><span>2026</span></div>
                <div className="flex justify-between border-b border-divider pb-1"><span>Type</span><span>Unofficial community</span></div>
                <div className="flex justify-between border-b border-divider pb-1"><span>Content</span><span>Free & open</span></div>
                <div className="flex justify-between"><span>Language</span><span>English</span></div>
              </div>
            </div>
            <div className="journal-card p-5">
              <h3 className="font-display text-base font-semibold text-ink mb-3">Guide Navigation</h3>
              <div className="space-y-2">
                <a href="/beginners" className="block font-serif text-sm text-ink hover:text-vermillion transition-colors">&rarr; Beginner's Guide</a>
                <a href="/buildings" className="block font-serif text-sm text-ink hover:text-vermillion transition-colors">&rarr; Building System</a>
                <a href="/farming" className="block font-serif text-sm text-ink hover:text-vermillion transition-colors">&rarr; Farming System</a>
                <a href="/defense" className="block font-serif text-sm text-ink hover:text-vermillion transition-colors">&rarr; Defense Strategy</a>
                <a href="/tips" className="block font-serif text-sm text-ink hover:text-vermillion transition-colors">&rarr; 30 Tips</a>
              </div>
            </div>
          </aside>
        </div>
      </main>
  );
}
