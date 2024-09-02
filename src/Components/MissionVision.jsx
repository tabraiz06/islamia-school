import React from "react";

// Import images from the assets folder
import founderImage from "../assets/img8.jpg";
import schoolPastImage1 from "../assets/img6.jpg";
import schoolPastImage2 from "../assets/img8.jpg";

const MissionVision = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-600">
            Our Mission & Vision
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Established in 1989, Islamia School in Mohlidih has been the beacon
            of education and enlightenment in a village that had no other
            school. Our commitment is to foster a nurturing environment where
            every child can achieve their full potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="flex flex-col justify-center items-center">
            <img
              src={founderImage}
              alt="Founder of Islamia School"
              className="w-2/3 rounded-lg shadow-md mb-4"
            />
            <h3 className="text-2xl font-bold text-blue-600">Our Founder</h3>
            <p className="mt-2 text-gray-600">
              Our founder, a visionary educator, saw the need for a school in
              Mohlidih, a small village where there was no access to quality
              education. His dream was to create a place where children could
              learn, grow, and build a brighter future for themselves and their
              community.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              src={schoolPastImage1}
              alt="Islamia School History"
              className="w-2/3 rounded-lg shadow-md mb-4"
            />
            <img
              src={schoolPastImage2}
              alt="Islamia School History"
              className="w-2/3 rounded-lg shadow-md mb-4"
            />
            <h3 className="text-2xl font-bold text-blue-600">
              A Journey of Excellence
            </h3>
            <p className="mt-2 text-gray-600">
              Since its inception, Islamia School has been dedicated to
              providing a holistic education that balances academic excellence
              with character building. Over the years, the school has grown,
              transforming the educational landscape of Mohlidih and beyond.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-blue-600">Our Mission</h3>
            <p className="mt-4 text-gray-600">
              Our mission is to provide an inclusive learning environment that
              inspires every student to reach their highest potential. We are
              committed to fostering a love of learning, encouraging critical
              thinking, and nurturing leadership qualities that empower our
              students to make a positive impact in their communities.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-blue-600">Our Vision</h3>
            <p className="mt-4 text-gray-600">
              Our vision is to be a leading educational institution where young
              minds are shaped to become future-ready, responsible citizens of
              the world. We envision a school that not only imparts knowledge
              but also instills values, preparing our students to excel in all
              facets of life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
