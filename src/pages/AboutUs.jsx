import fundingImg from '../assets/crowdfunding.jpg';

const AboutUs = () => {
  return (
    <div className="dark:bg-gray-900 mt-36 pb-10">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold dark:text-gray-100 text-green-600">
            About Us
          </h1>
          <p className="mt-4 text-gray-400">
            Empowering ideas, connecting communities, and making dreams come true.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src={fundingImg}
              alt="About Us"
              className="rounded-lg shadow-md"
            />
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-green-600 mb-4">
              Our Mission
            </h2>
            <p className="mb-6 text-gray-400 dark:text-gray-300">
              At Crowdcube, our mission is to provide a platform where innovative ideas
              meet the support they need to thrive. Whether it's helping people in
              need, funding creative projects, or supporting local businesses, we are
              here to make it happen.
            </p>

            <h2 className="text-2xl font-semibold text-green-600 mb-4">
              Why Choose Us?
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-400 dark:text-gray-300">
              <li>Transparent and secure platform for crowdfunding.</li>
              <li>Support for a wide range of campaigns and causes.</li>
              <li>Easy-to-use interface for both creators and donors.</li>
              <li>Dedicated support team to guide you through every step.</li>
              <li>Committed to fostering community-driven success.</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Join Our Journey
          </h2>
          <p className="mb-6 text-gray-400 dark:text-gray-300">
            Whether you're here to launch your campaign or support someone's dream,
            we welcome you to our community. Together, we can create a better future.
          </p>
          <button className="btn bg-green-600 text-white hover:bg-green-700 px-8 py-3 rounded-full transition duration-300">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
