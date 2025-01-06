const Promotional = () => {
    return (
      <div className="bg-gradient-to-r  py-16 my-20 w-4/5 mx-auto">
        <div className="w-4/5 mx-auto text-center ">
          {/* Heading and Subheading */}
          <h2 className="text-4xl font-bold mb-4">
            Join the Movement, Make a Difference!
          </h2>
          <p className="text-lg mb-8">
            Discover impactful campaigns and contribute to causes that matter. 
            Together, we can create lasting change.
          </p>
  
          {/* Call to Action */}
          <div className="flex justify-center gap-6">
            <a
              href="/campaigns"
              className="bg-white text-green-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg shadow-lg transition-all"
            >
              Explore Campaigns
            </a>
            <a
              href="/campaigns"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all"
            >
              Start a Campaign
            </a>
          </div>
        </div>
  
        {/* Decorative Images */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <img
            src="https://i.ibb.co.com/L183j7p/download.jpg"
            alt="Community Impact"
            className="w-full h-40 object-cover rounded-lg shadow-md"
          />
          <img
            src="https://i.ibb.co.com/rt2tK9h/1686293238133.jpg"
            alt="Environmental Campaign"
            className="w-full h-40 object-cover rounded-lg shadow-md"
          />
          <img
            src="https://i.ibb.co.com/KDHZ2Qg/1706288702560.jpg"
            alt="Education Support"
            className="w-full h-40 object-cover rounded-lg shadow-md"
          />
          <img
            src="https://i.ibb.co.com/w006Thm/marketing-campaign-1024x683.webp"
            alt="Healthcare Aid"
            className="w-full h-40 object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    );
  };
  
  export default Promotional;
  