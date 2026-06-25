import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Going Medieval Guide — Colony Sim Strategy Wiki",
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
  { label: "Tips", href: "/tips" },
  { label: "News", href: "/news" },
];

const SIDEBAR_LINKS = [
  { label: "Beginner's Guide", href: "/beginners", desc: "Build your colony from scratch" },
  { label: "30 Pro Tips", href: "/tips", desc: "Essential strategies for advanced players" },
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
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        {/* Google Analytics GA4 */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-ET6778V62K"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ET6778V62K');
            `,
          }}
        />
        {/* Google AdSense */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8925824244664340" crossOrigin="anonymous" />
      </head>
      <body>
        {/* ── Sidebar + Main wrapper ── */}
        <div style={{ display: "flex", minHeight: "100vh" }}>
          {/* ===== Sidebar ===== */}
          <aside
            className="hidden lg:flex"
            style={{
              flexDirection: "column",
              width: "260px",
              backgroundColor: "var(--color-bg-elevated)",
              borderRight: "2px double var(--color-accent-gold)",
              flexShrink: 0,
              padding: "1.5rem 1rem",
              gap: "1.5rem",
            }}
          >
            {/* Site identity */}
            <a
              href="/"
              style={{
                fontFamily: "'Cormorant Garamond', 'Georgia', serif",
                fontSize: "1.4rem",
                fontWeight: 700,
                color: "var(--color-accent)",
                textDecoration: "none",
                letterSpacing: "0.02em",
              }}
            >
              Going Medieval Guide
            </a>

            {/* Quick Navigation */}
            <div>
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', 'Georgia', serif",
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "var(--color-accent)",
                  marginBottom: "0.75rem",
                  borderBottom: "1px solid var(--color-divider)",
                  paddingBottom: "0.4rem",
                }}
              >
                Quick Navigation
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {SIDEBAR_LINKS.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    style={{
                      display: "block",
                      textDecoration: "none",
                      padding: "0.3rem 0",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "0.9rem",
                        fontWeight: 600,
                        color: "var(--color-text)",
                        display: "block",
                      }}
                    >
                      {link.label}
                    </span>
                    <span
                      style={{
                        display: "block",
                        fontFamily: "'Lora', serif",
                        fontSize: "0.72rem",
                        color: "var(--color-text-muted)",
                        marginTop: "0.1rem",
                      }}
                    >
                      {link.desc}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Game Stats */}
            <div
              style={{
                backgroundColor: "var(--color-bg-card)",
                border: "1px solid var(--color-border)",
                borderRadius: "3px 12px 3px 12px",
                padding: "1rem",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "var(--color-accent)",
                  marginBottom: "0.75rem",
                }}
              >
                Game Stats
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: "1px solid var(--color-divider)", paddingBottom: "0.35rem" }}>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", color: "var(--color-text-muted)" }}>Steam Reviews</span>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", fontWeight: 700, color: "var(--color-text)" }}>21,000+</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: "1px solid var(--color-divider)", paddingBottom: "0.35rem" }}>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", color: "var(--color-text-muted)" }}>Positive Rating</span>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", fontWeight: 700, color: "var(--color-accent)" }}>89%</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: "1px solid var(--color-divider)", paddingBottom: "0.35rem" }}>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", color: "var(--color-text-muted)" }}>Version</span>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", fontWeight: 700, color: "var(--color-accent-gold)" }}>1.0</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", color: "var(--color-text-muted)" }}>Release Date</span>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.85rem", fontWeight: 600, color: "var(--color-text)" }}>2026.03.12</span>
                </div>
              </div>
              <p style={{ fontFamily: "'Lora', serif", fontSize: "0.65rem", color: "var(--color-text-muted)", marginTop: "0.75rem", fontStyle: "italic" }}>Data source: Steam community estimates</p>
            </div>

            {/* Community News */}
            <div>
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "var(--color-accent)",
                  marginBottom: "0.75rem",
                  borderBottom: "1px solid var(--color-divider)",
                  paddingBottom: "0.4rem",
                }}
              >
                Community News
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                <div>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.65rem", color: "var(--color-text-muted)" }}>2026.06</span>
                  <p style={{ fontFamily: "'Lora', serif", fontSize: "0.75rem", color: "var(--color-text)", marginTop: "0.15rem", lineHeight: 1.4 }}>1.0 launch review: massive content expansion, new biomes arrive</p>
                </div>
                <div>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.65rem", color: "var(--color-text-muted)" }}>2026.05</span>
                  <p style={{ fontFamily: "'Lora', serif", fontSize: "0.75rem", color: "var(--color-text)", marginTop: "0.15rem", lineHeight: 1.4 }}>Community Mod tools released, custom content surges</p>
                </div>
                <div>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.65rem", color: "var(--color-text-muted)" }}>2026.03</span>
                  <p style={{ fontFamily: "'Lora', serif", fontSize: "0.75rem", color: "var(--color-text)", marginTop: "0.15rem", lineHeight: 1.4 }}>1.0 full release launches with new trading system and underground exploration</p>
                </div>
              </div>
            </div>

            {/* Support Us */}
            <div
              style={{
                border: "1px solid var(--color-border)",
                borderRadius: "3px 16px 3px 16px",
                padding: "1rem",
                backgroundColor: "var(--color-bg-card)",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  color: "var(--color-text)",
                  marginBottom: "0.5rem",
                }}
              >
                Support This Site
              </h3>
              <p
                style={{
                  fontFamily: "'Lora', serif",
                  fontSize: "0.7rem",
                  color: "var(--color-text-muted)",
                  lineHeight: 1.5,
                  marginBottom: "0.75rem",
                }}
              >
                This guide site is maintained by community players and all content is free. If our guides helped you, consider supporting us via Afdian to help us keep updating.
              </p>
              <a
                href="https://afdian.com/a/gameguidehub"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  padding: "0.5rem 1rem",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: "#f5ecd7",
                  backgroundColor: "var(--color-accent)",
                  borderRadius: "3px 12px 3px 12px",
                  textDecoration: "none",
                }}
              >
                &#10084; Support on Afdian
              </a>
            </div>
          </aside>

          {/* ===== Main content area ===== */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
            {/* Header — Parchment scroll style */}
            <header
              style={{
                backgroundColor: "var(--color-bg-elevated)",
                borderBottom: "2px double var(--color-accent-gold)",
                padding: "1.25rem 2rem",
                position: "sticky",
                top: 0,
                zIndex: 50,
                boxShadow: "0 1px 8px rgba(60,42,30,0.06)",
              }}
            >
              <div
                style={{
                  maxWidth: "1200px",
                  margin: "0 auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "0.75rem",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {/* Site Title — Cormorant Garamond */}
                  <a
                    href="/"
                    style={{
                      fontFamily: "'Cormorant Garamond', 'Georgia', serif",
                      fontSize: "2rem",
                      fontWeight: 700,
                      color: "var(--color-accent)",
                      textDecoration: "none",
                      letterSpacing: "0.02em",
                    }}
                  >
                    Going Medieval Guide
                  </a>
                  {/* Navigation — Bookmark-like tabs */}
                  <nav
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.25rem 1.25rem",
                      fontSize: "0.9rem",
                    }}
                  >
                    {NAV_LINKS.map((link, i) => (
                      <a
                        key={link.href}
                        href={link.href}
                        className="nav-link"
                        style={{
                          color: "var(--color-text-muted)",
                          textDecoration: "none",
                          fontWeight: 500,
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "0.82rem",
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                          transform: `rotate(${(i % 3) - 1}deg)`,
                          transition: "color 0.2s, transform 0.2s",
                          padding: "0.2rem 0",
                        }}
                      >
                        {link.label}
                      </a>
                    ))}
                  </nav>
                </div>
                <a
                  href="https://afdian.com/a/gameguidehub"
                  target="_blank"
                  rel="noopener"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    color: "var(--color-accent)",
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                  }}
                >
                  ❤️ Support Us
                </a>
              </div>
            </header>

            {/* Main Content */}
            <main style={{ flex: 1 }}>{children}</main>

            {/* Footer — Parchment with aged feel */}
            <footer
              style={{
                backgroundColor: "var(--color-bg-elevated)",
                borderTop: "2px double var(--color-accent-gold)",
                padding: "3rem 2rem 2rem",
                marginTop: "3rem",
              }}
            >
              <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                {/* More Game Guides */}
                <section style={{ marginBottom: "2rem" }}>
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      color: "var(--color-accent)",
                      fontSize: "1.3rem",
                      marginBottom: "1rem",
                    }}
                  >
                    More Game Guides
                  </h3>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "1rem",
                    }}
                  >
                    <a href="https://menace-guide.vercel.app" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: "0.9rem" }}>MENACE Guide</a>
                    <a href="https://olden-era-guide-tau.vercel.app" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: "0.9rem" }}>Olden Era Guide</a>
                    <a href="https://dispatch-guide-sigma.vercel.app" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: "0.9rem" }}>Dispatch Guide</a>
                    <a href="https://solarpunk-game-wiki.vercel.app" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: "0.9rem" }}>Solarpunk Guide</a>
                  </div>
                </section>

                {/* Footer Links */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "1rem 2rem",
                    marginBottom: "1.5rem",
                    paddingTop: "1.5rem",
                    borderTop: "1px solid var(--color-divider)",
                  }}
                >
                  <a href="/about" style={{ color: "var(--color-text-muted)", fontSize: "0.9rem", fontFamily: "'Inter', sans-serif" }}>About</a>
                  <a href="/privacy" style={{ color: "var(--color-text-muted)", fontSize: "0.9rem", fontFamily: "'Inter', sans-serif" }}>Privacy</a>
                  <a href="/terms" style={{ color: "var(--color-text-muted)", fontSize: "0.9rem", fontFamily: "'Inter', sans-serif" }}>Terms</a>
                  <a href="/faq" style={{ color: "var(--color-text-muted)", fontSize: "0.9rem", fontFamily: "'Inter', sans-serif" }}>FAQ</a>
                  <a href="https://afdian.com/a/gameguidehub" target="_blank" rel="noopener" style={{ color: "var(--color-accent)", fontSize: "0.9rem", fontWeight: 600 }}>❤️ Support Us</a>
                </div>

                <p style={{ color: "var(--color-text-muted)", fontSize: "0.8rem", lineHeight: 1.6, fontFamily: "'Lora', serif", fontStyle: "italic" }}>
                  This is a fan-made guide site. Going Medieval is developed by Foxy Voxel. We are not affiliated with, endorsed by, or connected to Foxy Voxel in any official capacity. All game content, trademarks, and copyrights belong to their respective owners.
                </p>
              </div>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
