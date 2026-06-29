import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Going Medieval Winter Survival Guide — Food, Heat & Mood (2026)",
  description:
    "Complete Going Medieval winter survival guide. Food stockpile targets, heating systems, cold-weather clothing, frozen soil solutions, and settler mood management. Survive any winter with our data-backed strategies.",
  keywords: [
    "Going Medieval winter survival",
    "Going Medieval winter guide",
    "Going Medieval heating",
    "Going Medieval cold weather",
    "Going Medieval food stockpile",
    "Going Medieval underground farming",
  ],
  openGraph: {
    title: "Going Medieval Winter Survival Guide",
    description:
      "Master winter survival in Going Medieval. Food targets, heating, clothing, and mood management strategies.",
  },
  robots: { index: true, follow: true },
};

export default function WinterSurvivalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
