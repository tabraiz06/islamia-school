
import React from "react";
import img from '../assets/img1.jpeg'
const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-100 h-[96vh]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">About Us</h2>
        <div className="flex flex-wrap text-justify ">
          <div className="w-full md:w-1/2 mb-8 px-4">
            <p className="text-xl leading-relaxed">
              Islamia School is dedicated to providing quality education to
              students from all backgrounds. Our mission is to foster a
              nurturing environment where students can excel academically,
              socially, and emotionally.
            </p>
            <p className="text-xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo
              aliquam perferendis, vero repellat dolores in qui laudantium animi
              dicta tenetur sit quidem eaque architecto cumque earum illum cum
              illo nemo consequatur ipsam! Sequi beatae, aperiam quae hic, est
              ut error placeat veniam voluptatibus architecto blanditiis
              facilis, eum saepe consectetur optio dolore exercitationem amet
              impedit repudiandae recusandae iure officia. Maxime ut minima
              minus quidem optio quaerat reprehenderit dolore. Assumenda omnis
              praesentium nam voluptates tenetur perferendis tempore quod nemo
              dolorum possimus non maxime, corporis consequuntur maiores
              doloribus adipisci perspiciatis eveniet quo nulla! Beatae culpa
              asperiores nesciunt enim, harum aspernatur rerum possimus tenetur
              veritatis, nostrum velit laborum corrupti tempore maxime quo
              reiciendis atque amet illum earum debitis aperiam unde ullam
              dolorem? Repellat, rerum doloremque quam pariatur eaque quis.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src={img}
              alt="About Islamia School"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
