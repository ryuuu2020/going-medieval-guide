'use client';

import { SiteHeader, SiteFooter } from '@/components/SiteHeader';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-parchment)' }}>
      <SiteHeader />
      <main className="max-w-4xl mx-auto px-4 lg:px-8 py-8">
        <div className="space-y-6">
          <h1 className="chapter-heading">Privacy Policy</h1>
          <p className="drop-cap font-serif text-base text-ink-light leading-relaxed">
            This Privacy Policy explains how the Going Medieval Guide ("this site") collects, uses, and protects user information. We respect and safeguard user privacy and are committed to providing a safe browsing experience.
          </p>
          <section>
            <h2 className="font-display text-xl font-semibold text-ink mb-3">Information Collection</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed">
              This site uses Google Analytics 4 (GA4, Measurement ID: G-ET6778V62K) to collect anonymous traffic data, including page views, visit duration, and referral sources. GA4 does not collect personally identifiable information. This site does not require user registration or login, and does not collect names, emails, or other personal information.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-semibold text-ink mb-3">Cookie Usage</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed">
              GA4 may collect anonymous browsing data through cookies. You can disable cookies in your browser settings, which will not affect normal site browsing. This site does not use advertising cookies.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-semibold text-ink mb-3">Third-Party Links</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed">
              This site contains links to third-party websites (such as Steam, Afdian). These websites have their own privacy policies, and this site is not responsible for their content.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl font-semibold text-ink mb-3">Contact</h2>
            <p className="font-serif text-base text-ink-light leading-relaxed">
              For privacy-related inquiries, please contact us through Afdian (afdian.com/a/gameguidehub).
            </p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
