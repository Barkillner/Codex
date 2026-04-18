import type { Metadata } from "next";

import { SectionHeading } from "@/components/section-heading";
import { getSiteSettings } from "@/lib/sanity/queries";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  return {
    title: "About",
    description: `About ${settings.siteName}: capabilities, background, and working approach.`
  };
}

export default async function AboutPage() {
  const settings = await getSiteSettings();

  return (
    <section className="section-space">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <SectionHeading
          eyebrow="About"
          title="Designing clear systems for ambitious teams"
          description={settings.bio}
        />

        <div className="site-grid">
          <article className="card col-span-4 md:col-span-4 xl:col-span-6">
            <h3 className="text-xl font-semibold">Capabilities</h3>
            <ul className="mt-4 space-y-3 text-sm text-ink/80">
              {settings.capabilities.map((capability) => (
                <li key={capability}>{capability}</li>
              ))}
            </ul>
          </article>

          <article className="card col-span-4 md:col-span-4 xl:col-span-6">
            <h3 className="text-xl font-semibold">Career Milestones</h3>
            <ol className="mt-4 space-y-4">
              {settings.timeline.map((item) => (
                <li key={`${item.year}-${item.title}`}>
                  <p className="text-xs tracking-[0.08em] uppercase text-muted">{item.year}</p>
                  <p className="mt-1 font-medium">{item.title}</p>
                  <p className="text-sm text-ink/80">{item.description}</p>
                </li>
              ))}
            </ol>
          </article>
        </div>
      </div>
    </section>
  );
}
