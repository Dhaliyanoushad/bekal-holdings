const companies = [
  {
    title: "Bekal Restaurant",
    desc: "Offering multi-cuisine fine dining and fast-food experiences, specializing in Indo-Chinese, North Indian, and South Indian dishes.",
  },
  {
    title: "Bekal Events & Catering",
    desc: "Providing comprehensive event solutions, from corporate functions to private gatherings, supported by our expert culinary team.",
  },
  {
    title: "Bekal Baker's",
    desc: "Delivering premium bakery and dessert supplies, including B2B production and distribution to cafes, corporates, and retail stores.",
  },
  {
    title: "Bekal Constructions",
    desc: "Specializing in construction and MEP works, delivering turnkey solutions with a focus on quality craftsmanship and efficiency.",
  },
  {
    title: "Bekal Interiors",
    desc: "Designing and executing interior fit-outs for commercial, residential, and hospitality spaces, combining innovation with functionality.",
  },
  {
    title: "Bekal IT Solutions",
    desc: "Offering cutting-edge technology services, including business automation, software implementation, and custom IT solutions.",
  },
  {
    title: "Bekal Sports & Services",
    desc: "Managing sports industry operations, including the supply of sports equipment to MNCs and the setup of golf courses, tennis courts, and padel courts.",
  },
  {
    title: "Bekal Facility Management",
    desc: "Delivering comprehensive property maintenance and facility management solutions, ensuring seamless operations for properties.",
  },
  {
    title: "Fresh Bites Restaurant",
    desc: "A vibrant dining brand located in Dubai, offering a modern culinary experience with a focus on fresh ingredients and exceptional flavors.",
  },
];

const Companies = () => (
  <section id="companies" className="py-16 bg-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-blue-900 mb-2">Our Companies</h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
        <p className="text-lg text-gray-600">
          Our extensive portfolio reflects our ability to adapt to market
          dynamics and meet the evolving needs of our clients.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {companies.map((c) => (
          <div
            key={c.title}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="h-4 bg-blue-700"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                {c.title}
              </h3>
              <p className="text-gray-600">{c.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
export default Companies;
