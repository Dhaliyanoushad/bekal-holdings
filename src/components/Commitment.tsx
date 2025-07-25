import React from "react";

const MissionSection = () => (
  <section
    className="w-full min-h-[320px] bg-cream-beige flex flex-row-reverse scroll-mt-20"
    id="about"
  >
    {/* Left Text */}
    <div className="flex-1 flex items-center justify-center px-8 py-16 text-balance">
      <div className="max-w-md">
        <h2 className="text-heading-sm sm:text-heading font-bold  text-deep-navy mb-4 tracking-wide leading-tight">
          Commitment to
          <span className="text-secondary-orange  "> Innovation </span> and
          <span className="text-secondary-orange "> Growth </span>
        </h2>{" "}
        <p className="text-description text-dark-gray max-w-2xl leading-relaxed font-medium mb-3">
          As a forward-thinking conglomerate, we are constantly evolving to meet
          the changing demands of the market. Our vision is to align with the
          market dynamics of the UAE and Kingdom of Saudi Arabia, and we are
          expanding our capabilities through upcoming factory facilities to
          support increased production capacity and supply chain efficiency.
        </p>
        <p className="text-description text-dark-gray max-w-2xl leading-relaxed font-medium mb-3">
          At Bekal International Holding, we believe in building enduring
          partnerships and delivering superior solutions. Our diversified
          portfolio and cross-sector expertise position us as a trusted leader
          across industries, and our commitment to operational excellence drives
          us to innovate, expand, and set new benchmarks for quality and
          service.
        </p>
        <p className="text-description text-dark-gray max-w-2xl leading-relaxed font-medium mb-3">
          As we continue to grow, we remain dedicated to exploring new
          investment opportunities, expanding into emerging sectors, and
          building reputed brands under the Bekal name. Our leadership team’s
          strategic vision ensures that Bekal International Holding remains at
          the forefront of market innovation and global business expansion.
        </p>
      </div>
    </div>
    {/* Right Image */}
    <div className="flex-1 min-h-[260px] md:block hidden">
      <img
        src="/images/6.jpg"
        alt="Saudi Landscape"
        className="w-full h-full object-cover"
        style={{ minHeight: 260 }}
      />
    </div>
  </section>
);

export default MissionSection;
