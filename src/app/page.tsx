import Image from "next/image";
import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Method } from "@/components/method";
import { Cases } from "@/components/cases";
import { About } from "@/components/about";
import { FAQ } from "@/components/faq";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Method />
      <Cases />
      <About />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  );
}
