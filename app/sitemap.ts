import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://going-medieval-guide.vercel.app";
  const pages = [
    "", "/buildings", "/farming", "/defense", "/research", "/settlers",
    "/crafting", "/animals", "/seasons", "/biomes", "/trade", "/underground",
    "/beginners-guide", "/tips", "/news", "/faq", "/about", "/privacy", "/terms",
  ];

  return pages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/news" ? "weekly" : "monthly",
    priority: path === "" ? 1.0 : path === "/beginners-guide" ? 0.9 : 0.7,
  }));
}
