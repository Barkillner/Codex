import type { Metadata } from "next";

import { ProjectsGridClient } from "@/components/projects-grid-client";
import { SectionHeading } from "@/components/section-heading";
import { getProjects } from "@/lib/sanity/queries";

export const metadata: Metadata = {
  title: "Project",
  description: "Project archive with filter and sorting controls powered by CMS data."
};

export default async function ProjectPage() {
  const projects = await getProjects();

  return (
    <section className="section-space">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <SectionHeading
          eyebrow="Projects"
          title="Case studies and product releases"
          description="Filter by service focus and sort by timeline to explore the full archive."
        />

        <ProjectsGridClient projects={projects} />
      </div>
    </section>
  );
}
