import { type ReactNode } from "react";

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-border-subtle bg-surface px-2.5 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-text-muted">
      {children}
    </span>
  );
}
