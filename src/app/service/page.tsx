import type { Metadata } from "next";

import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { getServices } from "@/lib/sanity/queries";

export const metadata: Metadata = {
  title: "Service",
  description: "Service overview covering strategy, design systems, and front-end implementation."
};

const processSteps = [
  {
    title: "1. Discover",
    detail: "Clarify business goals, audience constraints, and brand positioning inputs."
  },
  {
    title: "2. Design",
    detail: "Translate insights into wireframes, interface language, and modular design components."
  },
  {
    title: "3. Deliver",
    detail: "Ship production-ready interfaces with CMS support and performance tuning."
  }
];

export default async function ServicePage() {
  const services = await getServices();

  return (
    <section className="section-space">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <SectionHeading
          eyebrow="Services"
          title="Strategy, systems, and front-end delivery"
          description="Choose standalone engagements or combine them into a full product launch track."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service} />
          ))}
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {processSteps.map((step) => (
            <article key={step.title} className="card">
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-ink/80">{step.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
