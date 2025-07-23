import { Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-[#181b22] text-[#e9e6e2] py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-8">
      <div className="flex flex-col md:flex-row md:justify-between gap-12 md:gap-0">
        {/* Brand and Social */}
        <div className="flex-1 min-w-[200px] md:pr-16">
          <h3 className="text-2xl font-bold mb-5 tracking-wide text-[#fff]">
            Bekal International Holding
          </h3>
          <p className="mb-6 text-[#b5b6bc] font-medium leading-relaxed">
            A leading diversified business group with operations across Kingdom
            of Saudi Arabia, United Arab Emirates, and India since 1981.
          </p>
          <div className="flex gap-5 mt-3">
            <a
              href="https://www.linkedin.com/in/shahal-bekal-holding"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#cbb778]/20 border border-[#1d223a] shadow transition"
            >
              <Linkedin className="text-[#cbb778] w-6 h-6" />
            </a>
            {/* <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#cbb778]/20 border border-[#1d223a] shadow transition"
            >
              <Instagram className="text-[#cbb778] w-6 h-6" />
            </a> */}
          </div>
        </div>
        {/* Quick Links */}
        <div className="flex-1 min-w-[140px]">
          <div className="mb-4 text-base font-semibold tracking-wider text-[#fff]">
            Quick Links
          </div>
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#home"
                className="text-[#e3dccf] hover:text-[#cbb778] transition"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-[#e3dccf] hover:text-[#cbb778] transition"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#companies"
                className="text-[#e3dccf] hover:text-[#cbb778] transition"
              >
                Our Companies
              </a>
            </li>
            <li>
              <a
                href="#values"
                className="text-[#e3dccf] hover:text-[#cbb778] transition"
              >
                Core Values
              </a>
            </li>
          </ul>
        </div>
        {/* Companies */}
        <div className="flex-1 min-w-[160px]">
          <div className="mb-4 text-base font-semibold tracking-wider text-[#fff]">
            Our Companies
          </div>
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#companies"
                className="text-[#e3dccf] hover:text-[#cbb778] transition"
              >
                Bekal Restaurant
              </a>
            </li>
            <li>
              <a
                href="#companies"
                className="text-[#e3dccf] hover:text-[#cbb778] transition"
              >
                Bekal Events & Catering
              </a>
            </li>
            <li>
              <a
                href="#companies"
                className="text-[#e3dccf] hover:text-[#cbb778] transition"
              >
                Bekal Baker's
              </a>
            </li>
            <li>
              <a
                href="#companies"
                className="text-[#e3dccf] hover:text-[#cbb778] transition"
              >
                Bekal Constructions
              </a>
            </li>
          </ul>
        </div>
        {/* Contact */}
        <div className="flex-1 min-w-[180px]">
          <div className="mb-4 text-base font-semibold tracking-wider text-[#fff]">
            Contact
          </div>
          <ul className="space-y-4 text-[#e9e6e2] text-base">
            <li className="flex items-center gap-2">
              <Phone size={17} className="text-[#cbb778]" />
              <span className="tracking-wide">0501105765</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={17} className="text-[#cbb778]" />
              <span className="tracking-wide">info@bekalholding.com</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={17} className="text-[#cbb778]" />
              <span className="tracking-wide">UAE, Saudi Arabia, India</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[#222533] mt-14 pt-8 text-center">
        <p className="text-[#e9e6e2]">
          &copy; {new Date().getFullYear()} Bekal International Holding. All
          rights reserved.
        </p>
        <p className="text-sm text-[#b5b6bc] mt-1">
          <a
            href="https://www.bekalholding.com"
            className="hover:text-[#cbb778] transition"
            target="_blank"
          >
            www.bekalholding.com
          </a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
