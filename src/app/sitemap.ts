import type { MetadataRoute } from "next";

import { getProjects } from "@/lib/sanity/queries";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
  const projects = await getProjects();

  const staticRoutes = ["", "/about", "/service", "/project", "/contact"].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date()
  }));

  const projectRoutes = projects.map((project) => ({
    url: `${base}/project/${project.slug}`,
    lastModified: new Date()
  }));

  return [...staticRoutes, ...projectRoutes];
}
