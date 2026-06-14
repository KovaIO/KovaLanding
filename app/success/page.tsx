import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { SITE } from "@/lib/constants";

export const metadata = {
  title: `Purchase Successful — ${SITE.name}`,
  description: "Your license has been activated. You can activate it now in the app using your email.",
};

export default function SuccessPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="hero-glow relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
          <Container className="relative z-10">
            <div className="mx-auto flex max-w-lg flex-col items-center text-center">
              <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-surface-elevated border border-border-subtle">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-accent"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>

              <h1 className="font-serif text-[2.75rem] leading-[1.08] tracking-tight text-text-primary sm:text-6xl">
                Purchase Successful
              </h1>

              <p className="mt-6 max-w-md text-base leading-relaxed text-text-secondary md:text-lg">
                Your license has been activated. You can activate it now in the app using your email.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/"
                  className="
                    inline-flex items-center justify-center gap-2
                    rounded-xl bg-accent px-6 py-3
                    text-sm font-medium text-void
                    transition-opacity hover:opacity-90
                  "
                >
                  Back to {SITE.name}
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
