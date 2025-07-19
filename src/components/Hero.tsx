import { ArrowRight } from "lucide-react";

const Hero = () => (
  <section
    id="home"
    className="pt-24 pb-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white text-center"
  >
    <div className="max-w-5xl mx-auto px-4">
      <h1 className="text-4xl font-bold mb-4">
        Bekal International Holding Company
      </h1>
      <p className="text-lg mb-8">
        A leading diversified business group operating in KSA, UAE, and India
        since 1981.
      </p>
      <div className="flex justify-center gap-4">
        <a
          href="#companies"
          className="bg-white text-blue-900 px-6 py-3 rounded-md flex items-center"
        >
          Our Companies <ArrowRight size={16} className="ml-2" />
        </a>
        <a href="#contact" className="border border-white px-6 py-3 rounded-md">
          Contact Us
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
