"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FAQ_ITEMS } from "@/lib/constants";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

function FAQItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [open, setOpen] = useState(index === 0);
  const panelId = `faq-panel-${index}`;
  const buttonId = `faq-button-${index}`;

  return (
    <Reveal as="li" delay={index * 0.04}>
      <div className="border-b border-border-subtle/60">
        <button
          type="button"
          id={buttonId}
          aria-expanded={open}
          aria-controls={panelId}
          className="flex w-full items-start justify-between gap-4 py-5 text-left"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="font-medium text-text-primary">{question}</span>
          <span
            className={`mt-1 shrink-0 font-mono text-lg text-text-muted transition-transform duration-200 ${open ? "rotate-45" : ""}`}
            aria-hidden
          >
            +
          </span>
        </button>
        <AnimatePresence initial={false}>
          {open ? (
            <motion.div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <p className="pb-5 text-sm leading-relaxed text-text-secondary">
                {answer}
              </p>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </Reveal>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="py-(--section-gap)">
      <Container>
        <Reveal className="mb-12 md:mb-16">
          <SectionHeading title="FAQ" />
        </Reveal>

        <ul className="mx-auto max-w-2xl">
          {FAQ_ITEMS.map((item, index) => (
            <FAQItem
              key={item.question}
              question={item.question}
              answer={item.answer}
              index={index}
            />
          ))}
        </ul>
      </Container>
    </section>
  );
}
