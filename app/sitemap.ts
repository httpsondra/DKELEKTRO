import type { MetadataRoute } from "next";
import { site, services, legalPages } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = site.domain;

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "monthly", priority: 1 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${base}/sluzby/${s.slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.8,
  }));

  const legalRoutes: MetadataRoute.Sitemap = legalPages.map((p) => ({
    url: `${base}/${p.slug}`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.3,
  }));

  return [...staticRoutes, ...serviceRoutes, ...legalRoutes];
}
