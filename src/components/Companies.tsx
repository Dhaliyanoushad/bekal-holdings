import React from "react";

const companies = [
  {
    title: "Bekal Restaurant",
    desc: "Offering multi-cuisine fine dining and fast-food experiences, specializing in Indo-Chinese, North Indian, and South Indian dishes.",
  },
  {
    title: "Bekal Events & Catering",
    desc: "Providing comprehensive event solutions, from corporate functions to private gatherings, supported by our expert culinary team.",
  },
  {
    title: "Bekal Baker's",
    desc: "Delivering premium bakery and dessert supplies, including B2B production and distribution to cafes, corporates, and retail stores.",
  },
  {
    title: "Bekal Constructions",
    desc: "Specializing in construction and MEP works, delivering turnkey solutions with a focus on quality craftsmanship and efficiency.",
  },
  {
    title: "Bekal Interiors",
    desc: "Designing and executing interior fit-outs for commercial, residential, and hospitality spaces, combining innovation with functionality.",
  },
  {
    title: "Bekal IT Solutions",
    desc: "Offering cutting-edge technology services, including business automation, software implementation, and custom IT solutions.",
  },
  {
    title: "Bekal Sports & Services",
    desc: "Managing sports industry operations, including the supply of sports equipment and the setup of golf, tennis, and padel courts.",
  },
  {
    title: "Bekal Facility Management",
    desc: "Delivering comprehensive property maintenance and facility management solutions, ensuring seamless operations for properties.",
  },
  {
    title: "Fresh Bites Restaurant",
    desc: "A vibrant dining brand from Dubai, offering fresh, exciting dishes with a modern culinary experience.",
  },
];

const Companies = () => (
  <section
    id="companies"
    className="py-24 bg-gradient-to-br from-[#f9f6ee] to-[#f2ebe3]  text-[#19181e]"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-8">
      {/* Header */}
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-[#312752] tracking-tight mb-4">
          Our Companies
        </h2>
        <div className="w-28 h-[3px] bg-gradient-to-r from-[#e6c678] to-[#ba9972] rounded-full mb-5" />
        <p className="text-lg text-[#69605d] max-w-2xl text-center leading-7">
          Our extensive portfolio reflects our ability to adapt to market
          dynamics and meet the evolving needs of our clients in the
          fast-changing economies of the UAE and Saudi Arabia. Companies under
          Bekal International Holding include:
        </p>
      </div>
      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {companies.map((company, idx) => (
          <div
            key={company.title}
            className="relative overflow-hidden rounded-2xl shadow-[0_12px_36px_-12px_rgba(44,38,68,0.13)] border border-[#ece3d9] bg-white/90 transition transform hover:-translate-y-2 hover:shadow-[0_16px_48px_-8px_rgba(186,153,114,0.25)] group"
          >
            {/* Decorative gold bar accent */}
            <div className="absolute left-0 top-0 w-1.5 h-20 bg-gradient-to-b from-[#e6c678] to-[#dec49a] rounded-br-xl group-hover:from-[#ba9972] transition" />
            <div className="p-8 pl-9 h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-2 text-[#312752]">
                {company.title}
              </h3>
              <p className="text-[#554D46] text-base leading-relaxed tracking-wide">
                {company.desc}
              </p>
              <span className="mt-auto pt-6 block text-[#bf9631] text-xs tracking-widest font-semibold">
                {String(idx + 1).padStart(2, "0")}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Companies;
