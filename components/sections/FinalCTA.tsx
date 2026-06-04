import { PLATFORMS, SITE } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

export function FinalCTA() {
  return (
    <section className="py-[var(--section-gap)]">
      <Container>
        <Reveal>
          <div className="card-surface relative overflow-hidden rounded-3xl px-8 py-16 text-center md:px-16 md:py-20">
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,255,255,0.06), transparent 65%)",
              }}
              aria-hidden
            />
            <h2 className="relative font-serif text-3xl text-text-primary md:text-5xl">
              Ready to tame your desktop?
            </h2>
            <p className="relative mx-auto mt-4 max-w-md text-text-secondary">
              Download {SITE.name} for {PLATFORMS.join(" and ")}. Lightweight,
              local-first, and always one shortcut away.
            </p>
            <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button variant="primary" href="#download">
                Download {SITE.name}
              </Button>
              <Button variant="ghost" href="#pricing">
                View pricing
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
