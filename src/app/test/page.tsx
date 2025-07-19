import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Companies from "@/components/Companies";
import Values from "@/components/Values";
import Board from "@/components/Board";
import Contact from "@/components/Contact";
import Careers from "@/components/Careers";
import Footer from "@/components/Footer";
import HeroCarousel from "@/components/Test";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroCarousel />
      <Hero />
      <About />
      <Companies />
      <Values />
      <Board />
      <Contact />
      <Careers />
      <Footer />
    </>
  );
}
