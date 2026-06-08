import { FOOTER_COLUMNS } from "@/lib/constants";
import { Container } from "@/components/ui/Container";

export function Footer() {
  // const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle/60 bg-canvas py-16 md:py-20">
      <Container>
        <div className="flex flex-wrap justify-center gap-12 md:gap-20">
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.15em] text-text-muted">
                {col.title}
              </p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* <div className="mt-14 flex flex-col gap-2 border-t border-border-subtle/40 pt-8 text-sm text-text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {SITE.name}. All rights reserved.</p>
        </div> */}
      </Container>
    </footer>
  );
}
