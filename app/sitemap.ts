import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://appkova.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://appkova.com/success",
      lastModified: new Date(),
      changeFrequency: "never",
      priority: 0,
    },
  ];
}
