import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Offer } from "@/components/offer";
import { Studio } from "@/components/studio";
import { Pricing } from "@/components/pricing";
import { About } from "@/components/about";
import { Fit } from "@/components/fit";
import { FAQ } from "@/components/faq";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Offer />
      <Studio />
      <Pricing />
      <About />
      <Fit />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  );
}
