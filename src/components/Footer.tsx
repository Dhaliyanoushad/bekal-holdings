import { Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-blue-900 text-white py-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">
            Bekal International Holding
          </h3>
          <p className="text-blue-100 mb-4">
            A leading diversified business group with operations across Kingdom
            of Saudi Arabia, United Arab Emirates, and India since 1981.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/shahal-bekal-holding"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-200"
            >
              <Linkedin />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-200"
            >
              <Instagram />
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="text-blue-100 hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-blue-100 hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#companies" className="text-blue-100 hover:text-white">
                Our Companies
              </a>
            </li>
            <li>
              <a href="#values" className="text-blue-100 hover:text-white">
                Core Values
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Companies</h3>
          <ul className="space-y-2">
            <li>
              <a href="#companies" className="text-blue-100 hover:text-white">
                Bekal Restaurant
              </a>
            </li>
            <li>
              <a href="#companies" className="text-blue-100 hover:text-white">
                Bekal Events & Catering
              </a>
            </li>
            <li>
              <a href="#companies" className="text-blue-100 hover:text-white">
                Bekal Baker's
              </a>
            </li>
            <li>
              <a href="#companies" className="text-blue-100 hover:text-white">
                Bekal Constructions
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-3">
            <li className="flex items-center">
              <Phone size={16} className="mr-2" />
              <span>0501105765</span>
            </li>
            <li className="flex items-center">
              <Mail size={16} className="mr-2" />
              <span>info@bekalholding.com</span>
            </li>
            <li className="flex items-center">
              <MapPin size={16} className="mr-2" />
              <span>UAE, Saudi Arabia, India</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-blue-800 mt-8 pt-8 text-center">
        <p>
          &copy; {new Date().getFullYear()} Bekal International Holding. All
          rights reserved.
        </p>
        <p className="text-sm text-blue-200 mt-2">
          <a href="https://www.bekalholding.com" className="hover:text-white">
            www.bekalholding.com
          </a>
        </p>
      </div>
    </div>
  </footer>
);
export default Footer;
