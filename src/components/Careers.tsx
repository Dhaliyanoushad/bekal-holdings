const Careers = () => (
  <section id="careers" className="py-16 bg-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-blue-900 mb-2">Careers</h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Join our growing team and be part of a dynamic, innovative
          organization that values talent and promotes growth.
        </p>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-blue-900 mb-6">Apply Now</h3>
        <form className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Phone Number</label>
              <input
                type="tel"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-2">LinkedIn URL</label>
              <input
                type="url"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">
                Website Link (if any)
              </label>
              <input
                type="url"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Visa Status</label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Valid visa</option>
              <option>Transfer soon</option>
              <option>Outside country</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Upload CV (PDF)</label>
            <div className="w-full px-4 py-6 border border-dashed border-gray-300 rounded-md text-center">
              <p className="text-gray-500">
                Drag and drop your CV here, or click to browse
              </p>
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-700 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-800 transition duration-300"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  </section>
);
export default Careers;
