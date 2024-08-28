
import React from "react";

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">About Us</h2>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 mb-8">
            <p className="text-lg leading-relaxed">
              Islamia School is dedicated to providing quality education to
              students from all backgrounds. Our mission is to foster a
              nurturing environment where students can excel academically,
              socially, and emotionally.
            </p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo aliquam perferendis, vero repellat dolores in qui laudantium animi dicta tenetur sit quidem eaque architecto cumque earum illum cum illo nemo consequatur ipsam! Sequi beatae, aperiam quae hic, est ut error placeat veniam voluptatibus architecto blanditiis facilis, eum saepe consectetur optio dolore exercitationem amet impedit repudiandae recusandae iure officia. Maxime ut minima minus quidem optio quaerat reprehenderit dolore. Assumenda omnis praesentium nam voluptates tenetur perferendis tempore quod nemo dolorum possimus non maxime, corporis consequuntur maiores doloribus adipisci perspiciatis eveniet quo nulla! Beatae culpa asperiores nesciunt enim, harum aspernatur rerum possimus tenetur veritatis, nostrum velit laborum corrupti tempore maxime quo reiciendis atque amet illum earum debitis aperiam unde ullam dolorem? Repellat, rerum doloremque quam pariatur eaque quis.</p>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src="https://scontent.fccu19-1.fna.fbcdn.net/v/t39.30808-6/453860889_6592134827577835_2211111754056990649_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0b6b33&_nc_ohc=WrZikpc3fFoQ7kNvgH1oseS&_nc_ht=scontent.fccu19-1.fna&oh=00_AYDa5rlCwRwnQ_dnU5iV-IG8UKvi3ilF7ncgHFmg39_W2g&oe=66D4806F"
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
