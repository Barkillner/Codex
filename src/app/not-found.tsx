import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section-space">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <p className="text-xs tracking-[0.1em] uppercase text-muted">404</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">Page not found</h1>
        <p className="mt-3 text-sm text-ink/80">The page you requested does not exist.</p>
        <Link href="/" className="mt-5 inline-block text-sm font-semibold text-accent">
          Back home
        </Link>
      </div>
    </section>
  );
}
