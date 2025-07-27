"use client";

import type { Variants } from "framer-motion";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "react-feather";
import { motion, AnimatePresence } from "framer-motion";

const boardMembers = [
  {
    name: "Usman K.",
    title: "Chairman and Founder",
    bio: [
      "Usman K., the visionary founder and chairman of Bekal International Holding Company, has been the driving force behind the company’s growth and diversification since its inception in 1981. With over four decades of entrepreneurial expertise, he has transformed Bekal from a modest business venture into a multi-industry conglomerate operating across Saudi Arabia (KSA), United Arab Emirates (UAE), and India. His leadership is rooted in integrity, innovation, and a relentless pursuit of excellence, values that continue to guide the company today.",
      "A pioneer in business diversification, Usman K. recognized early on the need to expand beyond a single industry. Under his leadership, Bekal International Holding has evolved to encompass a broad portfolio including hospitality, construction, MEP works, interiors and fit-outs, IT solutions, sports services, facility management, and more. His ability to identify emerging market trends and capitalize on new opportunities has been instrumental in Bekal’s sustained growth and cross-border success.",
      "Usman K.’s strategic vision has also led to the establishment of iconic brands under the Bekal umbrella, including Bekal Restaurant, Bekal Events & Catering, and Bekal Baker’s, which have become synonymous with quality and innovation. His commitment to culinary excellence and customer satisfaction has positioned Bekal as a leader in the hospitality sector, offering a diverse range of fine dining, fast food, and event catering experiences.",
      "Beyond hospitality, his forward-thinking approach extends to the sports industry, where Bekal Sports & Services supplies premium sports equipment and specializes in the design and setup of golf courses, tennis courts, and padel courts. Under his stewardship, the company is preparing to launch state-of-the-art factory facilities to enhance production capabilities and meet the evolving market dynamics of the UAE and Saudi Arabia.",
      "With a focus on legacy and sustainability, Usman K. remains dedicated to mentoring the next generation of leaders while ensuring Bekal continues to be a trailblazer in new sectors and investment opportunities. His unwavering commitment to building a global conglomerate reflects his passion, perseverance, and entrepreneurial spirit, ensuring Bekal International Holding thrives for generations to come.",
    ],
  },
  {
    name: "Firdous bin Usman",
    title: "Director",
    bio: [
      "A key pillar of Bekal International Holding Company, Firdous bin Usman plays a strategic leadership role in shaping the company's vision and driving long-term growth. With decades of experience in business development, operations, and brand strategy, he has been instrumental in expanding Bekal's footprint across hospitality, sports equipment, construction, and beyond.",
      "His visionary approach and decision-making directly influence major investments and new business ventures, ensuring Bekal remains at the forefront of innovation and excellence. Firdous also leads the company's efforts in exploring new sectors and acquiring reputed brands, reinforcing Bekal's ambition to become a global conglomerate.",
    ],
  },
  {
    name: "Shahal Usman",
    title: "Director",
    bio: [
      "As the driving force behind company diversification, Shahal Usman leads Bekal International Holding Company's expansion into catering and event services, leveraging the expertise and support of the company's renowned restaurant brands and dedicated team. His strategic vision focuses on delivering exceptional culinary experiences for large-scale events, corporate functions, and private gatherings.",
      "With a deep understanding of market trends and customer needs, Shahal plays a crucial role in identifying new opportunities and building innovative service models. His leadership ensures that Bekal continues to broaden its offerings, reinforcing the company's position as a leader in the hospitality sector while driving growth into new and emerging markets.",
    ],
  },
  {
    name: "Abaan Usman",
    title: "Director",
    bio: [
      "As the head of sports industry operations, Abaan Usman leads Bekal International Holding Company's efforts in supplying premium sports equipment and delivering turnkey solutions for MNCs, compound accommodations, and luxury sports facilities. His expertise extends to designing and setting up high-quality golf courses, tennis courts, and padel courts, ensuring exceptional standards and customer satisfaction.",
      "With a commitment to quality and innovation, Abaan drives the expansion of Bekal's sports division, offering customized solutions to meet the diverse needs of clients. His customer-first approach and operational excellence continue to strengthen Bekal's reputation as a trusted partner for comprehensive sports facility solutions.",
    ],
  },
];

const accordionVariants: Variants = {
  open: {
    height: "auto",
    opacity: 1,
    transition: {
      height: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
      opacity: { duration: 0.25 },
    },
  },
  collapsed: {
    height: 0,
    opacity: 0,
    transition: {
      height: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
      opacity: { duration: 0.18 },
    },
  },
} as Variants;

const AccordionItem = ({
  member,
  isActive,
  onToggle,
}: {
  member: (typeof boardMembers)[0];
  isActive: boolean;
  onToggle: () => void;
}) => (
  <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg border border-milk-linen transition-all">
    <div
      onClick={onToggle}
      className="flex justify-between items-center cursor-pointer select-none"
    >
      <h3 className="text-description xs:text-body sm:text-xl sm:text-subheading font-bold text-black">
        {`${member.name} – ${member.title}`}
      </h3>
      {isActive ? (
        <ChevronUp color="var(--color-dark-gray)" />
      ) : (
        <ChevronDown color="var(--color-dark-gray)" />
      )}
    </div>

    <AnimatePresence initial={false}>
      {isActive && (
        <motion.div
          key="content"
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={accordionVariants}
          style={{ overflow: "hidden" }}
        >
          <div className="mt-5 text-dark-gray space-y-4">
            {member.bio.map((para, idx) => (
              <p
                key={idx}
                className="leading-relaxed text-small xs:text-description"
              >
                {para}
              </p>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const Board = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const handleToggle = (idx: number) =>
    setActiveIdx(idx === activeIdx ? null : idx);

  return (
    <section id="board" className="py-14 md:py-20 bg-milk-linen scroll-mt-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-14">
          <h2 className="text-heading-sm sm:text-heading font-bold text-black mb-2 tracking-tight">
            Board of Directors
          </h2>
          <div className="w-20 h-1 bg-primary-orange mx-auto mb-8 rounded-full" />
        </div>
        <div className="space-y-8">
          {boardMembers.map((member, idx) => (
            <AccordionItem
              key={member.name}
              member={member}
              isActive={activeIdx === idx}
              onToggle={() => handleToggle(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Board;
