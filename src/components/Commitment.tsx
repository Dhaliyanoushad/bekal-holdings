import React from "react";

const ReviewHero = () => (
  <section className="relative w-full min-h-[480px] flex items-center justify-center overflow-hidden">
    {/* Background image */}
    <img
      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fadmin.expatica.com%2Fsa%2Fwp-content%2Fuploads%2Fsites%2F14%2F2023%2F11%2Fsaudi-arabia-culture-1536x1024.jpg&f=1&nofb=1&ipt=814717dede03bede0dc51633cd0c9db4544c53442753e31ad020ead2630c30fa"
      alt="Client Review Background"
      className="absolute inset-0 w-full h-full object-cover z-0"
    />
    {/* Black overlay */}
    <div className="absolute inset-0 bg-black/85 z-10" />
    {/* Centered content */}
    <div className="relative z-20 w-full max-w-5xl px-6 py-20 mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 tracking-wide leading-tight drop-shadow-xl">
        Commitment to
        <span className="italic text-[#e2c178]">Innovation </span>
        and <span className="italic text-[#e2c178]">Growth</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        <div className="bg-white/10 rounded-xl p-7">
          <p className="text-lg text-white leading-relaxed font-light">
            As a forward-thinking conglomerate, we are constantly evolving to
            meet the changing demands of the market. Our vision is to align with
            the market dynamics of the UAE and Kingdom of Saudi Arabia, and we
            are expanding our capabilities through upcoming factory facilities
            to support increased production capacity and supply chain
            efficiency.
          </p>
        </div>
        <div className="bg-white/10 rounded-xl p-7">
          <p className="text-lg text-white leading-relaxed font-light">
            At Bekal International Holding, we believe in building enduring
            partnerships and delivering superior solutions. Our diversified
            portfolio and cross-sector expertise position us as a trusted leader
            across industries, and our commitment to operational excellence
            drives us to innovate, expand, and set new benchmarks for quality
            and service.
          </p>
        </div>
        <div className="bg-white/10 rounded-xl p-7">
          <p className="text-lg text-white leading-relaxed font-light">
            As we continue to grow, we remain dedicated to exploring new
            investment opportunities, expanding into emerging sectors, and
            building reputed brands under the Bekal name. Our leadership team’s
            strategic vision ensures that Bekal International Holding remains at
            the forefront of market innovation and global business expansion.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default ReviewHero;
