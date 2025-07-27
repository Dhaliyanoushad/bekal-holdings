import React from "react";

const coreValues = [
  {
    title: "Integrity",
    desc: "Conducting business with honesty, transparency, and accountability.",
  },
  {
    title: "Innovation",
    desc: "Constantly evolving with new ideas and emerging trends.",
  },
  {
    title: "Excellence",
    desc: "Delivering exceptional services that exceed expectations.",
  },
  {
    title: "Sustainability",
    desc: "Implementing responsible business practices that positively impact the world.",
  },
];

const ValueCard = ({
  number,
  title,
  desc,
}: {
  number: number;
  title: string;
  desc: string;
}) => (
  <div className="bg-milk-linen p-8 shadow-sm hover:shadow-md transition text-center flex flex-col items-center">
    <div className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-primary-orange text-primary-orange text-xl font-bold mb-4">
      {number}
    </div>
    <h4 className="font-semibold mb-2 text-deep-navy text-base sm:text-lg lg:text-xl">
      {title}
    </h4>
    <p className="text-dark-gray text-sm lg:text-base">{desc}</p>
  </div>
);

const InfoPanel = ({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) => (
  <div className="bg-milk-linen p-8 sm:p-10 shadow-sm hover:shadow-md transition">
    <h3 className="font-semibold text-deep-navy text-lg sm:text-xl mb-4">
      {heading}
    </h3>
    <p className="text-dark-gray leading-relaxed text-base">{children}</p>
  </div>
);

const Values = () => (
  <section id="values" className="py-16 lg:py-24 bg-off-white scroll-mt-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-20">
      <header className="text-center mb-14">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-deep-navy tracking-wide mb-4">
          Core Values
        </h2>
        <div className="w-16 h-1 mx-auto bg-primary-orange rounded-full" />
      </header>

      {/* Vision & Mission Panels */}
      <div className="grid md:grid-cols-2 gap-10">
        <InfoPanel heading="Our Vision">
          To become a leading global conglomerate by building and acquiring
          reputed brands across diverse industries. We strive to deliver
          innovative solutions, exceptional customer experiences, and
          high-quality services, while actively seeking strategic investment
          opportunities to drive sustainable growth and expand our market
          presence.
        </InfoPanel>
        <InfoPanel heading="Our Mission">
          To build, acquire, and nurture leading brands across multiple
          sectors—focusing on hospitality, sports equipment, construction, and
          beyond—by embracing innovation and delivering world-class products and
          services with a commitment to quality, integrity, and customer
          satisfaction.
        </InfoPanel>
      </div>

      {/* Core Values Cards */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {coreValues.map((item, i) => (
          <ValueCard
            key={item.title}
            number={i + 1}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Values;
