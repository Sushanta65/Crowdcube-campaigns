const CampaignCategories = () => {
    const categories = [
      {
        id: 1,
        name: "Health",
        description: "Support medical treatments, emergency surgeries, and health care needs.",
        image: "https://i.ibb.co.com/VScjqv1/download.jpg",
      },
      {
        id: 2,
        name: "Education",
        description: "Help fund education initiatives and scholarships for underprivileged students.",
        image: "https://i.ibb.co.com/d4mqqfs/image.png",
      },
      {
        id: 3,
        name: "Environment",
        description: "Contribute to campaigns focusing on environmental conservation.",
        image: "https://i.ibb.co.com/ZWCQwsD/images.jpg",
      },
      {
        id: 4,
        name: "Community",
        description: "Empower communities by supporting local initiatives and events.",
        image: "https://i.ibb.co.com/r6HVXDp/images.jpg",
      },
    ];
  
    return (
      <div className="bg-gray-50 dark:bg-gray-800 py-12">
        <div className="w-4/5 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Explore Campaign Categories</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Discover campaigns by categories and support the causes that matter to you.
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <div
                key={category.id}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-32 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default CampaignCategories;
  