import type { Service } from "@/types";

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="card reveal">
      <p className="text-xs tracking-[0.08em] uppercase text-muted">Service</p>
      <h3 className="mt-2 text-xl font-semibold">{service.title}</h3>
      <p className="mt-3 text-sm text-ink/80">{service.description}</p>
    </article>
  );
}
