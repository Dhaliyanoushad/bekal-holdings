import React from "react";

const Careers = () => (
  <section id="careers" className="py-12 bg-[#f0e8db]">
    <div className="max-w-4xl mx-auto px-4 sm:px-8 ">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold tracking-tight text-[#23242d] mb-5">
          Careers
        </h2>
        <div className="w-16 h-1 mx-auto rounded-full mb-8 bg-gradient-to-r from-[#ea580c] to-[#e5deb9]" />
        <p className="text-lg text-[#424242] max-w-xl mx-auto leading-relaxed">
          Join our growing team and be part of a dynamic, innovative
          organization that values talent and promotes growth.
        </p>
      </div>
      <div className="bg-[#27292e] p-10 rounded-2xl shadow-lg border border-[#ede9db]">
        <h3 className="text-2xl font-semibold text-[#fdfaf5] mb-8 tracking-wide">
          Apply Now
        </h3>
        <form className="flex flex-col gap-7">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label className="block text-[#f0e8db] font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                className="w-full px-5 py-4 border border-[#e3e0db] bg-[#fdfaf5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f0e8db] transition text-base text-[#424242]"
              />
            </div>
            <div>
              <label className="block text-[#f0e8db] font-medium mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                className="w-full px-5 py-4 border border-[#e3e0db] bg-[#fdfaf5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f0e8db] transition text-base text-[#424242]"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label className="block text-[#f0e8db] font-medium mb-2">
                LinkedIn URL
              </label>
              <input
                type="url"
                className="w-full px-5 py-4 border border-[#e3e0db] bg-[#fdfaf5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f0e8db] transition text-base text-[#424242]"
              />
            </div>
            <div>
              <label className="block text-[#f0e8db] font-medium mb-2">
                Website Link (if any)
              </label>
              <input
                type="url"
                className="w-full px-5 py-4 border border-[#e3e0db] bg-[#fdfaf5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f0e8db] transition text-base text-[#424242]"
              />
            </div>
          </div>
          <div>
            <label className="block text-[#f0e8db] font-medium mb-2">
              Visa Status
            </label>
            <select className="w-full px-5 py-4 border border-[#e3e0db] bg-[#fdfaf5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f0e8db] transition text-base appearance-none text-[#424242]">
              <option>Valid visa</option>
              <option>Transfer soon</option>
              <option>Outside country</option>
            </select>
          </div>
          <div>
            <label className="block text-[#f0e8db] font-medium mb-2">
              Upload CV (PDF)
            </label>
            <div className="w-full px-5 py-8 border-2 border-dashed border-[#e3e0db] bg-[#fdfaf5] rounded-xl text-[#424242]/50 text-center cursor-pointer hover:border-[#f0e8db] transition">
              Drag and drop your CV here, or click to browse
            </div>
          </div>
          <button
            type="submit"
            className="mt-2 bg-[#ea580c]/80 text-white px-7 py-3 rounded-lg font-semibold tracking-wide text-lg shadow hover:bg-[#ea580c]/70 transition"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  </section>
);

export default Careers;
