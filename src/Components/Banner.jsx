import React from "react";

const Banner = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen"
      style={{
        backgroundImage:
          "url(https://scontent.fccu19-1.fna.fbcdn.net/v/t39.30808-6/453851328_6591878447603473_8678434455928664172_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0b6b33&_nc_ohc=ZEmO8GT3lZwQ7kNvgH7ekid&_nc_ht=scontent.fccu19-1.fna&oh=00_AYAtjXk5o2M3nP7MiQoxG2EJa-elcwEUpSMb1yhbLi4ODw&oe=66D481C4)",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative container mx-auto px-6 flex flex-col justify-center items-center text-white h-full">
        <h1 className="text-5xl font-bold mb-4">Welcome to Islamia School</h1>
        <p className="text-lg mb-8">A place where learning meets excellence.</p>
        <a
          href="#about"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Banner;
