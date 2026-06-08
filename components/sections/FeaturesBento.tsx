"use client";

import { BENTO_FEATURES } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import {
  FeatureVisual,
  type VisualType,
} from "@/components/visuals/FeatureVisual";

function BentoCard({
  badge,
  title,
  description,
  visual,
  layout,
  index,
}: {
  badge: string;
  title: string;
  description: string;
  visual: VisualType;
  layout: "wide" | "narrow";
  index: number;
}) {
  const isWide = layout === "wide";

  return (
    <Reveal
      as="article"
      delay={index * 0.06}
      className={`card-surface flex flex-col overflow-hidden rounded-2xl md:rounded-3xl ${
        isWide ? "bento-wide md:min-h-[420px]" : "md:min-h-[420px]"
      }`}
    >
      <div className="flex flex-1 flex-col p-6 md:p-8">
        <Badge>{badge}</Badge>
        <h3 className="mt-4 max-w-md font-serif text-2xl leading-snug text-text-primary md:text-[1.65rem]">
          {title}
        </h3>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-text-secondary md:text-[15px]">
          {description}
        </p>
        <div className="mt-6 flex flex-1 items-end">
          <div className="w-full [&>div]:min-h-[180px] md:[&>div]:min-h-[200px]">
            <FeatureVisual type={visual} />
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export function FeaturesBento() {
  return (
    <section id="features" className="py-(--section-gap)">
      <Container>
        <Reveal className="mb-14 md:mb-20">
          <SectionHeading
            eyebrow="Features"
            title="Built for how you actually work"
            description="Monitor, clip, launch, and clean — from one tray menu. Everything stays fast, local, and under your control."
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {BENTO_FEATURES.map((feature, index) => (
            <BentoCard
              key={feature.id}
              badge={feature.badge}
              title={feature.title}
              description={feature.description}
              visual={feature.visual}
              layout={feature.layout}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
