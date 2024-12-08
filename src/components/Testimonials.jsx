import user1 from '../assets/user.jpg'
import user2 from '../assets/user2.jpg'

const Testimonials = () => {
    const testimonials = [
      {
        id: 1,
        name: "Rahim Akhtar",
        role: "Campaign Creator",
        feedback:
          "Crowdcube helped me reach my fundraising goal faster than I ever imagined. It’s a user-friendly platform, and the support is amazing!",
        image: 'https://i.ibb.co.com/JKBkR6H/user2.jpg',
      },
      {
        id: 2,
        name: "Sara Alam",
        role: "Donor",
        feedback:
          "I love how Crowdcube connects donors with meaningful causes. It’s easy to donate, and I can see the real impact of my contributions.",
        image: 'https://i.ibb.co.com/GMJHrY3/user.webp',
      },
    ];


  
    return (
      <div className="bg-gray-100 dark:bg-gray-900 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">What People Are Saying</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Hear from our campaign creators and donors about their experiences.
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                <p className="text-blue-500 text-sm">{testimonial.role}</p>
                <p className="text-gray-600 dark:text-gray-400 mt-4">
                  {testimonial.feedback}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Testimonials;
  