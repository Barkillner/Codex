import Link from "next/link";

import { PartnersStrip } from "@/components/partners-strip";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { getFeaturedProjects, getServices, getSiteSettings } from "@/lib/sanity/queries";

export default async function HomePage() {
  const [settings, featuredProjects, services] = await Promise.all([
    getSiteSettings(),
    getFeaturedProjects(),
    getServices()
  ]);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: settings.siteName,
    description: settings.tagline,
    email: settings.email,
    address: settings.location,
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"
  };

  return (
    <>
      <section className="section-space">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="site-grid">
            <div className="col-span-4 md:col-span-6 xl:col-span-8">
              <p className="text-xs tracking-[0.1em] uppercase text-muted">Digital Portfolio</p>
              <h1 className="mt-4 text-5xl font-semibold leading-tight tracking-tight md:text-6xl xl:text-7xl">
                Sleek digital experiences crafted for product teams.
              </h1>
            </div>
            <div className="col-span-4 md:col-span-4 xl:col-span-4 card reveal">
              <p className="text-sm text-ink/85">{settings.bio}</p>
              <p className="mt-6 text-sm font-semibold">{settings.location}</p>
              <Link href="/contact" className="mt-5 inline-block rounded-full bg-ink px-5 py-2 text-sm text-white">
                Start a Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <SectionHeading
            eyebrow="Featured Work"
            title="Selected projects"
            description="A sample of strategy-led and system-driven engagements."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </div>
          <div className="mt-8">
            <Link href="/project" className="nav-link text-sm font-semibold text-accent">
              Browse all projects
            </Link>
          </div>
        </div>
      </section>

      <section className="section-space bg-white/45">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <SectionHeading
            eyebrow="Services"
            title="From strategy to launch"
            description="Structured services designed to move from concept to measurable outcomes."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service._id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <PartnersStrip settings={settings} />

      <section className="section-space">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="card flex flex-col items-start gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs tracking-[0.1em] uppercase text-muted">Contact</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight">Let&apos;s build your next release.</h2>
            </div>
            <Link href="/contact" className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white">
              Get in touch
            </Link>
          </div>
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </section>
    </>
  );
}
