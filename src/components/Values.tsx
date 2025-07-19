import React from "react";

const Values = () => {
  return (
    <section id="values" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-2">Core Values</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-700">
              To become a leading global conglomerate by building and acquiring
              reputed brands across diverse industries. We strive to deliver
              innovative solutions, exceptional customer experiences, and
              high-quality services, while actively seeking strategic investment
              opportunities to drive sustainable growth and expand our market
              presence.
            </p>
          </div>
          <div className="bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700">
              To build, acquire, and nurture leading brands across multiple
              sectors—focusing on hospitality, sports equipment, construction,
              and beyond—by embracing innovation, exploring new investment
              opportunities, and delivering world-class products and services
              with a commitment to quality, integrity, and customer
              satisfaction.
            </p>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <div className="bg-blue-100 w-16 h-16 flex items-center justify-center mx-auto rounded-full mb-4">
              <div className="text-2xl font-bold text-blue-900">1</div>
            </div>
            <h4 className="text-xl font-semibold text-blue-900 mb-2">
              Integrity
            </h4>
            <p className="text-gray-600">
              Conducting business with honesty, transparency, and
              accountability.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <div className="bg-blue-100 w-16 h-16 flex items-center justify-center mx-auto rounded-full mb-4">
              <div className="text-2xl font-bold text-blue-900">2</div>
            </div>
            <h4 className="text-xl font-semibold text-blue-900 mb-2">
              Innovation
            </h4>
            <p className="text-gray-600">
              Constantly evolving with new ideas and culinary trends.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <div className="bg-blue-100 w-16 h-16 flex items-center justify-center mx-auto rounded-full mb-4">
              <div className="text-2xl font-bold text-blue-900">3</div>
            </div>
            <h4 className="text-xl font-semibold text-blue-900 mb-2">
              Excellence
            </h4>
            <p className="text-gray-600">
              Delivering exceptional services that exceed expectations.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow text-center">
            <div className="bg-blue-100 w-16 h-16 flex items-center justify-center mx-auto rounded-full mb-4">
              <div className="text-2xl font-bold text-blue-900">4</div>
            </div>
            <h4 className="text-xl font-semibold text-blue-900 mb-2">
              Sustainability
            </h4>
            <p className="text-gray-600">
              Implementing responsible practices to positively impact the
              environment and communities we serve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
