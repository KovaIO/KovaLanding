import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: ["GPTBot", "CCBot", "Google-Extended", "anthropic-ai", "Bytespider"],
        allow: "/",
      },
    ],
    sitemap: "https://appkova.com/sitemap.xml",
  };
}
