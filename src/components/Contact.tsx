import { Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Contact = () => (
  <section id="contact" className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-blue-900 mb-2">Contact Us</h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
      </div>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-xl font-semibold text-blue-900 mb-6">
            Get in Touch
          </h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <Phone className="text-blue-700 mr-4" />
              <a
                href="tel:0501105765"
                className="text-gray-700 hover:text-blue-900"
              >
                0501105765
              </a>
            </div>

            <div className="flex items-center">
              <Mail className="text-blue-700 mr-4" />
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@bekalholding.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-900"
              >
                info@bekalholding.com
              </a>
            </div>

            <div className="flex items-center">
              <MapPin className="text-blue-700 mr-4" />
              <p className="text-gray-700">UAE, Saudi Arabia, India</p>
            </div>
            <div className="flex space-x-4 mt-8">
              <a
                href="https://www.linkedin.com/in/shahal-bekal-holding"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-100 hover:bg-blue-200 p-3 rounded-full"
              >
                <Linkedin className="text-blue-700" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-100 hover:bg-blue-200 p-3 rounded-full"
              >
                <Instagram className="text-blue-700" />
              </a>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-blue-900 mb-6">
            Send Us a Message
          </h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-700 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-800 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);
export default Contact;
