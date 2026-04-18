import type { Project, Service, SiteSettings } from "@/types";

export const fallbackServices: Service[] = [
  {
    _id: "service-brand-strategy",
    title: "Brand Strategy",
    description: "Positioning, narrative architecture, and visual strategy for growth-stage teams.",
    order: 1
  },
  {
    _id: "service-uiux",
    title: "UI / UX Systems",
    description: "Grid-led digital experiences with scalable components and conversion-aware flows.",
    order: 2
  },
  {
    _id: "service-dev",
    title: "Front-End Delivery",
    description: "Production-grade React/Next implementations optimized for speed and maintainability.",
    order: 3
  }
];

export const fallbackProjects: Project[] = [
  {
    _id: "project-aurora",
    title: "Aurora Launch Platform",
    slug: "aurora-launch-platform",
    summary: "A launch campaign website built on a dynamic content model and performance-first architecture.",
    services: ["Brand Strategy", "UI / UX Systems"],
    tags: ["Marketing", "Next.js", "Sanity"],
    year: 2025,
    featured: true,
    results: ["+41% qualified leads", "52% faster content publishing", "Lighthouse 95+ performance"]
  },
  {
    _id: "project-ridge",
    title: "Ridge Commerce Redesign",
    slug: "ridge-commerce-redesign",
    summary: "End-to-end ecommerce redesign with modular merchandising blocks and editorial storytelling.",
    services: ["UI / UX Systems", "Front-End Delivery"],
    tags: ["Ecommerce", "Design System"],
    year: 2024,
    featured: true,
    results: ["+28% conversion", "-33% bounce rate", "2x faster page authoring"]
  },
  {
    _id: "project-terra",
    title: "Terra Data Storytelling",
    slug: "terra-data-storytelling",
    summary: "Interactive long-form experience turning complex analytics into executive-ready narratives.",
    services: ["Brand Strategy", "Front-End Delivery"],
    tags: ["Data Viz", "Storytelling"],
    year: 2023,
    featured: false,
    results: ["Adopted by 4 departments", "Reduced reporting preparation by 60%"]
  }
];

export const fallbackSiteSettings: SiteSettings = {
  _id: "site-settings-default",
  siteName: "Miller Studio",
  tagline: "Digital design and development for teams shipping meaningful products.",
  bio: "I design and build web experiences where clear narrative, structured systems, and performance work together.",
  email: "hello@example.com",
  location: "New York, NY",
  socialLinks: [
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "GitHub", href: "https://github.com" },
    { label: "Dribbble", href: "https://dribbble.com" }
  ],
  seoDefaults: {
    title: "Miller Studio | Portfolio",
    description: "Portfolio of digital strategy, UI systems, and front-end product delivery.",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb"
  },
  capabilities: [
    "Design direction and visual systems",
    "Product storytelling and conversion flows",
    "CMS architecture and component libraries",
    "Next.js implementation and optimization"
  ],
  timeline: [
    {
      year: "2026",
      title: "Independent Studio",
      description: "Leading end-to-end digital engagements for startups and product teams."
    },
    {
      year: "2024",
      title: "Senior Product Designer",
      description: "Built a cross-product design system used by 6 internal teams."
    },
    {
      year: "2021",
      title: "Front-End Engineer",
      description: "Delivered marketing and product surfaces with measurable conversion gains."
    }
  ],
  partnerLogos: [
    { name: "Northline", mark: "NL" },
    { name: "Pioneer", mark: "PI" },
    { name: "Orbit", mark: "OR" },
    { name: "Vector", mark: "VT" }
  ]
};
