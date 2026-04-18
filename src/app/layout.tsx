import type { Metadata } from "next";

import "./globals.css";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getSiteSettings } from "@/lib/sanity/queries";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"),
    title: {
      default: settings.seoDefaults.title,
      template: `%s | ${settings.siteName}`
    },
    description: settings.seoDefaults.description,
    openGraph: {
      title: settings.seoDefaults.title,
      description: settings.seoDefaults.description,
      images: settings.seoDefaults.image ? [settings.seoDefaults.image] : [],
      type: "website"
    }
  };
}

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const settings = await getSiteSettings();

  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter settings={settings} />
      </body>
    </html>
  );
}
