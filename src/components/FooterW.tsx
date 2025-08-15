import { Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-off-white pt-32 pb-20 border-off-white/60 border-t-[1px] text-black">
    <div className="max-w-7xl mx-auto px-4 sm:px-8">
      <div className="flex flex-col md:flex-row md:justify-between gap-12 md:gap-0">
        {/* Brand and Social */}
        <div className="flex-1 min-w-[200px] md:pr-16">
          <h3 className="text-subheading font-bold mb-5 tracking-wide ">
            Bekal International Holding
          </h3>
          <p className="mb-6 text-off-black/60 font-medium leading-relaxed text-description">
            A leading diversified business group with operations across Kingdom
            of Saudi Arabia, United Arab Emirates, and India since 1981.
          </p>
          <div className="flex gap-5 mt-3">
            <a
              href="https://www.linkedin.com/in/shahal-bekal-holding"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-full bg-dark-gray hover:bg-dark-gray/80 border border-black shadow transition"
            >
              <Linkedin className="text-brushed-gold w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/shahal-bekal-holding"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-full bg-dark-gray hover:bg-dark-gray/80 border border-black shadow transition"
            >
              <Instagram className="text-brushed-gold w-6 h-6" />
            </a>
          </div>
        </div>
        {/* Quick Links */}
        <div className="flex-1 min-w-[140px]">
          <div className="mb-4 text-description font-semibold tracking-wider text-black">
            Quick Links
          </div>
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#home"
                className="hover:text-black text-black/60  transition"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-black text-black/60  transition"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#companies"
                className="hover:text-black text-black/60  transition"
              >
                Our Companies
              </a>
            </li>
            <li>
              <a
                href="#values"
                className="hover:text-black text-black/60  transition"
              >
                Core Values
              </a>
            </li>
          </ul>
        </div>
        {/* Companies */}
        <div className="flex-1 min-w-[160px]">
          <div className="mb-4 text-description font-semibold tracking-wider text-black">
            Our Companies
          </div>
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#companies"
                className="hover:text-black text-black/60  transition"
              >
                Bekal Restaurant
              </a>
            </li>
            <li>
              <a
                href="#companies"
                className="hover:text-black text-black/60  transition"
              >
                Bekal Events & Catering
              </a>
            </li>
            <li>
              <a
                href="#companies"
                className="hover:text-black text-black/60  transition"
              >
                Bekal Baker's
              </a>
            </li>
            <li>
              <a
                href="#companies"
                className="hover:text-black text-black/60  transition"
              >
                Bekal Constructions
              </a>
            </li>
          </ul>
        </div>
        {/* Contact */}
        <div className="flex-1 min-w-[180px]">
          <div className="mb-4 text-description font-semibold tracking-wider text-black">
            Contact
          </div>
          <ul className="space-y-4 text-black/80 text-description">
            <li className="flex items-center gap-2 hover:text-black text-black/60 transition">
              <Phone size={17} className="text-brushed-gold" />
              <a href="tel:0501105765" className="tracking-wide">
                0501105765
              </a>
            </li>
            <li className="flex items-center gap-2 hover:text-black text-black/60 transition">
              <Mail size={17} className="text-brushed-gold" />
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@bekalholding.com"
                target="_blank"
                rel="noopener noreferrer"
                className="tracking-wide"
              >
                info@bekalholding.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={17} className="text-brushed-gold" />
              <span className="tracking-wide">UAE, Saudi Arabia, India</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-black mt-14 pt-8 text-center">
        <p className="text-black/80 text-body">
          &copy; {new Date().getFullYear()} Bekal International Holding. All
          rights reserved.
        </p>
        <p className="text-description text-black/80 mt-1">
          <a
            href="https://www.bekalholding.com"
            className="hover:text-black text-black/60 transition"
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
