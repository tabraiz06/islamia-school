// src/components/Testimonials.js
import React from "react";
import Slider from "react-slick";

// Import slick carousel CSS files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  // Sample testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Ali Miya",
      photo: "https://randomuser.me/api/portraits/men/1.jpg",
      className: "Class 10",
      testimonial:
        "Islamia School has provided me with the best education and values. The teachers are very supportive and the environment is great for learning.",
    },
    {
      id: 2,
      name: "Fatima Sheikh",
      photo: "https://randomuser.me/api/portraits/women/2.jpg",
      className: "Class 8",
      testimonial:
        "I love the way our teachers engage us in learning. The school has great facilities, and I have made wonderful friends here.",
    },
    {
      id: 3,
      name: "Ahmed Khan",
      photo: "https://randomuser.me/api/portraits/men/3.jpg",
      className: "Class 12",
      testimonial:
        "The school has prepared me well for my future endeavors. The focus on both academics and extracurricular activities is commendable.",
    },
  ];

  // Slick slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          What Our Students Say
        </h2>
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="p-4">
              <div className="bg-white shadow-md rounded-lg p-6 text-center">
                <div className="flex flex-col items-center mb-4">
                  <img
                    src={testimonial.photo}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mb-4"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {testimonial.className}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700">{testimonial.testimonial}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
