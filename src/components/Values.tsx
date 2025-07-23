import React from "react";

const Values = () => {
  return (
    <section id="values" className="py-20 bg-[#27292e] text-[#2a2a2a]">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#f0e8db] tracking-wide">
            Core Values
          </h2>
          <div className="w-16 h-1 mx-auto bg-[#ea580c] mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Vision */}
          <div className="bg-[#fdfaf5] p-10 rounded-2xl border border-[#f1e9db] shadow-sm transition hover:shadow-md">
            <h3 className="text-2xl font-semibold text-[#181b22] mb-4">
              Our Vision
            </h3>
            <p className="text-[#424242p] leading-relaxed">
              To become a leading global conglomerate by building and acquiring
              reputed brands across diverse industries. We strive to deliver
              innovative solutions, exceptional customer experiences, and
              high-quality services, while actively seeking strategic investment
              opportunities to drive sustainable growth and expand our market
              presence.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-[#fdfaf5] p-10 rounded-2xl border border-[#f1e9db] shadow-sm transition hover:shadow-md">
            <h3 className="text-2xl font-semibold text-[#181b22] mb-4">
              Our Mission
            </h3>
            <p className="text-[#424242] leading-relaxed">
              To build, acquire, and nurture leading brands across multiple
              sectors—focusing on hospitality, sports equipment, construction,
              and beyond—by embracing innovation and delivering world-class
              products and services with a commitment to quality, integrity, and
              customer satisfaction.
            </p>
          </div>
        </div>

        {/* Core Value Items */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
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
          ].map((item, index) => (
            <div
              key={item.title}
              className="bg-[#fdfaf5] p-8 rounded-xl border border-[#f1e9db] shadow-sm hover:shadow-md transition text-center"
            >
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full border-2 border-[#ea580c] text-[#ea580c] text-xl font-bold mb-4">
                {index + 1}
              </div>
              <h4 className="text-xl font-semibold mb-2 text-[#181b22]">
                {item.title}
              </h4>
              <p className="text-[#424242] text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
