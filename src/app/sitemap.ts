import type { MetadataRoute } from "next";

import { siteUrl } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      changeFrequency: "monthly",
      priority: 1,
      url: siteUrl,
    },
    {
      changeFrequency: "monthly",
      priority: 0.9,
      url: `${siteUrl}/work`,
    },
    {
      changeFrequency: "monthly",
      priority: 0.8,
      url: `${siteUrl}/about`,
    },
  ];
}
