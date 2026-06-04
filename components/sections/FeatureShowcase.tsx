import { SHOWCASE_FEATURES } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import {
  FeatureVisual,
  type VisualType,
} from "@/components/visuals/FeatureVisual";

function ShowcaseBlock({
  eyebrow,
  title,
  description,
  visual,
  reversed,
}: {
  eyebrow: string;
  title: string;
  description: string;
  visual: VisualType;
  reversed: boolean;
}) {
  return (
    <div
      className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${
        reversed ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted">
          {eyebrow}
        </p>
        <h3 className="mt-4 font-serif text-3xl leading-tight text-text-primary md:text-4xl">
          {title}
        </h3>
        <p className="mt-5 text-base leading-relaxed text-text-secondary">
          {description}
        </p>
      </div>
      <div className="card-surface rounded-2xl p-4 md:rounded-3xl md:p-5">
        <FeatureVisual type={visual} />
      </div>
    </div>
  );
}

export function FeatureShowcase() {
  return (
    <section className="border-t border-border-subtle/40 py-[var(--section-gap)]">
      <Container className="space-y-24 md:space-y-32">
        {SHOWCASE_FEATURES.map((feature, i) => (
          <Reveal key={feature.id} delay={i * 0.05}>
            <ShowcaseBlock
              eyebrow={feature.eyebrow}
              title={feature.title}
              description={feature.description}
              visual={feature.visual}
              reversed={feature.reversed}
            />
          </Reveal>
        ))}
      </Container>
    </section>
  );
}
