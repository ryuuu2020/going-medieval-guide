import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import Link from "next/link";
import SchemaMarkup from '@/shared/SchemaMarkup';


export const metadata: Metadata = {
  title: "Going Medieval Guide — Colony Sim Strategy Wiki",
    metadataBase: new URL("https://goingmedieval.gguidehub.com"),
  description:
    "The ultimate Going Medieval guide and wiki. Master colony survival with in-depth guides on buildings, research, settlers, farming, defense, trade, biomes, and more. Your go-to resource for Foxy Voxel's medieval colony sim.",
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
      "Master Going Medieval with our comprehensive strategy guide. Buildings, research, settlers, farming, defense — everything you need to build a thriving medieval colony.",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Going Medieval Guide — Colony Sim Strategy Wiki" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Going Medieval Guide — Colony Sim Strategy Wiki",
    description: "Master Going Medieval with our comprehensive strategy guide. Buildings, research, settlers, farming, defense — everything you need to build a thriving medieval colony.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

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
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="google4cd6cdf221ea7b0b"
        />
        {/* Google Fonts — 3-Colony Parchment Theme */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400&family=IBM+Plex+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
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
  "description": "The ultimate Going Medieval guide and wiki. Master colony survival with in-depth guides on buildings, research, settlers, farming, defense, and more.",
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
            <a href="/" className="sidebar-brand">
              Going Medieval Guide
            </a>

            {/* Quick Navigation */}
            <div>
              <h3 className="sidebar-heading">Quick Navigation</h3>
              <div className="flex flex-col gap-2">
                {SIDEBAR_LINKS.map((link, i) => (
                  <a key={i} href={link.href} className="sidebar-nav-link">
                    <span className="sidebar-nav-label">{link.label}</span>
                    <span className="sidebar-nav-desc">{link.desc}</span>
                  </a>
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
                  <span className="sidebar-stats-value gold">1.0</span>
                </div>
                <div className="sidebar-stats-row">
                  <span className="sidebar-stats-label">Release Date</span>
                  <span className="sidebar-stats-value">2026.03.12</span>
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
                  <a href="/" className="header-brand">
                    Going Medieval Guide
                  </a>
                  {/* Navigation — Bookmark-like tabs */}
                  <nav className="header-nav">
                    {NAV_LINKS.map((link, i) => (
                      <a
                        key={link.href}
                        href={link.href}
                        className="nav-link"
                      >
                        {link.label}
                      </a>
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
