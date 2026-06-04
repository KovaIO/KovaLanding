import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { FeaturesBento } from "@/components/sections/FeaturesBento";
import { FeatureShowcase } from "@/components/sections/FeatureShowcase";
import { LocalFirst } from "@/components/sections/LocalFirst";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <FeaturesBento />
        <FeatureShowcase />
        <LocalFirst />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
