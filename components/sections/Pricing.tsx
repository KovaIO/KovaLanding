"use client";

import { useState } from "react";
import { PRICING_PLANS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { CheckoutModal } from "../ui/CheckoutModal";

export function Pricing() {
  const [selectedOption, setSelectedOption] = useState("Monthly");

  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");

  return (
    <section id="pricing" className="py-(--section-gap)">
      <Container>
        <Reveal className="mb-14 md:mb-16">
          <SectionHeading title="Pricing" />
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
                  {"pricingOptions" in plan ? (
                    <div className="mt-4">
                      {/* Tab selector */}
                      <div className="flex rounded-xl border border-border-subtle/40 bg-surface/40 p-1">
                        {plan.pricingOptions.map((option) => (
                          <button
                            key={option.period}
                            onClick={() => setSelectedOption(option.period)}
                            className={`flex-1 rounded-lg py-1.5 text-xs font-medium transition-all duration-200 ${
                              selectedOption === option.period
                                ? "bg-accent text-void shadow-sm"
                                : "text-text-muted hover:text-text-secondary"
                            }`}
                          >
                            {option.period}
                          </button>
                        ))}
                      </div>

                      {/* Selected price display */}
                      {plan.pricingOptions
                        .filter((o) => o.period === selectedOption)
                        .map((option) => (
                          <div
                            key={option.period}
                            className="mt-5 flex items-baseline justify-between"
                          >
                            <div>
                              <span className="font-serif text-4xl text-text-primary">
                                {option.price}
                              </span>
                              <span className="ml-2 font-mono text-xs text-text-muted">
                                {option.period === "Monthly"
                                  ? "/ month"
                                  : option.period === "Yearly"
                                    ? "/ year"
                                    : "one-time"}
                              </span>
                            </div>
                            <span className="rounded-full border border-border-subtle/40 px-2.5 py-1 font-mono text-[10px] text-text-muted">
                              {option.devices} device
                              {option.devices !== 1 ? "s" : ""}
                            </span>
                          </div>
                        ))}
                    </div>
                  ) : (
                    <>
                      <p className="mt-2 font-serif text-4xl text-text-primary">
                        {plan.price}
                      </p>
                      <p className="mt-1 font-mono text-xs text-text-muted">
                        {plan.period}
                      </p>
                    </>
                  )}
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

                {"pricingOptions" in plan ? (
                  <Button
                    variant="primary"
                    className="w-full text-center"
                    onClick={() => {
                      const option = plan.pricingOptions.find(
                        (o) => o.period === selectedOption,
                      );

                      if (!option) return;

                      setSelectedProduct(option.productId);
                      setCheckoutOpen(true);
                    }}
                  >
                    Get {selectedOption}
                  </Button>
                ) : (
                  <Button
                    variant={plan.highlighted ? "primary" : "secondary"}
                    className="w-full text-center"
                  >
                    {plan.cta}
                  </Button>
                )}
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <p className="mx-auto mt-10 max-w-lg text-center text-sm text-text-muted">
            Additional 30 days money back guarantee for all licenses.
          </p>
        </Reveal>

        {checkoutOpen && (
          <CheckoutModal
            open={checkoutOpen}
            productId={selectedProduct}
            onClose={() => setCheckoutOpen(false)}
          />
        )}
      </Container>
    </section>
  );
}
