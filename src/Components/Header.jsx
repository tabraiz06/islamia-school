// src/components/Header.js
import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { contexApi } from "./Context/ContexApi";
import Logo from '../assets/islamia.gif'

const Header = () => {
  const navigate=useNavigate()
  const [token, setToken]= useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
const Token= sessionStorage.getItem('token')


useEffect(()=>{
  setToken(!token)
},[Token])

  // Timer state
  const [dropdownTimer, setDropdownTimer] = useState(null);
  const [mobileMenuTimer, setMobileMenuTimer] = useState(null);

  // Function to handle opening and closing the dropdown with auto-close
  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
    if (!isDropdownOpen) {
      startDropdownTimer();
    } else {
      clearDropdownTimer();
    }
  };

  const handleLogout=()=>{
    sessionStorage.removeItem('token')
    navigate('/')
  }

  // Function to handle opening and closing the mobile menu with auto-close
  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      startMobileMenuTimer();
    } else {
      clearMobileMenuTimer();
    }
  };

  // Start dropdown timer
  const startDropdownTimer = () => {
    clearDropdownTimer();
    const timer = setTimeout(() => setIsDropdownOpen(false), 3000);
    setDropdownTimer(timer);
  };

  // Start mobile menu timer
  const startMobileMenuTimer = () => {
    clearMobileMenuTimer();
    const timer = setTimeout(() => setIsMobileMenuOpen(false), 3000);
    setMobileMenuTimer(timer);
  };

  // Clear dropdown timer
  const clearDropdownTimer = () => {
    if (dropdownTimer) {
      clearTimeout(dropdownTimer);
      setDropdownTimer(null);
    }
  };

  // Clear mobile menu timer
  const clearMobileMenuTimer = () => {
    if (mobileMenuTimer) {
      clearTimeout(mobileMenuTimer);
      setMobileMenuTimer(null);
    }
  };

  // Cleanup timers on component unmount
  useEffect(() => {
    
    return () => {
      clearDropdownTimer();
      clearMobileMenuTimer();
    };
  }, []);

  return (
    <header className="bg-white shadow-md py-4 fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center ">
        <Link to={"/"}>
          <img src={Logo} alt="islami-school" className="w-[100px]" />
        </Link>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button
            onClick={handleMobileMenuToggle}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Main Navigation Menu */}
        <nav
          className={`md:flex items-center ${
            isMobileMenuOpen ? "block" : "hidden"
          } md:block`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 mt-4 md:mt-0">
            <li className="p-4 hover:bg-blue-300 rounded">
              <NavLink to="/" className="text-gray-800 hover:text-blue-600">
                Home
              </NavLink>
            </li>
            <li className="relative p-4 hover:bg-blue-300 rounded">
              <button
                className="text-gray-800 hover:text-blue-600 focus:outline-none"
                onClick={handleDropdownToggle}
              >
                About
              </button>
              {isDropdownOpen && (
                <ul className="absolute bg-white shadow-lg rounded-lg py-2 mt-2">
                  <li className="p-4 hover:bg-blue-300 rounded">
                    <NavLink
                      to="/about"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      History
                    </NavLink>
                  </li>
                  <li className="p-4 hover:bg-blue-300 rounded">
                    <NavLink
                      to="/mission-vision"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Mission & Vision
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>
            <li className="p-4 hover:bg-blue-300 rounded">
              <NavLink
                to="/courses"
                className="text-gray-800 hover:text-blue-600"
              >
                Courses
              </NavLink>
            </li>
            <li className="p-4 hover:bg-blue-300 rounded">
              <NavLink
                to="/admission"
                className="text-gray-800 hover:text-blue-600"
              >
                Admissions
              </NavLink>
            </li>
            <li className="p-4 hover:bg-blue-300 rounded">
              <NavLink
                to="/events"
                className="text-gray-800 hover:text-blue-600"
              >
                Events
              </NavLink>
            </li>
            <li className="p-4 hover:bg-blue-300 rounded">
              <NavLink
                to="/result"
                className="text-gray-800 hover:text-blue-600"
              >
                Results
              </NavLink>
            </li>
            <li className="p-4 hover:bg-blue-300 rounded">
              <NavLink
                to="/contact-us"
                className="text-gray-800 hover:text-blue-600"
              >
                Contact
              </NavLink>
            </li>
            <li className="p-4 hover:bg-blue-300 rounded">
              <NavLink
                to="/gallery"
                className="text-gray-800 hover:text-blue-600"
              >
                Gallery
              </NavLink>
            </li>

            {!token ? (
              <>
                <li className="p-4 hover:bg-blue-300 rounded">
                  <NavLink
                    to="/admin"
                    className="text-gray-800 hover:text-blue-600"
                  >
                    Admin
                  </NavLink>
                </li>

                <li
                  onClick={handleLogout}
                  className="p-4 hover:bg-red-500 rounded"
                >
                  <NavLink to="" className="text-gray-800 hover:text-blue-600">
                    Logout
                  </NavLink>
                </li>
              </>
            ) : (
              <li className="p-4 hover:bg-blue-600 rounded">
                <NavLink
                  to="/login"
                  className="text-gray-800 hover:text-blue-600"
                >
                  Login
                </NavLink>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
