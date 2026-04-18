import Image from "next/image";
import Link from "next/link";

import { urlForImage } from "@/lib/sanity/image";
import type { Project } from "@/types";

type ProjectCardProps = {
  project: Project;
};

const fallbackImage =
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80";

export function ProjectCard({ project }: ProjectCardProps) {
  const imageUrl = urlForImage(project.coverImage, 1200) || fallbackImage;

  return (
    <article className="card reveal">
      <div className="relative h-52 overflow-hidden rounded-2xl">
        <Image
          src={imageUrl}
          alt={project.coverImage?.alt || project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-500 hover:scale-[1.03]"
        />
      </div>
      <p className="mt-4 text-xs tracking-[0.08em] uppercase text-muted">{project.year || "Ongoing"}</p>
      <h3 className="mt-1 text-xl font-semibold">{project.title}</h3>
      <p className="mt-2 text-sm text-ink/80">{project.summary}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {(project.tags || []).map((tag) => (
          <span key={tag} className="rounded-full border border-ink/15 px-3 py-1 text-xs">
            {tag}
          </span>
        ))}
      </div>
      <Link href={`/project/${project.slug}`} className="mt-5 inline-block text-sm font-semibold text-accent">
        View Project
      </Link>
    </article>
  );
}
