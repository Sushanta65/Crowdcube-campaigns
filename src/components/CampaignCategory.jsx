const CampaignCategories = () => {
  const categories = [
    {
      id: 1,
      name: "Health",
      description: "Support medical treatments, emergency surgeries, and health care needs.",
      image: "https://i.ibb.co/VScjqv1/download.jpg",
    },
    {
      id: 2,
      name: "Education",
      description: "Help fund education initiatives and scholarships for underprivileged students.",
      image: "https://i.ibb.co/d4mqqfs/image.png",
    },
    {
      id: 3,
      name: "Environment",
      description: "Contribute to campaigns focusing on environmental conservation.",
      image: "https://i.ibb.co/ZWCQwsD/images.jpg",
    },
    {
      id: 4,
      name: "Community",
      description: "Empower communities by supporting local initiatives and events.",
      image: "https://i.ibb.co/r6HVXDp/images.jpg",
    },
  ];

  return (
    <div className=" dark:bg-green-900 pb-20 pt-10">
      <div className="w-4/5 mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-bold mb-4 text-green-700 dark:text-green-200">
          Explore Campaign Categories
        </h2>
        <p className="text-green-600 dark:text-green-300 mb-20">
          Discover campaigns by categories and support the causes that matter to you.
        </p>

        {/* Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative dark:bg-green-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden border border-green-100 dark:border-green-700"
            >
              {/* Category Image */}
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-40 object-cover rounded-t-lg"
              />

              {/* Category Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-green-800 dark:text-green-100 mb-2">
                  {category.name}
                </h3>
                <p className="text-sm text-green-700 dark:text-green-300">
                  {category.description}
                </p>
              </div>

              {/* Overlay Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-green-800 to-transparent opacity-0 hover:opacity-50 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CampaignCategories;
