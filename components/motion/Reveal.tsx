"use client";

import { type ReactNode } from "react";
import { motion, type Variants } from "motion/react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article" | "li";
};

const variants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  as = "div",
}: RevealProps) {
  const Component = motion[as];

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={variants}
      transition={{
        duration: 0.55,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </Component>
  );
}
