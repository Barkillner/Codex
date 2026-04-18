import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/service", label: "Service" },
  { href: "/project", label: "Project" },
  { href: "/contact", label: "Contact" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-surface/85 backdrop-blur-lg">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="font-semibold tracking-[0.14em] uppercase">
          Miller Studio
        </Link>
        <nav aria-label="Primary navigation">
          <ul className="flex flex-wrap items-center gap-4 text-sm md:gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link className="nav-link" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
