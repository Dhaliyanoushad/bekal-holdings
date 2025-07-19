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
import Commitment from "@/components/Commitment";
import AboutUs from "@/components/AboutUs";
// import NewsletterSignup from "@/components/NewsletterSignup";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroCarousel />
      {/* <NewsletterSignup /> */}
      {/* <Hero /> */}
      <AboutUs />
      <Commitment />
      {/* <About /> */}
      <Companies />
      <Values />
      <Board />
      <Contact />
      <Careers />
      <Footer />
    </>
  );
}
