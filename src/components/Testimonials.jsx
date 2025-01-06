const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rahim Akhtar",
      role: "Campaign Creator",
      feedback:
        "Crowdcube helped me reach my fundraising goal faster than I ever imagined. It’s a user-friendly platform, and the support is amazing!",
      image: "https://i.ibb.co/JKBkR6H/user2.jpg",
    },
    {
      id: 2,
      name: "Sara Alam",
      role: "Donor",
      feedback:
        "I love how Crowdcube connects donors with meaningful causes. It’s easy to donate, and I can see the real impact of my contributions.",
      image: "https://i.ibb.co/GMJHrY3/user.webp",
    },
  ];

  return (
    <div className="bg-green-900 py-20">
      <div className="w-4/5 mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-gray-300  mb-4">
          What People Are Saying
        </h2>
        <p className="text-gray-300 dark:text-green-300 mb-8">
          Hear from our campaign creators and donors about their experiences.
        </p>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white dark:bg-green-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-green-100 dark:border-green-700"
            >
              {/* User Image */}
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-green-600"
              />

              {/* User Details */}
              <h3 className="text-xl font-semibold text-green-800 dark:text-green-100">
                {testimonial.name}
              </h3>
              <p className="text-green-700 dark:text-green-300 text-sm mb-4">
                {testimonial.role}
              </p>

              {/* User Feedback */}
              <p className="text-green-700 dark:text-green-200 text-sm italic">
                "{testimonial.feedback}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
