import Navbar from "@/components/Navbar";
import Companies from "@/components/Companies";
import Values from "@/components/Values";
import Board from "@/components/Board";
import Contact from "@/components/Contact";
import Careers from "@/components/Careers";
import Footer from "@/components/Footer";
import HeroCarousel from "@/components/HeroCarousel";
import Commitment from "@/components/Commitment";
import AboutUs from "@/components/AboutUs";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroCarousel />
      <AboutUs />
      <Companies />
      <Commitment />
      <Values />
      <Board />
      <Contact />
      <Careers />
      <Footer />
    </>
  );
}
