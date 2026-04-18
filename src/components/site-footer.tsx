import Link from "next/link";

import type { SiteSettings } from "@/types";

type SiteFooterProps = {
  settings: SiteSettings;
};

export function SiteFooter({ settings }: SiteFooterProps) {
  return (
    <footer className="border-t border-ink/10 py-12">
      <div className="mx-auto grid max-w-[1200px] gap-6 px-6 md:grid-cols-12 md:px-10">
        <div className="md:col-span-7">
          <p className="text-sm tracking-[0.08em] uppercase text-muted">{settings.siteName}</p>
          <p className="mt-3 max-w-xl text-sm text-ink/80">{settings.tagline}</p>
        </div>
        <div className="md:col-span-5 md:justify-self-end">
          <ul className="flex gap-4 text-sm">
            {settings.socialLinks.map((social) => (
              <li key={social.label}>
                <Link href={social.href} target="_blank" rel="noreferrer" className="nav-link">
                  {social.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-muted">{settings.email}</p>
        </div>
      </div>
    </footer>
  );
}
