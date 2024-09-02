import React from "react";

// Import your image from the assets folder
import developerImage from "../assets/tabraiz.jpg";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        {/* Top Section: School Info and Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* School Info */}
          <div>
            <h3 className="text-2xl font-bold text-blue-400">Islamia School</h3>
            <p className="mt-4 text-gray-400">
              Mohlidih, established in 1989, is committed to providing quality
              education in a nurturing environment.
            </p>
            <p className="mt-2 text-gray-400">
              <strong>Address:</strong> Mohlidih Village, XYZ District, ABC
              State
            </p>
            <p className="text-gray-400">
              <strong>Phone:</strong> +91-123-456-7890
            </p>
            <p className="text-gray-400">
              <strong>Email:</strong> contact@islamiaschool.com
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold text-blue-400">Quick Links</h3>
            <ul className="mt-4">
              <li className="mt-2">
                <a href="/" className="text-gray-400 hover:text-blue-300">
                  Home
                </a>
              </li>
              <li className="mt-2">
                <a href="/about" className="text-gray-400 hover:text-blue-300">
                  About Us
                </a>
              </li>
              <li className="mt-2">
                <a
                  href="/courses"
                  className="text-gray-400 hover:text-blue-300"
                >
                  Courses
                </a>
              </li>
              <li className="mt-2">
                <a
                  href="/admissions"
                  className="text-gray-400 hover:text-blue-300"
                >
                  Admissions
                </a>
              </li>
              <li className="mt-2">
                <a
                  href="/contact"
                  className="text-gray-400 hover:text-blue-300"
                >
                  Contact Us
                </a>
              </li>
              <li className="mt-2">
                <a href="/admin" className="text-gray-400 hover:text-blue-300">
                  Admin
                </a>
              </li>
            </ul>
          </div>

          {/* Additional Info or Testimonials */}
          <div>
            <h3 className="text-2xl font-bold text-blue-400">Follow Us</h3>
            <p className="mt-4 text-gray-400">
              Stay connected through our social media platforms for the latest
              updates.
            </p>
            <div className="flex space-x-4 mt-4">
              {/* Add social media icons and links */}
              <a href="#" className="text-gray-400 hover:text-blue-300">
                <i className="fab fa-facebook"></i> Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-300">
                <i className="fab fa-twitter"></i> Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-300">
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section: Developer Info */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <p className="text-gray-400">
              © 2024 Islamia School. All rights reserved.
            </p>
          </div>
          <div className="flex items-center mt-4 md:mt-0">
            <img
              src={developerImage}
              alt="Developer"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <p className="text-gray-400">Developed by - MD Tabraiz</p>
              <a
              target="_blank"
                href="https://www.linkedin.com/in/muhammad-tabraiz-6335a214b/"
                className="text-blue-300 hover:text-blue-500"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
