export type SeoMeta = {
  title: string;
  description: string;
  image?: string;
};

export type PortableImage = {
  asset?: {
    _ref?: string;
    _type?: string;
    url?: string;
  };
  alt?: string;
};

export type Service = {
  _id: string;
  title: string;
  description: string;
  icon?: PortableImage;
  order?: number;
};

export type Project = {
  _id: string;
  title: string;
  slug: string;
  summary: string;
  services: string[];
  coverImage?: PortableImage;
  gallery?: PortableImage[];
  results?: string[];
  tags?: string[];
  year?: number;
  liveUrl?: string;
  repositoryUrl?: string;
  featured?: boolean;
};

export type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

export type SiteSettings = {
  _id: string;
  siteName: string;
  tagline: string;
  bio: string;
  email: string;
  location: string;
  socialLinks: Array<{ label: string; href: string }>;
  seoDefaults: SeoMeta;
  capabilities: string[];
  timeline: TimelineItem[];
  partnerLogos: Array<{ name: string; mark: string }>;
};
