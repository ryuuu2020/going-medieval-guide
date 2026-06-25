import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Going Medieval Guide",
  description:
    "Privacy policy for the Going Medieval Guide fan site. Learn about data collection via Google Analytics, cookies, third-party services, your privacy rights, and how we protect your information.",
};

export default function PrivacyPage() {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem" }}>
      <h1 style={{ marginBottom: "0.5rem" }}>Privacy Policy</h1>
      <p style={{ color: "var(--color-text-muted)", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: "2rem" }}>
        This Privacy Policy explains how the Going Medieval Guide fan site collects, uses, and
        protects information from visitors. We are committed to transparency about our data
        practices.
      </p>

      {/* FAQ */}
      <h2 style={{ marginBottom: "1rem" }}>Quick Answers</h2>
      <div className="faq-snippets">
        <details>
          <summary>Do you collect personal information?</summary>
          <p>
            We do not directly collect personal information such as names, email addresses, or
            account credentials. The Going Medieval Guide is a static information website with
            no user registration, login system, comments section, or form submissions. We do not
            have access to your identity, and we cannot identify individual visitors based on
            the data we receive through our analytics tools.
          </p>
        </details>
        <details>
          <summary>Do you use cookies?</summary>
          <p>
            We do not set our own cookies. However, Google Analytics (our analytics provider)
            may set cookies in your browser for the purpose of tracking site usage statistics.
            These are third-party cookies controlled by Google, not by the Going Medieval Guide.
            You can manage or disable cookies through your browser settings at any time. See
            Google&apos;s privacy policy for details on how Google Analytics handles cookie data.
          </p>
        </details>
        <details>
          <summary>Is my data shared with anyone?</summary>
          <p>
            The anonymous analytics data collected by Google Analytics is processed by Google
            according to their privacy policy and data processing terms. We do not sell, trade,
            rent, or otherwise share any visitor data with third parties. We do not use any
            advertising networks, data brokers, or tracking services beyond Google Analytics.
            Your browsing activity on this site is not used for personalized advertising or
            profiling.
          </p>
        </details>
      </div>

      {/* Detailed Policy */}
      <h2 style={{ marginTop: "3rem", marginBottom: "1rem" }}>Information We Collect</h2>
      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "1rem" }}>
        The Going Medieval Guide is a fan-made information website. We use Google Analytics
        (GA4, Measurement ID: G-ET6778V62K) to collect anonymous usage data that helps us
        understand how visitors interact with our site. This data is collected automatically
        when you visit our pages.
      </p>
      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "1rem" }}>
        Through Google Analytics, we may receive aggregated, anonymized information including:
        the pages you visit on our site, how long you spend on each page, the type of device
        and browser you use, your general geographic location (country/city level, not precise
        location), how you arrived at our site (e.g., search engine, direct link, social media),
        and technical information such as screen resolution and operating system. This data is
        anonymized — Google Analytics does not provide us with IP addresses or information that
        identifies individual visitors.
      </p>

      <h2 style={{ marginTop: "2rem", marginBottom: "1rem" }}>How We Use Information</h2>
      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "1rem" }}>
        The anonymous analytics data we receive is used exclusively to improve the Going Medieval
        Guide. We analyze which guides are most popular to prioritize content updates, identify
        pages that visitors find unclear or unhelpful (high bounce rates), understand whether
        visitors are primarily using desktop or mobile devices so we can optimize the site
        experience, and track overall site traffic to measure the guide&apos;s reach within the
        Going Medieval community.
      </p>
      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "1rem" }}>
        We do not use analytics data for advertising purposes, and we do not combine our
        analytics data with data from any other sources. The data is viewed only in aggregate
        form — we cannot and do not attempt to identify individual visitors from analytics
        reports. All data usage is governed by Google Analytics&apos; data processing terms and
        privacy policies.
      </p>

      <h2 style={{ marginTop: "2rem", marginBottom: "1rem" }}>Third-Party Services</h2>
      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "1rem" }}>
        <strong style={{ color: "var(--color-accent)" }}>Google Analytics (GA4):</strong> We use
        Google Analytics to collect anonymous site usage statistics. Google Analytics operates
        under Google&apos;s privacy policy and data processing terms. Google may use the data
        collected to contextualize and personalize ads on their own advertising network, but
        we do not enable advertising features in our Google Analytics configuration. For more
        information about how Google collects and processes data, visit Google&apos;s Privacy and
        Terms page at policies.google.com.
      </p>
      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "1rem" }}>
        <strong style={{ color: "var(--color-accent)" }}>Google Fonts:</strong> We use Google
        Fonts to serve the MedievalSharp and Inter typefaces used throughout this site. When
        your browser loads these fonts, Google may receive technical information about the
        request (such as your IP address). Google Fonts usage is covered by Google&apos;s privacy
        policy.
      </p>

      <h2 style={{ marginTop: "2rem", marginBottom: "1rem" }}>Data Retention</h2>
      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "1rem" }}>
        Google Analytics retains data according to our configured retention period. We have
        configured Google Analytics to retain user-level and event-level data for the minimum
        standard period. Aggregated data (reports) does not automatically expire. We do not
        independently store or retain any visitor data outside of Google Analytics.
      </p>

      <h2 style={{ marginTop: "2rem", marginBottom: "1rem" }}>Your Rights</h2>
      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "1rem" }}>
        Depending on your jurisdiction (including GDPR in the European Union and CCPA in
        California), you may have rights regarding your personal data. Since we do not
        directly collect personal information and only receive anonymized, aggregated data
        through Google Analytics, our ability to identify, access, or delete individual
        visitor data is limited. You can exercise control over your data by:
      </p>
      <ul style={{ color: "var(--color-text-muted)", lineHeight: 1.8, marginBottom: "1.5rem", paddingLeft: "1.25rem" }}>
        <li>Installing the Google Analytics Opt-out Browser Add-on (available at tools.google.com/dlpage/gaoptout) to prevent your data from being used by Google Analytics across all websites.</li>
        <li>Disabling cookies in your browser settings to prevent analytics tracking.</li>
        <li>Using browser privacy features such as &quot;Do Not Track&quot; settings.</li>
      </ul>

      <h2 style={{ marginTop: "2rem", marginBottom: "1rem" }}>Children&apos;s Privacy</h2>
      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "1rem" }}>
        The Going Medieval Guide is a general-audience gaming guide website. We do not
        knowingly collect personal information from children under the age of 13, and our
        site does not have features directed at children. If you believe a child has provided
        personal information through this site, please contact us and we will work to delete
        such information.
      </p>

      <h2 style={{ marginTop: "2rem", marginBottom: "1rem" }}>Changes to This Policy</h2>
      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: "1rem" }}>
        We may update this Privacy Policy from time to time to reflect changes in our data
        practices, the services we use, or legal requirements. When we make changes, we will
        update the policy on this page. We encourage visitors to review this policy
        periodically. Continued use of the Going Medieval Guide after changes to this policy
        constitutes acceptance of the updated terms.
      </p>

      <h2 style={{ marginTop: "2rem", marginBottom: "1rem" }}>Contact</h2>
      <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7 }}>
        If you have questions about this Privacy Policy, concerns about data practices, or
        requests regarding your information, you can contact us through the Going Medieval
        Guide website channels. As a fan-made resource, our ability to respond to individual
        inquiries about data processing is limited, but we will make our best effort to
        address legitimate privacy concerns. For questions specifically about Google Analytics
        data processing, we recommend reviewing Google&apos;s privacy resources and contacting
        Google directly.
      </p>
    </div>
  );
}
