import React from "react";

const MissionSection = () => (
  <section
    className="w-full min-h-[320px] bg-cream-beige flex flex-row"
    id="about"
  >
    {/* Left Text */}
    <div className="flex-1 flex items-center justify-center px-8 py-16">
      <div className="max-w-md">
        <h2 className="text-heading-sm sm:text-heading font-bold text-deep-navy mb-4 tracking-wide leading-tight">
          About Us
        </h2>
        <p className="text-small sm:text-description text-dark-gray max-w-2xl leading-relaxed font-medium">
          Founded in 1981, Bekal International Holding Company is a leading
          diversified business group with operations across Kingdom of Saudi
          Arabia, United Arab Emirates, and India. With a legacy spanning over
          four decades, Bekal International Holding has grown into a
          multifaceted conglomerate, delivering innovative solutions across a
          range of industries while maintaining a commitment to quality,
          innovation, and customer satisfaction.
        </p>
        <a
          href="#contact"
          className="mt-7 inline-block px-6 py-2 bg-charcoal-blue text-white rounded-md font-semibold text-description hover:bg-deep-navy transition"
        >
          Contact Us
        </a>
      </div>
    </div>
    {/* Right Image */}
    <div className="flex-1 min-h-[260px] hidden md:block">
      <img
        src="/images/1.jpg"
        alt="Saudi Landscape"
        className="w-full h-full object-cover"
        style={{ minHeight: 260 }}
      />
    </div>
  </section>
);

export default MissionSection;
