import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: ReactNode;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-8 max-w-2xl">
      <p className="text-xs tracking-[0.1em] uppercase text-muted">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
      {description ? <p className="mt-3 text-sm text-ink/80 md:text-base">{description}</p> : null}
    </div>
  );
}
