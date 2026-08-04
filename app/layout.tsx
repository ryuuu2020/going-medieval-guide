import type { Metadata } from "next";
import { Cormorant_Garamond, IBM_Plex_Sans, Lora } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Going Medieval Guide — Colony Sim Strategy Wiki",
    metadataBase: new URL("https://goingmedieval.gguidehub.com"),
  description:
    "A version-aware Going Medieval guide covering colony decisions, buildings, research, farming, defense, production, and survival with clear evidence boundaries.",
  keywords: [
    "Going Medieval guide",
    "colony sim",
    "medieval builder",
    "Foxy Voxel",
    "Going Medieval wiki",
    "Going Medieval tips",
    "Going Medieval research tree",
    "Going Medieval farming guide",
    "Going Medieval defense guide",
    "Going Medieval settlers guide",
    "Going Medieval buildings",
    "Going Medieval beginner guide",
  ],
  openGraph: {
    title: "Going Medieval Guide — Colony Sim Strategy Wiki",
  description:
      "Version-aware Going Medieval guides for buildings, research, settlers, farming, defense, production, and survival.",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Going Medieval Guide — Colony Sim Strategy Wiki" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Going Medieval Guide — Colony Sim Strategy Wiki",
    description: "Version-aware Going Medieval guides for buildings, research, settlers, farming, defense, production, and survival.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-plex-sans",
  display: "swap",
});

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Buildings", href: "/buildings" },
  { label: "Research", href: "/research" },
  { label: "Settlers", href: "/settlers" },
  { label: "Farming", href: "/farming" },
  { label: "Defense", href: "/defense" },
  { label: "Beginner Guide", href: "/beginners" },
  { label: "Tier List", href: "/tier-list" },
  { label: "Base Layout", href: "/base-layout" },
];

const SIDEBAR_LINKS = [
  { label: "Beginner's Guide", href: "/beginners", desc: "Build your colony from scratch" },
  { label: "Best Defense Layout", href: "/best-defense-layout", desc: "Layered kill zones and wall planning" },
  { label: "Production Chains", href: "/production-chain-optimization", desc: "Resource flow & workshop optimization" },
  { label: "Colony Efficiency", href: "/colony-efficiency-benchmarks", desc: "Settler ratios & production targets" },
  { label: "Seasons Survival Guide", href: "/seasons", desc: "Managing temperature extremes year-round" },
  { label: "Research Tech Tree", href: "/research", desc: "Optimal unlock order recommendations" },
  { label: "Crafting System", href: "/crafting", desc: "Workbenches, recipes, and materials" },
  { label: "Trading System", href: "/trading", desc: "Merchant interactions and resource exchange" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${lora.variable} ${plexSans.variable}`}>
      <head>
        <meta
          name="google-site-verification"
          content="google4cd6cdf221ea7b0b"
        />
        {/* Google Analytics GA4 */}
        <Script strategy="lazyOnload" src="https://www.googletagmanager.com/gtag/js?id=G-ET6778V62K" />
        <Script strategy="lazyOnload" id="gtag-init">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-ET6778V62K');`}
            </Script>
        <Script strategy="lazyOnload" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8925824244664340" crossOrigin="anonymous" />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Going Medieval Guide",
  "description": "A version-aware Going Medieval guide covering colony decisions, buildings, research, farming, defense, production, and survival."
  "url": "https://goingmedieval.gguidehub.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://goingmedieval.gguidehub.com/?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Game Guide Hub",
  "url": "https://goingmedieval.gguidehub.com",
  "logo": "https://goingmedieval.gguidehub.com/og-image.png"
}`,
          }}
        />
      </head>
      <body>
        <div className="flex min-h-screen">
          {/* ===== Sidebar ===== */}
          <aside className="sidebar">
            {/* Site identity */}
            <Link href="/" className="sidebar-brand">
              Going Medieval Guide
            </Link>

            {/* Quick Navigation */}
            <div>
              <h3 className="sidebar-heading">Quick Navigation</h3>
              <div className="flex flex-col gap-2">
                {SIDEBAR_LINKS.map((link) => (
                  <Link key={link.href} href={link.href} className="sidebar-nav-link">
                    <span className="sidebar-nav-label">{link.label}</span>
                    <span className="sidebar-nav-desc">{link.desc}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Game Stats */}
            <div className="sidebar-stats">
              <h3 className="sidebar-heading">Game Stats</h3>
              <div className="flex flex-col gap-2">
                <div className="sidebar-stats-row">
                  <span className="sidebar-stats-label">Steam Reviews</span>
                  <span className="sidebar-stats-value">21,000+</span>
                </div>
                <div className="sidebar-stats-row">
                  <span className="sidebar-stats-label">Positive Rating</span>
                  <span className="sidebar-stats-value accent">89%</span>
                </div>
                <div className="sidebar-stats-row">
                  <span className="sidebar-stats-label">Version</span>
                  <span className="sidebar-stats-value gold">1.1.x</span>
                </div>
                <div className="sidebar-stats-row">
                  <span className="sidebar-stats-label">Release Date</span>
                  <span className="sidebar-stats-value">1.1.x line</span>
                </div>
              </div>
              <p className="sidebar-stats-source">Community-tracking estimates, refreshed each patch</p>
            </div>

            {/* Colony Priorities */}
            <div>
              <h3 className="sidebar-heading">Colony Priorities</h3>
              <div className="flex flex-col gap-2">
                <div>
                  <span className="sidebar-news-date">Spring</span>
                  <p className="sidebar-news-item">Rush food, shelter, and a cold cellar before your first weather swing.</p>
                </div>
                <div>
                  <span className="sidebar-news-date">Summer</span>
                  <p className="sidebar-news-item">Convert early safety into workshops, brick production, and stable hauling routes.</p>
                </div>
                <div>
                  <span className="sidebar-news-date">Winter</span>
                  <p className="sidebar-news-item">Shift labor into defense, indoor production, and mood protection before raids scale up.</p>
                </div>
              </div>
            </div>

            {/* Support Us */}
            <div className="sidebar-support">
              <h3 className="sidebar-support-title">Support This Site</h3>
              <p className="sidebar-support-desc">
                This guide site is maintained by community players and all content is free. If our guides helped you, consider supporting us via UniFans to help us keep updating.
              </p>
              <a href="https://app.unifans.io/c/ryu2020" target="_blank" rel="noopener noreferrer" className="support-btn">
                Support us on UniFans
              </a>
            </div>
          </aside>

          {/* ===== Main content area ===== */}
          <div className="flex-1 flex flex-col min-w-0">
            {/* Header */}
            <header className="header">
              <div className="header-inner">
                <div className="header-brand-wrap">
                  <Link href="/" className="header-brand">
                    Going Medieval Guide
                  </Link>
                  {/* Navigation — Bookmark-like tabs */}
                  <nav className="header-nav">
                    {NAV_LINKS.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="nav-link"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </div>
                <a
                  href="https://app.unifans.io/c/ryu2020"
                  target="_blank"
                  rel="noopener"
                  className="header-support"
                >
                  Support us on UniFans
                </a>
              </div>
            </header>

            {/* Main Content */}
            <main>{children}</main>

            {/* Footer — Parchment with aged feel */}
            <footer className="footer">
              <div className="footer-inner">
                {/* More Game Guides */}
                <section className="footer-guides">
                  <h3 className="footer-guides-title">More Game Guides</h3>
                  <div className="footer-guides-links">
                    <a href="https://menace.gguidehub.com" target="_blank" rel="noopener noreferrer" className="btn-primary footer-guide-link">MENACE Guide</a>
                    <a href="https://oldenera.gguidehub.com" target="_blank" rel="noopener noreferrer" className="btn-primary footer-guide-link">Olden Era Guide</a>
                    <a href="https://dispatch.gguidehub.com" target="_blank" rel="noopener noreferrer" className="btn-primary footer-guide-link">Dispatch Guide</a>
                    <a href="https://solarpunk.gguidehub.com" target="_blank" rel="noopener noreferrer" className="btn-primary footer-guide-link">Solarpunk Guide</a>
                  </div>
                </section>

                {/* Footer Links */}
                <div className="footer-links">
                  <Link href="/about" className="footer-link">About</Link>
                  <Link href="/privacy" className="footer-link">Privacy</Link>
                  <a href="https://gguidehub.com/contact" className="footer-link">Contact</a>
                  <Link href="/terms" className="footer-link">Terms</Link>
                  <Link href="/faq" className="footer-link">FAQ</Link>
                  <a href="https://app.unifans.io/c/ryu2020" target="_blank" rel="noopener" className="footer-support-link">Support us on UniFans</a>
                </div>

                <p className="footer-disclaimer">
                  Editorial owner: GameGuideHub editorial team. Last editorial review: August 4, 2026. We are responsible for reviewing, correcting, and updating the guide; send factual corrections to <a href="mailto:contact@gguidehub.com" className="footer-eeat-link">contact@gguidehub.com</a>.
                </p>

                <p className="footer-disclaimer">
                  This is a fan-made guide site. Going Medieval is developed by Foxy Voxel. We are not affiliated with, endorsed by, or connected to Foxy Voxel in any official capacity. All game content, trademarks, and copyrights belong to their respective owners.
                </p>

                {/* E-E-A-T block removed */}
              </div>

              <p className="footer-disclaimer">Part of the <a href="https://gguidehub.com" className="footer-eeat-link">GameGuideHub</a> network.</p>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
