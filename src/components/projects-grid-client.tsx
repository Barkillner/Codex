"use client";

import { useMemo, useState } from "react";

import { ProjectCard } from "@/components/project-card";
import type { Project } from "@/types";

type ProjectsGridClientProps = {
  projects: Project[];
};

const allServices = "All";

export function ProjectsGridClient({ projects }: ProjectsGridClientProps) {
  const [activeService, setActiveService] = useState(allServices);
  const [sortBy, setSortBy] = useState<"latest" | "oldest" | "alphabetical">("latest");

  const serviceFilters = useMemo(() => {
    const all = new Set<string>();
    projects.forEach((project) => project.services.forEach((service) => all.add(service)));
    return [allServices, ...Array.from(all)];
  }, [projects]);

  const visibleProjects = useMemo(() => {
    const filtered =
      activeService === allServices
        ? projects
        : projects.filter((project) => project.services.includes(activeService));

    return [...filtered].sort((a, b) => {
      if (sortBy === "alphabetical") return a.title.localeCompare(b.title);
      const ay = a.year || 0;
      const by = b.year || 0;
      return sortBy === "latest" ? by - ay : ay - by;
    });
  }, [activeService, projects, sortBy]);

  return (
    <div>
      <div className="mb-7 flex flex-wrap items-center gap-3">
        {serviceFilters.map((service) => (
          <button
            type="button"
            key={service}
            className={`chip ${service === activeService ? "chip-active" : ""}`}
            onClick={() => setActiveService(service)}
          >
            {service}
          </button>
        ))}

        <label className="ml-auto text-sm" htmlFor="sort-projects">
          Sort
        </label>
        <select
          id="sort-projects"
          className="rounded-xl border border-ink/15 bg-transparent px-3 py-2 text-sm"
          value={sortBy}
          onChange={(event) => setSortBy(event.target.value as "latest" | "oldest" | "alphabetical")}
        >
          <option value="latest">Latest</option>
          <option value="oldest">Oldest</option>
          <option value="alphabetical">A-Z</option>
        </select>
      </div>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {visibleProjects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
}
