import React from "react";

const MissionSection = () => (
  <section className="w-full min-h-[320px] bg-[#faf7ec] flex flex-col lg:flex-row">
    {/* Left Text */}
    <div className="flex-1 flex items-center justify-center px-8 py-16">
      <div className="max-w-md">
        <h2 className="text-5xl font-extrabold  text-[#1c2653] mb-4 tracking-wide leading-tight">
          About Us
        </h2>{" "}
        <p className="text-xl text-[#424242] max-w-2xl leading-relaxed font-medium">
          Founded in 1981, Bekal International Holding Company has grown into a
          multi-faceted conglomerate, delivering innovative solutions across a
          range of industries while maintaining a commitment to quality,
          innovation, and customer satisfaction.
        </p>
      </div>
    </div>
    {/* Left Side: About Us Content */}
    {/* <div className="flex-1 w-full">
      <h2 className="text-5xl font-extrabold  text-[#1c2653] mb-4 tracking-wide leading-tight">
        About Us
      </h2>
      <div className="w-24 h-1 bg-[#2160b4] mb-8" />
      <p className="text-2xl text-[#424242] max-w-2xl leading-relaxed font-medium">
        Founded in 1981, Bekal International Holding Company has grown into a
        multi-faceted conglomerate, delivering innovative solutions across a
        range of industries while maintaining a commitment to quality,
        innovation, and customer satisfaction.
      </p>
    </div> */}
    {/* Right Image */}
    <div className="flex-1 min-h-[260px]">
      <img
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.britannica.com%2F14%2F189714-050-0A674D18%2FKingdom-Centre-Riyadh-Saudi-Arabia.jpg&f=1&nofb=1&ipt=94a4c1c731aa6ffaeb97b4ee736e8e01ca214770fbf233cada03394988db569e"
        alt="Saudi Landscape"
        className="w-full h-full object-cover"
        style={{ minHeight: 260 }}
      />
    </div>
  </section>
);

export default MissionSection;
