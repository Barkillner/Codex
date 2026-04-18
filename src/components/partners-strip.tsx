import type { SiteSettings } from "@/types";

type PartnersStripProps = {
  settings: SiteSettings;
};

export function PartnersStrip({ settings }: PartnersStripProps) {
  return (
    <section className="section-space">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <p className="text-xs tracking-[0.1em] uppercase text-muted">Selected Partners</p>
        <ul className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
          {settings.partnerLogos.map((partner) => (
            <li key={partner.name} className="card flex h-20 items-center justify-between p-4">
              <span className="font-semibold tracking-[0.08em] uppercase">{partner.mark}</span>
              <span className="text-sm text-muted">{partner.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
