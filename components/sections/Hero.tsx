import Image from "next/image";
import appIcon from "../../public/icon.png";
import { SITE, PLATFORMS } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { FeatureVisual } from "@/components/visuals/FeatureVisual";

export function Hero() {
  return (
    <section
      id="download"
      className="hero-glow relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28"
    >
      <Container className="relative z-10">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <FadeIn>
            <Image
              src={appIcon}
              alt="Kova app icon"
              width={88}
              height={88}
              className="mb-8 rounded-[22px] shadow-[0_24px_48px_-8px_rgba(0,0,0,0.6)]"
              priority
            />
          </FadeIn>

          <FadeIn delay={0.08}>
            <Badge>Desktop utility · Tray native</Badge>
          </FadeIn>

          <FadeIn delay={0.14}>
            <h1 className="mt-6 font-serif text-[2.75rem] leading-[1.08] tracking-tight text-text-primary sm:text-6xl md:text-[4.25rem]">
              {SITE.tagline}
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-text-secondary md:text-lg">
              {SITE.description}
            </p>
          </FadeIn>

          <FadeIn delay={0.26} className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Button variant="primary" href="#download">
              Download for {PLATFORMS.join(" & ")}
            </Button>
            <Button variant="ghost" href="#features">
              Explore features
            </Button>
          </FadeIn>

          <FadeIn delay={0.32}>
            <p className="mt-6 font-mono text-xs text-text-muted">
              No account · No password · Local-first by default
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.4} className="mx-auto mt-16 max-w-4xl">
          <div className="card-surface overflow-hidden rounded-2xl p-1 md:rounded-3xl md:p-1.5">
            <div className="rounded-xl bg-canvas p-3 md:rounded-2xl md:p-4">
              <div className="mb-3 flex items-center gap-2 border-b border-border-subtle/40 pb-3">
                <span className="h-2.5 w-2.5 rounded-full bg-border-subtle" />
                <span className="h-2.5 w-2.5 rounded-full bg-border-subtle" />
                <span className="h-2.5 w-2.5 rounded-full bg-border-subtle" />
                <span className="ml-2 font-mono text-[10px] text-text-muted">
                  Kova — System overview
                </span>
              </div>
              <FeatureVisual type="monitor" />
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
