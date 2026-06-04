"use client";

import { motion } from "motion/react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

const privacyToggles = [
  { label: "Local SQLite storage", on: true },
  { label: "Cloud sync (optional)", on: false },
  { label: "License-only identity", on: true },
  { label: "No ad profiles", on: true },
] as const;

function PrivacyDiagram() {
  return (
    <div className="relative mx-auto flex aspect-square max-w-md items-center justify-center">
      <div className="absolute inset-8 rounded-full border border-dashed border-border-subtle/60" />
      <div className="absolute inset-16 rounded-full border border-border-subtle/40" />
      <motion.div
        className="relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl border border-border-subtle bg-surface-elevated shadow-lg"
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-accent"
          aria-hidden
        >
          <rect x="5" y="11" width="14" height="10" rx="2" />
          <path d="M8 11V8a4 4 0 118 0v3" />
        </svg>
      </motion.div>
      {["Clipboard", "Prefs", "Workflows", "Devices"].map((label, i) => {
        const angle = (i * 90 - 90) * (Math.PI / 180);
        const x = 50 + 42 * Math.cos(angle);
        const y = 50 + 42 * Math.sin(angle);
        return (
          <div
            key={label}
            className="absolute flex flex-col items-center gap-1"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-border-subtle bg-surface text-[10px] font-medium text-text-secondary">
              {label.slice(0, 2)}
            </span>
            <span className="font-mono text-[9px] uppercase tracking-wider text-text-muted">
              {label}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export function LocalFirst() {
  return (
    <section
      id="privacy"
      className="relative overflow-hidden border-t border-border-subtle/40 py-[var(--section-gap)]"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(255,255,255,0.04), transparent 70%)",
        }}
        aria-hidden
      />
      <Container className="relative">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-20">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Privacy & architecture"
              title="Local-first, with you in control"
              description="Your data stays on your machine in SQLite — fast, offline-ready, and private. Optional cloud sync and Pro licensing add convenience without forcing accounts or passwords."
            />

            <ul className="mt-10 space-y-3">
              {privacyToggles.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center justify-between rounded-xl border border-border-subtle/50 bg-surface/40 px-4 py-3"
                >
                  <span className="text-sm text-text-secondary">
                    {item.label}
                  </span>
                  <span
                    className={`rounded-full px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider ${
                      item.on
                        ? "bg-accent/15 text-accent"
                        : "bg-border/30 text-text-muted"
                    }`}
                  >
                    {item.on ? "On" : "Off"}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <PrivacyDiagram />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
