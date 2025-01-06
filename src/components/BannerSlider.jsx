import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Navigation ,Autoplay} from 'swiper/modules';
import { Link } from 'react-router-dom';

const BannerSlider = () => {
  
  
  

  const slides = [
    {
      id: 1,
      image: "https://i.ibb.co.com/bdwcf2g/fund-01.jpg",
      title: "Empower Change with Your Donation",
      description: "Support impactful campaigns and make a difference today.",
    },
    {
      id: 2,
      image: "https://i.ibb.co.com/WPRXDHX/fund-02.png",
      title: "Join Hands for a Better Tomorrow",
      description: "Every small contribution leads to a giant leap for those in need.",
    },
    {
      id: 3,
      image: "https://i.ibb.co.com/cNCc016/fund-03.jpg",
      title: "Spread Warmth & Care",
      description: "Your generosity can bring smiles and transform lives.",
    },
  ];

  return (
    <div className='-z-10'>
       <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        loop
        spaceBetween={30}
        slidesPerView={1}
        className="rounded-lg shadow-lg"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative w-full h-[600px] flex items-center justify-center bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="text-center text-white z-10">
                <h2 className="text-4xl md:text-5xl font-bold">{slide.title}</h2>
                <p className="mt-4 text-lg md:text-xl">{slide.description}</p>
                <Link to='/campaigns' className="mt-6 btn btn-primary px-6 py-2">
                  Learn More
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    
    
    </div>
  );
};

export default BannerSlider;