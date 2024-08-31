// src/components/Header.js
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { contexApi } from "./Context/ContexApi";

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
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-3xl font-bold text-blue-600">
          Islamia School <br />
          <span>Mohlidih</span>
        </h1>

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
            <li>
              <Link to="/" className="text-gray-800 hover:text-blue-600">
                Home
              </Link>
            </li>
            <li className="relative">
              <button
                className="text-gray-800 hover:text-blue-600 focus:outline-none"
                onClick={handleDropdownToggle}
              >
                About
              </button>
              {isDropdownOpen && (
                <ul className="absolute bg-white shadow-lg rounded-lg py-2 mt-2">
                  <li>
                    <Link
                      to="/about"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      History
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#mission"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      Mission & Vision
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link
                to="/courses"
                className="text-gray-800 hover:text-blue-600"
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                to="/admission"
                className="text-gray-800 hover:text-blue-600"
              >
                Admissions
              </Link>
            </li>
            <li>
              <Link
                to="/events"
                className="text-gray-800 hover:text-blue-600"
              >
                Events
              </Link>
            </li>
            <li>
              <Link to="/result" className="text-gray-800 hover:text-blue-600">
                Results
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                className="text-gray-800 hover:text-blue-600"
              >
                Contact
              </Link>
            </li>
            {console.log(token)}
            {!token ? (
              <>
                <li>
                  <Link
                    to="/admin"
                    className="text-gray-800 hover:text-blue-600"
                  >
                    Admin
                  </Link>
                </li>
                <li onClick={handleLogout}>
                  <Link to="" className="text-gray-800 hover:text-blue-600">
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <Link to="/login" className="text-gray-800 hover:text-blue-600">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
