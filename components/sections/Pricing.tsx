import { PRICING_PLANS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

export function Pricing() {
  return (
    <section id="pricing" className="py-[var(--section-gap)]">
      <Container>
        <Reveal className="mb-14 md:mb-16">
          <SectionHeading
            eyebrow="Pricing"
            title="Simple licensing, no accounts"
            description="Start free with full local tools. Upgrade to Pro when you need premium features or optional cloud sync — activated with a license key, not a login form."
          />
        </Reveal>

        <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-2 md:gap-8">
          {PRICING_PLANS.map((plan, index) => (
            <Reveal key={plan.id} delay={index * 0.08}>
              <article
                className={`flex flex-col rounded-2xl border p-8 md:rounded-3xl md:p-10 ${
                  plan.highlighted
                    ? "card-surface border-accent/20 ring-1 ring-accent/10"
                    : "border-border-subtle bg-surface/30"
                }`}
              >
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-text-primary">
                    {plan.name}
                  </h3>
                  <p className="mt-2 font-serif text-4xl text-text-primary">
                    {plan.price}
                  </p>
                  <p className="mt-1 font-mono text-xs text-text-muted">
                    {plan.period}
                  </p>
                  <p className="mt-4 text-sm text-text-secondary">
                    {plan.description}
                  </p>
                </div>

                <ul className="mb-8 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-text-secondary"
                    >
                      <span className="mt-0.5 text-accent" aria-hidden>
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.highlighted ? "primary" : "secondary"}
                  href="#download"
                  className="w-full text-center"
                >
                  {plan.cta}
                </Button>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <p className="mx-auto mt-10 max-w-lg text-center text-sm text-text-muted">
            Payments and license activation are not wired on this page yet.
            Pro will be available through Polar.sh when launched.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
