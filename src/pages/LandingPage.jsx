// src/pages/LandingPage.js
import React from "react";

import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Banner from "../Components/Banner";
import About from "../Components/About";
import Courses from "../Components/Courses";
import Events from "../Components/Events";
import Testimonials from "../Components/Testimonials";

const LandingPage = () => {
  return (
    <div>
      
      <Banner />
      <About />
      <Courses />
      <Events />
      <Testimonials />
     
    </div>
    // <div className="min-h-screen bg-gray-100 flex flex-col">
    //   {/* <Header /> */}

    //   <main className="flex-grow">
    //     <section className="hero bg-blue-600 text-white py-36 text-center">
    //       <div className="container mx-auto">
    //         <h2 className="text-5xl font-bold">Welcome to Our School</h2>
    //         <p className="mt-4 text-lg">
    //           Nurturing young minds to build a brighter future.
    //         </p>
    //         <a
    //           href="#courses"
    //           className="mt-8 inline-block bg-white text-blue-600 font-semibold py-2 px-4 rounded-full shadow-md hover:bg-gray-200"
    //         >
    //           Explore Courses
    //         </a>
    //       </div>
    //     </section>

    //     <section id="about" className="py-20 bg-white">
    //       <div className="container mx-auto text-center">
    //         <h2 className="text-3xl font-bold text-gray-800">About Us</h2>
    //         <p className="mt-4 text-gray-600">
    //           We are committed to providing quality education that prepares
    //           students for success in life.
    //         </p>
    //       </div>
    //     </section>

    //     <section id="courses" className="py-20 bg-gray-100">
    //       <div className="container mx-auto text-center">
    //         <h2 className="text-3xl font-bold text-gray-800">Our Courses</h2>
    //         <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    //           {/* Add course cards here */}
    //         </div>
    //       </div>
    //     </section>
    //   </main>

    //   {/* <Footer /> */}
    // </div>
  );
};

export default LandingPage;
