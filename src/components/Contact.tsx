import { Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Contact = () => (
  <section id="contact" className="py-20 bg-charcoal-blue">
    <div className="max-w-6xl mx-auto px-4 sm:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold tracking-tight text-off-white mb-5">
          Contact Us
        </h2>
        <div className="w-16 h-1 mx-auto rounded-full mb-8 bg-gradient-to-r from-primary-orange to-primary-orange/80" />
        <p className="text-lg text-cream-beige max-w-xl mx-auto leading-relaxed">
          We value new connections and conversations. Please reach out via your
          preferred channel or use the form for a discreet response from our
          team.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-16">
        {/* Minimal Luxury Contact Info */}
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <Phone className="text-off-white w-6 h-6" />
              <a
                href="tel:0501105765"
                className="text-off-white hover:text-cream-beige text-base transition font-medium"
              >
                0501105765
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="text-off-white w-6 h-6" />
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@bekalholding.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-off-white hover:text-cream-beige text-base transition font-medium"
              >
                info@bekalholding.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-off-white w-6 h-6" />
              <span className="text-off-white leading-tight text-base">
                UAE, Saudi Arabia, India
              </span>
            </div>
          </div>
          <div className="flex gap-5 mt-6">
            <a
              href="https://www.linkedin.com/in/shahal-bekal-holding"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-off-white border border-deep-navy shadow-sm hover:bg-cream-beige transition"
            >
              <Linkedin className="text-primary-orange w-6 h-6" />
            </a>
            {/* <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white/80 border border-[#e4dcc9] shadow-sm hover:bg-[#f6ecd1] transition"
            >
              <Instagram className="text-[#bfa450] w-6 h-6" />
            </a> */}
          </div>
        </div>
        {/* Luxury Minimal Contact Form */}
        <div>
          <form className="flex flex-col gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-5 py-4 bg-off-white rounded-lg border border-cream-beige focus:outline-none focus:ring-3 focus:ring-cream-beige text-base placeholder-dark-gray/50 transition text-black"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-5 py-4 bg-off-white rounded-lg border border-cream-beige focus:outline-none focus:ring-3 focus:ring-cream-beige text-base placeholder-dark-gray/50 text-black transition"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-5 py-4 bg-off-white rounded-lg border border-cream-beige focus:outline-none focus:ring-3 focus:ring-cream-beige text-base placeholder-dark-gray/50 text-black transition"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full px-5 py-4 bg-off-white rounded-lg border border-cream-beige focus:outline-none focus:ring-3 focus:ring-cream-beige text-base placeholder-dark-gray/50 text-black transition resize-none"
            ></textarea>
            <button
              type="submit"
              className="bg-primary-orange/80 text-white px-6 py-3 rounded-lg font-semibold tracking-wider text-lg shadow hover:bg-primary-orange/70 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div className="w-24 h-1 bg-gradient-to-r from-primary-orange/80 to-primary-orange mx-auto mt-20 rounded-full" />
    </div>
  </section>
);

export default Contact;
