import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Companies from "@/components/Companies";
import Values from "@/components/Values";
import Board from "@/components/Board";
import Contact from "@/components/Contact";
import Careers from "@/components/Careers";
import Footer from "@/components/Footer";
import HeroCarousel from "@/components/HeroCarousel";
import Commitment from "@/components/Commitment";
import AboutUs from "@/components/AboutUs";
import Test from "@/components/Test";
// import NewsletterSignup from "@/components/NewsletterSignup";

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
      {/* <Test /> */}
      <Contact />
      <Careers />
      <Footer />
      {/* <NewsletterSignup /> */}
      {/* <About /> */}
    </>
  );
}
