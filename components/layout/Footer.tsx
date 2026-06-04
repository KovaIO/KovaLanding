import Image from "next/image";
import linesLogo from "../../public/lines.png";
import { FOOTER_COLUMNS, SITE } from "@/lib/constants";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle/60 bg-canvas py-16 md:py-20">
      <Container>
        <div className="grid gap-12 md:grid-cols-[1.2fr_repeat(3,1fr)]">
          <div>
            <a href="#" className="mb-4 flex items-center gap-2">
              <Image src={linesLogo} alt="" width={24} height={24} />
              <span className="font-semibold text-text-primary">{SITE.name}</span>
            </a>
            <p className="max-w-xs text-sm leading-relaxed text-text-muted">
              {SITE.description}
            </p>
          </div>

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

        <div className="mt-14 flex flex-col gap-2 border-t border-border-subtle/40 pt-8 text-sm text-text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {SITE.name}. All rights reserved.</p>
          <p className="font-mono text-xs">Built with Tauri · Rust · Local-first</p>
        </div>
      </Container>
    </footer>
  );
}
