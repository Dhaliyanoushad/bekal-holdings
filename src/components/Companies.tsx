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
    title: "Bekal Baker’s",
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
    desc: "Managing sports industry operations, including the supply of sports equipment to MNCs and the setup of golf courses, tennis courts, and padel courts with an emphasis on quality and precision.",
  },
  {
    title: "Bekal Facility Management",
    desc: "Delivering comprehensive property maintenance and facility management solutions, ensuring seamless operations for commercial and residential properties.",
  },
  {
    title: "Fresh Bites Restaurant",
    desc: "Fresh Bites Restaurant, located in Dubai, is a vibrant dining brand under Bekal International Holding Company, offering a modern culinary experience with a focus on fresh ingredients and exceptional flavors.",
  },
];

const Companies = () => (
  <section id="companies" className="py-24 bg-[#f8f6ef] relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-8">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-extrabold text-[#1a213a] mb-4 tracking-tight">
          Our Portfolio Companies
        </h2>
        <div className="w-20 h-1 bg-[#baa35b] mx-auto mb-8 rounded-full" />
        <p className="text-lg text-[#807868] max-w-2xl mx-auto leading-relaxed">
          Our extensive portfolio reflects our ability to adapt to market
          dynamics and meet the evolving needs of our clients in the
          fast-changing economies of the UAE and Saudi Arabia. Companies under
          Bekal International Holding include:
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
        {companies.map((company, idx) => (
          <div
            key={company.title}
            className="flex flex-col justify-between h-full px-2"
          >
            <div className="flex flex-col gap-3">
              <span className="text-[#baa35b] text-base font-bold tracking-widest uppercase mb-2">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl md:text-2xl font-semibold text-[#23304d] mb-2">
                {company.title}
              </h3>
              <p className="text-base text-[#57534b] font-medium leading-relaxed">
                {company.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-28 h-1 bg-[#baa35b]/50 rounded-full mt-20 mx-auto" />
    </div>
  </section>
);

export default Companies;
