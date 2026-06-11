"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import linesLogo from "../../public/lines.png";
import { NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(1200);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const update = () => setWindowWidth(window.innerWidth);
    update();
    window.addEventListener("resize", update, { passive: true });
    return () => window.removeEventListener("resize", update);
  }, []);

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

  useEffect(() => {
    if (!menuOpen) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMenuOpen(false);
        triggerRef.current?.focus();
        return;
      }

      if (e.key === "Tab" && menuRef.current) {
        const focusable = menuRef.current.querySelectorAll<HTMLElement>(
          'a, button, [tabindex]:not([tabindex="-1"])',
        );
        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  const isMobile = windowWidth < 768;

  const expandedWidth = Math.min(1200, windowWidth - 32);
  const collapsedWidth = isMobile
    ? windowWidth - 32
    : Math.min(896, windowWidth - 32);

  return (
    <header className="fixed inset-x-0 top-4 z-40 flex flex-col items-center px-4 md:top-8">
      <motion.nav
        animate={{
          width: scrolled ? collapsedWidth : expandedWidth,
          borderRadius: scrolled ? "16px" : isMobile ? "12px" : "0px",
          paddingLeft: scrolled || isMobile ? "20px" : "0px",
          paddingRight: scrolled || isMobile ? "20px" : "0px",
          backgroundColor:
            scrolled || (isMobile && menuOpen)
              ? "rgba(4,5,6,0.95)"
              : "rgba(4,5,6,0)",
          backdropFilter:
            scrolled ? "blur(20px) saturate(180%)" : "blur(0px) saturate(100%)",
        }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        className="flex h-14 items-center justify-between md:h-16"
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
          ref={triggerRef}
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-border-subtle text-text-secondary md:hidden"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className="sr-only">Menu</span>
          <svg width="16" height="12" viewBox="0 0 18 14" fill="none" aria-hidden>
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
        {menuOpen && (
          <motion.div
            ref={menuRef}
            role="dialog"
            aria-label="Navigation menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{ width: collapsedWidth }}
            className="overflow-hidden rounded-b-2xl border-t border-border-subtle/30 bg-void/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-3 py-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-3 text-sm text-text-secondary hover:bg-surface hover:text-text-primary"
                  onClick={(e) => {
                    e.preventDefault();
                    setMenuOpen(false);
                    document.body.style.overflow = "";
                    const id = link.href.replace("#", "");
                    setTimeout(() => {
                      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                    }, 300);
                  }}
                >
                  {link.label}
                </a>
              ))}
              <Button variant="primary" href="#download" className="mt-2 w-full">
                Download
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
