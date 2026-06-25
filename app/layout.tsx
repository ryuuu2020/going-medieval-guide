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

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Buildings", href: "/buildings" },
  { label: "Research", href: "/research" },
  { label: "Settlers", href: "/settlers" },
  { label: "Farming", href: "/farming" },
  { label: "Defense", href: "/defense" },
  { label: "Beginner Guide", href: "/beginners-guide" },
  { label: "Tips", href: "/tips" },
  { label: "News", href: "/news" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="google4cd6cdf221ea7b0b"
        />
        {/* Google AdSense */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8925824244664340" crossOrigin="anonymous" />
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=MedievalSharp&family=Inter:wght@400;500;600;700&display=swap"
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
      </head>
      <body
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        {/* Header */}
        <header
          style={{
            backgroundColor: "var(--color-bg-card)",
            borderBottom: "2px solid var(--color-accent)",
            padding: "1rem 2rem",
            position: "sticky",
            top: 0,
            zIndex: 50,
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
            }}
          >
            {/* Site Title */}
            <a
              href="/"
              style={{
                fontFamily: "'MedievalSharp', 'Georgia', serif",
                fontSize: "1.75rem",
                fontWeight: 700,
                color: "var(--color-accent)",
                textDecoration: "none",
              }}
            >
              Going Medieval Guide
            </a>
            {/* Navigation */}
            <nav
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem 1.25rem",
                fontSize: "0.95rem",
              }}
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="nav-link"
                  style={{
                    color: "var(--color-text-muted)",
                    textDecoration: "none",
                    fontWeight: 500,
                    transition: "color 0.2s",
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main style={{ flex: 1 }}>{children}</main>

        {/* Footer */}
        <footer
          style={{
            backgroundColor: "var(--color-bg-card)",
            borderTop: "2px solid var(--color-border)",
            padding: "3rem 2rem 2rem",
            marginTop: "3rem",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            {/* More Game Guides */}
            <section style={{ marginBottom: "2rem" }}>
              <h3
                style={{
                  fontFamily: "'MedievalSharp', serif",
                  color: "var(--color-accent)",
                  fontSize: "1.25rem",
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
                <a
                  href="https://menace-guide.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ fontSize: "0.9rem" }}
                >
                  MENACE Guide
                </a>
                <a
                  href="https://olden-era-guide-tau.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ fontSize: "0.9rem" }}
                >
                  Olden Era Guide
                </a>
                <a
                  href="https://dispatch-guide-sigma.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ fontSize: "0.9rem" }}
                >
                  Dispatch Guide
                </a>
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
                borderTop: "1px solid var(--color-border)",
              }}
            >
              <a
                href="/about"
                style={{
                  color: "var(--color-text-muted)",
                  fontSize: "0.9rem",
                  textDecoration: "none",
                }}
              >
                About
              </a>
              <a
                href="/privacy"
                style={{
                  color: "var(--color-text-muted)",
                  fontSize: "0.9rem",
                  textDecoration: "none",
                }}
              >
                Privacy
              </a>
              <a
                href="/terms"
                style={{
                  color: "var(--color-text-muted)",
                  fontSize: "0.9rem",
                  textDecoration: "none",
                }}
              >
                Terms
              </a>
              <a
                href="/faq"
                style={{
                  color: "var(--color-text-muted)",
                  fontSize: "0.9rem",
                  textDecoration: "none",
                }}
              >
                FAQ
              </a>
              <a
                href="https://afdian.com/a/gameguidehub"
                target="_blank"
                rel="noopener"
                style={{
                  color: "var(--color-accent)",
                  fontSize: "0.9rem",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                ❤️ Support Us
              </a>
            </div>

            {/* Disclaimer */}
            <p
              style={{
                color: "var(--color-text-muted)",
                fontSize: "0.8rem",
                lineHeight: 1.6,
              }}
            >
              This is a fan-made guide site. Going Medieval is developed by
              Foxy Voxel. We are not affiliated with, endorsed by, or connected
              to Foxy Voxel in any official capacity. All game content,
              trademarks, and copyrights belong to their respective owners.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
