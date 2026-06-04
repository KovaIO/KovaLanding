"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import linesLogo from "../../public/lines.png";
import { NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-8 z-40 flex justify-center px-4">
      <motion.nav
      animate={{
        width: scrolled ? "896px" : "1200px",
        borderRadius: scrolled ? "16px" : "0px",
        paddingLeft: scrolled ? "24px" : "0px",
        paddingRight: scrolled ? "24px" : "0px",
        backgroundColor: scrolled ? "rgba(4,5,6,0.95)" : "rgba(4,5,6,0)",
        backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "blur(0px) saturate(100%)",
      }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className="flex h-16 items-center justify-between overflow-hidden md:h-18"
    >
        <a
          href="#"
          className="flex items-center gap-2.5 text-text-primary transition-opacity hover:opacity-90"
          aria-label="Kova home"
        >
          <Image
            src={linesLogo}
            alt=""
            width={28}
            height={28}
            className="h-7 w-7"
            priority
          />
          <span className="text-sm font-semibold tracking-tight">Kova</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-lg px-3.5 py-2 text-sm text-text-secondary transition-colors hover:bg-surface/60 hover:text-text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="primary" href="#download">
            Download
          </Button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border-subtle text-text-secondary md:hidden"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className="sr-only">Menu</span>
          <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden>
            <path
              d="M1 1h16M1 7h16M1 13h16"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </motion.nav>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-border-subtle/60 bg-void md:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-3 text-sm text-text-secondary hover:bg-surface hover:text-text-primary"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button variant="primary" href="#download" className="mt-2 w-full">
                Download
              </Button>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
