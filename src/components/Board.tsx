import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "react-feather";

const Board = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div>
      <section id="board" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-2">
              Board of Directors
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          </div>
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div
                onClick={() => toggleAccordion(0)}
                className="flex justify-between items-center cursor-pointer"
              >
                <h3 className="text-2xl font-bold text-blue-900">
                  Usman K. – Chairman and Founder
                </h3>
                {activeAccordion === 0 ? <ChevronUp /> : <ChevronDown />}
              </div>
              {activeAccordion === 0 && (
                <div className="mt-4 text-gray-700">
                  <p className="mb-4">
                    Usman K., the visionary founder and chairman of Bekal
                    International Holding Company, has been the driving force
                    behind the company's growth and diversification since its
                    inception in 1981. With over four decades of entrepreneurial
                    expertise, he has transformed Bekal from a modest business
                    venture into a multi-industry conglomerate operating across
                    Saudi Arabia (KSA), United Arab Emirates (UAE), and India.
                  </p>
                  <p className="mb-4">
                    A pioneer in business diversification, Usman K. recognized
                    early on the need to expand beyond a single industry. Under
                    his leadership, Bekal International Holding has evolved to
                    encompass a broad portfolio including hospitality,
                    construction, MEP works, interiors and fit-outs, IT
                    solutions, sports services, facility management, and more.
                  </p>
                  <p>
                    With a focus on legacy and sustainability, Usman K. remains
                    dedicated to mentoring the next generation of leaders while
                    ensuring Bekal continues to be a trailblazer in new sectors
                    and investment opportunities.
                  </p>
                </div>
              )}
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div
                onClick={() => toggleAccordion(1)}
                className="flex justify-between items-center cursor-pointer"
              >
                <h3 className="text-2xl font-bold text-blue-900">
                  Firdous bin Usman – Director
                </h3>
                {activeAccordion === 1 ? <ChevronUp /> : <ChevronDown />}
              </div>
              {activeAccordion === 1 && (
                <div className="mt-4 text-gray-700">
                  <p className="mb-4">
                    A key pillar of Bekal International Holding Company, Firdous
                    bin Usman plays a strategic leadership role in shaping the
                    company's vision and driving long-term growth. With decades
                    of experience in business development, operations, and brand
                    strategy, he has been instrumental in expanding Bekal's
                    footprint across hospitality, sports equipment,
                    construction, and beyond.
                  </p>
                  <p>
                    His visionary approach and decision-making directly
                    influence major investments and new business ventures,
                    ensuring Bekal remains at the forefront of innovation and
                    excellence. Firdous also leads the company's efforts in
                    exploring new sectors and acquiring reputed brands,
                    reinforcing Bekal's ambition to become a global
                    conglomerate.
                  </p>
                </div>
              )}
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div
                onClick={() => toggleAccordion(2)}
                className="flex justify-between items-center cursor-pointer"
              >
                <h3 className="text-2xl font-bold text-blue-900">
                  Shahal Usman – Director
                </h3>
                {activeAccordion === 2 ? <ChevronUp /> : <ChevronDown />}
              </div>
              {activeAccordion === 2 && (
                <div className="mt-4 text-gray-700">
                  <p className="mb-4">
                    As the driving force behind company diversification, Shahal
                    Usman leads Bekal International Holding Company's expansion
                    into catering and event services, leveraging the expertise
                    and support of the company's renowned restaurant brands and
                    dedicated team. His strategic vision focuses on delivering
                    exceptional culinary experiences for large-scale events,
                    corporate functions, and private gatherings.
                  </p>
                  <p>
                    With a deep understanding of market trends and customer
                    needs, Shahal plays a crucial role in identifying new
                    opportunities and building innovative service models. His
                    leadership ensures that Bekal continues to broaden its
                    offerings, reinforcing the company's position as a leader in
                    the hospitality sector while driving growth into new and
                    emerging markets.
                  </p>
                </div>
              )}
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div
                onClick={() => toggleAccordion(3)}
                className="flex justify-between items-center cursor-pointer"
              >
                <h3 className="text-2xl font-bold text-blue-900">
                  Abaan Usman – Director
                </h3>
                {activeAccordion === 3 ? <ChevronUp /> : <ChevronDown />}
              </div>
              {activeAccordion === 3 && (
                <div className="mt-4 text-gray-700">
                  <p className="mb-4">
                    As the head of sports industry operations, Abaan Usman leads
                    Bekal International Holding Company's efforts in supplying
                    premium sports equipment and delivering turnkey solutions
                    for MNCs, compound accommodations, and luxury sports
                    facilities. His expertise extends to designing and setting
                    up high-quality golf courses, tennis courts, and padel
                    courts, ensuring exceptional standards and customer
                    satisfaction.
                  </p>
                  <p>
                    With a commitment to quality and innovation, Abaan drives
                    the expansion of Bekal's sports division, offering
                    customized solutions to meet the diverse needs of clients.
                    His customer-first approach and operational excellence
                    continue to strengthen Bekal's reputation as a trusted
                    partner for comprehensive sports facility solutions.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Board;
