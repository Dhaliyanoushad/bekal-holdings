import { ArrowRight } from "lucide-react";

const Hero = () => (
  <section
    id="home"
    className="pt-20 pb-20 bg-gradient-to-r from-[#f1e9db] to-[#faf6ee] text-[#14213D]"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Bekal International Holding Company
        </h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          A leading diversified business group with operations across Kingdom of
          Saudi Arabia, United Arab Emirates, and India since 1981.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#companies"
            className="bg-white text-blue-900 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition duration-300 flex items-center"
          >
            Our Companies <ArrowRight size={16} className="ml-2" />
          </a>
          <a
            href="#contact"
            className="border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-blue-900 transition duration-300"
          >
            Contact Us
          </a>
        </div>
        <div className="mt-8 flex justify-center space-x-4">
          <div className="bg-blue-100 rounded-full px-6 py-3">
            <span className="font-bold text-3xl">400+</span>
            <p className="text-sm">Clients</p>
          </div>
          <div className="bg-blue-100 rounded-full px-6 py-3">
            <span className="font-bold text-3xl">80+</span>
            <p className="text-sm">Team Members</p>
          </div>
          <div className="bg-blue-100 rounded-full px-6 py-3">
            <span className="font-bold text-3xl">3</span>
            <p className="text-sm">Countries</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
