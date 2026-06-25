import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use for Going Medieval Guide — a fan-made resource website.",
};

export default function TermsPage() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <h1>Terms of Use</h1>

      <h2>1. Acceptance of Terms</h2>
      <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
        By accessing Going Medieval Guide, you agree to these terms. If you do not agree, please do not use this website.
      </p>

      <h2>2. Content Disclaimer</h2>
      <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
        All content on this site is for informational purposes only. While we strive for accuracy, game mechanics may change with updates. We are not responsible for any decisions made based on our guides.
      </p>

      <h2>3. Intellectual Property</h2>
      <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
        Going Medieval and all related assets are trademarks of Foxy Voxel and The Irregular Corporation. Our original guide content is protected by copyright. You may link to our pages but not reproduce them wholesale.
      </p>

      <h2>4. User Conduct</h2>
      <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
        Do not attempt to disrupt the site, scrape content at excessive rates, or use our content to train AI models without permission.
      </p>

      <h2>5. Third-Party Links</h2>
      <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
        We link to external sites (Steam, other game guides). We are not responsible for their content or practices.
      </p>

      <h2>6. Limitation of Liability</h2>
      <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
        This site is provided "as is" without warranties. We shall not be liable for any damages arising from use of this site.
      </p>

      <h2>7. Changes to Terms</h2>
      <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
        We may update these terms at any time. Continued use of the site constitutes acceptance of changes.
      </p>

      <h2>8. Governing Law</h2>
      <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8 }}>
        These terms are governed by applicable laws. Any disputes shall be resolved through good-faith negotiation.
      </p>
    </div>
  );
}
