import React from "react";

const Commitment = () => {
  return (
    <section
      className="relative bg-gradient-to-br from-[#e8ded1] to-[#f8f5f0] py-24 overflow-hidden"
      id="commitment"
    >
      {/* Decorative top corner accents */}
      <div className="absolute left-0 top-0 w-64 h-64 bg-[#d5c095]/30 rounded-br-[6rem] z-0" />
      <div className="absolute right-0 bottom-0 w-72 h-40 bg-[#fff6de]/70 rounded-tl-full z-0" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-10 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#44452c] mb-4">
          Commitment to{" "}
          <span className="text-[#b49c62]">Innovation &amp; Growth</span>
        </h2>

        <p className="text-lg md:text-xl mb-6 mt-4 leading-loose text-[#594f3c] ">
          As a forward-thinking conglomerate, we are constantly evolving to meet
          the changing demands of the market. Our vision aligns with the dynamic
          economies of the UAE and Kingdom of Saudi Arabia, driving capacity
          expansion and supply chain efficiency through new factory facilities.
        </p>
        <p className="text-lg md:text-xl mb-6 leading-loose text-[#594f3c] ">
          At{" "}
          <span className="font-semibold text-[#887648]">
            Bekal International Holding
          </span>
          , we focus on lasting partnerships and delivering superior solutions.
          Our diverse portfolio and cross-sector expertise position us as a
          trusted leader, while operational excellence and innovation set
          benchmarks for quality and service.
        </p>
        <p className="text-lg md:text-xl leading-loose text-[#594f3c] ">
          As we grow, we continue exploring new opportunities, entering emerging
          sectors, and building reputed brands. Our leadership’s strategic
          vision keeps Bekal at the cutting edge of market innovation and global
          expansion.
        </p>
      </div>
    </section>
  );
};

export default Commitment;
