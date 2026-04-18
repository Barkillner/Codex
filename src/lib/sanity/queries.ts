import groq from "groq";

import { fallbackProjects, fallbackServices, fallbackSiteSettings } from "@/data/fallback";
import { hasSanityConfig, sanityClient } from "@/lib/sanity/client";
import type { Project, Service, SiteSettings } from "@/types";

const siteSettingsQuery = groq`*[_type == "siteSettings"][0]{
  _id,
  siteName,
  tagline,
  bio,
  email,
  location,
  socialLinks,
  seoDefaults,
  capabilities,
  timeline,
  partnerLogos
}`;

const servicesQuery = groq`*[_type == "service"]|order(order asc){
  _id,
  title,
  description,
  icon,
  order
}`;

const projectsQuery = groq`*[_type == "project"]|order(year desc, _createdAt desc){
  _id,
  title,
  "slug": slug.current,
  summary,
  services,
  coverImage,
  gallery,
  results,
  tags,
  year,
  liveUrl,
  repositoryUrl,
  featured
}`;

const projectBySlugQuery = groq`*[_type == "project" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  summary,
  services,
  coverImage,
  gallery,
  results,
  tags,
  year,
  liveUrl,
  repositoryUrl,
  featured
}`;

async function fetchWithFallback<T>(query: string, params: Record<string, string> = {}, fallback: T): Promise<T> {
  if (!hasSanityConfig) {
    return fallback;
  }

  try {
    const data = await sanityClient.fetch<T>(query, params);
    if (!data) return fallback;
    if (Array.isArray(data) && data.length === 0) return fallback;
    return data;
  } catch {
    return fallback;
  }
}

export async function getSiteSettings() {
  return fetchWithFallback<SiteSettings>(siteSettingsQuery, {}, fallbackSiteSettings);
}

export async function getServices() {
  return fetchWithFallback<Service[]>(servicesQuery, {}, fallbackServices);
}

export async function getProjects() {
  return fetchWithFallback<Project[]>(projectsQuery, {}, fallbackProjects);
}

export async function getFeaturedProjects() {
  const projects = await getProjects();
  return projects.filter((project) => project.featured).slice(0, 2);
}

export async function getProjectBySlug(slug: string) {
  const fallback = fallbackProjects.find((project) => project.slug === slug) || null;
  return fetchWithFallback<Project | null>(projectBySlugQuery, { slug }, fallback);
}
