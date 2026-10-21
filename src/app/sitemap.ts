import type { MetadataRoute } from "next";
import { business } from "@/config/business";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: `${business.siteUrl || process.env.CF_PAGES_URL || "http://localhost:3000"}/`, changeFrequency: "monthly", priority: 1 }];
}
