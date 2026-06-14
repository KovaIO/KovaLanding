import Image from "next/image";
import appIcon from "../../public/icon.png";
import { SITE } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import { DownloadButtons } from "./DownloadButtons";

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

          <FadeIn
            delay={0.26}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          >
            <DownloadButtons />
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
