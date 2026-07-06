import { mockHostels } from "@/data/mockHostel";
import { MetadataRoute } from "next";

const BASE_URL = "https://www.kpzonestays.com/";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/explore`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const hostelPages: MetadataRoute.Sitemap = mockHostels.map((hostel: any) => ({
    url: `${BASE_URL}/hostel/${hostel.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticPages, ...hostelPages];
}