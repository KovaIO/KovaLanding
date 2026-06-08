import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { FeaturesBento } from "@/components/sections/FeaturesBento";
import { FeatureShowcase } from "@/components/sections/FeatureShowcase";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <FeaturesBento />
        <FeatureShowcase />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
