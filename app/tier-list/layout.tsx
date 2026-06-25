import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tier List: Best Settlers, Crops, Defenses — Going Medieval Guide",
  description:
    "S-tier to D-tier rankings for settler skills, crops, animals, and defenses. Discover the best and worst choices for your Going Medieval colony.",
  openGraph: {
    title: "Tier List: Best Settlers, Crops, Defenses — Going Medieval Guide",
    description:
      "S-tier to D-tier rankings for settler skills, crops, animals, and defenses in Going Medieval. Make informed decisions for your medieval colony.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function TierListLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
