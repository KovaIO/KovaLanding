"use client";

import { BENTO_FEATURES } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { FeatureVisual } from "@/components/visuals/FeatureVisual";
import { ComingSoon } from "@/components/visuals/ComingSoon";

type VideoInfo = {
  src: string;
  orientation: "vertical" | "horizontal";
};

function BentoCard({
  badge,
  title,
  description,
  layout,
  index,
  video,
}: {
  badge: string;
  title: string;
  description: string;
  layout: "wide" | "narrow";
  index: number;
  video: VideoInfo | null;
}) {
  const isWide = layout === "wide";
  const isVertical = video?.orientation === "vertical";

  return (
    <Reveal
      as="article"
      delay={index * 0.06}
      className={`card-surface flex flex-col overflow-hidden rounded-2xl md:rounded-3xl ${
        isWide ? "bento-wide" : ""
      }`}
    >
      <div className="flex flex-col p-6 md:p-8">
        <Badge>{badge}</Badge>
        <h3 className="mt-4 font-serif text-2xl leading-snug text-text-primary md:text-[1.65rem]">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-text-secondary md:text-[15px]">
          {description}
        </p>
      </div>

      {video ? (
        <div className="flex flex-1 items-center justify-center px-6 pb-6 md:px-8 md:pb-8">
          <div
            className="w-full overflow-hidden rounded-xl border border-border-subtle/40"
            style={{
              maxWidth: isVertical ? "240px" : "100%",
              aspectRatio: isVertical ? "404 / 694" : "1152 / 648",
            }}
          >
            <FeatureVisual video={video} />
          </div>
        </div>
      ) : (
        <ComingSoon />
      )}
    </Reveal>
  );
}

export function Features() {
  return (
    <section id="features" className="py-(--section-gap)">
      <Container>
        <Reveal className="mb-14 md:mb-20">
          <SectionHeading
            title="Five tools. One app."
            description="Everything your desktop is missing, without the bloat."
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {BENTO_FEATURES.map((feature, index) => (
            <BentoCard
              key={feature.id}
              badge={feature.badge}
              title={feature.title}
              description={feature.description}
              layout={feature.layout}
              video={feature.video}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}