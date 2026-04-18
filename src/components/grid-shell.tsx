import { clsx } from "clsx";
import type { ReactNode } from "react";

type GridShellProps = {
  children: ReactNode;
  className?: string;
};

export function GridShell({ children, className }: GridShellProps) {
  return <div className={clsx("site-grid", className)}>{children}</div>;
}
