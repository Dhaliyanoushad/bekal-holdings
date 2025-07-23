import React from "react";

const Careers = () => (
  <section id="careers" className="py-12 bg-cream-beige scroll-mt-20">
    <div className="max-w-4xl mx-auto px-4 sm:px-8 ">
      <div className="text-center mb-16">
        <h2 className="text-heading font-bold tracking-tight text-deep-navy mb-5">
          Careers
        </h2>
        <div className="w-16 h-1 mx-auto rounded-full mb-8 bg-gradient-to-r from-primary-orange to-primary-orange/80" />
        <p className="text-body text-dark-gray max-w-xl mx-auto leading-relaxed">
          Join our growing team and be part of a dynamic, innovative
          organization that values talent and promotes growth.
        </p>
      </div>
      <div className="bg-charcoal-blue p-10 rounded-2xl shadow-lg border border-off-white">
        <h3 className="text-subheading font-semibold text-off-white mb-8 tracking-wide">
          Apply Now
        </h3>
        <form className="flex flex-col gap-7 text-description">
          <div className="grid md:grid-cols-2 gap-8 ">
            <div>
              <label className="block text-cream-beige font-medium mb-2 text-description">
                Name
              </label>
              <input
                type="text"
                className="w-full px-5 py-4 border border-cream-beige bg-off-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cream-beige transition text-description text-dark-gray"
              />
            </div>
            <div>
              <label className="block text-cream-beige font-medium mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                className="w-full px-5 py-4 border border-cream-beige bg-off-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cream-beige transition text-description text-dark-gray"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label className="block text-cream-beige font-medium mb-2">
                LinkedIn URL
              </label>
              <input
                type="url"
                className="w-full px-5 py-4 border border-cream-beige bg-off-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cream-beige transition text-description text-dark-gray"
              />
            </div>
            <div>
              <label className="block text-cream-beige font-medium mb-2">
                Website Link (if any)
              </label>
              <input
                type="url"
                className="w-full px-5 py-4 border border-cream-beige bg-off-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cream-beige transition text-description text-dark-gray"
              />
            </div>
          </div>
          <div>
            <label className="block text-cream-beige font-medium mb-2">
              Visa Status
            </label>
            <select className="w-full px-5 py-4 border border-cream-beige bg-off-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cream-beige transition text-description appearance-none text-dark-gray">
              <option>Valid visa</option>
              <option>Transfer soon</option>
              <option>Outside country</option>
            </select>
          </div>
          <div>
            <label className="block text-cream-beige font-medium mb-2">
              Upload CV (PDF)
            </label>
            <div className="w-full px-5 py-8 border-2 border-dashed border-cream-beige bg-off-white rounded-xl text-dark-gray/50 text-center cursor-pointer hover:border-cream-beige transition">
              Drag and drop your CV here, or click to browse
            </div>
          </div>
          <button
            type="submit"
            className="mt-2 bg-primary-orange/80 text-white px-7 py-3 rounded-lg font-semibold tracking-wide text-body shadow hover:bg-primary-orange/70 transition"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  </section>
);

export default Careers;
