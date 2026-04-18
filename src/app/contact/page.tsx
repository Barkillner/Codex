import type { Metadata } from "next";
import Link from "next/link";

import { getSiteSettings } from "@/lib/sanity/queries";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch for design and development collaborations."
};

export default async function ContactPage() {
  const settings = await getSiteSettings();

  return (
    <section className="section-space">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="site-grid">
          <div className="col-span-4 md:col-span-5 xl:col-span-7">
            <p className="text-xs tracking-[0.1em] uppercase text-muted">Contact</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">Let&apos;s discuss your next project.</h1>
            <p className="mt-4 max-w-xl text-sm text-ink/80 md:text-base">
              Share your timeline, goals, and scope. I&apos;ll respond with suggested approach and next steps.
            </p>
          </div>

          <div className="card col-span-4 md:col-span-3 xl:col-span-5">
            <p className="text-xs tracking-[0.08em] uppercase text-muted">Direct</p>
            <Link href={`mailto:${settings.email}`} className="mt-2 block text-lg font-semibold text-accent">
              {settings.email}
            </Link>
            <p className="mt-2 text-sm text-ink/80">{settings.location}</p>

            <div className="mt-6">
              <p className="text-xs tracking-[0.08em] uppercase text-muted">Social</p>
              <ul className="mt-2 space-y-2 text-sm">
                {settings.socialLinks.map((link) => (
                  <li key={link.label}>
                    <Link className="nav-link" target="_blank" rel="noreferrer" href={link.href}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
