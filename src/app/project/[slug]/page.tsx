import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { getProjectBySlug, getProjects } from "@/lib/sanity/queries";
import { urlForImage } from "@/lib/sanity/image";

const fallbackImage =
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80";

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found"
    };
  }

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      images: [urlForImage(project.coverImage) || fallbackImage]
    }
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const imageUrl = urlForImage(project.coverImage) || fallbackImage;
  const gallery = project.gallery && project.gallery.length > 0 ? project.gallery : [project.coverImage].filter(Boolean);

  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    dateCreated: project.year,
    description: project.summary,
    keywords: project.tags?.join(", "),
    image: imageUrl
  };

  return (
    <section className="section-space">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <p className="text-xs tracking-[0.1em] uppercase text-muted">Project Details</p>
        <h1 className="mt-3 max-w-4xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">{project.title}</h1>
        <p className="mt-4 max-w-2xl text-sm text-ink/80 md:text-base">{project.summary}</p>

        <div className="mt-8 grid gap-5 md:grid-cols-12">
          <div className="card md:col-span-8">
            <div className="relative h-[360px] overflow-hidden rounded-2xl">
              <Image src={imageUrl} alt={project.coverImage?.alt || project.title} fill className="object-cover" />
            </div>
          </div>
          <aside className="card md:col-span-4">
            <p className="text-xs tracking-[0.08em] uppercase text-muted">Services</p>
            <ul className="mt-2 space-y-1 text-sm">
              {project.services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>

            <p className="mt-6 text-xs tracking-[0.08em] uppercase text-muted">Results</p>
            <ul className="mt-2 space-y-2 text-sm">
              {(project.results || []).map((result) => (
                <li key={result}>{result}</li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {(project.tags || []).map((tag) => (
                <span key={tag} className="rounded-full border border-ink/15 px-3 py-1 text-xs">
                  {tag}
                </span>
              ))}
            </div>
          </aside>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {gallery.map((image, index) => (
            <div key={`${project._id}-gallery-${index}`} className="relative h-44 overflow-hidden rounded-2xl border border-ink/10">
              <Image
                src={urlForImage(image, 900) || fallbackImage}
                alt={image?.alt || `${project.title} gallery item ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <Link href="/project" className="mt-8 inline-block text-sm font-semibold text-accent">
          Back to projects
        </Link>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </section>
  );
}
